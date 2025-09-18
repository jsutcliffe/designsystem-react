import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SiteFooter from './SiteFooter';

const meta = {
    title: 'Components/SiteFooter/SiteFooter.Links',
    component: SiteFooter.Links,
    argTypes: {
        children: argTypes.children()
    },
    args: {
        children: <>
            <SiteFooter.Link href="#">
                Privacy
            </SiteFooter.Link>
            <SiteFooter.Link href="#">
                Cookies
            </SiteFooter.Link>
            <SiteFooter.Link href="#">
                Accessibility
            </SiteFooter.Link>
        </>
    }
} satisfies Meta<typeof SiteFooter.Links>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
