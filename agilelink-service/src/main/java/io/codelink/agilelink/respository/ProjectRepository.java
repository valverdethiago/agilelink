package io.codelink.agilelink.respository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import io.codelink.agilelink.model.Project;

public interface ProjectRepository extends PagingAndSortingRepository<Project, String> {

	@Query("{ archivationDate: { $exists: false } } ")
	Page<Project> searchAllActive(Pageable pageable);

	@Query("{ $and : [ "
			+ "        { archivationDate: { $exists: false } }, "
			+ "        { $or: [ { title : '/:searchTerm/' }, "
			+ "                 { summary : '/:searchTerm/' },"
			+ "                 { description : '/:searchTerm/' }"
			+ "               ] } "
			+ " ] }")
	Page<Project> searchAllActive(@Param("searchTerm") String searchTerm, Pageable pageable);

	@Query(" { } ")
	Page<Project> searchAll(Pageable pageable);

	@Query(" { $or: [ { title : '/:searchTerm/' }, "
			+ "        { summary : '/:searchTerm/' },"
			+ "        { description : '/:searchTerm/' }"
			+ "     ] } ")
	Page<Project> searchAll(@Param("searchTerm") String searchTerm, Pageable pageable);

}
