declare namespace SGDS.Component {
    interface SiteHeader extends React.AllHTMLAttributes<HTMLHeadingElement> {
        logo?: {
            alt: string,
            href?: string,
            src: string
        },
        navigationItems: SGDS.Component.SiteNavigation.Link[],
        phaseBanner?: SGDS.Component.PhaseBanner,
        siteSearch?: SGDS.Component.SiteSearch,
        siteTitle?: string
    }
}
