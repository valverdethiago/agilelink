package io.codelink.agilelink.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import io.codelink.agilelink.model.Project;
import io.codelink.agilelink.respository.ProjectRepository;
import io.codelink.agilelink.to.ProjectSearchTo;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository repository;
	
	@Autowired
	private MongoTemplate mongoTemplate;

	public Project load(String id) {
		return this.getRepository().findOne(id);
	}
	
	public Project save(Project project) {
		return this.getRepository().save(project);
	}
	
	public Page<Project> list(ProjectSearchTo searchTo) {
//		Query query = this.buildQuery(searchTo);
//		return this.getMongoTemplate().find(query, Project.class);
//		if(searchTo.isOnlyActives()) {
//			if(StringUtils.isEmpty(searchTo.getSearchTerm())) {
//				return this.getRepository().searchAllActive(searchTo);
//			}
//			return this.getRepository().searchAllActive(searchTo.getSearchTerm(), searchTo);
//		}
//		if(StringUtils.isEmpty(searchTo.getSearchTerm())) {
//			return this.getRepository().searchAll(searchTo);
//		}
//		return this.getRepository().searchAll(searchTo.getSearchTerm(), searchTo);
		return null;
	}

	public Iterable<Project> listAll() {
		return this.getRepository().findAll();
	}

	public Project archive(Project project) {
		if(project == null || project.getArchivationDate() != null) {
			return project;
		}
		project.setArchivationDate(new Date());
		return this.save(project);
	}
	
	protected ProjectRepository getRepository() {
		return repository;
	}

	protected MongoTemplate getMongoTemplate() {
		return mongoTemplate;
	}

	public Project activate(Project project) {
		if(project == null || project.getArchivationDate() == null) {
			return project;
		}
		project.setArchivationDate(null);
		return this.save(project);
	}
	
}