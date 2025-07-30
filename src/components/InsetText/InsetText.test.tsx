import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import InsetText from './InsetText';

const text = `You may be able to apply for free school meals at the same
    time as you apply for the clothing grant.`;

test('inset text renders correctly', () => {

    render(
        <InsetText>
            {text}
        </InsetText>
    );

    const insetTextOuter = document.querySelector('.ds_inset-text');
    const insetTextInner = insetTextOuter?.querySelector('.ds_inset-text__text');

    expect(insetTextOuter).toBeInTheDocument();
    expect(insetTextInner).toBeInTheDocument();
    expect(insetTextInner?.textContent).toEqual(text);
});

test('passing additional props', () => {
    render(
        <InsetText data-test="foo">
            {text}
        </InsetText>
    )

    const insetTextOuter = document.querySelector('.ds_inset-text') as HTMLElement;
    expect(insetTextOuter?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <InsetText className="foo">
            {text}
        </InsetText>
    )

    const insetTextOuter = document.querySelector('.ds_inset-text');
    expect(insetTextOuter).toHaveClass('foo', 'ds_inset-text');
});
