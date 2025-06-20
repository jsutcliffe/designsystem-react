declare namespace SGDS.Component {
    interface TextInput extends TextInputBase<HTMLInputElement> {
        buttonIcon?: IconName,
        buttonText?: string,
        className?: string,
        currency?: boolean,
        currencySymbol?: string,
        hasButton?: boolean,
        type?: string,
        width?: InputWidth
    }
}
