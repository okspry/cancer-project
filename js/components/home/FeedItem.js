var React = require('react');
var FeedItemResponse = require('./FeedItemResponse');

var FeedItem = React.createClass({
	render: function() {
		return (

      <li className="media feed-item">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="media-left">
              <a href="#">
                <img className="media-object" src="../../../assets/jer_bear_photo.jpg" alt="Jeremy's Picture" width="30" height="30" />
              </a>
            </div>
            <div className="media-body">
              <h5 className="media-heading">Jeremy Leventhal<small>&emsp;Just now</small></h5>
              <p>This is my message: I don't like sausage balls, and you can't convince me otherwise!</p>
            </div>
          </div>
          <FeedItemResponse />
        </div>
      </li>

		)
	}
});

module.exports = FeedItem;