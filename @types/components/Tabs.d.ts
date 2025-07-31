declare namespace SGDS.Component {
    namespace Tabs {
        interface Item extends React.AllHTMLAttributes<HTMLElement> {
            bordered?: boolean,
            id: string,
            tabLabel: string
        }

        interface TabListItem extends React.AllHTMLAttributes<HTMLLIElement> {
            title: string,
            href: string
        }
    }

    interface Tabs extends React.AllHTMLAttributes<HTMLElement> {
        baseId: string,
        bordered?: boolean,
        headingLevel?: SGDS.HeadingLevel,
        manual?: boolean,
        title: string
    }
}
