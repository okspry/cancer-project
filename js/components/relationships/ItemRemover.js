var React = require('react');
var FriendActions = require('../../actions/FriendActions');

var ItemRemover = React.createClass({
	render: function() {
		return (

			<button type="button" index={this.props.index} onClick={this.handleClick} className="close" aria-label="remove" data-toggle="modal" data-target="#confirm-friend-delete">
				<span aria-hidden="true">&times;</span>
			</button>

		)
	}
});

module.exports = ItemRemover;