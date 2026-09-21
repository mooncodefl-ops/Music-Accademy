export type InstrumentCategory = 'Vocal' | 'Instruments' | 'Theory' | 'Creation' | 'Ensemble';

export type Level = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export type LessonFormat = 'Individual' | 'Group' | 'Both';

export type AgeGroup = 'Children (6+)' | 'Teens' | 'Adults' | 'All Ages';

export type Instrument = {
  id: string;
  name: string;
  category: InstrumentCategory;
  description: string;
  levels: Level[];
  formats: LessonFormat[];
  ageGroups: AgeGroup[];
  duration: string;
  image: string;
};

export const instrumentCategories: { id: InstrumentCategory; label: string; description: string }[] = [
  { id: 'Instruments', label: 'Instruments', description: 'Strings, keys, brass, and woodwinds' },
  { id: 'Vocal', label: 'Vocal', description: 'Voice training and singing' },
  { id: 'Theory', label: 'Theory', description: 'Reading, harmony, and composition' },
  { id: 'Creation', label: 'Creation', description: 'Production, songwriting, and recording' },
  { id: 'Ensemble', label: 'Ensemble', description: 'Bands, orchestras, and chamber groups' },
];

export const instruments: Instrument[] = [
  {
    id: 'piano',
    name: 'Piano',
    category: 'Instruments',
    description: 'From first chords to concert repertoire. Classical and contemporary piano, technique, sight-reading, and improvisation.',
    levels: ['All Levels'],
    formats: ['Both'],
    ageGroups: ['All Ages'],
    duration: '45–60 min',
    image: 'https://images.pexels.com/photos/13217040/pexels-photo-13217040.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'guitar',
    name: 'Guitar',
    category: 'Instruments',
    description: 'Acoustic, electric, and classical guitar. Chords, fingerstyle, soloing, and repertoire across genres.',
    levels: ['All Levels'],
    formats: ['Both'],
    ageGroups: ['All Ages'],
    duration: '45–60 min',
    image: 'https://images.pexels.com/photos/938975/pexels-photo-938975.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'bass',
    name: 'Bass',
    category: 'Instruments',
    description: 'Electric and upright bass. Groove, timing, harmony, and the role of the bassist in ensemble playing.',
    levels: ['All Levels'],
    formats: ['Both'],
    ageGroups: ['Teens', 'Adults'],
    duration: '45 min',
    image: 'https://images.pexels.com/photos/35610/guitar-bass-instrument-black.jpg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'drums',
    name: 'Drums',
    category: 'Instruments',
    description: 'Kit, hand percussion, and orchestral percussion. Rudiments, coordination, groove, and dynamics.',
    levels: ['All Levels'],
    formats: ['Both'],
    ageGroups: ['All Ages'],
    duration: '45–60 min',
    image: 'https://images.pexels.com/photos/7715840/pexels-photo-7715840.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'violin',
    name: 'Violin',
    category: 'Instruments',
    description: 'Classical and folk violin. Posture, bowing, intonation, and repertoire from Bach to contemporary pieces.',
    levels: ['All Levels'],
    formats: ['Individual'],
    ageGroups: ['All Ages'],
    duration: '45–60 min',
    image: 'https://images.pexels.com/photos/5137409/pexels-photo-5137409.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'viola',
    name: 'Viola',
    category: 'Instruments',
    description: 'The inner voice of the string section. Technique, ensemble playing, and solo repertoire tailored to the viola.',
    levels: ['All Levels'],
    formats: ['Individual'],
    ageGroups: ['All Ages'],
    duration: '45–60 min',
    image: 'https://images.pexels.com/photos/27706637/pexels-photo-27706637.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'cello',
    name: 'Cello',
    category: 'Instruments',
    description: 'Rich, warm tone and expressive phrasing. Posture, bowing, and repertoire from solo suites to chamber music.',
    levels: ['All Levels'],
    formats: ['Individual'],
    ageGroups: ['All Ages'],
    duration: '45–60 min',
    image: 'https://images.pexels.com/photos/7095812/pexels-photo-7095812.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'flute',
    name: 'Flute',
    category: 'Instruments',
    description: 'Breath control, tone production, fingering, and repertoire spanning classical to contemporary.',
    levels: ['All Levels'],
    formats: ['Both'],
    ageGroups: ['All Ages'],
    duration: '45 min',
    image: 'https://images.pexels.com/photos/7238908/pexels-photo-7238908.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'saxophone',
    name: 'Saxophone',
    category: 'Instruments',
    description: 'Alto, tenor, and baritone sax. Jazz, classical, and contemporary styles with emphasis on tone and improvisation.',
    levels: ['All Levels'],
    formats: ['Both'],
    ageGroups: ['Teens', 'Adults'],
    duration: '45 min',
    image: 'https://images.pexels.com/photos/28827066/pexels-photo-28827066.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'clarinet',
    name: 'Clarinet',
    category: 'Instruments',
    description: 'Embouchure, breath support, and finger technique. Classical and klezmer traditions alongside modern repertoire.',
    levels: ['All Levels'],
    formats: ['Both'],
    ageGroups: ['All Ages'],
    duration: '45 min',
    image: 'https://images.pexels.com/photos/7095727/pexels-photo-7095727.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'trumpet',
    name: 'Trumpet',
    category: 'Instruments',
    description: 'Brass fundamentals, embouchure, range building, and repertoire from orchestral to jazz lead.',
    levels: ['All Levels'],
    formats: ['Both'],
    ageGroups: ['All Ages'],
    duration: '45 min',
    image: 'https://images.pexels.com/photos/14364672/pexels-photo-14364672.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'singing',
    name: 'Singing',
    category: 'Vocal',
    description: 'Vocal technique, breath support, range extension, and interpretation across pop, jazz, classical, and musical theatre.',
    levels: ['All Levels'],
    formats: ['Both'],
    ageGroups: ['All Ages'],
    duration: '45–60 min',
    image: 'https://images.pexels.com/photos/32963775/pexels-photo-32963775.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];
