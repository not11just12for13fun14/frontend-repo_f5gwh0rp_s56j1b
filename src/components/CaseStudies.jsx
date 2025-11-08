import React from 'react';

const cases = [
  { stat: '6.5x', label: 'ROAS', client: 'DTC Beauty', quote: 'Scaled profitably across Meta + Google.' },
  { stat: '+180%', label: 'Engagement', client: 'Lifestyle App', quote: 'TikTok creative sprints that converted.' },
  { stat: '-42%', label: 'CPA', client: 'SaaS', quote: 'Attribution clarity drove efficient spend.' },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Case Studies</h2>
        <p className="mt-3 text-neutral-600">A snapshot of outcomes from brands weve helped grow.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, idx) => (
          <article key={idx} className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-xl shadow-neutral-200/70 backdrop-blur">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-neutral-900">{c.stat}</span>
              <span className="text-sm text-neutral-600">{c.label}</span>
            </div>
            <p className="mt-3 text-sm text-neutral-600">{c.quote}</p>
            <div className="mt-6 text-sm font-medium text-neutral-900">{c.client}</div>
            <button className="mt-4 inline-flex text-sm font-medium text-neutral-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500">
              Lets Discuss Your Project
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
