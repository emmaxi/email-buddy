import React from 'react';
import background2 from '../images/background2.jpg';
import background3 from '../images/background3.jpg';



const Landing = () => {
  return (
      <div>
          <div className="LandingTitle">
              <div className = "card transparent z-depth-0">
                  <h1 className="header center white-text title">Email Buddy</h1>
                  <div className="row center">
                      <h5 className="header col s12 white-text">A modern way to collect feedback from your user</h5>
                  </div>
                  <div className="row center">
                      <a href="/auth/google" id="login"
                         className="btn-large waves-effect waves-light teal lighten-1">
                          Get Started
                      </a>
                  </div>
              </div>
          </div>

          <div className="container">
              <div className="section">
                  <div className="row">
                      <div className="col s12 m4">
                          <div className="icon-block">
                              <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                              <h5 className="center">Speeds up</h5>

                              <p className="light">We did most of the heavy lifting for you to provide a quick and reliable way to collect the mass of user feedback about your awesome production. </p>
                          </div>
                      </div>

                      <div className="col s12 m4">
                          <div className="icon-block">
                              <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                              <h5 className="center">User Experience Focused</h5>
                              <p className="light">By importing third party login method, we were able to provide a concise and fast way for users to enjoy all service of our platform.</p>
                          </div>
                      </div>

                      <div className="col s12 m4">
                          <div className="icon-block">
                              <h2 className="center brown-text">
                                  <i className="material-icons">mood</i></h2>
                              <h5 className="center">Reliable</h5>
                              <p className="light">We have integrated the SendGrid email delivery service and Stripe for safety payments and trust your emails reach the inbox.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="parallax-container valign-wrapper row">
              <img className="col s10"
                   src={background2}
                   alt="Unsplashed background img 2"
                   style={{ padding: '0px'}}
              />
              <div className="section no-pad-bot col s2">
                  <div className="container">
                      <div className="row center">
                          <h5 className="header col s12 light">Get your work organized and efficient</h5>
                      </div>
                  </div>
              </div>
          </div>

          <br/><br/>

          <div className="parallax-container valign-wrapper row"
               style={{ marginBottom: '0px'}}>
              <div className="section no-pad-bot col s2">
                  <div className="container">
                      <div className="row center">
                          <h5 className="header col s12 light">Save your time to explore the nature</h5>
                      </div>
                  </div>
              </div>
              <img
                  className="col s10"
                  src={background3}
                  alt="Unsplashed background img 3"
                  style={{ padding: '0px'}}
              />
          </div>
      </div>



  );
};


export default Landing;