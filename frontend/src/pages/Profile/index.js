import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero" />
        <span>Welcome, NGO</span>

        <Link className="button" to="/incidents/new">Create new incident</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Registered incidents</h1>

      <ul>
        <li>
          <strong>Incident:</strong>
          <p>Title</p>
          <strong>Description:</strong>
          <p>Bla</p>
          <strong>Amount:</strong>
          <p>USD 100</p>
          <button type="button">
            <FiTrash2 size="20" color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Incident:</strong>
          <p>Title</p>
          <strong>Description:</strong>
          <p>Title</p>
          <strong>Amount:</strong>
          <p>Title</p>
          <button type="button">
            <FiTrash2 size="20" color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Incident:</strong>
          <p>Title</p>
          <strong>Description:</strong>
          <p>Title</p>
          <strong>Amount:</strong>
          <p>Title</p>
          <button type="button">
            <FiTrash2 size="20" color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Incident:</strong>
          <p>Title</p>
          <strong>Description:</strong>
          <p>Title</p>
          <strong>Amount:</strong>
          <p>Title</p>
          <button type="button">
            <FiTrash2 size="20" color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
};

