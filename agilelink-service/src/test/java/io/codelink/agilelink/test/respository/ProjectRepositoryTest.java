package io.codelink.agilelink.test.respository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import io.codelink.agilelink.model.Project;
import io.codelink.agilelink.respository.DatabaseConfiguration;
import io.codelink.agilelink.respository.ProjectRepository;
import io.codelink.agilelink.to.ProjectSearchTo;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes={DatabaseConfiguration.class})
public class ProjectRepositoryTest {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	@Test
	public void test() {
		ProjectSearchTo to = new ProjectSearchTo();
		to.setOnlyActives(false);
		to.setOffset(0);
		to.setPageSize(2);
		to.setPageNumber(1);
		to.setSearchTerm("Desc");
		Page<Project> page = this.projectRepository.search(to.getSearchTerm(), to.isOnlyActives(), to);
		System.out.println(page.getTotalElements()+" encontrados");
		System.out.println(page.getTotalPages()+" páginas");
		for(Project project : page.getContent()) {
			System.out.println(project.getTitle());
		}
	}

}
