'use server';
import { cookies } from "next/headers";


export async function getCookie(key:string) {
    const cookieStore=cookies();
    const appCookies= cookieStore.get(key)
    return appCookies
}

export async function setCookies(key:string,value: string) {
    cookies().set(key,value);
}
