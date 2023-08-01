import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Styles.css';

const DemandeConge = () => {
    const [dateDébut,
        setDateDébut] = useState("");
    const [dateFin,
        setDateFin] = useState("");

    const handeleSaveDemande = async (e) => {
        e.preventDefault();
        let demande = {
            dateDébut,
            dateFin
        };

        const token = localStorage.getItem('token'); // Remplacez cela par votre véritable token

        try {
            const response = await axios.post('http://localhost:9000/demande/postDemande', demande, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Ajoutez le token dans l'en-tête de la requête
                    'Content-Type': 'application/json', // Indiquez le type de contenu JSON
                }
            });

            // Faites quelque chose avec la réponse de Spring, si nécessaire
            console.log(response.data);
        } catch (error) {
            console.error('Erreur lors de la requête POST :', error);
        }
    };

    return (

        <div  >

            <div className='containerinput' >

                <h1>Demande de congé</h1>
                <form onSubmit={handeleSaveDemande} >


                    <div  >
                        <label>Date de début :</label>
                        <input type='date' value={dateDébut} onChange={(e) => setDateDébut(e.target.value)} required />
                    </div>
                    <div >

                        <label>Date de fin :</label>
                        <input type='date' value={dateFin} onChange={(e) => setDateFin(e.target.value)} required />
                    </div>
                    <button type='submit'> Save </button>
                </form>
            </div>

        </div>

    );
};

export default DemandeConge;