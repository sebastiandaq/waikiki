import React, {PropTypes} from 'react';
import * as inputValidation from './InputValidation';

const RadioInput = ({name, label, description, id, required, error, options}) => {
  let inputWrapper = 'form-group';
  if(error && error.length > 0) {
    inputWrapper += " " + "has-error";
  }

  const atLeastOneRadio = event => {
    let id = event.target.id;
    let checkedRadios = $('#'+id).parents('.hx-radio-btns').find('input[type=radio]:checked');
    if(checkedRadios.length > 0){
      $('#'+id).parents('.hx-radio-btns').addClass('has-value');
    }
    else{
      $('#'+id).parents('.hx-radio-btns').removeClass('has-value');
    }
  };

  return(
      <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <label htmlFor={name} className={required+" control-label"}>{label}</label>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className={required=="required" ? "hx-radio-btns validate" : "hx-radio-btns"}>
            {
              options.map((option) => {
                return (
                  <label key={option.label} className="radio">
                    <input type="radio" name={name} className="" value={option.value} id={id} onChange={required=="required" ? inputValidation.atLeastOneRadio : atLeastOneRadio} required={required=="required" ?true:false}/> {option.label}
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

RadioInput.propTypes = {
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

export default RadioInput;
