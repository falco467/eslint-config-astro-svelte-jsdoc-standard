![GitHub package.json version](https://img.shields.io/github/package-json/v/falco467/eslint-config-astro-svelte-jsdoc-standard)
![License](https://img.shields.io/github/license/falco467/eslint-config-astro-svelte-jsdoc-standard)
![GitHub issues](https://img.shields.io/github/issues/falco467/eslint-config-astro-svelte-jsdoc-standard)

An [ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for JavaScript Projects using Astro and Svelte with JSDoc Type-Information that is based on [eslint-config-standard](https://github.com/standard/eslint-config-standard) and has rules supporting type-information from [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

# Peer dependencies 

This package specifies the following `peerDependencies`:

- [ESLint](https://github.com/eslint/eslint)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) ESLint rules for TypeScript.
- [eslint-plugin-astro](https://www.npmjs.com/package/eslint-plugin-astro) Parser for Astro files.
- [eslint-plugin-svelte](https://www.npmjs.com/package/eslint-plugin-svelte) Parser for Svelte files.

# Example config

Here is an example `.eslintrc.js`:

```js
module.exports = {
  extends: 'eslint-config-astro-svelte-jsdoc-standard',
  parserOptions: {
    project: './tsconfig.json'
  }
}
```

Note: Please read some important instructions regarding the `project` option [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration).

There are [some more `parserOptions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration) you may care about.

# Example command line usage:

```
$ npx eslint src
```