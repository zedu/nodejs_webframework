var Step = require("step");
var ControllerCreator = require("contentcube/controller");

module.exports = function(application, request, response) {
	var instance = ControllerCreator(application, request, response);
		instance.layout = 'layouts/example_layout.ejs';
	
	instance.chatAction = function() {
		instance.renderViewWithLayout('pages/websockets.chat.ejs', {}, this);
	};
	
	instance.rpcAction = function() {
		instance.renderViewWithLayout('pages/websockets.rpc.ejs', {}, this);
	};
	
	return instance;
};
