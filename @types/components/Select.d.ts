declare namespace SGDS.Component {
    namespace Select {
        interface Option extends React.AllHTMLAttributes<HTMLOptionElement> {
            text: string
        }
    }

    interface Select extends FormFieldBase<HTMLDivElement> {
        defaultValue?: string,
        options: Select.Option[],
        placeholder?: string,
        width?: InputWidth
    }
}
