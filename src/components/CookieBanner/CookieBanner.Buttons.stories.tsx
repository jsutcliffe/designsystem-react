import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import CookieBanner from './CookieBanner';
import Button from '../Button';

const meta = {
    title: 'Components/CookieBanner/CookieBanner.Buttons',
    component: CookieBanner.Buttons,
    argTypes: {
        children: argTypes.children()
    },
    args: {
        children: [
            <Button className="js-accept-all-cookies" small buttonStyle="secondary">Accept all cookies</Button>,
            <Button className="js-accept-essential-cookies" small buttonStyle="secondary">Use essential cookies only</Button>,
            <a href="/cookies/">Set cookie preferences</a>
        ]
    }
} satisfies Meta<typeof CookieBanner.Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
