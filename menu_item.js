(function(){
	'use strict'
	
	var util = require('./util.js');
	function menueItem(config) {
		var config = config || {};
		var o = {
			ele: null,
			data: config.data,
			init: function(){
				this.initEle();
				this.initEvent();
			},
			initEle: function(){
				this.ele = util.make('div', 'app__menu-item');
				this.ele.innerHTML = this.data;
			},
			initEvent: function(){},
		};

		o.init();
		return o;
	}

	module.exports = menuItem;

})();