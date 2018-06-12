## Unit 2 -- Deliverable 2
Express app that reads from and posts to a data file using GET and POST routes.

### User stories:
1. A user can visit a static homepage with links to other pages. (home, skills, add a skill)
2. A user can visit a template page showing a list of skills pulled from a data file.
3. A user can visit a page with a form to add a new skill to the list.

### Requirements:
Make the following routes:
1. GET '/' - returns a static index.html page.
2. GET '/skills' - renders an EJS page with skills from a data file.
3. GET '/skills/new' - returns a form set up to add a skill.
4. POST '/skills' - sends data from the form to the server and writes the new skill to the file.
4a. After writing to the file, the route should redirect to render the skills list ejs page.
### Make the following pages:
1. Make a static index.html page in the 'static' folder.
1a. This page must have links to the other two routes for viewing and adding skills.
2. Make an EJS page for viewing the skills data. This file goes in the 'views' folder.
3. Make a static form.html page in the 'static' folder with a form for adding a new skill.
3a. Give this form an action of '/skills/new' and a method of 'POST'.
### Bonus:
1. Add styling to the pages via a style.css in the static folder.
2. Use partials to separate out repeated code in your EJS files.

