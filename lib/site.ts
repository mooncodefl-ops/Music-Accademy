export const site = {
  name: 'ARCUS',
  fullName: 'ARCUS MUSIC ACADEMY',
  tagline: 'Find your sound.',
  logo: {
    text: 'ARCUS',
    subtext: 'MUSIC ACADEMY',
  },
  colors: {
    charcoal: '#1a1a1a',
    ivory: '#f5f1ea',
    softGray: '#d8d4cd',
    graphite: '#2a2a2a',
    black: '#0a0a0a',
    accent: '#2563eb',
  },
  fonts: {
    display: 'Playfair Display',
    sans: 'Inter',
    mono: 'JetBrains Mono',
  },
  contact: {
    email: 'info@arcusacademy.com',
    phone: '+39 02 1234 5678',
    address: 'Via della Musica 12, 20121 Milano, Italy',
  },
  hours: [
    { day: 'Monday', time: '09:00 — 21:00' },
    { day: 'Tuesday', time: '09:00 — 21:00' },
    { day: 'Wednesday', time: '09:00 — 21:00' },
    { day: 'Thursday', time: '09:00 — 21:00' },
    { day: 'Friday', time: '09:00 — 22:00' },
    { day: 'Saturday', time: '10:00 — 18:00' },
    { day: 'Sunday', time: 'Closed' },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Strumenti', href: '/strumenti' },
    { label: 'Insegnanti', href: '/insegnanti' },
    { label: 'Corsi', href: '/corsi' },
    { label: 'Eventi', href: '/eventi' },
    { label: 'Prenota', href: '/prenota' },
    { label: 'Contatti', href: '/contatti' },
  ],
  hero: {
    headline: 'FIND YOUR SOUND.',
    supporting: 'Lessons, teachers, rehearsals and performances — in one place.',
    primaryCta: { label: 'Explore Courses', href: '/corsi' },
    secondaryCta: { label: 'Book a Trial Lesson', href: '/prenota' },
  },
  images: {
    heroPoster: 'https://images.pexels.com/photos/34767574/pexels-photo-34767574.jpeg?auto=compress&cs=tinysrgb&w=1920',
    about: 'https://images.pexels.com/photos/1293551/pexels-photo-1293551.jpeg?auto=compress&cs=tinysrgb&w=1920',
    instruments: [
      { label: 'Piano', image: 'https://images.pexels.com/photos/13217040/pexels-photo-13217040.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { label: 'Guitar', image: 'https://images.pexels.com/photos/938975/pexels-photo-938975.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { label: 'Drums', image: 'https://images.pexels.com/photos/7715840/pexels-photo-7715840.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { label: 'Strings', image: 'https://images.pexels.com/photos/7097470/pexels-photo-7097470.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
    courses: [
      { label: 'Classical Piano', image: 'https://images.pexels.com/photos/28708838/pexels-photo-28708838.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { label: 'Acoustic Guitar', image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { label: 'Percussion', image: 'https://images.pexels.com/photos/14303262/pexels-photo-14303262.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { label: 'Violin & Cello', image: 'https://images.pexels.com/photos/33245420/pexels-photo-33245420.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
} as const;

export type Site = typeof site;
