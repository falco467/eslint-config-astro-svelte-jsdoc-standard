import eslint from '@eslint/js'
import globals from 'globals'
import tsEslint from 'typescript-eslint'
import epAstro from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'
import epSvelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
// import love from 'eslint-config-love'

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  ...epAstro.configs['flat/recommended'],
  ...epSvelte.configs['flat/recommended'],
  {
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.astro','.svelte']
      },
      globals: {
        ...globals.browser
      }
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsEslint.parser,
      }
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsEslint.parser,
      }
    },
    rules: {
      // TODO: JSDoc Types are not handled correctly in Svelte files
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  {
    rules: {
      'no-self-assign': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { "argsIgnorePattern": "^_" }
      ],
      '@typescript-eslint/restrict-template-expressions': 'off',
    },
  },
]
