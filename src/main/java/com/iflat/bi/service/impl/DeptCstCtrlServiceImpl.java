package com.iflat.bi.service.impl;

import com.iflat.bi.bean.DeptCstCtrl;
import com.iflat.base.service.impl.BaseServiceSupport;

import java.util.List;
import java.util.UUID;

/**
 * Created by tyriv on 2015/11/29.
 */
public class DeptCstCtrlServiceImpl extends BaseServiceSupport {

    @Override
    public void setImportExcelReader() throws Exception {
        super.getExcelReader().setClassName("com.iflat.bi.bean.DeptCstCtrl");
        super.getExcelReader().setProps(new String[]{"month","dept","type","budget","actual","comment"});
    }

    @Override
    public void setImportProps() throws Exception {
        List list = super.getImportList();
        for(int i = 0; i < list.size(); i++) {
            DeptCstCtrl o = (DeptCstCtrl)list.get(i);
            o.setId(UUID.randomUUID().toString());
            o.setVersion(1);
        }
    }

    @Override
    public void importValidate() throws Exception {
    }
}
