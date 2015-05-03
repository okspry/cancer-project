var React = require('react');
var Link = require('react-router-component').Link;

var ProfileNav = React.createClass({
	render: function() {
		return (

      <div>
        <ul id="profile-pills">
          <li>
            <Link global href="/profile/treatments">Treatment History</Link>
          </li>
          <li>
            <Link global href="/profile/relationships">Allies</Link>
          </li>
        </ul>
      </div>

		)
	}
});

module.exports = ProfileNav;