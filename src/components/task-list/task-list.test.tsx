import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import TaskList, {Task, TaskGroup} from './task-list';

const taskListHeadingText = 'Application incomplete';

const tasks = [
    { id: 'task-conditions', statusText: 'Cannot start yet', title: 'Conditions' },
    { id: 'task-medications', statusText: 'Cannot start yet', title: 'Medications' },
    { id: 'task-contacts', statusText: 'Cannot start yet', title: 'Contacts and supporting information' },
];
const taskItem = {
        id: 'task-conditions',
        statusText: 'Cannot start yet',
        title: 'Conditions',
        href: '#foo'
    };
const taskSummaryContent = 'Tell us about your conditions, symptoms and any sensory issues you have.';


test('task list renders correctly', () => {
    render(
        <TaskList
            title={taskListHeadingText}
        >
            <Task
                id={tasks[0].id}
                statusText={tasks[0].statusText}
                title={tasks[0].title}
            >
                Tell us about your conditions, symptoms and any sensory issues you have.
            </Task>
            <Task
                id={tasks[1].id}
                statusText={tasks[1].statusText}
                title={tasks[1].title}
            >
                Tell us about any medication you need.
            </Task>
            <Task
                id={tasks[2].id}
                statusText={tasks[2].statusText}
                title={tasks[2].title}
            >
                Share any supporting documents and provide details of people we can talk to about you.
            </Task>
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
    expect(taskListHeading.textContent).toEqual(taskListHeadingText);

    expect(taskListStatus).toHaveClass('ds_task-list-status');
    expect(taskListStatus).toHaveAttribute('aria-labelledby', taskListHeading.id);

    expect(taskListStatus1.textContent).toEqual('You have completed 0 of 3 sections.');
    expect(taskListStatus1.tagName).toEqual('P');
    expect(taskListStatus2.tagName).toEqual('P');
    expect(taskListStatusLink.tagName).toEqual('A');
    expect(taskListStatusLink.textContent).toEqual('Skip to first incomplete section');
    expect(taskListStatusLink).toHaveAttribute('href', `#${tasks[0].id}`);

    expect(taskList).toHaveClass('ds_task-list');
    expect(taskList.tagName).toEqual('UL');
    expect(taskList.children.length).toEqual(tasks.length);
});

test('task list with custom ID', () => {
    const headingId = 'my-id';
    render(
        <TaskList
            title={taskListHeadingText}
            headingId={headingId}
        >
        </TaskList>
    );

    const taskListStatus = screen.getByRole('navigation');
    const taskListHeading = screen.getAllByRole('heading')[0];

    expect(taskListHeading).toHaveAttribute('id', `${headingId}-status`);
    expect(taskListStatus).toHaveAttribute('aria-labelledby', taskListHeading.id);
});

test('task list with completed tasks', () => {
    render(
        <TaskList
            title={taskListHeadingText}
        >
            <Task
                id={tasks[0].id}
                statusText={tasks[0].statusText}
                title={tasks[0].title}
                isComplete
            >
                Tell us about your conditions, symptoms and any sensory issues you have.
            </Task>
            <Task
                id={tasks[1].id}
                statusText={tasks[1].statusText}
                title={tasks[1].title}
                isComplete
            >
                Tell us about any medication you need.
            </Task>
            <Task
                id={tasks[2].id}
                statusText={tasks[2].statusText}
                title={tasks[2].title}
            >
                Share any supporting documents and provide details of people we can talk to about you.
            </Task>
        </TaskList>
    );

    const taskListStatus = screen.getByRole('navigation');
    const taskListStatus1 = taskListStatus.children[0];

    const taskListStatusLink = within(taskListStatus).getByRole('link');

    expect(taskListStatus1.textContent).toEqual('You have completed 2 of 3 sections.');
    expect(taskListStatusLink).toHaveAttribute('href', `#${tasks[2].id}`);
});

test('task renders correctly', () => {
    render(
        <Task
            id={taskItem.id}
            statusText={taskItem.statusText}
            title={taskItem.title}
        >
            {taskSummaryContent}
        </Task>
    );

    const task = screen.getByRole('listitem');
    const tag = document.querySelector('.ds_tag');
    const taskHeading = within(task).getByRole('heading');
    const taskDetails = taskHeading.parentNode;
    const taskSummary = taskHeading.nextSibling;

    expect(task).toHaveClass('ds_task-list__task');
    expect(task).toHaveAttribute('id', taskItem.id);

    expect(taskDetails).toHaveClass('ds_task-list__task-details');
    expect(taskDetails.parentNode).toEqual(task);
    expect(taskDetails.tagName).toEqual('DIV');

    expect(taskHeading).toHaveClass('ds_task-list__task-heading');
    expect(taskHeading.tagName).toEqual('H3');
    expect(taskHeading.textContent).toEqual(`${taskItem.title}(${taskItem.statusText})`);

    expect(taskSummary).toHaveClass('ds_task-list__task-summary');
    expect(taskSummary.tagName).toEqual('P');
    expect(taskSummary.textContent).toEqual(taskSummaryContent);

    expect(tag).toHaveAttribute('aria-hidden', 'true');
    expect(tag.textContent).toEqual(taskItem.statusText);
});

test('task with link', () => {
    const href = '#foo';

    render(
        <Task
            id={taskItem.id}
            statusText={taskItem.statusText}
            title={taskItem.title}
            href={href}
        >
            {taskSummaryContent}
        </Task>
    );

    const task = screen.getByRole('listitem');
    const taskHeading = within(task).getByRole('heading');
    const link = within(task).getByRole('link');

    expect(link).toHaveClass('ds_task-list__task-link');
    expect(link).toHaveAttribute('href', href);
    expect(link.textContent).toEqual(`${taskItem.title}(${taskItem.statusText})`);
    expect(link.parentNode).toEqual(taskHeading);
    expect(link.textContent).toEqual(taskHeading.textContent);
});

test('completed task has green tag', () => {
    render(
        <Task
            id={taskItem.id}
            statusText={taskItem.statusText}
            title={taskItem.title}
            isComplete
        >
            {taskSummaryContent}
        </Task>
    );

    const tag = document.querySelector('.ds_tag');

    expect(tag).toHaveClass('ds_tag--green');
});

test('specific tag colour', () => {
    const tagColour = 'red';

    render(
        <Task
            id={taskItem.id}
            statusText={taskItem.statusText}
            title={taskItem.title}
            tagColour={tagColour}
        >
            {taskSummaryContent}
        </Task>
    );

    const tag = document.querySelector('.ds_tag');

    expect(tag).toHaveClass(`ds_tag--${tagColour}`);
});

test('no status tag when no status text provided', () => {
    render(
        <Task
            id={taskItem.id}
            title={taskItem.title}
        >
            {taskSummaryContent}
        </Task>
    );

    const tag = document.querySelector('.ds_tag');

    expect(tag).toBeNull();
});

test('task group renders correctly', () => {
    const taskGroupHeadingText = 'Provide your health details';

    render(
        <TaskGroup title={taskGroupHeadingText}>
            <Task
                id={tasks[0].id}
                statusText={tasks[0].statusText}
                title={tasks[0].title}
            >
                Tell us about your conditions, symptoms and any sensory issues you have.
            </Task>
            <Task
                id={tasks[1].id}
                statusText={tasks[1].statusText}
                title={tasks[1].title}
            >
                Tell us about any medication you need.
            </Task>
            <Task
                id={tasks[2].id}
                statusText={tasks[2].statusText}
                title={tasks[2].title}
            >
                Share any supporting documents and provide details of people we can talk to about you.
            </Task>
        </TaskGroup>
    );

    const taskGroup = document.querySelector('.ds_task-list-group__section');
    const taskGroupHeading = taskGroup.querySelector('.ds_task-list-heading');
    const innerTaskList = taskGroup.querySelector('.ds_task-list');

    expect(taskGroup).toHaveClass('ds_task-list-group__section');
    expect(taskGroup.tagName).toEqual('LI');

    expect(taskGroupHeading.tagName).toEqual('H2');
    expect(taskGroupHeading.textContent).toEqual(taskGroupHeadingText);

    // a bit hacky, but list should be last child
    expect(taskGroup.children[taskGroup.children.length - 1]).toEqual(innerTaskList);
});

test('task group with intro text', () => {
    const taskGroupIntroText = 'This information will be used to check what additional benefits you may be able to apply for.';

    render(
        <TaskGroup title="Provide your health details" intro={taskGroupIntroText}>
            <Task
                id={tasks[0].id}
                statusText={tasks[0].statusText}
                title={tasks[0].title}
            >
                Tell us about your conditions, symptoms and any sensory issues you have.
            </Task>
            <Task
                id={tasks[1].id}
                statusText={tasks[1].statusText}
                title={tasks[1].title}
            >
                Tell us about any medication you need.
            </Task>
            <Task
                id={tasks[2].id}
                statusText={tasks[2].statusText}
                title={tasks[2].title}
            >
                Share any supporting documents and provide details of people we can talk to about you.
            </Task>
        </TaskGroup>
    );

    const taskGroup = document.querySelector('.ds_task-list-group__section');
    const taskGroupHeading = taskGroup?.querySelector('.ds_task-list-heading');
    const taskGroupIntro = taskGroup?.querySelector('.ds_task-list-intro');

    expect(taskGroupIntro?.textContent).toEqual(taskGroupIntroText);
    expect(taskGroupIntro?.previousSibling).toEqual(taskGroupHeading);
});

test('task list counts completed items from all groups for its status text and the first incomplete section wraps to the next group sensibly', () => {
    render(
        <TaskList>
            <TaskGroup title="Provide your health details">
                <Task
                    id={tasks[0].id}
                    statusText={tasks[0].statusText}
                    title={tasks[0].title}
                    isComplete
                >
                    Tell us about your conditions, symptoms and any sensory issues you have.
                </Task>
                <Task
                    id={tasks[1].id}
                    statusText={tasks[1].statusText}
                    title={tasks[1].title}
                    isComplete
                >
                    Tell us about any medication you need.
                </Task>
                <Task
                    id={tasks[2].id}
                    statusText={tasks[2].statusText}
                    title={tasks[2].title}
                    isComplete
                >
                    Share any supporting documents and provide details of people we can talk to about you.
                </Task>
            </TaskGroup>
            <TaskGroup title="Provide your health details">
                <Task
                    id={tasks[0].id + '2'}
                    statusText={tasks[0].statusText}
                    title={tasks[0].title}
                >
                    Tell us about your conditions, symptoms and any sensory issues you have.
                </Task>
                <Task
                    id={tasks[1].id + '2'}
                    statusText={tasks[1].statusText}
                    title={tasks[1].title}
                >
                    Tell us about any medication you need.
                </Task>
                <Task
                    id={tasks[2].id + '2'}
                    statusText={tasks[2].statusText}
                    title={tasks[2].title}
                    isComplete
                >
                    Share any supporting documents and provide details of people we can talk to about you.
                </Task>
            </TaskGroup>
        </TaskList>
    );

    const taskListStatus = screen.getByRole('navigation');
    const taskListStatus1 = taskListStatus.children[0];

    const taskListStatusLink = within(taskListStatus).getByRole('link');

    expect(taskListStatus1.textContent).toEqual('You have completed 4 of 6 sections.');
    expect(taskListStatusLink).toHaveAttribute('href', `#${tasks[0].id + '2'}`);
});

test('passing additional props to task list', () => {
    render(
        <TaskList
            title={taskListHeadingText}
            data-test="foo"
        />
    );

    const taskList = screen.getByRole('list');
    const taskListWrapper = taskList.parentNode;
    expect(taskListWrapper?.dataset.test).toEqual('foo');
});

test('passing additional props to task group', () => {
    render(
        <TaskGroup data-test="foo">
        </TaskGroup>
    );

    const taskGroup = document.querySelector('.ds_task-list-group__section');
    expect(taskGroup?.dataset.test).toEqual('foo');
});

test('passing additional props to task', () => {
    render(
        <Task data-test="foo">
        </Task>
    );

    const task = document.querySelector('.ds_task-list__task');
    expect(task?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes to task list', () => {
    render(
        <TaskList
            title={taskListHeadingText}
            className="foo"
        />
    );

    const taskList = screen.getByRole('list');
    const taskListWrapper = taskList.parentNode;
    expect(taskListWrapper).toHaveClass('foo');
});

test('passing additional CSS classes to task group', () => {
    render(
        <TaskGroup className="foo">
        </TaskGroup>
    );

    const taskGroup = document.querySelector('.ds_task-list-group__section');
    expect(taskGroup).toHaveClass('foo', 'ds_task-list-group__section');
});

test('passing additional CSS classes to task', () => {
    render(
        <Task className="foo">
        </Task>
    );

    const task = document.querySelector('.ds_task-list__task');
    expect(task).toHaveClass('foo', 'ds_task-list__task');
});
