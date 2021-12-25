import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router';

function Guestbook() {

  // const schema = Yup.object().shape({
  //   name: Yup.string()
  //     .required("Required"),
  //   email: Yup.string()
  //     .email()
  //     .required("Required"),
  //   password: Yup.string()
  //     .required("Required")
  // })

  let navigate = useNavigate();

  // const goToAnotherPage = () => {
  //   navigate('/')
  // }

  const schema = Yup.object().shape({
    name: Yup.string()
    .label('Fullname')
    .trim()
    // .email('Invalid credentials. Please retry!')
    .required('Full Name is required')
    .min(5, "Full Name should be at least 5 characters (including a space)"),
    email: Yup.string()
        .label('Email')
        .email('Invalid email.')
        .required('Email is required'),
    number_of_attendees_to_bring: Yup.string()
    .label('Number of Guests')
    .required('Number of Guests is required'),
    events_to_attend: Yup.string()
    .label('Events to Attend')
    .required('Events to Attend is required'),
    mode_of_attendance: Yup.string()
    .label('Mode of Attendance')
    .required('Mode of Attendance is required'),
    
})

  const registerUser = (details, formikActions) => {
    // alert(JSON.stringify(details));
    // return;
    // alert(JSON.stringify(details));

    alert(details.agree_to_notifications)

var regExp = /^[^0-9]+$/;
// var parentPhoneNumber = phoneNumber.match(regExp);
var personName = details.name;
if (personName.match(regExp)) {
  //  alert("Real phone number");
  //  return;
}
else {
  alert("Full Name cannot contain numbers");
  return;
}

    const data = new FormData();
 
    for (const key in details) {
        data.append(key, details[key])
        // data.append(key, details.key)
        // data.append(key, details.f_name)
    }
    // alert(JSON.stringify(data));
    // return;

    console.log("user registration");
    console.log(details);
    // this.setState({ showDialog: true })

    // alert("Link is "  + this.state.branch +'/api/app/member/init')
    fetch(

      // `http://elitte.host/api/guestsbook`,
      `http://localhost:8000/api/guestsbook`,
        
        // Config.API_URL + 'guestsbook',
        // this.state.branch +'/api/app/member/init',
        {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                // 'Content-Type': 'multipart/form-data;',
                // 'Authorization': 'Basic ' + Buffer.from(this.state.email +':'+ this.state.password).toString('base64') 
                // 'Authorization': 'Basic ' + Base64.btoa('apiuser@gmail.com' +':'+ 'apiuser@gmail.com')
                // 'Authorization': 'Basic ' + Buffer.from('apiuser@gmail.com' +':'+ 'apiuser@gmail.com').toString('base64') 
            },
            body: data
            // body: new URLSearchParams(details).toString(),
        })
        // AsyncStorage.setItem('name', datas.user.name)
        // AsyncStorage.setItem('course', datas.teacher.subject)
        // AsyncStorage.setItem('level', datas.teacher.class_level)
        // AsyncStorage.setItem('qualification', datas.teacher.qualification)
        // AsyncStorage.setItem('phone', datas.user.api_token)
        // alert(datas.user.api_token);
        // alert(datas.user.name);
        // alert(datas.user.class_level);
        // return; 
        // .then(res => alert(JSON.stringify(res)))
        .then(res => res.json())
        .then(datas => {
            // this.setState({ showDialog: false })

            formikActions.setSubmitting(false);

            console.log('Register funtion progress');
            console.log(datas);
            // alert(JSON.stringify(datas));
            // alert(JSON.stringify(datas));
            // return;
            //  if (datas.hasOwnProperty('success') && datas.success == true) {
            if (datas.hasOwnProperty('success') && datas.success === true) {
                //     // AsyncStorage.setItem('userToken', datas.user.api_token)
                // AsyncStorage.setItem('userInfo', JSON.stringify(datas))
                //     // alert(datas.user.api_token)
                console.log("Sign up info: Success");
                // alert("Success");
                //     //     console.log("success")
                //     //     // this.storePhonePinCode(phone, datas.pinCode, datas.email);
                //     //    AsyncStorage.setItem('pinCode', datas.pinCode);
                //     //    AsyncStorage.setItem('phone', phone);
                //     //    AsyncStorage.setItem('pinCode', datas.pinCode);
                //     //  AsyncStorage.setItem('email', datas.email);
                //     //  AsyncStorage.setItem("data", JSON.stringify({email: datas.email, password: datas.pinCode, phone: datas.phone, customer: datas.customer}))
                //     //  AsyncStorage.setItem('phone', datas.user.api_token);
                formikActions.resetForm({})
                // AsyncStorage.setItem("userData", JSON.stringify(details))
                //     //  AsyncStorage.setItem("userToken", datas.user.api_token)
                //     // //    alert(datas.pinCode);
                //     // alert(details);
                //     //  alert(datas.user.api_token);
                //alert('Successful Sign up', "Invalid Reference ID");
              //  alert('Successful Sign up', {dataFromRegisteredUser: datas.message});
               alert('Successful Sign up', {dataFromRegisteredUser: datas});

                // this.props.navigation.navigate('Home');
                //     //     { user: datas.user, teacher: datas.teacher })
                // setTimeout(() => {
                // displayScriptures()
                // this.props.navigation.navigate('Home', datas);

                // REDIRECT TO HOME PAGE
                // goToAnotherPage()
                navigate('/', datas.message)

            // }, 5000);
                //     // this.props.navigation.navigate('Home')
                //     // this.props.navigation.navigate('Verification',  datas)
                //     //     console.log("success ends");
                // this.props.
                //     navigation.dispatch(
                //         CommonActions.reset({
                //             index: 0,
                //             routes: [
                //                 { name: 'AwaitingApproval' }
                //             ],
                //         })
                //     );

            } else {

                // this.setState({ errorMessage: datas.message })
                // this.setState({ showErrorDialog: true })
            }
        })
        .catch((error) => {
            formikActions.setSubmitting(false);

            // this.setState({ showDialog: false })
            // this.setState({ errorMessage: "An error occured. Please make sure you have a valid internet connection" })
            // this.setState({ showErrorDialog: true })

            console.error(error)
            // alert('Caught Error: ' + JSON.stringify(error));
        });
}

    return (
      <div style={{ marginTop: 40 }}>
      <h1 className="mb-3">Guestbook</h1>

      <Formik
      initialValues={{ 
        email: "",
        name: "",
        password: "Jq_VEajQwThnBRgGIMeTQilPQ4STls2SWOTmJgmXicNHoJz2NUgo-v5R-Gs6cg",
        number_of_attendees_to_bring: "",
        events_to_attend: "",
        mode_of_attendance: "",
        agree_to_notifications: false,

    }}
      onSubmit={async (values, formikActions) => {
        // await new Promise(resolve => setTimeout(resolve, 500));
        // alert(JSON.stringify(values, null, 2));
        registerUser(values, formikActions)
      }}
      validationSchema={schema}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          // dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          // handleReset
        } = props;
        return (
        <div className="container"> 
      <form id="js-validation-signup" 
            className="container"
            onSubmit={handleSubmit}
        >
        <div className="form-group">
            <label htmlFor="name" className="text-dark text-left">Full Name</label>
            <input 
              type="text" 
              className={
                errors.email && touched.email
                  ? "form-control text-input error"
                    : "form-control"
              } 
              id="name" 
              name="name" 
              placeholder="Enter Your Full Name" 
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <div className="input-feedback">{errors.name}</div>
            )}

        </div>

        <div className="form-group">
            <label htmlFor="email"  className="text-dark text-left">Email</label>
            <input 
              type="email" 
              className={
                errors.email && touched.email
                  ? "form-control text-input error"
                    : "form-control"
              } 
              id="email" 
              name="email" aria-describedby="emailHelp" 
              placeholder="Enter Your Email" 
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <small id="emailHelp" className="form-text text-dark text-left">We'll never share your email with anyone else.</small>
            
        </div>

        <div className="form-group" style={{display: 'none'}}>
            <label htmlFor="password"></label>
            <input type="hidden" className="form-control" id="password" 
            name="password" 
            placeholder="Enter Your Password" 
            value={values.password}
            />
          {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
          )}
  
        </div>

          {/* <div className="form-group">
            <label htmlFor="password"></label>
            <input type="password" className="form-control" id="password" 
            name="password" 
            placeholder="Enter Your Password" 
            value={values.password}
            />
          {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
          )}
  
        </div> */}

        {/* Select inputs */}
        {/* https://www.tutorialspoint.com/reactjs/reactjs_formik.htm */}

        <div className="form-group">
            <label htmlFor="number_of_guests" className="text-dark text-left"> Number of Guests you're bringing (include yourself) </label>
            <select 
              className={
                errors.email && touched.email
                  ? "form-control text-input error"
                    : "form-control"
              } 
              id="number_of_guests" 
              name="number_of_attendees_to_bring" 
              value={values.number_of_attendees_to_bring}
              onChange={handleChange}
              onBlur={handleBlur}
            >
            <option value="" disabled>Select Number of Guests (including yourself)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            {errors.number_of_attendees_to_bring && touched.number_of_attendees_to_bring && (
              <div className="input-feedback">{errors.number_of_attendees_to_bring}</div>
            )}

        </div>

        <div className="form-group">
            <label htmlFor="events_to_attend" className="text-dark text-left"> What event(s) will you attend?</label>
            <select 
              className={
                errors.email && touched.email
                  ? "form-control text-input error"
                    : "form-control"
              } 
              id="events_to_attend" 
              name="events_to_attend" 
              value={values.events_to_attend}
              onChange={handleChange}
              onBlur={handleBlur}
            >
            <option value="" disabled>Select Events to Attend</option>
            <option value="White wedding">White Wedding</option>
            <option value="Wedding party">Wedding Party</option>
            <option value="Both events">Both Events</option>
            </select>
            {errors.events_to_attend && touched.events_to_attend && (
              <div className="input-feedback">{errors.events_to_attend}</div>
            )}

        </div>

        <div className="form-group">
            <label htmlFor="how_to_attend" className="text-dark text-left">Mode of Attendance</label>
            <select 
              className={
                errors.email && touched.email
                  ? "form-control text-input error"
                    : "form-control"
              } 
              id="how_to_attend" 
              name="mode_of_attendance" 
              value={values.mode_of_attendance}
              onChange={handleChange}
              onBlur={handleBlur}
            >
            <option value="" disabled>Select Mode of Attendance</option>
            <option value="Facebook Live">Facebook Live</option>
            <option value="In Person">In Person</option>
            <option value="Zoom">Zoom</option>
            </select>
            {errors.mode_of_attendance && touched.mode_of_attendance && (
              <div className="input-feedback">{errors.mode_of_attendance}</div>
            )}

        </div>

        <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="agree_to_notifications" 
            name="agree_to_notifications" 
            value={values.agree_to_notifications}
            onChange={handleChange}
            onBlur={handleBlur} 
            />
            <label className="form-check-label text-dark text-left" htmlFor="agree_to_notifications">I agree to receive notification updates</label>
            {errors.agree_to_notifications && touched.agree_to_notifications && (
              <div className="input-feedback">{errors.agree_to_notifications}</div>
            )}

        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
        {/* <p className="text-dark text-left font-weight-bold">On small devices, after hitting submit, navigate to the top of the page to see your submission status
        <span><a href="#home" className="btn btn_other_color">Go to Top</a></span>
        </p> */}
        <button id="register" type="submit" disabled={isSubmitting} className="btn btn-danger">Submit</button>
        </div>
        </form>
      </div>
      );
    }}
  </Formik>
       
      </div>
    );
  }
  
  
  
  export default Guestbook;