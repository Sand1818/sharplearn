import React, { useState } from 'react';
import styles from './Resources.module.css';
import NavigationBar from '../Navigation/NavigationBar';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [subject, setSubject] = useState('');
  const [resource, setResource] = useState('');
  const [description, setDescription] = useState('');

  const handleAddResource = () => {
    if (!subject || !resource || !description) {
      alert('Please fill out all fields: Subject, Resource, and Description');
      return;
    }

    // Ensure the URL starts with "http://" or "https://"
    const formattedResource = resource.startsWith('http://') || resource.startsWith('https://')
      ? resource
      : `https://${resource}`;

    const newResource = { subject, resource: formattedResource, description };
    setResources([...resources, newResource]);
    setSubject('');
    setResource('');
    setDescription('');
  };

  return (
    <>
    <NavigationBar />
    <div className={styles.container}>
      <h2 className={styles.header}>Resources</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={styles.input}
        />
        <input
          type="url"
          placeholder="Resource Link"
          value={resource}
          onChange={(e) => setResource(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleAddResource} className={styles.addButton}>
          Add Resource
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Resource</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((res, index) => (
            <tr key={index}>
              <td>{res.subject}</td>
              <td>
                <a href={res.resource} target="_blank" rel="noopener noreferrer">
                  {res.resource}
                </a>
              </td>
              <td>{res.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.comingSoon}>Ability to upload documents: Coming soon</p>
    </div>
    </>
  );
};

export default Resources;
