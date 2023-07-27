import React from 'react';
import axios from 'axios';

//export const userLogin=(authRequest)=>{return axios({ 'method':'POST','url':`${process.env.hostUrl||'http://localhost:9000'}/api/v1/auth/login`,'data':authRequest })}

export const token = localStorage.getItem("token")
console.log(token)
export const userLogin = async (authRequest) => {
    const response = await axios({
        'method': 'POST',
        'url': `${process.env.hostUrl || 'http://localhost:9000'}/api/v1/auth/login`,
        'data': authRequest
    });
    localStorage.setItem("token", response.data.token);
    console.log(localStorage);


}







export const userRegister=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:9000'}/api/v1/auth/register`,
        'data':authRequest
    })

}

