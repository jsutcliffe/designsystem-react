"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = __importDefault(require("../Tag/Tag"));
const PhaseBanner = ({ children, className, phaseName, ...props }) => {
    return (<div className={[
            'ds_phase-banner',
            className
        ].join(' ')} {...props}>
            <div className="ds_wrapper">
                <p className="ds_phase-banner__content">
                    {phaseName && <Tag_1.default className="ds_phase-banner__tag">{phaseName}</Tag_1.default>}
                    <span className="ds_phase-banner__text">
                        {children || "This is a new service"}
                    </span>
                </p>
            </div>
        </div>);
};
PhaseBanner.displayName = 'PhaseBanner';
exports.default = PhaseBanner;
