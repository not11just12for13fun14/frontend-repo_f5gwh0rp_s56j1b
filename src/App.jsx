import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <Hero />

      {/* Remove Trusted by Leading Brands section as requested */}

      <Services />
      <CaseStudies />

      {/* Testimonials (simple inline to keep scope focused) */}
      <section id="testimonials" className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Testimonials</h2>
          <p className="mt-3 text-neutral-600">What partners say about working with Zhyrx.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[{
            name: 'Elena P.', role: 'VP Growth, DTC', quote: 'Strategic, fast, and ROI-focused. A rare combo.'
          },{
            name: 'Marco T.', role: 'Founder, SaaS', quote: 'Clear reporting and creative that actually moves metrics.'
          },{
            name: 'Sara L.', role: 'CMO, Marketplace', quote: 'They operate like an in-house team. Seamless and proactive.'
          }].map((t) => (
            <figure key={t.name} className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-xl shadow-neutral-200/70 backdrop-blur">
              <blockquote className="text-sm text-neutral-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-neutral-900">{t.name} · <span className="font-normal text-neutral-600">{t.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Contact />

      {/* Footer with analytics placeholders */}
      <footer className="border-t border-neutral-200 bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-6">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Zhyrx. All rights reserved.</p>
          <div className="text-xs text-neutral-500">GA & Meta Pixel placeholders</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
