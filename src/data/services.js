import house from '../assets/img/house.jpg'
import warehouse from '../assets/img/warehouse.jpg'

export const services = {
  residential: {
    title: 'Residential Services',
    icon: 'home',
    to: '/residential-services',
    image: house,
    summary: 'Houses, apartments, and multi-family buildings — one-time treatments or recurring maintenance.',
    body: [
      'We provide all types of pest control for residential properties, including recurring maintenance for apartment buildings, houses, and more. No job is too big or too small, and we’re always here to help.',
      'When you contact us, one of our team will schedule a visit to inspect your property and determine what the problem is. We’ll then give you an estimate. Because we work with so many different types of properties, we can tailor a service to your budget and your problem.',
    ],
    highlights: ['Free estimates', 'Single-family homes', 'Apartments & multi-family', 'Recurring maintenance plans'],
  },
  commercial: {
    title: 'Commercial Services',
    icon: 'building',
    to: '/commercial-services',
    image: warehouse,
    summary: 'Inspection, treatment, and prevention for businesses of every size.',
    body: [
      'We offer a full range of services for commercial properties, large and small. Our experts thoroughly inspect your premises for termites, bed bugs, carpenter ants, cockroaches, crickets, rodents, wasps, and other pests. We seal off points of entry and teach your team how to prevent future infestations.',
      'We’re happy to come take a look at your problem and offer a fair price for dependable, reliable service.',
    ],
    highlights: [
      'Food & beverage processing',
      'Healthcare',
      'Hospitality',
      'Multifamily',
      'Office & property management',
      'Retail',
      'Education',
      'Manufacturing',
    ],
  },
}
