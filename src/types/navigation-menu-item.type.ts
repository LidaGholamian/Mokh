export type Items = {
    title: string
}

export type NavigationMenuItem = {
    title: string,
    href: string,
}

export type NavItemsType = {
    title: string,
    href?: string,
    subMenu?: NavItemsType[]
}
