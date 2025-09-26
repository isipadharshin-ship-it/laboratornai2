import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Добро пожаловать в автосалон "Premium Cars"</h1>
        <p>Лучшие автомобили 2024 года от ведущих мировых производителей</p>
        <div className="hero-stats">
          <div className="stat">
            <h3>50+</h3>
            <p>моделей в наличии</p>
          </div>
          <div className="stat">
            <h3>2024</h3>
            <p>новые модели года</p>
          </div>
          <div className="stat">
            <h3>0%</h3>
            <p>кредитование</p>
          </div>
        </div>
      </div>
      
      <div className="features">
        <h2>Почему выбирают нас?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>🚗 Тест-драйв</h3>
            <p>Возможность тестовой поездки на любом автомобиле</p>
          </div>
          <div className="feature">
            <h3>🔧 Сервис</h3>
            <p>Гарантийное и постгарантийное обслуживание</p>
          </div>
          <div className="feature">
            <h3>💰 Выгода</h3>
            <p>Специальные условия кредитования и trade-in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;