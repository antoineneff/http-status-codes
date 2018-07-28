# http-status-codes

> Get HTTP status codes description

## Install

```
$ npm install @antoineneff/http-status-codes
```

## Usage

```js
const status = require('@antoineneff/http-status-codes')

// You can use a number or a string
status('200').code // 200
status(200).message // "OK"
status(200).description // "The request has succe..."

status(200) // All of the above
```

## Resources

- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) - List of the HTTP status codes

## License

MIT © Antoine Neff
