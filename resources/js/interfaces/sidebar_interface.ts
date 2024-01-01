

export interface MenuItem {
    title: string;
    type: string;
    link?: string | undefined;
    icon?: string | undefined;
    can?: string | undefined;
    sub_menu?: SubMenuItem[];
}

export interface SubMenuItem {
    title: string;
    link: string;
    can?: string | undefined;
}

export interface Props {
    menu: MenuItem[];
}