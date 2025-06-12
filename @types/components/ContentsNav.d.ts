declare namespace SGDS.Component {
    namespace ContentsNav {
        interface Link extends React.AllHTMLAttributes<HTMLElement> {
            content: string,
            current: boolean,
            href: string
        }
    }

    interface ContentsNav extends React.AllHTMLAttributes<HTMLElement> {
        items: ContentsNav.Link[],
        label: string,
        title: string
    }
}
