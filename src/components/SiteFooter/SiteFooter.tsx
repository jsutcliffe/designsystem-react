import React, { Children } from 'react';
import ConditionalWrapper from '../../common/ConditionalWrapper';

const License = ({
    children,
    ...props
}: SGDS.Component.SiteFooter.License) => {
    return (
        <div className="ds_site-footer__copyright" {...props}>
            {children}
        </div>
    );
}

const Links = ({
    children,
    ...props
}: SGDS.Component.SiteFooter.Links) => {
    return (
        <ul className="ds_site-footer__site-items" {...props}>
            {children}
        </ul>
    );
}

const Link = ({
    children,
    href,
    linkComponent,
    ...props
}: SGDS.Component.SiteFooter.Link) => {
    function processChildren(children: React.ReactNode) {
        if (linkComponent) {
            return linkComponent({ href, children });
        } else if (href) {
            return <a href={href}>{children}</a>;
        } else {
            return children;
        }
    }

    return <li className="ds_site-items__item" {...props}>
        {processChildren(children)}
    </li>;
}

const Org = ({
    href,
    title,
    children,
    ...props
}: SGDS.Component.SiteFooter.Org) => {
    children = Children.map(children, child => {
        let thisChild = child as React.ReactElement<HTMLElement>;
        if (thisChild && ['img', 'svg', 'picture'].includes(thisChild.type as string)) {
            return React.cloneElement(thisChild, { className: 'ds_site-footer__org-logo' });
        } else {
            return child;
        }
    });

    return (
        <div className="ds_site-footer__org" {...props}>
            <ConditionalWrapper
                condition={typeof href !== 'undefined'}
                wrapper={(children: React.JSX.Element) => <a className="ds_site-footer__org-link" title={title} href={href}>{children}</a>}
            >
                {children}
            </ConditionalWrapper>
        </div>
    );
}

const SiteFooter = ({
    children,
    className,
    ...props
}: SGDS.Component.SiteFooter) => {
    return (
        <footer
            className={[
                "ds_site-footer",
                className
            ].join(' ')}
            {...props}
        >
            <div className="ds_wrapper">
                <div className="ds_site-footer__content">
                    {children}
                </div>
            </div>
        </footer>
    );
};

SiteFooter.Links = Links;
SiteFooter.Link = Link;
SiteFooter.License = License;
SiteFooter.Org = Org;

SiteFooter.displayName = 'SiteFooter';
Links.displayName = 'SiteFooter.Links';
Link.displayName = 'SiteFooter.Link';
License.displayName = 'SiteFooter.License';
Org.displayName = 'SiteFooter.Org';

export default SiteFooter;
