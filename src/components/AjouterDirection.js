
import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function AjouterDirection() {

    const [name, setName] = useState("");


    const handeleSaveDirection = async (e) => {
        e.preventDefault();
        let direction = {
            name
        };

        const token = localStorage.getItem('token'); // Remplacez cela par votre véritable token

        try {
            const response = await axios.post('http://localhost:9000/directions/postdirection', direction, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Ajoutez le token dans l'en-tête de la requête
                    'Content-Type': 'application/json', // Indiquez le type de contenu JSON
                }
            });

            console.log(response.data);
        } catch (error) {
            console.error('Erreur lors de la requête POST :', error);
        }
    };
    return (
        <div  >
            <div className='containerinput' >

                <h1>Ajouter Direction</h1>
                <form onSubmit={handeleSaveDirection} >

                    <div >
                        <label>libele</label>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <button type='submit'> Save </button>
                </form>
            </div>
        </div>

    );
}

export default AjouterDirection;