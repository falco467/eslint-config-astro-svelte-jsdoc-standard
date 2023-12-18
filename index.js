module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:svelte/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard-with-typescript',
  ],
  rules: {
    // Needed for svelte reactivity assignment
    'no-self-assign': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { "argsIgnorePattern": "^_" }
    ],
  },
  parserOptions: {
    project: true,
    extraFileExtensions: ['.svelte','.astro'],
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  ignorePatterns: ['.eslintrc.js', '.eslintrc.cjs'],
}
