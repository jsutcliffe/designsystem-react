'use client';

// "OFFICIAL" COMPONENTS

import Accordion, { AccordionItem } from './components/accordion/accordion';
import AspectBox from './components/aspect-box/aspect-box';
//// import Autocomplete from './components/autocomplete/autocomplete'; // refactored to be a version of SiteSearch
import BackToTop from './components/back-to-top/back-to-top';
import Breadcrumbs, { Breadcrumb } from './components/breadcrumbs/breadcrumbs';
import Button from './components/button/button';
//// character count: DONE as part of text input. To be generalised with textarea.
import Checkbox, { CheckboxGroup } from './components/checkbox/checkbox';
import ConfirmationMessage from './components/confirmation-message/confirmation-message';
// contact details
// cookie banner
import DatePicker from './components/date-picker/date-picker';
import Details from './components/details/details';
import ErrorMessage from './components/error-message/error-message';
// error summary
// feature header
// file download
// hide this page
import InsetText from './components/inset-text/inset-text';
import Metadata, { MetadataItem } from './components/page-metadata/page-metadata';
import NotificationBanner from './components/notification-banner/notification-banner';
import NotificationPanel from './components/notification-panel/notification-panel';
import PageHeader from './components/page-header/page-header';
// pagination
import PhaseBanner from './components/phase-banner/phase-banner';
import Question from './components/question/question';
import Radio, { RadioGroup } from './components/radio/radio';
import Select, { Option } from './components/select/select';
import SequentialNavigation, { NextLink, PrevLink } from './components/sequential-navigation/sequential-navigation';
import SideNavigation, { SideNavItems, SideNavLink } from './components/side-navigation/side-navigation';
// site footer
// site header - incl mobile nav menu
import SiteNavigation, { SiteNavLink } from './components/site-navigation/site-navigation';
import SiteSearch from './components/site-search/site-search';
import SkipLinks, { SkipLink } from './components/skip-links/skip-links';
// summary list
// table
// tabs
import Tag from './components/tag/tag';
import Textarea from './components/textarea/textarea';
import TextInput from './components/text-input/text-input';
import WarningText from './components/warning-text/warning-text';

// SUPPORTING COMPONENTS

import ScreenReaderText from './components/common/screen-reader-text';

// UNPUBLISHED COMPONENTS

// article aside
// back link
// card
// category item
// category list
// content label
import ContentsNav, { ContentsLink } from './components/contents-nav/contents-nav';
import Icon from './components/common/icon';
// link item (basically category item?)
// link list (found in a page block on dynamic issue hub)
// search controls
// search result
// search results
// site branding
// sort options
// step navigation (enhanced accordion)
import TaskList, { Task, TaskGroup } from './components/task-list/task-list';
//// task list group DONE as part of task list
//// currency: DONE as part of text input
// field group
// label (do we need a JSX label?)
// prefilled value list (part of summary list)
//// reveal content: deprecated

// BASE STYLES

// leader
// wrapper

import Configuration from './components/configuration';
import Example from './components/example';

// Design System fixes we might want to make:
// todo: exclusive checkbox failure when there are multiple exclusives

// JSX/React queries/fixes
// todo: do we need event listeners (e.g. focus/blur/click/etc) on interactive elements?

// site fixes
// todo: use a copy of the DS CSS from node_modules, not a checked-in clone


const suggestionMappingFunction = function (suggestionsObj) {
    const responseObj = JSON.parse(suggestionsObj.response).map(suggestionsObj => ({
        key: '',
        displayText: suggestionsObj,
        weight: '',
        type: '',
        category: ''
    }));
    const filteredResults = responseObj.filter(item => (item.displayText.toLowerCase().indexOf(document.getElementById('site-search').value.toLowerCase()) > -1));

    return filteredResults.slice(0,6);
}

