import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import DSAccordion from '../../../../node_modules/@scottish-government/design-system/src/components/accordion/accordion';
let accordionItemCounter = 0;

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const AccordionItem = function({
    children,
    id: rawId,
    open = false,
    title,
    ...props
}) {
    const [id] = useState(rawId || `accordion-item-${accordionItemCounter += 1}`);
    return (
        <div
            className="ds_accordion-item"
            id={id}
            {...props}
        >
            <input
                aria-labelledby={`panel-${id}-heading`}
                className={[
                    'ds_accordion-item__control',
                    'visually-hidden'
                ].join(' ')}
                defaultChecked={open}
                id={`${id}-control`}
                type="checkbox"
            />
            <div className="ds_accordion-item__header">
                <h3 id={`panel-${id}-heading`} className="ds_accordion-item__title">
                    { title }
                </h3>
                <span className='ds_accordion-item__indicator' />
                <label
                    className="ds_accordion-item__label"
                    htmlFor={`${id}-control`}
                >
                    <span className="visually-hidden">Show this section</span>
                </label>
            </div>
            <div className="ds_accordion-item__body">
                {children}
            </div>
        </div>
    );
};
AccordionItem.propTypes = {
    children: PropTypes.element,
    id: PropTypes.string,
    open: PropTypes.bool,
    title: PropTypes.string.isRequired,
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Accordion = function({
    children,
    hideOpenAll,
    ...props
}) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            // new DSAccordion(ref.current).init();
        }
    }, [ref]);

    if (!children.length) {
        hideOpenAll = true;
    }

    return (
        <div
            className='ds_accordion'
            {...props}
            ref={ref}
        >
            { !hideOpenAll && (
                <button
                className={[
                    'ds_accordion__open-all',
                    'ds_link',
                    'js-open-all'
                ].join(' ')}
                type='button'
                >
                    Open all
                    {' '}
                    <span className="visually-hidden">sections</span>
                </button>
            )}
            {children}
        </div>
    );
};
Accordion.propTypes = {
    children: PropTypes.element,
    hideOpenAll: PropTypes.bool
};

export default Accordion;
