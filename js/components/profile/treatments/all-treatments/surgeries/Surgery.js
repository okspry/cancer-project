var React = require('react');

var Link = require('react-router-component').Link;

var Surgery = React.createClass({
	render: function() {		

    var surgeryInfo = _.get(this.props.surgery, "surgeryInfo");

		return (

			<div className="clearfix">
        <div className="pull-left">
          <h5>{_.get(surgeryInfo, "surgeryType")}<small>&emsp;{_.get(surgeryInfo, "surgeryDate")}</small></h5>
          <div>
            <span>{_.get(surgeryInfo, "surgeryLocation")}</span>
            &emsp;
            <span>{_.get(surgeryInfo, "surgeryCity")}</span>
          </div>
          <div>
            <span>{_.get(surgeryInfo, "surgeonName")}
              <small>&emsp;{_.get(surgeryInfo, "surgeonPhone")}</small>
              <small>&emsp;{_.get(surgeryInfo, "surgeonEmail")}</small>
            </span>
          </div>
        </div>
        <div className="pull-right">
          <Link 
            href="/treatments/all-treatments/surgeries/procedure-form" 
            className="glyphicon glyphicon-pencil"></Link>
        </div>
      </div>
      
		)
	}
});

module.exports = Surgery;
