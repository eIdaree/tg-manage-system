import React, {useState} from 'react';

const WorkerCard = ({ worker }) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className="card">
        <h2>{worker.fname} {worker.lname}</h2>
        <div className="image-container">
            {isLoading && <div className="loader">Загрузка...</div>} 
            <img
            src={worker.pimg}
            alt={`${worker.fname}'s profile`}
            onLoad={() => setIsLoading(false)} 
            onError={(e) => { e.target.src = dimg; setIsLoading(false); }} 
            style={{ display: isLoading ? 'none' : 'block' }} 
            />
        </div>
        </div>
    );
};

export default WorkerCard;
