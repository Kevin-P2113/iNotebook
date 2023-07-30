# iNotebook

A cloud notebook app made using the MERN technology stack

## Introduction

iNotebook is a cloud notebook app built using the MERN (MongoDB, Express, React, Node.js) technology stack. It allows users to store notes in the cloud, providing features for creating, reading, updating, and deleting notes. Additionally, the app includes user account services with login and signup functionalities, using JWT for authentication.

Features

User Authentication: Sign up and login to access and manage your notes securely.
Create Notes: Add new notes with a title and content to organize your ideas.
View Notes: Read and access your existing notes with ease.
Update Notes: Edit and modify your notes whenever needed.
Delete Notes: Remove notes you no longer require.

Technologies Used

* [React](https://react.dev)
* [Vite](https://vitejs.dev)
* [Bootstrap](https://getbootstrap.com)
* [Express](https://expressjs.com)
* [Node.js](https://nodejs.org/en)
* [MongoDB](https://www.mongodb.com)
* JSON Web Tokens (JWT) for authentication

### Installation

To get started with the cloud notebook app follow the instructions below to set up your development environment.

### Prerequisits

nodejs
npm

### Clone the repository

1. Open the terminal or command prompt.
2. Navigate to the location where you want to clone the repository.
3. Run the following command to clone the repository.

```bash
git clone https://github.com/Kevin-P2113/iNotebook.git
```

### Install Dependencies

1. Navigate to the project directory.

```bash
cd iNotebook
```

2. Install dependencies.

```bash
npm install
```

3. Navigate to the folder named "backend".

```bash
cd backend
```

4. install devendencies for the backend.

```bash
npm install
```

### Setup mongodb

1. open your favourite browser and navigate to [MongoDb](https://www.mongodb.com).
2. create a free account.
3. create a free cluster
4. navigate to the "connect" tab and click on "drivers"
5. copy the database link it will look something like this

```bash
mongodb+srv://<username>:<password>@cluster0.cnwjerc.mongodb.net/test?retryWrites=true&w=majority
```

6. paste the link in the `db.js` file in `iNotebook>backend` in place of `<YOUR MONGO DB URI>`

### Starting the Development Server

1. navigate to the `package.json` file inside the root directory.
2. add the follwoing element to the `scripts` object

```bash
"both": "concurrently \"npm run dev\" \"npm run devStart\""
```

3. you can then run both the express and react app using the following command in the terminal

```bash
npm run both
```

4. if you want to only run the react app then type the following command in the terminal while being in the root directory `iNotebook`

```bash
npm run dev
```

5. if you wan to only run the express server then navigate to the `backend` folder in the terminal and type

```bash
nodemon index.js
```
