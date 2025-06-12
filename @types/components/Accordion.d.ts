declare namespace SGDS.Component {
    namespace Accordion {
        interface Item extends React.AllHTMLAttributes<HTMLElement> {
            headerLevel?: SGDS.HeaderLevel,
            id: string,
            open?: boolean,
            title: string
        }
    }

    interface Accordion extends React.AllHTMLAttributes<HTMLElement> {
        headerLevel?: SGDS.HeaderLevel,
        hideOpenAll?: boolean
    }
}
