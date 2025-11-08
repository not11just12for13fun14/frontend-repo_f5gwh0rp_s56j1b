import React from 'react';
import { Rocket, BarChart3, Mail, Palette, Layout, LineChart } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Paid Media Advertising',
    desc: 'Full-funnel campaigns across Google, Meta, and TikTok tuned for ROAS.',
  },
  { icon: BarChart3, title: 'SEO & Content Strategy', desc: 'Technical, on-page, and content systems that compound organic growth.' },
  { icon: Mail, title: 'Email Marketing & Automation', desc: 'Lifecycle flows and campaigns that turn subscribers into customers.' },
  { icon: Palette, title: 'Branding & Visual Identity', desc: 'Distinctive brand systems that scale across every touchpoint.' },
  { icon: Layout, title: 'Web Design & CRO', desc: 'High-converting experiences optimized for speed, clarity, and trust.' },
  { icon: LineChart, title: 'Analytics & Business Intelligence', desc: 'Reliable tracking and reporting for confident, data-backed decisions.' },
];

const Services = () => {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Services</h2>
        <p className="mt-3 text-neutral-600">Strategic, performance-driven capabilities to help brands scale responsibly.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="group rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-xl shadow-neutral-200/70 backdrop-blur transition hover:shadow-2xl focus-within:shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              <button className="mt-4 inline-flex items-center text-sm font-medium text-neutral-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500">
                Learn More
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
