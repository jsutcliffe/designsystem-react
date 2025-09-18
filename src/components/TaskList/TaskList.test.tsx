import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import TaskList from './TaskList';

const TASK_LIST_HEADING_TEXT = 'Application incomplete';

const TASKS = [
    { id: 'task-conditions', statusText: 'Cannot start yet', title: 'Conditions' },
    { id: 'task-medications', statusText: 'Cannot start yet', title: 'Medications' },
    { id: 'task-contacts', statusText: 'Cannot start yet', title: 'Contacts and supporting information' },
];
const TASK_ITEM = {
        id: 'task-conditions',
        statusText: 'Cannot start yet',
        title: 'Conditions',
        href: '#foo'
    };
const TASK_SUMMARY_CONTENT = 'Tell us about your conditions, symptoms and any sensory issues you have.';


test('task list renders correctly', () => {
    render(
        <TaskList
            title={TASK_LIST_HEADING_TEXT}
        >
            <TaskList.Item
                id={TASKS[0].id}
                statusText={TASKS[0].statusText}
                title={TASKS[0].title}
            >
                Tell us about your conditions, symptoms and any sensory issues you have.
            </TaskList.Item>
            <TaskList.Item
                id={TASKS[1].id}
                statusText={TASKS[1].statusText}
                title={TASKS[1].title}
            >
                Tell us about any medication you need.
            </TaskList.Item>
            <TaskList.Item
                id={TASKS[2].id}
                statusText={TASKS[2].statusText}
                title={TASKS[2].title}
            >
                Share any supporting documents and provide details of people we can talk to about you.
            </TaskList.Item>
        </TaskList>
    );

    const taskList = screen.getByRole('list');
    const taskListStatus = screen.getByRole('navigation');
    const taskListStatus1 = taskListStatus.children[0];
    const taskListStatus2 = taskListStatus.children[1];

    const taskListStatusLink = within(taskListStatus).getByRole('link');
    const taskListHeading = screen.getAllByRole('heading')[0];

    expect(taskListHeading).toHaveClass('ds_task-list-status-heading');
    expect(taskListHeading).toHaveAttribute('id', 'task-list-status');
    expect(taskListHeading.textContent).toEqual(TASK_LIST_HEADING_TEXT);

    expect(taskListStatus).toHaveClass('ds_task-list-status');
    expect(taskListStatus).toHaveAttribute('aria-labelledby', taskListHeading.id);

    expect(taskListStatus1.textContent).toEqual('You have completed 0 of 3 sections.');
    expect(taskListStatus1.tagName).toEqual('P');
    expect(taskListStatus2.tagName).toEqual('P');
    expect(taskListStatusLink.tagName).toEqual('A');
    expect(taskListStatusLink.textContent).toEqual('Skip to first incomplete section');
    expect(taskListStatusLink).toHaveAttribute('href', `#${TASKS[0].id}`);

    expect(taskList).toHaveClass('ds_task-list');
    expect(taskList.tagName).toEqual('UL');
    expect(taskList.children.length).toEqual(TASKS.length);
});

test('task list with custom ID', () => {
    const TASKLIST_HEADING_ID = 'my-id';

    render(
        <TaskList
            title={TASK_LIST_HEADING_TEXT}
            headingId={TASKLIST_HEADING_ID}
        >
        </TaskList>
    );

    const taskListStatus = screen.getByRole('navigation');
    const taskListHeading = screen.getAllByRole('heading')[0];

    expect(taskListHeading).toHaveAttribute('id', `${TASKLIST_HEADING_ID}-status`);
    expect(taskListStatus).toHaveAttribute('aria-labelledby', taskListHeading.id);
});

