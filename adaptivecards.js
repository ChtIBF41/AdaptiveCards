(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AdaptiveCards"] = factory();
	else
		root["AdaptiveCards"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/adaptivecards.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/adaptivecards.ts":
/*!******************************!*\
  !*** ./src/adaptivecards.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./card-elements */ "./src/card-elements.ts"));
__export(__webpack_require__(/*! ./enums */ "./src/enums.ts"));
__export(__webpack_require__(/*! ./host-config */ "./src/host-config.ts"));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
exports.SizeAndUnit = utils_1.SizeAndUnit;
exports.getEnumValueOrDefault = utils_1.getEnumValueOrDefault;


/***/ }),

/***/ "./src/card-elements.ts":
/*!******************************!*\
  !*** ./src/card-elements.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var Utils = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var HostConfig = __webpack_require__(/*! ./host-config */ "./src/host-config.ts");
var TextFormatters = __webpack_require__(/*! ./text-formatters */ "./src/text-formatters.ts");
function invokeSetCollection(action, collection) {
    if (action) {
        // Closest emulation of "internal" in TypeScript.
        action["setCollection"](collection);
    }
}
function isActionAllowed(action, forbiddenActionTypes) {
    if (forbiddenActionTypes) {
        for (var i = 0; i < forbiddenActionTypes.length; i++) {
            if (action.getJsonTypeName() === forbiddenActionTypes[i]) {
                return false;
            }
        }
    }
    return true;
}
function generateUniqueId() {
    return "__ac-" + Utils.UUID.generate();
}
function createCardObjectInstance(parent, json, createInstanceCallback, createValidationErrorCallback, errors) {
    var result = null;
    if (json && typeof json === "object") {
        var tryToFallback = false;
        var typeName = json["type"];
        result = createInstanceCallback(typeName);
        if (!result) {
            tryToFallback = true;
            raiseParseError(createValidationErrorCallback(typeName), errors);
        }
        else {
            result.setParent(parent);
            result.parse(json);
            tryToFallback = result.shouldFallback();
        }
        if (tryToFallback) {
            var fallback = json["fallback"];
            if (!fallback) {
                parent.setShouldFallback(true);
            }
            if (typeof fallback === "string" && fallback.toLowerCase() === "drop") {
                result = null;
            }
            else if (typeof fallback === "object") {
                result = createCardObjectInstance(parent, fallback, createInstanceCallback, createValidationErrorCallback, errors);
            }
        }
    }
    return result;
}
function createActionInstance(parent, json, errors) {
    return createCardObjectInstance(parent, json, function (typeName) { return AdaptiveCard.actionTypeRegistry.createInstance(typeName); }, function (typeName) {
        return {
            error: Enums.ValidationError.UnknownActionType,
            message: "Unknown action type: " + typeName + ". Attempting to fall back."
        };
    }, errors);
}
exports.createActionInstance = createActionInstance;
function createElementInstance(parent, json, errors) {
    return createCardObjectInstance(parent, json, function (typeName) { return AdaptiveCard.elementTypeRegistry.createInstance(typeName); }, function (typeName) {
        return {
            error: Enums.ValidationError.UnknownElementType,
            message: "Unknown element type: " + typeName + ". Attempting to fall back."
        };
    }, errors);
}
exports.createElementInstance = createElementInstance;
var SpacingDefinition = /** @class */ (function () {
    function SpacingDefinition(top, right, bottom, left) {
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = 0; }
        if (bottom === void 0) { bottom = 0; }
        if (left === void 0) { left = 0; }
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
    return SpacingDefinition;
}());
exports.SpacingDefinition = SpacingDefinition;
var PaddingDefinition = /** @class */ (function () {
    function PaddingDefinition(top, right, bottom, left) {
        if (top === void 0) { top = Enums.Spacing.None; }
        if (right === void 0) { right = Enums.Spacing.None; }
        if (bottom === void 0) { bottom = Enums.Spacing.None; }
        if (left === void 0) { left = Enums.Spacing.None; }
        this.top = Enums.Spacing.None;
        this.right = Enums.Spacing.None;
        this.bottom = Enums.Spacing.None;
        this.left = Enums.Spacing.None;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
    PaddingDefinition.prototype.toSpacingDefinition = function (hostConfig) {
        return new SpacingDefinition(hostConfig.getEffectiveSpacing(this.top), hostConfig.getEffectiveSpacing(this.right), hostConfig.getEffectiveSpacing(this.bottom), hostConfig.getEffectiveSpacing(this.left));
    };
    return PaddingDefinition;
}());
exports.PaddingDefinition = PaddingDefinition;
var SizeAndUnit = /** @class */ (function () {
    function SizeAndUnit(physicalSize, unit) {
        this.physicalSize = physicalSize;
        this.unit = unit;
    }
    SizeAndUnit.parse = function (input) {
        var result = new SizeAndUnit(0, Enums.SizeUnit.Weight);
        var regExp = /^([0-9]+)(px|\*)?$/g;
        var matches = regExp.exec(input);
        if (matches && matches.length >= 2) {
            result.physicalSize = parseInt(matches[1]);
            if (matches.length == 3) {
                if (matches[2] == "px") {
                    result.unit = Enums.SizeUnit.Pixel;
                }
            }
            return result;
        }
        throw new Error("Invalid size: " + input);
    };
    return SizeAndUnit;
}());
exports.SizeAndUnit = SizeAndUnit;
var CardElement = /** @class */ (function () {
    function CardElement() {
        this._shouldFallback = false;
        this._lang = undefined;
        this._hostConfig = null;
        this._internalPadding = null;
        this._parent = null;
        this._renderedElement = null;
        this._separatorElement = null;
        this._isVisible = true;
        this._truncatedDueToOverflow = false;
        this._defaultRenderedElementDisplayMode = null;
        this._padding = null;
        this.requires = new HostConfig.HostCapabilities();
        this.horizontalAlignment = null;
        this.spacing = Enums.Spacing.Default;
        this.separator = false;
        this.height = "auto";
        this.customCssSelector = null;
    }
    CardElement.prototype.internalRenderSeparator = function () {
        return Utils.renderSeparation({
            spacing: this.hostConfig.getEffectiveSpacing(this.spacing),
            lineThickness: this.separator ? this.hostConfig.separator.lineThickness : null,
            lineColor: this.separator ? this.hostConfig.separator.lineColor : null
        }, this.separatorOrientation);
    };
    CardElement.prototype.updateRenderedElementVisibility = function () {
        if (this._renderedElement) {
            this._renderedElement.style.display = this._isVisible ? this._defaultRenderedElementDisplayMode : "none";
        }
        if (this._separatorElement) {
            if (this.parent && this.parent.isFirstElement(this)) {
                this._separatorElement.style.display = "none";
            }
            else {
                this._separatorElement.style.display = this._isVisible ? this._defaultRenderedElementDisplayMode : "none";
            }
        }
    };
    CardElement.prototype.hideElementDueToOverflow = function () {
        if (this._renderedElement && this._isVisible) {
            this._renderedElement.style.visibility = 'hidden';
            this._isVisible = false;
            raiseElementVisibilityChangedEvent(this, false);
        }
    };
    CardElement.prototype.showElementHiddenDueToOverflow = function () {
        if (this._renderedElement && !this._isVisible) {
            this._renderedElement.style.visibility = null;
            this._isVisible = true;
            raiseElementVisibilityChangedEvent(this, false);
        }
    };
    // Marked private to emulate internal access
    CardElement.prototype.handleOverflow = function (maxHeight) {
        if (this.isVisible || this.isHiddenDueToOverflow()) {
            var handled = this.truncateOverflow(maxHeight);
            // Even if we were unable to truncate the element to fit this time,
            // it still could have been previously truncated
            this._truncatedDueToOverflow = handled || this._truncatedDueToOverflow;
            if (!handled) {
                this.hideElementDueToOverflow();
            }
            else if (handled && !this._isVisible) {
                this.showElementHiddenDueToOverflow();
            }
        }
    };
    // Marked private to emulate internal access
    CardElement.prototype.resetOverflow = function () {
        var sizeChanged = false;
        if (this._truncatedDueToOverflow) {
            this.undoOverflowTruncation();
            this._truncatedDueToOverflow = false;
            sizeChanged = true;
        }
        if (this.isHiddenDueToOverflow) {
            this.showElementHiddenDueToOverflow();
        }
        return sizeChanged;
    };
    CardElement.prototype.createPlaceholderElement = function () {
        var element = document.createElement("div");
        element.style.border = "1px dashed #DDDDDD";
        element.style.padding = "4px";
        element.style.minHeight = "32px";
        element.style.fontSize = "10px";
        element.innerText = "Empty " + this.getJsonTypeName();
        return element;
    };
    CardElement.prototype.internalGetNonZeroPadding = function (padding, processTop, processRight, processBottom, processLeft) {
        if (processTop === void 0) { processTop = true; }
        if (processRight === void 0) { processRight = true; }
        if (processBottom === void 0) { processBottom = true; }
        if (processLeft === void 0) { processLeft = true; }
        if (processTop) {
            if (padding.top == Enums.Spacing.None) {
                padding.top = this.internalPadding.top;
            }
        }
        if (processRight) {
            if (padding.right == Enums.Spacing.None) {
                padding.right = this.internalPadding.right;
            }
        }
        if (processBottom) {
            if (padding.bottom == Enums.Spacing.None) {
                padding.bottom = this.internalPadding.bottom;
            }
        }
        if (processLeft) {
            if (padding.left == Enums.Spacing.None) {
                padding.left = this.internalPadding.left;
            }
        }
        if (this.parent) {
            this.parent.internalGetNonZeroPadding(padding, processTop && this.isAtTheVeryTop(), processRight && this.isAtTheVeryRight(), processBottom && this.isAtTheVeryBottom(), processLeft && this.isAtTheVeryLeft());
        }
    };
    CardElement.prototype.adjustRenderedElementSize = function (renderedElement) {
        if (this.height === "auto") {
            renderedElement.style.flex = "0 0 auto";
        }
        else {
            renderedElement.style.flex = "1 1 auto";
        }
    };
    /*
     * Called when this element overflows the bottom of the card.
     * maxHeight will be the amount of space still available on the card (0 if
     * the element is fully off the card).
     */
    CardElement.prototype.truncateOverflow = function (maxHeight) {
        // Child implementations should return true if the element handled
        // the truncation request such that its content fits within maxHeight,
        // false if the element should fall back to being hidden
        return false;
    };
    /*
     * This should reverse any changes performed in truncateOverflow().
     */
    CardElement.prototype.undoOverflowTruncation = function () { };
    CardElement.prototype.isDesignMode = function () {
        var rootElement = this.getRootElement();
        return rootElement instanceof AdaptiveCard && rootElement.designMode;
    };
    Object.defineProperty(CardElement.prototype, "useDefaultSizing", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "allowCustomPadding", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "defaultPadding", {
        get: function () {
            return new PaddingDefinition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "internalPadding", {
        get: function () {
            if (this._padding) {
                return this._padding;
            }
            else {
                return (this._internalPadding && this.allowCustomPadding) ? this._internalPadding : this.defaultPadding;
            }
        },
        set: function (value) {
            this._internalPadding = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "separatorOrientation", {
        get: function () {
            return Enums.Orientation.Horizontal;
        },
        enumerable: true,
        configurable: true
    });
    CardElement.prototype.getPadding = function () {
        return this._padding;
    };
    CardElement.prototype.setPadding = function (value) {
        this._padding = value;
        if (this._padding) {
            AdaptiveCard.useAutomaticContainerBleeding = false;
        }
    };
    CardElement.prototype.toJSON = function () {
        var result = {};
        Utils.setProperty(result, "type", this.getJsonTypeName());
        Utils.setProperty(result, "id", this.id);
        if (this.horizontalAlignment !== null) {
            Utils.setEnumProperty(Enums.HorizontalAlignment, result, "horizontalAlignment", this.horizontalAlignment);
        }
        Utils.setEnumProperty(Enums.Spacing, result, "spacing", this.spacing, Enums.Spacing.Default);
        Utils.setProperty(result, "separator", this.separator, false);
        Utils.setProperty(result, "height", this.height, "auto");
        return result;
    };
    CardElement.prototype.setParent = function (value) {
        this._parent = value;
    };
    CardElement.prototype.getNonZeroPadding = function () {
        var padding = new PaddingDefinition();
        this.internalGetNonZeroPadding(padding);
        return padding;
    };
    CardElement.prototype.getForbiddenElementTypes = function () {
        return null;
    };
    CardElement.prototype.getForbiddenActionTypes = function () {
        return null;
    };
    CardElement.prototype.parse = function (json, errors) {
        raiseParseElementEvent(this, json, errors);
        this.requires.parse(json["requires"], errors);
        this.id = json["id"];
        this.speak = json["speak"];
        this.horizontalAlignment = Utils.getEnumValueOrDefault(Enums.HorizontalAlignment, json["horizontalAlignment"], null);
        this.spacing = Utils.getEnumValueOrDefault(Enums.Spacing, json["spacing"], Enums.Spacing.Default);
        this.separator = json["separator"];
        var jsonSeparation = json["separation"];
        if (jsonSeparation !== undefined) {
            if (jsonSeparation === "none") {
                this.spacing = Enums.Spacing.None;
                this.separator = false;
            }
            else if (jsonSeparation === "strong") {
                this.spacing = Enums.Spacing.Large;
                this.separator = true;
            }
            else if (jsonSeparation === "default") {
                this.spacing = Enums.Spacing.Default;
                this.separator = false;
            }
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The \"separation\" property is deprecated and will be removed. Use the \"spacing\" and \"separator\" properties instead."
            }, errors);
        }
        var jsonHeight = json["height"];
        if (jsonHeight === "auto" || jsonHeight === "stretch") {
            this.height = jsonHeight;
        }
    };
    CardElement.prototype.getActionCount = function () {
        return 0;
    };
    CardElement.prototype.getActionAt = function (index) {
        throw new Error("Index out of range.");
    };
    CardElement.prototype.validate = function () {
        return [];
    };
    CardElement.prototype.remove = function () {
        if (this.parent && this.parent instanceof CardElementContainer) {
            return this.parent.removeItem(this);
        }
        return false;
    };
    CardElement.prototype.render = function () {
        this._renderedElement = this.internalRender();
        this._separatorElement = this.internalRenderSeparator();
        if (this._renderedElement) {
            if (this.customCssSelector) {
                this._renderedElement.classList.add(this.customCssSelector);
            }
            this._renderedElement.style.boxSizing = "border-box";
            this._defaultRenderedElementDisplayMode = this._renderedElement.style.display;
            this.adjustRenderedElementSize(this._renderedElement);
            this.updateLayout(false);
        }
        else if (this.isDesignMode()) {
            this._renderedElement = this.createPlaceholderElement();
        }
        return this._renderedElement;
    };
    CardElement.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        this.updateRenderedElementVisibility();
    };
    CardElement.prototype.indexOf = function (cardElement) {
        return -1;
    };
    CardElement.prototype.isRendered = function () {
        return this._renderedElement && this._renderedElement.offsetHeight > 0;
    };
    CardElement.prototype.isAtTheVeryTop = function () {
        return this.parent ? this.parent.isFirstElement(this) && this.parent.isAtTheVeryTop() : true;
    };
    CardElement.prototype.isFirstElement = function (element) {
        return true;
    };
    CardElement.prototype.isAtTheVeryBottom = function () {
        return this.parent ? this.parent.isLastElement(this) && this.parent.isAtTheVeryBottom() : true;
    };
    CardElement.prototype.isLastElement = function (element) {
        return true;
    };
    CardElement.prototype.isAtTheVeryLeft = function () {
        return this.parent ? this.parent.isLeftMostElement(this) && this.parent.isAtTheVeryLeft() : true;
    };
    CardElement.prototype.isBleeding = function () {
        return false;
    };
    CardElement.prototype.isLeftMostElement = function (element) {
        return true;
    };
    CardElement.prototype.isAtTheVeryRight = function () {
        return this.parent ? this.parent.isRightMostElement(this) && this.parent.isAtTheVeryRight() : true;
    };
    CardElement.prototype.isRightMostElement = function (element) {
        return true;
    };
    CardElement.prototype.isHiddenDueToOverflow = function () {
        return this._renderedElement && this._renderedElement.style.visibility == 'hidden';
    };
    CardElement.prototype.canContentBleed = function () {
        return this.parent ? this.parent.canContentBleed() : true;
    };
    CardElement.prototype.getRootElement = function () {
        var rootElement = this;
        while (rootElement.parent) {
            rootElement = rootElement.parent;
        }
        return rootElement;
    };
    CardElement.prototype.getParentContainer = function () {
        var currentElement = this.parent;
        while (currentElement) {
            if (currentElement instanceof Container) {
                return currentElement;
            }
            currentElement = currentElement.parent;
        }
        return null;
    };
    CardElement.prototype.getAllInputs = function () {
        return [];
    };
    CardElement.prototype.getResourceInformation = function () {
        return [];
    };
    CardElement.prototype.getElementById = function (id) {
        return this.id === id ? this : null;
    };
    CardElement.prototype.getActionById = function (id) {
        return null;
    };
    CardElement.prototype.shouldFallback = function () {
        return this._shouldFallback || !this.requires.areAllMet(this.hostConfig.hostCapabilities);
    };
    CardElement.prototype.setShouldFallback = function (value) {
        this._shouldFallback = value;
    };
    Object.defineProperty(CardElement.prototype, "lang", {
        get: function () {
            if (this._lang) {
                return this._lang;
            }
            else {
                if (this.parent) {
                    return this.parent.lang;
                }
                else {
                    return undefined;
                }
            }
        },
        set: function (value) {
            if (value && value != "") {
                var regEx = /^[a-z]{2,3}$/ig;
                var matches = regEx.exec(value);
                if (!matches) {
                    throw new Error("Invalid language identifier: " + value);
                }
            }
            this._lang = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "hostConfig", {
        get: function () {
            if (this._hostConfig) {
                return this._hostConfig;
            }
            else {
                if (this.parent) {
                    return this.parent.hostConfig;
                }
                else {
                    return defaultHostConfig;
                }
            }
        },
        set: function (value) {
            this._hostConfig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "index", {
        get: function () {
            if (this.parent) {
                return this.parent.indexOf(this);
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isInteractive", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isStandalone", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        set: function (value) {
            // If the element is going to be hidden, reset any changes that were due
            // to overflow truncation (this ensures that if the element is later
            // un-hidden it has the right content)
            if (AdaptiveCard.useAdvancedCardBottomTruncation && !value) {
                this.undoOverflowTruncation();
            }
            if (this._isVisible != value) {
                this._isVisible = value;
                this.updateRenderedElementVisibility();
                if (this._renderedElement) {
                    raiseElementVisibilityChangedEvent(this);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "hasVisibleSeparator", {
        get: function () {
            var parentContainer = this.getParentContainer();
            if (parentContainer) {
                return this.separatorElement && !parentContainer.isFirstElement(this);
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "renderedElement", {
        get: function () {
            return this._renderedElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "separatorElement", {
        get: function () {
            return this._separatorElement;
        },
        enumerable: true,
        configurable: true
    });
    return CardElement;
}());
exports.CardElement = CardElement;
var CardElementContainer = /** @class */ (function (_super) {
    __extends(CardElementContainer, _super);
    function CardElementContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CardElementContainer;
}(CardElement));
exports.CardElementContainer = CardElementContainer;
var HtmlBlock = /** @class */ (function (_super) {
    __extends(HtmlBlock, _super);
    function HtmlBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._processedText = null;
        return _this;
    }
    HtmlBlock.prototype.restoreOriginalContent = function () {
        var maxHeight = this.maxLines
            ? (this._computedLineHeight * this.maxLines) + 'px'
            : null;
        this.renderedElement.style.maxHeight = maxHeight;
        this.renderedElement.innerHTML = this._originalInnerHtml;
    };
    HtmlBlock.prototype.truncateIfSupported = function (maxHeight) {
        var children = this.renderedElement.children;
        var isTextOnly = !children.length;
        var truncationSupported = isTextOnly || children.length == 1
            && children[0].tagName.toLowerCase() == 'p';
        if (truncationSupported) {
            var element = isTextOnly
                ? this.renderedElement
                : children[0];
            Utils.truncate(element, maxHeight, this._computedLineHeight);
            return true;
        }
        return false;
    };
    HtmlBlock.prototype.getRenderedDomElementType = function () {
        return "span";
    };
    HtmlBlock.prototype.internalRender = function () {
        this._processedText = null;
        if (!Utils.isNullOrEmpty(this.html)) {
            var hostConfig = this.hostConfig;
            var element = document.createElement(this.getRenderedDomElementType());
            this.applyStylesTo(element);
            if (!this._processedText) {
                var formattedText = TextFormatters.formatText(this.lang, this.html);
                this._processedText = formattedText;
            }
            element.innerHTML = this._processedText;
            return element;
        }
        else {
            return null;
        }
    };
    HtmlBlock.prototype.truncateOverflow = function (maxHeight) {
        if (maxHeight >= this._computedLineHeight) {
            return this.truncateIfSupported(maxHeight);
        }
        return false;
    };
    HtmlBlock.prototype.undoOverflowTruncation = function () {
        this.restoreOriginalContent();
        if (AdaptiveCard.useAdvancedHtmlBlockTruncation && this.maxLines) {
            var maxHeight = this._computedLineHeight * this.maxLines;
            this.truncateIfSupported(maxHeight);
        }
    };
    HtmlBlock.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "html", this.html);
        return result;
    };
    HtmlBlock.prototype.applyStylesTo = function (targetElement) {
    };
    HtmlBlock.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.html = json["html"];
    };
    HtmlBlock.prototype.getJsonTypeName = function () {
        return "HtmlBlock";
    };
    HtmlBlock.prototype.renderSpeech = function () {
        if (this.speak != null)
            return this.speak + '\n';
        if (this.html)
            return '<s>' + this.html + '</s>\n';
        return null;
    };
    HtmlBlock.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = false; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (AdaptiveCard.useAdvancedHtmlBlockTruncation && this.maxLines && this.isRendered()) {
            // Reset the element's innerHTML in case the available room for
            // content has increased
            this.restoreOriginalContent();
            var maxHeight = this._computedLineHeight * this.maxLines;
            this.truncateIfSupported(maxHeight);
        }
    };
    Object.defineProperty(HtmlBlock.prototype, "html", {
        get: function () {
            return this._html;
        },
        set: function (value) {
            if (this._html != value) {
                this._html = value;
                this._processedText = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return HtmlBlock;
}(CardElement));
exports.HtmlBlock = HtmlBlock;
var TextBlock = /** @class */ (function (_super) {
    __extends(TextBlock, _super);
    function TextBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._processedText = null;
        _this._treatAsPlainText = true;
        _this._selectAction = null;
        _this._effectiveStyleDefinition = null;
        _this.size = Enums.TextSize.Default;
        _this.weight = Enums.TextWeight.Default;
        _this.color = Enums.TextColor.Default;
        _this.isSubtle = false;
        _this.wrap = false;
        _this.useMarkdown = true;
        return _this;
    }
    TextBlock.prototype.restoreOriginalContent = function () {
        var maxHeight = this.maxLines
            ? (this._computedLineHeight * this.maxLines) + 'px'
            : null;
        this.renderedElement.style.maxHeight = maxHeight;
        this.renderedElement.innerHTML = this._originalInnerHtml;
    };
    TextBlock.prototype.truncateIfSupported = function (maxHeight) {
        // For now, only truncate TextBlocks that contain just a single
        // paragraph -- since the maxLines calculation doesn't take into
        // account Markdown lists
        var children = this.renderedElement.children;
        var isTextOnly = !children.length;
        var truncationSupported = isTextOnly || children.length == 1
            && children[0].tagName.toLowerCase() == 'p';
        if (truncationSupported) {
            var element = isTextOnly
                ? this.renderedElement
                : children[0];
            Utils.truncate(element, maxHeight, this._computedLineHeight);
            return true;
        }
        return false;
    };
    TextBlock.prototype.getEffectiveStyleDefinition = function () {
        if (!this._effectiveStyleDefinition) {
            this._effectiveStyleDefinition = this.hostConfig.containerStyles.default;
            var parentContainer = this.getParentContainer();
            while (parentContainer) {
                if (parentContainer.style) {
                    this._effectiveStyleDefinition = this.hostConfig.containerStyles.getStyleByName(parentContainer.style);
                    break;
                }
                parentContainer = parentContainer.getParentContainer();
            }
        }
        return this._effectiveStyleDefinition;
    };
    TextBlock.prototype.getRenderedDomElementType = function () {
        return "div";
    };
    TextBlock.prototype.internalRender = function () {
        var _this = this;
        this._effectiveStyleDefinition = null;
        this._processedText = null;
        if (!Utils.isNullOrEmpty(this.text)) {
            var hostConfig = this.hostConfig;
            var element = document.createElement(this.getRenderedDomElementType());
            element.classList.add(hostConfig.makeCssClassName("ac-textBlock"));
            element.style.overflow = "hidden";
            this.applyStylesTo(element);
            if (this.selectAction) {
                element.onclick = function (e) {
                    _this.selectAction.execute();
                    e.cancelBubble = true;
                };
            }
            if (!this._processedText) {
                this._treatAsPlainText = true;
                var formattedText = TextFormatters.formatText(this.lang, this.text);
                if (this.useMarkdown) {
                    if (AdaptiveCard.allowMarkForTextHighlighting) {
                        formattedText = formattedText.replace(/<mark>/g, "===").replace(/<\/mark>/g, "/==");
                    }
                    var markdownProcessingResult = AdaptiveCard.applyMarkdown(formattedText);
                    if (markdownProcessingResult.didProcess && markdownProcessingResult.outputHtml) {
                        this._processedText = markdownProcessingResult.outputHtml;
                        this._treatAsPlainText = false;
                        // Only process <mark> tag if markdown processing was applied because
                        // markdown processing is also responsible for sanitizing the input string
                        if (AdaptiveCard.allowMarkForTextHighlighting) {
                            var markStyle = "";
                            var effectiveStyle = this.getEffectiveStyleDefinition();
                            if (effectiveStyle.highlightBackgroundColor) {
                                markStyle += "background-color: " + effectiveStyle.highlightBackgroundColor + ";";
                            }
                            if (effectiveStyle.highlightForegroundColor) {
                                markStyle += "color: " + effectiveStyle.highlightForegroundColor + ";";
                            }
                            if (!Utils.isNullOrEmpty(markStyle)) {
                                markStyle = 'style="' + markStyle + '"';
                            }
                            this._processedText = this._processedText.replace(/===/g, "<mark " + markStyle + ">").replace(/\/==/g, "</mark>");
                        }
                    }
                    else {
                        this._processedText = formattedText;
                        this._treatAsPlainText = true;
                    }
                }
                else {
                    this._processedText = formattedText;
                    this._treatAsPlainText = true;
                }
            }
            if (this._treatAsPlainText) {
                element.innerText = this._processedText;
            }
            else {
                element.innerHTML = this._processedText;
            }
            if (element.firstElementChild instanceof HTMLElement) {
                var firstElementChild = element.firstElementChild;
                firstElementChild.style.marginTop = "0px";
                firstElementChild.style.width = "100%";
                if (!this.wrap) {
                    firstElementChild.style.overflow = "hidden";
                    firstElementChild.style.textOverflow = "ellipsis";
                }
            }
            if (element.lastElementChild instanceof HTMLElement) {
                element.lastElementChild.style.marginBottom = "0px";
            }
            var anchors = element.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                var anchor = anchors[i];
                anchor.classList.add(this.hostConfig.makeCssClassName("ac-anchor"));
                anchor.target = "_blank";
                anchor.onclick = function (e) {
                    if (raiseAnchorClickedEvent(_this, e.target)) {
                        e.preventDefault();
                    }
                };
            }
            if (this.wrap) {
                element.style.wordWrap = "break-word";
                if (this.maxLines > 0) {
                    element.style.maxHeight = (this._computedLineHeight * this.maxLines) + "px";
                    element.style.overflow = "hidden";
                }
            }
            else {
                element.style.whiteSpace = "nowrap";
                element.style.textOverflow = "ellipsis";
            }
            if (AdaptiveCard.useAdvancedTextBlockTruncation || AdaptiveCard.useAdvancedCardBottomTruncation) {
                this._originalInnerHtml = element.innerHTML;
            }
            if (this.selectAction != null && hostConfig.supportsInteractivity) {
                element.tabIndex = 0;
                element.setAttribute("role", "button");
                element.setAttribute("aria-label", this.selectAction.title);
                element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
            }
            return element;
        }
        else {
            return null;
        }
    };
    TextBlock.prototype.truncateOverflow = function (maxHeight) {
        if (maxHeight >= this._computedLineHeight) {
            return this.truncateIfSupported(maxHeight);
        }
        return false;
    };
    TextBlock.prototype.undoOverflowTruncation = function () {
        this.restoreOriginalContent();
        if (AdaptiveCard.useAdvancedTextBlockTruncation && this.maxLines) {
            var maxHeight = this._computedLineHeight * this.maxLines;
            this.truncateIfSupported(maxHeight);
        }
    };
    TextBlock.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setEnumProperty(Enums.TextSize, result, "size", this.size, Enums.TextSize.Default);
        Utils.setEnumProperty(Enums.TextWeight, result, "weight", this.weight, Enums.TextWeight.Default);
        Utils.setEnumProperty(Enums.TextColor, result, "color", this.color, Enums.TextColor.Default);
        Utils.setProperty(result, "text", this.text);
        Utils.setProperty(result, "isSubtle", this.isSubtle, false);
        Utils.setProperty(result, "wrap", this.wrap, false);
        Utils.setProperty(result, "maxLines", this.maxLines, 0);
        return result;
    };
    TextBlock.prototype.applyStylesTo = function (targetElement) {
        if (this.hostConfig.fontFamily) {
            targetElement.style.fontFamily = this.hostConfig.fontFamily;
        }
        var parentContainer = this.getParentContainer();
        var isRtl = parentContainer ? parentContainer.isRtl() : false;
        targetElement.style.width = "99.9%";
        switch (this.horizontalAlignment) {
            case Enums.HorizontalAlignment.Center:
                targetElement.style.textAlign = "center";
                break;
            case Enums.HorizontalAlignment.Right:
                targetElement.style.textAlign = isRtl ? "left" : "right";
                break;
            default:
                targetElement.style.textAlign = isRtl ? "right" : "left";
                break;
        }
        var fontSize;
        switch (this.size) {
            case Enums.TextSize.Small:
                fontSize = this.hostConfig.fontSizes.small;
                break;
            case Enums.TextSize.Medium:
                fontSize = this.hostConfig.fontSizes.medium;
                break;
            case Enums.TextSize.Large:
                fontSize = this.hostConfig.fontSizes.large;
                break;
            case Enums.TextSize.ExtraLarge:
                fontSize = this.hostConfig.fontSizes.extraLarge;
                break;
            default:
                fontSize = this.hostConfig.fontSizes.default;
                break;
        }
        if (this.hostConfig.lineHeights) {
            switch (this.size) {
                case Enums.TextSize.Small:
                    this._computedLineHeight = this.hostConfig.lineHeights.small;
                    break;
                case Enums.TextSize.Medium:
                    this._computedLineHeight = this.hostConfig.lineHeights.medium;
                    break;
                case Enums.TextSize.Large:
                    this._computedLineHeight = this.hostConfig.lineHeights.large;
                    break;
                case Enums.TextSize.ExtraLarge:
                    this._computedLineHeight = this.hostConfig.lineHeights.extraLarge;
                    break;
                default:
                    this._computedLineHeight = this.hostConfig.lineHeights.default;
                    break;
            }
        }
        else {
            // Looks like 1.33 is the magic number to compute line-height
            // from font size.
            this._computedLineHeight = fontSize * 1.33;
        }
        targetElement.style.fontSize = fontSize + "px";
        targetElement.style.lineHeight = this._computedLineHeight + "px";
        var styleDefinition = this.getEffectiveStyleDefinition();
        var actualTextColor = this.color ? this.color : Enums.TextColor.Default;
        var colorDefinition;
        switch (actualTextColor) {
            case Enums.TextColor.Accent:
                colorDefinition = styleDefinition.foregroundColors.accent;
                break;
            case Enums.TextColor.Dark:
                colorDefinition = styleDefinition.foregroundColors.dark;
                break;
            case Enums.TextColor.Light:
                colorDefinition = styleDefinition.foregroundColors.light;
                break;
            case Enums.TextColor.Good:
                colorDefinition = styleDefinition.foregroundColors.good;
                break;
            case Enums.TextColor.Warning:
                colorDefinition = styleDefinition.foregroundColors.warning;
                break;
            case Enums.TextColor.Attention:
                colorDefinition = styleDefinition.foregroundColors.attention;
                break;
            default:
                colorDefinition = styleDefinition.foregroundColors.default;
                break;
        }
        targetElement.style.color = Utils.stringToCssColor(this.isSubtle ? colorDefinition.subtle : colorDefinition.default);
        var fontWeight;
        switch (this.weight) {
            case Enums.TextWeight.Lighter:
                fontWeight = this.hostConfig.fontWeights.lighter;
                break;
            case Enums.TextWeight.Bolder:
                fontWeight = this.hostConfig.fontWeights.bolder;
                break;
            default:
                fontWeight = this.hostConfig.fontWeights.default;
                break;
        }
        targetElement.style.fontWeight = fontWeight.toString();
    };
    TextBlock.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.text = json["text"];
        var sizeString = json["size"];
        if (sizeString && typeof sizeString === "string" && sizeString.toLowerCase() === "normal") {
            this.size = Enums.TextSize.Default;
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The TextBlock.size value \"normal\" is deprecated and will be removed. Use \"default\" instead."
            }, errors);
        }
        else {
            this.size = Utils.getEnumValueOrDefault(Enums.TextSize, sizeString, this.size);
        }
        var weightString = json["weight"];
        if (weightString && typeof weightString === "string" && weightString.toLowerCase() === "normal") {
            this.weight = Enums.TextWeight.Default;
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The TextBlock.weight value \"normal\" is deprecated and will be removed. Use \"default\" instead."
            }, errors);
        }
        else {
            this.weight = Utils.getEnumValueOrDefault(Enums.TextWeight, weightString, this.weight);
        }
        this.color = Utils.getEnumValueOrDefault(Enums.TextColor, json["color"], this.color);
        this.isSubtle = json["isSubtle"];
        this.wrap = json["wrap"] === undefined ? false : json["wrap"];
        if (typeof json["maxLines"] === "number") {
            this.maxLines = json["maxLines"];
        }
    };
    TextBlock.prototype.getJsonTypeName = function () {
        return "TextBlock";
    };
    TextBlock.prototype.renderSpeech = function () {
        if (this.speak != null)
            return this.speak + '\n';
        if (this.text)
            return '<s>' + this.text + '</s>\n';
        return null;
    };
    TextBlock.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = false; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (AdaptiveCard.useAdvancedTextBlockTruncation && this.maxLines && this.isRendered()) {
            // Reset the element's innerHTML in case the available room for
            // content has increased
            this.restoreOriginalContent();
            var maxHeight = this._computedLineHeight * this.maxLines;
            this.truncateIfSupported(maxHeight);
        }
    };
    Object.defineProperty(TextBlock.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            if (this._text != value) {
                this._text = value;
                this._processedText = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBlock.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
            if (this._selectAction) {
                this._selectAction.setParent(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    return TextBlock;
}(CardElement));
exports.TextBlock = TextBlock;
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.getRenderedDomElementType = function () {
        return "label";
    };
    Label.prototype.internalRender = function () {
        var renderedElement = _super.prototype.internalRender.call(this);
        if (!Utils.isNullOrEmpty(this.forElementId)) {
            renderedElement.htmlFor = this.forElementId;
        }
        return renderedElement;
    };
    return Label;
}(TextBlock));
var Fact = /** @class */ (function () {
    function Fact(name, value) {
        if (name === void 0) { name = undefined; }
        if (value === void 0) { value = undefined; }
        this.name = name;
        this.value = value;
    }
    Fact.prototype.toJSON = function () {
        return { title: this.name, value: this.value };
    };
    Fact.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak + '\n';
        }
        return '<s>' + this.name + ' ' + this.value + '</s>\n';
    };
    return Fact;
}());
exports.Fact = Fact;
var FactSet = /** @class */ (function (_super) {
    __extends(FactSet, _super);
    function FactSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facts = [];
        return _this;
    }
    Object.defineProperty(FactSet.prototype, "useDefaultSizing", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    FactSet.prototype.internalRender = function () {
        var element = null;
        var hostConfig = this.hostConfig;
        if (this.facts.length > 0) {
            element = document.createElement("table");
            element.style.borderWidth = "0px";
            element.style.borderSpacing = "0px";
            element.style.borderStyle = "none";
            element.style.borderCollapse = "collapse";
            element.style.display = "block";
            element.style.overflow = "hidden";
            element.classList.add(hostConfig.makeCssClassName("ac-factset"));
            for (var i = 0; i < this.facts.length; i++) {
                var trElement = document.createElement("tr");
                if (i > 0) {
                    trElement.style.marginTop = this.hostConfig.factSet.spacing + "px";
                }
                // Title column
                var tdElement = document.createElement("td");
                tdElement.style.padding = "0";
                tdElement.classList.add(hostConfig.makeCssClassName("ac-fact-title"));
                if (this.hostConfig.factSet.title.maxWidth) {
                    tdElement.style.maxWidth = this.hostConfig.factSet.title.maxWidth + "px";
                }
                tdElement.style.verticalAlign = "top";
                var textBlock = new TextBlock();
                textBlock.setParent(this);
                textBlock.text = Utils.isNullOrEmpty(this.facts[i].name) ? "Title" : this.facts[i].name;
                textBlock.size = this.hostConfig.factSet.title.size;
                textBlock.color = this.hostConfig.factSet.title.color;
                textBlock.isSubtle = this.hostConfig.factSet.title.isSubtle;
                textBlock.weight = this.hostConfig.factSet.title.weight;
                textBlock.wrap = this.hostConfig.factSet.title.wrap;
                textBlock.spacing = Enums.Spacing.None;
                Utils.appendChild(tdElement, textBlock.render());
                Utils.appendChild(trElement, tdElement);
                // Spacer column
                tdElement = document.createElement("td");
                tdElement.style.width = "10px";
                Utils.appendChild(trElement, tdElement);
                // Value column
                tdElement = document.createElement("td");
                tdElement.style.verticalAlign = "top";
                tdElement.classList.add(hostConfig.makeCssClassName("ac-fact-value"));
                textBlock = new TextBlock();
                textBlock.setParent(this);
                textBlock.text = Utils.isNullOrEmpty(this.facts[i].value) ? "Value" : this.facts[i].value;
                textBlock.size = this.hostConfig.factSet.value.size;
                textBlock.color = this.hostConfig.factSet.value.color;
                textBlock.isSubtle = this.hostConfig.factSet.value.isSubtle;
                textBlock.weight = this.hostConfig.factSet.value.weight;
                textBlock.wrap = this.hostConfig.factSet.value.wrap;
                textBlock.spacing = Enums.Spacing.None;
                Utils.appendChild(tdElement, textBlock.render());
                Utils.appendChild(trElement, tdElement);
                Utils.appendChild(element, trElement);
            }
        }
        return element;
    };
    FactSet.prototype.getJsonTypeName = function () {
        return "FactSet";
    };
    FactSet.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        var facts = [];
        for (var _i = 0, _a = this.facts; _i < _a.length; _i++) {
            var fact = _a[_i];
            facts.push(fact.toJSON());
        }
        Utils.setProperty(result, "facts", facts);
        return result;
    };
    FactSet.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.facts = [];
        if (json["facts"] != null) {
            var jsonFacts = json["facts"];
            this.facts = [];
            for (var i = 0; i < jsonFacts.length; i++) {
                var fact = new Fact();
                fact.name = jsonFacts[i]["title"];
                fact.value = jsonFacts[i]["value"];
                fact.speak = jsonFacts[i]["speak"];
                this.facts.push(fact);
            }
        }
    };
    FactSet.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak + '\n';
        }
        // render each fact
        var speak = null;
        if (this.facts.length > 0) {
            speak = '';
            for (var i = 0; i < this.facts.length; i++) {
                var speech = this.facts[i].renderSpeech();
                if (speech) {
                    speak += speech;
                }
            }
        }
        return '<p>' + speak + '\n</p>\n';
    };
    return FactSet;
}(CardElement));
exports.FactSet = FactSet;
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = Enums.ImageStyle.Default;
        _this.size = Enums.Size.Auto;
        _this.pixelWidth = null;
        _this.pixelHeight = null;
        _this.altText = "";
        return _this;
    }
    Image.prototype.parseDimension = function (name, value, errors) {
        if (value) {
            if (typeof value === "string") {
                try {
                    var size = Utils.SizeAndUnit.parse(value);
                    if (size.unit == Enums.SizeUnit.Pixel) {
                        return size.physicalSize;
                    }
                }
                catch (_a) {
                    // Ignore error
                }
            }
            raiseParseError({
                error: Enums.ValidationError.InvalidPropertyValue,
                message: "Invalid image " + name + ": " + value
            }, errors);
        }
        return 0;
    };
    Image.prototype.applySize = function (element) {
        if (this.pixelWidth || this.pixelHeight) {
            if (this.pixelWidth) {
                element.style.width = this.pixelWidth + "px";
            }
            if (this.pixelHeight) {
                element.style.height = this.pixelHeight + "px";
            }
        }
        else {
            switch (this.size) {
                case Enums.Size.Stretch:
                    element.style.width = "100%";
                    break;
                case Enums.Size.Auto:
                    element.style.maxWidth = "100%";
                    break;
                case Enums.Size.Small:
                    element.style.width = this.hostConfig.imageSizes.small + "px";
                    break;
                case Enums.Size.Large:
                    element.style.width = this.hostConfig.imageSizes.large + "px";
                    break;
                case Enums.Size.Medium:
                    element.style.width = this.hostConfig.imageSizes.medium + "px";
                    break;
            }
        }
    };
    Object.defineProperty(Image.prototype, "useDefaultSizing", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype.internalRender = function () {
        var _this = this;
        var element = null;
        if (!Utils.isNullOrEmpty(this.url)) {
            element = document.createElement("div");
            element.style.width = "99.9%";
            element.style.display = "inline-flex";
            element.style.alignItems = "flex-start";
            element.onkeypress = function (e) {
                if (_this.selectAction) {
                    if (e.keyCode == 13 || e.keyCode == 32) { // enter or space pressed
                        _this.selectAction.execute();
                    }
                }
            };
            element.onclick = function (e) {
                if (_this.selectAction) {
                    _this.selectAction.execute();
                    e.cancelBubble = true;
                }
            };
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.justifyContent = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.justifyContent = "flex-end";
                    break;
                case Enums.HorizontalAlignment.IconLeft:
                    element.classList.add("image-horizontalalignment-iconleft");
                    break;
                case Enums.HorizontalAlignment.IconRight:
                    element.classList.add("image-horizontalalignment-iconright");
                    break;
                default:
                    element.style.justifyContent = "flex-start";
                    element.style.width = "";
                    break;
            }
            // Cache hostConfig to avoid walking the parent hierarchy multiple times
            var hostConfig = this.hostConfig;
            var imageElement = document.createElement("img");
            imageElement.onload = function (e) {
                raiseImageLoadedEvent(_this);
            };
            imageElement.onerror = function (e) {
                var card = _this.getRootElement();
                _this.renderedElement.innerHTML = "";
                if (card && card.designMode) {
                    var errorElement = document.createElement("div");
                    errorElement.style.display = "flex";
                    errorElement.style.alignItems = "center";
                    errorElement.style.justifyContent = "center";
                    errorElement.style.backgroundColor = "#EEEEEE";
                    errorElement.style.color = "black";
                    errorElement.innerText = ":-(";
                    errorElement.style.padding = "10px";
                    _this.applySize(errorElement);
                    _this.renderedElement.appendChild(errorElement);
                }
                raiseImageLoadedEvent(_this);
            };
            imageElement.style.maxHeight = "100%";
            imageElement.style.minWidth = "0";
            imageElement.classList.add(hostConfig.makeCssClassName("ac-image"));
            if (this.selectAction != null && hostConfig.supportsInteractivity) {
                imageElement.tabIndex = 0;
                imageElement.setAttribute("role", "button");
                imageElement.setAttribute("aria-label", this.selectAction.title);
                imageElement.classList.add(hostConfig.makeCssClassName("ac-selectable"));
            }
            this.applySize(imageElement);
            if (this.style === Enums.ImageStyle.Person) {
                imageElement.style.borderRadius = "50%";
                imageElement.style.backgroundPosition = "50% 50%";
                imageElement.style.backgroundRepeat = "no-repeat";
            }
            if (this.style === Enums.ImageStyle.Emotion) {
                imageElement.classList.add("image-style-emotion");
            }
            if (!Utils.isNullOrEmpty(this.backgroundColor)) {
                imageElement.style.backgroundColor = Utils.stringToCssColor(this.backgroundColor);
            }
            imageElement.src = this.url;
            imageElement.alt = this.altText;
            element.appendChild(imageElement);
        }
        return element;
    };
    Image.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        if (this._selectAction) {
            Utils.setProperty(result, "selectAction", this._selectAction.toJSON());
        }
        Utils.setEnumProperty(Enums.ImageStyle, result, "style", this.style, Enums.ImageStyle.Default);
        Utils.setProperty(result, "backgroundColor", this.backgroundColor);
        Utils.setProperty(result, "url", this.url);
        Utils.setEnumProperty(Enums.Size, result, "size", this.size, Enums.Size.Auto);
        if (this.pixelWidth) {
            Utils.setProperty(result, "width", this.pixelWidth + "px");
        }
        if (this.pixelHeight) {
            Utils.setProperty(result, "height", this.pixelHeight + "px");
        }
        Utils.setProperty(result, "altText", this.altText);
        return result;
    };
    Image.prototype.getJsonTypeName = function () {
        return "Image";
    };
    Image.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result && this.selectAction) {
            result = this.selectAction.getActionById(id);
        }
        return result;
    };
    Image.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.url = json["url"];
        this.backgroundColor = json["backgroundColor"];
        var styleString = json["style"];
        if (styleString && typeof styleString === "string" && styleString.toLowerCase() === "normal") {
            this.style = Enums.ImageStyle.Default;
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The Image.style value \"normal\" is deprecated and will be removed. Use \"default\" instead."
            }, errors);
        }
        else {
            this.style = Utils.getEnumValueOrDefault(Enums.ImageStyle, styleString, this.style);
        }
        this.size = Utils.getEnumValueOrDefault(Enums.Size, json["size"], this.size);
        this.altText = json["altText"];
        // pixelWidth and pixelHeight are only parsed for backwards compatibility.
        // Payloads should use the width and height proerties instead.
        if (json["pixelWidth"] && typeof json["pixelWidth"] === "number") {
            this.pixelWidth = json["pixelWidth"];
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The pixelWidth property is deprecated and will be removed. Use the width property instead."
            }, errors);
        }
        if (json["pixelHeight"] && typeof json["pixelHeight"] === "number") {
            this.pixelHeight = json["pixelHeight"];
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The pixelHeight property is deprecated and will be removed. Use the height property instead."
            }, errors);
        }
        var size = this.parseDimension("width", json["width"], errors);
        if (size > 0) {
            this.pixelWidth = size;
        }
        size = this.parseDimension("height", json["height"], errors);
        if (size > 0) {
            this.pixelHeight = size;
        }
        this.selectAction = createActionInstance(this, json["selectAction"], errors);
    };
    Image.prototype.getResourceInformation = function () {
        if (!Utils.isNullOrEmpty(this.url)) {
            return [{ url: this.url, mimeType: "image" }];
        }
        else {
            return [];
        }
    };
    Image.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak + '\n';
        }
        return null;
    };
    Object.defineProperty(Image.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
            if (this._selectAction) {
                this._selectAction.setParent(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Image;
}(CardElement));
exports.Image = Image;
var ImageSet = /** @class */ (function (_super) {
    __extends(ImageSet, _super);
    function ImageSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._images = [];
        _this.imageSize = Enums.Size.Medium;
        return _this;
    }
    ImageSet.prototype.internalRender = function () {
        var element = null;
        if (this._images.length > 0) {
            element = document.createElement("div");
            element.style.display = "flex";
            element.style.flexWrap = "wrap";
            element.style.width = "99.9%";
            for (var i = 0; i < this._images.length; i++) {
                this._images[i].size = this.imageSize;
                var renderedImage = this._images[i].render();
                renderedImage.style.display = "inline-flex";
                renderedImage.style.margin = "0px";
                renderedImage.style.marginRight = "10px";
                renderedImage.style.maxHeight = this.hostConfig.imageSet.maxImageHeight + "px";
                Utils.appendChild(element, renderedImage);
            }
        }
        return element;
    };
    ImageSet.prototype.getItemCount = function () {
        return this._images.length;
    };
    ImageSet.prototype.getItemAt = function (index) {
        return this._images[index];
    };
    ImageSet.prototype.getResourceInformation = function () {
        var result = [];
        for (var _i = 0, _a = this._images; _i < _a.length; _i++) {
            var image = _a[_i];
            result = result.concat(image.getResourceInformation());
        }
        return result;
    };
    ImageSet.prototype.removeItem = function (item) {
        if (item instanceof Image) {
            var itemIndex = this._images.indexOf(item);
            if (itemIndex >= 0) {
                this._images.splice(itemIndex, 1);
                item.setParent(null);
                this.updateLayout();
                return true;
            }
        }
        return false;
    };
    ImageSet.prototype.getJsonTypeName = function () {
        return "ImageSet";
    };
    ImageSet.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setEnumProperty(Enums.Size, result, "imageSize", this.imageSize, Enums.Size.Medium);
        if (this._images.length > 0) {
            var images = [];
            for (var _i = 0, _a = this._images; _i < _a.length; _i++) {
                var image = _a[_i];
                images.push(image.toJSON());
            }
            Utils.setProperty(result, "images", images);
        }
        return result;
    };
    ImageSet.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.imageSize = Utils.getEnumValueOrDefault(Enums.Size, json["imageSize"], Enums.Size.Medium);
        if (json["images"] != null) {
            var jsonImages = json["images"];
            this._images = [];
            for (var i = 0; i < jsonImages.length; i++) {
                var image = new Image();
                image.parse(jsonImages[i], errors);
                this.addImage(image);
            }
        }
    };
    ImageSet.prototype.addImage = function (image) {
        if (!image.parent) {
            this._images.push(image);
            image.setParent(this);
        }
        else {
            throw new Error("This image already belongs to another ImageSet");
        }
    };
    ImageSet.prototype.indexOf = function (cardElement) {
        return cardElement instanceof Image ? this._images.indexOf(cardElement) : -1;
    };
    ImageSet.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak;
        }
        var speak = null;
        if (this._images.length > 0) {
            speak = '';
            for (var i = 0; i < this._images.length; i++) {
                speak += this._images[i].renderSpeech();
            }
        }
        return speak;
    };
    return ImageSet;
}(CardElementContainer));
exports.ImageSet = ImageSet;
var MediaSource = /** @class */ (function () {
    function MediaSource(url, mimeType) {
        if (url === void 0) { url = undefined; }
        if (mimeType === void 0) { mimeType = undefined; }
        this.url = url;
        this.mimeType = mimeType;
    }
    MediaSource.prototype.parse = function (json, errors) {
        this.mimeType = json["mimeType"];
        this.url = json["url"];
    };
    MediaSource.prototype.toJSON = function () {
        return {
            mimeType: this.mimeType,
            url: this.url
        };
    };
    return MediaSource;
}());
exports.MediaSource = MediaSource;
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sources = [];
        return _this;
    }
    Media.prototype.getPosterUrl = function () {
        return this.poster ? this.poster : this.hostConfig.media.defaultPoster;
    };
    Media.prototype.processSources = function () {
        this._selectedSources = [];
        this._selectedMediaType = undefined;
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var source = _a[_i];
            var mimeComponents = source.mimeType.split('/');
            if (mimeComponents.length == 2) {
                if (!this._selectedMediaType) {
                    var index = Media.supportedMediaTypes.indexOf(mimeComponents[0]);
                    if (index >= 0) {
                        this._selectedMediaType = Media.supportedMediaTypes[index];
                    }
                }
                if (mimeComponents[0] == this._selectedMediaType) {
                    this._selectedSources.push(source);
                }
            }
        }
    };
    Media.prototype.renderPoster = function () {
        var _this = this;
        var playButtonArrowWidth = 12;
        var playButtonArrowHeight = 15;
        var posterRootElement = document.createElement("div");
        posterRootElement.className = "ac-media-poster";
        posterRootElement.setAttribute("role", "contentinfo");
        posterRootElement.setAttribute("aria-label", this.altText ? this.altText : "Media content");
        posterRootElement.style.position = "relative";
        posterRootElement.style.display = "flex";
        var posterUrl = this.getPosterUrl();
        if (posterUrl) {
            var posterImageElement_1 = document.createElement("img");
            posterImageElement_1.style.width = "100%";
            posterImageElement_1.style.height = "100%";
            posterImageElement_1.onerror = function (e) {
                posterImageElement_1.parentNode.removeChild(posterImageElement_1);
                posterRootElement.classList.add("empty");
                posterRootElement.style.minHeight = "150px";
            };
            posterImageElement_1.src = posterUrl;
            posterRootElement.appendChild(posterImageElement_1);
        }
        else {
            posterRootElement.classList.add("empty");
            posterRootElement.style.minHeight = "150px";
        }
        if (this.hostConfig.supportsInteractivity && this._selectedSources.length > 0) {
            var playButtonOuterElement = document.createElement("div");
            playButtonOuterElement.setAttribute("role", "button");
            playButtonOuterElement.setAttribute("aria-label", "Play media");
            playButtonOuterElement.className = "ac-media-playButton";
            playButtonOuterElement.style.display = "flex";
            playButtonOuterElement.style.alignItems = "center";
            playButtonOuterElement.style.justifyContent = "center";
            playButtonOuterElement.onclick = function (e) {
                if (_this.hostConfig.media.allowInlinePlayback) {
                    var mediaPlayerElement = _this.renderMediaPlayer();
                    _this.renderedElement.innerHTML = "";
                    _this.renderedElement.appendChild(mediaPlayerElement);
                    mediaPlayerElement.play();
                }
                else {
                    if (Media.onPlay) {
                        Media.onPlay(_this);
                    }
                }
            };
            var playButtonInnerElement = document.createElement("div");
            playButtonInnerElement.className = "ac-media-playButton-arrow";
            playButtonInnerElement.style.width = playButtonArrowWidth + "px";
            playButtonInnerElement.style.height = playButtonArrowHeight + "px";
            playButtonInnerElement.style.borderTopWidth = (playButtonArrowHeight / 2) + "px";
            playButtonInnerElement.style.borderBottomWidth = (playButtonArrowHeight / 2) + "px";
            playButtonInnerElement.style.borderLeftWidth = playButtonArrowWidth + "px";
            playButtonInnerElement.style.borderRightWidth = "0";
            playButtonInnerElement.style.borderStyle = "solid";
            playButtonInnerElement.style.borderTopColor = "transparent";
            playButtonInnerElement.style.borderRightColor = "transparent";
            playButtonInnerElement.style.borderBottomColor = "transparent";
            playButtonInnerElement.style.transform = "translate(" + (playButtonArrowWidth / 10) + "px,0px)";
            playButtonOuterElement.appendChild(playButtonInnerElement);
            var playButtonContainer = document.createElement("div");
            playButtonContainer.style.position = "absolute";
            playButtonContainer.style.left = "0";
            playButtonContainer.style.top = "0";
            playButtonContainer.style.width = "100%";
            playButtonContainer.style.height = "100%";
            playButtonContainer.style.display = "flex";
            playButtonContainer.style.justifyContent = "center";
            playButtonContainer.style.alignItems = "center";
            playButtonContainer.appendChild(playButtonOuterElement);
            posterRootElement.appendChild(playButtonContainer);
        }
        return posterRootElement;
    };
    Media.prototype.renderMediaPlayer = function () {
        var mediaElement;
        if (this._selectedMediaType == "video") {
            var videoPlayer = document.createElement("video");
            var posterUrl = this.getPosterUrl();
            if (posterUrl) {
                videoPlayer.poster = posterUrl;
            }
            mediaElement = videoPlayer;
        }
        else {
            mediaElement = document.createElement("audio");
        }
        mediaElement.controls = true;
        mediaElement.preload = "none";
        mediaElement.style.width = "100%";
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var source = _a[_i];
            var src = document.createElement("source");
            src.src = source.url;
            src.type = source.mimeType;
            mediaElement.appendChild(src);
        }
        return mediaElement;
    };
    Media.prototype.internalRender = function () {
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-media");
        this.processSources();
        element.appendChild(this.renderPoster());
        return element;
    };
    Media.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.poster = json["poster"];
        this.altText = json["altText"];
        if (json["sources"] != null) {
            var jsonSources = json["sources"];
            this.sources = [];
            for (var i = 0; i < jsonSources.length; i++) {
                var source = new MediaSource();
                source.parse(jsonSources[i], errors);
                this.sources.push(source);
            }
        }
    };
    Media.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "poster", this.poster);
        Utils.setProperty(result, "altText", this.altText);
        if (this.sources.length > 0) {
            var serializedSources = [];
            for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
                var source = _a[_i];
                serializedSources.push(source.toJSON());
            }
            Utils.setProperty(result, "sources", serializedSources);
        }
        return result;
    };
    Media.prototype.getJsonTypeName = function () {
        return "Media";
    };
    Media.prototype.getResourceInformation = function () {
        var result = [];
        var posterUrl = this.getPosterUrl();
        if (!Utils.isNullOrEmpty(posterUrl)) {
            result.push({ url: posterUrl, mimeType: "image" });
        }
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var mediaSource = _a[_i];
            if (!Utils.isNullOrEmpty(mediaSource.url)) {
                result.push({ url: mediaSource.url, mimeType: mediaSource.mimeType });
            }
        }
        return result;
    };
    Media.prototype.renderSpeech = function () {
        return this.altText;
    };
    Object.defineProperty(Media.prototype, "selectedMediaType", {
        get: function () {
            return this._selectedMediaType;
        },
        enumerable: true,
        configurable: true
    });
    Media.supportedMediaTypes = ["audio", "video"];
    return Media;
}(CardElement));
exports.Media = Media;
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.valueChanged = function () {
        if (this.onValueChanged) {
            this.onValueChanged(this);
        }
    };
    Input.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "title", this.title);
        Utils.setProperty(result, "value", this.renderedElement ? this.value : this.defaultValue);
        return result;
    };
    Input.prototype.validate = function () {
        if (!this.id) {
            return [{ error: Enums.ValidationError.PropertyCantBeNull, message: "All inputs must have a unique Id" }];
        }
        else {
            return [];
        }
    };
    Input.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.id = json["id"];
        this.defaultValue = json["value"];
    };
    Input.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak;
        }
        if (this.title) {
            return '<s>' + this.title + '</s>\n';
        }
        return null;
    };
    Input.prototype.getAllInputs = function () {
        return [this];
    };
    Object.defineProperty(Input.prototype, "isInteractive", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return Input;
}(CardElement));
exports.Input = Input;
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = Enums.InputTextStyle.Text;
        return _this;
    }
    TextInput.prototype.internalRender = function () {
        var _this = this;
        if (this.isMultiline) {
            this._textareaElement = document.createElement("textarea");
            this._textareaElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-textInput", "ac-multiline");
            this._textareaElement.style.width = "100%";
            this._textareaElement.tabIndex = 0;
            if (!Utils.isNullOrEmpty(this.placeholder)) {
                this._textareaElement.placeholder = this.placeholder;
                this._textareaElement.setAttribute("aria-label", this.placeholder);
            }
            if (!Utils.isNullOrEmpty(this.defaultValue)) {
                this._textareaElement.value = this.defaultValue;
            }
            if (this.maxLength > 0) {
                this._textareaElement.maxLength = this.maxLength;
            }
            this._textareaElement.oninput = function () { _this.valueChanged(); };
            return this._textareaElement;
        }
        else {
            this._inputElement = document.createElement("input");
            this._inputElement.type = Enums.InputTextStyle[this.style].toLowerCase();
            this._inputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-textInput");
            this._inputElement.style.width = "100%";
            this._inputElement.tabIndex = 0;
            if (!Utils.isNullOrEmpty(this.placeholder)) {
                this._inputElement.placeholder = this.placeholder;
                this._inputElement.setAttribute("aria-label", this.placeholder);
            }
            if (!Utils.isNullOrEmpty(this.defaultValue)) {
                this._inputElement.value = this.defaultValue;
            }
            if (this.maxLength > 0) {
                this._inputElement.maxLength = this.maxLength;
            }
            this._inputElement.oninput = function () { _this.valueChanged(); };
            return this._inputElement;
        }
    };
    TextInput.prototype.getJsonTypeName = function () {
        return "Input.Text";
    };
    TextInput.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "placeholder", this.placeholder);
        Utils.setProperty(result, "maxLength", this.maxLength, 0);
        Utils.setProperty(result, "isMultiline", this.isMultiline, false);
        Utils.setEnumProperty(Enums.InputTextStyle, result, "style", this.style, Enums.InputTextStyle.Text);
        return result;
    };
    TextInput.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.maxLength = json["maxLength"];
        this.isMultiline = json["isMultiline"];
        this.placeholder = json["placeholder"];
        this.style = Utils.getEnumValueOrDefault(Enums.InputTextStyle, json["style"], this.style);
    };
    Object.defineProperty(TextInput.prototype, "value", {
        get: function () {
            if (this.isMultiline) {
                return this._textareaElement ? this._textareaElement.value : null;
            }
            else {
                return this._inputElement ? this._inputElement.value : null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return TextInput;
}(Input));
exports.TextInput = TextInput;
var ToggleInput = /** @class */ (function (_super) {
    __extends(ToggleInput, _super);
    function ToggleInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueOn = "true";
        _this.valueOff = "false";
        return _this;
    }
    ToggleInput.prototype.internalRender = function () {
        var _this = this;
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-input");
        element.style.width = "100%";
        element.style.display = "flex";
        element.style.alignItems = "center";
        this._checkboxInputElement = document.createElement("input");
        this._checkboxInputElement.id = generateUniqueId();
        this._checkboxInputElement.type = "checkbox";
        this._checkboxInputElement.style.display = "inline-block";
        this._checkboxInputElement.style.verticalAlign = "middle";
        this._checkboxInputElement.style.margin = "0";
        this._checkboxInputElement.style.flex = "0 0 auto";
        this._checkboxInputElement.setAttribute("aria-label", this.title);
        this._checkboxInputElement.tabIndex = 0;
        if (this.defaultValue == this.valueOn) {
            this._checkboxInputElement.checked = true;
        }
        this._checkboxInputElement.onchange = function () { _this.valueChanged(); };
        Utils.appendChild(element, this._checkboxInputElement);
        if (!Utils.isNullOrEmpty(this.title) || this.isDesignMode()) {
            var label = new Label();
            label.setParent(this);
            label.forElementId = this._checkboxInputElement.id;
            label.hostConfig = this.hostConfig;
            label.text = Utils.isNullOrEmpty(this.title) ? this.getJsonTypeName() : this.title;
            label.useMarkdown = AdaptiveCard.useMarkdownInRadioButtonAndCheckbox;
            var labelElement = label.render();
            labelElement.style.display = "inline-block";
            labelElement.style.flex = "1 1 auto";
            labelElement.style.verticalAlign = "middle";
            var spacerElement = document.createElement("div");
            spacerElement.style.width = "6px";
            Utils.appendChild(element, spacerElement);
            Utils.appendChild(element, labelElement);
        }
        return element;
    };
    ToggleInput.prototype.getJsonTypeName = function () {
        return "Input.Toggle";
    };
    ToggleInput.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "valueOn", this.valueOn, "true");
        Utils.setProperty(result, "valueOff", this.valueOff, "false");
        return result;
    };
    ToggleInput.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.title = json["title"];
        this.valueOn = Utils.getValueOrDefault(json["valueOn"], this.valueOn);
        this.valueOff = Utils.getValueOrDefault(json["valueOff"], this.valueOff);
    };
    Object.defineProperty(ToggleInput.prototype, "value", {
        get: function () {
            if (this._checkboxInputElement) {
                return this._checkboxInputElement.checked ? this.valueOn : this.valueOff;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ToggleInput;
}(Input));
exports.ToggleInput = ToggleInput;
var Choice = /** @class */ (function () {
    function Choice(title, value) {
        if (title === void 0) { title = undefined; }
        if (value === void 0) { value = undefined; }
        this.title = title;
        this.value = value;
    }
    Choice.prototype.toJSON = function () {
        return { title: this.title, value: this.value };
    };
    return Choice;
}());
exports.Choice = Choice;
var ChoiceSetInput = /** @class */ (function (_super) {
    __extends(ChoiceSetInput, _super);
    function ChoiceSetInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.choices = [];
        return _this;
    }
    ChoiceSetInput.getUniqueCategoryName = function () {
        var uniqueCwtegoryName = "__ac-category" + ChoiceSetInput.uniqueCategoryCounter;
        ChoiceSetInput.uniqueCategoryCounter++;
        return uniqueCwtegoryName;
    };
    ChoiceSetInput.prototype.internalRender = function () {
        var _this = this;
        if (!this.isMultiSelect) {
            if (this.isCompact) {
                // Render as a combo box
                this._selectElement = document.createElement("select");
                this._selectElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-multichoiceInput");
                this._selectElement.style.width = "100%";
                var option = document.createElement("option");
                option.selected = true;
                option.disabled = true;
                option.hidden = true;
                option.value = "";
                if (this.placeholder) {
                    option.text = this.placeholder;
                }
                Utils.appendChild(this._selectElement, option);
                for (var i = 0; i < this.choices.length; i++) {
                    var option_1 = document.createElement("option");
                    option_1.value = this.choices[i].value;
                    option_1.text = this.choices[i].title;
                    option_1.setAttribute("aria-label", this.choices[i].title);
                    if (this.choices[i].value == this.defaultValue) {
                        option_1.selected = true;
                    }
                    Utils.appendChild(this._selectElement, option_1);
                }
                this._selectElement.onchange = function () { _this.valueChanged(); };
                return this._selectElement;
            }
            else {
                // Render as a series of radio buttons
                var uniqueCategoryName = ChoiceSetInput.getUniqueCategoryName();
                var element = document.createElement("div");
                element.className = this.hostConfig.makeCssClassName("ac-input");
                element.style.width = "100%";
                this._toggleInputs = [];
                for (var i_1 = 0; i_1 < this.choices.length; i_1++) {
                    var radioInput = document.createElement("input");
                    radioInput.id = generateUniqueId();
                    radioInput.type = "radio";
                    radioInput.style.margin = "0";
                    radioInput.style.display = "inline-block";
                    radioInput.style.verticalAlign = "middle";
                    radioInput.name = Utils.isNullOrEmpty(this.id) ? uniqueCategoryName : this.id;
                    radioInput.value = this.choices[i_1].value;
                    radioInput.style.flex = "0 0 auto";
                    radioInput.setAttribute("aria-label", this.choices[i_1].title);
                    if (this.choices[i_1].value == this.defaultValue) {
                        radioInput.checked = true;
                    }
                    radioInput.onchange = function () { _this.valueChanged(); };
                    this._toggleInputs.push(radioInput);
                    var label = new Label();
                    label.setParent(this);
                    label.forElementId = radioInput.id;
                    label.hostConfig = this.hostConfig;
                    label.text = Utils.isNullOrEmpty(this.choices[i_1].title) ? "Choice " + i_1 : this.choices[i_1].title;
                    label.useMarkdown = AdaptiveCard.useMarkdownInRadioButtonAndCheckbox;
                    var labelElement = label.render();
                    labelElement.style.display = "inline-block";
                    labelElement.style.flex = "1 1 auto";
                    labelElement.style.marginLeft = "6px";
                    labelElement.style.verticalAlign = "middle";
                    var spacerElement = document.createElement("div");
                    spacerElement.style.width = "6px";
                    var compoundInput = document.createElement("div");
                    compoundInput.style.display = "flex";
                    Utils.appendChild(compoundInput, radioInput);
                    Utils.appendChild(compoundInput, spacerElement);
                    Utils.appendChild(compoundInput, labelElement);
                    Utils.appendChild(element, compoundInput);
                }
                return element;
            }
        }
        else {
            // Render as a list of toggle inputs
            var defaultValues = this.defaultValue ? this.defaultValue.split(this.hostConfig.choiceSetInputValueSeparator) : null;
            var element = document.createElement("div");
            element.className = this.hostConfig.makeCssClassName("ac-input");
            element.style.width = "100%";
            this._toggleInputs = [];
            for (var i_2 = 0; i_2 < this.choices.length; i_2++) {
                var checkboxInput = document.createElement("input");
                checkboxInput.id = generateUniqueId();
                checkboxInput.type = "checkbox";
                checkboxInput.style.margin = "0";
                checkboxInput.style.display = "inline-block";
                checkboxInput.style.verticalAlign = "middle";
                checkboxInput.value = this.choices[i_2].value;
                checkboxInput.style.flex = "0 0 auto";
                checkboxInput.setAttribute("aria-label", this.choices[i_2].title);
                if (defaultValues) {
                    if (defaultValues.indexOf(this.choices[i_2].value) >= 0) {
                        checkboxInput.checked = true;
                    }
                }
                checkboxInput.onchange = function () { _this.valueChanged(); };
                this._toggleInputs.push(checkboxInput);
                var label = new Label();
                label.setParent(this);
                label.forElementId = checkboxInput.id;
                label.hostConfig = this.hostConfig;
                label.text = Utils.isNullOrEmpty(this.choices[i_2].title) ? "Choice " + i_2 : this.choices[i_2].title;
                label.useMarkdown = AdaptiveCard.useMarkdownInRadioButtonAndCheckbox;
                var labelElement = label.render();
                labelElement.style.display = "inline-block";
                labelElement.style.flex = "1 1 auto";
                // labelElement.style.marginLeft = "6px";
                labelElement.style.verticalAlign = "middle";
                var spacerElement = document.createElement("div");
                spacerElement.style.width = "6px";
                var compoundInput = document.createElement("div");
                compoundInput.style.display = "flex";
                compoundInput.style.alignItems = "center";
                Utils.appendChild(compoundInput, checkboxInput);
                Utils.appendChild(compoundInput, spacerElement);
                Utils.appendChild(compoundInput, labelElement);
                Utils.appendChild(element, compoundInput);
            }
            return element;
        }
    };
    ChoiceSetInput.prototype.getJsonTypeName = function () {
        return "Input.ChoiceSet";
    };
    ChoiceSetInput.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "placeholder", this.placeholder);
        if (this.choices.length > 0) {
            var choices = [];
            for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
                var choice = _a[_i];
                choices.push(choice.toJSON());
            }
            Utils.setProperty(result, "choices", choices);
        }
        if (!this.isCompact) {
            Utils.setProperty(result, "style", "expanded", false);
        }
        Utils.setProperty(result, "isMultiSelect", this.isMultiSelect, false);
        return result;
    };
    ChoiceSetInput.prototype.validate = function () {
        var result = [];
        if (this.choices.length == 0) {
            result = [{ error: Enums.ValidationError.CollectionCantBeEmpty, message: "An Input.ChoiceSet must have at least one choice defined." }];
        }
        for (var i = 0; i < this.choices.length; i++) {
            if (!this.choices[i].title || !this.choices[i].value) {
                result = result.concat([{ error: Enums.ValidationError.PropertyCantBeNull, message: "All choices in an Input.ChoiceSet must have their title and value properties set." }]);
                break;
            }
        }
        return result;
    };
    ChoiceSetInput.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.isCompact = !(json["style"] === "expanded");
        this.isMultiSelect = json["isMultiSelect"];
        this.placeholder = json["placeholder"];
        this.choices = [];
        if (json["choices"] != undefined) {
            var choiceArray = json["choices"];
            for (var i = 0; i < choiceArray.length; i++) {
                var choice = new Choice();
                choice.title = choiceArray[i]["title"];
                choice.value = choiceArray[i]["value"];
                this.choices.push(choice);
            }
        }
    };
    Object.defineProperty(ChoiceSetInput.prototype, "value", {
        get: function () {
            if (!this.isMultiSelect) {
                if (this.isCompact) {
                    return this._selectElement ? this._selectElement.value : null;
                }
                else {
                    if (!this._toggleInputs || this._toggleInputs.length == 0) {
                        return null;
                    }
                    for (var i = 0; i < this._toggleInputs.length; i++) {
                        if (this._toggleInputs[i].checked) {
                            return this._toggleInputs[i].value;
                        }
                    }
                    return null;
                }
            }
            else {
                if (!this._toggleInputs || this._toggleInputs.length == 0) {
                    return null;
                }
                var result = "";
                for (var i = 0; i < this._toggleInputs.length; i++) {
                    if (this._toggleInputs[i].checked) {
                        if (result != "") {
                            result += this.hostConfig.choiceSetInputValueSeparator;
                        }
                        result += this._toggleInputs[i].value;
                    }
                }
                return result == "" ? null : result;
            }
        },
        enumerable: true,
        configurable: true
    });
    ChoiceSetInput.uniqueCategoryCounter = 0;
    return ChoiceSetInput;
}(Input));
exports.ChoiceSetInput = ChoiceSetInput;
var NumberInput = /** @class */ (function (_super) {
    __extends(NumberInput, _super);
    function NumberInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberInput.prototype.internalRender = function () {
        var _this = this;
        this._numberInputElement = document.createElement("input");
        this._numberInputElement.setAttribute("type", "number");
        this._numberInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-numberInput");
        this._numberInputElement.setAttribute("min", this.min);
        this._numberInputElement.setAttribute("max", this.max);
        this._numberInputElement.style.width = "100%";
        this._numberInputElement.tabIndex = 0;
        if (!Utils.isNullOrEmpty(this.defaultValue)) {
            this._numberInputElement.value = this.defaultValue;
        }
        if (!Utils.isNullOrEmpty(this.placeholder)) {
            this._numberInputElement.placeholder = this.placeholder;
            this._numberInputElement.setAttribute("aria-label", this.placeholder);
        }
        this._numberInputElement.oninput = function () { _this.valueChanged(); };
        return this._numberInputElement;
    };
    NumberInput.prototype.getJsonTypeName = function () {
        return "Input.Number";
    };
    NumberInput.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "placeholder", this.placeholder);
        Utils.setProperty(result, "min", this.min);
        Utils.setProperty(result, "max", this.max);
        return result;
    };
    NumberInput.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.placeholder = json["placeholder"];
        this.min = json["min"];
        this.max = json["max"];
    };
    Object.defineProperty(NumberInput.prototype, "value", {
        get: function () {
            return this._numberInputElement ? this._numberInputElement.value : null;
        },
        enumerable: true,
        configurable: true
    });
    return NumberInput;
}(Input));
exports.NumberInput = NumberInput;
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateInput.prototype.internalRender = function () {
        this._dateInputElement = document.createElement("input");
        this._dateInputElement.setAttribute("type", "date");
        this._dateInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-dateInput");
        this._dateInputElement.style.width = "100%";
        if (!Utils.isNullOrEmpty(this.defaultValue)) {
            this._dateInputElement.value = this.defaultValue;
        }
        return this._dateInputElement;
    };
    DateInput.prototype.getJsonTypeName = function () {
        return "Input.Date";
    };
    Object.defineProperty(DateInput.prototype, "value", {
        get: function () {
            return this._dateInputElement ? this._dateInputElement.value : null;
        },
        enumerable: true,
        configurable: true
    });
    return DateInput;
}(Input));
exports.DateInput = DateInput;
var TimeInput = /** @class */ (function (_super) {
    __extends(TimeInput, _super);
    function TimeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeInput.prototype.internalRender = function () {
        this._timeInputElement = document.createElement("input");
        this._timeInputElement.setAttribute("type", "time");
        this._timeInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-timeInput");
        this._timeInputElement.style.width = "100%";
        if (!Utils.isNullOrEmpty(this.defaultValue)) {
            this._timeInputElement.value = this.defaultValue;
        }
        return this._timeInputElement;
    };
    TimeInput.prototype.getJsonTypeName = function () {
        return "Input.Time";
    };
    Object.defineProperty(TimeInput.prototype, "value", {
        get: function () {
            return this._timeInputElement ? this._timeInputElement.value : null;
        },
        enumerable: true,
        configurable: true
    });
    return TimeInput;
}(Input));
exports.TimeInput = TimeInput;
var ActionButtonState;
(function (ActionButtonState) {
    ActionButtonState[ActionButtonState["Normal"] = 0] = "Normal";
    ActionButtonState[ActionButtonState["Expanded"] = 1] = "Expanded";
    ActionButtonState[ActionButtonState["Subdued"] = 2] = "Subdued";
})(ActionButtonState || (ActionButtonState = {}));
var ActionButton = /** @class */ (function () {
    function ActionButton(action, parentContainerStyle) {
        this._element = null;
        this._state = ActionButtonState.Normal;
        this.onClick = null;
        this.action = action;
        this._parentContainerStyle = parentContainerStyle;
    }
    ActionButton.prototype.updateCssStyle = function () {
        var hostConfig = this.action.parent.hostConfig;
        this.action.renderedElement.className = hostConfig.makeCssClassName("ac-pushButton");
        this.action.renderedElement.classList.add("style-" + this._parentContainerStyle);
        if (this.action instanceof ShowCardAction) {
            this.action.renderedElement.classList.add(hostConfig.makeCssClassName("expandable"));
        }
        this.action.renderedElement.classList.remove(hostConfig.makeCssClassName("expanded"));
        this.action.renderedElement.classList.remove(hostConfig.makeCssClassName("subdued"));
        switch (this._state) {
            case ActionButtonState.Expanded:
                this.action.renderedElement.classList.add(hostConfig.makeCssClassName("expanded"));
                break;
            case ActionButtonState.Subdued:
                this.action.renderedElement.classList.add(hostConfig.makeCssClassName("subdued"));
                break;
        }
        if (this.action.isPrimary) {
            this.action.renderedElement.classList.add(hostConfig.makeCssClassName("primary"));
        }
    };
    ActionButton.prototype.render = function (alignment) {
        var _this = this;
        this.action.render();
        this.action.renderedElement.style.flex = alignment === Enums.ActionAlignment.Stretch ? "0 1 100%" : "0 1 auto";
        this.action.renderedElement.onclick = function (e) { _this.click(); };
        this.updateCssStyle();
    };
    ActionButton.prototype.click = function () {
        if (this.onClick != null) {
            this.onClick(this);
        }
    };
    Object.defineProperty(ActionButton.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
            this.updateCssStyle();
        },
        enumerable: true,
        configurable: true
    });
    return ActionButton;
}());
var Action = /** @class */ (function () {
    function Action() {
        this._shouldFallback = false;
        this._parent = null;
        this._actionCollection = null; // hold the reference to its action collection
        this._renderedElement = null;
        this.requires = new HostConfig.HostCapabilities();
    }
    Action.prototype.setCollection = function (actionCollection) {
        this._actionCollection = actionCollection;
    };
    Action.prototype.addCssClasses = function (element) {
        // Do nothing in base implementation
    };
    Action.prototype.toJSON = function () {
        var result = {};
        Utils.setProperty(result, "type", this.getJsonTypeName());
        Utils.setProperty(result, "id", this.id);
        Utils.setProperty(result, "title", this.title);
        Utils.setProperty(result, "iconUrl", this.iconUrl);
        return result;
    };
    Action.prototype.render = function () {
        // Cache hostConfig for perf
        var hostConfig = this.parent.hostConfig;
        var buttonElement = document.createElement("button");
        buttonElement.className = hostConfig.makeCssClassName("ac-pushButton");
        this.addCssClasses(buttonElement);
        buttonElement.setAttribute("aria-label", this.title);
        buttonElement.type = "button";
        buttonElement.style.display = "flex";
        buttonElement.style.alignItems = "center";
        buttonElement.style.justifyContent = "center";
        var hasTitle = !Utils.isNullOrEmpty(this.title);
        var titleElement = document.createElement("div");
        titleElement.style.overflow = "hidden";
        titleElement.style.textOverflow = "ellipsis";
        if (!(hostConfig.actions.iconPlacement == Enums.ActionIconPlacement.AboveTitle || hostConfig.actions.allowTitleToWrap)) {
            titleElement.style.whiteSpace = "nowrap";
        }
        if (hasTitle) {
            titleElement.innerText = this.title;
        }
        if (Utils.isNullOrEmpty(this.iconUrl)) {
            buttonElement.classList.add("noIcon");
            buttonElement.appendChild(titleElement);
        }
        else {
            var iconElement = document.createElement("img");
            iconElement.src = this.iconUrl;
            iconElement.style.width = hostConfig.actions.iconSize + "px";
            iconElement.style.height = hostConfig.actions.iconSize + "px";
            iconElement.style.flex = "0 0 auto";
            if (hostConfig.actions.iconPlacement == Enums.ActionIconPlacement.AboveTitle) {
                buttonElement.classList.add("iconAbove");
                buttonElement.style.flexDirection = "column";
                if (hasTitle) {
                    iconElement.style.marginBottom = "4px";
                }
            }
            else {
                buttonElement.classList.add("iconLeft");
                if (hasTitle) {
                    iconElement.style.marginRight = "4px";
                }
            }
            buttonElement.appendChild(iconElement);
            buttonElement.appendChild(titleElement);
        }
        this._renderedElement = buttonElement;
    };
    Action.prototype.setParent = function (value) {
        this._parent = value;
    };
    Action.prototype.execute = function () {
        if (this.onExecute) {
            this.onExecute(this);
        }
        raiseExecuteActionEvent(this);
    };
    // Expand the action card pane with a inline status card
    // Null status will clear the status bar
    Action.prototype.setStatus = function (status) {
        if (this._actionCollection == null) {
            return;
        }
        if (status) {
            var statusCard = new InlineAdaptiveCard();
            statusCard.parse(status);
            this._actionCollection.showStatusCard(statusCard);
        }
        else {
            this._actionCollection.hideStatusCard();
        }
    };
    Action.prototype.validate = function () {
        return [];
    };
    Action.prototype.prepare = function (inputs) {
        // Do nothing in base implementation
    };
    ;
    Action.prototype.parse = function (json, errors) {
        raiseParseActionEvent(this, json, errors);
        this.requires.parse(json["requires"], errors);
        this.id = json["id"];
        if (!json["title"] && json["title"] !== "") {
            raiseParseError({
                error: Enums.ValidationError.PropertyCantBeNull,
                message: "Actions should always have a title."
            }, errors);
        }
        this.title = json["title"];
        this.iconUrl = json["iconUrl"];
    };
    Action.prototype.remove = function () {
        if (this._actionCollection) {
            return this._actionCollection.removeAction(this);
        }
        return false;
    };
    Action.prototype.getAllInputs = function () {
        return [];
    };
    Action.prototype.getResourceInformation = function () {
        if (!Utils.isNullOrEmpty(this.iconUrl)) {
            return [{ url: this.iconUrl, mimeType: "image" }];
        }
        else {
            return [];
        }
    };
    Action.prototype.getActionById = function (id) {
        if (this.id == id) {
            return this;
        }
    };
    Object.defineProperty(Action.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "renderedElement", {
        get: function () {
            return this._renderedElement;
        },
        enumerable: true,
        configurable: true
    });
    Action.prototype.shouldFallback = function () {
        return this._shouldFallback || !this.requires.areAllMet(this.parent.hostConfig.hostCapabilities);
    };
    return Action;
}());
exports.Action = Action;
var SubmitAction = /** @class */ (function (_super) {
    __extends(SubmitAction, _super);
    function SubmitAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isPrepared = false;
        return _this;
    }
    SubmitAction.prototype.getJsonTypeName = function () {
        return "Action.Submit";
    };
    SubmitAction.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "data", this._originalData);
        return result;
    };
    SubmitAction.prototype.prepare = function (inputs) {
        if (this._originalData) {
            this._processedData = JSON.parse(JSON.stringify(this._originalData));
        }
        else {
            this._processedData = {};
        }
        for (var i = 0; i < inputs.length; i++) {
            var inputValue = inputs[i].value;
            if (inputValue != null) {
                this._processedData[inputs[i].id] = inputs[i].value;
            }
        }
        this._isPrepared = true;
    };
    SubmitAction.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.data = json["data"];
    };
    Object.defineProperty(SubmitAction.prototype, "data", {
        get: function () {
            return this._isPrepared ? this._processedData : this._originalData;
        },
        set: function (value) {
            this._originalData = value;
            this._isPrepared = false;
        },
        enumerable: true,
        configurable: true
    });
    return SubmitAction;
}(Action));
exports.SubmitAction = SubmitAction;
var OpenUrlAction = /** @class */ (function (_super) {
    __extends(OpenUrlAction, _super);
    function OpenUrlAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenUrlAction.prototype.getJsonTypeName = function () {
        return "Action.OpenUrl";
    };
    OpenUrlAction.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "url", this.url);
        return result;
    };
    OpenUrlAction.prototype.validate = function () {
        if (!this.url) {
            return [{ error: Enums.ValidationError.PropertyCantBeNull, message: "An Action.OpenUrl must have its url property set." }];
        }
        else {
            return [];
        }
    };
    OpenUrlAction.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.url = json["url"];
    };
    return OpenUrlAction;
}(Action));
exports.OpenUrlAction = OpenUrlAction;
var HttpHeader = /** @class */ (function () {
    function HttpHeader(name, value) {
        if (name === void 0) { name = ""; }
        if (value === void 0) { value = ""; }
        this._value = new Utils.StringWithSubstitutions();
        this.name = name;
        this.value = value;
    }
    HttpHeader.prototype.toJSON = function () {
        return { name: this.name, value: this._value.getOriginal() };
    };
    HttpHeader.prototype.prepare = function (inputs) {
        this._value.substituteInputValues(inputs, Utils.ContentTypes.applicationXWwwFormUrlencoded);
    };
    Object.defineProperty(HttpHeader.prototype, "value", {
        get: function () {
            return this._value.get();
        },
        set: function (newValue) {
            this._value.set(newValue);
        },
        enumerable: true,
        configurable: true
    });
    return HttpHeader;
}());
exports.HttpHeader = HttpHeader;
var HttpAction = /** @class */ (function (_super) {
    __extends(HttpAction, _super);
    function HttpAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._url = new Utils.StringWithSubstitutions();
        _this._body = new Utils.StringWithSubstitutions();
        _this._headers = [];
        return _this;
    }
    HttpAction.prototype.getJsonTypeName = function () {
        return "Action.Http";
    };
    HttpAction.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "method", this.method);
        Utils.setProperty(result, "url", this._url.getOriginal());
        Utils.setProperty(result, "body", this._body.getOriginal());
        if (this._headers.length > 0) {
            var headers = [];
            for (var _i = 0, _a = this._headers; _i < _a.length; _i++) {
                var header = _a[_i];
                headers.push(header.toJSON());
            }
            Utils.setProperty(result, "headers", headers);
        }
        return result;
    };
    HttpAction.prototype.validate = function () {
        var result = [];
        if (!this.url) {
            result = [{ error: Enums.ValidationError.PropertyCantBeNull, message: "An Action.Http must have its url property set." }];
        }
        if (this.headers.length > 0) {
            for (var i = 0; i < this.headers.length; i++) {
                if (!this.headers[i].name || !this.headers[i].value) {
                    result = result.concat([{ error: Enums.ValidationError.PropertyCantBeNull, message: "All headers of an Action.Http must have their name and value properties set." }]);
                    break;
                }
            }
        }
        return result;
    };
    HttpAction.prototype.prepare = function (inputs) {
        this._url.substituteInputValues(inputs, Utils.ContentTypes.applicationXWwwFormUrlencoded);
        var contentType = Utils.ContentTypes.applicationJson;
        for (var i = 0; i < this._headers.length; i++) {
            this._headers[i].prepare(inputs);
            if (this._headers[i].name && this._headers[i].name.toLowerCase() == "content-type") {
                contentType = this._headers[i].value;
            }
        }
        this._body.substituteInputValues(inputs, contentType);
    };
    ;
    HttpAction.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.url = json["url"];
        this.method = json["method"];
        this.body = json["body"];
        this._headers = [];
        if (json["headers"] != null) {
            var jsonHeaders = json["headers"];
            for (var i = 0; i < jsonHeaders.length; i++) {
                var httpHeader = new HttpHeader();
                httpHeader.name = jsonHeaders[i]["name"];
                httpHeader.value = jsonHeaders[i]["value"];
                this.headers.push(httpHeader);
            }
        }
    };
    Object.defineProperty(HttpAction.prototype, "url", {
        get: function () {
            return this._url.get();
        },
        set: function (value) {
            this._url.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "body", {
        get: function () {
            return this._body.get();
        },
        set: function (value) {
            this._body.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "headers", {
        get: function () {
            return this._headers ? this._headers : [];
        },
        set: function (value) {
            this._headers = value;
        },
        enumerable: true,
        configurable: true
    });
    return HttpAction;
}(Action));
exports.HttpAction = HttpAction;
var ShowCardAction = /** @class */ (function (_super) {
    __extends(ShowCardAction, _super);
    function ShowCardAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.card = new InlineAdaptiveCard();
        return _this;
    }
    ShowCardAction.prototype.addCssClasses = function (element) {
        _super.prototype.addCssClasses.call(this, element);
        element.classList.add(this.parent.hostConfig.makeCssClassName("expandable"));
    };
    ShowCardAction.prototype.getJsonTypeName = function () {
        return "Action.ShowCard";
    };
    ShowCardAction.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        if (this.card) {
            Utils.setProperty(result, "card", this.card.toJSON());
        }
        return result;
    };
    ShowCardAction.prototype.validate = function () {
        return this.card.validate();
    };
    ShowCardAction.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.card.parse(json["card"], errors);
    };
    ShowCardAction.prototype.setParent = function (value) {
        _super.prototype.setParent.call(this, value);
        this.card.setParent(value);
    };
    ShowCardAction.prototype.getAllInputs = function () {
        return this.card.getAllInputs();
    };
    ShowCardAction.prototype.getResourceInformation = function () {
        return _super.prototype.getResourceInformation.call(this).concat(this.card.getResourceInformation());
    };
    ShowCardAction.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result) {
            result = this.card.getActionById(id);
        }
        return result;
    };
    return ShowCardAction;
}(Action));
exports.ShowCardAction = ShowCardAction;
var ActionCollection = /** @class */ (function () {
    function ActionCollection(owner) {
        this._expandedAction = null;
        this._renderedActionCount = 0;
        this._statusCard = null;
        this._actionCard = null;
        this.items = [];
        this.buttons = [];
        this._owner = owner;
    }
    ActionCollection.prototype.refreshContainer = function () {
        this._actionCardContainer.innerHTML = "";
        if (this._actionCard === null && this._statusCard === null) {
            this._actionCardContainer.style.padding = "0px";
            this._actionCardContainer.style.marginTop = "0px";
            return;
        }
        this._actionCardContainer.style.marginTop = this._renderedActionCount > 0 ? this._owner.hostConfig.actions.showCard.inlineTopMargin + "px" : "0px";
        var padding = this._owner.getNonZeroPadding().toSpacingDefinition(this._owner.hostConfig);
        if (this._actionCard !== null) {
            this._actionCard.style.paddingLeft = padding.left + "px";
            this._actionCard.style.paddingRight = padding.right + "px";
            this._actionCard.style.marginLeft = "-" + padding.left + "px";
            this._actionCard.style.marginRight = "-" + padding.right + "px";
            Utils.appendChild(this._actionCardContainer, this._actionCard);
        }
        if (this._statusCard !== null) {
            this._statusCard.style.paddingLeft = padding.left + "px";
            this._statusCard.style.paddingRight = padding.right + "px";
            this._statusCard.style.marginLeft = "-" + padding.left + "px";
            this._statusCard.style.marginRight = "-" + padding.right + "px";
            Utils.appendChild(this._actionCardContainer, this._statusCard);
        }
    };
    ActionCollection.prototype.layoutChanged = function () {
        this._owner.getRootElement().updateLayout();
    };
    ActionCollection.prototype.hideActionCard = function () {
        var previouslyExpandedAction = this._expandedAction;
        this._expandedAction = null;
        this._actionCard = null;
        this.refreshContainer();
        if (previouslyExpandedAction) {
            this.layoutChanged();
            raiseInlineCardExpandedEvent(previouslyExpandedAction, false);
        }
    };
    ActionCollection.prototype.showActionCard = function (action, suppressStyle, raiseEvent) {
        if (suppressStyle === void 0) { suppressStyle = false; }
        if (raiseEvent === void 0) { raiseEvent = true; }
        if (action.card == null) {
            return;
        }
        action.card.suppressStyle = suppressStyle;
        var renderedCard = action.card.render();
        this._actionCard = renderedCard;
        this._expandedAction = action;
        this.refreshContainer();
        if (raiseEvent) {
            this.layoutChanged();
            raiseInlineCardExpandedEvent(action, true);
        }
    };
    ActionCollection.prototype.collapseExpandedAction = function () {
        for (var i = 0; i < this.buttons.length; i++) {
            this.buttons[i].state = ActionButtonState.Normal;
        }
        this.hideActionCard();
    };
    ActionCollection.prototype.expandShowCardAction = function (action, raiseEvent) {
        for (var i = 0; i < this.buttons.length; i++) {
            if (this.buttons[i].action !== action) {
                this.buttons[i].state = ActionButtonState.Subdued;
            }
            else {
                this.buttons[i].state = ActionButtonState.Expanded;
            }
        }
        this.showActionCard(action, !(this._owner.isAtTheVeryLeft() && this._owner.isAtTheVeryRight()), raiseEvent);
    };
    ActionCollection.prototype.actionClicked = function (actionButton) {
        if (!(actionButton.action instanceof ShowCardAction)) {
            for (var i = 0; i < this.buttons.length; i++) {
                this.buttons[i].state = ActionButtonState.Normal;
            }
            this.hideStatusCard();
            this.hideActionCard();
            actionButton.action.execute();
        }
        else {
            this.hideStatusCard();
            if (this._owner.hostConfig.actions.showCard.actionMode === Enums.ShowCardActionMode.Popup) {
                actionButton.action.execute();
            }
            else if (actionButton.action === this._expandedAction) {
                this.collapseExpandedAction();
            }
            else {
                this.expandShowCardAction(actionButton.action, true);
            }
        }
    };
    ActionCollection.prototype.getParentContainer = function () {
        if (this._owner instanceof Container) {
            return this._owner;
        }
        else {
            return this._owner.getParentContainer();
        }
    };
    ActionCollection.prototype.findActionButton = function (action) {
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var actionButton = _a[_i];
            if (actionButton.action == action) {
                return actionButton;
            }
        }
        return null;
    };
    ActionCollection.prototype.parse = function (json, errors) {
        this.clear();
        if (json && json instanceof Array) {
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var jsonAction = json_1[_i];
                var action = createActionInstance(this._owner, jsonAction, errors);
                if (action) {
                    this.addAction(action);
                }
            }
        }
    };
    ActionCollection.prototype.toJSON = function () {
        if (this.items.length > 0) {
            var result = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var action = _a[_i];
                result.push(action.toJSON());
            }
            return result;
        }
        else {
            return null;
        }
    };
    ActionCollection.prototype.showStatusCard = function (status) {
        status.setParent(this._owner);
        this._statusCard = status.render();
        this.refreshContainer();
    };
    ActionCollection.prototype.hideStatusCard = function () {
        this._statusCard = null;
        this.refreshContainer();
    };
    ActionCollection.prototype.getActionById = function (id) {
        var result = null;
        for (var i = 0; i < this.items.length; i++) {
            result = this.items[i].getActionById(id);
            if (result) {
                break;
            }
        }
        return result;
    };
    ActionCollection.prototype.validate = function () {
        var result = [];
        if (this._owner.hostConfig.actions.maxActions && this.items.length > this._owner.hostConfig.actions.maxActions) {
            result.push({
                error: Enums.ValidationError.TooManyActions,
                message: "A maximum of " + this._owner.hostConfig.actions.maxActions + " actions are allowed."
            });
        }
        if (this.items.length > 0 && !this._owner.hostConfig.supportsInteractivity) {
            result.push({
                error: Enums.ValidationError.InteractivityNotAllowed,
                message: "Interactivity is not allowed."
            });
        }
        for (var i = 0; i < this.items.length; i++) {
            if (!isActionAllowed(this.items[i], this._owner.getForbiddenActionTypes())) {
                result.push({
                    error: Enums.ValidationError.ActionTypeNotAllowed,
                    message: "Actions of type " + this.items[i].getJsonTypeName() + " are not allowe."
                });
            }
        }
        for (var i = 0; i < this.items.length; i++) {
            result = result.concat(this.items[i].validate());
        }
        return result;
    };
    ActionCollection.prototype.render = function (orientation, isDesignMode) {
        var _this = this;
        if (!this._owner.hostConfig.supportsInteractivity) {
            return null;
        }
        var element = document.createElement("div");
        var maxActions = this._owner.hostConfig.actions.maxActions ? Math.min(this._owner.hostConfig.actions.maxActions, this.items.length) : this.items.length;
        var forbiddenActionTypes = this._owner.getForbiddenActionTypes();
        this._actionCardContainer = document.createElement("div");
        this._renderedActionCount = 0;
        if (this._owner.hostConfig.actions.preExpandSingleShowCardAction && maxActions == 1 && this.items[0] instanceof ShowCardAction && isActionAllowed(this.items[0], forbiddenActionTypes)) {
            this.showActionCard(this.items[0], true);
            this._renderedActionCount = 1;
        }
        else {
            var buttonStrip = document.createElement("div");
            buttonStrip.className = this._owner.hostConfig.makeCssClassName("ac-actionSet");
            buttonStrip.style.display = "flex";
            if (orientation == Enums.Orientation.Horizontal) {
                buttonStrip.style.flexDirection = "row";
                if (this._owner.horizontalAlignment && this._owner.hostConfig.actions.actionAlignment != Enums.ActionAlignment.Stretch) {
                    switch (this._owner.horizontalAlignment) {
                        case Enums.HorizontalAlignment.Center:
                            buttonStrip.style.justifyContent = "center";
                            break;
                        case Enums.HorizontalAlignment.Right:
                            buttonStrip.style.justifyContent = "flex-end";
                            break;
                        default:
                            buttonStrip.style.justifyContent = "flex-start";
                            break;
                    }
                }
                else {
                    switch (this._owner.hostConfig.actions.actionAlignment) {
                        case Enums.ActionAlignment.Center:
                            buttonStrip.style.justifyContent = "center";
                            break;
                        case Enums.ActionAlignment.Right:
                            buttonStrip.style.justifyContent = "flex-end";
                            break;
                        default:
                            buttonStrip.style.justifyContent = "flex-start";
                            break;
                    }
                }
            }
            else {
                buttonStrip.style.flexDirection = "column";
                if (this._owner.horizontalAlignment && this._owner.hostConfig.actions.actionAlignment != Enums.ActionAlignment.Stretch) {
                    switch (this._owner.horizontalAlignment) {
                        case Enums.HorizontalAlignment.Center:
                            buttonStrip.style.alignItems = "center";
                            break;
                        case Enums.HorizontalAlignment.Right:
                            buttonStrip.style.alignItems = "flex-end";
                            break;
                        default:
                            buttonStrip.style.alignItems = "flex-start";
                            break;
                    }
                }
                else {
                    switch (this._owner.hostConfig.actions.actionAlignment) {
                        case Enums.ActionAlignment.Center:
                            buttonStrip.style.alignItems = "center";
                            break;
                        case Enums.ActionAlignment.Right:
                            buttonStrip.style.alignItems = "flex-end";
                            break;
                        case Enums.ActionAlignment.Stretch:
                            buttonStrip.style.alignItems = "stretch";
                            break;
                        default:
                            buttonStrip.style.alignItems = "flex-start";
                            break;
                    }
                }
            }
            var parentContainerStyle = this.getParentContainer().style;
            for (var i = 0; i < this.items.length; i++) {
                if (isActionAllowed(this.items[i], forbiddenActionTypes)) {
                    var actionButton = this.findActionButton(this.items[i]);
                    if (!actionButton) {
                        actionButton = new ActionButton(this.items[i], parentContainerStyle);
                        actionButton.onClick = function (ab) { _this.actionClicked(ab); };
                        this.buttons.push(actionButton);
                    }
                    actionButton.render(this._owner.hostConfig.actions.actionAlignment);
                    buttonStrip.appendChild(actionButton.action.renderedElement);
                    this._renderedActionCount++;
                    if (this._renderedActionCount >= this._owner.hostConfig.actions.maxActions || i == this.items.length - 1) {
                        break;
                    }
                    else if (this._owner.hostConfig.actions.buttonSpacing > 0) {
                        var spacer = document.createElement("div");
                        if (orientation === Enums.Orientation.Horizontal) {
                            spacer.style.flex = "0 0 auto";
                            spacer.style.width = this._owner.hostConfig.actions.buttonSpacing + "px";
                        }
                        else {
                            spacer.style.height = this._owner.hostConfig.actions.buttonSpacing + "px";
                        }
                        Utils.appendChild(buttonStrip, spacer);
                    }
                }
            }
            var buttonStripContainer = document.createElement("div");
            buttonStripContainer.style.overflow = "hidden";
            buttonStripContainer.appendChild(buttonStrip);
            Utils.appendChild(element, buttonStripContainer);
        }
        Utils.appendChild(element, this._actionCardContainer);
        for (var i = 0; i < this.buttons.length; i++) {
            if (this.buttons[i].state == ActionButtonState.Expanded) {
                this.expandShowCardAction(this.buttons[i].action, false);
                break;
            }
        }
        return this._renderedActionCount > 0 ? element : null;
    };
    ActionCollection.prototype.addAction = function (action) {
        if (!action) {
            throw new Error("The action parameter cannot be null.");
        }
        if ((!action.parent || action.parent === this._owner) && this.items.indexOf(action) < 0) {
            this.items.push(action);
            if (!action.parent) {
                action.setParent(this._owner);
            }
            invokeSetCollection(action, this);
        }
        else {
            throw new Error("The action already belongs to another element.");
        }
    };
    ActionCollection.prototype.removeAction = function (action) {
        if (this.expandedAction && this._expandedAction == action) {
            this.collapseExpandedAction();
        }
        var actionIndex = this.items.indexOf(action);
        if (actionIndex >= 0) {
            this.items.splice(actionIndex, 1);
            action.setParent(null);
            invokeSetCollection(action, null);
            for (var i = 0; i < this.buttons.length; i++) {
                if (this.buttons[i].action == action) {
                    this.buttons.splice(i, 1);
                    break;
                }
            }
            return true;
        }
        return false;
    };
    ActionCollection.prototype.clear = function () {
        this.items = [];
        this.buttons = [];
        this._expandedAction = null;
        this._renderedActionCount = 0;
    };
    ActionCollection.prototype.getAllInputs = function () {
        var result = [];
        for (var i = 0; i < this.items.length; i++) {
            var action = this.items[i];
            result = result.concat(action.getAllInputs());
        }
        return result;
    };
    ActionCollection.prototype.getResourceInformation = function () {
        var result = [];
        for (var i = 0; i < this.items.length; i++) {
            result = result.concat(this.items[i].getResourceInformation());
        }
        return result;
    };
    Object.defineProperty(ActionCollection.prototype, "renderedActionCount", {
        get: function () {
            return this._renderedActionCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionCollection.prototype, "expandedAction", {
        get: function () {
            return this._expandedAction;
        },
        enumerable: true,
        configurable: true
    });
    return ActionCollection;
}());
var ActionSet = /** @class */ (function (_super) {
    __extends(ActionSet, _super);
    function ActionSet() {
        var _this = _super.call(this) || this;
        _this.orientation = null;
        _this._actionCollection = new ActionCollection(_this);
        return _this;
    }
    ActionSet.prototype.internalRender = function () {
        return this._actionCollection.render(this.orientation ? this.orientation : this.hostConfig.actions.actionsOrientation, this.isDesignMode());
    };
    ActionSet.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setEnumProperty(Enums.Orientation, result, "orientation", this.orientation);
        Utils.setProperty(result, "actions", this._actionCollection.toJSON());
        return result;
    };
    ActionSet.prototype.isBleeding = function () {
        return this._actionCollection.expandedAction ? true : false;
    };
    ActionSet.prototype.getJsonTypeName = function () {
        return "ActionSet";
    };
    ActionSet.prototype.getActionCount = function () {
        return this._actionCollection.items.length;
    };
    ActionSet.prototype.getActionAt = function (index) {
        if (index >= 0 && index < this.getActionCount()) {
            return this._actionCollection.items[index];
        }
        else {
            _super.prototype.getActionAt.call(this, index);
        }
    };
    ActionSet.prototype.validate = function () {
        return this._actionCollection.validate();
    };
    ActionSet.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        var jsonOrientation = json["orientation"];
        if (jsonOrientation) {
            this.orientation = Utils.getEnumValueOrDefault(Enums.Orientation, jsonOrientation, Enums.Orientation.Horizontal);
        }
        this._actionCollection.parse(json["actions"], errors);
    };
    ActionSet.prototype.addAction = function (action) {
        this._actionCollection.addAction(action);
    };
    ActionSet.prototype.getAllInputs = function () {
        return this._actionCollection.getAllInputs();
    };
    ActionSet.prototype.getResourceInformation = function () {
        return this._actionCollection.getResourceInformation();
    };
    ActionSet.prototype.renderSpeech = function () {
        // TODO: What's the right thing to do here?
        return "";
    };
    Object.defineProperty(ActionSet.prototype, "isInteractive", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return ActionSet;
}(CardElement));
exports.ActionSet = ActionSet;
var BackgroundImage = /** @class */ (function () {
    function BackgroundImage() {
        this.mode = Enums.BackgroundImageMode.Stretch;
        this.horizontalAlignment = Enums.HorizontalAlignment.Left;
        this.verticalAlignment = Enums.VerticalAlignment.Top;
    }
    BackgroundImage.prototype.parse = function (json, errors) {
        this.url = json["url"];
        this.mode = Utils.getEnumValueOrDefault(Enums.BackgroundImageMode, json["mode"], this.mode);
        this.horizontalAlignment = Utils.getEnumValueOrDefault(Enums.HorizontalAlignment, json["horizontalAlignment"], this.horizontalAlignment);
        this.verticalAlignment = Utils.getEnumValueOrDefault(Enums.VerticalAlignment, json["verticalAlignment"], this.verticalAlignment);
    };
    BackgroundImage.prototype.apply = function (element) {
        if (this.url) {
            element.style.backgroundImage = "url('" + this.url + "')";
            switch (this.mode) {
                case Enums.BackgroundImageMode.Repeat:
                    element.style.backgroundRepeat = "repeat";
                    break;
                case Enums.BackgroundImageMode.RepeatHorizontally:
                    element.style.backgroundRepeat = "repeat-x";
                    break;
                case Enums.BackgroundImageMode.RepeatVertically:
                    element.style.backgroundRepeat = "repeat-y";
                    break;
                case Enums.BackgroundImageMode.Stretch:
                default:
                    element.style.backgroundRepeat = "no-repeat";
                    element.style.backgroundSize = "cover";
                    break;
            }
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.backgroundPositionX = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.backgroundPositionX = "right";
                    break;
            }
            switch (this.verticalAlignment) {
                case Enums.VerticalAlignment.Center:
                    element.style.backgroundPositionY = "center";
                    break;
                case Enums.VerticalAlignment.Bottom:
                    element.style.backgroundPositionY = "bottom";
                    break;
            }
        }
    };
    return BackgroundImage;
}());
exports.BackgroundImage = BackgroundImage;
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._items = [];
        _this._renderedItems = [];
        _this._style = null;
        _this.verticalContentAlignment = Enums.VerticalAlignment.Top;
        _this.rtl = null;
        return _this;
    }
    Container.prototype.isElementAllowed = function (element, forbiddenElementTypes) {
        if (!this.hostConfig.supportsInteractivity && element.isInteractive) {
            return false;
        }
        if (forbiddenElementTypes) {
            for (var i = 0; i < forbiddenElementTypes.length; i++) {
                if (element.getJsonTypeName() === forbiddenElementTypes[i]) {
                    return false;
                }
            }
        }
        return true;
    };
    Container.prototype.insertItemAt = function (item, index, forceInsert) {
        if (!item.parent || forceInsert) {
            if (item.isStandalone) {
                if (index < 0 || index >= this._items.length) {
                    this._items.push(item);
                }
                else {
                    this._items.splice(index, 0, item);
                }
                item.setParent(this);
            }
            else {
                throw new Error("Elements of type " + item.getJsonTypeName() + " cannot be used as standalone elements.");
            }
        }
        else {
            throw new Error("The element already belongs to another container.");
        }
    };
    Object.defineProperty(Container.prototype, "hasExplicitStyle", {
        get: function () {
            return this._style != null;
        },
        enumerable: true,
        configurable: true
    });
    Container.prototype.getItemsCollectionPropertyName = function () {
        return "items";
    };
    Container.prototype.isLastElementBleeding = function () {
        return this._renderedItems.length > 0 ? this._renderedItems[this._renderedItems.length - 1].isBleeding() : false;
    };
    Container.prototype.applyPadding = function () {
        if (!this.renderedElement) {
            return;
        }
        if (this.padding) {
            var physicalPadding = this.padding.toSpacingDefinition(this.hostConfig);
            this.renderedElement.style.paddingTop = physicalPadding.top + "px";
            this.renderedElement.style.paddingRight = physicalPadding.right + "px";
            this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
            this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
        }
        else if (this.hasBackground) {
            var physicalMargin = new SpacingDefinition();
            var physicalPadding = new SpacingDefinition();
            var useAutoPadding = (this.parent ? this.parent.canContentBleed() : false) && AdaptiveCard.useAutomaticContainerBleeding;
            if (useAutoPadding) {
                var effectivePadding = this.getNonZeroPadding();
                var effectiveMargin = new PaddingDefinition(effectivePadding.top, effectivePadding.right, effectivePadding.bottom, effectivePadding.left);
                if (!this.isAtTheVeryTop()) {
                    effectivePadding.top = Enums.Spacing.None;
                    effectiveMargin.top = Enums.Spacing.None;
                }
                if (!this.isAtTheVeryBottom()) {
                    effectivePadding.bottom = Enums.Spacing.None;
                    effectiveMargin.bottom = Enums.Spacing.None;
                }
                if (!this.isAtTheVeryLeft()) {
                    effectivePadding.left = Enums.Spacing.None;
                    effectiveMargin.left = Enums.Spacing.None;
                }
                if (!this.isAtTheVeryRight()) {
                    effectivePadding.right = Enums.Spacing.None;
                    effectiveMargin.right = Enums.Spacing.None;
                }
                if (effectivePadding.left != Enums.Spacing.None || effectivePadding.right != Enums.Spacing.None) {
                    if (effectivePadding.left == Enums.Spacing.None) {
                        effectivePadding.left = effectivePadding.right;
                    }
                    if (effectivePadding.right == Enums.Spacing.None) {
                        effectivePadding.right = effectivePadding.left;
                    }
                }
                if (effectivePadding.top != Enums.Spacing.None || effectivePadding.bottom != Enums.Spacing.None) {
                    if (effectivePadding.top == Enums.Spacing.None) {
                        effectivePadding.top = effectivePadding.bottom;
                    }
                    if (effectivePadding.bottom == Enums.Spacing.None) {
                        effectivePadding.bottom = effectivePadding.top;
                    }
                }
                if (effectivePadding.top != Enums.Spacing.None
                    || effectivePadding.right != Enums.Spacing.None
                    || effectivePadding.bottom != Enums.Spacing.None
                    || effectivePadding.left != Enums.Spacing.None) {
                    if (effectivePadding.top == Enums.Spacing.None) {
                        effectivePadding.top = Enums.Spacing.Default;
                    }
                    if (effectivePadding.right == Enums.Spacing.None) {
                        effectivePadding.right = Enums.Spacing.Default;
                    }
                    if (effectivePadding.bottom == Enums.Spacing.None) {
                        effectivePadding = Object.assign({}, effectivePadding, { bottom: Enums.Spacing.Default });
                    }
                    if (effectivePadding.left == Enums.Spacing.None) {
                        effectivePadding = Object.assign({}, effectivePadding, { left: Enums.Spacing.Default });
                    }
                }
                if (effectivePadding.top == Enums.Spacing.None &&
                    effectivePadding.right == Enums.Spacing.None &&
                    effectivePadding.bottom == Enums.Spacing.None &&
                    effectivePadding.left == Enums.Spacing.None) {
                    effectivePadding = new PaddingDefinition(Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding);
                }
                physicalMargin = effectiveMargin.toSpacingDefinition(this.hostConfig);
                physicalPadding = effectivePadding.toSpacingDefinition(this.hostConfig);
            }
            else {
                physicalPadding = new PaddingDefinition(Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding).toSpacingDefinition(this.hostConfig);
            }
            this.renderedElement.style.marginTop = "-" + physicalMargin.top + "px";
            this.renderedElement.style.marginRight = "-" + physicalMargin.right + "px";
            this.renderedElement.style.marginBottom = "-" + physicalMargin.bottom + "px";
            this.renderedElement.style.marginLeft = "-" + physicalMargin.left + "px";
            this.renderedElement.style.paddingTop = physicalPadding.top + "px";
            this.renderedElement.style.paddingRight = physicalPadding.right + "px";
            this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
            this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
            if (this.separatorElement) {
                if (this.separatorOrientation == Enums.Orientation.Horizontal) {
                    this.separatorElement.style.marginLeft = "-" + physicalMargin.left + "px";
                    this.separatorElement.style.marginRight = "-" + physicalMargin.right + "px";
                }
                else {
                    this.separatorElement.style.marginTop = "-" + physicalMargin.top + "px";
                    this.separatorElement.style.marginBottom = "-" + physicalMargin.bottom + "px";
                }
            }
        }
        if (this.isLastElementBleeding()) {
            this.renderedElement.style.paddingBottom = "0px";
        }
    };
    Container.prototype.internalRender = function () {
        var _this = this;
        this._renderedItems = [];
        // Cache hostConfig to avoid walking the parent hierarchy several times
        var hostConfig = this.hostConfig;
        var element = document.createElement("div");
        if (this.rtl != null && this.rtl) {
            element.dir = "rtl";
        }
        element.classList.add(hostConfig.makeCssClassName("ac-container"));
        element.style.display = "flex";
        element.style.flexDirection = "row";
        element.style.flexWrap = "wrap";
        if (AdaptiveCard.useAdvancedCardBottomTruncation) {
            // Forces the container to be at least as tall as its content.
            //
            // Fixes a quirk in Chrome where, for nested flex elements, the
            // inner element's height would never exceed the outer element's
            // height. This caused overflow truncation to break -- containers
            // would always be measured as not overflowing, since their heights
            // were constrained by their parents as opposed to truly reflecting
            // the height of their content.
            //
            // See the "Browser Rendering Notes" section of this answer:
            // https://stackoverflow.com/questions/36247140/why-doesnt-flex-item-shrink-past-content-size
            element.style.minHeight = '-webkit-min-content';
        }
        switch (this.verticalContentAlignment) {
            case Enums.VerticalAlignment.Center:
                element.style.justifyContent = "center";
                break;
            case Enums.VerticalAlignment.Bottom:
                element.style.justifyContent = "flex-end";
                break;
            default:
                element.style.justifyContent = "flex-start";
                break;
        }
        if (this.hasBackground) {
            if (this.backgroundImage) {
                this.backgroundImage.apply(element);
            }
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.style, this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));
            if (!Utils.isNullOrEmpty(styleDefinition.backgroundColor)) {
                element.style.backgroundColor = Utils.stringToCssColor(styleDefinition.backgroundColor);
            }
        }
        if (this.selectAction && hostConfig.supportsInteractivity) {
            element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
            element.tabIndex = 0;
            element.setAttribute("role", "button");
            element.setAttribute("aria-label", this.selectAction.title);
            element.onclick = function (e) {
                if (_this.selectAction != null) {
                    _this.selectAction.execute();
                    e.cancelBubble = true;
                }
            };
            element.onkeypress = function (e) {
                if (_this.selectAction != null) {
                    // Enter or space pressed
                    if (e.keyCode == 13 || e.keyCode == 32) {
                        _this.selectAction.execute();
                    }
                }
            };
        }
        if (this._items.length > 0) {
            for (var i = 0; i < this._items.length; i++) {
                var renderedElement = this.isElementAllowed(this._items[i], this.getForbiddenElementTypes()) ? this._items[i].render() : null;
                if (renderedElement) {
                    if (this._renderedItems.length > 0 && this._items[i].separatorElement) {
                        this._items[i].separatorElement.style.flex = "0 0 auto";
                        Utils.appendChild(element, this._items[i].separatorElement);
                    }
                    switch (this._items[i].getJsonTypeName()) {
                        case 'HtmlBlock':
                            var originHtml = element.innerHTML;
                            var renderHtml = renderedElement.innerHTML;
                            element.innerHTML = originHtml + renderHtml;
                            var htmlBlock = element.getAttribute("htmlBlock") ? element.getAttribute("htmlBlock") + "1" : "1";
                            element.setAttribute('htmlBlock', htmlBlock);
                            break;
                        default:
                            var htmlBlock = element.getAttribute("htmlBlock") ? element.getAttribute("htmlBlock") + "0" : "0";
                            element.setAttribute('htmlBlock', htmlBlock);
                            Utils.appendChild(element, renderedElement);
                            this._renderedItems.push(this._items[i]);
                            break;
                    }
                }
            }
        }
        else {
            if (this.isDesignMode()) {
                var placeholderElement = this.createPlaceholderElement();
                placeholderElement.style.width = "100%";
                placeholderElement.style.height = "100%";
                element.appendChild(placeholderElement);
            }
        }
        return element;
    };
    Container.prototype.truncateOverflow = function (maxHeight) {
        // Add 1 to account for rounding differences between browsers
        var boundary = this.renderedElement.offsetTop + maxHeight + 1;
        var handleElement = function (cardElement) {
            var elt = cardElement.renderedElement;
            if (elt) {
                switch (Utils.getFitStatus(elt, boundary)) {
                    case Enums.ContainerFitStatus.FullyInContainer:
                        var sizeChanged = cardElement['resetOverflow']();
                        // If the element's size changed after resetting content,
                        // we have to check if it still fits fully in the card
                        if (sizeChanged) {
                            handleElement(cardElement);
                        }
                        break;
                    case Enums.ContainerFitStatus.Overflowing:
                        var maxHeight_1 = boundary - elt.offsetTop;
                        cardElement['handleOverflow'](maxHeight_1);
                        break;
                    case Enums.ContainerFitStatus.FullyOutOfContainer:
                        cardElement['handleOverflow'](0);
                        break;
                }
            }
        };
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            handleElement(item);
        }
        return true;
    };
    Container.prototype.undoOverflowTruncation = function () {
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            item['resetOverflow']();
        }
    };
    Object.defineProperty(Container.prototype, "hasBackground", {
        get: function () {
            var parentContainer = this.getParentContainer();
            return this.backgroundImage != undefined || (this.hasExplicitStyle && (parentContainer ? parentContainer.style != this.style : false));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "defaultStyle", {
        get: function () {
            return Enums.ContainerStyle.Default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "allowCustomStyle", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Container.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        if (this._selectAction) {
            Utils.setProperty(result, "selectAction", this._selectAction.toJSON());
        }
        if (this.backgroundImage) {
            Utils.setProperty(result, "backgroundImage", this.backgroundImage.url);
        }
        Utils.setProperty(result, "style", this.style, "default");
        Utils.setEnumProperty(Enums.VerticalAlignment, result, "verticalContentAlignment", this.verticalContentAlignment, Enums.VerticalAlignment.Top);
        if (this._items.length > 0) {
            var elements = [];
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var element = _a[_i];
                elements.push(element.toJSON());
            }
            Utils.setProperty(result, this.getItemsCollectionPropertyName(), elements);
        }
        return result;
    };
    Container.prototype.getItemCount = function () {
        return this._items.length;
    };
    Container.prototype.getItemAt = function (index) {
        return this._items[index];
    };
    Container.prototype.getJsonTypeName = function () {
        return "Container";
    };
    Container.prototype.isBleeding = function () {
        return this.isLastElementBleeding();
    };
    Container.prototype.isFirstElement = function (element) {
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].isVisible) {
                return this._items[i] == element;
            }
        }
        return false;
    };
    Container.prototype.isLastElement = function (element) {
        for (var i = this._items.length - 1; i >= 0; i--) {
            if (this._items[i].isVisible) {
                return this._items[i] == element;
            }
        }
        return false;
    };
    Container.prototype.isRtl = function () {
        if (this.rtl != null) {
            return this.rtl;
        }
        else {
            var parentContainer = this.getParentContainer();
            return parentContainer ? parentContainer.isRtl() : false;
        }
    };
    Container.prototype.validate = function () {
        var result = [];
        if (this._style) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this._style);
            if (!styleDefinition) {
                result.push({
                    error: Enums.ValidationError.InvalidPropertyValue,
                    message: "Unknown container style: " + this._style
                });
            }
        }
        for (var i = 0; i < this._items.length; i++) {
            if (!this.hostConfig.supportsInteractivity && this._items[i].isInteractive) {
                result.push({
                    error: Enums.ValidationError.InteractivityNotAllowed,
                    message: "Interactivity is not allowed."
                });
            }
            if (!this.isElementAllowed(this._items[i], this.getForbiddenElementTypes())) {
                result.push({
                    error: Enums.ValidationError.InteractivityNotAllowed,
                    message: "Elements of type " + this._items[i].getJsonTypeName() + " are not allowed in this container."
                });
            }
            result = result.concat(this._items[i].validate());
        }
        return result;
    };
    Container.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.setShouldFallback(false);
        this._items = [];
        this._renderedItems = [];
        var jsonBackgroundImage = json["backgroundImage"];
        if (jsonBackgroundImage) {
            this.backgroundImage = new BackgroundImage();
            if (typeof jsonBackgroundImage === "string") {
                this.backgroundImage.url = jsonBackgroundImage;
                this.backgroundImage.mode = Enums.BackgroundImageMode.Stretch;
            }
            else if (typeof jsonBackgroundImage === "object") {
                this.backgroundImage = new BackgroundImage();
                this.backgroundImage.parse(json["backgroundImage"], errors);
            }
        }
        this.verticalContentAlignment = Utils.getEnumValueOrDefault(Enums.VerticalAlignment, json["verticalContentAlignment"], this.verticalContentAlignment);
        this._style = json["style"];
        this.selectAction = createActionInstance(this, json["selectAction"], errors);
        if (json[this.getItemsCollectionPropertyName()] != null) {
            var items = json[this.getItemsCollectionPropertyName()];
            this.clear();
            for (var i = 0; i < items.length; i++) {
                var element = createElementInstance(this, items[i], errors);
                if (element) {
                    this.insertItemAt(element, -1, true);
                }
            }
        }
    };
    Container.prototype.indexOf = function (cardElement) {
        return this._items.indexOf(cardElement);
    };
    Container.prototype.addItem = function (item) {
        this.insertItemAt(item, -1, false);
    };
    Container.prototype.insertItemBefore = function (item, insertBefore) {
        this.insertItemAt(item, this._items.indexOf(insertBefore), false);
    };
    Container.prototype.insertItemAfter = function (item, insertAfter) {
        this.insertItemAt(item, this._items.indexOf(insertAfter) + 1, false);
    };
    Container.prototype.removeItem = function (item) {
        var itemIndex = this._items.indexOf(item);
        if (itemIndex >= 0) {
            this._items.splice(itemIndex, 1);
            item.setParent(null);
            this.updateLayout();
            return true;
        }
        return false;
    };
    Container.prototype.clear = function () {
        this._items = [];
    };
    Container.prototype.canContentBleed = function () {
        return this.hasBackground ? false : _super.prototype.canContentBleed.call(this);
    };
    Container.prototype.getAllInputs = function () {
        var result = [];
        for (var i = 0; i < this._items.length; i++) {
            var item = this._items[i];
            result = result.concat(item.getAllInputs());
        }
        return result;
    };
    Container.prototype.getResourceInformation = function () {
        var result = [];
        if (this.backgroundImage && !Utils.isNullOrEmpty(this.backgroundImage.url)) {
            result.push({ url: this.backgroundImage.url, mimeType: "image" });
        }
        for (var i = 0; i < this.getItemCount(); i++) {
            result = result.concat(this.getItemAt(i).getResourceInformation());
        }
        return result;
    };
    Container.prototype.getElementById = function (id) {
        var result = _super.prototype.getElementById.call(this, id);
        if (!result) {
            for (var i = 0; i < this._items.length; i++) {
                result = this._items[i].getElementById(id);
                if (result) {
                    break;
                }
            }
        }
        return result;
    };
    Container.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result) {
            if (this.selectAction) {
                result = this.selectAction.getActionById(id);
            }
            if (!result) {
                for (var i = 0; i < this._items.length; i++) {
                    result = this._items[i].getActionById(id);
                    if (result) {
                        break;
                    }
                }
            }
        }
        return result;
    };
    Container.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak;
        }
        // render each item
        var speak = null;
        if (this._items.length > 0) {
            speak = '';
            for (var i = 0; i < this._items.length; i++) {
                var result = this._items[i].renderSpeech();
                if (result) {
                    speak += result;
                }
            }
        }
        return speak;
    };
    Container.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        _super.prototype.updateLayout.call(this, processChildren);
        this.applyPadding();
        if (processChildren) {
            for (var i = 0; i < this._items.length; i++) {
                this._items[i].updateLayout();
            }
        }
    };
    Object.defineProperty(Container.prototype, "style", {
        get: function () {
            if (this.allowCustomStyle) {
                if (this._style && this.hostConfig.containerStyles.getStyleByName(this._style)) {
                    return this._style;
                }
                return null;
            }
            else {
                return this.defaultStyle;
            }
        },
        set: function (value) {
            this._style = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "padding", {
        get: function () {
            return this.getPadding();
        },
        set: function (value) {
            this.setPadding(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
            if (this._selectAction) {
                this._selectAction.setParent(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Container;
}(CardElementContainer));
exports.Container = Container;
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(width) {
        if (width === void 0) { width = "auto"; }
        var _this = _super.call(this) || this;
        _this._computedWeight = 0;
        _this.width = "auto";
        _this.width = width;
        return _this;
    }
    Column.prototype.adjustRenderedElementSize = function (renderedElement) {
        if (this.isDesignMode()) {
            renderedElement.style.minWidth = "20px";
            renderedElement.style.minHeight = "20px";
        }
        else {
            renderedElement.style.minWidth = "0";
        }
        if (this.width === "auto") {
            renderedElement.style.flex = "0 1 auto";
        }
        else if (this.width === "stretch") {
            renderedElement.style.flex = "1 1 50px";
        }
        else {
            var sizeAndUnit = this.width;
            if (sizeAndUnit.unit == Enums.SizeUnit.Pixel) {
                renderedElement.style.flex = "0 0 auto";
                renderedElement.style.width = sizeAndUnit.physicalSize + "px";
            }
            else {
                renderedElement.style.flex = "1 1 " + (this._computedWeight > 0 ? this._computedWeight : sizeAndUnit.physicalSize) + "%";
            }
        }
    };
    Object.defineProperty(Column.prototype, "separatorOrientation", {
        get: function () {
            return Enums.Orientation.Vertical;
        },
        enumerable: true,
        configurable: true
    });
    Column.prototype.getJsonTypeName = function () {
        return "Column";
    };
    Column.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        if (this.width instanceof Utils.SizeAndUnit) {
            if (this.width.unit == Enums.SizeUnit.Pixel) {
                Utils.setProperty(result, "width", this.width.physicalSize + "px");
            }
            else {
                Utils.setProperty(result, "width", this.width.physicalSize);
            }
        }
        else {
            Utils.setProperty(result, "width", this.width);
        }
        return result;
    };
    Column.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        var jsonWidth = json["width"];
        if (jsonWidth === undefined) {
            jsonWidth = json["size"];
            if (jsonWidth !== undefined) {
                raiseParseError({
                    error: Enums.ValidationError.Deprecated,
                    message: "The \"Column.size\" property is deprecated and will be removed. Use the \"Column.width\" property instead."
                }, errors);
            }
        }
        var invalidWidth = false;
        try {
            this.width = Utils.SizeAndUnit.parse(jsonWidth);
        }
        catch (e) {
            if (typeof jsonWidth === "string" && (jsonWidth === "auto" || jsonWidth === "stretch")) {
                this.width = jsonWidth;
            }
            else {
                invalidWidth = true;
            }
        }
        if (invalidWidth) {
            raiseParseError({
                error: Enums.ValidationError.InvalidPropertyValue,
                message: "Invalid column width:" + jsonWidth + " - defaulting to \"auto\""
            }, errors);
        }
    };
    Object.defineProperty(Column.prototype, "hasVisibleSeparator", {
        get: function () {
            if (this.parent && this.parent instanceof ColumnSet) {
                return this.separatorElement && !this.parent.isLeftMostElement(this);
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return Column;
}(Container));
exports.Column = Column;
var ColumnSet = /** @class */ (function (_super) {
    __extends(ColumnSet, _super);
    function ColumnSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._columns = [];
        return _this;
    }
    ColumnSet.prototype.applyPadding = function () {
        if (this.padding) {
            if (this.renderedElement) {
                var physicalPadding = this.padding.toSpacingDefinition(this.hostConfig);
                this.renderedElement.style.paddingTop = physicalPadding.top + "px";
                this.renderedElement.style.paddingRight = physicalPadding.right + "px";
                this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
                this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
            }
        }
    };
    ColumnSet.prototype.internalRender = function () {
        var _this = this;
        if (this._columns.length > 0) {
            // Cache hostConfig to avoid walking the parent hierarchy several times
            var hostConfig = this.hostConfig;
            var element = document.createElement("div");
            element.className = hostConfig.makeCssClassName("ac-columnSet");
            element.style.display = "flex";
            if (AdaptiveCard.useAdvancedCardBottomTruncation) {
                // See comment in Container.internalRender()
                element.style.minHeight = '-webkit-min-content';
            }
            if (this.selectAction && hostConfig.supportsInteractivity) {
                element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
                element.onclick = function (e) {
                    _this.selectAction.execute();
                    e.cancelBubble = true;
                };
            }
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.justifyContent = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.justifyContent = "flex-end";
                    break;
                default:
                    element.style.justifyContent = "flex-start";
                    break;
            }
            var totalWeight = 0;
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.width instanceof Utils.SizeAndUnit && (column.width.unit == Enums.SizeUnit.Weight)) {
                    totalWeight += column.width.physicalSize;
                }
            }
            var renderedColumnCount = 0;
            for (var _b = 0, _c = this._columns; _b < _c.length; _b++) {
                var column = _c[_b];
                if (column.width instanceof Utils.SizeAndUnit && column.width.unit == Enums.SizeUnit.Weight && totalWeight > 0) {
                    var computedWeight = 100 / totalWeight * column.width.physicalSize;
                    // Best way to emulate "internal" access I know of
                    column["_computedWeight"] = computedWeight;
                }
                var renderedColumn = column.render();
                if (renderedColumn) {
                    if (renderedColumnCount > 0 && column.separatorElement) {
                        column.separatorElement.style.flex = "0 0 auto";
                        Utils.appendChild(element, column.separatorElement);
                    }
                    Utils.appendChild(element, renderedColumn);
                    renderedColumnCount++;
                }
            }
            return renderedColumnCount > 0 ? element : null;
        }
        else {
            return null;
        }
    };
    ColumnSet.prototype.truncateOverflow = function (maxHeight) {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column['handleOverflow'](maxHeight);
        }
        return true;
    };
    ColumnSet.prototype.undoOverflowTruncation = function () {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column['resetOverflow']();
        }
    };
    ColumnSet.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        if (this._selectAction) {
            Utils.setProperty(result, "selectAction", this.selectAction.toJSON());
        }
        if (this._columns.length > 0) {
            var columns = [];
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                columns.push(column.toJSON());
            }
            Utils.setProperty(result, "columns", columns);
        }
        return result;
    };
    ColumnSet.prototype.isFirstElement = function (element) {
        for (var i = 0; i < this._columns.length; i++) {
            if (this._columns[i].isVisible) {
                return this._columns[i] == element;
            }
        }
        return false;
    };
    ColumnSet.prototype.getCount = function () {
        return this._columns.length;
    };
    ColumnSet.prototype.getItemCount = function () {
        return this.getCount();
    };
    ColumnSet.prototype.getColumnAt = function (index) {
        return this._columns[index];
    };
    ColumnSet.prototype.getItemAt = function (index) {
        return this.getColumnAt(index);
    };
    ColumnSet.prototype.getJsonTypeName = function () {
        return "ColumnSet";
    };
    ColumnSet.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this.selectAction = createActionInstance(this, json["selectAction"], errors);
        if (json["columns"] != null) {
            var jsonColumns = json["columns"];
            this._columns = [];
            for (var i = 0; i < jsonColumns.length; i++) {
                var column = new Column();
                column.setParent(this);
                column.parse(jsonColumns[i], errors);
                this._columns.push(column);
            }
        }
    };
    ColumnSet.prototype.validate = function () {
        var result = [];
        var weightedColumns = 0;
        var stretchedColumns = 0;
        for (var i = 0; i < this._columns.length; i++) {
            if (typeof this._columns[i].width === "number") {
                weightedColumns++;
            }
            else if (this._columns[i].width === "stretch") {
                stretchedColumns++;
            }
            result = result.concat(this._columns[i].validate());
        }
        if (weightedColumns > 0 && stretchedColumns > 0) {
            result.push({
                error: Enums.ValidationError.Hint,
                message: "It is not recommended to use weighted and stretched columns in the same ColumnSet, because in such a situation stretched columns will always get the minimum amount of space."
            });
        }
        return result;
    };
    ColumnSet.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        _super.prototype.updateLayout.call(this, processChildren);
        this.applyPadding();
        if (processChildren) {
            for (var i = 0; i < this._columns.length; i++) {
                this._columns[i].updateLayout();
            }
        }
    };
    ColumnSet.prototype.addColumn = function (column) {
        if (!column.parent) {
            this._columns.push(column);
            column.setParent(this);
        }
        else {
            throw new Error("This column already belongs to another ColumnSet.");
        }
    };
    ColumnSet.prototype.removeItem = function (item) {
        if (item instanceof Column) {
            var itemIndex = this._columns.indexOf(item);
            if (itemIndex >= 0) {
                this._columns.splice(itemIndex, 1);
                item.setParent(null);
                this.updateLayout();
                return true;
            }
        }
        return false;
    };
    ColumnSet.prototype.indexOf = function (cardElement) {
        return cardElement instanceof Column ? this._columns.indexOf(cardElement) : -1;
    };
    ColumnSet.prototype.isLeftMostElement = function (element) {
        return this._columns.indexOf(element) == 0;
    };
    ColumnSet.prototype.isRightMostElement = function (element) {
        return this._columns.indexOf(element) == this._columns.length - 1;
    };
    ColumnSet.prototype.getAllInputs = function () {
        var result = [];
        for (var i = 0; i < this._columns.length; i++) {
            result = result.concat(this._columns[i].getAllInputs());
        }
        return result;
    };
    ColumnSet.prototype.getResourceInformation = function () {
        var result = [];
        for (var i = 0; i < this._columns.length; i++) {
            result = result.concat(this._columns[i].getResourceInformation());
        }
        return result;
    };
    ColumnSet.prototype.getElementById = function (id) {
        var result = _super.prototype.getElementById.call(this, id);
        if (!result) {
            for (var i = 0; i < this._columns.length; i++) {
                result = this._columns[i].getElementById(id);
                if (result) {
                    break;
                }
            }
        }
        return result;
    };
    ColumnSet.prototype.getActionById = function (id) {
        var result = null;
        for (var i = 0; i < this._columns.length; i++) {
            result = this._columns[i].getActionById(id);
            if (result) {
                break;
            }
        }
        return result;
    };
    ColumnSet.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak;
        }
        // render each item
        var speak = '';
        if (this._columns.length > 0) {
            for (var i = 0; i < this._columns.length; i++) {
                speak += this._columns[i].renderSpeech();
            }
        }
        return speak;
    };
    Object.defineProperty(ColumnSet.prototype, "padding", {
        get: function () {
            return this.getPadding();
        },
        set: function (value) {
            this.setPadding(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnSet.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
            if (this._selectAction) {
                this._selectAction.setParent(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    return ColumnSet;
}(CardElementContainer));
exports.ColumnSet = ColumnSet;
function raiseImageLoadedEvent(image) {
    var card = image.getRootElement();
    var onImageLoadedHandler = (card && card.onImageLoaded) ? card.onImageLoaded : AdaptiveCard.onImageLoaded;
    if (onImageLoadedHandler) {
        onImageLoadedHandler(image);
    }
}
function raiseAnchorClickedEvent(element, anchor) {
    var card = element.getRootElement();
    var onAnchorClickedHandler = (card && card.onAnchorClicked) ? card.onAnchorClicked : AdaptiveCard.onAnchorClicked;
    return onAnchorClickedHandler != null ? onAnchorClickedHandler(element, anchor) : false;
}
function raiseExecuteActionEvent(action) {
    var card = action.parent.getRootElement();
    var onExecuteActionHandler = (card && card.onExecuteAction) ? card.onExecuteAction : AdaptiveCard.onExecuteAction;
    if (onExecuteActionHandler) {
        action.prepare(action.parent.getRootElement().getAllInputs());
        onExecuteActionHandler(action);
    }
}
function raiseInlineCardExpandedEvent(action, isExpanded) {
    var card = action.parent.getRootElement();
    var onInlineCardExpandedHandler = (card && card.onInlineCardExpanded) ? card.onInlineCardExpanded : AdaptiveCard.onInlineCardExpanded;
    if (onInlineCardExpandedHandler) {
        onInlineCardExpandedHandler(action, isExpanded);
    }
}
function raiseElementVisibilityChangedEvent(element, shouldUpdateLayout) {
    if (shouldUpdateLayout === void 0) { shouldUpdateLayout = true; }
    var rootElement = element.getRootElement();
    if (shouldUpdateLayout) {
        rootElement.updateLayout();
    }
    var card = rootElement;
    var onElementVisibilityChangedHandler = (card && card.onElementVisibilityChanged) ? card.onElementVisibilityChanged : AdaptiveCard.onElementVisibilityChanged;
    if (onElementVisibilityChangedHandler != null) {
        onElementVisibilityChangedHandler(element);
    }
}
function raiseParseElementEvent(element, json, errors) {
    var card = element.getRootElement();
    var onParseElementHandler = (card && card.onParseElement) ? card.onParseElement : AdaptiveCard.onParseElement;
    if (onParseElementHandler != null) {
        onParseElementHandler(element, json, errors);
    }
}
function raiseParseActionEvent(action, json, errors) {
    var card = action.parent ? action.parent.getRootElement() : null;
    var onParseActionHandler = (card && card.onParseAction) ? card.onParseAction : AdaptiveCard.onParseAction;
    if (onParseActionHandler != null) {
        onParseActionHandler(action, json, errors);
    }
}
function raiseParseError(error, errors) {
    if (errors) {
        errors.push(error);
    }
    if (AdaptiveCard.onParseError != null) {
        AdaptiveCard.onParseError(error);
    }
}
var ContainerWithActions = /** @class */ (function (_super) {
    __extends(ContainerWithActions, _super);
    function ContainerWithActions() {
        var _this = _super.call(this) || this;
        _this._actionCollection = new ActionCollection(_this);
        return _this;
    }
    Object.defineProperty(ContainerWithActions.prototype, "renderIfEmpty", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ContainerWithActions.prototype.internalRender = function () {
        var element = _super.prototype.internalRender.call(this);
        var renderedActions = this._actionCollection.render(this.hostConfig.actions.actionsOrientation, false);
        if (renderedActions) {
            Utils.appendChild(element, Utils.renderSeparation({
                spacing: this.hostConfig.getEffectiveSpacing(this.hostConfig.actions.spacing),
                lineThickness: null,
                lineColor: null
            }, Enums.Orientation.Horizontal));
            Utils.appendChild(element, renderedActions);
        }
        if (this.renderIfEmpty) {
            return element;
        }
        else {
            return element.children.length > 0 ? element : null;
        }
    };
    ContainerWithActions.prototype.isLastElementBleeding = function () {
        if (this._actionCollection.renderedActionCount == 0) {
            return _super.prototype.isLastElementBleeding.call(this) ? !this.isDesignMode() : false;
        }
        else {
            if (this._actionCollection.items.length == 1) {
                return this._actionCollection.expandedAction != null && !this.hostConfig.actions.preExpandSingleShowCardAction;
            }
            else {
                return this._actionCollection.expandedAction != null;
            }
        }
    };
    ContainerWithActions.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "actions", this._actionCollection.toJSON());
        return result;
    };
    ContainerWithActions.prototype.getActionCount = function () {
        return this._actionCollection.items.length;
    };
    ContainerWithActions.prototype.getActionAt = function (index) {
        if (index >= 0 && index < this.getActionCount()) {
            return this._actionCollection.items[index];
        }
        else {
            _super.prototype.getActionAt.call(this, index);
        }
    };
    ContainerWithActions.prototype.getActionById = function (id) {
        var result = this._actionCollection.getActionById(id);
        return result ? result : _super.prototype.getActionById.call(this, id);
    };
    ContainerWithActions.prototype.parse = function (json, errors) {
        _super.prototype.parse.call(this, json, errors);
        this._actionCollection.parse(json["actions"]);
    };
    ContainerWithActions.prototype.validate = function () {
        var result = _super.prototype.validate.call(this);
        if (this._actionCollection) {
            result = result.concat(this._actionCollection.validate());
        }
        return result;
    };
    ContainerWithActions.prototype.isLastElement = function (element) {
        return _super.prototype.isLastElement.call(this, element) && this._actionCollection.items.length == 0;
    };
    ContainerWithActions.prototype.addAction = function (action) {
        this._actionCollection.addAction(action);
    };
    ContainerWithActions.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._actionCollection.clear();
    };
    ContainerWithActions.prototype.getAllInputs = function () {
        return _super.prototype.getAllInputs.call(this).concat(this._actionCollection.getAllInputs());
    };
    ContainerWithActions.prototype.getResourceInformation = function () {
        return _super.prototype.getResourceInformation.call(this).concat(this._actionCollection.getResourceInformation());
    };
    Object.defineProperty(ContainerWithActions.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return ContainerWithActions;
}(Container));
exports.ContainerWithActions = ContainerWithActions;
var TypeRegistry = /** @class */ (function () {
    function TypeRegistry() {
        this._items = [];
        this.reset();
    }
    TypeRegistry.prototype.findTypeRegistration = function (typeName) {
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].typeName === typeName) {
                return this._items[i];
            }
        }
        return null;
    };
    TypeRegistry.prototype.clear = function () {
        this._items = [];
    };
    TypeRegistry.prototype.registerType = function (typeName, createInstance) {
        var registrationInfo = this.findTypeRegistration(typeName);
        if (registrationInfo != null) {
            registrationInfo.createInstance = createInstance;
        }
        else {
            registrationInfo = {
                typeName: typeName,
                createInstance: createInstance
            };
            this._items.push(registrationInfo);
        }
    };
    TypeRegistry.prototype.unregisterType = function (typeName) {
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].typeName === typeName) {
                this._items.splice(i, 1);
                return;
            }
        }
    };
    TypeRegistry.prototype.createInstance = function (typeName) {
        var registrationInfo = this.findTypeRegistration(typeName);
        return registrationInfo ? registrationInfo.createInstance() : null;
    };
    TypeRegistry.prototype.getItemCount = function () {
        return this._items.length;
    };
    TypeRegistry.prototype.getItemAt = function (index) {
        return this._items[index];
    };
    return TypeRegistry;
}());
exports.TypeRegistry = TypeRegistry;
var ElementTypeRegistry = /** @class */ (function (_super) {
    __extends(ElementTypeRegistry, _super);
    function ElementTypeRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementTypeRegistry.prototype.reset = function () {
        this.clear();
        this.registerType("Container", function () { return new Container(); });
        this.registerType("HtmlBlock", function () { return new HtmlBlock(); });
        this.registerType("TextBlock", function () { return new TextBlock(); });
        this.registerType("Image", function () { return new Image(); });
        this.registerType("ImageSet", function () { return new ImageSet(); });
        this.registerType("Media", function () { return new Media(); });
        this.registerType("FactSet", function () { return new FactSet(); });
        this.registerType("ColumnSet", function () { return new ColumnSet(); });
        this.registerType("Input.Text", function () { return new TextInput(); });
        this.registerType("Input.Date", function () { return new DateInput(); });
        this.registerType("Input.Time", function () { return new TimeInput(); });
        this.registerType("Input.Number", function () { return new NumberInput(); });
        this.registerType("Input.ChoiceSet", function () { return new ChoiceSetInput(); });
        this.registerType("Input.Toggle", function () { return new ToggleInput(); });
    };
    return ElementTypeRegistry;
}(TypeRegistry));
exports.ElementTypeRegistry = ElementTypeRegistry;
var ActionTypeRegistry = /** @class */ (function (_super) {
    __extends(ActionTypeRegistry, _super);
    function ActionTypeRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionTypeRegistry.prototype.reset = function () {
        this.clear();
        this.registerType("Action.OpenUrl", function () { return new OpenUrlAction(); });
        this.registerType("Action.Submit", function () { return new SubmitAction(); });
        this.registerType("Action.ShowCard", function () { return new ShowCardAction(); });
    };
    return ActionTypeRegistry;
}(TypeRegistry));
exports.ActionTypeRegistry = ActionTypeRegistry;
var AdaptiveCard = /** @class */ (function (_super) {
    __extends(AdaptiveCard, _super);
    function AdaptiveCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cardTypeName = "AdaptiveCard";
        _this._fallbackCard = null;
        _this.onAnchorClicked = null;
        _this.onExecuteAction = null;
        _this.onElementVisibilityChanged = null;
        _this.onImageLoaded = null;
        _this.onInlineCardExpanded = null;
        _this.onParseElement = null;
        _this.onParseAction = null;
        _this.version = new HostConfig.Version(1, 0);
        _this.designMode = false;
        return _this;
    }
    Object.defineProperty(AdaptiveCard, "processMarkdown", {
        get: function () {
            throw new Error("The processMarkdown event has been removed. Please update your code and set onProcessMarkdown instead.");
        },
        set: function (value) {
            throw new Error("The processMarkdown event has been removed. Please update your code and set onProcessMarkdown instead.");
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveCard.applyMarkdown = function (text) {
        var result = {
            didProcess: false
        };
        if (AdaptiveCard.onProcessMarkdown) {
            AdaptiveCard.onProcessMarkdown(text, result);
        }
        else if (window["markdownit"]) {
            // Check for markdownit
            result.outputHtml = window["markdownit"]().render(text);
            result.didProcess = true;
        }
        else {
            console.warn("Markdown processing isn't enabled. Please see https://www.npmjs.com/package/adaptivecards#supporting-markdown");
        }
        return result;
    };
    AdaptiveCard.prototype.isVersionSupported = function () {
        if (this.bypassVersionCheck) {
            return true;
        }
        else {
            var unsupportedVersion = !this.version ||
                !this.version.isValid ||
                (AdaptiveCard.currentVersion.major < this.version.major) ||
                (AdaptiveCard.currentVersion.major == this.version.major && AdaptiveCard.currentVersion.minor < this.version.minor);
            return !unsupportedVersion;
        }
    };
    Object.defineProperty(AdaptiveCard.prototype, "renderIfEmpty", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveCard.prototype.getItemsCollectionPropertyName = function () {
        return "body";
    };
    AdaptiveCard.prototype.applyPadding = function () {
        if (!this.renderedElement) {
            return;
        }
        var effectivePadding = this.padding ? this.padding.toSpacingDefinition(this.hostConfig) : this.internalPadding.toSpacingDefinition(this.hostConfig);
        this.renderedElement.style.paddingTop = effectivePadding.top + "px";
        this.renderedElement.style.paddingRight = effectivePadding.right + "px";
        this.renderedElement.style.paddingBottom = effectivePadding.bottom + "px";
        this.renderedElement.style.paddingLeft = effectivePadding.left + "px";
        if (this.isLastElementBleeding()) {
            this.renderedElement.style.paddingBottom = "0px";
        }
    };
    AdaptiveCard.prototype.internalRender = function () {
        var renderedElement = _super.prototype.internalRender.call(this);
        if (AdaptiveCard.useAdvancedCardBottomTruncation) {
            // Unlike containers, the root card element should be allowed to
            // be shorter than its content (otherwise the overflow truncation
            // logic would never get triggered)
            renderedElement.style.minHeight = null;
        }
        return renderedElement;
    };
    Object.defineProperty(AdaptiveCard.prototype, "bypassVersionCheck", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "defaultPadding", {
        get: function () {
            return new PaddingDefinition(Enums.Spacing.None, Enums.Spacing.None, Enums.Spacing.None, Enums.Spacing.None);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "allowCustomPadding", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "allowCustomStyle", {
        get: function () {
            return this.hostConfig.adaptiveCard && this.hostConfig.adaptiveCard.allowCustomStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "hasBackground", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveCard.prototype.getJsonTypeName = function () {
        return "AdaptiveCard";
    };
    AdaptiveCard.prototype.toJSON = function () {
        var result = _super.prototype.toJSON.call(this);
        Utils.setProperty(result, "$schema", "http://adaptivecards.io/schemas/adaptive-card.json");
        if (!this.bypassVersionCheck && this.version) {
            Utils.setProperty(result, "version", this.version.toString());
        }
        Utils.setProperty(result, "fallbackText", this.fallbackText);
        Utils.setProperty(result, "lang", this.lang);
        Utils.setProperty(result, "speak", this.speak);
        return result;
    };
    AdaptiveCard.prototype.validate = function () {
        var result = [];
        if (this._cardTypeName != "AdaptiveCard") {
            result.push({
                error: Enums.ValidationError.MissingCardType,
                message: "Invalid or missing card type. Make sure the card's type property is set to \"AdaptiveCard\"."
            });
        }
        if (!this.bypassVersionCheck && !this.version) {
            result.push({
                error: Enums.ValidationError.PropertyCantBeNull,
                message: "The version property must be specified."
            });
        }
        else if (!this.isVersionSupported()) {
            result.push({
                error: Enums.ValidationError.UnsupportedCardVersion,
                message: "The specified card version (" + this.version + ") is not supported. The maximum supported card version is " + AdaptiveCard.currentVersion
            });
        }
        return result.concat(_super.prototype.validate.call(this));
    };
    AdaptiveCard.prototype.parse = function (json, errors) {
        this._fallbackCard = null;
        this._cardTypeName = json["type"];
        var langId = json["lang"];
        if (langId && typeof langId === "string") {
            try {
                this.lang = langId;
            }
            catch (e) {
                raiseParseError({
                    error: Enums.ValidationError.InvalidPropertyValue,
                    message: e.message
                }, errors);
            }
        }
        this.version = HostConfig.Version.parse(json["version"], errors);
        this.fallbackText = json["fallbackText"];
        var fallbackElement = createElementInstance(null, json["fallback"], errors);
        if (fallbackElement) {
            this._fallbackCard = new AdaptiveCard();
            this._fallbackCard.addItem(fallbackElement);
        }
        _super.prototype.parse.call(this, json, errors);
    };
    AdaptiveCard.prototype.render = function (target) {
        var fallback = false;
        var renderedCard;
        if (this.shouldFallback()) {
            if (this._fallbackCard) {
                this._fallbackCard.hostConfig = this.hostConfig;
                renderedCard = this._fallbackCard.render();
            }
            else {
                var errorText = !Utils.isNullOrEmpty(this.fallbackText) ? this.fallbackText : "The card could not be rendered. It is either malformed or uses features not supported by this host.";
                try {
                    var fallbackCard = new AdaptiveCard();
                    fallbackCard.hostConfig = this.hostConfig;
                    fallbackCard.parse({
                        type: "AdaptiveCard",
                        version: "1.0",
                        body: [
                            {
                                type: "TextBlock",
                                text: errorText,
                                wrap: true
                            }
                        ]
                    });
                    renderedCard = fallbackCard.render();
                }
                catch (e) {
                    renderedCard = document.createElement("div");
                    renderedCard.innerHTML = errorText;
                }
            }
        }
        else {
            renderedCard = _super.prototype.render.call(this);
            if (renderedCard) {
                renderedCard.tabIndex = 0;
                if (!Utils.isNullOrEmpty(this.speak)) {
                    renderedCard.setAttribute("aria-label", this.speak);
                }
            }
        }
        if (target) {
            target.appendChild(renderedCard);
            this.updateLayout();
        }
        return renderedCard;
    };
    AdaptiveCard.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (AdaptiveCard.useAdvancedCardBottomTruncation && this.isRendered()) {
            var card = this.renderedElement;
            var padding = this.hostConfig.getEffectiveSpacing(Enums.Spacing.Default);
            this['handleOverflow'](card.offsetHeight - padding);
        }
    };
    AdaptiveCard.prototype.canContentBleed = function () {
        return true;
    };
    AdaptiveCard.prototype.shouldFallback = function () {
        return _super.prototype.shouldFallback.call(this) || !this.isVersionSupported();
    };
    Object.defineProperty(AdaptiveCard.prototype, "hasVisibleSeparator", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveCard.currentVersion = new HostConfig.Version(1, 1);
    AdaptiveCard.useAutomaticContainerBleeding = false;
    AdaptiveCard.useAdvancedHtmlBlockTruncation = true;
    AdaptiveCard.useAdvancedTextBlockTruncation = true;
    AdaptiveCard.useAdvancedCardBottomTruncation = false;
    AdaptiveCard.useMarkdownInRadioButtonAndCheckbox = true;
    AdaptiveCard.allowMarkForTextHighlighting = false;
    AdaptiveCard.elementTypeRegistry = new ElementTypeRegistry();
    AdaptiveCard.actionTypeRegistry = new ActionTypeRegistry();
    AdaptiveCard.onAnchorClicked = null;
    AdaptiveCard.onExecuteAction = null;
    AdaptiveCard.onElementVisibilityChanged = null;
    AdaptiveCard.onImageLoaded = null;
    AdaptiveCard.onInlineCardExpanded = null;
    AdaptiveCard.onParseElement = null;
    AdaptiveCard.onParseAction = null;
    AdaptiveCard.onParseError = null;
    AdaptiveCard.onProcessMarkdown = null;
    return AdaptiveCard;
}(ContainerWithActions));
exports.AdaptiveCard = AdaptiveCard;
var InlineAdaptiveCard = /** @class */ (function (_super) {
    __extends(InlineAdaptiveCard, _super);
    function InlineAdaptiveCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suppressStyle = false;
        return _this;
    }
    Object.defineProperty(InlineAdaptiveCard.prototype, "bypassVersionCheck", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineAdaptiveCard.prototype, "defaultPadding", {
        get: function () {
            return new PaddingDefinition(this.suppressStyle ? Enums.Spacing.None : Enums.Spacing.Padding, Enums.Spacing.Padding, this.suppressStyle ? Enums.Spacing.None : Enums.Spacing.Padding, Enums.Spacing.Padding);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineAdaptiveCard.prototype, "defaultStyle", {
        get: function () {
            if (this.suppressStyle) {
                return Enums.ContainerStyle.Default;
            }
            else {
                return this.hostConfig.actions.showCard.style ? this.hostConfig.actions.showCard.style : Enums.ContainerStyle.Emphasis;
            }
        },
        enumerable: true,
        configurable: true
    });
    InlineAdaptiveCard.prototype.render = function (target) {
        var renderedCard = _super.prototype.render.call(this, target);
        renderedCard.setAttribute("aria-live", "polite");
        renderedCard.removeAttribute("tabindex");
        return renderedCard;
    };
    InlineAdaptiveCard.prototype.getForbiddenActionTypes = function () {
        return [ShowCardAction];
    };
    return InlineAdaptiveCard;
}(AdaptiveCard));
var defaultHostConfig = new HostConfig.HostConfig({
    supportsInteractivity: true,
    fontFamily: "Segoe UI",
    spacing: {
        small: 10,
        default: 20,
        medium: 30,
        large: 40,
        extraLarge: 50,
        padding: 20
    },
    separator: {
        lineThickness: 1,
        lineColor: "#EEEEEE"
    },
    fontSizes: {
        small: 12,
        default: 14,
        medium: 17,
        large: 21,
        extraLarge: 26
    },
    fontWeights: {
        lighter: 200,
        default: 400,
        bolder: 600
    },
    imageSizes: {
        small: 40,
        medium: 80,
        large: 160
    },
    containerStyles: {
        default: {
            backgroundColor: "#FFFFFF",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        emphasis: {
            backgroundColor: "#08000000",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        }
    },
    actions: {
        maxActions: 5,
        spacing: Enums.Spacing.Default,
        buttonSpacing: 10,
        showCard: {
            actionMode: Enums.ShowCardActionMode.Inline,
            inlineTopMargin: 16
        },
        actionsOrientation: Enums.Orientation.Horizontal,
        actionAlignment: Enums.ActionAlignment.Left
    },
    adaptiveCard: {
        allowCustomStyle: false
    },
    imageSet: {
        imageSize: Enums.Size.Medium,
        maxImageHeight: 100
    },
    factSet: {
        title: {
            color: Enums.TextColor.Default,
            size: Enums.TextSize.Default,
            isSubtle: false,
            weight: Enums.TextWeight.Bolder,
            wrap: true,
            maxWidth: 150,
        },
        value: {
            color: Enums.TextColor.Default,
            size: Enums.TextSize.Default,
            isSubtle: false,
            weight: Enums.TextWeight.Default,
            wrap: true,
        },
        spacing: 10
    }
});


/***/ }),

/***/ "./src/enums.ts":
/*!**********************!*\
  !*** ./src/enums.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Size;
(function (Size) {
    Size[Size["Auto"] = 0] = "Auto";
    Size[Size["Stretch"] = 1] = "Stretch";
    Size[Size["Small"] = 2] = "Small";
    Size[Size["Medium"] = 3] = "Medium";
    Size[Size["Large"] = 4] = "Large";
})(Size = exports.Size || (exports.Size = {}));
var SizeUnit;
(function (SizeUnit) {
    SizeUnit[SizeUnit["Weight"] = 0] = "Weight";
    SizeUnit[SizeUnit["Pixel"] = 1] = "Pixel";
})(SizeUnit = exports.SizeUnit || (exports.SizeUnit = {}));
var TextSize;
(function (TextSize) {
    TextSize[TextSize["Small"] = 0] = "Small";
    TextSize[TextSize["Default"] = 1] = "Default";
    TextSize[TextSize["Medium"] = 2] = "Medium";
    TextSize[TextSize["Large"] = 3] = "Large";
    TextSize[TextSize["ExtraLarge"] = 4] = "ExtraLarge";
})(TextSize = exports.TextSize || (exports.TextSize = {}));
var Spacing;
(function (Spacing) {
    Spacing[Spacing["None"] = 0] = "None";
    Spacing[Spacing["Small"] = 1] = "Small";
    Spacing[Spacing["Default"] = 2] = "Default";
    Spacing[Spacing["Medium"] = 3] = "Medium";
    Spacing[Spacing["Large"] = 4] = "Large";
    Spacing[Spacing["ExtraLarge"] = 5] = "ExtraLarge";
    Spacing[Spacing["Padding"] = 6] = "Padding";
})(Spacing = exports.Spacing || (exports.Spacing = {}));
var TextWeight;
(function (TextWeight) {
    TextWeight[TextWeight["Lighter"] = 0] = "Lighter";
    TextWeight[TextWeight["Default"] = 1] = "Default";
    TextWeight[TextWeight["Bolder"] = 2] = "Bolder";
})(TextWeight = exports.TextWeight || (exports.TextWeight = {}));
var TextColor;
(function (TextColor) {
    TextColor[TextColor["Default"] = 0] = "Default";
    TextColor[TextColor["Dark"] = 1] = "Dark";
    TextColor[TextColor["Light"] = 2] = "Light";
    TextColor[TextColor["Accent"] = 3] = "Accent";
    TextColor[TextColor["Good"] = 4] = "Good";
    TextColor[TextColor["Warning"] = 5] = "Warning";
    TextColor[TextColor["Attention"] = 6] = "Attention";
})(TextColor = exports.TextColor || (exports.TextColor = {}));
var HorizontalAlignment;
(function (HorizontalAlignment) {
    HorizontalAlignment[HorizontalAlignment["Left"] = 0] = "Left";
    HorizontalAlignment[HorizontalAlignment["Center"] = 1] = "Center";
    HorizontalAlignment[HorizontalAlignment["Right"] = 2] = "Right";
    HorizontalAlignment[HorizontalAlignment["IconLeft"] = 3] = "IconLeft";
    HorizontalAlignment[HorizontalAlignment["IconRight"] = 4] = "IconRight";
})(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
var VerticalAlignment;
(function (VerticalAlignment) {
    VerticalAlignment[VerticalAlignment["Top"] = 0] = "Top";
    VerticalAlignment[VerticalAlignment["Center"] = 1] = "Center";
    VerticalAlignment[VerticalAlignment["Bottom"] = 2] = "Bottom";
})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
var ActionAlignment;
(function (ActionAlignment) {
    ActionAlignment[ActionAlignment["Left"] = 0] = "Left";
    ActionAlignment[ActionAlignment["Center"] = 1] = "Center";
    ActionAlignment[ActionAlignment["Right"] = 2] = "Right";
    ActionAlignment[ActionAlignment["Stretch"] = 3] = "Stretch";
})(ActionAlignment = exports.ActionAlignment || (exports.ActionAlignment = {}));
var ImageStyle;
(function (ImageStyle) {
    ImageStyle[ImageStyle["Default"] = 0] = "Default";
    ImageStyle[ImageStyle["Person"] = 1] = "Person";
    ImageStyle[ImageStyle["Emotion"] = 2] = "Emotion";
})(ImageStyle = exports.ImageStyle || (exports.ImageStyle = {}));
var ShowCardActionMode;
(function (ShowCardActionMode) {
    ShowCardActionMode[ShowCardActionMode["Inline"] = 0] = "Inline";
    ShowCardActionMode[ShowCardActionMode["Popup"] = 1] = "Popup";
})(ShowCardActionMode = exports.ShowCardActionMode || (exports.ShowCardActionMode = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
    Orientation[Orientation["Vertical"] = 1] = "Vertical";
})(Orientation = exports.Orientation || (exports.Orientation = {}));
var BackgroundImageMode;
(function (BackgroundImageMode) {
    BackgroundImageMode[BackgroundImageMode["Stretch"] = 0] = "Stretch";
    BackgroundImageMode[BackgroundImageMode["RepeatHorizontally"] = 1] = "RepeatHorizontally";
    BackgroundImageMode[BackgroundImageMode["RepeatVertically"] = 2] = "RepeatVertically";
    BackgroundImageMode[BackgroundImageMode["Repeat"] = 3] = "Repeat";
})(BackgroundImageMode = exports.BackgroundImageMode || (exports.BackgroundImageMode = {}));
var ActionIconPlacement;
(function (ActionIconPlacement) {
    ActionIconPlacement[ActionIconPlacement["LeftOfTitle"] = 0] = "LeftOfTitle";
    ActionIconPlacement[ActionIconPlacement["AboveTitle"] = 1] = "AboveTitle";
})(ActionIconPlacement = exports.ActionIconPlacement || (exports.ActionIconPlacement = {}));
var InputTextStyle;
(function (InputTextStyle) {
    InputTextStyle[InputTextStyle["Text"] = 0] = "Text";
    InputTextStyle[InputTextStyle["Tel"] = 1] = "Tel";
    InputTextStyle[InputTextStyle["Url"] = 2] = "Url";
    InputTextStyle[InputTextStyle["Email"] = 3] = "Email";
})(InputTextStyle = exports.InputTextStyle || (exports.InputTextStyle = {}));
/*
    This should really be a string enum, e.g.

        export enum ContainerStyle {
            Default = "default",
            Emphasis = "emphasis"
        }

    However, some hosts do not use a version of TypeScript
    recent enough to understand string enums. This is
    a compatible construct that does not require using
    a more recent version of TypeScript.
*/
var ContainerStyle = /** @class */ (function () {
    function ContainerStyle() {
    }
    ContainerStyle.Default = "default";
    ContainerStyle.Emphasis = "emphasis";
    return ContainerStyle;
}());
exports.ContainerStyle = ContainerStyle;
var ValidationError;
(function (ValidationError) {
    ValidationError[ValidationError["Hint"] = 0] = "Hint";
    ValidationError[ValidationError["ActionTypeNotAllowed"] = 1] = "ActionTypeNotAllowed";
    ValidationError[ValidationError["CollectionCantBeEmpty"] = 2] = "CollectionCantBeEmpty";
    ValidationError[ValidationError["Deprecated"] = 3] = "Deprecated";
    ValidationError[ValidationError["ElementTypeNotAllowed"] = 4] = "ElementTypeNotAllowed";
    ValidationError[ValidationError["InteractivityNotAllowed"] = 5] = "InteractivityNotAllowed";
    ValidationError[ValidationError["InvalidPropertyValue"] = 6] = "InvalidPropertyValue";
    ValidationError[ValidationError["MissingCardType"] = 7] = "MissingCardType";
    ValidationError[ValidationError["PropertyCantBeNull"] = 8] = "PropertyCantBeNull";
    ValidationError[ValidationError["TooManyActions"] = 9] = "TooManyActions";
    ValidationError[ValidationError["UnknownActionType"] = 10] = "UnknownActionType";
    ValidationError[ValidationError["UnknownElementType"] = 11] = "UnknownElementType";
    ValidationError[ValidationError["UnsupportedCardVersion"] = 12] = "UnsupportedCardVersion";
})(ValidationError = exports.ValidationError || (exports.ValidationError = {}));
var ContainerFitStatus;
(function (ContainerFitStatus) {
    ContainerFitStatus[ContainerFitStatus["FullyInContainer"] = 0] = "FullyInContainer";
    ContainerFitStatus[ContainerFitStatus["Overflowing"] = 1] = "Overflowing";
    ContainerFitStatus[ContainerFitStatus["FullyOutOfContainer"] = 2] = "FullyOutOfContainer";
})(ContainerFitStatus = exports.ContainerFitStatus || (exports.ContainerFitStatus = {}));


/***/ }),

/***/ "./src/host-config.ts":
/*!****************************!*\
  !*** ./src/host-config.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
var Utils = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var TextColorDefinition = /** @class */ (function () {
    function TextColorDefinition(obj) {
        this.default = "#000000";
        this.subtle = "#666666";
        if (obj) {
            this.default = obj["default"] || this.default;
            this.subtle = obj["subtle"] || this.subtle;
        }
    }
    return TextColorDefinition;
}());
exports.TextColorDefinition = TextColorDefinition;
var AdaptiveCardConfig = /** @class */ (function () {
    function AdaptiveCardConfig(obj) {
        this.allowCustomStyle = false;
        if (obj) {
            this.allowCustomStyle = obj["allowCustomStyle"] || this.allowCustomStyle;
        }
    }
    return AdaptiveCardConfig;
}());
exports.AdaptiveCardConfig = AdaptiveCardConfig;
var ImageSetConfig = /** @class */ (function () {
    function ImageSetConfig(obj) {
        this.imageSize = Enums.Size.Medium;
        this.maxImageHeight = 100;
        if (obj) {
            this.imageSize = obj["imageSize"] != null ? obj["imageSize"] : this.imageSize;
            this.maxImageHeight = Utils.getValueOrDefault(obj["maxImageHeight"], 100);
        }
    }
    ImageSetConfig.prototype.toJSON = function () {
        return {
            imageSize: Enums.Size[this.imageSize],
            maxImageHeight: this.maxImageHeight
        };
    };
    return ImageSetConfig;
}());
exports.ImageSetConfig = ImageSetConfig;
var MediaConfig = /** @class */ (function () {
    function MediaConfig(obj) {
        this.allowInlinePlayback = true;
        if (obj) {
            this.defaultPoster = obj["defaultPoster"];
            this.allowInlinePlayback = obj["allowInlinePlayback"] || this.allowInlinePlayback;
        }
    }
    MediaConfig.prototype.toJSON = function () {
        return {
            defaultPoster: this.defaultPoster,
            allowInlinePlayback: this.allowInlinePlayback
        };
    };
    return MediaConfig;
}());
exports.MediaConfig = MediaConfig;
var FactTextDefinition = /** @class */ (function () {
    function FactTextDefinition(obj) {
        this.size = Enums.TextSize.Default;
        this.color = Enums.TextColor.Default;
        this.isSubtle = false;
        this.weight = Enums.TextWeight.Default;
        this.wrap = true;
        if (obj) {
            this.size = Utils.parseHostConfigEnum(Enums.TextSize, obj["size"], Enums.TextSize.Default);
            this.color = Utils.parseHostConfigEnum(Enums.TextColor, obj["color"], Enums.TextColor.Default);
            this.isSubtle = obj["isSubtle"] || this.isSubtle;
            this.weight = Utils.parseHostConfigEnum(Enums.TextWeight, obj["weight"], this.getDefaultWeight());
            this.wrap = obj["wrap"] != null ? obj["wrap"] : this.wrap;
        }
    }
    ;
    FactTextDefinition.prototype.getDefaultWeight = function () {
        return Enums.TextWeight.Default;
    };
    FactTextDefinition.prototype.toJSON = function () {
        return {
            size: Enums.TextSize[this.size],
            color: Enums.TextColor[this.color],
            isSubtle: this.isSubtle,
            weight: Enums.TextWeight[this.weight],
            wrap: this.wrap
        };
    };
    return FactTextDefinition;
}());
exports.FactTextDefinition = FactTextDefinition;
var FactTitleDefinition = /** @class */ (function (_super) {
    __extends(FactTitleDefinition, _super);
    function FactTitleDefinition(obj) {
        var _this = _super.call(this, obj) || this;
        _this.maxWidth = 150;
        _this.weight = Enums.TextWeight.Bolder;
        if (obj) {
            _this.maxWidth = obj["maxWidth"] != null ? obj["maxWidth"] : _this.maxWidth;
            _this.weight = Utils.parseHostConfigEnum(Enums.TextWeight, obj["weight"], Enums.TextWeight.Bolder);
        }
        return _this;
    }
    FactTitleDefinition.prototype.getDefaultWeight = function () {
        return Enums.TextWeight.Bolder;
    };
    return FactTitleDefinition;
}(FactTextDefinition));
exports.FactTitleDefinition = FactTitleDefinition;
var FactSetConfig = /** @class */ (function () {
    function FactSetConfig(obj) {
        this.title = new FactTitleDefinition();
        this.value = new FactTextDefinition();
        this.spacing = 10;
        if (obj) {
            this.title = new FactTitleDefinition(obj["title"]);
            this.value = new FactTextDefinition(obj["value"]);
            this.spacing = obj.spacing && obj.spacing != null ? obj.spacing && obj.spacing : this.spacing;
        }
    }
    return FactSetConfig;
}());
exports.FactSetConfig = FactSetConfig;
var ShowCardActionConfig = /** @class */ (function () {
    function ShowCardActionConfig(obj) {
        this.actionMode = Enums.ShowCardActionMode.Inline;
        this.inlineTopMargin = 16;
        this.style = Enums.ContainerStyle.Emphasis;
        if (obj) {
            this.actionMode = Utils.parseHostConfigEnum(Enums.ShowCardActionMode, obj["actionMode"], Enums.ShowCardActionMode.Inline);
            this.inlineTopMargin = obj["inlineTopMargin"] != null ? obj["inlineTopMargin"] : this.inlineTopMargin;
            this.style = obj["style"] && typeof obj["style"] === "string" ? obj["style"] : Enums.ContainerStyle.Emphasis;
        }
    }
    ShowCardActionConfig.prototype.toJSON = function () {
        return {
            actionMode: Enums.ShowCardActionMode[this.actionMode],
            inlineTopMargin: this.inlineTopMargin,
            style: this.style
        };
    };
    return ShowCardActionConfig;
}());
exports.ShowCardActionConfig = ShowCardActionConfig;
var ActionsConfig = /** @class */ (function () {
    function ActionsConfig(obj) {
        this.maxActions = 5;
        this.spacing = Enums.Spacing.Default;
        this.buttonSpacing = 20;
        this.showCard = new ShowCardActionConfig();
        this.preExpandSingleShowCardAction = false;
        this.actionsOrientation = Enums.Orientation.Horizontal;
        this.actionAlignment = Enums.ActionAlignment.Left;
        this.iconPlacement = Enums.ActionIconPlacement.LeftOfTitle;
        this.allowTitleToWrap = false;
        this.iconSize = 24;
        if (obj) {
            this.maxActions = obj["maxActions"] != null ? obj["maxActions"] : this.maxActions;
            this.spacing = Utils.parseHostConfigEnum(Enums.Spacing, obj.spacing && obj.spacing, Enums.Spacing.Default);
            this.buttonSpacing = obj["buttonSpacing"] != null ? obj["buttonSpacing"] : this.buttonSpacing;
            this.showCard = new ShowCardActionConfig(obj["showCard"]);
            this.preExpandSingleShowCardAction = Utils.getValueOrDefault(obj["preExpandSingleShowCardAction"], false);
            this.actionsOrientation = Utils.parseHostConfigEnum(Enums.Orientation, obj["actionsOrientation"], Enums.Orientation.Horizontal);
            this.actionAlignment = Utils.parseHostConfigEnum(Enums.ActionAlignment, obj["actionAlignment"], Enums.ActionAlignment.Left);
            this.iconPlacement = Utils.parseHostConfigEnum(Enums.ActionIconPlacement, obj["iconPlacement"], Enums.ActionIconPlacement.LeftOfTitle);
            this.allowTitleToWrap = obj["allowTitleToWrap"] != null ? obj["allowTitleToWrap"] : this.allowTitleToWrap;
            try {
                var sizeAndUnit = Utils.SizeAndUnit.parse(obj["iconSize"]);
                if (sizeAndUnit.unit == Enums.SizeUnit.Pixel) {
                    this.iconSize = sizeAndUnit.physicalSize;
                }
            }
            catch (e) {
                // Swallow this, keep default icon size
            }
        }
    }
    ActionsConfig.prototype.toJSON = function () {
        return {
            maxActions: this.maxActions,
            spacing: Enums.Spacing[this.spacing],
            buttonSpacing: this.buttonSpacing,
            showCard: this.showCard,
            preExpandSingleShowCardAction: this.preExpandSingleShowCardAction,
            actionsOrientation: Enums.Orientation[this.actionsOrientation],
            actionAlignment: Enums.ActionAlignment[this.actionAlignment]
        };
    };
    return ActionsConfig;
}());
exports.ActionsConfig = ActionsConfig;
var ContainerStyleDefinition = /** @class */ (function () {
    function ContainerStyleDefinition(obj) {
        this.foregroundColors = {
            default: new TextColorDefinition(),
            dark: new TextColorDefinition(),
            light: new TextColorDefinition(),
            accent: new TextColorDefinition(),
            good: new TextColorDefinition(),
            warning: new TextColorDefinition(),
            attention: new TextColorDefinition()
        };
        this.parse(obj);
    }
    ContainerStyleDefinition.prototype.getTextColorDefinitionOrDefault = function (obj, defaultValue) {
        return new TextColorDefinition(obj ? obj : defaultValue);
    };
    ContainerStyleDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.backgroundColor = obj["backgroundColor"];
            if (obj.foregroundColors) {
                this.foregroundColors.default = this.getTextColorDefinitionOrDefault(obj.foregroundColors["default"], { default: "#333333", subtle: "#EE333333" });
                this.foregroundColors.dark = this.getTextColorDefinitionOrDefault(obj.foregroundColors["dark"], { default: "#000000", subtle: "#66000000" });
                this.foregroundColors.light = this.getTextColorDefinitionOrDefault(obj.foregroundColors["light"], { default: "#FFFFFF", subtle: "#33000000" });
                this.foregroundColors.accent = this.getTextColorDefinitionOrDefault(obj.foregroundColors["accent"], { default: "#2E89FC", subtle: "#882E89FC" });
                this.foregroundColors.good = this.getTextColorDefinitionOrDefault(obj.foregroundColors["good"], { default: "#54A254", subtle: "#DD54A254" });
                this.foregroundColors.warning = this.getTextColorDefinitionOrDefault(obj.foregroundColors["warning"], { default: "#E69500", subtle: "#DDE69500" });
                this.foregroundColors.attention = this.getTextColorDefinitionOrDefault(obj.foregroundColors["attention"], { default: "#CC3300", subtle: "#DDCC3300" });
            }
            this.highlightBackgroundColor = obj["highlightBackgroundColor"];
            this.highlightForegroundColor = obj["highlightForegroundColor"];
        }
    };
    Object.defineProperty(ContainerStyleDefinition.prototype, "isBuiltIn", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return ContainerStyleDefinition;
}());
exports.ContainerStyleDefinition = ContainerStyleDefinition;
var BuiltInContainerStyleDefinition = /** @class */ (function (_super) {
    __extends(BuiltInContainerStyleDefinition, _super);
    function BuiltInContainerStyleDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BuiltInContainerStyleDefinition.prototype, "isBuiltIn", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return BuiltInContainerStyleDefinition;
}(ContainerStyleDefinition));
var ContainerStyleSet = /** @class */ (function () {
    function ContainerStyleSet(obj) {
        this._allStyles = {};
        this._allStyles[Enums.ContainerStyle.Default] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Emphasis] = new BuiltInContainerStyleDefinition();
        if (obj) {
            this._allStyles[Enums.ContainerStyle.Default].parse(obj[Enums.ContainerStyle.Default]);
            this._allStyles[Enums.ContainerStyle.Emphasis].parse(obj[Enums.ContainerStyle.Emphasis]);
            var customStyleArray = obj["customStyles"];
            if (customStyleArray && Array.isArray(customStyleArray)) {
                for (var _i = 0, customStyleArray_1 = customStyleArray; _i < customStyleArray_1.length; _i++) {
                    var customStyle = customStyleArray_1[_i];
                    if (customStyle) {
                        var styleName = customStyle["name"];
                        if (styleName && typeof styleName === "string") {
                            if (this._allStyles.hasOwnProperty(styleName)) {
                                this._allStyles[styleName].parse(customStyle["style"]);
                            }
                            else {
                                this._allStyles[styleName] = new ContainerStyleDefinition(customStyle["style"]);
                            }
                        }
                    }
                }
            }
        }
    }
    ContainerStyleSet.prototype.toJSON = function () {
        var _this = this;
        var customStyleArray = [];
        Object.keys(this._allStyles).forEach(function (key) {
            if (!_this._allStyles[key].isBuiltIn) {
                customStyleArray.push({
                    name: key,
                    style: _this._allStyles[key]
                });
            }
        });
        var result = {
            default: this.default,
            emphasis: this.emphasis
        };
        if (customStyleArray.length > 0) {
            result.customStyles = customStyleArray;
        }
        return result;
    };
    ContainerStyleSet.prototype.getStyleByName = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return this._allStyles.hasOwnProperty(name) ? this._allStyles[name] : defaultValue;
    };
    Object.defineProperty(ContainerStyleSet.prototype, "default", {
        get: function () {
            return this._allStyles[Enums.ContainerStyle.Default];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerStyleSet.prototype, "emphasis", {
        get: function () {
            return this._allStyles[Enums.ContainerStyle.Emphasis];
        },
        enumerable: true,
        configurable: true
    });
    return ContainerStyleSet;
}());
exports.ContainerStyleSet = ContainerStyleSet;
var Version = /** @class */ (function () {
    function Version(major, minor) {
        if (major === void 0) { major = 1; }
        if (minor === void 0) { minor = 1; }
        this._isValid = true;
        this._major = major;
        this._minor = minor;
    }
    Version.parse = function (versionString, errors) {
        if (!versionString) {
            return null;
        }
        var result = new Version();
        result._versionString = versionString;
        var regEx = /(\d+).(\d+)/gi;
        var matches = regEx.exec(versionString);
        if (matches != null && matches.length == 3) {
            result._major = parseInt(matches[1]);
            result._minor = parseInt(matches[2]);
        }
        else {
            result._isValid = false;
        }
        if (!result._isValid && errors) {
            errors.push({
                error: Enums.ValidationError.InvalidPropertyValue,
                message: "Invalid version string: " + result._versionString
            });
        }
        return result;
    };
    Version.prototype.toString = function () {
        return !this._isValid ? this._versionString : this._major + "." + this._minor;
    };
    Version.prototype.compareTo = function (otherVersion) {
        if (!this.isValid || !otherVersion.isValid) {
            throw new Error("Cannot compare invalid version.");
        }
        if (this.major > otherVersion.major) {
            return 1;
        }
        else if (this.major < otherVersion.major) {
            return -1;
        }
        else if (this.minor > otherVersion.minor) {
            return 1;
        }
        else if (this.minor < otherVersion.minor) {
            return -1;
        }
        return 0;
    };
    Object.defineProperty(Version.prototype, "major", {
        get: function () {
            return this._major;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "minor", {
        get: function () {
            return this._minor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: true,
        configurable: true
    });
    return Version;
}());
exports.Version = Version;
var HostCapabilities = /** @class */ (function () {
    function HostCapabilities() {
        this.capabilities = null;
    }
    HostCapabilities.prototype.setCapability = function (name, version) {
        if (!this.capabilities) {
            this.capabilities = {};
        }
        this.capabilities[name] = version;
    };
    HostCapabilities.prototype.parse = function (json, errors) {
        if (json) {
            for (var name_1 in json) {
                var jsonVersion = json[name_1];
                if (typeof jsonVersion === "string") {
                    if (jsonVersion == "*") {
                        this.setCapability(name_1, "*");
                    }
                    else {
                        var version = Version.parse(jsonVersion, errors);
                        if (version.isValid) {
                            this.setCapability(name_1, version);
                        }
                    }
                }
            }
        }
    };
    HostCapabilities.prototype.hasCapability = function (name, version) {
        if (this.capabilities && this.capabilities.hasOwnProperty(name)) {
            if (version == "*" || this.capabilities[name] == "*") {
                return true;
            }
            return version.compareTo(this.capabilities[name]) <= 0;
        }
        return false;
    };
    HostCapabilities.prototype.areAllMet = function (hostCapabilities) {
        if (this.capabilities) {
            for (var capabilityName in this.capabilities) {
                if (!hostCapabilities.hasCapability(capabilityName, this.capabilities[capabilityName])) {
                    return false;
                }
            }
        }
        return true;
    };
    return HostCapabilities;
}());
exports.HostCapabilities = HostCapabilities;
var HostConfig = /** @class */ (function () {
    function HostConfig(obj) {
        this.hostCapabilities = new HostCapabilities();
        this.choiceSetInputValueSeparator = ",";
        this.supportsInteractivity = true;
        this.fontFamily = "Segoe UI,Segoe,Segoe WP,Helvetica Neue,Helvetica,sans-serif";
        this.spacing = {
            small: 3,
            default: 8,
            medium: 20,
            large: 30,
            extraLarge: 40,
            padding: 15
        };
        this.separator = {
            lineThickness: 1,
            lineColor: "#EEEEEE"
        };
        this.fontSizes = {
            small: 12,
            default: 14,
            medium: 17,
            large: 21,
            extraLarge: 26
        };
        this.fontWeights = {
            lighter: 200,
            default: 400,
            bolder: 600
        };
        this.imageSizes = {
            small: 40,
            medium: 80,
            large: 160
        };
        this.containerStyles = new ContainerStyleSet();
        this.actions = new ActionsConfig();
        this.adaptiveCard = new AdaptiveCardConfig();
        this.imageSet = new ImageSetConfig();
        this.media = new MediaConfig();
        this.factSet = new FactSetConfig();
        this.cssClassNamePrefix = null;
        if (obj) {
            if (typeof obj === "string" || obj instanceof String) {
                obj = JSON.parse(obj);
            }
            this.choiceSetInputValueSeparator = (obj && typeof obj["choiceSetInputValueSeparator"] === "string") ? obj["choiceSetInputValueSeparator"] : this.choiceSetInputValueSeparator;
            this.supportsInteractivity = (obj && typeof obj["supportsInteractivity"] === "boolean") ? obj["supportsInteractivity"] : this.supportsInteractivity;
            this.fontFamily = obj["fontFamily"] || this.fontFamily;
            this.fontSizes = {
                small: obj.fontSizes && obj.fontSizes["small"] || this.fontSizes.small,
                default: obj.fontSizes && obj.fontSizes["default"] || this.fontSizes.default,
                medium: obj.fontSizes && obj.fontSizes["medium"] || this.fontSizes.medium,
                large: obj.fontSizes && obj.fontSizes["large"] || this.fontSizes.large,
                extraLarge: obj.fontSizes && obj.fontSizes["extraLarge"] || this.fontSizes.extraLarge
            };
            if (obj.lineHeights) {
                this.lineHeights = {
                    small: obj.lineHeights["small"],
                    default: obj.lineHeights["default"],
                    medium: obj.lineHeights["medium"],
                    large: obj.lineHeights["large"],
                    extraLarge: obj.lineHeights["extraLarge"]
                };
            }
            ;
            this.fontWeights = {
                lighter: obj.fontWeights && obj.fontWeights["lighter"] || this.fontWeights.lighter,
                default: obj.fontWeights && obj.fontWeights["default"] || this.fontWeights.default,
                bolder: obj.fontWeights && obj.fontWeights["bolder"] || this.fontWeights.bolder
            };
            this.imageSizes = {
                small: obj.imageSizes && obj.imageSizes["small"] || this.imageSizes.small,
                medium: obj.imageSizes && obj.imageSizes["medium"] || this.imageSizes.medium,
                large: obj.imageSizes && obj.imageSizes["large"] || this.imageSizes.large,
            };
            this.containerStyles = new ContainerStyleSet(obj["containerStyles"]);
            this.spacing = {
                small: obj.spacing && obj.spacing["small"] || this.spacing.small,
                default: obj.spacing && obj.spacing["default"] || this.spacing.default,
                medium: obj.spacing && obj.spacing["medium"] || this.spacing.medium,
                large: obj.spacing && obj.spacing["large"] || this.spacing.large,
                extraLarge: obj.spacing && obj.spacing["extraLarge"] || this.spacing.extraLarge,
                padding: obj.spacing && obj.spacing["padding"] || this.spacing.padding
            };
            this.separator = {
                lineThickness: obj.separator && obj.separator["lineThickness"] || this.separator.lineThickness,
                lineColor: obj.separator && obj.separator["lineColor"] || this.separator.lineColor
            };
            this.actions = new ActionsConfig(obj.actions || this.actions);
            this.adaptiveCard = new AdaptiveCardConfig(obj.adaptiveCard || this.adaptiveCard);
            this.imageSet = new ImageSetConfig(obj["imageSet"]);
            this.factSet = new FactSetConfig(obj["factSet"]);
        }
    }
    HostConfig.prototype.getEffectiveSpacing = function (spacing) {
        switch (spacing) {
            case Enums.Spacing.Small:
                return this.spacing.small;
            case Enums.Spacing.Default:
                return this.spacing.default;
            case Enums.Spacing.Medium:
                return this.spacing.medium;
            case Enums.Spacing.Large:
                return this.spacing.large;
            case Enums.Spacing.ExtraLarge:
                return this.spacing.extraLarge;
            case Enums.Spacing.Padding:
                return this.spacing.padding;
            default:
                return 0;
        }
    };
    HostConfig.prototype.makeCssClassName = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var result = "";
        for (var i = 0; i < classNames.length; i++) {
            if (i > 0) {
                result += " ";
            }
            if (this.cssClassNamePrefix) {
                result += this.cssClassNamePrefix + "-";
            }
            result += classNames[i];
        }
        return result;
    };
    return HostConfig;
}());
exports.HostConfig = HostConfig;


/***/ }),

/***/ "./src/text-formatters.ts":
/*!********************************!*\
  !*** ./src/text-formatters.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractTextFormatter = /** @class */ (function () {
    function AbstractTextFormatter(regularExpression) {
        this._regularExpression = regularExpression;
    }
    AbstractTextFormatter.prototype.format = function (lang, input) {
        var matches;
        var result = input;
        while ((matches = this._regularExpression.exec(input)) != null) {
            result = result.replace(matches[0], this.internalFormat(lang, matches));
        }
        ;
        return result;
    };
    return AbstractTextFormatter;
}());
var DateFormatter = /** @class */ (function (_super) {
    __extends(DateFormatter, _super);
    function DateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatter.prototype.internalFormat = function (lang, matches) {
        var date = new Date(Date.parse(matches[1]));
        var format = matches[2] != undefined ? matches[2].toLowerCase() : "compact";
        if (format != "compact") {
            return date.toLocaleDateString(lang, { day: "numeric", weekday: format, month: format, year: "numeric" });
        }
        else {
            return date.toLocaleDateString();
        }
    };
    return DateFormatter;
}(AbstractTextFormatter));
var TimeFormatter = /** @class */ (function (_super) {
    __extends(TimeFormatter, _super);
    function TimeFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeFormatter.prototype.internalFormat = function (lang, matches) {
        var date = new Date(Date.parse(matches[1]));
        return date.toLocaleTimeString(lang, { hour: 'numeric', minute: '2-digit' });
    };
    return TimeFormatter;
}(AbstractTextFormatter));
function formatText(lang, text) {
    var formatters = [
        new DateFormatter(/\{{2}DATE\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))(?:, ?(COMPACT|LONG|SHORT))?\)\}{2}/g),
        new TimeFormatter(/\{{2}TIME\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))\)\}{2}/g)
    ];
    var result = text;
    for (var i = 0; i < formatters.length; i++) {
        result = formatters[i].format(lang, result);
    }
    return result;
}
exports.formatText = formatText;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums = __webpack_require__(/*! ./enums */ "./src/enums.ts");
/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
var UUID = /** @class */ (function () {
    function UUID() {
    }
    UUID.generate = function () {
        var d0 = Math.random() * 0xffffffff | 0;
        var d1 = Math.random() * 0xffffffff | 0;
        var d2 = Math.random() * 0xffffffff | 0;
        var d3 = Math.random() * 0xffffffff | 0;
        return UUID.lut[d0 & 0xff] + UUID.lut[d0 >> 8 & 0xff] + UUID.lut[d0 >> 16 & 0xff] + UUID.lut[d0 >> 24 & 0xff] + '-' +
            UUID.lut[d1 & 0xff] + UUID.lut[d1 >> 8 & 0xff] + '-' + UUID.lut[d1 >> 16 & 0x0f | 0x40] + UUID.lut[d1 >> 24 & 0xff] + '-' +
            UUID.lut[d2 & 0x3f | 0x80] + UUID.lut[d2 >> 8 & 0xff] + '-' + UUID.lut[d2 >> 16 & 0xff] + UUID.lut[d2 >> 24 & 0xff] +
            UUID.lut[d3 & 0xff] + UUID.lut[d3 >> 8 & 0xff] + UUID.lut[d3 >> 16 & 0xff] + UUID.lut[d3 >> 24 & 0xff];
    };
    UUID.initialize = function () {
        for (var i = 0; i < 256; i++) {
            UUID.lut[i] = (i < 16 ? '0' : '') + i.toString(16);
        }
    };
    UUID.lut = [];
    return UUID;
}());
exports.UUID = UUID;
UUID.initialize();
exports.ContentTypes = {
    applicationJson: "application/json",
    applicationXWwwFormUrlencoded: "application/x-www-form-urlencoded"
};
function getValueOrDefault(obj, defaultValue) {
    return obj ? obj : defaultValue;
}
exports.getValueOrDefault = getValueOrDefault;
function isNullOrEmpty(value) {
    return value === undefined || value === null || value === "";
}
exports.isNullOrEmpty = isNullOrEmpty;
function appendChild(node, child) {
    if (child != null && child != undefined) {
        node.appendChild(child);
    }
}
exports.appendChild = appendChild;
function setProperty(target, propertyName, propertyValue, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    if (propertyValue && (!defaultValue || defaultValue !== propertyValue)) {
        target[propertyName] = propertyValue;
    }
}
exports.setProperty = setProperty;
function setEnumProperty(enumType, target, propertyName, propertyValue, defaultValue) {
    if (defaultValue === undefined || defaultValue !== propertyValue) {
        target[propertyName] = enumType[propertyValue];
    }
}
exports.setEnumProperty = setEnumProperty;
function getEnumValueOrDefault(targetEnum, name, defaultValue) {
    if (isNullOrEmpty(name)) {
        return defaultValue;
    }
    for (var key in targetEnum) {
        var isValueProperty = parseInt(key, 10) >= 0;
        if (isValueProperty) {
            var value = targetEnum[key];
            if (value && typeof value === "string") {
                if (value.toLowerCase() === name.toLowerCase()) {
                    return parseInt(key, 10);
                }
            }
        }
    }
    return defaultValue;
}
exports.getEnumValueOrDefault = getEnumValueOrDefault;
function parseHostConfigEnum(targetEnum, value, defaultValue) {
    if (typeof value === "string") {
        return getEnumValueOrDefault(targetEnum, value, defaultValue);
    }
    else if (typeof value === "number") {
        return getValueOrDefault(value, defaultValue);
    }
    else {
        return defaultValue;
    }
}
exports.parseHostConfigEnum = parseHostConfigEnum;
function renderSeparation(separationDefinition, orientation) {
    if (separationDefinition.spacing > 0 || separationDefinition.lineThickness > 0) {
        var separator = document.createElement("div");
        if (orientation == Enums.Orientation.Horizontal) {
            if (separationDefinition.lineThickness) {
                separator.style.marginTop = (separationDefinition.spacing / 2) + "px";
                separator.style.paddingTop = (separationDefinition.spacing / 2) + "px";
                separator.style.borderTop = separationDefinition.lineThickness + "px solid " + stringToCssColor(separationDefinition.lineColor);
            }
            else {
                separator.style.height = separationDefinition.spacing + "px";
            }
            separator.style.width = "99.9%";
        }
        else {
            if (separationDefinition.lineThickness) {
                separator.style.marginLeft = (separationDefinition.spacing / 2) + "px";
                separator.style.paddingLeft = (separationDefinition.spacing / 2) + "px";
                separator.style.borderLeft = separationDefinition.lineThickness + "px solid " + stringToCssColor(separationDefinition.lineColor);
            }
            else {
                separator.style.width = separationDefinition.spacing + "px";
            }
        }
        separator.style.overflow = "hidden";
        return separator;
    }
    else {
        return null;
    }
}
exports.renderSeparation = renderSeparation;
function stringToCssColor(color) {
    var regEx = /#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?/gi;
    var matches = regEx.exec(color);
    if (matches && matches[4]) {
        var a = parseInt(matches[1], 16) / 255;
        var r = parseInt(matches[2], 16);
        var g = parseInt(matches[3], 16);
        var b = parseInt(matches[4], 16);
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    }
    else {
        return color;
    }
}
exports.stringToCssColor = stringToCssColor;
var StringWithSubstitutions = /** @class */ (function () {
    function StringWithSubstitutions() {
        this._isProcessed = false;
        this._original = null;
        this._processed = null;
    }
    StringWithSubstitutions.prototype.substituteInputValues = function (inputs, contentType) {
        this._processed = this._original;
        var regEx = /\{{2}([a-z0-9_$@]+).value\}{2}/gi;
        var matches;
        while ((matches = regEx.exec(this._original)) != null) {
            var matchedInput = null;
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].id.toLowerCase() == matches[1].toLowerCase()) {
                    matchedInput = inputs[i];
                    break;
                }
            }
            if (matchedInput) {
                var valueForReplace = "";
                if (matchedInput.value) {
                    valueForReplace = matchedInput.value;
                }
                if (contentType === exports.ContentTypes.applicationJson) {
                    valueForReplace = JSON.stringify(valueForReplace);
                    valueForReplace = valueForReplace.slice(1, -1);
                }
                else if (contentType === exports.ContentTypes.applicationXWwwFormUrlencoded) {
                    valueForReplace = encodeURIComponent(valueForReplace);
                }
                this._processed = this._processed.replace(matches[0], valueForReplace);
            }
        }
        ;
        this._isProcessed = true;
    };
    StringWithSubstitutions.prototype.getOriginal = function () {
        return this._original;
    };
    StringWithSubstitutions.prototype.get = function () {
        if (!this._isProcessed) {
            return this._original;
        }
        else {
            return this._processed;
        }
    };
    StringWithSubstitutions.prototype.set = function (value) {
        this._original = value;
        this._isProcessed = false;
    };
    return StringWithSubstitutions;
}());
exports.StringWithSubstitutions = StringWithSubstitutions;
var SizeAndUnit = /** @class */ (function () {
    function SizeAndUnit(physicalSize, unit) {
        this.physicalSize = physicalSize;
        this.unit = unit;
    }
    SizeAndUnit.parse = function (input) {
        var result = new SizeAndUnit(0, Enums.SizeUnit.Weight);
        var regExp = /^([0-9]+)(px|\*)?$/g;
        var matches = regExp.exec(input);
        if (matches && matches.length >= 2) {
            result.physicalSize = parseInt(matches[1]);
            if (matches.length == 3) {
                if (matches[2] == "px") {
                    result.unit = Enums.SizeUnit.Pixel;
                }
            }
            return result;
        }
        throw new Error("Invalid size: " + input);
    };
    return SizeAndUnit;
}());
exports.SizeAndUnit = SizeAndUnit;
function truncate(element, maxHeight, lineHeight) {
    var fits = function () {
        // Allow a one pixel overflow to account for rounding differences
        // between browsers
        return maxHeight - element.scrollHeight >= -1.0;
    };
    if (fits())
        return;
    var fullText = element.innerHTML;
    var truncateAt = function (idx) {
        element.innerHTML = fullText.substring(0, idx) + '...';
    };
    var breakableIndices = findBreakableIndices(fullText);
    var lo = 0;
    var hi = breakableIndices.length;
    var bestBreakIdx = 0;
    // Do a binary search for the longest string that fits
    while (lo < hi) {
        var mid = Math.floor((lo + hi) / 2);
        truncateAt(breakableIndices[mid]);
        if (fits()) {
            bestBreakIdx = breakableIndices[mid];
            lo = mid + 1;
        }
        else {
            hi = mid;
        }
    }
    truncateAt(bestBreakIdx);
    // If we have extra room, try to expand the string letter by letter
    // (covers the case where we have to break in the middle of a long word)
    if (lineHeight && maxHeight - element.scrollHeight >= lineHeight - 1.0) {
        var idx = findNextCharacter(fullText, bestBreakIdx);
        while (idx < fullText.length) {
            truncateAt(idx);
            if (fits()) {
                bestBreakIdx = idx;
                idx = findNextCharacter(fullText, idx);
            }
            else {
                break;
            }
        }
        truncateAt(bestBreakIdx);
    }
}
exports.truncate = truncate;
function findBreakableIndices(html) {
    var results = [];
    var idx = findNextCharacter(html, -1);
    while (idx < html.length) {
        if (html[idx] == ' ') {
            results.push(idx);
        }
        idx = findNextCharacter(html, idx);
    }
    return results;
}
function findNextCharacter(html, currIdx) {
    currIdx += 1;
    // If we found the start of an HTML tag, keep advancing until we get
    // past it, so we don't end up truncating in the middle of the tag
    while (currIdx < html.length && html[currIdx] == '<') {
        while (currIdx < html.length && html[currIdx++] != '>')
            ;
    }
    return currIdx;
}
function getFitStatus(element, containerEnd) {
    var start = element.offsetTop;
    var end = start + element.clientHeight;
    if (end <= containerEnd) {
        return Enums.ContainerFitStatus.FullyInContainer;
    }
    else if (start < containerEnd) {
        return Enums.ContainerFitStatus.Overflowing;
    }
    else {
        return Enums.ContainerFitStatus.FullyOutOfContainer;
    }
}
exports.getFitStatus = getFitStatus;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BZGFwdGl2ZUNhcmRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BZGFwdGl2ZUNhcmRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FkYXB0aXZlQ2FyZHMvLi9zcmMvYWRhcHRpdmVjYXJkcy50cyIsIndlYnBhY2s6Ly9BZGFwdGl2ZUNhcmRzLy4vc3JjL2NhcmQtZWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vQWRhcHRpdmVDYXJkcy8uL3NyYy9lbnVtcy50cyIsIndlYnBhY2s6Ly9BZGFwdGl2ZUNhcmRzLy4vc3JjL2hvc3QtY29uZmlnLnRzIiwid2VicGFjazovL0FkYXB0aXZlQ2FyZHMvLi9zcmMvdGV4dC1mb3JtYXR0ZXJzLnRzIiwid2VicGFjazovL0FkYXB0aXZlQ2FyZHMvLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxl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Q0FBQztJQWpCTyxhQUFRLEdBQWY7UUFDQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUc7WUFDbEgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHO1lBQ3pILElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFB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TyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRTtRQUNyRCxPQUFPLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEdBQUc7WUFBQyxDQUFDO0tBQ3hEO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQWdCLFlBQVksQ0FBQyxPQUFvQixFQUFFLFlBQW9CO0lBQ3RFLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDOUIsSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFFdkMsSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDO0tBQ2pEO1NBQ0ksSUFBSSxLQUFLLEdBQUcsWUFBWSxFQUFFO1FBQzlCLE9BQU8sS0FBSyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztLQUM1QztTQUNJO1FBQ0osT0FBTyxLQUFLLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7S0FDcEQ7QUFDRixDQUFDO0FBYkQsb0NBYUMiLCJmaWxlIjoiYWRhcHRpdmVjYXJkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFkYXB0aXZlQ2FyZHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQWRhcHRpdmVDYXJkc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYWRhcHRpdmVjYXJkcy50c1wiKTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL2NhcmQtZWxlbWVudHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2VudW1zXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9ob3N0LWNvbmZpZ1wiO1xuZXhwb3J0IHsgU2l6ZUFuZFVuaXQsIGdldEVudW1WYWx1ZU9yRGVmYXVsdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5leHBvcnQgeyBJQWRhcHRpdmVDYXJkLCBJQ2FyZEVsZW1lbnQgfSBmcm9tIFwiLi9zY2hlbWFcIjsiLCJpbXBvcnQgKiBhcyBFbnVtcyBmcm9tIFwiLi9lbnVtc1wiO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCAqIGFzIEhvc3RDb25maWcgZnJvbSBcIi4vaG9zdC1jb25maWdcIjtcbmltcG9ydCAqIGFzIFRleHRGb3JtYXR0ZXJzIGZyb20gXCIuL3RleHQtZm9ybWF0dGVyc1wiO1xuXG5mdW5jdGlvbiBpbnZva2VTZXRDb2xsZWN0aW9uKGFjdGlvbjogQWN0aW9uLCBjb2xsZWN0aW9uOiBBY3Rpb25Db2xsZWN0aW9uKSB7XG5cdGlmIChhY3Rpb24pIHtcblx0XHQvLyBDbG9zZXN0IGVtdWxhdGlvbiBvZiBcImludGVybmFsXCIgaW4gVHlwZVNjcmlwdC5cblx0XHRhY3Rpb25bXCJzZXRDb2xsZWN0aW9uXCJdKGNvbGxlY3Rpb24pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGlzQWN0aW9uQWxsb3dlZChhY3Rpb246IEFjdGlvbiwgZm9yYmlkZGVuQWN0aW9uVHlwZXM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcblx0aWYgKGZvcmJpZGRlbkFjdGlvblR5cGVzKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBmb3JiaWRkZW5BY3Rpb25UeXBlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFjdGlvbi5nZXRKc29uVHlwZU5hbWUoKSA9PT0gZm9yYmlkZGVuQWN0aW9uVHlwZXNbaV0pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlkKCk6IHN0cmluZyB7XG5cdHJldHVybiBcIl9fYWMtXCIgKyBVdGlscy5VVUlELmdlbmVyYXRlKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmRPYmplY3RJbnN0YW5jZTxUIGV4dGVuZHMgSUNhcmRPYmplY3Q+KFxuXHRwYXJlbnQ6IENhcmRFbGVtZW50LFxuXHRqc29uOiBhbnksXG5cdGNyZWF0ZUluc3RhbmNlQ2FsbGJhY2s6ICh0eXBlTmFtZTogc3RyaW5nKSA9PiBULFxuXHRjcmVhdGVWYWxpZGF0aW9uRXJyb3JDYWxsYmFjazogKHR5cGVOYW1lOiBzdHJpbmcpID0+IEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcixcblx0ZXJyb3JzOiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KTogVCB7XG5cdGxldCByZXN1bHQ6IFQgPSBudWxsO1xuXG5cdGlmIChqc29uICYmIHR5cGVvZiBqc29uID09PSBcIm9iamVjdFwiKSB7XG5cdFx0bGV0IHRyeVRvRmFsbGJhY2sgPSBmYWxzZTtcblx0XHRsZXQgdHlwZU5hbWUgPSBqc29uW1widHlwZVwiXTtcblxuXHRcdHJlc3VsdCA9IGNyZWF0ZUluc3RhbmNlQ2FsbGJhY2sodHlwZU5hbWUpO1xuXG5cdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdHRyeVRvRmFsbGJhY2sgPSB0cnVlO1xuXG5cdFx0XHRyYWlzZVBhcnNlRXJyb3IoY3JlYXRlVmFsaWRhdGlvbkVycm9yQ2FsbGJhY2sodHlwZU5hbWUpLCBlcnJvcnMpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJlc3VsdC5zZXRQYXJlbnQocGFyZW50KTtcblx0XHRcdHJlc3VsdC5wYXJzZShqc29uKTtcblxuXHRcdFx0dHJ5VG9GYWxsYmFjayA9IHJlc3VsdC5zaG91bGRGYWxsYmFjaygpO1xuXHRcdH1cblxuXHRcdGlmICh0cnlUb0ZhbGxiYWNrKSB7XG5cdFx0XHRsZXQgZmFsbGJhY2sgPSBqc29uW1wiZmFsbGJhY2tcIl07XG5cblx0XHRcdGlmICghZmFsbGJhY2spIHtcblx0XHRcdFx0cGFyZW50LnNldFNob3VsZEZhbGxiYWNrKHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBmYWxsYmFjayA9PT0gXCJzdHJpbmdcIiAmJiBmYWxsYmFjay50b0xvd2VyQ2FzZSgpID09PSBcImRyb3BcIikge1xuXHRcdFx0XHRyZXN1bHQgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGZhbGxiYWNrID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNyZWF0ZUNhcmRPYmplY3RJbnN0YW5jZTxUPihcblx0XHRcdFx0XHRwYXJlbnQsXG5cdFx0XHRcdFx0ZmFsbGJhY2ssXG5cdFx0XHRcdFx0Y3JlYXRlSW5zdGFuY2VDYWxsYmFjayxcblx0XHRcdFx0XHRjcmVhdGVWYWxpZGF0aW9uRXJyb3JDYWxsYmFjayxcblx0XHRcdFx0XHRlcnJvcnMpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb25JbnN0YW5jZShcblx0cGFyZW50OiBDYXJkRWxlbWVudCxcblx0anNvbjogYW55LFxuXHRlcnJvcnM6IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4pOiBBY3Rpb24ge1xuXHRyZXR1cm4gY3JlYXRlQ2FyZE9iamVjdEluc3RhbmNlPEFjdGlvbj4oXG5cdFx0cGFyZW50LFxuXHRcdGpzb24sXG5cdFx0KHR5cGVOYW1lOiBzdHJpbmcpID0+IHsgcmV0dXJuIEFkYXB0aXZlQ2FyZC5hY3Rpb25UeXBlUmVnaXN0cnkuY3JlYXRlSW5zdGFuY2UodHlwZU5hbWUpOyB9LFxuXHRcdCh0eXBlTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLlVua25vd25BY3Rpb25UeXBlLFxuXHRcdFx0XHRtZXNzYWdlOiBcIlVua25vd24gYWN0aW9uIHR5cGU6IFwiICsgdHlwZU5hbWUgKyBcIi4gQXR0ZW1wdGluZyB0byBmYWxsIGJhY2suXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdGVycm9ycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50SW5zdGFuY2UoXG5cdHBhcmVudDogQ2FyZEVsZW1lbnQsXG5cdGpzb246IGFueSxcblx0ZXJyb3JzOiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KTogQ2FyZEVsZW1lbnQge1xuXHRyZXR1cm4gY3JlYXRlQ2FyZE9iamVjdEluc3RhbmNlPENhcmRFbGVtZW50Pihcblx0XHRwYXJlbnQsXG5cdFx0anNvbixcblx0XHQodHlwZU5hbWU6IHN0cmluZykgPT4geyByZXR1cm4gQWRhcHRpdmVDYXJkLmVsZW1lbnRUeXBlUmVnaXN0cnkuY3JlYXRlSW5zdGFuY2UodHlwZU5hbWUpOyB9LFxuXHRcdCh0eXBlTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLlVua25vd25FbGVtZW50VHlwZSxcblx0XHRcdFx0bWVzc2FnZTogXCJVbmtub3duIGVsZW1lbnQgdHlwZTogXCIgKyB0eXBlTmFtZSArIFwiLiBBdHRlbXB0aW5nIHRvIGZhbGwgYmFjay5cIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZXJyb3JzKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNwYWNpbmdEZWZpbml0aW9uIHtcblx0bGVmdDogbnVtYmVyID0gMDtcblx0dG9wOiBudW1iZXIgPSAwO1xuXHRyaWdodDogbnVtYmVyID0gMDtcblx0Ym90dG9tOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKHRvcDogbnVtYmVyID0gMCxcblx0XHRyaWdodDogbnVtYmVyID0gMCxcblx0XHRib3R0b206IG51bWJlciA9IDAsXG5cdFx0bGVmdDogbnVtYmVyID0gMCkge1xuXHRcdHRoaXMudG9wID0gdG9wO1xuXHRcdHRoaXMucmlnaHQgPSByaWdodDtcblx0XHR0aGlzLmJvdHRvbSA9IGJvdHRvbTtcblx0XHR0aGlzLmxlZnQgPSBsZWZ0O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQYWRkaW5nRGVmaW5pdGlvbiB7XG5cdHRvcDogRW51bXMuU3BhY2luZyA9IEVudW1zLlNwYWNpbmcuTm9uZTtcblx0cmlnaHQ6IEVudW1zLlNwYWNpbmcgPSBFbnVtcy5TcGFjaW5nLk5vbmU7XG5cdGJvdHRvbTogRW51bXMuU3BhY2luZyA9IEVudW1zLlNwYWNpbmcuTm9uZTtcblx0bGVmdDogRW51bXMuU3BhY2luZyA9IEVudW1zLlNwYWNpbmcuTm9uZTtcblxuXHRjb25zdHJ1Y3Rvcih0b3A6IEVudW1zLlNwYWNpbmcgPSBFbnVtcy5TcGFjaW5nLk5vbmUsXG5cdFx0cmlnaHQ6IEVudW1zLlNwYWNpbmcgPSBFbnVtcy5TcGFjaW5nLk5vbmUsXG5cdFx0Ym90dG9tOiBFbnVtcy5TcGFjaW5nID0gRW51bXMuU3BhY2luZy5Ob25lLFxuXHRcdGxlZnQ6IEVudW1zLlNwYWNpbmcgPSBFbnVtcy5TcGFjaW5nLk5vbmUpIHtcblx0XHR0aGlzLnRvcCA9IHRvcDtcblx0XHR0aGlzLnJpZ2h0ID0gcmlnaHQ7XG5cdFx0dGhpcy5ib3R0b20gPSBib3R0b207XG5cdFx0dGhpcy5sZWZ0ID0gbGVmdDtcblx0fVxuXG5cdHRvU3BhY2luZ0RlZmluaXRpb24oaG9zdENvbmZpZzogSG9zdENvbmZpZy5Ib3N0Q29uZmlnKTogU3BhY2luZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiBuZXcgU3BhY2luZ0RlZmluaXRpb24oXG5cdFx0XHRob3N0Q29uZmlnLmdldEVmZmVjdGl2ZVNwYWNpbmcodGhpcy50b3ApLFxuXHRcdFx0aG9zdENvbmZpZy5nZXRFZmZlY3RpdmVTcGFjaW5nKHRoaXMucmlnaHQpLFxuXHRcdFx0aG9zdENvbmZpZy5nZXRFZmZlY3RpdmVTcGFjaW5nKHRoaXMuYm90dG9tKSxcblx0XHRcdGhvc3RDb25maWcuZ2V0RWZmZWN0aXZlU3BhY2luZyh0aGlzLmxlZnQpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU2l6ZUFuZFVuaXQge1xuXHRwaHlzaWNhbFNpemU6IG51bWJlcjtcblx0dW5pdDogRW51bXMuU2l6ZVVuaXQ7XG5cblx0c3RhdGljIHBhcnNlKGlucHV0OiBhbnkpOiBTaXplQW5kVW5pdCB7XG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBTaXplQW5kVW5pdCgwLCBFbnVtcy5TaXplVW5pdC5XZWlnaHQpO1xuXG5cdFx0bGV0IHJlZ0V4cCA9IC9eKFswLTldKykocHh8XFwqKT8kL2c7XG5cdFx0bGV0IG1hdGNoZXMgPSByZWdFeHAuZXhlYyhpbnB1dCk7XG5cblx0XHRpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRyZXN1bHQucGh5c2ljYWxTaXplID0gcGFyc2VJbnQobWF0Y2hlc1sxXSk7XG5cblx0XHRcdGlmIChtYXRjaGVzLmxlbmd0aCA9PSAzKSB7XG5cdFx0XHRcdGlmIChtYXRjaGVzWzJdID09IFwicHhcIikge1xuXHRcdFx0XHRcdHJlc3VsdC51bml0ID0gRW51bXMuU2l6ZVVuaXQuUGl4ZWw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNpemU6IFwiICsgaW5wdXQpO1xuXHR9XG5cblx0Y29uc3RydWN0b3IocGh5c2ljYWxTaXplOiBudW1iZXIsIHVuaXQ6IEVudW1zLlNpemVVbml0KSB7XG5cdFx0dGhpcy5waHlzaWNhbFNpemUgPSBwaHlzaWNhbFNpemU7XG5cdFx0dGhpcy51bml0ID0gdW5pdDtcblx0fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvdXJjZUluZm9ybWF0aW9uIHtcblx0dXJsOiBzdHJpbmc7XG5cdG1pbWVUeXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhcmRPYmplY3Qge1xuXHRzaG91bGRGYWxsYmFjaygpOiBib29sZWFuO1xuXHRzZXRQYXJlbnQocGFyZW50OiBDYXJkRWxlbWVudCk7XG5cdHBhcnNlKGpzb246IGFueSk7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYXJkRWxlbWVudCBpbXBsZW1lbnRzIElDYXJkT2JqZWN0IHtcblx0cHJpdmF0ZSBfc2hvdWxkRmFsbGJhY2s6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfbGFuZzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXHRwcml2YXRlIF9ob3N0Q29uZmlnPzogSG9zdENvbmZpZy5Ib3N0Q29uZmlnID0gbnVsbDtcblx0cHJpdmF0ZSBfaW50ZXJuYWxQYWRkaW5nOiBQYWRkaW5nRGVmaW5pdGlvbiA9IG51bGw7XG5cdHByaXZhdGUgX3BhcmVudDogQ2FyZEVsZW1lbnQgPSBudWxsO1xuXHRwcml2YXRlIF9yZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcblx0cHJpdmF0ZSBfc2VwYXJhdG9yRWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsO1xuXHRwcml2YXRlIF9pc1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXHRwcml2YXRlIF90cnVuY2F0ZWREdWVUb092ZXJmbG93OiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2RlZmF1bHRSZW5kZXJlZEVsZW1lbnREaXNwbGF5TW9kZTogc3RyaW5nID0gbnVsbDtcblx0cHJpdmF0ZSBfcGFkZGluZzogUGFkZGluZ0RlZmluaXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgaW50ZXJuYWxSZW5kZXJTZXBhcmF0b3IoKTogSFRNTEVsZW1lbnQge1xuXHRcdHJldHVybiBVdGlscy5yZW5kZXJTZXBhcmF0aW9uKFxuXHRcdFx0e1xuXHRcdFx0XHRzcGFjaW5nOiB0aGlzLmhvc3RDb25maWcuZ2V0RWZmZWN0aXZlU3BhY2luZyh0aGlzLnNwYWNpbmcpLFxuXHRcdFx0XHRsaW5lVGhpY2tuZXNzOiB0aGlzLnNlcGFyYXRvciA/IHRoaXMuaG9zdENvbmZpZy5zZXBhcmF0b3IubGluZVRoaWNrbmVzcyA6IG51bGwsXG5cdFx0XHRcdGxpbmVDb2xvcjogdGhpcy5zZXBhcmF0b3IgPyB0aGlzLmhvc3RDb25maWcuc2VwYXJhdG9yLmxpbmVDb2xvciA6IG51bGxcblx0XHRcdH0sXG5cdFx0XHR0aGlzLnNlcGFyYXRvck9yaWVudGF0aW9uKTtcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUmVuZGVyZWRFbGVtZW50VmlzaWJpbGl0eSgpIHtcblx0XHRpZiAodGhpcy5fcmVuZGVyZWRFbGVtZW50KSB7XG5cdFx0XHR0aGlzLl9yZW5kZXJlZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2lzVmlzaWJsZSA/IHRoaXMuX2RlZmF1bHRSZW5kZXJlZEVsZW1lbnREaXNwbGF5TW9kZSA6IFwibm9uZVwiO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9zZXBhcmF0b3JFbGVtZW50KSB7XG5cdFx0XHRpZiAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaXNGaXJzdEVsZW1lbnQodGhpcykpIHtcblx0XHRcdFx0dGhpcy5fc2VwYXJhdG9yRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5fc2VwYXJhdG9yRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5faXNWaXNpYmxlID8gdGhpcy5fZGVmYXVsdFJlbmRlcmVkRWxlbWVudERpc3BsYXlNb2RlIDogXCJub25lXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBoaWRlRWxlbWVudER1ZVRvT3ZlcmZsb3coKSB7XG5cdFx0aWYgKHRoaXMuX3JlbmRlcmVkRWxlbWVudCAmJiB0aGlzLl9pc1Zpc2libGUpIHtcblx0XHRcdHRoaXMuX3JlbmRlcmVkRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0XHR0aGlzLl9pc1Zpc2libGUgPSBmYWxzZTtcblx0XHRcdHJhaXNlRWxlbWVudFZpc2liaWxpdHlDaGFuZ2VkRXZlbnQodGhpcywgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2hvd0VsZW1lbnRIaWRkZW5EdWVUb092ZXJmbG93KCkge1xuXHRcdGlmICh0aGlzLl9yZW5kZXJlZEVsZW1lbnQgJiYgIXRoaXMuX2lzVmlzaWJsZSkge1xuXHRcdFx0dGhpcy5fcmVuZGVyZWRFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBudWxsO1xuXHRcdFx0dGhpcy5faXNWaXNpYmxlID0gdHJ1ZTtcblx0XHRcdHJhaXNlRWxlbWVudFZpc2liaWxpdHlDaGFuZ2VkRXZlbnQodGhpcywgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdC8vIE1hcmtlZCBwcml2YXRlIHRvIGVtdWxhdGUgaW50ZXJuYWwgYWNjZXNzXG5cdHByaXZhdGUgaGFuZGxlT3ZlcmZsb3cobWF4SGVpZ2h0OiBudW1iZXIpIHtcblx0XHRpZiAodGhpcy5pc1Zpc2libGUgfHwgdGhpcy5pc0hpZGRlbkR1ZVRvT3ZlcmZsb3coKSkge1xuXHRcdFx0dmFyIGhhbmRsZWQgPSB0aGlzLnRydW5jYXRlT3ZlcmZsb3cobWF4SGVpZ2h0KTtcblxuXHRcdFx0Ly8gRXZlbiBpZiB3ZSB3ZXJlIHVuYWJsZSB0byB0cnVuY2F0ZSB0aGUgZWxlbWVudCB0byBmaXQgdGhpcyB0aW1lLFxuXHRcdFx0Ly8gaXQgc3RpbGwgY291bGQgaGF2ZSBiZWVuIHByZXZpb3VzbHkgdHJ1bmNhdGVkXG5cdFx0XHR0aGlzLl90cnVuY2F0ZWREdWVUb092ZXJmbG93ID0gaGFuZGxlZCB8fCB0aGlzLl90cnVuY2F0ZWREdWVUb092ZXJmbG93O1xuXG5cdFx0XHRpZiAoIWhhbmRsZWQpIHtcblx0XHRcdFx0dGhpcy5oaWRlRWxlbWVudER1ZVRvT3ZlcmZsb3coKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKGhhbmRsZWQgJiYgIXRoaXMuX2lzVmlzaWJsZSkge1xuXHRcdFx0XHR0aGlzLnNob3dFbGVtZW50SGlkZGVuRHVlVG9PdmVyZmxvdygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIE1hcmtlZCBwcml2YXRlIHRvIGVtdWxhdGUgaW50ZXJuYWwgYWNjZXNzXG5cdHByaXZhdGUgcmVzZXRPdmVyZmxvdygpOiBib29sZWFuIHtcblx0XHR2YXIgc2l6ZUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLl90cnVuY2F0ZWREdWVUb092ZXJmbG93KSB7XG5cdFx0XHR0aGlzLnVuZG9PdmVyZmxvd1RydW5jYXRpb24oKTtcblx0XHRcdHRoaXMuX3RydW5jYXRlZER1ZVRvT3ZlcmZsb3cgPSBmYWxzZTtcblx0XHRcdHNpemVDaGFuZ2VkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0hpZGRlbkR1ZVRvT3ZlcmZsb3cpIHtcblx0XHRcdHRoaXMuc2hvd0VsZW1lbnRIaWRkZW5EdWVUb092ZXJmbG93KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNpemVDaGFuZ2VkO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZVBsYWNlaG9sZGVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCIxcHggZGFzaGVkICNERERERERcIjtcblx0XHRlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBcIjRweFwiO1xuXHRcdGVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gXCIzMnB4XCI7XG5cdFx0ZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwiMTBweFwiO1xuXHRcdGVsZW1lbnQuaW5uZXJUZXh0ID0gXCJFbXB0eSBcIiArIHRoaXMuZ2V0SnNvblR5cGVOYW1lKCk7XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXG5cdHByb3RlY3RlZCBpbnRlcm5hbEdldE5vblplcm9QYWRkaW5nKHBhZGRpbmc6IFBhZGRpbmdEZWZpbml0aW9uLFxuXHRcdHByb2Nlc3NUb3A6IGJvb2xlYW4gPSB0cnVlLFxuXHRcdHByb2Nlc3NSaWdodDogYm9vbGVhbiA9IHRydWUsXG5cdFx0cHJvY2Vzc0JvdHRvbTogYm9vbGVhbiA9IHRydWUsXG5cdFx0cHJvY2Vzc0xlZnQ6IGJvb2xlYW4gPSB0cnVlKSB7XG5cdFx0aWYgKHByb2Nlc3NUb3ApIHtcblx0XHRcdGlmIChwYWRkaW5nLnRvcCA9PSBFbnVtcy5TcGFjaW5nLk5vbmUpIHtcblx0XHRcdFx0cGFkZGluZy50b3AgPSB0aGlzLmludGVybmFsUGFkZGluZy50b3A7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHByb2Nlc3NSaWdodCkge1xuXHRcdFx0aWYgKHBhZGRpbmcucmlnaHQgPT0gRW51bXMuU3BhY2luZy5Ob25lKSB7XG5cdFx0XHRcdHBhZGRpbmcucmlnaHQgPSB0aGlzLmludGVybmFsUGFkZGluZy5yaWdodDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocHJvY2Vzc0JvdHRvbSkge1xuXHRcdFx0aWYgKHBhZGRpbmcuYm90dG9tID09IEVudW1zLlNwYWNpbmcuTm9uZSkge1xuXHRcdFx0XHRwYWRkaW5nLmJvdHRvbSA9IHRoaXMuaW50ZXJuYWxQYWRkaW5nLmJvdHRvbTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocHJvY2Vzc0xlZnQpIHtcblx0XHRcdGlmIChwYWRkaW5nLmxlZnQgPT0gRW51bXMuU3BhY2luZy5Ob25lKSB7XG5cdFx0XHRcdHBhZGRpbmcubGVmdCA9IHRoaXMuaW50ZXJuYWxQYWRkaW5nLmxlZnQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudC5pbnRlcm5hbEdldE5vblplcm9QYWRkaW5nKFxuXHRcdFx0XHRwYWRkaW5nLFxuXHRcdFx0XHRwcm9jZXNzVG9wICYmIHRoaXMuaXNBdFRoZVZlcnlUb3AoKSxcblx0XHRcdFx0cHJvY2Vzc1JpZ2h0ICYmIHRoaXMuaXNBdFRoZVZlcnlSaWdodCgpLFxuXHRcdFx0XHRwcm9jZXNzQm90dG9tICYmIHRoaXMuaXNBdFRoZVZlcnlCb3R0b20oKSxcblx0XHRcdFx0cHJvY2Vzc0xlZnQgJiYgdGhpcy5pc0F0VGhlVmVyeUxlZnQoKSk7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGFkanVzdFJlbmRlcmVkRWxlbWVudFNpemUocmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmhlaWdodCA9PT0gXCJhdXRvXCIpIHtcblx0XHRcdHJlbmRlcmVkRWxlbWVudC5zdHlsZS5mbGV4ID0gXCIwIDAgYXV0b1wiO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJlbmRlcmVkRWxlbWVudC5zdHlsZS5mbGV4ID0gXCIxIDEgYXV0b1wiO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBpbnRlcm5hbFJlbmRlcigpOiBIVE1MRWxlbWVudDtcblxuICAgIC8qXG4gICAgICogQ2FsbGVkIHdoZW4gdGhpcyBlbGVtZW50IG92ZXJmbG93cyB0aGUgYm90dG9tIG9mIHRoZSBjYXJkLlxuICAgICAqIG1heEhlaWdodCB3aWxsIGJlIHRoZSBhbW91bnQgb2Ygc3BhY2Ugc3RpbGwgYXZhaWxhYmxlIG9uIHRoZSBjYXJkICgwIGlmXG4gICAgICogdGhlIGVsZW1lbnQgaXMgZnVsbHkgb2ZmIHRoZSBjYXJkKS5cbiAgICAgKi9cblx0cHJvdGVjdGVkIHRydW5jYXRlT3ZlcmZsb3cobWF4SGVpZ2h0OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHQvLyBDaGlsZCBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIHJldHVybiB0cnVlIGlmIHRoZSBlbGVtZW50IGhhbmRsZWRcblx0XHQvLyB0aGUgdHJ1bmNhdGlvbiByZXF1ZXN0IHN1Y2ggdGhhdCBpdHMgY29udGVudCBmaXRzIHdpdGhpbiBtYXhIZWlnaHQsXG5cdFx0Ly8gZmFsc2UgaWYgdGhlIGVsZW1lbnQgc2hvdWxkIGZhbGwgYmFjayB0byBiZWluZyBoaWRkZW5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuICAgIC8qXG4gICAgICogVGhpcyBzaG91bGQgcmV2ZXJzZSBhbnkgY2hhbmdlcyBwZXJmb3JtZWQgaW4gdHJ1bmNhdGVPdmVyZmxvdygpLlxuICAgICAqL1xuXHRwcm90ZWN0ZWQgdW5kb092ZXJmbG93VHJ1bmNhdGlvbigpIHsgfVxuXG5cdHByb3RlY3RlZCBpc0Rlc2lnbk1vZGUoKTogYm9vbGVhbiB7XG5cdFx0dmFyIHJvb3RFbGVtZW50ID0gdGhpcy5nZXRSb290RWxlbWVudCgpO1xuXG5cdFx0cmV0dXJuIHJvb3RFbGVtZW50IGluc3RhbmNlb2YgQWRhcHRpdmVDYXJkICYmIHJvb3RFbGVtZW50LmRlc2lnbk1vZGU7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0IHVzZURlZmF1bHRTaXppbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0IGFsbG93Q3VzdG9tUGFkZGluZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXQgZGVmYXVsdFBhZGRpbmcoKTogUGFkZGluZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiBuZXcgUGFkZGluZ0RlZmluaXRpb24oKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXQgaW50ZXJuYWxQYWRkaW5nKCk6IFBhZGRpbmdEZWZpbml0aW9uIHtcblx0XHRpZiAodGhpcy5fcGFkZGluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuX3BhZGRpbmc7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuICh0aGlzLl9pbnRlcm5hbFBhZGRpbmcgJiYgdGhpcy5hbGxvd0N1c3RvbVBhZGRpbmcpID8gdGhpcy5faW50ZXJuYWxQYWRkaW5nIDogdGhpcy5kZWZhdWx0UGFkZGluZztcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgc2V0IGludGVybmFsUGFkZGluZyh2YWx1ZTogUGFkZGluZ0RlZmluaXRpb24pIHtcblx0XHR0aGlzLl9pbnRlcm5hbFBhZGRpbmcgPSB2YWx1ZTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXQgc2VwYXJhdG9yT3JpZW50YXRpb24oKTogRW51bXMuT3JpZW50YXRpb24ge1xuXHRcdHJldHVybiBFbnVtcy5PcmllbnRhdGlvbi5Ib3Jpem9udGFsO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFBhZGRpbmcoKTogUGFkZGluZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLl9wYWRkaW5nO1xuXHR9XG5cblx0cHJvdGVjdGVkIHNldFBhZGRpbmcodmFsdWU6IFBhZGRpbmdEZWZpbml0aW9uKSB7XG5cdFx0dGhpcy5fcGFkZGluZyA9IHZhbHVlO1xuXG5cdFx0aWYgKHRoaXMuX3BhZGRpbmcpIHtcblx0XHRcdEFkYXB0aXZlQ2FyZC51c2VBdXRvbWF0aWNDb250YWluZXJCbGVlZGluZyA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHJlYWRvbmx5IHJlcXVpcmVzID0gbmV3IEhvc3RDb25maWcuSG9zdENhcGFiaWxpdGllcygpO1xuXG5cdGlkOiBzdHJpbmc7XG5cdHNwZWFrOiBzdHJpbmc7XG5cdGhvcml6b250YWxBbGlnbm1lbnQ/OiBFbnVtcy5Ib3Jpem9udGFsQWxpZ25tZW50ID0gbnVsbDtcblx0c3BhY2luZzogRW51bXMuU3BhY2luZyA9IEVudW1zLlNwYWNpbmcuRGVmYXVsdDtcblx0c2VwYXJhdG9yOiBib29sZWFuID0gZmFsc2U7XG5cdGhlaWdodDogXCJhdXRvXCIgfCBcInN0cmV0Y2hcIiA9IFwiYXV0b1wiO1xuXHRjdXN0b21Dc3NTZWxlY3Rvcjogc3RyaW5nID0gbnVsbDtcblxuXHRhYnN0cmFjdCBnZXRKc29uVHlwZU5hbWUoKTogc3RyaW5nO1xuXHRhYnN0cmFjdCByZW5kZXJTcGVlY2goKTogc3RyaW5nO1xuXG5cdHRvSlNPTigpIHtcblx0XHRsZXQgcmVzdWx0ID0ge307XG5cblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwidHlwZVwiLCB0aGlzLmdldEpzb25UeXBlTmFtZSgpKTtcblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwiaWRcIiwgdGhpcy5pZCk7XG5cblx0XHRpZiAodGhpcy5ob3Jpem9udGFsQWxpZ25tZW50ICE9PSBudWxsKSB7XG5cdFx0XHRVdGlscy5zZXRFbnVtUHJvcGVydHkoRW51bXMuSG9yaXpvbnRhbEFsaWdubWVudCwgcmVzdWx0LCBcImhvcml6b250YWxBbGlnbm1lbnRcIiwgdGhpcy5ob3Jpem9udGFsQWxpZ25tZW50KTtcblx0XHR9XG5cblx0XHRVdGlscy5zZXRFbnVtUHJvcGVydHkoRW51bXMuU3BhY2luZywgcmVzdWx0LCBcInNwYWNpbmdcIiwgdGhpcy5zcGFjaW5nLCBFbnVtcy5TcGFjaW5nLkRlZmF1bHQpO1xuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJzZXBhcmF0b3JcIiwgdGhpcy5zZXBhcmF0b3IsIGZhbHNlKTtcblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0LCBcImF1dG9cIik7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0c2V0UGFyZW50KHZhbHVlOiBDYXJkRWxlbWVudCkge1xuXHRcdHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0Tm9uWmVyb1BhZGRpbmcoKTogUGFkZGluZ0RlZmluaXRpb24ge1xuXHRcdHZhciBwYWRkaW5nOiBQYWRkaW5nRGVmaW5pdGlvbiA9IG5ldyBQYWRkaW5nRGVmaW5pdGlvbigpO1xuXG5cdFx0dGhpcy5pbnRlcm5hbEdldE5vblplcm9QYWRkaW5nKHBhZGRpbmcpO1xuXG5cdFx0cmV0dXJuIHBhZGRpbmc7XG5cdH1cblxuXHRnZXRGb3JiaWRkZW5FbGVtZW50VHlwZXMoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRnZXRGb3JiaWRkZW5BY3Rpb25UeXBlcygpOiBBcnJheTxhbnk+IHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHBhcnNlKGpzb246IGFueSwgZXJyb3JzPzogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPikge1xuXHRcdHJhaXNlUGFyc2VFbGVtZW50RXZlbnQodGhpcywganNvbiwgZXJyb3JzKTtcblxuXHRcdHRoaXMucmVxdWlyZXMucGFyc2UoanNvbltcInJlcXVpcmVzXCJdLCBlcnJvcnMpO1xuXHRcdHRoaXMuaWQgPSBqc29uW1wiaWRcIl07XG5cdFx0dGhpcy5zcGVhayA9IGpzb25bXCJzcGVha1wiXTtcblx0XHR0aGlzLmhvcml6b250YWxBbGlnbm1lbnQgPSBVdGlscy5nZXRFbnVtVmFsdWVPckRlZmF1bHQoRW51bXMuSG9yaXpvbnRhbEFsaWdubWVudCwganNvbltcImhvcml6b250YWxBbGlnbm1lbnRcIl0sIG51bGwpO1xuXG5cdFx0dGhpcy5zcGFjaW5nID0gVXRpbHMuZ2V0RW51bVZhbHVlT3JEZWZhdWx0KEVudW1zLlNwYWNpbmcsIGpzb25bXCJzcGFjaW5nXCJdLCBFbnVtcy5TcGFjaW5nLkRlZmF1bHQpO1xuXHRcdHRoaXMuc2VwYXJhdG9yID0ganNvbltcInNlcGFyYXRvclwiXTtcblxuXHRcdHZhciBqc29uU2VwYXJhdGlvbiA9IGpzb25bXCJzZXBhcmF0aW9uXCJdO1xuXG5cdFx0aWYgKGpzb25TZXBhcmF0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGlmIChqc29uU2VwYXJhdGlvbiA9PT0gXCJub25lXCIpIHtcblx0XHRcdFx0dGhpcy5zcGFjaW5nID0gRW51bXMuU3BhY2luZy5Ob25lO1xuXHRcdFx0XHR0aGlzLnNlcGFyYXRvciA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoanNvblNlcGFyYXRpb24gPT09IFwic3Ryb25nXCIpIHtcblx0XHRcdFx0dGhpcy5zcGFjaW5nID0gRW51bXMuU3BhY2luZy5MYXJnZTtcblx0XHRcdFx0dGhpcy5zZXBhcmF0b3IgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoanNvblNlcGFyYXRpb24gPT09IFwiZGVmYXVsdFwiKSB7XG5cdFx0XHRcdHRoaXMuc3BhY2luZyA9IEVudW1zLlNwYWNpbmcuRGVmYXVsdDtcblx0XHRcdFx0dGhpcy5zZXBhcmF0b3IgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0cmFpc2VQYXJzZUVycm9yKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZXJyb3I6IEVudW1zLlZhbGlkYXRpb25FcnJvci5EZXByZWNhdGVkLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IFwiVGhlIFxcXCJzZXBhcmF0aW9uXFxcIiBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQuIFVzZSB0aGUgXFxcInNwYWNpbmdcXFwiIGFuZCBcXFwic2VwYXJhdG9yXFxcIiBwcm9wZXJ0aWVzIGluc3RlYWQuXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3JzXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHZhciBqc29uSGVpZ2h0ID0ganNvbltcImhlaWdodFwiXTtcblxuXHRcdGlmIChqc29uSGVpZ2h0ID09PSBcImF1dG9cIiB8fCBqc29uSGVpZ2h0ID09PSBcInN0cmV0Y2hcIikge1xuXHRcdFx0dGhpcy5oZWlnaHQgPSBqc29uSGVpZ2h0O1xuXHRcdH1cblx0fVxuXG5cdGdldEFjdGlvbkNvdW50KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRnZXRBY3Rpb25BdChpbmRleDogbnVtYmVyKTogQWN0aW9uIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbmRleCBvdXQgb2YgcmFuZ2UuXCIpO1xuXHR9XG5cblx0dmFsaWRhdGUoKTogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cmVtb3ZlKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudCBpbnN0YW5jZW9mIENhcmRFbGVtZW50Q29udGFpbmVyKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQucmVtb3ZlSXRlbSh0aGlzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuXHRcdHRoaXMuX3JlbmRlcmVkRWxlbWVudCA9IHRoaXMuaW50ZXJuYWxSZW5kZXIoKTtcblx0XHR0aGlzLl9zZXBhcmF0b3JFbGVtZW50ID0gdGhpcy5pbnRlcm5hbFJlbmRlclNlcGFyYXRvcigpO1xuXG5cdFx0aWYgKHRoaXMuX3JlbmRlcmVkRWxlbWVudCkge1xuXHRcdFx0aWYgKHRoaXMuY3VzdG9tQ3NzU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5fcmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jdXN0b21Dc3NTZWxlY3Rvcik7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3JlbmRlcmVkRWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcblx0XHRcdHRoaXMuX2RlZmF1bHRSZW5kZXJlZEVsZW1lbnREaXNwbGF5TW9kZSA9IHRoaXMuX3JlbmRlcmVkRWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuXG5cdFx0XHR0aGlzLmFkanVzdFJlbmRlcmVkRWxlbWVudFNpemUodGhpcy5fcmVuZGVyZWRFbGVtZW50KTtcblx0XHRcdHRoaXMudXBkYXRlTGF5b3V0KGZhbHNlKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAodGhpcy5pc0Rlc2lnbk1vZGUoKSkge1xuXHRcdFx0dGhpcy5fcmVuZGVyZWRFbGVtZW50ID0gdGhpcy5jcmVhdGVQbGFjZWhvbGRlckVsZW1lbnQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyZWRFbGVtZW50O1xuXHR9XG5cblx0dXBkYXRlTGF5b3V0KHByb2Nlc3NDaGlsZHJlbjogYm9vbGVhbiA9IHRydWUpIHtcblx0XHR0aGlzLnVwZGF0ZVJlbmRlcmVkRWxlbWVudFZpc2liaWxpdHkoKTtcblx0fVxuXG5cdGluZGV4T2YoY2FyZEVsZW1lbnQ6IENhcmRFbGVtZW50KTogbnVtYmVyIHtcblx0XHRyZXR1cm4gLTE7XG5cdH1cblxuXHRpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9yZW5kZXJlZEVsZW1lbnQgJiYgdGhpcy5fcmVuZGVyZWRFbGVtZW50Lm9mZnNldEhlaWdodCA+IDA7XG5cdH1cblxuXHRpc0F0VGhlVmVyeVRvcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5pc0ZpcnN0RWxlbWVudCh0aGlzKSAmJiB0aGlzLnBhcmVudC5pc0F0VGhlVmVyeVRvcCgpIDogdHJ1ZTtcblx0fVxuXG5cdGlzRmlyc3RFbGVtZW50KGVsZW1lbnQ6IENhcmRFbGVtZW50KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpc0F0VGhlVmVyeUJvdHRvbSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5pc0xhc3RFbGVtZW50KHRoaXMpICYmIHRoaXMucGFyZW50LmlzQXRUaGVWZXJ5Qm90dG9tKCkgOiB0cnVlO1xuXHR9XG5cblx0aXNMYXN0RWxlbWVudChlbGVtZW50OiBDYXJkRWxlbWVudCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aXNBdFRoZVZlcnlMZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmlzTGVmdE1vc3RFbGVtZW50KHRoaXMpICYmIHRoaXMucGFyZW50LmlzQXRUaGVWZXJ5TGVmdCgpIDogdHJ1ZTtcblx0fVxuXG5cdGlzQmxlZWRpbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aXNMZWZ0TW9zdEVsZW1lbnQoZWxlbWVudDogQ2FyZEVsZW1lbnQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlzQXRUaGVWZXJ5UmlnaHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuaXNSaWdodE1vc3RFbGVtZW50KHRoaXMpICYmIHRoaXMucGFyZW50LmlzQXRUaGVWZXJ5UmlnaHQoKSA6IHRydWU7XG5cdH1cblxuXHRpc1JpZ2h0TW9zdEVsZW1lbnQoZWxlbWVudDogQ2FyZEVsZW1lbnQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlzSGlkZGVuRHVlVG9PdmVyZmxvdygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyZWRFbGVtZW50ICYmIHRoaXMuX3JlbmRlcmVkRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID09ICdoaWRkZW4nO1xuXHR9XG5cblx0Y2FuQ29udGVudEJsZWVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmNhbkNvbnRlbnRCbGVlZCgpIDogdHJ1ZTtcblx0fVxuXG5cdGdldFJvb3RFbGVtZW50KCk6IENhcmRFbGVtZW50IHtcblx0XHR2YXIgcm9vdEVsZW1lbnQ6IENhcmRFbGVtZW50ID0gdGhpcztcblxuXHRcdHdoaWxlIChyb290RWxlbWVudC5wYXJlbnQpIHtcblx0XHRcdHJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQucGFyZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiByb290RWxlbWVudDtcblx0fVxuXG5cdGdldFBhcmVudENvbnRhaW5lcigpOiBDb250YWluZXIge1xuXHRcdHZhciBjdXJyZW50RWxlbWVudDogQ2FyZEVsZW1lbnQgPSB0aGlzLnBhcmVudDtcblxuXHRcdHdoaWxlIChjdXJyZW50RWxlbWVudCkge1xuXHRcdFx0aWYgKGN1cnJlbnRFbGVtZW50IGluc3RhbmNlb2YgQ29udGFpbmVyKSB7XG5cdFx0XHRcdHJldHVybiA8Q29udGFpbmVyPmN1cnJlbnRFbGVtZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGdldEFsbElucHV0cygpOiBBcnJheTxJbnB1dD4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGdldFJlc291cmNlSW5mb3JtYXRpb24oKTogQXJyYXk8SVJlc291cmNlSW5mb3JtYXRpb24+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRnZXRFbGVtZW50QnlJZChpZDogc3RyaW5nKTogQ2FyZEVsZW1lbnQge1xuXHRcdHJldHVybiB0aGlzLmlkID09PSBpZCA/IHRoaXMgOiBudWxsO1xuXHR9XG5cblx0Z2V0QWN0aW9uQnlJZChpZDogc3RyaW5nKTogQWN0aW9uIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHNob3VsZEZhbGxiYWNrKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9zaG91bGRGYWxsYmFjayB8fCAhdGhpcy5yZXF1aXJlcy5hcmVBbGxNZXQodGhpcy5ob3N0Q29uZmlnLmhvc3RDYXBhYmlsaXRpZXMpO1xuXHR9XG5cblx0c2V0U2hvdWxkRmFsbGJhY2sodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLl9zaG91bGRGYWxsYmFjayA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IGxhbmcoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5fbGFuZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2xhbmc7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMucGFyZW50KSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnBhcmVudC5sYW5nO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c2V0IGxhbmcodmFsdWU6IHN0cmluZykge1xuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZSAhPSBcIlwiKSB7XG5cdFx0XHR2YXIgcmVnRXggPSAvXlthLXpdezIsM30kL2lnO1xuXG5cdFx0XHR2YXIgbWF0Y2hlcyA9IHJlZ0V4LmV4ZWModmFsdWUpO1xuXG5cdFx0XHRpZiAoIW1hdGNoZXMpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsYW5ndWFnZSBpZGVudGlmaWVyOiBcIiArIHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9sYW5nID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgaG9zdENvbmZpZygpOiBIb3N0Q29uZmlnLkhvc3RDb25maWcge1xuXHRcdGlmICh0aGlzLl9ob3N0Q29uZmlnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5faG9zdENvbmZpZztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Lmhvc3RDb25maWc7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGRlZmF1bHRIb3N0Q29uZmlnO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHNldCBob3N0Q29uZmlnKHZhbHVlOiBIb3N0Q29uZmlnLkhvc3RDb25maWcpIHtcblx0XHR0aGlzLl9ob3N0Q29uZmlnID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgaW5kZXgoKTogbnVtYmVyIHtcblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudC5pbmRleE9mKHRoaXMpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0fVxuXG5cdGdldCBpc0ludGVyYWN0aXZlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGdldCBpc1N0YW5kYWxvbmUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRnZXQgcGFyZW50KCk6IENhcmRFbGVtZW50IHtcblx0XHRyZXR1cm4gdGhpcy5fcGFyZW50O1xuXHR9XG5cblx0Z2V0IGlzVmlzaWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5faXNWaXNpYmxlO1xuXHR9XG5cblx0Z2V0IGhhc1Zpc2libGVTZXBhcmF0b3IoKTogYm9vbGVhbiB7XG5cdFx0dmFyIHBhcmVudENvbnRhaW5lciA9IHRoaXMuZ2V0UGFyZW50Q29udGFpbmVyKCk7XG5cblx0XHRpZiAocGFyZW50Q29udGFpbmVyKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXBhcmF0b3JFbGVtZW50ICYmICFwYXJlbnRDb250YWluZXIuaXNGaXJzdEVsZW1lbnQodGhpcyk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHNldCBpc1Zpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHQvLyBJZiB0aGUgZWxlbWVudCBpcyBnb2luZyB0byBiZSBoaWRkZW4sIHJlc2V0IGFueSBjaGFuZ2VzIHRoYXQgd2VyZSBkdWVcblx0XHQvLyB0byBvdmVyZmxvdyB0cnVuY2F0aW9uICh0aGlzIGVuc3VyZXMgdGhhdCBpZiB0aGUgZWxlbWVudCBpcyBsYXRlclxuXHRcdC8vIHVuLWhpZGRlbiBpdCBoYXMgdGhlIHJpZ2h0IGNvbnRlbnQpXG5cdFx0aWYgKEFkYXB0aXZlQ2FyZC51c2VBZHZhbmNlZENhcmRCb3R0b21UcnVuY2F0aW9uICYmICF2YWx1ZSkge1xuXHRcdFx0dGhpcy51bmRvT3ZlcmZsb3dUcnVuY2F0aW9uKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2lzVmlzaWJsZSAhPSB2YWx1ZSkge1xuXHRcdFx0dGhpcy5faXNWaXNpYmxlID0gdmFsdWU7XG5cblx0XHRcdHRoaXMudXBkYXRlUmVuZGVyZWRFbGVtZW50VmlzaWJpbGl0eSgpO1xuXG5cdFx0XHRpZiAodGhpcy5fcmVuZGVyZWRFbGVtZW50KSB7XG5cdFx0XHRcdHJhaXNlRWxlbWVudFZpc2liaWxpdHlDaGFuZ2VkRXZlbnQodGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHJlbmRlcmVkRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcmVkRWxlbWVudDtcblx0fVxuXG5cdGdldCBzZXBhcmF0b3JFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcblx0XHRyZXR1cm4gdGhpcy5fc2VwYXJhdG9yRWxlbWVudDtcblx0fVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FyZEVsZW1lbnRDb250YWluZXIgZXh0ZW5kcyBDYXJkRWxlbWVudCB7XG5cdGFic3RyYWN0IGdldEl0ZW1Db3VudCgpOiBudW1iZXI7XG5cdGFic3RyYWN0IGdldEl0ZW1BdChpbmRleDogbnVtYmVyKTogQ2FyZEVsZW1lbnQ7XG5cdGFic3RyYWN0IHJlbW92ZUl0ZW0oaXRlbTogQ2FyZEVsZW1lbnQpOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgSHRtbEJsb2NrIGV4dGVuZHMgQ2FyZEVsZW1lbnQge1xuICAgIHByaXZhdGUgX2NvbXB1dGVkTGluZUhlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgX29yaWdpbmFsSW5uZXJIdG1sOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaHRtbDogc3RyaW5nO1xuICAgIHByaXZhdGUgX3Byb2Nlc3NlZFRleHQ6IHN0cmluZyA9IG51bGw7XG5cbiAgICBwcml2YXRlIHJlc3RvcmVPcmlnaW5hbENvbnRlbnQoKSB7XG4gICAgICAgIHZhciBtYXhIZWlnaHQgPSB0aGlzLm1heExpbmVzXG4gICAgICAgICAgICA/ICh0aGlzLl9jb21wdXRlZExpbmVIZWlnaHQgKiB0aGlzLm1heExpbmVzKSArICdweCdcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX29yaWdpbmFsSW5uZXJIdG1sO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJ1bmNhdGVJZlN1cHBvcnRlZChtYXhIZWlnaHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnJlbmRlcmVkRWxlbWVudC5jaGlsZHJlbjtcbiAgICAgICAgdmFyIGlzVGV4dE9ubHkgPSAhY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgICAgIHZhciB0cnVuY2F0aW9uU3VwcG9ydGVkID0gaXNUZXh0T25seSB8fCBjaGlsZHJlbi5sZW5ndGggPT0gMVxuICAgICAgICAgICAgJiYgKDxIVE1MRWxlbWVudD5jaGlsZHJlblswXSkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdwJztcblxuICAgICAgICBpZiAodHJ1bmNhdGlvblN1cHBvcnRlZCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBpc1RleHRPbmx5XG4gICAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlcmVkRWxlbWVudFxuICAgICAgICAgICAgICAgIDogPEhUTUxFbGVtZW50PmNoaWxkcmVuWzBdO1xuXG4gICAgICAgICAgICBVdGlscy50cnVuY2F0ZShlbGVtZW50LCBtYXhIZWlnaHQsIHRoaXMuX2NvbXB1dGVkTGluZUhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UmVuZGVyZWREb21FbGVtZW50VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJzcGFuXCI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGludGVybmFsUmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgdGhpcy5fcHJvY2Vzc2VkVGV4dCA9IG51bGw7XG5cbiAgICAgICAgaWYgKCFVdGlscy5pc051bGxPckVtcHR5KHRoaXMuaHRtbCkpIHtcbiAgICAgICAgICAgIGxldCBob3N0Q29uZmlnID0gdGhpcy5ob3N0Q29uZmlnO1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5nZXRSZW5kZXJlZERvbUVsZW1lbnRUeXBlKCkpO1xuXG4gICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGVzVG8oZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fcHJvY2Vzc2VkVGV4dCkge1xuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRUZXh0ID0gVGV4dEZvcm1hdHRlcnMuZm9ybWF0VGV4dCh0aGlzLmxhbmcsIHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2VkVGV4dCA9IGZvcm1hdHRlZFRleHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fcHJvY2Vzc2VkVGV4dDtcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB0cnVuY2F0ZU92ZXJmbG93KG1heEhlaWdodDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChtYXhIZWlnaHQgPj0gdGhpcy5fY29tcHV0ZWRMaW5lSGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cnVuY2F0ZUlmU3VwcG9ydGVkKG1heEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVuZG9PdmVyZmxvd1RydW5jYXRpb24oKSB7XG4gICAgICAgIHRoaXMucmVzdG9yZU9yaWdpbmFsQ29udGVudCgpO1xuXG4gICAgICAgIGlmIChBZGFwdGl2ZUNhcmQudXNlQWR2YW5jZWRIdG1sQmxvY2tUcnVuY2F0aW9uICYmIHRoaXMubWF4TGluZXMpIHtcbiAgICAgICAgICAgIHZhciBtYXhIZWlnaHQgPSB0aGlzLl9jb21wdXRlZExpbmVIZWlnaHQgKiB0aGlzLm1heExpbmVzO1xuICAgICAgICAgICAgdGhpcy50cnVuY2F0ZUlmU3VwcG9ydGVkKG1heEhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXhMaW5lczogbnVtYmVyO1xuXG4gICAgdG9KU09OKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gc3VwZXIudG9KU09OKCk7XG5cblxuICAgICAgICBVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwiaHRtbFwiLCB0aGlzLmh0bWwpO1xuXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhcHBseVN0eWxlc1RvKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgfVxuXG4gICAgcGFyc2UoanNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSB7XG4gICAgICAgIHN1cGVyLnBhcnNlKGpzb24sIGVycm9ycyk7XG5cbiAgICAgICAgdGhpcy5odG1sID0ganNvbltcImh0bWxcIl07XG4gICAgfVxuXG4gICAgZ2V0SnNvblR5cGVOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkh0bWxCbG9ja1wiO1xuICAgIH1cblxuICAgIHJlbmRlclNwZWVjaCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5zcGVhayAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3BlYWsgKyAnXFxuJztcblxuICAgICAgICBpZiAodGhpcy5odG1sKVxuICAgICAgICAgICAgcmV0dXJuICc8cz4nICsgdGhpcy5odG1sICsgJzwvcz5cXG4nO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHVwZGF0ZUxheW91dChwcm9jZXNzQ2hpbGRyZW46IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBzdXBlci51cGRhdGVMYXlvdXQocHJvY2Vzc0NoaWxkcmVuKTtcblxuICAgICAgICBpZiAoQWRhcHRpdmVDYXJkLnVzZUFkdmFuY2VkSHRtbEJsb2NrVHJ1bmNhdGlvbiAmJiB0aGlzLm1heExpbmVzICYmIHRoaXMuaXNSZW5kZXJlZCgpKSB7XG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgZWxlbWVudCdzIGlubmVySFRNTCBpbiBjYXNlIHRoZSBhdmFpbGFibGUgcm9vbSBmb3JcbiAgICAgICAgICAgIC8vIGNvbnRlbnQgaGFzIGluY3JlYXNlZFxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlT3JpZ2luYWxDb250ZW50KCk7XG4gICAgICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gdGhpcy5fY29tcHV0ZWRMaW5lSGVpZ2h0ICogdGhpcy5tYXhMaW5lcztcbiAgICAgICAgICAgIHRoaXMudHJ1bmNhdGVJZlN1cHBvcnRlZChtYXhIZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGh0bWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0bWw7XG4gICAgfVxuXG4gICAgc2V0IGh0bWwodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5faHRtbCAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faHRtbCA9IHZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzZWRUZXh0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRCbG9jayBleHRlbmRzIENhcmRFbGVtZW50IHtcblx0cHJpdmF0ZSBfY29tcHV0ZWRMaW5lSGVpZ2h0OiBudW1iZXI7XG5cdHByaXZhdGUgX29yaWdpbmFsSW5uZXJIdG1sOiBzdHJpbmc7XG5cdHByaXZhdGUgX3RleHQ6IHN0cmluZztcblx0cHJpdmF0ZSBfcHJvY2Vzc2VkVGV4dDogc3RyaW5nID0gbnVsbDtcblx0cHJpdmF0ZSBfdHJlYXRBc1BsYWluVGV4dDogYm9vbGVhbiA9IHRydWU7XG5cdHByaXZhdGUgX3NlbGVjdEFjdGlvbjogQWN0aW9uID0gbnVsbDtcblx0cHJpdmF0ZSBfZWZmZWN0aXZlU3R5bGVEZWZpbml0aW9uOiBIb3N0Q29uZmlnLkNvbnRhaW5lclN0eWxlRGVmaW5pdGlvbiA9IG51bGw7XG5cblx0cHJpdmF0ZSByZXN0b3JlT3JpZ2luYWxDb250ZW50KCkge1xuXHRcdHZhciBtYXhIZWlnaHQgPSB0aGlzLm1heExpbmVzXG5cdFx0XHQ/ICh0aGlzLl9jb21wdXRlZExpbmVIZWlnaHQgKiB0aGlzLm1heExpbmVzKSArICdweCdcblx0XHRcdDogbnVsbDtcblxuXHRcdHRoaXMucmVuZGVyZWRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IG1heEhlaWdodDtcblx0XHR0aGlzLnJlbmRlcmVkRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9vcmlnaW5hbElubmVySHRtbDtcblx0fVxuXG5cdHByaXZhdGUgdHJ1bmNhdGVJZlN1cHBvcnRlZChtYXhIZWlnaHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdC8vIEZvciBub3csIG9ubHkgdHJ1bmNhdGUgVGV4dEJsb2NrcyB0aGF0IGNvbnRhaW4ganVzdCBhIHNpbmdsZVxuXHRcdC8vIHBhcmFncmFwaCAtLSBzaW5jZSB0aGUgbWF4TGluZXMgY2FsY3VsYXRpb24gZG9lc24ndCB0YWtlIGludG9cblx0XHQvLyBhY2NvdW50IE1hcmtkb3duIGxpc3RzXG5cdFx0dmFyIGNoaWxkcmVuID0gdGhpcy5yZW5kZXJlZEVsZW1lbnQuY2hpbGRyZW47XG5cdFx0dmFyIGlzVGV4dE9ubHkgPSAhY2hpbGRyZW4ubGVuZ3RoO1xuXG5cdFx0dmFyIHRydW5jYXRpb25TdXBwb3J0ZWQgPSBpc1RleHRPbmx5IHx8IGNoaWxkcmVuLmxlbmd0aCA9PSAxXG5cdFx0XHQmJiAoPEhUTUxFbGVtZW50PmNoaWxkcmVuWzBdKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3AnO1xuXG5cdFx0aWYgKHRydW5jYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdHZhciBlbGVtZW50ID0gaXNUZXh0T25seVxuXHRcdFx0XHQ/IHRoaXMucmVuZGVyZWRFbGVtZW50XG5cdFx0XHRcdDogPEhUTUxFbGVtZW50PmNoaWxkcmVuWzBdO1xuXG5cdFx0XHRVdGlscy50cnVuY2F0ZShlbGVtZW50LCBtYXhIZWlnaHQsIHRoaXMuX2NvbXB1dGVkTGluZUhlaWdodCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwcml2YXRlIGdldEVmZmVjdGl2ZVN0eWxlRGVmaW5pdGlvbigpIHtcblx0XHRpZiAoIXRoaXMuX2VmZmVjdGl2ZVN0eWxlRGVmaW5pdGlvbikge1xuXHRcdFx0dGhpcy5fZWZmZWN0aXZlU3R5bGVEZWZpbml0aW9uID0gdGhpcy5ob3N0Q29uZmlnLmNvbnRhaW5lclN0eWxlcy5kZWZhdWx0O1xuXG5cdFx0XHRsZXQgcGFyZW50Q29udGFpbmVyID0gdGhpcy5nZXRQYXJlbnRDb250YWluZXIoKTtcblxuXHRcdFx0d2hpbGUgKHBhcmVudENvbnRhaW5lcikge1xuXHRcdFx0XHRpZiAocGFyZW50Q29udGFpbmVyLnN0eWxlKSB7XG5cdFx0XHRcdFx0dGhpcy5fZWZmZWN0aXZlU3R5bGVEZWZpbml0aW9uID0gdGhpcy5ob3N0Q29uZmlnLmNvbnRhaW5lclN0eWxlcy5nZXRTdHlsZUJ5TmFtZShwYXJlbnRDb250YWluZXIuc3R5bGUpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwYXJlbnRDb250YWluZXIgPSBwYXJlbnRDb250YWluZXIuZ2V0UGFyZW50Q29udGFpbmVyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX2VmZmVjdGl2ZVN0eWxlRGVmaW5pdGlvbjtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRSZW5kZXJlZERvbUVsZW1lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiZGl2XCI7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaW50ZXJuYWxSZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuXHRcdHRoaXMuX2VmZmVjdGl2ZVN0eWxlRGVmaW5pdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5fcHJvY2Vzc2VkVGV4dCA9IG51bGw7XG5cblx0XHRpZiAoIVV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy50ZXh0KSkge1xuXHRcdFx0bGV0IGhvc3RDb25maWcgPSB0aGlzLmhvc3RDb25maWc7XG5cblx0XHRcdGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmdldFJlbmRlcmVkRG9tRWxlbWVudFR5cGUoKSk7XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiYWMtdGV4dEJsb2NrXCIpKTtcblx0XHRcdGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG5cdFx0XHR0aGlzLmFwcGx5U3R5bGVzVG8oZWxlbWVudCk7XG5cblx0XHRcdGlmICh0aGlzLnNlbGVjdEFjdGlvbikge1xuXHRcdFx0XHRlbGVtZW50Lm9uY2xpY2sgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0QWN0aW9uLmV4ZWN1dGUoKTtcblxuXHRcdFx0XHRcdGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMuX3Byb2Nlc3NlZFRleHQpIHtcblx0XHRcdFx0dGhpcy5fdHJlYXRBc1BsYWluVGV4dCA9IHRydWU7XG5cblx0XHRcdFx0bGV0IGZvcm1hdHRlZFRleHQgPSBUZXh0Rm9ybWF0dGVycy5mb3JtYXRUZXh0KHRoaXMubGFuZywgdGhpcy50ZXh0KTtcblxuXHRcdFx0XHRpZiAodGhpcy51c2VNYXJrZG93bikge1xuXHRcdFx0XHRcdGlmIChBZGFwdGl2ZUNhcmQuYWxsb3dNYXJrRm9yVGV4dEhpZ2hsaWdodGluZykge1xuXHRcdFx0XHRcdFx0Zm9ybWF0dGVkVGV4dCA9IGZvcm1hdHRlZFRleHQucmVwbGFjZSgvPG1hcms+L2csIFwiPT09XCIpLnJlcGxhY2UoLzxcXC9tYXJrPi9nLCBcIi89PVwiKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgbWFya2Rvd25Qcm9jZXNzaW5nUmVzdWx0ID0gQWRhcHRpdmVDYXJkLmFwcGx5TWFya2Rvd24oZm9ybWF0dGVkVGV4dCk7XG5cblx0XHRcdFx0XHRpZiAobWFya2Rvd25Qcm9jZXNzaW5nUmVzdWx0LmRpZFByb2Nlc3MgJiYgbWFya2Rvd25Qcm9jZXNzaW5nUmVzdWx0Lm91dHB1dEh0bWwpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3Byb2Nlc3NlZFRleHQgPSBtYXJrZG93blByb2Nlc3NpbmdSZXN1bHQub3V0cHV0SHRtbDtcblx0XHRcdFx0XHRcdHRoaXMuX3RyZWF0QXNQbGFpblRleHQgPSBmYWxzZTtcblxuXHRcdFx0XHRcdFx0Ly8gT25seSBwcm9jZXNzIDxtYXJrPiB0YWcgaWYgbWFya2Rvd24gcHJvY2Vzc2luZyB3YXMgYXBwbGllZCBiZWNhdXNlXG5cdFx0XHRcdFx0XHQvLyBtYXJrZG93biBwcm9jZXNzaW5nIGlzIGFsc28gcmVzcG9uc2libGUgZm9yIHNhbml0aXppbmcgdGhlIGlucHV0IHN0cmluZ1xuXHRcdFx0XHRcdFx0aWYgKEFkYXB0aXZlQ2FyZC5hbGxvd01hcmtGb3JUZXh0SGlnaGxpZ2h0aW5nKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBtYXJrU3R5bGU6IHN0cmluZyA9IFwiXCI7XG5cdFx0XHRcdFx0XHRcdGxldCBlZmZlY3RpdmVTdHlsZSA9IHRoaXMuZ2V0RWZmZWN0aXZlU3R5bGVEZWZpbml0aW9uKCk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGVmZmVjdGl2ZVN0eWxlLmhpZ2hsaWdodEJhY2tncm91bmRDb2xvcikge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmtTdHlsZSArPSBcImJhY2tncm91bmQtY29sb3I6IFwiICsgZWZmZWN0aXZlU3R5bGUuaGlnaGxpZ2h0QmFja2dyb3VuZENvbG9yICsgXCI7XCI7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAoZWZmZWN0aXZlU3R5bGUuaGlnaGxpZ2h0Rm9yZWdyb3VuZENvbG9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWFya1N0eWxlICs9IFwiY29sb3I6IFwiICsgZWZmZWN0aXZlU3R5bGUuaGlnaGxpZ2h0Rm9yZWdyb3VuZENvbG9yICsgXCI7XCI7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAoIVV0aWxzLmlzTnVsbE9yRW1wdHkobWFya1N0eWxlKSkge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmtTdHlsZSA9ICdzdHlsZT1cIicgKyBtYXJrU3R5bGUgKyAnXCInO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5fcHJvY2Vzc2VkVGV4dCA9IHRoaXMuX3Byb2Nlc3NlZFRleHQucmVwbGFjZSgvPT09L2csIFwiPG1hcmsgXCIgKyBtYXJrU3R5bGUgKyBcIj5cIikucmVwbGFjZSgvXFwvPT0vZywgXCI8L21hcms+XCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9wcm9jZXNzZWRUZXh0ID0gZm9ybWF0dGVkVGV4dDtcblx0XHRcdFx0XHRcdHRoaXMuX3RyZWF0QXNQbGFpblRleHQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9wcm9jZXNzZWRUZXh0ID0gZm9ybWF0dGVkVGV4dDtcblx0XHRcdFx0XHR0aGlzLl90cmVhdEFzUGxhaW5UZXh0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fdHJlYXRBc1BsYWluVGV4dCkge1xuXHRcdFx0XHRlbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuX3Byb2Nlc3NlZFRleHQ7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9wcm9jZXNzZWRUZXh0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdGxldCBmaXJzdEVsZW1lbnRDaGlsZCA9IDxIVE1MRWxlbWVudD5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdFx0XHRmaXJzdEVsZW1lbnRDaGlsZC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjBweFwiO1xuXHRcdFx0XHRmaXJzdEVsZW1lbnRDaGlsZC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG5cdFx0XHRcdGlmICghdGhpcy53cmFwKSB7XG5cdFx0XHRcdFx0Zmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRcdFx0XHRcdGZpcnN0RWxlbWVudENoaWxkLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZWxlbWVudC5sYXN0RWxlbWVudENoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0KDxIVE1MRWxlbWVudD5lbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQpLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMHB4XCI7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBhbmNob3JzID0gZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIik7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYW5jaG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgYW5jaG9yID0gPEhUTUxBbmNob3JFbGVtZW50PmFuY2hvcnNbaV07XG5cdFx0XHRcdGFuY2hvci5jbGFzc0xpc3QuYWRkKHRoaXMuaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiYWMtYW5jaG9yXCIpKTtcblx0XHRcdFx0YW5jaG9yLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cdFx0XHRcdGFuY2hvci5vbmNsaWNrID0gKGUpID0+IHtcblx0XHRcdFx0XHRpZiAocmFpc2VBbmNob3JDbGlja2VkRXZlbnQodGhpcywgZS50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQpKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLndyYXApIHtcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS53b3JkV3JhcCA9IFwiYnJlYWstd29yZFwiO1xuXG5cdFx0XHRcdGlmICh0aGlzLm1heExpbmVzID4gMCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKHRoaXMuX2NvbXB1dGVkTGluZUhlaWdodCAqIHRoaXMubWF4TGluZXMpICsgXCJweFwiO1xuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIjtcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChBZGFwdGl2ZUNhcmQudXNlQWR2YW5jZWRUZXh0QmxvY2tUcnVuY2F0aW9uIHx8IEFkYXB0aXZlQ2FyZC51c2VBZHZhbmNlZENhcmRCb3R0b21UcnVuY2F0aW9uKSB7XG5cdFx0XHRcdHRoaXMuX29yaWdpbmFsSW5uZXJIdG1sID0gZWxlbWVudC5pbm5lckhUTUw7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnNlbGVjdEFjdGlvbiAhPSBudWxsICYmIGhvc3RDb25maWcuc3VwcG9ydHNJbnRlcmFjdGl2aXR5KSB7XG5cdFx0XHRcdGVsZW1lbnQudGFiSW5kZXggPSAwXG5cdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImJ1dHRvblwiKTtcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHRoaXMuc2VsZWN0QWN0aW9uLnRpdGxlKTtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGhvc3RDb25maWcubWFrZUNzc0NsYXNzTmFtZShcImFjLXNlbGVjdGFibGVcIikpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgdHJ1bmNhdGVPdmVyZmxvdyhtYXhIZWlnaHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdGlmIChtYXhIZWlnaHQgPj0gdGhpcy5fY29tcHV0ZWRMaW5lSGVpZ2h0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50cnVuY2F0ZUlmU3VwcG9ydGVkKG1heEhlaWdodCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHJvdGVjdGVkIHVuZG9PdmVyZmxvd1RydW5jYXRpb24oKSB7XG5cdFx0dGhpcy5yZXN0b3JlT3JpZ2luYWxDb250ZW50KCk7XG5cblx0XHRpZiAoQWRhcHRpdmVDYXJkLnVzZUFkdmFuY2VkVGV4dEJsb2NrVHJ1bmNhdGlvbiAmJiB0aGlzLm1heExpbmVzKSB7XG5cdFx0XHR2YXIgbWF4SGVpZ2h0ID0gdGhpcy5fY29tcHV0ZWRMaW5lSGVpZ2h0ICogdGhpcy5tYXhMaW5lcztcblx0XHRcdHRoaXMudHJ1bmNhdGVJZlN1cHBvcnRlZChtYXhIZWlnaHQpO1xuXHRcdH1cblx0fVxuXG5cdHNpemU6IEVudW1zLlRleHRTaXplID0gRW51bXMuVGV4dFNpemUuRGVmYXVsdDtcblx0d2VpZ2h0OiBFbnVtcy5UZXh0V2VpZ2h0ID0gRW51bXMuVGV4dFdlaWdodC5EZWZhdWx0O1xuXHRjb2xvcjogRW51bXMuVGV4dENvbG9yID0gRW51bXMuVGV4dENvbG9yLkRlZmF1bHQ7XG5cdGlzU3VidGxlOiBib29sZWFuID0gZmFsc2U7XG5cdHdyYXA6IGJvb2xlYW4gPSBmYWxzZTtcblx0bWF4TGluZXM6IG51bWJlcjtcblx0dXNlTWFya2Rvd246IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHRvSlNPTigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIudG9KU09OKCk7XG5cblx0XHRVdGlscy5zZXRFbnVtUHJvcGVydHkoRW51bXMuVGV4dFNpemUsIHJlc3VsdCwgXCJzaXplXCIsIHRoaXMuc2l6ZSwgRW51bXMuVGV4dFNpemUuRGVmYXVsdCk7XG5cdFx0VXRpbHMuc2V0RW51bVByb3BlcnR5KEVudW1zLlRleHRXZWlnaHQsIHJlc3VsdCwgXCJ3ZWlnaHRcIiwgdGhpcy53ZWlnaHQsIEVudW1zLlRleHRXZWlnaHQuRGVmYXVsdCk7XG5cdFx0VXRpbHMuc2V0RW51bVByb3BlcnR5KEVudW1zLlRleHRDb2xvciwgcmVzdWx0LCBcImNvbG9yXCIsIHRoaXMuY29sb3IsIEVudW1zLlRleHRDb2xvci5EZWZhdWx0KTtcblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwidGV4dFwiLCB0aGlzLnRleHQpO1xuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJpc1N1YnRsZVwiLCB0aGlzLmlzU3VidGxlLCBmYWxzZSk7XG5cdFx0VXRpbHMuc2V0UHJvcGVydHkocmVzdWx0LCBcIndyYXBcIiwgdGhpcy53cmFwLCBmYWxzZSk7XG5cdFx0VXRpbHMuc2V0UHJvcGVydHkocmVzdWx0LCBcIm1heExpbmVzXCIsIHRoaXMubWF4TGluZXMsIDApO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGFwcGx5U3R5bGVzVG8odGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0XHRpZiAodGhpcy5ob3N0Q29uZmlnLmZvbnRGYW1pbHkpIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9IHRoaXMuaG9zdENvbmZpZy5mb250RmFtaWx5O1xuXHRcdH1cblxuXHRcdGxldCBwYXJlbnRDb250YWluZXIgPSB0aGlzLmdldFBhcmVudENvbnRhaW5lcigpO1xuXHRcdGxldCBpc1J0bCA9IHBhcmVudENvbnRhaW5lciA/IHBhcmVudENvbnRhaW5lci5pc1J0bCgpIDogZmFsc2U7XG4gICAgICAgIHRhcmdldEVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjk5LjklXCI7XG5cblx0XHRzd2l0Y2ggKHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudCkge1xuXHRcdFx0Y2FzZSBFbnVtcy5Ib3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcjpcbiAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBFbnVtcy5Ib3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0OlxuICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gaXNSdGwgPyBcImxlZnRcIiA6IFwicmlnaHRcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gaXNSdGwgPyBcInJpZ2h0XCIgOiBcImxlZnRcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0dmFyIGZvbnRTaXplOiBudW1iZXI7XG5cblx0XHRzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuXHRcdFx0Y2FzZSBFbnVtcy5UZXh0U2l6ZS5TbWFsbDpcblx0XHRcdFx0Zm9udFNpemUgPSB0aGlzLmhvc3RDb25maWcuZm9udFNpemVzLnNtYWxsO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgRW51bXMuVGV4dFNpemUuTWVkaXVtOlxuXHRcdFx0XHRmb250U2l6ZSA9IHRoaXMuaG9zdENvbmZpZy5mb250U2l6ZXMubWVkaXVtO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgRW51bXMuVGV4dFNpemUuTGFyZ2U6XG5cdFx0XHRcdGZvbnRTaXplID0gdGhpcy5ob3N0Q29uZmlnLmZvbnRTaXplcy5sYXJnZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEVudW1zLlRleHRTaXplLkV4dHJhTGFyZ2U6XG5cdFx0XHRcdGZvbnRTaXplID0gdGhpcy5ob3N0Q29uZmlnLmZvbnRTaXplcy5leHRyYUxhcmdlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGZvbnRTaXplID0gdGhpcy5ob3N0Q29uZmlnLmZvbnRTaXplcy5kZWZhdWx0O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob3N0Q29uZmlnLmxpbmVIZWlnaHRzKSB7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuXHRcdFx0XHRjYXNlIEVudW1zLlRleHRTaXplLlNtYWxsOlxuXHRcdFx0XHRcdHRoaXMuX2NvbXB1dGVkTGluZUhlaWdodCA9IHRoaXMuaG9zdENvbmZpZy5saW5lSGVpZ2h0cy5zbWFsbDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBFbnVtcy5UZXh0U2l6ZS5NZWRpdW06XG5cdFx0XHRcdFx0dGhpcy5fY29tcHV0ZWRMaW5lSGVpZ2h0ID0gdGhpcy5ob3N0Q29uZmlnLmxpbmVIZWlnaHRzLm1lZGl1bTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBFbnVtcy5UZXh0U2l6ZS5MYXJnZTpcblx0XHRcdFx0XHR0aGlzLl9jb21wdXRlZExpbmVIZWlnaHQgPSB0aGlzLmhvc3RDb25maWcubGluZUhlaWdodHMubGFyZ2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRW51bXMuVGV4dFNpemUuRXh0cmFMYXJnZTpcblx0XHRcdFx0XHR0aGlzLl9jb21wdXRlZExpbmVIZWlnaHQgPSB0aGlzLmhvc3RDb25maWcubGluZUhlaWdodHMuZXh0cmFMYXJnZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aGlzLl9jb21wdXRlZExpbmVIZWlnaHQgPSB0aGlzLmhvc3RDb25maWcubGluZUhlaWdodHMuZGVmYXVsdDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyBMb29rcyBsaWtlIDEuMzMgaXMgdGhlIG1hZ2ljIG51bWJlciB0byBjb21wdXRlIGxpbmUtaGVpZ2h0XG5cdFx0XHQvLyBmcm9tIGZvbnQgc2l6ZS5cblx0XHRcdHRoaXMuX2NvbXB1dGVkTGluZUhlaWdodCA9IGZvbnRTaXplICogMS4zMztcblx0XHR9XG5cblx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemUgKyBcInB4XCI7XG5cdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5saW5lSGVpZ2h0ID0gdGhpcy5fY29tcHV0ZWRMaW5lSGVpZ2h0ICsgXCJweFwiO1xuXG5cdFx0bGV0IHN0eWxlRGVmaW5pdGlvbiA9IHRoaXMuZ2V0RWZmZWN0aXZlU3R5bGVEZWZpbml0aW9uKCk7XG5cblx0XHRsZXQgYWN0dWFsVGV4dENvbG9yID0gdGhpcy5jb2xvciA/IHRoaXMuY29sb3IgOiBFbnVtcy5UZXh0Q29sb3IuRGVmYXVsdDtcblx0XHRsZXQgY29sb3JEZWZpbml0aW9uOiBIb3N0Q29uZmlnLlRleHRDb2xvckRlZmluaXRpb247XG5cblx0XHRzd2l0Y2ggKGFjdHVhbFRleHRDb2xvcikge1xuXHRcdFx0Y2FzZSBFbnVtcy5UZXh0Q29sb3IuQWNjZW50OlxuXHRcdFx0XHRjb2xvckRlZmluaXRpb24gPSBzdHlsZURlZmluaXRpb24uZm9yZWdyb3VuZENvbG9ycy5hY2NlbnQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBFbnVtcy5UZXh0Q29sb3IuRGFyazpcblx0XHRcdFx0Y29sb3JEZWZpbml0aW9uID0gc3R5bGVEZWZpbml0aW9uLmZvcmVncm91bmRDb2xvcnMuZGFyaztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEVudW1zLlRleHRDb2xvci5MaWdodDpcblx0XHRcdFx0Y29sb3JEZWZpbml0aW9uID0gc3R5bGVEZWZpbml0aW9uLmZvcmVncm91bmRDb2xvcnMubGlnaHQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBFbnVtcy5UZXh0Q29sb3IuR29vZDpcblx0XHRcdFx0Y29sb3JEZWZpbml0aW9uID0gc3R5bGVEZWZpbml0aW9uLmZvcmVncm91bmRDb2xvcnMuZ29vZDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEVudW1zLlRleHRDb2xvci5XYXJuaW5nOlxuXHRcdFx0XHRjb2xvckRlZmluaXRpb24gPSBzdHlsZURlZmluaXRpb24uZm9yZWdyb3VuZENvbG9ycy53YXJuaW5nO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgRW51bXMuVGV4dENvbG9yLkF0dGVudGlvbjpcblx0XHRcdFx0Y29sb3JEZWZpbml0aW9uID0gc3R5bGVEZWZpbml0aW9uLmZvcmVncm91bmRDb2xvcnMuYXR0ZW50aW9uO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbG9yRGVmaW5pdGlvbiA9IHN0eWxlRGVmaW5pdGlvbi5mb3JlZ3JvdW5kQ29sb3JzLmRlZmF1bHQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHRhcmdldEVsZW1lbnQuc3R5bGUuY29sb3IgPSBVdGlscy5zdHJpbmdUb0Nzc0NvbG9yKHRoaXMuaXNTdWJ0bGUgPyBjb2xvckRlZmluaXRpb24uc3VidGxlIDogY29sb3JEZWZpbml0aW9uLmRlZmF1bHQpO1xuXG5cdFx0bGV0IGZvbnRXZWlnaHQ6IG51bWJlcjtcblxuXHRcdHN3aXRjaCAodGhpcy53ZWlnaHQpIHtcblx0XHRcdGNhc2UgRW51bXMuVGV4dFdlaWdodC5MaWdodGVyOlxuXHRcdFx0XHRmb250V2VpZ2h0ID0gdGhpcy5ob3N0Q29uZmlnLmZvbnRXZWlnaHRzLmxpZ2h0ZXI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBFbnVtcy5UZXh0V2VpZ2h0LkJvbGRlcjpcblx0XHRcdFx0Zm9udFdlaWdodCA9IHRoaXMuaG9zdENvbmZpZy5mb250V2VpZ2h0cy5ib2xkZXI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Zm9udFdlaWdodCA9IHRoaXMuaG9zdENvbmZpZy5mb250V2VpZ2h0cy5kZWZhdWx0O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLmZvbnRXZWlnaHQgPSBmb250V2VpZ2h0LnRvU3RyaW5nKCk7XG5cdH1cblxuXHRwYXJzZShqc29uOiBhbnksIGVycm9ycz86IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4pIHtcblx0XHRzdXBlci5wYXJzZShqc29uLCBlcnJvcnMpO1xuXG5cdFx0dGhpcy50ZXh0ID0ganNvbltcInRleHRcIl07XG5cblx0XHR2YXIgc2l6ZVN0cmluZyA9IGpzb25bXCJzaXplXCJdO1xuXG5cdFx0aWYgKHNpemVTdHJpbmcgJiYgdHlwZW9mIHNpemVTdHJpbmcgPT09IFwic3RyaW5nXCIgJiYgc2l6ZVN0cmluZy50b0xvd2VyQ2FzZSgpID09PSBcIm5vcm1hbFwiKSB7XG5cdFx0XHR0aGlzLnNpemUgPSBFbnVtcy5UZXh0U2l6ZS5EZWZhdWx0O1xuXG5cdFx0XHRyYWlzZVBhcnNlRXJyb3IoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLkRlcHJlY2F0ZWQsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJUaGUgVGV4dEJsb2NrLnNpemUgdmFsdWUgXFxcIm5vcm1hbFxcXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkLiBVc2UgXFxcImRlZmF1bHRcXFwiIGluc3RlYWQuXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3JzXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuc2l6ZSA9IFV0aWxzLmdldEVudW1WYWx1ZU9yRGVmYXVsdChFbnVtcy5UZXh0U2l6ZSwgc2l6ZVN0cmluZywgdGhpcy5zaXplKTtcblx0XHR9XG5cblx0XHR2YXIgd2VpZ2h0U3RyaW5nID0ganNvbltcIndlaWdodFwiXTtcblxuXHRcdGlmICh3ZWlnaHRTdHJpbmcgJiYgdHlwZW9mIHdlaWdodFN0cmluZyA9PT0gXCJzdHJpbmdcIiAmJiB3ZWlnaHRTdHJpbmcudG9Mb3dlckNhc2UoKSA9PT0gXCJub3JtYWxcIikge1xuXHRcdFx0dGhpcy53ZWlnaHQgPSBFbnVtcy5UZXh0V2VpZ2h0LkRlZmF1bHQ7XG5cblx0XHRcdHJhaXNlUGFyc2VFcnJvcihcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVycm9yOiBFbnVtcy5WYWxpZGF0aW9uRXJyb3IuRGVwcmVjYXRlZCxcblx0XHRcdFx0XHRtZXNzYWdlOiBcIlRoZSBUZXh0QmxvY2sud2VpZ2h0IHZhbHVlIFxcXCJub3JtYWxcXFwiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZC4gVXNlIFxcXCJkZWZhdWx0XFxcIiBpbnN0ZWFkLlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yc1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLndlaWdodCA9IFV0aWxzLmdldEVudW1WYWx1ZU9yRGVmYXVsdChFbnVtcy5UZXh0V2VpZ2h0LCB3ZWlnaHRTdHJpbmcsIHRoaXMud2VpZ2h0KTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbG9yID0gVXRpbHMuZ2V0RW51bVZhbHVlT3JEZWZhdWx0KEVudW1zLlRleHRDb2xvciwganNvbltcImNvbG9yXCJdLCB0aGlzLmNvbG9yKTtcblx0XHR0aGlzLmlzU3VidGxlID0ganNvbltcImlzU3VidGxlXCJdO1xuXHRcdHRoaXMud3JhcCA9IGpzb25bXCJ3cmFwXCJdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGpzb25bXCJ3cmFwXCJdO1xuXG5cdFx0aWYgKHR5cGVvZiBqc29uW1wibWF4TGluZXNcIl0gPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdHRoaXMubWF4TGluZXMgPSBqc29uW1wibWF4TGluZXNcIl07XG5cdFx0fVxuXHR9XG5cblx0Z2V0SnNvblR5cGVOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiVGV4dEJsb2NrXCI7XG5cdH1cblxuXHRyZW5kZXJTcGVlY2goKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5zcGVhayAhPSBudWxsKVxuXHRcdFx0cmV0dXJuIHRoaXMuc3BlYWsgKyAnXFxuJztcblxuXHRcdGlmICh0aGlzLnRleHQpXG5cdFx0XHRyZXR1cm4gJzxzPicgKyB0aGlzLnRleHQgKyAnPC9zPlxcbic7XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHVwZGF0ZUxheW91dChwcm9jZXNzQ2hpbGRyZW46IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHN1cGVyLnVwZGF0ZUxheW91dChwcm9jZXNzQ2hpbGRyZW4pO1xuXG5cdFx0aWYgKEFkYXB0aXZlQ2FyZC51c2VBZHZhbmNlZFRleHRCbG9ja1RydW5jYXRpb24gJiYgdGhpcy5tYXhMaW5lcyAmJiB0aGlzLmlzUmVuZGVyZWQoKSkge1xuXHRcdFx0Ly8gUmVzZXQgdGhlIGVsZW1lbnQncyBpbm5lckhUTUwgaW4gY2FzZSB0aGUgYXZhaWxhYmxlIHJvb20gZm9yXG5cdFx0XHQvLyBjb250ZW50IGhhcyBpbmNyZWFzZWRcblx0XHRcdHRoaXMucmVzdG9yZU9yaWdpbmFsQ29udGVudCgpO1xuXHRcdFx0dmFyIG1heEhlaWdodCA9IHRoaXMuX2NvbXB1dGVkTGluZUhlaWdodCAqIHRoaXMubWF4TGluZXM7XG5cdFx0XHR0aGlzLnRydW5jYXRlSWZTdXBwb3J0ZWQobWF4SGVpZ2h0KTtcblx0XHR9XG5cdH1cblxuXHRnZXQgdGV4dCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLl90ZXh0O1xuXHR9XG5cblx0c2V0IHRleHQodmFsdWU6IHN0cmluZykge1xuXHRcdGlmICh0aGlzLl90ZXh0ICE9IHZhbHVlKSB7XG5cdFx0XHR0aGlzLl90ZXh0ID0gdmFsdWU7XG5cblx0XHRcdHRoaXMuX3Byb2Nlc3NlZFRleHQgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGdldCBzZWxlY3RBY3Rpb24oKTogQWN0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0QWN0aW9uO1xuXHR9XG5cblx0c2V0IHNlbGVjdEFjdGlvbih2YWx1ZTogQWN0aW9uKSB7XG5cdFx0dGhpcy5fc2VsZWN0QWN0aW9uID0gdmFsdWU7XG5cblx0XHRpZiAodGhpcy5fc2VsZWN0QWN0aW9uKSB7XG5cdFx0XHR0aGlzLl9zZWxlY3RBY3Rpb24uc2V0UGFyZW50KHRoaXMpO1xuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBMYWJlbCBleHRlbmRzIFRleHRCbG9jayB7XG5cdHByb3RlY3RlZCBnZXRSZW5kZXJlZERvbUVsZW1lbnRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwibGFiZWxcIjtcblx0fVxuXG5cdHByb3RlY3RlZCBpbnRlcm5hbFJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG5cdFx0bGV0IHJlbmRlcmVkRWxlbWVudCA9IDxIVE1MTGFiZWxFbGVtZW50PnN1cGVyLmludGVybmFsUmVuZGVyKCk7XG5cblx0XHRpZiAoIVV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy5mb3JFbGVtZW50SWQpKSB7XG5cdFx0XHRyZW5kZXJlZEVsZW1lbnQuaHRtbEZvciA9IHRoaXMuZm9yRWxlbWVudElkO1xuXHRcdH1cblxuXHRcdHJldHVybiByZW5kZXJlZEVsZW1lbnQ7XG5cdH1cblxuXHRmb3JFbGVtZW50SWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEZhY3Qge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdHNwZWFrOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nID0gdW5kZWZpbmVkLCB2YWx1ZTogc3RyaW5nID0gdW5kZWZpbmVkKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHR0b0pTT04oKSB7XG5cdFx0cmV0dXJuIHsgdGl0bGU6IHRoaXMubmFtZSwgdmFsdWU6IHRoaXMudmFsdWUgfTtcblx0fVxuXG5cdHJlbmRlclNwZWVjaCgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLnNwZWFrICE9IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLnNwZWFrICsgJ1xcbic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICc8cz4nICsgdGhpcy5uYW1lICsgJyAnICsgdGhpcy52YWx1ZSArICc8L3M+XFxuJztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRmFjdFNldCBleHRlbmRzIENhcmRFbGVtZW50IHtcblx0cHJvdGVjdGVkIGdldCB1c2VEZWZhdWx0U2l6aW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHByb3RlY3RlZCBpbnRlcm5hbFJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG5cdFx0bGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcblx0XHRsZXQgaG9zdENvbmZpZyA9IHRoaXMuaG9zdENvbmZpZztcblxuXHRcdGlmICh0aGlzLmZhY3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gXCIwcHhcIjtcblx0XHRcdGVsZW1lbnQuc3R5bGUuYm9yZGVyU3BhY2luZyA9IFwiMHB4XCI7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gXCJub25lXCI7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmJvcmRlckNvbGxhcHNlID0gXCJjb2xsYXBzZVwiO1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiYWMtZmFjdHNldFwiKSk7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mYWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgdHJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG5cdFx0XHRcdGlmIChpID4gMCkge1xuXHRcdFx0XHRcdHRyRWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSB0aGlzLmhvc3RDb25maWcuZmFjdFNldC5zcGFjaW5nICsgXCJweFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVGl0bGUgY29sdW1uXG5cdFx0XHRcdGxldCB0ZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cdFx0XHRcdHRkRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG5cdFx0XHRcdHRkRWxlbWVudC5jbGFzc0xpc3QuYWRkKGhvc3RDb25maWcubWFrZUNzc0NsYXNzTmFtZShcImFjLWZhY3QtdGl0bGVcIikpO1xuXG5cdFx0XHRcdGlmICh0aGlzLmhvc3RDb25maWcuZmFjdFNldC50aXRsZS5tYXhXaWR0aCkge1xuXHRcdFx0XHRcdHRkRWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IHRoaXMuaG9zdENvbmZpZy5mYWN0U2V0LnRpdGxlLm1heFdpZHRoICsgXCJweFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGRFbGVtZW50LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcInRvcFwiO1xuXG5cdFx0XHRcdGxldCB0ZXh0QmxvY2sgPSBuZXcgVGV4dEJsb2NrKCk7XG5cdFx0XHRcdHRleHRCbG9jay5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdHRleHRCbG9jay50ZXh0ID0gVXRpbHMuaXNOdWxsT3JFbXB0eSh0aGlzLmZhY3RzW2ldLm5hbWUpID8gXCJUaXRsZVwiIDogdGhpcy5mYWN0c1tpXS5uYW1lO1xuXHRcdFx0XHR0ZXh0QmxvY2suc2l6ZSA9IHRoaXMuaG9zdENvbmZpZy5mYWN0U2V0LnRpdGxlLnNpemU7XG5cdFx0XHRcdHRleHRCbG9jay5jb2xvciA9IHRoaXMuaG9zdENvbmZpZy5mYWN0U2V0LnRpdGxlLmNvbG9yO1xuXHRcdFx0XHR0ZXh0QmxvY2suaXNTdWJ0bGUgPSB0aGlzLmhvc3RDb25maWcuZmFjdFNldC50aXRsZS5pc1N1YnRsZTtcblx0XHRcdFx0dGV4dEJsb2NrLndlaWdodCA9IHRoaXMuaG9zdENvbmZpZy5mYWN0U2V0LnRpdGxlLndlaWdodDtcblx0XHRcdFx0dGV4dEJsb2NrLndyYXAgPSB0aGlzLmhvc3RDb25maWcuZmFjdFNldC50aXRsZS53cmFwO1xuXHRcdFx0XHR0ZXh0QmxvY2suc3BhY2luZyA9IEVudW1zLlNwYWNpbmcuTm9uZTtcblxuXHRcdFx0XHRVdGlscy5hcHBlbmRDaGlsZCh0ZEVsZW1lbnQsIHRleHRCbG9jay5yZW5kZXIoKSk7XG5cdFx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKHRyRWxlbWVudCwgdGRFbGVtZW50KTtcblxuXHRcdFx0XHQvLyBTcGFjZXIgY29sdW1uXG5cdFx0XHRcdHRkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblx0XHRcdFx0dGRFbGVtZW50LnN0eWxlLndpZHRoID0gXCIxMHB4XCI7XG5cblx0XHRcdFx0VXRpbHMuYXBwZW5kQ2hpbGQodHJFbGVtZW50LCB0ZEVsZW1lbnQpO1xuXG5cdFx0XHRcdC8vIFZhbHVlIGNvbHVtblxuXHRcdFx0XHR0ZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cdFx0XHRcdHRkRWxlbWVudC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJ0b3BcIjtcblx0XHRcdFx0dGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiYWMtZmFjdC12YWx1ZVwiKSk7XG5cblx0XHRcdFx0dGV4dEJsb2NrID0gbmV3IFRleHRCbG9jaygpO1xuXHRcdFx0XHR0ZXh0QmxvY2suc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHR0ZXh0QmxvY2sudGV4dCA9IFV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy5mYWN0c1tpXS52YWx1ZSkgPyBcIlZhbHVlXCIgOiB0aGlzLmZhY3RzW2ldLnZhbHVlO1xuXHRcdFx0XHR0ZXh0QmxvY2suc2l6ZSA9IHRoaXMuaG9zdENvbmZpZy5mYWN0U2V0LnZhbHVlLnNpemU7XG5cdFx0XHRcdHRleHRCbG9jay5jb2xvciA9IHRoaXMuaG9zdENvbmZpZy5mYWN0U2V0LnZhbHVlLmNvbG9yO1xuXHRcdFx0XHR0ZXh0QmxvY2suaXNTdWJ0bGUgPSB0aGlzLmhvc3RDb25maWcuZmFjdFNldC52YWx1ZS5pc1N1YnRsZTtcblx0XHRcdFx0dGV4dEJsb2NrLndlaWdodCA9IHRoaXMuaG9zdENvbmZpZy5mYWN0U2V0LnZhbHVlLndlaWdodDtcblx0XHRcdFx0dGV4dEJsb2NrLndyYXAgPSB0aGlzLmhvc3RDb25maWcuZmFjdFNldC52YWx1ZS53cmFwO1xuXHRcdFx0XHR0ZXh0QmxvY2suc3BhY2luZyA9IEVudW1zLlNwYWNpbmcuTm9uZTtcblxuXHRcdFx0XHRVdGlscy5hcHBlbmRDaGlsZCh0ZEVsZW1lbnQsIHRleHRCbG9jay5yZW5kZXIoKSk7XG5cdFx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKHRyRWxlbWVudCwgdGRFbGVtZW50KTtcblx0XHRcdFx0VXRpbHMuYXBwZW5kQ2hpbGQoZWxlbWVudCwgdHJFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXG5cdGZhY3RzOiBBcnJheTxGYWN0PiA9IFtdO1xuXG5cdGdldEpzb25UeXBlTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBcIkZhY3RTZXRcIjtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIudG9KU09OKCk7XG5cblx0XHRsZXQgZmFjdHMgPSBbXVxuXG5cdFx0Zm9yIChsZXQgZmFjdCBvZiB0aGlzLmZhY3RzKSB7XG5cdFx0XHRmYWN0cy5wdXNoKGZhY3QudG9KU09OKCkpO1xuXHRcdH1cblxuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJmYWN0c1wiLCBmYWN0cyk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cGFyc2UoanNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSB7XG5cdFx0c3VwZXIucGFyc2UoanNvbiwgZXJyb3JzKTtcblxuXHRcdHRoaXMuZmFjdHMgPSBbXTtcblxuXHRcdGlmIChqc29uW1wiZmFjdHNcIl0gIT0gbnVsbCkge1xuXHRcdFx0dmFyIGpzb25GYWN0cyA9IGpzb25bXCJmYWN0c1wiXSBhcyBBcnJheTxhbnk+O1xuXG5cdFx0XHR0aGlzLmZhY3RzID0gW107XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwganNvbkZhY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBmYWN0ID0gbmV3IEZhY3QoKTtcblxuXHRcdFx0XHRmYWN0Lm5hbWUgPSBqc29uRmFjdHNbaV1bXCJ0aXRsZVwiXTtcblx0XHRcdFx0ZmFjdC52YWx1ZSA9IGpzb25GYWN0c1tpXVtcInZhbHVlXCJdO1xuXHRcdFx0XHRmYWN0LnNwZWFrID0ganNvbkZhY3RzW2ldW1wic3BlYWtcIl07XG5cblx0XHRcdFx0dGhpcy5mYWN0cy5wdXNoKGZhY3QpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlclNwZWVjaCgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLnNwZWFrICE9IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLnNwZWFrICsgJ1xcbic7XG5cdFx0fVxuXG5cdFx0Ly8gcmVuZGVyIGVhY2ggZmFjdFxuXHRcdGxldCBzcGVhayA9IG51bGw7XG5cblx0XHRpZiAodGhpcy5mYWN0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRzcGVhayA9ICcnO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmFjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHNwZWVjaCA9IHRoaXMuZmFjdHNbaV0ucmVuZGVyU3BlZWNoKCk7XG5cblx0XHRcdFx0aWYgKHNwZWVjaCkge1xuXHRcdFx0XHRcdHNwZWFrICs9IHNwZWVjaDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiAnPHA+JyArIHNwZWFrICsgJ1xcbjwvcD5cXG4nO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZSBleHRlbmRzIENhcmRFbGVtZW50IHtcblx0cHJpdmF0ZSBfc2VsZWN0QWN0aW9uOiBBY3Rpb247XG5cblx0cHJpdmF0ZSBwYXJzZURpbWVuc2lvbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGVycm9yczogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPik6IG51bWJlciB7XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0bGV0IHNpemUgPSBVdGlscy5TaXplQW5kVW5pdC5wYXJzZSh2YWx1ZSk7XG5cblx0XHRcdFx0XHRpZiAoc2l6ZS51bml0ID09IEVudW1zLlNpemVVbml0LlBpeGVsKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2l6ZS5waHlzaWNhbFNpemU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNhdGNoIHtcblx0XHRcdFx0XHQvLyBJZ25vcmUgZXJyb3Jcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyYWlzZVBhcnNlRXJyb3IoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLkludmFsaWRQcm9wZXJ0eVZhbHVlLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IFwiSW52YWxpZCBpbWFnZSBcIiArIG5hbWUgKyBcIjogXCIgKyB2YWx1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcnNcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRwcml2YXRlIGFwcGx5U2l6ZShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRcdGlmICh0aGlzLnBpeGVsV2lkdGggfHwgdGhpcy5waXhlbEhlaWdodCkge1xuXHRcdFx0aWYgKHRoaXMucGl4ZWxXaWR0aCkge1xuXHRcdFx0XHRlbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5waXhlbFdpZHRoICsgXCJweFwiO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5waXhlbEhlaWdodCkge1xuXHRcdFx0XHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMucGl4ZWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0c3dpdGNoICh0aGlzLnNpemUpIHtcblx0XHRcdFx0Y2FzZSBFbnVtcy5TaXplLlN0cmV0Y2g6XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIEVudW1zLlNpemUuQXV0bzpcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLm1heFdpZHRoID0gXCIxMDAlXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRW51bXMuU2l6ZS5TbWFsbDpcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5ob3N0Q29uZmlnLmltYWdlU2l6ZXMuc21hbGwgKyBcInB4XCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRW51bXMuU2l6ZS5MYXJnZTpcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5ob3N0Q29uZmlnLmltYWdlU2l6ZXMubGFyZ2UgKyBcInB4XCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRW51bXMuU2l6ZS5NZWRpdW06XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuaG9zdENvbmZpZy5pbWFnZVNpemVzLm1lZGl1bSArIFwicHhcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0IHVzZURlZmF1bHRTaXppbmcoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGludGVybmFsUmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcblx0XHR2YXIgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsO1xuXG5cdFx0aWYgKCFVdGlscy5pc051bGxPckVtcHR5KHRoaXMudXJsKSkge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gXCI5OS45JVwiO1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtZmxleFwiO1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJmbGV4LXN0YXJ0XCI7XG5cblx0XHRcdGVsZW1lbnQub25rZXlwcmVzcyA9IChlKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLnNlbGVjdEFjdGlvbikge1xuXHRcdFx0XHRcdGlmIChlLmtleUNvZGUgPT0gMTMgfHwgZS5rZXlDb2RlID09IDMyKSB7IC8vIGVudGVyIG9yIHNwYWNlIHByZXNzZWRcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0QWN0aW9uLmV4ZWN1dGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudC5vbmNsaWNrID0gKGUpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0QWN0aW9uKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RBY3Rpb24uZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggKHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudCkge1xuXHRcdFx0XHRjYXNlIEVudW1zLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyOlxuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIEVudW1zLkhvcml6b250YWxBbGlnbm1lbnQuUmlnaHQ6XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiZmxleC1lbmRcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBFbnVtcy5Ib3Jpem9udGFsQWxpZ25tZW50Lkljb25MZWZ0OlxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1ob3Jpem9udGFsYWxpZ25tZW50LWljb25sZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEVudW1zLkhvcml6b250YWxBbGlnbm1lbnQuSWNvblJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1ob3Jpem9udGFsYWxpZ25tZW50LWljb25yaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImZsZXgtc3RhcnRcIjtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IFwiXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhY2hlIGhvc3RDb25maWcgdG8gYXZvaWQgd2Fsa2luZyB0aGUgcGFyZW50IGhpZXJhcmNoeSBtdWx0aXBsZSB0aW1lc1xuXHRcdFx0bGV0IGhvc3RDb25maWcgPSB0aGlzLmhvc3RDb25maWc7XG5cblx0XHRcdGxldCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdFx0aW1hZ2VFbGVtZW50Lm9ubG9hZCA9IChlOiBFdmVudCkgPT4ge1xuXHRcdFx0XHRyYWlzZUltYWdlTG9hZGVkRXZlbnQodGhpcyk7XG5cdFx0XHR9XG5cdFx0XHRpbWFnZUVsZW1lbnQub25lcnJvciA9IChlOiBFdmVudCkgPT4ge1xuXHRcdFx0XHRsZXQgY2FyZCA9IHRoaXMuZ2V0Um9vdEVsZW1lbnQoKSBhcyBBZGFwdGl2ZUNhcmQ7XG5cblx0XHRcdFx0dGhpcy5yZW5kZXJlZEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdFx0XHRpZiAoY2FyZCAmJiBjYXJkLmRlc2lnbk1vZGUpIHtcblx0XHRcdFx0XHRsZXQgZXJyb3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRlcnJvckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0XHRcdGVycm9yRWxlbWVudC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcblx0XHRcdFx0XHRlcnJvckVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuXHRcdFx0XHRcdGVycm9yRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNFRUVFRUVcIjtcblx0XHRcdFx0XHRlcnJvckVsZW1lbnQuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG5cdFx0XHRcdFx0ZXJyb3JFbGVtZW50LmlubmVyVGV4dCA9IFwiOi0oXCI7XG5cdFx0XHRcdFx0ZXJyb3JFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcblxuXHRcdFx0XHRcdHRoaXMuYXBwbHlTaXplKGVycm9yRWxlbWVudCk7XG5cblx0XHRcdFx0XHR0aGlzLnJlbmRlcmVkRWxlbWVudC5hcHBlbmRDaGlsZChlcnJvckVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmFpc2VJbWFnZUxvYWRlZEV2ZW50KHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0aW1hZ2VFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IFwiMTAwJVwiO1xuXHRcdFx0aW1hZ2VFbGVtZW50LnN0eWxlLm1pbldpZHRoID0gXCIwXCI7XG5cdFx0XHRpbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChob3N0Q29uZmlnLm1ha2VDc3NDbGFzc05hbWUoXCJhYy1pbWFnZVwiKSk7XG5cblx0XHRcdGlmICh0aGlzLnNlbGVjdEFjdGlvbiAhPSBudWxsICYmIGhvc3RDb25maWcuc3VwcG9ydHNJbnRlcmFjdGl2aXR5KSB7XG5cdFx0XHRcdGltYWdlRWxlbWVudC50YWJJbmRleCA9IDBcblx0XHRcdFx0aW1hZ2VFbGVtZW50LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJidXR0b25cIik7XG5cdFx0XHRcdGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHRoaXMuc2VsZWN0QWN0aW9uLnRpdGxlKTtcblx0XHRcdFx0aW1hZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiYWMtc2VsZWN0YWJsZVwiKSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuYXBwbHlTaXplKGltYWdlRWxlbWVudCk7XG5cblx0XHRcdGlmICh0aGlzLnN0eWxlID09PSBFbnVtcy5JbWFnZVN0eWxlLlBlcnNvbikge1xuXHRcdFx0XHRpbWFnZUVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcblx0XHRcdFx0aW1hZ2VFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiNTAlIDUwJVwiO1xuXHRcdFx0XHRpbWFnZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlID09PSBFbnVtcy5JbWFnZVN0eWxlLkVtb3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImltYWdlLXN0eWxlLWVtb3Rpb25cIik7XG4gICAgICAgICAgICB9XG5cblx0XHRcdGlmICghVXRpbHMuaXNOdWxsT3JFbXB0eSh0aGlzLmJhY2tncm91bmRDb2xvcikpIHtcblx0XHRcdFx0aW1hZ2VFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFV0aWxzLnN0cmluZ1RvQ3NzQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbWFnZUVsZW1lbnQuc3JjID0gdGhpcy51cmw7XG5cdFx0XHRpbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5hbHRUZXh0O1xuXG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblxuXHRzdHlsZTogRW51bXMuSW1hZ2VTdHlsZSA9IEVudW1zLkltYWdlU3R5bGUuRGVmYXVsdDtcblx0YmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG5cdHVybDogc3RyaW5nO1xuXHRzaXplOiBFbnVtcy5TaXplID0gRW51bXMuU2l6ZS5BdXRvO1xuXHR3aWR0aDogVXRpbHMuU2l6ZUFuZFVuaXQ7XG5cdHBpeGVsV2lkdGg/OiBudW1iZXIgPSBudWxsO1xuXHRwaXhlbEhlaWdodD86IG51bWJlciA9IG51bGw7XG5cdGFsdFRleHQ6IHN0cmluZyA9IFwiXCI7XG5cblx0dG9KU09OKCkge1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci50b0pTT04oKTtcblxuXHRcdGlmICh0aGlzLl9zZWxlY3RBY3Rpb24pIHtcblx0XHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJzZWxlY3RBY3Rpb25cIiwgdGhpcy5fc2VsZWN0QWN0aW9uLnRvSlNPTigpKTtcblx0XHR9XG5cblx0XHRVdGlscy5zZXRFbnVtUHJvcGVydHkoRW51bXMuSW1hZ2VTdHlsZSwgcmVzdWx0LCBcInN0eWxlXCIsIHRoaXMuc3R5bGUsIEVudW1zLkltYWdlU3R5bGUuRGVmYXVsdCk7XG5cdFx0VXRpbHMuc2V0UHJvcGVydHkocmVzdWx0LCBcImJhY2tncm91bmRDb2xvclwiLCB0aGlzLmJhY2tncm91bmRDb2xvcik7XG5cdFx0VXRpbHMuc2V0UHJvcGVydHkocmVzdWx0LCBcInVybFwiLCB0aGlzLnVybCk7XG5cdFx0VXRpbHMuc2V0RW51bVByb3BlcnR5KEVudW1zLlNpemUsIHJlc3VsdCwgXCJzaXplXCIsIHRoaXMuc2l6ZSwgRW51bXMuU2l6ZS5BdXRvKTtcblxuXHRcdGlmICh0aGlzLnBpeGVsV2lkdGgpIHtcblx0XHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJ3aWR0aFwiLCB0aGlzLnBpeGVsV2lkdGggKyBcInB4XCIpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBpeGVsSGVpZ2h0KSB7XG5cdFx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwiaGVpZ2h0XCIsIHRoaXMucGl4ZWxIZWlnaHQgKyBcInB4XCIpO1xuXHRcdH1cblxuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJhbHRUZXh0XCIsIHRoaXMuYWx0VGV4dCk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Z2V0SnNvblR5cGVOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiSW1hZ2VcIjtcblx0fVxuXG5cdGdldEFjdGlvbkJ5SWQoaWQ6IHN0cmluZykge1xuXHRcdHZhciByZXN1bHQgPSBzdXBlci5nZXRBY3Rpb25CeUlkKGlkKTtcblxuXHRcdGlmICghcmVzdWx0ICYmIHRoaXMuc2VsZWN0QWN0aW9uKSB7XG5cdFx0XHRyZXN1bHQgPSB0aGlzLnNlbGVjdEFjdGlvbi5nZXRBY3Rpb25CeUlkKGlkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cGFyc2UoanNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSB7XG5cdFx0c3VwZXIucGFyc2UoanNvbiwgZXJyb3JzKTtcblxuXHRcdHRoaXMudXJsID0ganNvbltcInVybFwiXTtcblx0XHR0aGlzLmJhY2tncm91bmRDb2xvciA9IGpzb25bXCJiYWNrZ3JvdW5kQ29sb3JcIl07XG5cblx0XHR2YXIgc3R5bGVTdHJpbmcgPSBqc29uW1wic3R5bGVcIl07XG5cblx0XHRpZiAoc3R5bGVTdHJpbmcgJiYgdHlwZW9mIHN0eWxlU3RyaW5nID09PSBcInN0cmluZ1wiICYmIHN0eWxlU3RyaW5nLnRvTG93ZXJDYXNlKCkgPT09IFwibm9ybWFsXCIpIHtcblx0XHRcdHRoaXMuc3R5bGUgPSBFbnVtcy5JbWFnZVN0eWxlLkRlZmF1bHQ7XG5cblx0XHRcdHJhaXNlUGFyc2VFcnJvcihcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVycm9yOiBFbnVtcy5WYWxpZGF0aW9uRXJyb3IuRGVwcmVjYXRlZCxcblx0XHRcdFx0XHRtZXNzYWdlOiBcIlRoZSBJbWFnZS5zdHlsZSB2YWx1ZSBcXFwibm9ybWFsXFxcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQuIFVzZSBcXFwiZGVmYXVsdFxcXCIgaW5zdGVhZC5cIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcnNcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5zdHlsZSA9IFV0aWxzLmdldEVudW1WYWx1ZU9yRGVmYXVsdChFbnVtcy5JbWFnZVN0eWxlLCBzdHlsZVN0cmluZywgdGhpcy5zdHlsZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zaXplID0gVXRpbHMuZ2V0RW51bVZhbHVlT3JEZWZhdWx0KEVudW1zLlNpemUsIGpzb25bXCJzaXplXCJdLCB0aGlzLnNpemUpO1xuXHRcdHRoaXMuYWx0VGV4dCA9IGpzb25bXCJhbHRUZXh0XCJdO1xuXG5cdFx0Ly8gcGl4ZWxXaWR0aCBhbmQgcGl4ZWxIZWlnaHQgYXJlIG9ubHkgcGFyc2VkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0XHQvLyBQYXlsb2FkcyBzaG91bGQgdXNlIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IHByb2VydGllcyBpbnN0ZWFkLlxuXHRcdGlmIChqc29uW1wicGl4ZWxXaWR0aFwiXSAmJiB0eXBlb2YganNvbltcInBpeGVsV2lkdGhcIl0gPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdHRoaXMucGl4ZWxXaWR0aCA9IGpzb25bXCJwaXhlbFdpZHRoXCJdO1xuXG5cdFx0XHRyYWlzZVBhcnNlRXJyb3IoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLkRlcHJlY2F0ZWQsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJUaGUgcGl4ZWxXaWR0aCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQuIFVzZSB0aGUgd2lkdGggcHJvcGVydHkgaW5zdGVhZC5cIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcnNcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGpzb25bXCJwaXhlbEhlaWdodFwiXSAmJiB0eXBlb2YganNvbltcInBpeGVsSGVpZ2h0XCJdID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHR0aGlzLnBpeGVsSGVpZ2h0ID0ganNvbltcInBpeGVsSGVpZ2h0XCJdO1xuXG5cdFx0XHRyYWlzZVBhcnNlRXJyb3IoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLkRlcHJlY2F0ZWQsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJUaGUgcGl4ZWxIZWlnaHQgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkLiBVc2UgdGhlIGhlaWdodCBwcm9wZXJ0eSBpbnN0ZWFkLlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yc1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRsZXQgc2l6ZSA9IHRoaXMucGFyc2VEaW1lbnNpb24oXCJ3aWR0aFwiLCBqc29uW1wid2lkdGhcIl0sIGVycm9ycyk7XG5cblx0XHRpZiAoc2l6ZSA+IDApIHtcblx0XHRcdHRoaXMucGl4ZWxXaWR0aCA9IHNpemU7XG5cdFx0fVxuXG5cdFx0c2l6ZSA9IHRoaXMucGFyc2VEaW1lbnNpb24oXCJoZWlnaHRcIiwganNvbltcImhlaWdodFwiXSwgZXJyb3JzKTtcblxuXHRcdGlmIChzaXplID4gMCkge1xuXHRcdFx0dGhpcy5waXhlbEhlaWdodCA9IHNpemU7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWxlY3RBY3Rpb24gPSBjcmVhdGVBY3Rpb25JbnN0YW5jZShcblx0XHRcdHRoaXMsXG5cdFx0XHRqc29uW1wic2VsZWN0QWN0aW9uXCJdLFxuXHRcdFx0ZXJyb3JzKTtcblx0fVxuXG5cdGdldFJlc291cmNlSW5mb3JtYXRpb24oKTogQXJyYXk8SVJlc291cmNlSW5mb3JtYXRpb24+IHtcblx0XHRpZiAoIVV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy51cmwpKSB7XG5cdFx0XHRyZXR1cm4gW3sgdXJsOiB0aGlzLnVybCwgbWltZVR5cGU6IFwiaW1hZ2VcIiB9XVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXJTcGVlY2goKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5zcGVhayAhPSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zcGVhayArICdcXG4nO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Z2V0IHNlbGVjdEFjdGlvbigpOiBBY3Rpb24ge1xuXHRcdHJldHVybiB0aGlzLl9zZWxlY3RBY3Rpb247XG5cdH1cblxuXHRzZXQgc2VsZWN0QWN0aW9uKHZhbHVlOiBBY3Rpb24pIHtcblx0XHR0aGlzLl9zZWxlY3RBY3Rpb24gPSB2YWx1ZTtcblxuXHRcdGlmICh0aGlzLl9zZWxlY3RBY3Rpb24pIHtcblx0XHRcdHRoaXMuX3NlbGVjdEFjdGlvbi5zZXRQYXJlbnQodGhpcyk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVNldCBleHRlbmRzIENhcmRFbGVtZW50Q29udGFpbmVyIHtcblx0cHJpdmF0ZSBfaW1hZ2VzOiBBcnJheTxJbWFnZT4gPSBbXTtcblxuXHRwcm90ZWN0ZWQgaW50ZXJuYWxSZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuXHRcdGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGw7XG5cblx0XHRpZiAodGhpcy5faW1hZ2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gXCI5OS45JVwiO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2ltYWdlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLl9pbWFnZXNbaV0uc2l6ZSA9IHRoaXMuaW1hZ2VTaXplO1xuXG5cdFx0XHRcdGxldCByZW5kZXJlZEltYWdlID0gdGhpcy5faW1hZ2VzW2ldLnJlbmRlcigpO1xuXG5cdFx0XHRcdHJlbmRlcmVkSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWZsZXhcIjtcblx0XHRcdFx0cmVuZGVyZWRJbWFnZS5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuXHRcdFx0XHRyZW5kZXJlZEltYWdlLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIxMHB4XCI7XG5cdFx0XHRcdHJlbmRlcmVkSW1hZ2Uuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5ob3N0Q29uZmlnLmltYWdlU2V0Lm1heEltYWdlSGVpZ2h0ICsgXCJweFwiO1xuXG5cdFx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKGVsZW1lbnQsIHJlbmRlcmVkSW1hZ2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cblx0aW1hZ2VTaXplOiBFbnVtcy5TaXplID0gRW51bXMuU2l6ZS5NZWRpdW07XG5cblx0Z2V0SXRlbUNvdW50KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX2ltYWdlcy5sZW5ndGg7XG5cdH1cblxuXHRnZXRJdGVtQXQoaW5kZXg6IG51bWJlcik6IENhcmRFbGVtZW50IHtcblx0XHRyZXR1cm4gdGhpcy5faW1hZ2VzW2luZGV4XTtcblx0fVxuXG5cdGdldFJlc291cmNlSW5mb3JtYXRpb24oKTogQXJyYXk8SVJlc291cmNlSW5mb3JtYXRpb24+IHtcblx0XHRsZXQgcmVzdWx0OiBBcnJheTxJUmVzb3VyY2VJbmZvcm1hdGlvbj4gPSBbXTtcblxuXHRcdGZvciAobGV0IGltYWdlIG9mIHRoaXMuX2ltYWdlcykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdChpbWFnZS5nZXRSZXNvdXJjZUluZm9ybWF0aW9uKCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRyZW1vdmVJdGVtKGl0ZW06IENhcmRFbGVtZW50KTogYm9vbGVhbiB7XG5cdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBJbWFnZSkge1xuXHRcdFx0dmFyIGl0ZW1JbmRleCA9IHRoaXMuX2ltYWdlcy5pbmRleE9mKGl0ZW0pO1xuXG5cdFx0XHRpZiAoaXRlbUluZGV4ID49IDApIHtcblx0XHRcdFx0dGhpcy5faW1hZ2VzLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuXG5cdFx0XHRcdGl0ZW0uc2V0UGFyZW50KG51bGwpO1xuXG5cdFx0XHRcdHRoaXMudXBkYXRlTGF5b3V0KCk7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0SnNvblR5cGVOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiSW1hZ2VTZXRcIjtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIudG9KU09OKCk7XG5cblx0XHRVdGlscy5zZXRFbnVtUHJvcGVydHkoRW51bXMuU2l6ZSwgcmVzdWx0LCBcImltYWdlU2l6ZVwiLCB0aGlzLmltYWdlU2l6ZSwgRW51bXMuU2l6ZS5NZWRpdW0pO1xuXG5cdFx0aWYgKHRoaXMuX2ltYWdlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgaW1hZ2VzID0gW107XG5cblx0XHRcdGZvciAobGV0IGltYWdlIG9mIHRoaXMuX2ltYWdlcykge1xuXHRcdFx0XHRpbWFnZXMucHVzaChpbWFnZS50b0pTT04oKSk7XG5cdFx0XHR9XG5cblx0XHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJpbWFnZXNcIiwgaW1hZ2VzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cGFyc2UoanNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSB7XG5cdFx0c3VwZXIucGFyc2UoanNvbiwgZXJyb3JzKTtcblxuXHRcdHRoaXMuaW1hZ2VTaXplID0gVXRpbHMuZ2V0RW51bVZhbHVlT3JEZWZhdWx0KEVudW1zLlNpemUsIGpzb25bXCJpbWFnZVNpemVcIl0sIEVudW1zLlNpemUuTWVkaXVtKTtcblxuXHRcdGlmIChqc29uW1wiaW1hZ2VzXCJdICE9IG51bGwpIHtcblx0XHRcdGxldCBqc29uSW1hZ2VzID0ganNvbltcImltYWdlc1wiXSBhcyBBcnJheTxhbnk+O1xuXG5cdFx0XHR0aGlzLl9pbWFnZXMgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBqc29uSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0XHRpbWFnZS5wYXJzZShqc29uSW1hZ2VzW2ldLCBlcnJvcnMpO1xuXG5cdFx0XHRcdHRoaXMuYWRkSW1hZ2UoaW1hZ2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGFkZEltYWdlKGltYWdlOiBJbWFnZSkge1xuXHRcdGlmICghaW1hZ2UucGFyZW50KSB7XG5cdFx0XHR0aGlzLl9pbWFnZXMucHVzaChpbWFnZSk7XG5cblx0XHRcdGltYWdlLnNldFBhcmVudCh0aGlzKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGltYWdlIGFscmVhZHkgYmVsb25ncyB0byBhbm90aGVyIEltYWdlU2V0XCIpO1xuXHRcdH1cblx0fVxuXG5cdGluZGV4T2YoY2FyZEVsZW1lbnQ6IENhcmRFbGVtZW50KTogbnVtYmVyIHtcblx0XHRyZXR1cm4gY2FyZEVsZW1lbnQgaW5zdGFuY2VvZiBJbWFnZSA/IHRoaXMuX2ltYWdlcy5pbmRleE9mKGNhcmRFbGVtZW50KSA6IC0xO1xuXHR9XG5cblx0cmVuZGVyU3BlZWNoKCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuc3BlYWsgIT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3BlYWs7XG5cdFx0fVxuXG5cdFx0dmFyIHNwZWFrID0gbnVsbDtcblxuXHRcdGlmICh0aGlzLl9pbWFnZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0c3BlYWsgPSAnJztcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9pbWFnZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0c3BlYWsgKz0gdGhpcy5faW1hZ2VzW2ldLnJlbmRlclNwZWVjaCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzcGVhaztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTWVkaWFTb3VyY2Uge1xuXHRtaW1lVHlwZTogc3RyaW5nO1xuXHR1cmw6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZyA9IHVuZGVmaW5lZCwgbWltZVR5cGU6IHN0cmluZyA9IHVuZGVmaW5lZCkge1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHRcdHRoaXMubWltZVR5cGUgPSBtaW1lVHlwZTtcblx0fVxuXG5cdHBhcnNlKGpzb246IGFueSwgZXJyb3JzPzogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPikge1xuXHRcdHRoaXMubWltZVR5cGUgPSBqc29uW1wibWltZVR5cGVcIl07XG5cdFx0dGhpcy51cmwgPSBqc29uW1widXJsXCJdO1xuXHR9XG5cblx0dG9KU09OKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRtaW1lVHlwZTogdGhpcy5taW1lVHlwZSxcblx0XHRcdHVybDogdGhpcy51cmxcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1lZGlhIGV4dGVuZHMgQ2FyZEVsZW1lbnQge1xuXHRzdGF0aWMgcmVhZG9ubHkgc3VwcG9ydGVkTWVkaWFUeXBlcyA9IFtcImF1ZGlvXCIsIFwidmlkZW9cIl07XG5cblx0cHJpdmF0ZSBfc2VsZWN0ZWRNZWRpYVR5cGU6IHN0cmluZztcblx0cHJpdmF0ZSBfc2VsZWN0ZWRTb3VyY2VzOiBBcnJheTxNZWRpYVNvdXJjZT47XG5cblx0cHJpdmF0ZSBnZXRQb3N0ZXJVcmwoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5wb3N0ZXIgPyB0aGlzLnBvc3RlciA6IHRoaXMuaG9zdENvbmZpZy5tZWRpYS5kZWZhdWx0UG9zdGVyO1xuXHR9XG5cblx0cHJpdmF0ZSBwcm9jZXNzU291cmNlcygpIHtcblx0XHR0aGlzLl9zZWxlY3RlZFNvdXJjZXMgPSBbXTtcblx0XHR0aGlzLl9zZWxlY3RlZE1lZGlhVHlwZSA9IHVuZGVmaW5lZDtcblxuXHRcdGZvciAobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcblx0XHRcdGxldCBtaW1lQ29tcG9uZW50cyA9IHNvdXJjZS5taW1lVHlwZS5zcGxpdCgnLycpO1xuXG5cdFx0XHRpZiAobWltZUNvbXBvbmVudHMubGVuZ3RoID09IDIpIHtcblx0XHRcdFx0aWYgKCF0aGlzLl9zZWxlY3RlZE1lZGlhVHlwZSkge1xuXHRcdFx0XHRcdGxldCBpbmRleCA9IE1lZGlhLnN1cHBvcnRlZE1lZGlhVHlwZXMuaW5kZXhPZihtaW1lQ29tcG9uZW50c1swXSk7XG5cblx0XHRcdFx0XHRpZiAoaW5kZXggPj0gMCkge1xuXHRcdFx0XHRcdFx0dGhpcy5fc2VsZWN0ZWRNZWRpYVR5cGUgPSBNZWRpYS5zdXBwb3J0ZWRNZWRpYVR5cGVzW2luZGV4XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG1pbWVDb21wb25lbnRzWzBdID09IHRoaXMuX3NlbGVjdGVkTWVkaWFUeXBlKSB7XG5cdFx0XHRcdFx0dGhpcy5fc2VsZWN0ZWRTb3VyY2VzLnB1c2goc291cmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVuZGVyUG9zdGVyKCk6IEhUTUxFbGVtZW50IHtcblx0XHRjb25zdCBwbGF5QnV0dG9uQXJyb3dXaWR0aCA9IDEyO1xuXHRcdGNvbnN0IHBsYXlCdXR0b25BcnJvd0hlaWdodCA9IDE1O1xuXG5cdFx0bGV0IHBvc3RlclJvb3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRwb3N0ZXJSb290RWxlbWVudC5jbGFzc05hbWUgPSBcImFjLW1lZGlhLXBvc3RlclwiO1xuXHRcdHBvc3RlclJvb3RFbGVtZW50LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJjb250ZW50aW5mb1wiKTtcblx0XHRwb3N0ZXJSb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHRoaXMuYWx0VGV4dCA/IHRoaXMuYWx0VGV4dCA6IFwiTWVkaWEgY29udGVudFwiKTtcblx0XHRwb3N0ZXJSb290RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0XHRwb3N0ZXJSb290RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cblx0XHRsZXQgcG9zdGVyVXJsID0gdGhpcy5nZXRQb3N0ZXJVcmwoKTtcblxuXHRcdGlmIChwb3N0ZXJVcmwpIHtcblx0XHRcdGxldCBwb3N0ZXJJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdFx0cG9zdGVySW1hZ2VFbGVtZW50LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cdFx0XHRwb3N0ZXJJbWFnZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG5cblx0XHRcdHBvc3RlckltYWdlRWxlbWVudC5vbmVycm9yID0gKGU6IEV2ZW50KSA9PiB7XG5cdFx0XHRcdHBvc3RlckltYWdlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBvc3RlckltYWdlRWxlbWVudCk7XG5cdFx0XHRcdHBvc3RlclJvb3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbXB0eVwiKTtcblx0XHRcdFx0cG9zdGVyUm9vdEVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gXCIxNTBweFwiO1xuXHRcdFx0fVxuXG5cdFx0XHRwb3N0ZXJJbWFnZUVsZW1lbnQuc3JjID0gcG9zdGVyVXJsO1xuXG5cdFx0XHRwb3N0ZXJSb290RWxlbWVudC5hcHBlbmRDaGlsZChwb3N0ZXJJbWFnZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHBvc3RlclJvb3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbXB0eVwiKTtcblx0XHRcdHBvc3RlclJvb3RFbGVtZW50LnN0eWxlLm1pbkhlaWdodCA9IFwiMTUwcHhcIjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob3N0Q29uZmlnLnN1cHBvcnRzSW50ZXJhY3Rpdml0eSAmJiB0aGlzLl9zZWxlY3RlZFNvdXJjZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IHBsYXlCdXR0b25PdXRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0cGxheUJ1dHRvbk91dGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiYnV0dG9uXCIpO1xuXHRcdFx0cGxheUJ1dHRvbk91dGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiUGxheSBtZWRpYVwiKTtcblx0XHRcdHBsYXlCdXR0b25PdXRlckVsZW1lbnQuY2xhc3NOYW1lID0gXCJhYy1tZWRpYS1wbGF5QnV0dG9uXCI7XG5cdFx0XHRwbGF5QnV0dG9uT3V0ZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHRcdHBsYXlCdXR0b25PdXRlckVsZW1lbnQuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG5cdFx0XHRwbGF5QnV0dG9uT3V0ZXJFbGVtZW50LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcblx0XHRcdHBsYXlCdXR0b25PdXRlckVsZW1lbnQub25jbGljayA9IChlKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLmhvc3RDb25maWcubWVkaWEuYWxsb3dJbmxpbmVQbGF5YmFjaykge1xuXHRcdFx0XHRcdGxldCBtZWRpYVBsYXllckVsZW1lbnQgPSB0aGlzLnJlbmRlck1lZGlhUGxheWVyKCk7XG5cblx0XHRcdFx0XHR0aGlzLnJlbmRlcmVkRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdFx0XHRcdHRoaXMucmVuZGVyZWRFbGVtZW50LmFwcGVuZENoaWxkKG1lZGlhUGxheWVyRWxlbWVudCk7XG5cblx0XHRcdFx0XHRtZWRpYVBsYXllckVsZW1lbnQucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGlmIChNZWRpYS5vblBsYXkpIHtcblx0XHRcdFx0XHRcdE1lZGlhLm9uUGxheSh0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IHBsYXlCdXR0b25Jbm5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0cGxheUJ1dHRvbklubmVyRWxlbWVudC5jbGFzc05hbWUgPSBcImFjLW1lZGlhLXBsYXlCdXR0b24tYXJyb3dcIjtcblx0XHRcdHBsYXlCdXR0b25Jbm5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBwbGF5QnV0dG9uQXJyb3dXaWR0aCArIFwicHhcIjtcblx0XHRcdHBsYXlCdXR0b25Jbm5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcGxheUJ1dHRvbkFycm93SGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0cGxheUJ1dHRvbklubmVyRWxlbWVudC5zdHlsZS5ib3JkZXJUb3BXaWR0aCA9IChwbGF5QnV0dG9uQXJyb3dIZWlnaHQgLyAyKSArIFwicHhcIjtcblx0XHRcdHBsYXlCdXR0b25Jbm5lckVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tV2lkdGggPSAocGxheUJ1dHRvbkFycm93SGVpZ2h0IC8gMikgKyBcInB4XCI7XG5cdFx0XHRwbGF5QnV0dG9uSW5uZXJFbGVtZW50LnN0eWxlLmJvcmRlckxlZnRXaWR0aCA9IHBsYXlCdXR0b25BcnJvd1dpZHRoICsgXCJweFwiO1xuXHRcdFx0cGxheUJ1dHRvbklubmVyRWxlbWVudC5zdHlsZS5ib3JkZXJSaWdodFdpZHRoID0gXCIwXCI7XG5cdFx0XHRwbGF5QnV0dG9uSW5uZXJFbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gXCJzb2xpZFwiO1xuXHRcdFx0cGxheUJ1dHRvbklubmVyRWxlbWVudC5zdHlsZS5ib3JkZXJUb3BDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcblx0XHRcdHBsYXlCdXR0b25Jbm5lckVsZW1lbnQuc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcblx0XHRcdHBsYXlCdXR0b25Jbm5lckVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cdFx0XHRwbGF5QnV0dG9uSW5uZXJFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgKHBsYXlCdXR0b25BcnJvd1dpZHRoIC8gMTApICsgXCJweCwwcHgpXCI7XG5cblx0XHRcdHBsYXlCdXR0b25PdXRlckVsZW1lbnQuYXBwZW5kQ2hpbGQocGxheUJ1dHRvbklubmVyRWxlbWVudCk7XG5cblx0XHRcdGxldCBwbGF5QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdHBsYXlCdXR0b25Db250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdFx0XHRwbGF5QnV0dG9uQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBcIjBcIjtcblx0XHRcdHBsYXlCdXR0b25Db250YWluZXIuc3R5bGUudG9wID0gXCIwXCI7XG5cdFx0XHRwbGF5QnV0dG9uQ29udGFpbmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cdFx0XHRwbGF5QnV0dG9uQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuXHRcdFx0cGxheUJ1dHRvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdFx0XHRwbGF5QnV0dG9uQ29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcblx0XHRcdHBsYXlCdXR0b25Db250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG5cblx0XHRcdHBsYXlCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheUJ1dHRvbk91dGVyRWxlbWVudCk7XG5cdFx0XHRwb3N0ZXJSb290RWxlbWVudC5hcHBlbmRDaGlsZChwbGF5QnV0dG9uQ29udGFpbmVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcG9zdGVyUm9vdEVsZW1lbnQ7XG5cdH1cblxuXHRwcml2YXRlIHJlbmRlck1lZGlhUGxheWVyKCk6IEhUTUxNZWRpYUVsZW1lbnQge1xuXHRcdGxldCBtZWRpYUVsZW1lbnQ6IEhUTUxNZWRpYUVsZW1lbnQ7XG5cblx0XHRpZiAodGhpcy5fc2VsZWN0ZWRNZWRpYVR5cGUgPT0gXCJ2aWRlb1wiKSB7XG5cdFx0XHRsZXQgdmlkZW9QbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIik7XG5cblx0XHRcdGxldCBwb3N0ZXJVcmwgPSB0aGlzLmdldFBvc3RlclVybCgpO1xuXG5cdFx0XHRpZiAocG9zdGVyVXJsKSB7XG5cdFx0XHRcdHZpZGVvUGxheWVyLnBvc3RlciA9IHBvc3RlclVybDtcblx0XHRcdH1cblxuXHRcdFx0bWVkaWFFbGVtZW50ID0gdmlkZW9QbGF5ZXI7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bWVkaWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuXHRcdH1cblxuXHRcdG1lZGlhRWxlbWVudC5jb250cm9scyA9IHRydWU7XG5cdFx0bWVkaWFFbGVtZW50LnByZWxvYWQgPSBcIm5vbmVcIjtcblx0XHRtZWRpYUVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuXHRcdGZvciAobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcblx0XHRcdGxldCBzcmM6IEhUTUxTb3VyY2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcblx0XHRcdHNyYy5zcmMgPSBzb3VyY2UudXJsO1xuXHRcdFx0c3JjLnR5cGUgPSBzb3VyY2UubWltZVR5cGU7XG5cblx0XHRcdG1lZGlhRWxlbWVudC5hcHBlbmRDaGlsZChzcmMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZWRpYUVsZW1lbnQ7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaW50ZXJuYWxSZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuXHRcdGxldCBlbGVtZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmhvc3RDb25maWcubWFrZUNzc0NsYXNzTmFtZShcImFjLW1lZGlhXCIpO1xuXG5cdFx0dGhpcy5wcm9jZXNzU291cmNlcygpO1xuXG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclBvc3RlcigpKTtcblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cblx0c3RhdGljIG9uUGxheTogKHNlbmRlcjogTWVkaWEpID0+IHZvaWQ7XG5cblx0c291cmNlczogQXJyYXk8TWVkaWFTb3VyY2U+ID0gW107XG5cdHBvc3Rlcjogc3RyaW5nO1xuXHRhbHRUZXh0OiBzdHJpbmc7XG5cblx0cGFyc2UoanNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSB7XG5cdFx0c3VwZXIucGFyc2UoanNvbiwgZXJyb3JzKTtcblxuXHRcdHRoaXMucG9zdGVyID0ganNvbltcInBvc3RlclwiXTtcblx0XHR0aGlzLmFsdFRleHQgPSBqc29uW1wiYWx0VGV4dFwiXTtcblxuXHRcdGlmIChqc29uW1wic291cmNlc1wiXSAhPSBudWxsKSB7XG5cdFx0XHRsZXQganNvblNvdXJjZXMgPSBqc29uW1wic291cmNlc1wiXSBhcyBBcnJheTxhbnk+O1xuXG5cdFx0XHR0aGlzLnNvdXJjZXMgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBqc29uU291cmNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgc291cmNlID0gbmV3IE1lZGlhU291cmNlKCk7XG5cdFx0XHRcdHNvdXJjZS5wYXJzZShqc29uU291cmNlc1tpXSwgZXJyb3JzKTtcblxuXHRcdFx0XHR0aGlzLnNvdXJjZXMucHVzaChzb3VyY2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIudG9KU09OKCk7XG5cblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwicG9zdGVyXCIsIHRoaXMucG9zdGVyKTtcblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwiYWx0VGV4dFwiLCB0aGlzLmFsdFRleHQpO1xuXG5cdFx0aWYgKHRoaXMuc291cmNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgc2VyaWFsaXplZFNvdXJjZXMgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xuXHRcdFx0XHRzZXJpYWxpemVkU291cmNlcy5wdXNoKHNvdXJjZS50b0pTT04oKSk7XG5cdFx0XHR9XG5cblx0XHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJzb3VyY2VzXCIsIHNlcmlhbGl6ZWRTb3VyY2VzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Z2V0SnNvblR5cGVOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiTWVkaWFcIjtcblx0fVxuXG5cdGdldFJlc291cmNlSW5mb3JtYXRpb24oKTogQXJyYXk8SVJlc291cmNlSW5mb3JtYXRpb24+IHtcblx0XHRsZXQgcmVzdWx0OiBBcnJheTxJUmVzb3VyY2VJbmZvcm1hdGlvbj4gPSBbXTtcblxuXHRcdGxldCBwb3N0ZXJVcmwgPSB0aGlzLmdldFBvc3RlclVybCgpO1xuXG5cdFx0aWYgKCFVdGlscy5pc051bGxPckVtcHR5KHBvc3RlclVybCkpIHtcblx0XHRcdHJlc3VsdC5wdXNoKHsgdXJsOiBwb3N0ZXJVcmwsIG1pbWVUeXBlOiBcImltYWdlXCIgfSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgbWVkaWFTb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XG5cdFx0XHRpZiAoIVV0aWxzLmlzTnVsbE9yRW1wdHkobWVkaWFTb3VyY2UudXJsKSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaCh7IHVybDogbWVkaWFTb3VyY2UudXJsLCBtaW1lVHlwZTogbWVkaWFTb3VyY2UubWltZVR5cGUgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHJlbmRlclNwZWVjaCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmFsdFRleHQ7XG5cdH1cblxuXHRnZXQgc2VsZWN0ZWRNZWRpYVR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWRNZWRpYVR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElucHV0IGV4dGVuZHMgQ2FyZEVsZW1lbnQgaW1wbGVtZW50cyBVdGlscy5JSW5wdXQge1xuXHRwcm90ZWN0ZWQgdmFsdWVDaGFuZ2VkKCkge1xuXHRcdGlmICh0aGlzLm9uVmFsdWVDaGFuZ2VkKSB7XG5cdFx0XHR0aGlzLm9uVmFsdWVDaGFuZ2VkKHRoaXMpO1xuXHRcdH1cblx0fVxuXG5cdGFic3RyYWN0IGdldCB2YWx1ZSgpOiBzdHJpbmc7XG5cblx0b25WYWx1ZUNoYW5nZWQ6IChzZW5kZXI6IElucHV0KSA9PiB2b2lkO1xuXG5cdHRpdGxlOiBzdHJpbmc7XG5cdGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xuXG5cdHRvSlNPTigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIudG9KU09OKCk7XG5cblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwidGl0bGVcIiwgdGhpcy50aXRsZSk7XG5cdFx0VXRpbHMuc2V0UHJvcGVydHkocmVzdWx0LCBcInZhbHVlXCIsIHRoaXMucmVuZGVyZWRFbGVtZW50ID8gdGhpcy52YWx1ZSA6IHRoaXMuZGVmYXVsdFZhbHVlKTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHR2YWxpZGF0ZSgpOiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+IHtcblx0XHRpZiAoIXRoaXMuaWQpIHtcblx0XHRcdHJldHVybiBbeyBlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLlByb3BlcnR5Q2FudEJlTnVsbCwgbWVzc2FnZTogXCJBbGwgaW5wdXRzIG11c3QgaGF2ZSBhIHVuaXF1ZSBJZFwiIH1dO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdH1cblxuXHRwYXJzZShqc29uOiBhbnksIGVycm9ycz86IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4pIHtcblx0XHRzdXBlci5wYXJzZShqc29uLCBlcnJvcnMpO1xuXG5cdFx0dGhpcy5pZCA9IGpzb25bXCJpZFwiXTtcblx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IGpzb25bXCJ2YWx1ZVwiXTtcblx0fVxuXG5cdHJlbmRlclNwZWVjaCgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLnNwZWFrICE9IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLnNwZWFrO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnRpdGxlKSB7XG5cdFx0XHRyZXR1cm4gJzxzPicgKyB0aGlzLnRpdGxlICsgJzwvcz5cXG4nO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Z2V0QWxsSW5wdXRzKCk6IEFycmF5PElucHV0PiB7XG5cdFx0cmV0dXJuIFt0aGlzXTtcblx0fVxuXG5cdGdldCBpc0ludGVyYWN0aXZlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG5cdHByaXZhdGUgX3RleHRhcmVhRWxlbWVudDogSFRNTFRleHRBcmVhRWxlbWVudDtcblx0cHJpdmF0ZSBfaW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuXG5cdHByb3RlY3RlZCBpbnRlcm5hbFJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG5cdFx0aWYgKHRoaXMuaXNNdWx0aWxpbmUpIHtcblx0XHRcdHRoaXMuX3RleHRhcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblx0XHRcdHRoaXMuX3RleHRhcmVhRWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmhvc3RDb25maWcubWFrZUNzc0NsYXNzTmFtZShcImFjLWlucHV0XCIsIFwiYWMtdGV4dElucHV0XCIsIFwiYWMtbXVsdGlsaW5lXCIpO1xuXHRcdFx0dGhpcy5fdGV4dGFyZWFFbGVtZW50LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cdFx0XHR0aGlzLl90ZXh0YXJlYUVsZW1lbnQudGFiSW5kZXggPSAwO1xuXG5cdFx0XHRpZiAoIVV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy5wbGFjZWhvbGRlcikpIHtcblx0XHRcdFx0dGhpcy5fdGV4dGFyZWFFbGVtZW50LnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcblx0XHRcdFx0dGhpcy5fdGV4dGFyZWFFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgdGhpcy5wbGFjZWhvbGRlcilcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFVdGlscy5pc051bGxPckVtcHR5KHRoaXMuZGVmYXVsdFZhbHVlKSkge1xuXHRcdFx0XHR0aGlzLl90ZXh0YXJlYUVsZW1lbnQudmFsdWUgPSB0aGlzLmRlZmF1bHRWYWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMubWF4TGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLl90ZXh0YXJlYUVsZW1lbnQubWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGg7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3RleHRhcmVhRWxlbWVudC5vbmlucHV0ID0gKCkgPT4geyB0aGlzLnZhbHVlQ2hhbmdlZCgpOyB9XG5cblx0XHRcdHJldHVybiB0aGlzLl90ZXh0YXJlYUVsZW1lbnQ7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5faW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0dGhpcy5faW5wdXRFbGVtZW50LnR5cGUgPSBFbnVtcy5JbnB1dFRleHRTdHlsZVt0aGlzLnN0eWxlXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0dGhpcy5faW5wdXRFbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMuaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiYWMtaW5wdXRcIiwgXCJhYy10ZXh0SW5wdXRcIik7XG5cdFx0XHR0aGlzLl9pbnB1dEVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblx0XHRcdHRoaXMuX2lucHV0RWxlbWVudC50YWJJbmRleCA9IDA7XG5cblx0XHRcdGlmICghVXRpbHMuaXNOdWxsT3JFbXB0eSh0aGlzLnBsYWNlaG9sZGVyKSkge1xuXHRcdFx0XHR0aGlzLl9pbnB1dEVsZW1lbnQucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuXHRcdFx0XHR0aGlzLl9pbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCB0aGlzLnBsYWNlaG9sZGVyKVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIVV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy5kZWZhdWx0VmFsdWUpKSB7XG5cdFx0XHRcdHRoaXMuX2lucHV0RWxlbWVudC52YWx1ZSA9IHRoaXMuZGVmYXVsdFZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5tYXhMZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMuX2lucHV0RWxlbWVudC5tYXhMZW5ndGggPSB0aGlzLm1heExlbmd0aDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5faW5wdXRFbGVtZW50Lm9uaW5wdXQgPSAoKSA9PiB7IHRoaXMudmFsdWVDaGFuZ2VkKCk7IH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudDtcblx0XHR9XG5cdH1cblxuXHRtYXhMZW5ndGg6IG51bWJlcjtcblx0aXNNdWx0aWxpbmU6IGJvb2xlYW47XG5cdHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdHN0eWxlOiBFbnVtcy5JbnB1dFRleHRTdHlsZSA9IEVudW1zLklucHV0VGV4dFN0eWxlLlRleHQ7XG5cblx0Z2V0SnNvblR5cGVOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiSW5wdXQuVGV4dFwiO1xuXHR9XG5cblx0dG9KU09OKCkge1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci50b0pTT04oKTtcblxuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJwbGFjZWhvbGRlclwiLCB0aGlzLnBsYWNlaG9sZGVyKTtcblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwibWF4TGVuZ3RoXCIsIHRoaXMubWF4TGVuZ3RoLCAwKTtcblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwiaXNNdWx0aWxpbmVcIiwgdGhpcy5pc011bHRpbGluZSwgZmFsc2UpO1xuXHRcdFV0aWxzLnNldEVudW1Qcm9wZXJ0eShFbnVtcy5JbnB1dFRleHRTdHlsZSwgcmVzdWx0LCBcInN0eWxlXCIsIHRoaXMuc3R5bGUsIEVudW1zLklucHV0VGV4dFN0eWxlLlRleHQpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHBhcnNlKGpzb246IGFueSwgZXJyb3JzPzogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPikge1xuXHRcdHN1cGVyLnBhcnNlKGpzb24sIGVycm9ycyk7XG5cblx0XHR0aGlzLm1heExlbmd0aCA9IGpzb25bXCJtYXhMZW5ndGhcIl07XG5cdFx0dGhpcy5pc011bHRpbGluZSA9IGpzb25bXCJpc011bHRpbGluZVwiXTtcblx0XHR0aGlzLnBsYWNlaG9sZGVyID0ganNvbltcInBsYWNlaG9sZGVyXCJdO1xuXHRcdHRoaXMuc3R5bGUgPSBVdGlscy5nZXRFbnVtVmFsdWVPckRlZmF1bHQoRW51bXMuSW5wdXRUZXh0U3R5bGUsIGpzb25bXCJzdHlsZVwiXSwgdGhpcy5zdHlsZSk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5pc011bHRpbGluZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX3RleHRhcmVhRWxlbWVudCA/IHRoaXMuX3RleHRhcmVhRWxlbWVudC52YWx1ZSA6IG51bGw7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudCA/IHRoaXMuX2lucHV0RWxlbWVudC52YWx1ZSA6IG51bGw7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVJbnB1dCBleHRlbmRzIElucHV0IHtcblx0cHJpdmF0ZSBfY2hlY2tib3hJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cblx0cHJvdGVjdGVkIGludGVybmFsUmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcblx0XHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmhvc3RDb25maWcubWFrZUNzc0NsYXNzTmFtZShcImFjLWlucHV0XCIpO1xuXHRcdGVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHRlbGVtZW50LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuXG5cdFx0dGhpcy5fY2hlY2tib3hJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0dGhpcy5fY2hlY2tib3hJbnB1dEVsZW1lbnQuaWQgPSBnZW5lcmF0ZVVuaXF1ZUlkKCk7XG5cdFx0dGhpcy5fY2hlY2tib3hJbnB1dEVsZW1lbnQudHlwZSA9IFwiY2hlY2tib3hcIjtcblx0XHR0aGlzLl9jaGVja2JveElucHV0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0XHR0aGlzLl9jaGVja2JveElucHV0RWxlbWVudC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjtcblx0XHR0aGlzLl9jaGVja2JveElucHV0RWxlbWVudC5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcblx0XHR0aGlzLl9jaGVja2JveElucHV0RWxlbWVudC5zdHlsZS5mbGV4ID0gXCIwIDAgYXV0b1wiO1xuXHRcdHRoaXMuX2NoZWNrYm94SW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgdGhpcy50aXRsZSk7XG5cdFx0dGhpcy5fY2hlY2tib3hJbnB1dEVsZW1lbnQudGFiSW5kZXggPSAwO1xuXG5cdFx0aWYgKHRoaXMuZGVmYXVsdFZhbHVlID09IHRoaXMudmFsdWVPbikge1xuXHRcdFx0dGhpcy5fY2hlY2tib3hJbnB1dEVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2hlY2tib3hJbnB1dEVsZW1lbnQub25jaGFuZ2UgPSAoKSA9PiB7IHRoaXMudmFsdWVDaGFuZ2VkKCk7IH1cblxuXHRcdFV0aWxzLmFwcGVuZENoaWxkKGVsZW1lbnQsIHRoaXMuX2NoZWNrYm94SW5wdXRFbGVtZW50KTtcblxuXHRcdGlmICghVXRpbHMuaXNOdWxsT3JFbXB0eSh0aGlzLnRpdGxlKSB8fCB0aGlzLmlzRGVzaWduTW9kZSgpKSB7XG5cdFx0XHRsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcblx0XHRcdGxhYmVsLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGxhYmVsLmZvckVsZW1lbnRJZCA9IHRoaXMuX2NoZWNrYm94SW5wdXRFbGVtZW50LmlkO1xuXHRcdFx0bGFiZWwuaG9zdENvbmZpZyA9IHRoaXMuaG9zdENvbmZpZztcblx0XHRcdGxhYmVsLnRleHQgPSBVdGlscy5pc051bGxPckVtcHR5KHRoaXMudGl0bGUpID8gdGhpcy5nZXRKc29uVHlwZU5hbWUoKSA6IHRoaXMudGl0bGU7XG5cdFx0XHRsYWJlbC51c2VNYXJrZG93biA9IEFkYXB0aXZlQ2FyZC51c2VNYXJrZG93bkluUmFkaW9CdXR0b25BbmRDaGVja2JveDtcblxuXHRcdFx0bGV0IGxhYmVsRWxlbWVudCA9IGxhYmVsLnJlbmRlcigpO1xuXHRcdFx0bGFiZWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHRcdFx0bGFiZWxFbGVtZW50LnN0eWxlLmZsZXggPSBcIjEgMSBhdXRvXCI7XG5cdFx0XHRsYWJlbEVsZW1lbnQuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XG5cblx0XHRcdGxldCBzcGFjZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdHNwYWNlckVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjZweFwiO1xuXG5cdFx0XHRVdGlscy5hcHBlbmRDaGlsZChlbGVtZW50LCBzcGFjZXJFbGVtZW50KTtcblx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKGVsZW1lbnQsIGxhYmVsRWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblxuXHR2YWx1ZU9uOiBzdHJpbmcgPSBcInRydWVcIjtcblx0dmFsdWVPZmY6IHN0cmluZyA9IFwiZmFsc2VcIjtcblxuXHRnZXRKc29uVHlwZU5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXCJJbnB1dC5Ub2dnbGVcIjtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIudG9KU09OKCk7XG5cblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwidmFsdWVPblwiLCB0aGlzLnZhbHVlT24sIFwidHJ1ZVwiKTtcblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwidmFsdWVPZmZcIiwgdGhpcy52YWx1ZU9mZiwgXCJmYWxzZVwiKTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRwYXJzZShqc29uOiBhbnksIGVycm9ycz86IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4pIHtcblx0XHRzdXBlci5wYXJzZShqc29uLCBlcnJvcnMpO1xuXG5cdFx0dGhpcy50aXRsZSA9IGpzb25bXCJ0aXRsZVwiXTtcblxuXHRcdHRoaXMudmFsdWVPbiA9IFV0aWxzLmdldFZhbHVlT3JEZWZhdWx0PHN0cmluZz4oanNvbltcInZhbHVlT25cIl0sIHRoaXMudmFsdWVPbik7XG5cdFx0dGhpcy52YWx1ZU9mZiA9IFV0aWxzLmdldFZhbHVlT3JEZWZhdWx0PHN0cmluZz4oanNvbltcInZhbHVlT2ZmXCJdLCB0aGlzLnZhbHVlT2ZmKTtcblx0fVxuXG5cdGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLl9jaGVja2JveElucHV0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2NoZWNrYm94SW5wdXRFbGVtZW50LmNoZWNrZWQgPyB0aGlzLnZhbHVlT24gOiB0aGlzLnZhbHVlT2ZmO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2hvaWNlIHtcblx0dGl0bGU6IHN0cmluZztcblx0dmFsdWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nID0gdW5kZWZpbmVkLCB2YWx1ZTogc3RyaW5nID0gdW5kZWZpbmVkKSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRyZXR1cm4geyB0aXRsZTogdGhpcy50aXRsZSwgdmFsdWU6IHRoaXMudmFsdWUgfTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2hvaWNlU2V0SW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG5cdHByaXZhdGUgc3RhdGljIHVuaXF1ZUNhdGVnb3J5Q291bnRlciA9IDA7XG5cblx0cHJpdmF0ZSBzdGF0aWMgZ2V0VW5pcXVlQ2F0ZWdvcnlOYW1lKCk6IHN0cmluZyB7XG5cdFx0bGV0IHVuaXF1ZUN3dGVnb3J5TmFtZSA9IFwiX19hYy1jYXRlZ29yeVwiICsgQ2hvaWNlU2V0SW5wdXQudW5pcXVlQ2F0ZWdvcnlDb3VudGVyO1xuXG5cdFx0Q2hvaWNlU2V0SW5wdXQudW5pcXVlQ2F0ZWdvcnlDb3VudGVyKys7XG5cblx0XHRyZXR1cm4gdW5pcXVlQ3d0ZWdvcnlOYW1lO1xuXHR9XG5cblx0cHJpdmF0ZSBfc2VsZWN0RWxlbWVudDogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cdHByaXZhdGUgX3RvZ2dsZUlucHV0czogQXJyYXk8SFRNTElucHV0RWxlbWVudD47XG5cblx0cHJvdGVjdGVkIGludGVybmFsUmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcblx0XHRpZiAoIXRoaXMuaXNNdWx0aVNlbGVjdCkge1xuXHRcdFx0aWYgKHRoaXMuaXNDb21wYWN0KSB7XG5cdFx0XHRcdC8vIFJlbmRlciBhcyBhIGNvbWJvIGJveFxuXHRcdFx0XHR0aGlzLl9zZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblx0XHRcdFx0dGhpcy5fc2VsZWN0RWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmhvc3RDb25maWcubWFrZUNzc0NsYXNzTmFtZShcImFjLWlucHV0XCIsIFwiYWMtbXVsdGljaG9pY2VJbnB1dFwiKTtcblx0XHRcdFx0dGhpcy5fc2VsZWN0RWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG5cdFx0XHRcdGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRvcHRpb24uaGlkZGVuID0gdHJ1ZTtcblx0XHRcdFx0b3B0aW9uLnZhbHVlID0gXCJcIjtcblxuXHRcdFx0XHRpZiAodGhpcy5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdG9wdGlvbi50ZXh0ID0gdGhpcy5wbGFjZWhvbGRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKHRoaXMuX3NlbGVjdEVsZW1lbnQsIG9wdGlvbik7XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNob2ljZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdFx0XHRvcHRpb24udmFsdWUgPSB0aGlzLmNob2ljZXNbaV0udmFsdWU7XG5cdFx0XHRcdFx0b3B0aW9uLnRleHQgPSB0aGlzLmNob2ljZXNbaV0udGl0bGU7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgdGhpcy5jaG9pY2VzW2ldLnRpdGxlKTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLmNob2ljZXNbaV0udmFsdWUgPT0gdGhpcy5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0VXRpbHMuYXBwZW5kQ2hpbGQodGhpcy5fc2VsZWN0RWxlbWVudCwgb3B0aW9uKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX3NlbGVjdEVsZW1lbnQub25jaGFuZ2UgPSAoKSA9PiB7IHRoaXMudmFsdWVDaGFuZ2VkKCk7IH1cblxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0RWxlbWVudDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQvLyBSZW5kZXIgYXMgYSBzZXJpZXMgb2YgcmFkaW8gYnV0dG9uc1xuXHRcdFx0XHRsZXQgdW5pcXVlQ2F0ZWdvcnlOYW1lID0gQ2hvaWNlU2V0SW5wdXQuZ2V0VW5pcXVlQ2F0ZWdvcnlOYW1lKCk7XG5cblx0XHRcdFx0bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMuaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiYWMtaW5wdXRcIik7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuXHRcdFx0XHR0aGlzLl90b2dnbGVJbnB1dHMgPSBbXTtcblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hvaWNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxldCByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRcdHJhZGlvSW5wdXQuaWQgPSBnZW5lcmF0ZVVuaXF1ZUlkKCk7XG5cdFx0XHRcdFx0cmFkaW9JbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuXHRcdFx0XHRcdHJhZGlvSW5wdXQuc3R5bGUubWFyZ2luID0gXCIwXCI7XG5cdFx0XHRcdFx0cmFkaW9JbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0XHRcdFx0XHRyYWRpb0lucHV0LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xuXHRcdFx0XHRcdHJhZGlvSW5wdXQubmFtZSA9IFV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy5pZCkgPyB1bmlxdWVDYXRlZ29yeU5hbWUgOiB0aGlzLmlkO1xuXHRcdFx0XHRcdHJhZGlvSW5wdXQudmFsdWUgPSB0aGlzLmNob2ljZXNbaV0udmFsdWU7XG5cdFx0XHRcdFx0cmFkaW9JbnB1dC5zdHlsZS5mbGV4ID0gXCIwIDAgYXV0b1wiO1xuXHRcdFx0XHRcdHJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCB0aGlzLmNob2ljZXNbaV0udGl0bGUpO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMuY2hvaWNlc1tpXS52YWx1ZSA9PSB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0XHRcdFx0cmFkaW9JbnB1dC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyYWRpb0lucHV0Lm9uY2hhbmdlID0gKCkgPT4geyB0aGlzLnZhbHVlQ2hhbmdlZCgpOyB9XG5cblx0XHRcdFx0XHR0aGlzLl90b2dnbGVJbnB1dHMucHVzaChyYWRpb0lucHV0KTtcblxuXHRcdFx0XHRcdGxldCBsYWJlbCA9IG5ldyBMYWJlbCgpO1xuXHRcdFx0XHRcdGxhYmVsLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0XHRsYWJlbC5mb3JFbGVtZW50SWQgPSByYWRpb0lucHV0LmlkO1xuXHRcdFx0XHRcdGxhYmVsLmhvc3RDb25maWcgPSB0aGlzLmhvc3RDb25maWc7XG5cdFx0XHRcdFx0bGFiZWwudGV4dCA9IFV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy5jaG9pY2VzW2ldLnRpdGxlKSA/IFwiQ2hvaWNlIFwiICsgaSA6IHRoaXMuY2hvaWNlc1tpXS50aXRsZTtcblx0XHRcdFx0XHRsYWJlbC51c2VNYXJrZG93biA9IEFkYXB0aXZlQ2FyZC51c2VNYXJrZG93bkluUmFkaW9CdXR0b25BbmRDaGVja2JveDtcblxuXHRcdFx0XHRcdGxldCBsYWJlbEVsZW1lbnQgPSBsYWJlbC5yZW5kZXIoKTtcblx0XHRcdFx0XHRsYWJlbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0XHRcdFx0bGFiZWxFbGVtZW50LnN0eWxlLmZsZXggPSBcIjEgMSBhdXRvXCI7XG5cdFx0XHRcdFx0bGFiZWxFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBcIjZweFwiO1xuXHRcdFx0XHRcdGxhYmVsRWxlbWVudC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjtcblxuXHRcdFx0XHRcdGxldCBzcGFjZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRzcGFjZXJFbGVtZW50LnN0eWxlLndpZHRoID0gXCI2cHhcIjtcblxuXHRcdFx0XHRcdGxldCBjb21wb3VuZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRjb21wb3VuZElucHV0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuXHRcdFx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKGNvbXBvdW5kSW5wdXQsIHJhZGlvSW5wdXQpO1xuXHRcdFx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKGNvbXBvdW5kSW5wdXQsIHNwYWNlckVsZW1lbnQpO1xuXHRcdFx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKGNvbXBvdW5kSW5wdXQsIGxhYmVsRWxlbWVudCk7XG5cblx0XHRcdFx0XHRVdGlscy5hcHBlbmRDaGlsZChlbGVtZW50LCBjb21wb3VuZElucHV0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdC8vIFJlbmRlciBhcyBhIGxpc3Qgb2YgdG9nZ2xlIGlucHV0c1xuXHRcdFx0bGV0IGRlZmF1bHRWYWx1ZXMgPSB0aGlzLmRlZmF1bHRWYWx1ZSA/IHRoaXMuZGVmYXVsdFZhbHVlLnNwbGl0KHRoaXMuaG9zdENvbmZpZy5jaG9pY2VTZXRJbnB1dFZhbHVlU2VwYXJhdG9yKSA6IG51bGw7XG5cblx0XHRcdGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5ob3N0Q29uZmlnLm1ha2VDc3NDbGFzc05hbWUoXCJhYy1pbnB1dFwiKTtcblx0XHRcdGVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuXHRcdFx0dGhpcy5fdG9nZ2xlSW5wdXRzID0gW107XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaG9pY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBjaGVja2JveElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRjaGVja2JveElucHV0LmlkID0gZ2VuZXJhdGVVbmlxdWVJZCgpO1xuXHRcdFx0XHRjaGVja2JveElucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cdFx0XHRcdGNoZWNrYm94SW5wdXQuc3R5bGUubWFyZ2luID0gXCIwXCI7XG5cdFx0XHRcdGNoZWNrYm94SW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0XHRcdGNoZWNrYm94SW5wdXQuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XG5cdFx0XHRcdGNoZWNrYm94SW5wdXQudmFsdWUgPSB0aGlzLmNob2ljZXNbaV0udmFsdWU7XG5cdFx0XHRcdGNoZWNrYm94SW5wdXQuc3R5bGUuZmxleCA9IFwiMCAwIGF1dG9cIjtcblx0XHRcdFx0Y2hlY2tib3hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHRoaXMuY2hvaWNlc1tpXS50aXRsZSk7XG5cblx0XHRcdFx0aWYgKGRlZmF1bHRWYWx1ZXMpIHtcblx0XHRcdFx0XHRpZiAoZGVmYXVsdFZhbHVlcy5pbmRleE9mKHRoaXMuY2hvaWNlc1tpXS52YWx1ZSkgPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hlY2tib3hJbnB1dC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjaGVja2JveElucHV0Lm9uY2hhbmdlID0gKCkgPT4geyB0aGlzLnZhbHVlQ2hhbmdlZCgpOyB9XG5cblx0XHRcdFx0dGhpcy5fdG9nZ2xlSW5wdXRzLnB1c2goY2hlY2tib3hJbnB1dCk7XG5cblx0XHRcdFx0bGV0IGxhYmVsID0gbmV3IExhYmVsKCk7XG5cdFx0XHRcdGxhYmVsLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0bGFiZWwuZm9yRWxlbWVudElkID0gY2hlY2tib3hJbnB1dC5pZDtcblx0XHRcdFx0bGFiZWwuaG9zdENvbmZpZyA9IHRoaXMuaG9zdENvbmZpZztcblx0XHRcdFx0bGFiZWwudGV4dCA9IFV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy5jaG9pY2VzW2ldLnRpdGxlKSA/IFwiQ2hvaWNlIFwiICsgaSA6IHRoaXMuY2hvaWNlc1tpXS50aXRsZTtcblx0XHRcdFx0bGFiZWwudXNlTWFya2Rvd24gPSBBZGFwdGl2ZUNhcmQudXNlTWFya2Rvd25JblJhZGlvQnV0dG9uQW5kQ2hlY2tib3g7XG5cblx0XHRcdFx0bGV0IGxhYmVsRWxlbWVudCA9IGxhYmVsLnJlbmRlcigpO1xuXHRcdFx0XHRsYWJlbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0XHRcdGxhYmVsRWxlbWVudC5zdHlsZS5mbGV4ID0gXCIxIDEgYXV0b1wiO1xuXHRcdFx0XHQvLyBsYWJlbEVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IFwiNnB4XCI7XG5cdFx0XHRcdGxhYmVsRWxlbWVudC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjtcblxuXHRcdFx0XHRsZXQgc3BhY2VyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHNwYWNlckVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjZweFwiO1xuXG5cdFx0XHRcdGxldCBjb21wb3VuZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0Y29tcG91bmRJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdFx0XHRcdGNvbXBvdW5kSW5wdXQuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG5cblx0XHRcdFx0VXRpbHMuYXBwZW5kQ2hpbGQoY29tcG91bmRJbnB1dCwgY2hlY2tib3hJbnB1dCk7XG5cdFx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKGNvbXBvdW5kSW5wdXQsIHNwYWNlckVsZW1lbnQpO1xuXHRcdFx0XHRVdGlscy5hcHBlbmRDaGlsZChjb21wb3VuZElucHV0LCBsYWJlbEVsZW1lbnQpO1xuXG5cdFx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKGVsZW1lbnQsIGNvbXBvdW5kSW5wdXQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdH1cblxuXHRjaG9pY2VzOiBBcnJheTxDaG9pY2U+ID0gW107XG5cdGlzQ29tcGFjdDogYm9vbGVhbjtcblx0aXNNdWx0aVNlbGVjdDogYm9vbGVhbjtcblx0cGxhY2Vob2xkZXI6IHN0cmluZztcblxuXHRnZXRKc29uVHlwZU5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXCJJbnB1dC5DaG9pY2VTZXRcIjtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIudG9KU09OKCk7XG5cblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwicGxhY2Vob2xkZXJcIiwgdGhpcy5wbGFjZWhvbGRlcik7XG5cblx0XHRpZiAodGhpcy5jaG9pY2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBjaG9pY2VzID0gW107XG5cblx0XHRcdGZvciAobGV0IGNob2ljZSBvZiB0aGlzLmNob2ljZXMpIHtcblx0XHRcdFx0Y2hvaWNlcy5wdXNoKGNob2ljZS50b0pTT04oKSk7XG5cdFx0XHR9XG5cblx0XHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJjaG9pY2VzXCIsIGNob2ljZXMpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pc0NvbXBhY3QpIHtcblx0XHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJzdHlsZVwiLCBcImV4cGFuZGVkXCIsIGZhbHNlKTtcblx0XHR9XG5cblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwiaXNNdWx0aVNlbGVjdFwiLCB0aGlzLmlzTXVsdGlTZWxlY3QsIGZhbHNlKTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHR2YWxpZGF0ZSgpOiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+IHtcblx0XHR2YXIgcmVzdWx0OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+ID0gW107XG5cblx0XHRpZiAodGhpcy5jaG9pY2VzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXN1bHQgPSBbeyBlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLkNvbGxlY3Rpb25DYW50QmVFbXB0eSwgbWVzc2FnZTogXCJBbiBJbnB1dC5DaG9pY2VTZXQgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaG9pY2UgZGVmaW5lZC5cIiB9XTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hvaWNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKCF0aGlzLmNob2ljZXNbaV0udGl0bGUgfHwgIXRoaXMuY2hvaWNlc1tpXS52YWx1ZSkge1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQuY29uY2F0KFt7IGVycm9yOiBFbnVtcy5WYWxpZGF0aW9uRXJyb3IuUHJvcGVydHlDYW50QmVOdWxsLCBtZXNzYWdlOiBcIkFsbCBjaG9pY2VzIGluIGFuIElucHV0LkNob2ljZVNldCBtdXN0IGhhdmUgdGhlaXIgdGl0bGUgYW5kIHZhbHVlIHByb3BlcnRpZXMgc2V0LlwiIH1dKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cGFyc2UoanNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSB7XG5cdFx0c3VwZXIucGFyc2UoanNvbiwgZXJyb3JzKTtcblxuXHRcdHRoaXMuaXNDb21wYWN0ID0gIShqc29uW1wic3R5bGVcIl0gPT09IFwiZXhwYW5kZWRcIik7XG5cdFx0dGhpcy5pc011bHRpU2VsZWN0ID0ganNvbltcImlzTXVsdGlTZWxlY3RcIl07XG5cdFx0dGhpcy5wbGFjZWhvbGRlciA9IGpzb25bXCJwbGFjZWhvbGRlclwiXTtcblxuXHRcdHRoaXMuY2hvaWNlcyA9IFtdO1xuXG5cdFx0aWYgKGpzb25bXCJjaG9pY2VzXCJdICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIGNob2ljZUFycmF5ID0ganNvbltcImNob2ljZXNcIl0gYXMgQXJyYXk8YW55PjtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaG9pY2VBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgY2hvaWNlID0gbmV3IENob2ljZSgpO1xuXG5cdFx0XHRcdGNob2ljZS50aXRsZSA9IGNob2ljZUFycmF5W2ldW1widGl0bGVcIl07XG5cdFx0XHRcdGNob2ljZS52YWx1ZSA9IGNob2ljZUFycmF5W2ldW1widmFsdWVcIl07XG5cblx0XHRcdFx0dGhpcy5jaG9pY2VzLnB1c2goY2hvaWNlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRnZXQgdmFsdWUoKTogc3RyaW5nIHtcblx0XHRpZiAoIXRoaXMuaXNNdWx0aVNlbGVjdCkge1xuXHRcdFx0aWYgKHRoaXMuaXNDb21wYWN0KSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9zZWxlY3RFbGVtZW50ID8gdGhpcy5fc2VsZWN0RWxlbWVudC52YWx1ZSA6IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKCF0aGlzLl90b2dnbGVJbnB1dHMgfHwgdGhpcy5fdG9nZ2xlSW5wdXRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3RvZ2dsZUlucHV0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmICh0aGlzLl90b2dnbGVJbnB1dHNbaV0uY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3RvZ2dsZUlucHV0c1tpXS52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoIXRoaXMuX3RvZ2dsZUlucHV0cyB8fCB0aGlzLl90b2dnbGVJbnB1dHMubGVuZ3RoID09IDApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHZhciByZXN1bHQ6IHN0cmluZyA9IFwiXCI7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fdG9nZ2xlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0aGlzLl90b2dnbGVJbnB1dHNbaV0uY2hlY2tlZCkge1xuXHRcdFx0XHRcdGlmIChyZXN1bHQgIT0gXCJcIikge1xuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IHRoaXMuaG9zdENvbmZpZy5jaG9pY2VTZXRJbnB1dFZhbHVlU2VwYXJhdG9yO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlc3VsdCArPSB0aGlzLl90b2dnbGVJbnB1dHNbaV0udmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdCA9PSBcIlwiID8gbnVsbCA6IHJlc3VsdDtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bWJlcklucHV0IGV4dGVuZHMgSW5wdXQge1xuXHRwcml2YXRlIF9udW1iZXJJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cblx0cHJvdGVjdGVkIGludGVybmFsUmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcblx0XHR0aGlzLl9udW1iZXJJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0dGhpcy5fbnVtYmVySW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XG5cdFx0dGhpcy5fbnVtYmVySW5wdXRFbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMuaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiYWMtaW5wdXRcIiwgXCJhYy1udW1iZXJJbnB1dFwiKTtcblx0XHR0aGlzLl9udW1iZXJJbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWluXCIsIHRoaXMubWluKTtcblx0XHR0aGlzLl9udW1iZXJJbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4XCIsIHRoaXMubWF4KTtcblx0XHR0aGlzLl9udW1iZXJJbnB1dEVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblx0XHR0aGlzLl9udW1iZXJJbnB1dEVsZW1lbnQudGFiSW5kZXggPSAwO1xuXG5cdFx0aWYgKCFVdGlscy5pc051bGxPckVtcHR5KHRoaXMuZGVmYXVsdFZhbHVlKSkge1xuXHRcdFx0dGhpcy5fbnVtYmVySW5wdXRFbGVtZW50LnZhbHVlID0gdGhpcy5kZWZhdWx0VmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKCFVdGlscy5pc051bGxPckVtcHR5KHRoaXMucGxhY2Vob2xkZXIpKSB7XG5cdFx0XHR0aGlzLl9udW1iZXJJbnB1dEVsZW1lbnQucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuXHRcdFx0dGhpcy5fbnVtYmVySW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgdGhpcy5wbGFjZWhvbGRlcik7XG5cdFx0fVxuXG5cdFx0dGhpcy5fbnVtYmVySW5wdXRFbGVtZW50Lm9uaW5wdXQgPSAoKSA9PiB7IHRoaXMudmFsdWVDaGFuZ2VkKCk7IH1cblxuXHRcdHJldHVybiB0aGlzLl9udW1iZXJJbnB1dEVsZW1lbnQ7XG5cdH1cblxuXHRtaW46IHN0cmluZztcblx0bWF4OiBzdHJpbmc7XG5cdHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cblx0Z2V0SnNvblR5cGVOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiSW5wdXQuTnVtYmVyXCI7XG5cdH1cblxuXHR0b0pTT04oKSB7XG5cdFx0bGV0IHJlc3VsdCA9IHN1cGVyLnRvSlNPTigpO1xuXG5cdFx0VXRpbHMuc2V0UHJvcGVydHkocmVzdWx0LCBcInBsYWNlaG9sZGVyXCIsIHRoaXMucGxhY2Vob2xkZXIpO1xuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJtaW5cIiwgdGhpcy5taW4pO1xuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJtYXhcIiwgdGhpcy5tYXgpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHBhcnNlKGpzb246IGFueSwgZXJyb3JzPzogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPikge1xuXHRcdHN1cGVyLnBhcnNlKGpzb24sIGVycm9ycyk7XG5cblx0XHR0aGlzLnBsYWNlaG9sZGVyID0ganNvbltcInBsYWNlaG9sZGVyXCJdO1xuXHRcdHRoaXMubWluID0ganNvbltcIm1pblwiXTtcblx0XHR0aGlzLm1heCA9IGpzb25bXCJtYXhcIl07XG5cdH1cblxuXHRnZXQgdmFsdWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fbnVtYmVySW5wdXRFbGVtZW50ID8gdGhpcy5fbnVtYmVySW5wdXRFbGVtZW50LnZhbHVlIDogbnVsbDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZUlucHV0IGV4dGVuZHMgSW5wdXQge1xuXHRwcml2YXRlIF9kYXRlSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuXG5cdHByb3RlY3RlZCBpbnRlcm5hbFJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG5cdFx0dGhpcy5fZGF0ZUlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHR0aGlzLl9kYXRlSW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXHRcdHRoaXMuX2RhdGVJbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5ob3N0Q29uZmlnLm1ha2VDc3NDbGFzc05hbWUoXCJhYy1pbnB1dFwiLCBcImFjLWRhdGVJbnB1dFwiKTtcblx0XHR0aGlzLl9kYXRlSW5wdXRFbGVtZW50LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cblx0XHRpZiAoIVV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy5kZWZhdWx0VmFsdWUpKSB7XG5cdFx0XHR0aGlzLl9kYXRlSW5wdXRFbGVtZW50LnZhbHVlID0gdGhpcy5kZWZhdWx0VmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGVJbnB1dEVsZW1lbnQ7XG5cdH1cblxuXHRnZXRKc29uVHlwZU5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXCJJbnB1dC5EYXRlXCI7XG5cdH1cblxuXHRnZXQgdmFsdWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fZGF0ZUlucHV0RWxlbWVudCA/IHRoaXMuX2RhdGVJbnB1dEVsZW1lbnQudmFsdWUgOiBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUaW1lSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG5cdHByaXZhdGUgX3RpbWVJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cblx0cHJvdGVjdGVkIGludGVybmFsUmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcblx0XHR0aGlzLl90aW1lSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdHRoaXMuX3RpbWVJbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRpbWVcIik7XG5cdFx0dGhpcy5fdGltZUlucHV0RWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmhvc3RDb25maWcubWFrZUNzc0NsYXNzTmFtZShcImFjLWlucHV0XCIsIFwiYWMtdGltZUlucHV0XCIpO1xuXHRcdHRoaXMuX3RpbWVJbnB1dEVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuXHRcdGlmICghVXRpbHMuaXNOdWxsT3JFbXB0eSh0aGlzLmRlZmF1bHRWYWx1ZSkpIHtcblx0XHRcdHRoaXMuX3RpbWVJbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLmRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fdGltZUlucHV0RWxlbWVudDtcblx0fVxuXG5cdGdldEpzb25UeXBlTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBcIklucHV0LlRpbWVcIjtcblx0fVxuXG5cdGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLl90aW1lSW5wdXRFbGVtZW50ID8gdGhpcy5fdGltZUlucHV0RWxlbWVudC52YWx1ZSA6IG51bGw7XG5cdH1cbn1cblxuZW51bSBBY3Rpb25CdXR0b25TdGF0ZSB7XG5cdE5vcm1hbCxcblx0RXhwYW5kZWQsXG5cdFN1YmR1ZWRcbn1cblxuY2xhc3MgQWN0aW9uQnV0dG9uIHtcblx0cHJpdmF0ZSBfcGFyZW50Q29udGFpbmVyU3R5bGU6IHN0cmluZztcblx0cHJpdmF0ZSBfYWN0aW9uOiBBY3Rpb247XG5cdHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxCdXR0b25FbGVtZW50ID0gbnVsbDtcblx0cHJpdmF0ZSBfc3RhdGU6IEFjdGlvbkJ1dHRvblN0YXRlID0gQWN0aW9uQnV0dG9uU3RhdGUuTm9ybWFsO1xuXG5cdHByaXZhdGUgdXBkYXRlQ3NzU3R5bGUoKSB7XG5cdFx0bGV0IGhvc3RDb25maWcgPSB0aGlzLmFjdGlvbi5wYXJlbnQuaG9zdENvbmZpZztcblxuXHRcdHRoaXMuYWN0aW9uLnJlbmRlcmVkRWxlbWVudC5jbGFzc05hbWUgPSBob3N0Q29uZmlnLm1ha2VDc3NDbGFzc05hbWUoXCJhYy1wdXNoQnV0dG9uXCIpO1xuXHRcdHRoaXMuYWN0aW9uLnJlbmRlcmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic3R5bGUtXCIgKyB0aGlzLl9wYXJlbnRDb250YWluZXJTdHlsZSk7XG5cblx0XHRpZiAodGhpcy5hY3Rpb24gaW5zdGFuY2VvZiBTaG93Q2FyZEFjdGlvbikge1xuXHRcdFx0dGhpcy5hY3Rpb24ucmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiZXhwYW5kYWJsZVwiKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3Rpb24ucmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiZXhwYW5kZWRcIikpO1xuXHRcdHRoaXMuYWN0aW9uLnJlbmRlcmVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGhvc3RDb25maWcubWFrZUNzc0NsYXNzTmFtZShcInN1YmR1ZWRcIikpO1xuXG5cdFx0c3dpdGNoICh0aGlzLl9zdGF0ZSkge1xuXHRcdFx0Y2FzZSBBY3Rpb25CdXR0b25TdGF0ZS5FeHBhbmRlZDpcblx0XHRcdFx0dGhpcy5hY3Rpb24ucmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiZXhwYW5kZWRcIikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQWN0aW9uQnV0dG9uU3RhdGUuU3ViZHVlZDpcblx0XHRcdFx0dGhpcy5hY3Rpb24ucmVuZGVyZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwic3ViZHVlZFwiKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmFjdGlvbi5pc1ByaW1hcnkpIHtcblx0XHRcdHRoaXMuYWN0aW9uLnJlbmRlcmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKGhvc3RDb25maWcubWFrZUNzc0NsYXNzTmFtZShcInByaW1hcnlcIikpO1xuXHRcdH1cblxuXHR9XG5cblx0cmVhZG9ubHkgYWN0aW9uOiBBY3Rpb247XG5cblx0Y29uc3RydWN0b3IoYWN0aW9uOiBBY3Rpb24sIHBhcmVudENvbnRhaW5lclN0eWxlOiBzdHJpbmcpIHtcblx0XHR0aGlzLmFjdGlvbiA9IGFjdGlvbjtcblx0XHR0aGlzLl9wYXJlbnRDb250YWluZXJTdHlsZSA9IHBhcmVudENvbnRhaW5lclN0eWxlO1xuXHR9XG5cblx0b25DbGljazogKGFjdGlvbkJ1dHRvbjogQWN0aW9uQnV0dG9uKSA9PiB2b2lkID0gbnVsbDtcblxuXHRyZW5kZXIoYWxpZ25tZW50OiBFbnVtcy5BY3Rpb25BbGlnbm1lbnQpIHtcblx0XHR0aGlzLmFjdGlvbi5yZW5kZXIoKTtcblx0XHR0aGlzLmFjdGlvbi5yZW5kZXJlZEVsZW1lbnQuc3R5bGUuZmxleCA9IGFsaWdubWVudCA9PT0gRW51bXMuQWN0aW9uQWxpZ25tZW50LlN0cmV0Y2ggPyBcIjAgMSAxMDAlXCIgOiBcIjAgMSBhdXRvXCI7XG5cdFx0dGhpcy5hY3Rpb24ucmVuZGVyZWRFbGVtZW50Lm9uY2xpY2sgPSAoZSkgPT4geyB0aGlzLmNsaWNrKCk7IH07XG5cblx0XHR0aGlzLnVwZGF0ZUNzc1N0eWxlKCk7XG5cdH1cblxuXHRjbGljaygpIHtcblx0XHRpZiAodGhpcy5vbkNsaWNrICE9IG51bGwpIHtcblx0XHRcdHRoaXMub25DbGljayh0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgc3RhdGUoKTogQWN0aW9uQnV0dG9uU3RhdGUge1xuXHRcdHJldHVybiB0aGlzLl9zdGF0ZTtcblx0fVxuXG5cdHNldCBzdGF0ZSh2YWx1ZTogQWN0aW9uQnV0dG9uU3RhdGUpIHtcblx0XHR0aGlzLl9zdGF0ZSA9IHZhbHVlO1xuXG5cdFx0dGhpcy51cGRhdGVDc3NTdHlsZSgpO1xuXHR9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBY3Rpb24gaW1wbGVtZW50cyBJQ2FyZE9iamVjdCB7XG5cdHByaXZhdGUgX3Nob3VsZEZhbGxiYWNrOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX3BhcmVudDogQ2FyZEVsZW1lbnQgPSBudWxsO1xuXHRwcml2YXRlIF9hY3Rpb25Db2xsZWN0aW9uOiBBY3Rpb25Db2xsZWN0aW9uID0gbnVsbDsgLy8gaG9sZCB0aGUgcmVmZXJlbmNlIHRvIGl0cyBhY3Rpb24gY29sbGVjdGlvblxuXHRwcml2YXRlIF9yZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcblxuXHRwcml2YXRlIHNldENvbGxlY3Rpb24oYWN0aW9uQ29sbGVjdGlvbjogQWN0aW9uQ29sbGVjdGlvbikge1xuXHRcdHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24gPSBhY3Rpb25Db2xsZWN0aW9uO1xuXHR9XG5cblx0cHJvdGVjdGVkIGFkZENzc0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0XHQvLyBEbyBub3RoaW5nIGluIGJhc2UgaW1wbGVtZW50YXRpb25cblx0fVxuXG5cdGFic3RyYWN0IGdldEpzb25UeXBlTmFtZSgpOiBzdHJpbmc7XG5cblx0cmVhZG9ubHkgcmVxdWlyZXMgPSBuZXcgSG9zdENvbmZpZy5Ib3N0Q2FwYWJpbGl0aWVzKCk7XG5cblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0aWNvblVybDogc3RyaW5nO1xuXHRpc1ByaW1hcnk6IGJvb2xlYW47XG5cblx0b25FeGVjdXRlOiAoc2VuZGVyOiBBY3Rpb24pID0+IHZvaWQ7XG5cblx0dG9KU09OKCkge1xuXHRcdGxldCByZXN1bHQgPSB7fTtcblxuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJ0eXBlXCIsIHRoaXMuZ2V0SnNvblR5cGVOYW1lKCkpO1xuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJpZFwiLCB0aGlzLmlkKTtcblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwidGl0bGVcIiwgdGhpcy50aXRsZSk7XG5cdFx0VXRpbHMuc2V0UHJvcGVydHkocmVzdWx0LCBcImljb25VcmxcIiwgdGhpcy5pY29uVXJsKTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly8gQ2FjaGUgaG9zdENvbmZpZyBmb3IgcGVyZlxuXHRcdGxldCBob3N0Q29uZmlnID0gdGhpcy5wYXJlbnQuaG9zdENvbmZpZztcblxuXHRcdHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRidXR0b25FbGVtZW50LmNsYXNzTmFtZSA9IGhvc3RDb25maWcubWFrZUNzc0NsYXNzTmFtZShcImFjLXB1c2hCdXR0b25cIik7XG5cblx0XHR0aGlzLmFkZENzc0NsYXNzZXMoYnV0dG9uRWxlbWVudCk7XG5cblx0XHRidXR0b25FbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgdGhpcy50aXRsZSk7XG5cdFx0YnV0dG9uRWxlbWVudC50eXBlID0gXCJidXR0b25cIjtcblx0XHRidXR0b25FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHRidXR0b25FbGVtZW50LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuXHRcdGJ1dHRvbkVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuXG5cdFx0bGV0IGhhc1RpdGxlID0gIVV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy50aXRsZSk7XG5cblx0XHRsZXQgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0aXRsZUVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRcdHRpdGxlRWxlbWVudC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XG5cblx0XHRpZiAoIShob3N0Q29uZmlnLmFjdGlvbnMuaWNvblBsYWNlbWVudCA9PSBFbnVtcy5BY3Rpb25JY29uUGxhY2VtZW50LkFib3ZlVGl0bGUgfHwgaG9zdENvbmZpZy5hY3Rpb25zLmFsbG93VGl0bGVUb1dyYXApKSB7XG5cdFx0XHR0aXRsZUVsZW1lbnQuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG5cdFx0fVxuXG5cdFx0aWYgKGhhc1RpdGxlKSB7XG5cdFx0XHR0aXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcblx0XHR9XG5cblx0XHRpZiAoVXRpbHMuaXNOdWxsT3JFbXB0eSh0aGlzLmljb25VcmwpKSB7XG5cdFx0XHRidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJub0ljb25cIik7XG5cblx0XHRcdGJ1dHRvbkVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRsZXQgaWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdFx0aWNvbkVsZW1lbnQuc3JjID0gdGhpcy5pY29uVXJsO1xuXHRcdFx0aWNvbkVsZW1lbnQuc3R5bGUud2lkdGggPSBob3N0Q29uZmlnLmFjdGlvbnMuaWNvblNpemUgKyBcInB4XCI7XG5cdFx0XHRpY29uRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBob3N0Q29uZmlnLmFjdGlvbnMuaWNvblNpemUgKyBcInB4XCI7XG5cdFx0XHRpY29uRWxlbWVudC5zdHlsZS5mbGV4ID0gXCIwIDAgYXV0b1wiO1xuXG5cdFx0XHRpZiAoaG9zdENvbmZpZy5hY3Rpb25zLmljb25QbGFjZW1lbnQgPT0gRW51bXMuQWN0aW9uSWNvblBsYWNlbWVudC5BYm92ZVRpdGxlKSB7XG5cdFx0XHRcdGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImljb25BYm92ZVwiKTtcblx0XHRcdFx0YnV0dG9uRWxlbWVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcblxuXHRcdFx0XHRpZiAoaGFzVGl0bGUpIHtcblx0XHRcdFx0XHRpY29uRWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjRweFwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaWNvbkxlZnRcIik7XG5cblx0XHRcdFx0aWYgKGhhc1RpdGxlKSB7XG5cdFx0XHRcdFx0aWNvbkVsZW1lbnQuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjRweFwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGJ1dHRvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuXHRcdFx0YnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3JlbmRlcmVkRWxlbWVudCA9IGJ1dHRvbkVsZW1lbnQ7XG5cdH1cblxuXHRzZXRQYXJlbnQodmFsdWU6IENhcmRFbGVtZW50KSB7XG5cdFx0dGhpcy5fcGFyZW50ID0gdmFsdWU7XG5cdH1cblxuXHRleGVjdXRlKCkge1xuXHRcdGlmICh0aGlzLm9uRXhlY3V0ZSkge1xuXHRcdFx0dGhpcy5vbkV4ZWN1dGUodGhpcyk7XG5cdFx0fVxuXG5cdFx0cmFpc2VFeGVjdXRlQWN0aW9uRXZlbnQodGhpcyk7XG5cdH1cblxuXHQvLyBFeHBhbmQgdGhlIGFjdGlvbiBjYXJkIHBhbmUgd2l0aCBhIGlubGluZSBzdGF0dXMgY2FyZFxuXHQvLyBOdWxsIHN0YXR1cyB3aWxsIGNsZWFyIHRoZSBzdGF0dXMgYmFyXG5cdHNldFN0YXR1cyhzdGF0dXM6IGFueSkge1xuXHRcdGlmICh0aGlzLl9hY3Rpb25Db2xsZWN0aW9uID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoc3RhdHVzKSB7XG5cdFx0XHRsZXQgc3RhdHVzQ2FyZCA9IG5ldyBJbmxpbmVBZGFwdGl2ZUNhcmQoKTtcblx0XHRcdHN0YXR1c0NhcmQucGFyc2Uoc3RhdHVzKTtcblx0XHRcdHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24uc2hvd1N0YXR1c0NhcmQoc3RhdHVzQ2FyZCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fYWN0aW9uQ29sbGVjdGlvbi5oaWRlU3RhdHVzQ2FyZCgpO1xuXHRcdH1cblx0fVxuXG5cdHZhbGlkYXRlKCk6IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHByZXBhcmUoaW5wdXRzOiBBcnJheTxJbnB1dD4pIHtcblx0XHQvLyBEbyBub3RoaW5nIGluIGJhc2UgaW1wbGVtZW50YXRpb25cblx0fTtcblxuXHRwYXJzZShqc29uOiBhbnksIGVycm9ycz86IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4pIHtcblx0XHRyYWlzZVBhcnNlQWN0aW9uRXZlbnQodGhpcywganNvbiwgZXJyb3JzKTtcblxuXHRcdHRoaXMucmVxdWlyZXMucGFyc2UoanNvbltcInJlcXVpcmVzXCJdLCBlcnJvcnMpO1xuXHRcdHRoaXMuaWQgPSBqc29uW1wiaWRcIl07XG5cblx0XHRpZiAoIWpzb25bXCJ0aXRsZVwiXSAmJiBqc29uW1widGl0bGVcIl0gIT09IFwiXCIpIHtcblx0XHRcdHJhaXNlUGFyc2VFcnJvcihcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVycm9yOiBFbnVtcy5WYWxpZGF0aW9uRXJyb3IuUHJvcGVydHlDYW50QmVOdWxsLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IFwiQWN0aW9ucyBzaG91bGQgYWx3YXlzIGhhdmUgYSB0aXRsZS5cIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcnNcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50aXRsZSA9IGpzb25bXCJ0aXRsZVwiXTtcblx0XHR0aGlzLmljb25VcmwgPSBqc29uW1wiaWNvblVybFwiXTtcblx0fVxuXG5cdHJlbW92ZSgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5fYWN0aW9uQ29sbGVjdGlvbikge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24ucmVtb3ZlQWN0aW9uKHRoaXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGdldEFsbElucHV0cygpOiBBcnJheTxJbnB1dD4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGdldFJlc291cmNlSW5mb3JtYXRpb24oKTogQXJyYXk8SVJlc291cmNlSW5mb3JtYXRpb24+IHtcblx0XHRpZiAoIVV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy5pY29uVXJsKSkge1xuXHRcdFx0cmV0dXJuIFt7IHVybDogdGhpcy5pY29uVXJsLCBtaW1lVHlwZTogXCJpbWFnZVwiIH1dXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0fVxuXG5cdGdldEFjdGlvbkJ5SWQoaWQ6IHN0cmluZyk6IEFjdGlvbiB7XG5cdFx0aWYgKHRoaXMuaWQgPT0gaWQpIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0fVxuXG5cdGdldCBwYXJlbnQoKTogQ2FyZEVsZW1lbnQge1xuXHRcdHJldHVybiB0aGlzLl9wYXJlbnQ7XG5cdH1cblxuXHRnZXQgcmVuZGVyZWRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyZWRFbGVtZW50O1xuXHR9XG5cblx0c2hvdWxkRmFsbGJhY2soKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX3Nob3VsZEZhbGxiYWNrIHx8ICF0aGlzLnJlcXVpcmVzLmFyZUFsbE1ldCh0aGlzLnBhcmVudC5ob3N0Q29uZmlnLmhvc3RDYXBhYmlsaXRpZXMpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJtaXRBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuXHRwcml2YXRlIF9pc1ByZXBhcmVkOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX29yaWdpbmFsRGF0YTogT2JqZWN0O1xuXHRwcml2YXRlIF9wcm9jZXNzZWREYXRhOiBPYmplY3Q7XG5cblx0Z2V0SnNvblR5cGVOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiQWN0aW9uLlN1Ym1pdFwiO1xuXHR9XG5cblx0dG9KU09OKCkge1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci50b0pTT04oKTtcblxuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJkYXRhXCIsIHRoaXMuX29yaWdpbmFsRGF0YSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cHJlcGFyZShpbnB1dHM6IEFycmF5PElucHV0Pikge1xuXHRcdGlmICh0aGlzLl9vcmlnaW5hbERhdGEpIHtcblx0XHRcdHRoaXMuX3Byb2Nlc3NlZERhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX29yaWdpbmFsRGF0YSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuX3Byb2Nlc3NlZERhdGEgPSB7fTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlucHV0VmFsdWUgPSBpbnB1dHNbaV0udmFsdWU7XG5cblx0XHRcdGlmIChpbnB1dFZhbHVlICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy5fcHJvY2Vzc2VkRGF0YVtpbnB1dHNbaV0uaWRdID0gaW5wdXRzW2ldLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX2lzUHJlcGFyZWQgPSB0cnVlO1xuXHR9XG5cblx0cGFyc2UoanNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSB7XG5cdFx0c3VwZXIucGFyc2UoanNvbiwgZXJyb3JzKTtcblxuXHRcdHRoaXMuZGF0YSA9IGpzb25bXCJkYXRhXCJdO1xuXHR9XG5cblx0Z2V0IGRhdGEoKTogT2JqZWN0IHtcblx0XHRyZXR1cm4gdGhpcy5faXNQcmVwYXJlZCA/IHRoaXMuX3Byb2Nlc3NlZERhdGEgOiB0aGlzLl9vcmlnaW5hbERhdGE7XG5cdH1cblxuXHRzZXQgZGF0YSh2YWx1ZTogT2JqZWN0KSB7XG5cdFx0dGhpcy5fb3JpZ2luYWxEYXRhID0gdmFsdWU7XG5cdFx0dGhpcy5faXNQcmVwYXJlZCA9IGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBPcGVuVXJsQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcblx0dXJsOiBzdHJpbmc7XG5cblx0Z2V0SnNvblR5cGVOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiQWN0aW9uLk9wZW5VcmxcIjtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIudG9KU09OKCk7XG5cblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwidXJsXCIsIHRoaXMudXJsKTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHR2YWxpZGF0ZSgpOiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+IHtcblx0XHRpZiAoIXRoaXMudXJsKSB7XG5cdFx0XHRyZXR1cm4gW3sgZXJyb3I6IEVudW1zLlZhbGlkYXRpb25FcnJvci5Qcm9wZXJ0eUNhbnRCZU51bGwsIG1lc3NhZ2U6IFwiQW4gQWN0aW9uLk9wZW5VcmwgbXVzdCBoYXZlIGl0cyB1cmwgcHJvcGVydHkgc2V0LlwiIH1dO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdH1cblxuXHRwYXJzZShqc29uOiBhbnksIGVycm9ycz86IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4pIHtcblx0XHRzdXBlci5wYXJzZShqc29uLCBlcnJvcnMpO1xuXG5cdFx0dGhpcy51cmwgPSBqc29uW1widXJsXCJdO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBIdHRwSGVhZGVyIHtcblx0cHJpdmF0ZSBfdmFsdWUgPSBuZXcgVXRpbHMuU3RyaW5nV2l0aFN1YnN0aXR1dGlvbnMoKTtcblxuXHRuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nID0gXCJcIiwgdmFsdWU6IHN0cmluZyA9IFwiXCIpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRyZXR1cm4geyBuYW1lOiB0aGlzLm5hbWUsIHZhbHVlOiB0aGlzLl92YWx1ZS5nZXRPcmlnaW5hbCgpIH07XG5cdH1cblxuXHRwcmVwYXJlKGlucHV0czogQXJyYXk8SW5wdXQ+KSB7XG5cdFx0dGhpcy5fdmFsdWUuc3Vic3RpdHV0ZUlucHV0VmFsdWVzKGlucHV0cywgVXRpbHMuQ29udGVudFR5cGVzLmFwcGxpY2F0aW9uWFd3d0Zvcm1VcmxlbmNvZGVkKTtcblx0fVxuXG5cdGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLl92YWx1ZS5nZXQoKTtcblx0fVxuXG5cdHNldCB2YWx1ZShuZXdWYWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5fdmFsdWUuc2V0KG5ld1ZhbHVlKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSHR0cEFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG5cdHByaXZhdGUgX3VybCA9IG5ldyBVdGlscy5TdHJpbmdXaXRoU3Vic3RpdHV0aW9ucygpO1xuXHRwcml2YXRlIF9ib2R5ID0gbmV3IFV0aWxzLlN0cmluZ1dpdGhTdWJzdGl0dXRpb25zKCk7XG5cdHByaXZhdGUgX2hlYWRlcnM6IEFycmF5PEh0dHBIZWFkZXI+ID0gW107XG5cblx0bWV0aG9kOiBzdHJpbmc7XG5cblx0Z2V0SnNvblR5cGVOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiQWN0aW9uLkh0dHBcIjtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIudG9KU09OKCk7XG5cblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwibWV0aG9kXCIsIHRoaXMubWV0aG9kKTtcblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwidXJsXCIsIHRoaXMuX3VybC5nZXRPcmlnaW5hbCgpKTtcblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwiYm9keVwiLCB0aGlzLl9ib2R5LmdldE9yaWdpbmFsKCkpO1xuXG5cdFx0aWYgKHRoaXMuX2hlYWRlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IGhlYWRlcnMgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgaGVhZGVyIG9mIHRoaXMuX2hlYWRlcnMpIHtcblx0XHRcdFx0aGVhZGVycy5wdXNoKGhlYWRlci50b0pTT04oKSk7XG5cdFx0XHR9XG5cblx0XHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJoZWFkZXJzXCIsIGhlYWRlcnMpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHR2YWxpZGF0ZSgpOiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+IHtcblx0XHR2YXIgcmVzdWx0OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+ID0gW107XG5cblx0XHRpZiAoIXRoaXMudXJsKSB7XG5cdFx0XHRyZXN1bHQgPSBbeyBlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLlByb3BlcnR5Q2FudEJlTnVsbCwgbWVzc2FnZTogXCJBbiBBY3Rpb24uSHR0cCBtdXN0IGhhdmUgaXRzIHVybCBwcm9wZXJ0eSBzZXQuXCIgfV07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaGVhZGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGVhZGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoIXRoaXMuaGVhZGVyc1tpXS5uYW1lIHx8ICF0aGlzLmhlYWRlcnNbaV0udmFsdWUpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQuY29uY2F0KFt7IGVycm9yOiBFbnVtcy5WYWxpZGF0aW9uRXJyb3IuUHJvcGVydHlDYW50QmVOdWxsLCBtZXNzYWdlOiBcIkFsbCBoZWFkZXJzIG9mIGFuIEFjdGlvbi5IdHRwIG11c3QgaGF2ZSB0aGVpciBuYW1lIGFuZCB2YWx1ZSBwcm9wZXJ0aWVzIHNldC5cIiB9XSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cHJlcGFyZShpbnB1dHM6IEFycmF5PElucHV0Pikge1xuXHRcdHRoaXMuX3VybC5zdWJzdGl0dXRlSW5wdXRWYWx1ZXMoaW5wdXRzLCBVdGlscy5Db250ZW50VHlwZXMuYXBwbGljYXRpb25YV3d3Rm9ybVVybGVuY29kZWQpO1xuXG5cdFx0bGV0IGNvbnRlbnRUeXBlID0gVXRpbHMuQ29udGVudFR5cGVzLmFwcGxpY2F0aW9uSnNvbjtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5faGVhZGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5faGVhZGVyc1tpXS5wcmVwYXJlKGlucHV0cyk7XG5cblx0XHRcdGlmICh0aGlzLl9oZWFkZXJzW2ldLm5hbWUgJiYgdGhpcy5faGVhZGVyc1tpXS5uYW1lLnRvTG93ZXJDYXNlKCkgPT0gXCJjb250ZW50LXR5cGVcIikge1xuXHRcdFx0XHRjb250ZW50VHlwZSA9IHRoaXMuX2hlYWRlcnNbaV0udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fYm9keS5zdWJzdGl0dXRlSW5wdXRWYWx1ZXMoaW5wdXRzLCBjb250ZW50VHlwZSk7XG5cdH07XG5cblx0cGFyc2UoanNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSB7XG5cdFx0c3VwZXIucGFyc2UoanNvbiwgZXJyb3JzKTtcblxuXHRcdHRoaXMudXJsID0ganNvbltcInVybFwiXTtcblx0XHR0aGlzLm1ldGhvZCA9IGpzb25bXCJtZXRob2RcIl07XG5cdFx0dGhpcy5ib2R5ID0ganNvbltcImJvZHlcIl07XG5cblx0XHR0aGlzLl9oZWFkZXJzID0gW107XG5cblx0XHRpZiAoanNvbltcImhlYWRlcnNcIl0gIT0gbnVsbCkge1xuXHRcdFx0dmFyIGpzb25IZWFkZXJzID0ganNvbltcImhlYWRlcnNcIl0gYXMgQXJyYXk8YW55PjtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBqc29uSGVhZGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgaHR0cEhlYWRlciA9IG5ldyBIdHRwSGVhZGVyKCk7XG5cblx0XHRcdFx0aHR0cEhlYWRlci5uYW1lID0ganNvbkhlYWRlcnNbaV1bXCJuYW1lXCJdO1xuXHRcdFx0XHRodHRwSGVhZGVyLnZhbHVlID0ganNvbkhlYWRlcnNbaV1bXCJ2YWx1ZVwiXTtcblxuXHRcdFx0XHR0aGlzLmhlYWRlcnMucHVzaChodHRwSGVhZGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRnZXQgdXJsKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX3VybC5nZXQoKTtcblx0fVxuXG5cdHNldCB1cmwodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMuX3VybC5zZXQodmFsdWUpO1xuXHR9XG5cblx0Z2V0IGJvZHkoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fYm9keS5nZXQoKTtcblx0fVxuXG5cdHNldCBib2R5KHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLl9ib2R5LnNldCh2YWx1ZSk7XG5cdH1cblxuXHRnZXQgaGVhZGVycygpOiBBcnJheTxIdHRwSGVhZGVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuX2hlYWRlcnMgPyB0aGlzLl9oZWFkZXJzIDogW107XG5cdH1cblxuXHRzZXQgaGVhZGVycyh2YWx1ZTogQXJyYXk8SHR0cEhlYWRlcj4pIHtcblx0XHR0aGlzLl9oZWFkZXJzID0gdmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFNob3dDYXJkQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcblx0cHJvdGVjdGVkIGFkZENzc0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0XHRzdXBlci5hZGRDc3NDbGFzc2VzKGVsZW1lbnQpO1xuXG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMucGFyZW50Lmhvc3RDb25maWcubWFrZUNzc0NsYXNzTmFtZShcImV4cGFuZGFibGVcIikpO1xuXHR9XG5cblx0cmVhZG9ubHkgY2FyZDogQWRhcHRpdmVDYXJkID0gbmV3IElubGluZUFkYXB0aXZlQ2FyZCgpO1xuXG5cdGdldEpzb25UeXBlTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBcIkFjdGlvbi5TaG93Q2FyZFwiO1xuXHR9XG5cblx0dG9KU09OKCkge1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci50b0pTT04oKTtcblxuXHRcdGlmICh0aGlzLmNhcmQpIHtcblx0XHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJjYXJkXCIsIHRoaXMuY2FyZC50b0pTT04oKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHZhbGlkYXRlKCk6IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4ge1xuXHRcdHJldHVybiB0aGlzLmNhcmQudmFsaWRhdGUoKTtcblx0fVxuXG5cdHBhcnNlKGpzb246IGFueSwgZXJyb3JzPzogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPikge1xuXHRcdHN1cGVyLnBhcnNlKGpzb24sIGVycm9ycyk7XG5cblx0XHR0aGlzLmNhcmQucGFyc2UoanNvbltcImNhcmRcIl0sIGVycm9ycyk7XG5cdH1cblxuXHRzZXRQYXJlbnQodmFsdWU6IENhcmRFbGVtZW50KSB7XG5cdFx0c3VwZXIuc2V0UGFyZW50KHZhbHVlKTtcblxuXHRcdHRoaXMuY2FyZC5zZXRQYXJlbnQodmFsdWUpO1xuXHR9XG5cblx0Z2V0QWxsSW5wdXRzKCk6IEFycmF5PElucHV0PiB7XG5cdFx0cmV0dXJuIHRoaXMuY2FyZC5nZXRBbGxJbnB1dHMoKTtcblx0fVxuXG5cdGdldFJlc291cmNlSW5mb3JtYXRpb24oKTogQXJyYXk8SVJlc291cmNlSW5mb3JtYXRpb24+IHtcblx0XHRyZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2VJbmZvcm1hdGlvbigpLmNvbmNhdCh0aGlzLmNhcmQuZ2V0UmVzb3VyY2VJbmZvcm1hdGlvbigpKTtcblx0fVxuXG5cdGdldEFjdGlvbkJ5SWQoaWQ6IHN0cmluZyk6IEFjdGlvbiB7XG5cdFx0dmFyIHJlc3VsdCA9IHN1cGVyLmdldEFjdGlvbkJ5SWQoaWQpO1xuXG5cdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdHJlc3VsdCA9IHRoaXMuY2FyZC5nZXRBY3Rpb25CeUlkKGlkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbmNsYXNzIEFjdGlvbkNvbGxlY3Rpb24ge1xuXHRwcml2YXRlIF9vd25lcjogQ2FyZEVsZW1lbnQ7XG5cdHByaXZhdGUgX2FjdGlvbkNhcmRDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuXHRwcml2YXRlIF9leHBhbmRlZEFjdGlvbjogU2hvd0NhcmRBY3Rpb24gPSBudWxsO1xuXHRwcml2YXRlIF9yZW5kZXJlZEFjdGlvbkNvdW50OiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIF9zdGF0dXNDYXJkOiBIVE1MRWxlbWVudCA9IG51bGw7XG5cdHByaXZhdGUgX2FjdGlvbkNhcmQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcblxuXHRwcml2YXRlIHJlZnJlc2hDb250YWluZXIoKSB7XG5cdFx0dGhpcy5fYWN0aW9uQ2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdFx0aWYgKHRoaXMuX2FjdGlvbkNhcmQgPT09IG51bGwgJiYgdGhpcy5fc3RhdHVzQ2FyZCA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fYWN0aW9uQ2FyZENvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcblx0XHRcdHRoaXMuX2FjdGlvbkNhcmRDb250YWluZXIuc3R5bGUubWFyZ2luVG9wID0gXCIwcHhcIjtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2FjdGlvbkNhcmRDb250YWluZXIuc3R5bGUubWFyZ2luVG9wID0gdGhpcy5fcmVuZGVyZWRBY3Rpb25Db3VudCA+IDAgPyB0aGlzLl9vd25lci5ob3N0Q29uZmlnLmFjdGlvbnMuc2hvd0NhcmQuaW5saW5lVG9wTWFyZ2luICsgXCJweFwiIDogXCIwcHhcIjtcblxuXHRcdHZhciBwYWRkaW5nID0gdGhpcy5fb3duZXIuZ2V0Tm9uWmVyb1BhZGRpbmcoKS50b1NwYWNpbmdEZWZpbml0aW9uKHRoaXMuX293bmVyLmhvc3RDb25maWcpO1xuXG5cdFx0aWYgKHRoaXMuX2FjdGlvbkNhcmQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuX2FjdGlvbkNhcmQuc3R5bGUucGFkZGluZ0xlZnQgPSBwYWRkaW5nLmxlZnQgKyBcInB4XCI7XG5cdFx0XHR0aGlzLl9hY3Rpb25DYXJkLnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcucmlnaHQgKyBcInB4XCI7XG5cblx0XHRcdHRoaXMuX2FjdGlvbkNhcmQuc3R5bGUubWFyZ2luTGVmdCA9IFwiLVwiICsgcGFkZGluZy5sZWZ0ICsgXCJweFwiO1xuXHRcdFx0dGhpcy5fYWN0aW9uQ2FyZC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiLVwiICsgcGFkZGluZy5yaWdodCArIFwicHhcIjtcblxuXHRcdFx0VXRpbHMuYXBwZW5kQ2hpbGQodGhpcy5fYWN0aW9uQ2FyZENvbnRhaW5lciwgdGhpcy5fYWN0aW9uQ2FyZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX3N0YXR1c0NhcmQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuX3N0YXR1c0NhcmQuc3R5bGUucGFkZGluZ0xlZnQgPSBwYWRkaW5nLmxlZnQgKyBcInB4XCI7XG5cdFx0XHR0aGlzLl9zdGF0dXNDYXJkLnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcucmlnaHQgKyBcInB4XCI7XG5cblx0XHRcdHRoaXMuX3N0YXR1c0NhcmQuc3R5bGUubWFyZ2luTGVmdCA9IFwiLVwiICsgcGFkZGluZy5sZWZ0ICsgXCJweFwiO1xuXHRcdFx0dGhpcy5fc3RhdHVzQ2FyZC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiLVwiICsgcGFkZGluZy5yaWdodCArIFwicHhcIjtcblxuXHRcdFx0VXRpbHMuYXBwZW5kQ2hpbGQodGhpcy5fYWN0aW9uQ2FyZENvbnRhaW5lciwgdGhpcy5fc3RhdHVzQ2FyZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBsYXlvdXRDaGFuZ2VkKCkge1xuXHRcdHRoaXMuX293bmVyLmdldFJvb3RFbGVtZW50KCkudXBkYXRlTGF5b3V0KCk7XG5cdH1cblxuXHRwcml2YXRlIGhpZGVBY3Rpb25DYXJkKCkge1xuXHRcdHZhciBwcmV2aW91c2x5RXhwYW5kZWRBY3Rpb24gPSB0aGlzLl9leHBhbmRlZEFjdGlvbjtcblxuXHRcdHRoaXMuX2V4cGFuZGVkQWN0aW9uID0gbnVsbDtcblx0XHR0aGlzLl9hY3Rpb25DYXJkID0gbnVsbDtcblxuXHRcdHRoaXMucmVmcmVzaENvbnRhaW5lcigpO1xuXG5cdFx0aWYgKHByZXZpb3VzbHlFeHBhbmRlZEFjdGlvbikge1xuXHRcdFx0dGhpcy5sYXlvdXRDaGFuZ2VkKCk7XG5cblx0XHRcdHJhaXNlSW5saW5lQ2FyZEV4cGFuZGVkRXZlbnQocHJldmlvdXNseUV4cGFuZGVkQWN0aW9uLCBmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzaG93QWN0aW9uQ2FyZChhY3Rpb246IFNob3dDYXJkQWN0aW9uLCBzdXBwcmVzc1N0eWxlOiBib29sZWFuID0gZmFsc2UsIHJhaXNlRXZlbnQ6IGJvb2xlYW4gPSB0cnVlKSB7XG5cdFx0aWYgKGFjdGlvbi5jYXJkID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQoPElubGluZUFkYXB0aXZlQ2FyZD5hY3Rpb24uY2FyZCkuc3VwcHJlc3NTdHlsZSA9IHN1cHByZXNzU3R5bGU7XG5cblx0XHR2YXIgcmVuZGVyZWRDYXJkID0gYWN0aW9uLmNhcmQucmVuZGVyKCk7XG5cblx0XHR0aGlzLl9hY3Rpb25DYXJkID0gcmVuZGVyZWRDYXJkO1xuXHRcdHRoaXMuX2V4cGFuZGVkQWN0aW9uID0gYWN0aW9uO1xuXG5cdFx0dGhpcy5yZWZyZXNoQ29udGFpbmVyKCk7XG5cblx0XHRpZiAocmFpc2VFdmVudCkge1xuXHRcdFx0dGhpcy5sYXlvdXRDaGFuZ2VkKCk7XG5cblx0XHRcdHJhaXNlSW5saW5lQ2FyZEV4cGFuZGVkRXZlbnQoYWN0aW9uLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbGxhcHNlRXhwYW5kZWRBY3Rpb24oKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuYnV0dG9uc1tpXS5zdGF0ZSA9IEFjdGlvbkJ1dHRvblN0YXRlLk5vcm1hbDtcblx0XHR9XG5cblx0XHR0aGlzLmhpZGVBY3Rpb25DYXJkKCk7XG5cdH1cblxuXHRwcml2YXRlIGV4cGFuZFNob3dDYXJkQWN0aW9uKGFjdGlvbjogU2hvd0NhcmRBY3Rpb24sIHJhaXNlRXZlbnQ6IGJvb2xlYW4pIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuYnV0dG9uc1tpXS5hY3Rpb24gIT09IGFjdGlvbikge1xuXHRcdFx0XHR0aGlzLmJ1dHRvbnNbaV0uc3RhdGUgPSBBY3Rpb25CdXR0b25TdGF0ZS5TdWJkdWVkO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuYnV0dG9uc1tpXS5zdGF0ZSA9IEFjdGlvbkJ1dHRvblN0YXRlLkV4cGFuZGVkO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuc2hvd0FjdGlvbkNhcmQoXG5cdFx0XHRhY3Rpb24sXG5cdFx0XHQhKHRoaXMuX293bmVyLmlzQXRUaGVWZXJ5TGVmdCgpICYmIHRoaXMuX293bmVyLmlzQXRUaGVWZXJ5UmlnaHQoKSksXG5cdFx0XHRyYWlzZUV2ZW50KTtcblx0fVxuXG5cdHByaXZhdGUgYWN0aW9uQ2xpY2tlZChhY3Rpb25CdXR0b246IEFjdGlvbkJ1dHRvbikge1xuXHRcdGlmICghKGFjdGlvbkJ1dHRvbi5hY3Rpb24gaW5zdGFuY2VvZiBTaG93Q2FyZEFjdGlvbikpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5idXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuYnV0dG9uc1tpXS5zdGF0ZSA9IEFjdGlvbkJ1dHRvblN0YXRlLk5vcm1hbDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5oaWRlU3RhdHVzQ2FyZCgpO1xuXHRcdFx0dGhpcy5oaWRlQWN0aW9uQ2FyZCgpO1xuXG5cdFx0XHRhY3Rpb25CdXR0b24uYWN0aW9uLmV4ZWN1dGUoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLmhpZGVTdGF0dXNDYXJkKCk7XG5cblx0XHRcdGlmICh0aGlzLl9vd25lci5ob3N0Q29uZmlnLmFjdGlvbnMuc2hvd0NhcmQuYWN0aW9uTW9kZSA9PT0gRW51bXMuU2hvd0NhcmRBY3Rpb25Nb2RlLlBvcHVwKSB7XG5cdFx0XHRcdGFjdGlvbkJ1dHRvbi5hY3Rpb24uZXhlY3V0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoYWN0aW9uQnV0dG9uLmFjdGlvbiA9PT0gdGhpcy5fZXhwYW5kZWRBY3Rpb24pIHtcblx0XHRcdFx0dGhpcy5jb2xsYXBzZUV4cGFuZGVkQWN0aW9uKCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5leHBhbmRTaG93Q2FyZEFjdGlvbihhY3Rpb25CdXR0b24uYWN0aW9uLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldFBhcmVudENvbnRhaW5lcigpOiBDb250YWluZXIge1xuXHRcdGlmICh0aGlzLl9vd25lciBpbnN0YW5jZW9mIENvbnRhaW5lcikge1xuXHRcdFx0cmV0dXJuIHRoaXMuX293bmVyO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLl9vd25lci5nZXRQYXJlbnRDb250YWluZXIoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbmRBY3Rpb25CdXR0b24oYWN0aW9uOiBBY3Rpb24pOiBBY3Rpb25CdXR0b24ge1xuXHRcdGZvciAobGV0IGFjdGlvbkJ1dHRvbiBvZiB0aGlzLmJ1dHRvbnMpIHtcblx0XHRcdGlmIChhY3Rpb25CdXR0b24uYWN0aW9uID09IGFjdGlvbikge1xuXHRcdFx0XHRyZXR1cm4gYWN0aW9uQnV0dG9uO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aXRlbXM6IEFycmF5PEFjdGlvbj4gPSBbXTtcblx0YnV0dG9uczogQXJyYXk8QWN0aW9uQnV0dG9uPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG93bmVyOiBDYXJkRWxlbWVudCkge1xuXHRcdHRoaXMuX293bmVyID0gb3duZXI7XG5cdH1cblxuXHRwYXJzZShqc29uOiBhbnksIGVycm9ycz86IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4pIHtcblx0XHR0aGlzLmNsZWFyKCk7XG5cblx0XHRpZiAoanNvbiAmJiBqc29uIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdGZvciAobGV0IGpzb25BY3Rpb24gb2YganNvbikge1xuXHRcdFx0XHRsZXQgYWN0aW9uID0gY3JlYXRlQWN0aW9uSW5zdGFuY2UoXG5cdFx0XHRcdFx0dGhpcy5fb3duZXIsXG5cdFx0XHRcdFx0anNvbkFjdGlvbixcblx0XHRcdFx0XHRlcnJvcnMpO1xuXG5cdFx0XHRcdGlmIChhY3Rpb24pIHtcblx0XHRcdFx0XHR0aGlzLmFkZEFjdGlvbihhY3Rpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dG9KU09OKCkge1xuXHRcdGlmICh0aGlzLml0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdGxldCByZXN1bHQgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgYWN0aW9uIG9mIHRoaXMuaXRlbXMpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goYWN0aW9uLnRvSlNPTigpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRzaG93U3RhdHVzQ2FyZChzdGF0dXM6IEFkYXB0aXZlQ2FyZCkge1xuXHRcdHN0YXR1cy5zZXRQYXJlbnQodGhpcy5fb3duZXIpO1xuXG5cdFx0dGhpcy5fc3RhdHVzQ2FyZCA9IHN0YXR1cy5yZW5kZXIoKTtcblxuXHRcdHRoaXMucmVmcmVzaENvbnRhaW5lcigpO1xuXHR9XG5cblx0aGlkZVN0YXR1c0NhcmQoKSB7XG5cdFx0dGhpcy5fc3RhdHVzQ2FyZCA9IG51bGw7XG5cblx0XHR0aGlzLnJlZnJlc2hDb250YWluZXIoKTtcblx0fVxuXG5cdGdldEFjdGlvbkJ5SWQoaWQ6IHN0cmluZyk6IEFjdGlvbiB7XG5cdFx0dmFyIHJlc3VsdDogQWN0aW9uID0gbnVsbDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gdGhpcy5pdGVtc1tpXS5nZXRBY3Rpb25CeUlkKGlkKTtcblxuXHRcdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0dmFsaWRhdGUoKTogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPiB7XG5cdFx0dmFyIHJlc3VsdDogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPiA9IFtdO1xuXG5cdFx0aWYgKHRoaXMuX293bmVyLmhvc3RDb25maWcuYWN0aW9ucy5tYXhBY3Rpb25zICYmIHRoaXMuaXRlbXMubGVuZ3RoID4gdGhpcy5fb3duZXIuaG9zdENvbmZpZy5hY3Rpb25zLm1heEFjdGlvbnMpIHtcblx0XHRcdHJlc3VsdC5wdXNoKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZXJyb3I6IEVudW1zLlZhbGlkYXRpb25FcnJvci5Ub29NYW55QWN0aW9ucyxcblx0XHRcdFx0XHRtZXNzYWdlOiBcIkEgbWF4aW11bSBvZiBcIiArIHRoaXMuX293bmVyLmhvc3RDb25maWcuYWN0aW9ucy5tYXhBY3Rpb25zICsgXCIgYWN0aW9ucyBhcmUgYWxsb3dlZC5cIlxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pdGVtcy5sZW5ndGggPiAwICYmICF0aGlzLl9vd25lci5ob3N0Q29uZmlnLnN1cHBvcnRzSW50ZXJhY3Rpdml0eSkge1xuXHRcdFx0cmVzdWx0LnB1c2goXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLkludGVyYWN0aXZpdHlOb3RBbGxvd2VkLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IFwiSW50ZXJhY3Rpdml0eSBpcyBub3QgYWxsb3dlZC5cIlxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICghaXNBY3Rpb25BbGxvd2VkKHRoaXMuaXRlbXNbaV0sIHRoaXMuX293bmVyLmdldEZvcmJpZGRlbkFjdGlvblR5cGVzKCkpKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGVycm9yOiBFbnVtcy5WYWxpZGF0aW9uRXJyb3IuQWN0aW9uVHlwZU5vdEFsbG93ZWQsXG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBcIkFjdGlvbnMgb2YgdHlwZSBcIiArIHRoaXMuaXRlbXNbaV0uZ2V0SnNvblR5cGVOYW1lKCkgKyBcIiBhcmUgbm90IGFsbG93ZS5cIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXMuaXRlbXNbaV0udmFsaWRhdGUoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHJlbmRlcihvcmllbnRhdGlvbjogRW51bXMuT3JpZW50YXRpb24sIGlzRGVzaWduTW9kZTogYm9vbGVhbik6IEhUTUxFbGVtZW50IHtcblx0XHRpZiAoIXRoaXMuX293bmVyLmhvc3RDb25maWcuc3VwcG9ydHNJbnRlcmFjdGl2aXR5KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bGV0IG1heEFjdGlvbnMgPSB0aGlzLl9vd25lci5ob3N0Q29uZmlnLmFjdGlvbnMubWF4QWN0aW9ucyA/IE1hdGgubWluKHRoaXMuX293bmVyLmhvc3RDb25maWcuYWN0aW9ucy5tYXhBY3Rpb25zLCB0aGlzLml0ZW1zLmxlbmd0aCkgOiB0aGlzLml0ZW1zLmxlbmd0aDtcblx0XHRsZXQgZm9yYmlkZGVuQWN0aW9uVHlwZXMgPSB0aGlzLl9vd25lci5nZXRGb3JiaWRkZW5BY3Rpb25UeXBlcygpO1xuXG5cdFx0dGhpcy5fYWN0aW9uQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dGhpcy5fcmVuZGVyZWRBY3Rpb25Db3VudCA9IDA7XG5cblx0XHRpZiAodGhpcy5fb3duZXIuaG9zdENvbmZpZy5hY3Rpb25zLnByZUV4cGFuZFNpbmdsZVNob3dDYXJkQWN0aW9uICYmIG1heEFjdGlvbnMgPT0gMSAmJiB0aGlzLml0ZW1zWzBdIGluc3RhbmNlb2YgU2hvd0NhcmRBY3Rpb24gJiYgaXNBY3Rpb25BbGxvd2VkKHRoaXMuaXRlbXNbMF0sIGZvcmJpZGRlbkFjdGlvblR5cGVzKSkge1xuXHRcdFx0dGhpcy5zaG93QWN0aW9uQ2FyZCg8U2hvd0NhcmRBY3Rpb24+dGhpcy5pdGVtc1swXSwgdHJ1ZSk7XG5cdFx0XHR0aGlzLl9yZW5kZXJlZEFjdGlvbkNvdW50ID0gMTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRsZXQgYnV0dG9uU3RyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0YnV0dG9uU3RyaXAuY2xhc3NOYW1lID0gdGhpcy5fb3duZXIuaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiYWMtYWN0aW9uU2V0XCIpO1xuXHRcdFx0YnV0dG9uU3RyaXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG5cdFx0XHRpZiAob3JpZW50YXRpb24gPT0gRW51bXMuT3JpZW50YXRpb24uSG9yaXpvbnRhbCkge1xuXHRcdFx0XHRidXR0b25TdHJpcC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcblxuXHRcdFx0XHRpZiAodGhpcy5fb3duZXIuaG9yaXpvbnRhbEFsaWdubWVudCAmJiB0aGlzLl9vd25lci5ob3N0Q29uZmlnLmFjdGlvbnMuYWN0aW9uQWxpZ25tZW50ICE9IEVudW1zLkFjdGlvbkFsaWdubWVudC5TdHJldGNoKSB7XG5cdFx0XHRcdFx0c3dpdGNoICh0aGlzLl9vd25lci5ob3Jpem9udGFsQWxpZ25tZW50KSB7XG5cdFx0XHRcdFx0XHRjYXNlIEVudW1zLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyOlxuXHRcdFx0XHRcdFx0XHRidXR0b25TdHJpcC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSBFbnVtcy5Ib3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0OlxuXHRcdFx0XHRcdFx0XHRidXR0b25TdHJpcC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiZmxleC1lbmRcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRidXR0b25TdHJpcC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiZmxleC1zdGFydFwiO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0c3dpdGNoICh0aGlzLl9vd25lci5ob3N0Q29uZmlnLmFjdGlvbnMuYWN0aW9uQWxpZ25tZW50KSB7XG5cdFx0XHRcdFx0XHRjYXNlIEVudW1zLkFjdGlvbkFsaWdubWVudC5DZW50ZXI6XG5cdFx0XHRcdFx0XHRcdGJ1dHRvblN0cmlwLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIEVudW1zLkFjdGlvbkFsaWdubWVudC5SaWdodDpcblx0XHRcdFx0XHRcdFx0YnV0dG9uU3RyaXAuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImZsZXgtZW5kXCI7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0YnV0dG9uU3RyaXAuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImZsZXgtc3RhcnRcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YnV0dG9uU3RyaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG5cblx0XHRcdFx0aWYgKHRoaXMuX293bmVyLmhvcml6b250YWxBbGlnbm1lbnQgJiYgdGhpcy5fb3duZXIuaG9zdENvbmZpZy5hY3Rpb25zLmFjdGlvbkFsaWdubWVudCAhPSBFbnVtcy5BY3Rpb25BbGlnbm1lbnQuU3RyZXRjaCkge1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5fb3duZXIuaG9yaXpvbnRhbEFsaWdubWVudCkge1xuXHRcdFx0XHRcdFx0Y2FzZSBFbnVtcy5Ib3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcjpcblx0XHRcdFx0XHRcdFx0YnV0dG9uU3RyaXAuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSBFbnVtcy5Ib3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0OlxuXHRcdFx0XHRcdFx0XHRidXR0b25TdHJpcC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJmbGV4LWVuZFwiO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdGJ1dHRvblN0cmlwLnN0eWxlLmFsaWduSXRlbXMgPSBcImZsZXgtc3RhcnRcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5fb3duZXIuaG9zdENvbmZpZy5hY3Rpb25zLmFjdGlvbkFsaWdubWVudCkge1xuXHRcdFx0XHRcdFx0Y2FzZSBFbnVtcy5BY3Rpb25BbGlnbm1lbnQuQ2VudGVyOlxuXHRcdFx0XHRcdFx0XHRidXR0b25TdHJpcC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIEVudW1zLkFjdGlvbkFsaWdubWVudC5SaWdodDpcblx0XHRcdFx0XHRcdFx0YnV0dG9uU3RyaXAuc3R5bGUuYWxpZ25JdGVtcyA9IFwiZmxleC1lbmRcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIEVudW1zLkFjdGlvbkFsaWdubWVudC5TdHJldGNoOlxuXHRcdFx0XHRcdFx0XHRidXR0b25TdHJpcC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJzdHJldGNoXCI7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0YnV0dG9uU3RyaXAuc3R5bGUuYWxpZ25JdGVtcyA9IFwiZmxleC1zdGFydFwiO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IHBhcmVudENvbnRhaW5lclN0eWxlID0gdGhpcy5nZXRQYXJlbnRDb250YWluZXIoKS5zdHlsZTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChpc0FjdGlvbkFsbG93ZWQodGhpcy5pdGVtc1tpXSwgZm9yYmlkZGVuQWN0aW9uVHlwZXMpKSB7XG5cdFx0XHRcdFx0bGV0IGFjdGlvbkJ1dHRvbjogQWN0aW9uQnV0dG9uID0gdGhpcy5maW5kQWN0aW9uQnV0dG9uKHRoaXMuaXRlbXNbaV0pO1xuXG5cdFx0XHRcdFx0aWYgKCFhY3Rpb25CdXR0b24pIHtcblx0XHRcdFx0XHRcdGFjdGlvbkJ1dHRvbiA9IG5ldyBBY3Rpb25CdXR0b24odGhpcy5pdGVtc1tpXSwgcGFyZW50Q29udGFpbmVyU3R5bGUpO1xuXHRcdFx0XHRcdFx0YWN0aW9uQnV0dG9uLm9uQ2xpY2sgPSAoYWIpID0+IHsgdGhpcy5hY3Rpb25DbGlja2VkKGFiKTsgfTtcblxuXHRcdFx0XHRcdFx0dGhpcy5idXR0b25zLnB1c2goYWN0aW9uQnV0dG9uKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhY3Rpb25CdXR0b24ucmVuZGVyKHRoaXMuX293bmVyLmhvc3RDb25maWcuYWN0aW9ucy5hY3Rpb25BbGlnbm1lbnQpO1xuXG5cdFx0XHRcdFx0YnV0dG9uU3RyaXAuYXBwZW5kQ2hpbGQoYWN0aW9uQnV0dG9uLmFjdGlvbi5yZW5kZXJlZEVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0dGhpcy5fcmVuZGVyZWRBY3Rpb25Db3VudCsrO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMuX3JlbmRlcmVkQWN0aW9uQ291bnQgPj0gdGhpcy5fb3duZXIuaG9zdENvbmZpZy5hY3Rpb25zLm1heEFjdGlvbnMgfHwgaSA9PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICh0aGlzLl9vd25lci5ob3N0Q29uZmlnLmFjdGlvbnMuYnV0dG9uU3BhY2luZyA+IDApIHtcblx0XHRcdFx0XHRcdHZhciBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdFx0XHRcdFx0XHRpZiAob3JpZW50YXRpb24gPT09IEVudW1zLk9yaWVudGF0aW9uLkhvcml6b250YWwpIHtcblx0XHRcdFx0XHRcdFx0c3BhY2VyLnN0eWxlLmZsZXggPSBcIjAgMCBhdXRvXCI7XG5cdFx0XHRcdFx0XHRcdHNwYWNlci5zdHlsZS53aWR0aCA9IHRoaXMuX293bmVyLmhvc3RDb25maWcuYWN0aW9ucy5idXR0b25TcGFjaW5nICsgXCJweFwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNwYWNlci5zdHlsZS5oZWlnaHQgPSB0aGlzLl9vd25lci5ob3N0Q29uZmlnLmFjdGlvbnMuYnV0dG9uU3BhY2luZyArIFwicHhcIjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0VXRpbHMuYXBwZW5kQ2hpbGQoYnV0dG9uU3RyaXAsIHNwYWNlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldCBidXR0b25TdHJpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRidXR0b25TdHJpcENvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cdFx0XHRidXR0b25TdHJpcENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25TdHJpcCk7XG5cblx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKGVsZW1lbnQsIGJ1dHRvblN0cmlwQ29udGFpbmVyKTtcblx0XHR9XG5cblx0XHRVdGlscy5hcHBlbmRDaGlsZChlbGVtZW50LCB0aGlzLl9hY3Rpb25DYXJkQ29udGFpbmVyKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5idXR0b25zW2ldLnN0YXRlID09IEFjdGlvbkJ1dHRvblN0YXRlLkV4cGFuZGVkKSB7XG5cdFx0XHRcdHRoaXMuZXhwYW5kU2hvd0NhcmRBY3Rpb24oPFNob3dDYXJkQWN0aW9uPnRoaXMuYnV0dG9uc1tpXS5hY3Rpb24sIGZhbHNlKTtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyZWRBY3Rpb25Db3VudCA+IDAgPyBlbGVtZW50IDogbnVsbDtcblx0fVxuXG5cdGFkZEFjdGlvbihhY3Rpb246IEFjdGlvbikge1xuXHRcdGlmICghYWN0aW9uKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYWN0aW9uIHBhcmFtZXRlciBjYW5ub3QgYmUgbnVsbC5cIik7XG5cdFx0fVxuXG5cdFx0aWYgKCghYWN0aW9uLnBhcmVudCB8fCBhY3Rpb24ucGFyZW50ID09PSB0aGlzLl9vd25lcikgJiYgdGhpcy5pdGVtcy5pbmRleE9mKGFjdGlvbikgPCAwKSB7XG5cdFx0XHR0aGlzLml0ZW1zLnB1c2goYWN0aW9uKTtcblxuXHRcdFx0aWYgKCFhY3Rpb24ucGFyZW50KSB7XG5cdFx0XHRcdGFjdGlvbi5zZXRQYXJlbnQodGhpcy5fb3duZXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbnZva2VTZXRDb2xsZWN0aW9uKGFjdGlvbiwgdGhpcyk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGFjdGlvbiBhbHJlYWR5IGJlbG9uZ3MgdG8gYW5vdGhlciBlbGVtZW50LlwiKTtcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVBY3Rpb24oYWN0aW9uOiBBY3Rpb24pOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5leHBhbmRlZEFjdGlvbiAmJiB0aGlzLl9leHBhbmRlZEFjdGlvbiA9PSBhY3Rpb24pIHtcblx0XHRcdHRoaXMuY29sbGFwc2VFeHBhbmRlZEFjdGlvbigpO1xuXHRcdH1cblxuXHRcdHZhciBhY3Rpb25JbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihhY3Rpb24pO1xuXG5cdFx0aWYgKGFjdGlvbkluZGV4ID49IDApIHtcblx0XHRcdHRoaXMuaXRlbXMuc3BsaWNlKGFjdGlvbkluZGV4LCAxKTtcblxuXHRcdFx0YWN0aW9uLnNldFBhcmVudChudWxsKTtcblxuXHRcdFx0aW52b2tlU2V0Q29sbGVjdGlvbihhY3Rpb24sIG51bGwpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodGhpcy5idXR0b25zW2ldLmFjdGlvbiA9PSBhY3Rpb24pIHtcblx0XHRcdFx0XHR0aGlzLmJ1dHRvbnMuc3BsaWNlKGksIDEpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHRcdHRoaXMuYnV0dG9ucyA9IFtdO1xuXG5cdFx0dGhpcy5fZXhwYW5kZWRBY3Rpb24gPSBudWxsO1xuXHRcdHRoaXMuX3JlbmRlcmVkQWN0aW9uQ291bnQgPSAwO1xuXHR9XG5cblx0Z2V0QWxsSW5wdXRzKCk6IEFycmF5PElucHV0PiB7XG5cdFx0dmFyIHJlc3VsdDogQXJyYXk8SW5wdXQ+ID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhY3Rpb24gPSB0aGlzLml0ZW1zW2ldO1xuXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQuY29uY2F0KGFjdGlvbi5nZXRBbGxJbnB1dHMoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGdldFJlc291cmNlSW5mb3JtYXRpb24oKTogQXJyYXk8SVJlc291cmNlSW5mb3JtYXRpb24+IHtcblx0XHRsZXQgcmVzdWx0OiBBcnJheTxJUmVzb3VyY2VJbmZvcm1hdGlvbj4gPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLml0ZW1zW2ldLmdldFJlc291cmNlSW5mb3JtYXRpb24oKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGdldCByZW5kZXJlZEFjdGlvbkNvdW50KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX3JlbmRlcmVkQWN0aW9uQ291bnQ7XG5cdH1cblxuXHRnZXQgZXhwYW5kZWRBY3Rpb24oKTogU2hvd0NhcmRBY3Rpb24ge1xuXHRcdHJldHVybiB0aGlzLl9leHBhbmRlZEFjdGlvbjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQWN0aW9uU2V0IGV4dGVuZHMgQ2FyZEVsZW1lbnQge1xuXHRwcml2YXRlIF9hY3Rpb25Db2xsZWN0aW9uOiBBY3Rpb25Db2xsZWN0aW9uO1xuXG5cdHByb3RlY3RlZCBpbnRlcm5hbFJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24ucmVuZGVyKHRoaXMub3JpZW50YXRpb24gPyB0aGlzLm9yaWVudGF0aW9uIDogdGhpcy5ob3N0Q29uZmlnLmFjdGlvbnMuYWN0aW9uc09yaWVudGF0aW9uLCB0aGlzLmlzRGVzaWduTW9kZSgpKTtcblx0fVxuXG5cdG9yaWVudGF0aW9uPzogRW51bXMuT3JpZW50YXRpb24gPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLl9hY3Rpb25Db2xsZWN0aW9uID0gbmV3IEFjdGlvbkNvbGxlY3Rpb24odGhpcyk7XG5cdH1cblxuXHR0b0pTT04oKSB7XG5cdFx0bGV0IHJlc3VsdCA9IHN1cGVyLnRvSlNPTigpO1xuXG5cdFx0VXRpbHMuc2V0RW51bVByb3BlcnR5KEVudW1zLk9yaWVudGF0aW9uLCByZXN1bHQsIFwib3JpZW50YXRpb25cIiwgdGhpcy5vcmllbnRhdGlvbik7XG5cdFx0VXRpbHMuc2V0UHJvcGVydHkocmVzdWx0LCBcImFjdGlvbnNcIiwgdGhpcy5fYWN0aW9uQ29sbGVjdGlvbi50b0pTT04oKSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0aXNCbGVlZGluZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aW9uQ29sbGVjdGlvbi5leHBhbmRlZEFjdGlvbiA/IHRydWUgOiBmYWxzZTtcblx0fVxuXG5cdGdldEpzb25UeXBlTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBcIkFjdGlvblNldFwiO1xuXHR9XG5cblx0Z2V0QWN0aW9uQ291bnQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aW9uQ29sbGVjdGlvbi5pdGVtcy5sZW5ndGg7XG5cdH1cblxuXHRnZXRBY3Rpb25BdChpbmRleDogbnVtYmVyKTogQWN0aW9uIHtcblx0XHRpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuZ2V0QWN0aW9uQ291bnQoKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24uaXRlbXNbaW5kZXhdO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHN1cGVyLmdldEFjdGlvbkF0KGluZGV4KTtcblx0XHR9XG5cdH1cblxuXHR2YWxpZGF0ZSgpOiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+IHtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aW9uQ29sbGVjdGlvbi52YWxpZGF0ZSgpO1xuXHR9XG5cblx0cGFyc2UoanNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSB7XG5cdFx0c3VwZXIucGFyc2UoanNvbiwgZXJyb3JzKTtcblxuXHRcdHZhciBqc29uT3JpZW50YXRpb24gPSBqc29uW1wib3JpZW50YXRpb25cIl07XG5cblx0XHRpZiAoanNvbk9yaWVudGF0aW9uKSB7XG5cdFx0XHR0aGlzLm9yaWVudGF0aW9uID0gVXRpbHMuZ2V0RW51bVZhbHVlT3JEZWZhdWx0KEVudW1zLk9yaWVudGF0aW9uLCBqc29uT3JpZW50YXRpb24sIEVudW1zLk9yaWVudGF0aW9uLkhvcml6b250YWwpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24ucGFyc2UoanNvbltcImFjdGlvbnNcIl0sIGVycm9ycyk7XG5cdH1cblxuXHRhZGRBY3Rpb24oYWN0aW9uOiBBY3Rpb24pIHtcblx0XHR0aGlzLl9hY3Rpb25Db2xsZWN0aW9uLmFkZEFjdGlvbihhY3Rpb24pO1xuXHR9XG5cblx0Z2V0QWxsSW5wdXRzKCk6IEFycmF5PElucHV0PiB7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24uZ2V0QWxsSW5wdXRzKCk7XG5cdH1cblxuXHRnZXRSZXNvdXJjZUluZm9ybWF0aW9uKCk6IEFycmF5PElSZXNvdXJjZUluZm9ybWF0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24uZ2V0UmVzb3VyY2VJbmZvcm1hdGlvbigpO1xuXHR9XG5cblx0cmVuZGVyU3BlZWNoKCk6IHN0cmluZyB7XG5cdFx0Ly8gVE9ETzogV2hhdCdzIHRoZSByaWdodCB0aGluZyB0byBkbyBoZXJlP1xuXHRcdHJldHVybiBcIlwiO1xuXHR9XG5cblx0Z2V0IGlzSW50ZXJhY3RpdmUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRJbWFnZSB7XG5cdHVybDogc3RyaW5nO1xuXHRtb2RlOiBFbnVtcy5CYWNrZ3JvdW5kSW1hZ2VNb2RlID0gRW51bXMuQmFja2dyb3VuZEltYWdlTW9kZS5TdHJldGNoO1xuXHRob3Jpem9udGFsQWxpZ25tZW50OiBFbnVtcy5Ib3Jpem9udGFsQWxpZ25tZW50ID0gRW51bXMuSG9yaXpvbnRhbEFsaWdubWVudC5MZWZ0O1xuXHR2ZXJ0aWNhbEFsaWdubWVudDogRW51bXMuVmVydGljYWxBbGlnbm1lbnQgPSBFbnVtcy5WZXJ0aWNhbEFsaWdubWVudC5Ub3A7XG5cblx0cGFyc2UoanNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSB7XG5cdFx0dGhpcy51cmwgPSBqc29uW1widXJsXCJdO1xuXHRcdHRoaXMubW9kZSA9IFV0aWxzLmdldEVudW1WYWx1ZU9yRGVmYXVsdChFbnVtcy5CYWNrZ3JvdW5kSW1hZ2VNb2RlLCBqc29uW1wibW9kZVwiXSwgdGhpcy5tb2RlKTtcblx0XHR0aGlzLmhvcml6b250YWxBbGlnbm1lbnQgPSBVdGlscy5nZXRFbnVtVmFsdWVPckRlZmF1bHQoRW51bXMuSG9yaXpvbnRhbEFsaWdubWVudCwganNvbltcImhvcml6b250YWxBbGlnbm1lbnRcIl0sIHRoaXMuaG9yaXpvbnRhbEFsaWdubWVudCk7XG5cdFx0dGhpcy52ZXJ0aWNhbEFsaWdubWVudCA9IFV0aWxzLmdldEVudW1WYWx1ZU9yRGVmYXVsdChFbnVtcy5WZXJ0aWNhbEFsaWdubWVudCwganNvbltcInZlcnRpY2FsQWxpZ25tZW50XCJdLCB0aGlzLnZlcnRpY2FsQWxpZ25tZW50KTtcblx0fVxuXG5cdGFwcGx5KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG5cdFx0aWYgKHRoaXMudXJsKSB7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdcIiArIHRoaXMudXJsICsgXCInKVwiO1xuXG5cdFx0XHRzd2l0Y2ggKHRoaXMubW9kZSkge1xuXHRcdFx0XHRjYXNlIEVudW1zLkJhY2tncm91bmRJbWFnZU1vZGUuUmVwZWF0OlxuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwicmVwZWF0XCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRW51bXMuQmFja2dyb3VuZEltYWdlTW9kZS5SZXBlYXRIb3Jpem9udGFsbHk6XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJyZXBlYXQteFwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIEVudW1zLkJhY2tncm91bmRJbWFnZU1vZGUuUmVwZWF0VmVydGljYWxseTpcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSBcInJlcGVhdC15XCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRW51bXMuQmFja2dyb3VuZEltYWdlTW9kZS5TdHJldGNoOlxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0c3dpdGNoICh0aGlzLmhvcml6b250YWxBbGlnbm1lbnQpIHtcblx0XHRcdFx0Y2FzZSBFbnVtcy5Ib3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcjpcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcImNlbnRlclwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIEVudW1zLkhvcml6b250YWxBbGlnbm1lbnQuUmlnaHQ6XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCJyaWdodFwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggKHRoaXMudmVydGljYWxBbGlnbm1lbnQpIHtcblx0XHRcdFx0Y2FzZSBFbnVtcy5WZXJ0aWNhbEFsaWdubWVudC5DZW50ZXI6XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCJjZW50ZXJcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBFbnVtcy5WZXJ0aWNhbEFsaWdubWVudC5Cb3R0b206XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCJib3R0b21cIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIENhcmRFbGVtZW50Q29udGFpbmVyIHtcblx0cHJpdmF0ZSBfc2VsZWN0QWN0aW9uOiBBY3Rpb247XG5cdHByaXZhdGUgX2l0ZW1zOiBBcnJheTxDYXJkRWxlbWVudD4gPSBbXTtcblx0cHJpdmF0ZSBfcmVuZGVyZWRJdGVtczogQXJyYXk8Q2FyZEVsZW1lbnQ+ID0gW107XG5cdHByaXZhdGUgX3N0eWxlPzogc3RyaW5nID0gbnVsbDtcblxuXHRwcml2YXRlIGlzRWxlbWVudEFsbG93ZWQoZWxlbWVudDogQ2FyZEVsZW1lbnQsIGZvcmJpZGRlbkVsZW1lbnRUeXBlczogQXJyYXk8c3RyaW5nPikge1xuXHRcdGlmICghdGhpcy5ob3N0Q29uZmlnLnN1cHBvcnRzSW50ZXJhY3Rpdml0eSAmJiBlbGVtZW50LmlzSW50ZXJhY3RpdmUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoZm9yYmlkZGVuRWxlbWVudFR5cGVzKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGZvcmJpZGRlbkVsZW1lbnRUeXBlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5nZXRKc29uVHlwZU5hbWUoKSA9PT0gZm9yYmlkZGVuRWxlbWVudFR5cGVzW2ldKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwcml2YXRlIGluc2VydEl0ZW1BdChcblx0XHRpdGVtOiBDYXJkRWxlbWVudCxcblx0XHRpbmRleDogbnVtYmVyLFxuXHRcdGZvcmNlSW5zZXJ0OiBib29sZWFuKSB7XG5cdFx0aWYgKCFpdGVtLnBhcmVudCB8fCBmb3JjZUluc2VydCkge1xuXHRcdFx0aWYgKGl0ZW0uaXNTdGFuZGFsb25lKSB7XG5cdFx0XHRcdGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5faXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGhpcy5faXRlbXMucHVzaChpdGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9pdGVtcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aXRlbS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRWxlbWVudHMgb2YgdHlwZSBcIiArIGl0ZW0uZ2V0SnNvblR5cGVOYW1lKCkgKyBcIiBjYW5ub3QgYmUgdXNlZCBhcyBzdGFuZGFsb25lIGVsZW1lbnRzLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZWxlbWVudCBhbHJlYWR5IGJlbG9uZ3MgdG8gYW5vdGhlciBjb250YWluZXIuXCIpXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXQgaGFzRXhwbGljaXRTdHlsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fc3R5bGUgIT0gbnVsbDtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRJdGVtc0NvbGxlY3Rpb25Qcm9wZXJ0eU5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXCJpdGVtc1wiO1xuXHR9XG5cblx0cHJvdGVjdGVkIGlzTGFzdEVsZW1lbnRCbGVlZGluZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyZWRJdGVtcy5sZW5ndGggPiAwID8gdGhpcy5fcmVuZGVyZWRJdGVtc1t0aGlzLl9yZW5kZXJlZEl0ZW1zLmxlbmd0aCAtIDFdLmlzQmxlZWRpbmcoKSA6IGZhbHNlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGFwcGx5UGFkZGluZygpIHtcblx0XHRpZiAoIXRoaXMucmVuZGVyZWRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFkZGluZykge1xuXHRcdFx0dmFyIHBoeXNpY2FsUGFkZGluZyA9IHRoaXMucGFkZGluZy50b1NwYWNpbmdEZWZpbml0aW9uKHRoaXMuaG9zdENvbmZpZyk7XG5cblx0XHRcdHRoaXMucmVuZGVyZWRFbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBwaHlzaWNhbFBhZGRpbmcudG9wICsgXCJweFwiO1xuXHRcdFx0dGhpcy5yZW5kZXJlZEVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGh5c2ljYWxQYWRkaW5nLnJpZ2h0ICsgXCJweFwiO1xuXHRcdFx0dGhpcy5yZW5kZXJlZEVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IHBoeXNpY2FsUGFkZGluZy5ib3R0b20gKyBcInB4XCI7XG5cdFx0XHR0aGlzLnJlbmRlcmVkRWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IHBoeXNpY2FsUGFkZGluZy5sZWZ0ICsgXCJweFwiO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0aGlzLmhhc0JhY2tncm91bmQpIHtcblx0XHRcdHZhciBwaHlzaWNhbE1hcmdpbjogU3BhY2luZ0RlZmluaXRpb24gPSBuZXcgU3BhY2luZ0RlZmluaXRpb24oKTtcblx0XHRcdHZhciBwaHlzaWNhbFBhZGRpbmc6IFNwYWNpbmdEZWZpbml0aW9uID0gbmV3IFNwYWNpbmdEZWZpbml0aW9uKCk7XG5cblx0XHRcdHZhciB1c2VBdXRvUGFkZGluZyA9ICh0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmNhbkNvbnRlbnRCbGVlZCgpIDogZmFsc2UpICYmIEFkYXB0aXZlQ2FyZC51c2VBdXRvbWF0aWNDb250YWluZXJCbGVlZGluZztcblxuXHRcdFx0aWYgKHVzZUF1dG9QYWRkaW5nKSB7XG5cdFx0XHRcdHZhciBlZmZlY3RpdmVQYWRkaW5nID0gdGhpcy5nZXROb25aZXJvUGFkZGluZygpO1xuXHRcdFx0XHR2YXIgZWZmZWN0aXZlTWFyZ2luOiBQYWRkaW5nRGVmaW5pdGlvbiA9IG5ldyBQYWRkaW5nRGVmaW5pdGlvbihcblx0XHRcdFx0XHRlZmZlY3RpdmVQYWRkaW5nLnRvcCxcblx0XHRcdFx0XHRlZmZlY3RpdmVQYWRkaW5nLnJpZ2h0LFxuXHRcdFx0XHRcdGVmZmVjdGl2ZVBhZGRpbmcuYm90dG9tLFxuXHRcdFx0XHRcdGVmZmVjdGl2ZVBhZGRpbmcubGVmdCk7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmlzQXRUaGVWZXJ5VG9wKCkpIHtcblx0XHRcdFx0XHRlZmZlY3RpdmVQYWRkaW5nLnRvcCA9IEVudW1zLlNwYWNpbmcuTm9uZTtcblx0XHRcdFx0XHRlZmZlY3RpdmVNYXJnaW4udG9wID0gRW51bXMuU3BhY2luZy5Ob25lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLmlzQXRUaGVWZXJ5Qm90dG9tKCkpIHtcblx0XHRcdFx0XHRlZmZlY3RpdmVQYWRkaW5nLmJvdHRvbSA9IEVudW1zLlNwYWNpbmcuTm9uZTtcblx0XHRcdFx0XHRlZmZlY3RpdmVNYXJnaW4uYm90dG9tID0gRW51bXMuU3BhY2luZy5Ob25lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLmlzQXRUaGVWZXJ5TGVmdCgpKSB7XG5cdFx0XHRcdFx0ZWZmZWN0aXZlUGFkZGluZy5sZWZ0ID0gRW51bXMuU3BhY2luZy5Ob25lO1xuXHRcdFx0XHRcdGVmZmVjdGl2ZU1hcmdpbi5sZWZ0ID0gRW51bXMuU3BhY2luZy5Ob25lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLmlzQXRUaGVWZXJ5UmlnaHQoKSkge1xuXHRcdFx0XHRcdGVmZmVjdGl2ZVBhZGRpbmcucmlnaHQgPSBFbnVtcy5TcGFjaW5nLk5vbmU7XG5cdFx0XHRcdFx0ZWZmZWN0aXZlTWFyZ2luLnJpZ2h0ID0gRW51bXMuU3BhY2luZy5Ob25lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGVmZmVjdGl2ZVBhZGRpbmcubGVmdCAhPSBFbnVtcy5TcGFjaW5nLk5vbmUgfHwgZWZmZWN0aXZlUGFkZGluZy5yaWdodCAhPSBFbnVtcy5TcGFjaW5nLk5vbmUpIHtcblx0XHRcdFx0XHRpZiAoZWZmZWN0aXZlUGFkZGluZy5sZWZ0ID09IEVudW1zLlNwYWNpbmcuTm9uZSkge1xuXHRcdFx0XHRcdFx0ZWZmZWN0aXZlUGFkZGluZy5sZWZ0ID0gZWZmZWN0aXZlUGFkZGluZy5yaWdodDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZWZmZWN0aXZlUGFkZGluZy5yaWdodCA9PSBFbnVtcy5TcGFjaW5nLk5vbmUpIHtcblx0XHRcdFx0XHRcdGVmZmVjdGl2ZVBhZGRpbmcucmlnaHQgPSBlZmZlY3RpdmVQYWRkaW5nLmxlZnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGVmZmVjdGl2ZVBhZGRpbmcudG9wICE9IEVudW1zLlNwYWNpbmcuTm9uZSB8fCBlZmZlY3RpdmVQYWRkaW5nLmJvdHRvbSAhPSBFbnVtcy5TcGFjaW5nLk5vbmUpIHtcblx0XHRcdFx0XHRpZiAoZWZmZWN0aXZlUGFkZGluZy50b3AgPT0gRW51bXMuU3BhY2luZy5Ob25lKSB7XG5cdFx0XHRcdFx0XHRlZmZlY3RpdmVQYWRkaW5nLnRvcCA9IGVmZmVjdGl2ZVBhZGRpbmcuYm90dG9tO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChlZmZlY3RpdmVQYWRkaW5nLmJvdHRvbSA9PSBFbnVtcy5TcGFjaW5nLk5vbmUpIHtcblx0XHRcdFx0XHRcdGVmZmVjdGl2ZVBhZGRpbmcuYm90dG9tID0gZWZmZWN0aXZlUGFkZGluZy50b3A7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGVmZmVjdGl2ZVBhZGRpbmcudG9wICE9IEVudW1zLlNwYWNpbmcuTm9uZVxuXHRcdFx0XHRcdHx8IGVmZmVjdGl2ZVBhZGRpbmcucmlnaHQgIT0gRW51bXMuU3BhY2luZy5Ob25lXG5cdFx0XHRcdFx0fHwgZWZmZWN0aXZlUGFkZGluZy5ib3R0b20gIT0gRW51bXMuU3BhY2luZy5Ob25lXG5cdFx0XHRcdFx0fHwgZWZmZWN0aXZlUGFkZGluZy5sZWZ0ICE9IEVudW1zLlNwYWNpbmcuTm9uZSkge1xuXHRcdFx0XHRcdGlmIChlZmZlY3RpdmVQYWRkaW5nLnRvcCA9PSBFbnVtcy5TcGFjaW5nLk5vbmUpIHtcblx0XHRcdFx0XHRcdGVmZmVjdGl2ZVBhZGRpbmcudG9wID0gRW51bXMuU3BhY2luZy5EZWZhdWx0O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChlZmZlY3RpdmVQYWRkaW5nLnJpZ2h0ID09IEVudW1zLlNwYWNpbmcuTm9uZSkge1xuXHRcdFx0XHRcdFx0ZWZmZWN0aXZlUGFkZGluZy5yaWdodCA9IEVudW1zLlNwYWNpbmcuRGVmYXVsdDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZWZmZWN0aXZlUGFkZGluZy5ib3R0b20gPT0gRW51bXMuU3BhY2luZy5Ob25lKSB7XG5cdFx0XHRcdFx0XHRlZmZlY3RpdmVQYWRkaW5nID0gT2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdFx0e30sXG5cdFx0XHRcdFx0XHRcdGVmZmVjdGl2ZVBhZGRpbmcsXG5cdFx0XHRcdFx0XHRcdHsgYm90dG9tOiBFbnVtcy5TcGFjaW5nLkRlZmF1bHQgfVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZWZmZWN0aXZlUGFkZGluZy5sZWZ0ID09IEVudW1zLlNwYWNpbmcuTm9uZSkge1xuXHRcdFx0XHRcdFx0ZWZmZWN0aXZlUGFkZGluZyA9IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdFx0XHRlZmZlY3RpdmVQYWRkaW5nLFxuXHRcdFx0XHRcdFx0XHR7IGxlZnQ6IEVudW1zLlNwYWNpbmcuRGVmYXVsdCB9XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChlZmZlY3RpdmVQYWRkaW5nLnRvcCA9PSBFbnVtcy5TcGFjaW5nLk5vbmUgJiZcblx0XHRcdFx0XHRlZmZlY3RpdmVQYWRkaW5nLnJpZ2h0ID09IEVudW1zLlNwYWNpbmcuTm9uZSAmJlxuXHRcdFx0XHRcdGVmZmVjdGl2ZVBhZGRpbmcuYm90dG9tID09IEVudW1zLlNwYWNpbmcuTm9uZSAmJlxuXHRcdFx0XHRcdGVmZmVjdGl2ZVBhZGRpbmcubGVmdCA9PSBFbnVtcy5TcGFjaW5nLk5vbmUpIHtcblx0XHRcdFx0XHRlZmZlY3RpdmVQYWRkaW5nID0gbmV3IFBhZGRpbmdEZWZpbml0aW9uKFxuXHRcdFx0XHRcdFx0RW51bXMuU3BhY2luZy5QYWRkaW5nLFxuXHRcdFx0XHRcdFx0RW51bXMuU3BhY2luZy5QYWRkaW5nLFxuXHRcdFx0XHRcdFx0RW51bXMuU3BhY2luZy5QYWRkaW5nLFxuXHRcdFx0XHRcdFx0RW51bXMuU3BhY2luZy5QYWRkaW5nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBoeXNpY2FsTWFyZ2luID0gZWZmZWN0aXZlTWFyZ2luLnRvU3BhY2luZ0RlZmluaXRpb24odGhpcy5ob3N0Q29uZmlnKTtcblx0XHRcdFx0cGh5c2ljYWxQYWRkaW5nID0gZWZmZWN0aXZlUGFkZGluZy50b1NwYWNpbmdEZWZpbml0aW9uKHRoaXMuaG9zdENvbmZpZyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cGh5c2ljYWxQYWRkaW5nID0gbmV3IFBhZGRpbmdEZWZpbml0aW9uKFxuXHRcdFx0XHRcdEVudW1zLlNwYWNpbmcuUGFkZGluZyxcblx0XHRcdFx0XHRFbnVtcy5TcGFjaW5nLlBhZGRpbmcsXG5cdFx0XHRcdFx0RW51bXMuU3BhY2luZy5QYWRkaW5nLFxuXHRcdFx0XHRcdEVudW1zLlNwYWNpbmcuUGFkZGluZ1xuXHRcdFx0XHQpLnRvU3BhY2luZ0RlZmluaXRpb24odGhpcy5ob3N0Q29uZmlnKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5yZW5kZXJlZEVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gXCItXCIgKyBwaHlzaWNhbE1hcmdpbi50b3AgKyBcInB4XCI7XG5cdFx0XHR0aGlzLnJlbmRlcmVkRWxlbWVudC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiLVwiICsgcGh5c2ljYWxNYXJnaW4ucmlnaHQgKyBcInB4XCI7XG5cdFx0XHR0aGlzLnJlbmRlcmVkRWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHBoeXNpY2FsTWFyZ2luLmJvdHRvbSArIFwicHhcIjtcblx0XHRcdHRoaXMucmVuZGVyZWRFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBcIi1cIiArIHBoeXNpY2FsTWFyZ2luLmxlZnQgKyBcInB4XCI7XG5cblx0XHRcdHRoaXMucmVuZGVyZWRFbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBwaHlzaWNhbFBhZGRpbmcudG9wICsgXCJweFwiO1xuXHRcdFx0dGhpcy5yZW5kZXJlZEVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGh5c2ljYWxQYWRkaW5nLnJpZ2h0ICsgXCJweFwiO1xuXHRcdFx0dGhpcy5yZW5kZXJlZEVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IHBoeXNpY2FsUGFkZGluZy5ib3R0b20gKyBcInB4XCI7XG5cdFx0XHR0aGlzLnJlbmRlcmVkRWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IHBoeXNpY2FsUGFkZGluZy5sZWZ0ICsgXCJweFwiO1xuXG5cdFx0XHRpZiAodGhpcy5zZXBhcmF0b3JFbGVtZW50KSB7XG5cdFx0XHRcdGlmICh0aGlzLnNlcGFyYXRvck9yaWVudGF0aW9uID09IEVudW1zLk9yaWVudGF0aW9uLkhvcml6b250YWwpIHtcblx0XHRcdFx0XHR0aGlzLnNlcGFyYXRvckVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IFwiLVwiICsgcGh5c2ljYWxNYXJnaW4ubGVmdCArIFwicHhcIjtcblx0XHRcdFx0XHR0aGlzLnNlcGFyYXRvckVsZW1lbnQuc3R5bGUubWFyZ2luUmlnaHQgPSBcIi1cIiArIHBoeXNpY2FsTWFyZ2luLnJpZ2h0ICsgXCJweFwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2VwYXJhdG9yRWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSBcIi1cIiArIHBoeXNpY2FsTWFyZ2luLnRvcCArIFwicHhcIjtcblx0XHRcdFx0XHR0aGlzLnNlcGFyYXRvckVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gXCItXCIgKyBwaHlzaWNhbE1hcmdpbi5ib3R0b20gKyBcInB4XCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0xhc3RFbGVtZW50QmxlZWRpbmcoKSkge1xuXHRcdFx0dGhpcy5yZW5kZXJlZEVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMHB4XCI7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGludGVybmFsUmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcblx0XHR0aGlzLl9yZW5kZXJlZEl0ZW1zID0gW107XG5cblx0XHQvLyBDYWNoZSBob3N0Q29uZmlnIHRvIGF2b2lkIHdhbGtpbmcgdGhlIHBhcmVudCBoaWVyYXJjaHkgc2V2ZXJhbCB0aW1lc1xuXHRcdGxldCBob3N0Q29uZmlnID0gdGhpcy5ob3N0Q29uZmlnO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdFx0aWYgKHRoaXMucnRsICE9IG51bGwgJiYgdGhpcy5ydGwpIHtcblx0XHRcdGVsZW1lbnQuZGlyID0gXCJydGxcIjtcblx0XHR9XG5cblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiYWMtY29udGFpbmVyXCIpKTtcblx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xuXG5cdFx0aWYgKEFkYXB0aXZlQ2FyZC51c2VBZHZhbmNlZENhcmRCb3R0b21UcnVuY2F0aW9uKSB7XG5cdFx0XHQvLyBGb3JjZXMgdGhlIGNvbnRhaW5lciB0byBiZSBhdCBsZWFzdCBhcyB0YWxsIGFzIGl0cyBjb250ZW50LlxuXHRcdFx0Ly9cblx0XHRcdC8vIEZpeGVzIGEgcXVpcmsgaW4gQ2hyb21lIHdoZXJlLCBmb3IgbmVzdGVkIGZsZXggZWxlbWVudHMsIHRoZVxuXHRcdFx0Ly8gaW5uZXIgZWxlbWVudCdzIGhlaWdodCB3b3VsZCBuZXZlciBleGNlZWQgdGhlIG91dGVyIGVsZW1lbnQnc1xuXHRcdFx0Ly8gaGVpZ2h0LiBUaGlzIGNhdXNlZCBvdmVyZmxvdyB0cnVuY2F0aW9uIHRvIGJyZWFrIC0tIGNvbnRhaW5lcnNcblx0XHRcdC8vIHdvdWxkIGFsd2F5cyBiZSBtZWFzdXJlZCBhcyBub3Qgb3ZlcmZsb3dpbmcsIHNpbmNlIHRoZWlyIGhlaWdodHNcblx0XHRcdC8vIHdlcmUgY29uc3RyYWluZWQgYnkgdGhlaXIgcGFyZW50cyBhcyBvcHBvc2VkIHRvIHRydWx5IHJlZmxlY3Rpbmdcblx0XHRcdC8vIHRoZSBoZWlnaHQgb2YgdGhlaXIgY29udGVudC5cblx0XHRcdC8vXG5cdFx0XHQvLyBTZWUgdGhlIFwiQnJvd3NlciBSZW5kZXJpbmcgTm90ZXNcIiBzZWN0aW9uIG9mIHRoaXMgYW5zd2VyOlxuXHRcdFx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzYyNDcxNDAvd2h5LWRvZXNudC1mbGV4LWl0ZW0tc2hyaW5rLXBhc3QtY29udGVudC1zaXplXG5cdFx0XHRlbGVtZW50LnN0eWxlLm1pbkhlaWdodCA9ICctd2Via2l0LW1pbi1jb250ZW50Jztcblx0XHR9XG5cblx0XHRzd2l0Y2ggKHRoaXMudmVydGljYWxDb250ZW50QWxpZ25tZW50KSB7XG5cdFx0XHRjYXNlIEVudW1zLlZlcnRpY2FsQWxpZ25tZW50LkNlbnRlcjpcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBFbnVtcy5WZXJ0aWNhbEFsaWdubWVudC5Cb3R0b206XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImZsZXgtZW5kXCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiZmxleC1zdGFydFwiO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAodGhpcy5oYXNCYWNrZ3JvdW5kKSB7XG5cdFx0XHRpZiAodGhpcy5iYWNrZ3JvdW5kSW1hZ2UpIHtcblx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UuYXBwbHkoZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBzdHlsZURlZmluaXRpb24gPSB0aGlzLmhvc3RDb25maWcuY29udGFpbmVyU3R5bGVzLmdldFN0eWxlQnlOYW1lKHRoaXMuc3R5bGUsIHRoaXMuaG9zdENvbmZpZy5jb250YWluZXJTdHlsZXMuZ2V0U3R5bGVCeU5hbWUodGhpcy5kZWZhdWx0U3R5bGUpKTtcblxuXHRcdFx0aWYgKCFVdGlscy5pc051bGxPckVtcHR5KHN0eWxlRGVmaW5pdGlvbi5iYWNrZ3JvdW5kQ29sb3IpKSB7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gVXRpbHMuc3RyaW5nVG9Dc3NDb2xvcihzdHlsZURlZmluaXRpb24uYmFja2dyb3VuZENvbG9yKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZWxlY3RBY3Rpb24gJiYgaG9zdENvbmZpZy5zdXBwb3J0c0ludGVyYWN0aXZpdHkpIHtcblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChob3N0Q29uZmlnLm1ha2VDc3NDbGFzc05hbWUoXCJhYy1zZWxlY3RhYmxlXCIpKTtcblx0XHRcdGVsZW1lbnQudGFiSW5kZXggPSAwO1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiYnV0dG9uXCIpO1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHRoaXMuc2VsZWN0QWN0aW9uLnRpdGxlKTtcblxuXHRcdFx0ZWxlbWVudC5vbmNsaWNrID0gKGUpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0QWN0aW9uICE9IG51bGwpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdEFjdGlvbi5leGVjdXRlKCk7XG5cdFx0XHRcdFx0ZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQub25rZXlwcmVzcyA9IChlKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLnNlbGVjdEFjdGlvbiAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gRW50ZXIgb3Igc3BhY2UgcHJlc3NlZFxuXHRcdFx0XHRcdGlmIChlLmtleUNvZGUgPT0gMTMgfHwgZS5rZXlDb2RlID09IDMyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNlbGVjdEFjdGlvbi5leGVjdXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHJlbmRlcmVkRWxlbWVudCA9IHRoaXMuaXNFbGVtZW50QWxsb3dlZCh0aGlzLl9pdGVtc1tpXSwgdGhpcy5nZXRGb3JiaWRkZW5FbGVtZW50VHlwZXMoKSkgPyB0aGlzLl9pdGVtc1tpXS5yZW5kZXIoKSA6IG51bGw7XG5cblx0XHRcdFx0aWYgKHJlbmRlcmVkRWxlbWVudCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLl9yZW5kZXJlZEl0ZW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5faXRlbXNbaV0uc2VwYXJhdG9yRWxlbWVudCkge1xuXHRcdFx0XHRcdFx0dGhpcy5faXRlbXNbaV0uc2VwYXJhdG9yRWxlbWVudC5zdHlsZS5mbGV4ID0gXCIwIDAgYXV0b1wiO1xuXG5cdFx0XHRcdFx0XHRVdGlscy5hcHBlbmRDaGlsZChlbGVtZW50LCB0aGlzLl9pdGVtc1tpXS5zZXBhcmF0b3JFbGVtZW50KTtcblx0XHRcdFx0XHR9XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9pdGVtc1tpXS5nZXRKc29uVHlwZU5hbWUoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnSHRtbEJsb2NrJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luSHRtbCA9IGVsZW1lbnQuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlckh0bWwgPSByZW5kZXJlZEVsZW1lbnQuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBvcmlnaW5IdG1sICsgcmVuZGVySHRtbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sQmxvY2sgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImh0bWxCbG9ja1wiKSA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaHRtbEJsb2NrXCIpICsgXCIxXCIgOiBcIjFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdodG1sQmxvY2snLCBodG1sQmxvY2spO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sQmxvY2sgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImh0bWxCbG9ja1wiKSA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaHRtbEJsb2NrXCIpICsgXCIwXCIgOiBcIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdodG1sQmxvY2snLCBodG1sQmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuYXBwZW5kQ2hpbGQoZWxlbWVudCwgcmVuZGVyZWRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMucHVzaCh0aGlzLl9pdGVtc1tpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5pc0Rlc2lnbk1vZGUoKSkge1xuXHRcdFx0XHR2YXIgcGxhY2Vob2xkZXJFbGVtZW50ID0gdGhpcy5jcmVhdGVQbGFjZWhvbGRlckVsZW1lbnQoKTtcblx0XHRcdFx0cGxhY2Vob2xkZXJFbGVtZW50LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cdFx0XHRcdHBsYWNlaG9sZGVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcblxuXHRcdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyRWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdHJ1bmNhdGVPdmVyZmxvdyhtYXhIZWlnaHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdC8vIEFkZCAxIHRvIGFjY291bnQgZm9yIHJvdW5kaW5nIGRpZmZlcmVuY2VzIGJldHdlZW4gYnJvd3NlcnNcblx0XHR2YXIgYm91bmRhcnkgPSB0aGlzLnJlbmRlcmVkRWxlbWVudC5vZmZzZXRUb3AgKyBtYXhIZWlnaHQgKyAxO1xuXG5cdFx0dmFyIGhhbmRsZUVsZW1lbnQgPSAoY2FyZEVsZW1lbnQ6IENhcmRFbGVtZW50KSA9PiB7XG5cdFx0XHRsZXQgZWx0ID0gY2FyZEVsZW1lbnQucmVuZGVyZWRFbGVtZW50O1xuXG5cdFx0XHRpZiAoZWx0KSB7XG5cdFx0XHRcdHN3aXRjaCAoVXRpbHMuZ2V0Rml0U3RhdHVzKGVsdCwgYm91bmRhcnkpKSB7XG5cdFx0XHRcdFx0Y2FzZSBFbnVtcy5Db250YWluZXJGaXRTdGF0dXMuRnVsbHlJbkNvbnRhaW5lcjpcblx0XHRcdFx0XHRcdGxldCBzaXplQ2hhbmdlZCA9IGNhcmRFbGVtZW50WydyZXNldE92ZXJmbG93J10oKTtcblx0XHRcdFx0XHRcdC8vIElmIHRoZSBlbGVtZW50J3Mgc2l6ZSBjaGFuZ2VkIGFmdGVyIHJlc2V0dGluZyBjb250ZW50LFxuXHRcdFx0XHRcdFx0Ly8gd2UgaGF2ZSB0byBjaGVjayBpZiBpdCBzdGlsbCBmaXRzIGZ1bGx5IGluIHRoZSBjYXJkXG5cdFx0XHRcdFx0XHRpZiAoc2l6ZUNoYW5nZWQpIHtcblx0XHRcdFx0XHRcdFx0aGFuZGxlRWxlbWVudChjYXJkRWxlbWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIEVudW1zLkNvbnRhaW5lckZpdFN0YXR1cy5PdmVyZmxvd2luZzpcblx0XHRcdFx0XHRcdGxldCBtYXhIZWlnaHQgPSBib3VuZGFyeSAtIGVsdC5vZmZzZXRUb3A7XG5cdFx0XHRcdFx0XHRjYXJkRWxlbWVudFsnaGFuZGxlT3ZlcmZsb3cnXShtYXhIZWlnaHQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBFbnVtcy5Db250YWluZXJGaXRTdGF0dXMuRnVsbHlPdXRPZkNvbnRhaW5lcjpcblx0XHRcdFx0XHRcdGNhcmRFbGVtZW50WydoYW5kbGVPdmVyZmxvdyddKDApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Zm9yIChsZXQgaXRlbSBvZiB0aGlzLl9pdGVtcykge1xuXHRcdFx0aGFuZGxlRWxlbWVudChpdGVtKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHByb3RlY3RlZCB1bmRvT3ZlcmZsb3dUcnVuY2F0aW9uKCkge1xuXHRcdGZvciAobGV0IGl0ZW0gb2YgdGhpcy5faXRlbXMpIHtcblx0XHRcdGl0ZW1bJ3Jlc2V0T3ZlcmZsb3cnXSgpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXQgaGFzQmFja2dyb3VuZCgpOiBib29sZWFuIHtcblx0XHR2YXIgcGFyZW50Q29udGFpbmVyID0gdGhpcy5nZXRQYXJlbnRDb250YWluZXIoKTtcblxuXHRcdHJldHVybiB0aGlzLmJhY2tncm91bmRJbWFnZSAhPSB1bmRlZmluZWQgfHwgKHRoaXMuaGFzRXhwbGljaXRTdHlsZSAmJiAocGFyZW50Q29udGFpbmVyID8gcGFyZW50Q29udGFpbmVyLnN0eWxlICE9IHRoaXMuc3R5bGUgOiBmYWxzZSkpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldCBkZWZhdWx0U3R5bGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gRW51bXMuQ29udGFpbmVyU3R5bGUuRGVmYXVsdDtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXQgYWxsb3dDdXN0b21TdHlsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGJhY2tncm91bmRJbWFnZTogQmFja2dyb3VuZEltYWdlO1xuXHR2ZXJ0aWNhbENvbnRlbnRBbGlnbm1lbnQ6IEVudW1zLlZlcnRpY2FsQWxpZ25tZW50ID0gRW51bXMuVmVydGljYWxBbGlnbm1lbnQuVG9wO1xuXHRydGw/OiBib29sZWFuID0gbnVsbDtcblxuXHR0b0pTT04oKSB7XG5cdFx0bGV0IHJlc3VsdCA9IHN1cGVyLnRvSlNPTigpO1xuXG5cdFx0aWYgKHRoaXMuX3NlbGVjdEFjdGlvbikge1xuXHRcdFx0VXRpbHMuc2V0UHJvcGVydHkocmVzdWx0LCBcInNlbGVjdEFjdGlvblwiLCB0aGlzLl9zZWxlY3RBY3Rpb24udG9KU09OKCkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmJhY2tncm91bmRJbWFnZSkge1xuXHRcdFx0VXRpbHMuc2V0UHJvcGVydHkocmVzdWx0LCBcImJhY2tncm91bmRJbWFnZVwiLCB0aGlzLmJhY2tncm91bmRJbWFnZS51cmwpO1xuXHRcdH1cblxuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJzdHlsZVwiLCB0aGlzLnN0eWxlLCBcImRlZmF1bHRcIik7XG5cdFx0VXRpbHMuc2V0RW51bVByb3BlcnR5KEVudW1zLlZlcnRpY2FsQWxpZ25tZW50LCByZXN1bHQsIFwidmVydGljYWxDb250ZW50QWxpZ25tZW50XCIsIHRoaXMudmVydGljYWxDb250ZW50QWxpZ25tZW50LCBFbnVtcy5WZXJ0aWNhbEFsaWdubWVudC5Ub3ApO1xuXG5cdFx0aWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdGxldCBlbGVtZW50cyA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCBlbGVtZW50IG9mIHRoaXMuX2l0ZW1zKSB7XG5cdFx0XHRcdGVsZW1lbnRzLnB1c2goZWxlbWVudC50b0pTT04oKSk7XG5cdFx0XHR9XG5cblx0XHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgdGhpcy5nZXRJdGVtc0NvbGxlY3Rpb25Qcm9wZXJ0eU5hbWUoKSwgZWxlbWVudHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRJdGVtQ291bnQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5faXRlbXMubGVuZ3RoO1xuXHR9XG5cblx0Z2V0SXRlbUF0KGluZGV4OiBudW1iZXIpOiBDYXJkRWxlbWVudCB7XG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1zW2luZGV4XTtcblx0fVxuXG5cdGdldEpzb25UeXBlTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBcIkNvbnRhaW5lclwiO1xuXHR9XG5cblx0aXNCbGVlZGluZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0xhc3RFbGVtZW50QmxlZWRpbmcoKTtcblx0fVxuXG5cdGlzRmlyc3RFbGVtZW50KGVsZW1lbnQ6IENhcmRFbGVtZW50KTogYm9vbGVhbiB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuX2l0ZW1zW2ldLmlzVmlzaWJsZSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5faXRlbXNbaV0gPT0gZWxlbWVudDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpc0xhc3RFbGVtZW50KGVsZW1lbnQ6IENhcmRFbGVtZW50KTogYm9vbGVhbiB7XG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRpZiAodGhpcy5faXRlbXNbaV0uaXNWaXNpYmxlKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9pdGVtc1tpXSA9PSBlbGVtZW50O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlzUnRsKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLnJ0bCAhPSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5ydGw7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IHBhcmVudENvbnRhaW5lciA9IHRoaXMuZ2V0UGFyZW50Q29udGFpbmVyKCk7XG5cblx0XHRcdHJldHVybiBwYXJlbnRDb250YWluZXIgPyBwYXJlbnRDb250YWluZXIuaXNSdGwoKSA6IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHZhbGlkYXRlKCk6IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4ge1xuXHRcdHZhciByZXN1bHQ6IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4gPSBbXTtcblxuXHRcdGlmICh0aGlzLl9zdHlsZSkge1xuXHRcdFx0dmFyIHN0eWxlRGVmaW5pdGlvbiA9IHRoaXMuaG9zdENvbmZpZy5jb250YWluZXJTdHlsZXMuZ2V0U3R5bGVCeU5hbWUodGhpcy5fc3R5bGUpO1xuXG5cdFx0XHRpZiAoIXN0eWxlRGVmaW5pdGlvbikge1xuXHRcdFx0XHRyZXN1bHQucHVzaChcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLkludmFsaWRQcm9wZXJ0eVZhbHVlLFxuXHRcdFx0XHRcdFx0bWVzc2FnZTogXCJVbmtub3duIGNvbnRhaW5lciBzdHlsZTogXCIgKyB0aGlzLl9zdHlsZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICghdGhpcy5ob3N0Q29uZmlnLnN1cHBvcnRzSW50ZXJhY3Rpdml0eSAmJiB0aGlzLl9pdGVtc1tpXS5pc0ludGVyYWN0aXZlKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGVycm9yOiBFbnVtcy5WYWxpZGF0aW9uRXJyb3IuSW50ZXJhY3Rpdml0eU5vdEFsbG93ZWQsXG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBcIkludGVyYWN0aXZpdHkgaXMgbm90IGFsbG93ZWQuXCJcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLmlzRWxlbWVudEFsbG93ZWQodGhpcy5faXRlbXNbaV0sIHRoaXMuZ2V0Rm9yYmlkZGVuRWxlbWVudFR5cGVzKCkpKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGVycm9yOiBFbnVtcy5WYWxpZGF0aW9uRXJyb3IuSW50ZXJhY3Rpdml0eU5vdEFsbG93ZWQsXG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBcIkVsZW1lbnRzIG9mIHR5cGUgXCIgKyB0aGlzLl9pdGVtc1tpXS5nZXRKc29uVHlwZU5hbWUoKSArIFwiIGFyZSBub3QgYWxsb3dlZCBpbiB0aGlzIGNvbnRhaW5lci5cIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXMuX2l0ZW1zW2ldLnZhbGlkYXRlKCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRwYXJzZShqc29uOiBhbnksIGVycm9ycz86IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4pIHtcblx0XHRzdXBlci5wYXJzZShqc29uLCBlcnJvcnMpO1xuXG5cdFx0dGhpcy5zZXRTaG91bGRGYWxsYmFjayhmYWxzZSk7XG5cblx0XHR0aGlzLl9pdGVtcyA9IFtdO1xuXHRcdHRoaXMuX3JlbmRlcmVkSXRlbXMgPSBbXTtcblxuXHRcdGxldCBqc29uQmFja2dyb3VuZEltYWdlID0ganNvbltcImJhY2tncm91bmRJbWFnZVwiXTtcblxuXHRcdGlmIChqc29uQmFja2dyb3VuZEltYWdlKSB7XG5cdFx0XHR0aGlzLmJhY2tncm91bmRJbWFnZSA9IG5ldyBCYWNrZ3JvdW5kSW1hZ2UoKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBqc29uQmFja2dyb3VuZEltYWdlID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHRoaXMuYmFja2dyb3VuZEltYWdlLnVybCA9IGpzb25CYWNrZ3JvdW5kSW1hZ2U7XG5cdFx0XHRcdHRoaXMuYmFja2dyb3VuZEltYWdlLm1vZGUgPSBFbnVtcy5CYWNrZ3JvdW5kSW1hZ2VNb2RlLlN0cmV0Y2g7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YganNvbkJhY2tncm91bmRJbWFnZSA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0XHR0aGlzLmJhY2tncm91bmRJbWFnZSA9IG5ldyBCYWNrZ3JvdW5kSW1hZ2UoKTtcblx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UucGFyc2UoanNvbltcImJhY2tncm91bmRJbWFnZVwiXSwgZXJyb3JzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnZlcnRpY2FsQ29udGVudEFsaWdubWVudCA9IFV0aWxzLmdldEVudW1WYWx1ZU9yRGVmYXVsdChFbnVtcy5WZXJ0aWNhbEFsaWdubWVudCwganNvbltcInZlcnRpY2FsQ29udGVudEFsaWdubWVudFwiXSwgdGhpcy52ZXJ0aWNhbENvbnRlbnRBbGlnbm1lbnQpO1xuXG5cdFx0dGhpcy5fc3R5bGUgPSBqc29uW1wic3R5bGVcIl07XG5cblx0XHR0aGlzLnNlbGVjdEFjdGlvbiA9IGNyZWF0ZUFjdGlvbkluc3RhbmNlKFxuXHRcdFx0dGhpcyxcblx0XHRcdGpzb25bXCJzZWxlY3RBY3Rpb25cIl0sXG5cdFx0XHRlcnJvcnMpO1xuXG5cdFx0aWYgKGpzb25bdGhpcy5nZXRJdGVtc0NvbGxlY3Rpb25Qcm9wZXJ0eU5hbWUoKV0gIT0gbnVsbCkge1xuXHRcdFx0bGV0IGl0ZW1zID0ganNvblt0aGlzLmdldEl0ZW1zQ29sbGVjdGlvblByb3BlcnR5TmFtZSgpXSBhcyBBcnJheTxhbnk+O1xuXG5cdFx0XHR0aGlzLmNsZWFyKCk7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50SW5zdGFuY2UodGhpcywgaXRlbXNbaV0sIGVycm9ycyk7XG5cblx0XHRcdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdFx0XHR0aGlzLmluc2VydEl0ZW1BdChlbGVtZW50LCAtMSwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpbmRleE9mKGNhcmRFbGVtZW50OiBDYXJkRWxlbWVudCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoY2FyZEVsZW1lbnQpO1xuXHR9XG5cblx0YWRkSXRlbShpdGVtOiBDYXJkRWxlbWVudCkge1xuXHRcdHRoaXMuaW5zZXJ0SXRlbUF0KGl0ZW0sIC0xLCBmYWxzZSk7XG5cdH1cblxuXHRpbnNlcnRJdGVtQmVmb3JlKGl0ZW06IENhcmRFbGVtZW50LCBpbnNlcnRCZWZvcmU6IENhcmRFbGVtZW50KSB7XG5cdFx0dGhpcy5pbnNlcnRJdGVtQXQoaXRlbSwgdGhpcy5faXRlbXMuaW5kZXhPZihpbnNlcnRCZWZvcmUpLCBmYWxzZSk7XG5cdH1cblxuXHRpbnNlcnRJdGVtQWZ0ZXIoaXRlbTogQ2FyZEVsZW1lbnQsIGluc2VydEFmdGVyOiBDYXJkRWxlbWVudCkge1xuXHRcdHRoaXMuaW5zZXJ0SXRlbUF0KGl0ZW0sIHRoaXMuX2l0ZW1zLmluZGV4T2YoaW5zZXJ0QWZ0ZXIpICsgMSwgZmFsc2UpO1xuXHR9XG5cblx0cmVtb3ZlSXRlbShpdGVtOiBDYXJkRWxlbWVudCk6IGJvb2xlYW4ge1xuXHRcdHZhciBpdGVtSW5kZXggPSB0aGlzLl9pdGVtcy5pbmRleE9mKGl0ZW0pO1xuXG5cdFx0aWYgKGl0ZW1JbmRleCA+PSAwKSB7XG5cdFx0XHR0aGlzLl9pdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcblxuXHRcdFx0aXRlbS5zZXRQYXJlbnQobnVsbCk7XG5cblx0XHRcdHRoaXMudXBkYXRlTGF5b3V0KCk7XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuX2l0ZW1zID0gW107XG5cdH1cblxuXHRjYW5Db250ZW50QmxlZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaGFzQmFja2dyb3VuZCA/IGZhbHNlIDogc3VwZXIuY2FuQ29udGVudEJsZWVkKCk7XG5cdH1cblxuXHRnZXRBbGxJbnB1dHMoKTogQXJyYXk8SW5wdXQ+IHtcblx0XHR2YXIgcmVzdWx0OiBBcnJheTxJbnB1dD4gPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtOiBDYXJkRWxlbWVudCA9IHRoaXMuX2l0ZW1zW2ldO1xuXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQuY29uY2F0KGl0ZW0uZ2V0QWxsSW5wdXRzKCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRSZXNvdXJjZUluZm9ybWF0aW9uKCk6IEFycmF5PElSZXNvdXJjZUluZm9ybWF0aW9uPiB7XG5cdFx0bGV0IHJlc3VsdDogQXJyYXk8SVJlc291cmNlSW5mb3JtYXRpb24+ID0gW107XG5cblx0XHRpZiAodGhpcy5iYWNrZ3JvdW5kSW1hZ2UgJiYgIVV0aWxzLmlzTnVsbE9yRW1wdHkodGhpcy5iYWNrZ3JvdW5kSW1hZ2UudXJsKSkge1xuXHRcdFx0cmVzdWx0LnB1c2goeyB1cmw6IHRoaXMuYmFja2dyb3VuZEltYWdlLnVybCwgbWltZVR5cGU6IFwiaW1hZ2VcIiB9KTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2V0SXRlbUNvdW50KCk7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLmdldEl0ZW1BdChpKS5nZXRSZXNvdXJjZUluZm9ybWF0aW9uKCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRFbGVtZW50QnlJZChpZDogc3RyaW5nKTogQ2FyZEVsZW1lbnQge1xuXHRcdHZhciByZXN1bHQ6IENhcmRFbGVtZW50ID0gc3VwZXIuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG5cdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0ID0gdGhpcy5faXRlbXNbaV0uZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG5cdFx0XHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRBY3Rpb25CeUlkKGlkOiBzdHJpbmcpOiBBY3Rpb24ge1xuXHRcdHZhciByZXN1bHQ6IEFjdGlvbiA9IHN1cGVyLmdldEFjdGlvbkJ5SWQoaWQpO1xuXG5cdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdGlmICh0aGlzLnNlbGVjdEFjdGlvbikge1xuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLnNlbGVjdEFjdGlvbi5nZXRBY3Rpb25CeUlkKGlkKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRoaXMuX2l0ZW1zW2ldLmdldEFjdGlvbkJ5SWQoaWQpO1xuXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHJlbmRlclNwZWVjaCgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLnNwZWFrICE9IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLnNwZWFrO1xuXHRcdH1cblxuXHRcdC8vIHJlbmRlciBlYWNoIGl0ZW1cblx0XHRsZXQgc3BlYWsgPSBudWxsO1xuXG5cdFx0aWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdHNwZWFrID0gJyc7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHRoaXMuX2l0ZW1zW2ldLnJlbmRlclNwZWVjaCgpO1xuXG5cdFx0XHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdFx0XHRzcGVhayArPSByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3BlYWs7XG5cdH1cblxuXHR1cGRhdGVMYXlvdXQocHJvY2Vzc0NoaWxkcmVuOiBib29sZWFuID0gdHJ1ZSkge1xuXHRcdHN1cGVyLnVwZGF0ZUxheW91dChwcm9jZXNzQ2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5hcHBseVBhZGRpbmcoKTtcblxuXHRcdGlmIChwcm9jZXNzQ2hpbGRyZW4pIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5faXRlbXNbaV0udXBkYXRlTGF5b3V0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHN0eWxlKCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuYWxsb3dDdXN0b21TdHlsZSkge1xuXHRcdFx0aWYgKHRoaXMuX3N0eWxlICYmIHRoaXMuaG9zdENvbmZpZy5jb250YWluZXJTdHlsZXMuZ2V0U3R5bGVCeU5hbWUodGhpcy5fc3R5bGUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9zdHlsZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVmYXVsdFN0eWxlO1xuXHRcdH1cblx0fVxuXG5cdHNldCBzdHlsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5fc3R5bGUgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBwYWRkaW5nKCk6IFBhZGRpbmdEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRQYWRkaW5nKCk7XG5cdH1cblxuXHRzZXQgcGFkZGluZyh2YWx1ZTogUGFkZGluZ0RlZmluaXRpb24pIHtcblx0XHR0aGlzLnNldFBhZGRpbmcodmFsdWUpO1xuXHR9XG5cblx0Z2V0IHNlbGVjdEFjdGlvbigpOiBBY3Rpb24ge1xuXHRcdHJldHVybiB0aGlzLl9zZWxlY3RBY3Rpb247XG5cdH1cblxuXHRzZXQgc2VsZWN0QWN0aW9uKHZhbHVlOiBBY3Rpb24pIHtcblx0XHR0aGlzLl9zZWxlY3RBY3Rpb24gPSB2YWx1ZTtcblxuXHRcdGlmICh0aGlzLl9zZWxlY3RBY3Rpb24pIHtcblx0XHRcdHRoaXMuX3NlbGVjdEFjdGlvbi5zZXRQYXJlbnQodGhpcyk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCB0eXBlIENvbHVtbldpZHRoID0gVXRpbHMuU2l6ZUFuZFVuaXQgfCBcImF1dG9cIiB8IFwic3RyZXRjaFwiO1xuXG5leHBvcnQgY2xhc3MgQ29sdW1uIGV4dGVuZHMgQ29udGFpbmVyIHtcblx0cHJpdmF0ZSBfY29tcHV0ZWRXZWlnaHQ6IG51bWJlciA9IDA7XG5cblx0cHJvdGVjdGVkIGFkanVzdFJlbmRlcmVkRWxlbWVudFNpemUocmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmlzRGVzaWduTW9kZSgpKSB7XG5cdFx0XHRyZW5kZXJlZEVsZW1lbnQuc3R5bGUubWluV2lkdGggPSBcIjIwcHhcIjtcblx0XHRcdHJlbmRlcmVkRWxlbWVudC5zdHlsZS5taW5IZWlnaHQgPSBcIjIwcHhcIjtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZW5kZXJlZEVsZW1lbnQuc3R5bGUubWluV2lkdGggPSBcIjBcIjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy53aWR0aCA9PT0gXCJhdXRvXCIpIHtcblx0XHRcdHJlbmRlcmVkRWxlbWVudC5zdHlsZS5mbGV4ID0gXCIwIDEgYXV0b1wiO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0aGlzLndpZHRoID09PSBcInN0cmV0Y2hcIikge1xuXHRcdFx0cmVuZGVyZWRFbGVtZW50LnN0eWxlLmZsZXggPSBcIjEgMSA1MHB4XCI7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IHNpemVBbmRVbml0ID0gPFV0aWxzLlNpemVBbmRVbml0PnRoaXMud2lkdGg7XG5cblx0XHRcdGlmIChzaXplQW5kVW5pdC51bml0ID09IEVudW1zLlNpemVVbml0LlBpeGVsKSB7XG5cdFx0XHRcdHJlbmRlcmVkRWxlbWVudC5zdHlsZS5mbGV4ID0gXCIwIDAgYXV0b1wiO1xuXHRcdFx0XHRyZW5kZXJlZEVsZW1lbnQuc3R5bGUud2lkdGggPSBzaXplQW5kVW5pdC5waHlzaWNhbFNpemUgKyBcInB4XCI7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cmVuZGVyZWRFbGVtZW50LnN0eWxlLmZsZXggPSBcIjEgMSBcIiArICh0aGlzLl9jb21wdXRlZFdlaWdodCA+IDAgPyB0aGlzLl9jb21wdXRlZFdlaWdodCA6IHNpemVBbmRVbml0LnBoeXNpY2FsU2l6ZSkgKyBcIiVcIjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0IHNlcGFyYXRvck9yaWVudGF0aW9uKCk6IEVudW1zLk9yaWVudGF0aW9uIHtcblx0XHRyZXR1cm4gRW51bXMuT3JpZW50YXRpb24uVmVydGljYWw7XG5cdH1cblxuXHR3aWR0aDogQ29sdW1uV2lkdGggPSBcImF1dG9cIjtcblxuXHRjb25zdHJ1Y3Rvcih3aWR0aDogQ29sdW1uV2lkdGggPSBcImF1dG9cIikge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdH1cblxuXHRnZXRKc29uVHlwZU5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXCJDb2x1bW5cIjtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIudG9KU09OKCk7XG5cblx0XHRpZiAodGhpcy53aWR0aCBpbnN0YW5jZW9mIFV0aWxzLlNpemVBbmRVbml0KSB7XG5cdFx0XHRpZiAodGhpcy53aWR0aC51bml0ID09IEVudW1zLlNpemVVbml0LlBpeGVsKSB7XG5cdFx0XHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJ3aWR0aFwiLCB0aGlzLndpZHRoLnBoeXNpY2FsU2l6ZSArIFwicHhcIik7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0VXRpbHMuc2V0UHJvcGVydHkocmVzdWx0LCBcIndpZHRoXCIsIHRoaXMud2lkdGgucGh5c2ljYWxTaXplKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwid2lkdGhcIiwgdGhpcy53aWR0aCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHBhcnNlKGpzb246IGFueSwgZXJyb3JzPzogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPikge1xuXHRcdHN1cGVyLnBhcnNlKGpzb24sIGVycm9ycyk7XG5cblx0XHR2YXIganNvbldpZHRoID0ganNvbltcIndpZHRoXCJdO1xuXG5cdFx0aWYgKGpzb25XaWR0aCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRqc29uV2lkdGggPSBqc29uW1wic2l6ZVwiXTtcblxuXHRcdFx0aWYgKGpzb25XaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJhaXNlUGFyc2VFcnJvcihcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLkRlcHJlY2F0ZWQsXG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBcIlRoZSBcXFwiQ29sdW1uLnNpemVcXFwiIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZC4gVXNlIHRoZSBcXFwiQ29sdW1uLndpZHRoXFxcIiBwcm9wZXJ0eSBpbnN0ZWFkLlwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRlcnJvcnNcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgaW52YWxpZFdpZHRoID0gZmFsc2U7XG5cblx0XHR0cnkge1xuXHRcdFx0dGhpcy53aWR0aCA9IFV0aWxzLlNpemVBbmRVbml0LnBhcnNlKGpzb25XaWR0aCk7XG5cdFx0fVxuXHRcdGNhdGNoIChlKSB7XG5cdFx0XHRpZiAodHlwZW9mIGpzb25XaWR0aCA9PT0gXCJzdHJpbmdcIiAmJiAoanNvbldpZHRoID09PSBcImF1dG9cIiB8fCBqc29uV2lkdGggPT09IFwic3RyZXRjaFwiKSkge1xuXHRcdFx0XHR0aGlzLndpZHRoID0ganNvbldpZHRoO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGludmFsaWRXaWR0aCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGludmFsaWRXaWR0aCkge1xuXHRcdFx0cmFpc2VQYXJzZUVycm9yKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZXJyb3I6IEVudW1zLlZhbGlkYXRpb25FcnJvci5JbnZhbGlkUHJvcGVydHlWYWx1ZSxcblx0XHRcdFx0XHRtZXNzYWdlOiBcIkludmFsaWQgY29sdW1uIHdpZHRoOlwiICsganNvbldpZHRoICsgXCIgLSBkZWZhdWx0aW5nIHRvIFxcXCJhdXRvXFxcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yc1xuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRnZXQgaGFzVmlzaWJsZVNlcGFyYXRvcigpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQgaW5zdGFuY2VvZiBDb2x1bW5TZXQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNlcGFyYXRvckVsZW1lbnQgJiYgIXRoaXMucGFyZW50LmlzTGVmdE1vc3RFbGVtZW50KHRoaXMpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRnZXQgaXNTdGFuZGFsb25lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ29sdW1uU2V0IGV4dGVuZHMgQ2FyZEVsZW1lbnRDb250YWluZXIge1xuXHRwcml2YXRlIF9jb2x1bW5zOiBBcnJheTxDb2x1bW4+ID0gW107XG5cdHByaXZhdGUgX3NlbGVjdEFjdGlvbjogQWN0aW9uO1xuXG5cdHByb3RlY3RlZCBhcHBseVBhZGRpbmcoKSB7XG5cdFx0aWYgKHRoaXMucGFkZGluZykge1xuXHRcdFx0aWYgKHRoaXMucmVuZGVyZWRFbGVtZW50KSB7XG5cdFx0XHRcdHZhciBwaHlzaWNhbFBhZGRpbmcgPSB0aGlzLnBhZGRpbmcudG9TcGFjaW5nRGVmaW5pdGlvbih0aGlzLmhvc3RDb25maWcpO1xuXG5cdFx0XHRcdHRoaXMucmVuZGVyZWRFbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBwaHlzaWNhbFBhZGRpbmcudG9wICsgXCJweFwiO1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVkRWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwaHlzaWNhbFBhZGRpbmcucmlnaHQgKyBcInB4XCI7XG5cdFx0XHRcdHRoaXMucmVuZGVyZWRFbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSBwaHlzaWNhbFBhZGRpbmcuYm90dG9tICsgXCJweFwiO1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVkRWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IHBoeXNpY2FsUGFkZGluZy5sZWZ0ICsgXCJweFwiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBpbnRlcm5hbFJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG5cdFx0aWYgKHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0Ly8gQ2FjaGUgaG9zdENvbmZpZyB0byBhdm9pZCB3YWxraW5nIHRoZSBwYXJlbnQgaGllcmFyY2h5IHNldmVyYWwgdGltZXNcblx0XHRcdGxldCBob3N0Q29uZmlnID0gdGhpcy5ob3N0Q29uZmlnO1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGhvc3RDb25maWcubWFrZUNzc0NsYXNzTmFtZShcImFjLWNvbHVtblNldFwiKTtcblx0XHRcdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG5cdFx0XHRpZiAoQWRhcHRpdmVDYXJkLnVzZUFkdmFuY2VkQ2FyZEJvdHRvbVRydW5jYXRpb24pIHtcblx0XHRcdFx0Ly8gU2VlIGNvbW1lbnQgaW4gQ29udGFpbmVyLmludGVybmFsUmVuZGVyKClcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS5taW5IZWlnaHQgPSAnLXdlYmtpdC1taW4tY29udGVudCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnNlbGVjdEFjdGlvbiAmJiBob3N0Q29uZmlnLnN1cHBvcnRzSW50ZXJhY3Rpdml0eSkge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoaG9zdENvbmZpZy5tYWtlQ3NzQ2xhc3NOYW1lKFwiYWMtc2VsZWN0YWJsZVwiKSk7XG5cblx0XHRcdFx0ZWxlbWVudC5vbmNsaWNrID0gKGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdEFjdGlvbi5leGVjdXRlKCk7XG5cdFx0XHRcdFx0ZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHN3aXRjaCAodGhpcy5ob3Jpem9udGFsQWxpZ25tZW50KSB7XG5cdFx0XHRcdGNhc2UgRW51bXMuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI6XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRW51bXMuSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodDpcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJmbGV4LWVuZFwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImZsZXgtc3RhcnRcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0dmFyIHRvdGFsV2VpZ2h0OiBudW1iZXIgPSAwO1xuXG5cdFx0XHRmb3IgKGxldCBjb2x1bW4gb2YgdGhpcy5fY29sdW1ucykge1xuXHRcdFx0XHRpZiAoY29sdW1uLndpZHRoIGluc3RhbmNlb2YgVXRpbHMuU2l6ZUFuZFVuaXQgJiYgKGNvbHVtbi53aWR0aC51bml0ID09IEVudW1zLlNpemVVbml0LldlaWdodCkpIHtcblx0XHRcdFx0XHR0b3RhbFdlaWdodCArPSBjb2x1bW4ud2lkdGgucGh5c2ljYWxTaXplO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciByZW5kZXJlZENvbHVtbkNvdW50OiBudW1iZXIgPSAwO1xuXG5cdFx0XHRmb3IgKGxldCBjb2x1bW4gb2YgdGhpcy5fY29sdW1ucykge1xuXHRcdFx0XHRpZiAoY29sdW1uLndpZHRoIGluc3RhbmNlb2YgVXRpbHMuU2l6ZUFuZFVuaXQgJiYgY29sdW1uLndpZHRoLnVuaXQgPT0gRW51bXMuU2l6ZVVuaXQuV2VpZ2h0ICYmIHRvdGFsV2VpZ2h0ID4gMCkge1xuXHRcdFx0XHRcdHZhciBjb21wdXRlZFdlaWdodCA9IDEwMCAvIHRvdGFsV2VpZ2h0ICogY29sdW1uLndpZHRoLnBoeXNpY2FsU2l6ZTtcblxuXHRcdFx0XHRcdC8vIEJlc3Qgd2F5IHRvIGVtdWxhdGUgXCJpbnRlcm5hbFwiIGFjY2VzcyBJIGtub3cgb2Zcblx0XHRcdFx0XHRjb2x1bW5bXCJfY29tcHV0ZWRXZWlnaHRcIl0gPSBjb21wdXRlZFdlaWdodDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciByZW5kZXJlZENvbHVtbiA9IGNvbHVtbi5yZW5kZXIoKTtcblxuXHRcdFx0XHRpZiAocmVuZGVyZWRDb2x1bW4pIHtcblx0XHRcdFx0XHRpZiAocmVuZGVyZWRDb2x1bW5Db3VudCA+IDAgJiYgY29sdW1uLnNlcGFyYXRvckVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdGNvbHVtbi5zZXBhcmF0b3JFbGVtZW50LnN0eWxlLmZsZXggPSBcIjAgMCBhdXRvXCI7XG5cblx0XHRcdFx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKGVsZW1lbnQsIGNvbHVtbi5zZXBhcmF0b3JFbGVtZW50KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRVdGlscy5hcHBlbmRDaGlsZChlbGVtZW50LCByZW5kZXJlZENvbHVtbik7XG5cblx0XHRcdFx0XHRyZW5kZXJlZENvbHVtbkNvdW50Kys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlbmRlcmVkQ29sdW1uQ291bnQgPiAwID8gZWxlbWVudCA6IG51bGw7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIHRydW5jYXRlT3ZlcmZsb3cobWF4SGVpZ2h0OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRmb3IgKGxldCBjb2x1bW4gb2YgdGhpcy5fY29sdW1ucykge1xuXHRcdFx0Y29sdW1uWydoYW5kbGVPdmVyZmxvdyddKG1heEhlaWdodCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdW5kb092ZXJmbG93VHJ1bmNhdGlvbigpIHtcblx0XHRmb3IgKGxldCBjb2x1bW4gb2YgdGhpcy5fY29sdW1ucykge1xuXHRcdFx0Y29sdW1uWydyZXNldE92ZXJmbG93J10oKTtcblx0XHR9XG5cdH1cblxuXHR0b0pTT04oKSB7XG5cdFx0bGV0IHJlc3VsdCA9IHN1cGVyLnRvSlNPTigpO1xuXG5cdFx0aWYgKHRoaXMuX3NlbGVjdEFjdGlvbikge1xuXHRcdFx0VXRpbHMuc2V0UHJvcGVydHkocmVzdWx0LCBcInNlbGVjdEFjdGlvblwiLCB0aGlzLnNlbGVjdEFjdGlvbi50b0pTT04oKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IGNvbHVtbnMgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgY29sdW1uIG9mIHRoaXMuX2NvbHVtbnMpIHtcblx0XHRcdFx0Y29sdW1ucy5wdXNoKGNvbHVtbi50b0pTT04oKSk7XG5cdFx0XHR9XG5cblx0XHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJjb2x1bW5zXCIsIGNvbHVtbnMpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRpc0ZpcnN0RWxlbWVudChlbGVtZW50OiBDYXJkRWxlbWVudCk6IGJvb2xlYW4ge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuX2NvbHVtbnNbaV0uaXNWaXNpYmxlKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9jb2x1bW5zW2ldID09IGVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0Q291bnQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fY29sdW1ucy5sZW5ndGg7XG5cdH1cblxuXHRnZXRJdGVtQ291bnQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xuXHR9XG5cblx0Z2V0Q29sdW1uQXQoaW5kZXg6IG51bWJlcik6IENvbHVtbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2NvbHVtbnNbaW5kZXhdO1xuXHR9XG5cblx0Z2V0SXRlbUF0KGluZGV4OiBudW1iZXIpOiBDYXJkRWxlbWVudCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q29sdW1uQXQoaW5kZXgpO1xuXHR9XG5cblx0Z2V0SnNvblR5cGVOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiQ29sdW1uU2V0XCI7XG5cdH1cblxuXHRwYXJzZShqc29uOiBhbnksIGVycm9ycz86IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4pIHtcblx0XHRzdXBlci5wYXJzZShqc29uLCBlcnJvcnMpO1xuXG5cdFx0dGhpcy5zZWxlY3RBY3Rpb24gPSBjcmVhdGVBY3Rpb25JbnN0YW5jZShcblx0XHRcdHRoaXMsXG5cdFx0XHRqc29uW1wic2VsZWN0QWN0aW9uXCJdLFxuXHRcdFx0ZXJyb3JzKTtcblxuXHRcdGlmIChqc29uW1wiY29sdW1uc1wiXSAhPSBudWxsKSB7XG5cdFx0XHRsZXQganNvbkNvbHVtbnMgPSBqc29uW1wiY29sdW1uc1wiXSBhcyBBcnJheTxhbnk+O1xuXG5cdFx0XHR0aGlzLl9jb2x1bW5zID0gW107XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwganNvbkNvbHVtbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IGNvbHVtbiA9IG5ldyBDb2x1bW4oKTtcblx0XHRcdFx0Y29sdW1uLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y29sdW1uLnBhcnNlKGpzb25Db2x1bW5zW2ldLCBlcnJvcnMpO1xuXG5cdFx0XHRcdHRoaXMuX2NvbHVtbnMucHVzaChjb2x1bW4pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHZhbGlkYXRlKCk6IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4ge1xuXHRcdHZhciByZXN1bHQ6IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4gPSBbXTtcblx0XHR2YXIgd2VpZ2h0ZWRDb2x1bW5zOiBudW1iZXIgPSAwO1xuXHRcdHZhciBzdHJldGNoZWRDb2x1bW5zOiBudW1iZXIgPSAwO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuX2NvbHVtbnNbaV0ud2lkdGggPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0d2VpZ2h0ZWRDb2x1bW5zKys7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICh0aGlzLl9jb2x1bW5zW2ldLndpZHRoID09PSBcInN0cmV0Y2hcIikge1xuXHRcdFx0XHRzdHJldGNoZWRDb2x1bW5zKys7XG5cdFx0XHR9XG5cblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5fY29sdW1uc1tpXS52YWxpZGF0ZSgpKTtcblx0XHR9XG5cblx0XHRpZiAod2VpZ2h0ZWRDb2x1bW5zID4gMCAmJiBzdHJldGNoZWRDb2x1bW5zID4gMCkge1xuXHRcdFx0cmVzdWx0LnB1c2goXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLkhpbnQsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJJdCBpcyBub3QgcmVjb21tZW5kZWQgdG8gdXNlIHdlaWdodGVkIGFuZCBzdHJldGNoZWQgY29sdW1ucyBpbiB0aGUgc2FtZSBDb2x1bW5TZXQsIGJlY2F1c2UgaW4gc3VjaCBhIHNpdHVhdGlvbiBzdHJldGNoZWQgY29sdW1ucyB3aWxsIGFsd2F5cyBnZXQgdGhlIG1pbmltdW0gYW1vdW50IG9mIHNwYWNlLlwiXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHR1cGRhdGVMYXlvdXQocHJvY2Vzc0NoaWxkcmVuOiBib29sZWFuID0gdHJ1ZSkge1xuXHRcdHN1cGVyLnVwZGF0ZUxheW91dChwcm9jZXNzQ2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5hcHBseVBhZGRpbmcoKTtcblxuXHRcdGlmIChwcm9jZXNzQ2hpbGRyZW4pIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLl9jb2x1bW5zW2ldLnVwZGF0ZUxheW91dCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGFkZENvbHVtbihjb2x1bW46IENvbHVtbikge1xuXHRcdGlmICghY29sdW1uLnBhcmVudCkge1xuXHRcdFx0dGhpcy5fY29sdW1ucy5wdXNoKGNvbHVtbik7XG5cblx0XHRcdGNvbHVtbi5zZXRQYXJlbnQodGhpcyk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhpcyBjb2x1bW4gYWxyZWFkeSBiZWxvbmdzIHRvIGFub3RoZXIgQ29sdW1uU2V0LlwiKTtcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVJdGVtKGl0ZW06IENhcmRFbGVtZW50KTogYm9vbGVhbiB7XG5cdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBDb2x1bW4pIHtcblx0XHRcdHZhciBpdGVtSW5kZXggPSB0aGlzLl9jb2x1bW5zLmluZGV4T2YoaXRlbSk7XG5cblx0XHRcdGlmIChpdGVtSW5kZXggPj0gMCkge1xuXHRcdFx0XHR0aGlzLl9jb2x1bW5zLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuXG5cdFx0XHRcdGl0ZW0uc2V0UGFyZW50KG51bGwpO1xuXG5cdFx0XHRcdHRoaXMudXBkYXRlTGF5b3V0KCk7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aW5kZXhPZihjYXJkRWxlbWVudDogQ2FyZEVsZW1lbnQpOiBudW1iZXIge1xuXHRcdHJldHVybiBjYXJkRWxlbWVudCBpbnN0YW5jZW9mIENvbHVtbiA/IHRoaXMuX2NvbHVtbnMuaW5kZXhPZihjYXJkRWxlbWVudCkgOiAtMTtcblx0fVxuXG5cdGlzTGVmdE1vc3RFbGVtZW50KGVsZW1lbnQ6IENhcmRFbGVtZW50KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2NvbHVtbnMuaW5kZXhPZig8Q29sdW1uPmVsZW1lbnQpID09IDA7XG5cdH1cblxuXHRpc1JpZ2h0TW9zdEVsZW1lbnQoZWxlbWVudDogQ2FyZEVsZW1lbnQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fY29sdW1ucy5pbmRleE9mKDxDb2x1bW4+ZWxlbWVudCkgPT0gdGhpcy5fY29sdW1ucy5sZW5ndGggLSAxO1xuXHR9XG5cblx0Z2V0QWxsSW5wdXRzKCk6IEFycmF5PElucHV0PiB7XG5cdFx0dmFyIHJlc3VsdDogQXJyYXk8SW5wdXQ+ID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2NvbHVtbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5fY29sdW1uc1tpXS5nZXRBbGxJbnB1dHMoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGdldFJlc291cmNlSW5mb3JtYXRpb24oKTogQXJyYXk8SVJlc291cmNlSW5mb3JtYXRpb24+IHtcblx0XHRsZXQgcmVzdWx0OiBBcnJheTxJUmVzb3VyY2VJbmZvcm1hdGlvbj4gPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLl9jb2x1bW5zW2ldLmdldFJlc291cmNlSW5mb3JtYXRpb24oKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGdldEVsZW1lbnRCeUlkKGlkOiBzdHJpbmcpOiBDYXJkRWxlbWVudCB7XG5cdFx0dmFyIHJlc3VsdDogQ2FyZEVsZW1lbnQgPSBzdXBlci5nZXRFbGVtZW50QnlJZChpZCk7XG5cblx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHRoaXMuX2NvbHVtbnNbaV0uZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG5cdFx0XHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRBY3Rpb25CeUlkKGlkOiBzdHJpbmcpOiBBY3Rpb24ge1xuXHRcdHZhciByZXN1bHQ6IEFjdGlvbiA9IG51bGw7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2NvbHVtbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IHRoaXMuX2NvbHVtbnNbaV0uZ2V0QWN0aW9uQnlJZChpZCk7XG5cblx0XHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHJlbmRlclNwZWVjaCgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLnNwZWFrICE9IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLnNwZWFrO1xuXHRcdH1cblxuXHRcdC8vIHJlbmRlciBlYWNoIGl0ZW1cblx0XHRsZXQgc3BlYWsgPSAnJztcblxuXHRcdGlmICh0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRzcGVhayArPSB0aGlzLl9jb2x1bW5zW2ldLnJlbmRlclNwZWVjaCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzcGVhaztcblx0fVxuXG5cdGdldCBwYWRkaW5nKCk6IFBhZGRpbmdEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRQYWRkaW5nKCk7XG5cdH1cblxuXHRzZXQgcGFkZGluZyh2YWx1ZTogUGFkZGluZ0RlZmluaXRpb24pIHtcblx0XHR0aGlzLnNldFBhZGRpbmcodmFsdWUpO1xuXHR9XG5cblx0Z2V0IHNlbGVjdEFjdGlvbigpOiBBY3Rpb24ge1xuXHRcdHJldHVybiB0aGlzLl9zZWxlY3RBY3Rpb247XG5cdH1cblxuXHRzZXQgc2VsZWN0QWN0aW9uKHZhbHVlOiBBY3Rpb24pIHtcblx0XHR0aGlzLl9zZWxlY3RBY3Rpb24gPSB2YWx1ZTtcblxuXHRcdGlmICh0aGlzLl9zZWxlY3RBY3Rpb24pIHtcblx0XHRcdHRoaXMuX3NlbGVjdEFjdGlvbi5zZXRQYXJlbnQodGhpcyk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJhaXNlSW1hZ2VMb2FkZWRFdmVudChpbWFnZTogSW1hZ2UpIHtcblx0bGV0IGNhcmQgPSBpbWFnZS5nZXRSb290RWxlbWVudCgpIGFzIEFkYXB0aXZlQ2FyZDtcblx0bGV0IG9uSW1hZ2VMb2FkZWRIYW5kbGVyID0gKGNhcmQgJiYgY2FyZC5vbkltYWdlTG9hZGVkKSA/IGNhcmQub25JbWFnZUxvYWRlZCA6IEFkYXB0aXZlQ2FyZC5vbkltYWdlTG9hZGVkO1xuXG5cdGlmIChvbkltYWdlTG9hZGVkSGFuZGxlcikge1xuXHRcdG9uSW1hZ2VMb2FkZWRIYW5kbGVyKGltYWdlKTtcblx0fVxufVxuXG5mdW5jdGlvbiByYWlzZUFuY2hvckNsaWNrZWRFdmVudChlbGVtZW50OiBDYXJkRWxlbWVudCwgYW5jaG9yOiBIVE1MQW5jaG9yRWxlbWVudCk6IGJvb2xlYW4ge1xuXHRsZXQgY2FyZCA9IGVsZW1lbnQuZ2V0Um9vdEVsZW1lbnQoKSBhcyBBZGFwdGl2ZUNhcmQ7XG5cdGxldCBvbkFuY2hvckNsaWNrZWRIYW5kbGVyID0gKGNhcmQgJiYgY2FyZC5vbkFuY2hvckNsaWNrZWQpID8gY2FyZC5vbkFuY2hvckNsaWNrZWQgOiBBZGFwdGl2ZUNhcmQub25BbmNob3JDbGlja2VkO1xuXG5cdHJldHVybiBvbkFuY2hvckNsaWNrZWRIYW5kbGVyICE9IG51bGwgPyBvbkFuY2hvckNsaWNrZWRIYW5kbGVyKGVsZW1lbnQsIGFuY2hvcikgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmFpc2VFeGVjdXRlQWN0aW9uRXZlbnQoYWN0aW9uOiBBY3Rpb24pIHtcblx0bGV0IGNhcmQgPSBhY3Rpb24ucGFyZW50LmdldFJvb3RFbGVtZW50KCkgYXMgQWRhcHRpdmVDYXJkO1xuXHRsZXQgb25FeGVjdXRlQWN0aW9uSGFuZGxlciA9IChjYXJkICYmIGNhcmQub25FeGVjdXRlQWN0aW9uKSA/IGNhcmQub25FeGVjdXRlQWN0aW9uIDogQWRhcHRpdmVDYXJkLm9uRXhlY3V0ZUFjdGlvbjtcblxuXHRpZiAob25FeGVjdXRlQWN0aW9uSGFuZGxlcikge1xuXHRcdGFjdGlvbi5wcmVwYXJlKGFjdGlvbi5wYXJlbnQuZ2V0Um9vdEVsZW1lbnQoKS5nZXRBbGxJbnB1dHMoKSk7XG5cblx0XHRvbkV4ZWN1dGVBY3Rpb25IYW5kbGVyKGFjdGlvbik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmFpc2VJbmxpbmVDYXJkRXhwYW5kZWRFdmVudChhY3Rpb246IFNob3dDYXJkQWN0aW9uLCBpc0V4cGFuZGVkOiBib29sZWFuKSB7XG5cdGxldCBjYXJkID0gYWN0aW9uLnBhcmVudC5nZXRSb290RWxlbWVudCgpIGFzIEFkYXB0aXZlQ2FyZDtcblx0bGV0IG9uSW5saW5lQ2FyZEV4cGFuZGVkSGFuZGxlciA9IChjYXJkICYmIGNhcmQub25JbmxpbmVDYXJkRXhwYW5kZWQpID8gY2FyZC5vbklubGluZUNhcmRFeHBhbmRlZCA6IEFkYXB0aXZlQ2FyZC5vbklubGluZUNhcmRFeHBhbmRlZDtcblxuXHRpZiAob25JbmxpbmVDYXJkRXhwYW5kZWRIYW5kbGVyKSB7XG5cdFx0b25JbmxpbmVDYXJkRXhwYW5kZWRIYW5kbGVyKGFjdGlvbiwgaXNFeHBhbmRlZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmFpc2VFbGVtZW50VmlzaWJpbGl0eUNoYW5nZWRFdmVudChlbGVtZW50OiBDYXJkRWxlbWVudCwgc2hvdWxkVXBkYXRlTGF5b3V0OiBib29sZWFuID0gdHJ1ZSkge1xuXHRsZXQgcm9vdEVsZW1lbnQgPSBlbGVtZW50LmdldFJvb3RFbGVtZW50KCk7XG5cblx0aWYgKHNob3VsZFVwZGF0ZUxheW91dCkge1xuXHRcdHJvb3RFbGVtZW50LnVwZGF0ZUxheW91dCgpO1xuXHR9XG5cblx0bGV0IGNhcmQgPSByb290RWxlbWVudCBhcyBBZGFwdGl2ZUNhcmQ7XG5cdGxldCBvbkVsZW1lbnRWaXNpYmlsaXR5Q2hhbmdlZEhhbmRsZXIgPSAoY2FyZCAmJiBjYXJkLm9uRWxlbWVudFZpc2liaWxpdHlDaGFuZ2VkKSA/IGNhcmQub25FbGVtZW50VmlzaWJpbGl0eUNoYW5nZWQgOiBBZGFwdGl2ZUNhcmQub25FbGVtZW50VmlzaWJpbGl0eUNoYW5nZWQ7XG5cblx0aWYgKG9uRWxlbWVudFZpc2liaWxpdHlDaGFuZ2VkSGFuZGxlciAhPSBudWxsKSB7XG5cdFx0b25FbGVtZW50VmlzaWJpbGl0eUNoYW5nZWRIYW5kbGVyKGVsZW1lbnQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJhaXNlUGFyc2VFbGVtZW50RXZlbnQoZWxlbWVudDogQ2FyZEVsZW1lbnQsIGpzb246IGFueSwgZXJyb3JzPzogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPikge1xuXHRsZXQgY2FyZCA9IGVsZW1lbnQuZ2V0Um9vdEVsZW1lbnQoKSBhcyBBZGFwdGl2ZUNhcmQ7XG5cdGxldCBvblBhcnNlRWxlbWVudEhhbmRsZXIgPSAoY2FyZCAmJiBjYXJkLm9uUGFyc2VFbGVtZW50KSA/IGNhcmQub25QYXJzZUVsZW1lbnQgOiBBZGFwdGl2ZUNhcmQub25QYXJzZUVsZW1lbnQ7XG5cblx0aWYgKG9uUGFyc2VFbGVtZW50SGFuZGxlciAhPSBudWxsKSB7XG5cdFx0b25QYXJzZUVsZW1lbnRIYW5kbGVyKGVsZW1lbnQsIGpzb24sIGVycm9ycyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmFpc2VQYXJzZUFjdGlvbkV2ZW50KGFjdGlvbjogQWN0aW9uLCBqc29uOiBhbnksIGVycm9ycz86IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4pIHtcblx0bGV0IGNhcmQgPSBhY3Rpb24ucGFyZW50ID8gYWN0aW9uLnBhcmVudC5nZXRSb290RWxlbWVudCgpIGFzIEFkYXB0aXZlQ2FyZCA6IG51bGw7XG5cdGxldCBvblBhcnNlQWN0aW9uSGFuZGxlciA9IChjYXJkICYmIGNhcmQub25QYXJzZUFjdGlvbikgPyBjYXJkLm9uUGFyc2VBY3Rpb24gOiBBZGFwdGl2ZUNhcmQub25QYXJzZUFjdGlvbjtcblxuXHRpZiAob25QYXJzZUFjdGlvbkhhbmRsZXIgIT0gbnVsbCkge1xuXHRcdG9uUGFyc2VBY3Rpb25IYW5kbGVyKGFjdGlvbiwganNvbiwgZXJyb3JzKTtcblx0fVxufVxuXG5mdW5jdGlvbiByYWlzZVBhcnNlRXJyb3IoZXJyb3I6IEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvciwgZXJyb3JzOiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSB7XG5cdGlmIChlcnJvcnMpIHtcblx0XHRlcnJvcnMucHVzaChlcnJvcik7XG5cdH1cblxuXHRpZiAoQWRhcHRpdmVDYXJkLm9uUGFyc2VFcnJvciAhPSBudWxsKSB7XG5cdFx0QWRhcHRpdmVDYXJkLm9uUGFyc2VFcnJvcihlcnJvcik7XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHlwZVJlZ2lzdHJhdGlvbjxUPiB7XG5cdHR5cGVOYW1lOiBzdHJpbmcsXG5cdGNyZWF0ZUluc3RhbmNlOiAoKSA9PiBUO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29udGFpbmVyV2l0aEFjdGlvbnMgZXh0ZW5kcyBDb250YWluZXIge1xuXHRwcml2YXRlIF9hY3Rpb25Db2xsZWN0aW9uOiBBY3Rpb25Db2xsZWN0aW9uO1xuXG5cdHByb3RlY3RlZCBnZXQgcmVuZGVySWZFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaW50ZXJuYWxSZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuXHRcdHZhciBlbGVtZW50ID0gc3VwZXIuaW50ZXJuYWxSZW5kZXIoKTtcblxuXHRcdHZhciByZW5kZXJlZEFjdGlvbnMgPSB0aGlzLl9hY3Rpb25Db2xsZWN0aW9uLnJlbmRlcih0aGlzLmhvc3RDb25maWcuYWN0aW9ucy5hY3Rpb25zT3JpZW50YXRpb24sIGZhbHNlKTtcblxuXHRcdGlmIChyZW5kZXJlZEFjdGlvbnMpIHtcblx0XHRcdFV0aWxzLmFwcGVuZENoaWxkKFxuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRVdGlscy5yZW5kZXJTZXBhcmF0aW9uKFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHNwYWNpbmc6IHRoaXMuaG9zdENvbmZpZy5nZXRFZmZlY3RpdmVTcGFjaW5nKHRoaXMuaG9zdENvbmZpZy5hY3Rpb25zLnNwYWNpbmcpLFxuXHRcdFx0XHRcdFx0bGluZVRoaWNrbmVzczogbnVsbCxcblx0XHRcdFx0XHRcdGxpbmVDb2xvcjogbnVsbFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0RW51bXMuT3JpZW50YXRpb24uSG9yaXpvbnRhbCkpO1xuXHRcdFx0VXRpbHMuYXBwZW5kQ2hpbGQoZWxlbWVudCwgcmVuZGVyZWRBY3Rpb25zKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5yZW5kZXJJZkVtcHR5KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwID8gZWxlbWVudCA6IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGlzTGFzdEVsZW1lbnRCbGVlZGluZygpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5fYWN0aW9uQ29sbGVjdGlvbi5yZW5kZXJlZEFjdGlvbkNvdW50ID09IDApIHtcblx0XHRcdHJldHVybiBzdXBlci5pc0xhc3RFbGVtZW50QmxlZWRpbmcoKSA/ICF0aGlzLmlzRGVzaWduTW9kZSgpIDogZmFsc2U7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24uaXRlbXMubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24uZXhwYW5kZWRBY3Rpb24gIT0gbnVsbCAmJiAhdGhpcy5ob3N0Q29uZmlnLmFjdGlvbnMucHJlRXhwYW5kU2luZ2xlU2hvd0NhcmRBY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24uZXhwYW5kZWRBY3Rpb24gIT0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5fYWN0aW9uQ29sbGVjdGlvbiA9IG5ldyBBY3Rpb25Db2xsZWN0aW9uKHRoaXMpO1xuXHR9XG5cblx0dG9KU09OKCkge1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci50b0pTT04oKTtcblxuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJhY3Rpb25zXCIsIHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24udG9KU09OKCkpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGdldEFjdGlvbkNvdW50KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24uaXRlbXMubGVuZ3RoO1xuXHR9XG5cblx0Z2V0QWN0aW9uQXQoaW5kZXg6IG51bWJlcik6IEFjdGlvbiB7XG5cdFx0aWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmdldEFjdGlvbkNvdW50KCkpIHtcblx0XHRcdHJldHVybiB0aGlzLl9hY3Rpb25Db2xsZWN0aW9uLml0ZW1zW2luZGV4XTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRzdXBlci5nZXRBY3Rpb25BdChpbmRleCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0QWN0aW9uQnlJZChpZDogc3RyaW5nKTogQWN0aW9uIHtcblx0XHR2YXIgcmVzdWx0OiBBY3Rpb24gPSB0aGlzLl9hY3Rpb25Db2xsZWN0aW9uLmdldEFjdGlvbkJ5SWQoaWQpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdCA/IHJlc3VsdCA6IHN1cGVyLmdldEFjdGlvbkJ5SWQoaWQpO1xuXHR9XG5cblx0cGFyc2UoanNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSB7XG5cdFx0c3VwZXIucGFyc2UoanNvbiwgZXJyb3JzKTtcblxuXHRcdHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24ucGFyc2UoanNvbltcImFjdGlvbnNcIl0pO1xuXHR9XG5cblx0dmFsaWRhdGUoKTogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPiB7XG5cdFx0dmFyIHJlc3VsdCA9IHN1cGVyLnZhbGlkYXRlKCk7XG5cblx0XHRpZiAodGhpcy5fYWN0aW9uQ29sbGVjdGlvbikge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLl9hY3Rpb25Db2xsZWN0aW9uLnZhbGlkYXRlKCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRpc0xhc3RFbGVtZW50KGVsZW1lbnQ6IENhcmRFbGVtZW50KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHN1cGVyLmlzTGFzdEVsZW1lbnQoZWxlbWVudCkgJiYgdGhpcy5fYWN0aW9uQ29sbGVjdGlvbi5pdGVtcy5sZW5ndGggPT0gMDtcblx0fVxuXG5cdGFkZEFjdGlvbihhY3Rpb246IEFjdGlvbikge1xuXHRcdHRoaXMuX2FjdGlvbkNvbGxlY3Rpb24uYWRkQWN0aW9uKGFjdGlvbik7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHRzdXBlci5jbGVhcigpO1xuXG5cdFx0dGhpcy5fYWN0aW9uQ29sbGVjdGlvbi5jbGVhcigpO1xuXHR9XG5cblx0Z2V0QWxsSW5wdXRzKCk6IEFycmF5PElucHV0PiB7XG5cdFx0cmV0dXJuIHN1cGVyLmdldEFsbElucHV0cygpLmNvbmNhdCh0aGlzLl9hY3Rpb25Db2xsZWN0aW9uLmdldEFsbElucHV0cygpKTtcblx0fVxuXG5cdGdldFJlc291cmNlSW5mb3JtYXRpb24oKTogQXJyYXk8SVJlc291cmNlSW5mb3JtYXRpb24+IHtcblx0XHRyZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2VJbmZvcm1hdGlvbigpLmNvbmNhdCh0aGlzLl9hY3Rpb25Db2xsZWN0aW9uLmdldFJlc291cmNlSW5mb3JtYXRpb24oKSk7XG5cdH1cblxuXHRnZXQgaXNTdGFuZGFsb25lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHlwZVJlZ2lzdHJ5PFQ+IHtcblx0cHJpdmF0ZSBfaXRlbXM6IEFycmF5PElUeXBlUmVnaXN0cmF0aW9uPFQ+PiA9IFtdO1xuXG5cdHByaXZhdGUgZmluZFR5cGVSZWdpc3RyYXRpb24odHlwZU5hbWU6IHN0cmluZyk6IElUeXBlUmVnaXN0cmF0aW9uPFQ+IHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5faXRlbXNbaV0udHlwZU5hbWUgPT09IHR5cGVOYW1lKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9pdGVtc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucmVzZXQoKTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuX2l0ZW1zID0gW107XG5cdH1cblxuXHRhYnN0cmFjdCByZXNldCgpO1xuXG5cdHJlZ2lzdGVyVHlwZSh0eXBlTmFtZTogc3RyaW5nLCBjcmVhdGVJbnN0YW5jZTogKCkgPT4gVCkge1xuXHRcdHZhciByZWdpc3RyYXRpb25JbmZvID0gdGhpcy5maW5kVHlwZVJlZ2lzdHJhdGlvbih0eXBlTmFtZSk7XG5cblx0XHRpZiAocmVnaXN0cmF0aW9uSW5mbyAhPSBudWxsKSB7XG5cdFx0XHRyZWdpc3RyYXRpb25JbmZvLmNyZWF0ZUluc3RhbmNlID0gY3JlYXRlSW5zdGFuY2U7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmVnaXN0cmF0aW9uSW5mbyA9IHtcblx0XHRcdFx0dHlwZU5hbWU6IHR5cGVOYW1lLFxuXHRcdFx0XHRjcmVhdGVJbnN0YW5jZTogY3JlYXRlSW5zdGFuY2Vcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5faXRlbXMucHVzaChyZWdpc3RyYXRpb25JbmZvKTtcblx0XHR9XG5cdH1cblxuXHR1bnJlZ2lzdGVyVHlwZSh0eXBlTmFtZTogc3RyaW5nKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuX2l0ZW1zW2ldLnR5cGVOYW1lID09PSB0eXBlTmFtZSkge1xuXHRcdFx0XHR0aGlzLl9pdGVtcy5zcGxpY2UoaSwgMSk7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUluc3RhbmNlKHR5cGVOYW1lOiBzdHJpbmcpOiBUIHtcblx0XHR2YXIgcmVnaXN0cmF0aW9uSW5mbyA9IHRoaXMuZmluZFR5cGVSZWdpc3RyYXRpb24odHlwZU5hbWUpO1xuXG5cdFx0cmV0dXJuIHJlZ2lzdHJhdGlvbkluZm8gPyByZWdpc3RyYXRpb25JbmZvLmNyZWF0ZUluc3RhbmNlKCkgOiBudWxsO1xuXHR9XG5cblx0Z2V0SXRlbUNvdW50KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1zLmxlbmd0aDtcblx0fVxuXG5cdGdldEl0ZW1BdChpbmRleDogbnVtYmVyKTogSVR5cGVSZWdpc3RyYXRpb248VD4ge1xuXHRcdHJldHVybiB0aGlzLl9pdGVtc1tpbmRleF07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnRUeXBlUmVnaXN0cnkgZXh0ZW5kcyBUeXBlUmVnaXN0cnk8Q2FyZEVsZW1lbnQ+IHtcblx0cmVzZXQoKSB7XG5cdFx0dGhpcy5jbGVhcigpO1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJUeXBlKFwiQ29udGFpbmVyXCIsICgpID0+IHsgcmV0dXJuIG5ldyBDb250YWluZXIoKTsgfSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJUeXBlKFwiSHRtbEJsb2NrXCIsICgpID0+IHsgcmV0dXJuIG5ldyBIdG1sQmxvY2soKTsgfSk7XG5cdFx0dGhpcy5yZWdpc3RlclR5cGUoXCJUZXh0QmxvY2tcIiwgKCkgPT4geyByZXR1cm4gbmV3IFRleHRCbG9jaygpOyB9KTtcblx0XHR0aGlzLnJlZ2lzdGVyVHlwZShcIkltYWdlXCIsICgpID0+IHsgcmV0dXJuIG5ldyBJbWFnZSgpOyB9KTtcblx0XHR0aGlzLnJlZ2lzdGVyVHlwZShcIkltYWdlU2V0XCIsICgpID0+IHsgcmV0dXJuIG5ldyBJbWFnZVNldCgpOyB9KTtcblx0XHR0aGlzLnJlZ2lzdGVyVHlwZShcIk1lZGlhXCIsICgpID0+IHsgcmV0dXJuIG5ldyBNZWRpYSgpOyB9KTtcblx0XHR0aGlzLnJlZ2lzdGVyVHlwZShcIkZhY3RTZXRcIiwgKCkgPT4geyByZXR1cm4gbmV3IEZhY3RTZXQoKTsgfSk7XG5cdFx0dGhpcy5yZWdpc3RlclR5cGUoXCJDb2x1bW5TZXRcIiwgKCkgPT4geyByZXR1cm4gbmV3IENvbHVtblNldCgpOyB9KTtcblx0XHR0aGlzLnJlZ2lzdGVyVHlwZShcIklucHV0LlRleHRcIiwgKCkgPT4geyByZXR1cm4gbmV3IFRleHRJbnB1dCgpOyB9KTtcblx0XHR0aGlzLnJlZ2lzdGVyVHlwZShcIklucHV0LkRhdGVcIiwgKCkgPT4geyByZXR1cm4gbmV3IERhdGVJbnB1dCgpOyB9KTtcblx0XHR0aGlzLnJlZ2lzdGVyVHlwZShcIklucHV0LlRpbWVcIiwgKCkgPT4geyByZXR1cm4gbmV3IFRpbWVJbnB1dCgpOyB9KTtcblx0XHR0aGlzLnJlZ2lzdGVyVHlwZShcIklucHV0Lk51bWJlclwiLCAoKSA9PiB7IHJldHVybiBuZXcgTnVtYmVySW5wdXQoKTsgfSk7XG5cdFx0dGhpcy5yZWdpc3RlclR5cGUoXCJJbnB1dC5DaG9pY2VTZXRcIiwgKCkgPT4geyByZXR1cm4gbmV3IENob2ljZVNldElucHV0KCk7IH0pO1xuXHRcdHRoaXMucmVnaXN0ZXJUeXBlKFwiSW5wdXQuVG9nZ2xlXCIsICgpID0+IHsgcmV0dXJuIG5ldyBUb2dnbGVJbnB1dCgpOyB9KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQWN0aW9uVHlwZVJlZ2lzdHJ5IGV4dGVuZHMgVHlwZVJlZ2lzdHJ5PEFjdGlvbj4ge1xuXHRyZXNldCgpIHtcblx0XHR0aGlzLmNsZWFyKCk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyVHlwZShcIkFjdGlvbi5PcGVuVXJsXCIsICgpID0+IHsgcmV0dXJuIG5ldyBPcGVuVXJsQWN0aW9uKCk7IH0pO1xuXHRcdHRoaXMucmVnaXN0ZXJUeXBlKFwiQWN0aW9uLlN1Ym1pdFwiLCAoKSA9PiB7IHJldHVybiBuZXcgU3VibWl0QWN0aW9uKCk7IH0pO1xuXHRcdHRoaXMucmVnaXN0ZXJUeXBlKFwiQWN0aW9uLlNob3dDYXJkXCIsICgpID0+IHsgcmV0dXJuIG5ldyBTaG93Q2FyZEFjdGlvbigpOyB9KTtcblx0fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNYXJrZG93blByb2Nlc3NpbmdSZXN1bHQge1xuXHRkaWRQcm9jZXNzOiBib29sZWFuO1xuXHRvdXRwdXRIdG1sPzogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgQWRhcHRpdmVDYXJkIGV4dGVuZHMgQ29udGFpbmVyV2l0aEFjdGlvbnMge1xuXHRwcml2YXRlIHN0YXRpYyBjdXJyZW50VmVyc2lvbjogSG9zdENvbmZpZy5WZXJzaW9uID0gbmV3IEhvc3RDb25maWcuVmVyc2lvbigxLCAxKTtcblxuICAgIHN0YXRpYyB1c2VBdXRvbWF0aWNDb250YWluZXJCbGVlZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHN0YXRpYyB1c2VBZHZhbmNlZEh0bWxCbG9ja1RydW5jYXRpb246IGJvb2xlYW4gPSB0cnVlO1xuXHRzdGF0aWMgdXNlQWR2YW5jZWRUZXh0QmxvY2tUcnVuY2F0aW9uOiBib29sZWFuID0gdHJ1ZTtcblx0c3RhdGljIHVzZUFkdmFuY2VkQ2FyZEJvdHRvbVRydW5jYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblx0c3RhdGljIHVzZU1hcmtkb3duSW5SYWRpb0J1dHRvbkFuZENoZWNrYm94OiBib29sZWFuID0gdHJ1ZTtcblx0c3RhdGljIGFsbG93TWFya0ZvclRleHRIaWdobGlnaHRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRzdGF0aWMgcmVhZG9ubHkgZWxlbWVudFR5cGVSZWdpc3RyeSA9IG5ldyBFbGVtZW50VHlwZVJlZ2lzdHJ5KCk7XG5cdHN0YXRpYyByZWFkb25seSBhY3Rpb25UeXBlUmVnaXN0cnkgPSBuZXcgQWN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cblx0c3RhdGljIG9uQW5jaG9yQ2xpY2tlZDogKGVsZW1lbnQ6IENhcmRFbGVtZW50LCBhbmNob3I6IEhUTUxBbmNob3JFbGVtZW50KSA9PiBib29sZWFuID0gbnVsbDtcblx0c3RhdGljIG9uRXhlY3V0ZUFjdGlvbjogKGFjdGlvbjogQWN0aW9uKSA9PiB2b2lkID0gbnVsbDtcblx0c3RhdGljIG9uRWxlbWVudFZpc2liaWxpdHlDaGFuZ2VkOiAoZWxlbWVudDogQ2FyZEVsZW1lbnQpID0+IHZvaWQgPSBudWxsO1xuXHRzdGF0aWMgb25JbWFnZUxvYWRlZDogKGltYWdlOiBJbWFnZSkgPT4gdm9pZCA9IG51bGw7XG5cdHN0YXRpYyBvbklubGluZUNhcmRFeHBhbmRlZDogKGFjdGlvbjogU2hvd0NhcmRBY3Rpb24sIGlzRXhwYW5kZWQ6IGJvb2xlYW4pID0+IHZvaWQgPSBudWxsO1xuXHRzdGF0aWMgb25QYXJzZUVsZW1lbnQ6IChlbGVtZW50OiBDYXJkRWxlbWVudCwganNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSA9PiB2b2lkID0gbnVsbDtcblx0c3RhdGljIG9uUGFyc2VBY3Rpb246IChlbGVtZW50OiBBY3Rpb24sIGpzb246IGFueSwgZXJyb3JzPzogQXJyYXk8SG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yPikgPT4gdm9pZCA9IG51bGw7XG5cdHN0YXRpYyBvblBhcnNlRXJyb3I6IChlcnJvcjogSG9zdENvbmZpZy5JVmFsaWRhdGlvbkVycm9yKSA9PiB2b2lkID0gbnVsbDtcblx0c3RhdGljIG9uUHJvY2Vzc01hcmtkb3duOiAodGV4dDogc3RyaW5nLCByZXN1bHQ6IElNYXJrZG93blByb2Nlc3NpbmdSZXN1bHQpID0+IHZvaWQgPSBudWxsO1xuXG5cdHN0YXRpYyBnZXQgcHJvY2Vzc01hcmtkb3duKCk6ICh0ZXh0OiBzdHJpbmcpID0+IHN0cmluZyB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHByb2Nlc3NNYXJrZG93biBldmVudCBoYXMgYmVlbiByZW1vdmVkLiBQbGVhc2UgdXBkYXRlIHlvdXIgY29kZSBhbmQgc2V0IG9uUHJvY2Vzc01hcmtkb3duIGluc3RlYWQuXCIpXG5cdH1cblxuXHRzdGF0aWMgc2V0IHByb2Nlc3NNYXJrZG93bih2YWx1ZTogKHRleHQ6IHN0cmluZykgPT4gc3RyaW5nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHByb2Nlc3NNYXJrZG93biBldmVudCBoYXMgYmVlbiByZW1vdmVkLiBQbGVhc2UgdXBkYXRlIHlvdXIgY29kZSBhbmQgc2V0IG9uUHJvY2Vzc01hcmtkb3duIGluc3RlYWQuXCIpXG5cdH1cblxuXHRzdGF0aWMgYXBwbHlNYXJrZG93bih0ZXh0OiBzdHJpbmcpOiBJTWFya2Rvd25Qcm9jZXNzaW5nUmVzdWx0IHtcblx0XHRsZXQgcmVzdWx0OiBJTWFya2Rvd25Qcm9jZXNzaW5nUmVzdWx0ID0ge1xuXHRcdFx0ZGlkUHJvY2VzczogZmFsc2Vcblx0XHR9O1xuXG5cdFx0aWYgKEFkYXB0aXZlQ2FyZC5vblByb2Nlc3NNYXJrZG93bikge1xuXHRcdFx0QWRhcHRpdmVDYXJkLm9uUHJvY2Vzc01hcmtkb3duKHRleHQsIHJlc3VsdCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHdpbmRvd1tcIm1hcmtkb3duaXRcIl0pIHtcblx0XHRcdC8vIENoZWNrIGZvciBtYXJrZG93bml0XG5cdFx0XHRyZXN1bHQub3V0cHV0SHRtbCA9IHdpbmRvd1tcIm1hcmtkb3duaXRcIl0oKS5yZW5kZXIodGV4dCk7XG5cdFx0XHRyZXN1bHQuZGlkUHJvY2VzcyA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybihcIk1hcmtkb3duIHByb2Nlc3NpbmcgaXNuJ3QgZW5hYmxlZC4gUGxlYXNlIHNlZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9hZGFwdGl2ZWNhcmRzI3N1cHBvcnRpbmctbWFya2Rvd25cIilcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cHJpdmF0ZSBfY2FyZFR5cGVOYW1lPzogc3RyaW5nID0gXCJBZGFwdGl2ZUNhcmRcIjtcblx0cHJpdmF0ZSBfZmFsbGJhY2tDYXJkOiBBZGFwdGl2ZUNhcmQgPSBudWxsO1xuXG5cdHByaXZhdGUgaXNWZXJzaW9uU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmJ5cGFzc1ZlcnNpb25DaGVjaykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IHVuc3VwcG9ydGVkVmVyc2lvbjogYm9vbGVhbiA9XG5cdFx0XHRcdCF0aGlzLnZlcnNpb24gfHxcblx0XHRcdFx0IXRoaXMudmVyc2lvbi5pc1ZhbGlkIHx8XG5cdFx0XHRcdChBZGFwdGl2ZUNhcmQuY3VycmVudFZlcnNpb24ubWFqb3IgPCB0aGlzLnZlcnNpb24ubWFqb3IpIHx8XG5cdFx0XHRcdChBZGFwdGl2ZUNhcmQuY3VycmVudFZlcnNpb24ubWFqb3IgPT0gdGhpcy52ZXJzaW9uLm1ham9yICYmIEFkYXB0aXZlQ2FyZC5jdXJyZW50VmVyc2lvbi5taW5vciA8IHRoaXMudmVyc2lvbi5taW5vcik7XG5cblx0XHRcdHJldHVybiAhdW5zdXBwb3J0ZWRWZXJzaW9uO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXQgcmVuZGVySWZFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRJdGVtc0NvbGxlY3Rpb25Qcm9wZXJ0eU5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXCJib2R5XCI7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXBwbHlQYWRkaW5nKCkge1xuXHRcdGlmICghdGhpcy5yZW5kZXJlZEVsZW1lbnQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgZWZmZWN0aXZlUGFkZGluZyA9IHRoaXMucGFkZGluZyA/IHRoaXMucGFkZGluZy50b1NwYWNpbmdEZWZpbml0aW9uKHRoaXMuaG9zdENvbmZpZykgOiB0aGlzLmludGVybmFsUGFkZGluZy50b1NwYWNpbmdEZWZpbml0aW9uKHRoaXMuaG9zdENvbmZpZyk7XG5cblx0XHR0aGlzLnJlbmRlcmVkRWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gZWZmZWN0aXZlUGFkZGluZy50b3AgKyBcInB4XCI7XG5cdFx0dGhpcy5yZW5kZXJlZEVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gZWZmZWN0aXZlUGFkZGluZy5yaWdodCArIFwicHhcIjtcblx0XHR0aGlzLnJlbmRlcmVkRWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gZWZmZWN0aXZlUGFkZGluZy5ib3R0b20gKyBcInB4XCI7XG5cdFx0dGhpcy5yZW5kZXJlZEVsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBlZmZlY3RpdmVQYWRkaW5nLmxlZnQgKyBcInB4XCI7XG5cblx0XHRpZiAodGhpcy5pc0xhc3RFbGVtZW50QmxlZWRpbmcoKSkge1xuXHRcdFx0dGhpcy5yZW5kZXJlZEVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMHB4XCI7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGludGVybmFsUmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcblx0XHR2YXIgcmVuZGVyZWRFbGVtZW50ID0gc3VwZXIuaW50ZXJuYWxSZW5kZXIoKTtcblxuXHRcdGlmIChBZGFwdGl2ZUNhcmQudXNlQWR2YW5jZWRDYXJkQm90dG9tVHJ1bmNhdGlvbikge1xuXHRcdFx0Ly8gVW5saWtlIGNvbnRhaW5lcnMsIHRoZSByb290IGNhcmQgZWxlbWVudCBzaG91bGQgYmUgYWxsb3dlZCB0b1xuXHRcdFx0Ly8gYmUgc2hvcnRlciB0aGFuIGl0cyBjb250ZW50IChvdGhlcndpc2UgdGhlIG92ZXJmbG93IHRydW5jYXRpb25cblx0XHRcdC8vIGxvZ2ljIHdvdWxkIG5ldmVyIGdldCB0cmlnZ2VyZWQpXG5cdFx0XHRyZW5kZXJlZEVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVuZGVyZWRFbGVtZW50O1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldCBieXBhc3NWZXJzaW9uQ2hlY2soKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldCBkZWZhdWx0UGFkZGluZygpOiBQYWRkaW5nRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBQYWRkaW5nRGVmaW5pdGlvbihcblx0XHRcdEVudW1zLlNwYWNpbmcuTm9uZSxcbiAgICAgICAgICAgIEVudW1zLlNwYWNpbmcuTm9uZSxcbiAgICAgICAgICAgIEVudW1zLlNwYWNpbmcuTm9uZSxcbiAgICAgICAgICAgIEVudW1zLlNwYWNpbmcuTm9uZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0IGFsbG93Q3VzdG9tUGFkZGluZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0IGFsbG93Q3VzdG9tU3R5bGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaG9zdENvbmZpZy5hZGFwdGl2ZUNhcmQgJiYgdGhpcy5ob3N0Q29uZmlnLmFkYXB0aXZlQ2FyZC5hbGxvd0N1c3RvbVN0eWxlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldCBoYXNCYWNrZ3JvdW5kKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0b25BbmNob3JDbGlja2VkOiAoZWxlbWVudDogQ2FyZEVsZW1lbnQsIGFuY2hvcjogSFRNTEFuY2hvckVsZW1lbnQpID0+IGJvb2xlYW4gPSBudWxsO1xuXHRvbkV4ZWN1dGVBY3Rpb246IChhY3Rpb246IEFjdGlvbikgPT4gdm9pZCA9IG51bGw7XG5cdG9uRWxlbWVudFZpc2liaWxpdHlDaGFuZ2VkOiAoZWxlbWVudDogQ2FyZEVsZW1lbnQpID0+IHZvaWQgPSBudWxsO1xuXHRvbkltYWdlTG9hZGVkOiAoaW1hZ2U6IEltYWdlKSA9PiB2b2lkID0gbnVsbDtcblx0b25JbmxpbmVDYXJkRXhwYW5kZWQ6IChhY3Rpb246IFNob3dDYXJkQWN0aW9uLCBpc0V4cGFuZGVkOiBib29sZWFuKSA9PiB2b2lkID0gbnVsbDtcblx0b25QYXJzZUVsZW1lbnQ6IChlbGVtZW50OiBDYXJkRWxlbWVudCwganNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSA9PiB2b2lkID0gbnVsbDtcblx0b25QYXJzZUFjdGlvbjogKGVsZW1lbnQ6IEFjdGlvbiwganNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+KSA9PiB2b2lkID0gbnVsbDtcblxuXHR2ZXJzaW9uPzogSG9zdENvbmZpZy5WZXJzaW9uID0gbmV3IEhvc3RDb25maWcuVmVyc2lvbigxLCAwKTtcblx0ZmFsbGJhY2tUZXh0OiBzdHJpbmc7XG5cdGRlc2lnbk1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRnZXRKc29uVHlwZU5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXCJBZGFwdGl2ZUNhcmRcIjtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIudG9KU09OKCk7XG5cblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwiJHNjaGVtYVwiLCBcImh0dHA6Ly9hZGFwdGl2ZWNhcmRzLmlvL3NjaGVtYXMvYWRhcHRpdmUtY2FyZC5qc29uXCIpO1xuXG5cdFx0aWYgKCF0aGlzLmJ5cGFzc1ZlcnNpb25DaGVjayAmJiB0aGlzLnZlcnNpb24pIHtcblx0XHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJ2ZXJzaW9uXCIsIHRoaXMudmVyc2lvbi50b1N0cmluZygpKTtcblx0XHR9XG5cblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwiZmFsbGJhY2tUZXh0XCIsIHRoaXMuZmFsbGJhY2tUZXh0KTtcblx0XHRVdGlscy5zZXRQcm9wZXJ0eShyZXN1bHQsIFwibGFuZ1wiLCB0aGlzLmxhbmcpO1xuXHRcdFV0aWxzLnNldFByb3BlcnR5KHJlc3VsdCwgXCJzcGVha1wiLCB0aGlzLnNwZWFrKTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHR2YWxpZGF0ZSgpOiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+IHtcblx0XHR2YXIgcmVzdWx0OiBBcnJheTxIb3N0Q29uZmlnLklWYWxpZGF0aW9uRXJyb3I+ID0gW107XG5cblx0XHRpZiAodGhpcy5fY2FyZFR5cGVOYW1lICE9IFwiQWRhcHRpdmVDYXJkXCIpIHtcblx0XHRcdHJlc3VsdC5wdXNoKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZXJyb3I6IEVudW1zLlZhbGlkYXRpb25FcnJvci5NaXNzaW5nQ2FyZFR5cGUsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJJbnZhbGlkIG9yIG1pc3NpbmcgY2FyZCB0eXBlLiBNYWtlIHN1cmUgdGhlIGNhcmQncyB0eXBlIHByb3BlcnR5IGlzIHNldCB0byBcXFwiQWRhcHRpdmVDYXJkXFxcIi5cIlxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuYnlwYXNzVmVyc2lvbkNoZWNrICYmICF0aGlzLnZlcnNpb24pIHtcblx0XHRcdHJlc3VsdC5wdXNoKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZXJyb3I6IEVudW1zLlZhbGlkYXRpb25FcnJvci5Qcm9wZXJ0eUNhbnRCZU51bGwsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJUaGUgdmVyc2lvbiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZC5cIlxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoIXRoaXMuaXNWZXJzaW9uU3VwcG9ydGVkKCkpIHtcblx0XHRcdHJlc3VsdC5wdXNoKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZXJyb3I6IEVudW1zLlZhbGlkYXRpb25FcnJvci5VbnN1cHBvcnRlZENhcmRWZXJzaW9uLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IFwiVGhlIHNwZWNpZmllZCBjYXJkIHZlcnNpb24gKFwiICsgdGhpcy52ZXJzaW9uICsgXCIpIGlzIG5vdCBzdXBwb3J0ZWQuIFRoZSBtYXhpbXVtIHN1cHBvcnRlZCBjYXJkIHZlcnNpb24gaXMgXCIgKyBBZGFwdGl2ZUNhcmQuY3VycmVudFZlcnNpb25cblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdC5jb25jYXQoc3VwZXIudmFsaWRhdGUoKSk7XG5cdH1cblxuXHRwYXJzZShqc29uOiBhbnksIGVycm9ycz86IEFycmF5PEhvc3RDb25maWcuSVZhbGlkYXRpb25FcnJvcj4pIHtcblx0XHR0aGlzLl9mYWxsYmFja0NhcmQgPSBudWxsO1xuXG5cdFx0dGhpcy5fY2FyZFR5cGVOYW1lID0ganNvbltcInR5cGVcIl07XG5cblx0XHR2YXIgbGFuZ0lkID0ganNvbltcImxhbmdcIl07XG5cblx0XHRpZiAobGFuZ0lkICYmIHR5cGVvZiBsYW5nSWQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMubGFuZyA9IGxhbmdJZDtcblx0XHRcdH1cblx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdHJhaXNlUGFyc2VFcnJvcihcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRlcnJvcjogRW51bXMuVmFsaWRhdGlvbkVycm9yLkludmFsaWRQcm9wZXJ0eVZhbHVlLFxuXHRcdFx0XHRcdFx0bWVzc2FnZTogZS5tZXNzYWdlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRlcnJvcnNcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnZlcnNpb24gPSBIb3N0Q29uZmlnLlZlcnNpb24ucGFyc2UoanNvbltcInZlcnNpb25cIl0sIGVycm9ycyk7XG5cblx0XHR0aGlzLmZhbGxiYWNrVGV4dCA9IGpzb25bXCJmYWxsYmFja1RleHRcIl07XG5cblx0XHRsZXQgZmFsbGJhY2tFbGVtZW50ID0gY3JlYXRlRWxlbWVudEluc3RhbmNlKG51bGwsIGpzb25bXCJmYWxsYmFja1wiXSwgZXJyb3JzKTtcblxuXHRcdGlmIChmYWxsYmFja0VsZW1lbnQpIHtcblx0XHRcdHRoaXMuX2ZhbGxiYWNrQ2FyZCA9IG5ldyBBZGFwdGl2ZUNhcmQoKTtcblx0XHRcdHRoaXMuX2ZhbGxiYWNrQ2FyZC5hZGRJdGVtKGZhbGxiYWNrRWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0c3VwZXIucGFyc2UoanNvbiwgZXJyb3JzKTtcblx0fVxuXG5cdHJlbmRlcih0YXJnZXQ/OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcblx0XHRsZXQgZmFsbGJhY2sgPSBmYWxzZTtcblx0XHRsZXQgcmVuZGVyZWRDYXJkOiBIVE1MRWxlbWVudDtcblxuXHRcdGlmICh0aGlzLnNob3VsZEZhbGxiYWNrKCkpIHtcblx0XHRcdGlmICh0aGlzLl9mYWxsYmFja0NhcmQpIHtcblx0XHRcdFx0dGhpcy5fZmFsbGJhY2tDYXJkLmhvc3RDb25maWcgPSB0aGlzLmhvc3RDb25maWc7XG5cblx0XHRcdFx0cmVuZGVyZWRDYXJkID0gdGhpcy5fZmFsbGJhY2tDYXJkLnJlbmRlcigpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGxldCBlcnJvclRleHQgPSAhVXRpbHMuaXNOdWxsT3JFbXB0eSh0aGlzLmZhbGxiYWNrVGV4dCkgPyB0aGlzLmZhbGxiYWNrVGV4dCA6IFwiVGhlIGNhcmQgY291bGQgbm90IGJlIHJlbmRlcmVkLiBJdCBpcyBlaXRoZXIgbWFsZm9ybWVkIG9yIHVzZXMgZmVhdHVyZXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIGhvc3QuXCI7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRsZXQgZmFsbGJhY2tDYXJkID0gbmV3IEFkYXB0aXZlQ2FyZCgpO1xuXHRcdFx0XHRcdGZhbGxiYWNrQ2FyZC5ob3N0Q29uZmlnID0gdGhpcy5ob3N0Q29uZmlnO1xuXHRcdFx0XHRcdGZhbGxiYWNrQ2FyZC5wYXJzZShcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dHlwZTogXCJBZGFwdGl2ZUNhcmRcIixcblx0XHRcdFx0XHRcdFx0dmVyc2lvbjogXCIxLjBcIixcblx0XHRcdFx0XHRcdFx0Ym9keTogW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiVGV4dEJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBlcnJvclRleHQsXG5cdFx0XHRcdFx0XHRcdFx0XHR3cmFwOiB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHJlbmRlcmVkQ2FyZCA9IGZhbGxiYWNrQ2FyZC5yZW5kZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXRjaCAoZSkge1xuXHRcdFx0XHRcdHJlbmRlcmVkQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0cmVuZGVyZWRDYXJkLmlubmVySFRNTCA9IGVycm9yVGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJlbmRlcmVkQ2FyZCA9IHN1cGVyLnJlbmRlcigpO1xuXG5cdFx0XHRpZiAocmVuZGVyZWRDYXJkKSB7XG5cdFx0XHRcdHJlbmRlcmVkQ2FyZC50YWJJbmRleCA9IDA7XG5cblx0XHRcdFx0aWYgKCFVdGlscy5pc051bGxPckVtcHR5KHRoaXMuc3BlYWspKSB7XG5cdFx0XHRcdFx0cmVuZGVyZWRDYXJkLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgdGhpcy5zcGVhayk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGFyZ2V0KSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQocmVuZGVyZWRDYXJkKTtcblxuXHRcdFx0dGhpcy51cGRhdGVMYXlvdXQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVuZGVyZWRDYXJkO1xuXHR9XG5cblx0dXBkYXRlTGF5b3V0KHByb2Nlc3NDaGlsZHJlbjogYm9vbGVhbiA9IHRydWUpIHtcblx0XHRzdXBlci51cGRhdGVMYXlvdXQocHJvY2Vzc0NoaWxkcmVuKTtcblxuXHRcdGlmIChBZGFwdGl2ZUNhcmQudXNlQWR2YW5jZWRDYXJkQm90dG9tVHJ1bmNhdGlvbiAmJiB0aGlzLmlzUmVuZGVyZWQoKSkge1xuXHRcdFx0dmFyIGNhcmQgPSB0aGlzLnJlbmRlcmVkRWxlbWVudDtcblx0XHRcdHZhciBwYWRkaW5nID0gdGhpcy5ob3N0Q29uZmlnLmdldEVmZmVjdGl2ZVNwYWNpbmcoRW51bXMuU3BhY2luZy5EZWZhdWx0KTtcblxuXHRcdFx0dGhpc1snaGFuZGxlT3ZlcmZsb3cnXShjYXJkLm9mZnNldEhlaWdodCAtIHBhZGRpbmcpO1xuXHRcdH1cblx0fVxuXG5cdGNhbkNvbnRlbnRCbGVlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHNob3VsZEZhbGxiYWNrKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBzdXBlci5zaG91bGRGYWxsYmFjaygpIHx8ICF0aGlzLmlzVmVyc2lvblN1cHBvcnRlZCgpO1xuXHR9XG5cblx0Z2V0IGhhc1Zpc2libGVTZXBhcmF0b3IoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmNsYXNzIElubGluZUFkYXB0aXZlQ2FyZCBleHRlbmRzIEFkYXB0aXZlQ2FyZCB7XG5cdHByb3RlY3RlZCBnZXQgYnlwYXNzVmVyc2lvbkNoZWNrKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldCBkZWZhdWx0UGFkZGluZygpOiBQYWRkaW5nRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBQYWRkaW5nRGVmaW5pdGlvbihcblx0XHRcdHRoaXMuc3VwcHJlc3NTdHlsZSA/IEVudW1zLlNwYWNpbmcuTm9uZSA6IEVudW1zLlNwYWNpbmcuUGFkZGluZyxcblx0XHRcdEVudW1zLlNwYWNpbmcuUGFkZGluZyxcblx0XHRcdHRoaXMuc3VwcHJlc3NTdHlsZSA/IEVudW1zLlNwYWNpbmcuTm9uZSA6IEVudW1zLlNwYWNpbmcuUGFkZGluZyxcblx0XHRcdEVudW1zLlNwYWNpbmcuUGFkZGluZyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0IGRlZmF1bHRTdHlsZSgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLnN1cHByZXNzU3R5bGUpIHtcblx0XHRcdHJldHVybiBFbnVtcy5Db250YWluZXJTdHlsZS5EZWZhdWx0O1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmhvc3RDb25maWcuYWN0aW9ucy5zaG93Q2FyZC5zdHlsZSA/IHRoaXMuaG9zdENvbmZpZy5hY3Rpb25zLnNob3dDYXJkLnN0eWxlIDogRW51bXMuQ29udGFpbmVyU3R5bGUuRW1waGFzaXM7XG5cdFx0fVxuXHR9XG5cblx0c3VwcHJlc3NTdHlsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHJlbmRlcih0YXJnZXQ/OiBIVE1MRWxlbWVudCkge1xuXHRcdHZhciByZW5kZXJlZENhcmQgPSBzdXBlci5yZW5kZXIodGFyZ2V0KTtcblx0XHRyZW5kZXJlZENhcmQuc2V0QXR0cmlidXRlKFwiYXJpYS1saXZlXCIsIFwicG9saXRlXCIpO1xuXHRcdHJlbmRlcmVkQ2FyZC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcblxuXHRcdHJldHVybiByZW5kZXJlZENhcmQ7XG5cdH1cblxuXHRnZXRGb3JiaWRkZW5BY3Rpb25UeXBlcygpOiBBcnJheTxhbnk+IHtcblx0XHRyZXR1cm4gW1Nob3dDYXJkQWN0aW9uXTtcblx0fVxufVxuXG5jb25zdCBkZWZhdWx0SG9zdENvbmZpZzogSG9zdENvbmZpZy5Ib3N0Q29uZmlnID0gbmV3IEhvc3RDb25maWcuSG9zdENvbmZpZyhcblx0e1xuXHRcdHN1cHBvcnRzSW50ZXJhY3Rpdml0eTogdHJ1ZSxcblx0XHRmb250RmFtaWx5OiBcIlNlZ29lIFVJXCIsXG5cdFx0c3BhY2luZzoge1xuXHRcdFx0c21hbGw6IDEwLFxuXHRcdFx0ZGVmYXVsdDogMjAsXG5cdFx0XHRtZWRpdW06IDMwLFxuXHRcdFx0bGFyZ2U6IDQwLFxuXHRcdFx0ZXh0cmFMYXJnZTogNTAsXG5cdFx0XHRwYWRkaW5nOiAyMFxuXHRcdH0sXG5cdFx0c2VwYXJhdG9yOiB7XG5cdFx0XHRsaW5lVGhpY2tuZXNzOiAxLFxuXHRcdFx0bGluZUNvbG9yOiBcIiNFRUVFRUVcIlxuXHRcdH0sXG5cdFx0Zm9udFNpemVzOiB7XG5cdFx0XHRzbWFsbDogMTIsXG5cdFx0XHRkZWZhdWx0OiAxNCxcblx0XHRcdG1lZGl1bTogMTcsXG5cdFx0XHRsYXJnZTogMjEsXG5cdFx0XHRleHRyYUxhcmdlOiAyNlxuXHRcdH0sXG5cdFx0Zm9udFdlaWdodHM6IHtcblx0XHRcdGxpZ2h0ZXI6IDIwMCxcblx0XHRcdGRlZmF1bHQ6IDQwMCxcblx0XHRcdGJvbGRlcjogNjAwXG5cdFx0fSxcblx0XHRpbWFnZVNpemVzOiB7XG5cdFx0XHRzbWFsbDogNDAsXG5cdFx0XHRtZWRpdW06IDgwLFxuXHRcdFx0bGFyZ2U6IDE2MFxuXHRcdH0sXG5cdFx0Y29udGFpbmVyU3R5bGVzOiB7XG5cdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG5cdFx0XHRcdGZvcmVncm91bmRDb2xvcnM6IHtcblx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OiBcIiMzMzMzMzNcIixcblx0XHRcdFx0XHRcdHN1YnRsZTogXCIjRUUzMzMzMzNcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGFyazoge1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDogXCIjMDAwMDAwXCIsXG5cdFx0XHRcdFx0XHRzdWJ0bGU6IFwiIzY2MDAwMDAwXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGxpZ2h0OiB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OiBcIiNGRkZGRkZcIixcblx0XHRcdFx0XHRcdHN1YnRsZTogXCIjMzMwMDAwMDBcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YWNjZW50OiB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OiBcIiMyRTg5RkNcIixcblx0XHRcdFx0XHRcdHN1YnRsZTogXCIjODgyRTg5RkNcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YXR0ZW50aW9uOiB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OiBcIiNjYzMzMDBcIixcblx0XHRcdFx0XHRcdHN1YnRsZTogXCIjRERjYzMzMDBcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Z29vZDoge1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDogXCIjNTRhMjU0XCIsXG5cdFx0XHRcdFx0XHRzdWJ0bGU6IFwiI0RENTRhMjU0XCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHdhcm5pbmc6IHtcblx0XHRcdFx0XHRcdGRlZmF1bHQ6IFwiI2U2OTUwMFwiLFxuXHRcdFx0XHRcdFx0c3VidGxlOiBcIiNERGU2OTUwMFwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZW1waGFzaXM6IHtcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiMwODAwMDAwMFwiLFxuXHRcdFx0XHRmb3JlZ3JvdW5kQ29sb3JzOiB7XG5cdFx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDogXCIjMzMzMzMzXCIsXG5cdFx0XHRcdFx0XHRzdWJ0bGU6IFwiI0VFMzMzMzMzXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGRhcms6IHtcblx0XHRcdFx0XHRcdGRlZmF1bHQ6IFwiIzAwMDAwMFwiLFxuXHRcdFx0XHRcdFx0c3VidGxlOiBcIiM2NjAwMDAwMFwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRsaWdodDoge1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDogXCIjRkZGRkZGXCIsXG5cdFx0XHRcdFx0XHRzdWJ0bGU6IFwiIzMzMDAwMDAwXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGFjY2VudDoge1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDogXCIjMkU4OUZDXCIsXG5cdFx0XHRcdFx0XHRzdWJ0bGU6IFwiIzg4MkU4OUZDXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGF0dGVudGlvbjoge1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDogXCIjY2MzMzAwXCIsXG5cdFx0XHRcdFx0XHRzdWJ0bGU6IFwiI0REY2MzMzAwXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGdvb2Q6IHtcblx0XHRcdFx0XHRcdGRlZmF1bHQ6IFwiIzU0YTI1NFwiLFxuXHRcdFx0XHRcdFx0c3VidGxlOiBcIiNERDU0YTI1NFwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR3YXJuaW5nOiB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OiBcIiNlNjk1MDBcIixcblx0XHRcdFx0XHRcdHN1YnRsZTogXCIjRERlNjk1MDBcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YWN0aW9uczoge1xuXHRcdFx0bWF4QWN0aW9uczogNSxcblx0XHRcdHNwYWNpbmc6IEVudW1zLlNwYWNpbmcuRGVmYXVsdCxcblx0XHRcdGJ1dHRvblNwYWNpbmc6IDEwLFxuXHRcdFx0c2hvd0NhcmQ6IHtcblx0XHRcdFx0YWN0aW9uTW9kZTogRW51bXMuU2hvd0NhcmRBY3Rpb25Nb2RlLklubGluZSxcblx0XHRcdFx0aW5saW5lVG9wTWFyZ2luOiAxNlxuXHRcdFx0fSxcblx0XHRcdGFjdGlvbnNPcmllbnRhdGlvbjogRW51bXMuT3JpZW50YXRpb24uSG9yaXpvbnRhbCxcblx0XHRcdGFjdGlvbkFsaWdubWVudDogRW51bXMuQWN0aW9uQWxpZ25tZW50LkxlZnRcblx0XHR9LFxuXHRcdGFkYXB0aXZlQ2FyZDoge1xuXHRcdFx0YWxsb3dDdXN0b21TdHlsZTogZmFsc2Vcblx0XHR9LFxuXHRcdGltYWdlU2V0OiB7XG5cdFx0XHRpbWFnZVNpemU6IEVudW1zLlNpemUuTWVkaXVtLFxuXHRcdFx0bWF4SW1hZ2VIZWlnaHQ6IDEwMFxuXHRcdH0sXG5cdFx0ZmFjdFNldDoge1xuXHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0Y29sb3I6IEVudW1zLlRleHRDb2xvci5EZWZhdWx0LFxuXHRcdFx0XHRzaXplOiBFbnVtcy5UZXh0U2l6ZS5EZWZhdWx0LFxuXHRcdFx0XHRpc1N1YnRsZTogZmFsc2UsXG5cdFx0XHRcdHdlaWdodDogRW51bXMuVGV4dFdlaWdodC5Cb2xkZXIsXG5cdFx0XHRcdHdyYXA6IHRydWUsXG5cdFx0XHRcdG1heFdpZHRoOiAxNTAsXG5cdFx0XHR9LFxuXHRcdFx0dmFsdWU6IHtcblx0XHRcdFx0Y29sb3I6IEVudW1zLlRleHRDb2xvci5EZWZhdWx0LFxuXHRcdFx0XHRzaXplOiBFbnVtcy5UZXh0U2l6ZS5EZWZhdWx0LFxuXHRcdFx0XHRpc1N1YnRsZTogZmFsc2UsXG5cdFx0XHRcdHdlaWdodDogRW51bXMuVGV4dFdlaWdodC5EZWZhdWx0LFxuXHRcdFx0XHR3cmFwOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHNwYWNpbmc6IDEwXG5cdFx0fVxuXHR9KTtcbiIsImV4cG9ydCBlbnVtIFNpemUge1xuICAgIEF1dG8sXG4gICAgU3RyZXRjaCxcbiAgICBTbWFsbCxcbiAgICBNZWRpdW0sXG4gICAgTGFyZ2Vcbn1cblxuZXhwb3J0IGVudW0gU2l6ZVVuaXQge1xuICAgIFdlaWdodCxcbiAgICBQaXhlbFxufVxuXG5leHBvcnQgZW51bSBUZXh0U2l6ZSB7XG4gICAgU21hbGwsXG4gICAgRGVmYXVsdCxcbiAgICBNZWRpdW0sXG4gICAgTGFyZ2UsXG4gICAgRXh0cmFMYXJnZVxufVxuXG5leHBvcnQgZW51bSBTcGFjaW5nIHtcbiAgICBOb25lLFxuICAgIFNtYWxsLFxuICAgIERlZmF1bHQsXG4gICAgTWVkaXVtLFxuICAgIExhcmdlLFxuICAgIEV4dHJhTGFyZ2UsXG4gICAgUGFkZGluZ1xufVxuXG5leHBvcnQgZW51bSBUZXh0V2VpZ2h0IHtcbiAgICBMaWdodGVyLFxuICAgIERlZmF1bHQsXG4gICAgQm9sZGVyXG59XG5cbmV4cG9ydCBlbnVtIFRleHRDb2xvciB7XG4gICAgRGVmYXVsdCxcbiAgICBEYXJrLFxuICAgIExpZ2h0LFxuICAgIEFjY2VudCxcbiAgICBHb29kLFxuICAgIFdhcm5pbmcsXG4gICAgQXR0ZW50aW9uXG59XG5cbmV4cG9ydCBlbnVtIEhvcml6b250YWxBbGlnbm1lbnQge1xuICAgIExlZnQsXG4gICAgQ2VudGVyLFxuICAgIFJpZ2h0LFxuICAgIEljb25MZWZ0LFxuICAgIEljb25SaWdodFxufVxuXG5leHBvcnQgZW51bSBWZXJ0aWNhbEFsaWdubWVudCB7XG4gICAgVG9wLFxuICAgIENlbnRlcixcbiAgICBCb3R0b21cbn1cblxuZXhwb3J0IGVudW0gQWN0aW9uQWxpZ25tZW50IHtcbiAgICBMZWZ0LFxuICAgIENlbnRlcixcbiAgICBSaWdodCxcbiAgICBTdHJldGNoXG59XG5cbmV4cG9ydCBlbnVtIEltYWdlU3R5bGUge1xuICAgIERlZmF1bHQsXG4gICAgUGVyc29uLFxuICAgIEVtb3Rpb25cbn1cblxuZXhwb3J0IGVudW0gU2hvd0NhcmRBY3Rpb25Nb2RlIHtcbiAgICBJbmxpbmUsXG4gICAgUG9wdXBcbn1cblxuZXhwb3J0IGVudW0gT3JpZW50YXRpb24ge1xuICAgIEhvcml6b250YWwsXG4gICAgVmVydGljYWxcbn1cblxuZXhwb3J0IGVudW0gQmFja2dyb3VuZEltYWdlTW9kZSB7XG4gICAgU3RyZXRjaCxcbiAgICBSZXBlYXRIb3Jpem9udGFsbHksXG4gICAgUmVwZWF0VmVydGljYWxseSxcbiAgICBSZXBlYXRcbn1cblxuZXhwb3J0IGVudW0gQWN0aW9uSWNvblBsYWNlbWVudCB7XG4gICAgTGVmdE9mVGl0bGUsXG4gICAgQWJvdmVUaXRsZVxufVxuXG5leHBvcnQgZW51bSBJbnB1dFRleHRTdHlsZSB7XG4gICAgVGV4dCxcbiAgICBUZWwsXG4gICAgVXJsLFxuICAgIEVtYWlsXG59XG5cbi8qXG4gICAgVGhpcyBzaG91bGQgcmVhbGx5IGJlIGEgc3RyaW5nIGVudW0sIGUuZy5cblxuICAgICAgICBleHBvcnQgZW51bSBDb250YWluZXJTdHlsZSB7XG4gICAgICAgICAgICBEZWZhdWx0ID0gXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICBFbXBoYXNpcyA9IFwiZW1waGFzaXNcIlxuICAgICAgICB9XG5cbiAgICBIb3dldmVyLCBzb21lIGhvc3RzIGRvIG5vdCB1c2UgYSB2ZXJzaW9uIG9mIFR5cGVTY3JpcHRcbiAgICByZWNlbnQgZW5vdWdoIHRvIHVuZGVyc3RhbmQgc3RyaW5nIGVudW1zLiBUaGlzIGlzXG4gICAgYSBjb21wYXRpYmxlIGNvbnN0cnVjdCB0aGF0IGRvZXMgbm90IHJlcXVpcmUgdXNpbmdcbiAgICBhIG1vcmUgcmVjZW50IHZlcnNpb24gb2YgVHlwZVNjcmlwdC5cbiovXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyU3R5bGUge1xuICAgIHN0YXRpYyByZWFkb25seSBEZWZhdWx0ID0gXCJkZWZhdWx0XCI7XG4gICAgc3RhdGljIHJlYWRvbmx5IEVtcGhhc2lzID0gXCJlbXBoYXNpc1wiO1xufVxuXG5leHBvcnQgZW51bSBWYWxpZGF0aW9uRXJyb3Ige1xuICAgIEhpbnQsXG4gICAgQWN0aW9uVHlwZU5vdEFsbG93ZWQsXG4gICAgQ29sbGVjdGlvbkNhbnRCZUVtcHR5LFxuICAgIERlcHJlY2F0ZWQsXG4gICAgRWxlbWVudFR5cGVOb3RBbGxvd2VkLFxuICAgIEludGVyYWN0aXZpdHlOb3RBbGxvd2VkLFxuICAgIEludmFsaWRQcm9wZXJ0eVZhbHVlLFxuICAgIE1pc3NpbmdDYXJkVHlwZSxcbiAgICBQcm9wZXJ0eUNhbnRCZU51bGwsXG4gICAgVG9vTWFueUFjdGlvbnMsXG4gICAgVW5rbm93bkFjdGlvblR5cGUsXG4gICAgVW5rbm93bkVsZW1lbnRUeXBlLFxuICAgIFVuc3VwcG9ydGVkQ2FyZFZlcnNpb25cbn1cblxuZXhwb3J0IGVudW0gQ29udGFpbmVyRml0U3RhdHVzIHtcbiAgICBGdWxseUluQ29udGFpbmVyLFxuICAgIE92ZXJmbG93aW5nLFxuICAgIEZ1bGx5T3V0T2ZDb250YWluZXJcbn1cbiIsImltcG9ydCAqIGFzIEVudW1zIGZyb20gXCIuL2VudW1zXCI7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElWYWxpZGF0aW9uRXJyb3Ige1xuICAgIGVycm9yOiBFbnVtcy5WYWxpZGF0aW9uRXJyb3IsXG4gICAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dENvbG9yRGVmaW5pdGlvbiB7XG4gICAgZGVmYXVsdDogc3RyaW5nID0gXCIjMDAwMDAwXCI7XG4gICAgc3VidGxlOiBzdHJpbmcgPSBcIiM2NjY2NjZcIjtcblxuICAgIGNvbnN0cnVjdG9yKG9iaj86IGFueSkge1xuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHQgPSBvYmpbXCJkZWZhdWx0XCJdIHx8IHRoaXMuZGVmYXVsdDtcbiAgICAgICAgICAgIHRoaXMuc3VidGxlID0gb2JqW1wic3VidGxlXCJdIHx8IHRoaXMuc3VidGxlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRhcHRpdmVDYXJkQ29uZmlnIHtcbiAgICBhbGxvd0N1c3RvbVN0eWxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihvYmo/OiBhbnkpIHtcbiAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgdGhpcy5hbGxvd0N1c3RvbVN0eWxlID0gb2JqW1wiYWxsb3dDdXN0b21TdHlsZVwiXSB8fCB0aGlzLmFsbG93Q3VzdG9tU3R5bGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVNldENvbmZpZyB7XG4gICAgaW1hZ2VTaXplOiBFbnVtcy5TaXplID0gRW51bXMuU2l6ZS5NZWRpdW07XG4gICAgbWF4SW1hZ2VIZWlnaHQ6IG51bWJlciA9IDEwMDtcblxuICAgIGNvbnN0cnVjdG9yKG9iaj86IGFueSkge1xuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlU2l6ZSA9IG9ialtcImltYWdlU2l6ZVwiXSAhPSBudWxsID8gb2JqW1wiaW1hZ2VTaXplXCJdIDogdGhpcy5pbWFnZVNpemU7XG4gICAgICAgICAgICB0aGlzLm1heEltYWdlSGVpZ2h0ID0gVXRpbHMuZ2V0VmFsdWVPckRlZmF1bHQ8bnVtYmVyPihvYmpbXCJtYXhJbWFnZUhlaWdodFwiXSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGltYWdlU2l6ZTogRW51bXMuU2l6ZVt0aGlzLmltYWdlU2l6ZV0sXG4gICAgICAgICAgICBtYXhJbWFnZUhlaWdodDogdGhpcy5tYXhJbWFnZUhlaWdodFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWVkaWFDb25maWcge1xuICAgIGRlZmF1bHRQb3N0ZXI6IHN0cmluZztcbiAgICBhbGxvd0lubGluZVBsYXliYWNrOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKG9iaj86IGFueSkge1xuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRQb3N0ZXIgPSBvYmpbXCJkZWZhdWx0UG9zdGVyXCJdO1xuICAgICAgICAgICAgdGhpcy5hbGxvd0lubGluZVBsYXliYWNrID0gb2JqW1wiYWxsb3dJbmxpbmVQbGF5YmFja1wiXSB8fCB0aGlzLmFsbG93SW5saW5lUGxheWJhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWZhdWx0UG9zdGVyOiB0aGlzLmRlZmF1bHRQb3N0ZXIsXG4gICAgICAgICAgICBhbGxvd0lubGluZVBsYXliYWNrOiB0aGlzLmFsbG93SW5saW5lUGxheWJhY2tcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY3RUZXh0RGVmaW5pdGlvbiB7XG4gICAgc2l6ZTogRW51bXMuVGV4dFNpemUgPSBFbnVtcy5UZXh0U2l6ZS5EZWZhdWx0O1xuICAgIGNvbG9yOiBFbnVtcy5UZXh0Q29sb3IgPSBFbnVtcy5UZXh0Q29sb3IuRGVmYXVsdDs7XG4gICAgaXNTdWJ0bGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB3ZWlnaHQ6IEVudW1zLlRleHRXZWlnaHQgPSBFbnVtcy5UZXh0V2VpZ2h0LkRlZmF1bHQ7XG4gICAgd3JhcDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihvYmo/OiBhbnkpIHtcbiAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgdGhpcy5zaXplID0gVXRpbHMucGFyc2VIb3N0Q29uZmlnRW51bShFbnVtcy5UZXh0U2l6ZSwgb2JqW1wic2l6ZVwiXSwgRW51bXMuVGV4dFNpemUuRGVmYXVsdCk7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gVXRpbHMucGFyc2VIb3N0Q29uZmlnRW51bShFbnVtcy5UZXh0Q29sb3IsIG9ialtcImNvbG9yXCJdLCBFbnVtcy5UZXh0Q29sb3IuRGVmYXVsdCk7XG4gICAgICAgICAgICB0aGlzLmlzU3VidGxlID0gb2JqW1wiaXNTdWJ0bGVcIl0gfHwgdGhpcy5pc1N1YnRsZTtcbiAgICAgICAgICAgIHRoaXMud2VpZ2h0ID0gVXRpbHMucGFyc2VIb3N0Q29uZmlnRW51bShFbnVtcy5UZXh0V2VpZ2h0LCBvYmpbXCJ3ZWlnaHRcIl0sIHRoaXMuZ2V0RGVmYXVsdFdlaWdodCgpKTtcbiAgICAgICAgICAgIHRoaXMud3JhcCA9IG9ialtcIndyYXBcIl0gIT0gbnVsbCA/IG9ialtcIndyYXBcIl0gOiB0aGlzLndyYXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREZWZhdWx0V2VpZ2h0KCkge1xuXHRcdHJldHVybiBFbnVtcy5UZXh0V2VpZ2h0LkRlZmF1bHQ7XG4gICAgfVxuXG4gICAgdG9KU09OKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaXplOiBFbnVtcy5UZXh0U2l6ZVt0aGlzLnNpemVdLFxuICAgICAgICAgICAgY29sb3I6IEVudW1zLlRleHRDb2xvclt0aGlzLmNvbG9yXSxcbiAgICAgICAgICAgIGlzU3VidGxlOiB0aGlzLmlzU3VidGxlLFxuICAgICAgICAgICAgd2VpZ2h0OiBFbnVtcy5UZXh0V2VpZ2h0W3RoaXMud2VpZ2h0XSxcbiAgICAgICAgICAgIHdyYXA6IHRoaXMud3JhcFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjdFRpdGxlRGVmaW5pdGlvbiBleHRlbmRzIEZhY3RUZXh0RGVmaW5pdGlvbiB7XG4gICAgbWF4V2lkdGg/OiBudW1iZXIgPSAxNTA7XG4gICAgd2VpZ2h0OiBFbnVtcy5UZXh0V2VpZ2h0ID0gRW51bXMuVGV4dFdlaWdodC5Cb2xkZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihvYmo/OiBhbnkpIHtcbiAgICAgICAgc3VwZXIob2JqKTtcblxuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICB0aGlzLm1heFdpZHRoID0gb2JqW1wibWF4V2lkdGhcIl0gIT0gbnVsbCA/IG9ialtcIm1heFdpZHRoXCJdIDogdGhpcy5tYXhXaWR0aDtcblx0XHRcdHRoaXMud2VpZ2h0ID0gVXRpbHMucGFyc2VIb3N0Q29uZmlnRW51bShFbnVtcy5UZXh0V2VpZ2h0LCBvYmpbXCJ3ZWlnaHRcIl0sIEVudW1zLlRleHRXZWlnaHQuQm9sZGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERlZmF1bHRXZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBFbnVtcy5UZXh0V2VpZ2h0LkJvbGRlcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWN0U2V0Q29uZmlnIHtcbiAgICByZWFkb25seSB0aXRsZTogRmFjdFRpdGxlRGVmaW5pdGlvbiA9IG5ldyBGYWN0VGl0bGVEZWZpbml0aW9uKCk7XG4gICAgcmVhZG9ubHkgdmFsdWU6IEZhY3RUZXh0RGVmaW5pdGlvbiA9IG5ldyBGYWN0VGV4dERlZmluaXRpb24oKTtcbiAgICBzcGFjaW5nOiBudW1iZXIgPSAxMDtcblxuICAgIGNvbnN0cnVjdG9yKG9iaj86IGFueSkge1xuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gbmV3IEZhY3RUaXRsZURlZmluaXRpb24ob2JqW1widGl0bGVcIl0pO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBGYWN0VGV4dERlZmluaXRpb24ob2JqW1widmFsdWVcIl0pO1xuICAgICAgICAgICAgdGhpcy5zcGFjaW5nID0gb2JqLnNwYWNpbmcgJiYgb2JqLnNwYWNpbmcgIT0gbnVsbCA/IG9iai5zcGFjaW5nICYmIG9iai5zcGFjaW5nIDogdGhpcy5zcGFjaW5nO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2hvd0NhcmRBY3Rpb25Db25maWcge1xuICAgIGFjdGlvbk1vZGU6IEVudW1zLlNob3dDYXJkQWN0aW9uTW9kZSA9IEVudW1zLlNob3dDYXJkQWN0aW9uTW9kZS5JbmxpbmU7XG4gICAgaW5saW5lVG9wTWFyZ2luOiBudW1iZXIgPSAxNjtcbiAgICBzdHlsZT86IHN0cmluZyA9IEVudW1zLkNvbnRhaW5lclN0eWxlLkVtcGhhc2lzO1xuXG4gICAgY29uc3RydWN0b3Iob2JqPzogYW55KSB7XG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IFV0aWxzLnBhcnNlSG9zdENvbmZpZ0VudW0oRW51bXMuU2hvd0NhcmRBY3Rpb25Nb2RlLCBvYmpbXCJhY3Rpb25Nb2RlXCJdLCBFbnVtcy5TaG93Q2FyZEFjdGlvbk1vZGUuSW5saW5lKTtcbiAgICAgICAgICAgIHRoaXMuaW5saW5lVG9wTWFyZ2luID0gb2JqW1wiaW5saW5lVG9wTWFyZ2luXCJdICE9IG51bGwgPyBvYmpbXCJpbmxpbmVUb3BNYXJnaW5cIl0gOiB0aGlzLmlubGluZVRvcE1hcmdpbjtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUgPSBvYmpbXCJzdHlsZVwiXSAmJiB0eXBlb2Ygb2JqW1wic3R5bGVcIl0gPT09IFwic3RyaW5nXCIgPyBvYmpbXCJzdHlsZVwiXSA6IEVudW1zLkNvbnRhaW5lclN0eWxlLkVtcGhhc2lzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aW9uTW9kZTogRW51bXMuU2hvd0NhcmRBY3Rpb25Nb2RlW3RoaXMuYWN0aW9uTW9kZV0sXG4gICAgICAgICAgICBpbmxpbmVUb3BNYXJnaW46IHRoaXMuaW5saW5lVG9wTWFyZ2luLFxuICAgICAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFjdGlvbnNDb25maWcge1xuICAgIG1heEFjdGlvbnM6IG51bWJlciA9IDU7XG4gICAgc3BhY2luZzogRW51bXMuU3BhY2luZyA9IEVudW1zLlNwYWNpbmcuRGVmYXVsdDtcbiAgICBidXR0b25TcGFjaW5nOiBudW1iZXIgPSAyMDtcbiAgICByZWFkb25seSBzaG93Q2FyZDogU2hvd0NhcmRBY3Rpb25Db25maWcgPSBuZXcgU2hvd0NhcmRBY3Rpb25Db25maWcoKTtcbiAgICBwcmVFeHBhbmRTaW5nbGVTaG93Q2FyZEFjdGlvbj86IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBhY3Rpb25zT3JpZW50YXRpb246IEVudW1zLk9yaWVudGF0aW9uID0gRW51bXMuT3JpZW50YXRpb24uSG9yaXpvbnRhbDtcbiAgICBhY3Rpb25BbGlnbm1lbnQ6IEVudW1zLkFjdGlvbkFsaWdubWVudCA9IEVudW1zLkFjdGlvbkFsaWdubWVudC5MZWZ0O1xuICAgIGljb25QbGFjZW1lbnQ6IEVudW1zLkFjdGlvbkljb25QbGFjZW1lbnQgPSBFbnVtcy5BY3Rpb25JY29uUGxhY2VtZW50LkxlZnRPZlRpdGxlO1xuICAgIGFsbG93VGl0bGVUb1dyYXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpY29uU2l6ZTogbnVtYmVyID0gMjQ7XG5cbiAgICBjb25zdHJ1Y3RvcihvYmo/OiBhbnkpIHtcbiAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgdGhpcy5tYXhBY3Rpb25zID0gb2JqW1wibWF4QWN0aW9uc1wiXSAhPSBudWxsID8gb2JqW1wibWF4QWN0aW9uc1wiXSA6IHRoaXMubWF4QWN0aW9ucztcbiAgICAgICAgICAgIHRoaXMuc3BhY2luZyA9IFV0aWxzLnBhcnNlSG9zdENvbmZpZ0VudW0oRW51bXMuU3BhY2luZywgb2JqLnNwYWNpbmcgJiYgb2JqLnNwYWNpbmcsIEVudW1zLlNwYWNpbmcuRGVmYXVsdCk7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblNwYWNpbmcgPSBvYmpbXCJidXR0b25TcGFjaW5nXCJdICE9IG51bGwgPyBvYmpbXCJidXR0b25TcGFjaW5nXCJdIDogdGhpcy5idXR0b25TcGFjaW5nO1xuICAgICAgICAgICAgdGhpcy5zaG93Q2FyZCA9IG5ldyBTaG93Q2FyZEFjdGlvbkNvbmZpZyhvYmpbXCJzaG93Q2FyZFwiXSk7XG4gICAgICAgICAgICB0aGlzLnByZUV4cGFuZFNpbmdsZVNob3dDYXJkQWN0aW9uID0gVXRpbHMuZ2V0VmFsdWVPckRlZmF1bHQ8Ym9vbGVhbj4ob2JqW1wicHJlRXhwYW5kU2luZ2xlU2hvd0NhcmRBY3Rpb25cIl0sIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uc09yaWVudGF0aW9uID0gVXRpbHMucGFyc2VIb3N0Q29uZmlnRW51bShFbnVtcy5PcmllbnRhdGlvbiwgb2JqW1wiYWN0aW9uc09yaWVudGF0aW9uXCJdLCBFbnVtcy5PcmllbnRhdGlvbi5Ib3Jpem9udGFsKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uQWxpZ25tZW50ID0gVXRpbHMucGFyc2VIb3N0Q29uZmlnRW51bShFbnVtcy5BY3Rpb25BbGlnbm1lbnQsIG9ialtcImFjdGlvbkFsaWdubWVudFwiXSwgRW51bXMuQWN0aW9uQWxpZ25tZW50LkxlZnQpO1xuICAgICAgICAgICAgdGhpcy5pY29uUGxhY2VtZW50ID0gVXRpbHMucGFyc2VIb3N0Q29uZmlnRW51bShFbnVtcy5BY3Rpb25JY29uUGxhY2VtZW50LCBvYmpbXCJpY29uUGxhY2VtZW50XCJdLCBFbnVtcy5BY3Rpb25JY29uUGxhY2VtZW50LkxlZnRPZlRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuYWxsb3dUaXRsZVRvV3JhcCA9IG9ialtcImFsbG93VGl0bGVUb1dyYXBcIl0gIT0gbnVsbCA/IG9ialtcImFsbG93VGl0bGVUb1dyYXBcIl0gOiB0aGlzLmFsbG93VGl0bGVUb1dyYXA7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHNpemVBbmRVbml0ID0gVXRpbHMuU2l6ZUFuZFVuaXQucGFyc2Uob2JqW1wiaWNvblNpemVcIl0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNpemVBbmRVbml0LnVuaXQgPT0gRW51bXMuU2l6ZVVuaXQuUGl4ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uU2l6ZSA9IHNpemVBbmRVbml0LnBoeXNpY2FsU2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIFN3YWxsb3cgdGhpcywga2VlcCBkZWZhdWx0IGljb24gc2l6ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWF4QWN0aW9uczogdGhpcy5tYXhBY3Rpb25zLFxuICAgICAgICAgICAgc3BhY2luZzogRW51bXMuU3BhY2luZ1t0aGlzLnNwYWNpbmddLFxuICAgICAgICAgICAgYnV0dG9uU3BhY2luZzogdGhpcy5idXR0b25TcGFjaW5nLFxuICAgICAgICAgICAgc2hvd0NhcmQ6IHRoaXMuc2hvd0NhcmQsXG4gICAgICAgICAgICBwcmVFeHBhbmRTaW5nbGVTaG93Q2FyZEFjdGlvbjogdGhpcy5wcmVFeHBhbmRTaW5nbGVTaG93Q2FyZEFjdGlvbixcbiAgICAgICAgICAgIGFjdGlvbnNPcmllbnRhdGlvbjogRW51bXMuT3JpZW50YXRpb25bdGhpcy5hY3Rpb25zT3JpZW50YXRpb25dLFxuICAgICAgICAgICAgYWN0aW9uQWxpZ25tZW50OiBFbnVtcy5BY3Rpb25BbGlnbm1lbnRbdGhpcy5hY3Rpb25BbGlnbm1lbnRdXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXJTdHlsZURlZmluaXRpb24ge1xuICAgIHByaXZhdGUgZ2V0VGV4dENvbG9yRGVmaW5pdGlvbk9yRGVmYXVsdChvYmo6IGFueSwgZGVmYXVsdFZhbHVlOiB7IGRlZmF1bHQ6IHN0cmluZywgc3VidGxlOiBzdHJpbmcgfSkge1xuICAgICAgICByZXR1cm4gbmV3IFRleHRDb2xvckRlZmluaXRpb24ob2JqID8gb2JqIDogZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBmb3JlZ3JvdW5kQ29sb3JzID0ge1xuICAgICAgICBkZWZhdWx0OiBuZXcgVGV4dENvbG9yRGVmaW5pdGlvbigpLFxuICAgICAgICBkYXJrOiBuZXcgVGV4dENvbG9yRGVmaW5pdGlvbigpLFxuICAgICAgICBsaWdodDogbmV3IFRleHRDb2xvckRlZmluaXRpb24oKSxcbiAgICAgICAgYWNjZW50OiBuZXcgVGV4dENvbG9yRGVmaW5pdGlvbigpLFxuICAgICAgICBnb29kOiBuZXcgVGV4dENvbG9yRGVmaW5pdGlvbigpLFxuICAgICAgICB3YXJuaW5nOiBuZXcgVGV4dENvbG9yRGVmaW5pdGlvbigpLFxuICAgICAgICBhdHRlbnRpb246IG5ldyBUZXh0Q29sb3JEZWZpbml0aW9uKClcbiAgICB9O1xuXG4gICAgaGlnaGxpZ2h0QmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICAgIGhpZ2hsaWdodEZvcmVncm91bmRDb2xvcj86IHN0cmluZztcblxuICAgIHBhcnNlKG9iajogYW55KSB7XG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gb2JqW1wiYmFja2dyb3VuZENvbG9yXCJdO1xuXG4gICAgICAgICAgICBpZiAob2JqLmZvcmVncm91bmRDb2xvcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmVncm91bmRDb2xvcnMuZGVmYXVsdCA9IHRoaXMuZ2V0VGV4dENvbG9yRGVmaW5pdGlvbk9yRGVmYXVsdChvYmouZm9yZWdyb3VuZENvbG9yc1tcImRlZmF1bHRcIl0sIHsgZGVmYXVsdDogXCIjMzMzMzMzXCIsIHN1YnRsZTogXCIjRUUzMzMzMzNcIiB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmVncm91bmRDb2xvcnMuZGFyayA9IHRoaXMuZ2V0VGV4dENvbG9yRGVmaW5pdGlvbk9yRGVmYXVsdChvYmouZm9yZWdyb3VuZENvbG9yc1tcImRhcmtcIl0sIHsgZGVmYXVsdDogXCIjMDAwMDAwXCIsIHN1YnRsZTogXCIjNjYwMDAwMDBcIiB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmVncm91bmRDb2xvcnMubGlnaHQgPSB0aGlzLmdldFRleHRDb2xvckRlZmluaXRpb25PckRlZmF1bHQob2JqLmZvcmVncm91bmRDb2xvcnNbXCJsaWdodFwiXSwgeyBkZWZhdWx0OiBcIiNGRkZGRkZcIiwgc3VidGxlOiBcIiMzMzAwMDAwMFwiIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9yZWdyb3VuZENvbG9ycy5hY2NlbnQgPSB0aGlzLmdldFRleHRDb2xvckRlZmluaXRpb25PckRlZmF1bHQob2JqLmZvcmVncm91bmRDb2xvcnNbXCJhY2NlbnRcIl0sIHsgZGVmYXVsdDogXCIjMkU4OUZDXCIsIHN1YnRsZTogXCIjODgyRTg5RkNcIiB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmVncm91bmRDb2xvcnMuZ29vZCA9IHRoaXMuZ2V0VGV4dENvbG9yRGVmaW5pdGlvbk9yRGVmYXVsdChvYmouZm9yZWdyb3VuZENvbG9yc1tcImdvb2RcIl0sIHsgZGVmYXVsdDogXCIjNTRBMjU0XCIsIHN1YnRsZTogXCIjREQ1NEEyNTRcIiB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmVncm91bmRDb2xvcnMud2FybmluZyA9IHRoaXMuZ2V0VGV4dENvbG9yRGVmaW5pdGlvbk9yRGVmYXVsdChvYmouZm9yZWdyb3VuZENvbG9yc1tcIndhcm5pbmdcIl0sIHsgZGVmYXVsdDogXCIjRTY5NTAwXCIsIHN1YnRsZTogXCIjRERFNjk1MDBcIiB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmVncm91bmRDb2xvcnMuYXR0ZW50aW9uID0gdGhpcy5nZXRUZXh0Q29sb3JEZWZpbml0aW9uT3JEZWZhdWx0KG9iai5mb3JlZ3JvdW5kQ29sb3JzW1wiYXR0ZW50aW9uXCJdLCB7IGRlZmF1bHQ6IFwiI0NDMzMwMFwiLCBzdWJ0bGU6IFwiI0REQ0MzMzAwXCIgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0QmFja2dyb3VuZENvbG9yID0gb2JqW1wiaGlnaGxpZ2h0QmFja2dyb3VuZENvbG9yXCJdO1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRGb3JlZ3JvdW5kQ29sb3IgPSBvYmpbXCJoaWdobGlnaHRGb3JlZ3JvdW5kQ29sb3JcIl07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvYmo/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5wYXJzZShvYmopO1xuICAgIH1cblxuICAgIGdldCBpc0J1aWx0SW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmNsYXNzIEJ1aWx0SW5Db250YWluZXJTdHlsZURlZmluaXRpb24gZXh0ZW5kcyBDb250YWluZXJTdHlsZURlZmluaXRpb24ge1xuICAgIGdldCBpc0J1aWx0SW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGluZUhlaWdodERlZmluaXRpb25zIHtcbiAgICBzbWFsbDogbnVtYmVyO1xuICAgIG1lZGl1bTogbnVtYmVyO1xuICAgIGRlZmF1bHQ6IG51bWJlcjtcbiAgICBsYXJnZTogbnVtYmVyO1xuICAgIGV4dHJhTGFyZ2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRhaW5lclN0eWxlU2V0IHtcbiAgICBwcml2YXRlIF9hbGxTdHlsZXM6IG9iamVjdCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3Iob2JqPzogYW55KSB7XG4gICAgICAgIHRoaXMuX2FsbFN0eWxlc1tFbnVtcy5Db250YWluZXJTdHlsZS5EZWZhdWx0XSA9IG5ldyBCdWlsdEluQ29udGFpbmVyU3R5bGVEZWZpbml0aW9uKCk7XG4gICAgICAgIHRoaXMuX2FsbFN0eWxlc1tFbnVtcy5Db250YWluZXJTdHlsZS5FbXBoYXNpc10gPSBuZXcgQnVpbHRJbkNvbnRhaW5lclN0eWxlRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIHRoaXMuX2FsbFN0eWxlc1tFbnVtcy5Db250YWluZXJTdHlsZS5EZWZhdWx0XS5wYXJzZShvYmpbRW51bXMuQ29udGFpbmVyU3R5bGUuRGVmYXVsdF0pO1xuICAgICAgICAgICAgdGhpcy5fYWxsU3R5bGVzW0VudW1zLkNvbnRhaW5lclN0eWxlLkVtcGhhc2lzXS5wYXJzZShvYmpbRW51bXMuQ29udGFpbmVyU3R5bGUuRW1waGFzaXNdKTtcblxuICAgICAgICAgICAgY29uc3QgY3VzdG9tU3R5bGVBcnJheSA9IG9ialtcImN1c3RvbVN0eWxlc1wiXTtcblxuICAgICAgICAgICAgaWYgKGN1c3RvbVN0eWxlQXJyYXkgJiYgQXJyYXkuaXNBcnJheShjdXN0b21TdHlsZUFycmF5KSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGN1c3RvbVN0eWxlIG9mIGN1c3RvbVN0eWxlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbVN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGVOYW1lID0gY3VzdG9tU3R5bGVbXCJuYW1lXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVOYW1lICYmIHR5cGVvZiBzdHlsZU5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWxsU3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWxsU3R5bGVzW3N0eWxlTmFtZV0ucGFyc2UoY3VzdG9tU3R5bGVbXCJzdHlsZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbGxTdHlsZXNbc3R5bGVOYW1lXSA9IG5ldyBDb250YWluZXJTdHlsZURlZmluaXRpb24oY3VzdG9tU3R5bGVbXCJzdHlsZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9KU09OKCkge1xuICAgICAgICB2YXIgY3VzdG9tU3R5bGVBcnJheTogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2FsbFN0eWxlcykuZm9yRWFjaChcbiAgICAgICAgICAgIChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2FsbFN0eWxlc1trZXldLmlzQnVpbHRJbikge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21TdHlsZUFycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHRoaXMuX2FsbFN0eWxlc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHZhciByZXN1bHQ6IGFueSA9IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRoaXMuZGVmYXVsdCxcbiAgICAgICAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VzdG9tU3R5bGVBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXN1bHQuY3VzdG9tU3R5bGVzID0gY3VzdG9tU3R5bGVBcnJheTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0U3R5bGVCeU5hbWUobmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IENvbnRhaW5lclN0eWxlRGVmaW5pdGlvbiA9IG51bGwpOiBDb250YWluZXJTdHlsZURlZmluaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWxsU3R5bGVzLmhhc093blByb3BlcnR5KG5hbWUpID8gdGhpcy5fYWxsU3R5bGVzW25hbWVdIDogZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkZWZhdWx0KCk6IENvbnRhaW5lclN0eWxlRGVmaW5pdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGxTdHlsZXNbRW51bXMuQ29udGFpbmVyU3R5bGUuRGVmYXVsdF07XG4gICAgfVxuXG4gICAgZ2V0IGVtcGhhc2lzKCk6IENvbnRhaW5lclN0eWxlRGVmaW5pdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGxTdHlsZXNbRW51bXMuQ29udGFpbmVyU3R5bGUuRW1waGFzaXNdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZlcnNpb24ge1xuICAgIHByaXZhdGUgX3ZlcnNpb25TdHJpbmc6IHN0cmluZztcbiAgICBwcml2YXRlIF9tYWpvcjogbnVtYmVyO1xuICAgIHByaXZhdGUgX21pbm9yOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaXNWYWxpZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihtYWpvcjogbnVtYmVyID0gMSwgbWlub3I6IG51bWJlciA9IDEpIHtcbiAgICAgICAgdGhpcy5fbWFqb3IgPSBtYWpvcjtcbiAgICAgICAgdGhpcy5fbWlub3IgPSBtaW5vcjtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGFyc2UodmVyc2lvblN0cmluZzogc3RyaW5nLCBlcnJvcnM/OiBBcnJheTxJVmFsaWRhdGlvbkVycm9yPik6IFZlcnNpb24ge1xuICAgICAgICBpZiAoIXZlcnNpb25TdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBWZXJzaW9uKCk7XG4gICAgICAgIHJlc3VsdC5fdmVyc2lvblN0cmluZyA9IHZlcnNpb25TdHJpbmc7XG5cbiAgICAgICAgdmFyIHJlZ0V4ID0gLyhcXGQrKS4oXFxkKykvZ2k7XG4gICAgICAgIHZhciBtYXRjaGVzID0gcmVnRXguZXhlYyh2ZXJzaW9uU3RyaW5nKTtcblxuICAgICAgICBpZiAobWF0Y2hlcyAhPSBudWxsICYmIG1hdGNoZXMubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIHJlc3VsdC5fbWFqb3IgPSBwYXJzZUludChtYXRjaGVzWzFdKTtcbiAgICAgICAgICAgIHJlc3VsdC5fbWlub3IgPSBwYXJzZUludChtYXRjaGVzWzJdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXN1bHQuX2lzVmFsaWQgJiYgZXJyb3JzKSB7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBFbnVtcy5WYWxpZGF0aW9uRXJyb3IuSW52YWxpZFByb3BlcnR5VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCB2ZXJzaW9uIHN0cmluZzogXCIgKyByZXN1bHQuX3ZlcnNpb25TdHJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gIXRoaXMuX2lzVmFsaWQgPyB0aGlzLl92ZXJzaW9uU3RyaW5nIDogdGhpcy5fbWFqb3IgKyBcIi5cIiArIHRoaXMuX21pbm9yO1xuICAgIH1cblxuICAgIGNvbXBhcmVUbyhvdGhlclZlcnNpb246IFZlcnNpb24pOiBudW1iZXIge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXJWZXJzaW9uLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBjb21wYXJlIGludmFsaWQgdmVyc2lvbi5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYWpvciA+IG90aGVyVmVyc2lvbi5tYWpvcikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5tYWpvciA8IG90aGVyVmVyc2lvbi5tYWpvcikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubWlub3IgPiBvdGhlclZlcnNpb24ubWlub3IpIHtcbiAgICAgICAgICAgIHJldHVybiAxOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm1pbm9yIDwgb3RoZXJWZXJzaW9uLm1pbm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXQgbWFqb3IoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ham9yO1xuICAgIH1cblxuICAgIGdldCBtaW5vcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWlub3I7XG4gICAgfVxuXG4gICAgZ2V0IGlzVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xuICAgIH1cbn1cblxuZXhwb3J0IHR5cGUgSG9zdENhcGFiaWxpdHlWZXJzaW9uID0gVmVyc2lvbiB8IFwiKlwiO1xuZXhwb3J0IHR5cGUgSG9zdENhcGFiaWxpdHlNYXAgPSB7IFtrZXk6IHN0cmluZ106IEhvc3RDYXBhYmlsaXR5VmVyc2lvbiB9O1xuXG5leHBvcnQgY2xhc3MgSG9zdENhcGFiaWxpdGllcyB7XG4gICAgcHJpdmF0ZSBzZXRDYXBhYmlsaXR5KG5hbWU6IHN0cmluZywgdmVyc2lvbjogSG9zdENhcGFiaWxpdHlWZXJzaW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5jYXBhYmlsaXRpZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FwYWJpbGl0aWVzID0geyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYXBhYmlsaXRpZXNbbmFtZV0gPSB2ZXJzaW9uO1xuICAgIH1cblxuICAgIGNhcGFiaWxpdGllczogSG9zdENhcGFiaWxpdHlNYXAgPSBudWxsO1xuXG4gICAgcGFyc2UoanNvbjogYW55LCBlcnJvcnM/OiBBcnJheTxJVmFsaWRhdGlvbkVycm9yPikge1xuICAgICAgICBpZiAoanNvbikge1xuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBqc29uKSB7XG4gICAgICAgICAgICAgICAgbGV0IGpzb25WZXJzaW9uID0ganNvbltuYW1lXTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YganNvblZlcnNpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpzb25WZXJzaW9uID09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENhcGFiaWxpdHkobmFtZSwgXCIqXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZlcnNpb24gPSBWZXJzaW9uLnBhcnNlKGpzb25WZXJzaW9uLCBlcnJvcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVyc2lvbi5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDYXBhYmlsaXR5KG5hbWUsIHZlcnNpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ2FwYWJpbGl0eShuYW1lOiBzdHJpbmcsIHZlcnNpb246IEhvc3RDYXBhYmlsaXR5VmVyc2lvbik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jYXBhYmlsaXRpZXMgJiYgdGhpcy5jYXBhYmlsaXRpZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIGlmICh2ZXJzaW9uID09IFwiKlwiIHx8IHRoaXMuY2FwYWJpbGl0aWVzW25hbWVdID09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uLmNvbXBhcmVUbyg8VmVyc2lvbj50aGlzLmNhcGFiaWxpdGllc1tuYW1lXSkgPD0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhcmVBbGxNZXQoaG9zdENhcGFiaWxpdGllczogSG9zdENhcGFiaWxpdGllcyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jYXBhYmlsaXRpZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNhcGFiaWxpdHlOYW1lIGluIHRoaXMuY2FwYWJpbGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFob3N0Q2FwYWJpbGl0aWVzLmhhc0NhcGFiaWxpdHkoY2FwYWJpbGl0eU5hbWUsIHRoaXMuY2FwYWJpbGl0aWVzW2NhcGFiaWxpdHlOYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEhvc3RDb25maWcge1xuICAgIHJlYWRvbmx5IGhvc3RDYXBhYmlsaXRpZXMgPSBuZXcgSG9zdENhcGFiaWxpdGllcygpO1xuXG4gICAgY2hvaWNlU2V0SW5wdXRWYWx1ZVNlcGFyYXRvcjogc3RyaW5nID0gXCIsXCI7XG4gICAgc3VwcG9ydHNJbnRlcmFjdGl2aXR5OiBib29sZWFuID0gdHJ1ZTtcbiAgICBsaW5lSGVpZ2h0cz86IElMaW5lSGVpZ2h0RGVmaW5pdGlvbnM7XG5cbiAgICBmb250RmFtaWx5Pzogc3RyaW5nID0gXCJTZWdvZSBVSSxTZWdvZSxTZWdvZSBXUCxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2Esc2Fucy1zZXJpZlwiO1xuXG4gICAgcmVhZG9ubHkgc3BhY2luZyA9IHtcbiAgICAgICAgc21hbGw6IDMsXG4gICAgICAgIGRlZmF1bHQ6IDgsXG4gICAgICAgIG1lZGl1bTogMjAsXG4gICAgICAgIGxhcmdlOiAzMCxcbiAgICAgICAgZXh0cmFMYXJnZTogNDAsXG4gICAgICAgIHBhZGRpbmc6IDE1XG4gICAgfTtcblxuICAgIHJlYWRvbmx5IHNlcGFyYXRvciA9IHtcbiAgICAgICAgbGluZVRoaWNrbmVzczogMSxcbiAgICAgICAgbGluZUNvbG9yOiBcIiNFRUVFRUVcIlxuICAgIH07XG5cbiAgICByZWFkb25seSBmb250U2l6ZXMgPSB7XG4gICAgICAgIHNtYWxsOiAxMixcbiAgICAgICAgZGVmYXVsdDogMTQsXG4gICAgICAgIG1lZGl1bTogMTcsXG4gICAgICAgIGxhcmdlOiAyMSxcbiAgICAgICAgZXh0cmFMYXJnZTogMjZcbiAgICB9O1xuXG4gICAgcmVhZG9ubHkgZm9udFdlaWdodHMgPSB7XG4gICAgICAgIGxpZ2h0ZXI6IDIwMCxcbiAgICAgICAgZGVmYXVsdDogNDAwLFxuICAgICAgICBib2xkZXI6IDYwMFxuICAgIH07XG4gICAgcmVhZG9ubHkgaW1hZ2VTaXplcyA9IHtcbiAgICAgICAgc21hbGw6IDQwLFxuICAgICAgICBtZWRpdW06IDgwLFxuICAgICAgICBsYXJnZTogMTYwXG4gICAgfTtcblxuICAgIHJlYWRvbmx5IGNvbnRhaW5lclN0eWxlczogQ29udGFpbmVyU3R5bGVTZXQgPSBuZXcgQ29udGFpbmVyU3R5bGVTZXQoKTtcbiAgICByZWFkb25seSBhY3Rpb25zOiBBY3Rpb25zQ29uZmlnID0gbmV3IEFjdGlvbnNDb25maWcoKTtcbiAgICByZWFkb25seSBhZGFwdGl2ZUNhcmQ6IEFkYXB0aXZlQ2FyZENvbmZpZyA9IG5ldyBBZGFwdGl2ZUNhcmRDb25maWcoKTtcbiAgICByZWFkb25seSBpbWFnZVNldDogSW1hZ2VTZXRDb25maWcgPSBuZXcgSW1hZ2VTZXRDb25maWcoKTtcbiAgICByZWFkb25seSBtZWRpYTogTWVkaWFDb25maWcgPSBuZXcgTWVkaWFDb25maWcoKTtcbiAgICByZWFkb25seSBmYWN0U2V0OiBGYWN0U2V0Q29uZmlnID0gbmV3IEZhY3RTZXRDb25maWcoKTtcblxuICAgIGNzc0NsYXNzTmFtZVByZWZpeDogc3RyaW5nID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKG9iaj86IGFueSkge1xuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIiB8fCBvYmogaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBvYmogPSBKU09OLnBhcnNlKG9iaiBhcyBzdHJpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNob2ljZVNldElucHV0VmFsdWVTZXBhcmF0b3IgPSAob2JqICYmIHR5cGVvZiBvYmpbXCJjaG9pY2VTZXRJbnB1dFZhbHVlU2VwYXJhdG9yXCJdID09PSBcInN0cmluZ1wiKSA/IG9ialtcImNob2ljZVNldElucHV0VmFsdWVTZXBhcmF0b3JcIl0gOiB0aGlzLmNob2ljZVNldElucHV0VmFsdWVTZXBhcmF0b3I7XG4gICAgICAgICAgICB0aGlzLnN1cHBvcnRzSW50ZXJhY3Rpdml0eSA9IChvYmogJiYgdHlwZW9mIG9ialtcInN1cHBvcnRzSW50ZXJhY3Rpdml0eVwiXSA9PT0gXCJib29sZWFuXCIpID8gb2JqW1wic3VwcG9ydHNJbnRlcmFjdGl2aXR5XCJdIDogdGhpcy5zdXBwb3J0c0ludGVyYWN0aXZpdHk7XG4gICAgICAgICAgICB0aGlzLmZvbnRGYW1pbHkgPSBvYmpbXCJmb250RmFtaWx5XCJdIHx8IHRoaXMuZm9udEZhbWlseTtcbiAgICAgICAgICAgIHRoaXMuZm9udFNpemVzID0ge1xuICAgICAgICAgICAgICAgIHNtYWxsOiBvYmouZm9udFNpemVzICYmIG9iai5mb250U2l6ZXNbXCJzbWFsbFwiXSB8fCB0aGlzLmZvbnRTaXplcy5zbWFsbCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBvYmouZm9udFNpemVzICYmIG9iai5mb250U2l6ZXNbXCJkZWZhdWx0XCJdIHx8IHRoaXMuZm9udFNpemVzLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgbWVkaXVtOiBvYmouZm9udFNpemVzICYmIG9iai5mb250U2l6ZXNbXCJtZWRpdW1cIl0gfHwgdGhpcy5mb250U2l6ZXMubWVkaXVtLFxuICAgICAgICAgICAgICAgIGxhcmdlOiBvYmouZm9udFNpemVzICYmIG9iai5mb250U2l6ZXNbXCJsYXJnZVwiXSB8fCB0aGlzLmZvbnRTaXplcy5sYXJnZSxcbiAgICAgICAgICAgICAgICBleHRyYUxhcmdlOiBvYmouZm9udFNpemVzICYmIG9iai5mb250U2l6ZXNbXCJleHRyYUxhcmdlXCJdIHx8IHRoaXMuZm9udFNpemVzLmV4dHJhTGFyZ2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChvYmoubGluZUhlaWdodHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVIZWlnaHRzID0ge1xuICAgICAgICAgICAgICAgICAgICBzbWFsbDogb2JqLmxpbmVIZWlnaHRzW1wic21hbGxcIl0sXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG9iai5saW5lSGVpZ2h0c1tcImRlZmF1bHRcIl0sXG4gICAgICAgICAgICAgICAgICAgIG1lZGl1bTogb2JqLmxpbmVIZWlnaHRzW1wibWVkaXVtXCJdLFxuICAgICAgICAgICAgICAgICAgICBsYXJnZTogb2JqLmxpbmVIZWlnaHRzW1wibGFyZ2VcIl0sXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhTGFyZ2U6IG9iai5saW5lSGVpZ2h0c1tcImV4dHJhTGFyZ2VcIl1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5mb250V2VpZ2h0cyA9IHtcbiAgICAgICAgICAgICAgICBsaWdodGVyOiBvYmouZm9udFdlaWdodHMgJiYgb2JqLmZvbnRXZWlnaHRzW1wibGlnaHRlclwiXSB8fCB0aGlzLmZvbnRXZWlnaHRzLmxpZ2h0ZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogb2JqLmZvbnRXZWlnaHRzICYmIG9iai5mb250V2VpZ2h0c1tcImRlZmF1bHRcIl0gfHwgdGhpcy5mb250V2VpZ2h0cy5kZWZhdWx0LFxuICAgICAgICAgICAgICAgIGJvbGRlcjogb2JqLmZvbnRXZWlnaHRzICYmIG9iai5mb250V2VpZ2h0c1tcImJvbGRlclwiXSB8fCB0aGlzLmZvbnRXZWlnaHRzLmJvbGRlclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5pbWFnZVNpemVzID0ge1xuICAgICAgICAgICAgICAgIHNtYWxsOiBvYmouaW1hZ2VTaXplcyAmJiBvYmouaW1hZ2VTaXplc1tcInNtYWxsXCJdIHx8IHRoaXMuaW1hZ2VTaXplcy5zbWFsbCxcbiAgICAgICAgICAgICAgICBtZWRpdW06IG9iai5pbWFnZVNpemVzICYmIG9iai5pbWFnZVNpemVzW1wibWVkaXVtXCJdIHx8IHRoaXMuaW1hZ2VTaXplcy5tZWRpdW0sXG4gICAgICAgICAgICAgICAgbGFyZ2U6IG9iai5pbWFnZVNpemVzICYmIG9iai5pbWFnZVNpemVzW1wibGFyZ2VcIl0gfHwgdGhpcy5pbWFnZVNpemVzLmxhcmdlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJTdHlsZXMgPSBuZXcgQ29udGFpbmVyU3R5bGVTZXQob2JqW1wiY29udGFpbmVyU3R5bGVzXCJdKTtcbiAgICAgICAgICAgIHRoaXMuc3BhY2luZyA9IHtcbiAgICAgICAgICAgICAgICBzbWFsbDogb2JqLnNwYWNpbmcgJiYgb2JqLnNwYWNpbmdbXCJzbWFsbFwiXSB8fCB0aGlzLnNwYWNpbmcuc21hbGwsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogb2JqLnNwYWNpbmcgJiYgb2JqLnNwYWNpbmdbXCJkZWZhdWx0XCJdIHx8IHRoaXMuc3BhY2luZy5kZWZhdWx0LFxuICAgICAgICAgICAgICAgIG1lZGl1bTogb2JqLnNwYWNpbmcgJiYgb2JqLnNwYWNpbmdbXCJtZWRpdW1cIl0gfHwgdGhpcy5zcGFjaW5nLm1lZGl1bSxcbiAgICAgICAgICAgICAgICBsYXJnZTogb2JqLnNwYWNpbmcgJiYgb2JqLnNwYWNpbmdbXCJsYXJnZVwiXSB8fCB0aGlzLnNwYWNpbmcubGFyZ2UsXG4gICAgICAgICAgICAgICAgZXh0cmFMYXJnZTogb2JqLnNwYWNpbmcgJiYgb2JqLnNwYWNpbmdbXCJleHRyYUxhcmdlXCJdIHx8IHRoaXMuc3BhY2luZy5leHRyYUxhcmdlLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IG9iai5zcGFjaW5nICYmIG9iai5zcGFjaW5nW1wicGFkZGluZ1wiXSB8fCB0aGlzLnNwYWNpbmcucGFkZGluZ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5zZXBhcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgbGluZVRoaWNrbmVzczogb2JqLnNlcGFyYXRvciAmJiBvYmouc2VwYXJhdG9yW1wibGluZVRoaWNrbmVzc1wiXSB8fCB0aGlzLnNlcGFyYXRvci5saW5lVGhpY2tuZXNzLFxuICAgICAgICAgICAgICAgIGxpbmVDb2xvcjogb2JqLnNlcGFyYXRvciAmJiBvYmouc2VwYXJhdG9yW1wibGluZUNvbG9yXCJdIHx8IHRoaXMuc2VwYXJhdG9yLmxpbmVDb2xvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBuZXcgQWN0aW9uc0NvbmZpZyhvYmouYWN0aW9ucyB8fCB0aGlzLmFjdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGl2ZUNhcmQgPSBuZXcgQWRhcHRpdmVDYXJkQ29uZmlnKG9iai5hZGFwdGl2ZUNhcmQgfHwgdGhpcy5hZGFwdGl2ZUNhcmQpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZVNldCA9IG5ldyBJbWFnZVNldENvbmZpZyhvYmpbXCJpbWFnZVNldFwiXSk7XG4gICAgICAgICAgICB0aGlzLmZhY3RTZXQgPSBuZXcgRmFjdFNldENvbmZpZyhvYmpbXCJmYWN0U2V0XCJdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RWZmZWN0aXZlU3BhY2luZyhzcGFjaW5nOiBFbnVtcy5TcGFjaW5nKTogbnVtYmVyIHtcbiAgICAgICAgc3dpdGNoIChzcGFjaW5nKSB7XG4gICAgICAgICAgICBjYXNlIEVudW1zLlNwYWNpbmcuU21hbGw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3BhY2luZy5zbWFsbDtcbiAgICAgICAgICAgIGNhc2UgRW51bXMuU3BhY2luZy5EZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwYWNpbmcuZGVmYXVsdDtcbiAgICAgICAgICAgIGNhc2UgRW51bXMuU3BhY2luZy5NZWRpdW06XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3BhY2luZy5tZWRpdW07XG4gICAgICAgICAgICBjYXNlIEVudW1zLlNwYWNpbmcuTGFyZ2U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3BhY2luZy5sYXJnZTtcbiAgICAgICAgICAgIGNhc2UgRW51bXMuU3BhY2luZy5FeHRyYUxhcmdlOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwYWNpbmcuZXh0cmFMYXJnZTtcbiAgICAgICAgICAgIGNhc2UgRW51bXMuU3BhY2luZy5QYWRkaW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwYWNpbmcucGFkZGluZztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYWtlQ3NzQ2xhc3NOYW1lKC4uLmNsYXNzTmFtZXM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIgXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNzc0NsYXNzTmFtZVByZWZpeCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLmNzc0NsYXNzTmFtZVByZWZpeCArIFwiLVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgKz0gY2xhc3NOYW1lc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwiYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RUZXh0Rm9ybWF0dGVyIHtcbiAgICBwcml2YXRlIF9yZWd1bGFyRXhwcmVzc2lvbjogUmVnRXhwO1xuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGludGVybmFsRm9ybWF0KGxhbmc6IHN0cmluZywgbWF0Y2hlczogUmVnRXhwRXhlY0FycmF5KTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocmVndWxhckV4cHJlc3Npb246IFJlZ0V4cCkge1xuICAgICAgICB0aGlzLl9yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ3VsYXJFeHByZXNzaW9uO1xuICAgIH1cblxuICAgIGZvcm1hdChsYW5nOiBzdHJpbmcsIGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2YXIgbWF0Y2hlcztcbiAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0O1xuXG4gICAgICAgIHdoaWxlICgobWF0Y2hlcyA9IHRoaXMuX3JlZ3VsYXJFeHByZXNzaW9uLmV4ZWMoaW5wdXQpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShtYXRjaGVzWzBdLCB0aGlzLmludGVybmFsRm9ybWF0KGxhbmcsIG1hdGNoZXMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuY2xhc3MgRGF0ZUZvcm1hdHRlciBleHRlbmRzIEFic3RyYWN0VGV4dEZvcm1hdHRlciB7XG4gICAgcHJvdGVjdGVkIGludGVybmFsRm9ybWF0KGxhbmc6IHN0cmluZywgbWF0Y2hlczogUmVnRXhwRXhlY0FycmF5KTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKG1hdGNoZXNbMV0pKTtcbiAgICAgICAgdmFyIGZvcm1hdCA9IG1hdGNoZXNbMl0gIT0gdW5kZWZpbmVkID8gbWF0Y2hlc1syXS50b0xvd2VyQ2FzZSgpIDogXCJjb21wYWN0XCI7XG5cbiAgICAgICAgaWYgKGZvcm1hdCAhPSBcImNvbXBhY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGxhbmcsIHsgZGF5OiBcIm51bWVyaWNcIiwgd2Vla2RheTogZm9ybWF0LCBtb250aDogZm9ybWF0LCB5ZWFyOiBcIm51bWVyaWNcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBUaW1lRm9ybWF0dGVyIGV4dGVuZHMgQWJzdHJhY3RUZXh0Rm9ybWF0dGVyIHtcbiAgICBwcm90ZWN0ZWQgaW50ZXJuYWxGb3JtYXQobGFuZzogc3RyaW5nLCBtYXRjaGVzOiBSZWdFeHBFeGVjQXJyYXkpOiBzdHJpbmcge1xuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UobWF0Y2hlc1sxXSkpO1xuXG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhsYW5nLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnMi1kaWdpdCcgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGV4dChsYW5nOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZm9ybWF0dGVyczogQXJyYXk8QWJzdHJhY3RUZXh0Rm9ybWF0dGVyPiA9IFtcbiAgICAgICAgbmV3IERhdGVGb3JtYXR0ZXIoL1xce3syfURBVEVcXCgoXFxkezR9LVxcZHsyfS1cXGR7Mn1UXFxkezJ9OlxcZHsyfTpcXGR7Mn0oPzpafCg/Oig/Oi18XFwrKVxcZHsyfTpcXGR7Mn0pKSkoPzosID8oQ09NUEFDVHxMT05HfFNIT1JUKSk/XFwpXFx9ezJ9L2cpLFxuICAgICAgICBuZXcgVGltZUZvcm1hdHRlcigvXFx7ezJ9VElNRVxcKChcXGR7NH0tXFxkezJ9LVxcZHsyfVRcXGR7Mn06XFxkezJ9OlxcZHsyfSg/Olp8KD86KD86LXxcXCspXFxkezJ9OlxcZHsyfSkpKVxcKVxcfXsyfS9nKVxuICAgIF07XG5cbiAgICB2YXIgcmVzdWx0ID0gdGV4dDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybWF0dGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSBmb3JtYXR0ZXJzW2ldLmZvcm1hdChsYW5nLCByZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgKiBhcyBFbnVtcyBmcm9tIFwiLi9lbnVtc1wiO1xuXG4vKipcbiAqIEZhc3QgVVVJRCBnZW5lcmF0b3IsIFJGQzQxMjIgdmVyc2lvbiA0IGNvbXBsaWFudC5cbiAqIEBhdXRob3IgSmVmZiBXYXJkIChqY3dhcmQuY29tKS5cbiAqIEBsaWNlbnNlIE1JVCBsaWNlbnNlXG4gKiBAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9ob3ctdG8tY3JlYXRlLWEtZ3VpZC11dWlkLWluLWphdmFzY3JpcHQvMjE5NjMxMzYjMjE5NjMxMzZcbiAqKi9cbmV4cG9ydCBjbGFzcyBVVUlEIHtcblx0cHJpdmF0ZSBzdGF0aWMgbHV0ID0gW107XG5cblx0c3RhdGljIGdlbmVyYXRlKCk6IHN0cmluZyB7XG5cdFx0bGV0IGQwID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuXHRcdGxldCBkMSA9IE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZmZmIHwgMDtcblx0XHRsZXQgZDIgPSBNYXRoLnJhbmRvbSgpICogMHhmZmZmZmZmZiB8IDA7XG5cdFx0bGV0IGQzID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuXG5cdFx0cmV0dXJuIFVVSUQubHV0W2QwICYgMHhmZl0gKyBVVUlELmx1dFtkMCA+PiA4ICYgMHhmZl0gKyBVVUlELmx1dFtkMCA+PiAxNiAmIDB4ZmZdICsgVVVJRC5sdXRbZDAgPj4gMjQgJiAweGZmXSArICctJyArXG5cdFx0XHRVVUlELmx1dFtkMSAmIDB4ZmZdICsgVVVJRC5sdXRbZDEgPj4gOCAmIDB4ZmZdICsgJy0nICsgVVVJRC5sdXRbZDEgPj4gMTYgJiAweDBmIHwgMHg0MF0gKyBVVUlELmx1dFtkMSA+PiAyNCAmIDB4ZmZdICsgJy0nICtcblx0XHRcdFVVSUQubHV0W2QyICYgMHgzZiB8IDB4ODBdICsgVVVJRC5sdXRbZDIgPj4gOCAmIDB4ZmZdICsgJy0nICsgVVVJRC5sdXRbZDIgPj4gMTYgJiAweGZmXSArIFVVSUQubHV0W2QyID4+IDI0ICYgMHhmZl0gK1xuXHRcdFx0VVVJRC5sdXRbZDMgJiAweGZmXSArIFVVSUQubHV0W2QzID4+IDggJiAweGZmXSArIFVVSUQubHV0W2QzID4+IDE2ICYgMHhmZl0gKyBVVUlELmx1dFtkMyA+PiAyNCAmIDB4ZmZdO1xuXHR9XG5cblx0c3RhdGljIGluaXRpYWxpemUoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuXHRcdFx0VVVJRC5sdXRbaV0gPSAoaSA8IDE2ID8gJzAnIDogJycpICsgaS50b1N0cmluZygxNik7XG5cdFx0fVxuXHR9XG59XG5cblVVSUQuaW5pdGlhbGl6ZSgpO1xuXG5leHBvcnQgY29uc3QgQ29udGVudFR5cGVzID0ge1xuXHRhcHBsaWNhdGlvbkpzb246IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHRhcHBsaWNhdGlvblhXd3dGb3JtVXJsZW5jb2RlZDogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTZXBhcmF0aW9uRGVmaW5pdGlvbiB7XG5cdHNwYWNpbmc6IG51bWJlcixcblx0bGluZVRoaWNrbmVzcz86IG51bWJlcixcblx0bGluZUNvbG9yPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUlucHV0IHtcblx0aWQ6IHN0cmluZztcblx0dmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlT3JEZWZhdWx0PFQ+KG9iajogYW55LCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcblx0cmV0dXJuIG9iaiA/IDxUPm9iaiA6IGRlZmF1bHRWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yRW1wdHkodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gXCJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkKG5vZGU6IE5vZGUsIGNoaWxkOiBOb2RlKSB7XG5cdGlmIChjaGlsZCAhPSBudWxsICYmIGNoaWxkICE9IHVuZGVmaW5lZCkge1xuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9wZXJ0eSh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHByb3BlcnR5VmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlOiBhbnkgPSB1bmRlZmluZWQpIHtcblx0aWYgKHByb3BlcnR5VmFsdWUgJiYgKCFkZWZhdWx0VmFsdWUgfHwgZGVmYXVsdFZhbHVlICE9PSBwcm9wZXJ0eVZhbHVlKSkge1xuXHRcdHRhcmdldFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydHlWYWx1ZTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RW51bVByb3BlcnR5KGVudW1UeXBlOiB7IFtzOiBudW1iZXJdOiBzdHJpbmcgfSwgdGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eVZhbHVlOiBudW1iZXIsIGRlZmF1bHRWYWx1ZT86IG51bWJlcikge1xuXHRpZiAoZGVmYXVsdFZhbHVlID09PSB1bmRlZmluZWQgfHwgZGVmYXVsdFZhbHVlICE9PSBwcm9wZXJ0eVZhbHVlKSB7XG5cdFx0dGFyZ2V0W3Byb3BlcnR5TmFtZV0gPSBlbnVtVHlwZVtwcm9wZXJ0eVZhbHVlXTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW51bVZhbHVlT3JEZWZhdWx0KHRhcmdldEVudW06IHsgW3M6IG51bWJlcl06IHN0cmluZyB9LCBuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcblx0aWYgKGlzTnVsbE9yRW1wdHkobmFtZSkpIHtcblx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xuXHR9XG5cblx0Zm9yICh2YXIga2V5IGluIHRhcmdldEVudW0pIHtcblx0XHRsZXQgaXNWYWx1ZVByb3BlcnR5ID0gcGFyc2VJbnQoa2V5LCAxMCkgPj0gMFxuXG5cdFx0aWYgKGlzVmFsdWVQcm9wZXJ0eSkge1xuXHRcdFx0bGV0IHZhbHVlID0gdGFyZ2V0RW51bVtrZXldO1xuXG5cdFx0XHRpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdGlmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQoa2V5LCAxMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIb3N0Q29uZmlnRW51bSh0YXJnZXRFbnVtOiB7IFtzOiBudW1iZXJdOiBzdHJpbmcgfSwgdmFsdWU6IHN0cmluZyB8IG51bWJlciwgZGVmYXVsdFZhbHVlOiBhbnkpOiBhbnkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG5cdFx0cmV0dXJuIGdldEVudW1WYWx1ZU9yRGVmYXVsdCh0YXJnZXRFbnVtLCB2YWx1ZSwgZGVmYXVsdFZhbHVlKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcblx0XHRyZXR1cm4gZ2V0VmFsdWVPckRlZmF1bHQ8dHlwZW9mIHRhcmdldEVudW0+KHZhbHVlLCBkZWZhdWx0VmFsdWUpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBkZWZhdWx0VmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlcGFyYXRpb24oc2VwYXJhdGlvbkRlZmluaXRpb246IElTZXBhcmF0aW9uRGVmaW5pdGlvbiwgb3JpZW50YXRpb246IEVudW1zLk9yaWVudGF0aW9uKTogSFRNTEVsZW1lbnQge1xuXHRpZiAoc2VwYXJhdGlvbkRlZmluaXRpb24uc3BhY2luZyA+IDAgfHwgc2VwYXJhdGlvbkRlZmluaXRpb24ubGluZVRoaWNrbmVzcyA+IDApIHtcblx0XHR2YXIgc2VwYXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHRcdGlmIChvcmllbnRhdGlvbiA9PSBFbnVtcy5PcmllbnRhdGlvbi5Ib3Jpem9udGFsKSB7XG5cdFx0XHRpZiAoc2VwYXJhdGlvbkRlZmluaXRpb24ubGluZVRoaWNrbmVzcykge1xuXHRcdFx0XHRzZXBhcmF0b3Iuc3R5bGUubWFyZ2luVG9wID0gKHNlcGFyYXRpb25EZWZpbml0aW9uLnNwYWNpbmcgLyAyKSArIFwicHhcIjtcblx0XHRcdFx0c2VwYXJhdG9yLnN0eWxlLnBhZGRpbmdUb3AgPSAoc2VwYXJhdGlvbkRlZmluaXRpb24uc3BhY2luZyAvIDIpICsgXCJweFwiO1xuXHRcdFx0XHRzZXBhcmF0b3Iuc3R5bGUuYm9yZGVyVG9wID0gc2VwYXJhdGlvbkRlZmluaXRpb24ubGluZVRoaWNrbmVzcyArIFwicHggc29saWQgXCIgKyBzdHJpbmdUb0Nzc0NvbG9yKHNlcGFyYXRpb25EZWZpbml0aW9uLmxpbmVDb2xvcik7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3Iuc3R5bGUuaGVpZ2h0ID0gc2VwYXJhdGlvbkRlZmluaXRpb24uc3BhY2luZyArIFwicHhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlcGFyYXRvci5zdHlsZS53aWR0aCA9IFwiOTkuOSVcIjtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoc2VwYXJhdGlvbkRlZmluaXRpb24ubGluZVRoaWNrbmVzcykge1xuXHRcdFx0XHRzZXBhcmF0b3Iuc3R5bGUubWFyZ2luTGVmdCA9IChzZXBhcmF0aW9uRGVmaW5pdGlvbi5zcGFjaW5nIC8gMikgKyBcInB4XCI7XG5cdFx0XHRcdHNlcGFyYXRvci5zdHlsZS5wYWRkaW5nTGVmdCA9IChzZXBhcmF0aW9uRGVmaW5pdGlvbi5zcGFjaW5nIC8gMikgKyBcInB4XCI7XG5cdFx0XHRcdHNlcGFyYXRvci5zdHlsZS5ib3JkZXJMZWZ0ID0gc2VwYXJhdGlvbkRlZmluaXRpb24ubGluZVRoaWNrbmVzcyArIFwicHggc29saWQgXCIgKyBzdHJpbmdUb0Nzc0NvbG9yKHNlcGFyYXRpb25EZWZpbml0aW9uLmxpbmVDb2xvcik7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c2VwYXJhdG9yLnN0eWxlLndpZHRoID0gc2VwYXJhdGlvbkRlZmluaXRpb24uc3BhY2luZyArIFwicHhcIjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRzZXBhcmF0b3Iuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG5cdFx0cmV0dXJuIHNlcGFyYXRvcjtcblx0fVxuXHRlbHNlIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9Dc3NDb2xvcihjb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcblx0dmFyIHJlZ0V4ID0gLyMoWzAtOUEtRl17Mn0pKFswLTlBLUZdezJ9KShbMC05QS1GXXsyfSkoWzAtOUEtRl17Mn0pPy9naTtcblxuXHR2YXIgbWF0Y2hlcyA9IHJlZ0V4LmV4ZWMoY29sb3IpO1xuXG5cdGlmIChtYXRjaGVzICYmIG1hdGNoZXNbNF0pIHtcblx0XHR2YXIgYSA9IHBhcnNlSW50KG1hdGNoZXNbMV0sIDE2KSAvIDI1NTtcblx0XHR2YXIgciA9IHBhcnNlSW50KG1hdGNoZXNbMl0sIDE2KTtcblx0XHR2YXIgZyA9IHBhcnNlSW50KG1hdGNoZXNbM10sIDE2KTtcblx0XHR2YXIgYiA9IHBhcnNlSW50KG1hdGNoZXNbNF0sIDE2KTtcblxuXHRcdHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsXCIgKyBhICsgXCIpXCI7XG5cdH1cblx0ZWxzZSB7XG5cdFx0cmV0dXJuIGNvbG9yO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdXaXRoU3Vic3RpdHV0aW9ucyB7XG5cdHByaXZhdGUgX2lzUHJvY2Vzc2VkOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX29yaWdpbmFsOiBzdHJpbmcgPSBudWxsO1xuXHRwcml2YXRlIF9wcm9jZXNzZWQ6IHN0cmluZyA9IG51bGw7XG5cblx0c3Vic3RpdHV0ZUlucHV0VmFsdWVzKGlucHV0czogQXJyYXk8SUlucHV0PiwgY29udGVudFR5cGU6IHN0cmluZykge1xuXHRcdHRoaXMuX3Byb2Nlc3NlZCA9IHRoaXMuX29yaWdpbmFsO1xuXG5cdFx0dmFyIHJlZ0V4ID0gL1xce3syfShbYS16MC05XyRAXSspLnZhbHVlXFx9ezJ9L2dpO1xuXHRcdHZhciBtYXRjaGVzO1xuXG5cdFx0d2hpbGUgKChtYXRjaGVzID0gcmVnRXguZXhlYyh0aGlzLl9vcmlnaW5hbCkpICE9IG51bGwpIHtcblx0XHRcdHZhciBtYXRjaGVkSW5wdXQ6IElJbnB1dCA9IG51bGw7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChpbnB1dHNbaV0uaWQudG9Mb3dlckNhc2UoKSA9PSBtYXRjaGVzWzFdLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0XHRtYXRjaGVkSW5wdXQgPSBpbnB1dHNbaV07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKG1hdGNoZWRJbnB1dCkge1xuXHRcdFx0XHR2YXIgdmFsdWVGb3JSZXBsYWNlID0gXCJcIjtcblxuXHRcdFx0XHRpZiAobWF0Y2hlZElucHV0LnZhbHVlKSB7XG5cdFx0XHRcdFx0dmFsdWVGb3JSZXBsYWNlID0gbWF0Y2hlZElucHV0LnZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGNvbnRlbnRUeXBlID09PSBDb250ZW50VHlwZXMuYXBwbGljYXRpb25Kc29uKSB7XG5cdFx0XHRcdFx0dmFsdWVGb3JSZXBsYWNlID0gSlNPTi5zdHJpbmdpZnkodmFsdWVGb3JSZXBsYWNlKTtcblx0XHRcdFx0XHR2YWx1ZUZvclJlcGxhY2UgPSB2YWx1ZUZvclJlcGxhY2Uuc2xpY2UoMSwgLTEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKGNvbnRlbnRUeXBlID09PSBDb250ZW50VHlwZXMuYXBwbGljYXRpb25YV3d3Rm9ybVVybGVuY29kZWQpIHtcblx0XHRcdFx0XHR2YWx1ZUZvclJlcGxhY2UgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWVGb3JSZXBsYWNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX3Byb2Nlc3NlZCA9IHRoaXMuX3Byb2Nlc3NlZC5yZXBsYWNlKG1hdGNoZXNbMF0sIHZhbHVlRm9yUmVwbGFjZSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHRoaXMuX2lzUHJvY2Vzc2VkID0gdHJ1ZTtcblx0fVxuXG5cdGdldE9yaWdpbmFsKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX29yaWdpbmFsO1xuXHR9XG5cblx0Z2V0KCk6IHN0cmluZyB7XG5cdFx0aWYgKCF0aGlzLl9pc1Byb2Nlc3NlZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX29yaWdpbmFsO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLl9wcm9jZXNzZWQ7XG5cdFx0fVxuXHR9XG5cblx0c2V0KHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLl9vcmlnaW5hbCA9IHZhbHVlO1xuXHRcdHRoaXMuX2lzUHJvY2Vzc2VkID0gZmFsc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpemVBbmRVbml0IHtcblx0cGh5c2ljYWxTaXplOiBudW1iZXI7XG5cdHVuaXQ6IEVudW1zLlNpemVVbml0O1xuXG5cdHN0YXRpYyBwYXJzZShpbnB1dDogYW55KTogU2l6ZUFuZFVuaXQge1xuXHRcdGxldCByZXN1bHQgPSBuZXcgU2l6ZUFuZFVuaXQoMCwgRW51bXMuU2l6ZVVuaXQuV2VpZ2h0KTtcblxuXHRcdGxldCByZWdFeHAgPSAvXihbMC05XSspKHB4fFxcKik/JC9nO1xuXHRcdGxldCBtYXRjaGVzID0gcmVnRXhwLmV4ZWMoaW5wdXQpO1xuXG5cdFx0aWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMikge1xuXHRcdFx0cmVzdWx0LnBoeXNpY2FsU2l6ZSA9IHBhcnNlSW50KG1hdGNoZXNbMV0pO1xuXG5cdFx0XHRpZiAobWF0Y2hlcy5sZW5ndGggPT0gMykge1xuXHRcdFx0XHRpZiAobWF0Y2hlc1syXSA9PSBcInB4XCIpIHtcblx0XHRcdFx0XHRyZXN1bHQudW5pdCA9IEVudW1zLlNpemVVbml0LlBpeGVsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzaXplOiBcIiArIGlucHV0KTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKHBoeXNpY2FsU2l6ZTogbnVtYmVyLCB1bml0OiBFbnVtcy5TaXplVW5pdCkge1xuXHRcdHRoaXMucGh5c2ljYWxTaXplID0gcGh5c2ljYWxTaXplO1xuXHRcdHRoaXMudW5pdCA9IHVuaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRydW5jYXRlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuXHRtYXhIZWlnaHQ6IG51bWJlcixcblx0bGluZUhlaWdodD86IG51bWJlcikge1xuXHR2YXIgZml0cyA9ICgpID0+IHtcblx0XHQvLyBBbGxvdyBhIG9uZSBwaXhlbCBvdmVyZmxvdyB0byBhY2NvdW50IGZvciByb3VuZGluZyBkaWZmZXJlbmNlc1xuXHRcdC8vIGJldHdlZW4gYnJvd3NlcnNcblx0XHRyZXR1cm4gbWF4SGVpZ2h0IC0gZWxlbWVudC5zY3JvbGxIZWlnaHQgPj0gLTEuMDtcblx0fTtcblxuXHRpZiAoZml0cygpKSByZXR1cm47XG5cblx0dmFyIGZ1bGxUZXh0ID0gZWxlbWVudC5pbm5lckhUTUw7XG5cdHZhciB0cnVuY2F0ZUF0ID0gKGlkeCkgPT4ge1xuXHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gZnVsbFRleHQuc3Vic3RyaW5nKDAsIGlkeCkgKyAnLi4uJztcblx0fVxuXG5cdHZhciBicmVha2FibGVJbmRpY2VzID0gZmluZEJyZWFrYWJsZUluZGljZXMoZnVsbFRleHQpO1xuXHR2YXIgbG8gPSAwO1xuXHR2YXIgaGkgPSBicmVha2FibGVJbmRpY2VzLmxlbmd0aDtcblx0dmFyIGJlc3RCcmVha0lkeCA9IDA7XG5cblx0Ly8gRG8gYSBiaW5hcnkgc2VhcmNoIGZvciB0aGUgbG9uZ2VzdCBzdHJpbmcgdGhhdCBmaXRzXG5cdHdoaWxlIChsbyA8IGhpKSB7XG5cdFx0dmFyIG1pZCA9IE1hdGguZmxvb3IoKGxvICsgaGkpIC8gMik7XG5cdFx0dHJ1bmNhdGVBdChicmVha2FibGVJbmRpY2VzW21pZF0pO1xuXG5cdFx0aWYgKGZpdHMoKSkge1xuXHRcdFx0YmVzdEJyZWFrSWR4ID0gYnJlYWthYmxlSW5kaWNlc1ttaWRdO1xuXHRcdFx0bG8gPSBtaWQgKyAxO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGhpID0gbWlkO1xuXHRcdH1cblx0fVxuXG5cdHRydW5jYXRlQXQoYmVzdEJyZWFrSWR4KTtcblxuXHQvLyBJZiB3ZSBoYXZlIGV4dHJhIHJvb20sIHRyeSB0byBleHBhbmQgdGhlIHN0cmluZyBsZXR0ZXIgYnkgbGV0dGVyXG5cdC8vIChjb3ZlcnMgdGhlIGNhc2Ugd2hlcmUgd2UgaGF2ZSB0byBicmVhayBpbiB0aGUgbWlkZGxlIG9mIGEgbG9uZyB3b3JkKVxuXHRpZiAobGluZUhlaWdodCAmJiBtYXhIZWlnaHQgLSBlbGVtZW50LnNjcm9sbEhlaWdodCA+PSBsaW5lSGVpZ2h0IC0gMS4wKSB7XG5cdFx0bGV0IGlkeCA9IGZpbmROZXh0Q2hhcmFjdGVyKGZ1bGxUZXh0LCBiZXN0QnJlYWtJZHgpO1xuXG5cdFx0d2hpbGUgKGlkeCA8IGZ1bGxUZXh0Lmxlbmd0aCkge1xuXHRcdFx0dHJ1bmNhdGVBdChpZHgpO1xuXG5cdFx0XHRpZiAoZml0cygpKSB7XG5cdFx0XHRcdGJlc3RCcmVha0lkeCA9IGlkeDtcblx0XHRcdFx0aWR4ID0gZmluZE5leHRDaGFyYWN0ZXIoZnVsbFRleHQsIGlkeCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dHJ1bmNhdGVBdChiZXN0QnJlYWtJZHgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGZpbmRCcmVha2FibGVJbmRpY2VzKGh0bWw6IHN0cmluZyk6IEFycmF5PG51bWJlcj4ge1xuXHR2YXIgcmVzdWx0czogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXHR2YXIgaWR4ID0gZmluZE5leHRDaGFyYWN0ZXIoaHRtbCwgLTEpO1xuXG5cdHdoaWxlIChpZHggPCBodG1sLmxlbmd0aCkge1xuXHRcdGlmIChodG1sW2lkeF0gPT0gJyAnKSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goaWR4KTtcblx0XHR9XG5cblx0XHRpZHggPSBmaW5kTmV4dENoYXJhY3RlcihodG1sLCBpZHgpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIGZpbmROZXh0Q2hhcmFjdGVyKGh0bWw6IHN0cmluZywgY3VycklkeDogbnVtYmVyKTogbnVtYmVyIHtcblx0Y3VycklkeCArPSAxO1xuXG5cdC8vIElmIHdlIGZvdW5kIHRoZSBzdGFydCBvZiBhbiBIVE1MIHRhZywga2VlcCBhZHZhbmNpbmcgdW50aWwgd2UgZ2V0XG5cdC8vIHBhc3QgaXQsIHNvIHdlIGRvbid0IGVuZCB1cCB0cnVuY2F0aW5nIGluIHRoZSBtaWRkbGUgb2YgdGhlIHRhZ1xuXHR3aGlsZSAoY3VycklkeCA8IGh0bWwubGVuZ3RoICYmIGh0bWxbY3VycklkeF0gPT0gJzwnKSB7XG5cdFx0d2hpbGUgKGN1cnJJZHggPCBodG1sLmxlbmd0aCAmJiBodG1sW2N1cnJJZHgrK10gIT0gJz4nKTtcblx0fVxuXG5cdHJldHVybiBjdXJySWR4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rml0U3RhdHVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjb250YWluZXJFbmQ6IG51bWJlcik6IEVudW1zLkNvbnRhaW5lckZpdFN0YXR1cyB7XG5cdHZhciBzdGFydCA9IGVsZW1lbnQub2Zmc2V0VG9wO1xuXHR2YXIgZW5kID0gc3RhcnQgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcblxuXHRpZiAoZW5kIDw9IGNvbnRhaW5lckVuZCkge1xuXHRcdHJldHVybiBFbnVtcy5Db250YWluZXJGaXRTdGF0dXMuRnVsbHlJbkNvbnRhaW5lcjtcblx0fVxuXHRlbHNlIGlmIChzdGFydCA8IGNvbnRhaW5lckVuZCkge1xuXHRcdHJldHVybiBFbnVtcy5Db250YWluZXJGaXRTdGF0dXMuT3ZlcmZsb3dpbmc7XG5cdH1cblx0ZWxzZSB7XG5cdFx0cmV0dXJuIEVudW1zLkNvbnRhaW5lckZpdFN0YXR1cy5GdWxseU91dE9mQ29udGFpbmVyO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
