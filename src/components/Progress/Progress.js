import React, { useState } from 'react';
import styles from './Progress.module.css';
import NavigationBar from '../Navigation/NavigationBar';

const Progress = () => {
  const [data, setData] = useState([]);
  const [newEntry, setNewEntry] = useState({
    subject: '',
    mark1: '',
    mark2: '',
    mark3: '',
    mark4: '',
  });

  const calculateAverage = (marks) => {
    const total = marks.reduce((sum, mark) => sum + parseFloat(mark || 0), 0);
    return total / marks.length;
  };

  const addEntry = () => {
    setData([...data, newEntry]);
    setNewEntry({ subject: '', mark1: '', mark2: '', mark3: '', mark4: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  return (
    <>
    <NavigationBar />
    <div className={styles.container}>
      <h1 className={styles.header}>Grades Progress</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks 1</th>
            <th>Marks 2</th>
            <th>Marks 3</th>
            <th>Marks 4</th>
            <th>Average (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.subject}</td>
              {[entry.mark1, entry.mark2, entry.mark3, entry.mark4].map((mark, i) => (
                <td key={i}>{mark}</td>
              ))}
              <td>
                {calculateAverage([entry.mark1, entry.mark2, entry.mark3, entry.mark4]).toFixed(2)}%
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                name="subject"
                value={newEntry.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={styles.input}
              />
            </td>
            <td>
              <input
                type="number"
                name="mark1"
                value={newEntry.mark1}
                onChange={handleChange}
                placeholder="Marks 1"
                className={styles.input}
              />
            </td>
            <td>
              <input
                type="number"
                name="mark2"
                value={newEntry.mark2}
                onChange={handleChange}
                placeholder="Marks 2"
                className={styles.input}
              />
            </td>
            <td>
              <input
                type="number"
                name="mark3"
                value={newEntry.mark3}
                onChange={handleChange}
                placeholder="Marks 3"
                className={styles.input}
              />
            </td>
            <td>
              <input
                type="number"
                name="mark4"
                value={newEntry.mark4}
                onChange={handleChange}
                placeholder="Marks 4"
                className={styles.input}
              />
            </td>
            <td>
              <button onClick={addEntry} className={styles.addButton}>
                Add Subject
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
  );
};

export default Progress;
