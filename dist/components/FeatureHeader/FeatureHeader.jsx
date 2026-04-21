"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const common_1 = require("../../common");
const clsx_1 = __importDefault(require("clsx"));
const FeatureHeaderSettingsContext = (0, react_1.createContext)({
    hasCoverImage: undefined,
    hasNoImagePadding: undefined
});
const Primary = ({ children, title, ...props }) => {
    return (<div className="ds_feature-header__primary" {...props}>
            <h1 className="ds_feature-header__title">
                {title}
            </h1>
            {children}
        </div>);
};
const Secondary = ({ children, ...props }) => {
    const hasCoverImage = (0, react_1.useContext)(FeatureHeaderSettingsContext).hasCoverImage;
    const hasNoImagePadding = (0, react_1.useContext)(FeatureHeaderSettingsContext).hasNoImagePadding;
    children = react_1.Children.map(children, child => {
        const thisChild = child;
        if (thisChild && ['img', 'svg', 'picture'].includes(thisChild.type)) {
            return react_1.default.cloneElement(thisChild, { className: 'ds_feature-header__image' });
        }
        else {
            return child;
        }
    });
    return (<div className={(0, clsx_1.default)([
            'ds_feature-header__secondary',
            hasCoverImage && 'ds_feature-header__secondary--cover',
            hasNoImagePadding && 'ds_feature-header__secondary--no-padding'
        ])} {...props}>
            {children}
        </div>);
};
const FeatureHeader = ({ backgroundColor, children, className, hasCoverImage, hasNoImagePadding, id, isFullWidth, isWideText, isTopAlignImage, tagName = 'div', ...props }) => {
    let backgroundColorClassName;
    if (backgroundColor === 'secondary') {
        backgroundColorClassName = 'ds_feature-header--background-secondary';
    }
    else if (backgroundColor === 'tertiary') {
        backgroundColorClassName = 'ds_feature-header--background-tertiary';
    }
    else if (backgroundColor === 'brand') {
        backgroundColorClassName = 'ds_feature-header--background';
    }
    return (<common_1.WrapperTag className={(0, clsx_1.default)([
            'ds_feature-header',
            isFullWidth && 'ds_feature-header--fullwidth',
            isWideText && 'ds_feature-header--wide',
            isTopAlignImage && 'ds_feature-header--top',
            backgroundColorClassName && backgroundColorClassName,
            className
        ])} id={id} tagName={tagName} {...props}>
            <common_1.ConditionalWrapper condition={!!isFullWidth} wrapper={(children) => <div className="ds_wrapper">{children}</div>}>
                <FeatureHeaderSettingsContext value={{
            hasCoverImage, hasNoImagePadding
        }}>
                    {children}
                </FeatureHeaderSettingsContext>
            </common_1.ConditionalWrapper>
        </common_1.WrapperTag>);
};
FeatureHeader.displayName = 'FeatureHeader';
Primary.displayName = 'FeatureHeader.Primary';
Secondary.displayName = 'FeatureHeader.Secondary';
FeatureHeader.Primary = Primary;
FeatureHeader.Secondary = Secondary;
exports.default = FeatureHeader;
