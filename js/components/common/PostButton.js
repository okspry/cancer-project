var React = require("react");
var FeedActions = require("../../actions/FeedActions");

var PostButton = React.createClass({
	handleClick: function() {
		if(this.props.newItem["content"] != "") { 
			this.props.actionPost(this.props.newItem);
			this.props.actionNewTemplate();
		};
	},
	render: function() {
		return (

			<div className="btn btn-primary btn-sm" onClick={this.handleClick}>Post</div>

		);
	}
});

module.exports = PostButton;