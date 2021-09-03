# Wonder

[Live Site](https://ak-wonder.herokuapp.com/)

![Home](/readme_images/home.gif)

---

## Summary

A web app inspired by the question and answer app, Quora. Built using React/Redux on the front end, and Express on the back end.

- Create an account
- Log in / Log out
- View questions
- Edit question details
- Delete question
- Search questions, live update
- Comment on questions
- View all question comments

---

## Technologies Used

### Front End

The app was built completely using [React.js](https://reactjs.org/) / [Redux](https://redux.js.org/) on the front end.

### Back End

The app was built using [Express](https://expressjs.com/) on the back end, with a [postgreSQL](https://www.postgresql.org/) database. Additionally, [Sequelize](https://sequelize.org/) was used as the ORM.

### Libraries

- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [Faker](https://www.npmjs.com/package/faker)
- [Sequelize-CLI](https://www.npmjs.com/package/sequelize-cli)
- [CORS](http://expressjs.com/en/resources/middleware/cors.html)
- [Nodemon](https://www.npmjs.com/package/nodemon)

---

## Documentation

- [Wiki Home](https://github.com/AKuemper/wonder/wiki)
- [Database Schema](https://github.com/AKuemper/wonder/wiki/DB-Schema)
- [Feature List](https://github.com/AKuemper/wonder/wiki/MVP-List)

## Primary Components

### Authentication / Authorization

User input validations are handled for both the sign up and log in forms in Express using [Express Validator](https://www.npmjs.com/package/express-validator). Passwords are hashed when saved to the database using [BCrypt](https://www.npmjs.com/package/bcrypt).

#### Sign Up

![signup](/readme_images/signup.png)

#### Log In

![login](/readme_images/login.png)

---

### Search / Home Page

#### Home Page

Where users will navigate in order to view all current questions that have been answered.

![home](/readme_images/home.png)

#### Search Results

Search results display all questions that match the user input string. The search also searches question answers.

![search](/readme_images/search.gif)

---

### Comments

#### Create Comment

A logged in user can click the comment icon located under each question. This shows a dropdown with an input, allowing the users to leave a comment for the selected question.

![createComment](/readme_images/comments.png)

#### Show Comments

![showComments](/readme_images/showComments.gif)

---

### Questions

#### Show More

When viewing the question, if the text takes up too large a space, a 'more' link is provided in order to expand the text to reveal the entire question. A 'less' link replaces the 'more' link upon expansion.

![showMore](/readme_images/showMore.gif)

#### Edit / Delete Question

Allows users to edit or delete the question if they are the user who posted the question.

![editDeleteQuestion](/readme_images/editDeleteQuestion.gif)

---

## Future Implementations

- Voting system for questions and for comments
- Create a question page / component
- Flags / Topics
- Search by flags / topics
- Question specific page
