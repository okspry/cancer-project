var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MessageConstants = require('../constants/MessageConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

// TODO: Right here, replace the userID and picutreURL with the recipient's info, not the user's.
var newMessageTemplate = {
	"userID": "Jeremy Leventhal",
	"pictureURL": "../../assets/jer_bear_photo.jpg",
	"content": "",
	"sendTo": [],
	"subject": "",
	"timestamp": new Date().toString(),
	"replies": []
};

var _items = [
	{
		"userID": "Ken Spry",
		"pictureURL": "../../assets/ken_photo.jpg",
		"content": "This is the first message",
		"sendTo": [],
		"subject": "Cancer Question",
		"timestamp": "Fri Jan 09 2015 00:00:00 GMT-0500 (EST)",
		"replies": [
			{
				"userID": "Ken Spry",
				"pictureURL": "../../assets/ken_photo.jpg",
				"content": "Frist response",
				"timestamp": "Fri Jan 09 2015 00:00:00 GMT-0500 (EST)"
			},
			{
				"userID": "Jeremy Leventhal",
				"pictureURL": "../../assets/jer_bear_photo.jpg",
				"content": "Second response",
				"timestamp": "Fri Jan 09 2015 00:00:00 GMT-0500 (EST)"
			}
		]
	},
	{
		"userID": "Satan McDonald",
		"pictureURL": "../../assets/jeremy_photo.jpg",
		"content": "This is the first message",
		"sendTo": [],
		"subject": "Ring of Dingle",
		"timestamp": "Fri Jan 09 2015 00:00:00 GMT-0500 (EST)",
		"replies": [
			{
				"userID": "Indiana Jones",
				"pictureURL": "../../assets/the_man_photo.jpg",
				"content": "Frist response",
				"timestamp": "Fri Jan 09 2015 00:00:00 GMT-0500 (EST)"
			},
			{
				"userID": "Ken Spry",
				"pictureURL": "../../assets/ken_photo.jpg",
				"content": "Second response",
				"timestamp": "Fri Jan 09 2015 00:00:00 GMT-0500 (EST)"
			}
		]
	}
];

var currentThread = _items[0];

function _changeRecipient(newValue) {
	newMessageTemplate["sendTo"] = newValue;
}

function _changeSubject(newValue) {
	newMessageTemplate["subject"] = newValue;
}

function _changeMessage(newValue) {
	newMessageTemplate["content"] = newValue;
}

function _send(item) {
	_items.push(item);
}

function _selectThread(index) {
	currentThread = _items[index];
}

function _newTemplate() {
	newMessageTemplate = _.clone(newMessageTemplate);
	newMessageTemplate["content"] = "";
	newMessageTemplate["subject"] = "";
	newMessageTemplate["sendTo"] = [];
}

var MessageStore = assign({}, EventEmitter.prototype, {

  getThreads: function() {
    return _items;
  },

  getCurrentThread: function() {
    return currentThread;
  },
  
  getMessageTemplate: function() {
    return newMessageTemplate;
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

	  	case MessageConstants.CHANGE_RECIPIENT:
	      _changeRecipient(payload.action.newValue);
	      break;

	  	case MessageConstants.CHANGE_SUBJECT:
	      _changeSubject(payload.action.newValue);
	      break;

	  	case MessageConstants.CHANGE_MESSAGE:
	      _changeMessage(payload.action.newValue);
	      break;

	    case MessageConstants.SEND:
	      _send(payload.action.item);
	      break;

	    case MessageConstants.NEW_TEMPLATE:
	      _newTemplate();
	      break;

	    case MessageConstants.SELECT_THREAD:
	      _selectThread(payload.action.index);
	      break;

	  }

	  MessageStore.emitChange();
	  return true;
	})
});

module.exports = MessageStore;	
