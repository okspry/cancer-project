var React = require('react');
var Nav = require('./header/Nav');

var Template = React.createClass({
  render: function() {
    return (

    	<div>
    		<Nav />
    		<div id="content">
    			{this.props.children}
    		</div>
    	</div>
    	
    )
  }
});

module.exports = Template;