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
