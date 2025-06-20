declare namespace SGDS.Common {
    interface Icon extends React.AllHTMLAttributes<SVGSVGElement> {
        ariaLabel?: string,
        className?: string,
        fill?: boolean,
        icon: IconName,
        iconSize?: string
    }
}
