var React = require('react');
var Chemotherapy = require('./Chemotherapy');

var Link = require('react-router-component').Link;

var Chemotherapies = React.createClass({
	render: function() {
		return (

      <div>
  			<div className="clearfix">
          <h4>Chemotherapies&emsp;
            <Link 
              href="../NotFoundPage.js"
              className="btn btn-primary btn-sm">Add</Link>
          </h4>
        </div>
        <div>
          <Chemotherapy />
        </div>
      </div>

		)
	}
});

module.exports = Chemotherapies;