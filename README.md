# Food is Medicine

## Description
A simple blog application built with React.js to be managed by admins and read by users.

It's a role-based blog application. Admins can create, read, update, and delete operations, and also users can only be allowed to read blog posts.

Categories and tags filter the blog posts.

Users can create, read, update, and delete user auth data.

**Note**: This project UI referral link is added below 
link 1 - https://ollie-template.webflow.io/

link 2 - https://ollie-template.webflow.io/blog/blog-2

## Table of Contents
- [Features](#features)
- [Tools and Technologies Used](#tools-and-technologies-used)
- [Deploying a React App* to GitHub Pages](#deploying-a-react-app*-to-github-pages)
- [Installation and Setup](#installation-and-setup)
- [Connect with backend API via JSON server](#connect-with-backend-api-via-json-server)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact Information](#contact-information)

## Features
- Verify the user's role-based authentication.

- Admins and users can add, edit, view, and delete user's auth data operations.

- Filtered and showed admins data only.

- Only admins can add, edit, view, and delete each blog post-operation. And users can view the blog posts.

- Categories and tags filter the blog posts.

- While authenticating admins (while logged-in admins), we show the create, edit, and delete buttons from every blog post.

- **Contact** - Ask anything about Food is medicine with our friendly team!

- **Subscribers** - Subscribe and get great curated articles every week!

- Responsive design.

## Tools and Technologies Used
- **React.js**: JavaScript library for building user interfaces
- **React Router**: Library for routing in React applications
- **useOutletContext**: State management tool in the context of React Router
- **JSON Server**: RESTful API using a JSON file as the database
- **React Toastify**: Pop-up messages displaying toast notifications
- **Sass**: To write and maintain styles for websites globally
- **Prettier**: Code formatter

## Deploying a React App* to GitHub Pages
    We have followed along with this [link](https://github.com/gitname/react-gh-pages) tutorial - we'll end up with a new React app—hosted on GitHub Pages.

## Installation and Setup

### Prerequisites
- Node.js (v20 or higher)
- npm (v10 or higher)

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/selvarasu-k/food-is-medicine.git
    cd food-is-medicine
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```

4. **Open the application in your browser:**
    ```bash
    local: http://localhost:3000/food-is-medicine
    remote: https://selvarasu-k.github.io/food-is-medicine/
    ```

## Connect with backend API via JSON server

### Steps
1. **Set up the JSON Server:**
    ```bash
    npm install json-server
    ```

2. **Create a db.json file:**
    ```
    Create a file named db.json in your project directory. 
    This file will contain your mock database
    ```

3. **Start the development server:**
    ```bash
    json-server --watch db.json --port 5000
    ```

4. **Open the application in your browser (localhost):**
    ```bash
    local: http://localhost:5000/users or articles or roleaccess or others
    ```

5. **Open the application in your browser (remote via onrender.com):**
    
    - **OnRender (Render.com)**: is a cloud platform that provides various hosting and deployment services for web applications, APIs, and other server-side applications.

    - **Automatic Deployments**: Render can automatically deploy your applications whenever you push changes to your Git repository (GitHub, GitLab, or Bitbucket).

    - **Connect Your Repository**: Connect your GitHub, GitLab, or Bitbucket repository to Render.

    - **Connect Localhost Server**: Your local development environment can interact with the deployed API by using the provided URL. Update any necessary configuration in your local server to point to the remote API endpoint on Render.

    ```bash
    remote: https://json-server-deployment-uepg.onrender.com/
    ```

## Usage

Here explained how to use the project after setting it up.

**Note**: Admins (Founder, Co-Founder, Developer, Designer) data directly added to the backend JSON API server.
**RoleAccess** - Admins - Founder, Co-Founder, Developer, Designer, Users.

### Users CRUD operations:
 
These operations are sent and fetched by JSON API with POST, GET, PUT or PATCH, and DELETE requests.

- **Register page** - While entering the user (If don't have an account) click the register link. Fill the valid user details and click the register button. It's redirecting to login page.

- **Login page** - Enter your valid email and password and click the login button. You will get notify log in successfully. It's redirecting to Home page.

- **Edit page** - Hover on the dropdown then click the edit profile then edit and save user data or if you don't need an account then click delete account button and confirm.

 - **Team page** - filtered and showed admins data list only except the user's data.

### Blog posts CRUD operations:

These operations are sent and fetched by JSON API with POST, GET, PUT or PATCH, and DELETE requests.

**Blog** - While entering admins, let's show the new blog post button. Then click the New link. It's redirecting to newblogpost page then fill in the Create post form details and click the Publish button. It's redirecting to the blog page.

You can see the list of every blog post data on the blog page.

Click any of the blog posts, and then you can read the articles.

**Blog - Post page** - While entering admin to every blog post then you can see the edit, and delete buttons. Clicking the edit button to update the particular blog post form details then save. and also click the delete button to confirm delete the blog posts accessed by admins. but, the users can only read the articles and can't see the edit, delete buttons.

**Home page** - You can see the listed every section like the team, blog posts, and post categories list.

### Blog - In the sidebar,

Filtered and showed the recent three blog posts.

You can see the four admin's data lists.

You can see the blog post categories list.

**Categories link** - Listed every filtered blog post based on the categories.

You can see the blog post tags list.

**Tags link** - Listed every filtered blog post based on the tags.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## Contact Information
- **Email**: selvanewversion@gmail.com
- **GitHub**: [your-github-username](https://github.com/selvarasu-k)
- **LinkedIn**: [your-linkedin-profile](https://www.linkedin.com/in/selvarasu-k-9408a112a/)