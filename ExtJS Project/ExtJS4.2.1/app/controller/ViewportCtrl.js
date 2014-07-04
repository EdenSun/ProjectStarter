Ext.define('RLM.controller.ViewportCtrl',{
	extend: 'Ext.app.Controller',
	
	init: function(app){
		this.initMenuTreePanel();
		
		
	},
	
	initMenuTreePanel: function(){
		this.control('#menuTreePanel',{
			itemclick: this.onMenuItemClick
		});
		
		
	},
	
	onMenuItemClick :function( $this, record, item, index, e, eOpts ){
		var viewName = record.raw.viewName;
		var title = record.raw.text;
		if( viewName ){
		
			var mainTabPanel = Ext.getCmp('mainTabPanel');
			this.addTab(mainTabPanel,title,viewName,true);
			
		}
		
	},
	
	addTab : function(mainTabPanel,title,viewName,closable) {
        mainTabPanel.add({
			layout:'fit',
			items: Ext.create(viewName,{}),
            closable: closable,
            title: title
        }).show();
    }
});