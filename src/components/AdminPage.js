import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css'

const AdminPage = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('/api/requests');
      setRequests(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecision = async (requestId, decision) => {
    try {
      await axios.put(`/api/requests/${requestId}`, { decision });
      fetchRequests();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='admin-page'>
      <h1 className='admin'>Admin Page</h1>
      <table>
        <thead>
          <tr>
            <th>Post Dutilisateur</th>
            <th>Date Debut</th>
            <th>Date Fin</th>
            <th>La Cause</th>
            <th>Decision</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.employee}</td>
              <td>{request.startDate}</td>
              <td>{request.endDate}</td>
              <td>{request.status}</td>
              <td>
                {request.status === 'Pending' && (
                  <div>
                    <button onClick={() => handleDecision(request.id, 'Accepted')}>Accepter</button>
                    <button onClick={() => handleDecision(request.id, 'Refused')}>Refuser</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;