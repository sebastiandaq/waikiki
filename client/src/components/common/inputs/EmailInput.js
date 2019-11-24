import React, {PropTypes} from 'react';
import * as inputValidation from './InputValidation';

const EmailInput = ({name, label, id, description, required, error}) => {
  let inputWrapper = 'form-group';
  if(error && error.length > 0) {
    inputWrapper += " " + "has-error";
  }

  const isValidEmailAddress = (emailAddress) => {
    let pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
  };

  const isEmail = (event) => {
    let id = event.target.id;
    if(event.target.value == ""){
      $('#'+id).removeClass('has-value');
      $('#'+id).removeClass('empty');
    }
    else {
      if(isValidEmailAddress(event.target.value)){
        $('#'+id).addClass('has-value');
        $('#'+id).removeClass('empty');
      }
      else{
        $('#'+id).removeClass('has-value');
        $('#'+id).addClass('empty');
      }
    }
  };

  return(
    <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <label htmlFor={name} className={required+" control-label"}>{label}</label>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <input type="email" name={name} className={required=="required" ? "form-control hx-textbox validate" : "form-control hx-textbox"} onChange={required=="required" ? inputValidation.isEmail : isEmail} id={id} required={required=="required" ?true:false}/>
        <em className="hx-form-field-description">{description}</em>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

EmailInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string,
  required: PropTypes.string,
  error: PropTypes.string
};

export default EmailInput;
