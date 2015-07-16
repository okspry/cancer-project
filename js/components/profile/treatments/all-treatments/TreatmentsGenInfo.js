var React = require('react');
var Surgeries = require('./surgeries/Surgeries');
var Chemotherapies = require('./chemotherapies/Chemotherapies');

var Link = require('react-router-component').Link;

var TreatmentHistoryStore = require('../../../../stores/TreatmentHistoryStore');

function getData() {
  return { 
    treatmentHistoryItems: TreatmentHistoryStore.getTreatmentHistory()
  }
}

var TreatmentsGenInfo = React.createClass({
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
    var surgeries = _.get(this.state.treatmentHistoryItems, "surgeries");
    var chemotherapies = _.get(this.state.treatmentHistoryItems, "chemotherapies");
    var radiationTreatments = _.get(this.state.treatmentHistoryItems, "radiationTreatments");
		return (

      <div>
        <div className="clearfix">
          <h4>General History</h4>
          <div className="pull-right">
            <Link 
              global href="/general-history-form"
              className="glyphicon glyphicon-pencil"></Link>
          </div>
          <div>
            <div>
              <label>
                {_.get(generalInfo, "cancerType")}
                &ensp;
                {_.get(generalInfo, "cancerStage")}
              </label>
              <span><small>&emsp;{_.get(generalInfo, "cancerDiagnosisDate")}</small></span>
            </div>
            <div>
              <label>Genetic or Predisposing Abnormality&emsp;</label>
              <span>{_.get(generalInfo, "geneticOrPredisposingAbnormalityType")}</span>
            </div>
            <div>
              <label>Primary Care Provider&emsp;</label>
              <span>{_.get(generalInfo, "pcpName")}
                <small>&emsp;{_.get(generalInfo, "pcpPhone")}</small>
                <small>&emsp;{_.get(generalInfo, "pcpEmail")}</small>
              </span>
            </div>
          </div>
        </div>

        <hr />
        <Surgeries surgeries={surgeries} />
        <hr />
        <Chemotherapies chemotherapies={chemotherapies} />
      </div>

		)
	}
});

module.exports = TreatmentsGenInfo;