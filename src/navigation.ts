// Navigation data for the site
// All external links should open in a new tab

// Social links used in both header and footer
export const socialLinks = [
  { 
    text: 'Twitter', 
    href: 'https://www.x.com/sebzuddas', 
    icon: 'tabler:brand-x',
    ariaLabel: 'Twitter'
  },
  { 
    text: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/sebzuddas/', 
    icon: 'tabler:brand-linkedin',
    ariaLabel: 'LinkedIn'
  },
  { 
    text: 'Instagram', 
    href: 'https://www.instagram.com/sebzuddas', 
    icon: 'tabler:brand-instagram',
    ariaLabel: 'Instagram'
  },
  { 
    text: 'GitHub', 
    href: 'https://github.com/sebzuddas', 
    icon: 'tabler:brand-github',
    ariaLabel: 'GitHub'
  },
];

export const headerData = {
  links: [
    {
      text: 'Me',
      links: [
        {
          text: 'Website',
          href: 'https://www.sebzuddas.com',
          target: '_blank',
          icon: 'tabler:link'
        },
        {
          text: 'Projects',
          href: 'https://www.sebzuddas.com/projects',
          target: '_blank',
          icon: 'tabler:folder'
        }
      ]
    },
    {
      text: 'Get in touch',
      links: [
        {
          text: 'WhatsApp',
          href: 'https://wa.me/+447598064088',
          icon: 'tabler:brand-whatsapp',
          target: '_blank'
        },
      ]
    }
  ],
  actions: [],
  socialLinks: socialLinks,
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://www.x.com/sebzuddas' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/sebzuddas/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/sebzuddas' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/sebzuddas' },
  ],
};
