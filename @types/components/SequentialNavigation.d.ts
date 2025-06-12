declare namespace SGDS.Component {
    namespace SequentialNavigation {
        interface Link extends React.AllHTMLAttributes<HTMLDivElement> {
            href: string,
            title: string
        }
    }

    interface SequentialNavigation extends React.AllHTMLAttributes<HTMLElement> {
        ariaLabel?: string,
        next?: SequentialNavigation.Link,
        previous?: SequentialNavigation.Link
    }
}
