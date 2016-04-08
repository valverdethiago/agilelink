package io.codelink.agilelink.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="projects")
public class Project extends BasicEntity{

    private String title;
    private String summary;
    private String description;
    private Date archivationDate;
    
	public Date getArchivationDate() {
		return archivationDate;
	}
	public void setArchivationDate(Date archivationDate) {
		this.archivationDate = archivationDate;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}


}
