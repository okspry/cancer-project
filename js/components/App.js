var React = require('react');
var Template = require('./Template');
var Home = require('./home/Home');
var ProfilePage = require('./profile/ProfilePage');
var Calendar = require('./calendar/Calendar');
var NotFoundPage = require('./NotFoundPage');

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var NotFound = Router.NotFound;

var App = React.createClass({
  render: function() {
  	return (

  		<div>
	      <Template>
					<Locations>
						<Location path="/" handler={Home} />
						<Location path="/profile(/*)" handler={ProfilePage} />
						<Location path="/calendar" handler={Calendar} />
						<NotFound handler={NotFoundPage} />
					</Locations>
				</Template>
			</div>

  	)
  }
});

module.exports = App;