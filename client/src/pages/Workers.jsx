import React, { useState, useEffect } from 'react';
import WorkerCard from '../components/WorkerCard'



const Workers = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/workers`)
      .then(response => response.json())
      .then(data => setWorkers(data))
      .catch(error => console.error('Error fetching workers:', error));
  }, []);

  return (
    <div className="workers-container">
      {workers.map(worker => (
        <WorkerCard key={worker.id} worker={worker} />
      ))}
    </div>
  );
};

export default Workers;
