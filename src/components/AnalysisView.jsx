import React from 'react';
import LoadingArt from './LoadingArt';
import Results from './Results';

export default function AnalysisView({ previewUrl, loading, results, noresult }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <div className="w-full">
        <div className="aspect-video rounded-xl overflow-hidden border border-black/10 bg-slate-100">
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-indigo-50 to-fuchsia-50" />
          )}
        </div>
        <p className="mt-2 text-xs text-slate-500">Pratinjau gambar yang dianalisis</p>
      </div>

      <div className="w-full">
        {loading && (
          <div className="py-2"><LoadingArt /></div>
        )}
        {!loading && !noresult && Array.isArray(results) && results.length > 0 && (
          <Results data={results} />
        )}
        {!loading && noresult && (
          <div className="text-center text-slate-600">Tidak ada hasil yang cocok.</div>
        )}
      </div>
    </div>
  );
}
