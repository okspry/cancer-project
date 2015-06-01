var React = require('react');
var GeneticAbnormalitySelector = require('./GeneticAbnormalitySelector');
var GeneticAbnormalityRadios = require('./GeneticAbnormalityRadios');
var Radio = require('../../../common/Radio');

var GeneticAbnormality = React.createClass({
	render: function() {
		return (

			<div className="panel panel-default">
			  <div className="panel-body">
			    <div className="form-group">
			      <label htmlFor="predisposition">Do you have a genetic or predisposing abnormality? (required)</label>
			      <br />
			      {
			      	_.map(this.props.yesNoOptions, function(option, i) {
			      		return <Radio key={i} value={option} />
			      	})
			      }
						<br />
			    </div>
		      <GeneticAbnormalitySelector
		      	ref="mainselector"
		      	disabledValue={this.props.disabledValue}
		      	currentVal={this.props.typeValue}
		      	geneticAbnormalityOptions={this.props.geneticAbnormalityTypes} />
			  </div>
			</div>

		)
	}
});

module.exports = GeneticAbnormality;