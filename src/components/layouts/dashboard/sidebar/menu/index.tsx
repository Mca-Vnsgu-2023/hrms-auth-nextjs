'use client';
import { usePathname } from "next/navigation";
import React from "react";
import { Accordion, Nav, SSRProvider } from "react-bootstrap";
import styles from './menu.module.scss'
import { ArrayOfMenu } from "./const";
import AccordionMenu from './accordionmenu'
import HRMSicon from "@/src/components/HRMSicon";
import DropdownMenu from "./dropdownmenu";
import HRMSLink from "./HRMSLink";

function Menu(props:{isCollapse : boolean}){

    const pathname=usePathname();
    const {isCollapse} =props
 

    return(
        <SSRProvider>
            <Accordion flush>
                <Nav defaultActiveKey='/home' className={`${styles.menuwrap} flex-column`}>
                    {ArrayOfMenu.map((menu,index)=>{
                        if(menu.path){
                            return(
                                <Nav.Link
                                    id={pathname}
                                    as={HRMSLink}
                                    className={isCollapse ? 'justify-content-center' : ''}
                                    key={`${menu.name}_${index}`}
                                    href={menu.path || '/'}>
                                    {menu.icon && <HRMSicon svg={menu.icon} />}
                                    {!isCollapse && <span> {menu.name} </span>}
                                </Nav.Link>
                            )
                        }
                        else{
                            if (isCollapse) return <DropdownMenu pathname={pathname} key={`${menu.name}_${index}`} menu={menu} />
                            return <AccordionMenu pathname={pathname} key={`${menu.name}_${index}`} menu={menu} />
                        }
                    })}
                </Nav>
            </Accordion>
        </SSRProvider>
    )
}

export default Menu

