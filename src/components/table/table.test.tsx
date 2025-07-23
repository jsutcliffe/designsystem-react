import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Table from './table';

test('table renders correctly', () => {
    render(
        <Table>
            <caption>Public holidays in 2020</caption>
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Day</th>
                    <th scope="col">Holiday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10 April</td>
                    <td>Friday</td>
                    <td>Good Friday</td>
                </tr>
            </tbody>
        </Table>
    );

    const table = screen.getByRole('table');

    expect(table).toHaveClass('ds_table');
    expect(table.nodeName).toEqual('TABLE');
});

test('table with smallscreen behaviour', () => {
    const behaviour = 'scrolling';

    render(
        <Table smallscreen={behaviour}>
            <caption>Public holidays in 2020</caption>
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Day</th>
                    <th scope="col">Holiday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10 April</td>
                    <td>Friday</td>
                    <td>Good Friday</td>
                </tr>
            </tbody>
        </Table>
    );

    const table = screen.getByRole('table');

    expect(table).toHaveAttribute('data-smallscreen', behaviour);
    expect(table.nodeName).toEqual('TABLE');
});

test('passing additional props', () => {
    render(
        <Table data-test="foo"/>
    );

    const table = screen.getByRole('table');
    expect(table?.dataset.test).toEqual('foo');
});

test('table with additional CSS class', () => {
    render(
        <Table className="foo"/>
    );

    const table = screen.getByRole('table');
    expect(table).toHaveClass('foo', 'ds_table');
});
