import Icon from "../../common/icon";

export const Page: React.FC<SGDS.Component.Pagination.Page> = ({
    ariaLabel,
    current = false,
    href,
    onClick,
    text
}) => {
    function handleClick(event: React.MouseEvent) {
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }

    return (
        <li className="ds_pagination__item">
            <a aria-label={ariaLabel}
                className={[
                    'ds_pagination__link',
                    current ? 'ds_current' : undefined
                ].join(' ')}
                href={href}
                aria-current={current ? "page" : undefined}
                onClick={handleClick}
            >
                <span className="ds_pagination__link-label">{text}</span>
            </a>
        </li>
    );
};

export const Ellipsis = () => {
    return (
        <li className="ds_pagination__item" aria-hidden="true">
            <span className="ds_pagination__link  ds_pagination__link--ellipsis">&hellip;</span>
        </li>
    );
};

const Pagination: React.FC<SGDS.Component.Pagination> = ({
    ariaLabel = 'Pages',
    className,
    onClick,
    padding = 1,
    page = 1,
    pattern = '/search?page=$1',
    totalPages,
    ...props
}) => {
    padding = Number(padding);
    page = Number(page);

    const minToShow = padding + 2;
    let includeFirst, includeLast;
    let pages = [];

    if (page <= minToShow) {
        for (let i = 1; i <= minToShow + 1; i++) {
            pages.push(Number(i));
        }
    } else if (page <= totalPages - minToShow) {
        pages = [page];
        for (let i = 0; i < padding; i++) {
            pages.unshift(page - 1 - i);
            pages.push(Number(page) + 1 + i);
        }
    } else {
        for (let i = totalPages; i > totalPages - minToShow - 1; i--) {
            pages.push(Number(i));
        }
        pages.reverse();
    }

    // filter out pages that are out of bounds
    pages = pages.filter(item => item > 0 && item <= totalPages);

    if ((page - padding) > 2) {
        includeFirst = true;
    }

    if ((page + padding < totalPages - 1)) {
        includeLast = true;
    }

    return (
        <nav className={[
                'ds_pagination',
                className
            ].join(' ')}
            aria-label={ariaLabel}
            {...props}
        >
            <ul className="ds_pagination__list">
                {page > 1 && (
                    <li className="ds_pagination__item">
                        <a aria-label="Previous page" className="ds_pagination__link  ds_pagination__link--text  ds_pagination__link--icon" href={pattern.replace('$1', String(page - 1))} data-search="pagination-previous" onClick={onClick}>
                            <Icon icon="ChevronLeft" />
                            <span className="ds_pagination__link-label">Previous</span>
                        </a>
                    </li>
                )}

                {includeFirst && (
                    <>
                        <Page
                            ariaLabel="Page 1"
                            href={pattern.replace('$1', String(1))}
                            onClick={onClick}
                            text="1"
                        />
                        <Ellipsis/>
                    </>
                )}

                {pages && pages.map((item, index: number) => (
                    <Page
                        ariaLabel={`Page ${item}`}
                        current={item === page}
                        href={pattern.replace('$1', String(item))}
                        key={`pagination${index}`}
                        onClick={onClick}
                        pattern={pattern}
                        text={item.toString()}
                    />
                ))}

                {includeLast && (
                    <>
                        <Ellipsis/>
                        <Page
                            ariaLabel={`Page ${totalPages}`}
                            href={pattern.replace('$1', String(totalPages))}
                            onClick={onClick}
                            pattern={pattern}
                            text={totalPages.toString()}
                        />
                    </>
                )}

                {page < totalPages && (
                    <li className="ds_pagination__item">
                        <a aria-label="Next page" className="ds_pagination__link  ds_pagination__link--text  ds_pagination__link--icon" href={pattern.replace('$1', String(page + 1))} data-search="pagination-next" onClick={onClick}>
                            <span className="ds_pagination__link-label">Next</span>
                            <Icon icon="ChevronRight" />
                        </a>
                    </li>
                )}

            </ul>
        </nav>
    )
}

Pagination.displayName = 'Pagination';

export default Pagination;
