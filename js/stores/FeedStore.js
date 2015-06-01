var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FeedConstants = require('../constants/FeedConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var newStatusTemplate = {
	"userID": "Jeremy Leventhal",
	"pictureURL": "../../assets/jer_bear_photo.jpg",
	"content": "",
	"shareWith": [],
	"timestamp": new Date().toString(),
	"children": [],
	"comment": {
		"userID": "Jeremy Leventhal",
		"pictureURL": "../../assets/jer_bear_photo.jpg",
		"content": "",
		"timestamp": "Jan"
	}
};
var newStatusTemplateGetter = _.clone(newStatusTemplate);

var _items = [
	{
		"userID": "Jeremy Leventhal",
		"pictureURL": "../../assets/jer_bear_photo.jpg",
		"content": "This is the first message",
		"shareWith": [],
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
	var templateItem = newStatusTemplate;
	templateItem["content"] = message;
}

function _postStatus(item) {
	_items.push(item);
}

function _newStatusTemplate() {
	newStatusTemplate = newStatusTemplateGetter;
}

function _changeComment(index, comment) {
	_items[index]["comment"]["content"] = comment;
}

function _postComment(index, item) {
	var cloneItem = _.clone(item);
	_items[index]["children"].push(cloneItem);
}

function _clearCommentTemplate(index) {
	_items[index]["comment"]["content"] = "";
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

	    case FeedConstants.POST_STATUS:
	      _postStatus(payload.action.item);
	      break;

	    case FeedConstants.NEW_STATUS_TEMPLATE:
	    	_newStatusTemplate();
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
