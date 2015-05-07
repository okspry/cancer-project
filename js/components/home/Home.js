var React = require('react');
var StatusUpdater = require('./StatusUpdater');
var FeedItem = require('./FeedItem');
var Aside = require('./Aside');

var Home = React.createClass({
	render: function() {
		return (

			<div className="clearfix">
				<Aside />
				<div className="pull-left col-sm-8">
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