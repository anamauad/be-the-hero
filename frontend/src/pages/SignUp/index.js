import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';


export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const history = useHistory();

  async function handleSignup(event) {
    event.preventDefault();

    const data = {
      name, email, whatsapp, city, state
    };
    try {
      const response = await api.post('ngos', data);
      alert(`Your access ID is ${response.data.id}`);
      history.push('/');

    } catch (err) {
      alert('There was an error while creating your NGO account. Please try again.');
    }
  }

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

        <form onSubmit={handleSignup}>
          <input
            placeholder="The name of your NGO"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Whatsapp number"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="State"
              value={state}
              onChange={e => setState(e.target.value)}
              style={{ width: 100 }} />
          </div>

          <button className="button" type="submit">Sign up</button>

        </form>

        <section className="last">
          <Link to="/" className="nav-link">
            <FiArrowLeft size={16} color="#E02041" />
            Back to sign in page</Link>
        </section>
      </div>
    </div>
  );
};
