var React = require('react');
var FriendActions = require('../../../actions/FriendActions');

var ItemRemover = React.createClass({
	render: function() {
		return (

			<button type="button" index={this.props.index} onClick={this.deleteFriend} className="close" aria-label="remove" >
				<span aria-hidden="true">&times;</span>
			</button>

		)
	}
});

module.exports = ItemRemover;