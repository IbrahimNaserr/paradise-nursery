import React, { useState } from "react";

function CartItem() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Snake Plant",
      price: 20,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32c8b1a"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 25,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1463320726281-696a485928c7"
    }
  ]);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotalAmount = () => {
    return cart.reduce(
      (total, item) => total + calculateItemTotal(item),
      0
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "20px"
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />

              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total Cost: ${calculateItemTotal(item)}</p>

                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}

          <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
        </div>
      )}
    </div>
  );
}

export default CartItem;
