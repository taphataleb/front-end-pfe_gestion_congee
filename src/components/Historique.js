import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../styles/Styles.css';

const Historique = () => {
  const [historiques, setHistoriques] = useState([])

  useEffect(() => {

    const headers = { 'Authorization': `Bearer ${localStorage.getItem('token')}` };
    axios.get('http://localhost:9000/histhorique/getallHisthorique', { headers })
      .then(response => setHistoriques(response.data));
    //console.log(headers);


  },
    []);
  return (
    <div className='containerList'>

      <h2>Historique des congés</h2>

      <table>
        <thead>
          <tr>
            <th>demande</th>
            <th>Date dedemande</th>
            <th>Employe</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {historiques.map((historique) => (
            <tr key={historique.id}>
              <td>{historique.demandeConge.id}</td>
              <td>{historique.date}</td>
              <td>{historique.employee.id}</td>
              {/* <td>{historique.employee == null ? '' : historique.employee.id}</td> */}
              <td>{historique.statusDemandeConge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Historique;

