import express from "express";
import { createUser, getUserByEmail } from "../db/users";
import { authentication, random } from "../helpers/index";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      window.alert("All fields are mandatory !");
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      window.alert("User already exist ! Login to continue !");
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      // window.alert("All fields are Mandatory !");
      console.log("All fields are Mandatory !");
      return res.sendStatus(400);
    }

    // .select is used here because default email and username is selected only 
    // to select authentication we have to explicitly select it using 
    // .select ! kind of projection vala he ! 
    const user = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );
    console.log(user);
    if (!user) {
      // window.alert("User didn't exist ! ");
      console.log("User didn't exist ! ");
      return res.sendStatus(400);
    }
    const expectedHash = authentication(user.authentication.salt, password);
    // console.log(expectedHash);
    // console.log(user.authentication.password);
    // console.log(user.authentication.salt);
    if (user.authentication.password != expectedHash) {
      // window.alert("Wrong Password ! Try");
      console.log("Wrong Password ! Try");
      return res.sendStatus(403);
    }

    const salt=random();
    user.authentication.sessionToken=authentication(salt,user._id.toString());

    await user.save();
    res.cookie('MURARI-AUTH',user.authentication.sessionToken,{domain : 'localhost' , path : '/'});

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
