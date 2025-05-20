import { Children } from 'react';
import ConditionalWrapper from '../../common/conditional-wrapper';
import HintText from '../../common/hint-text';
import ScreenReaderText from '../../common/screen-reader-text';
import Tag from '../tag/tag';

/**
 * @param {Object} props - Properties for the element
 * @param {string} props.href - The URL of the page to link to
 * @param {string} props.id - Task id attribute
 * @param {boolean} [props.isComplete=false] - Task is complete
 * @param {string} [props.statusText] - Tag text
 * @param {TagColour} [props.tagColour='grey'] - Tag colour
 * @param {string} props.title - The title of the task list
 * @returns {JSX.Element} - The element
 */
export const Task: React.FC<SGDS.Component.TaskList.Task> = ({
    children,
    href,
    id,
    isComplete = false,
    statusText,
    tagColour = 'grey',
    title,
    ...props
}) => {
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
                    condition={typeof href !== 'undefined'}
                    wrapper={(children: React.JSX.Element) => <a className="ds_task-list__task-link" href={href}>{children}</a>}
                >
                    {title}
                    <ScreenReaderText>({statusText})</ScreenReaderText>
                </ConditionalWrapper>
                </h3>
                <HintText className="ds_task-list__task-summary">{children}</HintText>
            </div>

            {typeof statusText !== 'undefined' &&
                <Tag
                    aria-hidden="true"
                    className="ds_tag"
                    colour={tagColour}
                    title={statusText}
                />
            }
        </li>
    );
};

/**
 * @param {Object} props
 * @param {string} props.intro - Intro text
 * @param {string} props.title - The title of the task group
 * @returns {JSX.Element} - The element
 */
export const TaskGroup: React.FC<SGDS.Component.TaskList.Group> = ({
    children,
    intro,
    title,
    ...props
}) => {
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

/**
 * @param {Object} props - Properties for the element
 * @param {string} props.title - Title of the task list
 * @returns {JSX.Element} - The element
 */
const TaskList: React.FC<SGDS.Component.TaskList> = ({
    children,
    title
}) => {
    let taskCount = 0;
    let incompleteTaskIds: string[] = [];
    let completedTasksCount = 0;

    function processChild(item: any) {
        if (item.type.displayName === 'Task') {
            taskCount = taskCount + 1;

            if (item.props.isComplete) {
                completedTasksCount = completedTasksCount + 1;
            } else {
                incompleteTaskIds.push(item.props.id);
            }
        } else if (item.type.displayName === 'TaskGroup') {
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

export default TaskList;
