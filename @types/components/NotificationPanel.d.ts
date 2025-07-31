declare namespace SGDS.Component {
    interface NotificationPanel extends React.AllHTMLAttributes<HTMLDivElement> {
        ariaLive?: AriaLive,
        headingLevel?: HeadingLevel,
        title: string
    }
}
