package com.iflat.air.action;

import com.iflat.base.action.impl.BaseAction;
import com.iflat.lib.bean.Book;
import com.iflat.lib.bean.Record;
import com.iflat.base.service.BaseService;

import java.util.List;

/**
 * Created by tyriv on 2016/2/1.
 */
public class LibAction extends BaseAction {

    private BaseService bookService;
    private BaseService recordService;
    private Book book;
    private Record record;
    private List<Record> recordList;

    /* book */
    public String saveBook() throws Exception {
        this.result.setObject(this.bookService.save(this.book));
        return SUCCESS;
    }

    public String deleteBook() throws Exception {
        this.result.setObject(this.bookService.delete(this.book));
        return SUCCESS;
    }

    public String listBook() throws Exception {
        this.result.setList(this.bookService.list(this.book));
        return SUCCESS;
    }

    /* record */
    public String saveRecord() throws Exception {
        this.result.setObject(this.recordService.save(this.record));
        return SUCCESS;
    }

    public String insertBatchRecord() throws Exception {
        this.result.setList(this.recordService.insertBatch(this.recordList));
        return SUCCESS;
    }

    public String deleteRecord() throws Exception {
        this.result.setObject(this.recordService.delete(this.record));
        return SUCCESS;
    }

    public String listRecord() throws Exception {
        this.result.setList(this.recordService.list(this.record));
        return SUCCESS;
    }

    public BaseService getBookService() {
        return bookService;
    }

    public void setBookService(BaseService bookService) {
        this.bookService = bookService;
    }

    public BaseService getRecordService() {
        return recordService;
    }

    public void setRecordService(BaseService recordService) {
        this.recordService = recordService;
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

    public List<Record> getRecordList() {
        return recordList;
    }

    public void setRecordList(List<Record> recordList) {
        this.recordList = recordList;
    }
}