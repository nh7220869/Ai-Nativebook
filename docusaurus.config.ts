import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Hackathon Native Book – Physical AI & Humanoid Robotics',
  tagline: 'A Comprehensive Guide to Building Intelligent Robots',
  favicon: 'img/favicon.ico',

  // Future flags
  future: {
    v4: true, // Improve compatibility with upcoming Docusaurus v4
  },

  // Production URL & base
  url: 'https://panaversity.github.io',
  baseUrl: '/physical-ai-book/',
  organizationName: 'panaversity',
  projectName: 'physical-ai-book',

  onBrokenLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur', 'es'], // Added Urdu and Spanish as example locales
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      ur: {
        label: 'اردو', // Urdu label
        direction: 'rtl', // Right-to-left for Urdu
        htmlLang: 'ur-PK',
        calendar: 'gregory',
        path: 'ur',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-ES',
        calendar: 'gregory',
        path: 'es',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },

    // Navbar configuration
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI & Humanoid Robotics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
          to: '/docs', // Explicitly link to docs homepage
        },
        {
          type: 'html', // New HTML item for the label
          position: 'right',
          value: '<span style="margin-right: 5px;">Translate Book:</span>', // The text
          className: 'navbar__item', // To apply Docusaurus navbar styling
        },
        {
          type: 'localeDropdown', // Add the language dropdown
          position: 'right',
        },
      ],
    },

    // Footer configuration
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Creator / Developer',
          items: [
            { label: 'Noor Ul Sehar', href: 'https://github.com/nh7220869', target: '_blank', rel: 'noopener noreferrer' },
            { label: 'Robotics Engineer | AI Enthusiast', to: '#' }, // Placeholder link for professional line
          ],
        },
        {
          title: 'External Links',
          items: [
            { label: 'Portfolio', href: 'https://v1-portfolio-web-next-js-cs--beta.vercel.app/', target: '_blank', rel: 'noopener noreferrer' },
            { label: 'GitHub', href: 'https://github.com/nh7220869', target: '_blank', rel: 'noopener noreferrer' },
            { label: 'Vercel', href: 'https://vercel.com/noor-ul-sehars-projects', target: '_blank', rel: 'noopener noreferrer' },
            { label: 'Discord (Noor)', href: 'https://discord.com/users/nh7220869', target: '_blank', rel: 'noopener noreferrer' }, // Assuming Discord User ID based on GitHub username
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Developed by Noor Ul Sehar. All rights reserved.`,

    // Code syntax highlighting
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
