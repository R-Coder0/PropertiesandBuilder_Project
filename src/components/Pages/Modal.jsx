import React from 'react';
import './Modal.css'; // Make sure to create corresponding CSS for styling

const Modal = ({ post, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto' }} />
        <p>{post.content}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
