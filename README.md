# Angular Based UI5 Web Components Demo (Without Origami)
The current recommendation by [UI5 Web Components](https://sap.github.io/ui5-webcomponents/) when using Angular for [Two Way Binding](https://sap.github.io/ui5-webcomponents/playground/frameworks/angular/) is to use the [Origami](https://github.com/hotforfeature/origami) library.  The Origami library has not been maintained for some time now, based on the current commit history.  

This demo project was developed to demonstate that the use of Origami is not required with UI5 Web Components.  It is directly based on the two way binding demo for Angular found in the standard documentation [here](https://angular.io/guide/two-way-binding).  

Key outcomes were:
- Demonstrated the ability to perform two way binding without the need for Origami 

## Angular Version
![Demo App](/assets/app.png)

## UI5 Version
![Demo App UI5](/assets/app-ui5.png)

## Angular Client Version
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.  To install the client run `npm install -g @angular/cli@14.2.2`.

## NodeJS Version
This project was developed and tested using NodeJS version 14.21.1

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
