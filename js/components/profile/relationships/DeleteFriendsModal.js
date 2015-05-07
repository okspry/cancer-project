var React = require('react');

var DeleteFriendsModal = React.createClass({
  confirmDelete: function() {

  },
  render: function() {
    return (
      // look for some style overrides in styles.css
      <div className="modal fade" id="confirm-friend-delete" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div className="modal-body">
              Are you sure that you'd like to remove this friend?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Go Back</button>
              <button type="button" className="btn btn-primary"  data-dismiss="modal" id="delete-btn" delete={this.confirmDelete}>Yes, Remove Friend</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
});

module.exports = DeleteFriendsModal;