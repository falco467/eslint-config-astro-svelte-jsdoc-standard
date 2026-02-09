![GitHub package.json version](https://img.shields.io/github/package-json/v/falco467/eslint-config-astro-svelte-jsdoc-standard)
![License](https://img.shields.io/github/license/falco467/eslint-config-astro-svelte-jsdoc-standard)
![GitHub issues](https://img.shields.io/github/issues/falco467/eslint-config-astro-svelte-jsdoc-standard)

An [ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for JavaScript Projects using Astro and Svelte with JSDoc Type-Information that is based on [eslint-config-love](https://github.com/mightyiam/eslint-config-love) and has rules supporting type-information from [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

# Usage

Add all packages to your project:

```
pnpm install --save-dev eslint-config-astro-svelte-jsdoc-standard
```

Edit your `eslint.config.js`:

```js
import ecASJS from 'eslint-config-astro-svelte-jsdoc-standard'

export default [
  ...ecASJS,
]
```

# Details

The package will use all recommended rules from eslint, typescript-eslint (strictly type checked) and stylistic rules and love.
Some type-safe rules are partially disabled for .svelte and .astro files since the parsers cannot forward jsdoc type information
correctly to ESLint. But running svelte-check will catch type errors in svelte files.


# Example command line usage:

```
$ pnpm exec eslint src
```
