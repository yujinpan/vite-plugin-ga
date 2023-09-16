# Vite Plugin GA

Append GoogleAnalytics html code to your entry template.

## Usage

```shell
npm i -D vite-plugin-ga
```

```ts
import vitePluginGA from 'vite-plugin-ga';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [
    vitePluginGA({
      id: 'G-xxx',
      entryNames: ['index.html']
    }),
  ],
});
```