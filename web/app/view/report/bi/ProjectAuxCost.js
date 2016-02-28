Ext.define('iFlat.view.report.bi.ProjectAuxCost', {
    extend: 'Ext.panel.Panel',

    controller: 'rpt-bi-projectauxcost',

    requires: [
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.chart.theme.Category2',
        'Ext.chart.interactions.ItemHighlight'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    tbar: [{
        xtype: 'combo',
        id: 'rpt-bi-projectauxcost-combo',
        store: rptBiProjectAuxCostComboStore = Ext.create('iFlat.store.bi.Project'),
        queryMode: 'local',
        allowBlank: false,
        editable: true,
        typeAhead: true,
        minChars: 0,
        forceSelection : true,
        displayField: 'name',
        valueField: 'projNo',
        width: 350,
        fieldLabel: '船名',
        labelAlign: 'right',
        labelWidth: 40
    }, {
        text: '查询',
        handler: 'search'
    },{
        text: '专项费构成',
        handler: 'onShowAssistWindow'
    }, {
        xtype: 'label',
        text: '金额单位： 万元',
        style: 'font-size: 16px'
    },'->',{
        text: '下载',
        handler: 'download'
    }, {
        text: '刷新',
        handler: 'refresh'
    }],

    items: [{
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'cartesian',
            reference: 'rpt-bi-projectauxcost-chart',
            store: rptBiProjectAuxCostStore = Ext.create('iFlat.store.report.bi.ProjectCost'),
            theme: 'category2',
            width: '100%',
            height: 300,
            insetPadding: '60 150 20 200',
            sprites: [{
                type: 'text',
                text: '专项费指标',
                fontFamily: '微软雅黑',
                fontSize: '18px',
                fontWeight: 'bold',
                width: 100,
                height: 30,
                x: 200,
                y: 30
            }],
            axes: [{
                type: 'numeric',
                position: 'left',
                fields: ['projectCost.auxPct','projectCost.auxiliaryPct'],
                reconcileRange: true,
                majorTickSteps: 2,
                minimum: 0,
                maximum: 20,
                grid: true,
                label: {
                    font: '14px 微软雅黑'
                },
                renderer: 'onAxisLabelRender',
            }, {
                type: 'category',
                position: 'bottom',
                label: {
                    font: '14px 微软雅黑'
                },
                fields: 'projectCost.type',
            }],
            series: [{
                type: 'bar',
                title: '专项费',
                xField: 'projectCost.type',
                yField: 'projectCost.auxPct',
                style: {
                    opacity: 0.80,
                },
                label: {
                    field: 'projectCost.auxPct',
                    display: 'insideEnd',
                    font: '16px 微软雅黑',
                    orientation: 'horizontal',
                    renderer: 'onBarLabelRender',
                },
                highlight: {
                    fillStyle: 'rgba(204, 230, 73, 1.0)',
                    strokeStyle: 'black',
                },
                tooltip: {
                    trackMouse: true,
                    renderer: 'onBarSeriesTooltipRender'
                }
            }, {
                type: 'line',
                colors: ['#FF0000'],
                title: '指标',
                xField: 'projectCost.type',
                yField: 'projectCost.auxiliaryPct',
                style: {
                    lineWidth: 3,
                    opacity: 0.80
                },
                highlightCfg: {
                    scaling: 2,
                    rotationRads: Math.PI / 4,
                },
                tooltip: {
                    trackMouse: true,
                    renderer: 'onLineSeriesTooltipRender'
                }
            }]
        }]
    }, {
        xtype: 'grid',
        margin: '10 110 0 50',
        border: true,
        columnLines: true,
        sortableColumns: false,
        flex: 1,
        store: rptBiProjectAuxCostGridStore = Ext.create('iFlat.store.report.bi.ProjectCostBalance', {
            filters: function(item) {
                var name = item.get("name");
                return name == "销售收入" || name == "专项费." || name == "专项费占比.";
            }
        }),
        columns: [{
            text: '名称',
            width: 180,
            flex: false,
            align: 'center',
            dataIndex: 'name',
            renderer: 'cellRenderer'
        }, {
            text: '报价',
            width: 220,
            flex: 1,
            align: 'right',
            dataIndex: 'estimate',
            renderer: 'cellRenderer'
        }, {
            text: '目标',
            width: 220,
            flex: 1,
            align: 'right',
            dataIndex: 'target',
            renderer: 'cellRenderer'
        }, {
            text: '实际',
            width: 220,
            flex: 1,
            align: 'right',
            dataIndex: 'actual',
            renderer: 'cellRenderer'
        }]
    }]
});