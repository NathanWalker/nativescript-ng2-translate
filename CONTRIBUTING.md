## Developing

*Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)*

* `npm install nativescript -g`
* `npm install typescript -g`
* `npm install`

### Run Demo App to Try Library

```
npm run demo.ios

// or...

npm run demo.android
```

### Build library

```
npm run build
```

### Testing

```
npm test
```

### Documentation

You can generate api docs (using [TypeDoc](http://typedoc.io/)) for your code with the following:
```bash
npm run docs
```

### Submitting Pull Requests

**Please follow these basic steps to simplify pull request reviews - if you don't you'll probably just be asked to anyway.**

* Please rebase your branch against the current master
* Please ensure that the test suite passes **and** that code is lint free before submitting a PR by running:
 * ```npm test```
* If you've added new functionality, **please** include tests which validate its behaviour
* Make reference to possible [issues](https://github.com/preboot/angular2-library-seed/issues) on PR comment

### Submitting bug reports

* Please detail the affected browser(s) and operating system(s)
* Please be sure to state which version of node **and** npm you're using
