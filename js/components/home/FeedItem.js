var React = require('react');
var FeedItemResponse = require('./FeedItemResponse');
var StatusCommentBox = require('./StatusCommentBox');

var FeedItem = React.createClass({
	render: function() {
		return (

      <li className="media feed-item">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="media-left">
              <a href="#">
                <img className="media-object" src={this.props.feedItem["pictureURL"]} alt={this.props.feedItem["userID"] + "'s Picture"} width="30" height="30" />
              </a>
            </div>
            <div className="media-body">
              <h5 className="media-heading">{this.props.feedItem["userID"]}<small>&emsp;{this.props.feedItem["timestamp"]}</small></h5>
              <p>{this.props.feedItem["content"]}</p>
            </div>
          </div>
          <div className="panel-footer clearfix">
            <ul className="media-list feed-subitems clearfix">
              {
                _.map(this.props.feedItem["children"], function(feedItemResponse, i) {
                  return <FeedItemResponse key={i} feedItemResponse={feedItemResponse} />
                })
              }
              <StatusCommentBox index={this.props.index} feedItem={this.props.feedItem} />
            </ul>
          </div>
        </div>
      </li>

		)
	}
});

module.exports = FeedItem;