'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const icon_1 = __importDefault(require("../../common/icon"));
const phase_banner_1 = __importDefault(require("../phase-banner/phase-banner"));
const site_navigation_1 = __importDefault(require("../site-navigation/site-navigation"));
const site_search_1 = __importDefault(require("../site-search/site-search"));
// @ts-ignore
const site_navigation_2 = __importDefault(require("@scottish-government/design-system/src/components/site-navigation/site-navigation"));
const SiteHeader = ({ logo = {}, navigationItems, phaseBanner, siteSearch, siteTitle, ...props }) => {
    const mobileMenuRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (mobileMenuRef.current) {
            new site_navigation_2.default(mobileMenuRef.current).init();
        }
    }, [mobileMenuRef]);
    return (<header className="ds_site-header" {...props}>
            <div className="ds_wrapper">
                <div className="ds_site-header__content">
                    <div className="ds_site-branding">
                        {logo &&
            <a className="ds_site-branding__logo  ds_site-branding__link" href={logo.href ? logo.href : '/'}>
                                <img className="ds_site-branding__logo-image" src={logo.src} alt={logo.alt}/>
                            </a>}

                        {siteTitle && <div className="ds_site-branding__title">
                            {siteTitle}
                        </div>}
                    </div>

                    {navigationItems &&
            <div className="ds_site-header__controls">
                            <label aria-controls="mobile-navigation" className="ds_site-header__control  js-toggle-menu" htmlFor="menu">
                                <span className="ds_site-header__control-text">Menu</span>
                                <icon_1.default fill className="ds_site-header__control-icon" icon="Menu" aria-hidden="true"/>
                                <icon_1.default fill className="ds_site-header__control-icon  ds_site-header__control-icon--active-icon" icon="Close" aria-hidden="true"/>
                            </label>
                        </div>}

                    {navigationItems &&
            <input className="ds_site-navigation__toggle" id="menu" type="checkbox"/>}
                    {navigationItems &&
            <site_navigation_1.default id="mobile-navigation" className="ds_site-navigation--mobile" items={navigationItems} ref={mobileMenuRef}/>}

                    {siteSearch &&
            <site_search_1.default className="ds_site-header__search" {...siteSearch}/>}
                </div>
            </div>

            {phaseBanner &&
            <phase_banner_1.default phaseName={phaseBanner.phaseName}>
                    {phaseBanner.content}
                </phase_banner_1.default>}

            {navigationItems &&
            <div className="ds_site-header__navigation">
                    <div className="ds_wrapper">
                        <site_navigation_1.default items={navigationItems}/>
                    </div>
                </div>}
        </header>);
};
SiteHeader.displayName = 'SiteHeader';
exports.default = SiteHeader;
