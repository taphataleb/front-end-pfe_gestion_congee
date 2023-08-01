
import { faCheckCircle, faCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';


import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import { token } from './Auth/authService';
import '../styles/Styles.css';

function Liste_des_demande() {
  const { id } = useParams();
  const [demandes, setDemandes] = useState([]);
  const navigate = useNavigate();



  useEffect(() => {

    const headers = { 'Authorization': `Bearer ${localStorage.getItem('token')}` };
    axios.get('http://localhost:9000/demande/getallDemande', { headers })
      .then(response => setDemandes(response.data));
    //console.log(headers);


  },
    []);

  const handleDelete = async (id) => {

    // Remplacez cela par votre véritable token
    try {
      const headers = { 'Authorization': `Bearer ${localStorage.getItem('token')}` };

      debugger
      const tokens = headers;
      console.log(tokens)
      const response = await axios.delete(`http://localhost:9000/demande/d`, {
        params: { id: id }
      },
        { tokens }

      ).then((resp) => {
        const newdemandes = demandes.filter((d) => d.id != id);
        setDemandes(newdemandes)
      });;
      console.log(headers);

      // Faites quelque chose avec la réponse de votre backend, si nécessaire
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de la requête DELETE :', error);
    }
  };


  return (

    <div className='containerList'>
      <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>DateDébut</th>
            <th>dateFin</th>
            <th>avis_directeur</th>
            <th>avis_chefService</th>
            <th>statusDemandeConge</th>
            <th>employee</th>
            <th>letat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((demande) => (
            <tr key={demande.id}>
              <td>{demande.id}</td>
              <td>{demande.date}</td>
              <td>{demande.dateDébut}</td>
              <td>{demande.dateFin}</td>
              <td>{demande.avis_directeur}</td>
              <td>{demande.avis_chefService}</td>
              <td>{demande.statusDemandeConge}</td>
              <td>{demande.employee.id}</td>
              <td> <button
                // onClick={() => handeleCheckDemande(demande.id)}
                className='btn btn-outline-success'>
                <FontAwesomeIcon
                  icon={demande.checked ? faCheckCircle : faCircle}>
                </FontAwesomeIcon>
              </button>  <button
                onClick={() => handleDelete(demande.id)}
                className='btn btn-outline-danger'   >
                  <FontAwesomeIcon icon={faTrash}>
                  </FontAwesomeIcon>
                </button>
              </td>

              <td> <button
                onClick={() => navigate(`/validationDemande/${demande.id}`)}
                className='btn btn-outline-success'   >valider <br />
                <FontAwesomeIcon icon={faEdit}>
                </FontAwesomeIcon>
              </button>  <button
                onClick={() => navigate(`/regeterDemande/${id}`)}
                className='btn btn-outline-success'   >regeter <br />
                  <FontAwesomeIcon icon={faEdit}>
                  </FontAwesomeIcon>
                </button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
    //     </div></div></div>
    // </div>
  )
}

export default Liste_des_demande


