declare namespace SGDS.Component {
    namespace ContentsNav {
        interface Link extends React.AllHTMLAttributes<HTMLElement> {
            current: boolean,
            href: string
        }
    }

    interface ContentsNav extends React.AllHTMLAttributes<HTMLElement> {
        label?: string,
        title: string
    }
}
