declare namespace SGDS.Component {
    namespace SequentialNavigation {
        interface Link extends React.AllHTMLAttributes<HTMLDivElement> {
            href: string,
            isPrev?: boolean,
            linkComponent?: SGDS.LinkComponent,
            textLabel: string
        }
    }

    interface SequentialNavigation extends React.AllHTMLAttributes<HTMLElement> {
        ariaLabel?: React.AriaAttributes['aria-label']
    }
}
