# swaglabs-project

## Swag Labs Test

This project contains comprehensive automated test suites including Regression and Smoke Tests for the Swag Labs application. It is built using the Playwright framework with TypeScript, designed to ensure cross-browser reliability, fast execution and robust test automation

## Prerequisites

Ensure the following tools are installed on your system before setup:

Visual Studio Code

Node.js & npm

## Setup

Clone the repository to your local machine.

Install the required dependencies:

**npm install** - Installs Node Package Manager (npm) dependencies

**npx playwright install** -  Installs Playwright and its required dependencies

## Run the Tests:

For regression-test: **npx playwright test tests/regression-tests**

For smoke-tests: **npx playwright test tests/smoke-tests**

All the tests will execute in 3 browsers Chrome, Firefox and Webkit

## Reports:

For HTML test report, run: **npx playwright show-report** 

or manually open: **click on playwright-reports=> index.html=> Open with Live Server**

*Optionally, you can configure Allure Reporting for visual insights such as pie charts and enhanced test results*.

## Documentation and Structure:

Tests are grouped by functionality for easier navigation and understanding in reports.

The folder structure follows the Page Object Model (POM) design for scalability and maintainability.

Each script is self-explanatory, with clear test steps that mirror real-world user flows.
