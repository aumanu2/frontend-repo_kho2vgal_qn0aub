import React from 'react'

function toTime(t) {
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function Results({ imageUrl, results, onReset }) {
  const hasResults = Array.isArray(results) && results.length > 0

  const openAniList = (anilistId) => {
    if (!anilistId) return
    const url = `https://anilist.co/anime/${anilistId}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
      <aside className="md:col-span-3 space-y-4">
        <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
          {imageUrl ? (
            <img src={imageUrl} alt="uploaded" className="w-full h-auto" />
          ) : (
            <div className="p-8 text-center text-sm text-gray-500">Tidak ada gambar</div>
          )}
        </div>
        <button onClick={onReset} className="w-full py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white">Cari Lagi</button>
      </aside>
      <main className="md:col-span-9 space-y-4">
        {!hasResults && (
          <div className="text-center text-gray-600">Tidak ada hasil.</div>
        )}
        {hasResults && results.map((r, idx) => (
          <button
            key={idx}
            onClick={() => openAniList(r?.anilist?.id)}
            className="text-left w-full"
          >
            <div className="flex flex-col md:flex-row gap-4 rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-indigo-300 focus-visible:ring-2 focus-visible:ring-indigo-500 transition">
              <div className="md:w-1/2 aspect-video bg-black">
                {r.video ? (
                  <video src={r.video} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/80">No preview</div>
                )}
              </div>
              <div className="p-4 md:w-1/2">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {r?.anilist?.title?.romaji || r.filename || 'Judul tidak diketahui'}
                </h3>
                {typeof r.similarity === 'number' && (
                  <div className="text-sm mb-2">Kecocokan <span className="text-indigo-600 font-medium">{Math.round(r.similarity * 100)}%</span></div>
                )}
                <div className="text-sm text-gray-600 space-y-1">
                  {r.episode !== undefined && <div>Episode: {r.episode}</div>}
                  {(r.from !== undefined && r.to !== undefined) && (
                    <div>Waktu: {toTime(r.from)} - {toTime(r.to)}</div>
                  )}
                </div>
                <div className="mt-3 inline-flex items-center text-indigo-600 text-sm">Buka di AniList →</div>
              </div>
            </div>
          </button>
        ))}
      </main>
    </div>
  )
}
