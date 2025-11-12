declare namespace SGDS.Component {
    interface PageHeader extends React.AllHTMLAttributes<HTMLHeadingElement> {
        label?: string,
        title: string,
        titleId?: string
    }
}
