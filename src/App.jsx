import React, { useMemo, useState } from 'react'
import Header from './components/Header'
import ThreeAsset from './components/ThreeAsset'
import Dropzone from './components/Dropzone'
import UrlInput from './components/UrlInput'
import Results from './components/Results'

const ACCENT = 'indigo'

async function searchByImageFile(file) {
  const form = new FormData()
  form.append('image', file)
  // Using trace.moe API: POST /search
  const res = await fetch('https://api.trace.moe/search', { method: 'POST', body: form })
  if (!res.ok) throw new Error('Search failed')
  const data = await res.json()
  return data?.result || []
}

async function searchByImageUrl(url) {
  const q = new URLSearchParams({ url })
  const res = await fetch(`https://api.trace.moe/search?${q.toString()}`)
  if (!res.ok) throw new Error('Search failed')
  const data = await res.json()
  return data?.result || []
}

export default function App() {
  const [mode, setMode] = useState('idle') // idle | loading | results | noresult
  const [hovering, setHovering] = useState(false)
  const [showUrlInput, setShowUrlInput] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [results, setResults] = useState([])

  const assetState = useMemo(() => {
    if (mode === 'loading') return 'loading'
    if (hovering) return 'hover'
    return 'idle'
  }, [mode, hovering])

  const handleFile = async (file) => {
    try {
      setMode('loading')
      const objectUrl = URL.createObjectURL(file)
      setImageUrl(objectUrl)
      const res = await searchByImageFile(file)
      if (!res || res.length === 0) {
        setResults([])
        setMode('noresult')
      } else {
        setResults(res)
        setMode('results')
      }
    } catch (e) {
      console.error(e)
      setResults([])
      setMode('noresult')
    }
  }

  const handleUrl = async (url) => {
    if (!url) return
    try {
      setMode('loading')
      setImageUrl(url)
      const res = await searchByImageUrl(url)
      if (!res || res.length === 0) {
        setResults([])
        setMode('noresult')
      } else {
        setResults(res)
        setMode('results')
      }
    } catch (e) {
      console.error(e)
      setResults([])
      setMode('noresult')
    } finally {
      setShowUrlInput(false)
    }
  }

  const reset = () => {
    setMode('idle')
    setResults([])
    setImageUrl('')
    setShowUrlInput(false)
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#222222]">
      <Header />

      {mode === 'idle' && (
        <main className="px-6 py-10 flex flex-col items-center">
          <div
            className="w-full max-w-3xl"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            {!showUrlInput ? (
              <>
                <Dropzone onFile={handleFile} onUrlToggle={() => setShowUrlInput(true)} accent={ACCENT} />
                <div className="mt-6">
                  <ThreeAsset state={assetState} />
                </div>
              </>
            ) : (
              <UrlInput onSubmit={handleUrl} onCancel={() => setShowUrlInput(false)} />
            )}
          </div>
        </main>
      )}

      {mode === 'loading' && (
        <main className="px-6 py-24 flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <ThreeAsset state="loading" />
            <p className="mt-4 text-center text-sm text-gray-600">Mencari di arsip...</p>
          </div>
        </main>
      )}

      {mode === 'results' && (
        <main className="px-6 py-10">
          <Results imageUrl={imageUrl} results={results} onReset={reset} />
        </main>
      )}

      {mode === 'noresult' && (
        <main className="px-6 py-24 flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <ThreeAsset state="idle" />
            <p className="mt-4 text-center text-sm text-gray-600">Tidak ada yang cocok.</p>
            <p className="text-center text-xs text-gray-500">Coba gunakan tangkapan layar yang lebih jelas atau tanpa subtitle.</p>
            <div className="mt-6 text-center">
              <button onClick={reset} className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white">Coba Lagi</button>
            </div>
          </div>
        </main>
      )}

      <footer className="px-6 py-8 text-center text-[10px] text-gray-400">Didukung oleh API trace.moe.</footer>
    </div>
  )
}
