import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import "./index.scss"

function Regstr() {
  return (
    <Formik
            initialValues={{ firstName: '', sureName: '', email: '', password: '' }}
            validationSchema={Yup.object({
              firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
              sureName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
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
    <div class="main">
      <Form>
        <h2 class="first_title">Sign Up</h2>
        <p class="first_sub_title" id="sub_title">It's quick and easy.</p>
        <hr />
        
        <div class="input">
          <Field name="firstName" type="text" placeholder="First Name" class="first_name" id="all" required />
          <Field name="sureName" type="text" placeholder="Sure Name" class="sure_name" id="all" required />
          <br />
          <Field name="email" type="email" placeholder="Mobile number or email address" id="all1" required />
          <br />
          <Field name="password" type="password" placeholder="New password" id="all1" required />
          <br />
        </div>
       
        <p class="sub_title_2" id="sub_title">Date of Birth</p>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <select>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </select>
        <select>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
        </select>
        
        <br />
      
        <p class="sub_title_3" id="sub_title">Gender</p>
        <div class="female" id="all_gender">
          <label for="female"><b>Female</b> </label>
          <input type="radio" name="gender" value="female" />
        </div>
        <div class="male" id="all_gender">
          <label for="male"><b>Male</b></label>
          <input type="radio" name="gender" value="male" />
        </div>
        <div class="other" id="all_gender">
          <label for="other"><b>Custom</b></label>
          <input type="radio" name="gender" value="other" />
        </div>
        
        <br />
        <p class="sub_title_4">
          By clicking Sign Up, you agree to our <a href="!#"> Terms, Data Policy</a> and
          <a href="!#">Cookie</a>
          Policy. You may receive SMS notifications from us and can opt out at any time.
        </p>
        <input type="submit" value="Signup" class="submit" />
      </Form>
    </div>
    </Formik>
  )
}

export default Regstr