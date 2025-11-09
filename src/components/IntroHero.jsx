import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

export default function IntroHero() {
  return (
    <section className="py-10 sm:py-16">
      <ResponsiveContainer>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center text-gray-900">
          Cari adegan anime
        </h1>
      </ResponsiveContainer>
    </section>
  );
}
