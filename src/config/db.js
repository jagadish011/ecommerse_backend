const mongoose  = require("mongoose")

const mondbUrl = "mongodb+srv://jagadishmunavalli35:1l6AkhwDNS46XWCw@cluster0.tw1d6sw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb =()=>{
    return mongoose.connect(mondbUrl);
}

module.exports = {connectDb}