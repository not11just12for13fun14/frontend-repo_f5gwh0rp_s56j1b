import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return;

    setStatus('loading');

    const data = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      budget: form.budget.value,
      message: form.message.value,
    };

    try {
      // Backend email forwarding would happen here if implemented.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      form.reset();
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Lets Build Something Great.</h2>
        <p className="mt-3 text-neutral-600">Schedule a discovery call or drop us a line. Well reply within 1 business day.</p>
      </div>

      <form onSubmit={onSubmit} className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-xl shadow-neutral-200/70 backdrop-blur sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="block text-sm font-medium text-neutral-800">Name</label>
          <input id="name" name="name" type="text" required className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="block text-sm font-medium text-neutral-800">Business Email</label>
          <input id="email" name="email" type="email" required className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="company" className="block text-sm font-medium text-neutral-800">Company Name</label>
          <input id="company" name="company" type="text" className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="budget" className="block text-sm font-medium text-neutral-800">Budget</label>
          <select id="budget" name="budget" className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
            <option value="Undisclosed">Undisclosed</option>
            <option value="$5k-$10k">$5k-$10k</option>
            <option value="$10k-$25k">$10k-$25k</option>
            <option value="$25k+">$25k+</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-neutral-800">Message</label>
          <textarea id="message" name="message" rows="5" className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
        </div>
        <div className="sm:col-span-2 mt-2 flex items-center justify-between gap-4">
          <button type="submit" className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-900/10 transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500">
            {status === 'loading' ? 'Sending…' : 'Schedule a Discovery Call'}
          </button>
          {status === 'success' && (
            <p role="status" className="text-sm text-green-600">Thanks! Well be in touch shortly.</p>
          )}
          {status === 'error' && (
            <p role="status" className="text-sm text-red-600">Something went wrong. Please try again.</p>
          )}
        </div>
      </form>

      {/* Footnote with social icons */}
      <div className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-6 text-sm text-neutral-600">
        <a href="#" aria-label="Zhyrx on LinkedIn" className="hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500">LinkedIn</a>
        <a href="#" aria-label="Zhyrx on Instagram" className="hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500">Instagram</a>
      </div>
    </section>
  );
};

export default Contact;
