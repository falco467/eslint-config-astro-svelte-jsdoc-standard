![GitHub package.json version](https://img.shields.io/github/package-json/v/falco467/eslint-config-astro-svelte-jsdoc-standard)
![License](https://img.shields.io/github/license/falco467/eslint-config-astro-svelte-jsdoc-standard)
![GitHub issues](https://img.shields.io/github/issues/falco467/eslint-config-astro-svelte-jsdoc-standard)

An [ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for JavaScript Projects using Astro and Svelte with JSDoc Type-Information that is based on [eslint-config-standard](https://github.com/standard/eslint-config-standard) and has rules supporting type-information from [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

# Usage

Add all packages to your project:

```
npm install --save-dev eslint-config-astro-svelte-jsdoc-standard
```

Edit your `.eslintrc.js`:

```js
module.exports = {
  extends: [ 'eslint-config-astro-svelte-jsdoc-standard' ],
  parserOptions: { tsconfigRootDir: __dirname }
}
```

You may want to override and configure [some `parserOptions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration) in ESLint when using this package.

# Example command line usage:

```
$ npx eslint .
```
