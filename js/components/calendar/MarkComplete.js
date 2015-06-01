var React = require('react');
var CalendarActions = require('../../actions/CalendarActions');

var MarkComplete = React.createClass({
  markComplete: function() {
    var node = this.refs.node.getDOMNode().closest("tr");
    var dueCalendarItem = this.props.dueCalendarItem;

    TweenMax.to(node, 0.1, {
      opacity: 0,
      onCompleteParams: [node],
      onCompleteScope: node,
      onComplete: moveRestUp
    });

    function moveRestUp(item) {
      var h = item.offsetHeight,
          following = $(item).nextAll(), // the last one has no following items
          chart = document.getElementById("chart");

      var itemsToMove = following.length == 0 ? item : following;

      TweenMax.to([itemsToMove, chart], 0.65, {
        ease: Elastic.easeOut.config(0.3, 0.95),
        y: -h,
        onCompleteParams: [item, itemsToMove, chart],
        onComplete: function(item, itemsToMove, chart) {
          // clear transforms on clicked list item
          CalendarActions.removeItem(dueCalendarItem);
          TweenMax.set([item, itemsToMove], { clearProps: "all" });
          TweenMax.set(chart, { clearProps: "all" });
        }        
      });
    }
  },
	render: function() {
		return (

      <button ref="node" className="btn btn-primary btn-sm pull-right" onClick={this.markComplete}>Mark Completed</button>

		)
	}
});

module.exports = MarkComplete;