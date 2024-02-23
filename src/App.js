import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
import './App.css';
import Team from './pages/Team/Team';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Authentication from './pages/Authentication/Authentication';
import Post from './pages/Blog/BlogList/Post/Post';
import CreateNewBlogPost from './pages/Blog/CreateNewBlogPost/CreateNewBlogPost';
import ForgotPassword from './pages/Authentication/ForgotPassword/ForgotPassword';
import EditProfile from './pages/EditProfile/EditProfile';
import Pricing from './pages/Pricing/Pricing';
import TeamList from './pages/Team/TeamList/TeamList';

  const router = createBrowserRouter([
      {
        path:'/food-is-medicine', 
        element: <RootLayout/>,
        errorElement: <Error/>,
        children: [
          { path:'/food-is-medicine', element: <Home/> },
          { path:'/about', element: <About/> },
          { path:'/team', element: <Team/> },
          { path:'/blog', element: <Blog/> },
          { path:'/teamlist', element: <TeamList/> },
          { path:'/blog/post', element: <Post/> },
          { path:'/contact', element: <Contact/> },
          { path:'/auth', element: <Authentication/> },
          { path:'/reset', element: <ForgotPassword/> },
          { path:'/edit', element: <EditProfile/> },
          { path:'/blog/newblogpost', element: <CreateNewBlogPost/> },
          { path:'/pricing', element: <Pricing/> }
        ]
      },
  ]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
