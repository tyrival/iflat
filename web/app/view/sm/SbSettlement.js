Ext.define('iFlat.view.sm.SbSettlement', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sm-sbsettlement',

    requires: [
        'iFlat.view.sm.SbSettlementController'
    ],

    controller: 'sm-sbsettlement',

    store: smSbSettlementStore = Ext.create('iFlat.store.sm.SbSettlement', {
        proxy: {
            extraParams: {
                'sbSettlement.creatorAcc': Ext.getCmp('global-panel').getViewModel().get('user')['account']
            }
        }
    }),

    tbar: [{
        xtype: 'button',
        text: '新增',
        ui: 'orig-blue',
        id: 'sm-sbsettlement-add',
        handler: 'edit'
    }, {
        xtype: 'form',
        items: [{
            xtype: 'fileuploadfield',
            name: 'upload',
            buttonText: '选择...',
            width: 140,
            margin: '0 0 0 0',
        }, ]
    }, {
        xtype: 'button',
        text: '导入',
        ui: 'orig-blue',
        handler: 'uploadFile'
    }, '->', {
        text: '下载模板',
        handler: 'downloadTemplate'
    }, {
        text: '刷新',
        id: 'sm-sbsettlement-refresh',
        handler: 'refresh',
    }],

    columns: [{
        text: '提交',
        width: 50,
        menuDisabled: true,
        xtype: 'actioncolumn',
        align: 'center',
        iconCls: 'x-fa fa-hand-o-up',
        handler: 'submit',
        isDisabled: function(view, rowIdx, colIdx, item, record) {
            return record.get('sbSettlement.status') != '未提交';
        },
    }, {
        text: '编辑',
        width: 50,
        menuDisabled: true,
        xtype: 'actioncolumn',
        tooltip: '编辑',
        align: 'center',
        iconCls: 'x-fa fa-edit',
        handler: 'edit',
    }, {
        text: '批注',
        width: 50,
        menuDisabled: true,
        xtype: 'actioncolumn',
        align: 'center',
        iconCls: 'x-fa fa-tags',
        handler: 'info',
    }, {
        header: '状态',
        width: 80,
        dataIndex: 'sbSettlement.status',
    }, {
        header: '月份',
        dataIndex: 'sbSettlement.month',
        formatter: 'date("Y-m")'
    }, {
        header: '工号',
        dataIndex: 'sbSettlement.projNo',
    }, {
        header: '船名',
        width: 150,
        dataIndex: 'sbSettlement.projName',
    }, {
        header: '部门',
        width: 120,
        dataIndex: 'sbSettlement.deptName',
    }, {
        header: '工程队',
        width: 200,
        dataIndex: 'sbSettlement.team',
    }, {
        header: '附件',
        width: 50,
        dataIndex: 'sbSettlement.attachment',
        renderer: 'renderAttachment'
    }, {
        header: '备注',
        width: 150,
        dataIndex: 'sbSettlement.comment',
    }, {
        text: '删除',
        width: 50,
        menuDisabled: true,
        xtype: 'actioncolumn',
        align: 'center',
        iconCls: 'x-fa fa-close',
        handler: 'delete',
        isDisabled: function(view, rowIdx, colIdx, item, record) {
            return record.get('sbSettlement.status') != '未提交';
        },
    }],
});
