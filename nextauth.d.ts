// import { RoleIdEnum } from "@/enum/RoleIdEnum";
import { DefaultSession, DefaultUser } from "next-auth";

// common interface for JWT and Session
interface IUser extends DefaultUser {
  userId: number,
  userName: string,
  emailAddress: string,
  firstName: string,
  lastName: string,
  employeeCode: string,
  token: {
    access_Token: string,
    expirationTime: Date
  },
  // role: {
  //   id: number,
  //   name: string,
  //   priority: number
  // },
  recordStatus: string,
  profileImage: string
}

declare module "next-auth" {
  interface User extends IUser { }
  interface Session {
    user?: User;
    expires?: Date
    token?: string
    // role?: number
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser { }
}