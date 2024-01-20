
export type NavItemsProps = {
    name: string;
    url: string;
    hasSeparator?: boolean;
}


export const navItems: NavItemsProps[] = [
    {
        name: "Linkedin",
        url: "/linkedin/",
        hasSeparator: true,

    },
    {
        name: "Github",
        url: "/github/",

    },
]