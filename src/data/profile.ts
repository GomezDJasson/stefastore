import {
  FaFacebookF,
  FaInstagram,
  FaThreads,
  FaTiktok,
  FaWhatsapp,
  FaStore,
} from 'react-icons/fa6'

export const profile = {
  name: 'Stefa Store',
  description: 'Tienda de Personalizados',
  tagline: 'Hacemos realidad tus ideas',
  logo: '/assets/logo-stefa-store.png',

  socialLinks: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/stefastore18/',
      icon: FaInstagram,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/stefastore18',
      icon: FaFacebookF,
    },
    {
      label: 'Threads',
      href: 'https://www.threads.net/@stefastore18',
      icon: FaThreads,
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@stefastore18',
      icon: FaTiktok,
    },
  ],

  shopping: {
    label: 'Compras',
    title: 'Nuestra Tienda',
    description: 'Descubre todo lo que tenemos para ti.',
    href: 'https://stefastore2.mitiendanube.com/',
    icon: FaStore,
  },

  whatsapp: {
    number: '573508775620',
    message: 'Hola! Quiero más información!',
  },

  contact: {
    label: 'Escríbenos por WhatsApp',
    icon: FaWhatsapp,
  },

  footer: {
    text: 'Diseñado por Jasson D. Gomez',
    href: 'https://portafolio-jasson.vercel.app/',
  },
} as const