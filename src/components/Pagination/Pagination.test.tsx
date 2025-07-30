import { test, expect, vi } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import Pagination, { Page, Ellipsis } from './Pagination';

const pageAriaLabel = 'Page 1';
const pageHref = '#foo';
const pageText = '1';
const currentPage = 10;
const totalPages = 21;

test('pagination page renders correctly', () => {
    render(
        <Page
            ariaLabel={pageAriaLabel}
            href={pageHref}
            text={pageText}
        />
    );

    const item = screen.getByRole('listitem');
    const link = within(item).getByRole('link');
    const span = within(link).getByText(pageText);

    expect(item).toHaveClass('ds_pagination__item');
    expect(link).toHaveClass('ds_pagination__link');
    expect(link).toHaveAttribute('aria-label', pageAriaLabel);
    expect(link).toHaveAttribute('href', pageHref);
    expect(span).toHaveClass('ds_pagination__link-label');
});

test('current pagination page', () => {
    render(
        <Page
            ariaLabel={pageAriaLabel}
            href={pageHref}
            text={pageText}
            current
        />
    );

    const item = screen.getByRole('listitem');
    const link = within(item).getByRole('link');

    expect(link).toHaveClass('ds_current');
    expect(link).toHaveAttribute('aria-current', 'page');
});

test('pagination page with click event', () => {
    const onClickFn = vi.fn();

    render(
        <Page
            ariaLabel={pageAriaLabel}
            href={pageHref}
            text={pageText}
            onClick={onClickFn}
        />
    );

    const item = screen.getByRole('listitem');
    const link = within(item).getByRole('link');

    fireEvent.click(link);

    expect(onClickFn).toHaveBeenCalled();
});

test('Ellipsis item renders correctly', () => {
    render(
        <Ellipsis/>
    );

    const item = screen.getByRole('listitem', {hidden: true});
    const link = within(item).getByText('…');

    expect(item).toHaveClass('ds_pagination__item');
    expect(item).toHaveAttribute('aria-hidden', 'true');
    expect(link).toHaveClass('ds_pagination__link', 'ds_pagination__link--ellipsis');
});

