import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import tsEslint from 'typescript-eslint'
import globals from 'globals'
import love from 'eslint-config-love'

import epSvelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
import epAstro from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'

export default [
  eslint.configs.recommended,
  stylistic.configs['recommended-flat'],
  ...epSvelte.configs['flat/recommended'],
  ...epAstro.configs.recommended,

  ...[
    ...tsEslint.configs.strictTypeChecked,
    ...tsEslint.configs.stylisticTypeChecked,
    love,
    {
      languageOptions: {
        parser: tsEslint.parser,
        parserOptions: {
          projectService: true,
          extraFileExtensions: ['.svelte'],
        },
        globals: {
          ...globals.browser
        }
      },
      rules: {
        // opt out of too severe rules from love
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/prefer-destructuring': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        'complexity': ['error', { variant: 'modified', max: 20 }],
        
        '@stylistic/max-statements-per-line': ['error', {max: 2}],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { "argsIgnorePattern": "^_" }
        ],
        '@stylistic/space-before-function-paren': ['error', 'always'],
        '@stylistic/arrow-parens': ['error', 'as-needed'],
      },
    },
  ].map(config => ({...config, ignores:["**/*.astro"]})),

  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      // Astro parsing currently broken with projectService: https://github.com/ota-meshi/astro-eslint-parser/issues/331
      // .astro files will only get untyped checks
      parserOptions: {
        projectService: false,
        parser: null
      },
      globals: {
        ...globals.browser
      }
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsEslint.parser,
        projectService: true,
      }
    },
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      'prefer-const': 'off',
      // JSDoc Types are not handled correctly in Svelte files: https://github.com/sveltejs/svelte-eslint-parser/issues/533
      // But these errors will be found by svelte-check
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
    },
  },
]
