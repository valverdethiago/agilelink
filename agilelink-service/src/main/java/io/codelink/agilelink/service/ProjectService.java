package io.codelink.agilelink.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
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
	
	public Page<Project> search(ProjectSearchTo searchTo) {
		if(searchTo == null) {
			return null;
		}		
		if(searchTo.getSearchTerm() == null) {
			// TODO [valverde.thiago] Retirar essa camanga daqui. Query da pau com termos nulos
			searchTo.setSearchTerm("");
		}
		if(searchTo.getSort() == null) {
			searchTo.setSort(new Sort(new Order(Direction.ASC, "title")));
		}
		return this.getRepository().search(searchTo.getSearchTerm(), searchTo.isOnlyActives(), searchTo);
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

	public Project activate(Project project) {
		if(project == null || project.getArchivationDate() == null) {
			return project;
		}
		project.setArchivationDate(null);
		return this.save(project);
	}
	
	protected ProjectRepository getRepository() {
		return repository;
	}

	protected MongoTemplate getMongoTemplate() {
		return mongoTemplate;
	}
	
}