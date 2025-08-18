declare namespace SGDS.Component {
    namespace SideNavigation {
        interface List extends React.AllHTMLAttributes<HTMLUListElement> {
            isRoot?: boolean
        }

        interface Item extends React.AllHTMLAttributes<HTMLLIElement> {
            current?: boolean,
            href: string,
            linkComponent?: SGDS.LinkComponent,
            title: string,
        }
    }

    interface SideNavigation extends React.AllHTMLAttributes<HTMLElement> {

    }
}
