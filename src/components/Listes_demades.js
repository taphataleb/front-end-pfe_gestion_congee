import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CongeList = () => {
  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    fetchDemandesConge();
  }, []);

  const fetchDemandesConge = async () => {

    try {
        const baseUrl = "http://localhost:8080/demande/getallDemande"
    const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWRpQGdtYWlsLmNvbSIsImlhdCI6MTY4OTI5ODI5NSwiZXhwIjoxNjg5Mjk5NzM1fQ.yMAnT_sM_grJnCk-b-h7OLKNrD9EnUgX7Og5CCx40SQ"
      const response = await axios.get('http://localhost:8080/demande/getallDemande');
      const data = await response.json();
      console.log(data)
      setDemandes(data);
      
    } catch (error) {
      //console.log('Une erreur s\'est produite lors de la récupération des demandes de congé.', error);
    }
  };

  return (
    <div>
      <h1>Liste des demandes de congé</h1>
      <ul>
        {demandes.map((demande) => (
          <li key={demande.id}>
            <p>Date de début : {demande.dateDebut}</p>
            <p>Date de fin : {demande.dateFin}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CongeList;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CongeList = () => {
//   const [demandes, setDemandes] = useState([]);

//   useEffect(() => {
//     fetchDemandes();
//   }, []);

//   const fetchDemandes = async () => {
//     try {
//       const response = await axios.get('/api/demandes'); // Remplacez l'URL par l'endpoint approprié de votre API Spring Boot
//       setDemandes(response.data);
//     } catch (error) {
//       console.error('Erreur lors de la récupération des demandes de congé:', error);
//     }
//   };

//   const renderDemandes = (status) => {
//     const demandesFiltrees = demandes.filter((demande) => demande.status === status);

//     return (
//       <ul>
//         {demandesFiltrees.map((demande) => (
//           <li key={demande.id}>
//             {demande.date} - {demande.nom} - {demande.status}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div>
//       <h2>Demandes de congé</h2>

//       <h3>En attente</h3>
//       {renderDemandes('en_attente')}

//       <h3>Acceptées</h3>
//       {renderDemandes('acceptee')}

//       <h3>Refusées</h3>
//       {renderDemandes('refusee')}
//     </div>
//   );
// };

// export default CongeList;