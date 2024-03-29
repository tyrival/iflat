package com.iflat.ss.service.impl;

import com.iflat.ss.bean.SafetyFine;
import com.iflat.system.entity.UserInfoVo;
import com.iflat.base.service.impl.BaseServiceSupport;
import com.iflat.util.Session;
import org.springframework.oxm.ValidationFailureException;

import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * Created by tyriv on 2016/1/7.
 */
public class SafetyFineServiceImpl extends BaseServiceSupport {

    @Override
    public void beforeInsert() throws Exception {
        ((SafetyFine)this.getSaveObj()).setSource(Session.getUserInfo().getPorgName());
        ((SafetyFine)this.getSaveObj()).setCreator(Session.getUserInfo().getAccount());
        ((SafetyFine)this.getSaveObj()).setCreateTime(new Date());
    }

    @Override
    public void setImportExcelReader() throws Exception {
        super.getExcelReader().setClassName("com.iflat.ss.bean.SafetyFine");
        super.getExcelReader().setProps(new String[]{"projNo","dept","team","group","person", "date", "type", "position", "description", "measure", "deadline", "manager", "mgrDept", "dangerType", "damageType", "riskLevel", "inspectType", "comment", "issuer"});
    }

    @Override
    public void setImportProps() throws Exception {
        List list = super.getImportList();
        for(int i = 0; i < list.size(); i++) {
            SafetyFine o = (SafetyFine)list.get(i);
            o.setId(UUID.randomUUID().toString());
            o.setSource(Session.getUserInfo().getPorgName());
            o.setCreator(Session.getUserInfo().getAccount());
            o.setCreateTime(new Date());
        }
    }

    @Override
    public void importValidate() throws Exception {
        List list = super.getImportList();
        for(int i = 0; i < list.size(); i++) {
            SafetyFine o = (SafetyFine)list.get(i);
            if(o.getProjNo() == null || o.getProjNo() == "") {
                throw new ValidationFailureException("第" + (i + 1) + "行工号为空");
            }
        }
    }

}
