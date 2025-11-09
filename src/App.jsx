import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import IntroHero from './components/IntroHero';
import ResponsiveContainer from './components/ResponsiveContainer';
import Dropzone from './components/Dropzone';
import Results from './components/Results';
import Footer from './components/Footer';
import LoadingArt from './components/LoadingArt';
import AnalysisView from './components/AnalysisView';

const TRACE_API = 'https://api.trace.moe/search';

export default function App() {
  const [mode, setMode] = useState('idle'); // idle | loading | results | noresult
  const [results, setResults] = useState([]);
  const [previewUrl, setPreviewUrl] = useState('');

  // paste URL handler on window
  useEffect(() => {
    function onPaste(e) {
      const text = e.clipboardData?.getData('text');
      if (!text) return;
      try {
        const url = new URL(text);
        if (url.protocol.startsWith('http')) {
          setPreviewUrl(url.toString());
          searchByImageUrl(url.toString());
        }
      } catch (_) {
        // not a url
      }
    }
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, []);

  const searchByImageFile = useCallback(async (file) => {
    // show realtime-style preview immediately
    const localUrl = URL.createObjectURL(file);
    setPreviewUrl(localUrl);

    setMode('loading');
    setResults([]);
    try {
      const formData = new FormData();
      formData.append('image', file);
      const res = await fetch(TRACE_API, { method: 'POST', body: formData });
      const data = await res.json();
      const list = data?.result || [];
      if (list.length > 0) {
        setResults(list);
        setMode('results');
      } else {
        setMode('noresult');
      }
    } catch (e) {
      setMode('noresult');
    }
  }, []);

  const searchByImageUrl = useCallback(async (url) => {
    // show pasted URL as the preview right away
    setPreviewUrl(url);

    setMode('loading');
    setResults([]);
    try {
      const res = await fetch(`${TRACE_API}?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      const list = data?.result || [];
      if (list.length > 0) {
        setResults(list);
        setMode('results');
      } else {
        setMode('noresult');
      }
    } catch (e) {
      setMode('noresult');
    }
  }, []);

  const showAnalysis = mode === 'loading' || mode === 'results' || mode === 'noresult';

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <IntroHero />
        <ResponsiveContainer>
          {!showAnalysis && (
            <Dropzone onFile={searchByImageFile} />
          )}

          {showAnalysis && (
            <div className="py-6">
              <AnalysisView
                previewUrl={previewUrl}
                loading={mode === 'loading'}
                results={results}
                noresult={mode === 'noresult'}
              />
              {mode !== 'loading' && (
                <div className="mt-8">
                  <Dropzone onFile={searchByImageFile} />
                </div>
              )}
              {mode === 'loading' && (
                <div className="sr-only">
                  <LoadingArt />
                </div>
              )}
            </div>
          )}
        </ResponsiveContainer>
      </main>
      <Footer />
    </div>
  );
}
