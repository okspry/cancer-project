var React = require('react');

var CalendarWidget = React.createClass({
	render: function() {
		return (

			<div>
				{this.drawChart(this.props.calendarItems)}
			</div>

		)
	},
	drawChart: function(data) {

		/***************** Start by doing the typical SVG setup ***************/
		var margin = {top: 120, right: 200, bottom: 50, left: 200},
		    margin2 = {top: 120, right: 200, bottom: 20, left: 200},
		    width = 900 - margin.left - margin.right,
		    height = 350 - margin.top - margin.bottom,
		    height2 = 30,
		    itemHeight = 40,
		    itemPadding = 15;

		var x = d3.time.scale().range([0, width]),
		    x2 = d3.time.scale().range([0, width]);

		var xAxis = d3.svg.axis().scale(x).orient("top").tickSize(height).tickPadding(6),
		    xAxis2 = d3.svg.axis().scale(x2).orient("bottom").ticks(width < 910 ? 8 : 12);
			
		// This is the thing that expands and contracts the timeline
		var brush = d3.svg.brush()
			.x(x2)
			.on("brush", brushed);

		var svg = d3.select("div").append("svg")
		    .attr({
				"width": width + margin.left + margin.right,
				"height": height + margin.top + margin.bottom + height2 + margin2.top + margin2.bottom
			});

		svg.append("defs").append("clipPath")
		    .attr("id", "clip-focus")
		  .append("rect")
		    .attr({
		    	"width": width + 10,
		    	"height": height,
		    	"x": -5
		    });

		var focus = svg.append("g")
		    .attr({
		    	"class": "focus",
		    	"transform": "translate(" + margin.left + "," + margin.top + ")"
		    });

		var lineFollow = focus.append("rect")
			.attr({
				"class": "handle",
				"x": width,
				"y": 0,
				"width": "3px",
				"height": height,
				"clip-path": "url(#clip-focus)"
			});

		var context = svg.append("g")
		    .attr("class", "context")
		    .attr("transform", "translate(" + margin2.left + "," + (margin2.top + 12 + margin.top + margin.bottom + height2) + ")");

		/*********** Go ahead and declare some of the variables to be used globally *************/
		
		var items;
		var itemAndValue;
		var cross = d3.svg.symbol().type("cross");
		var itemText;


		/*********** Data Transforms **************/
		// transform the dates into valid dates
		data = _.map(data, function(d, i) { 
			return {
				name: _.keys(d)[0],
				dates: _.map(_.values(d)[0], function(item, index) { 
					return new Date(item["date"]); 
				})
			}
		});
		// these will be used for showing the current date and setting the range for the context brush
		var today = new Date();
		var threeMosAgo = addMonths(new Date(), -3); 
		var threeMosFromNow = addMonths(new Date(), +3);

		function addMonths(date, months) {
		  date.setMonth(date.getMonth() + months);
		  return date;
		}

		// make the valid dates readable when displaying on screen
		var dateFormat = d3.time.format("%d-%b-%Y");

		
		// take all dates from all arrays and get the first and last values
		var dateRange = _.sortBy(_.flatten(_.pluck(data, "dates")));
		// get the oldest date and add subtract a month (we don't want it to be hanging off the edge of the chart)
		var oldestDate = _.first(dateRange);
		// get the most recent date and add one month
		var mostRecentDate = _.last(dateRange);

		/************ Back to Business *************/
		x.domain([oldestDate, mostRecentDate]);
		x2.domain(x.domain());

	  focus.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);
		
		brush.extent([threeMosAgo, threeMosFromNow]);
		brush(d3.select(".brush").transition());
		brushed();

		// make a line showing today
		var todayLine = focus.append("rect")
			.attr({
				"class": "today-line",
				"x": x(today),
				"y": 0,
				"width": "2px",
				"height": height,
				"clip-path": "url(#clip-focus)"
			})
			.style({
				"fill": "#f17",
				"fill-opacity": 0.5
			});
		// Context and Brush 
		drawContext(dateRange);
		// item group
		drawitems(data);

		function drawContext(data) {
			// small axis
			context.append("g")
				.attr("class", "x axis")
				.call(xAxis2);

			var miniCircles = context.selectAll("circle")
				.data(data)
			  .enter().append("circle")
				.attr({
					"class": "circle",
					"transform": "translate(0, -15)",
					"cx": function(d) { return x2(d); },
					"r": "2px"
				}); 

			// range brush
			context.append("g")
				.attr("class", "x brush")
				.call(brush)
				.selectAll("rect")
				.attr("y", -31)
				.attr("height", height2);
		}

		function drawitems(data) {

			_.map(data, function(itemData, i) {

				var itemMargin = i == 0 ? 15 : 15 + (i * (itemPadding + itemHeight));

				// create an item group (title, crosses, and other stuff)
				items = focus.append("g")
					.attr({
						"key": i,
						"class": "item",
						"transform": "translate(0," + (height - itemHeight - itemMargin) + ")"
					});

				// the item name (e.g., Colonoscopy)
				items.append("text")
					.attr({
						"class": "item-title",
						"x": -20,
						"y": 20
					})
					.text(_.values(itemData)[0]);
				

				// to clip the item group from extending beyond the edges of the timeline
				var itemGroup = items.append("g")
					.attr({
						"clip-path": "url(#clip-focus)"
					});

				//the height area for items
				itemGroup.append("rect")
					.attr({
						"class": "total-range",
						"width": width,
						"height": itemHeight,
						"x": 0,
						"y": 0
					});


				// the item crosses
				itemAndValue = itemGroup.selectAll("g")
					.data(_.values(itemData)[1])
				  .enter().append("g")
					.attr({
						"class": "item-and-value",
						"transform": function(d) {
							return "translate(" + x(d) + "," + (itemHeight/2) + ")"
						}
					});
				
				itemAndValue.append("path")
					.attr({
						"class": "cross",
						"d": cross
					});
				
				// here is the text for each cross with rect background
				var itemText = itemAndValue.append("g")
					.attr({
						"class": "item-text",
						"transform": "scale(0)"
					});

				itemText.append("rect")
					.attr({
						"class": "item-text-background",
						"width": 100,
						"height": 40,
						"y": -20,
						"x": function(d) {
							if(x(d) >= width - 120) {
								return -102
							} else {
								return 2
							}
						}
					});
				
				itemText.append("text")
					.attr("x", function(d) {
						if(x(d) >= width - 120) {
							return -10
						} else {
							return 10
						}
					})
					.style({
						"text-anchor": function(d) {
							if(x(d) >= width - 120) {
								return "end"
							} else {
								return "start"
							}
						}
					})
					.text(function(d, i) { return dateFormat(itemData["dates"][i]) });

			});
		}

		function brushed() {
			x.domain(brush.empty() ? x2.domain() : brush.extent());
			focus.select(".today-line").attr({
				"x": x(today)
			});
			focus.selectAll(".item-and-value").attr({ 
				"transform": function(d) {
					return "translate(" + x(d) + "," + (itemHeight/2) + ")"
				}
			});
			focus.selectAll(".x.axis").call(xAxis);
		}

		document.addEventListener("mouseover", function(e) {
			lineFollow.style("display", null);
		});

		document.addEventListener("mouseout", function(e) {
			// Hide the line
			lineFollow.style("display", "none");
		});

		document.addEventListener("mousemove", function(e) {
			// Draw a line
			lineFollow.attr("x", e.clientX - margin.left);

			d3.selectAll(".item-and-value").each(function(d) {
				var nodeTransform = this.getTransformToElement(this.nearestViewportElement)["e"] - margin.left;

				if(+nodeTransform >= (+lineFollow.attr("x") - 10) && +nodeTransform <= (+lineFollow.attr("x") + 10)) {
					d3.select(this).select(".item-text").transition()
						.duration(300)
						.ease("cubic")
						.attr("transform", "scale(1)");
				} else {
					d3.select(this).select(".item-text").transition()
						.delay(1000)
						.duration(200)
						.ease("cubic")
						.attr("transform", "scale(0)");
				}
			});
		});
	}
});


module.exports = CalendarWidget;






