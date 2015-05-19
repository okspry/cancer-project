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
	    		<h4 className="pull-left allies-number">{_.size(this.props.friends)} Allies</h4>
		    	<div className="button-div pull-right">
	          <button type="button" className="btn btn-default add-item">Invite a Friend to Join TROOP</button>
	          <button type="button" className="btn btn-default pad-left">Find Allies</button>
	        </div>
	      </div>

				<FriendsList friends={this.props.friends} />
	    
	    </div>
		)
	}
});

module.exports = Relationships;