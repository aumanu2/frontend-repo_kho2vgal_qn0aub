import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

export default function Footer() {
  return (
    <footer className="mt-auto bg-transparent border-t border-gray-200">
      <ResponsiveContainer>
        <div className="py-6 text-sm text-gray-600 flex flex-wrap items-center justify-between gap-3">
          <p className="opacity-80">Built for anime scene search</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-900 transition" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-gray-900 transition" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  );
}
