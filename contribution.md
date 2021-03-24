# Contributing

Thanks for your interest in contributing to this project. Please take a moment to review this document **before submitting a pull request**.

## Pull requests

It's never a fun experience to have your pull request declined after investing a lot of time and effort into a new feature. To avoid this from happening, we request that contributors create [an issue](https://github.com/tailwind-master-piece/tailwind-master-piece.github.io/issues) to first discuss any significant new features. This includes things like adding new utilities, creating new at-rules, etc.

## Coding standards

Our code formatting rules are defined in [.eslintrc](https://github.com/tailwind-master-piece/tailwind-master-piece.github.io/blob/develop/.eslintrc.js). You can check your code against these standards by running:

```sh
yarn run lint
```

To automatically fix any style code violations in your code, you only have to commit:

```sh
git commit -m "message"
```

## Running tests

You can run the test suite using the following commands:

```sh
yarn run test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features to Tailwind, please include tests.
