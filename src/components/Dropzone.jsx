import React, { useCallback, useRef, useState } from 'react';

export default function Dropzone({ onFile }) {
  const inputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const onSelect = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) onFile(file);
  }, [onFile]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) onFile(file);
  }, [onFile]);

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={onDrop}
      className={`relative rounded-xl border-2 border-dashed p-8 transition-colors cursor-pointer ${dragOver ? 'border-indigo-500 bg-indigo-50' : 'border-slate-300 hover:border-slate-400'}`}
      onClick={() => inputRef.current?.click()}
      role="button"
      aria-label="Upload image"
    >
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onSelect} />
      <div className="text-center">
        <p className="text-slate-800 font-medium">Tarik & lepaskan gambar ke sini</p>
        <p className="text-slate-500 text-sm mt-1">atau klik untuk memilih file</p>
        <p className="text-slate-400 text-xs mt-2">Tip: tempel URL gambar lalu Enter</p>
      </div>
    </div>
  );
}
