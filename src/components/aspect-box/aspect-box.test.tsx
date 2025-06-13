import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AspectBox from './aspect-box';

test('aspect box renders correctly', () => {
    render(
        <AspectBox>
            <img src="./highland-cow.jpg" alt="" />
        </AspectBox>
    );

    const image = document.querySelector('img');
    const imageContainer = image?.parentNode;

    expect(image).toHaveClass('ds_aspect-box__inner');
    expect(imageContainer).toHaveClass('ds_aspect-box');
});

test('1:1 ratio', () => {
    render(
        <AspectBox ratio="1:1">
            <img src="./highland-cow.jpg" alt="" />
        </AspectBox>
    );

    const image = document.querySelector('img');
    const imageContainer = image?.parentNode;

    expect(imageContainer).toHaveClass('ds_aspect-box--square');
});

test('square ratio', () => {
    render(
        <AspectBox ratio="square">
            <img src="./highland-cow.jpg" alt="" />
        </AspectBox>
    );

    const image = document.querySelector('img');
    const imageContainer = image?.parentNode;

    expect(imageContainer).toHaveClass('ds_aspect-box--square');
});

test('4:3 ratio', () => {
    render(
        <AspectBox ratio="4:3">
            <img src="./highland-cow.jpg" alt="" />
        </AspectBox>
    );

    const image = document.querySelector('img');
    const imageContainer = image?.parentNode;

    expect(imageContainer).toHaveClass('ds_aspect-box--43');
});

test('21:9 ratio', () => {
    render(
        <AspectBox ratio="21:9">
            <img src="./highland-cow.jpg" alt="" />
        </AspectBox>
    );

    const image = document.querySelector('img');
    const imageContainer = image?.parentNode;

    expect(imageContainer).toHaveClass('ds_aspect-box--219');
});

test('passing additional props', () => {
    render(
        <AspectBox data-test="foo">
            <img src="./highland-cow.jpg" alt="" />
        </AspectBox>
    );

    const image = document.querySelector('img');
    const imageContainer = image?.parentNode;
    expect(imageContainer?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <AspectBox className="foo">
            <img src="./highland-cow.jpg" alt="" />
        </AspectBox>
    );

    const image = document.querySelector('img');
    const imageContainer = image?.parentNode;
    expect(imageContainer).toHaveClass('foo', 'ds_aspect-box');
});
