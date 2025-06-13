import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Metadata, {MetadataItem} from './page-metadata';

const name = 'Directorate';
const value = 'Equality, Inclusion and Human Rights Directorate';

test('metadata renders correctly', () => {
    render(
        <Metadata>
            <MetadataItem name={name}>
                {value}
            </MetadataItem>
        </Metadata>
    );

    const metadata = document.querySelector('.ds_metadata');
    const metadataItem = document.querySelector('.ds_metadata__item');
    const metadataItemKey = screen.getByRole('term');
    const metadataItemValue = screen.getByRole('definition');

    expect(metadata).toBeInTheDocument();
    expect(metadataItem).toBeInTheDocument();
    expect(metadataItemKey).toHaveClass('ds_metadata__key');
    expect(metadataItemKey.textContent).toEqual(name);
    expect(metadataItemValue).toHaveClass('ds_metadata__value');
    expect(metadataItemValue.textContent).toEqual(value);
});

test('inline metadata', () => {
    render(
        <Metadata inline>
            <MetadataItem name={name}>
                {value}
            </MetadataItem>
        </Metadata>
    );

    const metadata = document.querySelector('.ds_metadata');
    expect(metadata).toHaveClass('ds_metadata--inline');
});

test('passing additional props', () => {
    render(
        <Metadata data-test="foo">
            <MetadataItem data-test="bar" name="Last updated">
                21/04/2020
            </MetadataItem>
        </Metadata>
    )

    const metadata = document.querySelector('.ds_metadata');
    const metadataItem = document.querySelector('.ds_metadata__item');
    expect(metadata?.dataset.test).toEqual('foo');
    expect(metadataItem?.dataset.test).toEqual('bar');
});

test('passing additional CSS classes', () => {
    render(
        <Metadata className="foo">
            <MetadataItem className="bar" name="Last updated">
                21/04/2020
            </MetadataItem>
        </Metadata>
    )

    const metadata = document.querySelector('.ds_metadata');
    const metadataItem = document.querySelector('.ds_metadata__item');
    expect(metadata).toHaveClass('foo');
    expect(metadataItem).toHaveClass('bar');
});
