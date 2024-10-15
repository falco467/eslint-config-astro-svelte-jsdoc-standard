import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import tsEslint from 'typescript-eslint'
// TODO Astro parsing currently broken with projectService: https://github.com/ota-meshi/astro-eslint-parser/issues/331
// import epAstro from 'eslint-plugin-astro'
// import astroParser from 'astro-eslint-parser'
import epSvelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
// TODO Wait for eslint-love to support ESLint 9: https://github.com/mightyiam/eslint-config-love/issues/1589
// import love from 'eslint-config-love'

export default [
  eslint.configs.recommended,
  stylistic.configs['recommended-flat'],
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  // love,
  // ...epAstro.configs.recommended,
  ...epSvelte.configs['flat/recommended'],
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
  },
  // {
  //   files: ['**/*.astro'],
  //   languageOptions: {
  //     parser: astroParser,
  //     parserOptions: {
  //       parser: tsEslint.parser,
  //     }
  //   },
  // },
  {
    rules: {
      '@typescript-eslint/init-declarations': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@stylistic/max-statements-per-line': ['error', {max: 2}],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { "argsIgnorePattern": "^_" }
      ],
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
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
      'no-self-assign': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      // TODO: JSDoc Types are not handled correctly in Svelte files: https://github.com/sveltejs/svelte-eslint-parser/issues/533
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
