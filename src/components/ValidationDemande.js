import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';



function ValidationDemande() {
  const { id } = useParams();
  const [avis_directeur, setAavis_directeur] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    let demande = {
      avis_directeur

    }
    const token = localStorage.getItem('token'); // Remplacez cela par votre véritable token

    try {
      const response = await axios.put(
        `http://127.0.0.1:9000/demande/${id}`, // Utilisez l'ID dans l'URL de la requête PUT
        demande,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Faites quelque chose avec la réponse de Spring, si nécessaire
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de la requête PUT :', error);
    }
  };


  return (
    <div className='containerinput'>

      <div >
        <form onSubmit={handleSubmit}>
          <h2>AVIS DIRECTEUR</h2>

          <div><textarea type="text" rows="6" cols="30" onChange={(e) => setAavis_directeur(e.target.value)}
            value={avis_directeur} >

          </textarea></div>

          <button type="submit" className="btn btn-primary" >
            approuver
          </button>

        </form></div></div>
  );
}

export default ValidationDemande
