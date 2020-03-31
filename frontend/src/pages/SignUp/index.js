import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';


function Register() {
  return (
    <div className="signup-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Sign Up</h1>
          <p>Fill in your information, sign in and help people find your NGO's incidents.</p>

          <Link to="/" className="nav-link">
            <FiArrowLeft size={16} color="#E02041" />
          Back to sign in page</Link>
        </section>

        <form>
          <input placeholder="The name of your NGO" />
          <input type="email" placeholder="E-mail address" />
          <input placeholder="Whatsapp number" />

          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="State" style={{ width: 100 }} />
          </div>

          <button className="button" type="submit">Sign up</button>

        </form>

      </div>
    </div>
  );
}

export default Register;
