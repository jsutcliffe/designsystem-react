import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import ContentsNav from './ContentsNav';

const meta = {
    title: 'Components/ContentsNav/ContentsNav.Item',
    component: ContentsNav.Item,
    argTypes: {
        isCurrent: argTypes.isCurrent(),
        linkComponent: argTypes.linkComponent(),
        children: argTypes.children()
    },
    args: {
        children: <>
            Apply for Blue Badge
        </>,
        href: '#foo'
    }
} satisfies Meta<typeof ContentsNav.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const Current: Story = {
    args: {
        isCurrent: true
    }
};

export const NoLink: Story = {
    args: {
        href: undefined
    }
};

export const NoLinkCurrent: Story = {
    args: {
        href: undefined,
        isCurrent: true
    }
};
