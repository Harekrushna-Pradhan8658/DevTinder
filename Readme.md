# DEVTINDER
- Create an account
- Login
- Create your profile
- Feed page - explore
- Send connection request 
- See due matches
- See the request we've sent/recived
- Update your profile

# Tech planning
- Microservices
  - Frontend
    - React
  - Backtend
    - NodeJS
    - MongoDB

# LLD - Low Level Design 
# DB Design
  - User
    - FirstName
    - LastName
    - EmailId
    - Password
    - Age
    - Gender
    - 
    - 
  - Connection Request
    - From UserId
    - to User Id
    - Status = Pending -> (Accepted-Rejected) , Ignored

# API Design {REST API}
  - GET ->	Retrieve data from the server	GET /users (Fetch all users)
  - POST ->	Create a new resource	POST /users (Add a new user)
  - PUT ->	Update an existing resource	PUT /users/1 (Update user with ID 1)
  - DELETE ->	Remove a resource	DELETE /users/1 (Delete user with ID 1)
  - PATCH -> It partially used, when you want to update a particular field of an existing resource instade of entire resources. 


# npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (devtinder-be)
version: (1.0.0)                                                  
description: DEVTINDER                                            
entry point: (index.js)                                           
test command:                                                     
git repository:                                                   
keywords: nodejs, javascript
author: Harekrushna Pradhan
license: (ISC)                                                    
About to write to C:\Users\pradh\OneDrive\Desktop\DevTinder-BE\package.json:

{
  "name": "devtinder-be",
  "version": "1.0.0",
  "description": "DEVTINDER",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "javascript"
  ],
  "author": "Harekrushna Pradhan",
  "license": "ISC"
}


Is this OK? (yes) yes

PS C:\Users\pradh\OneDrive\Desktop\DevTinder-BE> node app.js
node:internal/modules/cjs/loader:1143
  throw err;
  ^

Error: Cannot find module 'C:\Users\pradh\OneDrive\Desktop\DevTinder-BE\app.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1140:15)
    at Module._load (node:internal/modules/cjs/loader:981:27)     
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v18.20.5

# npm i express
# npm i -g nodemon

# Routes
- Order of the route is matter a lot

# NOTES

app.use("/user",
  (req, res, next) => {
    console.log("handling the route user!");
    next();
  },
  (req, res, next) => {
    console.log("handling the route user two!");
    next();
  },
  (req, res, next) => {
    console.log("handling the route user three!");
    next();
  },
  (req, res, next) => {
    console.log("handling the route user!");
    res.send("handling the user route")
    # WHEN WE USE RES.SEND() AFTER THAT WHAT CODE WILL WRITE FURTHER WON'T BE WORK.
  },
  (req, res, next) => {
    console.log("handling the route user!");
    next();
  },
)

# Notes
- Create a free cluster on mongoDB 
- Install mangoose library - npm i mongoose
- Connect your application to the database "Connection-url"/devTinder
- Call the connectDB function and connect database before starting application on 7777.
- Create user schema and user model
- Create /signup API to add data to database
- Push some document using API calls from postman

# Inside database 
- devTinder -> database
- user -> collection
- and data inside the collection -> document