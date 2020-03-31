import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero" />

        <form>
          <h1>Log yourself in</h1>

          <input placeholder="NGO identification" />
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

export default Logon;