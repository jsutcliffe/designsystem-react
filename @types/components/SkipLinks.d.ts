declare namespace SGDS.Component {
    namespace SkipLinks {
        interface Link extends React.AllHTMLAttributes<HTMLLIElement> {
            targetId: string,
            title: string
        }
    }

    interface SkipLinks extends React.AllHTMLAttributes<HTMLDivElement> {
        items?: SkipLinks.Link[],
        mainContentId?: string,
        mainLinkText?: string
    }
}
