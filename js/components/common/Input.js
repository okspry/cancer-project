var React = require("react");

var Input = React.createClass({
	handleChange: function(e) {
		this.props.actionType(e.target.value);
	},
	render: function() {
		return (

	    <input
	    	onChange={this.handleChange}
	    	{...this.props}
	    	className="form-control" />

		);
	}
});

module.exports = Input;