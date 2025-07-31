declare namespace SGDS {
    type AriaLive = 'polite' | 'assertive';
    type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    type IconName = 'ArrowUpward' | 'CalendarToday' | 'Cancel' | 'CheckCircle' | 'ChevronLeft' | 'ChevronRight' | 'Close' | 'Description' | 'DoubleChevronLeft' | 'DoubleChevronRight' | 'Error' | 'ExpandLess' | 'ExpandMore' | 'List' | 'Menu' | 'PriorityHigh' | 'Search';
    type DocumentIconName = 'Audio' | 'Csv' | 'Excel' | 'File' | 'Generic' | 'Geodata' | 'Ical' | 'Ico' | 'Image' | 'Odf' | 'Odg' | 'Odp' | 'Ods' | 'Odt' | 'Pdf' | 'Ppt' | 'Rtf' | 'Text' | 'Video' | 'Word' | 'Xml' | 'Zip';
    type InputWidth = 'fixed-20' | 'fixed-10' | 'fixed-5' | 'fixed-4' | 'fixed-3' | 'fixed-2' | 'fluid-three-quarters' | 'fluid-two-thirds' | 'fluid-half' | 'fluid-one-third' | 'fluid-one-quarter';
    type TagColour = 'grey' | 'green' | 'teal' | 'blue' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow';

    interface CheckboxRadioBase<T> extends React.AllHTMLAttributes<T> {
        checked?: boolean,
        hintText?: string,
        id?: string,
        label: string,
        name?: string,
        onBlur?: React.EventHandler<any>,
        onChange?: React.EventHandler<any>,
        small?: boolean
    }

    interface FormFieldBase<T> extends React.AllHTMLAttributes <T> {
        error?: boolean,
        errorMessage?: string,
        id: string,
        hintText?: string,
        label: string,
        name?: string,
        onBlur?: React.EventHandler<any>,
        onChange?: React.EventHandler<any>
    }

    interface TextInputBase<T> extends FormFieldBase<T> {
        countThreshold?: number,
        maxlength?: number,
        placeholder?: string,
        value?: string
    }
}
