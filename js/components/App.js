var React = require('react');
var Template = require('./Template');
var Home = require('./home/Home');
var ProfilePage = require('./profile/ProfilePage');
var Calendar = require('./calendar/Calendar');
var TreatmentHistoryForm = require('./profile/treatments/general-history-form/TreatmentHistoryForm');
var ProcedureSummaryForm = require('./profile/treatments/all-treatments/surgeries/procedure-form/ProcedureSummaryForm');
var Messages = require('./messages/Messages');
var NotFoundPage = require('./NotFoundPage');

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var NotFound = Router.NotFound;

var App = React.createClass({
  render: function() {
  	return (

  		<div>
	      <Template>
					<Locations>
						<Location path="/" handler={Home} />
						<Location path="/profile(/*)" handler={ProfilePage} />
						<Location path="/calendar" handler={Calendar} />
						<Location path="/general-history-form" handler={TreatmentHistoryForm} />
						<Location path="/procedure-form" handler={ProcedureSummaryForm} />
						<Location path="/messages" handler={Messages} />
						<NotFound handler={NotFoundPage} />
					</Locations>
				</Template>
			</div>

  	)
  }
});

module.exports = App;