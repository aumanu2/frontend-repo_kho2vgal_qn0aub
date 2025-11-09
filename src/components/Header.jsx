import React from 'react'

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
              simpel
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4" />
        </div>
      </div>
    </header>
  )
}