test('pagination renders correctly', () => {
    const currentPage = 10;
    const totalPages = 21;

    render(
        <Pagination page={currentPage} totalPages={totalPages} />
    );

    const paginationNav = screen.getByRole('navigation');
    const paginationList = within(paginationNav).getByRole('list');
    const prevLabel = within(paginationList).getByText('Previous');
    const prevLink = prevLabel.parentElement;
    const prevIcon = prevLabel.previousElementSibling;
    const prevItem = prevLink?.parentElement;
    const nextLabel = within(paginationList).getByText('Next');
    const nextLink = nextLabel.parentElement;
    const nextIcon = nextLabel.nextElementSibling;
    const nextItem = nextLink?.parentElement;

    const firstPageLabel = within(paginationList).getByText('1');
    const firstPageLink = firstPageLabel.parentElement;
    const firstPageItem = firstPageLink?.parentElement;
    const lastPageLabel = within(paginationList).getByText(totalPages);
    const lastPageLink = lastPageLabel.parentElement;
    const lastPageItem = lastPageLink?.parentElement;

    const firstPageEllipsisItem = firstPageItem?.nextElementSibling;
    const firstPageEllipsis = firstPageEllipsisItem?.children[0];
    const lastPageEllipsisItem = lastPageItem?.previousElementSibling;
    const lastPageEllipsis = lastPageEllipsisItem?.children[0];

    const currentPageLink = document.querySelector('.ds_current');
    const currentPageItem = currentPageLink?.parentElement;

    const paginationItems = within(paginationList).getAllByRole('listitem', { hidden: true });

    expect(paginationNav).toHaveClass('ds_pagination');
    expect(paginationNav).toHaveAttribute('aria-label', 'Pages');

    expect(paginationList).toHaveClass('ds_pagination__list');
    expect(paginationList.tagName).toEqual('UL');

    expect(prevItem).toHaveClass('ds_pagination__item');
    expect(prevItem?.tagName).toEqual('LI');
    expect(prevItem?.parentElement).toEqual(paginationList);
    expect(prevLink).toHaveClass('ds_pagination__link', 'ds_pagination__link--text', 'ds_pagination__link--icon')
    expect(prevLink).toHaveAttribute('aria-label', 'Previous page');
    expect(prevLink).toHaveAttribute('href', `/search?page=${currentPage - 1}`);
    expect(prevLink?.tagName).toEqual('A');
    expect(prevIcon).toHaveClass('ds_icon');
    expect(prevIcon).toHaveAttribute('aria-hidden', 'true')
    expect(prevIcon?.tagName).toEqual('svg');
    expect(prevLabel).toHaveClass('ds_pagination__link-label');
    expect(prevLabel?.tagName).toEqual('SPAN');

    expect(nextItem).toHaveClass('ds_pagination__item');
    expect(nextItem?.tagName).toEqual('LI');
    expect(nextItem?.parentElement).toEqual(paginationList);
    expect(nextLink).toHaveClass('ds_pagination__link', 'ds_pagination__link--text', 'ds_pagination__link--icon')
    expect(nextLink).toHaveAttribute('aria-label', 'Next page');
    expect(nextLink).toHaveAttribute('href', `/search?page=${currentPage + 1}`);
    expect(nextLink?.tagName).toEqual('A');
    expect(nextIcon).toHaveClass('ds_icon');
    expect(nextIcon).toHaveAttribute('aria-hidden', 'true')
    expect(nextIcon?.tagName).toEqual('svg');
    expect(nextLabel).toHaveClass('ds_pagination__link-label');
    expect(nextLabel?.tagName).toEqual('SPAN');

    expect(firstPageItem).toHaveClass('ds_pagination__item');
    expect(firstPageItem?.tagName).toEqual('LI');
    expect(firstPageItem?.parentElement).toEqual(paginationList);
    expect(firstPageLink).toHaveClass('ds_pagination__link')
    expect(firstPageLink).toHaveAttribute('aria-label', 'Page 1');
    expect(firstPageLink).toHaveAttribute('href', `/search?page=1`);
    expect(firstPageLink?.tagName).toEqual('A');
    expect(firstPageLabel).toHaveClass('ds_pagination__link-label');
    expect(firstPageLabel?.tagName).toEqual('SPAN');

    expect(lastPageItem).toHaveClass('ds_pagination__item');
    expect(lastPageItem?.tagName).toEqual('LI');
    expect(lastPageItem?.parentElement).toEqual(paginationList);
    expect(lastPageLink).toHaveClass('ds_pagination__link')
    expect(lastPageLink).toHaveAttribute('aria-label', `Page ${totalPages}`);
    expect(lastPageLink).toHaveAttribute('href', `/search?page=${totalPages}`);
    expect(lastPageLink?.tagName).toEqual('A');
    expect(lastPageLabel).toHaveClass('ds_pagination__link-label');
    expect(lastPageLabel?.tagName).toEqual('SPAN');

    // dev note: by this point I'd started to wonder if it would just be better to do a single string compare of the rendered output versus the expected output

    expect(firstPageEllipsisItem).toHaveClass('ds_pagination__item');
    expect(firstPageEllipsisItem).toHaveAttribute('aria-hidden', 'true');
    expect(firstPageEllipsisItem?.tagName).toEqual('LI');
    expect(firstPageEllipsis).toHaveClass('ds_pagination__link', 'ds_pagination__link--ellipsis');
    expect(firstPageEllipsis?.tagName).toEqual('SPAN');
    expect(firstPageEllipsis?.textContent).toEqual('…');

    expect(lastPageEllipsisItem).toHaveClass('ds_pagination__item');
    expect(lastPageEllipsisItem).toHaveAttribute('aria-hidden', 'true');
    expect(lastPageEllipsisItem?.tagName).toEqual('LI');
    expect(lastPageEllipsis).toHaveClass('ds_pagination__link', 'ds_pagination__link--ellipsis');
    expect(lastPageEllipsis?.tagName).toEqual('SPAN');
    expect(lastPageEllipsis?.textContent).toEqual('…');

    expect(currentPageItem).toHaveClass('ds_pagination__item');
    expect(currentPageLink).toHaveClass('ds_pagination__link', 'ds_current');
    expect(currentPageLink?.textContent).toEqual(currentPage.toString());

    // expect one link either side of the current (default padding)
    expect(currentPageItem?.previousElementSibling?.querySelector('a')).toHaveAttribute('aria-label', 'Page 9');
    expect(currentPageItem?.previousElementSibling?.previousElementSibling?.querySelector('a')).toBeNull();

    expect(currentPageItem?.nextElementSibling?.querySelector('a')).toHaveAttribute('aria-label', 'Page 11');
    expect(currentPageItem?.nextElementSibling?.nextElementSibling?.querySelector('a')).toBeNull();

    // 9 is: previous, first, ellipsis, current page and 1 padding either side, ellipsis, last, next
    expect(paginationItems.length).toEqual(9);
});

