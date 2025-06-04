declare namespace SGDS.Common {
    interface ConditionalWrapper extends React.AllHTMLAttributes<HTMLElement> {
        condition: boolean,
        wrapper: any
    }
}
