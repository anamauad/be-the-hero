import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {

  const [incidents, setIncidents] = useState([]);
  const ngoId = localStorage.getItem('ngoId');
  const ngoName = localStorage.getItem('ngoName');

  const history = useHistory();

  useEffect(() => {
    api.get('/profile', {
      headers: {
        Authorization: ngoId
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ngoId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ngoId
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert('This incident was not deleted. Please try again.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero" />
        <span>Welcome, {ngoName}</span>

        <Link className="button" to="/incidents/new">Create new incident</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Registered incidents</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Incident:</strong>
            <p>{incident.title}</p>

            <strong>Description:</strong>
            <p>{incident.description}</p>

            <strong>Amount:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(incident.value)}</p>
            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size="20" color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

