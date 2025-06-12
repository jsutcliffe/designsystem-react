import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ConditionalWrapper from './conditional-wrapper';

test('conditional wrapper true', () => {
    render(
        <ConditionalWrapper
            condition={true}
            wrapper={(children: React.JSX.Element) => <a data-testid="wrapper">{children}</a>}
        >
            <span data-testid="testContent">Bar</span>
        </ConditionalWrapper>
    );

    const element = screen.getByTestId('testContent');
    const elementParent = screen.getByTestId('wrapper');
    expect(element).toBeInTheDocument();
    expect(elementParent).toBeInTheDocument();
    expect(element.parentNode).toEqual(elementParent)
});

test('conditional wrapper false', () => {
    render(
        <ConditionalWrapper
            condition={false}
            wrapper={(children: React.JSX.Element) => <a href="foo">{children}</a>}
        >
            <span data-testid="testContent">Bar</span>
        </ConditionalWrapper>
    );

    const element = screen.getByTestId('testContent');
    const elementParent = screen.queryByTestId('wrapper');
    expect(element).toBeInTheDocument();
    expect(elementParent).not.toBeInTheDocument();
});
