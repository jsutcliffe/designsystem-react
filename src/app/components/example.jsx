import React from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Details from './details/details';


import Prism from 'prismjs';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Example = function ({
    children,
    nodisplay,
    title
}) {
    if (Array.isArray(children)) {
       children = React.createElement('div', '', children)
    }

    const highlightedCode = Prism.highlight(
        reactElementToJSXString(children),
        Prism.languages.xml,
        'xml'
    );

    return (
        <div>
            {title && (<h3>{title}</h3>)}
            <div className="dsjsx_example">
                {!nodisplay && children}
                {nodisplay && <p className="ds_no-margin">This component uses absolute or sticky positioning and is not displayed in this box.</p>}
            </div>
            <Details
                summary="JSX for this example"
            >
                <pre>
                    <code className="language-xml"
                        dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    />
                </pre>
            </Details>
        </div>
    );
};
Example.propTypes = {
    children: PropTypes.element,
    nodisplay: PropTypes.bool,
    title: PropTypes.string
};

export default Example;
