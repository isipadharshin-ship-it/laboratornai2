import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navigation = () => {
  const { getTotalItems } = useCart();

  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/cars" className={({ isActive }) => isActive ? 'active' : ''}>
            Автомобили
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''}>
            Корзина ({getTotalItems()})
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
            Панель управления
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;