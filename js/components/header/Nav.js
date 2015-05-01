var React = require('react');
var Link = require('react-router-component').Link;

var Nav = React.createClass({
	render: function() {
		return (

			<nav className="navbar navbar-default">
				<div className="header">
					<a className="navbar-brand" href="#">TROOP</a>
          <ul className="nav navbar-nav">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/treatments">Profile</Link>
            </li>
            <li>
              <Link href="/relationships">Relationships</Link>
            </li>
            <li>
              <Link href="../NotFoundPage.js">Communities</Link>
            </li>
          </ul>
        </div>				
			</nav>

		)
	}
});

module.exports = Nav;