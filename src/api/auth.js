import axios from 'axios';

const API = 'https://banticfintechapi.azurewebsites.net'

export const loginRequest = user => axios.post(`${API}/api/MixQR/getFBToken`, user);

export const generarQRRequest = user => axios.post(`${API}/api/MixQR//getQRImage`, user);

export const logoutRequest = () => axios.post(`/logout`);