var React = require("react");

var BButton = React.createClass({
	handleClick: function() {
		this.props.action();
	},
	render: function() {
		return (

			<div className="btn" {...this.props} onClick={this.handleClick}>{this.props.children}</div>

		);
	}
});

module.exports = BButton;