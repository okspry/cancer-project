var React = require('react');
var Template = require('./Template');
var Home = require('./home/Home');
var ProfilePage = require('./profile/ProfilePage');
var Calendar = require('./calendar/Calendar');
var TreatmentHistoryForm = require('./profile/treatments/general-history-form/TreatmentHistoryForm');
var ProcedureSummaryForm = require('./profile/treatments/all-treatments/surgeries/procedure-form/ProcedureSummaryForm');
var NotFoundPage = require('./NotFoundPage');

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var NotFound = Router.NotFound;

var TreatmentHistoryStore = require('../stores/TreatmentHistoryStore');

function getData() {
  return { 
    formOptions: TreatmentHistoryStore.getFormOptions(),
    surgeryTemplate: TreatmentHistoryStore.getSurgeryTemplate(),
    surgeryFormOptions: TreatmentHistoryStore.getSurgeryFormOptions()
  }
}

var App = React.createClass({
	getInitialState: function() {
		return getData();
	},
  render: function() {
  	return (

  		<div>
	      <Template>
					<Locations>
						<Location path="/" handler={Home} />
						<Location path="/profile(/*)" handler={ProfilePage} />
						<Location path="/calendar" handler={Calendar} />
						<Location path="/general-history-form" handler={TreatmentHistoryForm} formOptions={this.state.formOptions} />
						<Location path="/procedure-form" handler={ProcedureSummaryForm} formOptions={this.state.surgeryFormOptions} />
						<NotFound handler={NotFoundPage} />
					</Locations>
				</Template>
			</div>

  	)
  }
});

module.exports = App;