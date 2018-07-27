# http-status-codes

> Get HTTP status codes description

## Install

```
$ npm install @antoineneff/http-status-codes
```

## Usage

```js
const status = require('@antoineneff/http-status-codes')

status(200)
// { "code": 200,
//   "message": "OK",
//   "description": "The request has succeeded. The meaning of a success varies depending on the HTTP method." }
```

## Resources

- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) - List of the HTTP status codes

## License

MIT © Antoine Neff
