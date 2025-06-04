declare namespace SGDS.Component {
    interface ConfirmationMessage extends React.AllHTMLAttributes<HTMLElement> {
        ariaLive: AriaLive,
        headerLevel: HeaderLevel,
        title: string
    }
}
