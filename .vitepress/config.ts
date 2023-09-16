import { defineConfig } from 'vitepress';

export default defineConfig({
  appearance: true,
  base: '/vite-plugin-ga/',
  title: 'vite-plugin-ga',
  description: 'Vite Plugin GA.',

  themeConfig: {
    logo: '/logo.svg',
    nav: [{ text: 'Guide', link: '/' }],
    search: {
      provider: 'local',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/yujinpan/vite-plugin-ga',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-2023 yujinpan',
    },
    lastUpdatedText: 'Last Updated',
  },

  async transformHtml(code) {
    return code.replace(
      '</body>',
      `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S66MPLRFJZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S66MPLRFJZ');
</script>
</body>
`,
    );
  },
});
