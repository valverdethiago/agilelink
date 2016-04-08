package io.codelink.agilelink.web;

import org.springframework.boot.SpringApplication;

public class Application {

	public static void main(String[] args) {
		
		SpringApplication.run(WebConfiguration.class, args).getEnvironment().setActiveProfiles("test");
	}

}
