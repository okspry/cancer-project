var React = require('react');
var TreatmentHistoryForm = require('./general-history-form/TreatmentHistoryForm');
var TreatmentsGenInfo = require('./all-treatments/TreatmentsGenInfo');

var TreatmentSummary = React.createClass({
	render: function() {
		return (

      <TreatmentsGenInfo />

		)
	}
});

module.exports = TreatmentSummary;