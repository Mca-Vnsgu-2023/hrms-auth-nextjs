import credentialsProvider from "./credentialsProvider";
import pages from './pages'
import callbacks from "./callbacks"
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const authOptions={
    providers:[
        credentialsProvider,
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID as string,
        //     clientSecret: process.env.GOOGLE_SECRET as string,
        // })
    ],
    pages,
    callbacks,
}

const handler=NextAuth(authOptions)
export {handler as GET, handler as POST}