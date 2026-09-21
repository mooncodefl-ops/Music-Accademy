export type PricingEntry = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  badge?: string;
};

export const pricingEntries: PricingEntry[] = [
  {
    id: 'single',
    name: 'Single Lesson',
    price: '€45',
    period: 'per lesson',
    description: 'One-on-one instruction, booked as needed. Ideal for trying a teacher or fitting around a busy schedule.',
    features: ['45–60 min individual session', 'Any instrument or voice', 'Flexible scheduling', 'No commitment'],
  },
  {
    id: 'monthly',
    name: 'Monthly Package',
    price: '€160',
    period: 'per month',
    description: 'Four weekly lessons with the same teacher. The sweet spot for steady progress without a long-term commitment.',
    features: ['4 weekly lessons', 'Same teacher each week', '10% savings vs. single lessons', 'Month-to-month'],
    badge: 'Most popular',
  },
  {
    id: 'semester',
    name: 'Semester',
    price: '€640',
    period: 'per semester',
    description: 'Sixteen lessons across a full semester. Best value for committed students preparing for performances or exams.',
    features: ['16 lessons over 4 months', 'Priority scheduling', '20% savings vs. single lessons', 'Recital eligibility'],
  },
  {
    id: 'group',
    name: 'Group Course',
    price: '€120',
    period: 'per month',
    description: 'Small ensemble or workshop classes. Learn alongside peers and develop the skills to play with other musicians.',
    features: ['4 group sessions / month', '3–6 students per group', 'Ensemble and workshop formats', 'All levels welcome'],
  },
  {
    id: 'private',
    name: 'Private Course',
    price: '€890',
    period: 'per semester',
    description: 'A fully tailored curriculum for a single student. Includes individualized repertoire, practice plans, and performance coaching.',
    features: ['16 individual lessons', 'Custom curriculum', 'Performance coaching', 'Practice plan included'],
  },
];
