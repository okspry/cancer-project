var React = require("react");
var TreatmentHistoryActions = require("../../actions/TreatmentHistoryActions");
var TextInput = require('./TextInput');

var FormGroup = React.createClass({
	render: function() {
		return (

			<div className="form-group">
		    <label htmlFor={this.props.infoType}>{this.props.label}</label>
		    <TextInput
		    	{...this.props} />
		  </div>

		);
	}
});

module.exports = FormGroup;