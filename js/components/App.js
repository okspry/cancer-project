var React = require('react');
var Template = require('./Template');
var Home = require('./home/Home');
var Profile = require('./profile/Profile');
var Relationships = require('./profile/relationships/Relationships');
var TreatmentSummary = require('./profile/treatments/TreatmentSummary');
var TreatmentHistoryForm = require('./profile/treatments/general-history-form/TreatmentHistoryForm');
var Calendar = require('./calendar/Calendar');
var NotFoundPage = require('./NotFoundPage');

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var NotFound = Router.NotFound;

var FriendStore = require('../stores/FriendStore');
var CalendarStore = require('../stores/CalendarStore');

var App = React.createClass({
	getInitialState: function() {
		return {
			friends: FriendStore.getAll(),
			calendarItems: CalendarStore.getAll()
		}
	},
	updateFriends: function(newFriends) {
		this.setState({
		})
	},
  render: function() {
  	return (

  		<div>
	      <Template>
					<Locations>
						<Location path="/home" handler={Home} />
						<Location path="/profile" handler={Profile} />
						<Location path="/profile/treatments" handler={TreatmentSummary} />
						<Location path="/profile/relationships" handler={Relationships} friends={this.state.friends} />
						<Location path="/profile/treatments/general-history-form" handler={TreatmentHistoryForm} />
						<Location path="/calendar" handler={Calendar} calendarItems={this.state.calendarItems} />
						<NotFound handler={NotFoundPage} />
					</Locations>
				</Template>
			</div>

  	)
  }
});

module.exports = App;