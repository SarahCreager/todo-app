# To Do List Manager

## Problem Domain

Part 4 of a 4-Phase build of the To Do List application. In Phase 1, I refactored the application and implemented context API. I also learned how to use Blueprint Component API and styled the application with this. In Phase 2, I implemented a user preference form where the user can alter the view of the application using context API. I also implemented local storage so the user's preferences are applied automatically on startup.  Phase 3 implements log in log out feature and authorization. Includes test suite. In Phase 4, I connected to a live server for login, authorization, and data access

## Features 

* Style the application using the Blueprint Component API

* Properly modularize the application into separate components

* Implement the Context API to make some basic application settings available to components

* Provide the users with a form where they can change the values for those settings

* Save the users choices in Local Storage

* Retrieve user preferences from Local Storage and apply them to the application on startup

* Implement a Login/Auth React Context, “protect” the To Do application by restricting access to the various application features based on the users’ login status and capabilities.

* Create an `<Auth />` component with the following features

* Implement a `<Login />` Component that has the following features:

* Alter the Add, Toggle Complete, and Delete functions within your to do application to use your API instead of in memory state.

* Alter the Login Context to use the server to login users instead of our mock users list.


## Deployment Link

[gh pages](https://sarahcreager.github.io/todo-app/)

[heroku](https://creager-todo-app-server.herokuapp.com/)

