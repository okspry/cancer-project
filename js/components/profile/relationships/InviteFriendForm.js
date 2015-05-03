var React = require('react');

var InviteFriendForm = React.createClass({
	render: function() {
		return (

      <div role="tabpanel" className="tab-pane fade" id="invite-friend-form">

        <div className="alert alert-info" role="alert">
          If there's someone who isn't yet a member of PRODUCT NAME, send them an email to join up!
        </div>

        <form className="col-md-8" data-toggle="validator" role="form">

          <div className="form-group">
            <label htmlFor="ally-name">Name</label>
            <input type="text" className="form-control" id="ally-name" placeholder="First Last" />
          </div>
          <div className="form-group">
            <label htmlFor="ally-email">Email</label>
            <input type="email" className="form-control" id="ally-email" placeholder="jackrobin21@health.org" />
          </div>
          <div className="form-group">
            <label htmlFor="request_msg">Personalized Message (not required)</label>
            <textarea name="request_msg" className="form-control" placeholder="You're the best. Want to joing me on PRODUCT NAME?"></textarea>
            <span className="help-block">Don't worry. We'll tell them exactly how to join.</span>
          </div>
          
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Send Email</button>
            <button type="button" className="btn">Clear Form</button>
          </div>

        </form>
      </div>

		)
	}
});

module.exports = InviteFriendForm;