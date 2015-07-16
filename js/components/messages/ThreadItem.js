var React = require('react');

var MessageActions = require('../../actions/MessageActions');

var ThreadItem = React.createClass({
	handleClick: function() {
		MessageActions.selectThread(this.props.index);
	},
	render: function() {
		return (

			<li className="media" onClick={this.handleClick}>
				<div className="media-left">
	        <a href="#">
	          <img className="media-object" src={this.props.thread["pictureURL"]} alt={this.props.thread["userID"] + "'s Picture"} width="40" height="40" />
	        </a>
	      </div>
				<div className="media-body">
					<h5 className="media-heading">
						<strong>{this.props.thread["subject"]}</strong>
						<br />
						<small><strong>{this.props.thread["userID"]}</strong></small>
						<br />
						<small>{this.props.thread["content"]}</small>
					</h5>
				</div>
		  </li>
			
		)
	}
});

module.exports = ThreadItem;