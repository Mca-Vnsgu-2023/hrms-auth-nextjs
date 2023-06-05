import React, { Fragment } from 'react'
import styles from './sidebar.module.scss'
import Profile from './profile'
import Menu from './menu'


function Sidebar({ iscollapse }: { iscollapse: boolean }) {
    const classname = `d-none d-md-flex flex-column flex-shrink-0 
    ${styles.sidebar} ${iscollapse ? styles.collapse : 'overflow-hidden '}`
    return (
        <Fragment>
            <div className={classname}>
                <Profile isCollapse={iscollapse} />
                <Menu isCollapse={iscollapse} />
            </div>
        </Fragment >
    )
}

export default Sidebar