import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero " />

        <form>
          <h1>Log yourself in</h1>

          <input placeholder="Your identification" />
          <button type="submit">Sign in</button>

          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Sign up</a>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}

export default Logon;