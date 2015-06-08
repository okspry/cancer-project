var React = require("react");
var Input = require('./Input');

var FormGroup = React.createClass({
	render: function() {
		return (

			<div className="form-group">
		    <label htmlFor={this.props.infoType}>{this.props.label}</label>
		    <Input
		    	placeholder={this.props.placeholder}
		    	id={this.props.infoType}
		    	type={this.props.type}
		    	actionType={this.props.actionType}
		    	value={this.props.value} />
		  </div>

		);
	}
});

module.exports = FormGroup;