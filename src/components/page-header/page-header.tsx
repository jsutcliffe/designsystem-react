/**
 * @param {Object} props - Properties for the element
 * @param {string} [props.label]
 * @param {string} props.title
 * @returns {JSX.Element} - The element
 */
const PageHeader: React.FC<SGDS.Component.PageHeader> = ({
    children,
    label,
    title,
    ...props
}) => {
    return (
        <header
            className="ds_page-header"
            {...props}
        >
            {label && <span className="ds_page-header__label  ds_content-label">{label}</span>}
            <h1 className="ds_page-header__title">{title}</h1>

            {children}
        </header>
    );
};

export default PageHeader;
