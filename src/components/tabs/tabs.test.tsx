import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Tabs from './tabs';
import slugify from '../../utils/slugify';

test('tab container renders correctly', () => {
    render(
        <Tabs data-testid="tabcontainer">
            <Tabs.Item tabLabel="Tab 1" data-testid="tabpanel1">
                <div data-testid="tabpanel1content">Content one</div>
            </Tabs.Item>
            <Tabs.Item tabLabel="Tab 2" data-testid="tabpanel2">
                Content two
            </Tabs.Item>
        </Tabs>
    );

    const tabContainer = screen.getByTestId('tabcontainer');
    const tabHeading = within(tabContainer).getByRole('heading');
    const tabList = within(tabContainer).getByRole('tablist');
    const tabListItems = within(tabList).getAllByRole('presentation');
    const tabListLinkOne = within(tabListItems[0]).getByRole('tab');
    const tabListLinkTwo = within(tabListItems[1]).getByRole('tab');
    const tabPanels = document.querySelectorAll('.ds_tabs__content');
    const tabPanelOne = screen.getByTestId('tabpanel1');
    const tabPanelTwo = screen.getByTestId('tabpanel2');

    expect(tabContainer).toHaveClass('ds_tabs');
    expect(tabContainer.tagName).toEqual('DIV');

    expect(tabHeading).toHaveClass('ds_tabs__title');
    // default header level
    expect(tabHeading.tagName).toEqual('H2');
    expect(tabHeading.parentElement).toEqual(tabContainer);
    // default ID-heading
    expect(tabHeading).toHaveAttribute('id', 'tabs-heading');

    expect(tabList).toHaveClass('ds_tabs__list');
    expect(tabList.tagName).toEqual('UL');
    expect(tabList.parentElement).toEqual(tabContainer);
    expect(tabList.previousElementSibling).toEqual(tabHeading);

    // number of items in the provided markup
    expect(tabListItems.length).toEqual(2);

    expect(tabListItems[0]).toHaveClass('ds_tabs__tab');
    expect(tabListItems[0].tagName).toEqual('LI');

    expect(tabListLinkOne).toHaveClass('ds_tabs__tab-link');
    expect(tabListLinkOne).toHaveAttribute('href', `#${tabPanelOne.id}`);
    expect(tabListLinkTwo).toHaveAttribute('href', `#${tabPanelTwo.id}`);
    // text content in provided markup
    expect(tabListLinkOne.textContent).toEqual('Tab 1');
    expect(tabListLinkTwo.textContent).toEqual('Tab 2');

    // number of items in the provided markup
    expect(tabPanels.length).toEqual(2)

    expect(tabPanelOne).toHaveClass('ds_tabs__content', 'ds_tabs__content--bordered');

    // todo: this will be true after the tab script has been updated in the core DS
    //expect(tabPanelOne.tabIndex).toEqual(0);

    // tab panels have ID
    expect(tabPanelOne).toHaveAttribute('id');
    expect(tabPanelTwo).toHaveAttribute('id');
});

test('non-bordered tabs', () => {
    render(
        <Tabs data-testid="tabcontainer" bordered={false}>
            <Tabs.Item tabLabel="Tab 1" data-testid="tabpanel1">
                <div data-testid="tabpanel1content">Content one</div>
            </Tabs.Item>
            <Tabs.Item tabLabel="Tab 2" data-testid="tabpanel2">
                Content two
            </Tabs.Item>
        </Tabs>
    );

    const tabPanelOne = screen.getByTestId('tabpanel1');
    expect(tabPanelOne).not.toHaveClass('ds_tabs__content--bordered');
});

test('custom title', () => {
    const title = 'My title';

    render(
        <Tabs data-testid="tabcontainer" title={title}>
            <Tabs.Item tabLabel="Tab 1" data-testid="tabpanel1">
                <div data-testid="tabpanel1content">Content one</div>
            </Tabs.Item>
            <Tabs.Item tabLabel="Tab 2" data-testid="tabpanel2">
                Content two
            </Tabs.Item>
        </Tabs>
    );

    const tabContainer = screen.getByTestId('tabcontainer');
    const tabList = within(tabContainer).getByRole('tablist');
    const tabHeading = within(tabContainer).getByRole('heading');

    expect(tabList).toHaveAttribute('aria-labelledby', tabHeading.id);
    expect(tabHeading.textContent).toEqual(title)
});

test('custom base ID', () => {
    const baseId = 'foo';

    render(
        <Tabs data-testid="tabcontainer" baseId={baseId}>
            <Tabs.Item tabLabel="Tab 1" data-testid="tabpanel1">
                <div data-testid="tabpanel1content">Content one</div>
            </Tabs.Item>
            <Tabs.Item tabLabel="Tab 2" data-testid="tabpanel2">
                Content two
            </Tabs.Item>
        </Tabs>
    );

    const tabContainer = screen.getByTestId('tabcontainer');
    const tabHeading = within(tabContainer).getByRole('heading');

    expect(tabHeading).toHaveAttribute('id', `${baseId}-heading`);
});

