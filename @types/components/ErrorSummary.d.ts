declare namespace SGDS.Component {
    namespace ErrorSummary {
        interface Error extends React.AllHTMLAttributes<HTMLElement> {
            fragmentId?: string
            title: string
        }
    }

    interface ErrorSummary extends React.AllHTMLAttributes<HTMLElement> {
        errors?: ErrorSummary.Error[],
        title: string
    }
}
