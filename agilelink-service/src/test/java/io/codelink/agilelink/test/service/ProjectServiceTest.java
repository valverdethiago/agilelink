package io.codelink.agilelink.test.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import io.codelink.agilelink.respository.DatabaseConfiguration;
import io.codelink.agilelink.service.ServiceConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes={ServiceConfiguration.class, DatabaseConfiguration.class})
public class ProjectServiceTest {
	
	@Test
	public void testSearch() {
		System.out.println("Foi");
	}

}