test('task list with completed tasks', () => {
    render(
        <TaskList
            title={TASK_LIST_HEADING_TEXT}
        >
            <TaskList.Item
                id={TASKS[0].id}
                statusText={TASKS[0].statusText}
                title={TASKS[0].title}
                isComplete
            >
                Tell us about your conditions, symptoms and any sensory issues you have.
            </TaskList.Item>
            <TaskList.Item
                id={TASKS[1].id}
                statusText={TASKS[1].statusText}
                title={TASKS[1].title}
                isComplete
            >
                Tell us about any medication you need.
            </TaskList.Item>
            <TaskList.Item
                id={TASKS[2].id}
                statusText={TASKS[2].statusText}
                title={TASKS[2].title}
            >
                Share any supporting documents and provide details of people we can talk to about you.
            </TaskList.Item>
        </TaskList>
    );

    const taskListStatus = screen.getByRole('navigation');
    const taskListStatus1 = taskListStatus.children[0];
    const taskListStatusLink = within(taskListStatus).getByRole('link');

    expect(taskListStatus1.textContent).toEqual('You have completed 2 of 3 sections.');
    expect(taskListStatusLink).toHaveAttribute('href', `#${TASKS[2].id}`);
});

test('task renders correctly', () => {
    render(
        <TaskList.Item
            id={TASK_ITEM.id}
            statusText={TASK_ITEM.statusText}
            title={TASK_ITEM.title}
        >
            {TASK_SUMMARY_CONTENT}
        </TaskList.Item>
    );

    const task = screen.getByRole('listitem');
    const tag = document.querySelector('.ds_tag');
    const taskHeading = within(task).getByRole('heading');
    const taskDetails = taskHeading.parentElement;
    const taskSummary = taskHeading.nextElementSibling;

    expect(task).toHaveClass('ds_task-list__task');
    expect(task).toHaveAttribute('id', TASK_ITEM.id);

    expect(taskDetails).toHaveClass('ds_task-list__task-details');
    expect(taskDetails?.parentElement).toEqual(task);
    expect(taskDetails?.tagName).toEqual('DIV');

    expect(taskHeading).toHaveClass('ds_task-list__task-heading');
    expect(taskHeading.tagName).toEqual('H3');
    expect(taskHeading.textContent).toEqual(`${TASK_ITEM.title}(${TASK_ITEM.statusText})`);

    expect(taskSummary).toHaveClass('ds_task-list__task-summary');
    expect(taskSummary?.tagName).toEqual('P');
    expect(taskSummary?.textContent).toEqual(TASK_SUMMARY_CONTENT);

    expect(tag).toHaveAttribute('aria-hidden', 'true');
    expect(tag?.textContent).toEqual(TASK_ITEM.statusText);
});

test('task with link', () => {
    const TASK_HREF = '#foo';

    render(
        <TaskList.Item
            id={TASK_ITEM.id}
            statusText={TASK_ITEM.statusText}
            title={TASK_ITEM.title}
            href={TASK_HREF}
        >
            {TASK_SUMMARY_CONTENT}
        </TaskList.Item>
    );

    const task = screen.getByRole('listitem');
    const taskHeading = within(task).getByRole('heading');
    const link = within(task).getByRole('link');

    expect(link).toHaveClass('ds_task-list__task-link');
    expect(link).toHaveAttribute('href', TASK_HREF);
    expect(link.textContent).toEqual(`${TASK_ITEM.title}(${TASK_ITEM.statusText})`);
    expect(link.parentElement).toEqual(taskHeading);
    expect(link.textContent).toEqual(taskHeading.textContent);
});

test('task with custom link element', () => {
    const TASK_HREF = '#foo';

    render(
        <TaskList.Item
            id={TASK_ITEM.id}
            statusText={TASK_ITEM.statusText}
            title={TASK_ITEM.title}
            href={TASK_HREF}
            linkComponent={
            ({ className, ...props }) => (
                <strong role="link" className={className} {...props}/>
            )}
        >
            {TASK_SUMMARY_CONTENT}
        </TaskList.Item>
    );

    const task = screen.getByRole('listitem');
    const taskHeading = within(task).getByRole('heading');
    const link = within(task).getByRole('link');

    expect(link?.tagName).toEqual('STRONG');
    expect(link?.textContent).toEqual(taskHeading.textContent);
});

test('completed task has green tag', () => {
    const STATUS_TEXT = 'MY STATUS TEXT';

    render(
        <TaskList.Item
            id={TASK_ITEM.id}
            statusText={STATUS_TEXT}
            title={TASK_ITEM.title}
            isComplete
        >
            {TASK_SUMMARY_CONTENT}
        </TaskList.Item>
    );

    const tag = document.querySelector('.ds_tag');

    expect(tag).toHaveClass('ds_tag--green');
    expect(tag?.textContent).toEqual(STATUS_TEXT);
});

