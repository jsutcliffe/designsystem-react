import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Tag from './Tag';

const TAG_TEXT = 'Beta';

test('tag renders correctly', () => {
    render(
        <Tag title={TAG_TEXT}/>
    );

    const tag = screen.getByText(TAG_TEXT);

    expect(tag).toHaveClass('ds_tag');
    expect(tag.nodeName).toEqual('SPAN');
});

test('tag with custom colour', () => {
    render(
        <Tag colour="red" title={TAG_TEXT}/>
    );

    const tag = screen.getByText(TAG_TEXT);

    expect(tag).toHaveClass('ds_tag--red');
});

test('passing additional props', () => {
    render(
        <Tag data-test="foo" title={TAG_TEXT}/>
    );

    const tag = screen.getByText(TAG_TEXT);
    expect(tag?.dataset.test).toEqual('foo');
});

test('tag with additional CSS class', () => {
    render(
        <Tag className="foo" title={TAG_TEXT}/>
    );

    const tag = screen.getByText(TAG_TEXT);

    expect(tag).toHaveClass('foo', 'ds_tag');
});
