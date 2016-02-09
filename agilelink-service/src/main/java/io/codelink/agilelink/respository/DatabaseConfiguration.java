package io.codelink.agilelink.respository;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;

@Configuration
@EnableMongoRepositories(basePackages="io.codelink.agilelink")
public class DatabaseConfiguration extends AbstractMongoConfiguration{

	@Override
	protected String getDatabaseName() {
		return "agile_link";
	}

	@Override
	public Mongo mongo() throws Exception {
		return new MongoClient("localhost");
	}


}