export default function Home() {
    return (
        <main className="ds_wrapper" id="main-content">

            <PageHeader
                title="Design System JSX components"
            >
                <Metadata>
                    <MetadataItem name="Last updated">09/08/2024</MetadataItem>
                </Metadata>
            </PageHeader>

            <ContentsNav label="Sections in this page">
                <ContentsLink href="#section-accordion">Accordion</ContentsLink>
                <ContentsLink href="#section-aspect-box">Aspect box</ContentsLink>
                <ContentsLink href="#section-back-to-top">Back to top</ContentsLink>
                <ContentsLink href="#section-breadcrumbs">Breadcrumbs</ContentsLink>
                <ContentsLink href="#section-button">Button</ContentsLink>
                <ContentsLink href="#section-checkbox">Checkbox</ContentsLink>
                <ContentsLink href="#section-confirmation-message">Confirmation message</ContentsLink>
                <ContentsLink href="#section-contents-nav">Contents nav</ContentsLink>
                <ContentsLink href="#section-date-picker">Date picker</ContentsLink>
                <ContentsLink href="#section-details">Details</ContentsLink>
                <ContentsLink href="#section-error-message">Error message</ContentsLink>
                {/* <ContentsLink href="#section-hint-text">Hint text</ContentsLink> */}
                {/* <ContentsLink href="#section-icon">Icon</ContentsLink> */}
                <ContentsLink href="#section-inset-text">Inset text</ContentsLink>
                <ContentsLink href="#section-notification-banner">Notification banner</ContentsLink>
                <ContentsLink href="#section-notification-panel">Notification panel</ContentsLink>
                <ContentsLink href="#section-page-header">Page header</ContentsLink>
                <ContentsLink href="#section-page-metadata">Page metadata</ContentsLink>
                <ContentsLink href="#section-phase-banner">Phase banner</ContentsLink>
                <ContentsLink href="#section-question">Question</ContentsLink>
                <ContentsLink href="#section-radio">Radio button</ContentsLink>
                {/* <ContentsLink href="#section-screen-reader-text">Screen reader text</ContentsLink> */}
                <ContentsLink href="#section-select">Select (dropdown)</ContentsLink>
                <ContentsLink href="#section-sequential-navigation">Sequential navigation</ContentsLink>
                <ContentsLink href="#section-side-navigation">Side navigation</ContentsLink>
                <ContentsLink href="#section-site-navigation">Site navigation</ContentsLink>
                <ContentsLink href="#section-site-search">Site search</ContentsLink>
                <ContentsLink href="#section-skip-links">Skip links</ContentsLink>
                <ContentsLink href="#section-tag">Tag</ContentsLink>
                <ContentsLink href="#section-task-list">Task list</ContentsLink>
                <ContentsLink href="#section-text-input">Text input</ContentsLink>
                <ContentsLink href="#section-textarea">Textarea</ContentsLink>
                <ContentsLink href="#section-tag">Tag</ContentsLink>
            </ContentsNav>

            <h2 className="dsjsx_example-title" id="section-accordion">Accordion</h2>

            <Example>
                <Accordion id="accordion-example">
                    <AccordionItem id="accordion-1" title="Healthcare for veterans">
                        <p>Veterans are entitled to the same healthcare as any citizen. And there
                            are health care options and support available specifically for veterans.</p>
                        <p>If you have a health condition that’s related to your service, you’re
                            entitled to priority treatment based on clinical need.</p>
                    </AccordionItem>
                    <AccordionItem open id="accordion-2" title="Employability for veterans">
                        <p>
                            Veterans are entitled to the same healthcare as any citizen. And there
                            are health care options and support available specifically for veterans.
                        </p>
                        <p>
                            If you have a health condition that’s related to your service, you’re
                            entitled to priority treatment based on clinical need.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="accordion-3" title="Housing for veterans">
                        <p>
                            Veterans are entitled to the same healthcare as any citizen. And there
                            are health care options and support available specifically for veterans.
                        </p>
                        <p>
                            If you have a health condition that’s related to your service, you’re
                            entitled to priority treatment based on clinical need.
                        </p>
                    </AccordionItem>
                </Accordion>
            </Example>

            <Configuration componentName="Accordion">
                <p>Accordion components' <code>AccordionItem</code> children can use the following prop:</p>
                <dl>
                    <dt><code>open</code></dt>
                    <dd>Makes the accordion item display in an open state on page load.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-aspect-box">Aspect box</h2>

            <Example>
                <AspectBox>
                    <img className="ds_aspect-box__inner" src="./highland-cow.jpg" alt="" />
                </AspectBox>
            </Example>

            <Example>
                <AspectBox ratio="1:1">
                    <img className="ds_aspect-box__inner" src="./highland-cow.jpg" alt="" />
                </AspectBox>
            </Example>

            <Configuration componentName="Aspect box">
                <p>Aspect box components can use the following prop:</p>
                <dl>
                    <dt><code>ratio</code></dt>
                    <dd>Aspect ratio to use. Supported values are:
                        <ul>
                            <li><code>1:1</code> (square)</li>
                            <li><code>4:3</code> (standard fullscreen)</li>
                            <li><strong><code>16:9</code> (standard widescreen) (default)</strong></li>
                            <li><code>21:9</code> (anamorphic widescreen)</li>
                        </ul>
                    </dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-back-to-top">Back to top</h2>

            <Example nodisplay>
                <BackToTop />
            </Example>

            <h2 className="dsjsx_example-title" id="section-breadcrumbs">Breadcrumbs</h2>

            <Example>
                <Breadcrumbs>
                    <Breadcrumb title="Home" href="#home" />
                    <Breadcrumb title="Justice and the law" href="#justice-and-the-law" />
                    <Breadcrumb title="Your rights and the law" href="#your-rights-and-the-law" />
                    <Breadcrumb title="Data sharing of personal information" />
                </Breadcrumbs>
            </Example>

            <Configuration componentName="Breadcrumbs">
                <p>Omit the <code>href</code> prop from the last breadcrumb item to make it display without a link. This is the preferred way of presenting breadcrumbs in the Design System.</p>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-buttons">Buttons</h2>

            <Example title="Button styles">
                <Button>Primary button</Button><br />
                <Button style="secondary">Secondary button</Button><br />
                <Button style="cancel">Cancel button</Button><br />
                <Button disabled>Disabled button</Button>
            </Example>

            <Example title="Button sizes">
                <Button>Fluid-width button</Button><br />
                <Button width="fixed">Fixed-width button</Button><br />
                <Button width="max">Max-width button</Button><br />
                <Button small>Small button</Button>
            </Example>

            <Example title="Buttons with icons">
                <Button hasIcon>
                    Button with icon
                    <Icon icon='chevron_right' />
                </Button><br />
                <Button hasIcon iconLeft>
                    Button with left icon
                    <Icon icon='chevron_left' />
                </Button><br />
                <Button>
                    <ScreenReaderText>Search</ScreenReaderText>
                    <Icon icon='search' />
                </Button>
            </Example>

            <Example title="Link buttons and button links">
                <Button href="#bananas">Link styled as button</Button><br />
                <Button styleAsLink>Button styled as link</Button>
            </Example>

            <Configuration componentName="Button">
                <p>Button components can use the following props:</p>
                <dl>
                    <dt><code>hasIcon</code></dt>
                    <dd>Whether the button should include space for an icon. Boolean.</dd>
                    <dt><code>iconLeft</code></dt>
                    <dd>Whether a button's icon is aligned to the left (default is aligned to the right). Boolean.</dd>
                    <dt><code>href</code></dt>
                    <dd><code>href</code> attribute to use on the button. If a href is specified, the button will use the HTML 'a' element.</dd>
                    <dt><code>small</code></dt>
                    <dd>Whether to use the 'small' variant of a button. Boolean.</dd>
                    <dt><code>style</code></dt>
                    <dd>The button style to use. Options are:
                        <ul>
                            <li><strong><code>primary</code> (default)</strong></li>
                            <li><code>secondary</code> </li>
                            <li><code>cancel</code> </li>
                        </ul>
                    </dd>
                    <dt><code>styleAsLink</code></dt>
                    <dd>Whether to make the button look like a link. Boolean.</dd>
                    <dt><code>type</code></dt>
                    <dd>The value for the <code>type</code> attribute of the button. Default is 'button' but sometimes 'submit' might be more appropriate.</dd>
                    <dt><code>width</code></dt>
                    <dd>The button width to use. Options are:
                        <ul>
                            <li><strong><code>fluid</code> (default)</strong></li>
                            <li><code>fixed</code> </li>
                            <li><code>max</code> </li>
                        </ul>
                    </dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-checkbox">Checkbox</h2>

            <Example>
                <CheckboxGroup>
                    <Checkbox checked label="Universal Credit" id="universalcredit" />
                    <Checkbox label="Pension Credit" id="pensioncredit" />
                    <Checkbox label="Income-based Job Seeker's Allowance" id="jsa" />
                    <Checkbox label="No, I do not receive any of these benefits" id="noneCheckbox" exclusive />
                </CheckboxGroup>
            </Example>

            <Configuration componentName="Checkbox">
                <p>Checkbox components can use the following props:</p>
                <dl>
                    <dt><code>checked</code></dt>
                    <dd>Whether the checkbox should be checked on load.</dd>
                    <dt><code>hintText</code></dt>
                    <dd>Text to use for a checkbox's hint text.</dd>
                    <dt><code>id</code></dt>
                    <dd>Value to use for the checkbox's <code>id</code> attribute.</dd>
                    <dt><code>exclusive</code></dt>
                    <dd>Whether this checkbox is an an exclusive checkbox (a 'none' option). Boolean.</dd>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the checkbox's associated label.</dd>
                    <dt><code>name</code></dt>
                    <dd>Value to use for the checkbox's <code>name</code> attribute. Will fall back to using the <code>id</code> prop if not provided.</dd>
                    <dt><code>small</code></dt>
                    <dd>Whether to use the 'small' checkbox variant. Boolean.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-confirmation-message">Confirmation message</h2>

            <Example>
                <ConfirmationMessage title="Landlord added successfully">
                    <p>You have added the landlord <strong>John Smith</strong> to the application.</p>
                </ConfirmationMessage>
            </Example>

            <Configuration componentName="Confirmation message">
                <p>Confirmation message components can use the following prop:</p>
                <dl>
                    <dt><code>headerLevel</code></dt>
                    <dd>The header level for the confirmation message's title. The default is H3. Changing the heading level does not alter the confirmation message's appearance.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-contents-nav">Contents nav</h2>

            <Example>
                <ContentsNav label="Pages in this guide">
                    <ContentsLink current>Apply for Blue Badge</ContentsLink>
                    <ContentsLink href="#2">Eligibility</ContentsLink>
                    <ContentsLink href="#3">Using your Blue Badge</ContentsLink>
                    <ContentsLink href="#4">Report a lost, stolen or misuesd Blue Badge</ContentsLink>
                    <ContentsLink href="#5">Changing or handing back a Blue Badge</ContentsLink>
                </ContentsNav>
            </Example>

            <Configuration componentName="Contents nav">
                <p>Contents nav components can use the following props:</p>
                <dl>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the content nav's <code>aria-label</code> property, which is required for accessibility.</dd>
                    <dt><code>title</code></dt>
                    <dd>The title for the contents nav. Default is 'Contents'.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-date-picker">Date picker</h2>

            <Example>
                <DatePicker
                    id="date-picker"
                    label="Date of birth"
                    value="12/08/2024"
                />
            </Example>

            <Example title="Date picker with date restrictions">
                <DatePicker
                    disabledDates="06/07/2024 07/07/2024 13/07/2024 14/07/2024 20/07/2024 21/07/2024 27/07/2024 28/07/2024"
                    hintText="Use dd/mm/yyyy format. For example, 31/01/2023."
                    id="date-picker-restrictions"
                    label="Date of birth"
                    maxDate="26/07/2024"
                />
            </Example>

            <Example title="Date picker with separate fields">
                <DatePicker
                    id="date-picker-separate"
                    multiple
                    value="12/08/2024"
                />
            </Example>

            <Configuration componentName="Date picker">
                <p>Date picker components can use the following props:</p>
                <dl>
                    <dt><code>disabledDates</code></dt>
                    <dd>Space-separated list of dates to disable in the date picker. Uses the format <code>dd/mm/yyyy</code>.</dd>
                    <dt><code>error</code></dt>
                    <dd>Whether the date picker is in an error state. Boolean.</dd>
                    <dt><code>errorMessage</code></dt>
                    <dd>Text to use for an error message.</dd>
                    <dt><code>hintText</code></dt>
                    <dd>Text to use for a date picker hint text.</dd>
                    <dt><code>id</code></dt>
                    <dd>Value to use for the <code>id</code> attribute of the date picker's <code>input</code> element. If the date picker is using multiple inputs, each field starts with the ID. For example, <code>myId-day</code>, <code>myId-month</code>, <code>myId-year</code>.</dd>
                    <dt><code>iconPath</code></dt>
                    <dd>Path to the icon file.</dd>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the date picker's associated label.</dd>
                    <dt><code>maxDate</code></dt>
                    <dd>Latest selectable date in the date picker. Uses the format <code>dd/mm/yyyy</code>.</dd>
                    <dt><code>minDate</code></dt>
                    <dd>Earliest selectable date in the date picker. Uses the format <code>dd/mm/yyyy</code>.</dd>
                    <dt><code>multiple</code></dt>
                    <dd>Whether to display the day, month and year as separate fields. Boolean.</dd>
                    <dt><code>name</code></dt>
                    <dd>Value to use for the <code>name</code> attribute of the date picker. The behaviour of this on date pickers with multiple input fields is the same as the behaviour of the <code>id</code> prop.</dd>
                    <dt><code>value</code></dt>
                    <dd>The default value of the date picker.</dd>
                    <dt><code>width</code></dt>
                    <dd>The width of the input element. See <code>TextInput</code> for the available options. Default is <code>fixed-10</code>.</dd>
                </dl>

            </Configuration>

            <h2 className="dsjsx_example-title" id="section-details">Details</h2>

            <Example>
                <Details summary="I can't sign in">
                    <p>Contact the design system team if you cannot sign in.</p>

                    <p>Email <a href="mailto:designsystem@gov.scot">designsystem@gov.scot</a>.</p>
                    <p>Or phone 0000 123 4567<br/>
                        Monday to Friday, 9am to 5pm</p>
                </Details>
            </Example>

            <Configuration componentName="Details">
                <p>Details components can use the following prop:</p>
                <dl>
                    <dt><code>summary</code></dt>
                    <dd>Text to use for the details component's 'summary' element.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-inset-text">Inset text</h2>

            <Example>
                <InsetText>
                    You may be able to <a href="#inset">apply for free school meals</a> at the same time as you apply for the clothing grant.
                </InsetText>
            </Example>

            <h2 className="dsjsx_example-title" id="section-notification-banner">Notification banner</h2>

            <Example>
                <NotificationBanner>
                    <p>We need to tell you about <a href="#notification">something</a></p>
                </NotificationBanner>
            </Example>

            <Example title="Notification banner with icon and close">
                <NotificationBanner icon iconColour iconInverse close>
                    <p>We need to tell you about <a href="#notification">something</a></p>
                </NotificationBanner>
            </Example>

            <Configuration componentName="Notification banner">
                <p>Notification banner components can use the following props:</p>
                <dl>
                    <dt><code>close</code></dt>
                    <dd>Shows the 'close' button on the notification banner. Boolean.</dd>
                    <dt><code>icon</code></dt>
                    <dd>Shows the 'high priority' icon on the notification banner. Boolean.</dd>
                    <dt><code>iconColour</code></dt>
                    <dd>Makes the icon display in the alternative colour scheme (yellow). Boolean.</dd>
                    <dt><code>iconInverse</code></dt>
                    <dd>Makes the icon be inverted against a circle background. Boolean.</dd>
                    <dt><code>title</code></dt>
                    <dd>A hidden title for the notification banner, useful for screen reader users. Default is 'Information'.</dd>
                </dl>

                <p>Both <code>iconColour</code> and <code>iconInverse</code> can be used together. This combines the effects of both modifiers.</p>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-notification-panel">Notification panel</h2>

            <Example>
                <NotificationPanel title="Thank you">
                    <p>Your Saltire Scholarship Application form has been successfully submitted.</p>
                </NotificationPanel>
            </Example>

            <Configuration componentName="Notification panel">
                <p>Notification panel components can use the following prop:</p>
                <dl>
                    <dt><code>headerLevel</code></dt>
                    <dd>The header level for the notification panel's message's title. The default is H1. Changing the heading level does not alter the notification panel's appearance.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-page-header">Page header</h2>

            <Example>
                <PageHeader
                    label="Guide"
                    title="Apply for or renew a disabled parking permit"
                >
                    <Metadata>
                        <MetadataItem name="Last updated">21/04/2020</MetadataItem>
                        <MetadataItem name="Directorate">
                            <a href="#one">Equality, Inclusion and Human Rights Directorate</a>
                        </MetadataItem>
                        <MetadataItem name="Part of">
                            <a href="#two">Equality and rights</a>,
                            <a href="#three">Law and order</a>
                        </MetadataItem>
                    </Metadata>
                </PageHeader>
            </Example>

            <Configuration componentName="Page header">
                <p>Page header components can use the following props:</p>
                <dl>
                    <dt><code>label</code></dt>
                    <dd>Text to use for a label shown above the H1 element. No label is displayed if there is no <code>label</code> prop provided.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text to use for the page header's H1 element.</dd>
                </dl>
                <p>Page header components can show metadata below the H1 element. Do this by including a <a href="#section-page-metadata">page metadata</a> component as a child.</p>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-page-metadata">Page metadata</h2>

            <Example>
                <Metadata>
                    <MetadataItem name="Last updated">21/04/2020</MetadataItem>
                    <MetadataItem name="Directorate">
                        <a href="#one">Equality, Inclusion and Human Rights Directorate</a>
                    </MetadataItem>
                    <MetadataItem name="Part of">
                        <a href="#two">Equality and rights</a>,
                        <a href="#three">Law and order</a>
                    </MetadataItem>
                </Metadata>
            </Example>

            <Example title="Inline metadata">
                <Metadata inline>
                    <MetadataItem name="Content type">Publication</MetadataItem>
                    <MetadataItem name="Last updated">21/04/2020</MetadataItem>
                </Metadata>
            </Example>

            <Configuration componentName="Page metadata">
                <p>Page metadata components can use the following prop:</p>
                <dl>
                    <dt><code>inline</code></dt>
                    <dd>Makes the page metadata use the truncated 'inline' display. Boolean.</dd>
                </dl>
            </Configuration>
            <Configuration componentName="Medatata item">
                <p>Page metadata components can have any number of <code>MetadataItem</code> children. Metadata item components can use the following props:</p>
                <dl>
                    <dt><code>name</code></dt>
                    <dd>The name or key of the metadata item. Boolean.</dd>
                </dl>
                <p>The value of the metadata item is provided by its children.</p>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-phase-banner">Phase banner</h2>

            <Example>
                <PhaseBanner phaseName="banana">
                    This is a new service. Your <a href="#feedback">feedback</a> will help us to improve it.
                </PhaseBanner>
            </Example>

            <Configuration componentName="Phase banner">
                <p>Phase banner components can use the following prop:</p>
                <dl>
                    <dt><code>phaseName</code></dt>
                    <dd>The text for the phase banner's tag component.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-question">Question</h2>

            <Example title="Basic question">
                <Question
                >
                    <TextInput
                        id="text-input-question"
                        label="First name"
                    />
                </Question>
            </Example>

            <Example title="Question with error">
                <Question
                    error
                >
                    <TextInput
                        error="true"
                        errorMessage="This is a required field"
                        id="text-input-question-error"
                        label="First name"
                    />
                </Question>
            </Example>

            <Example title="Fieldset question">
                <Question
                    hintText="Select all that apply."
                    legend="Do you receive any of these benefits"
                    tagName="fieldset"
                >
                    <CheckboxGroup>
                        <Checkbox label="Universal Credit" id="universalcredit-question" />
                        <Checkbox label="Pension Credit" id="pensioncredit-question" />
                        <Checkbox label="Income-based Job Seeker's Allowance" id="jsa-question" />
                        <Checkbox label="No, I do not receive any of these benefits" id="noneCheckbox-question" exclusive />
                    </CheckboxGroup>
                </Question>
            </Example>

            <Example title="Fieldset question with error">
                <Question
                    error="true"
                    errorMessage="You must select at least one option"
                    hintText="Select all that apply."
                    legend="Do you receive any of these benefits"
                    tagName="fieldset"
                >
                    <CheckboxGroup>
                        <Checkbox label="Universal Credit" id="universalcredit-question-error" />
                        <Checkbox label="Pension Credit" id="pensioncredit-question-error" />
                        <Checkbox label="Income-based Job Seeker's Allowance" id="jsa-question-error" />
                        <Checkbox label="No, I do not receive any of these benefits" id="noneCheckbox-question-error" exclusive />
                    </CheckboxGroup>
                </Question>
            </Example>

            <Configuration componentName="Question">
                <p>Question components can use the following props:</p>
                <dl>
                    <dt><code>error</code></dt>
                    <dd>Whether the question is in an error state. Boolean.</dd>
                    <dt><code>errorMessage</code></dt>
                    <dd>Text for a question's <code>ErrorMessage</code> component. For use when the question uses a fieldset.</dd>
                    <dt><code>hintText</code></dt>
                    <dd>Text for a question's <code>HintText</code> component. For use when the question uses a fieldset.</dd>
                    <dt><code>legend</code></dt>
                    <dd>Text for a question's <code>legend</code> element. Use when the question has a <code>tagName</code> of 'fieldset'.</dd>
                    <dt><code>tagName</code></dt>
                    <dd>HTML tag name to use for the question. Default is <code>div</code>, but <code>fieldset</code> will sometimes be more appropriate.</dd>
                </dl>

                <p>Questions are meaningless without one or more form fields, which should be provided as children.</p>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-radio">Radio button</h2>

            <Example>
                <RadioGroup name="propertyType">
                    <Radio checked label="Flat" id="flat-radio" />
                    <Radio label="Bungalow" id="bungalow-radio" />
                    <Radio label="Cottage" id="cottage-radio" />
                    <Radio label="Terraced house" id="terraced-radio" />
                    <Radio label="Semi-detached house" id="semi-radio" />
                    <Radio label="Detached house" id="detached-radio" />
                </RadioGroup>
            </Example>

            <Example title="Radio buttons with hint text">
                <RadioGroup name="propertyType">
                    <Radio label="Advance" id="advance-radio" hintText="This means you're paid for the period coming up, e.g. the month ahead" />
                    <Radio label="Arrears" id="arrears-radio" hintText="This means you're paid for the time that's just passed, e.g. for the last month" />
                </RadioGroup>
            </Example>

            <Configuration componentName="Radio button">
                <p>Radio button components can use the following props:</p>
                <dl>
                    <dt><code>checked</code></dt>
                    <dd>Whether the radio should be selected on load.</dd>
                    <dt><code>hintText</code></dt>
                    <dd>Text to use for a radio button's hint text.</dd>
                    <dt><code>id</code></dt>
                    <dd>Value to use for the radio button's <code>id</code> attribute.</dd>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the radio button's associated label.</dd>
                    <dt><code>name</code></dt>
                    <dd>Value to use for the radio button's <code>name</code> attribute. It is better to set a name on a parent <code>RadioGroup</code> element instead.</dd>
                    <dt><code>small</code></dt>
                    <dd>Whether to use the 'small' radio button variant. Boolean.</dd>
                </dl>
            </Configuration>
            <Configuration componentName="Radio group">
                <p>Use a <code>RadioGroup</code> component to group radio buttons. Radio groups can use the following prop:</p>
                <dl>
                    <dt><code>inline</code></dt>
                    <dd>Whether to display the radio buttons in the group inline instead of stacked. Boolean.</dd>
                    <dt><code>name</code></dt>
                    <dd>Value for the <code>name</code> attribute on child <code>Radio</code> components.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-select">Select (dropdown)</h2>

            <Example>
                <Select
                    id="select-component"
                    label="Choose a component"
                    placeholder="Choose a component"
                    defaultValue="button"
                >
                    <Option value="button" text="Accordion"/>
                    <Option value="breadcrumbs" text="Breadcrumbs"/>
                    <Option value="button" text="Button"/>
                </Select>
            </Example>

            <Configuration componentName="Select">
                <p>Select components can use the following props:</p>
                <dl>
                    <dt><code>defaultValue</code></dt>
                    <dd>The ID of the option that you want selected on page load.</dd>
                    <dt><code>error</code></dt>
                    <dd>Whether the field is in an error state. Boolean.</dd>
                    <dt><code>errorMessage</code></dt>
                    <dd>Text to use for an error message.</dd>
                    <dt><code>hintText</code></dt>
                    <dd>Text to use for a select's hint text.</dd>
                    <dt><code>id</code></dt>
                    <dd>Value to use for the select's <code>id</code> attribute.</dd>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the select's associated label.</dd>
                    <dt><code>name</code></dt>
                    <dd>Value to use for the select's <code>name</code> attribute. Will fall back to using the <code>id</code> prop if not provided.</dd>
                    <dt><code>placeholder</code></dt>
                    <dd>Text to use for an optional unselected first option.</dd>
                    <dt><code>width</code></dt>
                    <dd>The width to use for the <code>select</code> element. The options are the same as for <code>TextInput</code>.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Option">
                <code>Select</code> components can have any number of <code>Option</code> children. Option components can use the following props:
                <dl>
                    <dt><code>text</code></dt>
                    <dd>The text of the <code>option</code> element.</dd>
                    <dt><code>value</code></dt>
                    <dd>The <code>value</code> attribute of the <code>option</code> element.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-sequential-navigation">Sequential navigation</h2>

            <Example>
                <SequentialNavigation>
                    <PrevLink title="Apply for or renew a Blue Badge" href="#prev"/>
                    <NextLink title="Eligibility: who can have one?" href="#next" />
                </SequentialNavigation>
            </Example>

            <Configuration componentName="Sequential navigation">
                <p>Sequential navigation has two child components, <code>PrevLink</code> and <code>NextLink</code>. They both use the following props:</p>
                <dl>
                    <dt><code>href</code></dt>
                    <dd>The destination URL.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text to use for the link text.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-side-navigation">Side navigation</h2>

            <Example>
                <SideNavigation>
                    <SideNavItems>
                        <SideNavLink title="Apples" href="#apples">
                            <SideNavItems>
                                <SideNavLink title="Green apples" href="#green-apples">
                                    <SideNavItems>
                                        <SideNavLink current title="Bramley" href="#bramley" />
                                        <SideNavLink title="Granny Smith" href="#granny-smith" />
                                    </SideNavItems>
                                </SideNavLink>
                                <SideNavLink title="Red apples" href="#red-apples"/>
                            </SideNavItems>
                        </SideNavLink>
                        <SideNavLink title="Bananas" href="#bananas"/>
                        <SideNavLink title="Cherries" href="#cherries"/>
                        <SideNavLink title="Dates" href="#dates" />
                    </SideNavItems>
                </SideNavigation>
            </Example>

            <Configuration componentName="Side navigation usage and">
                <p>Side navigation must have a <code>SideNavItems</code> child.</p>
                <p><code>SideNavItems</code> components can have any number of <code>SideNavLink</code> children.</p>
                <p><code>SideNavLink</code> components can have a <code>SideNavItems</code> child. Use this to display a nested navigation structure.</p>
            </Configuration>

            <Configuration componentName="Side navigation link">
                <p>Side navigation links can use the following props:</p>
                <dl>
                    <dt><code>current</code></dt>
                    <dd>Whether this is the current page. The current page uses a <code>span</code> element and is not a link. Boolean. Default is false.</dd>
                    <dt><code>href</code></dt>
                    <dd>The destination URL.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text to use for the link text.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-site-navigation">Site navigation</h2>

            <Example>
                <SiteNavigation>
                    <SiteNavLink title="About" href="#about"/>
                    <SiteNavLink title="Get started" href="#get-started"/>
                    <SiteNavLink title="Styles" href="#styles"/>
                    <SiteNavLink current title="Components" href="#components"/>
                    <SiteNavLink title="Patterns" href="#patterns"/>
                    <SiteNavLink title="Guidance" href="#guidance"/>
                </SiteNavigation>
            </Example>

            <Configuration componentName="Site navigation link">
                <p>Site navigation contains any number of <code>SiteNavLink</code> children. Site nav links can use the following props:</p>
                <dl>
                    <dt><code>current</code></dt>
                    <dd>Whether this is the current page. Boolean. Default is false.</dd>
                    <dt><code>href</code></dt>
                    <dd>The destination URL.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text to use for the link text.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-site-search">Site search</h2>

            <Example>
                <SiteSearch
                    autocompleteEndpoint="./autocomplete-dummy-data.json#"
                    autocompleteSuggestionMappingFunction={suggestionMappingFunction}
                />
            </Example>

            <Configuration componentName="Site search">
                <p>Site search can use the following props:</p>
                <dl>
                    <dt><code>action</code></dt>
                    <dd>The value of the search form's <code>action</code> atttribute. Default is <code>/search</code>.</dd>
                    <dt><code>id</code></dt>
                    <dd>The value of the search input field's <code>id</code> attribute. Default is <code>site-search</code></dd>
                    <dt><code>method</code></dt>
                    <dd>The form method to use. Default is <code>GET</code>.</dd>
                    <dt><code>name</code></dt>
                    <dd>The value of the search field's <code>name</code> attribute. Default is <code>q</code>.</dd>
                    <dt><code>placeholder</code></dt>
                    <dd>The value of the search field's <code>placeholder</code> attribute. Default is <code>Search</code>.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Autocomplete">
                <p>Autocomplete can be configured on a site search component by adding the following props:</p>
                <dl>
                    <dt><code>autocompleteEndpoint</code></dt>
                    <dd>The endpoint used by the autocomplete.</dd>
                    <dt><code>autocompleteSuggestionMappingFunction</code></dt>
                    <dd>A JavaScript function that maps the results from the endpoint into the format that the Design System Autocomplete component expects.</dd>
                    <dt><code>minLength</code></dt>
                    <dd>The number of characters that need to be entered before requests are sent to the endpoint. Default is <code>3</code>.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-skip-links">Skip links</h2>

            <Example nodisplay>
                <SkipLinks id="banana">
                    <SkipLink href="#foo" title="bar" />
                </SkipLinks>
            </Example>

            <Configuration componentName="Skip links">
                <p>Skip links components can use the following prop:</p>
                <dl>
                    <dt><code>id</code></dt>
                    <dd>The <code>id</code> attribute of the 'main content' element to link to.</dd>
                </dl>

                <p><code>SkipLink</code> children can use the following props:</p>
                <dl>
                    <dt><code>href</code></dt>
                    <dd>The destination fragment identifier.</dd>
                    <dt><code>title</code></dt>
                    <dd>Text to use for the link text.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-tag">Tag</h2>

            <Example>
                <Tag colour="red" title="Beta"></Tag>
            </Example>

            <Configuration componentName="Tag">
                <p>Tag components can use the following props:</p>
                <dl>
                    <dt><code>className</code></dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>colour</code></dt>
                    <dd>The tag colour to use.</dd>
                    <dt><code>title</code></dt>
                    <dd>The text content of the tag.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="task-list">Task list</h2>

            <Example>
                <TaskList
                    title="Application incomplete"
                >
                    <Task
                        href="#conditions"
                        id="task-conditions"
                        isComplete
                        statusText="Completed"
                        title="Conditions"
                    >
                        Tell us about your conditions, symptoms and any sensory issues you have.
                    </Task>
                    <Task
                        href="#in-progress"
                        id="task-medications"
                        statusText="In progress"
                        title="Medications"
                    >
                        Tell us about any medication you need.
                    </Task>
                    <Task
                        id="task-contacts"
                        statusText="Cannot start yet"
                        title="Contacts and supporting information"
                    >
                        Share any supporting documents and provide details of people we can talk to about you.
                    </Task>
                </TaskList>
            </Example>

            <Example title="Task list with grouped tasks">
                <TaskList
                    title="Application incomplete"
                >
                    <TaskGroup
                        title="Provide your health details"
                    >
                        <Task
                            href="#conditions"
                            id="task-conditions"
                            isComplete
                            statusText="Completed"
                            title="Conditions"
                        >
                            Tell us about your conditions, symptoms and any sensory issues you have.
                        </Task>
                        <Task
                            href="#in-progress"
                            id="task-medications"
                            isComplete
                            statusText="Completed"
                            title="Medications"
                        >
                            Tell us about any medication you need.
                        </Task>
                        <Task
                            href="#contacts"
                            id="task-contacts"
                            isComplete
                            statusText="Completed"
                            title="Contacts and supporting information"
                        >
                            Share any supporting documents and provide details of people we can talk to about you.
                        </Task>
                    </TaskGroup>

                    <TaskGroup
                        title="Tell us about your daily living and mobility circumstances"
                        intro="This information will be used to check what additional benefits you may be able to apply for."
                    >
                        <Task
                            href="#preparing-food"
                            id="task-preparing-food"
                            statusText="In progress"
                            tagColour="grey"
                            title="Preparing food"
                        >
                            Questions about your ability to prepare a simple meal safely and any help you need to do this.
                        </Task>
                        <Task
                            href="#taking-nutrition"
                            id="task-taking-nutrition"
                            statusText="Not started"
                            tagColour="grey"
                            title="Taking nutrition"
                        >
                            Questions about your ability to eat and drink and any help you need to do this.
                        </Task>
                        <Task
                            href="#managing-therapy"
                            id="task-managing-therapy"
                            statusText="Not started"
                            tagColour="grey"
                            title="Managing therapy or monitoring a health condition"
                        >
                            Questions about any help you need to monitor changes in your health condition, take medication or do therapy at home.
                        </Task>
                    </TaskGroup>
                </TaskList>
            </Example>

            <Configuration componentName="Task list">
                <p>Task list components can have either <code>Task</code> or <code>TaskGroup</code> children. Task list components can use the following prop:</p>
                <dl>
                    <dt><code>title</code></dt>
                    <dd>The title of the task list.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Task">
                <p>Task components can use the following props:</p>
                <dl>
                    <dt><code>href</code></dt>
                    <dd>The URL of the page to link to.</dd>
                    <dt><code>id</code></dt>
                    <dd>The value of the task's <code>id</code> attribute.</dd>
                    <dt><code>isComplete</code></dt>
                    <dd>Whether the task is complete. Boolean.</dd>
                    <dt><code>statusText</code></dt>
                    <dd>The text to use for the task's status tag.</dd>
                    <dt><code>tagColour</code></dt>
                    <dd>The colour to use for the task's status tag. Default is <code>grey</code>.</dd>
                    <dt><code>title</code></dt>
                    <dd>The title of the task list.</dd>
                </dl>

                <p>Tasks can have additional content, provided as children of the task component.</p>
            </Configuration>

            <Configuration componentName="Task group">
                <p>Task groups can use the following props:</p>
                <dl>
                    <dt><code>intro</code></dt>
                    <dd>Text to put into an introduction paragraph above the group's tasks.</dd>
                    <dt><code>title</code></dt>
                    <dd>The title of the task group.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-text-input">Text input</h2>

            <Example>
                <TextInput
                    id="text-input"
                    label="First name"
                />
            </Example>

            <Example title="Text input with hint text">
                <TextInput
                    hintText="This is your given name."
                    id="text-input-hint"
                    label="First name"
                />
            </Example>

            <Example title="Text input with associated button">
                <TextInput
                    button
                    id="text-input-button"
                    label="Search"
                >
                    <Button>
                        <ScreenReaderText>Search</ScreenReaderText>
                        <Icon icon='search' />
                    </Button>
                </TextInput>
            </Example>

            <Example title="Text input with character count">
                <TextInput
                    id="text-input-character-count"
                    label="First name"
                    maxlength="20"
                    value="Joe Bloggs"
                    width="fixed-20"
                />
            </Example>

            <Example title="Text input with currency">
                <TextInput
                    currency
                    id="text-input-currency"
                    label="Price per month"
                    width="fluid-one-third"
                />
            </Example>

            <Configuration componentName="Text input">
                <p>Text input components can use the following props:</p>
                <dl>
                    <dt><code>className</code></dt>
                    <dd>A CSS class name to pass to the component.</dd>
                    <dt><code>error</code></dt>
                    <dd>Whether the field is in an error state. Boolean.</dd>
                    <dt><code>errorMessage</code></dt>
                    <dd>Text to use for an error message.</dd>
                    <dt><code>hintText</code></dt>
                    <dd>Text to use for a text input's hint text.</dd>
                    <dt><code>id</code></dt>
                    <dd>Value to use for the <code>id</code> attribute of the <code>input</code> element.</dd>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the text input's associated label.</dd>
                    <dt><code>name</code></dt>
                    <dd>Value to use for the <code>name</code> attribute of the <code>input</code> element.</dd>
                    <dt><code>placeholder</code></dt>
                    <dd>Value to use for the <code>placeholder</code> attribute of the <code>input</code> element.</dd>
                    <dt><code>type</code></dt>
                    <dd>Value to use for the <code>type</code> attribute of the <code>input</code> element. Default is <code>text</code>.</dd>
                    <dt><code>value</code></dt>
                    <dd>The default value of the <code>input</code> element.</dd>
                    <dt><code>width</code></dt>
                    <dd><p>The width to use for the <code>input</code> element. If no width is specified the text input is full-width. Supported values are:</p>
                        <ul>
                            <li><code>fixed-20</code> - 20 characters wide</li>
                            <li><code>fixed-10</code> - 10 characters wide</li>
                            <li><code>fixed-5</code> - 5 characters wide</li>
                            <li><code>fixed-4</code> - 4 characters wide</li>
                            <li><code>fixed-3</code> - 3 characters wide</li>
                            <li><code>fixed-2</code> - 2 characters wide</li>
                            <li><code>fluid-three-quarters</code> - three quarters of the width of the parent container</li>
                            <li><code>fluid-two-thirds</code> - two thirds of the width of the parent container</li>
                            <li><code>fluid-half</code> - half of the width of the parent container</li>
                            <li><code>fluid-one-third</code> - one third of the width of the parent container</li>
                            <li><code>fluid-one-quarter</code> - one quarter of the width of the parent container</li>
                        </ul>
                    </dd>
                </dl>
            </Configuration>

            <Configuration componentName="Text input with button">
                <p>Text inputs with an associated button should have a <code>Button</code> component as a child.</p>
                <p>Add the boolean <code>button</code> prop to the text input for correct display.</p>
            </Configuration>

            <Configuration componentName="Character count">
                <p>Use these additional props for a text input with a character count:</p>
                <dl>
                    <dt><code>countThreshold</code></dt>
                    <dd>Percentage threshold to show the character count at.</dd>
                    <dt><code>maxlength</code></dt>
                    <dd>Maximum number of characters permitted.</dd>
                </dl>
            </Configuration>

            <Configuration componentName="Currency input">
                <p>Use these additional props for a currency text input:</p>
                <dl>
                    <dt><code>currency</code></dt>
                    <dd>Whether the component is a currency field.</dd>
                    <dt><code>currencySymbol</code></dt>
                    <dd>Currency symbol to use. Default is <code>£</code>.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-textarea">Textarea</h2>

            <Example>
                <Textarea
                    id="textarea"
                    label="Description"
                    rows="4"
                />
            </Example>

            <Example title="Textarea with character count">
                <Textarea
                    id="textarea-character-count"
                    label="Description"
                    maxlength="400"
                    rows="4"
                />
            </Example>

            <Configuration componentName="Textarea">
                <p>Textarea components can use the following props:</p>
                <dl>
                    <dt><code>error</code></dt>
                    <dd>Whether the field is in an error state. Boolean.</dd>
                    <dt><code>errorMessage</code></dt>
                    <dd>Text to use for an error message.</dd>
                    <dt><code>hintText</code></dt>
                    <dd>Text to use for a textarea's hint text.</dd>
                    <dt><code>id</code></dt>
                    <dd>Value to use for the <code>id</code> attribute of the <code>textarea</code> element.</dd>
                    <dt><code>label</code></dt>
                    <dd>Text to use for the textarea's associated label.</dd>
                    <dt><code>name</code></dt>
                    <dd>Value to use for the <code>name</code> attribute of the <code>textarea</code> element.</dd>
                    <dt><code>placeholder</code></dt>
                    <dd>Value to use for the <code>placeholder</code> attribute of the <code>textarea</code> element.</dd>
                    <dt><code>rows</code></dt>
                    <dd>Value to use for the <code>rows</code> attribute of the <code>textarea</code> element.</dd>
                    <dt><code>value</code></dt>
                    <dd>The default value of the <code>textarea</code> element.</dd>
                    <dt><code>width</code></dt>
                </dl>
            </Configuration>

            <Configuration componentName="Character count">
                <p>Use these additional props for a textarea with a character count:</p>
                <dl>
                    <dt><code>countThreshold</code></dt>
                    <dd>Percentage threshold to show the character count at.</dd>
                    <dt><code>maxlength</code></dt>
                    <dd>Maximum number of characters permitted.</dd>
                </dl>
            </Configuration>

            <h2 className="dsjsx_example-title" id="section-warning-text">Warning text</h2>

            <Example>
                <WarningText>
                    Call 999 if you or someone else is in immediate danger, or if the crime is in progress.
                </WarningText>
            </Example>
        </main>
    );
}
