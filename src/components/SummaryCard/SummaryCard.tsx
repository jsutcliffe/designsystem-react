import SummaryList, { Action } from "../SummaryList/SummaryList";
import WrapperTag from "../../common/WrapperTag";

function convertToSlug(string: string) {
    return string.toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
}

const SummaryCard: React.FC<SGDS.Component.SummaryCard> = ({
    actions,
    className,
    headerLevel = 'h3',
    items,
    title,
    ...props
}) => {
    const describedById = `summary-card-${convertToSlug(title)}`;

    return (
        <div
            className={[
                'ds_summary-card',
                className
            ].join(' ')}
            {...props}
        >
            <div className="ds_summary-card__header">
                <WrapperTag
                    className="ds_summary-card__header-title"
                    id={describedById}
                    tagName={headerLevel}
                >{title}</WrapperTag>

                <ul className="ds_summary-card__actions-list">
                    {actions && actions.map((action, index: number) => (
                        <li
                            className="ds_summary-card__actions-list-item"
                            key={'summarylistaction' + index}
                        >
                            <Action
                                describedby={describedById}
                                href={action.href}
                                onclick={action.onclick}
                                title={action.title}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="ds_summary-card__content">
                <SummaryList items={items} />
            </div>
        </div>
    );
};

SummaryCard.displayName = 'SummaryCard';

export default SummaryCard;
