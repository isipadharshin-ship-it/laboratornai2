import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isManager, setIsManager] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'manager' && password === 'manager123') {
      setIsManager(true);
      setIsLoggedIn(true);
      setTimeout(() => navigate('/dashboard'), 500);
    } else if (username && password) {
      setIsManager(false);
      setIsLoggedIn(true);
      setTimeout(() => navigate('/dashboard'), 500);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (!isLoggedIn) {
    return (
      <div className="dashboard">
        <h2>Вход в систему</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Логин:</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите логин"
              required
            />
          </div>
          <div className="form-group">
            <label>Пароль:</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Войти
          </button>
          <div className="login-hint">
            <p>Для входа менеджера: логин "manager", пароль "manager123"</p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Панель управления {isManager ? 'менеджера' : 'клиента'}</h2>
        <button onClick={handleLogout} className="logout-btn">
          Выйти
        </button>
      </div>
      
      {isManager ? (
        <div className="manager-dashboard">
          <div className="stats">
            <div className="stat-card">
              <h3>12</h3>
              <p>Авто в наличии</p>
            </div>
            <div className="stat-card">
              <h3>5</h3>
              <p>Новые заказы</p>
            </div>
            <div className="stat-card">
              <h3>28</h3>
              <p>Всего клиентов</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="client-dashboard">
          <h3>Добро пожаловать, {username}!</h3>
          <div className="client-info">
            <p>Здесь будет отображаться история ваших заказов и личная информация.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;