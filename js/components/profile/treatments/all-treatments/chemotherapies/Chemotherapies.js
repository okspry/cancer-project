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
          {
            _.map(this.props.chemotherapies, function(chemo, i) {
              return <Chemotherapy key={i} chemo={chemo} />
            })
          }
        </div>
      </div>

		)
	}
});

module.exports = Chemotherapies;