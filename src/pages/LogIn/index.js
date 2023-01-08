import React from 'react'
import "./index.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required").trim(),
                password: Yup.string().email("").required("Required"),
                date: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required")

            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <div className='box'>
                <div class="title-box">
                    <img src="https://i.postimg.cc/NMyj90t9/logo.png" alt="Facebook" />
                    <br></br><br></br>
                    <p>Facebook helps you connect and share with the people in your life.</p>
                </div>
                <div class="form-box">
                    <Form>
                        <Field name="email" type="email" placeholder="Email address or phone number" />
                        <div style={{ color: "red" }}><ErrorMessage name="email" /></div>


                        <Field name="password" type="password" placeholder="Password" />
                        <div style={{ color: "red" }}><ErrorMessage name="password" /></div>


                        <button id='subBtn' type="submit">LogIn</button>
                        <a href="!#">Forgotten Password</a>
                    </Form>
                    <hr></hr>
                    <div className='create-btn'>
                        <Link className='stil' to="/singup"><button id='crtbtn'>Create New Account</button></Link>
                    </div>
                </div>
            </div>
        </Formik>
    )
}

export default LogIn