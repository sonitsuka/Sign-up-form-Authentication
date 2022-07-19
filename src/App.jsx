// Form validation with React Hooks without a library. Alternative:using "useForm"

import "./styles.css";
import React, { useState } from "react";
import FormInput from "./components/FormImput";
// comment {/* */}

export default function App() {
  //const [userName, setUserName] = useState("");
  /** rerendering component */
  //const usernameRef = useRef();

  // best option
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    comfirmPassword: "",
    firstname: "",
    lastname: ""
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First name",
      errorMsg: "",
      label: "First name",
      required: true
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last name",
      errorMsg: "till 16 charactors ",
      label: "Last name",
      required: true
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMsg:
        "Username should be 3-12 character and should NOT include any special character!",
      label: "Username",
      //Set validation pattern, Capital, alphabets,Nr & the range of characters's lenght
      pattern: "^[A-Za-z0-9]{3,12}$",
      required: true
    },
    {
      id: 4,
      name: "email",
      // unnecessary to add pattern. email proof that the input as email
      type: "email",
      placeholder: "Email",
      errorMsg: "invalid email address",
      label: "Email",
      required: true
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMsg:
        "Password should be 8-25 characters include letter, number & special character",
      label: "Password",
      pattern:
        "^(?=.*[a-zA-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd][A-Za-zd!@#$%^&*()_+]{8,25}$",
      required: true
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMsg: "Passwords don't match",
      label: "Confirm Password",
      pattern: "values.password",
      required: true
    }
  ];

  // submit function show the saved data in console
  const handleSubmit = (e) => {
    e.preventDefault();
    //const data = new FormData(e.target);
    //console.log(Object.fromEntries(data.entries()));
  };

  // handels input changes
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // proof to login with FaceBook & Google
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <section className="App">
      {/* Background Color gradient */}
      <div className="color">1</div>
      <div className="color">2</div>
      <div className="color">3</div>
      <div className="box">
        {/* form elements */}
        <div className="form-container">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <h2>Login Form</h2>
              {/* call all input forms and change the value */}
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              {/*<FormInput type="text" placeholder="Last name" name="lastname" />*/}
              <button className="form--submit">Submit</button>
            </form>
          </div>
          <small>
            <span>or, continue with</span>
          </small>
        </div>
      </div>
    </section>
  );
}
