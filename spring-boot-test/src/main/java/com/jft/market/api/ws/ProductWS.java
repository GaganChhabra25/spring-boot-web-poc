package com.jft.market.api.ws;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@XmlRootElement(name = "product")
@XmlAccessorType(XmlAccessType.FIELD)
public class ProductWS {

	@NotNull
	private String name;
	@NotNull
	private Long price;
	private String description;
	private String features;
	private String uuid;
	@NotNull
	private List<CategoryWS> categories = new ArrayList<>();
}
