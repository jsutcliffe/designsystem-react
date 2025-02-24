import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import DSAccordion from '@scottish-government/design-system/src/components/accordion/accordion';
let accordionItemCounter = 0;

/**
 * @param {Object} props - Properties for the element
 * @param {string} [props.id] - ID
 * @param {boolean} [props.open=false] - Whether the accordion item is opened by default
 * @param {string} props.title - Title/heading of the accordion item
 * @returns {JSX.Element} - The element
 */
export const AccordionItem = function({
    children,
    id: rawId,
    open = false,
    title,
    ...props
}) {
    accordionItemCounter = accordionItemCounter + 1;
    const processedId = rawId || `accordion-item-${accordionItemCounter}`;
    return (
        <div
            className="ds_accordion-item"
            id={processedId}
            {...props}
        >
            <input
                aria-labelledby={`panel-${processedId}-heading`}
                className={[
                    'ds_accordion-item__control',
                    'visually-hidden'
                ].join(' ')}
                defaultChecked={open}
                id={`${processedId}-control`}
                type="checkbox"
            />
            <div className="ds_accordion-item__header">
                <h3 id={`panel-${processedId}-heading`} className="ds_accordion-item__title">
                    { title }
                </h3>
                <span className='ds_accordion-item__indicator' />
                <label
                    className="ds_accordion-item__label"
                    htmlFor={`${processedId}-control`}
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
 * @param {boolean} props.hideOpenAll - Whether to hide the "open all" button
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
            new DSAccordion(ref.current).init();
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
