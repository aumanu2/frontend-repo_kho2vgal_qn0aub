import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full border-t border-gray-800 bg-gray-900/90 text-gray-300 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-4 sm:py-5 flex items-center justify-between text-[12px] sm:text-sm">
          <p className="tracking-tight">© {year} simpel</p>
          <span className="text-gray-500">made simple</span>
        </div>
      </div>
    </footer>
  )
}
