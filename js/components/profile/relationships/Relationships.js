var React = require('react');
var FriendsList = require('./FriendsList');
var InviteFriendForm = require('./InviteFriendForm');
var ProfileGenInfo = require('../ProfileGenInfo');

var Relationships = React.createClass({
	render: function() {
		return (

	    <div>
	    	<ProfileGenInfo />
	    	<div className="clearfix">
		    	<div className="button-div pull-right">
	          <button type="button" className="btn btn-default add-item">Invite a Friend to Join TROOP</button>
	          <button type="button" className="btn btn-default">Find Allies</button>
	        </div>
	      </div>

				<FriendsList friends={this.props.friends} />
	    
	    </div>
		)
	}
});

module.exports = Relationships;