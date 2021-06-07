import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { NavbarStatic, BgStatic } from '../'
import './styles.scss';


export const Contact = props => {

    const { register, errors, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const templateParams = {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            };
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            reset();
        } catch (error) {
          console.log(error);
        }
    };

    return <>
        <NavbarStatic />
        <BgStatic />

        <div className="container-fluid profile-container">
            <div className="profile-page-bg">
                <div className="row profile-row">

                    <div className="profile-section-heading col-lg-3 col-md-12">
                        <h1 className="profile-section-heading-text">Dev_Contact</h1>
                    </div>

                    <div className='col-12 text-center'>
                        <div className='contactForm'>
                            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                
                                {/* Row 1 of form */}
                                <div className='row formRow'>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            {...register('name', {
                                                required: { value: true, message: 'Please enter your name' },
                                                maxLength: {
                                                value: 30,
                                                message: 'Please use 30 characters or less'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='Name'></input>
                                        {errors && <span className='errorMessage'>{errors.name.message}</span>}
                                        {console.log(errors)}
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='email'
                                            {...register('email', {
                                                required: true,
                                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                            })}
                                            className='form-control formInput'
                                            placeholder='Email address'></input>
                                        {/* {errors.email && ( */}
                                        {errors && (
                                        <span className='errorMessage'>Please enter a valid email address</span>
                                        )}
                                    </div>
                                </div>

                                {/* Row 2 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <input
                                            type='text'
                                            {...register('subject', {
                                                required: { value: true, message: 'Please enter a subject' },
                                                maxLength: {
                                                value: 75,
                                                message: 'Subject cannot exceed 75 characters'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='Subject'></input>
                                        {/* {errors.subject && ( */}
                                        {errors && (
                                        <span className='errorMessage'>{errors.subject.message}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Row 3 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <textarea
                                            rows={3}
                                            {...register('message', {
                                                required: true
                                            })}
                                            className='form-control formInput'
                                            placeholder='Message'></textarea>
                                        {errors && <span className='errorMessage'>Please enter a message</span>}
                                    </div>
                                </div>
                                <button className='submit-btn' type='submit'>
                                Submit
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>;
}