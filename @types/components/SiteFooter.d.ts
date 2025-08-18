declare namespace SGDS.Component {
    namespace SiteFooter {
        interface Links extends React.AllHTMLAttributes<HTMLUListElement> {
        }

        interface Link extends React.AllHTMLAttributes<HTMLLIElement> {
            href?: string,
            linkComponent?: SGDS.LinkComponent
        }

        interface License extends React.AllHTMLAttributes<HTMLDivElement> {
            href?: string,
            logoSrc?: string
        }

        interface Org extends React.AllHTMLAttributes<HTMLDivElement> {
            href?: string,
            title: string
        }
    }

    interface SiteFooter extends React.AllHTMLAttributes<HTMLElement> {

    }
}
