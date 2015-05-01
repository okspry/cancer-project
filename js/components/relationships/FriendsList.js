var React = require('react');
var DeleteFriendsModal = require('./DeleteFriendsModal');
var Friend = require('./Friend');

var FriendsList = React.createClass({
  render: function() {
    return (

      <div>
        <DeleteFriendsModal />

        <ul className="media-list">
          {_.map(this.props.friends, function(d, i) {
            return (
              <Friend friend={d} key={i} />
            )
          })}
        </ul>
      </div>

    )
  }
});

module.exports = FriendsList;