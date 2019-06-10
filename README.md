# Boomtown 🏙
A Web-Based Application that allows users who have a registered account to browse through their own items and 
other User's items and profile. The Users can share their own items. The UI Application is built on React
and Material UI library. 

It features a state management tool known as Redux, which holds the entire state application allowing predictable state updates. This can be interacted with by sending actions, where the action creators make an action. 

PostgreSQL is used to store shareable items and user info. It uses Node.js/Express as its web server which connects to client via Appolo, and GraphQL for its client-facing API.

# Technologies: 

The following technologies were applied in building and delivering Boomtown's backend application:- 

1.	JavaScript  
1.	GraphQL
1.  Express
1.  Node
1.  POSTGRESQL
1.  Apollo 


# Libraries: 

1. React 
1. Redux 
1. React Final Form 
1. Material UI

# SnapShots

## Welcome Page 

<img width="1430" alt="Screen Shot 2019-06-09 at 10 50 07 PM" src="https://user-images.githubusercontent.com/43800526/59176720-cf959300-8b0e-11e9-9391-a05f227d5246.png">

## Items Page

![screencapture-localhost-3000-items-2019-06-09-23_36_56](https://user-images.githubusercontent.com/43800526/59177019-9a3d7500-8b0f-11e9-994c-f73dd6e63f0d.png)

## Share Page 

<img width="1437" alt="Screen Shot 2019-06-09 at 10 48 09 PM" src="https://user-images.githubusercontent.com/43800526/59177065-be00bb00-8b0f-11e9-82a6-dcd971493490.png">



#  Personal Learning Developments: 

1.	GraphQL can be used to Query from an API and/or Database.

1.	GraphQL requires a Schema which consists of TypeDefs & Resolvers

1. Resolvers are a method or a function that resolves a value for a field or type in a schema.

1.  Efficient Query Language that mitigates over-fetching and under fetching data

1. React Final Form subscribes to all changes and is framework agnostic

1. JSON Web Token contains all data to validate users

1. Protecting passwords with salted password hashing

# Instructions to run the project

## Server Set-Up

Commands must be run from the `server` directory:

### Installation

```bash
npm install
```

### Run

```bash
npm run start:dev
```

### Tests

Just linting:

```bash
npm run lint
```

Run linting, and fix any errors:

```bash
npm run lint:fix
```

Run Jest tests:

```
npm run jest
```

Run Jest tests, and watch for changes:

```bash
npm run jest:watch
```

Run all tests:

```bash
npm run test
```

## Client

Commands must be run from the `client` directory:

### Installation

```bash
npm install
```

### Run

```bash
npm start
```

### Build

```bash
npm run build
```

### Tests

Just linting:

```bash
npm run lint
```

Run linting, and fix any errors:

```bash
npm run lint:fix
```

Run all tests:

```bash
npm run test
```


