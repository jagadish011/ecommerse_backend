const Cart = require("../models/cartModel.js");

async function createCart(user) {
    try {
        const cart = new Cart({user});
        const createdCart = await cart.save();
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports={createCart}