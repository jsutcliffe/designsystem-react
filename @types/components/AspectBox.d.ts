declare namespace SGDS.Component {
    interface AspectBox extends React.AllHTMLAttributes<HTMLElement> {
        ratio?: 'square' | '1:1' | '4:3' | '16:9' | '21:9';
    }
}
