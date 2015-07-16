var React = require('react');
var SelectorGroup = require('../../../../../common/SelectorGroup');
var FormGroup = require('../../../../../common/FormGroup');
var Link = require('react-router-component').Link;

var TreatmentHistoryStore = require('../../../../../../stores/TreatmentHistoryStore');
var TreatmentHistoryActions = require('../../../../../../actions/TreatmentHistoryActions');

function getData() {
  return { 
    currentSurgery: TreatmentHistoryStore.getCurrentSurgery(),
    surgeryTemplateState: TreatmentHistoryStore.getSurgeryTemplate(),
    surgeryFormOptionsState: TreatmentHistoryStore.getSurgeryFormOptions()
  }
}

var ProcedureSummaryForm = React.createClass({
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
    var surgeryInfo = _.get(this.state.currentSurgery, "surgeryInfo");
    var surgeryFormOptionsState = this.state.surgeryFormOptionsState;
    var surgeryTemplateState = this.state.surgeryTemplateState;
    return (

      <div className="col-md-8">
        <h2>Document a Surgery</h2>
        <form data-toggle="validator" role="form">
          <SelectorGroup
            label="Type of Surgery (required)"
            currentVal={_.get(surgeryInfo, "surgeryType")} 
            formOptions={_.get(surgeryFormOptionsState, "surgeryTypes")}
            actionType={TreatmentHistoryActions.changeSurgeryType} />

          <FormGroup 
            infoType={_.findKey(surgeryInfo, "surgeryLocation")}
            type="text"
            value={_.get(surgeryInfo, "surgeryLocation")}
            actionType={TreatmentHistoryActions.changeSurgeryLocation} />

          <div className="form-group">
            <Link 
              href="/"
              className="btn btn-primary">Save Changes</Link>
            <Link 
              href="/"
              className="btn btn-default pad-left">Cancel Changes</Link>
          </div>
      
        </form>
      </div>

    )
  }
});

module.exports = ProcedureSummaryForm;