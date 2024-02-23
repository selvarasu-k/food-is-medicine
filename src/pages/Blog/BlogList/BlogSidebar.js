import React from 'react';
import Container from '../../../components/Container/Container';
import BlogCard from './BlogCard/BlogCard';
import avatar1 from '../../../Images/Team/avatar1.png';
import avatar2 from '../../../Images/Team/avatar2.png';
import avatar3 from '../../../Images/Team/avatar3.png';
import avatar4 from '../../../Images/Team/avatar4.png';
import Widget from './Widget/Widget';
import classes from './BlogSidebar.module.css';
import '../../../index.scss';

const BlogSidebar = () => {
  return (
    <section className='section bg-gray-4'>
        <Container>
          <div className={classes["blog-parent-block"]}>
              <ul className={classes["blog-category-links"]}>
                <li className='text-primary-1'>As food medicine</li>
                <li>Siddha medicine</li>
                <li>Foods for facial beauty</li>
              </ul>
              <div className={classes["sidebar-layout"]}>
                  <ul className={classes["blog-post-list"]}>
                      <BlogCard blogpicture={avatar1}/>
                      <BlogCard blogpicture={avatar2}/>
                      <BlogCard blogpicture={avatar3}/>
                      <BlogCard blogpicture={avatar4}/>
                      <BlogCard blogpicture={avatar2}/>
                  </ul>
                  <div className={classes["side-bar"]}>
                      <Widget/>
                  </div>
              </div>
          </div>
        </Container>
    </section>
  )
}

export default BlogSidebar;