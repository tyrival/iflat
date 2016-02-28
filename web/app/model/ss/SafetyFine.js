Ext.define('iFlat.model.ss.SafetyFine', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'safetyFine.id', mapping: 'id', type: 'string'},
        {name: 'safetyFine.projNo', mapping: 'projNo', type: 'string'},
        {name: 'safetyFine.projName', mapping: 'projName', type: 'string'},
        {name: 'safetyFine.position', mapping: 'position', type: 'string'},
        {name: 'safetyFine.place', mapping: 'place', type: 'string'},
        {name: 'safetyFine.type', mapping: 'type', type: 'string'},
        {name: 'safetyFine.date', mapping: 'date', type: 'date'},
        {name: 'safetyFine.dept', mapping: 'dept', type: 'string'},
        {name: 'safetyFine.team', mapping: 'team', type: 'string'},
        {name: 'safetyFine.group', mapping: 'group', type: 'string'},
        {name: 'safetyFine.personAcc', mapping: 'personAcc', type: 'string'},
        {name: 'safetyFine.personName', mapping: 'personName', type: 'string'},
        {name: 'safetyFine.description', mapping: 'description', type: 'string'},
        {name: 'safetyFine.measure', mapping: 'measure', type: 'string'},
        {name: 'safetyFine.deadline', mapping: 'deadline', type: 'string'},
        {name: 'safetyFine.amount', mapping: 'amount', type: 'number'},
        {name: 'safetyFine.feedback', mapping: 'feedback', type: 'string'},
        {name: 'safetyFine.manager', mapping: 'manager', type: 'string'},
        {name: 'safetyFine.mgrDept', mapping: 'mgrDept', type: 'string'},
        {name: 'safetyFine.dangerType', mapping: 'dangerType', type: 'string'},
        {name: 'safetyFine.damageType', mapping: 'damageType', type: 'string'},
        {name: 'safetyFine.riskLevel', mapping: 'riskLevel', type: 'string'},
        {name: 'safetyFine.groupLeader', mapping: 'groupLeader', type: 'string'},
        {name: 'safetyFine.inspectType', mapping: 'inspectType', type: 'string'},
        {name: 'safetyFine.comment', mapping: 'comment', type: 'string'},
        {name: 'safetyFine.issuer', mapping: 'issuer', type: 'string'},
        {name: 'safetyFine.attachment', mapping: 'attachment', type: 'string'},
        {name: 'safetyFine.creator', mapping: 'creator', type: 'string'},
        {name: 'safetyFine.createTime', mapping: 'createTime', type: 'date'},
    ]
});