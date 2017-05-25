package com.jft.market.api.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.validation.Valid;

import lombok.extern.slf4j.Slf4j;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;

import com.jft.market.api.ApiConstants;
import com.jft.market.api.BeanAttribute;
import com.jft.market.api.ws.EmberResponse;
import com.jft.market.api.ws.RoleWS;
import com.jft.market.api.ws.SuccessWS;
import com.jft.market.api.ws.UserWS;
import com.jft.market.exceptions.ExceptionConstants;
import com.jft.market.service.UserService;
import com.jft.market.util.AppUtil;
import com.jft.market.util.Preconditions;

@Slf4j
/*@CrossOrigin*/
@Controller
public class UserApiImpl implements UserApi {

	@Autowired
	private UserService userService;

	@Autowired
	private HttpServletRequest httpServletRequest;

	@Override
	public ModelAndView createUser(@Valid @ModelAttribute UserWS userWS, BindingResult bindingResult) {
		log.info("Validating paylaod");
		if (bindingResult.hasErrors()) {
			ModelAndView modelAndView = new ModelAndView("registration");
			modelAndView.addObject("errors", true);
			return modelAndView;
		}
		log.info("Converting WS to Entity");
		userService.convertWsToEnityAndSave(userWS);
		ModelAndView modelAndView = new ModelAndView("registration");
		modelAndView.addObject("success", true);
		return modelAndView;
	}

	@Override
	public ModelAndView readUser(@PathVariable("userUuid") String userUuid) {
		log.info("Reading user from database");
		UserWS userWS = userService.readUser(userUuid);
		ModelAndView modelAndView = new ModelAndView("edit_user");
		modelAndView.addObject("user", userWS);
		return modelAndView;
	}

	@Override
	public ModelAndView readUsers() {
		log.info("Reading users from database");
		List<UserWS> users = userService.readAllUsers();
		List<BeanAttribute> userBeanAttributes = new ArrayList<>();
		users.forEach(userWS -> {
			BeanAttribute productBeanAttribute = new BeanAttribute(userWS.getUuid(), userWS, ApiConstants.REGISTRATION);
			userBeanAttributes.add(productBeanAttribute);
		});
		if (AppUtil.isAjax(httpServletRequest)) {
			ModelAndView modelAndView = new ModelAndView("users");
			modelAndView.addObject("usersList", users);
			return modelAndView;
		} else {
			ModelAndView modelAndView = new ModelAndView("template/users");
			modelAndView.addObject("usersList", users);
			return modelAndView;
		}
	}

	@Override
	public ModelAndView deleteUser(@PathVariable("userUuid") String userUuid) {
		userService.deleteUser(userUuid);
		ModelAndView modelAndView = new ModelAndView("users");
		modelAndView.addObject("success", true);
		return modelAndView;
	}

	@Override
	public ModelAndView updateUser(@ModelAttribute UserWS userWS, @PathVariable("userUuid") String userUuid) {
		if (userWS == null
				|| StringUtils.isEmpty(userWS.getLname())
				|| StringUtils.isEmpty(userWS.getFname())
				|| userWS.getPhone() == null) {
			ModelAndView modelAndView = new ModelAndView("edit_user");
			modelAndView.addObject("errors", true);
			modelAndView.addObject("user", userWS);
			return modelAndView;
		}
		userService.updateUser(userWS, userUuid);
		ModelAndView modelAndView = new ModelAndView("edit_user");
		modelAndView.addObject("success", true);
		modelAndView.addObject("user", userWS);
		return modelAndView;
	}

	@Override
	public ResponseEntity updateUserRole(@RequestBody RoleWS roleWS, @PathVariable("userUuid") String userUuid) {
		List<String> roles = Arrays.asList(roleWS.getRoles());
		Preconditions.check(roles.isEmpty(), ExceptionConstants.NO_ROLE_TO_SAVE);
		userService.updateUserRoles(userUuid);
		BeanAttribute userBeanAttribute = new BeanAttribute(userUuid, new SuccessWS(ApiConstants.SUCCESS), ApiConstants.REGISTRATION);
		return new ResponseEntity(new EmberResponse<>(userBeanAttribute), HttpStatus.OK);
	}
}
