import React from 'react';
import * as FileIcons from '../images/documents';

const FileIcon = ({
    ariaLabel = '',
    className,
    icon
}: SGDS.Common.FileIcon) => {
    const FileIconComponent = FileIcons[icon];

    return (
        <FileIconComponent
            aria-label={ariaLabel}
            className={className}
        />
    );
};

FileIcon.displayName = 'FileIcon';

export default FileIcon;
