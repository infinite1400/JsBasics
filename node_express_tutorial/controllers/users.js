import User from '../models/UserSchema.js';
export const getUser = async (req, res) => {
    try {
        const users_data = await User.find();
        res.status(200).send(users_data);
        console.log("Data reterived");
    } catch (error) {
        res.status(400).send(error);
    }
}

export const createUser = async (req, res) => {
    console.log("Post route reached")
    console.log(req.body);
    try {
        const { firstName, lastName, age } = req.body;
        const new_user = new User({ firstName: firstName, lastName: lastName, age: age })
        await new_user.save();
        res.status(200).send(`User with the name ${firstName} add to the Database`);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

export const getUserWithId = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        const user = await User.findById({ _id: id });
        if (user) {
            // console.log(user);
            res.status(200).send(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        res.status(400).send(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.deleteOne({ _id: id })
        res.status(200).send(`User with the id ${id} deleted from the database`);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const updateUser = async (req, res) => {
    // patch request is used to update the certain part of the data..
    // in the below example -- user is founded based on id and then the 
    //parameter that has to be changed will be send and it will update based on the 
    //parameter that hast been sent !!
    try {
        const { id } = req.params;
        const user = await User.findById({ _id: id });
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
        await user.save();
        res.status(200).send(`User with the ${id} is updated`)
    }
    catch (error) {
        res.status(400).send(error);
    }
}