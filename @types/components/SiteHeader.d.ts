declare namespace SGDS.Component {
    namespace SiteHeader {
        interface Brand extends React.AllHTMLAttributes<HTMLElement> {
            homeUrl: string,
            linkComponent?: SGDS.LinkComponent,
            siteTitle?: string
        }
    }
    interface SiteHeader extends React.AllHTMLAttributes<HTMLHeadingElement> {
        logo?: {
            alt?: string,
            href?: string,
            src?: string
        },
        navigationItems: SGDS.Component.SiteNavigation.Item[],
        phaseBanner?: SGDS.Component.PhaseBanner,
        siteSearch?: SGDS.Component.SiteSearch,
        siteTitle?: string
    }
}
