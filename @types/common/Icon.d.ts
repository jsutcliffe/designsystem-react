declare namespace SGDS.Common {
    interface Icon extends React.AllHTMLAttributes<SVGSVGElement> {
        accessible?: boolean,
        className?: string,
        fill?: boolean,
        icon: string
        iconPath?: string,
        iconSize?: string,
        title?: string
    }
}
