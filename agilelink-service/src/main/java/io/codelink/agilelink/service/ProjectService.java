package io.codelink.agilelink.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import io.codelink.agilelink.model.Project;
import io.codelink.agilelink.respository.ProjectRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository repository;
	
	public Project loadProject(String id) {
		return repository.findOne(id);
	}
	
	public Project saveProject(Project project) {
		return repository.save(project);
	}
	
	public Page<Project> listProjects(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}
	
	public Iterable<Project> listAll() {
		return repository.findAll();
	}
	
}