declare namespace SGDS.Component {
    type ButtonStyle = 'primary' | 'secondary';
    type ButtonType = 'submit' | 'reset' | 'button';
    type ButtonWidth = 'fluid' | 'fixed' | 'max';

    interface Button extends React.AllHTMLAttributes<HTMLButtonElement> {
        icon?: string,
        iconLeft?: boolean
        iconOnly?: boolean,
        href?: string,
        small?: boolean,
        buttonStyle?: ButtonStyle,
        styleAsLink?: boolean,
        type?: ButtonType
        width?: ButtonWidth
    }
}
