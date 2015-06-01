var React = require("react");
var FeedActions = require("../../actions/FeedActions");

var TextBox = React.createClass({
	handleChange: function() {
		var oldMsg = this.props.newItem["content"];
		var newMsg = oldMsg = $("textarea").val();
		FeedActions.changeStatus(newMsg);
	},
	render: function() {
		return (

			<textarea className="form-control" placeholder="Share your thoughts..." onChange={this.handleChange} value={this.props.newItem["content"]}></textarea>

		);
	}
});

module.exports = TextBox;