Ext.application({
    name: 'RLM',
    appFolder: 'app',
	autoCreateViewport: true,

	views: [
        'Viewport'
    ],
	
	stores:[
		'ViewportMenuTreeStore',
		'ResGridStore'
	],
	
	controllers: [
		'ViewportCtrl',
		'ResManageCtrl',
		'ResCategoryManageCtrl',
		'CourseManageCtrl'
		
	],
    
    launch: function() {
		
    }
});