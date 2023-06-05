export * from "./Auth/isLogin"
export * from "./getServerSession"

import axios from "axios";
import { getServerSession } from "./getServerSession";
const https = require('https');

const agent = new https.Agent({
    rejectUnauthorized: false
});

export const httpsAgent = { httpsAgent: agent }

const Axios = async () => {

    const session = await getServerSession()
    const headers = {
        Authorization: `Bearer ${session?.token}`
    }

    return axios.create({
        baseURL: process.env.API_URL,
        headers
    });
}

export default Axios