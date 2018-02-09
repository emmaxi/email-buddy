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
            return <div>Emma</div>;
        } else {
            return (
                <div className="container">
                    <br/>
                    <SurveyList />
                    <div className="fixed-action-btn">
                        <Link to="/surveys/new" className="btn-floating btn-large red">
                            <i className="material-icons">add</i>
                        </Link>
                    </div>
                </div>

            );
        }
    }

    render() {
        return (
            <div>
                {this.renderDashboard()}
            </div>
        );
    }
};


function mapStateToProps(state) {
    console.log(state.surveys);
    return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(Dashboard);