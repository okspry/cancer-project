var React = require('react');

var MessageActions = require('../../actions/MessageActions');

var CurrentThread = React.createClass({
	render: function() {
		return (

			<li className="media">
				<h4>{this.props.currentThread["userID"]}</h4>
				<div className="media-body">
					<h5 className="media-heading">
						<strong>{this.props.currentThread["subject"]}</strong>
						<br />
						<small><strong>{this.props.currentThread["userID"]}</strong></small>
						<br />
						<small>{this.props.currentThread["content"]}</small>
					</h5>
				</div>
		  </li>
			
		)
	}
});

module.exports = CurrentThread;