declare namespace SGDS.Component {
    namespace RadioButton {
        interface Group extends React.AllHTMLAttributes<HTMLElement> {
            inline?: boolean,
            name: string
        }
    }

    interface RadioButton extends CheckboxRadioBase<HTMLInputElement> {
    }
}
