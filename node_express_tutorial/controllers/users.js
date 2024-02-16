import { v4 as uuidv4 } from 'uuid';
let users = []

export const getUser = (req, res) => {
    res.send(users)
    // res.send('Hello from users.js')
}

export const createUser = (req, res) => {
    console.log("Post route reached")
    // console.log(req.body);
    const user = req.body;
    const userId = uuidv4();
    const userwithId = { id: userId, ...user };
    users.push(userwithId);
    res.send(`User with the name ${user.firstName} add to the Database`);
}

export const getUserWithId = (req, res) => {
    const { id } = req.params;
    const user = users.filter((user) => user.id === id);
    res.send(user);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} deleted from the database`);
}

export const updateUser = (req, res) => {
    // patch request is used to update the certain part of the data..
    // in the below example -- user is founded based on id and then the 
    //parameter that has to be changed will be send and it will update based on the 
    //parameter that hast been sent !!
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    const { firstName, lastName, age } = req.body;
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send(`User with the ${id} is updated`)
}