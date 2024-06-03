import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error/Error";
import "./App.css";
import Team from "./pages/Team/Team";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Authentication from "./pages/Authentication/Authentication";
import Post from "./pages/Post/Post";
import CreateNewBlogPost from "./pages/Blog/CreateNewBlogPost/CreateNewBlogPost";
import ForgotPassword from "./pages/Authentication/ForgotPassword/ForgotPassword";
import EditProfile from "./pages/EditProfile/EditProfile";
import Pricing from "./pages/Pricing/Pricing";
import TeamList from "./pages/Team/TeamList/TeamList";
import BlogCategories from "./pages/Blog/BlogCategories/BlogCategories";
import PostTags from "./pages/Blog/PostTags/PostTags";

const router = createBrowserRouter([
  {
    path: "/food-is-medicine",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "team", element: <Team /> },
      { path: "team/:teamId", element: <TeamList /> },
      { path: "blog", element: <Blog /> },
      { path: "blog-categories/:category", element: <BlogCategories/> },
      { path: "post-tags/:tags", element: <PostTags/> },
      { path: "post/newblogpost", element: <CreateNewBlogPost /> },
      { path: "post/:postId", element: <Post /> },
      { path: "post/:postId/edit", element: <CreateNewBlogPost /> },
      { path: "post/:postId/pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
      { path: "auth", element: <Authentication /> },
      { path: "auth/reset", element: <ForgotPassword /> },
      { path: "edit", element: <EditProfile /> },
      { path: "error", element: <Error/> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;