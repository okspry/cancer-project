var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FeedConstants = require('../constants/FeedConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var newStatusTemplate = {
	"userID": "Jeremy Leventhal",
	"pictureURL": "../../assets/jer_bear_photo.jpg",
	"content": "",
	"shareWith": ["My buddies", "My doctor"],
	"sharedValue": "",
	"timestamp": new Date().toString(),
	"children": [],
	"comment": {
		"userID": "Jeremy Leventhal",
		"pictureURL": "../../assets/jer_bear_photo.jpg",
		"content": "",
		"timestamp": "Jan"
	}
};

var _items = [
	{
		"userID": "Jeremy Leventhal",
		"pictureURL": "../../assets/jer_bear_photo.jpg",
		"content": "This is the first message",
		"shareWith": [],
		"sharedValue": "",
		"timestamp": "Fri Jan 09 2015 00:00:00 GMT-0500 (EST)",
		"children": [
			{
				"userID": "Ken Spry",
				"pictureURL": "../../assets/ken_photo.jpg",
				"content": "Frist response",
				"timestamp": "Fri Jan 09 2015 00:00:00 GMT-0500 (EST)"
			},
			{
				"userID": "Ken Spry",
				"pictureURL": "../../assets/ken_photo.jpg",
				"content": "Second response",
				"timestamp": "Fri Jan 09 2015 00:00:00 GMT-0500 (EST)"
			}
		],
		"comment": {
			"userID": "Jeremy Leventhal",
			"pictureURL": "../../assets/jer_bear_photo.jpg",
			"content": "",
			"timestamp": "Jan"
		}
	}
];

function _changeStatus(message) {
	newStatusTemplate["content"] = message;
}

function _changeShare(newValue) {
	newStatusTemplate["sharedValue"] = newValue;
}

function _post(item) {
	_items.push(item);
}

function _newTemplate() {
	newStatusTemplate = {
		"userID": "Jeremy Leventhal",
		"pictureURL": "../../assets/jer_bear_photo.jpg",
		"content": "",
		"shareWith": ["My buddies", "My doctor"],
		"sharedValue": "",
		"timestamp": new Date().toString(),
		"children": [],
		"comment": {
			"userID": "Jeremy Leventhal",
			"pictureURL": "../../assets/jer_bear_photo.jpg",
			"content": "",
			"timestamp": "Jan"
		}
	};
	newStatusTemplate["content"] = "";
}

function _changeComment(index, comment) {
	_items[index]["comment"]["content"] = comment;
}

function _postComment(index, item) {
	_items[index]["children"].push(item);
}

function _clearCommentTemplate(index) {
	var commentTemplate = {
		"userID": "Jeremy Leventhal",
		"pictureURL": "../../assets/jer_bear_photo.jpg",
		"content": "",
		"timestamp": "Jan"
	}
	_items[index]["comment"] = commentTemplate;
}

var FeedStore = assign({}, EventEmitter.prototype, {

  getStatuses: function() {
    return _items;
  },

  getNewStatusTemplate: function() {
    return newStatusTemplate;
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

	  	case FeedConstants.CHANGE_STATUS:
	      _changeStatus(payload.action.message);
	      break;

	    case FeedConstants.CHANGE_SHARE:
	      _changeShare(payload.action.newValue);
	      break;

	    case FeedConstants.POST:
	      _post(payload.action.item);
	      break;

	    case FeedConstants.NEW_TEMPLATE:
	    	_newTemplate();
	    	break;

	    case FeedConstants.CHANGE_COMMENT:
	      _changeComment(payload.action.index, payload.action.comment);
	      break;

	    case FeedConstants.POST_COMMENT:
	      _postComment(payload.action.index, payload.action.item);
	      break;

	    case FeedConstants.CLEAR_COMMENT_TEMPLATE:
	    	_clearCommentTemplate(payload.action.index);
	    	break;

	  }

	  FeedStore.emitChange();
	  return true;
	})
});

module.exports = FeedStore;	
