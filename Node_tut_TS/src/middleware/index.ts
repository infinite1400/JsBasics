import express from "express";
import { get, identity, merge } from "lodash";

import { getUserBySessionToken } from "../db/users";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["MURARI-AUTH"];

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      console.log("No User exists ! ");
      res.sendStatus(403);
    }
    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
