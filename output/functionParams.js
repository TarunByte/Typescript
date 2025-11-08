"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function totalPrice(item, price, text) {
    var price = 100;
    if (text) {
        console.log(text + price * item);
    }
    else {
        console.log(price * item);
    }
}
// totalPrice(20, 200, "total price is ");
// totalPrice(20, 200);
// function simple(data: string | number | boolean) {
//   console.log(data);
// }
function simple(data) {
    console.log(data);
}
simple("anil siddhu");
