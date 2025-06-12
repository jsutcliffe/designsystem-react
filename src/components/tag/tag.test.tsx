import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Tag from './tag';

const tagText = 'Beta';

test('tag renders correctly', () => {
    render(
        <Tag title={tagText}/>
    );

    const tag = screen.getByText(tagText);

    expect(tag).toHaveClass('ds_tag');
    expect(tag.nodeName).toEqual('SPAN');
});

test('tag with custom colour', () => {
    render(
        <Tag colour="red" title={tagText}/>
    );

    const tag = screen.getByText(tagText);

    expect(tag).toHaveClass('ds_tag--red');
});

test('tag with additional CSS class', () => {
    render(
        <Tag className="foo" title={tagText}/>
    );

    const tag = screen.getByText(tagText);

    expect(tag).toHaveClass('foo');
});

test('passing additional props', () => {
    render(
        <Tag data-test="foo" title={tagText}/>
    );

    const tag = screen.getByText(tagText);
    expect(tag?.dataset.test).toEqual('foo');
});
