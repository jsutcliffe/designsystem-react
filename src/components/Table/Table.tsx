import { useEffect, useRef } from 'react';
// @ts-ignore
import DSTable from '@scottish-government/design-system/src/components/table/table';

const Table = ({
    children,
    className,
    smallscreen,
    ...props
}: SGDS.Component.Table) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSTable().init();
        }
    }, [ref]);

    return (
        <table
            className={[
                'ds_table',
                className
            ].join(' ')}
            data-smallscreen={smallscreen}
            ref={ref}
            {...props}
        >
            {children}
        </table>
    );
};

Table.displayName = 'Table';

export default Table;
