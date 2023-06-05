import { Dropdown } from "react-bootstrap"
import { ParentMenuType } from "./types"
import styles from "./menu.module.scss"
import HRMSicon from "@/src/components/HRMSicon"
import HRMSLink from "./HRMSLink"
// import HRMSLink from "./HRMSLink"

export default function DropdownMenu(props: {
    menu: ParentMenuType
    pathname: string
}) {
    const { menu, pathname } = props

    return (
        <Dropdown drop='end'>
            <Dropdown.Toggle
                className={`${styles.dropdownToggle} w-100 d-flex justify-content-center align-items-center`}
                variant="link"
                id={menu.name}
                aria-label={'aria-label-' + menu.name}
            >
                <div></div>
                {menu.icon && <HRMSicon svg={menu.icon} />}
            </Dropdown.Toggle>

            <Dropdown.Menu className={`${styles.dropdownMenu} w-100`}>
                {menu.children && menu.children.map((menu, index) => {
                    if (menu.path) {
                        return (
                            <Dropdown.Item
                                key={`${menu.name}_dropdown_${index}`}
                                id={pathname}
                                as={HRMSLink}
                                href={menu.path || ''}>
                                {menu.icon &&
                                    <div className="px-1">
                                        <HRMSicon svg={menu.icon} />
                                    </div>
                                }
                                {menu.name}
                            </Dropdown.Item>
                        )
                    }
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
}