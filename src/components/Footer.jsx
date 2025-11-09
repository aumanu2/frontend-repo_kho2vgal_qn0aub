import React from 'react'

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] sm:text-sm text-gray-600">
          <p className="text-center sm:text-left">Dibuat sederhana untuk mencari adegan anime dari gambar.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/otaruram"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-700 underline underline-offset-4"
            >
              GitHub
            </a>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a
              href="https://www.linkedin.com/in/otaruram/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-700 underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
