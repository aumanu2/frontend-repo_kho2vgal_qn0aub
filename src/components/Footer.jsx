import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full border-t border-gray-200 bg-transparent text-gray-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-4 sm:py-5 flex items-center justify-between text-[12px] sm:text-sm">
          <p className="tracking-tight">© {year} simpel</p>
          <nav className="flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
