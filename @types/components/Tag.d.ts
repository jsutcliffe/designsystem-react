declare namespace SGDS.Component {
    interface Tag extends React.AllHTMLAttributes<HTMLElement> {
        className?: string,
        colour?: TagColour,
        title: string
    }
}
