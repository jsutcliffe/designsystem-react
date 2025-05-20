declare namespace SGDS.Component {
    interface NotificationPanel extends React.AllHTMLAttributes<HTMLDivElement> {
        ariaLive?: AriaLive,
        headerLevel?: HeaderLevel,
        title: string
    }
}
