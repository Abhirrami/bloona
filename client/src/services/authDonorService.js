import axios from 'axios';

const API = 'http://localhost:5000/api/donor';

export const signupDonor = async(data) => await axios.post(`${API}/signup`, data).then(res => res.data); 
export const loginDonor = async(data) => await axios.post(`${API}/login`, data).then(res => res.data);