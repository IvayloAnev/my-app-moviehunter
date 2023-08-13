# MyAppMoviehunter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Overview
Single Page App for for sharing your favourtite Movie events. The application allows visitors to browse through different publications. Users may register with user information, email and password, which allows them to create their own events and make comments. Creators can also edit and delete their own sharings at any time.

## Technical Details 

A package.json file, containing list of common dependencies.
Components for every endpoint of the application.
To start the application, execute the command “npm install” via the command-line terminal.
SoftUni Practice Server: A special server, which contains sample data and support user registration and CRUD operations via REST requests is included with the project.

## Aplication endpoints

Navigation bar – links will correctly change the current page (view). Guests can see the links to the home, events, sign in and sign up pages. The logged in user navbar will contain the links to the home page, events, create page, logout action.

Sign in – contains a form for existing user authentication. By providing a email and password, the app will login user, if there are no empty fields. Login functionalty will send POST request to the correct endpoint with email and password with correct headers. Upon success, the REST service will return information about the existing user along with a property access token for the user. After successful login the user will be redirected to the events page. If there are empty fields, alert notification will be displayed.


Sign up – the page contains a form for new user registration. By providing a user information and password, the app will register a new user in the system, if there are no empty fields. Register functionalty will send POST request to the correct endpoint with names, email and password and correct headers. Upon success, the REST service will return information about the existing user along with a property access token for the user. After successful registration the user will be redirected to the home page. If there are empty fields, alert notification will be displayed.

Logout – The logout action is available for the logged in users. It perform GET request to the correct endpoint, with access token sent in the X-Authorization header. Any session information will be cleared.

Home page – All users will be welcomed by the Home page, where they can naviagate to the other views. 

Catalog Page – Movies  The page displays a list of all events in the system. Details button is available for the logged in users and clicking on the button, leads to the details page for the selected event.

Details Page – The logged in users are able to view details about every event. Clicking the Details button in the view will display the page. If the currently logged in user is the creator of the publication, the Edit and Delete buttons will be displayed.



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
