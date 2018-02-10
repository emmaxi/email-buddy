// SurveyField contains logic to render a single label and text input

import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
      <div>
          <label><h5>{label}</h5></label>
          <input {...input}  style={{ marginBottom: '5px'}}/>
          {/*if touched is true, and error is not empty, render error message */}
          <div className="red-text" style={{ marginBottom: '20px' }}>
              {touched && error}
          </div>
      </div>
    );
};