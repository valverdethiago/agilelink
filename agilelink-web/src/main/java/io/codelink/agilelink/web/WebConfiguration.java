package io.codelink.agilelink.web;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import io.codelink.agilelink.respository.DatabaseConfiguration;
import io.codelink.agilelink.service.ServiceConfiguration;

@EnableAutoConfiguration
@EnableWebMvc
@Import({ServiceConfiguration.class, DatabaseConfiguration.class})
@ComponentScan("io.codelink.agilelink.web")
public class WebConfiguration {

}
