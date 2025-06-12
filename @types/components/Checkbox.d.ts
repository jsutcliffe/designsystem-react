declare namespace SGDS.Component {
    namespace Checkbox {
        interface Group extends React.AllHTMLAttributes<HTMLElement> {
            items: Checkbox[],
            small?: boolean
        }
    }

    interface Checkbox extends CheckboxRadioBase<HTMLInputElement> {
        exclusive?: boolean
        id: string
    }
}
