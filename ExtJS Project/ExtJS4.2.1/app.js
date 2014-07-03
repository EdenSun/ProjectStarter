Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'RLM',

    appFolder: 'app',

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'User Manage',
                    html : 'List of users will go here'
                }
            ]
        });
    },
	
	controllers: [
		'UserManageCtrl'
	]
});