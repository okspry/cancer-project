var React = require('react');
var DateSelector = require('../../../common/DateSelector');

var TreatmentHistoryActions = require('../../../../actions/TreatmentHistoryActions');

var CancerDiagnosisDateSelector = React.createClass({
	render: function() {
		return (

			<div className="form-group">
			  <label htmlFor="date-of-diagnosis">Date of Diagnosis</label>
			  <DateSelector 
			  	{...this.props} />
			</div>

		)
	}
});

module.exports = CancerDiagnosisDateSelector;