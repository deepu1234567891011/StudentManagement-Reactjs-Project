# Student Management Project - ReactJS

## Project Overview
This is a Student Management web application built using ReactJS. 
This project is used to manage student details like Name and Marks in one place.

In a school or college, teachers need to maintain student records. Instead of writing in a notebook, this app helps to Add, View, Edit, Delete and Search students easily in a table format.

This is a complete CRUD project.

CRUD means:
C - Create - Add Student
R - Read - View / Search Student
U - Update - Edit Student
D - Delete - Delete Student

## Technologies Used
I used these technologies in this project:

1. ReactJS - For building the User Interface and Components
2. JavaScript (ES6) - For logic like map, filter, spread operator
3. CSS - For styling, layout, table design and buttons
4. Vite - For creating and running the React project fast
5. useState Hook - For storing and updating data
6. 【entity-Git¦canonical_name=GitHub】 & 【entity-GitHub¦canonical_name=GitHub】 - For saving and pushing the project

## How I Made This Project - Step by Step Process

Step 1 - Project Setup:
First I created a React project using Vite. Then I created a main component named Student.jsx and called it in App.jsx.

Step 2 - Created Students Data:
I used useState to store the students list. Each student has Name and Marks. Initially I added 6 students as sample data.

Step 3 - Displayed Data in Table:
I displayed all students in a table using map() method. Table has 3 columns - Name, Marks, Actions.

Step 4 - Add Student:
At the bottom I created 2 input boxes - Name and Marks. User enters details and clicks Add button. The new student is added to the list using spread operator. After adding, input boxes become empty.

Step 5 - Delete Student:
In every row I added a Delete button. When Delete is clicked, that particular student is removed from the list using filter() method by checking the index.

Step 6 - Edit Student:
In every row I added an Edit button. When Edit is clicked, that student's Name and Marks go into the input boxes. After changing the values and clicking Update, that student is updated using map() method. For this I used editIndex state to remember which student I am editing.

Step 7 - Search Student:
At the top I added a Search box. When user types a name, only matching students are shown. For this I used filter() + includes() + toLowerCase(). So search works even if user types in small or capital letters.

Step 8 - Styling:
I used student.css file for styling. I designed the table, search box, Add button, Edit button and Delete button to look neat and clean.

Step 9 - Testing:
I tested all features - Add is working, Delete is working, Edit is working, Search is working.

Step 10 - Pushed to GitHub:
After completing the project, I pushed the full project to GitHub using git add, git commit and git push.

## Features
- Add new student
- Delete student
- Edit / Update student
- Search student by name
- Live update without page refresh

## What I Learned
- How to use useState in React
- How to render list using map()
- How to filter data using filter()
- How to do CRUD operations in React
- How to handle forms and inputs
- How to push a project to GitHub

## How To Run This Project
1. Clone the project
2. Open in VS Code
3. Run npm install
4. Run npm run dev
5. Open http://localhost:5173 in browser

## Author
Deepu
Student Management Project with ReactJS
