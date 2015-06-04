var React = require("react");
var TreatmentHistoryActions = require("../../actions/TreatmentHistoryActions");
var Input = require('./Input');

var FormGroup = React.createClass({
	render: function() {
		return (

			<div className="form-group">
		    <label>{this.props.label}</label>
		    <Input
		    	{...this.props} />
		  </div>

		);
	}
});

module.exports = FormGroup;