"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('jft-sale/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
        namespace: "/api/v1",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        host: 'http://127.0.0.1:9191/market'
    });
});
define('jft-sale/adapters/category', ['exports', 'jft-sale/adapters/application'], function (exports, _jftSaleAdaptersApplication) {
  exports['default'] = _jftSaleAdaptersApplication['default'].extend({
    urlForFindRecord: function urlForFindRecord(id, modelName, snapshot) {
      console.log("Reading Category by.......", id);
      return this.get('host') + this.get('namespace') + '/category/' + id;
    },
    urlForDeleteRecord: function urlForDeleteRecord(id, modelName, snapshot) {
      console.log("Deleting Category by.......", id);
      return this.get('host') + this.get('namespace') + '/category/delete/' + id;
    },
    urlForCreateRecord: function urlForCreateRecord(modelName, snapshot) {
      return this.get('host') + this.get('namespace') + '/category/create';
    },

    urlForFindAll: function urlForFindAll(modelName, snapshot) {
      console.log("Reading all Categories.......");
      return this.get('host') + this.get('namespace') + '/category/categories';
    }
  });
});
define('jft-sale/adapters/categorylist', ['exports', 'jft-sale/adapters/application'], function (exports, _jftSaleAdaptersApplication) {
  exports['default'] = _jftSaleAdaptersApplication['default'].extend({
    urlForFindAll: function urlForFindAll(modelName, snapshot) {

      return this.get('host') + this.get('namespace') + '/category/categories';
    },

    urlForFindRecord: function urlForFindRecord(id, modelName, snapshot) {
      console.log("Reading Category by.......", id);
      return this.get('host') + this.get('namespace') + '/category/' + id;
    },
    urlForDeleteRecord: function urlForDeleteRecord(id, modelName, snapshot) {
      console.log("Deleting Category by.......", id);
      return this.get('host') + this.get('namespace') + 'category/delete/' + id;
    }
  });
});
define('jft-sale/adapters/product', ['exports', 'jft-sale/adapters/application'], function (exports, _jftSaleAdaptersApplication) {
  exports['default'] = _jftSaleAdaptersApplication['default'].extend({

    urlForFindRecord: function urlForFindRecord(id, modelName, snapshot) {
      console.log("In urlForFindRecord of product model...." + id);
      return this.get('host') + this.get('namespace') + '/product/' + id;
    },

    urlForUpdateRecord: function urlForUpdateRecord(id, modelName, snapshot) {
      console.log('.....urlForUpdateRecord.....product model', id);

      return this.get('host') + this.get('namespace') + '/product/update/' + id;
    },
    urlForCreateRecord: function urlForCreateRecord(modelName, snapshot) {
      return this.get('host') + this.get('namespace') + '/product/create';
    }
  });
});
define('jft-sale/adapters/productlist', ['exports', 'jft-sale/adapters/application'], function (exports, _jftSaleAdaptersApplication) {
    exports['default'] = _jftSaleAdaptersApplication['default'].extend({
        urlForFindAll: function urlForFindAll(modelName, snapshot) {
            return this.get('host') + this.get('namespace') + '/product/products';
        },
        urlForDeleteRecord: function urlForDeleteRecord(id, modelName, snapshot) {
            return this.get('host') + this.get('namespace') + '/product/delete/' + id;
        },
        urlForUpdateRecord: function urlForUpdateRecord(id, modelName, snapshot) {
            return this.get('host') + this.get('namespace') + '/product/update/' + id;
        },
        urlForFindRecord: function urlForFindRecord(id, modelName, snapshot) {
            return this.get('host') + this.get('namespace') + '/product/' + id;
        }
    });
});
define('jft-sale/adapters/registration', ['exports', 'jft-sale/adapters/application'], function (exports, _jftSaleAdaptersApplication) {
  exports['default'] = _jftSaleAdaptersApplication['default'].extend({
    urlForCreateRecord: function urlForCreateRecord(modelName, snapshot) {
      console.log('Checking....', Ember.getOwner(this).lookup("controller:application").isAdmin);

      if (Ember.getOwner(this).lookup("controller:application").isAdmin) {
        return this.get('host') + this.get('namespace') + '/user/create';
      } else {
        return this.get('host') + this.get('namespace') + '/customer/create';
      }
    },

    urlForFindRecord: function urlForFindRecord(id, modelName, snapshot) {
      console.log('Reading a user by..............', id);
      return this.get('host') + this.get('namespace') + '/user/' + id;
    },

    urlForDeleteRecord: function urlForDeleteRecord(id, modelName, snapshot) {
      console.log('deleting user by..............', id);
      return this.get('host') + this.get('namespace') + '/user/delete/' + id;
    },
    urlForFindAll: function urlForFindAll(modelName, snapshot) {
      console.log('Reading All Users ..............');
      return this.get('host') + this.get('namespace') + '/user/users  ';
    }
  });
});
define('jft-sale/app', ['exports', 'ember', 'jft-sale/resolver', 'ember-load-initializers', 'jft-sale/config/environment'], function (exports, _ember, _jftSaleResolver, _emberLoadInitializers, _jftSaleConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _jftSaleConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _jftSaleConfigEnvironment['default'].podModulePrefix,
    Resolver: _jftSaleResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _jftSaleConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('jft-sale/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('jft-sale/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('jft-sale/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('jft-sale/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroup['default'];
    }
  });
});
define('jft-sale/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _emberBootstrapComponentsBsButtonGroupButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroupButton['default'];
    }
  });
});
define('jft-sale/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButton['default'];
    }
  });
});
define('jft-sale/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('jft-sale/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('jft-sale/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('jft-sale/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('jft-sale/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _emberBootstrapComponentsBsDropdownMenuDivider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuDivider['default'];
    }
  });
});
define('jft-sale/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _emberBootstrapComponentsBsDropdownMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuItem['default'];
    }
  });
});
define('jft-sale/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('jft-sale/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('jft-sale/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _emberBootstrapComponentsBsFormElementControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControl['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementControlCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlCheckbox['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _emberBootstrapComponentsBsFormElementControlInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlInput['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _emberBootstrapComponentsBsFormElementControlTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlTextarea['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _emberBootstrapComponentsBsFormElementErrors) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementErrors['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _emberBootstrapComponentsBsFormElementFeedbackIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementFeedbackIcon['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _emberBootstrapComponentsBsFormElementLabel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLabel['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontal['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInline['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVertical) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVertical['default'];
    }
  });
});
define('jft-sale/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox['default'];
    }
  });
});
define('jft-sale/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('jft-sale/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _emberBootstrapComponentsBsModalSimple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalSimple['default'];
    }
  });
});
define('jft-sale/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('jft-sale/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('jft-sale/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('jft-sale/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('jft-sale/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('jft-sale/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _emberBootstrapComponentsBsModalHeaderClose) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderClose['default'];
    }
  });
});
define('jft-sale/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _emberBootstrapComponentsBsModalHeaderTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderTitle['default'];
    }
  });
});
define('jft-sale/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('jft-sale/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('jft-sale/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _emberBootstrapComponentsBsNavLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavLinkTo['default'];
    }
  });
});
define('jft-sale/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('jft-sale/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('jft-sale/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('jft-sale/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('jft-sale/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _emberBootstrapComponentsBsPopover) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopover['default'];
    }
  });
});
define('jft-sale/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _emberBootstrapComponentsBsPopoverElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopoverElement['default'];
    }
  });
});
define('jft-sale/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('jft-sale/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('jft-sale/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('jft-sale/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('jft-sale/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _emberBootstrapComponentsBsTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltip['default'];
    }
  });
});
define('jft-sale/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _emberBootstrapComponentsBsTooltipElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltipElement['default'];
    }
  });
});
define('jft-sale/components/ember-image-slider', ['exports', 'ember-image-slider/components/ember-image-slider'], function (exports, _emberImageSliderComponentsEmberImageSlider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberImageSliderComponentsEmberImageSlider['default'];
    }
  });
});
define('jft-sale/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('jft-sale/components/multi-select', ['exports', 'ember', 'ember-cli-multiselect/components/multi-select'], function (exports, _ember, _emberCliMultiselectComponentsMultiSelect) {
  exports['default'] = _emberCliMultiselectComponentsMultiSelect['default'];
});
define('jft-sale/components/slider-item', ['exports', 'ember-image-slider/components/slider-item'], function (exports, _emberImageSliderComponentsSliderItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberImageSliderComponentsSliderItem['default'];
    }
  });
});
define('jft-sale/components/sweet-alert', ['exports', 'ember-sweetalert/components/sweet-alert'], function (exports, _emberSweetalertComponentsSweetAlert) {
  exports['default'] = _emberSweetalertComponentsSweetAlert['default'];
});
define('jft-sale/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('jft-sale/constant', ['exports'], function (exports) {
  exports['default'] = {
    CONTEXT_PATH: '/market',
    Constant2: 'cupcakes',
    resourceURI: 'resources/assets/',
    appendContextPath: function appendContextPath(path) {
      return this.CONTEXT_PATH + path;
    }
  };
});
define('jft-sale/controllers/addcategory', ['exports', 'ember', 'ember-sweetalert'], function (exports, _ember, _emberSweetalert) {
    exports['default'] = _ember['default'].Controller.extend({
        actions: {
            deleteCategory: function deleteCategory(catId) {
                console.log("Deleting Category...", catId);
                var self = this;
                this.get('store').findRecord('category', catId, { reload: true }).then(function (category) {
                    category.destroyRecord();
                    _ember['default'].set(self.get('model'), 'post.description', '');
                    _ember['default'].set(self.get('model'), 'post.name', '');
                    (0, _emberSweetalert['default'])("Category Deleted Successfully", "", "success");
                    self.transitionToRoute('addcategory');
                });
            },
            addCategory: function addCategory(model) {
                var _this = this;

                console.log('we are here1');
                var msg = [],
                    validationFlag = false;
                if (model.name == '' || model.name == null) {
                    msg.push("Name field can not be Empty.");
                    validationFlag = true;
                }
                if (model.description == '' || model.description == null) {
                    msg.push("Description field can not be Empty.");
                    validationFlag = true;
                }
                if (validationFlag) {
                    _ember['default'].set(model, 'msg', msg);
                    this.transitionToRoute('addcategory');
                } else {
                    (function () {
                        var self = _this;
                        _this.get('store').createRecord('category', model).save().then(function (res) {
                            _ember['default'].set(self.get('model'), 'post.description', '');
                            _ember['default'].set(self.get('model'), 'post.name', '');
                        })['catch'](function (err) {
                            console.log("error in addCategory action", err);
                            self.transitionToRoute('addcategory');
                        });
                    })();
                }
            }
        }
    });
});
define('jft-sale/controllers/addproduct', ['exports', 'ember', 'jft-sale/models/category'], function (exports, _ember, _jftSaleModelsCategory) {
    exports['default'] = _ember['default'].Controller.extend({

        store1: _ember['default'].inject.service(),
        actions: {
            chooseCategory: function chooseCategory(data) {
                console.log(data);
                this.get('model').category.pushObject({ "name": data });
                console.log(this.get('model').category, "cacaxac");
            },
            addProduct: function addProduct(model) {
                var _this = this;

                var msg = [],
                    validationFlag = false;
                if (model.name == '' || model.name == null) {
                    msg.push("Name field can not be Empty.");
                    validationFlag = true;
                }
                if (model.price == '' || model.price == null) {
                    msg.push("Price field can not be Empty.");
                    validationFlag = true;
                }
                if (model.description == '' || model.description == null) {
                    msg.push("Description field can not be Empty.");
                    validationFlag = true;
                }
                if (validationFlag) {
                    _ember['default'].set(model, 'msg', msg);
                    this.transitionToRoute('addProduct');
                } else {
                    (function () {
                        console.log("category", model.category);
                        var products = _this.get('store1');
                        console.log(model, 'lololo');
                        var jsondata = {
                            "name": model.name + "",
                            "price": model.price,
                            "description": model.description + "",
                            "features": "64Gb",
                            "categories": model.category
                        };
                        // $.ajax({
                        //     headers: {
                        //      'Accept': 'application/json',
                        //      'Content-Type': 'application/json'
                        //  },
                        //  type: 'GET',
                        //      url: `http://localhost:9191/market/api/v1/product/products`,
                        //     dataType: 'json',
                        //     data: JSON.stringify(jsondata),
                        //     success: function(res){
                        //         console.log("iiiiiiiiiii",res);
                        //     },
                        //     error: function(err){
                        //         console.log("ooooooooooo",err);
                        //     }
                        // })
                        var self = _this;
                        _this.get('store').createRecord('product', jsondata).save().then(function (res) {
                            self.transitionToRoute('productlist');
                        })['catch'](function (err) {
                            console.log('we are in Error');
                            self.transitionToRoute('productlist');
                        });
                    })();
                }
            }
        }
    });
});
define('jft-sale/controllers/admin', ['exports', 'ember', 'jft-sale/constant'], function (exports, _ember, _jftSaleConstant) {
    exports['default'] = _ember['default'].Controller.extend({
        Constant: _jftSaleConstant['default']
    });
});
define('jft-sale/controllers/application', ['exports', 'ember', 'jft-sale/constant', 'ember-sweetalert'], function (exports, _ember, _jftSaleConstant, _emberSweetalert) {
  exports['default'] = _ember['default'].Controller.extend({

    isAdmin: false,

    isUser: true,

    isLogin: false,

    Constant: _jftSaleConstant['default'],

    cart: localStorage.getItem('cart') || 0,

    actions: {
      signOutAction: function signOutAction(param) {
        this.set('isLogin', false);
        this.set('isAdmin', false);
        this.set('isUser', true);
        (0, _emberSweetalert['default'])("You have log-out successfully", "", "success");
        this.transitionToRoute('home');
      }
    }

  });
});
define('jft-sale/controllers/carts', ['exports', 'ember', 'ember-sweetalert'], function (exports, _ember, _emberSweetalert) {
    exports['default'] = _ember['default'].Controller.extend({

        store1: _ember['default'].inject.service(),
        application: _ember['default'].inject.controller(),

        actions: {
            buyNowFromCart: function buyNowFromCart(data) {
                console.info(data.length);
                if (data.length) {
                    //Ember.set(this.get('store1'), 'orderProd', data);
                    localStorage.setItem('orderProd', JSON.stringify(data));
                    this.transitionToRoute('shippingaddress');
                } else {
                    (0, _emberSweetalert['default'])("There is no item in your cart", "We can not go with purchase flow", "error");
                }
            },

            incermentQuantity: function incermentQuantity(data) {
                console.log("we are in incermentQuantity action", data);
                var qnt = data.itemQantity;
                var totalPrice = data.totalPrice;
                _ember['default'].set(data, 'itemQantity', qnt + 1);
                _ember['default'].set(data, 'totalPrice', data.attributes.price * (qnt + 1));
                return data;
            },

            removeItemFromCart: function removeItemFromCart(item) {
                console.log(" In remove Item from cart action..", item);
                var cartItems = JSON.parse(localStorage.getItem('cartItems'));
                cartItems.popObject(item);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                _ember['default'].set(this.get('model'), 'cartItems', JSON.parse(localStorage.getItem('cartItems')));
                var newCartVal = Number(localStorage.getItem('cart')) - 1;
                localStorage.setItem('cart', newCartVal);
                _ember['default'].set(this.get('application'), 'cart', newCartVal);
            },
            decrementQuantity: function decrementQuantity(data) {
                console.log("we are in decrementQuantity action", data);
                var qnt = data.itemQantity;
                var totalPrice = data.totalPrice;
                _ember['default'].set(data, 'itemQantity', qnt - 1);
                _ember['default'].set(data, 'totalPrice', data.attributes.price * (qnt - 1));
                return data;
            }
        }
    });
});
define('jft-sale/controllers/editcategory', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({

        store1: _ember['default'].inject.service(),

        actions: {
            deleteCategory: function deleteCategory(data) {
                console.log("edit....", data);
                _ember['default'].get(this.get('store1'), 'categories').pop(data);
                this.transitionToRoute('addcategory');
            }
        }
    });
});
define('jft-sale/controllers/editproduct', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({

        store1: _ember['default'].inject.service(),

        actions: {
            chooseCategory: function chooseCategory(data) {
                _ember['default'].set(this.get('model'), 'category', data);
            },
            editProduct: function editProduct(model) {
                console.log('c', model);
                var post = this.get(model.id);
                this.get('store').findRecord('productlist', model.id).then(function (productResponse) {
                    productResponse.set('name', model.get("name"));
                    productResponse.set('description', model.get("description"));
                    productResponse.set('price', model.get("price"));
                    productResponse.save();
                });
                this.transitionToRoute('productlist');
            }
        }
    });
});
define('jft-sale/controllers/home-page', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({});
});
define('jft-sale/controllers/home', ['exports', 'ember', 'ember-sweetalert'], function (exports, _ember, _emberSweetalert) {
    exports['default'] = _ember['default'].Controller.extend({

        store1: _ember['default'].inject.service(),

        application: _ember['default'].inject.controller(),

        actions: {
            getProdByCat: function getProdByCat(data) {
                var self = this;
                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    type: 'GET',
                    url: 'http://localhost:9191/market/api/v1/product/category/' + data,
                    dataType: 'json'
                }).done(function (res) {

                    console.log('res', res);
                    if (res.data.length == 0) {
                        (0, _emberSweetalert['default'])("No Products in slected category", "", "error");
                    }
                    _ember['default'].set(self.get('model'), 'catVal', res.data);
                }).fail(function (err) {
                    console.log('err', err);
                });
            },

            buyNowAction: function buyNowAction(data) {
                var orders = [];
                orders.pushObject(data);
                localStorage.setItem('orderProd', JSON.stringify(orders));
                this.transitionToRoute('shippingaddress');
            },

            addToCart: function addToCart(param) {
                console.log(param);
                param.itemQantity = 1;
                param.totalPrice = param.attributes.price;
                var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                cartItems.pushObject(param);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                // Setting number of items to purchase initially
                var newCartVal = undefined;
                console.log(localStorage.getItem('cart'));
                if (localStorage.getItem('cart')) {
                    newCartVal = 1 + Number(localStorage.getItem('cart'));
                } else {
                    localStorage.setItem('cart', 0);
                    newCartVal = 1 + Number(localStorage.getItem('cart'));
                }
                localStorage.setItem('cart', newCartVal);
                _ember['default'].set(this.get('application'), 'cart', newCartVal);
            },
            pickImage: function pickImage(data) {
                console.info(data);
            }
        }
    });
});
define('jft-sale/controllers/login', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        application: _ember['default'].inject.controller(),

        invalidUser: false,

        actions: {
            userLogin: function userLogin(formData) {
                console.log(formData);
                if (formData.email == 'admin' && formData.password == 'admin') {
                    _ember['default'].set(this.get('application'), 'isLogin', true);
                    localStorage.setItem("isAdmin", true);
                    localStorage.setItem("isUser", false);
                    _ember['default'].set(this.get('application'), 'isAdmin', true);
                    _ember['default'].set(this.get('application'), 'isUser', false);
                    this.transitionToRoute('admin');
                } else if (formData.email == 'raj' && formData.password == 'raj') {
                    _ember['default'].set(this.get('application'), 'isLogin', true);
                    _ember['default'].set(this.get('application'), 'isAdmin', false);
                    _ember['default'].set(this.get('application'), 'isUser', true);
                    this.transitionToRoute('home');
                } else {
                    this.set('invalidUser', true);
                    this.transitionToRoute('login');
                }
            }
        }
    });
});
define('jft-sale/controllers/managerole', ['exports', 'ember', 'ember-sweetalert'], function (exports, _ember, _emberSweetalert) {
    exports['default'] = _ember['default'].Controller.extend({
        actions: {
            deleteUser: function deleteUser(userId) {
                console.log(userId, '.......deleting User');
                var self = this;
                this.get('store').findRecord('registration', userId, { reload: true }).then(function (user) {
                    user.destroyRecord();
                    (0, _emberSweetalert['default'])("User Deleted Successfully", "", "success");
                });
            }
        }
    });
});
define('jft-sale/controllers/productlist', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        actions: {
            deleteProduct: function deleteProduct(prodId) {
                console.log("prodId..", prodId);
                var self = this;
                this.get('store').findRecord('productlist', prodId, { reload: true }).then(function (product) {
                    product.destroyRecord(); // => DELETE to /posts/
                });
            }
        }
    });
});
define('jft-sale/controllers/registration', ['exports', 'ember', 'ember-sweetalert'], function (exports, _ember, _emberSweetalert) {
    exports['default'] = _ember['default'].Controller.extend({
        application: _ember['default'].inject.controller(),
        actions: {
            selectGender: function selectGender(val) {
                console.log("---------->>>>>", _ember['default'].get(this.get('application'), 'cart'));
            },
            registerUser: function registerUser(model) {
                var _this = this;

                var msg = [],
                    validationFlag = false;
                if (model.fname == '' || model.fname == null) {
                    msg.push("First Name can not be Empty.");
                    validationFlag = true;
                }
                if (model.lname == '' || model.lname == null) {
                    msg.push("Last Name can not be Empty.");
                    validationFlag = true;
                }
                if (model.email == '' || model.email == null) {
                    msg.push("Email field can not be Empty.");
                    validationFlag = true;
                }
                if (model.password == '' || model.password == null) {
                    msg.push("Password field can not be Empty.");
                    validationFlag = true;
                }
                if (model.password != model.confirmPassword) {
                    _ember['default'].set(model, 'password', '');
                    _ember['default'].set(model, 'confirmPassword', '');
                    msg.push("Password did not matched. Please try again.");
                }
                if (model.phone == '' || model.phone == null) {
                    msg.push("Phone No field can not be Empty.");
                    validationFlag = true;
                }
                if (validationFlag) {
                    _ember['default'].set(model, 'msg', msg);
                    this.transitionToRoute('registration');
                } else {
                    (function () {
                        console.log(model);
                        var jsondata = {
                            "fname": model.fname,
                            "lname": model.lname,
                            "email": model.email,
                            "password": model.password,
                            "phone": model.phone,
                            "gender": "m"
                        };
                        var self = _this;
                        _this.get('store').createRecord('registration', jsondata).save().then(function (res) {
                            _ember['default'].set(model, 'isRegister', false);
                            console.log("---------->>>>>", _ember['default'].get(self.get('application'), 'isAdmin'));
                            if (_ember['default'].get(self.get('application'), 'isAdmin') == true) {
                                (0, _emberSweetalert['default'])("User added successfully", "", "success");
                                self.transitionToRoute('managerole');
                            } else {
                                self.transitionToRoute('registration');
                            }
                        })['catch'](function (err) {
                            console.log('Eorr in response Registration', err);
                            msg.push("There is some error in Registration, Please Try again");
                            self.transitionToRoute('registration');
                        });
                    })();
                }
            }

        }

    });
});
define('jft-sale/controllers/saleonjft', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('jft-sale/controllers/shippingaddress', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({

        store1: _ember['default'].inject.service(),

        actions: {
            chooseAddressType: function chooseAddressType(params) {
                console.info(params);
            },

            shipAddress: function shipAddress(formData) {
                localStorage.setItem('shipAddr', JSON.stringify(formData));
                this.transitionToRoute('summarypage');
            }
        }
    });
});
define('jft-sale/controllers/summarypage', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        store1: _ember['default'].inject.service(),

        actions: {
            removeOrder: function removeOrder(order) {
                var orders = JSON.parse(localStorage.getItem('orderProd'));
                orders.popObject(order);
                localStorage.setItem('orderProd', JSON.stringify(orders));
                _ember['default'].set(this.get('model'), 'orderProd', JSON.parse(localStorage.getItem('orderProd')));
            }
        }
    });
});
define('jft-sale/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('jft-sale/helpers/app-version', ['exports', 'ember', 'jft-sale/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _jftSaleConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _jftSaleConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('jft-sale/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('jft-sale/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('jft-sale/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('jft-sale/helpers/get-name', ['exports', 'ember', 'ember-cli-multiselect/helpers/get-name'], function (exports, _ember, _emberCliMultiselectHelpersGetName) {
  exports['default'] = _emberCliMultiselectHelpersGetName['default'];
});
define('jft-sale/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('jft-sale/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('jft-sale/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('jft-sale/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _emberTruthHelpersHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual['default'];
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual.isEqual;
    }
  });
});
define('jft-sale/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('jft-sale/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('jft-sale/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('jft-sale/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('jft-sale/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('jft-sale/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('jft-sale/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('jft-sale/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('jft-sale/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'jft-sale/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _jftSaleConfigEnvironment) {
  var _config$APP = _jftSaleConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('jft-sale/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('jft-sale/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('jft-sale/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('jft-sale/initializers/export-application-global', ['exports', 'ember', 'jft-sale/config/environment'], function (exports, _ember, _jftSaleConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_jftSaleConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _jftSaleConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_jftSaleConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('jft-sale/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('jft-sale/initializers/load-bootstrap-config', ['exports', 'jft-sale/config/environment', 'ember-bootstrap/config'], function (exports, _jftSaleConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_jftSaleConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('jft-sale/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('jft-sale/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('jft-sale/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("jft-sale/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('jft-sale/mixins/reset-scroll-position', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Mixin.create({
        activate: function activate() {
            this._super();
            window.scrollTo(0, 0);
        }
    });
});
define('jft-sale/mixins/sweetalert-mixin', ['exports', 'ember-sweetalert/mixins/sweetalert-mixin'], function (exports, _emberSweetalertMixinsSweetalertMixin) {
  exports['default'] = _emberSweetalertMixinsSweetalertMixin['default'];
});
define('jft-sale/models/category', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        'name': _emberData['default'].attr('string'),
        'description': _emberData['default'].attr('string'),
        'uuid': _emberData['default'].attr('string'),
        'products': _emberData['default'].hasMany('product')
    });
});
// // import DS from 'ember-data';

// // export default DS.Model.extend({

// // });
// import Ember from 'ember';

// export default Ember.Object.extend({

// });
define('jft-sale/models/categorylist', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        'name': _emberData['default'].attr('string'),
        'description': _emberData['default'].attr('string'),
        'uuid': _emberData['default'].attr('string')
    });
});
define('jft-sale/models/login', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({});
});
define('jft-sale/models/product', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        'name': _emberData['default'].attr('string'),
        'price': _emberData['default'].attr('string'),
        'description': _emberData['default'].attr('string'),
        'features': _emberData['default'].attr('string'),
        'categories': _emberData['default'].attr()
    });
});
define('jft-sale/models/productlist', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        'name': _emberData['default'].attr('string'),
        'price': _emberData['default'].attr('string'),
        'description': _emberData['default'].attr('string'),
        'features': _emberData['default'].attr('string'),
        'uuid': _emberData['default'].attr('string'),
        'categories': _emberData['default'].attr()
    });
});
define('jft-sale/models/registration', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        fname: _emberData['default'].attr('string'),
        lname: _emberData['default'].attr('string'),
        email: _emberData['default'].attr('string'),
        password: _emberData['default'].attr('string'),
        phone: _emberData['default'].attr('number'),
        gender: _emberData['default'].attr('string'),
        uuid: _emberData['default'].attr('string')
    });
});
define('jft-sale/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('jft-sale/router', ['exports', 'ember', 'jft-sale/config/environment', 'jft-sale/constant'], function (exports, _ember, _jftSaleConfigEnvironment, _jftSaleConstant) {

  var Router = _ember['default'].Router.extend({
    location: _jftSaleConfigEnvironment['default'].locationType,
    rootURL: _jftSaleConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('/', { path: _jftSaleConstant['default'].CONTEXT_PATH });
    this.route('registration', { path: "/market/user/register" });
    this.route('productlist', { path: "/market/productlist" });
    this.route('addproduct', { path: "/market/product/add" });
    this.route('editproduct', { path: "/market/product/edit/:prod_id" });
    this.route('addcategory', { path: "/market/categories" });
    this.route('editcategory', { path: "/market/category/:cat_id" });
    this.route('rental');
    this.route('login', { path: "/market/user/login" });
    this.route('home', { path: "/market/home" });
    this.route('home-page');
    this.route('shippingaddress');
    this.route('summarypage');
    this.route('admin', { path: "/market/admin" });
    this.route('carts');
    this.route('managerole');
    this.route('saleonjft');
  });

  exports['default'] = Router;
});
define('jft-sale/routes/addcategory', ['exports', 'ember', 'jft-sale/mixins/reset-scroll-position'], function (exports, _ember, _jftSaleMixinsResetScrollPosition) {
  exports['default'] = _ember['default'].Route.extend(_jftSaleMixinsResetScrollPosition['default'], {

    store1: _ember['default'].inject.service(),

    model: function model() {
      var modelObj = {};
      modelObj.categories = this.get('store').findAll('category');
      var post = {
        name: "",
        description: ""
      };
      modelObj.post = post;
      return modelObj;
    },
    actions: {}
  });
});
define('jft-sale/routes/addproduct', ['exports', 'ember', 'jft-sale/mixins/reset-scroll-position'], function (exports, _ember, _jftSaleMixinsResetScrollPosition) {
  exports['default'] = _ember['default'].Route.extend(_jftSaleMixinsResetScrollPosition['default'], {

    store1: _ember['default'].inject.service(),
    model: function model() {
      var products = this.get('store1');
      var post = {
        name: "",
        price: "",
        description: "",
        category: [],
        categories: this.get('store').findAll('category')
      };
      return post;
    }

  });
});
define('jft-sale/routes/admin', ['exports', 'ember', 'jft-sale/mixins/reset-scroll-position'], function (exports, _ember, _jftSaleMixinsResetScrollPosition) {
  exports['default'] = _ember['default'].Route.extend(_jftSaleMixinsResetScrollPosition['default'], {});
});
define("jft-sale/routes/application", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Route.extend({
        model: function model() {
            localStorage.setItem("isAdmin", true);
            localStorage.setItem("isUser", false);
        }
    });
});
define('jft-sale/routes/carts', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        store1: _ember['default'].inject.service(),

        model: function model() {
            var post = {
                cartItems: JSON.parse(localStorage.getItem('cartItems'))
            };
            return post;
        }
    });
});
define('jft-sale/routes/editcategory', ['exports', 'ember', 'jft-sale/mixins/reset-scroll-position'], function (exports, _ember, _jftSaleMixinsResetScrollPosition) {
  exports['default'] = _ember['default'].Route.extend(_jftSaleMixinsResetScrollPosition['default'], {
    store1: _ember['default'].inject.service(),

    model: function model(params) {
      var data = {};
      data.categories = this.get('store').peekAll('categorylist');
      data.category = this.get('store').findRecord('category', params.cat_id);
      return data;
    },

    actions: {
      editCategory: function editCategory(model) {
        var categories = this.get('store1');
        categories.editCategory(model);
        this.transitionTo('addcategory');
      }
    }

  });
});
define('jft-sale/routes/editproduct', ['exports', 'ember', 'jft-sale/mixins/reset-scroll-position'], function (exports, _ember, _jftSaleMixinsResetScrollPosition) {
  exports['default'] = _ember['default'].Route.extend(_jftSaleMixinsResetScrollPosition['default'], {
    model: function model(params) {
      var model = this.get('store').findRecord('productlist', params.prod_id);
      return model;
    }

  });
});
define('jft-sale/routes/home', ['exports', 'ember', 'jft-sale/mixins/reset-scroll-position'], function (exports, _ember, _jftSaleMixinsResetScrollPosition) {
  exports['default'] = _ember['default'].Route.extend(_jftSaleMixinsResetScrollPosition['default'], {
    store1: _ember['default'].inject.service(),

    model: function model() {
      var categories = this.get('store1');
      var model = {};
      var category = this.get('store').findAll('category');
      model.categories = category;
      model.catVal = [];
      model.images = [];
      var img1 = {
        src: "http://www.retailenvironments.org/wp-content/uploads/2016/06/ShopLogo.png",
        width: 300,
        myImageName: 'Image 1'
      },
          img2 = {
        src: "http://cdn.shopclues.net/images/company/141315/C_e-shop-logo.png",
        width: 300,
        myImageName: 'Image 1'
      },
          img3 = {
        src: "http://www.clker.com/cliparts/0/y/N/C/g/c/shopping-cart-md.png",
        width: 300,
        myImageName: 'Image 1'
      },
          img4 = {
        src: "http://sways.in/wp-content/uploads/2011/11/thiruvalla-shopping-logo.png",
        width: 300,
        myImageName: 'Image 1'
      },
          img5 = {
        src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTnxGUVBXMgG31DgCyumfMF3ni7aUMC9wPpE2xOSligQR2L6_gDXw",
        width: 300,
        myImageName: 'Image 1'
      };
      for (var i = 0; i < 10; i++) {
        model.images.push(img1);
        model.images.push(img2);
        model.images.push(img3);
        model.images.push(img4);
        model.images.push(img5);
      }
      return model;
    }

  });
});
define('jft-sale/routes/login', ['exports', 'ember', 'jft-sale/mixins/reset-scroll-position', 'jft-sale/controllers/application'], function (exports, _ember, _jftSaleMixinsResetScrollPosition, _jftSaleControllersApplication) {
    exports['default'] = _ember['default'].Route.extend(_jftSaleMixinsResetScrollPosition['default'], {

        model: function model() {
            //Initially setting the invalidUser flag t flase
            this.controllerFor('login').set("invalidUser", false);
            var post = {
                email: "",
                password: ""
            };
            return post;
        }
    });
});
define('jft-sale/routes/managerole', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            var users = this.get('store').findAll('registration');
            return users;
        }
    });
});
define('jft-sale/routes/productlist', ['exports', 'ember', 'jft-sale/mixins/reset-scroll-position'], function (exports, _ember, _jftSaleMixinsResetScrollPosition) {
    exports['default'] = _ember['default'].Route.extend(_jftSaleMixinsResetScrollPosition['default'], {

        store1: _ember['default'].inject.service('store1'),

        model: function model() {
            var products = this.get('store').findAll('productlist');
            return products;
            // $.ajax({
            //         headers: {
            //          'Accept': 'application/json',
            //          'Content-Type': 'application/json'
            //      },
            //      type: 'GET',
            //          url: `http://localhost:9191/market/api/v1/customer/customers`,
            //         dataType: 'json',
            //         //data: JSON.stringify(jsondata),
            //         // success: function(res){
            //         //     console.log("iiiiiiiiiii",res);
            //         // },
            //         // error: function(err){
            //         //     console.log("ooooooooooo",err);
            //         // }
            //     }).done(function(res){
            //         console.log("iiiiiiiiiii",res[0].customerName);
            //         return res;
            //     }).fail(function(err){
            //          console.log("ooooooooooo",err);
            //     });
        }
    });
});
define('jft-sale/routes/registration', ['exports', 'ember', 'jft-sale/mixins/reset-scroll-position'], function (exports, _ember, _jftSaleMixinsResetScrollPosition) {
    exports['default'] = _ember['default'].Route.extend(_jftSaleMixinsResetScrollPosition['default'], {
        model: function model() {
            var register = {
                fname: "",
                lname: "",
                email: "",
                gender: "",
                password: "",
                confirmPassword: "",
                isRegister: true
            };
            return register;
        },

        actions: {}
    });
});
define('jft-sale/routes/saleonjft', ['exports', 'ember', 'jft-sale/mixins/reset-scroll-position'], function (exports, _ember, _jftSaleMixinsResetScrollPosition) {
  exports['default'] = _ember['default'].Route.extend(_jftSaleMixinsResetScrollPosition['default'], {});
});
define('jft-sale/routes/shippingaddress', ['exports', 'ember', 'jft-sale/mixins/reset-scroll-position'], function (exports, _ember, _jftSaleMixinsResetScrollPosition) {
    exports['default'] = _ember['default'].Route.extend(_jftSaleMixinsResetScrollPosition['default'], {
        model: function model() {
            var post = {
                address: {
                    name: '',
                    houseNo: '',
                    stree: '',
                    state: '',
                    city: '',
                    pincode: '',
                    phone: '',
                    type: ''
                },
                addressTypes: ['Home', 'Office', 'Any Other']
            };
            return post;
        }
    });
});
define('jft-sale/routes/summarypage', ['exports', 'ember', 'jft-sale/mixins/reset-scroll-position'], function (exports, _ember, _jftSaleMixinsResetScrollPosition) {
    exports['default'] = _ember['default'].Route.extend(_jftSaleMixinsResetScrollPosition['default'], {
        store1: _ember['default'].inject.service(),

        model: function model(params, transition) {
            console.log(params, transition);
            var model = {
                orderProd: [],
                shipAddr: {}
            };
            model.orderProd = JSON.parse(localStorage.getItem('orderProd'));
            model.shipAddr = JSON.parse(localStorage.getItem('shipAddr'));
            return model;
        }
    });
});
define('jft-sale/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPISerializer.extend({});
});
define('jft-sale/serializers/category', ['exports', 'jft-sale/serializers/application'], function (exports, _jftSaleSerializersApplication) {
    exports['default'] = _jftSaleSerializersApplication['default'].extend({

        serialize: function serialize(snapshot, options) {
            var json = this._super.apply(this, arguments);
            json.name = json.data.attributes.name;
            json.description = json.data.attributes.description;
            delete json.data;
            return json;
        }
    });
});
define('jft-sale/serializers/categorylist', ['exports', 'jft-sale/serializers/application'], function (exports, _jftSaleSerializersApplication) {
  exports['default'] = _jftSaleSerializersApplication['default'].extend({});
});
define('jft-sale/serializers/product', ['exports', 'jft-sale/serializers/application'], function (exports, _jftSaleSerializersApplication) {
    exports['default'] = _jftSaleSerializersApplication['default'].extend({
        serialize: function serialize(snapshot, options) {
            console.log('------------->>>>');
            var json = this._super.apply(this, arguments);
            json.name = json.data.attributes.name;
            json.price = json.data.attributes.price;
            json.features = "34G";
            json.description = json.data.attributes.description;
            json.categories = json.data.attributes.categories;
            //json.uuid= json.data.attributes.phone;
            delete json.data;
            return json;
        }
    });
});
define("jft-sale/serializers/productlist", ["exports", "jft-sale/serializers/application"], function (exports, _jftSaleSerializersApplication) {
    exports["default"] = _jftSaleSerializersApplication["default"].extend({
        serialize: function serialize(snapshot, options) {
            console.log("In the serializeer of product list........", this._super.apply(this, arguments));
            var json = this._super.apply(this, arguments);
            json.name = json.data.attributes.name;
            json.price = json.data.attributes.price;
            json.features = "34G";
            json.description = json.data.attributes.description;
            json.categories = [{
                name: "cat2"
            }];
            //json.uuid= json.data.attributes.phone;
            console.log("JSON.......", json);
            delete json.data;
            return json;
        }
    });
});
define("jft-sale/serializers/registration", ["exports", "jft-sale/serializers/application"], function (exports, _jftSaleSerializersApplication) {
    exports["default"] = _jftSaleSerializersApplication["default"].extend({

        serialize: function serialize(snapshot, options) {
            console.log(" registration serializeer");
            var json = this._super.apply(this, arguments);
            json.fname = json.data.attributes.fname;
            json.lname = json.data.attributes.lname;
            json.email = json.data.attributes.email;
            json.password = json.data.attributes.password;
            json.gender = json.data.attributes.gender;
            json.phone = json.data.attributes.phone;
            delete json.data;
            return json;
        }
    });
});
define('jft-sale/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('jft-sale/services/store1', ['exports', 'ember', 'jft-sale/models/category'], function (exports, _ember, _jftSaleModelsCategory) {
    exports['default'] = _ember['default'].Service.extend({
        products: [{ id: 1, name: 'Samsung On-5 Pr0', price: 34000, description: 'This is new phone of the samsung.', category: 'Phone, Mobile' }, { id: 2, name: 'Goole Pizel 64-GB', price: 78000, description: 'Goole pixel in 2nd orginal andriod phone in the market.', category: 'Phone, Mobile' }, { id: 3, name: 'Apple i-phone 128-GB', price: 84000, description: 'Latest apple iOS iphone-7 launched by Aplle Inc.', category: 'Phone, Mobile' }, { id: 4, name: 'Bose B-234J Sound', price: 21000, description: 'Best quality ear phone by Bose', category: 'Ear Phone, Head Phone' }, { id: 5, name: 'JBL L-78Q', price: 4000, description: 'Dual system wired and wire less.', category: 'Ear Phone, Head Phone' }, { id: 6, name: 'Fijtsu Satellite C-647', price: 62000, description: 'This laptop with Dolby speaker and dual front camera', category: 'Laptop/DeskTop' }],

        categories: [{ id: "1", name: "Phone, Mobile", description: "This is Mobile, Phone Category" }, { id: "2", name: "Ear Phone, Head Phone", description: "This is Head Phone Category" }, { id: "3", name: "Laptop/DeskTop", description: "This is Laptop/DeskTop Category" }],

        getProducts: function getProducts() {
            return this.products;
        },

        addProducts: function addProducts(data) {
            var id = this.products.length;
            data.id = id + 1;
            var newProd = Product.create({ id: data.id, name: data.name, price: data.price, description: data.description, category: data.category });
            this.products.pushObject(newProd);
        },

        editProducts: function editProducts(data) {
            //TODO: Do some edit Functionality
        },

        getCategories: function getCategories() {
            return this.categories;
        },

        addCategory: function addCategory(data) {
            var id = this.categories.length;
            data.id = id + 1;
            var cat = _jftSaleModelsCategory['default'].create({ id: data.id, name: data.name, description: data.description });
            this.categories.pushObject(cat);
        },

        editCategory: function editCategory(data) {
            //TODO: Do some edit Functionality
        },

        orderProd: [
            //     {
            //     id: '1',
            //     name: "Xiomi Redmi-Note-2",
            //     price: 16000,
            //     description: "This is mobile phone with extra feature of AI and PR which is Artificaial Intelligence and Pattern Recegnition Respectively.",
            //     category: "Phone, Mobile"
            // },
            // {
            //     id: '1',
            //     name: "Xiomi Redmi-Note-2",
            //     price: 16000,
            //     description: "This is mobile phone with extra feature of AI and PR which is Artificaial Intelligence and Pattern Recegnition Respectively.",
            //     category: "Phone, Mobile"
            // },
            // {
            //     id: '1',
            //     name: "Xiomi Redmi-Note-2",
            //     price: 16000,
            //     description: "This is mobile phone with extra feature of AI and PR which is Artificaial Intelligence and Pattern Recegnition Respectively.",
            //     category: "Phone, Mobile"
            // }
        ],

        shipAddr: {
            name: "Raj Ojha",
            houseNo: "183/152",
            street: "Colonelgunj",
            city: "Allahabad",
            state: "UP",
            pincode: "211002"
        },
        cartItems: []
    });
});

