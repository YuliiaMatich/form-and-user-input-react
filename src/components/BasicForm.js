import { useState } from "react";

import useInput1 from "../hooks/useInput1";

const BasicForm = (props) => {

  const {
    value: nameValue,
    valueChangeHandler: nameChangeHandler,
    blurChangeHandler: blurNameHandler,
    isValid: nameIsValid,
    showError: nameShowError,
    reset: nameReset,
  } = useInput1((nameValue) => 
    nameValue.trim() !== ""
    );

  const {
    value: lastNameValue,
    valueChangeHandler: lastNameChangeHandler,
    blurChangeHandler: blurLastNameHandler,
    isValid: lastNameIsValid,
    showError: lastNameShowError,
    reset: lastNameReset
  } = useInput1(lastNameValue => lastNameValue.trim() !== "");


  const {
    value: emailValue,
    valueChangeHandler: emailChangeHandler,
    blurChangeHandler: blurEmailHandler,
    isValid: emailIsValid,
    showError: emailShowError,
    reset: emailReset
  } = useInput1(emailValue => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
     String(emailValue).toLowerCase()
     ));
  
 
  // const emailIsValid =
  //   /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
  //     String(emailInput).toLowerCase()
  //   );


    let formIsValid = false;
   
    if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
   

    nameReset();
    lastNameReset();
    emailReset();
  };

const nameInputClass = nameShowError 
? "form-control invalid" : "form-control";

const lastNameInputClass = lastNameShowError 
? "form-control invalid" : "form-control";

const emailInputClass = emailShowError 
? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClass}>
          <label htmlFor="name">First Name</label>
          <input 
          type="text" 
          id="name" 
          value={nameValue} 
          onChange={nameChangeHandler} 
          onBlur={blurNameHandler}/> 
          {nameShowError && <p className="error-text">Name must not be empty.</p>}
        </div>
       
        <div className={lastNameInputClass}>
          <label htmlFor="last-name">Last Name</label>
          <input 
          type="text" 
          id="last-name"
          value={lastNameValue} 
          onChange={lastNameChangeHandler}
          onBlur={blurLastNameHandler} />
          {lastNameShowError && <p className="error-text">Last name must not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email-address">E-Mail Address</label>
        <input 
        type="text" 
        id="email-address"
        value={emailValue} 
        onChange={emailChangeHandler} 
        onBlur={blurEmailHandler}/>
         {emailShowError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
