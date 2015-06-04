var React = require('react');
var Link = require('react-router-component').Link;

var ProfileNav = React.createClass({
	render: function() {
		return (

      <div>
        <div>
          <ul className="nav nav-pills" id="profile-pills">
            <li className="active">
              <Link href="/profile/treatments">Treatment History</Link>
            </li>
            <li>
              <Link href="/profile/relationships">Allies</Link>
            </li>
            <li>
              <Link href="../NotFoundPage.js">Side Effects</Link>
            </li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>

		)
	}
});

module.exports = ProfileNav;