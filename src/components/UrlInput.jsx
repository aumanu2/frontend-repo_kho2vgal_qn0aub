import React, { useState } from 'react'

export default function UrlInput({ onSubmit, onCancel }) {
  const [url, setUrl] = useState('')

  return (
    <div className="w-full max-w-2xl mx-auto border rounded-2xl p-4 bg-white shadow-sm">
      <label className="block text-sm text-gray-600 mb-2">Tempel URL gambar</label>
      <div className="flex gap-2">
        <input
          type="url"
          placeholder="https://..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={() => onSubmit(url)}
          className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          Cari
        </button>
        <button
          onClick={onCancel}
          className="px-3 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
        >
          Batal
        </button>
      </div>
    </div>
  )
}
