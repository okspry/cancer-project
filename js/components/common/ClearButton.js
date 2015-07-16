var React = require("react");

var ClearButton = React.createClass({
	handleClick: function() {
		this.props.actionClear();
	},
	render: function() {
		return (

			<div className="btn btn-default btn-sm pad-left" onClick={this.handleClick}>Clear</div>

		);
	}
});

module.exports = ClearButton;