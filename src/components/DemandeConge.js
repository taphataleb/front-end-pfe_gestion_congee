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
  const baseUrl = "http://localhost:8080/demande/postDemande"
    const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZXlhaEBnbWFpbC5jb20iLCJpYXQiOjE2ODkzMDU4NjUsImV4cCI6MTY4OTMwNzMwNX0.E9rIynKxNknbDZ5LRt48cDahIsKNbmvze1Iztmp_nvw"
  const empdata = {dateDebut, dateFin}
   const connect = axios.create({
      baseURL: baseUrl,
      headers:{
        "Authorization":"Bearer " + token
      }
    })
      
  const postData =() =>{
    console.log("empdata", empdata)
   connect.post("",{
    dateDebut:
"2023-07-07",
dateFin
: 
"2023-07-14"
   
   })
    .then(res => {console.log(res) 
    console.log("caled")})
    .catch(err =>{console.log(err)
    console.log("caled2")})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
  
 
    
  }
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
        <button type="submit" className="btn btn-primary" onClick={() =>postData()}>
          Soumettre
        </button>
      </form>
      </div>
      
    </div>
    
  );
};

export default DemandeConge;