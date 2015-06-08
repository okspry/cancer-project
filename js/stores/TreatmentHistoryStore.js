var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TreatmentHistoryConstants = require('../constants/TreatmentHistoryConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _formOptions = {
	"cancerTypes": ["Colon Cancer", "Rectal Cancer"],
	"cancerStages": ["Stage 1", "Stage 2", "Stage 3", "Stage 4"],
	"geneticOrPredisposingAbnormality": ["no", "yes"],
	"geneticOrPredisposingAbnormalityTypes": ["", "Chron's Disease", "Irritable Bowel Syndrome"]
};

var _surgeryFormTemplate = {
	"surgeryInfo": {
		"id": "surgery2",
		"surgeryType": [],
		"surgeryDate": "",
		"surgeryCity": "",
		"surgeryLocation": "",
		"surgeonName": "",
		"surgeonPhone": "",
		"surgeonEmail": ""
	}
};

var _surgeryFormOptions = {
	"surgeryTypes": ["Colostomy or ileostoy", "Lymph node removal/dissection", "Right colectomy", "Other"]
};

var _chemoFormTemplate = {
	"surgeryInfo": {
		"id": "surgery2",
		"surgeryType": [],
		"surgeryDate": "",
		"surgeryCity": "",
		"surgeryLocation": "",
		"surgeonName": "",
		"surgeonPhone": "",
		"surgeonEmail": ""
	}
};

var _chemoFormOptions = {
	"surgeryTypes": ["Colostomy or ileostoy", "Lymph node removal/dissection", "Right colectomy", "Other"]
};

var _radFormTemplate = {
	"surgeryInfo": {
		"id": "surgery2",
		"surgeryType": [],
		"surgeryDate": "",
		"surgeryCity": "",
		"surgeryLocation": "",
		"surgeonName": "",
		"surgeonPhone": "",
		"surgeonEmail": ""
	}
};

var _radFormOptions = {
	"surgeryTypes": ["Colostomy or ileostoy", "Lymph node removal/dissection", "Right colectomy", "Other"]
};

var _items = {
	"generalInfo": {
		"cancerType": "Colon Cancer",
		"cancerStage": "Stage 2",
		"cancerDiagnosisDate": "2012-02-14",
		"geneticOrPredisposingAbnormality": "",
		"geneticOrPredisposingAbnormalityType": "",
		"pcpName": "",
		"pcpPhone": "",
		"pcpEmail": ""
	},
	"surgeries": [
		{
			"surgeryInfo": {
				"id": "surgery1",
				"surgeryType": ["Colostomy or Ileostomy Lymph node removal/dissection"],
				"surgeryDate": "2012-02-14",
				"surgeryCity": "Indianapolis, IN",
				"surgeryLocation": "Indiana University",
				"surgeonName": "Pam Hand, MD",
				"surgeonPhone": "(317)555-2333",
				"surgeonEmail": "handtomouth@iu.edu"
			}
		},
		{
			"surgeryInfo": {
				"id": "surgery2",
				"surgeryType": ["Colostomy or Ileostomy Lymph node removal/dissection"],
				"surgeryDate": "2012-02-14",
				"surgeryCity": "Indianapolis, IN",
				"surgeryLocation": "Indiana University",
				"surgeonName": "Pam Hand, MD",
				"surgeonPhone": "(317)555-2333",
				"surgeonEmail": "handtomouth@iu.edu"
			}
		}
	],
	"chemotherapies": [
		{
			"chemoInfo": {
				"chemoType": "Oxaliplation (eloxatin)",
				"startDate": "2012-06-01",
				"endDate": "2012-12-18",
				"chemoCity": "Indianapolis, IN",
				"chemoLocation": "Indiana University",
				"doctorName": "Kim Polly, MD",
				"doctorPhone": "(317)555-9982",
				"doctorEmail": "pollywantacracker@iu.edu"
			}
		}
	],
	"radiationTreatments": [
		{
			"radInfo": {
				"radType": "Oxaliplation (eloxatin)",
				"startDate": "2012-06-01",
				"endDate": "2012-12-18",
				"chemoCity": "Indianapolis, IN",
				"chemoLocation": "Indiana University",
				"doctorName": "Kim Polly, MD",
				"doctorPhone": "(317)555-9982",
				"doctorEmail": "pollywantacracker@iu.edu"
			}
		}
	]
};

