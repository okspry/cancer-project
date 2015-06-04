var React = require('react');
var StatusUpdater = require('./StatusUpdater');
var FeedItems = require('./FeedItems');

var Home = React.createClass({
	render: function() {
		return (

			<div className="clearfix">
				<div>
					<StatusUpdater />
					<FeedItems />
				</div>
			</div>

		)
	}
});

module.exports = Home;