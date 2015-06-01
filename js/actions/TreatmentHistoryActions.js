var AppDispatcher = require('../dispatcher/AppDispatcher');
var TreatmentHistoryConstants = require('../constants/TreatmentHistoryConstants');

var TreatmentHistoryActions = {
	changeSelector: function(item, value) {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CHANGE_SELECTOR,
      value: value,
      item: item
    });
  },
  changeValue: function(newValue) {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CHANGE_VALUE,
      newValue: newValue
    });
  },
  changeDiagnosisDate: function(newValue) {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CHANGE_DIAGNOSIS_DATE,
      newValue: newValue
    });
  },
  changePCPName: function(newValue) {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CHANGE_PCPNAME,
      newValue: newValue
    });
  },
  changePCPPhone: function(newValue) {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CHANGE_PCPPHONE,
      newValue: newValue
    });
  },
  changePCPEmail: function(newValue) {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CHANGE_PCPEMAIL,
      newValue: newValue
    });
  },
  submitForm: function() {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.SUBMIT_FORM,
    });
  },
  cancelForm: function() {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CANCEL_FORM,
    });
  }
};

module.exports = TreatmentHistoryActions;