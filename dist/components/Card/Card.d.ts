import { CardProps, CardHeaderProps, CardMediaProps, CardStatusTagProps } from "./types";
declare const Card: {
    ({ children, className, hasSecondaryBackground, headingLevel, href, isAdaptive, isHorizontal, isHorizontalSmall, linkComponent, tagName, ...props }: CardProps): import("react").JSX.Element;
    Content: {
        ({ children }: React.AllHTMLAttributes<HTMLElement>): import("react").JSX.Element;
        displayName: string;
    };
    ContentFooter: {
        ({ children }: React.AllHTMLAttributes<HTMLElement>): import("react").JSX.Element;
        displayName: string;
    };
    ContentHeader: {
        ({ children, description, title }: CardHeaderProps): import("react").JSX.Element;
        displayName: string;
    };
    ContentMain: {
        ({ children }: React.AllHTMLAttributes<HTMLElement>): import("react").JSX.Element;
        displayName: string;
    };
    Metadata: {
        ({ children }: React.AllHTMLAttributes<HTMLElement>): import("react").JSX.Element;
        displayName: string;
    };
    Media: {
        ({ children, isCover, mediaWidth, ratio, ...props }: CardMediaProps): import("react").JSX.Element;
        displayName: string;
    };
    StatusTag: {
        ({ children, colour, isHidden, ...props }: CardStatusTagProps): import("react").JSX.Element;
        displayName: string;
    };
    displayName: string;
};
export default Card;
