var React = require('react');
var StatusUpdater = require('./StatusUpdater');
var FeedItem = require('./FeedItem');
var Aside = require('./Aside');

var Home = React.createClass({
	render: function() {
		return (

			<div className="clearfix">
				<div>
					<StatusUpdater />
					<ul className="media-list">
						<FeedItem />
					</ul>
				</div>
			</div>

		)
	}
});

module.exports = Home;