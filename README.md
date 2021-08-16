# Typescript Library Template

[![Release](https://github.com/reconbot/typescript-library-template/actions/workflows/test.yml/badge.svg)](https://github.com/reconbot/typescript-library-template/actions/workflows/test.yml)

This is an example project for shipping typescript using the rules layed out by [@southpolesteve](https://twitter.com/southpolesteve) in his ["Shipping Typescript to NPM"](https://speakerdeck.com/southpolesteve/shipping-typescript-to-npm?slide=10) talk that he gave at NYC typescript.

It gives you a library in UMD and ESM that's rolled up with rollup and includes rolled up types. It makes browser users, node users and me very happy.

Also includes eslint, mocha, semantic-release and github actions.  Now updated to include the exports directive in the package.json.

## Guide

- Set the repo secret `NPM_TOKEN` before your first push so that you can publish to npm.
- Change all references in package.json to your own project name
- If you want external dependencies, add them to the `external` section in the `rollup.config.js` otherwise they will be bundled in the library.
