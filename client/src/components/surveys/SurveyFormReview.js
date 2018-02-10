// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
        <div className="row">
            <div className="col s12">
                <div>
                    <h5 className="left-align grey-text darken-1">{label}:</h5>
                </div>
            </div>
            <div className="col s12">
                <div className="left-align grey-text darken-4" style={{ marginTop: '15px'}}>
                    {formValues[name]}
                </div>
            </div>
            <hr/>
        </div>
        );
    });

    return (
        <div className="container">
            <div style={{ marginBottom: '15px'}}>
                <h4 className="teal-text">Please confirm your entries:</h4>
            </div>
            {reviewFields}
            <button
                className="yellow darken-3 white-text btn-flat"
                onClick={onCancel}>
                Edit
            </button>
            <button
                onClick={() => submitSurvey(formValues, history)}
                className="teal btn-flat right white-text">
                Send
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

//connect state to redux store
function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));