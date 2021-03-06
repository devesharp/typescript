# eslint-config-devesharp

> ESLint config with TypeScript

## Usage

Install dependencies.

```bash
yarn add @typescript-eslint/eslint-plugin@^2.7.0 \
	eslint-config-airbnb-typescript@^6.3.1 \
	eslint-config-prettier@^6.4.0 \
	eslint-plugin-import@^2.18.2 \
	eslint-plugin-jest@^22.17.0 \
	eslint-plugin-jsx-a11y@^6.2.3 \
	eslint-plugin-prettier@^3.1.1 \
	eslint-plugin-react@^7.15.1 \
	eslint-plugin-react-hooks@^1.7 \
	eslint-plugin-import-helpers@1.0.2 \
	@devesharp/eslint-config-typescript \
	eslint \
	prettier \
	typescript \
	-D
```

Create a `.eslintrc.js` with:

```js
module.exports = {
    extends: ['@devesharp/typescript'],
};
```

Within your Prettier config file `.prettierrc.js`:

```js
module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    useTabs: false,
    printWidth: 120,
    tabWidth: 4,
};
```

Within your `.editorconfig`:

```yml
root = true

[*]
indent_style = space
indent_size = 4
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false

[*.yml]
indent_style = space
indent_size = 4
```

## Without React

Install dependencies.

```bash
yarn add @typescript-eslint/eslint-plugin@^2.7.0 \
	eslint-config-airbnb-typescript@^6.3.1 \
	eslint-config-prettier@^6.4.0 \
	eslint-plugin-import@^2.18.2 \
	eslint-plugin-jest@^22.17.0 \
	eslint-plugin-jsx-a11y@^6.2.3 \
	eslint-plugin-prettier@^3.1.1 \
	@devesharp/eslint-config-typescript \
	eslint \
	prettier \
	typescript \
	-D
```

Create a `.eslintrc.js` with:

```js
module.exports = {
    extends: ['@devesharp/typescript/base'],
};
```
