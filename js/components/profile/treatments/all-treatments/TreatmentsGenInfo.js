var React = require('react');
var Surgeries = require('./surgeries/Surgeries');
var Chemotherapies = require('./chemotherapies/Chemotherapies');

var Link = require('react-router-component').Link;

var TreatmentsGenInfo = React.createClass({
	render: function() {
    var generalInfo = this.props.generalInfo;
    var formOptions = this.props.formOptions;
    var surgeries = this.props.surgeries;
    var chemotherapies = this.props.chemotherapies;
    var radiationTreatments = this.props.radiationTreatments;
		return (

      <div>
        <div className="clearfix">
          <h4>General History</h4>
          <div className="pull-right">
            <Link 
              href="/all-treatments/general-history-form"
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
              <span>{_.get(generalInfo, "geneticOrPredisposingAbnormality")}</span>
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