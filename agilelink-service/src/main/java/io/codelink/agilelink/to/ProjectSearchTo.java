package io.codelink.agilelink.to;

import io.codelink.agilelink.util.CustomPageRequest;

@SuppressWarnings("serial")
public class ProjectSearchTo extends CustomPageRequest{
	
	private boolean onlyActives;
	private String searchTerm;
	
	public boolean isOnlyActives() {
		return onlyActives;
	}
	public void setOnlyActives(boolean onlyActives) {
		this.onlyActives = onlyActives;
	}
	public String getSearchTerm() {
		return searchTerm;
	}
	public void setSearchTerm(String searchTerm) {
		this.searchTerm = searchTerm;
	}

}
