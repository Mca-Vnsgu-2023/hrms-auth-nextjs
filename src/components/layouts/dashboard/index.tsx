import React, { Fragment } from 'react'
import styles from "./dashboard.module.scss"
import Header from './header'
import { cookies } from 'next/headers'
import Sidebar from './sidebar'
import Breadcrumb from './breadcrumb'


function Dashboard({
    children,
}: {
    children: React.ReactNode
}) {
    const cookieStore = cookies();
    const collapsesidebar = cookieStore.get('collapse-sidebar');
    const iscollapse = collapsesidebar && collapsesidebar.value == 'true' || false
    return (
        <Fragment>
            <div className="container p-0">
                <div className="row">
                    <div className={`${styles.dashboardwrap}`}>
                        <Sidebar iscollapse={iscollapse} />
                        <div className={`w-100 ${styles.dashboard} ${iscollapse ? styles.collapse : ''}`}>
                            <Header />
                            <Breadcrumb />
                            <main>
                                {children}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard