# eslint-config-kyo

[![npm](https://img.shields.io/npm/v/eslint-config-kyo.svg)](https://www.npmjs.com/package/eslint-config-kyo)
[![npmDl](https://img.shields.io/npm/dt/eslint-config-kyo.svg)](https://www.npmjs.com/package/eslint-config-kyo)
[![build](https://img.shields.io/travis/kyostra/eslint-config-kyo.svg?style=flat)](https://travis-ci.org/kyostra/eslint-config-kyo)
[![license](https://img.shields.io/github/license/kyostra/eslint-config-kyo.svg)](https://github.com/kyostra/eslint-config-kyo/blob/master/LICENSE)

[![npmbadge](https://nodei.co/npm/eslint-config-kyo.png)](https://nodei.co/npm/eslint-config-kyo/)

My ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs.html)

## Install
```
$ npm install --save-dev eslint-config-kyo
```

### Updating
Sometimes when using `npm oudated` then `npm update`, npm doesn't update the config. If this occurs to you, then use this instead:

```
$ npm install --save-dev eslint-config-kyo@latest
```

## Usage
Once you have installed `eslint-config-kyo`, you can use it by specifying `kyo` in the `extends` section of your [ESLint Configuration](https://eslint.org/docs/user-guide/configuring), in your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "kyo",
    "rules": {
      "rule": "off"
    }
  }
}
```

If you use a different file for your [ESLint Configuration](https://eslint.org/docs/user-guide/configuring), then you would add the following to your `eslintrc.json` or `eslintrc.js`:

```
{
	"extends": "kyo"
}
```

There is no need to extend `eslint:recommended` as this config already does this by default, but may change in the future.

## Environments
If you are developing with Node.js, please use the following instead:

```json
{
  "eslintConfig": {
    "extends": "kyo/node",
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
    "extends": "kyo/browser",
    "rules": {
      "rule": "off"
    }
  }
}
```

## Author

**eslint-config-kyo** © [Kyostra](https://github.com/kyostra), Released under the [MIT License](https://github.com/kyostra/eslint-config-kyo/blob/master/LICENSE).

Created and maintained by Kyostra.
