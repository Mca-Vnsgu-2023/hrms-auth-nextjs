'use client';

import React from 'react'
import styles from "./header.module.scss"
import { BarIcon } from './icons'
import { useDispatch } from 'react-redux';
import { getCookie } from '../../utils';
import { sidebarToggle } from '../../reducer';


function Sidebartoggle() {
    const dispatch = useDispatch()
    const toggle = async () => {
        const cookieValue = await getCookie('collapse-sidebar')
        const newValue = cookieValue && cookieValue.value == 'true' ? 'false' : 'true'
        dispatch(sidebarToggle(newValue))
        
    }
    
    return (
        <div className={`${styles.sidebartoggle} d-flex align-items-center justify-content-center`}>
            <button aria-label="toggle btn" className='btn btn-outline border-0' onClick={toggle}>
                <BarIcon />
            </button>
        </div>
    )

}

export default Sidebartoggle