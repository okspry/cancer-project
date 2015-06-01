var React = require('react');

var Link = require('react-router-component').Link;

var Chemotherapy = React.createClass({
	render: function() {		
		return (

			<div className="clearfix">
        <div className="pull-left">
          <h5>{_.get(_.get(this.props.chemo, "chemoInfo"), "chemoType")}
            <small>&emsp;{_.get(_.get(this.props.chemo, "chemoInfo"), "startDate")} &ndash; {_.get(_.get(this.props.chemo, "chemoInfo"), "endDate")}</small>
          </h5>
          <div className="">
            <span>{_.get(_.get(this.props.chemo, "chemoInfo"), "chemoLocation")}</span>
            &emsp;
            <span>{_.get(_.get(this.props.chemo, "chemoInfo"), "chemoCity")}</span>
          </div>
          <div>
            <span>{_.get(_.get(this.props.chemo, "chemoInfo"), "doctorName")}
              <small>&emsp;{_.get(_.get(this.props.chemo, "chemoInfo"), "doctorPhone")}</small>
              <small>&emsp;{_.get(_.get(this.props.chemo, "chemoInfo"), "doctorEmail")}</small>
            </span>
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
