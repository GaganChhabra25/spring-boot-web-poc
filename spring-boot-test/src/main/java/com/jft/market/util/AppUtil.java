package com.jft.market.util;

import javax.servlet.http.HttpServletRequest;

public class AppUtil {

	public static boolean isAjax(HttpServletRequest request) {
		String requestedWithHeader = request.getHeader("X-Requested-With");
		return "XMLHttpRequest".equals(requestedWithHeader);
	}
}
