var React = require("react");

var PostButton = React.createClass({
	handleClick: function() {
		if(this.props.item["sendTo"] && this.props.item["subject"]) {
			if(this.props.item["sendTo"] != "" && this.props.item["subject"] != "" && this.props.item["content"] != "") { 
				this.props.actionPost(this.props.item);
				this.props.actionNewTemplate();
			};
		} else if (!this.props.item["sendTo"] && !this.props.item["subject"]) {
			if(this.props.item["content"] != "") { 
				this.props.actionPost(this.props.item);
				this.props.actionNewTemplate();
			};
		};
	},
	render: function() {
		return (

			<div className="btn btn-primary btn-sm" {...this.props} onClick={this.handleClick}>{this.props.label}</div>

		);
	}
});

module.exports = PostButton;