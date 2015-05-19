var React = require('react');

var CalendarWidget = React.createClass({
	drawChart: function(data) {
		/***************** Start by doing the typical SVG setup ***************/
		var svg = d3.select("div#chart").append("svg"),
				margin = {top: 80, right: 50, bottom: 50, left: 150},
		    margin2 = {top: 50, right: 50, bottom: 20, left: 150},
				width = document.getElementById("chart").offsetWidth - margin.left - margin.right,
		    height = _.size(data) * margin.top - margin.top - margin.bottom,
		    height2 = 30,
		    itemHeight = 15,
		    itemPadding = 15;

		var x = d3.time.scale().range([0, width]),
		    x2 = d3.time.scale().range([0, width]);

		var xAxis = d3.svg.axis().scale(x).orient("top").tickSize(height).tickPadding(6),
		    xAxis2 = d3.svg.axis().scale(x2).orient("bottom").ticks(width < 910 ? 8 : 12);
			
		// This is the thing that expands and contracts the timeline
		var brush = d3.svg.brush()
			.x(x2)
			.on("brush", brushed);

		svg.attr({
				"width": width + margin.left + margin.right,
				"height": height + margin.top + margin.bottom + height2 + margin2.top + margin2.bottom
			});

		svg.append("defs").append("clipPath")
		    .attr("id", "clip-focus")
		  .append("rect")
		    .attr({
		    	"width": width + 15,
		    	"height": height,
		    	"x": -7
		    });

		var focus = svg.append("g")
		    .attr({
		    	"class": "focus",
		    	"transform": "translate(" + margin.left + "," + margin.top + ")"
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
				}),
				completedDates: _.map(_.values(d)[0], function(item, index) { 
					return new Date(item["completedDate"]); 
				})
			}
		});
		// these will be used for showing the current date and setting the range for the context brush
		var today = new Date();
		var sixMosAgo = addMonths(new Date(), -6); 
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
		
		brush.extent([sixMosAgo, threeMosFromNow]);
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
		drawItems(data);

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

		function drawItems(data) {

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
						"y": 14
					})
					.text(_.values(itemData)[0]);
				

				// to clip the item group from extending beyond the edges of the timeline
				var itemGroup = items.append("g")
					.attr({
						"key": i,
						"clip-path": "url(#clip-focus)"
					});

				//the height area for items
				itemGroup.append("rect")
					.attr({
						"class": "total-range",
						"width": width,
						"height": itemHeight
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
						"class": function(d) {
							console.log(d)
							if(d > threeMosAgo && d < threeMosFromNow && d["completedDate"] == null) {
								return "cross alert"
							} else if(d["completedDate"] != null) {
								return "cross completed"
							} else {
								return "cross"
							}
						},
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
						"height": itemHeight + itemPadding,
						"y": -itemHeight,
						"x": function(d) {
							if(x(d) >= width - 120) {
								return -102
							} else {
								return 2
							}
						}
					});
				
				itemText.append("text")
					.attr({
						"x": function(d) {
							if(x(d) >= width - 120) {
								return -10
							} else {
								return 10
							}
						},
						"y": 8
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

		d3.selectAll(".item-and-value").each(function() {
			var itemNode = d3.select(this);

			function mousemove() {
		    d3.mouse(itemNode.node());
		  }

			d3.select("div#chart").on("mousemove", mousemove);
		});
	},
	componentDidMount: function() {
		this.drawChart(this.props.calendarItems);
	},
	render: function() {
		return (

			<div id="chart">	
			</div>

		)
	}
});



module.exports = CalendarWidget;