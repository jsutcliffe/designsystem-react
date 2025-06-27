declare namespace SGDS.Component {
    namespace SummaryList {
        interface Action extends React.AllHTMLAttributes<HTMLElement> {
            describedby: string,
            href?: string,
            onclick?: React.EventHandler<any>,
            title: string
        }

        interface Answer extends React.AllHTMLAttributes<HTMLElement> {
            value: string
        }

        interface Item extends React.LiHTMLAttributes<HTMLLIElement> {
            actions?: SummaryList.Action[],
            index: number,
            title: string
            value: string | string[]
        }

    }

    interface SummaryList extends React.OlHTMLAttributes<HTMLOListElement> {
        items: SummaryList.Item[],
        noBorder?: boolean
    }
}
