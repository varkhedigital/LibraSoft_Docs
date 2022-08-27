// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LibraSoft Kütüphane Otomasyonu',
  tagline: 'Kütüphane yönetmek hiç bu kadar kolay olmadı!',
  url: 'https://kutuphaneotomasyonu.web.tr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'varkhedigital', // Usually your GitHub org/user name.
  projectName: 'librasoft_docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LibraSoft Kütüphane Otomasyonu',
        /*logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },*/
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Dokümantasyon',
          },
          {
            href: 'https://kutuphaneotomasyonu.web.tr',
            label: 'LibraSoft',
            position: 'right',
          },
          {
            href: 'https://kutuphaneotomasyonu.web.tr/panel',
            label: 'Kütüphane Paneli',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Bağlantı',
            items: [
              {
                label: 'LibraSoft',
                href: 'https://kutuphaneotomasyonu.web.tr',
              },
              {
                label: 'Kütüphane Paneli',
                href: 'https://kutuphaneotomasyonu.web.tr/panel'
              },
              {
                label: 'Dokümantasyon',
                to: '/welcome'
              }
            ],
          },
          {
            title: 'Topluluk & Sosyal Medya',
            items: [
              {
                label: 'Yakında!',
                to: '#'
              }
            ],
          },
        ],
        copyright: `Tüm hakları saklıdır. © ${new Date().getFullYear()} - LibraSoft Kütüphane Otomasyonu`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
