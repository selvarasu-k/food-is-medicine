import React from 'react';
import NewBlog from './NewBlog/NewBlog';
import BlogSidebar from './BlogList/BlogSidebar';
import NewsLetter from './NewsLetter/NewsLetter';
import '../../index.scss';
import SubHeader from '../../components/SubHeader/SubHeader';
import { useOutletContext } from 'react-router-dom';

const Blog = () => {

  const context = useOutletContext();

  return (
    <>
      {context.haveadd ? <NewBlog/> : <SubHeader heading="Blog"
        subheading="Learn a lot about food is medicine like traditional, siddha medicines."
      />}
      <BlogSidebar />
      <NewsLetter/>
    </>
  )
}

export default Blog;