import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate untuk redirection
import './Login.css'; // Import CSS untuk styling

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Untuk navigasi setelah login berhasil

  const handleLogin = (e) => {
    e.preventDefault();

    // Cek kredensial (hardcoded dengan kredensial yang diberikan)
    if (email === 'afforgadget1@gmail.com' && password === 'Affordablegadget1') {
      onLoginSuccess(); // Notifikasi komponen parent bahwa login berhasil
      navigate('/admin-dashboard'); // Arahkan ke halaman Admin Dashboard setelah login berhasil
    } else {
      setErrorMessage('Email atau password salah.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
