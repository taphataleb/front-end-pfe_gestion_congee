// import React, { useState } from "react";
 import emailIcon from "../img/email.svg";
 import passwordIcon from "../img/password.svg";
 import styles from "./Register.module.css";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import { Link } from "react-router-dom";
 import React,{useState} from 'react';
//import { connect } from 'react-redux';
//import { authenticate, authFailure, authSuccess } from '../redux/authActions';
//import './loginpage.css';
import {userLogin} from '../Service.js/authService'
//import {Alert,Spinner} from 'react-bootstrap';

const Login=({loading,error,...props})=>{
 
  const[email,setEmail]=useState("");
  const[password, setPassword]=useState("");
 

  

 
     const empdata={email , password};
    







    const handleSubmit=(evt)=>{
        evt.preventDefault();
        //props.authenticate();

          userLogin(empdata).then((response)=>{

            console.log("response",response);
            if(response.status===200){
                props.setUser(response.data);
                props.history.push('');
            }
             else{
                props.loginFailure('Something Wrong!Please Try Again'); 
             }

            }).catch((err)=>{

            if(err && err.response){
            
            switch(err.response.status){
                case 401:
                    console.log("401 status");
                    props.loginFailure("Authentication Failed.Bad Credentials");
                    break;
                default:
                    props.loginFailure('Something Wrong!Please Try Again'); 

            }

            }
            // else{
            //     props.loginFailure('Something Wrong!Please Try Again');
            // }
                

        });
        //console.log("Loading again",loading);
    setEmail("")
    setPassword("")
        
    }

    
      

    console.log("Loading ",loading);
  
 

  

  return (
    <div className={styles.container} >
      <form className={styles.formLogin}  onSubmit={handleSubmit} noValidate={false}  autoComplete="off">
        <h2>Login</h2>
        <div>
          <div>
            <input type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)}    placeholder="E-mail"  autoComplete="off" />
            <img src={emailIcon} alt="" />
          </div>
        </div>
        <div>
          <div>
            <input type="password" name="password"  placeholder="Password"value={password} onChange={e=>setPassword(e.target.value)}  autoComplete="off" />
            <img src={passwordIcon} alt="" />
          </div>
        </div>

        <div>
          <button type="submit">Login</button>
          <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
            Don't have a account? <Link to="/Register">Create account</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