/**************************************/

function _changeCancerType(newValue) {
	_items["generalInfo"]["cancerType"] = newValue;
}

function _changeCancerStage(newValue) {
	_items["generalInfo"]["cancerStage"] = newValue;
}

function _changeGeneticValue(newValue) {
	_items["generalInfo"]["geneticOrPredisposingAbnormality"] = newValue;
}

function _changeGeneticType(newValue) {
	_items["generalInfo"]["geneticOrPredisposingAbnormalityType"] = newValue;
}

function _changeDiagnosisDate(newValue) {
	console.log(_items["generalInfo"]["cancerDiagnosisDate"])
	_items["generalInfo"]["cancerDiagnosisDate"] = newValue;
}

function _changePCPName(newValue) {
	_items["generalInfo"]["pcpName"] = newValue;
}

function _changePCPPhone(newValue) {
	_items["generalInfo"]["pcpPhone"] = newValue;
}

function _changePCPEmail(newValue) {
	_items["generalInfo"]["pcpEmail"] = newValue;
	console.log(_items["generalInfo"]["pcpEmail"])
}

function _submitForm() {
	return
}

function _cancelForm() {
	return
}


function _changeSurgeryType(newValue) {
	console.log(_items["surgeries"][0]["surgeryInfo"])
	_items["surgeries"][0]["surgeryInfo"] = newValue;
}

var TreatmentHistoryStore = assign({}, EventEmitter.prototype, {

  getTreatmentHistory: function() {
    return _items;
  },

  getFormOptions: function() {
    return _formOptions;
  },

  getSurgeryTemplate: function() {
    return _surgeryFormTemplate;
  },

  getSurgeryFormOptions: function() {
    return _surgeryFormOptions;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

	// Register callback to handle all updates
	dispatcherIndex: AppDispatcher.register(function(payload) {
		var action = payload.action;
	  switch(action.actionType) {

	    case TreatmentHistoryConstants.CHANGE_CANCER_TYPE:
	      _changeCancerType(payload.action.newValue);
	      break;

	    case TreatmentHistoryConstants.CHANGE_CANCER_STAGE:
	      _changeCancerStage(payload.action.newValue);
	      break;

	    case TreatmentHistoryConstants.CHANGE_GENETIC_VALUE:
	      _changeGeneticValue(payload.action.newValue);
	      break;

	    case TreatmentHistoryConstants.CHANGE_GENETIC_TYPE:
	      _changeGeneticType(payload.action.newValue);
	      break;

	    case TreatmentHistoryConstants.CHANGE_DIAGNOSIS_DATE:
	      _changeDiagnosisDate(payload.action.newValue);
	      break;

	    case TreatmentHistoryConstants.CHANGE_PCPNAME:
	      _changePCPName(payload.action.newValue);
	      break;

	    case TreatmentHistoryConstants.CHANGE_PCPPHONE:
	      _changePCPPhone(payload.action.newValue);
	      break;

	    case TreatmentHistoryConstants.CHANGE_PCPEMAIL:
	      _changePCPEmail(payload.action.newValue);
	      break;

	    case TreatmentHistoryConstants.SUBMIT_FORM:
	      _submitForm();
	      break;

	    case TreatmentHistoryConstants.CANCEL_FORM:
	      _cancelForm();
	      break;



	    case TreatmentHistoryConstants.CHANGE_SURGERY_TYPE:
	      _changeSurgeryType(payload.action.index, payload.action.newValue);
	      break;

	  }

	  TreatmentHistoryStore.emitChange();
	  return true;
	})
});

module.exports = TreatmentHistoryStore;	
