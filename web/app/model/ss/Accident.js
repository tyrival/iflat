Ext.define('iFlat.model.ss.Accident', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'accident.id', mapping: 'id', type: 'string'},
        {name: 'accident.date', mapping: 'date', type: 'date'},
        {name: 'accident.time', mapping: 'time', type: 'string'},
        {name: 'accident.projNo', mapping: 'projNo', type: 'string'},
        {name: 'accident.projName', mapping: 'projName', type: 'string'},
        {name: 'accident.area', mapping: 'area', type: 'string'},
        {name: 'accident.position', mapping: 'position', type: 'string'},
        {name: 'accident.description', mapping: 'description', type: 'string'},
        {name: 'accident.accLvl', mapping: 'accLvl', type: 'string'},
        {name: 'accident.accType', mapping: 'accType', type: 'string'},
        {name: 'accident.loss', mapping: 'loss', type: 'number'},
        {name: 'accident.busiDivision', mapping: 'busiDivision', type: 'string'},
        {name: 'accident.projMgr', mapping: 'projMgr', type: 'string'},
        {name: 'accident.profMgr', mapping: 'profMgr', type: 'string'},
        {name: 'accident.workMgr', mapping: 'workMgr', type: 'string'},
        {name: 'accident.teamLeader', mapping: 'teamLeader', type: 'string'},
        {name: 'accident.posiMgr', mapping: 'posiMgr', type: 'string'},
        {name: 'accident.rptAtt', mapping: 'rptAtt', type: 'string'},
        {name: 'accident.otherAtt', mapping: 'otherAtt', type: 'string'},
        {name: 'accident.comment', mapping: 'comment', type: 'string'},
        {name: 'accident.creatorAcc', mapping: 'creatorAcc', type: 'string'},
        {name: 'accident.creatorName', mapping: 'creatorName', type: 'string'},
        {name: 'accident.creatorDept', mapping: 'creatorDept', type: 'string'},
        {name: 'accident.createTime', mapping: 'createTime', type: 'date'},
        {name: 'accident.issuer', mapping: 'issuer', type: 'string'},
        {name: 'accident.issueDept', mapping: 'issueDept', type: 'string'},
        {name: 'accident.fromDate', mapping: 'fromDate', type: 'date'},
        {name: 'accident.toDate', mapping: 'toDate', type: 'date'},
    ]
});