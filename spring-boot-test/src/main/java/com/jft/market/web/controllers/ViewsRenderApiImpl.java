package com.jft.market.web.controllers;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;

import com.jft.market.api.controllers.CategoryAPI;

@Slf4j
@Controller
public class ViewsRenderApiImpl implements ViewsRenderApi {

	String LOGIN = "login/";

	@Autowired
	private CategoryAPI categoryAPI;

	@Override
	public ModelAndView loginFailed(ModelMap model) {
		model.addAttribute("error", true);
		return new ModelAndView(LOGIN + "login");
	}

	@Override
	public String register() {
		return "registration";
	}

	@Override
	public String editUser() {
		return "edit_user";
	}

	@Override
	public String createProduct() {
		return "product";
	}

	@Override
	public String createCategory() {
		return "category";
	}

	@Override
	public ModelAndView createSubCategory() {
		return categoryAPI.readCategories();
	}

	@Override
	public ModelAndView editCategory(@PathVariable("uuid") String uuid) {
		ModelAndView modelAndView = categoryAPI.readCategory(uuid);
		modelAndView.setViewName("editcategory");
		return modelAndView;
	}

	@Override
	public ModelAndView viewCategories() {
		ModelAndView modelAndView = categoryAPI.readCategories();
		modelAndView.setViewName("categories");
		return modelAndView;
	}

	@Override
	/*@PreAuthorize("hasRole('ROLE_USER')")*/
	public String homePage() {
		return "homepage";
	}
}
