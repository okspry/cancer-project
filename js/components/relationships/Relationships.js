var React = require('react');
var FriendsList = require('./FriendsList');
var InviteFriendForm = require('./InviteFriendForm');

var Relationships = React.createClass({
	render: function() {
		return (

	    <div id="relationships">

	    	<div className="button-div">
          <button type="button" className="btn btn-default add-item">Invite a Friend to Join TROOP</button>
        </div>

        <ul className="nav nav-tabs">
          <li role="presentation" className="active"><a href="#friends-list" aria-controls="friends-list" role="tab" data-toggle="tab">My Allies</a></li>
          <li role="presentation"><a href="#invite-friend-form" aria-controls="invite-friend-form" role="tab" data-toggle="tab">Find New Allies</a></li>
        </ul>

        <div className="tab-content">
				  <FriendsList friends={this.props.friends} role="tabpanel" className="tab-pane fade in active" id="friends-list" />
				  <div></div>
				</div>
	    
	    </div>
		)
	}
});

module.exports = Relationships;