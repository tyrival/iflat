Ext.define('iFlat.model.pam.News', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'news.id', mapping: 'id', type: 'string'},
        {name: 'news.type', mapping: 'type', type: 'string'},
        {name: 'news.title', mapping: 'title', type: 'string'},
        {name: 'news.author', mapping: 'author', type: 'string'},
        {name: 'news.content', mapping: 'content', type: 'string'},
        {name: 'news.attachment', mapping: 'attachment', type: 'string'},
        {name: 'news.amount', mapping: 'amount', type: 'number'},
        {name: 'news.isSubmit', mapping: 'isSubmit', type: 'string'},
        {name: 'news.submitTime', mapping: 'submitTime', type: 'date'},
        {name: 'news.submitAcc', mapping: 'submitAcc', type: 'string'},
        {name: 'news.submitName', mapping: 'submitName', type: 'string'},
        {name: 'news.submitDept', mapping: 'submitDept', type: 'string'},
        {name: 'news.apprvAcc', mapping: 'apprvAcc', type: 'string'},
        {name: 'news.apprvName', mapping: 'apprvName', type: 'string'},
        {name: 'news.apprvTime', mapping: 'apprvTime', type: 'date'},
        {name: 'news.isAdopt', mapping: 'isAdopt', type: 'string'},
        {name: 'news.secApprv', mapping: 'secApprv', type: 'string'},
        {name: 'news.secApprvAcc', mapping: 'secApprvAcc', type: 'string'},
        {name: 'news.secApprvName', mapping: 'secApprvName', type: 'string'},
        {name: 'news.secApprvTime', mapping: 'secApprvTime', type: 'date'},
        {name: 'news.status', mapping: 'status', type: 'string'},
        {name: 'news.pbName', mapping: 'pbName', type: 'string'},
        {name: 'news.creatorAcc', mapping: 'creatorAcc', type: 'string'},
        {name: 'news.creatorName', mapping: 'creatorName', type: 'string'},
        {name: 'news.createTime', mapping: 'createTime', type: 'date'},
        {name: 'news.fromDate', mapping: 'fromDate', type: 'date'},
        {name: 'news.toDate', mapping: 'toDate', type: 'date'},
    ]
});