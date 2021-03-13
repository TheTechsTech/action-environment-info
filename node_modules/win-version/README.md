# win-version

[![npm version](https://img.shields.io/npm/v/win-version.svg)](https://www.npmjs.com/package/win-version)

> Get the version information of a Windows OS

## Installation

```sh
npm install win-version
```

## Usage

```js
const winVersion = require('win-version');

winVersion();
// => { major: 10,
//   minor: 0,
//   build: 19042,
//   releaseId: 2009,
//   revision: 572,
//   osBuild: 19042.572,
//   version: '20H2' }

winVersion();
// => { major: 10,
//   minor: 0,
//   build: 16299,
//   releaseId: 1709,
//   revision: 214,
//   osBuild: 16299.214,
//   version: 1709 }

winVersion('10.0.18362.267');
// => { major: 10,
//   minor: 0,
//   build: 18362,
//   releaseId: 1903,
//   revision: 267,
//   osBuild: 18362.267,
//   version: 1903 }

winVersion('6.1.7601');
// => { major: 6,
//   minor: 1,
//   build: 7601,
//   releaseId: -1,
//   revision: 0,
//   osBuild: 7601,
//   version: 'N/A' }
```

## License

MIT
