const userService = require("../services/userService.js")
const jwtProvider = require("../config/jwtProvider.js")
const bcrypt = require("bcrypt");
const cartService = require("../services/cartService.js");
const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);

        await cartService.createCart(user);

        return res.status(200).send({jwt,message:"user created successfully"});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

const login = async (req, res) => {
    const {password, email} = req.body;
    try {
        const user = await userService.getUserByEmail(email);

        if(!user){
            return res.status(404).send({message:"user not found with email", email});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(401).send({message:"invalid password"});
        }

        const jwt = jwtProvider.generateToken(user._id);
        return res.status(200).send({jwt, message:"login successful"});

    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

module.exports = {register, login}