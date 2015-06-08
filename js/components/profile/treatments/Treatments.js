var React = require('react');
var TreatmentsGenInfo = require('./all-treatments/TreatmentsGenInfo');
var TreatmentHistoryForm = require('./general-history-form/TreatmentHistoryForm');

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var Treatments = React.createClass({
	render: function() {
		return (

			<Locations contextual>
				<Location path="/" handler={TreatmentsGenInfo} />
			</Locations>

		)
	}
});

module.exports = Treatments;