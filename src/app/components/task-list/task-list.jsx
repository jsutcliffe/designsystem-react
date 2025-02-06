import React, { Children } from 'react';
import PropTypes from 'prop-types';
import ConditionalWrapper from '../common/conditional-wrapper';
import HintText from '../common/hint-text';
import ScreenReaderText from '../common/screen-reader-text';
import Tag from '../tag/tag';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Task = function ({
    children,
    href,
    id,
    isComplete = false,
    statusText,
    tagColour = 'grey',
    title,
    ...props
}) {
    if (isComplete) {
        tagColour = 'green';
    }

    return (
        <li
            className="ds_task-list__task"
            id={id}
            {...props}
        >
            <div className="ds_task-list__task-details">
                <h3 className="ds_task-list__task-heading">
                <ConditionalWrapper
                    condition={href}
                    wrapper={children => <a className="ds_task-list__task-link" href={href}>{children}</a>}
                >
                    {title}
                    <ScreenReaderText>({statusText})</ScreenReaderText>
                </ConditionalWrapper>
                </h3>
                <HintText className="ds_task-list__task-summary">{children}</HintText>
            </div>

            <Tag
                aria-hidden="true"
                className="ds_tag"
                colour={tagColour}
                title={statusText}
            />
        </li>
    );
};
Task.propTypes = {
    children: PropTypes.element,
    href: PropTypes.string,
    id: PropTypes.string,
    isComplete: PropTypes.bool,
    statusText: PropTypes.string,
    tagColour: PropTypes.string,
    title: PropTypes.string.isRequired
};
Task.internalName = 'Task';

export const TaskGroup = function ({
    children,
    intro,
    title,
    ...props
}) {
    return (
        <li
            className="ds_task-list-group__section"
            {...props}
        >
            <h2 className="ds_task-list-heading">{title}</h2>
            <p className="ds_task-list-intro">{intro}</p>
            <ul className="ds_task-list">
                {children}
            </ul>
        </li>
    );
};
TaskGroup.propTypes = {
    children: PropTypes.element,
    intro: PropTypes.string,
    title: PropTypes.string.isRequired,
};
TaskGroup.internalName = 'TaskGroup';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TaskList = function ({
    children,
    title
}) {
    let taskCount = 0;
    let incompleteTaskIds = [];
    let completedTasksCount = 0;

    function processChild(item) {
        if (item.type.internalName === 'Task') {
            taskCount = taskCount + 1;

            if (item.props.isComplete) {
                completedTasksCount = completedTasksCount + 1;
            } else {
                incompleteTaskIds.push(item.props.id);
            }
        } else if (item.type.internalName === 'TaskGroup') {
            Children.forEach(item.props.children, child => {
                processChild(child);
            });
        }
    }

    function firstIncompleteTaskLink() {
        if (incompleteTaskIds.length > 0) {
            return (
                <p><a href={'#' + incompleteTaskIds[0]} className="js-task-list-skip-link">Skip to first incomplete section</a></p>
            )
        }
    }

    Children.forEach(children, child => {
        processChild(child);
    });

    return (
        <>
            <h2 id="task-list-status" className="ds_task-list-status-heading">{title}</h2>
            <nav aria-labelledby="task-list-status" className="ds_task-list-status">
                <p>You have completed {completedTasksCount} of {taskCount} sections.</p>
                {firstIncompleteTaskLink()}
            </nav>
            <ul className="ds_task-list">
                {children}
            </ul>
        </>
    );
};
TaskList.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string.isRequired,
};

export default TaskList;
