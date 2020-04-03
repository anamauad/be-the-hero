import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ngoId', id);
      localStorage.setItem('ngoName', response.data.name);

      history.push('/profile');

    } catch (err) {
      alert('Login was not successfull. Please, try again.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero" />

        <form onSubmit={handleLogin}>
          <h1>Log yourself in</h1>

          <input
            placeholder="NGO identification"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Sign in</button>

          <Link to="/signup" className="nav-link">
            <FiLogIn size={16} color="#E02041" />
            Sign up</Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}