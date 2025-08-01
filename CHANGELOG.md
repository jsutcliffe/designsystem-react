# Change log

All notable changes to the Scottish Government "Design System React" repository/package will be documented in this file.

Changes are grouped under the labels: `Added`, `Changed`, `Deprecated`, `Fixed`, 
`Removed` and `Security`.

---

## [0.7.0] 
### Changed
- Change all component file names to Pascal case
- Use uppercase text for const variable names
- Nomenclature: prefer 'heading' over 'header' in variable names when referring to HTML headings (H1-H6)

## [0.6.0] - 2025-07-29
### Added
- Add 'File download' component
- Add 'File icon' component
### Changed
- Reorganise SVG icon components into subfolders

## [0.5.1] - 2025-07-28
### Changed
- 'DisplayName' property of some compound components updated (Metadata.Item, TaskList.Item, TaskList.Group)

## [0.5.0] - 2025-07-28
### Added
- Add 'Tabs' component

## [0.4.0] - 2025-07-23
### Added
- Add 'Abstract notification banner' component
- Add 'Cookie banner' component
- Add 'Table' component
- Add code of conduct
### Changed
- 'Notification banner' refactored to use AbstractNotificationBanner
### Fixed
- Fixed miscellaneous type warnings in unit tests

## [0.3.0] - 2025-07-15
### Added
- Add 'Site header' component/pattern
### Changed
- SiteNavigation: add useRef, to support mobile navigation
- DatePicker: add 'dateSelectCallback' prop

## [0.2.0] - 2025-07-07
### Added
- Add 'Error summary' component

## [0.1.7] - 2025-06-27
### Added
- Add 'Summary card' component
- Add 'Summary list' component

## [0.1.6] - 2025-06-27
### Added
- Add 'Hide this page' component

## [0.1.5] - 2025-06-23
### Added
- Add 'Pagination' component
### Changed
- Icon: refactor to use icon components generated from DS source using SVGR
- Add 'aria-invalid' to form fields that are in an error state

## [0.1.2] - 2025-06-17
### Added
- Add readme file

## [0.1.1] - 2025-06-13
### Changed
- Allow all components to have additional CSS classes passed to them

## [0.1.0] - 2025-06-13
### Added
- Add npmignore file
### Fixed
- Fix broken content navigation spec
