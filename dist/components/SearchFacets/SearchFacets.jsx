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
const Icon_1 = __importDefault(require("../../common/Icon"));
const icons_1 = require("../../../src/images/icons");
const FacetsItem = ({ accessibleName, joinContent, onClick, title, ...props }) => {
    accessibleName = accessibleName ? accessibleName : title;
    return (<dd className="ds_facet-wrapper" {...props}>
            {joinContent &&
            <span aria-hidden="true">{joinContent}</span>}
            <span className="ds_facet">
                {title}
                <button type="button" onClick={onClick} aria-label={`Remove '${accessibleName}' filter`} className="ds_facet__button">
                    <Icon_1.default className="ds_facet__button-icon" aria-hidden="true" role="img" icon="Cancel"/>
                </button>
            </span>
        </dd>);
};
const FacetsGroup = ({ children, joinContent = 'or', title, ...props }) => {
    return (<div className="ds_facet-group" {...props}>
            <dt className="ds_facet__group-title">
                {title.trim()}:
            </dt>
            {react_1.Children.map(children, (child, index) => {
            const thisChild = child;
            return react_1.default.cloneElement(thisChild, { joinContent: index > 0 ? joinContent : undefined, key: 'facet' + index });
        })}
        </div>);
};
const Facets = ({ children, className, ...props }) => {
    let facetCount = 0;
    function processChild(item) {
        if (item.type.displayName === 'Facets.Item') {
            facetCount = facetCount + 1;
        }
        else if (item.type.displayName === 'Facets.Group') {
            react_1.Children.forEach(item.props.children, child => {
                processChild(child);
            });
        }
    }
    react_1.Children.forEach(children, child => {
        processChild(child);
    });
    return (<div className={[
            "ds_facets",
            className
        ].join(' ')} {...props}>
            <p className="visually-hidden">There {facetCount === 1 ? 'is' : 'are'} {facetCount} search {facetCount === 1 ? 'filter' : 'filters'} applied</p>
            <dl className="ds_facets__list">
                {children}
            </dl>
            {facetCount > 0 &&
            <button className="ds_button  ds_button--secondary  ds_button--has-icon  ds_facets__clear-button" type="button">
                    Clear all filters
                    <icons_1.Cancel className="ds_facet__button-icon"/>
                </button>}
        </div>);
};
Facets.displayName = 'Facets';
FacetsItem.displayName = 'Facets.Item';
FacetsGroup.displayName = 'Facets.Group';
Facets.Item = FacetsItem;
Facets.Group = FacetsGroup;
exports.default = Facets;
