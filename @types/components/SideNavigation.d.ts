declare namespace SGDS.Component {
    namespace SideNavigation {
        interface List extends React.AllHTMLAttributes<HTMLUListElement> {
        }

        interface Link extends React.AllHTMLAttributes<HTMLLIElement> {
            current?: boolean,
            href: string,
            title: string
        }
    }

    interface SideNavigation extends React.AllHTMLAttributes<HTMLElement> {

    }
}
