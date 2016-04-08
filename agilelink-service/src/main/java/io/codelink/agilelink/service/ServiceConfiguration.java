package io.codelink.agilelink.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoClientFactoryBean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories("io.codelink.agilelink")
@ComponentScan("io.codelink.agilelink.service")
public class ServiceConfiguration {

//	@Bean(name = "mongoTemplate")
//	// temp
//	public MongoTemplate mongoTemplate() {
//		return new MongoTemplate(new Fongo("agilelink").getMongo(), "agilelink");
//	}

	/*
	 * Factory bean that creates the com.mongodb.Mongo instance
	 */
	public @Bean MongoClientFactoryBean mongo() {
		MongoClientFactoryBean mongo = new MongoClientFactoryBean();
		mongo.setHost("localhost");
		return mongo;
	}

}