test('pagination with 2 padding', () => {
    const padding = 2;

    render(
        <Pagination
            page={currentPage}
            totalPages={totalPages}
            padding={padding}
        />
    );

    const paginationNav = screen.getByRole('navigation');
    const paginationList = within(paginationNav).getByRole('list');
    const paginationItems = within(paginationList).getAllByRole('listitem', { hidden: true });

    // 11 is: previous, first, ellipsis, current page and 2 padding either side, ellipsis, last, next
    expect(paginationItems.length).toEqual(11);
});

test('pagination with custom aria label', () => {
    const ariaLabel = 'My label';

    render(
        <Pagination
            page={currentPage}
            totalPages={totalPages}
            ariaLabel={ariaLabel}
        />
    );

    const paginationNav = screen.getByRole('navigation');

    expect(paginationNav).toHaveAttribute('aria-label', ariaLabel);
});

test('pagination passes onclick event to child links', () => {
    const onClickFn = vi.fn();

    render(
        <Pagination
            page={currentPage}
            totalPages={totalPages}
            onClick={onClickFn}
        />
    );

    // pick an arbitrary link
    const link = [].slice.call(document.querySelectorAll('.ds_pagination__link'))[4];
    link.setAttribute('href', '#foo');

    fireEvent.click(link);

    expect(onClickFn).toHaveBeenCalled();
});

test('pagination modifies an input pattern for its link format', () => {
    render(
        <Pagination
            page={currentPage}
            totalPages={totalPages}
            pattern='My/Link/Format?Page=$1#foo'
        />
    );

    // pick an arbitrary link
    const link = document.querySelector('.ds_pagination__link.ds_current');
    expect(link).toHaveAttribute('href', 'My/Link/Format?Page=10#foo');
});


test('pagination at an early link in the list', () => {
    render(
        <Pagination
            page="1"
            totalPages={totalPages}
        />
    );

    const paginationNav = screen.getByRole('navigation');
    const paginationList = within(paginationNav).getByRole('list');
    const paginationItems = within(paginationList).getAllByRole('listitem', { hidden: true });

    // 7 is: current page and 3 subsequent items (padding plus 2), ellipsis, last, next
    expect(paginationItems.length).toEqual(7);
    expect(paginationNav.textContent).toEqual('1234…21Next');
});

test('pagination at an early link in the list, increased padding', () => {
    render(
        <Pagination
            padding={2}
            page="1"
            totalPages={totalPages}
        />
    );

    const paginationNav = screen.getByRole('navigation');
    const paginationList = within(paginationNav).getByRole('list');
    const paginationItems = within(paginationList).getAllByRole('listitem', { hidden: true });

    // 8 is: current page and 4 subsequent items (padding plus 2), ellipsis, last, next
    expect(paginationItems.length).toEqual(8);
    expect(paginationNav.textContent).toEqual('12345…21Next');
});

test('pagination at late link in the list', () => {
    render(
        <Pagination
            page={totalPages}
            totalPages={totalPages}
        />
    );

    const paginationNav = screen.getByRole('navigation');
    const paginationList = within(paginationNav).getByRole('list');
    const paginationItems = within(paginationList).getAllByRole('listitem', { hidden: true });

    // 7 is: current page and 3 subsequent items (padding plus 2), ellipsis, last, next
    expect(paginationItems.length).toEqual(7);
    expect(paginationNav.textContent).toEqual('Previous1…18192021');
});

test('pagination at late link in the list, increased padding', () => {
    render(
        <Pagination
            padding={2}
            page={totalPages}
            totalPages={totalPages}
        />
    );

    const paginationNav = screen.getByRole('navigation');
    const paginationList = within(paginationNav).getByRole('list');
    const paginationItems = within(paginationList).getAllByRole('listitem', { hidden: true });

    // 8 is: current page and 4 subsequent items (padding plus 2), ellipsis, last, next
    expect(paginationItems.length).toEqual(8);
    expect(paginationNav.textContent).toEqual('Previous1…1718192021');
});

test('passing additional props', () => {
    render(
        <Pagination
            page={currentPage}
            totalPages={totalPages}
            data-test="foo"
        />
    );

    const paginationNav = screen.getByRole('navigation');
    expect(paginationNav?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Pagination
            page={currentPage}
            totalPages={totalPages}
            className="foo"
        />
    )

    const paginationNav = screen.getByRole('navigation');
    expect(paginationNav).toHaveClass('foo');
});
