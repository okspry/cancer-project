var React = require('react');
var Surgeries = require('./surgeries/Surgeries');
var Chemotherapies = require('./chemotherapies/Chemotherapies');

var Link = require('react-router-component').Link;

var TreatmentHistoryStore = require('../../../../stores/TreatmentHistoryStore');

function treatmentHistoryItems() {
  return { treatmentHistoryItems: TreatmentHistoryStore.getTreatmentHistory() }
}

var TreatmentsGenInfo = React.createClass({
  getInitialState: function() {
    return treatmentHistoryItems();
  },
	render: function() {
		return (

      <div>
        <div className="clearfix">
          <h4>General History</h4>
          <div className="pull-right">
            <Link 
              global href="/profile/treatments/general-history-form"
              className="glyphicon glyphicon-pencil"></Link>
          </div>
          <div>
            <div>
              <label>
                {_.get(_.get(this.state.treatmentHistoryItems, "generalInfo"), "cancerType")}
                &ensp;
                {_.get(_.get(this.state.treatmentHistoryItems, "generalInfo"), "cancerStage")}
              </label>
              <span><small>&emsp;{_.get(_.get(this.state.treatmentHistoryItems, "generalInfo"), "cancerDiagnosisDate")}</small></span>
            </div>
            <div>
              <label>Genetic or Predisposing Abnormality&emsp;</label>
              <span>{_.get(_.get(this.state.treatmentHistoryItems, "generalInfo"), "geneticOrPredisposingAbnormality")}</span>
            </div>
            <div>
              <label htmlFor="pcp">Primary Care Provider&emsp;</label>
              <span>{_.get(_.get(this.state.treatmentHistoryItems, "generalInfo"), "pcpName")}
                <small>&emsp;{_.get(_.get(this.state.treatmentHistoryItems, "generalInfo"), "pcpPhone")}</small>
                <small>&emsp;{_.get(_.get(this.state.treatmentHistoryItems, "generalInfo"), "pcpEmail")}</small>
              </span>
            </div>
          </div>
        </div>

        <hr />
        <Surgeries surgeries={_.get(this.state.treatmentHistoryItems, "surgeries")} />
        <hr />
        <Chemotherapies chemotherapies={_.get(this.state.treatmentHistoryItems, "chemotherapies")} />
      </div>

		)
	}
});

module.exports = TreatmentsGenInfo;