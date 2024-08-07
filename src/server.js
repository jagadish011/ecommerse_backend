const app = require(".");
const { connectDb } = require("./config/db");

const PORT = 5454;
app.listen(PORT, async() => {
    await connectDb();  
    console.log("Ecommerse API lisining on PORT:" + PORT);
})