// import Product from 'jft-sale/models/products';
define("jft-sale/templates/addcategory", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vxyp3sk0", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"text-center text-info\"],[\"flush-element\"],[\"text\",\" || Add Product Category Page || \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"addCategory\",[\"get\",[\"model\",\"post\"]]],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\" Add Category Form ...\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-danger\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"post\",\"msg\"]]],null,4],[\"text\",\"                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"name\"],[\"flush-element\"],[\"text\",\"Category Name\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"post\",\"name\"]],\"name\",\"form-control\"]]],false],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"description\"],[\"flush-element\"],[\"text\",\"Category Description\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"post\",\"description\"]],\"description\",\"form-control\"]]],false],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group text-center\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn\"],[\"static-attr\",\"type\",\"button\"],[\"flush-element\"],[\"text\",\"Reset\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\" Category Table \"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"categories\"]]],null,3,0],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 text-center text-danger\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"---No Category Found---\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Edit\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"category\",\"id\"]],false],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"category\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"category\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"editcategory\",[\"get\",[\"category\",\"id\"]]],[[\"class\"],[\"btn btn-primary btn\"]],1],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"btn btn-info btn\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deleteCategory\",[\"get\",[\"category\",\"id\"]]]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"category\"]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table table-striped table-bordered table-responsive\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Id\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Name\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Description\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Edit\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"categories\"]]],null,2],[\"text\",\"                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"get\",[\"ms\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"ms\"]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/addcategory.hbs" } });
});
define("jft-sale/templates/addproduct", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "68K9cSzM", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"text-center text-info\"],[\"flush-element\"],[\"text\",\" || Add Product page || \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"addProduct\",[\"get\",[\"model\"]]],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\" Add Product Form..\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-danger\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"msg\"]]],null,2],[\"text\",\"                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"name\"],[\"flush-element\"],[\"text\",\"Product Name\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"name\"]],\"name\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"price\"],[\"flush-element\"],[\"text\",\"Product Price\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"price\"]],\"price\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"description\"],[\"flush-element\"],[\"text\",\"Product Description\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"description\"]],\"description\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"category\"],[\"flush-element\"],[\"text\",\"Product Category\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"select\",[]],[\"static-attr\",\"class\",\"form-control\"],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],\"chooseCategory\"],[[\"value\"],[\"target.value\"]]],null],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"option\",[]],[\"static-attr\",\"value\",\"Not Selected\"],[\"flush-element\"],[\"text\",\"Select\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"categories\"]]],null,1],[\"text\",\"                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group text-center\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn\"],[\"static-attr\",\"type\",\"button\"],[\"flush-element\"],[\"text\",\"Reset\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"block\",[\"each\"],[[\"get\",[\"prod1\"]]],null,0],[\"text\",\" \"],[\"append\",[\"unknown\",[\"prod\",\"name\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\" \"],[\"append\",[\"unknown\",[\"pro\",\"data\",\"name\"]],false],[\"text\",\" \"]],\"locals\":[\"pro\"]},{\"statements\":[[\"text\",\"                        \"],[\"open-element\",\"option\",[]],[\"dynamic-attr\",\"value\",[\"unknown\",[\"category\",\"name\"]],null],[\"flush-element\"],[\"append\",[\"unknown\",[\"category\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"category\"]},{\"statements\":[[\"text\",\"                    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"get\",[\"ms\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"ms\"]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/addproduct.hbs" } });
});
define("jft-sale/templates/admin", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "srQ+i3Nq", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"text-center text-info\"],[\"flush-element\"],[\"text\",\"\\n    || Admin Home Page ||\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\" \\n        An JFT-Sale-Admin can do ....\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\" \\n    \"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-2\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"list-group\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"productlist\"],null,5],[\"text\",\" \"],[\"block\",[\"link-to\"],[\"addcategory\"],null,4],[\"text\",\" \"],[\"block\",[\"link-to\"],[\"productlist\"],null,3],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-2\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-2\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"list-group\"],[\"flush-element\"],[\"text\",\"\\n                \\n                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item list-group-item-success\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"catDiv badge\"],[\"flush-element\"],[\"text\",\" \"],[\"block\",[\"link-to\"],[\"addproduct\"],null,2],[\"close-element\"],[\"text\",\" To add a new product\\n                    for sale\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item list-group-item-info\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"catDiv badge\"],[\"flush-element\"],[\"block\",[\"link-to\"],[\"addcategory\"],null,1],[\"text\",\" \"],[\"close-element\"],[\"text\",\" To add a new category\\n                    to filter products\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item list-group-item-warning\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"catDiv badge\"],[\"flush-element\"],[\"text\",\" \"],[\"block\",[\"link-to\"],[\"addcategory\"],null,0],[\"text\",\" \"],[\"close-element\"],[\"text\",\" To manage role of user\\n                    in system\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-row w3-padding-32\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-third text-center\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"User 1\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"Constant\",\"CONTEXT_PATH\"]],\"assets/images/admin-icon.png\"]]],[\"static-attr\",\"class\",\"catDiv w3-round w3-margin-bottom\"],[\"static-attr\",\"alt\",\"Random Name\"],[\"static-attr\",\"style\",\"width:60%\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-third text-center\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"User 2\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"Constant\",\"CONTEXT_PATH\"]],\"assets/images/admin-icon4.jpg\"]]],[\"static-attr\",\"class\",\"catDiv w3-round w3-margin-bottom\"],[\"static-attr\",\"alt\",\"Random Name\"],[\"static-attr\",\"style\",\"width:60%\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-third text-center\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"User 3\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"Constant\",\"CONTEXT_PATH\"]],\"assets/images/admin-icon3.ico\"]]],[\"static-attr\",\"class\",\" catDiv w3-round\"],[\"static-attr\",\"alt\",\"Random Name\"],[\"static-attr\",\"style\",\"width:60%\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\" Mange Role \"]],\"locals\":[]},{\"statements\":[[\"text\",\"Create Category \"]],\"locals\":[]},{\"statements\":[[\"text\",\"  Create Product \"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"catDiv list-group-item list-group-item-warning\"],[\"flush-element\"],[\"text\",\"User List \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\"0\"],[\"close-element\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"catDiv list-group-item list-group-item-info\"],[\"flush-element\"],[\"text\",\"Category List \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\"3\"],[\"close-element\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\" catDiv list-group-item list-group-item-success\"],[\"flush-element\"],[\"text\",\"Products List \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\"12\"],[\"close-element\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/admin.hbs" } });
});
define("jft-sale/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "XDCmT/Pz", "block": "{\"statements\":[[\"open-element\",\"header\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAdmin\"]]],null,17],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"meta\",[]],[\"static-attr\",\"name\",\"viewport\"],[\"static-attr\",\"content\",\"width=device-width, initial-scale=1\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"link\",[]],[\"static-attr\",\"rel\",\"stylesheet\"],[\"static-attr\",\"href\",\"https://www.w3schools.com/w3css/4/w3.css\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"link\",[]],[\"static-attr\",\"rel\",\"stylesheet\"],[\"static-attr\",\"href\",\"https://fonts.googleapis.com/css?family=Lato\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"link\",[]],[\"static-attr\",\"rel\",\"stylesheet\"],[\"static-attr\",\"href\",\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"style\",[]],[\"flush-element\"],[\"text\",\"\\n    body {\\n        font-family: \\\"Lato\\\", sans-serif\\n    }\\n    \\n    .mySlides {\\n        display: none\\n    }\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"body\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"comment\",\" Navbar \"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isUser\"]]],null,8],[\"text\",\"\\n    \"],[\"open-element\",\"footer\",[]],[\"static-attr\",\"class\",\"footer scfooter_bottom\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"wrapper\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"© 2016 Company, Inc. · \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Privacy\"],[\"close-element\"],[\"text\",\" · \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Terms\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sc_copyright\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"http://www.logodesignconsultant.com/images/category_based_logos/luxury-shoping-logo.gif\"],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-shopping-cart\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" - \"],[\"append\",[\"unknown\",[\"cart\"]],false],[\"text\",\" \"]],\"locals\":[]},{\"statements\":[[\"text\",\"Register\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Login\"]],\"locals\":[]},{\"statements\":[[\"text\",\" \"],[\"block\",[\"link-to\"],[\"login\"],[[\"class\"],[\"navbar-brand navbar-right\"]],2],[\"text\",\"\\n                \"],[\"block\",[\"link-to\"],[\"registration\"],[[\"class\"],[\"navbar-brand navbar-right\"]],1],[\"text\",\" \"]],\"locals\":[]},{\"statements\":[[\"text\",\"Raj Ojha\"]],\"locals\":[]},{\"statements\":[[\"text\",\" \"],[\"append\",[\"helper\",[\"sweet-alert\"],null,[[\"title\",\"text\",\"type\"],[\"Login Succesfully\",\"As User\",\"success\"]]],false],[\"text\",\"\\n                \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"navbar-brand navbar-right\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signOutAction\"]],[\"flush-element\"],[\"text\",\"Sign Out \"],[\"close-element\"],[\"text\",\" \"],[\"block\",[\"link-to\"],[\"registration\"],[[\"class\"],[\"navbar-brand navbar-right\"]],4],[\"text\",\" \"]],\"locals\":[]},{\"statements\":[[\"text\",\" SALE ON JFT \"]],\"locals\":[]},{\"statements\":[[\"text\",\"HOME \"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-top\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-bar w3-black w3-card-2\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right\"],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"onclick\",\"myFunction()\"],[\"static-attr\",\"title\",\"Toggle Navigation Menu\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-bars\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"block\",[\"link-to\"],[\"home\"],[[\"class\"],[\"w3-bar-item w3-button w3-padding-large\"]],7],[\"text\",\"\\n                \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#band\"],[\"static-attr\",\"class\",\"w3-bar-item w3-button w3-padding-large w3-hide-small\"],[\"flush-element\"],[\"text\",\"ABOUT US\"],[\"close-element\"],[\"text\",\" \"],[\"block\",[\"link-to\"],[\"saleonjft\"],[[\"class\"],[\"w3-bar-item w3-button w3-padding-large w3-hide-small\"]],6],[\"text\",\"\\n                \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#contact\"],[\"static-attr\",\"class\",\"w3-bar-item w3-button w3-padding-large w3-hide-small\"],[\"flush-element\"],[\"text\",\"CONTACT\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-dropdown-hover w3-hide-small\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"w3-padding-large w3-button\"],[\"static-attr\",\"title\",\"More\"],[\"flush-element\"],[\"text\",\"OFFER ZONE \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-caret-down\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-dropdown-content w3-bar-block w3-card-4\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"w3-bar-item w3-button\"],[\"flush-element\"],[\"text\",\"\\n                            Today's Offer\\n                            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"pull-right badge buyNowSpan\"],[\"flush-element\"],[\"text\",\" Offers \"],[\"close-element\"],[\"text\",\" \\n                            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"pull-right badge\"],[\"flush-element\"],[\"text\",\" 2 \"],[\"close-element\"],[\"text\",\" \\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"w3-bar-item w3-button\"],[\"flush-element\"],[\"text\",\"\\n                            Tomarrow's Offer \\n                            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"pull-right badge buyNowSpan\"],[\"flush-element\"],[\"text\",\" Offers \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"pull-right badge\"],[\"flush-element\"],[\"text\",\" 3 \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"w3-bar-item w3-button\"],[\"flush-element\"],[\"text\",\"\\n                            Coming Sunday's Offer\\n                            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"pull-right badge buyNowSpan\"],[\"flush-element\"],[\"text\",\" Offers \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"pull-right badge\"],[\"flush-element\"],[\"text\",\" 8 \"],[\"close-element\"],[\"text\",\" \\n                            \\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"class\",\"w3-padding-large w3-hover-red w3-hide-small w3-right\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"                \"],[\"block\",[\"if\"],[[\"get\",[\"isLogin\"]]],null,5,3],[\"text\",\" \"],[\"block\",[\"link-to\"],[\"carts\"],[[\"class\"],[\" navbar-brand navbar-right btn btn-info btn-lg\"]],0],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"comment\",\" Navbar on small screens \"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"navDemo\"],[\"static-attr\",\"class\",\"w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top\"],[\"static-attr\",\"style\",\"margin-top:46px\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#band\"],[\"static-attr\",\"class\",\"w3-bar-item w3-button w3-padding-large\"],[\"flush-element\"],[\"text\",\"ABOUT US\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#tour\"],[\"static-attr\",\"class\",\"w3-bar-item w3-button w3-padding-large\"],[\"flush-element\"],[\"text\",\"SALE CONTACT JFT\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#contact\"],[\"static-attr\",\"class\",\"w3-bar-item w3-button w3-padding-large\"],[\"flush-element\"],[\"text\",\"CONTACT\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"w3-bar-item w3-button w3-padding-large\"],[\"flush-element\"],[\"text\",\"MERCH\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"comment\",\" Page content \"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-content\"],[\"static-attr\",\"style\",\"max-width:2000px;margin-top:46px\"],[\"flush-element\"],[\"text\",\"\\n\\n        \"],[\"comment\",\" The Band Section \"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-container w3-content w3-center w3-padding-64\"],[\"static-attr\",\"style\",\"max-width:800px\"],[\"static-attr\",\"id\",\"band\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"w3-wide\"],[\"flush-element\"],[\"text\",\"ABOUT US\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"w3-opacity\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"flush-element\"],[\"text\",\"We love to sale products\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"w3-justify\"],[\"flush-element\"],[\"text\",\"We have a middile ware to sale the usable and famous product to reach you. We also provide the service as a middleware\\n                with the manufacuring comapny. tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\\n                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\\n                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing\\n                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\\n                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-row w3-padding-32\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-third\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Gaurav Chauhan-CEO\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"Constant\",\"resourceURI\"]],\"images/gaurav_sir.jpg\"]]],[\"static-attr\",\"class\",\"w3-round w3-margin-bottom\"],[\"static-attr\",\"alt\",\"Random Name\"],[\"static-attr\",\"style\",\"width:60%\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-third\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Ashutosh Ojha-Front-End Engineer\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"Constant\",\"resourceURI\"]],\"images/ashutosh2.jpg\"]]],[\"static-attr\",\"class\",\"w3-round w3-margin-bottom\"],[\"static-attr\",\"alt\",\"Random Name\"],[\"static-attr\",\"style\",\"width:60%\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-third\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Gagan Chhabra-Back-End Engineer\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"Constant\",\"resourceURI\"]],\"images/gagan.jpg\"]]],[\"static-attr\",\"class\",\"w3-round\"],[\"static-attr\",\"alt\",\"Random Name\"],[\"static-attr\",\"style\",\"width:60%\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"comment\",\" The Contact Section \"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-container w3-content w3-padding-64\"],[\"static-attr\",\"style\",\"max-width:800px\"],[\"static-attr\",\"id\",\"contact\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"w3-wide w3-center\"],[\"flush-element\"],[\"text\",\"CONTACT\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"w3-opacity w3-center\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"flush-element\"],[\"text\",\"Fan? Drop a note!\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-row w3-padding-32\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-col m6 w3-large w3-margin-bottom\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-map-marker\"],[\"static-attr\",\"style\",\"width:30px\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"G-76, Sector-63\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-phone\"],[\"static-attr\",\"style\",\"width:30px\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Noida, Uttar Pradesh, 201301\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-envelope\"],[\"static-attr\",\"style\",\"width:30px\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\" Email: he@jellyfishtechnologies.com\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-col m6\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"action\",\"/action_page.php\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-row-padding\"],[\"static-attr\",\"style\",\"margin:0 -16px 8px -16px\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-half\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"w3-input w3-border\"],[\"static-attr\",\"type\",\"text\"],[\"static-attr\",\"placeholder\",\"Name\"],[\"static-attr\",\"required\",\"\"],[\"static-attr\",\"name\",\"Name\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"w3-half\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"w3-input w3-border\"],[\"static-attr\",\"type\",\"text\"],[\"static-attr\",\"placeholder\",\"Email\"],[\"static-attr\",\"required\",\"\"],[\"static-attr\",\"name\",\"Email\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"w3-input w3-border\"],[\"static-attr\",\"type\",\"text\"],[\"static-attr\",\"placeholder\",\"Message\"],[\"static-attr\",\"required\",\"\"],[\"static-attr\",\"name\",\"Message\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"w3-button w3-black w3-section w3-right\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"SEND\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"comment\",\" End Page Content \"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"comment\",\" Add Google Maps \"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Create User\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Mange User\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Add Category\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Add Products\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Products\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Home\"]],\"locals\":[]},{\"statements\":[[\"text\",\"JellyFish Sale \"]],\"locals\":[]},{\"statements\":[[\"text\",\"Hello, Admin\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-inverse\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"navbar-brand navbar-right\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signOutAction\"]],[\"flush-element\"],[\"text\",\" Sign Out \"],[\"close-element\"],[\"text\",\" \"],[\"block\",[\"link-to\"],[\"admin\"],[[\"class\"],[\"navbar-brand\\n            navbar-right\"]],16],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"block\",[\"link-to\"],[\"admin\"],[[\"class\"],[\"navbar-brand\"]],15],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin\"],null,14],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"active\"],[\"flush-element\"],[\"block\",[\"link-to\"],[\"productlist\"],null,13],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"addproduct\"],null,12],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"addcategory\"],null,11],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"managerole\"],null,10],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"registration\"],null,9],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/application.hbs" } });
});
define("jft-sale/templates/carts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "pMEjSnVF", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"text-center text-info\"],[\"flush-element\"],[\"text\",\" || Added Produts in Carts || \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\" You have added the following products..\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"cartItems\"]]],null,3,1],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"home\"],[[\"class\"],[\"btn btn-primary text-center\"]],0],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"btn btn-success text-center\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"buyNowFromCart\",[\"get\",[\"model\",\"cartItems\"]]]],[\"flush-element\"],[\"text\",\" Make Purchase Now \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\" Continue Shopping \"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n    \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-center text-danger\"],[\"flush-element\"],[\"text\",\"\\n        Sorry! You have not added any item in you cart yet.\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"btn btn-info btn\"],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"role\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"decrementQuantity\",[\"get\",[\"cartItem\"]]]],[\"flush-element\"],[\"text\",\"Quantity   \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\" (-1) \"],[\"close-element\"],[\"text\",\" \\n                \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"unknown\",[\"cartItem\",\"attributes\",\"name\"]],false],[\"text\",\", ₹ \"],[\"append\",[\"unknown\",[\"cartItem\",\"attributes\",\"price\"]],false],[\"text\",\" per item Only, Total cast - \"],[\"append\",[\"unknown\",[\"cartItem\",\"totalPrice\"]],false],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"catDiv pull-right glyphicon glyphicon-remove\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"removeItemFromCart\",[\"get\",[\"cartItem\"]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"cartItem\",\"attributes\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"btn btn-warning btn\"],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"role\",\"button\"],[\"flush-element\"],[\"text\",\"See Details »\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"incermentQuantity\",[\"get\",[\"cartItem\"]]]],[\"flush-element\"],[\"text\",\" Quantity   \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\" (+1) \"],[\"close-element\"],[\"text\",\" \\n                \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"gt\"],[[\"get\",[\"cartItem\",\"itemQantity\"]],1],null]],null,2],[\"text\",\"                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"pull-right badge\"],[\"flush-element\"],[\"text\",\"Quantity - \"],[\"append\",[\"unknown\",[\"cartItem\",\"itemQantity\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"cartItem\"]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/carts.hbs" } });
});
define("jft-sale/templates/components/multi-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PlZDG9qV", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"modifier\",[\"bind-attr\"],null,[[\"class\"],[\":multi-select isOpen:open\"]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default dropdown-toggle\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleOpen\"]],[\"modifier\",[\"bind-attr\"],null,[[\"disabled\"],[\"isLoading\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"block\",[\"if\"],[[\"get\",[\"isLoading\"]]],null,7,6],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"caret\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isOpen\"]]],null,4],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"actionbar\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancel\"]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"append\",[\"unknown\",[\"submitText\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"name\",\"checked\"],[\"checkbox\",\"r.selected\",[\"get\",[\"r\",\"selected\"]]]]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"select\",[\"get\",[\"r\"]]]],[\"flush-element\"],[\"append\",[\"helper\",[\"get-name\"],[[\"get\",[\"r\"]],[\"get\",[\"displayName\"]]],null],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table table-hovered table-striped\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"r\"]],[\"get\",[\"in\"]],[\"get\",[\"filteredRecords\"]]],null,1],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"label label-warning\"],[\"flush-element\"],[\"text\",\"Note:\"],[\"close-element\"],[\"text\",\" No records matching your filter. Try * to get some records\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"role\",\"form\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"combo-box form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\",\"autofocus\"],[\"text\",\"form-control\",[\"get\",[\"searchText\"]],\"Type to search\",\"autofocus\"]]],false],[\"text\",\"\\n      \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"toolbar\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"selectAll\"]],[\"flush-element\"],[\"text\",\"Select All\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deselectAll\"]],[\"flush-element\"],[\"text\",\"De-select All\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"noRecords\"]]],null,3,2],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"submit\"]]],null,0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\" (\"],[\"append\",[\"unknown\",[\"selectedRecordsNum\"]],false],[\"text\",\")\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"name\"]],false],[\"block\",[\"if\"],[[\"get\",[\"showRecordNum\"]]],null,5]],\"locals\":[]},{\"statements\":[[\"text\",\"Loading \"],[\"append\",[\"unknown\",[\"name\"]],false],[\"text\",\"...\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/components/multi-select.hbs" } });
});
define("jft-sale/templates/editcategory", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SqoiA+MD", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\" This is Edir Category Page \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"editCategory\",[\"get\",[\"model\",\"category\"]]],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"Add Category\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"name\"],[\"flush-element\"],[\"text\",\"Category Name\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"category\",\"name\"]],\"name\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"description\"],[\"flush-element\"],[\"text\",\"Category Description\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"category\",\"description\"]],\"description\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group text-center\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Update\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn\"],[\"static-attr\",\"type\",\"button\"],[\"flush-element\"],[\"text\",\"Reset\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table table-striped table-bordered table-responsive\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Id\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Name\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Description\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Edit\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"categories\"]]],null,1],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Edit\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"category\",\"id\"]],false],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"category\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"category\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"editcategory\",[\"get\",[\"category\",\"id\"]]],[[\"class\"],[\"btn btn-primary btn\"]],0],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"btn btn-info btn\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deleteCategory\",[\"get\",[\"category\"]]]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"category\"]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/editcategory.hbs" } });
});
define("jft-sale/templates/editproduct", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "LCwygX3n", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"text-center text-info\"],[\"flush-element\"],[\"text\",\" || Edit Product page || \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"editProduct\",[\"get\",[\"model\"]]],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\" Update Product Form..\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"name\"],[\"flush-element\"],[\"text\",\"Product Name\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"name\"]],\"name\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"price\"],[\"flush-element\"],[\"text\",\"Product Price\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"price\"]],\"price\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"description\"],[\"flush-element\"],[\"text\",\"Product Description\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"description\"]],\"description\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"category\"],[\"flush-element\"],[\"text\",\"Product Category..\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"select\",[]],[\"static-attr\",\"class\",\"form-control\"],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],\"chooseCategory\"],[[\"value\"],[\"target.value\"]]],null],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"product\",\"categories\"]]],null,0],[\"text\",\"            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group text-center\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Update\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn\"],[\"static-attr\",\"type\",\"button\"],[\"flush-element\"],[\"text\",\"Reset\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                    \"],[\"open-element\",\"option\",[]],[\"dynamic-attr\",\"value\",[\"unknown\",[\"category\",\"name\"]],null],[\"dynamic-attr\",\"selected\",[\"helper\",[\"eq\"],[[\"get\",[\"category\",\"name\"]],[\"get\",[\"model\",\"category\"]]],null],null],[\"flush-element\"],[\"append\",[\"unknown\",[\"category\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"category\"]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/editproduct.hbs" } });
});
define("jft-sale/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Ew+pt9cH", "block": "{\"statements\":[[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"categories\"]]],null,2],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"catVal\"]]],null,1],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"block\",[\"ember-image-slider\"],null,[[\"content\",\"limit\",\"shouldDisplayArrows\"],[[\"get\",[\"model\",\"images\"]],40,true]],0],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\" \"]],\"locals\":[\"image\"]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"text\",\"            \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"product\",\"attributes\",\"name\"]],false],[\"text\",\", ₹ \"],[\"append\",[\"unknown\",[\"product\",\"attributes\",\"price\"]],false],[\"text\",\" Only\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"product\",\"attributes\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"btn btn-default active btn\"],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"role\",\"button\"],[\"flush-element\"],[\"text\",\"See Details »\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-success btn\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"buyNowAction\",[\"get\",[\"product\"]]]],[\"flush-element\"],[\"text\",\"Buy Now\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-info btn\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"addToCart\",[\"get\",[\"product\"]]]],[\"flush-element\"],[\"text\",\"Add to Cart\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"]],\"locals\":[\"product\"]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-2 catDiv\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"getProdByCat\",[\"get\",[\"category\",\"name\"]]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"w3-opacity\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"category\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"category\"]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/home.hbs" } });
});
define("jft-sale/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5jk24Jmy", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\" This is user login Page \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"userLogin\",[\"get\",[\"model\"]]],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\" Login Form\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"invalidUser\"]]],null,0],[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"User Email\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"email\"]],\"email\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"password\"],[\"flush-element\"],[\"text\",\"Password\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"type\",\"id\",\"class\"],[[\"get\",[\"model\",\"password\"]],\"password\",\"password\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group text-center\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Login\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn\"],[\"static-attr\",\"type\",\"button\"],[\"flush-element\"],[\"text\",\"Reset\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-danger\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Invalid Credentials, Try Again!!!\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/login.hbs" } });
});
define("jft-sale/templates/managerole", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "W/ywW4Cf", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12\"],[\"flush-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"text-center text-info\"],[\"flush-element\"],[\"text\",\" || Manage User Role Page || \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"addCategory\",[\"get\",[\"model\",\"post\"]]],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\" Manage Role Table ...\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\"]]],null,4,0],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row text-danger text-center\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"-- No User Found --\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Update\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"fname\"]],false],[\"text\",\" \"],[\"append\",[\"unknown\",[\"user\",\"lname\"]],false],[\"text\",\" \"],[\"append\",[\"unknown\",[\"user\",\"uuid\"]],false],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"phone\"]],false],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"static-attr\",\"type\",\"checkbox\"],[\"dynamic-attr\",\"checked\",[\"unknown\",[\"cbState\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\" Admin \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"checkbox\"],[\"static-attr\",\"checked\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\" User \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"editcategory\",[\"get\",[\"category\",\"id\"]]],[[\"class\"],[\"btn btn-primary btn\"]],1],[\"text\",\"\\n                        \\n                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"btn btn-info btn\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deleteUser\",[\"get\",[\"user\",\"uuid\"]]]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"user\",\"uuid\"]]],null,2]],\"locals\":[\"user\"]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table table-striped table-bordered table-responsive\"],[\"flush-element\"],[\"text\",\"\\n\\n                \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Name\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Email\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Contact\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Change Role\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Action\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n\\n                \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,3],[\"text\",\"                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/managerole.hbs" } });
});
define("jft-sale/templates/productlist", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "UfWBuvQI", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"text-center text-info\"],[\"flush-element\"],[\"text\",\" || Product Listing Page || \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\" All Products ..\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,2,0],[\"text\",\" \"],[\"append\",[\"unknown\",[\"product-list\"]],false],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 text-center text-danger\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"---You have not added any product yet ---\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"]],\"locals\":[]},{\"statements\":[[\"text\",\"Edit\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"product\",\"name\"]],false],[\"text\",\", ₹ \"],[\"append\",[\"unknown\",[\"product\",\"price\"]],false],[\"text\",\" Only\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"product\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"btn btn-warning btn\"],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"role\",\"button\"],[\"flush-element\"],[\"text\",\"See Details »\"],[\"close-element\"],[\"text\",\" \"],[\"block\",[\"link-to\"],[\"editproduct\",[\"get\",[\"product\",\"id\"]]],[[\"class\"],[\"btn btn-primary btn\"]],1],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"btn btn-info btn\"],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"role\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deleteProduct\",[\"get\",[\"product\",\"uuid\"]]]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \\n\"]],\"locals\":[\"product\"]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/productlist.hbs" } });
});
define("jft-sale/templates/products", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "t09834kM", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"text-center text-info\"],[\"flush-element\"],[\"text\",\" || Product Listing Page || \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\" All Products ..\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,1],[\"text\",\" \"],[\"append\",[\"unknown\",[\"product-list\"]],false],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Edit\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"product\",\"name\"]],false],[\"text\",\", ₹ \"],[\"append\",[\"unknown\",[\"product\",\"price\"]],false],[\"text\",\" Only\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"product\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"btn btn-warning btn\"],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"role\",\"button\"],[\"flush-element\"],[\"text\",\"See Details »\"],[\"close-element\"],[\"text\",\" \"],[\"block\",[\"link-to\"],[\"editproduct\",[\"get\",[\"product\",\"uuid\"]]],[[\"class\"],[\"btn btn-primary btn\"]],0],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"btn btn-info btn\"],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"role\",\"button\"],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"]],\"locals\":[\"product\"]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/products.hbs" } });
});
define("jft-sale/templates/registration", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ENrH2aSh", "block": "{\"statements\":[[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"isRegister\"]]],null,3,1],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\" Login \"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \\n    \"],[\"append\",[\"helper\",[\"sweet-alert\"],null,[[\"title\",\"type\"],[\"Registered Succesfully\",\"success\"]]],false],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"text-center text-success\"],[\"flush-element\"],[\"text\",\"\\n        \\n        || You have Registered on JFT-Portal Succesfully. ||\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"\\n        Please Click on \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\" \"],[\"block\",[\"link-to\"],[\"login\"],null,0],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"get\",[\"ms\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"ms\"]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"registerUser\",[\"get\",[\"model\"]]],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"User Registration Form\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-danger\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"msg\"]]],null,2],[\"text\",\"            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"fname\"],[\"flush-element\"],[\"text\",\"First Name  \"],[\"append\",[\"unknown\",[\"isAdmin\"]],false],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"fname\"]],\"fname\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"lname\"],[\"flush-element\"],[\"text\",\"Last Name\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"lname\"]],\"lname\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"Email Id\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"type\",\"class\"],[[\"get\",[\"model\",\"email\"]],\"email\",\"email\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"password\"],[\"flush-element\"],[\"text\",\"Password\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"type\",\"class\"],[[\"get\",[\"model\",\"password\"]],\"password\",\"password\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"confirmPassword\"],[\"flush-element\"],[\"text\",\"Confirm Password\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"type\",\"class\"],[[\"get\",[\"model\",\"confirmPassword\"]],\"confirmPassword\",\"password\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"confirmPassword\"],[\"flush-element\"],[\"text\",\"Phone No.\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"type\",\"class\"],[[\"get\",[\"model\",\"phone\"]],\"phone\",\"text\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"gender\"],[\"flush-element\"],[\"text\",\"Gender\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"select\",[]],[\"static-attr\",\"class\",\"form-control\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"selectGender\"]],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"option\",[]],[\"static-attr\",\"value\",\"select\"],[\"flush-element\"],[\"text\",\"Select\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"option\",[]],[\"static-attr\",\"value\",\"male\"],[\"flush-element\"],[\"text\",\"Male\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"option\",[]],[\"static-attr\",\"value\",\"Female\"],[\"flush-element\"],[\"text\",\"Female\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group text-center\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Register\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn\"],[\"static-attr\",\"type\",\"button\"],[\"flush-element\"],[\"text\",\"Reset\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/registration.hbs" } });
});
define("jft-sale/templates/saleonjft", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hUQzOwyM", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"text-center text-info\"],[\"flush-element\"],[\"text\",\" || JFT Sale Page || \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\" Sales in JellyFish\\n    \"],[\"open-element\",\"market\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" ...\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-thumbs-up\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 \"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3 text-center text-info jumbotron\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\" Mobile Phone in All Category \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-arrow-right\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-primary\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\" Samsung On7 Pro \"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"₹ 4500 Only \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\"25%\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-success\"],[\"flush-element\"],[\"text\",\" off \"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-center badge buyNowSpan\"],[\"flush-element\"],[\"text\",\"\\n                    Buy Now\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-primary\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\" Toshiba Laptop C-640 \"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"₹ 31000 Only \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\"35%\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-success\"],[\"flush-element\"],[\"text\",\" off \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-center badge buyNowSpan\"],[\"flush-element\"],[\"text\",\"\\n                    Buy Now\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-primary\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Daskin Room Heater DSKN-A90 \"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"₹ 1500 Only \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\"29%\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-success\"],[\"flush-element\"],[\"text\",\" off \"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-center badge buyNowSpan\"],[\"flush-element\"],[\"text\",\"\\n                    Buy Now\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 \"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3 text-center text-info jumbotron\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\" Laptop/Desktop/PC\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-arrow-right\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-primary\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\" Samsung On7 Pro \"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"₹ 4500 Only \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\"25%\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-success\"],[\"flush-element\"],[\"text\",\" off \"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-center badge buyNowSpan\"],[\"flush-element\"],[\"text\",\"\\n                    Buy Now\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-primary\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\" Toshiba Laptop C-640 \"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"₹ 31000 Only \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\"35%\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-success\"],[\"flush-element\"],[\"text\",\" off \"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-center badge buyNowSpan\"],[\"flush-element\"],[\"text\",\"\\n                    Buy Now\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-primary\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Daskin Room Heater DSKN-A90\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"₹ 1500 Only \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\"29%\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-success\"],[\"flush-element\"],[\"text\",\" off \"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-center badge buyNowSpan\"],[\"flush-element\"],[\"text\",\"\\n                    Buy Now\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/saleonjft.hbs" } });
});
define("jft-sale/templates/shippingaddress", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Y/Rn1wXW", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\" This is add shipping address page \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"shipAddress\",[\"get\",[\"model\",\"address\"]]],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\"Add Shipping Address\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-danger\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"msg\"]]],null,1],[\"text\",\"            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"name\"],[\"flush-element\"],[\"text\",\"Name\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"address\",\"name\"]],\"name\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"houseNo\"],[\"flush-element\"],[\"text\",\"House no./Plot No\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"address\",\"houseNo\"]],\"houseNo\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"street\"],[\"flush-element\"],[\"text\",\"Street/Area/Landmark/Locality\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"address\",\"street\"]],\"street\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"city\"],[\"flush-element\"],[\"text\",\"City\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"address\",\"city\"]],\"city\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"state\"],[\"flush-element\"],[\"text\",\"State\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"address\",\"state\"]],\"state\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"pincode\"],[\"flush-element\"],[\"text\",\"Pincode\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"class\"],[[\"get\",[\"model\",\"address\",\"pincode\"]],\"pincode\",\"form-control\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"category\"],[\"flush-element\"],[\"text\",\"Address Type\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"select\",[]],[\"static-attr\",\"class\",\"form-control\"],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],\"chooseAddressType\"],[[\"value\"],[\"target.value\"]]],null],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"addressTypes\"]]],null,0],[\"text\",\"                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group text-center\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"button\"],[\"flush-element\"],[\"text\",\"Back\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Next\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                        \"],[\"open-element\",\"option\",[]],[\"dynamic-attr\",\"value\",[\"get\",[\"addressType\"]],null],[\"flush-element\"],[\"append\",[\"get\",[\"addressType\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"addressType\"]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"get\",[\"ms\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"ms\"]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/shippingaddress.hbs" } });
});
define("jft-sale/templates/summarypage", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Vhllz5j9", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"This is Summary Page \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity text-center\"],[\"flush-element\"],[\"text\",\" Order Summary\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity\"],[\"flush-element\"],[\"text\",\" Order:\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"orderProd\"]]],null,1],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"w3-wide w3-opacity\"],[\"flush-element\"],[\"text\",\" Address:\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"shipAddr\"]]],null,0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4 text-center\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"button\"],[\"flush-element\"],[\"text\",\"Back\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-info\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Proceed to Pay\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4 jumbotron\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"unknown\",[\"model\",\"shipAddr\",\"name\"]],false],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"catDiv pull-right glyphicon glyphicon-plus\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"shipAddr\",\"houseNo\"]],false],[\"text\",\", \"],[\"append\",[\"unknown\",[\"model\",\"shipAddr\",\"street\"]],false],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"shipAddr\",\"city\"]],false],[\"text\",\", \"],[\"append\",[\"unknown\",[\"model\",\"shipAddr\",\"state\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"shipAddr\",\"pincode\"]],false],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4 col-md-offset-4\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"orderProd\",\"attributes\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"i\",[]],[\"flush-element\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"(No. of Piecs - \"],[\"append\",[\"unknown\",[\"orderProd\",\"itemQantity\"]],false],[\"text\",\") \"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"catDiv pull-right glyphicon glyphicon-remove\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"removeOrder\",[\"get\",[\"orderProd\"]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"₹ \"],[\"append\",[\"unknown\",[\"orderProd\",\"attributes\",\"price\"]],false],[\"text\",\", \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"orderProd\",\"category\"]],false],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-warning\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"orderProd\",\"attributes\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"orderProd\"]}],\"hasPartials\":false}", "meta": { "moduleName": "jft-sale/templates/summarypage.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('jft-sale/config/environment', ['ember'], function(Ember) {
  var prefix = 'jft-sale';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("jft-sale/app")["default"].create({"name":"jft-sale","version":"0.0.0+0dc7d6bf"});
}

/* jshint ignore:end */
//# sourceMappingURL=jft-sale.map
