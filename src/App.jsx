import React, { useState } from 'react'
import Header from './components/Header'
import Dropzone from './components/Dropzone'
import Results from './components/Results'
import Footer from './components/Footer'
import IntroHero from './components/IntroHero'
import ResponsiveContainer from './components/ResponsiveContainer'
import LoadingArt from './components/LoadingArt'

async function searchByImageFile(file) {
  const form = new FormData()
  form.append('image', file)
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
  const [imageUrl, setImageUrl] = useState('')
  const [results, setResults] = useState([])

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

  const handlePasteUrl = async (e) => {
    const text = e.clipboardData?.getData('text')
    if (!text) return
    try {
      setMode('loading')
      setImageUrl(text)
      const res = await searchByImageUrl(text)
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

  const reset = () => {
    setMode('idle')
    setResults([])
    setImageUrl('')
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#222222] flex flex-col" onPaste={handlePasteUrl}>
      <Header />

      <div className="flex-1">
        <IntroHero />

        {mode === 'idle' && (
          <main className="pb-10">
            <ResponsiveContainer>
              <div className="w-full flex justify-center">
                <div className="w-full max-w-3xl">
                  <Dropzone onFile={handleFile} />
                </div>
              </div>
            </ResponsiveContainer>
          </main>
        )}

        {mode === 'loading' && (
          <main className="py-10 sm:py-16">
            <ResponsiveContainer>
              <LoadingArt />
            </ResponsiveContainer>
          </main>
        )}

        {mode === 'results' && (
          <main className="py-10">
            <ResponsiveContainer>
              <Results imageUrl={imageUrl} results={results} onReset={reset} />
            </ResponsiveContainer>
          </main>
        )}

        {mode === 'noresult' && (
          <main className="py-20">
            <ResponsiveContainer>
              <div className="w-full max-w-3xl mx-auto text-center">
                <p className="text-sm text-gray-700">Tidak ada yang cocok.</p>
                <p className="mt-1 text-xs text-gray-500">Coba gunakan tangkapan layar yang lebih jelas atau tanpa subtitle.</p>
                <div className="mt-6">
                  <button onClick={reset} className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white">Coba Lagi</button>
                </div>
              </div>
            </ResponsiveContainer>
          </main>
        )}
      </div>

      <Footer />
    </div>
  )
}
