declare namespace SGDS.Component {
    interface SummaryCard extends React.AllHTMLAttributes<HTMLElement> {
        actions?: SummaryList.Action[],
        headerLevel?: SGDS.HeaderLevel,
        items: SummaryList.Item[],
        title: string
    }
}
