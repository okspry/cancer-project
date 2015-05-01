jest.dontMock('../../constants/FriendConstants');
jest.dontMock('../FriendStore');
jest.dontMock('object-assign');

describe('FriendStore', function() {

  var FriendConstants = require('../../constants/FriendConstants');
  var FriendDispatcher;
  var FriendStore;
  var callback;

  // mock actions
  var actionFriendDestroy = {
    actionType: FriendConstants.DELETE_FRIEND,
    id: 'replace me in test'
  };

  beforeEach(function() {
    FriendDispatcher = require('../../dispatcher/FriendDispatcher');
    FriendStore = require('../FriendStore');
    callback = FriendDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(FriendDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no friends', function() {
    var all = FriendStore.getAll();
    expect(all).toEqual({});
  });

  it('destroys a friend', function() {
    callback(actionFriendCreate);
    var all = FriendStore.getAll();
    var keys = Object.keys(all);
    expect(keys.length).toBe(1);
    actionFriendDestroy.id = keys[0];
    callback(actionFriendDestroy);
    expect(all[keys[0]]).toBeUndefined();
  });

});
