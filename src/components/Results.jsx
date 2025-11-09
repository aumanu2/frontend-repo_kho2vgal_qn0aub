import React from 'react';

function ResultCard({ item }) {
  const title = item?.anilist?.title?.native || item?.anilist?.title?.romaji || 'Unknown';
  const episode = item?.episode != null ? `Episode ${item.episode}` : 'Episode ?';
  const similarity = item?.similarity ? Math.round(item.similarity * 100) : 0;
  const cover = item?.image;
  const anilistId = item?.anilist?.id || item?.anilist;
  const anilistUrl = anilistId ? `https://anilist.co/anime/${anilistId}` : '#';

  return (
    <a href={anilistUrl} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm hover:shadow transition">
      <div className="aspect-video bg-slate-100 overflow-hidden">
        {cover ? (
          <img src={cover} alt={title} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-indigo-50 to-fuchsia-50" />
        )}
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-medium text-slate-900 truncate" title={title}>{title}</h3>
          <span className="text-xs rounded-full bg-slate-100 px-2 py-0.5 text-slate-600">{similarity}%</span>
        </div>
        <p className="text-sm text-slate-600 mt-1">{episode}</p>
      </div>
    </a>
  );
}

export default function Results({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-center text-slate-600">Tidak ada hasil yang cocok.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, idx) => (
        <ResultCard key={idx} item={item} />
      ))}
    </div>
  );
}
