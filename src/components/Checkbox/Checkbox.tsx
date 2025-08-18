import HintText from '../../common/HintText';

const Checkbox = ({
    checked,
    hintText,
    id,
    exclusive,
    label,
    name,
    onBlur,
    onChange,
    small
}: SGDS.Component.Checkbox) => {
    const hintTextId = `hint-text-${id}`;
    const behaviour = exclusive && 'exclusive';

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
        <>
            {exclusive && <p className="ds_checkbox-separator">or</p>}
            <div
                className={[
                    'ds_checkbox',
                    small && 'ds_checkbox--small'
                ].join(' ')}>

                <input
                    aria-describedby={hintText ? hintTextId : undefined}
                    className="ds_checkbox__input"
                    data-behaviour={behaviour}
                    defaultChecked={!!checked}
                    id={id}
                    name={name || id}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="checkbox" />
                <label
                    className="ds_checkbox__label"
                    htmlFor={id}
                >{label}</label>
                {hintText && <HintText id={hintTextId} text={hintText} />}
            </div>
        </>
    );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
