Ext.define('RLM.view.ResManageView', {
    extend: 'Ext.panel.Panel',

    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: '资源管理',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    flex: 0,
                    height: 92,
                    layout: {
                        columns: 4,
                        type: 'table'
                    },
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            padding: '0 5px 0 0',
                            fieldLabel: '名称',
                            labelWidth: 70
                        },
                        {
                            xtype: 'combobox',
                            padding: '0 5px',
                            fieldLabel: '格式',
                            labelWidth: 80
                        },
                        {
                            xtype: 'textfield',
                            padding: '0 5px',
                            fieldLabel: '关键字',
                            labelWidth: 80
                        },
                        {
                            xtype: 'textfield',
                            padding: '0 0 0 5px',
                            fieldLabel: '发布者',
                            labelWidth: 70
                        },
                        {
                            xtype: 'textfield',
                            padding: '0 5px 0 0',
                            fieldLabel: '审核状态',
                            labelWidth: 70
                        },
                        {
                            xtype: 'datefield',
                            padding: '0 5px',
                            fieldLabel: '上传时间(起)',
                            labelWidth: 80
                        },
                        {
                            xtype: 'datefield',
                            padding: '0 5px',
                            fieldLabel: '上传时间(止)',
                            labelWidth: 80
                        },
                        {
                            xtype: 'combobox',
                            padding: '0 0 0 5px',
                            fieldLabel: '频道',
                            labelWidth: 70
                        },
                        {
                            xtype: 'panel',
                            colspan: 4,
                            border: false,
                            layout: {
                                align: 'stretch',
                                pack: 'end',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    width: 70,
                                    text: '重置'
                                },
                                {
                                    xtype: 'button',
                                    margins: '0 0 0 10px',
                                    width: 70,
                                    text: '搜索'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    title: '资源列表',
                    store: 'ResGridStore',
                    dockedItems: [
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            width: 360,
                            displayInfo: true
                        },
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'buttongroup',
                                    title: '通用',
                                    columns: 4,
                                    items: [
                                        {
                                            xtype: 'button',
                                            text: '查看'
                                        },
                                        {
                                            xtype: 'button',
                                            text: '编辑'
                                        },
                                        {
                                            xtype: 'button',
                                            text: '删除'
                                        },
                                        {
                                            xtype: 'button',
                                            text: '添加到频道'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'buttongroup',
                                    title: '审核',
                                    columns: 2,
                                    items: [
                                        {
                                            xtype: 'button',
                                            text: '批准'
                                        },
                                        {
                                            xtype: 'button',
                                            text: '拒绝'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: '#',
                            text: '#'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: '名称',
                            text: '名称'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: '格式',
                            text: '格式'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: '大小',
                            text: '大小'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: '关键字',
                            text: '关键字'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: '发布者',
                            text: '发布者'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: '审核状态',
                            text: '审核状态'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: '上传时间',
                            text: '上传时间'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: '上传资源'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});