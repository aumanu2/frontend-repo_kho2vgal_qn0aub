import React, { useRef } from 'react'

export default function Dropzone({ onFile, onUrlToggle }) {
  const inputRef = useRef(null)
  const handleClick = () => inputRef.current?.click()

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) onFile(file)
  }

  const handleChange = (e) => {
    const file = e.target.files?.[0]
    if (file) onFile(file)
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full max-w-2xl mx-auto border-2 border-dashed rounded-2xl p-8 sm:p-10 bg-[#F9F9F9] border-gray-200 text-center transition-all"
    >
      <p className="text-2xl sm:text-3xl font-medium text-gray-900 mb-6">Temukan adegan anime.</p>
      <div className="mb-6">
        <div className="text-xs text-gray-500 mb-2">Seret & lepas gambar, tempel URL, atau</div>
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
        >
          Pilih Berkas
        </button>
        <button
          onClick={onUrlToggle}
          className="ml-3 inline-flex items-center justify-center px-3 py-2 rounded-md text-gray-700 border border-gray-200 hover:bg-gray-50"
        >
          Tempel URL
        </button>
      </div>
      <input ref={inputRef} onChange={handleChange} type="file" accept="image/*" className="hidden" />
    </div>
  )
}
