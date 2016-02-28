package com.iflat.air.action;

import com.iflat.lib.bean.Book;
import com.iflat.lib.bean.Record;
import com.iflat.system.action.ResultAware;
import com.iflat.system.entity.Result;
import com.iflat.system.service.IflatManager;
import com.opensymphony.xwork2.ActionSupport;

import java.util.List;

/**
 * Created by tyriv on 2016/2/1.
 */
public class LibAction extends ActionSupport implements ResultAware {

    private IflatManager bookManager;
    private IflatManager recordManager;
    private Book book;
    private Record record;
    private List<Record> recordList;

    private Result result;

    /* book */
    public String saveBook() throws Exception {
        this.result.setObject(this.bookManager.save(this.book));
        return SUCCESS;
    }

    public String deleteBook() throws Exception {
        this.result.setObject(this.bookManager.delete(this.book));
        return SUCCESS;
    }

    public String listBook() throws Exception {
        this.result.setList(this.bookManager.list(this.book));
        return SUCCESS;
    }

    /* record */
    public String saveRecord() throws Exception {
        this.result.setObject(this.recordManager.save(this.record));
        return SUCCESS;
    }

    public String insertBatchRecord() throws Exception {
        this.result.setList(this.recordManager.insertBatch(this.recordList));
        return SUCCESS;
    }

    public String deleteRecord() throws Exception {
        this.result.setObject(this.recordManager.delete(this.record));
        return SUCCESS;
    }

    public String listRecord() throws Exception {
        this.result.setList(this.recordManager.list(this.record));
        return SUCCESS;
    }

    public IflatManager getBookManager() {
        return bookManager;
    }

    public void setBookManager(IflatManager bookManager) {
        this.bookManager = bookManager;
    }

    public IflatManager getRecordManager() {
        return recordManager;
    }

    public void setRecordManager(IflatManager recordManager) {
        this.recordManager = recordManager;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Record getRecord() {
        return record;
    }

    public void setRecord(Record record) {
        this.record = record;
    }

    @Override
    public void setResult(Result result) {
        this.result = result;
    }

    public Result getResult() {
        return result;
    }

    public List<Record> getRecordList() {
        return recordList;
    }

    public void setRecordList(List<Record> recordList) {
        this.recordList = recordList;
    }
}