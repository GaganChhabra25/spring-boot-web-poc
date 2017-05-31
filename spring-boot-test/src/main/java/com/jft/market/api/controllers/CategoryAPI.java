package com.jft.market.api.controllers;

import javax.validation.Valid;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.jft.market.api.ws.CategoryWS;

@RequestMapping(value = BaseApi.BASE_PATH + CategoryAPI.CATEGORY)
public interface CategoryAPI {

	String CATEGORY = "v1/category";
	String CATEGORIES = "categories";

	@RequestMapping(value = {"create"},
			method = RequestMethod.POST)
	public ModelAndView createCategory(@Valid @ModelAttribute CategoryWS categoryWS, BindingResult bindingResult);

	@RequestMapping(value = {"{categoryUuid}"},
			method = RequestMethod.GET,
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public ModelAndView readCategory(@PathVariable("categoryUuid") String categoryUuid);

	@RequestMapping(value = {CATEGORIES},
			method = RequestMethod.GET)
	public ModelAndView readCategories();

	@RequestMapping(value = {"update/{categoryUuid}"},
			method = RequestMethod.POST)
	public ModelAndView updateCategory(@ModelAttribute CategoryWS categoryWS,
									   @PathVariable("categoryUuid") String categoryUuid);

	@RequestMapping(value = {"delete/{uuid}"},
			method = RequestMethod.DELETE,
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public
	@ResponseBody
	ResponseEntity deleteCategory(@PathVariable("uuid") String uuid);

	@RequestMapping(value = {"{categoryUuid}/subcategory"},
			method = RequestMethod.POST,
			produces = {MediaType.APPLICATION_JSON_VALUE},
			consumes = {MediaType.APPLICATION_JSON_VALUE})
	public
	@ResponseBody
	ResponseEntity createSubCategory(@Valid @RequestBody CategoryWS categoryWS,
									 BindingResult bindingResult,
									 @PathVariable("categoryUuid") String categoryUuid);

	@RequestMapping(value = {"{categoryUuid}/subcategories"},
			method = RequestMethod.GET,
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public
	@ResponseBody
	ResponseEntity readAllSubCategoriesForParentCategory(@PathVariable("categoryUuid") String parentcategoryUuid);

}
