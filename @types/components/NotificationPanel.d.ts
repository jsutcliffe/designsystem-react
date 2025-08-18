declare namespace SGDS.Component {
    interface NotificationPanel extends React.AllHTMLAttributes<HTMLDivElement> {
        ariaLive?: React.AriaAttributes['aria-live'],
        headingLevel?: HeadingLevel,
        title: string
    }
}
