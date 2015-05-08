var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FriendConstants = require('../constants/FriendConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _friends = [
	{
		name: 'Ken Spry',
		photo: '../../assets/ken_photo.jpg'
	},
	{
		name: 'Jeremy Keiper',
		photo: '../../assets/jeremy_photo.jpg'
	},
	{
		name: 'Indiana Jones',
		photo: '../../assets/the_man_photo.jpg'
	}

];

function destroy(id) {
  delete _friends[id];
}

var FriendStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of FRIENDs.
   * @return {object}
   */
  getAll: function() {
    return _friends;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {

    case FriendConstants.DELETE_FRIEND:
      destroy(action.id);
      FriendStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = FriendStore;