declare namespace SGDS.Component {
    namespace RadioButton {
        interface Group extends React.AllHTMLAttributes<HTMLElement> {
            inline?: boolean,
            name: string,
            small?: boolean
        }
    }

    interface RadioButton extends CheckboxRadioBase<HTMLInputElement> {
        id: string,
        name: string
    }
}
