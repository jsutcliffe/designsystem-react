import React from 'react';
import * as FileIcons from '../images/documents';

const FileIcon: React.FC<SGDS.Common.FileIcon> = ({
    ariaLabel = '',
    className,
    icon
}) => {
    const Component = React.createElement(FileIcons[icon],
        {
            className: className,
            'aria-label': ariaLabel
        }
    );

    return (
        <>
            {Component}
        </>
    );
};

FileIcon.displayName = 'FileIcon';

export default FileIcon;
