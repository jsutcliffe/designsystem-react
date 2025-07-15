declare namespace SGDS.Component {
    namespace SiteNavigation {
        interface Link extends React.AllHTMLAttributes<HTMLLIElement> {
            current?: boolean,
            href: string,
            title: string
        }
    }

    interface SiteNavigation extends React.AllHTMLAttributes<HTMLElement> {
        items: SiteNavigation.Link[],
        ref?: React.RefObject<null>
    }
}
