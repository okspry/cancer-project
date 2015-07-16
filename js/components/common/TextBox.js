var React = require("react");
var FeedActions = require("../../actions/FeedActions");

var TextBox = React.createClass({
	handleChange: function() {
		var oldMsg = this.props.content;
		var newMsg = oldMsg = $("textarea").val();
		this.props.actionType(newMsg);
	},
	render: function() {
		return (

			<textarea className="form-control" {...this.props} onChange={this.handleChange} value={this.props.content}></textarea>

		);
	}
});

module.exports = TextBox;