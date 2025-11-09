import React from 'react'
import Spline from '@splinetool/react-spline'
import ErrorBoundary from './ErrorBoundary'

export default function ThreeAsset({ state = 'idle' }) {
  // Updated to a reliable, accessible Spline scene URL
  const sceneUrl = 'https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode'

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
      <ErrorBoundary>
        <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
      </ErrorBoundary>
      {state !== 'idle' && (
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
            state === 'hover' ? 'opacity-30' : state === 'loading' ? 'opacity-50' : 'opacity-0'
          }`}
          style={{
            background:
              'radial-gradient(60% 60% at 50% 50%, rgba(75,0,130,0.25), rgba(0,0,0,0))',
          }}
        />
      )}
    </div>
  )
}
