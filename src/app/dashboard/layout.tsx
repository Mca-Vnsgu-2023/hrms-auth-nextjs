import '../../assets/styles/globals.scss'
import { Dashboard } from '@/src/components/layouts'
import { getServerSession } from '../../utils'
import { redirect } from 'next/navigation'
import { getCookie } from '@/src/components/layouts/utils'

// export const metadata = {
//   title: 'HRMS | Dashboard',
//   description: 'HRMS Dashboard by NatRIX Software Private Limited',
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  const themeMode = await getCookie('themeMode')

  // if (themeMode != null) {
  //   console.log("first;;", themeMode)
  // }

  if (!session) {
    redirect('/auth/login')
  }
  return (
    <div className={`${themeMode?.value}`}>
      <Dashboard>
        {children}
      </Dashboard>
    </div>

  )
}
