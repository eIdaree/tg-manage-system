import React, { useState, useEffect } from 'react';
import WorkerCard from '../components/WorkerCard'



const Workers = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    fetch(`https://def6768784d8e5a0.mokky.dev/workers`)
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
