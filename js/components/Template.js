var React = require('react');
var Nav = require('./header/Nav');

var Template = React.createClass({
  render: function() {
    return (

    	<div>
    		<Nav />
    		<div id="content" className="col-sm-8 col-sm-offset-2">
    			{this.props.children}
    		</div>
    	</div>
    	
    )
  }
});

module.exports = Template;