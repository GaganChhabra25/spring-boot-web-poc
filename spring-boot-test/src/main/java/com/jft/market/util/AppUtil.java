package com.jft.market.util;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.servlet.ModelAndView;

public class AppUtil {

	public static boolean isAjax(HttpServletRequest request) {
		String requestedWithHeader = request.getHeader("X-Requested-With");
		return "XMLHttpRequest".equals(requestedWithHeader);
	}

	public static ModelAndView successModal(String message) {
		ModelAndView modelAndView = new ModelAndView("template/success");
		modelAndView.addObject("message", message);
		return modelAndView;
	}

	public static ModelAndView errorModal(String message) {
		ModelAndView modelAndView = new ModelAndView("template/error");
		modelAndView.addObject("message", message);
		return modelAndView;
	}

	public static ModelAndView infoModal(String message) {
		ModelAndView modelAndView = new ModelAndView("template/error");
		modelAndView.addObject("message", message);
		return modelAndView;
	}
}
