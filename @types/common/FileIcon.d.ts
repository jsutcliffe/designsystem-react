declare namespace SGDS.Common {
    interface FileIcon extends React.AllHTMLAttributes<SVGSVGElement> {
        ariaLabel?: React.AriaAttributes['aria-label'],
        className?: string,
        icon: DocumentIconName
    }
}
