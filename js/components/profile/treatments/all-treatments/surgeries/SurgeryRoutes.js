var React = require('react');
var TreatmentSummary = require('../../TreatmentSummary');
var ProcedureSummaryForm = require('./procedure-form/ProcedureSummaryForm');

var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var SurgeryRoutes = React.createClass({
  render: function() {
    return (

      <Locations contextual>
        <Location path="/" handler={TreatmentSummary} />
        <Location path="/treatments/all-treatments/surgeries/procedure-form" handler={ProcedureSummaryForm} />
      </Locations>

     )
  }
});

module.exports = SurgeryRoutes;