package io.codelink.agilelink.web.util;

import org.springframework.data.querydsl.QPageRequest;

@SuppressWarnings("serial")
public class CustomPageRequest extends QPageRequest{	

	public CustomPageRequest() {
		super(1, 10);
	}
	

}
