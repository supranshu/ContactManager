
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

 export const AddContact = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  
  

  
  const handleAddContact = () => {
    
    fetch('http://localhost:8080/enter-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, number, email }),
    })
      .then(response => response.json())
      .then(data => {
        onAddContact(data); 
        setName('');
        setNumber('');
        setEmail('');
      })
      .catch(error => console.error('Error adding contact:', error));
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Number:
          <input
            type="text"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddContact}>
          Add Contact
        </button>
      </form>
      <Link to="/contacts">Got to See all contact</Link><br />
      <Link to="/delete-contacts">Go to remove the contacts</Link>
    </div>
  );
};

export default AddContact;
