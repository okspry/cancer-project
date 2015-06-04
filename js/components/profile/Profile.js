var React = require('react');

var Profile = React.createClass({
	render: function() {
		return (

			<div className="jumbotron">
        <div className="container clearfix">
          <div className="pull-left profile-image">
            <a href="#">
              <img src="../../../assets/jer_bear_photo.jpg" alt="Jeremy Leventhal's Picture" />
            </a>
          </div>
          <div className="pull-left" id="profile-name">
            <h2>Jeremy Leventhal</h2>
            <div>
              <label>Birthday</label>
              <span>
                <small>&emsp;21-Feb-1945<i>&emsp;70 years old</i></small>
              </span>
            </div>
          </div>
        </div>
      </div>

		)
	}
});

module.exports = Profile;