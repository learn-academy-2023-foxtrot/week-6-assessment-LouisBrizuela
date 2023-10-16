# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions:

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: edit and update the migration, cohort_id would be the key and added to the student model

Researched answer: To correct the mistake you can create a migration to add the foreign key, Use the Rails generator to create a migration that adds the foreign key, Execute the migration to update the database schema, in the Student model specify the association with Cohort using the belongs_to association, in the Cohort model, specify the has_many association

2. Which RESTful routes must always be passed params?

Your answer: GET, PUT, and DELETE

Researched answer: GET: Show Route, route requires a parameter to specify the ID or unique identifier of the resource, POST: Create Route, is used for creating a new resource, provides the data for the new resource. PUT: Update Route, are used to update an existing resource. DELETE: Delete Route, is used to delete a resource.

3. Name three rails generator commands. What is created by each?

Your answer: model: creates a new model, migrate: updates the changes, and controller: creates a controller

Researched answer: Controller: The controller handles the application's business logic, Migrate: Migrations are used to make changes to the database schema, such as creating or modifying tables, model: command generates a model file and defines a model class with attributes and data types, which represents a database table

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Controller Method: Index, display a list of students

action: "POST" location: /students
Controller Method: Create, creating a new student record

action: "GET" location: /students/new
Controller Method: New, rendering a form to create a new student record

action: "GET" location: /students/2
Controller Method: Show, displaying the details of student 2

action: "GET" location: /students/2/edit
Controller Method: Edit, edit the details of student 2

action: "PATCH" location: /students/2
Controller Method: Update, updating the details of student 2

action: "DELETE" location: /students/2
Controller Method: Destroy, destroy the record of student 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1. User Registration:
As a user, I want to create an account with my email and password so that I can securely log in to the application and access my to-do lists.

2. User Login:
As a registered user, I want to log in with my email and password to access my personalized to-do lists.

3. Create a To-Do Item:
As a user, I want to add new to-do items to my list, specifying a task name, description, and due date.

4. View To-Do List:
As a user, I want to see my complete list of to-do items, organized by priority or due date.

5. Edit To-Do Items:
As a user, I want to be able to edit existing to-do items, updating their name, description, priority, or due date.

6. Mark as Completed:
As a user, I want to mark to-do items as completed when I finish them, allowing me to keep track of my progress.

7. Delete To-Do Items:
As a user, I want to delete to-do items I no longer need, keeping my list organized.

8. Priority Management:
As a user, I want to assign priorities (e.g., low, medium, high) to my to-do items, helping me focus on the most important tasks.

9. Filter To-Do Items:
As a user, I want to filter or search my to-do list to quickly find specific tasks or view items by category.

10. Mobile Accessibility:
As a user, I want to access and manage my to-do list on mobile devices, ensuring I can use the application on the go