const vitePluginGA = (options: { id: string; entryNames?: string }) => ({
  name: 'ga',
  enforce: 'post',
  apply: 'build',
  transformIndexHtml: (html, ctx) => {
    const { id, entryNames } = options;

    if (!entryNames || entryNames.includes(ctx.filename)) {
      return [
        {
          tag: 'script',
          attrs: {
            async: '',
            src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
          },
          injectTo: 'body',
        },
        {
          tag: 'script',
          injectTo: 'body',
          children: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');
`,
        },
      ];
    }
  },
});

export default vitePluginGA;
