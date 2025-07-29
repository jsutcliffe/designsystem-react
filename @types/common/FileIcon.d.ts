declare namespace SGDS.Common {
    interface FileIcon extends React.AllHTMLAttributes<SVGSVGElement> {
        ariaLabel?: string,
        className?: string,
        icon: DocumentIconName
    }
}
