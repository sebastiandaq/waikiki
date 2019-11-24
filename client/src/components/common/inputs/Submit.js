import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as alertify from 'alertifyjs';

class Submit extends React.Component{

  onSubmit(event) {
    event.preventDefault();
    let requiredFields = $('#applicantInforForm').find('.validate').length;
    if(requiredFields == 0){
      let submit = this.props;
      alertify.confirm('Application Submit Warning', 'Please check your details before submitting, as you will not be able to modify them later. Click OK to submit your details',
        function(){
          $('.mandatory-info').hide();
          $('#applicantFormSubmit').addClass('disabled');
          let formData = $('#applicantInforForm').serializeArray();
          submit.actions.addApplicantInfo(formData);
        },
        function(){
          alertify.warning("Details not submitted");
        });
    }
    else{
      alertify.error('Please check the red highlighted field');
      $('.validate').addClass('empty');
      $('.mandatory-info').show();
    }
  }

render() {
  if(this.props.submit_response.length > 0){
    if(this.props.submit_response[0].response == 'SUCCESS'){
      alertify.success("Your details have been submitted");
    }
    else if(this.props.submit_response[0].response == 'ERROR'){
      $('#applicantFormSubmit').removeClass('disabled');
      alertify.error("Error occured while submitting your details");
    }
    else{
      $('#applicantFormSubmit').removeClass('disabled');
      alertify.error("Internal Server Error");
    }
  }
  return (
    <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <button type="submit" id="applicantFormSubmit" className="hx-submit btn btn-success" onClick={this.onSubmit.bind(this)}>Submit</button>
    </div>
  );
}
}

Submit.propTypes = {
  submit_response: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    submit_response: state.formSubmit
  };
}

export default connect(mapStateToProps)(Submit);
