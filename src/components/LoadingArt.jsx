import React, { useEffect, useState } from 'react';

export default function LoadingArt() {
  const [imgUrl, setImgUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchArt = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('https://api.waifu.pics/sfw/waifu');
      if (!res.ok) throw new Error('failed');
      const data = await res.json();
      setImgUrl(data?.url || '');
    } catch (e) {
      // silent fail; shows skeleton
      setImgUrl('');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArt();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-100 to-gray-200" aria-hidden="true" />
        )}
        {imgUrl && (
          <img
            src={imgUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            onLoad={() => setIsLoading(false)}
          />
        )}
      </div>
    </div>
  );
}
