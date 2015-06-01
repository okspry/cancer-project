var React = require('react');
var CancerTypeSelector = require('./CancerTypeSelector');
var CancerStageSelector = require('./CancerStageSelector');
var CancerDiagnosisDateSelector = require('./CancerDiagnosisDateSelector');
var GeneticAbnormality = require('./GeneticAbnormality');
var FormGroup = require('../../../common/FormGroup');
var Link = require('react-router-component').Link;

var TreatmentHistoryStore = require('../../../../stores/TreatmentHistoryStore');
var TreatmentHistoryActions = require('../../../../actions/TreatmentHistoryActions');

function getData() {
  return { 
  	formOptions: TreatmentHistoryStore.getFormOptions(),
  	treatmentHistoryItems: TreatmentHistoryStore.getTreatmentHistory()
  }
}

var TreatmentHistoryForm = React.createClass({
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
		var generalInfoItemsState = _.get(this.state.treatmentHistoryItems, "generalInfo");
		var formOptionsState = this.state.formOptions;
		var disabledValue = generalInfoItemsState["geneticOrPredisposingAbnormality"] == "yes" ? "" : "disabled";

		return (

			<div className="col-md-8">
				<h2>Document Treatment</h2>
				<form data-toggle="validator" role="form">

				<CancerTypeSelector 
					currentVal={_.get(generalInfoItemsState, "cancerType")} 
					cancerTypes={_.get(formOptionsState, "cancerTypes")} />

				<CancerStageSelector 
					currentVal={_.get(generalInfoItemsState, "cancerStage")} 
					cancerStages={_.get(formOptionsState, "cancerStages")} />

				<FormGroup 
				  	infoType={_.findKey(generalInfoItemsState, "cancerDiagnosisDate")}
				  	label="Diagnosis Date"
				  	type="date"
				  	value={generalInfoItemsState["cancerDiagnosisDate"]}
				  	actionType={TreatmentHistoryActions.changeDiagnosisDate} />

				<GeneticAbnormality
					yesNoOptions={_.get(formOptionsState, "geneticOrPredisposingAbnormality")}
					typeValue={_.get(generalInfoItemsState, "geneticOrPredisposingAbnormalityType")}
					geneticAbnormalityTypes={_.get(formOptionsState, "geneticOrPredisposingAbnormalityTypes")}
					disabledValue={disabledValue} />

				<div className="well">
				  <label>Primary Care Doctor's Information</label>
				  <FormGroup 
				  	infoType={_.findKey(generalInfoItemsState, "pcpName")}
				  	label="Name"
				  	placeholder="First Last"
				  	type="text"
				  	value={generalInfoItemsState["pcpName"]}
				  	actionType={TreatmentHistoryActions.changePCPName} />
				  <FormGroup 
				  	infoType={_.findKey(generalInfoItemsState, "pcpPhone")}
				  	label="Phone"
				  	placeholder="(555)555-5555"
				  	type="tel"
				  	value={generalInfoItemsState["pcpPhone"]}
				  	actionType={TreatmentHistoryActions.changePCPPhone} />
				  <FormGroup 
				  	infoType={_.findKey(generalInfoItemsState, "pcpEmail")}
				  	label="Email"
				  	placeholder="yourname@email.com"
				  	type="email"
				  	value={generalInfoItemsState["pcpEmail"]}
				  	actionType={TreatmentHistoryActions.changePCPEmail} />
				</div>

				<div className="form-group">
					<Link 
              global href="/profile/treatments/general-history-form"
              className="btn-primary"></Link>
					<BButton 
						className="btn-primary"
						actionType={TreatmentHistoryActions.submitForm}
						href="/profile/treatments">Save Changes</BButton>
					<BButton 
						className="pad-left"
						actionType={TreatmentHistoryActions.submitForm}>Cancel Changes</BButton>
				</div>

				</form>
			</div>

		)
	}
});

module.exports = TreatmentHistoryForm;