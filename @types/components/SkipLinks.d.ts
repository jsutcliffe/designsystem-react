declare namespace SGDS.Component {
    namespace SkipLinks {
        interface Link extends React.AllHTMLAttributes<HTMLLIElement> {
            fragmentId: string
        }
    }

    interface SkipLinks extends React.AllHTMLAttributes<HTMLDivElement> {
        mainContentId?: string,
        mainLinkText?: string,
        isStatic?: boolean
    }
}
