declare namespace SGDS.Component {
    namespace Accordion {
        interface Item extends React.AllHTMLAttributes<HTMLElement> {
            id: string,
            open?: boolean,
            title: string
        }
    }

    interface Accordion extends React.AllHTMLAttributes<HTMLElement> {
        hideOpenAll?: boolean
    }
}
