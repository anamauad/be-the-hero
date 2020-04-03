import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Add a new Incident</h1>
          <p>Describe the incident with as many details as possible in order to find a hero to help fighting it.</p>

          <Link to="/profile" className="nav-link">
            <FiArrowLeft size={16} color="#E02041" />
          Back to the NGO profile page</Link>
        </section>

        <form>
          <input placeholder="The title of the incident" />
          <textarea placeholder="The description of the incident" />
          <input placeholder="Amount in USD" />

          <button className="button" type="submit">Add</button>

        </form>

        <section className="last">
          <Link to="/profile" className="nav-link">
            <FiArrowLeft size={16} color="#E02041" />
          Back to the NGO profile page</Link>
        </section>
      </div>
    </div>
  );
}