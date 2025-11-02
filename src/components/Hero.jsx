import React from 'react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">Eco-friendly subscription boxes</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl lg:text-6xl">
            GreenBox
            <span className="block text-emerald-700">Sustainable goodies delivered monthly</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-emerald-800 sm:text-lg">
            Discover curated, low-waste products from ethical brands. Make greener choices without the guesswork — shipped with carbon-neutral delivery.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">
              View plans
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-emerald-800 ring-1 ring-inset ring-emerald-300 transition hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">
              See what’s inside
            </a>
          </div>
        </div>
        <div aria-hidden="true" className="mt-12 lg:mt-0 lg:max-w-md">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-emerald-200 via-emerald-100 to-emerald-50 p-1 shadow-inner">
            <div className="flex h-full items-center justify-center rounded-2xl border border-emerald-200 bg-white/70 backdrop-blur">
              <svg className="h-24 w-24 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 21h10" />
                <path d="M12 3v18" />
                <path d="M5 10c2.5 0 4-2 7-2s4.5 2 7 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
