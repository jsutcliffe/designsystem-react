import React from 'react';
import { FeatureHeaderProps, FeatureHeaderPrimaryProps } from './types';
declare const FeatureHeader: {
    ({ backgroundColor, children, className, hasCoverImage, hasNoImagePadding, id, isFullWidth, isWideText, isTopAlignImage, tagName, ...props }: FeatureHeaderProps): React.JSX.Element;
    displayName: string;
    Primary: {
        ({ children, title, ...props }: FeatureHeaderPrimaryProps): React.JSX.Element;
        displayName: string;
    };
    Secondary: {
        ({ children, ...props }: React.AllHTMLAttributes<HTMLDivElement>): React.JSX.Element;
        displayName: string;
    };
};
export default FeatureHeader;
