package com.jft.market.api.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.jft.market.api.ApiConstants;
import com.jft.market.api.BeanAttribute;
import com.jft.market.api.ws.CategoryWS;
import com.jft.market.api.ws.EmberResponse;
import com.jft.market.api.ws.SuccessWS;
import com.jft.market.exceptions.ExceptionConstants;
import com.jft.market.service.CategoryService;
import com.jft.market.service.SubCategoryService;
import com.jft.market.util.AppUtil;
import com.jft.market.util.Preconditions;

@RestController
@CrossOrigin
public class CategoryApiImpl implements CategoryAPI {

	@Autowired
	private CategoryService categoryService;

	@Autowired
	private SubCategoryService subCategoryService;

	@Override
	public ModelAndView createCategory(@Valid @ModelAttribute CategoryWS categoryWS, BindingResult bindingResult) {
		if (StringUtils.isEmpty(categoryWS.getName()) || StringUtils.isEmpty(categoryWS.getDescription())) {
			return AppUtil.errorModal(ExceptionConstants.UNABLE_TO_CREATE_CATEGORY);
		}
		String uuid = categoryService.createCategory(categoryWS);
		if (!StringUtils.isEmpty(uuid)) {
			return AppUtil.successModal(ExceptionConstants.CATEGORY_CREATED_SUCCESSFULLY);
		} else {
			return AppUtil.errorModal(ExceptionConstants.UNABLE_TO_CREATE_CATEGORY);
		}
	}

	@Override
	public ModelAndView readCategory(@PathVariable("categoryUuid") String categoryUuid) {
		CategoryWS categoryWS = categoryService.readCategory(categoryUuid);
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("category", categoryWS);
		return modelAndView;
	}

	@Override
	public ModelAndView readCategories() {
		List<CategoryWS> categories = categoryService.readCategoriesWS();
		ModelAndView modelAndView = new ModelAndView("categories");
		modelAndView.addObject("categories", categories);
		return modelAndView;
	}

	@Override
	public ModelAndView updateCategory(@ModelAttribute CategoryWS categoryWS, @PathVariable("categoryUuid") String categoryUuid) {
		Preconditions.check(StringUtils.isEmpty(categoryWS.getName()) || StringUtils.isEmpty(categoryWS.getDescription()), ExceptionConstants.PLEASE_PROVIDE_VALID_CATEGORY_DETAILS);
		categoryService.updateCategory(categoryWS, categoryUuid);
		ModelAndView modelAndView = AppUtil.successModal(ExceptionConstants.CATEGORY_UPDATED_SUCCESSFULLY);
		modelAndView.addObject("success", true);
		return modelAndView;
	}

	@Override
	public ResponseEntity deleteCategory(@PathVariable("uuid") String uuid) {
		categoryService.deleteCategory(uuid);
		BeanAttribute categorytBeanAttribute = new BeanAttribute(uuid, new SuccessWS(ApiConstants.SUCCESS), ApiConstants.CATEGORY);
		return new ResponseEntity(new EmberResponse<>(categorytBeanAttribute), HttpStatus.OK);
	}

	@Override
	public ResponseEntity createSubCategory(@Valid @RequestBody CategoryWS subCategoryWS, BindingResult bindingResult, @PathVariable("categoryUuid") String categoryUuid) {
		String subCategoryUuid = subCategoryService.createSubCategory(subCategoryWS, categoryUuid);
		BeanAttribute subCategorytBeanAttribute = new BeanAttribute(subCategoryUuid, new SuccessWS(ApiConstants.SUCCESS), ApiConstants.CATEGORY);
		return new ResponseEntity(new EmberResponse<>(subCategorytBeanAttribute), HttpStatus.OK);
	}

	@Override
	public ResponseEntity readAllSubCategoriesForParentCategory(@PathVariable("categoryUuid") String parentcategoryUuid) {
		List<CategoryWS> categories = subCategoryService.readAllSubCategoriesForParentCategory(parentcategoryUuid);
		List<BeanAttribute> categoryBeanAttributes = new ArrayList<>();
		categories.forEach(categoryWS -> {
			BeanAttribute categorytBeanAttribute = new BeanAttribute(categoryWS.getUuid(), categoryWS, ApiConstants.CATEGORY);
			categoryBeanAttributes.add(categorytBeanAttribute);
		});
		return new ResponseEntity(new EmberResponse<>(categoryBeanAttributes), HttpStatus.OK);
	}
}
