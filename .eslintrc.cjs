module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: 'airbnb',
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    settings: {
        'import/core-modules': ['react-router']
    },
    rules: {
        'react/jsx-indent': ['error', 4],
        indent: [2, 4],
        'react/react-in-jsx-scope': [0],
        'import/no-unresolved': [0],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
        'comma-dangle': ['warn', 'never'],
        'no-unused-vars': 'warn',
        // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/no-extraneous-dependencies': [0],
        'max-len': [0],
        'import/prefer-default-export': 'off',
        'linebreak-style': [0],
        'no-console': [0],
        'react/prop-types': [0],
        'jsx-a11y/no-static-element-interactions': [0],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-closing-bracket-location': ['error', 'after-props'],
        'no-plusplus': [0],
        'jsx-a11y/label-has-associated-control': [0],
        'no-trailing-spaces': 'off',
        'react/jsx-no-bind': 'off'
    }
};
