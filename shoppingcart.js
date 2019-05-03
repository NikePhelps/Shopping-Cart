"use strict";

let shoppingCart = [];
let itemList = [
    {
        name: "shirt",
        price: 20
    },
    {
        name: "pants",
        price: 40
    },
    {
        name: "jeans",
        price: 50
    },
    {
        name: "jacket",
        price: 100
    },
    {
        name: "sweater",
        price: 80
    }
];

function addItem(itemName, itemPrice) {
    shoppingCart = [...shoppingCart, {name: itemName, price: itemPrice}];
    console.log(`You've added ${itemName} to your cart for ${itemPrice} dollars.`)
};

function removeItem(itemName) {
    let index = shoppingCart.findIndex(element => element.name === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index + 1)]
    console.log(`You have removed ${itemName} from your cart.`)
};

function editItem(oldItem, newItem) {
    let index = shoppingCart.findIndex(element => element.name === oldItem);
    shoppingCart = [...shoppingCart.slice(0, index), {name: newItem, price: shoppingCart[index].price}
    , ...shoppingCart.slice(index + 1)]
    console.log(`You have changed ${oldItem} to ${newItem}.`)
};

function printTotal() {
    let total = 0;
    for (let cartItem of shoppingCart) {
        total += (cartItem.price) + (cartItem.price * .06);
        // for (let ${price} of shoppingCart) { Another way of printing
        // total += price;
    // };
    };
    console.log(`Your total is ${total}`);
};

addItem("shirt", 10);
addItem("pants", 40);
addItem("jeans", 50);
addItem("jacket", 100);
addItem("sweater", 80);
console.log(shoppingCart);
removeItem("pants");
console.log(shoppingCart);
editItem("shirt", "polo");
console.log(shoppingCart);
printTotal(shoppingCart);


