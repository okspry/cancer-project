var React = require('react');
var ProfileGenInfo = require('./ProfileGenInfo');
var TreatmentSummary = require('./treatments/TreatmentSummary');
var Relationships = require('./relationships/Relationships');

var Profile = React.createClass({
	render: function() {
		return (

			<div>
			  <ProfileGenInfo />
			</div>

		 )
	}
});

module.exports = Profile;