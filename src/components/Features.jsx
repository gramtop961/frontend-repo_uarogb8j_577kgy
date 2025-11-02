import React from 'react';
import { Leaf, Recycle, Truck } from 'lucide-react';

const features = [
  {
    title: 'Plastic-free picks',
    description:
      'Curated, low-waste essentials and treats from trusted eco brands — always thoughtfully packaged.',
    icon: Leaf,
  },
  {
    title: 'Recycle-ready',
    description:
      'Packaging designed to be recycled or composted. We keep materials minimal and planet-friendly.',
    icon: Recycle,
  },
  {
    title: 'Carbon-neutral shipping',
    description:
      'Every delivery is offset to reduce your footprint — so you can feel good about unboxing day.',
    icon: Truck,
  },
];

export default function Features() {
  return (
    <section id="features" aria-labelledby="features-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
            Thoughtfully curated, planet-first
          </h2>
          <p className="mt-4 text-emerald-800">
            Each GreenBox is carefully assembled to help you build sustainable habits without sacrificing joy or quality.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="group rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-200">
                  <f.icon aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-emerald-900">{f.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-emerald-800">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
