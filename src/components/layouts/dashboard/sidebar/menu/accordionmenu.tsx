import React from 'react'
import { ParentMenuType } from './types'
import { Accordion, Nav } from 'react-bootstrap'
import styles from './menu.module.scss'
import HRMSicon from '@/src/components/HRMSicon'
import HRMSLink from './HRMSLink'

export default function accordionmenu(props: { menu: ParentMenuType, pathname: string }) {

    const { menu, pathname } = props

    return (
        <Accordion.Item eventKey={menu.name} className="border-0">
            <Accordion.Header className={styles.accordionbtn}>
                {menu.icon && <HRMSicon svg={menu.icon} />}
                <span> {menu.name} </span>
            </Accordion.Header>
            <Accordion.Body className='p-0'>
                <Nav defaultActiveKey='/home' className={`${styles.menuwrap} flex-column`}>
                    {menu.children && menu.children.map((menu,index)=>{
                        if(menu.path){
                            return(
                                <Nav.Link id={pathname} className={`px-5`}
                                key={`${menu.name}_${index}`}
                                as={HRMSLink}
                                href={menu.path || ''}>
                                {menu.icon && <HRMSicon svg={menu.icon} />}
                                <span> {menu.name} </span>
                                </Nav.Link>
                            )
                        }
                    })}
                </Nav>
            </Accordion.Body>
        </Accordion.Item>
    )
}
