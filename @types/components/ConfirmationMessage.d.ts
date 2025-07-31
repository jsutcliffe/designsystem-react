declare namespace SGDS.Component {
    interface ConfirmationMessage extends React.AllHTMLAttributes<HTMLElement> {
        ariaLive: AriaLive,
        headingLevel: HeadingLevel,
        title: string
    }
}
