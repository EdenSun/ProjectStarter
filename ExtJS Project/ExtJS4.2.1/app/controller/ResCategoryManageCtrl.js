Ext.define('RLM.controller.ResCategoryManageCtrl',{
	extend: 'Ext.app.Controller',
	
	init: function(app){
		console.log('init res category manage ctrl.');
		this.control('#ResCateManageModual',{
			render: function(){
				alert('333') 
			}
		});
	}
});