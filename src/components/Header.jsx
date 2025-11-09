import React from 'react'

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4">
      <div className="text-2xl font-light tracking-wide lowercase" style={{ fontFamily: 'Poppins, Inter, ui-sans-serif' }}>
        <span className="text-gray-900">simpel</span>
      </div>
      <div className="text-[10px] text-gray-400 select-none">Didukung oleh API trace.moe</div>
    </header>
  )
}
