module.exports = {
  siteTitle: 'Lateef O. Akinola | ML & Robotics Enthusiast',
  siteDescription:
    'Lateef Akinola is a Machine Learning Engineer who loves learning new things.',
  siteKeywords:
    'Lateef Akinola, lateef, machine learning, AI, Artificial Intelligence, Google',
  siteUrl: 'https://lateefoakinola.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Lateef O. Akinola',
  location: 'Lagos, Nigeria',
  email: 'lateefoakinola@gmail.com',
  github: 'https://github.com/LateefAkinola',
  twitterHandle: '@AkLatino',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/LateefAkinola',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/lateefakinola/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/LateefAkinola',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/akinola_lateef_olanrewaju/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/aklatino',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
