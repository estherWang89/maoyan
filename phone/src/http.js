import Vue from 'vue'
import axios from 'axios';
const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000',
  });

  http.interceptors.request.use(config=>{
      if(localStorage.token){
          config.headers.Authorization="Bearer "+localStorage.token;
      }
      return config;
  },error=>{
      return Promise.reject(error);
  });

  http.interceptors.response.use(res=>{
      return res;
  },err=>{
    if(err.response.status === 401){
        console.log('please login')
    }
    return Promise.reject(err)
  });

 export default http;