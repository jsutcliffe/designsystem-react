import HintText from '../../common/HintText';

const RadioButton = ({
    checked,
    hintText,
    id,
    label,
    name,
    onBlur,
    onChange,
    small
}: SGDS.Component.RadioButton) => {
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

RadioButton.displayName = 'RadioButton';

export default RadioButton;
