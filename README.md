# The Developer Academy Full Stack Blog Project [(Live Demo)](https://jord2097.github.io/fullstackblog/)
## By Jordan, Haftu and Dan

This project was completed as part of a group of 3 over 4 weeks. The aim was to create a full-stack blog web app that could be integrated into [The Developer Academy](https://thedeveloperacademy.com/)'s new concept website. The project consists of a RESTful API built with Node.js connected to MongoDB with a React frontend to render the data and UI. If you would like to see us present this there is a recording on [Youtube](https://www.youtube.com/watch?v=LNpqqtUJhWk&t=3354s).

## Technologies Used

MongoDB, Express, React, Node.js, Bootstrap, Material UI Core, JSON Web Token, Draft.js

## Features

### Backend

1. Blog Post Management
- The API provides basic CRUD functionality but also the ability to search by category/tag, and a general search function using regex. All protected functions that require permissions use authentication middleware. Also, any functions that have protected info but are for public use hide that info unless the user has the required role.

2. User Management
- The API provides the ability to register and login, however the basic user account will not have any advanced permissions over a guest.
- An Admin must provide a user the role of author or admin for them to access restricted features (i.e. seeing user passwords, deleting posts).

3. Role-Based Access Control
- The role-based hierarchy works via the use of JSON Web Token. When a user logs in with a matching username and password they are delivered a JWT signed with a secret key. This has the role and ID information stored within it's payload. The token is then verified on all secured API calls to check if the token is valid and the user is authorised. On the frontend, the token and role information dictate how the website renders i.e. do admin-only buttons/pages show.

### Frontend

1. Main Post Summary Page
- List of posts using Material UI Core Grid and Cards
- Responsive Bootstrap Navbar
- Authors/Admins: View drafts/hidden posts

2. Single Post View
- Click on a post title to view the full post content
- Can be linked externally as the url is unique

3. Filter by Category / Tag
- Click on a post category or tag to view all posts with that field

4. Searchbar
- Type and enter a query to fetch results
- Searches all content fields for a match using regex (case-insensitive)
- Displays results on a dedicated page

5. Post Creation Editor
- "Add" Page with form to fill in content for a post
- For main post content the React-Draft-WYSIWYG rich text editor is used
- Ability to save post as draft for later or mark as hidden/unlisted

6. Update / Delete Posts
- Authors/Admins: Update Post button on each card that queues an update by redirecting to add page and filling in existing post content.
- Admins: Delete post button


