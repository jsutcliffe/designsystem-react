declare namespace SGDS.Component {
    interface NotificationBanner extends React.AllHTMLAttributes<HTMLDivElement> {
        close?: boolean,
        icon?: boolean,
        iconColour?: boolean,
        iconInverse?: boolean,
        title: string
    }
}
