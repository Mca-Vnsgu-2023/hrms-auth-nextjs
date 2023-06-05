import { getServerSession } from '../utils';
import { redirect } from 'next/navigation';

async function page() {
  debugger
  const session = await getServerSession()
  if (!session) {
    redirect('/auth/login')
  } else {
    redirect('/dashboard')
  }
}

export default page