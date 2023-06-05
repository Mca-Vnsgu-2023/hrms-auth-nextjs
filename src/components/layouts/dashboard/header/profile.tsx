'use client'
import React from 'react'
import { Dropdown, SSRProvider } from 'react-bootstrap'
import styles from './header.module.scss'
import { NotificationIcon } from './icons'
import Image from 'next/image'
import dummy from './icons/dummy.png'
import { signOut } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { themeToggle } from '../../reducer'
import { getCookie } from '../../utils'


function Profile() {

    const handleLogout = () => {
        signOut()
    }

    const dispatch = useDispatch()
    const themMode = async () => {
        const cookieValue = await getCookie('themeMode')
        const newValue = cookieValue && cookieValue.value == 'dark' ? 'light' : 'dark'
        dispatch(themeToggle(newValue))
        
    }

    return (
        <SSRProvider>
            <div className='d-flex align-item-center justify-content-between px-3'>
                <div className={`${styles.notification} mx-3 rounded-circle d-none d-sm-flex align-items-center justify-content-center`} onClick={themMode}>
                    <NotificationIcon />
                </div>
                <div className={`${styles.notification} mx-3 rounded-circle d-none d-sm-flex align-items-center justify-content-center`}>
                    <NotificationIcon />
                </div>
                <div className="userimg">
                    <Dropdown>
                        <Dropdown.Toggle id='dropdown-basic' className={`${styles.dropdownToggle} px-0`}>
                            <Image
                                width={40}
                                height={40}
                                alt='user img'
                                src={dummy}
                                className='rounded-circle'
                            />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href='/dashboard/user/profile'>My Profile</Dropdown.Item>
                            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </SSRProvider>
    )
}

export default Profile