test('custom header level', () => {
    const headerLevel = 'h3';

    render(
        <Tabs data-testid="tabcontainer" headerLevel={headerLevel}>
            <Tabs.Item tabLabel="Tab 1" data-testid="tabpanel1">
                <div data-testid="tabpanel1content">Content one</div>
            </Tabs.Item>
            <Tabs.Item tabLabel="Tab 2" data-testid="tabpanel2">
                Content two
            </Tabs.Item>
        </Tabs>
    );

    const tabContainer = screen.getByTestId('tabcontainer');
    const tabHeading = within(tabContainer).getByRole('heading');

    expect(tabHeading.tagName).toEqual(headerLevel.toUpperCase());
});

test('custom baseID', () => {
    const baseId = 'myId';

    render(
        <Tabs data-testid="tabcontainer" baseId={baseId}>
            <Tabs.Item tabLabel="Tab 1" data-testid="tabpanel1">
                <div data-testid="tabpanel1content">Content one</div>
            </Tabs.Item>
            <Tabs.Item tabLabel="Tab 2" data-testid="tabpanel2">
                Content two
            </Tabs.Item>
        </Tabs>
    );

    const tabContainer = screen.getByTestId('tabcontainer');
    const tabHeading = within(tabContainer).getByRole('heading');
    const tabPanelOne = screen.getByTestId('tabpanel1');
    const tabPanelTwo = screen.getByTestId('tabpanel2');

    // default title slugified to part of the ID
    expect(tabHeading).toHaveAttribute('id', `${baseId}-heading`);
    // generated IDs using the slug of the tab title
    expect(tabPanelOne).toHaveAttribute('id', `${baseId}-tab-1`);
    expect(tabPanelTwo).toHaveAttribute('id', `${baseId}-tab-2`);
});

test('tab with and without specific ID attribute', () => {
    const baseId = 'foo'
    const tabLabel = 'Tab 1';
    const id = 'bar';

    render(
        <Tabs baseId={baseId}>
            <Tabs.Item tabLabel={tabLabel} data-testid="tabpanel1">
                <div data-testid="tabpanel1content">Content one</div>
            </Tabs.Item>
            <Tabs.Item tabLabel="Tab 2" id={id} data-testid="tabpanel2">
                <div data-testid="tabpanel1content">Content one</div>
            </Tabs.Item>
        </Tabs>
    );

    const tabPanelOne = screen.getByTestId('tabpanel1');
    const tabPanelTwo = screen.getByTestId('tabpanel2');

    expect(tabPanelOne).toHaveAttribute('id', `${baseId}-${slugify(tabLabel)}`);
    expect(tabPanelTwo).toHaveAttribute('id', id);
});

test('with manual activation', () => {
    render(
        <Tabs data-testid="tabcontainer" manual>
            <Tabs.Item title="Tab 1" data-testid="tabpanel1">
                <div data-testid="tabpanel1content">Content one</div>
            </Tabs.Item>
            <Tabs.Item title="Tab 2" data-testid="tabpanel2">
                Content two
            </Tabs.Item>
        </Tabs>
    );

    const tabContainer = screen.getByTestId('tabcontainer');
    expect(tabContainer).toHaveClass('ds_tabs--manual');
});

test('passing additional props to tab container', () => {
    render(
        <Tabs data-testid="tabcontainer" data-test="foo">
            <Tabs.Item tabLabel="Tab 1" data-testid="tabpanel1">
                <div data-testid="tabpanel1content">Content one</div>
            </Tabs.Item>
        </Tabs>
    );

    const tabContainer = screen.getByTestId('tabcontainer');
    expect(tabContainer.dataset.test).toEqual('foo');
});

test('passing additional CSS classes tab container', () => {
    render(
        <Tabs data-testid="tabcontainer" className="foo">
            <Tabs.Item tabLabel="Tab 1" data-testid="tabpanel1">
                <div data-testid="tabpanel1content">Content one</div>
            </Tabs.Item>
        </Tabs>
    );

    const tabContainer = screen.getByTestId('tabcontainer');
    expect(tabContainer).toHaveClass('foo');
});

test('passing additional props to tab panel', () => {
    render(
        <Tabs.Item tabLabel="Tab 1" data-testid="tabpanel1" data-test="foo">
            <div data-testid="tabpanel1content">Content one</div>
        </Tabs.Item>
    );

    const tabItem = screen.getByTestId('tabpanel1');
    expect(tabItem.dataset.test).toEqual('foo');
});

test('passing additional CSS classes tab panel', () => {
    render(
        <Tabs.Item tabLabel="Tab 1" data-testid="tabpanel1" className="foo">
            <div data-testid="tabpanel1content">Content one</div>
        </Tabs.Item>
    );

    const tabItem = screen.getByTestId('tabpanel1');
    expect(tabItem).toHaveClass('foo');
});
