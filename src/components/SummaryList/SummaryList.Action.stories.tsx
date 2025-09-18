import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SummaryList from './SummaryList';

const meta = {
    title: 'Components/SummaryList/SummaryList.Action',
    component: SummaryList.Action,
    argTypes: {
        href: argTypes.href(),
        onClick: argTypes.onClick(),
        children: argTypes.children()
    },
    args: {
        children: 'Change',
        href: '#foo'
    }
} satisfies Meta<typeof SummaryList.Action>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const ActionIsHtmlButton: Story = {
    args: {
        children: 'Change',
        href: undefined
    }
};
