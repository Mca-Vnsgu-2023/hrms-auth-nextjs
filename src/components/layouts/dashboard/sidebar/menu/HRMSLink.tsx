import Link from 'next/link';
import React from 'react'
import styles from "./menu.module.scss"

interface ILink {
    children: string
    href: string
    className: string
    id: string
}

const HRMSLink = React.forwardRef<ILink, any>((props, ref) => {
    const { children, href, className, id: pathname } = props

    const isActive = href.includes('dashboard') ? pathname.replace('/', '') === href
        : pathname.replace("/dashboard", '').includes(href);
    const linkHref = href.includes('dashboard') ? '/' + href : '/dashboard/' + href
    const styleclass = `${className} ${isActive ? styles.active : ''} d-flex align-items-center`

    return (<Link
        aria-label={'aria-label-' + linkHref}
        className={styleclass}
        href={linkHref}>
        {children}
    </Link>)
})

HRMSLink.displayName = 'HRMSLink'

export default HRMSLink