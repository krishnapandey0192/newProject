// src/components/Card.js
import React from 'react';
import './Card.css';

export const Card = ({ post, onRemove }) => (
  <div className="card">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <button className="remove-btn" onClick={onRemove}>✕</button>
  </div>
);
