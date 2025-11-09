import React from 'react'

export default function ResponsiveContainer({ children }) {
  return (
    <div className="px-4 sm:px-6">
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </div>
  )
}
