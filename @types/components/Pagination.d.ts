declare namespace SGDS.Component {
    namespace Pagination {
        interface Page extends React.AllHTMLAttributes<HTMLElement> {
            ariaLabel: string,
            current?: boolean,
            href: string,
            onClick?: React.EventHandler<any>,
            text: string
        }
    }

    interface Pagination extends React.AllHTMLAttributes<HTMLElement> {
        ariaLabel: string,
        onClick?: React.EventHandler<any>,
        padding: number,
        page: number,
        pattern: string,
        totalPages: number
    }
}
