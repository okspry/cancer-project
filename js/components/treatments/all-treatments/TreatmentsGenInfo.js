var React = require('react');
var Surgeries = require('./surgeries/Surgeries');
var Chemotherapies = require('./chemotherapies/Chemotherapies');

var Link = require('react-router-component').Link;

var TreatmentsGenInfo = React.createClass({
	render: function() {
		return (

      <div>
        <h2>Jeremy Leventhal</h2>
        <div>
          <label>Birthday</label>
          <span>
            <small>&emsp;21-Feb-1945<i>&emsp;70 years old</i></small>
          </span>
        </div>

  			<h3>Treatment History</h3>

        <div className="clearfix">
          <h4>General History</h4>
          <div className="pull-right">
            <Link 
              global href="/treatments/general-history-form"
              className="glyphicon glyphicon-pencil"></Link>
          </div>
          <div>
            <div>
              <label>Colon Cancer&ensp;Stage 2</label><span><small>&emsp;14-Feb-2012</small></span>
            </div>
            <div>
              <label>Genetic or Predisposing Abnormality&emsp;</label><span>None</span>
            </div>
            <div>
              <label htmlFor="pcp">Primary Care Provider&emsp;</label>
              <span>Dr. Haggstrom<small>&emsp;(317)555-5544</small><small>&emsp;haggstrom@indiana.edu</small></span>
            </div>
          </div>
        </div>

        <hr />
        <Surgeries />
        <hr />
        <Chemotherapies />
        
      </div>

		)
	}
});

module.exports = TreatmentsGenInfo;