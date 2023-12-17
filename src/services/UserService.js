import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;


export const loginUser = async (credentials) => {
    return await axios.post(`${API_URL}/login`, credentials);
};

// Add other user-related API calls here
