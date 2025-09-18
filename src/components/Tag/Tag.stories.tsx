import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Tag from './Tag';

const meta = {
    title: 'Components/Tag',
    component: Tag,
    argTypes: {
        colour: argTypes.tagColour(),
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Status',
    },
};
