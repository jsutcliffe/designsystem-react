import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Accordion, { AccordionItem } from './accordion';

const id = 'my-accordion';
const itemId = 'my-accordion-item';
const titleText = 'Healthcare for veterans';
const contentText = `Veterans are entitled to the same healthcare as any citizen. And there
    are health care options and support available specifically for veterans`;

test('accordion renders correctly', () => {
    const defaultHeaderLevel = 'h3';

    render(
        <Accordion id={id} data-testid={id}>
            <AccordionItem id="accordion-1" title="Healthcare for veterans">
                <p>Veterans are entitled to the same healthcare as any citizen. And there
                    are health care options and support available specifically for veterans.</p>
                <p>If you have a health condition that’s related to your service, you’re
                    entitled to priority treatment based on clinical need.</p>
            </AccordionItem>
            <AccordionItem open id="accordion-2" title="Employability for veterans">
                <p>If you&apos;re looking for a job, there are several organisations that can help
                    you <a href="#accordion-link">find a job or develop new skills</a>.</p>
            </AccordionItem>
            <AccordionItem id="accordion-3" title="Housing for veterans">
                <p>If you need <a href="#accordion-link">help finding a place to live</a>{' '}
                    there&apos;s support specifically for veterans.</p>
            </AccordionItem>
        </Accordion>
    );

    // console.log(items.map(item => { console.log(item.id); return item.title; }));

    const accordion = screen.getByTestId(id);
    const openAllButton = document.querySelector('.ds_accordion__open-all');
    const accordionItems = document.querySelectorAll('.ds_accordion-item');
    const firstAccordionTitle = document.querySelector('.ds_accordion-item__title');

    expect(accordion).toHaveClass('ds_accordion');
    expect(accordion.tagName).toEqual('DIV');

    expect(openAllButton).toHaveClass('ds_accordion__open-all', 'ds_link', 'js-open-all');
    expect(openAllButton).toHaveAttribute('type', 'button');
    expect(openAllButton.textContent).toEqual('Open all sections');
    expect(openAllButton.innerHTML).toEqual('Open all <span class="visually-hidden">sections</span>');

    expect(accordionItems.length).toEqual(3);

    expect(firstAccordionTitle.tagName).toEqual(defaultHeaderLevel.toUpperCase());
});

test('accordion without open all', () => {
    render(
        <Accordion id={id} data-testid={id} hideOpenAll>
            <AccordionItem id="accordion-1" title="Healthcare for veterans">
                <p>Veterans are entitled to the same healthcare as any citizen. And there
                    are health care options and support available specifically for veterans.</p>
                <p>If you have a health condition that’s related to your service, you’re
                    entitled to priority treatment based on clinical need.</p>
            </AccordionItem>
            <AccordionItem id="accordion-2" title="Employability for veterans">
                <p>If you&apos;re looking for a job, there are several organisations that can help
                    you <a href="#accordion-link">find a job or develop new skills</a>.</p>
            </AccordionItem>
            <AccordionItem id="accordion-3" title="Housing for veterans">
                <p>If you need <a href="#accordion-link">help finding a place to live</a>{' '}
                    there&apos;s support specifically for veterans.</p>
            </AccordionItem>
        </Accordion>
    );

    const openAllButton = document.querySelector('.ds_accordion__open-all');

    expect(openAllButton).toBeNull();
});

test('empty accordion has no open all', () => {
    render(
        <Accordion id={id} data-testid={id} hideOpenAll>
        </Accordion>
    );

    const openAllButton = document.querySelector('.ds_accordion__open-all');

    expect(openAllButton).toBeNull();
})

test('accordion with custom header level', () => {
    const headerLevel = 'h2';

    render(
        <Accordion id={id} data-testid={id} headerLevel={headerLevel}>
            <AccordionItem id="accordion-1" title="Healthcare for veterans">
                <p>Veterans are entitled to the same healthcare as any citizen. And there
                    are health care options and support available specifically for veterans.</p>
                <p>If you have a health condition that’s related to your service, you’re
                    entitled to priority treatment based on clinical need.</p>
            </AccordionItem>
        </Accordion>
    );

    const firstAccordionTitle = document.querySelector('.ds_accordion-item__title');
    expect(firstAccordionTitle.tagName).toEqual(headerLevel.toUpperCase());
});

