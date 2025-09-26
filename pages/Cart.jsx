import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="cart-page">
        <h2>Корзина</h2>
        <p className="empty-cart">Ваша корзина пуста</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Корзина</h2>
      <div className="cart-items">
        {cart.items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="car-image">{item.image}</div>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="item-specs">
                <span>Год: {item.year}</span>
                <span>Двигатель: {item.engine}</span>
              </div>
            </div>
            <div className="item-details">
              <div className="item-price">{item.price.toLocaleString()} ₽</div>
              <div className="item-quantity">Количество: {item.quantity}</div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Общая стоимость: {getTotalPrice().toLocaleString()} ₽</h3>
        <div className="cart-actions">
          <button onClick={clearCart} className="clear-btn">
            Очистить корзину
          </button>
          <button className="order-btn">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
