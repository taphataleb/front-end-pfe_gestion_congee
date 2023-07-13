import React, { useState, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./demande.module.css"
import axios from 'axios';
import { demande } from '../Pages/Auth/authService';
import { Navigate, useNavigate } from "react-router-dom";


const DemandeConge = () => {
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  // const [motif, setMotif] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
  const empdata = {dateDebut, dateFin}

   axios.post("http://localhost:8080/demande/postDemande",{
    empdata
   
   })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };
  // setDateDebut ("")
  // setDateFin ("")f
  
   

  return (
    
  <div className="container ">
      
    <div className='conge'>
    
      <h1>Demande de congé</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Date de début :</label>
          <input
            type="date"
            className="form-control"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date de fin :</label>
          <input
            type="date"
            className="form-control"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
          <label>Motif :</label>
          <textarea
            className="form-control"
            value={motif}
            onChange={(e) => setMotif(e.target.value)}
            required
          />
        </div> */}
        <button type="submit" className="btn btn-primary">
          Soumettre
        </button>
      </form>
      </div>
      
    </div>
    
  );
};

export default DemandeConge;