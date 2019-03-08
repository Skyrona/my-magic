# MyMagic

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/526b0bd58e0f47d5bb9fb71ac5f2137d)](https://www.codacy.com/app/Skyrona/my-magic?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Skyrona/my-magic&amp;utm_campaign=Badge_Grade)

![](demo.gif)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## How to install

Clone the repository and install the dependencies : 
```
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Build to cordova

Create an android platform for cordova : 
```bash
npm run cordova platform add android
```

Build the project : 
```bash
npm run build
```
Run the following command : 

```bash
npm run cordova build android --device
```


