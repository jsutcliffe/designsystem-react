# @scottish-government/designsystem-react
[![NPM version](https://img.shields.io/npm/v/%40scottish-government%2Fdesignsystem-react)](https://www.npmjs.com/package/@scottish-government/designsystem-react)
[![Tests](https://github.com/scottish-government-design-system/designsystem-react/actions/workflows/tests.yml/badge.svg)](https://github.com/scottish-government-design-system/designsystem-react/actions/workflows/tests.yml)
[![Build](https://github.com/scottish-government-design-system/designsystem-react/actions/workflows/build.yml/badge.svg)](https://github.com/scottish-government-design-system/designsystem-react/actions/workflows/build.yml)

This repository contains a React implementation of the [Scottish Government Design System](https://designsystem.gov.scot/).

There is a documentation site showing what is in this implementation and how to use it here: https://designsystem-react.vercel.app/

## 🚧 Under construction 🚧

Warning: This project is in an alpha state and could potentially receive large breaking changes with little warning while it is being developed.

## Feedback, help or support

If you need any help or want to give any feedback you can e-mail the Design System team at: [designsystem@gov.scot](mailto:designsystem@gov.scot).

## Installation

We recommend installing the package using npm. The npm package includes the SG Design System as a dependency.

`npm install @scottish-government/designsystem-react`

## Run tasks

`npm run tsc`  
Compile the source code from TypeScript/TSX into JavaScript/JSX files, located in `/dist`

`npm run test`  
Run unit tests

`npm run coverage`  
Run unit tests and output a coverage report, located in `/coverage`

`npm run storybook`  
Start a local server running the Storybook for the project

`npm run svgr`
Create icon components for each SVG icon used by the Design System. These icon components are present in the repository. You likely will never need to run this command as an end user.
