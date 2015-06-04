var React = require('react');
var Profile = require('./Profile');
var ProfileNav = require('./ProfileNav');
var Treatments = require('./treatments/Treatments');
var Relationships = require('./relationships/Relationships');
var NotFoundPage = require('../NotFoundPage');


var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var NotFound = Router.NotFound;

var ProfilePage = React.createClass({
	render: function() {
		return (

			<div>
				<Profile />
	      <ProfileNav>
		      <Locations contextual>
		      	<Location path="/treatments(/*)" handler={Treatments} />
	          <Location path="/relationships(/*)" handler={Relationships} />
	          <NotFound handler={NotFoundPage} />
	        </Locations>
	      </ProfileNav>
	    </div>

		)
	}
});

module.exports = ProfilePage;