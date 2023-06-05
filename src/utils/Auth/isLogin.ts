'use server';
import { cookies } from 'next/headers';

export async function isAuthenticate() {
    const cookieStore = cookies();
    const auth = cookieStore.get('authtoken');
    alert(auth)
    return auth && auth.value || false
}