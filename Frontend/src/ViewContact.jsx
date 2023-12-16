
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export const ViewContact = () => {

  const [contacts, setContacts]=useState([]);

  useEffect(() => {
    
    fetch('http://localhost:8080/get-contacts')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);


  return (
    <div>
        <h1>Welcome to Contacts</h1>
        <Link to="/">Got to Home</Link>
        <h2>View Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <strong>Name:</strong> {contact.name}, <strong>Number:</strong>{' '}
            {contact.number}, <strong>Email:</strong> {contact.email}
          </li>
        ))}
      </ul>

    </div>
  )
}

