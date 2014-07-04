

Ext.define('RLM.store.ResGridStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ResGridStore',
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json'
                }
            },
            fields: [
                {
                    name: '#'
                },
                {
                    name: '名称'
                },
                {
                    name: '格式'
                },
                {
                    name: '大小'
                },
                {
                    name: '关键字'
                },
                {
                    name: '发布者'
                },
                {
                    name: '审核状态'
                },
                {
                    name: '上传时间'
                }
            ]
        }, cfg)]);
    }
});