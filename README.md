# LAP 2 Project - A1 Habits - Habit Tracker

## Design

![image](client/pics/design.png)

## Account login page
![image](client/pics/login1.png)

<!-- ABOUT THE PROJECT -->

# Purpose of the App

A1 Habits is an app is for tracking, managing, and cultivating habits. In-built are five key habits for you to choose from: `sleeping, exercise, water intake, smoking, and savings`

It has the following functionality for users:

- Users can login and logout
- Users can choose a habit they want to track (e.g water, exercise, 8 hours of sleep) and choose the frequency at which they want to track the habit
- Users can track a habit and mark it as complete for the day
- Users can see if they have completed a habit for the day and see their most recent completion streak
- Users can see the metrics for the last month for their habits

### Remote Hosting

The site is hosted [here](https://a1-habits.netlify.app/) on Netlify
and our API is hosted [here]() on Heroku.

# Installation and Usage

## Prerequisites

- Docker

## Installation

- Fork and clone this repo

## Usage

- Navigate to the project folder
- Run: `bash _scripts/startDev.sh`

  - Server in localhost:3000
  - Client in localhost:8080

- To rexecute the tests:

  - Run: `bash _scripts/startTest.sh`

- To perfom a complete teardown of the app:
  - Run: `bash _scripts/teardown.sh`

Do not run startDev and startTest simulanteously.

## Technologies

- HTML/CSS
- JavaScript
  - Node.js
  - Express
  - Cors
  - Jest
  - Supertest
  - Nodemon
- Docker
- PostgreSQL
- Bcrypt
- JSON Web Token
- Chartist (a Chart generator)

## Process

### Database planning

![image](client/pics/database.png)

### GitHub project planning

![image](client/pics/kanban.png)

### Figma design

![image](client/pics/figma.png)


<!--- ### Test Coverage --->

<!--- - Client side: 33% --->

<!--- ![image](client/pics/test-client.png) --->
<!--- - Server side: 12% --->

<!--- ![image](client/pics/test-server.png) --->

### Wins

### Challenges

- Creating most of the UI dynamically
- Implementing Authorization
- Testing

### Code snippets

### Contributors

- <a href="https://github.com/LaylaSouthcombe">Layla Southcombe</a>
- <a href="https://github.com/aha000111">Amir Ali</a>
- <a href="https://github.com/buscaroli">Matteo Buscaroli</a>
- <a href="https://github.com/Igormirowski">Igor Mirowski</a>

Project Link: [Project](https://github.com/LaylaSouthcombe/A1Habits)

### Future features

- Social media integration e.g. Twitter, Instagram, and Facbook intergration

- Customisation i.e. creating your own habits
