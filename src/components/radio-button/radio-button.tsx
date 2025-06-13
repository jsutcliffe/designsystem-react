import HintText from '../../common/hint-text';

export const Radio: React.FC<SGDS.Component.RadioButton> = ({
    checked,
    hintText,
    id,
    label,
    name,
    onBlur,
    onChange,
    small
}) => {
    const hintTextId = `hint-text-${id}`;

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
                'ds_radio',
                small && 'ds_radio--small'
            ].join(' ')}>
            <input
                aria-describedby={hintText ? hintTextId : undefined}
                className="ds_radio__input"
                defaultChecked={!!checked}
                id={id}
                name={name}
                onBlur={handleBlur}
                onChange={handleChange}
                type="radio" />
            <label
                className="ds_radio__label"
                htmlFor={id}
            >{label}</label>
            {hintText && <HintText id={hintTextId} text={hintText} />}
        </div>
    );
};

const RadioGroup: React.FC<SGDS.Component.RadioButton.Group> = ({
    className,
    inline,
    items,
    name,
    small,
    ...props
}) => {
    return (
        <div
            className={[
                'ds_radios',
                'ds_field-group',
                inline && 'ds_field-group--inline',
                className
            ].join(' ')}
            {...props}
        >

            {items && items.map((item, index: number) => (
                <Radio
                    checked={item.checked}
                    hintText={item.hintText}
                    id={item.id}
                    key={'radio' + index}
                    label={item.label}
                    name={name}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    small={small || item.small}
                />
            ))}
        </div>
    )
};

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
