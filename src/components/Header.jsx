import React from 'react'

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-3 mb-4 overflow-hidden rounded-2xl border border-indigo-800/50 bg-gradient-to-br from-indigo-800 via-indigo-700 to-indigo-900 shadow-lg">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-white/20 ring-1 ring-white/30" />
              <div
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-white"
                style={{ fontFamily: 'Inter, ui-sans-serif' }}
              >
                simpel
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-indigo-100">
              <a
                href="https://github.com/otaruram"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="opacity-40">•</span>
              <a
                href="https://www.linkedin.com/in/otaruram/"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
