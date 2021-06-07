import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { NavbarStatic, BgStatic } from '../'
import './styles.scss';


export const Contact = props => {

    const { register, errors, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        console.log('Name: ', data.name);
        console.log('Email: ', data.email);
        console.log('Subject: ', data.subject);
        console.log('Message: ', data.message);
  };

    return (
        <>
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
                                            name='name'
                                            ref={register({
                                                required: { value: true, message: 'Please enter your name' },
                                                maxLength: {
                                                value: 30,
                                                message: 'Please use 30 characters or less'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='Name'
                                            ></input>
                                            {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                        </div>
                                        <div className='col-6'>
                                            <input
                                            type='email'
                                            name='email'
                                            ref={register({
                                                required: true,
                                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                            })}
                                            className='form-control formInput'
                                            placeholder='Email address'
                                            ></input>
                                            {errors.email && (
                                            <span className='errorMessage'>Please enter a valid email address</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Row 2 of form */}
                                    <div className='row formRow'>
                                        <div className='col'>
                                            <input
                                            type='text'
                                            name='subject'
                                            ref={register({
                                                required: { value: true, message: 'Please enter a subject' },
                                                maxLength: {
                                                value: 75,
                                                message: 'Subject cannot exceed 75 characters'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='Subject'
                                            ></input>
                                            {errors.subject && (
                                            <span className='errorMessage'>{errors.subject.message}</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Row 3 of form */}
                                    <div className='row formRow'>
                                        <div className='col'>
                                            <textarea
                                            rows={3}
                                            name='message'
                                            ref={register({
                                                required: true
                                            })}
                                            className='form-control formInput'
                                            placeholder='Message'
                                            ></textarea>
                                            {errors.message && <span className='errorMessage'>Please enter a message</span>}
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
        </>
    )
}