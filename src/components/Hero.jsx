import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="relative min-h-[90vh] w-full overflow-hidden bg-white text-neutral-900">
      {/* Sticky top nav */}
      <nav className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-neutral-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <button
            className="flex items-center gap-2 focus:outline-none"
            aria-label="Zhyrx Home"
            onClick={() => handleScroll('top')}
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-md" aria-hidden="true" />
            <span className="font-semibold tracking-tight">Zhyrx</span>
          </button>
          <div className="hidden gap-6 md:flex">
            <button className="text-sm hover:text-neutral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 rounded" onClick={() => handleScroll('services')}>Services</button>
            <button className="text-sm hover:text-neutral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 rounded" onClick={() => handleScroll('case-studies')}>Case Studies</button>
            <button className="text-sm hover:text-neutral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 rounded" onClick={() => handleScroll('testimonials')}>Testimonials</button>
            <button className="text-sm hover:text-neutral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 rounded" onClick={() => handleScroll('contact')}>Contact</button>
          </div>
          <button
            onClick={() => handleScroll('contact')}
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-neutral-900/10 transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            Work With Us
          </button>
        </div>
      </nav>

      <div id="top" className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:py-24">
        {/* Copy */}
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            <span className="block">Creative Strategy.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">Real Results.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-neutral-600 sm:text-lg">
            Zhyrx is a full-stack ad agency helping brands scale through strategy, media, and performance.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={() => handleScroll('contact')} className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-900/10 transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500">
              Let’s Talk
            </button>
            <button onClick={() => handleScroll('services')} className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500">
              Explore Services
            </button>
          </div>
        </div>

        {/* Spline 3D Scene */}
        <div className="relative h-[360px] w-full rounded-2xl border border-neutral-200 bg-white/60 shadow-xl shadow-neutral-200/70 md:h-[520px]">
          <Spline
            aria-label="3D hero scene"
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* soft gradient overlay for depth, won't block interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 via-transparent to-white/40" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
