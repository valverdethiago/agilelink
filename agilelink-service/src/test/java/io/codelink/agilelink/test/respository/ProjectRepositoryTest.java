package io.codelink.agilelink.test.respository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import io.codelink.agilelink.model.Project;
import io.codelink.agilelink.respository.DatabaseConfiguration;
import io.codelink.agilelink.respository.ProjectRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes={DatabaseConfiguration.class})
public class ProjectRepositoryTest {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	@Test
	public void test() {
		Iterable<Project> projects = this.projectRepository.findAll();
		for(Project project : projects) {
			System.out.println(project.getTitle());
		}
	}

}
