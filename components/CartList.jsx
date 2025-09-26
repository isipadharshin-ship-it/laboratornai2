import React from 'react';
import { useCart } from '../context/CartContext';

const CartList = () => {
  const { cart, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="cart-list">
        <h2>Выбранные автомобили</h2>
        <p className="empty-message">Вы еще не выбрали автомобили</p>
      </div>
    );
  }

  return (
    <div className="cart-list">
      <h2>Выбранные автомобили</h2>
      <div className="cart-items">
        {cart.items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-image">{item.image}</div>
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <div className="item-specs">
                <span>Год: {item.year}</span>
                <span>Двигатель: {item.engine}</span>
                <span>Мощность: {item.power}</span>
              </div>
              <div className="item-price-quantity">
                <span className="price">{item.price.toLocaleString()} ₽</span>
                <span className="quantity">× {item.quantity}</span>
              </div>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)}
              className="remove-button"
            >
              ✕ Удалить
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total-price">
          <h3>Итого: {getTotalPrice().toLocaleString()} ₽</h3>
        </div>
        <div className="cart-actions">
          <button onClick={clearCart} className="clear-cart-btn">
            Очистить корзину
          </button>
          <button className="checkout-btn">
            Перейти к оформлению
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;