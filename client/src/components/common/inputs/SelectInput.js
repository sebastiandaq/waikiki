import React, {PropTypes} from 'react';
import * as inputValidation from './InputValidation';

const SelectInput = ({name, label, id, description, required, defaultOption, error, options}) => {
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
          <select name={name} className={required=="required" ? "hx-select form-control validate" : "hx-select form-control"} id={id} onChange={required=="required" ? inputValidation.onChange : onChange} required={required=="required" ?true:false}>
            <option value="">{defaultOption}</option>
            {
              options.map((option) => {
                return <option key={option.value} value={option.value}>{option.label}</option>;
              })
            }
          </select>
          <em className="hx-form-field-description">{description}</em>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  defaultOption: PropTypes.string,
  description: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.string,
  options: PropTypes.array
  // options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
