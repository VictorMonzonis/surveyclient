# Survey Client

This solution is intended to be used as a test for candidates. The code of it will not be used for the company the only goal is being able to get some techs insights about the candidates.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)

## Project Overview

backend contains the server side:
the Dto provided would be survey and survey-detail, those entieties share the id to establish relationships.


## Features

- Feature 1: The main page displays a list with all the surveys avalable.
- Feature 2: Clicking in one specific survey we can start filling it.
    - Once the survey is completed we comeback to the surveys page.
    - If the survey is cancel in the middle, this survey is not completed and is not displayed anylonger in the surveys page. We return to the previous page.

## Installation

Node installed (tested in v18.17.1)

```bash
$ git clone https://github.com/yourusername/your-project.git
$ cd backend
$ npm install  # Or any other installation command
$ npm start # Or node node server.js to start the server.