const User = require("../models/userModel");
const bcrypt = require("bcrypt");   
const jwtProvider = require("../config/jwtProvider.js");
const createUser=async(userData) => {
    try {
        let {firstName, LastName, email, password} = userData;

        const isUserExist = await User.findOne({email});

        if(isUserExist){
            throw new Error("User already exist");
        }

        password = await bcrypt.hash(password, 8);

        const user = await User.create({firstName, LastName, email, password});

        console.log(user);

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const findUserById = async(userID) => {
    try {
        const user = await User.findById(userID).populate("address");
        if(!user){
            throw new Error("User not found with id:",userID);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({email});
        if(!user){
            throw new Error("User not found with email:",email);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getUserByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await findUserById(userId);
        if(!user){
            throw new Error("User not found with id:",userId);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {createUser, findUserById, getUserByEmail, getUserByToken, getAllUsers}