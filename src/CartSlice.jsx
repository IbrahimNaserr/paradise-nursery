let cart = [];

export function addItem(item) {
  cart.push(item);
}

export function removeItem(index) {
  cart.splice(index, 1);
}

export function updateQuantity(index, quantity) {
  if (cart[index]) {
    cart[index].quantity = quantity;
  }
}
