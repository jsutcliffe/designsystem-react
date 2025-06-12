declare namespace SGDS.Component {
    namespace SideNavigation {
        interface List extends React.AllHTMLAttributes<HTMLUListElement> {
            items?: SideNavigation.Link[],
            root?: boolean
        }

        interface Link extends React.AllHTMLAttributes<HTMLLIElement> {
            current?: boolean,
            href: string,
            items?: SideNavigation.Link[]
            title: string,
        }
    }

    interface SideNavigation extends React.AllHTMLAttributes<HTMLElement> {
        items: SideNavigation.Link[]
    }
}
