import React, { useEffect, useState } from 'react';

export default function LoadingArt() {
  const [img, setImg] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    async function fetchArt() {
      try {
        const res = await fetch('https://api.waifu.pics/sfw/waifu');
        const data = await res.json();
        if (active && data?.url) setImg(data.url);
      } catch (e) {
        // silently ignore
      }
    }
    fetchArt();
    return () => { active = false; };
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="aspect-square overflow-hidden rounded-xl border border-black/10 bg-gradient-to-br from-slate-100 to-slate-200">
        {!loaded && (
          <div className="animate-pulse h-full w-full bg-gradient-to-br from-indigo-50 to-fuchsia-50" />
        )}
        {img && (
          <img
            src={img}
            alt="Loading art"
            onLoad={() => setLoaded(true)}
            className={`h-full w-full object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          />
        )}
      </div>
    </div>
  );
}
