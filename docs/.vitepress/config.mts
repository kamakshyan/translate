import footnote from 'markdown-it-footnote';
import {withMermaid} from 'vitepress-plugin-mermaid';

import {defineConfig} from 'vitepress';

export default withMermaid(
  defineConfig({
    title: 'Documentation',
    description: 'sign.mt Documentation and Blog',
    base: '/docs/',
    lastUpdated: true,
    sitemap: {
      hostname: 'https://sign.mt/docs/',
    },
    themeConfig: {
      search: {
        provider: 'local',
      },
      editLink: {
        pattern: 'https://github.com/sign/translate/tree/master/docs/:path',
      },
      logo: {
        light: '/logo-light.svg',
        dark: '/logo-dark.svg',
        alt: 'sign.mt Logo',
      },
      nav: [
        {text: 'Docs', link: '/docs/introduction/getting-started'},
        {text: 'Blog', link: '/blog/introduction/our-blog'},
      ],
      sidebar: {
        '/blog/': [
          {
            text: 'Introduction',
            items: [
              {
                text: 'Our Blog',
                link: '/blog/introduction/our-blog',
              },
            ],
          },
        ],
        '/docs/': [
          {
            text: 'Introduction',
            items: [
              {
                text: 'Getting Started',
                link: '/docs/introduction/getting-started',
              },
            ],
          },
          {
            text: 'Fact Sheets',
            collapsed: false,
            items: [
              {
                text: 'Numbers',
                link: '/docs/facts/numbers',
                items: [
                  {text: 'Hearing Loss', link: '/docs/facts/numbers#hearing-loss'},
                  {text: 'Deafness', link: '/docs/facts/numbers#deafness'},
                ],
              },
              {
                text: 'Literacy',
                link: '/docs/facts/literacy',
                items: [
                  {text: 'Challenges', link: '/docs/facts/literacy#challenges-and-causes'},
                  {text: 'Statistics', link: '/docs/facts/literacy#statistics'},
                ],
              },
              {
                text: 'Market',
                link: '/docs/facts/market',
              },
            ],
          },
        ],
      },

      socialLinks: [
        {icon: 'github', link: 'https://github.com/sign/translate'},
        {icon: 'x', link: 'https://x.com/signmt_'},
        {icon: 'linkedin', link: 'https://www.linkedin.com/company/sign-mt'},
      ],
    },
    head: [
      ['script', {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-87YJPM7261'}],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-87YJPM7261');`,
      ],
    ],
    markdown: {
      config: md => {
        md.use(footnote);
      },
    },
  })
);
