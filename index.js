module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'prettier/react',
    ],
    plugins: ['jest', 'import-helpers'],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'comma-dangle': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/camelcase': ['error', { properties: 'always' }],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        //'@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "interface",
            "format": ["PascalCase"],
            "custom": {
              "regex": "^I[A-Z]",
              "match": false
            }
          }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                // if true, only functions which are part of a declaration will be checked
                allowExpressions: true,
            },
        ],
        // React
        'react/prefer-stateless-function': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-props-no-spreading': 'off', // habilitar <LoginScreen {...loginScreen} />
        'react/state-in-constructor': ['warn', 'always'],
        // Import Helpers
        'import-helpers/order-imports': [
            'warn',
            {
                groups: ['/^react/', 'module', '/^@shared/', '/^@library/', ['parent', 'sibling', 'index']],
                alphabetize: { order: 'asc', ignoreCase: true },
            },
        ],
    },
};
