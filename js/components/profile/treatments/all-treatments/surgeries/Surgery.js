var React = require('react');

var Link = require('react-router-component').Link;

var Surgery = React.createClass({
	render: function() {		
		return (

			<div className="clearfix">
        <div className="pull-left">
          <h5>{_.get(_.get(this.props.surgery, "surgeryInfo"), "surgeryType")}<small>&emsp;{_.get(_.get(this.props.surgery, "surgeryInfo"), "surgeryDate")}</small></h5>
          <div className="">
            <span>{_.get(_.get(this.props.surgery, "surgeryInfo"), "surgeryLocation")}</span>
            &emsp;
            <span>{_.get(_.get(this.props.surgery, "surgeryInfo"), "surgeryCity")}</span>
          </div>
          <div>
            <span>{_.get(_.get(this.props.surgery, "surgeryInfo"), "surgeonName")}
              <small>&emsp;{_.get(_.get(this.props.surgery, "surgeryInfo"), "surgeonPhone")}</small>
              <small>&emsp;{_.get(_.get(this.props.surgery, "surgeryInfo"), "surgeonEmail")}</small>
            </span>
          </div>
        </div>
        <div className="pull-right">
          <Link 
            href="procedure-form/ProcedureSummaryForm" 
            className="glyphicon glyphicon-pencil"></Link>
        </div>
      </div>
      
		)
	}
});

module.exports = Surgery;
