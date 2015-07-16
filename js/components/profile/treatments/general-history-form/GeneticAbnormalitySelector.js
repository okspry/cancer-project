var React = require('react');
var SelectBox = require('../../../common/SelectBox');

var GeneticAbnormalitySelector = React.createClass({
	render: function() {
		return (

			<div className="form-group">
			  <label htmlFor="specific-predisposition">If so, what is it?</label>
			  <SelectBox
			  	disabledValue={this.props.disabledValue}
			  	actionType={this.props.actionType}
			  	className="form-control"
			  	currentVal={this.props.typeValue}
			  	formOptions={this.props.geneticAbnormalityOptions} />
			</div>

		)
	}
});

module.exports = GeneticAbnormalitySelector;