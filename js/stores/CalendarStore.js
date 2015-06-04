var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CalendarConstants = require('../constants/CalendarConstants');
var assign = require('object-assign');
var calendarData = require('../data/calendarData.json');

var CHANGE_EVENT = 'change';

var _items = calendarData;

/********DUE CALENDAR ITEMS************/
var tempCalendarItems = _.map(_items, function(d) { return _.values(d)[0] });
tempCalendarItems = _.flatten(tempCalendarItems);
tempCalendarItems = _.sortBy(tempCalendarItems, function(d) {
	return new Date(d["date"])
});
var _dueCalendarItems = [];
var today = new Date();
var threeMosAgo = addMonths(new Date(), -3); 
var threeMosFromNow = addMonths(new Date(), +3);
function addMonths(date, months) {
  date.setMonth(date.getMonth() + months);
  return date;
}
_.map(tempCalendarItems, function(d) {
	var thisDate = new Date(d["date"]).getTime();
	if(thisDate > threeMosAgo && thisDate < threeMosFromNow) {
		return _dueCalendarItems.push(d)
	}
});

/**************************************/

function _confirmDone(item) {
	item["completedDate"] = "DONE";
}

function _removeItem(item) {
  var i = _dueCalendarItems.indexOf(item);
	if(i != -1) {
		_dueCalendarItems.splice(i, 1);
	}
}


var CalendarStore = assign({}, EventEmitter.prototype, {

  getCalendarItems: function() {
    return _items;
  },

  getDueCalendarItems: function() {
    return _dueCalendarItems;
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

	    case CalendarConstants.CONFIRM_DONE:
	      _confirmDone(payload.action.item);
	      break;

	    case CalendarConstants.REMOVE_ITEM:
	      _removeItem(payload.action.item);
	      break;

	  }

	  CalendarStore.emitChange();
	  return true;
	})
});

module.exports = CalendarStore;	
