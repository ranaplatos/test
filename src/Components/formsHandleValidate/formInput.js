import React, { useState } from "react";

const FormInput = (props) => {
  // console.log(props);

  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      {/* <label for="username" className='label'>Username</label>
        <input placeholder={props.placeholder} ref={props.refer}/> */}

      <label className="label">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="error">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
