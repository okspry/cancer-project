var React = require('react');
var SelectorGroup = require('../../../common/SelectorGroup');
var CancerDiagnosisDateSelector = require('./CancerDiagnosisDateSelector');
var GeneticAbnormality = require('./GeneticAbnormality');
var FormGroup = require('../../../common/FormGroup');
var Link = require('react-router-component').Link;

var TreatmentHistoryActions = require('../../../../actions/TreatmentHistoryActions');

var TreatmentHistoryForm = React.createClass({
	render: function() {
		var generalInfo = this.props.generalInfo;
    var formOptions = this.props.formOptions;
    var disabledValue = generalInfo["geneticOrPredisposingAbnormality"] == "yes" ? "" : "disabled";
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
				  	value={generalInfo["cancerDiagnosisDate"]}
				  	actionType={TreatmentHistoryActions.changeDiagnosisDate} />

					<GeneticAbnormality
						yesNoOptions={_.get(formOptions, "geneticOrPredisposingAbnormality")}
						typeValue={_.get(generalInfo, "geneticOrPredisposingAbnormalityType")}
						geneticAbnormalityTypes={_.get(formOptions, "geneticOrPredisposingAbnormalityTypes")}
						disabledValue={disabledValue} />

					<div className="well">
					  <label>Primary Care Doctor's Information</label>
					  <FormGroup 
					  	infoType={_.findKey(generalInfo, "pcpName")}
					  	label="Name"
					  	placeholder="First Last"
					  	type="text"
					  	value={generalInfo["pcpName"]}
					  	actionType={TreatmentHistoryActions.changePCPName} />
					  <FormGroup 
					  	infoType={_.findKey(generalInfo, "pcpPhone")}
					  	label="Phone"
					  	placeholder="(555)555-5555"
					  	type="tel"
					  	value={generalInfo["pcpPhone"]}
					  	actionType={TreatmentHistoryActions.changePCPPhone} />
					  <FormGroup 
					  	infoType={_.findKey(generalInfo, "pcpEmail")}
					  	label="Email"
					  	placeholder="yourname@email.com"
					  	type="email"
					  	value={generalInfo["pcpEmail"]}
					  	actionType={TreatmentHistoryActions.changePCPEmail} />
					</div>

					<div className="form-group">
						<Link 
					    href="/treatments"
					    className="btn btn-primary">Save Changes</Link>
						<Link 
							href="/treatments"
							className="btn btn-default pad-left">Cancel Changes</Link>
					</div>
			
				</form>
			</div>

		)
	}
});

module.exports = TreatmentHistoryForm;