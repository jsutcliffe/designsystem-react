declare namespace SGDS.Component {
    namespace SkipLinks {
        interface Link extends React.AllHTMLAttributes<HTMLLIElement> {
            href: string,
            title: string
        }
    }

    interface SkipLinks extends React.AllHTMLAttributes<HTMLDivElement> {
        mainContentId?: string
    }
}
