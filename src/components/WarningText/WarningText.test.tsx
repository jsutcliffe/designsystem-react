import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import WarningText from './WarningText';

const text = `Call 999 if you or someone else is in immediate danger, or if the crime is in progress.`;

test('warning text renders correctly', () => {

    render(
        <WarningText>
            {text}
        </WarningText>
    );

    const warningTextOuter = document.querySelector('.ds_warning-text');
    const warningTextInner = warningTextOuter?.querySelector('.ds_warning-text__text');
    const warningTextIcon = warningTextOuter?.querySelector('.ds_warning-text__icon');
    const warningTextTitle = warningTextOuter?.querySelector('strong.visually-hidden');

    expect(warningTextOuter).toBeInTheDocument();
    expect(warningTextInner).toBeInTheDocument();
    expect(warningTextInner?.textContent).toEqual(text);

    expect(warningTextIcon).toHaveAttribute('aria-hidden');
    expect(warningTextTitle?.textContent).toEqual('Warning');

    expect(warningTextInner?.previousSibling).toEqual(warningTextTitle);
    expect(warningTextTitle?.previousSibling).toEqual(warningTextIcon);
});

test('passing additional props', () => {
    render(
        <WarningText data-test="foo">
            {text}
        </WarningText>
    )

    const warningTextOuter = document.querySelector('.ds_warning-text') as HTMLElement;
    expect(warningTextOuter?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <WarningText className="foo">
            {text}
        </WarningText>
    )

    const warningTextOuter = document.querySelector('.ds_warning-text');
    expect(warningTextOuter).toHaveClass('foo');
});
