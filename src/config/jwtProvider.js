const jwt = require("jsonwebtoken")

const SECRET_KEY = "jkjdhfiuhfrihfihfheaffhrefiuoawipaw3hdkmsdfkj"
const generateToken = (userId) => {
    const token = jwt.sign({userid},SECRET_KEY,{expiresIn:"48h"})
    return token;
}

const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token,SECRET_KEY)
    return decodedToken.userId;
}

module.exports={generateToken, getUserIdFromToken}