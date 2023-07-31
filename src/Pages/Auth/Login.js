// import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import emailIcon from "../../img/email.svg";
import passwordIcon from "../../img/password.svg";
import styles from "./Register.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';


import { userLogin } from './authService'
import axios from "axios";

const Login = ({ loading, error, ...props }) => {

  // const[email,setEmail]=useState("");
  // const[password, setPassword]=useState("");
  // const navigate = useNavigate();
  // const empdata={email , password};
  // const handleSubmit=(evt)=>{
  //       evt.preventDefault();

  //         userLogin(empdata).then((response)=>{

  //           console.log("response",response);
  //           navigate("/")


  //       }).then (err => console.log(err))

  //   setEmail("")
  //   setPassword("")  

  //}

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/v1/auth/login', {
        email: email,
        password: password,
      });
      // Assuming your backend returns a token upon successful login
      // Store the token securely (e.g., in local storage)
      localStorage.setItem('token', response.data.token);
      // Navigate to the home page
      navigate('/liste_des_demande');
    } catch (error) {
      console.error('Login failed', error);
    }



  };

  return (
    <div className={styles.container} >
      <form className={styles.formLogin} onSubmit={handleLogin} noValidate={false} autoComplete="off">
        <h2>Login</h2>
        <div>
          <div>
            <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" autoComplete="off" />
            <img src={emailIcon} alt="" />
          </div>
        </div>
        <div>
          <div>
            <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="off" />
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
