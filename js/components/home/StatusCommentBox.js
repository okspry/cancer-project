var React = require('react');
var FeedActions = require("../../actions/FeedActions");

var StatusCommentBox = React.createClass({
  handleChange: function() {
    var newComment = this.refs.comment.getDOMNode().value;
    FeedActions.changeComment(this.props.index, newComment);
  },
  handleKeyPress: function(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
      if(this.props.feedItem["comment"]["content"] != "") { 
        FeedActions.postComment(this.props.index, this.props.feedItem["comment"]);
        FeedActions.clearCommentTemplate(this.props.index);
      }
    }
  },
  render: function() { 
    return (

      <li className="media feed-comment">
        <div className="separator">
          <div className="media-left">
            <a href="#">
              <img className="media-object" src={this.props.feedItem["pictureURL"]} alt={this.props.feedItem["userID"] + "'s Picture"} width="30" height="30" />
            </a>
          </div>
          <div className="media-body">
            <form>
              <div className="form-group-sm">
                <input ref="comment" className="form-control" placeholder="Comment&hellip;" 
                  value={this.props.feedItem["comment"]["content"]}
                  onChange={this.handleChange} 
                  onKeyDown={this.handleKeyPress} />
              </div>
            </form>
          </div>
        </div>
      </li>

    )
  }
});

module.exports = StatusCommentBox;