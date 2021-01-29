# Rubric Creator by [Marco Learning](https://marcolearning.com/)

Create and share scoring rubrics for grading papers. Made for educators by [Marco Learning](https://marcolearning.com/) and available for free at [rubriccreator.com](https://www.rubriccreator.com).

[![Codeship Status for thegraidenetwork/rubric-creator](https://app.codeship.com/projects/95a16760-27a5-0136-f837-6ef2b9ae3ded/status?branch=master)](https://app.codeship.com/projects/287071) [![Coverage Status](https://coveralls.io/repos/github/thegraidenetwork/rubric-creator/badge.svg?branch=master)](https://coveralls.io/github/thegraidenetwork/rubric-creator?branch=master)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Latest tagged release](https://img.shields.io/github/tag/thegraidenetwork/rubric-creator.svg)](https://img.shields.io/github/tag/thegraidenetwork/rubric-creator.svg)

![](https://i.imgur.com/Q6xO1eV.gif)

## Development

While this product is freely available on the web, you may also want to customize it or submit improvements. The guide below should help you get started.

### Prerequisites
- Node 7.0+
- NPM 5.0+

### Installation

- Clone this repository: `git clone git@github.com:thegraidenetwork/rubric-creator.git`
- Install npm dependencies: `npm install`
- Run the development server: `ng serve`

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you want to test the service worker or offline functionality:

- Build the files for production: `ng build --prod`.
- Install Node HTTP Server globally (should just need to do once): `npm install -g http-server`.
- Navigate to the dist folder: `cd dist`.
- And run the server: `http-server -c-1 .`.

Your app should be running in production mode at `http://localhost:8080/`.

### Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Linting

Run `npm run lint` to execute the linter via [TSLint](https://palantir.github.io/tslint/).

### Building

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build and the `--aot` flag for ahead-of-time compilation (recommended).

## Contributing

Contributions are welcome and encouraged to this open source project. Please be sure to [submit an issue on Github](https://github.com/thegraidenetwork/rubric-creator/issues) to solicit discussion before jumping in as someone else might be working on the same thing.

Also be sure to read and adhere to our [code of conduct](/CODE_OF_CONDUCT.md).

## Deploying

Once you have built the files, you can copy them into a file hosting service like Azure's Blob Storage or Amazon S3. The following tutorials should help you get started:

- [Tutorial for Azure](https://blog.codeship.com/serving-an-angular-app-on-azures-cdn-with-codeship-and-docker/)
- [Tutorial for S3](https://johnlouros.com/blog/host-your-angular-app-in-aws-s3)

## Special Thanks

This project was built on the back of many great open source projects. Here are a few of them:

- [Angular](https://angular.io/)
- [NGRX Store, Effects](https://github.com/ngrx/platform)
- [@ngx-pwa/local-storage](https://www.npmjs.com/package/@ngx-pwa/local-storage)
- [JSONbin.io](https://jsonbin.io/)
- [Bootstrap](https://getbootstrap.com/)
- [iconic icons](https://useiconic.com/open/)

## License

Copyright 2020, [Marco Learning](https://marcolearning.com/)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
