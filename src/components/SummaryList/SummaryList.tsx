import ConditionalWrapper from '../../common/ConditionalWrapper';
import WrapperTag from '../../common/WrapperTag';

function escapedNewLineToLineBreakTag (string: string) {
    if (typeof string === 'string') {
        // @ts-ignore
        return string.split('\n').map((item, index) => {
            return (index === 0) ? item : [<br key={index} />, item]
        });
    }
}

function convertToSlug(string: string) {
    return string.toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
}

export const Answer: React.FC<SGDS.Component.SummaryList.Answer> = ({
    value
}) => {
    const processedValue = escapedNewLineToLineBreakTag(value.toString());

    return (
        <q className="ds_summary-list__answer">{processedValue}</q>
    );
};

export const Action: React.FC<SGDS.Component.SummaryList.Action> = ({
    describedby,
    href,
    onclick,
    title,
}) => {
    let tagName = 'button';
    if (href) {
        tagName = 'a';
    }

    return (
        <WrapperTag
            aria-describedby={describedby}
            className="ds_link"
            href={href}
            onClick={onclick}
            tagName={tagName}
            type={tagName === 'button' ? 'button' : undefined}
        >
            {title}
        </WrapperTag>
    );
};

export const Item: React.FC<SGDS.Component.SummaryList.Item> = ({
    actions,
    index = 1,
    title,
    value
}) => {
    let values: string[] = [];

    if (Array.isArray(value)) {
        values = value;
    } else {
        values = [value || ''];
    }

    const describedById = `q${index+1}-${convertToSlug(title)}`;

    return (
        <li className="ds_summary-list__item">
            <span className="ds_summary-list__key" id={describedById}>{title}</span>
            <span className="ds_summary-list__value">
                <ConditionalWrapper
                    condition={values.length > 1}
                    wrapper={(children: React.JSX.Element) => <ul className="ds_no-bullets">{children}</ul>}
                >
                    {values && values.map((value, index: number) => (
                        <ConditionalWrapper
                            condition={values.length > 1}
                            wrapper={(children: React.JSX.Element) => <li>{children}</li>}
                            key={'answer' + index}
                        >
                            <Answer
                                value={value}
                            />
                        </ConditionalWrapper>
                    ))}
                </ConditionalWrapper>
            </span>
            {actions &&
                <div className="ds_summary-list__actions">
                    {actions && actions.map((action, index: number) => (
                        <Action
                            describedby={describedById}
                            href={action.href}
                            onclick={action.onclick}
                            title={action.title}
                            key={'summarylistaction' + index}
                        />
                    ))}
                </div>
            }
        </li>
    );
};

const SummaryList: React.FC<SGDS.Component.SummaryList> = ({
    className,
    items,
    noBorder,
    ...props
}) => {
    return (
        <ol
            className={[
                'ds_summary-list',
                noBorder && 'ds_summary-list--no-border',
                className
            ].join(' ')}
            {...props}
        >
            {items && items.map((item, index: number) => (
                <Item
                    actions={item.actions}
                    title={item.title}
                    value={item.value}
                    index={index}
                    key={'summarylistitem' + index}
                />
            ))}
        </ol>
    );
};

SummaryList.displayName = 'SummaryList';
Action.displayName = 'SummaryListAction';
Answer.displayName = 'SumaryListAnswer';
Item.displayName = 'SummaryListItem';

export default SummaryList;
