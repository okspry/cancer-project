var React = require('react');
var SelectorGroup = require('../../../common/SelectorGroup');
var GeneticAbnormality = require('./GeneticAbnormality');
var FormGroup = require('../../../common/FormGroup');
var Link = require('react-router-component').Link;

var TreatmentHistoryActions = require('../../../../actions/TreatmentHistoryActions');

var TreatmentHistoryForm = React.createClass({
	render: function() {
		var generalInfo = this.props.generalInfo;
    var formOptions = this.props.formOptions;
		return (

			<div className="col-md-8">
				<h2>Document Treatment</h2>
				<form data-toggle="validator" role="form">
					<SelectorGroup
						infoType={_.findKey(generalInfo, "cancerType")}
            label="Type of Cancer (required)"
            currentVal={_.get(generalInfo, "cancerType")} 
            formOptions={_.get(formOptions, "cancerTypes")}
            actionType={TreatmentHistoryActions.changeCancerType} />

					<SelectorGroup
						infoType={_.findKey(generalInfo, "cancerStage")}
            label="Stage of Cancer (required)"
            currentVal={_.get(generalInfo, "cancerStage")} 
            formOptions={_.get(formOptions, "cancerStages")}
            actionType={TreatmentHistoryActions.changeCancerStage} />

					<FormGroup 
				  	infoType={_.findKey(generalInfo, "cancerDiagnosisDate")}
				  	label="Diagnosis Date"
				  	type="date"
				  	value={_.get(generalInfo, "cancerDiagnosisDate")}
				  	actionType={TreatmentHistoryActions.changeDiagnosisDate} />

					<GeneticAbnormality
						currentVal={_.get(generalInfo, "geneticOrPredisposingAbnormality")}
						yesNoOptions={_.get(formOptions, "geneticOrPredisposingAbnormality")}
						typeValue={_.get(generalInfo, "geneticOrPredisposingAbnormalityType")}
						geneticAbnormalityTypes={_.get(formOptions, "geneticOrPredisposingAbnormalityTypes")} />

					<div className="well">
					  <label>Primary Care Doctor's Information</label>
					  <FormGroup 
					  	infoType={_.findKey(generalInfo, "pcpName")}
					  	label="Name"
					  	placeholder="First Last"
					  	type="text"
					  	value={_.get(generalInfo, "pcpName")}
					  	actionType={TreatmentHistoryActions.changePCPName} />

					  <FormGroup 
					  	infoType={_.findKey(generalInfo, "pcpPhone")}
					  	label="Phone"
					  	placeholder="(555)555-5555"
					  	type="tel"
					  	value={_.get(generalInfo, "pcpPhone")}
					  	actionType={TreatmentHistoryActions.changePCPPhone} />

					  <FormGroup 
					  	infoType={_.findKey(generalInfo, "pcpEmail")}
					  	label="Email"
					  	placeholder="yourname@email.com"
					  	type="email"
					  	value={_.get(generalInfo, "pcpEmail")}
					  	actionType={TreatmentHistoryActions.changePCPEmail} />
					</div>

					<div className="form-group">
						<Link 
					    href="/profile/treatments"
					    className="btn btn-primary">Save Changes</Link>
						<Link 
							href="/profile/treatments"
							className="btn btn-default pad-left">Cancel Changes</Link>
					</div>
			
				</form>
			</div>

		)
	}
});

module.exports = TreatmentHistoryForm;