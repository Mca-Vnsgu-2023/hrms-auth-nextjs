
import axios, { AxiosError } from "axios"
import CredentialsProvider from "next-auth/providers/credentials"
import Axios, { httpsAgent } from "../const"
import { userService } from "./userService"


export default CredentialsProvider({
    name: "Credentials",
    credentials: {},
    async authorize(credentials, req) {
        const Credentials = credentials as {
            username: string,   
            password: string
        }
        try {
            const res = await Axios.post('/auth/signin',
                Credentials,
                httpsAgent
            )
            const resUser = res.data.data || null
            return userService.signInCredentials(resUser)
        }
        catch (error: any) {
            const errors = error as AxiosError;
            if (!axios.isAxiosError(error)) {
                throw new Error(error.message)
            }
            const { data } = error.response as {
                data: { isError: boolean, message: string }
            }
            throw new Error(data.message)
        }
    }
})