test('completed task has default text if no statusText set', () => {
    render(
        <TaskList.Item
            id={TASK_ITEM.id}
            title={TASK_ITEM.title}
            isComplete
        >
            {TASK_SUMMARY_CONTENT}
        </TaskList.Item>
    );

    const tag = document.querySelector('.ds_tag');

    expect(tag).toHaveClass('ds_tag--green');
    expect(tag?.textContent).toEqual('Completed');
});

test('specific tag colour', () => {
    const TAG_COLOUR = 'red';

    render(
        <TaskList.Item
            id={TASK_ITEM.id}
            statusText={TASK_ITEM.statusText}
            title={TASK_ITEM.title}
            tagColour={TAG_COLOUR}
        >
            {TASK_SUMMARY_CONTENT}
        </TaskList.Item>
    );

    const tag = document.querySelector('.ds_tag');

    expect(tag).toHaveClass(`ds_tag--${TAG_COLOUR}`);
});

test('no status tag when no status text provided', () => {
    render(
        <TaskList.Item
            id={TASK_ITEM.id}
            title={TASK_ITEM.title}
        >
            {TASK_SUMMARY_CONTENT}
        </TaskList.Item>
    );

    const tag = document.querySelector('.ds_tag');

    expect(tag).toBeNull();
});

test('task group renders correctly', () => {
    const TASK_GROUP_HEADING_TEXT = 'Provide your health details';

    render(
        <TaskList.Group title={TASK_GROUP_HEADING_TEXT}>
            <TaskList.Item
                id={TASKS[0].id}
                statusText={TASKS[0].statusText}
                title={TASKS[0].title}
            >
                Tell us about your conditions, symptoms and any sensory issues you have.
            </TaskList.Item>
            <TaskList.Item
                id={TASKS[1].id}
                statusText={TASKS[1].statusText}
                title={TASKS[1].title}
            >
                Tell us about any medication you need.
            </TaskList.Item>
            <TaskList.Item
                id={TASKS[2].id}
                statusText={TASKS[2].statusText}
                title={TASKS[2].title}
            >
                Share any supporting documents and provide details of people we can talk to about you.
            </TaskList.Item>
        </TaskList.Group>
    );

    const taskGroup = document.querySelector('.ds_task-list-group__section');
    const taskGroupHeading = taskGroup?.querySelector('.ds_task-list-heading');
    const innerTaskList = taskGroup?.querySelector('.ds_task-list');

    expect(taskGroup).toHaveClass('ds_task-list-group__section');
    expect(taskGroup?.tagName).toEqual('LI');

    expect(taskGroupHeading?.tagName).toEqual('H2');
    expect(taskGroupHeading?.textContent).toEqual(TASK_GROUP_HEADING_TEXT);

    // a bit hacky, but list should be last child
    expect(taskGroup?.children[taskGroup.children.length - 1]).toEqual(innerTaskList);
});

test('task group with intro text', () => {
    const TASK_GROUP_INTRO_TEXT = 'This information will be used to check what additional benefits you may be able to apply for.';

    render(
        <TaskList.Group title="Provide your health details" intro={TASK_GROUP_INTRO_TEXT}>
            <TaskList.Item
                id={TASKS[0].id}
                statusText={TASKS[0].statusText}
                title={TASKS[0].title}
            >
                Tell us about your conditions, symptoms and any sensory issues you have.
            </TaskList.Item>
            <TaskList.Item
                id={TASKS[1].id}
                statusText={TASKS[1].statusText}
                title={TASKS[1].title}
            >
                Tell us about any medication you need.
            </TaskList.Item>
            <TaskList.Item
                id={TASKS[2].id}
                statusText={TASKS[2].statusText}
                title={TASKS[2].title}
            >
                Share any supporting documents and provide details of people we can talk to about you.
            </TaskList.Item>
        </TaskList.Group>
    );

    const taskGroup = document.querySelector('.ds_task-list-group__section');
    const taskGroupHeading = taskGroup?.querySelector('.ds_task-list-heading');
    const taskGroupIntro = taskGroup?.querySelector('.ds_task-list-intro');

    expect(taskGroupIntro?.textContent).toEqual(TASK_GROUP_INTRO_TEXT);
    expect(taskGroupIntro?.previousSibling).toEqual(taskGroupHeading);
});

