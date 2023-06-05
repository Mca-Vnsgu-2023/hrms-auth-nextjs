import axios from "axios";
const https = require('https');

const agent = new https.Agent({
    rejectUnauthorized: false
});

export const httpsAgent = { httpsAgent: agent }


const Axios = axios.create({
    baseURL: process.env.API_URL
});

export default Axios