/*Submitted by: Tanya Rotman, Alex Lapin
Class 48/6
Exercise 7
Work on list of users and their details
*/

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const users  = require('./users.json');


app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/users">users</a>');
});

//Filter users by age range
app.get('/api/users/filter', (req,res) =>{

    const {minAge,maxAge} = req.query;
    let usersArr = [...users];
    //Filter users if both minAge and maxAge are provided
    if (minAge != null &&maxAge != null){
        usersArr = users.filter(user =>{
            return user.age >= minAge && user.age<=maxAge})
    }
    //Return the filtered user list as JSON
    res.status(200).json(usersArr);
});

//Get all users 
app.get('/api/users', (req, res) => {
    const newUsers = users.map(user => {

        //Return list of users
        res.json(users);
    });
    res.send(newUsers);
});

//Get user by ID and return user details as HTML page
app.get('/user/:id', (req,res) => {
    const { id } = req.params;
    console.log(req);
    const singleUser = users.find(
        user => user.id === Number(id),
    );
    
    if (!singleUser) {
        return res.status(404).send('<h1>User Does Not Exist</h1>');
    }
//Return user details as an HTML page
    return res.send(`
            <html>
            <head><title>Users</title></head>
            <body><h1>User Info:</h1>
            <p>Id: ${singleUser.id}</p>
            <p>Name: ${singleUser.name}</p>
            <p>Email: ${singleUser.email}</p>
            <p>Age: ${singleUser.age}</p>
            </body>
            </html>`);
    
});

//Get user details by ID and return JSON 
app.get('/api/users/:id', (req, res) => {

    const { id } = req.params;

    const singleUser = users.find(
        user => user.id === Number(id),
    );

    if (!singleUser) {
        return res.status(404).send('User Does Not Exist');
    }

    return res.json(singleUser);
});

//Start the server and listen to the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
