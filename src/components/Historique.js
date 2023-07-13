import React from 'react';
import './Historique.css';

const Historique = () => {
  const leaveRequests = [
    { id: 1, date: '2023-06-01', status: 'accepté' },
    { id: 2, date: '2023-06-15', status: 'refusé' },
    { id: 3, date: '2023-07-02', status: 'en attente' },
  ];

  return (
    <div className="leave-history-container">
      
      <h2>Historique des congés</h2>
      
      <table>
        <thead>
          <tr>
            <th>Numéro de demande</th>
            <th>Date de demande</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.date}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

 export default Historique;

// import React, { useEffect, useState } from 'react';

// const ProgressBar = () => {
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     fetchRequestStatus();
//   }, []);

//   const fetchRequestStatus = async () => {
//     try {
//       const response = await fetch('/api/request/status');
//       const data = await response.json();
//       setStatus(data.status);
//     } catch (error) {
//       console.error('Failed to fetch request status:', error);
//     }
//   };

//   const getProgressBarStep = () => {
//     if (status === 'envoyé') {
//       return 1;
//     } else if (status === 'accepté_directeur') {
//       return 2;
//     } else if (status === 'accepté_direction') {
//       return 3;
//     } else {
//       return 0;
//     }
//   };

//   return (
//     <div className="progress-bar-container">
//       {getProgressBarStep() === 0 ? (
//         <p>Pas de demande envoyée</p>
//       ) : (
//         <div className="progress-bar">
//           <div className={`step ${getProgressBarStep() >= 1 ? 'active' : ''}`}>
//             <span>Demande envoyée</span>
//           </div>
//           <div className={`step ${getProgressBarStep() >= 2 ? 'active' : ''}`}>
//             <span>Demande acceptée par le directeur</span>
//           </div>
//           <div className={`step ${getProgressBarStep() >= 3 ? 'active' : ''}`}>
//             <span>Demande acceptée par la direction</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProgressBar;