var React = require('react');
var ProfileNav = require('./ProfileNav');

var ProfileTemplate = React.createClass({
  render: function() {
    return (

    	<div>
    		<ProfileNav />
    		<div>
    			{this.props.children}
    		</div>
    	</div>
    	
    )
  }
});

module.exports = ProfileTemplate;