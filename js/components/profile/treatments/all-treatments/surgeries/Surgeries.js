var React = require('react');
var Surgery = require('./Surgery');
var ProcedureSummaryForm = require('./procedure-form/ProcedureSummaryForm');

var Link = require('react-router-component').Link;

var Surgeries = React.createClass({
	render: function() {
		return (

      <div>
  			<div className="clearfix">
          <h4>Surgeries&emsp;
            <Link 
              href="/treatments/all-treatments/surgeries/procedure-form"
              className="btn btn-primary btn-sm">Add</Link>
          </h4>
        </div>
        <div>
          {
            _.map(this.props.surgeries, function(surgery, i) {
              return <Surgery key={i} surgery={surgery} index={i} />
            })
          }
        </div>
      </div>

		)
	}
});

module.exports = Surgeries;