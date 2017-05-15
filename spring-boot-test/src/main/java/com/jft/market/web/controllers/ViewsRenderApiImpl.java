package com.jft.market.web.controllers;

import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@Controller
public class ViewsRenderApiImpl implements ViewsRenderApi {

	String LOGIN = "login/";

	@Override
	public ModelAndView loginFailed(ModelMap model) {
		model.addAttribute("error", true);
		return new ModelAndView(LOGIN + "login");
	}

	@Override
	public String register() {
		System.out.println("nnnnnnnnnnnnn");
		return "registration";
	}

	@Override
	/*@PreAuthorize("hasRole('ROLE_USER')")*/
	public String homePage() {
		return "homepage";
	}
}
