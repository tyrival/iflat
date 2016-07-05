Ext.define('iFlat.model.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {

        /* 全局 main */
        title: {
            iconPath: 'resources/images/sencha-icon.png',
            name: ' 中船澄西信息化平台'
        },
        user: {
            account: '',
            userName: '',
            title: '',
            roleId: '',
            roleName: '',
            orgId: '',
            orgCode: '',
            orgName: '',
            porgId: '',
            porgCode: '',
            porgName: '',
            sequence: '',
            loginTime: null,
        },
        month: ['2015-10','2015-11','2015-12',
            '2016-01','2016-02','2016-03','2016-04','2016-05','2016-06',
            '2016-07','2016-08','2016-09','2016-10','2016-11','2016-12',
            '2017-01','2017-02','2017-03','2017-04','2017-05','2017-06',
            '2017-07','2017-08','2017-09','2017-10','2017-11','2017-12',
            '2018-01','2018-02','2018-03','2018-04','2018-05','2018-06',
            '2018-07','2018-08','2018-09','2018-10','2018-11','2018-12',
            '2019-01','2019-02','2019-03','2019-04','2019-05','2019-06',
            '2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
        ],

        /* 成本综合分析 business intelligence */
        projectCostType: ['报价','目标','实际'],
        costCtrlType: ['劳务工费','职工薪酬','制造费','动力费','外协费','设备工装费','专项协作费','试航费','保修费','码头使用费','船台使用费','设备成本','材料成本','采购附加费','销售费','设计费','检验费','销售附加费','设备加帐','材料加帐','人工加帐','器材加帐'],
        projectInProcess: ['用钢量','工装费','焊材用量','钢管用量','外协分段吨位','油漆用量','船台费','电缆用量','码头费','浮吊费','拖轮费'],
        projectInProcessStage: ['分段阶段','船台阶段','水下阶段'],
        deptCtrlType: ['工业性消耗','工具','机物料消耗','修理费','办公用具','低值设备','生产用具'],

        /* 生产管理 work in process */
        woType: ['结构', '舾装制作', '舾装安装', '工程', '修改', '杂项', '自测样管', '通用件'],

        /* 问题 question */
        system: ['工时系统','物资系统','成本系统','质量系统','设计数据系统','报表中心','其他'],
        solver: [
            {'account': 'A200900012', 'userName': '周晨煜'},
            {'account': 'A200900012', 'userName': '何春梅'},
            {'account': 'A200900012', 'userName': '赵丽'},
            {'account': 'A200900012', 'userName': '窦培华'},
        ],
        reason: ['业务不熟','系统不熟','新增需求','系统bug','系统优化'],

        /* 工程结算 settlement management */
        smDept: ['造船加工车间','造船船体车间','造船安装车间','修船冷作车间','修船坞修车间','修船舾装车间','修船机电修理车间','钢结构事业部', '生产保障部'],
        smDeptScFirst: ['钢结构事业部','造船加工车间','造船船体车间','造船安装车间','修船冷作车间','修船坞修车间','修船舾装车间','修船机电修理车间'],
        smDeptSrFirst: ['修船冷作车间','修船坞修车间','修船舾装车间','修船机电修理车间','造船加工车间','造船船体车间','造船安装车间','钢结构事业部'],
        smSbDept: ['造船加工车间','造船船体车间','造船安装车间'],
        smSrDept: ['修船冷作车间','修船坞修车间','修船舾装车间','修船机电修理车间'],
        smScDept: ['钢结构事业部'],
        smOutsourcingType: ['29 代理制餐补','20 代理制工费','201 返聘工资','13 工伤补贴','23 绩效工资','19 工会经费','202 沐浴费','18 其他工费','39 福利费','25 保险费'],
        smSrWorkType: ['冷作', '钳工', '涂装', '搭架', '电工', '铜工'],
        smSrWorkTypeLZ: ['冷作', '钳工'],
        smSrWorkTypeJD: ['电工', '钳工', '铜工'],
        smSrWorkTypeWithOutJD: ['冷作', '钳工', '涂装', '搭架'],
        smSrWorkTypeWX: ['涂装'],
        smSrWorkTypeXZ: ['搭架'],
        smFineType: ['计划执行','设备能源','其他'],
        smCategory: ['分段制作', '船台搭载', '码头舾装','电', '气', '水', '奖惩条例','设备','焊材','工具','工装','培训类', '工时填报', '晚间值班', '班前会组织','精细化派工'],
        smCategoryPlan: ['分段制作', '船台搭载', '码头舾装'],
        smCategoryEnergy: ['电', '气', '水', '奖惩条例','设备','焊材','工具','工装'],
        smCategoryOther: ['培训类', '工时填报', '晚间值班', '班前会组织','精细化派工'],

        /* 质量管理 quality managerment */
        qualityFineCategory: ['质量指标','工艺纪律','交验考核'],
        qualityFineProfession: ['船体','轮机','电气','内装','油漆'],

        /* 安环保卫 safety & security */
        safetyFinePaid: ['未付','已付'],
        safetyFineType: ['安全隐患','行为规范','5S','事故'],
        safetyFineMgrDept: ['造船事业部','修船事业部','钢结构事业部'],
        safetyFineDeadline: ['立即整改','通知整改'],
        safetyFineInspectType: ['日常检查','节前检查'],
        safetyFineDangerType: ['设备设施','明火作业','个人行为'],
        safetyFineDamageType: ['火灾','物体打击','触电','高处坠落','燃爆','其他伤害'],
        safetyFineRiskLevel: ['轻微','严重'],

    },
});