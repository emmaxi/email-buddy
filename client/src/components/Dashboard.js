import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyList from './surveys/SurveyList';
import { fetchSurveys } from '../actions';

class Dashboard extends Component {
    componentDidMount()
    {
        this.props.fetchSurveys();
    }

    renderDashboard()
    {
        if (this.props.surveys.length === 0) {
            return (
            <div className="col s12 center add-height valign-wrapper">
                <div className="row">
                    <h5 className="center-align grey-text">Time to create your first survey!</h5>
                </div>
            </div>
            );
        } else {
            return (
                <div className="container">
                    <br/>
                    <SurveyList />
                </div>

            );
        }
    }

    render() {
        return (
            <div>
                {this.renderDashboard()}
                <div className="fixed-action-btn">
                    <Link to="/surveys/new" className="btn-floating btn-large red">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            </div>
        );
    }
};


function mapStateToProps(state) {
    return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(Dashboard);