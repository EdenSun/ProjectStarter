Ext.define('RLM.view.ViewportBase', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'border',
		regionWeights: {
			 west: 5,
			 north: 10,
			 south: 0,
			 east: 0
		 }
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    height: 59
                },
                {
                    xtype: 'tabpanel',
					id: 'mainTabPanel',
                    region: 'center',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            closable: false,
                            title: '首页'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'west',
					split: true,
                    width: 230,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    title: '菜单',
                    items: [
                        {
                            xtype: 'panel',
                            flex: 0,
							border:false,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    fieldLabel: 'Label',
                                    hideLabel: true
                                }
                            ]
                        },
                        {
                            xtype: 'treepanel',
							id: 'menuTreePanel',
							store:'ViewportMenuTreeStore',
                            flex: 1,
                            title: '',
                            viewConfig: {

                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});