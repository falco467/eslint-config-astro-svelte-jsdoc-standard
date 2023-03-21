module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:svelte/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard',
  ],
  rules: {
    // Needed for svelte reactivity assignment
    'no-self-assign': 'off',
    // Needed to call async function without await
    'no-void': 'off',

    // All following rules are needed because typescript-eslint parser does not always discover types reliably
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-plus-operands': [
      'error', { allowAny: true }
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'error', { allowAny: true }
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
  ignorePatterns: ['.eslintrc.cjs'],
}
