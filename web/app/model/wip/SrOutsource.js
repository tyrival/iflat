Ext.define('iFlat.model.wip.SrOutsource', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'srOutsource.id', mapping: 'id', type: 'string'},
        {name: 'srOutsource.projNo', mapping: 'projNo', type: 'string'},
        {name: 'srOutsource.projName', mapping: 'projName', type: 'string'},
        {name: 'srOutsource.projType', mapping: 'projType', type: 'string'},
        {name: 'srOutsource.dept', mapping: 'dept', type: 'string'},
        {name: 'srOutsource.type', mapping: 'type', type: 'string'},
        {name: 'srOutsource.capitalSource', mapping: 'capitalSource', type: 'string'},
        {name: 'srOutsource.matSource', mapping: 'matSource', type: 'string'},
        {name: 'srOutsource.tod', mapping: 'tod', type: 'date'},
        {name: 'srOutsource.hasBluePrint', mapping: 'hasBluePrint', type: 'boolean'},
        {name: 'srOutsource.hasSample', mapping: 'hasSample', type: 'boolean'},
        {name: 'srOutsource.ownerAppoint', mapping: 'ownerAppoint', type: 'boolean'},
        {name: 'srOutsource.aplAtt', mapping: 'aplAtt', type: 'string'},
        {name: 'srOutsource.aplComment', mapping: 'aplComment', type: 'string'},
        {name: 'srOutsource.bidNo', mapping: 'bidNo', type: 'string'},
        {name: 'srOutsource.bidType', mapping: 'bidType', type: 'string'},
        {name: 'srOutsource.bidAtt', mapping: 'bidAtt', type: 'string'},
        {name: 'srOutsource.vendor', mapping: 'vendor', type: 'string'},
        {name: 'srOutsource.vendorType', mapping: 'vendorType', type: 'string'},
        {name: 'srOutsource.bidAmountFirst', mapping: 'bidAmountFirst', type: 'number'},
        {name: 'srOutsource.bidAmountSecond', mapping: 'bidAmountSecond', type: 'number'},
        {name: 'srOutsource.bidAmountDiff', mapping: 'bidAmountDiff', type: 'number'},
        {name: 'srOutsource.bidComment', mapping: 'bidComment', type: 'string'},
        {name: 'srOutsource.saleOpinion', mapping: 'saleOpinion', type: 'string'},
        {name: 'srOutsource.contNo', mapping: 'contNo', type: 'string'},
        {name: 'srOutsource.contDate', mapping: 'contDate', type: 'string'},
        {name: 'srOutsource.contAmount', mapping: 'contAmount', type: 'number'},
        {name: 'srOutsource.contAtt', mapping: 'contAtt', type: 'string'},
        {name: 'srOutsource.conComment', mapping: 'conComment', type: 'string'},
        {name: 'srOutsource.finishTime', mapping: 'finishTime', type: 'date'},
        {name: 'srOutsource.overtime', mapping: 'overtime', type: 'boolean'},
        {name: 'srOutsource.otReason', mapping: 'otReason', type: 'string'},
        {name: 'srOutsource.inspResult', mapping: 'inspResult', type: 'string'},
        {name: 'srOutsource.inspComment', mapping: 'inspComment', type: 'string'},
        {name: 'srOutsource.inspAtt', mapping: 'inspAtt', type: 'string'},
        {name: 'srOutsource.settAmountFirst', mapping: 'settAmountFirst', type: 'number'},
        {name: 'srOutsource.settAmountSecond', mapping: 'settAmountSecond', type: 'number'},
        {name: 'srOutsource.settAmountDiff', mapping: 'settAmountDiff', type: 'number'},
        {name: 'srOutsource.settComment', mapping: 'settComment', type: 'string'},
        {name: 'srOutsource.settAtt', mapping: 'settAtt', type: 'string'},
        {name: 'srOutsource.saleReaudit', mapping: 'saleReaudit', type: 'boolean'},
        {name: 'srOutsource.saleComment', mapping: 'saleComment', type: 'string'},
        {name: 'srOutsource.creatorAcc', mapping: 'creatorAcc', type: 'string'},
        {name: 'srOutsource.creatorName', mapping: 'creatorName', type: 'string'},
        {name: 'srOutsource.createTime', mapping: 'createTime', type: 'date'},
        {name: 'srOutsource.auditorAcc', mapping: 'auditorAcc', type: 'string'},
        {name: 'srOutsource.auditorName', mapping: 'auditorName', type: 'string'},
        {name: 'srOutsource.signorAcc', mapping: 'signorAcc', type: 'string'},
        {name: 'srOutsource.signorName', mapping: 'signorName', type: 'string'},
        {name: 'srOutsource.operatorAcc', mapping: 'operatorAcc', type: 'string'},
        {name: 'srOutsource.operatorName', mapping: 'operatorName', type: 'string'},
        {name: 'srOutsource.saleAcc', mapping: 'saleAcc', type: 'string'},
        {name: 'srOutsource.saleName', mapping: 'saleName', type: 'string'},
        {name: 'srOutsource.qaAcc', mapping: 'qaAcc', type: 'string'},
        {name: 'srOutsource.qaName', mapping: 'qaName', type: 'string'},
        {name: 'srOutsource.bdDirectorAcc', mapping: 'bdDirectorAcc', type: 'string'},
        {name: 'srOutsource.bdDirectorName', mapping: 'bdDirectorName', type: 'string'},
        {name: 'srOutsource.completeTime', mapping: 'completeTime', type: 'date'},
        {name: 'srOutsource.fromDate', mapping: 'fromDate', type: 'date'},
        {name: 'srOutsource.toDate', mapping: 'toDate', type: 'date'},
    ]
});