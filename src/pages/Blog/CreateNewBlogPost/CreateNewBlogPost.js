import React from 'react';
import Container from '../../../components/Container/Container';
import Input from '../../../components/Input/Input';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import classes from './CreateNewBlogPost.module.css';
import '../../../index.scss';
import Dropdown from '../../../components/Dropdown/Dropdown';
import JoditEditor from './JoditReactEditor/JoditReactEditor';
import TagsInput from './TagsInput/TagsInput';
import FeaturedImage from './FeaturedImage/FeaturedImage';

const CreateNewBlogPost = () => {

  const createNewBlogPost = (e) => {
    e.preventDefault();
  }

  return (
    <section className='section bg-gray-4'>
        <Container>
            <form onSubmit={createNewBlogPost}>
                <div className={`${'row-split-content'} ${classes["post-content-align"]}`}>
                    <div className={classes["create-post-center"]}>
                        <Card className={`${"card-border"} ${classes["card-space"]} ${classes["no-shadow"]}`}>
                            <h3 className={`${'medium-heading'} ${classes["post-heading"]}`}>Create Post</h3>
                            <Input type="text"
                                   label="Post Title" 
                                   id="title" 
                                   placeholder="Enter title here" 
                                   name="post-title"
                            />
                            <label htmlFor='post-body' className={classes["jodit-editor"]}>Post Body</label>
                            <JoditEditor id="post-body" name="post-body"/>
                        </Card>
                        <Card className={`${"card-border"} ${classes["no-shadow"]}`}>
                            <div className={classes["create-post-side-bar"]}>
                                <div className={classes["menu-dropdown"]}>
                                    <label htmlFor='post-categories'>Categories</label>
                                    <Dropdown
                                        id="post-categories"
                                        name="post-categories" 
                                        options={["As food medicine" , "Siddha Medicine", "Foods for facial beauty"]}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='post-tags'>Tags</label>
                                    <TagsInput id="post-tags" name="post-tags"/>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className={classes["create-post-side-bar-block"]}>
                        <Card className={`${"card-border"} ${classes["no-shadow"]}`}>
                            <div>
                                <label htmlFor="post-image" className={classes["featured-image-heading"]}>Featured Image</label>
                                <FeaturedImage id="post-image" name="post-image"/>
                            </div>
                        </Card>
                        <Card className={`${"card-border"} ${classes["no-shadow"]}`}>
                            <div className={classes["create-post-side-bar"]}>
                                <div className={classes["menu-dropdown"]}>
                                    <label htmlFor='author'>Author</label>
                                    <Dropdown
                                        id="author"
                                        name="author" 
                                        options={["Pramod Gautam", "Bhavana Nilkanth Nikam", "Sachin Kale", "Binita Kumari"]}
                                    />
                                </div>
                                <Input type="date" label="Published at" id="post-date" name="post-date"/>
                            </div>
                        </Card>
                        <div className={classes['post-button']}>
                                <Button>Cancel</Button>
                                <Button className="bg-primary-1">Publish</Button>
                        </div>
                    </div>
                </div>
            </form>
        </Container>
    </section>
  )
}

export default CreateNewBlogPost;