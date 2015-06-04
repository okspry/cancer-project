var React = require('react');
var TreatmentsGenInfo = require('./all-treatments/TreatmentsGenInfo');
var TreatmentHistoryForm = require('./general-history-form/TreatmentHistoryForm');
var SurgeryRoutes = require('./all-treatments/surgeries/SurgeryRoutes');

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var TreatmentHistoryStore = require('../../../stores/TreatmentHistoryStore');

function getData() {
  return { 
    treatmentHistoryItems: TreatmentHistoryStore.getTreatmentHistory(),
    formOptions: TreatmentHistoryStore.getFormOptions()
  }
}

var Treatments = React.createClass({
	getInitialState: function() {
    return getData();
  },
  componentWillMount: function() {
    TreatmentHistoryStore.addChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(getData());
  },
  componentWillUnmount: function() {
    TreatmentHistoryStore.removeChangeListener(this._onChange);
  },
	render: function() {
		var generalInfo = _.get(this.state.treatmentHistoryItems, "generalInfo");
    var formOptions = this.state.formOptions;
    var surgeries = _.get(this.state.treatmentHistoryItems, "surgeries");
    var chemotherapies = _.get(this.state.treatmentHistoryItems, "chemotherapies");
    var radiationTreatments = _.get(this.state.treatmentHistoryItems, "radiationTreatments");
		return (

			<Locations contextual>
				<Location path="/" 
					handler={TreatmentsGenInfo}
					generalInfo={generalInfo} />
				<Location 
					path="/all-treatments/general-history-form" 
					handler={TreatmentHistoryForm}
					generalInfo={generalInfo}
					formOptions={formOptions} />
			</Locations>

		)
	}
});

module.exports = Treatments;