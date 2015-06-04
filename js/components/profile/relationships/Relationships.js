var React = require('react');
var FriendsList = require('./FriendsList');
var InviteFriendForm = require('./InviteFriendForm');

var FriendStore = require('../../../stores/FriendStore');

function friends() {
	return { friends: FriendStore.getAll() }
}

var Relationships = React.createClass({
	getInitialState: function() {
		return friends();
	},
	componentWillMount: function() {
		FriendStore.addChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(friends());
	},
	render: function() {
		return (

	    <div>
	    	<div className="clearfix">
	    		<h4 className="pull-left allies-number">{_.size(this.state.friends)} Allies</h4>
		    	<div className="button-div pull-right">
	          <button type="button" className="btn btn-default add-item">Invite a Friend to Join TROOP</button>
	          <button type="button" className="btn btn-default pad-left">Find Allies</button>
	        </div>
	      </div>

				<FriendsList friends={this.state.friends} />
	    
	    </div>
		)
	}
});

module.exports = Relationships;