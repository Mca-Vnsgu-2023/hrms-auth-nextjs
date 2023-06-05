import { Session, User } from "next-auth"
import { JWT } from "next-auth/jwt"


const callbacks={
    async jwt({token,user}:{
        token:JWT,
        user:User
    }){
        if(user){
            token={...user}
        }
        return token
    },
    session({session,token}:{
        session:Session,
        token:JWT
    }){
        session.expires = token.token.expirationTime
        session.token = token.token.access_Token
        // session.user=token
        return session;
        
    }
}

export default callbacks