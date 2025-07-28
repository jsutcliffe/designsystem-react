import { Children } from 'react';
import ConditionalWrapper from '../../common/conditional-wrapper';
import HintText from '../../common/hint-text';
import ScreenReaderText from '../../common/screen-reader-text';
import Tag from '../tag/tag';

const TaskItem: React.FC<SGDS.Component.TaskList.Item> = ({
    children,
    className,
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
            className={[
                'ds_task-list__task',
                className
            ].join(' ')}
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
                    {statusText && <ScreenReaderText>({statusText})</ScreenReaderText>}
                </ConditionalWrapper>
                </h3>
                <HintText className="ds_task-list__task-summary">{children}</HintText>
            </div>

            {typeof statusText !== 'undefined' &&
                <Tag
                    aria-hidden="true"
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
const TaskGroup: React.FC<SGDS.Component.TaskList.Group> = ({
    children,
    className,
    intro,
    title,
    ...props
}) => {
    return (
        <li
            className={[
                'ds_task-list-group__section',
                className
            ].join(' ')}
            {...props}
        >
            <h2 className="ds_task-list-heading">{title}</h2>
            {intro && <p className="ds_task-list-intro">{intro}</p>}
            <ul className="ds_task-list">
                {children}
            </ul>
        </li>
    );
};

const TaskList: React.FC<SGDS.Component.TaskList>
    & { Group: React.FC<SGDS.Component.TaskList.Group> }
    & { Item: React.FC<SGDS.Component.TaskList.Item> } = ({
    children,
    className,
    headingId = 'task-list',
    title,
    ...props
}) => {
    let taskCount = 0;
    let incompleteTaskIds: string[] = [];
    let completedTasksCount = 0;

    function processChild(item: any) {
        if (item.type.displayName === 'TaskList.Item') {
            taskCount = taskCount + 1;

            if (item.props.isComplete) {
                completedTasksCount = completedTasksCount + 1;
            } else {
                incompleteTaskIds.push(item.props.id);
            }
        } else if (item.type.displayName === 'TaskList.Group') {
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
        <div
            className={className}
            {...props}
        >
            <h2 id={`${headingId}-status`} className="ds_task-list-status-heading">{title}</h2>
            <nav aria-labelledby={`${headingId}-status`} className="ds_task-list-status">
                <p>You have completed {completedTasksCount} of {taskCount} sections.</p>
                {firstIncompleteTaskLink()}
            </nav>
            <ul className="ds_task-list">
                {children}
            </ul>
        </div>
    );
};

TaskList.displayName = 'TaskList';
TaskItem.displayName = 'TaskList.Item';
TaskGroup.displayName = 'TaskList.Group';
TaskList.Item = TaskItem;
TaskList.Group = TaskGroup;

export default TaskList;
