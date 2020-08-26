 ## Application
 
 Simple in memory CRUD operations using express.

 ## How to run the service?
  1. Install Dependencies. 
    
    Using NPM
    ```
    npm install
    ```
  2. Run Test Cases 
   
    Using NPM
    ```
    npm test
    ```  
  3. Running Service 
   
    Using NPM
    ```
    npm start
    ```  

## API Description: 

1. ADD user
URL : http://localhost:3003/user/role
Method Type : POST 
Request Body : 

```javascript
{
  "firstname": "Alexandar",
  "lastname": "King",
  "email": "Alexandar@hotmail.com",
  "role": "SUPER ADMIN",
  "id" : "7878"
}
```

Response Body (200) : 

```javascript
{
    "code": 200,
    "message": "SUCCESS"
}
```

Response Body (400) Bad Request : 

```javascript
{
    "code": 400,
    "message": "\"firstname\" is required"
}
```
// GET USER 

URL : http://localhost:3003/user/role/:email
Method Type : GET

Response Body (200) with data: 
{
    "code": 200,
    "message": "SUCCESS",
    "data": {
        "firstname": "Alexandar",
        "lastname": "King",
        "email": "Alexandar@hotmail.com",
        "role": "SUPER ADMIN",
        "id": "7878"
    }
}


Response Body (200) Wihtout Data : 
{
    "code": 200,
    "message": "NO RECORD FOUND"
}

// Delete User 

URL : http://localhost:3003/user/role/:email
Method Type : Delete

Response Body (200) :
{
    "code": 200,
    "message": "Records has been removed."
}

// Update User Details 

URL : http://localhost:3001/role/:email
Method Type : PUT 

Request Body : 
{
  "first_name": "lskol",
  "last_name": "Allen",
  "email": "james12@hotmail.com",
  "role": "ADMIN"
}

// Get All Users 

URL : http://localhost:3003/users
Method Type : POST 

Response Body : 
[
    {
        "id": "1566034002186",
        "firstname": "Mansi",
        "lastname": "Tiwari",
        "email": "mansi@gmail.com",
        "role": "2"
    },
    {
        "id": "1566034002186",
        "firstname": "Mansi",
        "lastname": "Tiwari",
        "email": "mansi1@gmail.com",
        "role": "2"
    }
]


> Folder Structure 

-cache             // Caching files
-controllers       // controllers
-joi-validator     // API Request Body Schema Validation code
-routes            // API Routes : Endpoint config 
-services          // Service File, business logic
-tests             // Test Cases using Chai
-utils             // Utility, Constants files
app.js             // Entry point
package.json