import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white font-bold">s</span>
          <h1 className="font-semibold text-slate-800 tracking-tight">simpel</h1>
        </div>
        <span className="text-xs text-slate-500">find anime scene by image</span>
      </div>
    </header>
  );
}
