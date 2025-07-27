// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.strictTypeChecked,
    {
        rules: {
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
);
