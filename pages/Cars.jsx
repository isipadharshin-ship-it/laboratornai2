import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { cars } from '../data/cars';
import { useNavigate } from 'react-router-dom';

const Cars = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [addedCar, setAddedCar] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleAddToCart = (car) => {
    addToCart(car);
    setAddedCar(car.name);
    
    setTimeout(() => {
      navigate('/cart');
    }, 1500);
  };

  const filteredCars = cars.filter(car => {
    if (filter === 'all') return true;
    if (filter === 'affordable') return car.price <= 3000000;
    if (filter === 'premium') return car.price > 3000000 && car.price <= 5000000;
    if (filter === 'luxury') return car.price > 5000000;
    return true;
  });

  return (
    <div className="cars-page">
      <h2>Каталог автомобилей</h2>
      
      <div className="filters">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          Все автомобили
        </button>
        <button 
          className={filter === 'affordable' ? 'active' : ''}
          onClick={() => setFilter('affordable')}
        >
          До 3 млн ₽
        </button>
        <button 
          className={filter === 'premium' ? 'active' : ''}
          onClick={() => setFilter('premium')}
        >
          Премиум (3-5 млн ₽)
        </button>
        <button 
          className={filter === 'luxury' ? 'active' : ''}
          onClick={() => setFilter('luxury')}
        >
          Люкс (от 5 млн ₽)
        </button>
      </div>

      {addedCar && (
        <div className="success-message">
          ✅ Автомобиль "{addedCar}" добавлен в корзину! Переход к корзине...
        </div>
      )}

      <div className="cars-grid">
        {filteredCars.map(car => (
          <div key={car.id} className="car-card">
            <div className="car-image">{car.image}</div>
            <div className="car-info">
              <h3>{car.name}</h3>
              <p className="car-description">{car.description}</p>
              <div className="car-specs">
                <span><strong>Год:</strong> {car.year}</span>
                <span><strong>Двигатель:</strong> {car.engine}</span>
                <span><strong>Мощность:</strong> {car.power}</span>
                <span><strong>КПП:</strong> {car.transmission}</span>
              </div>
              <div className="car-price">{car.price.toLocaleString()} ₽</div>
              <button 
                onClick={() => handleAddToCart(car)}
                className="add-to-cart-btn"
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
