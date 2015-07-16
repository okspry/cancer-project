var AppDispatcher = require('../dispatcher/AppDispatcher');
var TreatmentHistoryConstants = require('../constants/TreatmentHistoryConstants');

var TreatmentHistoryActions = {
	changeCancerType: function(newValue) {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CHANGE_CANCER_TYPE,
      newValue: newValue
    });
  },
  changeCancerStage: function(newValue) {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CHANGE_CANCER_STAGE,
      newValue: newValue
    });
  },
  changeGeneticValue: function(newValue) {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CHANGE_GENETIC_VALUE,
      newValue: newValue
    });
  },
  changeGeneticType: function(newValue) {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CHANGE_GENETIC_TYPE,
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
  },

  selectSurgery: function(index) {
    AppDispatcher:handleAction({
      actionType: TreatmentHistoryConstants.SELECT_SURGERY,
      index: index
    });
  },
  changeSurgeryType: function(newValue) {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CHANGE_SURGERY_TYPE,
      newValue: newValue
    });
  },
  changeSurgeryLocation: function(newValue) {
    AppDispatcher.handleAction({
      actionType: TreatmentHistoryConstants.CHANGE_SURGERY_LOCATION,
      newValue: newValue
    });
  },
};

module.exports = TreatmentHistoryActions;