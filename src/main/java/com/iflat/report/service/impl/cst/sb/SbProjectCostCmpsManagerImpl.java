package com.iflat.report.service.impl.cst.sb;

import com.iflat.report.bean.cst.sb.SbProjectCostCmps;
import com.iflat.system.dao.IflatDao;
import com.iflat.system.service.impl.IflatManagerSupport;

import java.util.List;

/**
 * Created by tyriv on 2015/12/18.
 */
public class SbProjectCostCmpsManagerImpl extends IflatManagerSupport {

    public IflatDao iflatDao;

    @Override
    public List list(Object o) throws Exception {
        List<SbProjectCostCmps> list = (List<SbProjectCostCmps>)this.iflatDao.list(o);
        Double target = 0.0;
        Double actual = 0.0;
        if(list != null) {
            for(int i = 0; i < list.size(); i++) {
                target += list.get(i).getTarget();
                actual += list.get(i).getActual();
            }
            for(int i = 0; i < list.size(); i++) {
                if(target != 0) {
                    list.get(i).setTargetPct(list.get(i).getTarget() * 100 / target);
                }
                if(actual != 0) {
                    list.get(i).setActualPct(list.get(i).getActual() * 100 / actual);
                }
            }
        }
        return list;
    }

    @Override
    public void setImportExcelReader() throws Exception {
    }

    @Override
    public void setImportProps() throws Exception {
    }

    @Override
    public void importValidate() throws Exception {
    }

    public IflatDao getIflatDao() {
        return iflatDao;
    }

    public void setIflatDao(IflatDao iflatDao) {
        this.iflatDao = iflatDao;
    }
}
