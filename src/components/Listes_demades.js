// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// const CongeList = () => {
//   const [demandes, setDemandes] = useState([]);

//   useEffect(() => {
//     fetchDemandesConge();
//   }, []);

//   const fetchDemandesConge = async () => {

//     try {
//         const baseUrl = "http://localhost:8080/demande/getallDemande"
//     const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWRpQGdtYWlsLmNvbSIsImlhdCI6MTY4OTI5ODI5NSwiZXhwIjoxNjg5Mjk5NzM1fQ.yMAnT_sM_grJnCk-b-h7OLKNrD9EnUgX7Og5CCx40SQ"
//       const response = await axios.get('http://localhost:8080/demande/getallDemande');
//       const data = await response.json();
//       console.log(data)
//       setDemandes(data);
      
//     } catch (error) {
//       //console.log('Une erreur s\'est produite lors de la récupération des demandes de congé.', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Liste des demandes de congé</h1>
//       <ul>
//         {demandes.map((demande) => (
//           <li key={demande.id}>
//             <p>Date de début : {demande.dateDebut}</p>
//             <p>Date de fin : {demande.dateFin}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CongeList;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const CongeList = () => {
// //   const [demandes, setDemandes] = useState([]);

// //   useEffect(() => {
// //     fetchDemandes();
// //   }, []);

// //   const fetchDemandes = async () => {
// //     try {
// //       const response = await axios.get('/api/demandes'); // Remplacez l'URL par l'endpoint approprié de votre API Spring Boot
// //       setDemandes(response.data);
// //     } catch (error) {
// //       console.error('Erreur lors de la récupération des demandes de congé:', error);
// //     }
// //   };

// //   const renderDemandes = (status) => {
// //     const demandesFiltrees = demandes.filter((demande) => demande.status === status);

// //     return (
// //       <ul>
// //         {demandesFiltrees.map((demande) => (
// //           <li key={demande.id}>
// //             {demande.date} - {demande.nom} - {demande.status}
// //           </li>
// //         ))}
// //       </ul>
// //     );
// //   };

// //   return (
// //     <div>
// //       <h2>Demandes de congé</h2>

// //       <h3>En attente</h3>
// //       {renderDemandes('en_attente')}

// //       <h3>Acceptées</h3>
// //       {renderDemandes('acceptee')}

// //       <h3>Refusées</h3>
// //       {renderDemandes('refusee')}
// //     </div>
// //   );
// // };

// // export default CongeList;


import { faCheckCircle, faCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';

import "./styles/syle.css"
import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import { token } from '../Pages/Auth/authService';

function Liste_des_demande() {
  const { id } = useParams();
  const [demandes, setDemandes] = useState([]);
  const navigate = useNavigate();

  //   const deleteDemande=(id)=>{
  //     const headers = {'Authorization': `Bearer ${localStorage.getItem('token')}`};

  //     return demandeApi.get(`demande/deleteDemande`,{
  //         headers: {
  //           headers, 
  //           'Content-Type': 'application/json', 
  //         },
  //       })
  // }

  useEffect(() => {

    const headers = { 'Authorization': `Bearer ${localStorage.getItem('token')}` };
    axios.get('http://localhost:9000/demande/getallDemande', { headers })
      .then(response => setDemandes(response.data));
    //console.log(headers);


  },
    []);

  const handleDelete = async (id) => {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('token')}` };  // Remplacez cela par votre véritable token
    try {
      const response = await axios.delete(`http://localhost:9000/demande/deleteDemande/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`, // Ajoutez le token dans l'en-tête de la requête
          'Content-Type': 'application/json', // Indiquez le type de contenu JSON
        },
      }
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


  // const handeleDeleteDemande = (id) => {
  //   deleteDemande(id).then((resp) => {
  //     const newdemandes = demandes.filter((d) => d.id != id);
  //     setDemandes(newdemandes)
  //   });
  // };
  const handeleCheckDemande = (demande) => {
    const newdemandes = demandes.map((d) => {
      if (d.id == demande.id) {
        d.checked = !d.checked;
      }
      return d;
    });
    setDemandes(newdemandes);
  };
  const myStyle = {
    color: "white",
    backgroundColor: "red",
    width:'57px',
    // padding: "10px",
    
    // fontFamily: "Sans-Serif"
  };

 
  return (

    // <div className='p-1 m-1'>
    //   <div className='row'
    //   ><div className='col-md-12'><div className='card'>
    //     <div className='card-body'>
         
    <table className='container1'>
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
                  <td>{demande.employee == null ? '' : demande.employee.id}</td>
                  <td> <button
                    onClick={() => handeleCheckDemande(demande.id)}
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
        // </div>
    //     </div></div></div>
    // </div>
  )
}

export default Liste_des_demande


