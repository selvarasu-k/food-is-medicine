import React from 'react';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import classes from './EditProfile.module.css';
import '../../index.scss';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
import EditButton from '../../Images/Profile/EditButton';
import ProfileImage from './ProfileImage/ProfileImage';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import SaveButton from '../../Images/Profile/SaveButton';

const EditProfile = () => {
  return (
    <section className='section bg-gray-4'>
        <Container>
            <Card className={`${classes["no-shadow"]} ${classes["profile-card"]}`}>
                    <ProfileSidebar/>
                    <div className={classes['profile-vertical-line']}></div>
                    <div className={classes["profile-main-block"]}>
                        <h6 className={classes["profile-heading"]}>My Profile</h6>
                        <div className={classes["profile-block"]}>
                            <div className={`${classes['profile-box']} ${classes['profile-row']}`}>
                                <div className={classes["profile-row-left"]}>
                                    <ProfileImage id="profile-image"
                                                  name="profile-image" 
                                                  label="Profile Image"
                                    />
                                    <div className={classes["profile-text"]}>
                                        <h6 className={`${'h6-small'} ${classes["show-profile-name"]}`}>Selva Rasu</h6>
                                        <div className='text-small opacity'>selvanewversion@gmail.com</div>
                                        <div className='opacity'>Team Manager</div>
                                    </div>
                                </div>
                                <EditButton className={classes["hide-edit-button"]} text="Edit"/>
                                <SaveButton text="Save"/>
                            </div>
                            <div className={`${classes['profile-box']} ${classes['profile-column']}`}>
                                <div className={classes["profile-info-header"]}>
                                    <div className={classes["profile-box-heading"]}>Personal Information</div>
                                    <EditButton className={classes["hide-edit-button"]} text="Edit"/>
                                    <SaveButton text="Save"/>
                                </div>
                                <div className={classes["profile-input-block"]}>
                                    <div className={classes["input-row"]}>
                                        <Input type="text" label="First Name" name="first-name" id="first-name"/>
                                        <Input type="text" label="Last Name" name="last-name" id="last-name"/>
                                    </div>
                                    <div className={`${classes["input-row"]} ${classes["input-row-height"]}`}>
                                        <div>
                                            <label htmlFor='position'>Position</label>
                                            <Dropdown 
                                                id="position"
                                                name="position"
                                                options={["Team Manager" , "Team Leader", "Team Member"]}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='gender'>Gender</label>
                                            <Dropdown 
                                                id="gender"
                                                name="gender"
                                                options={["Male", "Female"]}
                                            />
                                        </div>
                                    </div>
                                    <div className={classes["input-row"]}>
                                        <Input type="email" label="Email Address" name="email" id="email"/>
                                        <Input type="phone" label="Phone Number" name="phone" id="phone"/>
                                    </div>
                                </div>
                            </div>
                            <div className={classes['profile-box']}>
                                <div className={classes["profile-info-header"]}>
                                        <div className={classes["profile-box-heading"]}>About Me</div>
                                        <EditButton className={classes["hide-edit-button"]} text="Edit"/>
                                        <SaveButton text="Save"/>
                                </div>
                                <div className={classes["profile-input-block"]}>
                                    <div className={classes["form-group"]}>
                                        <label htmlFor="about-me" className={classes["about-me-form-label"]}>About Me</label>
                                        <textarea maxLength="5000"
                                                  id="about-me"
                                                  name="about-me"
                                                  className={classes["text-area-input"]}>
                                        </textarea>
                                        <div className={classes["form-error"]}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Card>
        </Container>
    </section>
  )
}

export default EditProfile;