'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { site } from '@/lib/site';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const contactReasons = [
  'General enquiry',
  'Booking a trial lesson',
  'Course information',
  'Teacher availability',
  'Events & performances',
  'Partnerships',
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContattiPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    reason: contactReasons[0],
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setForm({ name: '', email: '', phone: '', reason: contactReasons[0], message: '' });
    } catch {
      setStatus('error');
    }
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="bg-charcoal pt-32">
          {/* Header */}
          <section className="px-6 pb-12 md:pb-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex items-center gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent-blue-light">
                  06
                </span>
                <div className="h-px flex-1 bg-graphite-light/30" />
              </div>
              <h1 className="font-display text-5xl font-medium leading-[0.9] text-ivory md:text-7xl lg:text-8xl">
                Contatti
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-soft-gray md:text-xl">
                Get in touch with the academy. Visit us in person, send us a message,
                or call during opening hours. We're here to answer any questions about
                lessons, enrollment, and events.
              </p>
            </div>
          </section>

          {/* Contact form + info */}
          <section className="px-6 py-12 md:py-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Form */}
              <div>
                <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-soft-gray/50">
                  Send a message
                </p>

                {status === 'success' && (
                  <div className="mb-8 flex items-center gap-3 border border-accent-blue/40 bg-accent-blue/10 p-5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-blue-light" />
                    <p className="text-sm text-ivory">
                      Thank you — your message has been sent. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-8 flex items-center gap-3 border border-red-500/40 bg-red-500/10 p-5">
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
                    <p className="text-sm text-ivory">
                      Something went wrong sending your message. Please try again or call us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-soft-gray/50">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="w-full border border-graphite-light/30 bg-pure-black px-4 py-4 text-base text-ivory placeholder-soft-gray/30 transition-colors focus:border-accent-blue focus:outline-none"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-soft-gray/50">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className="w-full border border-graphite-light/30 bg-pure-black px-4 py-4 text-base text-ivory placeholder-soft-gray/30 transition-colors focus:border-accent-blue focus:outline-none"
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-soft-gray/50">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="w-full border border-graphite-light/30 bg-pure-black px-4 py-4 text-base text-ivory placeholder-soft-gray/30 transition-colors focus:border-accent-blue focus:outline-none"
                        placeholder="+39 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reason" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-soft-gray/50">
                      Reason for contacting
                    </label>
                    <select
                      id="reason"
                      value={form.reason}
                      onChange={(e) => update('reason', e.target.value)}
                      className="w-full border border-graphite-light/30 bg-pure-black px-4 py-4 text-base text-ivory transition-colors focus:border-accent-blue focus:outline-none"
                    >
                      {contactReasons.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-soft-gray/50">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className="w-full resize-none border border-graphite-light/30 bg-pure-black px-4 py-4 text-base text-ivory placeholder-soft-gray/30 transition-colors focus:border-accent-blue focus:outline-none"
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group inline-flex items-center gap-2 bg-accent-blue px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-accent-blue-dark disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send message'}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>

              {/* Academy info + map */}
              <div>
                <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-soft-gray/50">
                  Academy information
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-graphite-light/30">
                      <MapPin className="h-4 w-4 text-accent-blue-light" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-soft-gray/50">Address</p>
                      <p className="mt-1 text-base text-ivory">{site.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-graphite-light/30">
                      <Phone className="h-4 w-4 text-accent-blue-light" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-soft-gray/50">Phone</p>
                      <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="mt-1 block text-base text-ivory transition-colors hover:text-accent-blue-light">
                        {site.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-graphite-light/30">
                      <Mail className="h-4 w-4 text-accent-blue-light" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-soft-gray/50">Email</p>
                      <a href={`mailto:${site.contact.email}`} className="mt-1 block text-base text-ivory transition-colors hover:text-accent-blue-light">
                        {site.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-graphite-light/30">
                      <Clock className="h-4 w-4 text-accent-blue-light" />
                    </div>
                    <div className="w-full">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-soft-gray/50">Opening hours</p>
                      <ul className="mt-3 space-y-2">
                        {site.hours.map((h) => (
                          <li key={h.day} className="flex justify-between text-sm">
                            <span className="text-soft-gray/70">{h.day}</span>
                            <span className="font-mono text-xs text-soft-gray">{h.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Map embed */}
                <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-graphite-light/20">
                  <iframe
                    title="ARCUS Music Academy location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4453.2!2d9.1895!3d45.4642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzUxLjEiTiA5wrAxMSczMC4yIkU!5e0!3m2!1sen!2sit!4v1700000000000"
                    className="h-full w-full grayscale invert"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
