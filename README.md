# Qeema Interview Task

Technical interview project for Qeema

## Statement

1. The Story

   - This app shows the Departments in a company and its Sections inside each Department to monitor the performance for the management level.
   - The app must be implemented as per proposed in the attached screens.
   - The screens must be responsive to access it from Desktop/Mobile browser.
   - Once the user clicked on any Department the Sections should be appear under him in Section’s area.
   - In this task only implement the Strategy Execution Sections as per the attached design.
   - Assume any numbers/fields/names in this task.

1. Backend

   - Develop it using any backend language/database you prefer
   - Create get API to fetch all Departments
   - Create get API to fetch all Sections for each Department

1. Frontend

   - This app must be developed using Angular framework with version at least 7
   - Home page must be named Departments and route to be departments
   - All components must be reusable components
   - All colors should be used as variables to configured/changed as per business need
   - Try to do your best to make the app typical the proposed design
   - Assume any numbers/fields/names in this task
   - Charts should be implemented as proposed in the attached design

## Task Duration

- 4 days.

## Solution

- Running the application

  - Clone the repository
  - Run the following command from the project's **backend** directory:
    - `$./mvnw spring-boot:run`
  - Head to [http://localhost:8080/](http://localhost:8080/) to view the application.

- Backend API endpoints

  - All endpoints can be viewed by running the server and heading to:
    - [http://localhost:8080/swagger-ui/](http://localhost:8080/swagger-ui/)

- Database

  - The project uses an **H2** in memory database for simplicity, easier testing and faster feedback cycles.

- Data

  - The database is seeded with the following data
    1. departments
    1. sections
    1. milestones
    1. department milestones
    1. section percents

## Detailed Description

1. Frontend

   - The process of searching for a third-party charting library that can produce similar charts to the proposed designs proved very time consuming and ended unsuccessfully, which is why I had to build and assemble my own charts. I achieved through the use of [SyncFusion's ProgressBarModule](https://www.npmjs.com/package/@syncfusion/ej2-angular-progressbar), more specifically, the **linear** and **circular** progress bars.
   - I used the **linear** progress bar to build the horizontal progress bars on the Strategic Themes Progress.
   - I used the **circular** progress bar to build the donut overall percentage on the Strategic Themes Progress.
   - I used the Angular Flex Layout library to achieve responsive design.
   - I used the Angular Material's MatGridListModule for the department grid.
   - Every service class implements an abstract class where services are defined.
     - This technique allowed me to seamlessly switch between mock services implementations and real services implementations (one's that hit the backend for data).
   - I tried to modularize, reuse and compose the components as much as possible, with each component responsible for a small and specific functionality of the overall application,
   - I packaged sets of Angular artifacts that are related together in the same Angular module. This is to allow for better re-usablity and also faster load times by utilizing lazy-loading.

2. Backend

   - Framework: **Spring Boot**.
   - Database: **H2**
   - Application Layers:

     1. Models
        1. Entities
        2. Dtos
        3. Mappers
     2. Repositories
     3. Services
     4. Controllers
     5. Exceptions
     6. Configurations

   - API Documentation: [Swagger](http://localhost:8080/swagger-ui/)

- Notes
  - I designed the layouts as proposed, but did not actually style the application due to my lack of css skills.
  - I did not manage to create any frontend components for the Monthly Milestone Tracker, but I did do the backend portion and frontend data models.
    - The reason is the same as above, finding charting libraries that can produce similar visuals as the proposed designs is difficult.
