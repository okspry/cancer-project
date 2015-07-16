var React = require('react');
var Link = require('react-router-component').Link;

var Nav = React.createClass({
	render: function() {
		return (

			<nav className="navbar navbar-default affix" data-spy-top="-5">
				<div className="header">
					<a className="navbar-brand" href="#">TROOP</a>
          <ul className="nav navbar-nav">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/profile/treatments">Profile</Link>
            </li>
            <li>
              <Link href="../NotFoundPage.js">Communities</Link>
            </li>
            <li>
              <Link href="../NotFoundPage.js">Symptom Management</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link href="/calendar"><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span></Link>
            </li>
            <li>
              <Link href="/messages"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span></Link>
            </li>
            <li>
              <Link href="../NotFoundPage.js"><span>Logout </span><span className="glyphicon glyphicon-log-out" aria-hidden="true"></span></Link>
            </li>
          </ul>
        </div>				
			</nav>

		)
	}
});

module.exports = Nav;