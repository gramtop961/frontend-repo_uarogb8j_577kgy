import React, { useMemo, useState } from 'react';

function priceLabel(price) {
  return `$${price.toFixed(0)}`;
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const plans = useMemo(
    () => [
      { name: 'Starter', monthly: 24, tagline: 'Basics for greener routines' },
      { name: 'Essentials', monthly: 39, tagline: 'Most popular for households' },
      { name: 'Deluxe', monthly: 59, tagline: 'Premium picks & extras' },
    ],
    []
  );

  const computed = useMemo(() => {
    return plans.map((p) => {
      const price = yearly ? p.monthly * 12 * 0.85 : p.monthly; // 15% off yearly
      const per = yearly ? 'yr' : 'mo';
      return { ...p, price, per };
    });
  }, [plans, yearly]);

  function validate() {
    const errs = {};
    if (!name || name.trim().length < 2) {
      errs.name = 'Please enter your full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errs.email = 'Enter a valid email address.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (!validate()) return;

    const payload = { name: name.trim(), email: email.trim(), plan: computed[1].name, billing: yearly ? 'yearly' : 'monthly' };
    console.log('GreenBox signup', payload);
    alert('Thanks! Check the console for your submission payload.');
    setName('');
    setEmail('');
    setSubmitted(false);
    setErrors({});
  }

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
            Simple pricing, flexible billing
          </h2>
          <p className="mt-4 text-emerald-800">
            Choose monthly or save 15% with yearly billing. Change or cancel anytime.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white p-1 ring-1 ring-emerald-200">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                yearly ? 'text-emerald-700' : 'bg-emerald-600 text-white shadow'
              }`}
              aria-pressed={!yearly}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                yearly ? 'bg-emerald-600 text-white shadow' : 'text-emerald-700'
              }`}
              aria-pressed={yearly}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {computed.map((plan) => (
            <article key={plan.name} className="flex flex-col justify-between rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <div>
                <h3 className="text-xl font-semibold text-emerald-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-emerald-700">{plan.tagline}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-emerald-900">{priceLabel(plan.price)}</span>
                  <span className="pb-1 text-sm text-emerald-700">/ {plan.per}</span>
                </div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-emerald-800">
                <li>• 5–7 curated items</li>
                <li>• Plastic-free packaging</li>
                <li>• Carbon-neutral shipping</li>
                <li>• Member-only discounts</li>
              </ul>
              <div className="mt-6">
                <button className="w-full rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">
                  Select {plan.name}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <h3 className="text-center text-xl font-semibold text-emerald-900">Get your first GreenBox</h3>
          <p className="mt-2 text-center text-emerald-800">Enter your details and we’ll email you next steps.</p>
          <form onSubmit={handleSubmit} noValidate className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-emerald-900">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={submitted ? validate : undefined}
                  className={`mt-1 w-full rounded-md border px-3 py-2 text-emerald-900 placeholder-emerald-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                    errors.name ? 'border-red-400 focus:ring-red-500' : 'border-emerald-200'
                  }`}
                  placeholder="Alex Green"
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-emerald-900">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={submitted ? validate : undefined}
                  className={`mt-1 w-full rounded-md border px-3 py-2 text-emerald-900 placeholder-emerald-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                    errors.email ? 'border-red-400 focus:ring-red-500' : 'border-emerald-200'
                  }`}
                  placeholder="you@greenmail.com"
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                Sign up
              </button>
            </div>
            <p className="mt-3 text-center text-xs text-emerald-700">No charge today. We’ll send a quick email to confirm your preferences.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
