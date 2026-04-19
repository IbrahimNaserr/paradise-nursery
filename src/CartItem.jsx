import { useState } from "react";

function CartItem() {
  const [cart, setCart] = useState([
    { name: "Plant 1", price: 10, quantity: 1 },
    { name: "Plant 2", price: 15, quantity: 2 }
  ]);

  const updateQuantity = (index, amount) => {
    const newCart = [...cart];
    newCart[index].quantity += amount;

    if (newCart[index].quantity <= 0) {
      newCart.splice(index, 1);
    }

    setCart(newCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => updateQuantity(index, 1)}>+</button>
          <button onClick={() => updateQuantity(index, -1)}>-</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default CartItem;
