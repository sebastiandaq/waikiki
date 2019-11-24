import React, {PropTypes} from 'react';
import * as inputValidation from './InputValidation';

const CheckboxInput = ({name, label, id, description, required, error, options}) => {
  let inputWrapper = 'form-group';
  if(error && error.length > 0) {
    inputWrapper += " " + "has-error";
  }

  const atLeastOneCheckbox = event => {
    let id = event.target.id;
    let checkedCheckboxes = $('#'+id).parents('.hx-checkboxs').find('input[type=checkbox]:checked');
    if(checkedCheckboxes.length > 0){
      $('#'+id).parents('.hx-checkboxs').addClass('has-value');
    }
    else{
      $('#'+id).parents('.hx-checkboxs').removeClass('has-value');
    }
  };

  return(
    <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <label htmlFor={name} className={required+" control-label"}>{label}</label>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div id={id} className={required=="required" ? "hx-checkboxs validate" : "hx-checkboxs"}>
          {
            options.map((option, index) => {
              return (
                <label key={option.label} className="checkbox-inline">
                  <input type="checkbox" name={option.label.toLowerCase()} className="" id={index} onChange={required=="required" ? inputValidation.atLeastOneCheckbox : atLeastOneCheckbox} value={option.value}/> {option.label}
                  </label>
                );
              })
            }
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
      <em className="hx-form-field-description">{description}</em>
    </div>
  );
};

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  description: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default CheckboxInput;
