# eslint-config-kyostra

[![npm](https://img.shields.io/npm/v/eslint-config-kyostra.svg)](https://www.npmjs.com/package/eslint-config-kyostra)
[![npmDl](https://img.shields.io/npm/dt/eslint-config-kyostra.svg)](https://www.npmjs.com/package/eslint-config-kyostra)
[![build](https://img.shields.io/travis/kyostra/eslint-config-kyostra.svg?style=flat)](https://travis-ci.org/kyostra/eslint-config-kyostra)
[![license](https://img.shields.io/github/license/kyostra/eslint-config-kyostra.svg)](https://github.com/kyostra/eslint-config-kyostra/blob/master/LICENSE)

[![npmbadge](https://nodei.co/npm/eslint-config-kyostra.png)](https://nodei.co/npm/eslint-config-kyostra/)

My ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs.html)

## Install
```
$ npm install --save-dev eslint-config-kyostra
```

### Updating
Sometimes when using `npm oudated` then `npm update`, npm doesn't update the config. If this occurs to you, then use this instead:

```
$ npm install --save-dev eslint-config-kyostra@latest
```

## Usage
Once you have installed `eslint-config-kyostra`, you can use it by specifying `kyostra` in the `extends` section of your [ESLint Configuration](https://eslint.org/docs/user-guide/configuring), in your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "kyostra",
    "rules": {
      "rule": "off"
    }
  }
}
```

If you use a different file for your [ESLint Configuration](https://eslint.org/docs/user-guide/configuring), then you would add the following to your `eslintrc.json` or `eslintrc.js`:

```
{
	"extends": "kyostra"
}
```

There is no need to extend `eslint:recommended` as this config already does this by default, but may change in the future.

## Environments
If you are developing with Node.js, please use the following instead:

```json
{
  "eslintConfig": {
    "extends": "kyostra/node",
    "rules": {
      "rule": "off"
    }
  }
}
```

If you are developing for a browser application, set the environment to:

```json
{
  "eslintConfig": {
    "extends": "kyostra/browser",
    "rules": {
      "rule": "off"
    }
  }
}
```

## Author

**eslint-config-kyostra** © [Kyostra](https://github.com/kyostra), Released under the [MIT License](https://github.com/kyostra/eslint-config-kyostra/blob/master/LICENSE).

Created and maintained by Kyostra.
