// src/components/RemoveContact.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const RemoveContact = () => {
  const [contactName, setContactName] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleRemoveContact = () => {
    fetch(`http://localhost:8080/remove-contact/${contactName}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log('Contact removed successfully.');
          // Update the state after successful removal
          setContacts(prevContacts =>
            prevContacts.filter(contact => contact.name !== contactName)
          );
          // Optionally, clear the input field after successful removal
          setContactName('');
        } else {
          console.error('Failed to remove contact. Please check the ID.');
        }
      })
      .catch(error => console.error('Error removing contact:', error));
  };

  useEffect(() => {
    fetch('http://localhost:8080/get-contacts')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <div>
      <h2>Remove Contact</h2>
      <label>
        Contact Name:
        <input
          type="text"
          value={contactName}
          onChange={e => setContactName(e.target.value)}
        />
      </label>
      <br />
      <button type="button" onClick={handleRemoveContact}>
        Remove Contact
      </button>
      <br />
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <strong>Name:</strong> {contact.name}, <strong>Number:</strong>{' '}
            {contact.number}, <strong>Email:</strong> {contact.email}
          </li>
        ))}
      </ul>
      <br />
      <Link to="/">Go to Home</Link>
    </div>
  );
};
