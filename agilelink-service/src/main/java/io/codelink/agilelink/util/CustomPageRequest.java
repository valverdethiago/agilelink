package io.codelink.agilelink.util;

import java.io.Serializable;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

@SuppressWarnings("serial")
public class CustomPageRequest implements Pageable, Serializable {
	
	private int pageNumber;
	private int pageSize;
	private int offset;
	private Sort sort;
	
	public int getPageNumber() {
		return pageNumber;
	}
	public void setPageNumber(int pageNumber) {
		this.pageNumber = pageNumber;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getOffset() {
		return offset;
	}
	public void setOffset(int offset) {
		this.offset = offset;
	}
	public Sort getSort() {
		return sort;
	}
	public void setSort(Sort sort) {
		this.sort = sort;
	}
	@Override
	public Pageable next() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Pageable previousOrFirst() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Pageable first() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean hasPrevious() {
		// TODO Auto-generated method stub
		return false;
	}
	

	

}
