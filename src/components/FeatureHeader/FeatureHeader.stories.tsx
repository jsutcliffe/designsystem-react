import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import FeatureHeader from './FeatureHeader';

//@ts-ignore
import coo from '../../../static/images/highland-cow.jpg';

const meta = {
    title: 'Components/Feature header',
    component: FeatureHeader,
    argTypes: {
        children: argTypes.children()
    },
    args: {
        children: <>
            <FeatureHeader.Content>
                <h1>Design standards</h1>
                <p>The patterns included here have been developed for use by government, public sector and third sector non-commercial organisations in Scotland.</p>
            </FeatureHeader.Content>
            <FeatureHeader.Media>
                <img
                    className="ds_feature-header__image"
                    alt="A highland cow nuzzling its calf"
                    src={coo}
                />
            </FeatureHeader.Media>
        </>
    }
} satisfies Meta<typeof FeatureHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        backgroundColour: 'TERTIARY'
    }
};

export const FullWidth: Story = {
    args: {
        backgroundColour: 'TERTIARY',
        isFullWidth: true
    }
};

export const TopAlign: Story = {
    args: {
        backgroundColour: 'TERTIARY',
        isTopAligned: true
    }
};

export const WideText: Story = {
    args: {
        backgroundColour: 'TERTIARY',
        isWideText: true
    }
};
