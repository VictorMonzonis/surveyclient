# Survey Client

This solution is intended to be used as a test for candidates. The code of it will not be used for the company the only goal is being able to get some techs insights about the candidates.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)

## Project Overview

The backend comprises the server-side component, handling the following:
DTOs: The provided DTOs include 'survey' and 'survey-detail'. These entities are linked by a shared ID, establishing relationships between them."

Endpoints:
- http://localhost:4000/Surveys
- http://localhost:4000/SurveyDetails/1

survey-app contains the react application, here is were the code should be added.

## Features

- Feature 1: The main page showcases a comprehensive list of available surveys.
- Feature 2: Clicking on a specific survey initiates the process of filling it out.
    - Upon completing the survey, users are directed back to the surveys page.
    - Should the survey be canceled prematurely, it remains incomplete and will no longer be visible on the surveys page. Users will be returned to the previous page.

## Installation

Node installed (tested in v18.17.1)

```bash
# To run the BE
$ cd backend
$ npm install
$ npm start

# To run the FE
$ cd survey-app
$ npm install
$ npm start