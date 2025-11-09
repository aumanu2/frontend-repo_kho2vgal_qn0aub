import React from 'react'

export default function IntroHero({ onPasteHint = true }) {
  return (
    <section className="px-4 sm:px-6 pt-6 pb-4">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Cari adegan anime dengan satu gambar</h1>
        <p className="mt-3 text-sm sm:text-base text-gray-600">Upload screenshot atau paste URL gambar. Kami cocokkan ke database trace.moe dan langsung arahkan ke halaman AniList.</p>
        {onPasteHint && (
          <p className="mt-2 text-xs text-gray-500">Tip: kamu bisa paste URL langsung (Ctrl/⌘+V)</p>
        )}
      </div>
    </section>
  )
}
