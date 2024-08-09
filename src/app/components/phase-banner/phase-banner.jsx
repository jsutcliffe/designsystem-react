import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../tag/tag';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const PhaseBanner = function ({
    children,
    phaseName,
    ...props
}) {
    return (
        <div
            className="ds_phase-banner"
            {...props}
        >
            <div className="ds_wrapper">
                <p className="ds_phase-banner__content">
                    {phaseName && <Tag title={phaseName} className="ds_phase-banner__tag" />}
                    <span className="ds_phase-banner__text">
                        {children || "This is a new service"}
                    </span>
                </p>
            </div>
        </div>
    );
};
PhaseBanner.propTypes = {
    children: PropTypes.element.isRequired,
    phaseName: PropTypes.string
};

export default PhaseBanner;
