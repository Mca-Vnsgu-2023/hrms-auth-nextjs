import { User } from "next-auth";

export interface IUserService{
    signInCredentials(user: User):Promise<User> | User;
}

export class InMemoryUserService implements IUserService{
    signInCredentials(user: User): User | Promise<User> {
        if(!user){
            throw new Error("Invalid Email or Password");
        }
        return user as User;
    }
}

export const userService= new InMemoryUserService();