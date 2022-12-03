import axios from 'axios';

const APIURL = 'http://localhost:5000/api/'

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;




export const publicRequest = axios.create({
    baseURL: APIURL,
})

export const userRequest = axios.create({
    baseURL: APIURL,
    headers: { token: `Bearer ${TOKEN}` },
})