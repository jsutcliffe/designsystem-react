import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import WrapperTag from './WrapperTag';

const CONTENT = 'My content';

test('wrapper tag renders correctly', () => {
    render(
        <WrapperTag id="foo">
            {CONTENT}
        </WrapperTag>
    );

    const wrapper = document.querySelector('#foo');

    expect(wrapper?.tagName).toEqual('DIV');
});

test('wrapper tag widh tag name', () => {
    render(
        <WrapperTag id="foo"
            tagName="section"
        >
            {CONTENT}
        </WrapperTag>
    );

    const wrapper = document.querySelector('#foo');

    expect(wrapper?.tagName).toEqual('SECTION');
});

test('passing additional props', () => {
    render(
        <WrapperTag id="foo" data-test="foo">
            {CONTENT}
        </WrapperTag>
    );

    const wrapper = document.querySelector('#foo') as HTMLElement;
    expect(wrapper?.dataset.test).toEqual('foo');
});
