package io.codelink.agilelink.web;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.codelink.agilelink.model.Project;
import io.codelink.agilelink.service.ProjectService;
import io.codelink.agilelink.web.util.CustomPageRequest;

@RestController
@RequestMapping("/project")
public class ProjectController {

	@Autowired
	private ProjectService service;

	@RequestMapping(value = "/load/{id}", method = GET)
	public Project loadProject(@PathVariable("id") String id) {
		return service.loadProject(id);
	}

	@RequestMapping(value = "/save", method = POST, consumes = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
	public Project save(@RequestBody Project project) {
		return service.saveProject(project);
	}

	@RequestMapping(value = "/find", method = POST, consumes = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
	public Page<Project> find(@RequestBody CustomPageRequest pageable) {
		Page<Project> page = service.listProjects(pageable);
		return page;
	}

	@RequestMapping(value = "/list", method = GET)
	public Iterable<Project> list() {
		return service.listAll();
	}

}