test('task list counts completed items from all groups for its status text and the first incomplete section wraps to the next group sensibly', () => {
    render(
        <TaskList>
            <TaskList.Group title="Provide your health details">
                <TaskList.Item
                    id={TASKS[0].id}
                    statusText={TASKS[0].statusText}
                    title={TASKS[0].title}
                    isComplete
                >
                    Tell us about your conditions, symptoms and any sensory issues you have.
                </TaskList.Item>
                <TaskList.Item
                    id={TASKS[1].id}
                    statusText={TASKS[1].statusText}
                    title={TASKS[1].title}
                    isComplete
                >
                    Tell us about any medication you need.
                </TaskList.Item>
                <TaskList.Item
                    id={TASKS[2].id}
                    statusText={TASKS[2].statusText}
                    title={TASKS[2].title}
                    isComplete
                >
                    Share any supporting documents and provide details of people we can talk to about you.
                </TaskList.Item>
            </TaskList.Group>
            <TaskList.Group title="Provide your health details">
                <TaskList.Item
                    id={TASKS[0].id + '2'}
                    statusText={TASKS[0].statusText}
                    title={TASKS[0].title}
                >
                    Tell us about your conditions, symptoms and any sensory issues you have.
                </TaskList.Item>
                <TaskList.Item
                    id={TASKS[1].id + '2'}
                    statusText={TASKS[1].statusText}
                    title={TASKS[1].title}
                >
                    Tell us about any medication you need.
                </TaskList.Item>
                <TaskList.Item
                    id={TASKS[2].id + '2'}
                    statusText={TASKS[2].statusText}
                    title={TASKS[2].title}
                    isComplete
                >
                    Share any supporting documents and provide details of people we can talk to about you.
                </TaskList.Item>
            </TaskList.Group>
        </TaskList>
    );

    const taskListStatus = screen.getByRole('navigation');
    const taskListStatus1 = taskListStatus.children[0];
    const taskListStatusLink = within(taskListStatus).getByRole('link');

    expect(taskListStatus1.textContent).toEqual('You have completed 4 of 6 sections.');
    expect(taskListStatusLink).toHaveAttribute('href', `#${TASKS[0].id + '2'}`);
});

test('passing additional props to task list', () => {
    render(
        <TaskList
            title={TASK_LIST_HEADING_TEXT}
            data-test="foo"
        />
    );

    const taskList = screen.getByRole('list');
    const taskListWrapper = taskList.parentElement;
    expect(taskListWrapper?.dataset.test).toEqual('foo');
});

test('passing additional props to task group', () => {
    render(
        <TaskList.Group data-test="foo">
        </TaskList.Group>
    );

    const taskGroup = document.querySelector('.ds_task-list-group__section') as HTMLElement;
    expect(taskGroup?.dataset.test).toEqual('foo');
});

test('passing additional props to task', () => {
    render(
        <TaskList.Item data-test="foo">
        </TaskList.Item>
    );

    const task = document.querySelector('.ds_task-list__task') as HTMLElement;
    expect(task?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes to task list', () => {
    render(
        <TaskList
            title={TASK_LIST_HEADING_TEXT}
            className="foo"
        />
    );

    const taskList = screen.getByRole('list');
    const taskListWrapper = taskList.parentElement;
    expect(taskListWrapper).toHaveClass('foo');
});

test('passing additional CSS classes to task group', () => {
    render(
        <TaskList.Group className="foo">
        </TaskList.Group>
    );

    const taskGroup = document.querySelector('.ds_task-list-group__section');
    expect(taskGroup).toHaveClass('foo', 'ds_task-list-group__section');
});

test('passing additional CSS classes to task', () => {
    render(
        <TaskList.Item className="foo">
        </TaskList.Item>
    );

    const task = document.querySelector('.ds_task-list__task');
    expect(task).toHaveClass('foo', 'ds_task-list__task');
});
