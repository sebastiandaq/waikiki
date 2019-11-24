import $ from 'jquery';

const isValidEmailAddress = (emailAddress) => {
  let pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
  return pattern.test(emailAddress);
};

export function onChange(event){
  let id = event.target.id;
  if(event.target.value == ""){
    $('#'+id).removeClass('has-value');
    $('#'+id).addClass('empty');
    $('#'+id).addClass('validate');
  }
  else {
    $('#'+id).addClass('has-value');
    $('#'+id).removeClass('empty');
    $('#'+id).removeClass('validate');
  }
}

export function isEmail(event){
  let id = event.target.id;
  if(event.target.value == "" || !(isValidEmailAddress(event.target.value))){
    $('#'+id).removeClass('has-value');
    $('#'+id).addClass('empty');
    $('#'+id).addClass('validate');
  }
  else {
    $('#'+id).addClass('has-value');
    $('#'+id).removeClass('empty');
    $('#'+id).removeClass('validate');
  }
}

export function atLeastOneRadio(event) {
  // return ($('input[type=radio]:checked').size() > 0);
  let id = event.target.id;
  let checkedRadios = $('#'+id).parents('.hx-radio-btns').find('input[type=radio]:checked');
  if(checkedRadios.length > 0){
    $('#'+id).parents('.hx-radio-btns').addClass('has-value');
    $('#'+id).parents('.hx-radio-btns').removeClass('validate');
    $('#'+id).parents('.hx-radio-btns').removeClass('empty');
  }
  else{
    $('#'+id).parents('.hx-radio-btns').removeClass('has-value');
    $('#'+id).parents('.hx-radio-btns').addClass('validate');
    $('#'+id).parents('.hx-radio-btns').addClass('empty');
  }
}

export function atLeastOneCheckbox(event){
  let id = event.target.id;
  let checkedCheckboxes = $('#'+id).parents('.hx-checkboxs').find('input[type=checkbox]:checked');
  if(checkedCheckboxes.length > 0){
    $('#'+id).parents('.hx-checkboxs').addClass('has-value');
    $('#'+id).parents('.hx-checkboxs').removeClass('validate');
    $('#'+id).parents('.hx-radio-btns').removeClass('empty');
  }
  else{
    $('#'+id).parents('.hx-checkboxs').removeClass('has-value');
    $('#'+id).parents('.hx-checkboxs').addClass('validate');
    $('#'+id).parents('.hx-radio-btns').addClass('empty');
  }
}

export default {onChange,isEmail,atLeastOneRadio,atLeastOneCheckbox};
