import React, { Children, useEffect, useRef } from 'react';
import WrapperTag from '../../common/WrapperTag';
// @ts-ignore
import DSAccordion from '@scottish-government/design-system/src/components/accordion/accordion';

let accordionItemCounter = 0;

const AccordionItem: React.FC<SGDS.Component.Accordion.Item> = ({
    children,
    className,
    headerLevel = 'h3',
    id: rawId,
    open = false,
    title,
    ...props
}) => {
    accordionItemCounter = accordionItemCounter + 1;
    const processedId = rawId || `accordion-item-${accordionItemCounter}`;
    return (
        <div
            className={[
                'ds_accordion-item',
                className
            ].join(' ')}
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
                <WrapperTag
                    id={`panel-${processedId}-heading`}
                    className="ds_accordion-item__title"
                    tagName={headerLevel}
                >
                    {title}
                </WrapperTag>
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

const Accordion: React.FC<SGDS.Component.Accordion>
    & { Item: React.FC<SGDS.Component.Accordion.Item> } = ({
    children,
    className,
    headerLevel = 'h3',
    hideOpenAll,
    ...props
}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSAccordion(ref.current).init();
        }
    }, [ref]);

    if (!children) {
        hideOpenAll = true;
    }

    function processChild(child: any) {
        return React.cloneElement(child, { headerLevel: headerLevel });
    }

    return (
        <div
            className={[
                'ds_accordion',
                className
            ].join(' ')}
            ref={ref}
            {...props}
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

            {Children.map(children, child => processChild(child))}
        </div>
    );
};

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';
Accordion.Item = AccordionItem;

export default Accordion;
