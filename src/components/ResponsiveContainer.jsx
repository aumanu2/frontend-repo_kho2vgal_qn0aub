import React from 'react';

export default function ResponsiveContainer({ children }) {
  return (
    <div className="mx-auto max-w-5xl px-4">
      {children}
    </div>
  );
}
