import React, { useRef, useState } from "react";
import FormInput from "./formInput";
import "./form.css";

const Form = () => {
  // const userNameRef = useRef()
  // const emailRef = useRef()
  // const fNameRef = useRef()
  // const passRef = useRef()

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "password should be 8-20 characters and include atleat 1 letter, i number and one special character",
      label: "Password",
      required: true,
      pattern: "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "CnfmPassword",
      errorMessage: "password don't match!",
      label: "CnfmPassword",
      required: true,
      pattern: values.password,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(values);
  // console.log("re-render!")

  return (
    <div className="form">
      {/* <form onSubmit={handleSubmit}>
            <FormInput placeholder="Username" refer={userNameRef}/>
            <FormInput placeholder="Email" refer={emailRef}/>
            <FormInput placeholder="Full Name" refer={fNameRef}/>
            <FormInput placeholder="Password" refer={passRef}/>
            <button>Submit</button>
        </form> */}

      <form onSubmit={handleSubmit} className="form-ui">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
