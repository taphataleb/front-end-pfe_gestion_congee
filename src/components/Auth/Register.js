import React, { useEffect, useState, useNavigate } from "react";
//Icon
import userIcon from "../../img/user.svg";
import emailIcon from "../../img/email.svg";
import passwordIcon from "../../img/password.svg";
import styles from "./Register.module.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

import { ToastContainer } from "react-toastify";


import { Link } from "react-router-dom";
import { userRegister } from "./authService";


const Register = ({ loading, error, ...props }) => {
  // const[id,]=useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [NNI, setnni] = useState("");
  const [matricule, setmatricule] = useState("");
  const [phone_number, setphone] = useState("");

  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);




  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { firstname, lastname, email, password, role, NNI, matricule, phone_number };


    userRegister(empdata).then((response) => {

      console.log("response", response);
      if (response.status === 200) {
        props.setUser(response.data);
        props.history.push('/dashboard');
      }
      // else{
      //    props.loginFailure('Something Wrong!Please Try Again'); 
      // }


    }).catch((err) => {

      if (err && err.response) {

        switch (err.response.status) {
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



    setFirstname("")
    setEmail("")
    setLastname("")
    setPassword("")
    setRole("")
    setmatricule("")
    setnni("")
    setphone("")

  }



  return (
    <div className='containerinput'>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2>Register</h2>
        <div>
          <div >
            <input type="text" name="firstname" placeholder="FirstName"
              required value={firstname} onMouseDown={e => valchange(true)}
              onChange={e => setFirstname(e.target.value)} autoComplete="off" />
            {/* <img src={userIcon} alt="" /> */}
          </div>


        </div>
        <div>
          <div >
            <input type="text" name="lastname" placeholder="LastName" required
              value={lastname} onMouseDown={e => valchange(true)}
              onChange={e => setLastname(e.target.value)} autoComplete="off" />
            {/* <img src={userIcon} alt="" /> */}
          </div>


        </div>
        <div>
          <div >
            <input type="text" name="nni" placeholder="NNI" required
              value={NNI} onMouseDown={e => valchange(true)}
              onChange={e => setnni(e.target.value)} autoComplete="off" />
            {/* <img src={userIcon} alt="" /> */}
          </div>


        </div>
        <div>
          <div >
            <input type="text" name="matricule" placeholder="Matricule" required
              value={matricule} onMouseDown={e => valchange(true)}
              onChange={e => setmatricule(e.target.value)} autoComplete="off" />
            {/* <img src={userIcon} alt="" /> */}
          </div>


        </div>
        <div>
          <div >
            <input type="text" name="phone_number" placeholder="Phone_Number" required
              value={phone_number} onMouseDown={e => valchange(true)}
              onChange={e => setphone(e.target.value)} autoComplete="off" />
            {/* <img src={userIcon} alt="" /> */}
          </div>


        </div>
        <div>
          <div>
            <input type="text" name="email" placeholder="E-mail"
              value={email} onChange={e => setEmail(e.target.value)} autoComplete="off" />
            {/* <img src={emailIcon} alt="" /> */}
          </div>

        </div>
        <div>
          <div>
            <input type="password" name="password" placeholder="Password"
              value={password} onChange={e => setPassword(e.target.value)} autoComplete="off" />
            {/* <img src={passwordIcon} alt="" /> */}
          </div>

        </div>
        <div>
          <div >
            <input type="text" name="role" placeholder="Role" value={role}
              onChange={e => setRole(e.target.value)} autoComplete="off" />
            {/* <img src={userIcon} alt="" /> */}
          </div>


        </div>


        <div>
          <div className={styles.terms}>
            <input type="checkbox" />
            <label htmlFor="accept">I accept terms of privacy policy</label>
          </div>

        </div>
        <div>
          <button type="submit">Create Account</button>
          <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
            Already have a account? <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}


export default Register;
