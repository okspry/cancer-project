var React = require('react');
var Template = require('./Template');
var Home = require('./home/Home');
var Relationships = require('./relationships/Relationships');
var TreatmentSummary = require('./treatments/TreatmentSummary');
var TreatmentHistoryForm = require('./treatments/general-history-form/TreatmentHistoryForm.js');
var NotFoundPage = require('./NotFoundPage');

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var NotFound = Router.NotFound;

var FriendStore = require('../stores/FriendStore');

function getFriends() {
	return {
		allFriends: FriendStore.getAll()
	}
}

var App = React.createClass({
	getInitialState: function() {
		return getFriends()
	},
  render: function() {
  	return (

  		<div>
	      <Template>
					<Locations>
						<Location path="/home" handler={Home} />
						<Location path="/relationships" handler={Relationships} friends={this.state.allFriends} />
						<Location path="/treatments" handler={TreatmentSummary} />
						<Location path="/treatments/general-history-form" handler={TreatmentHistoryForm} />
						<NotFound handler={NotFoundPage} />
					</Locations>
				</Template>
			</div>

  	)
  }
});

module.exports = App;