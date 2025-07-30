const PageHeader: React.FC<SGDS.Component.PageHeader> = ({
    children,
    className,
    label,
    title,
    ...props
}) => {
    return (
        <header
            className={[
                'ds_page-header',
                className
            ].join(' ')}
            {...props}
        >
            {label && <span className="ds_page-header__label  ds_content-label">{label}</span>}
            <h1 className="ds_page-header__title">{title}</h1>

            {children}
        </header>
    );
};

PageHeader.displayName = 'PageHeader';

export default PageHeader;
