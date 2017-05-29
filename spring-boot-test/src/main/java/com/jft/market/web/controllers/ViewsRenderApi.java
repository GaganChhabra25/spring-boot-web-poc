package com.jft.market.web.controllers;


import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping(value = "")
public interface ViewsRenderApi {

	String LOGIN_FAILED = "loginFailed";
	String HOMEPAGE = "homepage";
	String REGISTER = "register";
	String EDIT_USER = "editUser";
	String PRODUCT = "product";
	String CATEGORY = "category";

	@RequestMapping(value = {HOMEPAGE}, method = RequestMethod.GET)
	public String homePage();

	@RequestMapping(value = {LOGIN_FAILED}, method = RequestMethod.GET)
	public ModelAndView loginFailed(ModelMap modelMap);

	@RequestMapping(value = {REGISTER}, method = RequestMethod.GET)
	public String register();

	@RequestMapping(value = {EDIT_USER}, method = RequestMethod.GET)
	public String editUser();

	@RequestMapping(value = {PRODUCT}, method = RequestMethod.GET)
	public String createProduct();

	@RequestMapping(value = {CATEGORY}, method = RequestMethod.GET)
	public String createCategory();

}
