var React = require('react');

var Link = require('react-router-component').Link;

var Chemotherapy = React.createClass({
	render: function() {		
		return (

			<div className="clearfix">
        <div className="pull-left">
          <h5>Oxaliplation (eloxatin)<small>&emsp;01-Jun-2012 &ndash; 03-Dec-2012</small></h5>
          <div className="">
            <span>Indiana University</span>
            <span>Indianapolis, IN</span>
          </div>
          <div>
            <span>Dr. Hand<small>&emsp;(317)555-5555</small><small>&emsp;handtomouth@indiana.edu</small></span>
          </div>
        </div>
        <div className="pull-right">
          <Link
            href="/general-history-form" 
            className="glyphicon glyphicon-pencil"></Link>
        </div>
      </div>
      
		)
	}
});

module.exports = Chemotherapy;
