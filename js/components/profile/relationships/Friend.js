var React = require('react');
var ItemRemover = require('./ItemRemover');
var SelectBox = require('../../common/SelectBox');

var Friend = React.createClass({ 
  render: function() {
    return (

      <li className="media friendlist-item">
        <div className="panel panel-default">
          <div className="panel-body">
            <ItemRemover />
            <div className="media-left">
              <a href="#">
                <img className="media-object" src={this.props.friend["photo"]} alt="Ken Spry's Picture" width="60" height="60" />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{this.props.friend["name"]}</h4>
              <SelectBox data="friend" />
              <SelectBox data="share" />
            </div>
          </div>
        </div>
      </li>

    )
  }
});

module.exports = Friend;