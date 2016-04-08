package io.codelink.agilelink.respository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import io.codelink.agilelink.model.Project;

public interface ProjectRepository extends PagingAndSortingRepository<Project, String> {
	
	@Query("{ archivationDate: { $exists: false } }")
	Page<Project> findAllActive(Pageable pageable);

}
