declare namespace SGDS.Component {
    namespace Breadcrumbs {
        interface Item extends React.AllHTMLAttributes<HTMLElement> {
            isHidden?: boolean,
            linkComponent?: SGDS.LinkComponent
        }
    }

    interface Breadcrumbs extends React.AllHTMLAttributes<HTMLElement> {
    }
}
