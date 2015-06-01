var React = require("react");
var FeedActions = require("../../actions/FeedActions");

var PostButton = React.createClass({
	handleClick: function() {
		if(this.props.newItem["content"] != "") { 
			FeedActions.postStatus(this.props.newItem);
			FeedActions.newStatusTemplate();
		};
	},
	render: function() {
		return (

			<div className="btn btn-primary btn-sm" onClick={this.handleClick}>Post</div>

		);
	}
});

module.exports = PostButton;