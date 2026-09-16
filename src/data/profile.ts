import {
  FaFacebookF,
  FaInstagram,
  FaThreads,
  FaTiktok,
  FaWhatsapp,
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

    coupon: {
      label: 'Cupón de descuento',
      title: 'Mugs blancos',
      code: 'MUGSREGALO26',
    },

  shopping: {
    label: 'Compras',
    title: 'Nuestra Tienda',
    description: 'Descubre todo lo que tenemos para ti.',
    href: 'https://stefastore2.mitiendanube.com/',
  },

  whatsapp: {
    number: '573508775620',
    message: 'Hola! Quiero más información!',
  },

  contact: {
    label: 'WhatsApp',
    icon: FaWhatsapp,
    email: 'stefastore18@gmail.com',
  },

  footer: {
  copyright: '© 2026 Stefa Store. Todos los derechos reservados.',
  text: 'Diseñado por Gomez D. Jasson',
  href: 'https://portafolio-jasson.vercel.app/',
},
} as const