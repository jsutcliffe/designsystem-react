import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DSDatePicker from '../../../../node_modules/@scottish-government/design-system/src/components/date-picker/date-picker';
import TextInput from '../text-input/text-input';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const DatePicker = function ({
    disabledDates,
    error,
    errorMessage,
    hintText,
    id,
    iconPath,
    label,
    maxDate,
    minDate,
    multiple,
    name,
    onBlur,
    onChange,
    value,
    width = 'fixed-10',
    ...props
}) {
    // todo: dateSelectCallback function

    iconPath = iconPath || './';

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSDatePicker(ref.current, {imagePath: iconPath}).init();
        }
    }, [ref, iconPath]);

    function handleBlur(event) {
        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    }

    function handleChange(event) {
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
                <div className="ds_datepicker__input-wrapper">
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
                            value={value.split('/')[0]}
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
                            value={value.split('/')[1]}
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
                            value={value.split('/')[2]}
                            width="fixed-4"
                        />
                    </div>
                </div>
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
                    width={width}
                />
            ))}
        </div>
    );
};
DatePicker.propTypes = {
    disabledDates: PropTypes.string,
    error: PropTypes.error,
    errorMessage: PropTypes.string,
    id: PropTypes.string.isRequired,
    hintText: PropTypes.string,
    iconPath: PropTypes.string,
    label: PropTypes.string,
    maxDate: PropTypes.string,
    minDate: PropTypes.string,
    multiple: PropTypes.bool,
    name: PropTypes.string,
    onBlur: PropTypes.event,
    onChange: PropTypes.event,
    value: PropTypes.string,
    width: PropTypes.string
};

export default DatePicker;
