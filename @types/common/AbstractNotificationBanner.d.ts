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
        hasColourIcon?: boolean,
        hasInverseIcon?: boolean,
        title: string,
        ref?: any
    }
}
