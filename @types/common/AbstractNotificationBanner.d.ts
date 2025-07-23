declare namespace SGDS.Common {
    namespace AbstractNotificationBanner {
        interface Buttons extends React.AllHTMLAttributes<HTMLDivElement> {
            children: React.ReactNode
        }
    }

    interface AbstractNotificationBanner extends React.AllHTMLAttributes<HTMLDivElement> {
        close?: boolean,
        hasIcon?: boolean,
        icon?: IconName,
        iconColour?: boolean,
        iconInverse?: boolean,
        title: string,
        ref?: any
    }
}
