package io.codelink.agilelink.respository;

import org.springframework.data.repository.PagingAndSortingRepository;

import io.codelink.agilelink.model.Project;

public interface ProjectRepository extends PagingAndSortingRepository<Project, String> {

}
