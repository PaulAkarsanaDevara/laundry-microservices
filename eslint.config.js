import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default [
  // Ignore
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/coverage/**'],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // Custom rules for TS files
  {
    files: ['**/*.ts'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Hygiene
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // pnpm workspace friendly
      'import/no-unresolved': 'off',

      // Import order
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
    },
  },
];
