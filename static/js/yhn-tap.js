(function() {
	var startTime = null;
	var endTime = null;
	var startX,startY;
	trigger = function(element, eventType, eventData) {
		element.dispatchEvent(new CustomEvent(eventType, {
			detail: eventData,
			bubbles: true,
			cancelable: true
		}));
		return this;
	};

	// window.addEventListener("touchstart", function(event) {
	// 	if(event.targetTouches.length>1){
	// 		return
	// 	}
	// 	//console.log("start"+startTime);
	// 	startTime = new Date();
	// });

	// window.addEventListener("touchend", function(e) {
	// 	// if(isDragging) return false;

	// 	endTime = new Date();
	// 	var time = endTime - startTime;
	// 	startTime=null;
	// 	endTime=null;
	// 	if(time < 250) {
	// 		trigger(e.target, "tap", null);
	// 	}
	// });

	window.addEventListener("touchstart", function(e) {
    // 记录下触发的坐标和时间
	    startTime = (new Date()).getTime();
	    startX = e.targetTouches[0].clientX;
	    startY = e.targetTouches[0].clientY;
	},false);
	window.addEventListener("touchend", function(e) {
	    var now = (new Date()).getTime();
	    // 小于300ms可以识别为点击事件的范围 然后判断触摸点的移动距离
	    if (now - startTime < 300) {
	       var x = (Math.abs(startX - e.changedTouches[0].clientX) < 30);
	       var y = (Math.abs(startY - e.changedTouches[0].clientY) < 30);
	       if (x && y) {
	           trigger(e.target, "tap", null);
	       }
	    }
	},false);

})(window);