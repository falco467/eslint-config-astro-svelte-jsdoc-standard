module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:svelte/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'love',
  ],
  rules: {
    // Needed for svelte reactivity assignment
    'no-self-assign': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { "argsIgnorePattern": "^_" }
    ],

    // Needed because typescript doesn't handle JSDoc correctly
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
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
