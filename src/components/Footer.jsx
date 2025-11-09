import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto max-w-5xl px-4 py-6 flex items-center justify-between text-sm text-slate-600">
        <span>© {new Date().getFullYear()} simpel</span>
        <div className="flex items-center gap-4">
          <a href="https://github.com/" target="_blank" className="hover:text-slate-900">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" className="hover:text-slate-900">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
