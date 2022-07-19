import { useState } from "react";
import "../styles.css";

// control Input format
const FormInput = (props) => {
  // Validation event of input: clicked the form and focused
  const [focused, setFocused] = useState(false);
  // call them from the APP.jsx
  const { label, onChange, id, errorMsg, ...inputProps } = props;
  // validation:
  const handelFocused = (e) => {
    setFocused(true);
  };

  return (
    <div className="form--input">
      <label>{label}</label>
      <input
        {...inputProps}
        onBlur={handelFocused}
        onChange={onChange}
        // only one click, only the condithion with "correct confirm Password and other element also correct
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <p className="form--errorMsg">{errorMsg}</p>
    </div>
  );
};

export default FormInput;

/** 
 *       <input
        name={props.name}
        placeholder={props.placeholder}
        Version: all input box required
         <input {...inputProps} onChange={onChange} required/>
        //onChange={(e) => props.usernameRef(e.target.value)}
      />

      === Note === 
      onBlur is "update React state"
      Use React onChange if you want to give your users a real-time experience or to update React state.
      Use React onBlur if you want to execute code after they’re out of focus or make API calls.
      
 */
