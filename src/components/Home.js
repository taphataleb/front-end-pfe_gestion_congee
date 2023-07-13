import  { useState, useEffect } from 'react';
import React from 'react';

import './Home.css';
import "./ProgressBar.css"
//import { ProgressBar } from 'react-toastify/dist/components';
import ProgressBar from './Progress bar';


const HomePage = ({media}) => {
  console.log(media)
  const [demandesAcceptees, setDemandesAcceptees] = useState([]);

  useEffect(() => {
    fetchDemandesAcceptees();
  }, []);

  const fetchDemandesAcceptees = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/demandes?statut=accepte');
      const data = await response.json();
      setDemandesAcceptees(data);
    } catch (error) {
      console.log('Une erreur s\'est produite lors de la récupération des demandes de congé acceptées.', error);
    }
  };
  return (
    <div className={media ? "home-page" : "home-page space"}>
       
      <div className="card solde">
        <h2>Votres Comptes </h2>
        <p className="card-text">{demandesAcceptees.length}</p>
        {/* Contenu de la carte pour les demandes acceptées */}
      </div>
      <div className="card demande">
        <h2>votres Demandes</h2>
        <p className="card-text">{demandesAcceptees.length}</p>
        {/* Contenu de la carte pour les demandes refusées */}
      </div>
      <div className="card accepted">
        <h2>Demandes Acceptées</h2>
        <p className="card-text">{demandesAcceptees.length}</p>
      
        {/* Contenu de la carte pour les demandes acceptées */}
      </div>
      <div className="card rejected">
        <h2>Demandes Refusées</h2>
        <p className="card-text">{demandesAcceptees.length}</p>
        {/* Contenu de la carte pour les demandes refusées */}
     
        
      </div>
         <ProgressBar/>
      
    </div>
  );
};

export default HomePage;