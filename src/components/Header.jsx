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
          <nav className="hidden sm:flex items-center gap-4 text-sm text-gray-600">
            <a
              href="https://github.com/otaruram"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="https://www.linkedin.com/in/otaruram/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
