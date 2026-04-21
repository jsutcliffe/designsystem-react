"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const MetadataItem = ({ children, className, name, ...props }) => {
    return (<div className={(0, clsx_1.default)([
            'ds_metadata__item',
            className
        ])} {...props}>
            <dt className="ds_metadata__key">{name}</dt>{' '}
            <dd className="ds_metadata__value">
                {children}{' '}
            </dd>
        </div>);
};
const Metadata = ({ children, className, isInline, ...props }) => {
    return (<dl className={(0, clsx_1.default)([
            'ds_metadata',
            isInline && 'ds_metadata--inline',
            className
        ])} {...props}>
            {children}
        </dl>);
};
Metadata.displayName = 'Metadata';
MetadataItem.displayName = 'Metadata.Item';
Metadata.Item = MetadataItem;
exports.default = Metadata;
