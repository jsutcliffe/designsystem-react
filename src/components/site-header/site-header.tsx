'use client';

import { useEffect, useRef } from 'react';

import Icon from '../../common/icon';
import PhaseBanner from '../phase-banner/phase-banner';
import SiteNavigation from "../site-navigation/site-navigation";
import SiteSearch from "../site-search/site-search";

// @ts-ignore
import DSMobileMenu from '@scottish-government/design-system/src/components/site-navigation/site-navigation';

const SiteHeader: React.FC<SGDS.Component.SiteHeader> = ({
    logo = {},
    navigationItems,
    phaseBanner,
    siteSearch,
    siteTitle,
    ...props
}) => {
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        if (mobileMenuRef.current) {
            new DSMobileMenu(mobileMenuRef.current).init();
        }
    }, [mobileMenuRef]);

    return (
        <header className="ds_site-header" {...props}>
            <div className="ds_wrapper">
                <div className="ds_site-header__content">
                    <div className="ds_site-branding">
                        {logo &&
                            <a className="ds_site-branding__logo  ds_site-branding__link" href={logo.href ? logo.href : '/'}>
                                <img className="ds_site-branding__logo-image" src={logo.src} alt={logo.alt} />
                            </a>
                        }

                        {siteTitle && <div className="ds_site-branding__title">
                            {siteTitle}
                        </div>}
                    </div>

                    {navigationItems &&
                        <div className="ds_site-header__controls">
                            <label aria-controls="mobile-navigation" className="ds_site-header__control  js-toggle-menu" htmlFor="menu">
                                <span className="ds_site-header__control-text">Menu</span>
                                <Icon fill className="ds_site-header__control-icon" icon="Menu" aria-hidden="true" />
                                <Icon fill className="ds_site-header__control-icon  ds_site-header__control-icon--active-icon" icon="Close" aria-hidden="true" />
                            </label>
                        </div>
                    }

                    {navigationItems &&
                        <input className="ds_site-navigation__toggle" id="menu" type="checkbox" />
                    }
                    {navigationItems &&
                        <SiteNavigation id="mobile-navigation" className="ds_site-navigation--mobile" items={navigationItems} ref={mobileMenuRef} />
                    }

                    {siteSearch &&
                        <SiteSearch className="ds_site-header__search" {...siteSearch} />
                    }
                </div>
            </div>

            {phaseBanner &&
                <PhaseBanner phaseName={phaseBanner.phaseName}>
                    {phaseBanner.content}
                </PhaseBanner>
            }

            {navigationItems &&
                <div className="ds_site-header__navigation">
                    <div className="ds_wrapper">
                        <SiteNavigation items={navigationItems} />
                    </div>
                </div>
            }
        </header>
    );
};

SiteHeader.displayName = 'SiteHeader';

export default SiteHeader;
