declare namespace SGDS.Component {
    type SmallScreen = 'scrolling' | 'boxes';

    interface Table extends React.AllHTMLAttributes<HTMLTableElement> {
        className?: string,
        smallscreen?: SmallScreen
    }
}
