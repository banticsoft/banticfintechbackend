import axios from 'axios';

// const API = 'https://banticfintechapi.azurewebsites.net'
const API_MIDDLEWARE_SERVER = 'https://banticfintechapi.azurewebsites.net'
const API = process.env.API_MIDDLEWARE || API_MIDDLEWARE_SERVER

export const loginRequest = user => axios.post(`${API}/api/MixQR/getFBToken`, user);

export const whoamiRequest = user => axios.post(`${API}/api/MixQR/getFBUserData`, user);

export const generarQRRequest = user => axios.post(`${API}/api/MixQR//getQRImage`, user);

export const logoutRequest = () => axios.post(`/logout`);