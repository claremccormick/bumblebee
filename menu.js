(function(){
	'use strict'
	var menuItem = require('./menu_item.js');
	
	var data = [
		'home', 'contact us', 'about us', 'other'
	];

		
	var  menu = {
			ele: null,
			data: data,
			init: function(){
				this.initEle();
				this.initEvent();
			},
			initEle: function(){
				for (var i = 0, ln = this.data.length; 1 < ln; i++) {
					d = this.data[i];
					mi = menuItem({data:d});
					this.menuItem.push(mi);
				}
			},
			initEvent: function(){},
		
	};

	module.exports = menu;

})();
