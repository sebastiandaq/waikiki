import React, {PropTypes} from 'react';
import * as inputValidation from './InputValidation';

const NumberInput = ({name, label, id, description, required, error}) => {
  let inputWrapper = 'form-group';
  if(error && error.length > 0) {
    inputWrapper += " " + "has-error";
  }

  const onChange = (event) => {
    let id = event.target.id;
    if(event.target.value == ""){
      $('#'+id).removeClass('has-value');
    }
    else {
      $('#'+id).addClass('has-value');
    }
  };

  return(
    <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <label htmlFor={name} className={required+" control-label"}>{label}</label>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <input type="number" name={name} className={required=="required" ? "form-control hx-textbox hx-number-field validate" : "form-control hx-textbox hx-number-field"} onChange={required=="required" ? inputValidation.onChange : onChange} id={id} required={required=="required" ?true:false}/>
        <em className="hx-form-field-description">{description}</em>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string,
  required: PropTypes.string,
  error: PropTypes.string
};

export default NumberInput;
