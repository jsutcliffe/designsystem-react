declare namespace SGDS.Component {
    namespace Breadcrumbs {
        interface Item extends React.AllHTMLAttributes<HTMLElement> {
            hidden?: boolean,
            href?: string,
            title: string
        }
    }

    interface Breadcrumbs extends React.AllHTMLAttributes<HTMLElement> {
        hideLastItem?: boolean,
        items: Breadcrumbs.Item[]
    }
}
