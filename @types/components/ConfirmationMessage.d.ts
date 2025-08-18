declare namespace SGDS.Component {
    interface ConfirmationMessage extends React.AllHTMLAttributes<HTMLElement> {
        ariaLive: React.AriaAttributes['aria-live'],
        headingLevel: HeadingLevel,
        title: string
    }
}
