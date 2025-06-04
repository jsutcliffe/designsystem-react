import { useEffect, useRef } from 'react';
// @ts-ignore
import DSDatePicker from '@scottish-government/design-system/src/components/date-picker/date-picker';
import TextInput from '../text-input/text-input';

/**
 * @param {Object} props - Properties for the element
 * @param {string} [props.disabledDates] - Space-separated list of disabled dates in dd/mm/yyyy format
 * @param {boolean} [props.error] - Picker is in an error state
 * @param {string} [props.errorMessage] - Error text
 * @param {string} [props.hintText] - Hint text content
 * @param {string} props.id - Picker input ID attribute
 * @param {string} [props.iconPath='./'] - Path to the icon file
 * @param {string} props.label - Label text
 * @param {string} [props.maxDate] - Latest selectable date in dd/mm/yyyy
 * @param {string} [props.minDate] - Earliest selectable date in dd/mm/yyyy
 * @param {boolean} [props.multiple] - Use separate fields for day, month and year
 * @param {string} props.name - Picker input name attribute
 * @param {function} [props.onBlur] - Function to fire in response to a blur event
 * @param {function} [props.onChange] - Function to fire in response to a change event
 * @param {string} [props.value] - Default value of the picker
 * @param {InputWidth} [props.width='fixed-10'] - Width CSS class
 * @returns {JSX.Element} - The element
 */
const DatePicker: React.FC<SGDS.Component.DatePicker> = ({
    width = 'fixed-10',
    disabledDates,
    error,
    errorMessage,
    hintText,
    id,
    iconPath = './',
    label,
    maxDate,
    minDate,
    multiple,
    name,
    onBlur,
    onChange,
    value,
    ...props
}) => {
    // todo: dateSelectCallback function

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSDatePicker(ref.current, {imagePath: iconPath}).init();
        }
    }, [ref, iconPath]);

    function handleBlur(event: React.FocusEvent) {
        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    }

    function handleChange(event: React.ChangeEvent) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }

    return (
        <div
            className={[
                "ds_datepicker",
                multiple && "ds_datepicker--multiple"
            ].join(' ')}
            data-disableddates={disabledDates}
            data-maxdate={maxDate}
            data-mindate={minDate}
            data-module="ds-datepicker"
            ref={ref}
            {...props}
        >
            {(multiple ? (
                <fieldset className="ds_datepicker__input-wrapper">
                    <legend>{label}</legend>
                    <div>
                        <TextInput
                            className="js-datepicker-date"
                            error={!!error}
                            id={id + "-day"}
                            hintText={hintText}
                            label="Day"
                            name={name + "-day"}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={value?.split('/')[0]}
                            width="fixed-2"
                        />
                    </div>

                    <div>
                        <TextInput
                            className="js-datepicker-month"
                            error={!!error}
                            id={id + "-month"}
                            hintText={hintText}
                            label="Month"
                            name={name + "-month"}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={value?.split('/')[1]}
                            width="fixed-2"
                        />
                    </div>

                    <div>
                        <TextInput
                            className="js-datepicker-year"
                            error={!!error}
                            id={id + "-year"}
                            hintText={hintText}
                            label="Year"
                            name={name + "-year"}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={value?.split('/')[2]}
                            width="fixed-4"
                        />
                    </div>
                </fieldset>
            ) : (
                <TextInput
                    error={!!error}
                    errorMessage={errorMessage}
                    id={id}
                    hasButton
                    hintText={hintText}
                    label={label}
                    name={name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="dd/mm/yyyy"
                    value={value}
                    width="fixed-10"
                    // todo: this width does not work
                />
            ))}
        </div>
    );
};

export default DatePicker;
