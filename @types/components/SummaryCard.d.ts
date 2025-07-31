declare namespace SGDS.Component {
    interface SummaryCard extends React.AllHTMLAttributes<HTMLElement> {
        actions?: SummaryList.Action[],
        headingLevel?: SGDS.HeadingLevel,
        items: SummaryList.Item[],
        title: string
    }
}
