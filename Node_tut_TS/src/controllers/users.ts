import express from 'express'

import { deleteUserById, getUserById, getUsers } from '../db/users'
import {authentication ,random} from '../helpers/index';
export const getAllUsers=async (req : express.Request , res : express.Response) =>{
    try{
        const users=await getUsers();
        return res.status(200).json(users);
    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteUser=async (req : express.Request, res : express.Response)=>{
    try{
        const {id}=req.params;
        const deleteUser=await deleteUserById(id);

        return res.json(deleteUser);
    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateUser=async (req : express.Request,res : express.Response)=>{
    try{
        const {id}=req.params;
        const {username,email,password}=req.body;

        if(!username && !email && !password){
            return res.sendStatus(400);
        }
        const user=await getUserById(id).select('+authentication.password +authentication.salt');
        if(username) user.username=username;
        if(email) user.email=email;
        if(password){
            user.authentication.password=authentication(user.authentication.salt,password);
        }
        // console.log(user.authentication.password);
        // console.log(user.authentication.salt);
        await user.save();

        return res.status(200).json(user).end();
    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}