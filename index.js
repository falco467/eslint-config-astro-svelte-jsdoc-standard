import eslint from '@eslint/js'
import globals from 'globals'
import tsEslint from 'typescript-eslint'
// TODO Astro parsing currently broken with projectService: https://github.com/ota-meshi/astro-eslint-parser/issues/331
// import epAstro from 'eslint-plugin-astro'
// import astroParser from 'astro-eslint-parser'
import epSvelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
// TODO: Wait for love to support eslint 9 and flat config: https://github.com/mightyiam/eslint-config-love/issues/1589
// import love from 'eslint-config-love'

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
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
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsEslint.parser,
      }
    },
    rules: {
      'no-self-assign': 'off',
      // TODO: JSDoc Types are not handled correctly in Svelte files: https://github.com/sveltejs/svelte-eslint-parser/issues/533
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
      '@typescript-eslint/no-unused-vars': [
        'error',
        { "argsIgnorePattern": "^_" }
      ],
      '@typescript-eslint/restrict-template-expressions': 'off',
    },
  },
]
