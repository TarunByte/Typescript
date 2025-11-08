function totalPrice(item: number, price: number, text?: string) {
  var price = 100;

  if (text) {
    console.log(text + price * item);
  } else {
    console.log(price * item);
  }
}

// totalPrice(20, 200, "total price is ");
// totalPrice(20, 200);

// function simple(data: string | number | boolean) {
//   console.log(data);
// }

function simple(data: any) {
  console.log(data);
}

simple("anil siddhu");
