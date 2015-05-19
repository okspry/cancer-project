var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CalendarConstants = require('../constants/CalendarConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _items = [
	{"CEA Tests" : 
		[
			{ 
				"date": "3 Apr 2016",
				"completedDate": null,
				"type": "CEA Test"
		  },
			{ 
				"date": "9 Nov 2015",
				"completedDate": "9 Nov 2015",
				"type": "CEA Test"
		  },
			{ 
				"date": "5 Apr 2015",
				"completedDate": "5 Apr 2015",
				"type": "CEA Test"
			},
			{ 
				"date": "9 Nov 2014",
				"completedDate": null,
				"type": "CEA Test"
			},
			{ 
				"date": "12 Jun 2014",
				"completedDate": "12 Jun 2014",
				"type": "CEA Test" 
			}
		]
	},
	{"Colonoscopies": 
		[
			{ 
				"date": "9 Jul 2015",
				"completedDate": null,
				"type": "Colonoscopy"
			},
			{ 
				"date": "15 Apr 2015",
				"completedDate": null,
				"type": "Colonoscopy"
			},
			{ 
				"date": "13 Dec 2014",
				"completedDate": "4 Dec 2014",
				"type": "Colonoscopy" 
			},
			{ 
				"date": "9 Jul 2014",
				"completedDate": "28 Jul 2014",
				"type": "Colonoscopy" 
			}
		]
	},
	{"CT Scans": 
		[
			{ 
				"date": "9 Jun 2015",
				"completedDate": "12 Jun 2015",
				"type": "CT Scan" 
			},
			{ 
				"date": "5 Mar 2015",
				"completedDate": "12 Jun 2015",
				"type": "CT Scan"
			},
			{ 
				"date": "9 Nov 2014",
				"completedDate": "29 Nov 2014",
				"type": "CT Scan"  
			},
			{ 
				"date": "9 Jun 2014",
				"completedDate": "27 May 2014",
				"type": "CT Scan"  
			}
		]
	}
];

function highlight(id) {
  delete _items[id];
}

var CalendarStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _items;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case CalendarConstants.HIGHLIGHT_DUE:
      highlight(action.id);
      CalendarStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = CalendarStore;	
