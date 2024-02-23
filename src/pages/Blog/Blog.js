import React from 'react';
import NewBlog from './NewBlog/NewBlog';
import BlogSidebar from './BlogList/BlogSidebar';
import NewsLetter from './NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';
import '../../index.scss';

const Blog = () => {
  return (
    <>
      <NewBlog/>
      <BlogSidebar/>
      <NewsLetter/>
      <Footer className="bg-gray-4"/>
    </>
  )
}

export default Blog;