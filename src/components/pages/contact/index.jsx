import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { NavbarStatic, BgStatic } from '../../';
import './styles.scss';


export const Contact = props => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const toastifySuccess = () => {
        toast('Email sent. Thank you!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,  
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    const onSubmit = async (data) => {
        const templateParams = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        };

        try {
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            reset();
            toastifySuccess();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <NavbarStatic />
            <BgStatic />

            <div className="container-fluid contact-container">
                <div className="contact-page-bg">

                    <div className="row header-row">
                        <div className="contact-section-heading col-12">
                            <h1 className="contact-section-heading-text">Dev_Contact</h1>
                        </div>
                    </div>

                    {/* <div className="row"> */}
                    {/* <div className='col-12 text-center'> */}

                    <div className='contactForm text-center'>
                        <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                            
                            {/* FORM ROW 1 - NAME & EMAIL*/}
                            <div className='row formRow'>

                                {/* NAME FIELD */}
                                <div className='col-md-12 col-lg-6'>
                                    <input
                                        className='form-control formInput'
                                        type='text'
                                        id='name'
                                        placeholder='Name'
                                        aria-invalid={errors?.name ? "true" : "false"}
                                        {...register('name', {
                                            required: { value: true, message: 'Please enter your name' },
                                            maxLength: {
                                            value: 50,
                                            message: 'Please use 50 characters or less'
                                            }
                                        })}
                                    />
                                    {errors?.name && errors?.name?.type === "required" && (
                                        <span role="alert" className='error-message'>
                                            {errors.name.message}
                                        </span>
                                    )}
                                    {errors?.name && errors?.name?.type === "maxLength" && (
                                        <span role="alert" className='error-message'>
                                            {errors.name.message}
                                        </span>
                                    )}
                                    {/* {console.log(errors)} */}
                                </div>

                                {/* EMAIL FIELD */}
                                <div className='col-md-12 col-lg-6'>
                                    <input
                                        className='form-control formInput'
                                        type='email'
                                        placeholder='Email'
                                        {...register('email', {
                                            required: true,
                                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        })}
                                    />
                                    {errors?.email && (
                                    <span role="alert" className='errorMessage error-message'>
                                            Please enter a valid email address
                                    </span>
                                    )}
                                </div>

                            </div>

                            {/* FORM ROW 2 - SUBJECT LINE */}
                            <div className='row formRow'>
                                <div className='col'>
                                    <input
                                        className='form-control formInput'
                                        type='text'
                                        placeholder='Subject'
                                        {...register('subject', {
                                            required: { value: true, message: 'Please enter a subject' },
                                            maxLength: {
                                            value: 90,
                                            message: 'Subject cannot exceed 90 characters'
                                            }
                                        })}
                                    />
                                    {errors?.subject && errors?.subject?.type === "required" && (
                                        <span role="alert" className='error-message'>
                                            {errors.subject.message}
                                        </span>
                                    )}
                                    {errors?.subject && errors?.subject?.type === "maxLength" && (
                                        <span role="alert" className='error-message'>
                                            {errors.subject.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* FORM ROW 3 - TEXTAREA*/}
                            <div className='row formRow'>
                                <div className='col-12'>
                                    <textarea
                                        className='form-control formInput'
                                        rows={3}
                                        placeholder='Message' 
                                        {...register('message', {
                                            required: true
                                        })}
                                    />
                                    {errors?.message && 
                                        <span className='errorMessage error-message'>
                                            Please enter a message
                                        </span>
                                    }
                                </div>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <button className='contact-btn' type='submit'>
                                Submit
                            </button>

                        </form>

                        <ToastContainer />
                    </div>
                        {/* </div> */}
                    {/* </div> */}

                </div>
            </div>
        </>
    );
}
