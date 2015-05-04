var React = require('react');
var ProfileGenInfo = require('../ProfileGenInfo');
var TreatmentHistoryForm = require('./general-history-form/TreatmentHistoryForm');
var TreatmentsGenInfo = require('./all-treatments/TreatmentsGenInfo');

var TreatmentSummary = React.createClass({
	render: function() {
		return (

			<div>
				<ProfileGenInfo />
	      <TreatmentsGenInfo />
	    </div>

		)
	}
});

module.exports = TreatmentSummary;