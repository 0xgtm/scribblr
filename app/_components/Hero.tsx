import React from 'react';

export default function MarketingBanner() {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          {/* Tagline/Badge for context */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-5 sm:px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 px-2.5 mb-4">
            The Canvas for Technical Teams
          </span>

          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight">
            Brainstorm, document, and <strong className="text-indigo-600">draw architecture</strong> in one place
          </h1>

          <p className="mt-6 text-base text-pretty text-gray-600 sm:text-lg/relaxed">
            Stop switching between separate tools for notes and diagrams. Write markdown documentation on the left, map out cloud infrastructure on the right, and move from idea to production faster.
          </p>

          <div className="mt-8 flex justify-center gap-4 sm:mt-10">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-3.5 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
              Start Drawing For Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}