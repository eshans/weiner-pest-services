export const business = {
  name: 'Weiner Pest Services, Inc.',
  founded: 1952,
  phone: '973-375-8690',
  email: 'weinerpest@comcast.net',
  facebook: 'https://www.facebook.com/weinerpestservices/',
  hq: 'Irvington, NJ',
  license: 'NJDEP #50955A',
}

// County lines, as painted on the truck
export const counties = [
  { name: 'Essex County', phone: '973-375-8690' },
  { name: 'Union County', phone: '908-964-7673' },
  { name: 'Morris County', phone: '973-822-2722' },
]

export const serviceAreas = ['Essex', 'Union', 'Morris', 'Bergen']

export const telHref = (phone) => `tel:+1${phone.replace(/\D/g, '')}`

// EmailJS — template fields: user_name, user_email, user_phone, customer, user_message, subject
export const emailjs = {
  serviceId: 'service_f4blsjn',
  templateId: 'template_ret4yvv',
  publicKey: 'user_UJIGh7FYjyL6iEDWvrH3H',
}
