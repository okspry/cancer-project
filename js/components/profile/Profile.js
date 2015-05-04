var React = require('react');
var ProfileTemplate = require('./ProfileTemplate');
var TreatmentSummary = require('./treatments/TreatmentSummary');
var Relationships = require('./relationships/Relationships');

var Profile = React.createClass({
	render: function() {
		return (

			<div>
			  <ProfileTemplate tabpanel={this.props.tabpanel} />
			</div>

		 )
	}
});

module.exports = Profile;