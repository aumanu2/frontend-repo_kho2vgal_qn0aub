import React from 'react'

export default function Header() {
  return (
    <header className="w-full px-6 py-4">
      <div className="mx-auto max-w-6xl flex items-center justify-between rounded-xl bg-white/70 backdrop-blur border border-indigo-100/60 p-3">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-indigo-700" />
          <div
            className="text-2xl font-light tracking-wide lowercase text-gray-900"
            style={{ fontFamily: 'Poppins, Inter, ui-sans-serif' }}
          >
            simpel
          </div>
        </div>
      </div>
    </header>
  )
}