test('passing additional props to accordion', () => {
    render(
        <Accordion id={id} data-testid={id} data-test="foo">
        </Accordion>
    );

    const accordion = screen.getByTestId(id);
    expect(accordion?.dataset.test).toEqual('foo');
});

test('accordion item renders correctly', () => {
    render(
        <AccordionItem id={itemId} data-testid={itemId} title={titleText}>
            <p>{contentText}</p>
        </AccordionItem>
    );

    const accordionItem = screen.getByTestId(itemId);
    const input = within(accordionItem).getByRole('checkbox');
    const header = document.querySelector('.ds_accordion-item__header');
    const title = header?.querySelector('.ds_accordion-item__title');
    const indicator = header?.querySelector('.ds_accordion-item__indicator');
    const label = header.querySelector('.ds_accordion-item__label');
    const body = document.querySelector('.ds_accordion-item__body');

    expect(accordionItem).toHaveClass('ds_accordion-item');
    expect(accordionItem).toHaveAttribute('id', itemId);

    expect(input).toHaveClass('ds_accordion-item__control', 'visually-hidden')
    expect(input).toHaveAttribute('id', `${itemId}-control`);

    expect(header.tagName).toEqual('DIV');

    expect(title).toHaveAttribute('id', `panel-${itemId}-heading`);
    expect(title.tagName).toEqual('H3');
    expect(title.textContent).toEqual(titleText);

    expect(indicator.tagName).toEqual('SPAN');

    expect(label).toHaveAttribute('for', input.id);
    expect(label.tagName).toEqual('LABEL');
    expect(label.textContent).toEqual('Show this section');
    expect(label?.children[0]).toHaveClass('visually-hidden');

    expect(body.innerHTML).toEqual(`<p>${contentText}</p>`);
});

test('accordion items without ID are given unique IDs', () => {
    render(
        <Accordion id={id} data-testid={id} hideOpenAll>
            <AccordionItem data-testid="item1" title="Healthcare for veterans">
                <p>Veterans are entitled to the same healthcare as any citizen. And there
                    are health care options and support available specifically for veterans.</p>
                <p>If you have a health condition that’s related to your service, you’re
                    entitled to priority treatment based on clinical need.</p>
            </AccordionItem>
            <AccordionItem data-testid="item2" title="Employability for veterans">
                <p>If you&apos;re looking for a job, there are several organisations that can help
                    you <a href="#accordion-link">find a job or develop new skills</a>.</p>
            </AccordionItem>
            <AccordionItem data-testid="item3" title="Housing for veterans">
                <p>If you need <a href="#accordion-link">help finding a place to live</a>{' '}
                    there&apos;s support specifically for veterans.</p>
            </AccordionItem>
        </Accordion>
    );

    const accordionItem1 = screen.getByTestId('item1');
    const accordionItem2 = screen.getByTestId('item2');
    const accordionItem3 = screen.getByTestId('item3');

    let idModifier = Number(accordionItem1.id.replace('accordion-item-', ''));

    expect(accordionItem1).toHaveAttribute('id', `accordion-item-${idModifier}`);
    idModifier = idModifier + 1;
    expect(accordionItem2).toHaveAttribute('id', `accordion-item-${idModifier}`);
    idModifier = idModifier + 1;
    expect(accordionItem3).toHaveAttribute('id', `accordion-item-${idModifier}`);
});

test('open accordion item', () => {
    render(
        <AccordionItem open id={itemId} data-testid={itemId} title={titleText}>
            <p>{contentText}</p>
        </AccordionItem>
    );

    const accordionItem = screen.getByTestId(itemId);
    const input = within(accordionItem).getByRole('checkbox');

    expect(input).toHaveAttribute('checked');
});

test('passing additional props to accordion item', () => {
    render(
        <AccordionItem id={itemId} data-testid={itemId} title="Healthcare for veterans" data-test="foo">
            <p>Veterans are entitled to the same healthcare as any citizen. And there
                are health care options and support available specifically for veterans.</p>
            <p>If you have a health condition that’s related to your service, you’re
                entitled to priority treatment based on clinical need.</p>
        </AccordionItem>
    );

    const accordionItem = screen.getByTestId(itemId);
    expect(accordionItem?.dataset.test).toEqual('foo');
});
