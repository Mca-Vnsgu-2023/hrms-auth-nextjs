import React from 'react'
import styles from "./header.module.scss"
import Image from 'next/image'
import Profile from './profile'
import Sidebartoggle from './sidebartoggle'

function Header() {
    return (
        <header className={`${styles.headerwarp} d-flex align-items-center justify-content-between`}>
            <div className='d-flex align-items-center justify-content-between'>
                <Sidebartoggle />
                <span className='d-none d-sm-block'>Human Resource Management System</span>
            </div>

            <Profile />
        </header>
    )
}

export default Header