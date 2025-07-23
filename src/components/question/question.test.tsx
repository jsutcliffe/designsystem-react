import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Question from './question';

test('question renders correctly (basic q, just a wrapper, invalid example)', () => {
    render(
        <Question>
        </Question>
    );

    const questionElement = document.querySelector('.ds_question');
    expect(questionElement).toBeInTheDocument();
    expect(questionElement?.tagName).toEqual('DIV');
});

test('fieldset question with legend', () => {
    const legendText = 'My legend';

    render(
        <Question tagName="fieldset" legend={legendText}>
        </Question>
    );

    const questionElement = screen.getByRole('group');
    const legendElement = within(questionElement).getByText(legendText);
    expect(questionElement?.tagName).toEqual('FIELDSET');
    expect(legendElement.tagName).toEqual('LEGEND');
});

test('question with hint text', () => {
    const hintText = 'My hint text';

    render(
        <Question hintText={hintText}>
        </Question>
    );

    const hintTextElement = screen.getByRole('paragraph');
    const firstQuestionChild = document.querySelector('.ds_question')?.childNodes[0]
    expect(hintTextElement).toHaveClass('ds_hint-text');
    expect(hintTextElement.textContent).toEqual(hintText);
    expect(hintTextElement).toBe(firstQuestionChild);
});

test('question with error', () => {
    const errorMessage = 'My error message';

    render(
        <Question error errorMessage={errorMessage}>
        </Question>
    );

    const questionElement = document.querySelector('.ds_question');
    const errorMessageElement = questionElement?.querySelector('.ds_question__error-message');

    expect(questionElement).toHaveClass('ds_question--error');
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement?.textContent).toEqual(errorMessage);
});

test('passing additional props', () => {
    render(
        <Question data-test="foo">
        </Question>
    )

    const questionElement = document.querySelector('.ds_question') as HTMLElement;
    expect(questionElement?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Question className="foo">
        </Question>
    )

    const questionElement = document.querySelector('.ds_question');
    expect(questionElement).toHaveClass('foo', 'ds_question');
});
