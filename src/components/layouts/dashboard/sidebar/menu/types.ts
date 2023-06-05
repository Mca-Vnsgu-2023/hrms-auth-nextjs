interface MenuType {
    path?: string,
    name: string
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    role?: number[]
    isPrivate?: boolean
}

export interface ParentMenuType extends MenuType {
    children?: MenuType[]
}