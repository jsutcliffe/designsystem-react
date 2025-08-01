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
const SummaryList_1 = __importStar(require("../SummaryList/SummaryList"));
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
function convertToSlug(string) {
    return string.toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
}
const SummaryCard = ({ actions, className, headingLevel = 'h3', items, title, ...props }) => {
    const describedById = `summary-card-${convertToSlug(title)}`;
    return (<div className={[
            'ds_summary-card',
            className
        ].join(' ')} {...props}>
            <div className="ds_summary-card__header">
                <WrapperTag_1.default className="ds_summary-card__header-title" id={describedById} tagName={headingLevel}>{title}</WrapperTag_1.default>

                <ul className="ds_summary-card__actions-list">
                    {actions && actions.map((action, index) => (<li className="ds_summary-card__actions-list-item" key={'summarylistaction' + index}>
                            <SummaryList_1.Action describedby={describedById} href={action.href} onclick={action.onclick} title={action.title}/>
                        </li>))}
                </ul>
            </div>
            <div className="ds_summary-card__content">
                <SummaryList_1.default items={items}/>
            </div>
        </div>);
};
SummaryCard.displayName = 'SummaryCard';
exports.default = SummaryCard;
