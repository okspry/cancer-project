var React = require('react');

var NavItem = React.createClass({
  render: function() {
    return (

      <li className={this.props.active && 'active'}>
        <a href="#">{this.props.pageName}</a>
      </li>
      
    )
  }
});

module.exports = NavItem;