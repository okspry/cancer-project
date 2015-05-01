var React = require('react');
var StatusUpdater = require('./StatusUpdater');
var FeedItem = require('./FeedItem');

var Home = React.createClass({
	render: function() {
		return (

			<div>
				<StatusUpdater />
				<ul className="media-list">
					<FeedItem />
				</ul>
			</div>

		)
	}
});

module.exports = Home;