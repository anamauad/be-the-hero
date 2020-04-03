import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ngoId = localStorage.getItem('ngoId');
  const ngoName = localStorage.getItem('ngoName');

  const history = useHistory();

  async function handleNewIncident(event) {
    event.preventDefault();

    const data = { title, description, value };
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ngoId
        }
      });
      history.push('/profile');
    } catch (err) {
      alert('There was an error while adding an incident. Please try again.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Add a new Incident</h1>
          <p>Describe the incident with as many details as possible in order to find a hero to help fighting it.</p>

          <Link to="/profile" className="nav-link">
            <FiArrowLeft size={16} color="#E02041" />
          Back to the {ngoName} profile page</Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="The title of the incident"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="The description of the incident"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Amount in USD"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Add</button>

        </form>

        <section className="last">
          <Link to="/profile" className="nav-link">
            <FiArrowLeft size={16} color="#E02041" />
          Back to the {ngoName} profile page</Link>
        </section>
      </div>
    </div>
  );
}