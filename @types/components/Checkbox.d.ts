declare namespace SGDS.Component {
    namespace Checkbox {
        interface Group extends React.AllHTMLAttributes<HTMLElement> {
        }
    }

    interface Checkbox extends CheckboxRadioBase<HTMLInputElement> {
        exclusive?: boolean,
    }
}
