package io.codelink.agilelink.test.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import io.codelink.agilelink.respository.DatabaseConfiguration;
import io.codelink.agilelink.service.ProjectService;
import io.codelink.agilelink.service.ServiceConfiguration;
import io.codelink.agilelink.to.ProjectSearchTo;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes={ServiceConfiguration.class, DatabaseConfiguration.class})
public class ProjectServiceTest {
	
	@Autowired
	private ProjectService projectService;
	
	@Test
	public void testInitialSearch() {
		ProjectSearchTo searchTo = new ProjectSearchTo();
		searchTo.setOffset(0);
		searchTo.setOnlyActives(true);
		searchTo.setPageNumber(1);
		searchTo.setSearchTerm(null);
		searchTo.setSort(null);
		this.projectService.search(searchTo);
	}

}
