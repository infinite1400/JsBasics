import express from "express";
import { get, merge } from "lodash";
import { ObjectId } from "mongoose";
import { getUserBySessionToken } from "../db/users";


type userType={
  _id : ObjectId
  username : string,
  email : string,
  authentication? : {
    password : string,
    salt? : string,
    sessionToken? : string
  };
};

type customRequest = express.Request & { 
  identity : userType
  murari : string
}
export const isAuthenticated = async (
  req: customRequest,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["MURARI-AUTH"];
    if (!sessionToken) {
      return res.sendStatus(403);
    }
    const existingUser = await getUserBySessionToken(sessionToken).select('+_id +authentication') as userType;

    if (!existingUser) {
      console.log("No User exists ! ");
      return res.sendStatus(403);
    }
    req.identity=existingUser;
    // merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const isOwner = async (
  req: customRequest,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;
    // const currentUserId = get(req, "identity._id") as string;
    const currentUserId = req.identity._id;

    if (!currentUserId) {
      return res.sendStatus(403);
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
