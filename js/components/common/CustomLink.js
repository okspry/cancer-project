var React = require('react');
var Router = require('react-router-component');
var Link = Router.Link;

var CustomLink = React.createClass({
  mixins: [Router.NavigatableMixin],
  isActive: function() {
    return this.getPath() === this.props.href
  },
  render: function() {
    var className;
    if (this.props.activeClassName && this.isActive()) {
      className = this.props.activeClassName
    }
    return (

      <Link {...this.props} className={className}>{this.props.children}</Link>

    )
  }
});

module.exports = CustomLink;