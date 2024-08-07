const userService = require("../services/userService.js");

const getUserProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization.split(" ")[1];
        
        if(!jwt){
            return res.status(404).send({error:'jwt not found'});
        }
        const user = await userService.getUserByToken(jwt);

        return res.status(200).send({user});
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        if(!users){
            return res.status(404).send({error:'users not found'});
        }
        return res.status(200).send(users);

    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

module.exports = {getUserProfile, getAllUsers}