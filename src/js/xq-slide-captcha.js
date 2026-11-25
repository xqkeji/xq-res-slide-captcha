/*!
 * xq-slide-captcha v1.1.0 (https://xqkeji.cn/demo/xq-slide-captcha)
 * Author xqkeji.cn
 * LICENSE AGPL-3.0-only
 * Copyright 2026 xqkeji.cn
 */
 "use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/bootstrap/js/dist/dom/data.js
  var require_data = __commonJS({
    "node_modules/bootstrap/js/dist/dom/data.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Data = factory());
      })(exports, (function() {
        "use strict";
        const elementMap = /* @__PURE__ */ new Map();
        const data = {
          set(element, key, instance) {
            if (!elementMap.has(element)) {
              elementMap.set(element, /* @__PURE__ */ new Map());
            }
            const instanceMap = elementMap.get(element);
            if (!instanceMap.has(key) && instanceMap.size !== 0) {
              console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
              return;
            }
            instanceMap.set(key, instance);
          },
          get(element, key) {
            if (elementMap.has(element)) {
              return elementMap.get(element).get(key) || null;
            }
            return null;
          },
          remove(element, key) {
            if (!elementMap.has(element)) {
              return;
            }
            const instanceMap = elementMap.get(element);
            instanceMap.delete(key);
            if (instanceMap.size === 0) {
              elementMap.delete(element);
            }
          }
        };
        return data;
      }));
    }
  });

  // node_modules/bootstrap/js/dist/util/index.js
  var require_util = __commonJS({
    "node_modules/bootstrap/js/dist/util/index.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Index = {}));
      })(exports, (function(exports2) {
        "use strict";
        const MAX_UID = 1e6;
        const MILLISECONDS_MULTIPLIER = 1e3;
        const TRANSITION_END = "transitionend";
        const parseSelector = (selector) => {
          if (selector && window.CSS && window.CSS.escape) {
            selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
          }
          return selector;
        };
        const toType = (object) => {
          if (object === null || object === void 0) {
            return `${object}`;
          }
          return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
        };
        const getUID = (prefix) => {
          do {
            prefix += Math.floor(Math.random() * MAX_UID);
          } while (document.getElementById(prefix));
          return prefix;
        };
        const getTransitionDurationFromElement = (element) => {
          if (!element) {
            return 0;
          }
          let {
            transitionDuration,
            transitionDelay
          } = window.getComputedStyle(element);
          const floatTransitionDuration = Number.parseFloat(transitionDuration);
          const floatTransitionDelay = Number.parseFloat(transitionDelay);
          if (!floatTransitionDuration && !floatTransitionDelay) {
            return 0;
          }
          transitionDuration = transitionDuration.split(",")[0];
          transitionDelay = transitionDelay.split(",")[0];
          return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
        };
        const triggerTransitionEnd = (element) => {
          element.dispatchEvent(new Event(TRANSITION_END));
        };
        const isElement = (object) => {
          if (!object || typeof object !== "object") {
            return false;
          }
          if (typeof object.jquery !== "undefined") {
            object = object[0];
          }
          return typeof object.nodeType !== "undefined";
        };
        const getElement = (object) => {
          if (isElement(object)) {
            return object.jquery ? object[0] : object;
          }
          if (typeof object === "string" && object.length > 0) {
            return document.querySelector(parseSelector(object));
          }
          return null;
        };
        const isVisible = (element) => {
          if (!isElement(element) || element.getClientRects().length === 0) {
            return false;
          }
          const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
          const closedDetails = element.closest("details:not([open])");
          if (!closedDetails) {
            return elementIsVisible;
          }
          if (closedDetails !== element) {
            const summary = element.closest("summary");
            if (summary && summary.parentNode !== closedDetails) {
              return false;
            }
            if (summary === null) {
              return false;
            }
          }
          return elementIsVisible;
        };
        const isDisabled = (element) => {
          if (!element || element.nodeType !== Node.ELEMENT_NODE) {
            return true;
          }
          if (element.classList.contains("disabled")) {
            return true;
          }
          if (typeof element.disabled !== "undefined") {
            return element.disabled;
          }
          return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
        };
        const findShadowRoot = (element) => {
          if (!document.documentElement.attachShadow) {
            return null;
          }
          if (typeof element.getRootNode === "function") {
            const root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
          }
          if (element instanceof ShadowRoot) {
            return element;
          }
          if (!element.parentNode) {
            return null;
          }
          return findShadowRoot(element.parentNode);
        };
        const noop = () => {
        };
        const reflow = (element) => {
          element.offsetHeight;
        };
        const getjQuery = () => {
          if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
            return window.jQuery;
          }
          return null;
        };
        const DOMContentLoadedCallbacks = [];
        const onDOMContentLoaded = (callback) => {
          if (document.readyState === "loading") {
            if (!DOMContentLoadedCallbacks.length) {
              document.addEventListener("DOMContentLoaded", () => {
                for (const callback2 of DOMContentLoadedCallbacks) {
                  callback2();
                }
              });
            }
            DOMContentLoadedCallbacks.push(callback);
          } else {
            callback();
          }
        };
        const isRTL = () => document.documentElement.dir === "rtl";
        const defineJQueryPlugin = (plugin) => {
          onDOMContentLoaded(() => {
            const $ = getjQuery();
            if ($) {
              const name = plugin.NAME;
              const JQUERY_NO_CONFLICT = $.fn[name];
              $.fn[name] = plugin.jQueryInterface;
              $.fn[name].Constructor = plugin;
              $.fn[name].noConflict = () => {
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
              };
            }
          });
        };
        const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
          return typeof possibleCallback === "function" ? possibleCallback.call(...args) : defaultValue;
        };
        const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
          if (!waitForTransition) {
            execute(callback);
            return;
          }
          const durationPadding = 5;
          const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
          let called = false;
          const handler = ({
            target
          }) => {
            if (target !== transitionElement) {
              return;
            }
            called = true;
            transitionElement.removeEventListener(TRANSITION_END, handler);
            execute(callback);
          };
          transitionElement.addEventListener(TRANSITION_END, handler);
          setTimeout(() => {
            if (!called) {
              triggerTransitionEnd(transitionElement);
            }
          }, emulatedDuration);
        };
        const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
          const listLength = list.length;
          let index = list.indexOf(activeElement);
          if (index === -1) {
            return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
          }
          index += shouldGetNext ? 1 : -1;
          if (isCycleAllowed) {
            index = (index + listLength) % listLength;
          }
          return list[Math.max(0, Math.min(index, listLength - 1))];
        };
        exports2.defineJQueryPlugin = defineJQueryPlugin;
        exports2.execute = execute;
        exports2.executeAfterTransition = executeAfterTransition;
        exports2.findShadowRoot = findShadowRoot;
        exports2.getElement = getElement;
        exports2.getNextActiveElement = getNextActiveElement;
        exports2.getTransitionDurationFromElement = getTransitionDurationFromElement;
        exports2.getUID = getUID;
        exports2.getjQuery = getjQuery;
        exports2.isDisabled = isDisabled;
        exports2.isElement = isElement;
        exports2.isRTL = isRTL;
        exports2.isVisible = isVisible;
        exports2.noop = noop;
        exports2.onDOMContentLoaded = onDOMContentLoaded;
        exports2.parseSelector = parseSelector;
        exports2.reflow = reflow;
        exports2.toType = toType;
        exports2.triggerTransitionEnd = triggerTransitionEnd;
        Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
      }));
    }
  });

  // node_modules/bootstrap/js/dist/dom/event-handler.js
  var require_event_handler = __commonJS({
    "node_modules/bootstrap/js/dist/dom/event-handler.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_util()) : typeof define === "function" && define.amd ? define(["../util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.EventHandler = factory(global.Index));
      })(exports, (function(index_js) {
        "use strict";
        const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
        const stripNameRegex = /\..*/;
        const stripUidRegex = /::\d+$/;
        const eventRegistry = {};
        let uidEvent = 1;
        const customEvents = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        };
        const nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function makeEventUid(element, uid) {
          return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
        }
        function getElementEvents(element) {
          const uid = makeEventUid(element);
          element.uidEvent = uid;
          eventRegistry[uid] = eventRegistry[uid] || {};
          return eventRegistry[uid];
        }
        function bootstrapHandler(element, fn) {
          return function handler(event) {
            hydrateObj(event, {
              delegateTarget: element
            });
            if (handler.oneOff) {
              EventHandler.off(element, event.type, fn);
            }
            return fn.apply(element, [event]);
          };
        }
        function bootstrapDelegationHandler(element, selector, fn) {
          return function handler(event) {
            const domElements = element.querySelectorAll(selector);
            for (let {
              target
            } = event; target && target !== this; target = target.parentNode) {
              for (const domElement of domElements) {
                if (domElement !== target) {
                  continue;
                }
                hydrateObj(event, {
                  delegateTarget: target
                });
                if (handler.oneOff) {
                  EventHandler.off(element, event.type, selector, fn);
                }
                return fn.apply(target, [event]);
              }
            }
          };
        }
        function findHandler(events, callable, delegationSelector = null) {
          return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
        }
        function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
          const isDelegated = typeof handler === "string";
          const callable = isDelegated ? delegationFunction : handler || delegationFunction;
          let typeEvent = getTypeEvent(originalTypeEvent);
          if (!nativeEvents.has(typeEvent)) {
            typeEvent = originalTypeEvent;
          }
          return [isDelegated, callable, typeEvent];
        }
        function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
          if (typeof originalTypeEvent !== "string" || !element) {
            return;
          }
          let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
          if (originalTypeEvent in customEvents) {
            const wrapFunction = (fn2) => {
              return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                  return fn2.call(this, event);
                }
              };
            };
            callable = wrapFunction(callable);
          }
          const events = getElementEvents(element);
          const handlers = events[typeEvent] || (events[typeEvent] = {});
          const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
          if (previousFunction) {
            previousFunction.oneOff = previousFunction.oneOff && oneOff;
            return;
          }
          const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
          const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
          fn.delegationSelector = isDelegated ? handler : null;
          fn.callable = callable;
          fn.oneOff = oneOff;
          fn.uidEvent = uid;
          handlers[uid] = fn;
          element.addEventListener(typeEvent, fn, isDelegated);
        }
        function removeHandler(element, events, typeEvent, handler, delegationSelector) {
          const fn = findHandler(events[typeEvent], handler, delegationSelector);
          if (!fn) {
            return;
          }
          element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
          delete events[typeEvent][fn.uidEvent];
        }
        function removeNamespacedHandlers(element, events, typeEvent, namespace) {
          const storeElementEvent = events[typeEvent] || {};
          for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
            if (handlerKey.includes(namespace)) {
              removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
          }
        }
        function getTypeEvent(event) {
          event = event.replace(stripNameRegex, "");
          return customEvents[event] || event;
        }
        const EventHandler = {
          on(element, event, handler, delegationFunction) {
            addHandler(element, event, handler, delegationFunction, false);
          },
          one(element, event, handler, delegationFunction) {
            addHandler(element, event, handler, delegationFunction, true);
          },
          off(element, originalTypeEvent, handler, delegationFunction) {
            if (typeof originalTypeEvent !== "string" || !element) {
              return;
            }
            const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
            const inNamespace = typeEvent !== originalTypeEvent;
            const events = getElementEvents(element);
            const storeElementEvent = events[typeEvent] || {};
            const isNamespace = originalTypeEvent.startsWith(".");
            if (typeof callable !== "undefined") {
              if (!Object.keys(storeElementEvent).length) {
                return;
              }
              removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
              return;
            }
            if (isNamespace) {
              for (const elementEvent of Object.keys(events)) {
                removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
              }
            }
            for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
              const handlerKey = keyHandlers.replace(stripUidRegex, "");
              if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
              }
            }
          },
          trigger(element, event, args) {
            if (typeof event !== "string" || !element) {
              return null;
            }
            const $ = index_js.getjQuery();
            const typeEvent = getTypeEvent(event);
            const inNamespace = event !== typeEvent;
            let jQueryEvent = null;
            let bubbles = true;
            let nativeDispatch = true;
            let defaultPrevented = false;
            if (inNamespace && $) {
              jQueryEvent = $.Event(event, args);
              $(element).trigger(jQueryEvent);
              bubbles = !jQueryEvent.isPropagationStopped();
              nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
              defaultPrevented = jQueryEvent.isDefaultPrevented();
            }
            const evt = hydrateObj(new Event(event, {
              bubbles,
              cancelable: true
            }), args);
            if (defaultPrevented) {
              evt.preventDefault();
            }
            if (nativeDispatch) {
              element.dispatchEvent(evt);
            }
            if (evt.defaultPrevented && jQueryEvent) {
              jQueryEvent.preventDefault();
            }
            return evt;
          }
        };
        function hydrateObj(obj, meta = {}) {
          for (const [key, value] of Object.entries(meta)) {
            try {
              obj[key] = value;
            } catch (_unused) {
              Object.defineProperty(obj, key, {
                configurable: true,
                get() {
                  return value;
                }
              });
            }
          }
          return obj;
        }
        return EventHandler;
      }));
    }
  });

  // node_modules/bootstrap/js/dist/dom/manipulator.js
  var require_manipulator = __commonJS({
    "node_modules/bootstrap/js/dist/dom/manipulator.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Manipulator = factory());
      })(exports, (function() {
        "use strict";
        function normalizeData(value) {
          if (value === "true") {
            return true;
          }
          if (value === "false") {
            return false;
          }
          if (value === Number(value).toString()) {
            return Number(value);
          }
          if (value === "" || value === "null") {
            return null;
          }
          if (typeof value !== "string") {
            return value;
          }
          try {
            return JSON.parse(decodeURIComponent(value));
          } catch (_unused) {
            return value;
          }
        }
        function normalizeDataKey(key) {
          return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
        }
        const Manipulator = {
          setDataAttribute(element, key, value) {
            element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
          },
          removeDataAttribute(element, key) {
            element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
          },
          getDataAttributes(element) {
            if (!element) {
              return {};
            }
            const attributes = {};
            const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
            for (const key of bsKeys) {
              let pureKey = key.replace(/^bs/, "");
              pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
              attributes[pureKey] = normalizeData(element.dataset[key]);
            }
            return attributes;
          },
          getDataAttribute(element, key) {
            return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
          }
        };
        return Manipulator;
      }));
    }
  });

  // node_modules/bootstrap/js/dist/util/config.js
  var require_config = __commonJS({
    "node_modules/bootstrap/js/dist/util/config.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_manipulator(), require_util()) : typeof define === "function" && define.amd ? define(["../dom/manipulator", "./index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Config = factory(global.Manipulator, global.Index));
      })(exports, (function(Manipulator, index_js) {
        "use strict";
        class Config {
          // Getters
          static get Default() {
            return {};
          }
          static get DefaultType() {
            return {};
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          _getConfig(config) {
            config = this._mergeConfigObj(config);
            config = this._configAfterMerge(config);
            this._typeCheckConfig(config);
            return config;
          }
          _configAfterMerge(config) {
            return config;
          }
          _mergeConfigObj(config, element) {
            const jsonConfig = index_js.isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
            return {
              ...this.constructor.Default,
              ...typeof jsonConfig === "object" ? jsonConfig : {},
              ...index_js.isElement(element) ? Manipulator.getDataAttributes(element) : {},
              ...typeof config === "object" ? config : {}
            };
          }
          _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
            for (const [property, expectedTypes] of Object.entries(configTypes)) {
              const value = config[property];
              const valueType = index_js.isElement(value) ? "element" : index_js.toType(value);
              if (!new RegExp(expectedTypes).test(valueType)) {
                throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
              }
            }
          }
        }
        return Config;
      }));
    }
  });

  // node_modules/bootstrap/js/dist/base-component.js
  var require_base_component = __commonJS({
    "node_modules/bootstrap/js/dist/base-component.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_data(), require_event_handler(), require_config(), require_util()) : typeof define === "function" && define.amd ? define(["./dom/data", "./dom/event-handler", "./util/config", "./util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.BaseComponent = factory(global.Data, global.EventHandler, global.Config, global.Index));
      })(exports, (function(Data, EventHandler, Config, index_js) {
        "use strict";
        const VERSION = "5.3.9";
        class BaseComponent extends Config {
          constructor(element, config) {
            super();
            element = index_js.getElement(element);
            if (!element) {
              return;
            }
            this._element = element;
            this._config = this._getConfig(config);
            Data.set(this._element, this.constructor.DATA_KEY, this);
          }
          // Public
          dispose() {
            Data.remove(this._element, this.constructor.DATA_KEY);
            EventHandler.off(this._element, this.constructor.EVENT_KEY);
            for (const propertyName of Object.getOwnPropertyNames(this)) {
              this[propertyName] = null;
            }
          }
          // Private
          _queueCallback(callback, element, isAnimated = true) {
            index_js.executeAfterTransition(callback, element, isAnimated);
          }
          _getConfig(config) {
            config = this._mergeConfigObj(config, this._element);
            config = this._configAfterMerge(config);
            this._typeCheckConfig(config);
            return config;
          }
          // Static
          static getInstance(element) {
            return Data.get(index_js.getElement(element), this.DATA_KEY);
          }
          static getOrCreateInstance(element, config = {}) {
            return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
          }
          static get VERSION() {
            return VERSION;
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
          static eventName(name) {
            return `${name}${this.EVENT_KEY}`;
          }
        }
        return BaseComponent;
      }));
    }
  });

  // node_modules/bootstrap/js/dist/dom/selector-engine.js
  var require_selector_engine = __commonJS({
    "node_modules/bootstrap/js/dist/dom/selector-engine.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_util()) : typeof define === "function" && define.amd ? define(["../util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.SelectorEngine = factory(global.Index));
      })(exports, (function(index_js) {
        "use strict";
        const getSelector = (element) => {
          let selector = element.getAttribute("data-bs-target");
          if (!selector || selector === "#") {
            let hrefAttribute = element.getAttribute("href");
            if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
              return null;
            }
            if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
              hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
            }
            selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
          }
          return selector ? selector.split(",").map((sel) => index_js.parseSelector(sel)).join(",") : null;
        };
        const SelectorEngine = {
          find(selector, element = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
          },
          findOne(selector, element = document.documentElement) {
            return Element.prototype.querySelector.call(element, selector);
          },
          children(element, selector) {
            return [].concat(...element.children).filter((child) => child.matches(selector));
          },
          parents(element, selector) {
            const parents = [];
            let ancestor = element.parentNode.closest(selector);
            while (ancestor) {
              parents.push(ancestor);
              ancestor = ancestor.parentNode.closest(selector);
            }
            return parents;
          },
          prev(element, selector) {
            let previous = element.previousElementSibling;
            while (previous) {
              if (previous.matches(selector)) {
                return [previous];
              }
              previous = previous.previousElementSibling;
            }
            return [];
          },
          // TODO: this is now unused; remove later along with prev()
          next(element, selector) {
            let next = element.nextElementSibling;
            while (next) {
              if (next.matches(selector)) {
                return [next];
              }
              next = next.nextElementSibling;
            }
            return [];
          },
          focusableChildren(element) {
            const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
            return this.find(focusables, element).filter((el2) => !index_js.isDisabled(el2) && index_js.isVisible(el2));
          },
          getSelectorFromElement(element) {
            const selector = getSelector(element);
            if (selector) {
              return SelectorEngine.findOne(selector) ? selector : null;
            }
            return null;
          },
          getElementFromSelector(element) {
            const selector = getSelector(element);
            return selector ? SelectorEngine.findOne(selector) : null;
          },
          getMultipleElementsFromSelector(element) {
            const selector = getSelector(element);
            return selector ? SelectorEngine.find(selector) : [];
          }
        };
        return SelectorEngine;
      }));
    }
  });

  // node_modules/bootstrap/js/dist/util/backdrop.js
  var require_backdrop = __commonJS({
    "node_modules/bootstrap/js/dist/util/backdrop.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_event_handler(), require_config(), require_util()) : typeof define === "function" && define.amd ? define(["../dom/event-handler", "./config", "./index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Backdrop = factory(global.EventHandler, global.Config, global.Index));
      })(exports, (function(EventHandler, Config, index_js) {
        "use strict";
        const NAME = "backdrop";
        const CLASS_NAME_FADE = "fade";
        const CLASS_NAME_SHOW = "show";
        const EVENT_MOUSEDOWN = `mousedown.bs.${NAME}`;
        const Default = {
          className: "modal-backdrop",
          clickCallback: null,
          isAnimated: false,
          isVisible: true,
          // if false, we use the backdrop helper without adding any element to the dom
          rootElement: "body"
          // give the choice to place backdrop under different elements
        };
        const DefaultType = {
          className: "string",
          clickCallback: "(function|null)",
          isAnimated: "boolean",
          isVisible: "boolean",
          rootElement: "(element|string)"
        };
        class Backdrop extends Config {
          constructor(config) {
            super();
            this._config = this._getConfig(config);
            this._isAppended = false;
            this._element = null;
          }
          // Getters
          static get Default() {
            return Default;
          }
          static get DefaultType() {
            return DefaultType;
          }
          static get NAME() {
            return NAME;
          }
          // Public
          show(callback) {
            if (!this._config.isVisible) {
              index_js.execute(callback);
              return;
            }
            this._append();
            const element = this._getElement();
            if (this._config.isAnimated) {
              index_js.reflow(element);
            }
            element.classList.add(CLASS_NAME_SHOW);
            this._emulateAnimation(() => {
              index_js.execute(callback);
            });
          }
          hide(callback) {
            if (!this._config.isVisible) {
              index_js.execute(callback);
              return;
            }
            this._getElement().classList.remove(CLASS_NAME_SHOW);
            this._emulateAnimation(() => {
              this.dispose();
              index_js.execute(callback);
            });
          }
          dispose() {
            if (!this._isAppended) {
              return;
            }
            EventHandler.off(this._element, EVENT_MOUSEDOWN);
            this._element.remove();
            this._isAppended = false;
          }
          // Private
          _getElement() {
            if (!this._element) {
              const backdrop = document.createElement("div");
              backdrop.className = this._config.className;
              if (this._config.isAnimated) {
                backdrop.classList.add(CLASS_NAME_FADE);
              }
              this._element = backdrop;
            }
            return this._element;
          }
          _configAfterMerge(config) {
            config.rootElement = index_js.getElement(config.rootElement);
            return config;
          }
          _append() {
            if (this._isAppended) {
              return;
            }
            const element = this._getElement();
            this._config.rootElement.append(element);
            EventHandler.on(element, EVENT_MOUSEDOWN, () => {
              index_js.execute(this._config.clickCallback);
            });
            this._isAppended = true;
          }
          _emulateAnimation(callback) {
            index_js.executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
          }
        }
        return Backdrop;
      }));
    }
  });

  // node_modules/bootstrap/js/dist/util/component-functions.js
  var require_component_functions = __commonJS({
    "node_modules/bootstrap/js/dist/util/component-functions.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_event_handler(), require_selector_engine(), require_util()) : typeof define === "function" && define.amd ? define(["exports", "../dom/event-handler", "../dom/selector-engine", "./index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.ComponentFunctions = {}, global.EventHandler, global.SelectorEngine, global.Index));
      })(exports, (function(exports2, EventHandler, SelectorEngine, index_js) {
        "use strict";
        const enableDismissTrigger = (component, method = "hide") => {
          const clickEvent = `click.dismiss${component.EVENT_KEY}`;
          const name = component.NAME;
          EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
            if (["A", "AREA"].includes(this.tagName)) {
              event.preventDefault();
            }
            if (index_js.isDisabled(this)) {
              return;
            }
            const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
            const instance = component.getOrCreateInstance(target);
            instance[method]();
          });
        };
        exports2.enableDismissTrigger = enableDismissTrigger;
        Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
      }));
    }
  });

  // node_modules/bootstrap/js/dist/util/focustrap.js
  var require_focustrap = __commonJS({
    "node_modules/bootstrap/js/dist/util/focustrap.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_event_handler(), require_selector_engine(), require_config()) : typeof define === "function" && define.amd ? define(["../dom/event-handler", "../dom/selector-engine", "./config"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Focustrap = factory(global.EventHandler, global.SelectorEngine, global.Config));
      })(exports, (function(EventHandler, SelectorEngine, Config) {
        "use strict";
        const NAME = "focustrap";
        const DATA_KEY = "bs.focustrap";
        const EVENT_KEY = `.${DATA_KEY}`;
        const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
        const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY}`;
        const TAB_KEY = "Tab";
        const TAB_NAV_FORWARD = "forward";
        const TAB_NAV_BACKWARD = "backward";
        const Default = {
          autofocus: true,
          trapElement: null
          // The element to trap focus inside of
        };
        const DefaultType = {
          autofocus: "boolean",
          trapElement: "element"
        };
        class FocusTrap extends Config {
          constructor(config) {
            super();
            this._config = this._getConfig(config);
            this._isActive = false;
            this._lastTabNavDirection = null;
          }
          // Getters
          static get Default() {
            return Default;
          }
          static get DefaultType() {
            return DefaultType;
          }
          static get NAME() {
            return NAME;
          }
          // Public
          activate() {
            if (this._isActive) {
              return;
            }
            if (this._config.autofocus) {
              this._config.trapElement.focus();
            }
            EventHandler.off(document, EVENT_KEY);
            EventHandler.on(document, EVENT_FOCUSIN, (event) => this._handleFocusin(event));
            EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
            this._isActive = true;
          }
          deactivate() {
            if (!this._isActive) {
              return;
            }
            this._isActive = false;
            EventHandler.off(document, EVENT_KEY);
          }
          // Private
          _handleFocusin(event) {
            const {
              trapElement
            } = this._config;
            if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
              return;
            }
            const elements = SelectorEngine.focusableChildren(trapElement);
            if (elements.length === 0) {
              trapElement.focus();
            } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
              elements[elements.length - 1].focus();
            } else {
              elements[0].focus();
            }
          }
          _handleKeydown(event) {
            if (event.key !== TAB_KEY) {
              return;
            }
            this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
          }
        }
        return FocusTrap;
      }));
    }
  });

  // node_modules/bootstrap/js/dist/util/scrollbar.js
  var require_scrollbar = __commonJS({
    "node_modules/bootstrap/js/dist/util/scrollbar.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_manipulator(), require_selector_engine(), require_util()) : typeof define === "function" && define.amd ? define(["../dom/manipulator", "../dom/selector-engine", "./index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Scrollbar = factory(global.Manipulator, global.SelectorEngine, global.Index));
      })(exports, (function(Manipulator, SelectorEngine, index_js) {
        "use strict";
        const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
        const SELECTOR_STICKY_CONTENT = ".sticky-top";
        const PROPERTY_PADDING = "padding-right";
        const PROPERTY_MARGIN = "margin-right";
        class ScrollBarHelper {
          constructor() {
            this._element = document.body;
          }
          // Public
          getWidth() {
            const documentWidth = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - documentWidth);
          }
          hide() {
            const width = this.getWidth();
            this._disableOverFlow();
            this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
            this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
            this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow");
            this._resetElementAttributes(this._element, PROPERTY_PADDING);
            this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
            this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
          // Private
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow");
            this._element.style.overflow = "hidden";
          }
          _setElementAttributes(selector, styleProperty, callback) {
            const scrollbarWidth = this.getWidth();
            const manipulationCallBack = (element) => {
              if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
                return;
              }
              this._saveInitialAttribute(element, styleProperty);
              const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
              element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
            };
            this._applyManipulationCallback(selector, manipulationCallBack);
          }
          _saveInitialAttribute(element, styleProperty) {
            const actualValue = element.style.getPropertyValue(styleProperty);
            if (actualValue) {
              Manipulator.setDataAttribute(element, styleProperty, actualValue);
            }
          }
          _resetElementAttributes(selector, styleProperty) {
            const manipulationCallBack = (element) => {
              const value = Manipulator.getDataAttribute(element, styleProperty);
              if (value === null) {
                element.style.removeProperty(styleProperty);
                return;
              }
              Manipulator.removeDataAttribute(element, styleProperty);
              element.style.setProperty(styleProperty, value);
            };
            this._applyManipulationCallback(selector, manipulationCallBack);
          }
          _applyManipulationCallback(selector, callBack) {
            if (index_js.isElement(selector)) {
              callBack(selector);
              return;
            }
            for (const sel of SelectorEngine.find(selector, this._element)) {
              callBack(sel);
            }
          }
        }
        return ScrollBarHelper;
      }));
    }
  });

  // node_modules/bootstrap/js/dist/modal.js
  var require_modal = __commonJS({
    "node_modules/bootstrap/js/dist/modal.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_base_component(), require_event_handler(), require_selector_engine(), require_backdrop(), require_component_functions(), require_focustrap(), require_util(), require_scrollbar()) : typeof define === "function" && define.amd ? define(["./base-component", "./dom/event-handler", "./dom/selector-engine", "./util/backdrop", "./util/component-functions", "./util/focustrap", "./util/index", "./util/scrollbar"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Modal = factory(global.BaseComponent, global.EventHandler, global.SelectorEngine, global.Backdrop, global.ComponentFunctions, global.Focustrap, global.Index, global.Scrollbar));
      })(exports, (function(BaseComponent, EventHandler, SelectorEngine, Backdrop, componentFunctions_js, FocusTrap, index_js, ScrollBarHelper) {
        "use strict";
        const NAME = "modal";
        const DATA_KEY = "bs.modal";
        const EVENT_KEY = `.${DATA_KEY}`;
        const DATA_API_KEY = ".data-api";
        const ESCAPE_KEY = "Escape";
        const EVENT_HIDE = `hide${EVENT_KEY}`;
        const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
        const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
        const EVENT_SHOW = `show${EVENT_KEY}`;
        const EVENT_SHOWN = `shown${EVENT_KEY}`;
        const EVENT_RESIZE = `resize${EVENT_KEY}`;
        const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
        const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY}`;
        const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
        const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
        const CLASS_NAME_OPEN = "modal-open";
        const CLASS_NAME_FADE = "fade";
        const CLASS_NAME_SHOW = "show";
        const CLASS_NAME_STATIC = "modal-static";
        const OPEN_SELECTOR = ".modal.show";
        const SELECTOR_DIALOG = ".modal-dialog";
        const SELECTOR_MODAL_BODY = ".modal-body";
        const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
        const Default = {
          backdrop: true,
          focus: true,
          keyboard: true
        };
        const DefaultType = {
          backdrop: "(boolean|string)",
          focus: "boolean",
          keyboard: "boolean"
        };
        class Modal2 extends BaseComponent {
          constructor(element, config) {
            super(element, config);
            this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
            this._backdrop = this._initializeBackDrop();
            this._focustrap = this._initializeFocusTrap();
            this._isShown = false;
            this._isTransitioning = false;
            this._scrollBar = new ScrollBarHelper();
            this._addEventListeners();
          }
          // Getters
          static get Default() {
            return Default;
          }
          static get DefaultType() {
            return DefaultType;
          }
          static get NAME() {
            return NAME;
          }
          // Public
          toggle(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
          }
          show(relatedTarget) {
            if (this._isShown || this._isTransitioning) {
              return;
            }
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
              relatedTarget
            });
            if (showEvent.defaultPrevented) {
              return;
            }
            this._isShown = true;
            this._isTransitioning = true;
            this._scrollBar.hide();
            document.body.classList.add(CLASS_NAME_OPEN);
            this._adjustDialog();
            this._backdrop.show(() => this._showElement(relatedTarget));
          }
          hide() {
            if (!this._isShown || this._isTransitioning) {
              return;
            }
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
            if (hideEvent.defaultPrevented) {
              return;
            }
            this._isShown = false;
            this._isTransitioning = true;
            this._focustrap.deactivate();
            this._element.classList.remove(CLASS_NAME_SHOW);
            this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
          }
          dispose() {
            EventHandler.off(window, EVENT_KEY);
            EventHandler.off(this._dialog, EVENT_KEY);
            this._backdrop.dispose();
            this._focustrap.deactivate();
            super.dispose();
          }
          handleUpdate() {
            this._adjustDialog();
          }
          // Private
          _initializeBackDrop() {
            return new Backdrop({
              isVisible: Boolean(this._config.backdrop),
              // 'static' option will be translated to true, and booleans will keep their value,
              isAnimated: this._isAnimated()
            });
          }
          _initializeFocusTrap() {
            return new FocusTrap({
              trapElement: this._element
            });
          }
          _showElement(relatedTarget) {
            if (!document.body.contains(this._element)) {
              document.body.append(this._element);
            }
            this._element.style.display = "block";
            this._element.removeAttribute("aria-hidden");
            this._element.setAttribute("aria-modal", true);
            this._element.setAttribute("role", "dialog");
            this._element.scrollTop = 0;
            const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
            if (modalBody) {
              modalBody.scrollTop = 0;
            }
            index_js.reflow(this._element);
            this._element.classList.add(CLASS_NAME_SHOW);
            const transitionComplete = () => {
              if (this._config.focus) {
                this._focustrap.activate();
              }
              this._isTransitioning = false;
              EventHandler.trigger(this._element, EVENT_SHOWN, {
                relatedTarget
              });
            };
            this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
          }
          _addEventListeners() {
            EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
              if (event.key !== ESCAPE_KEY) {
                return;
              }
              if (this._config.keyboard) {
                this.hide();
                return;
              }
              this._triggerBackdropTransition();
            });
            EventHandler.on(window, EVENT_RESIZE, () => {
              if (this._isShown && !this._isTransitioning) {
                this._adjustDialog();
              }
            });
            EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
              EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
                if (this._element !== event.target || this._element !== event2.target) {
                  return;
                }
                if (this._config.backdrop === "static") {
                  this._triggerBackdropTransition();
                  return;
                }
                if (this._config.backdrop) {
                  this.hide();
                }
              });
            });
          }
          _hideModal() {
            this._element.style.display = "none";
            this._element.setAttribute("aria-hidden", true);
            this._element.removeAttribute("aria-modal");
            this._element.removeAttribute("role");
            this._isTransitioning = false;
            this._backdrop.hide(() => {
              document.body.classList.remove(CLASS_NAME_OPEN);
              this._resetAdjustments();
              this._scrollBar.reset();
              EventHandler.trigger(this._element, EVENT_HIDDEN);
            });
          }
          _isAnimated() {
            return this._element.classList.contains(CLASS_NAME_FADE);
          }
          _triggerBackdropTransition() {
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
            if (hideEvent.defaultPrevented) {
              return;
            }
            const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
            const initialOverflowY = this._element.style.overflowY;
            if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
              return;
            }
            if (!isModalOverflowing) {
              this._element.style.overflowY = "hidden";
            }
            this._element.classList.add(CLASS_NAME_STATIC);
            this._queueCallback(() => {
              this._element.classList.remove(CLASS_NAME_STATIC);
              this._queueCallback(() => {
                this._element.style.overflowY = initialOverflowY;
              }, this._dialog);
            }, this._dialog);
            this._element.focus();
          }
          /**
           * The following methods are used to handle overflowing modals
           */
          _adjustDialog() {
            const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
            const scrollbarWidth = this._scrollBar.getWidth();
            const isBodyOverflowing = scrollbarWidth > 0;
            if (isBodyOverflowing && !isModalOverflowing) {
              const property = index_js.isRTL() ? "paddingLeft" : "paddingRight";
              this._element.style[property] = `${scrollbarWidth}px`;
            }
            if (!isBodyOverflowing && isModalOverflowing) {
              const property = index_js.isRTL() ? "paddingRight" : "paddingLeft";
              this._element.style[property] = `${scrollbarWidth}px`;
            }
          }
          _resetAdjustments() {
            this._element.style.paddingLeft = "";
            this._element.style.paddingRight = "";
          }
          // Static
          static jQueryInterface(config, relatedTarget) {
            return this.each(function() {
              const data = Modal2.getOrCreateInstance(this, config);
              if (typeof config !== "string") {
                return;
              }
              if (typeof data[config] === "undefined") {
                throw new TypeError(`No method named "${config}"`);
              }
              data[config](relatedTarget);
            });
          }
        }
        EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
          const target = SelectorEngine.getElementFromSelector(this);
          if (["A", "AREA"].includes(this.tagName)) {
            event.preventDefault();
          }
          EventHandler.one(target, EVENT_SHOW, (showEvent) => {
            if (showEvent.defaultPrevented) {
              return;
            }
            EventHandler.one(target, EVENT_HIDDEN, () => {
              if (index_js.isVisible(this)) {
                this.focus();
              }
            });
          });
          const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
          if (alreadyOpen) {
            Modal2.getInstance(alreadyOpen).hide();
          }
          const data = Modal2.getOrCreateInstance(target);
          data.toggle(this);
        });
        componentFunctions_js.enableDismissTrigger(Modal2);
        index_js.defineJQueryPlugin(Modal2);
        return Modal2;
      }));
    }
  });

  // node_modules/xq-captcha-core/dist/logic.mjs
  var Callbacks = class {
    constructor(logPrefix) {
      this.logPrefix = logPrefix;
      this.handlers = /* @__PURE__ */ new Map();
    }
    set(name, fn) {
      this.handlers.set(name, fn);
    }
    emit(name, ...args) {
      const fn = this.handlers.get(name);
      if (!fn) {
        return;
      }
      try {
        fn(...args);
      } catch (error) {
        console.error(`${this.logPrefix}: ${name} \u56DE\u8C03\u629B\u51FA\u5F02\u5E38`, error);
      }
    }
  };
  var DataClient = class {
    constructor(options, transport, expectedType) {
      this.options = options;
      this.transport = transport;
      this.expectedType = expectedType;
    }
    async load() {
      const body = await this.transport.request("GET", this.options.dataUrl);
      const parsed = JSON.parse(body);
      const data = unwrap(parsed);
      if (!isValidData(data, this.expectedType)) {
        throw new Error("\u9A8C\u8BC1\u7801\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E");
      }
      return data;
    }
  };
  function unwrap(value) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    const root = value;
    const payload = root.data;
    if (typeof payload !== "object" || payload === null || typeof root.image_base64 === "string") {
      return value;
    }
    if (root.code !== 200 && root.success !== true) {
      return value;
    }
    return {
      ...payload,
      success: true
    };
  }
  function isValidData(data, expectedType) {
    return typeof data === "object" && data !== null && typeof data.success === "boolean" && (data.type === expectedType || data.type === null) && typeof data.image_base64 === "string";
  }
  var Dom = class {
    constructor() {
      this.cache = /* @__PURE__ */ new Map();
      this.root = document;
    }
    /** 把查询作用域切换到本实例自己的弹窗。 */
    setRoot(root) {
      if (this.root !== root) {
        this.root = root;
        this.cache.clear();
      }
    }
    /** 弹窗内部节点查询，限定在 setRoot() 指定的作用域内。 */
    query(selector) {
      const cached = this.cache.get(selector);
      if (cached?.isConnected) {
        return cached;
      }
      const found = this.root.querySelector(selector);
      if (found) {
        this.cache.set(selector, found);
      } else {
        this.cache.delete(selector);
      }
      return found;
    }
    queryAll(selector) {
      return Array.from(this.root.querySelectorAll(selector));
    }
    /** 页面级节点查询（触发器、弹窗根节点），不受弹窗作用域限制。 */
    queryGlobal(selector) {
      return document.querySelector(selector);
    }
    queryAllGlobal(selector) {
      return Array.from(document.querySelectorAll(selector));
    }
  };
  var HttpError = class extends Error {
    constructor(status, body) {
      super(`captcha request failed: ${status}`);
      this.status = status;
      this.body = body;
      this.name = "HttpError";
    }
  };
  var FetchTransport = class {
    constructor(timeout) {
      this.timeout = timeout;
    }
    async request(method, url, data) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), this.timeout);
      let target = url;
      let body;
      if (data) {
        const params = new URLSearchParams(data).toString();
        if (method === "GET") {
          target += (url.includes("?") ? "&" : "?") + params;
        } else {
          body = params;
        }
      }
      const headers = { Accept: "application/json, text/plain, */*" };
      if (body !== void 0) {
        headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      try {
        const response = await fetch(target, {
          method,
          body,
          headers,
          signal: controller.signal,
          // 验证码答案存在 PHP 会话里，必须带上同源 Cookie。
          credentials: "same-origin"
        });
        const text2 = await response.text();
        if (!response.ok) {
          throw new HttpError(response.status, text2);
        }
        return text2;
      } catch (error) {
        if (error instanceof HttpError) {
          throw error;
        }
        throw new HttpError(controller.signal.aborted ? -1 : 0, "");
      } finally {
        clearTimeout(timer);
      }
    }
  };
  var BASE_OPTIONS = {
    handleDom: ".xq-captcha",
    dataUrl: "/admin/user/captchadata",
    checkUrl: "/admin/user/captchacheck",
    placeholder: "\u70B9\u51FB\u6309\u94AE\u8FDB\u884C\u9A8C\u8BC1",
    successText: "\u2713 \u9A8C\u8BC1\u6210\u529F",
    failText: "\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5",
    showClose: true,
    showRefresh: true,
    showRipple: true,
    theme: "auto",
    inputName: "xq_captcha_token",
    autoInsertInput: true,
    guardText: "\u8BF7\u5148\u5B8C\u6210\u4EBA\u673A\u9A8C\u8BC1",
    timeout: 1e4,
    copyright: {
      text: "\xA9 xqkeji.cn",
      url: "https://xqkeji.cn/",
      title: "xqkeji.cn"
    }
  };
  function resolveOptions(defaults, overrides = {}) {
    return {
      ...defaults,
      ...overrides,
      copyright: { ...defaults.copyright, ...overrides.copyright }
    };
  }
  function createTransport(options) {
    return options.transport ?? new FetchTransport(options.timeout);
  }
  var State = class {
    constructor(type) {
      this.type = type;
      this.imgWidth = 240;
      this.imgHeight = 150;
      this.scale = 1;
      this.invScale = 1;
      this.imgLoaded = false;
      this.busy = false;
      this.passed = false;
      this.token = null;
      this.markWidth = 50;
      this.markTopY = 0;
      this.markOffset = 0;
      this.maxOffset = 0;
      this.moving = false;
      this.rafId = null;
      this.charCount = 4;
    }
    beginRound() {
      this.passed = false;
      this.token = null;
      this.busy = false;
      this.imgLoaded = false;
    }
    beginRefresh() {
      this.imgLoaded = false;
      this.busy = false;
    }
    cancelFrame() {
      if (this.rafId !== null) {
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
    }
  };
  var LEGACY_OK = /* @__PURE__ */ new Set(["ok", '"ok"', "true", "1"]);
  function text(value) {
    return typeof value === "string" && value !== "" ? value : null;
  }
  function parseCheckResponse(body, fallbackMessage) {
    let parsed;
    try {
      parsed = JSON.parse(body);
    } catch {
      parsed = null;
    }
    if (typeof parsed !== "object" || parsed === null) {
      return {
        success: LEGACY_OK.has(body.trim().toLowerCase()),
        token: null,
        message: fallbackMessage
      };
    }
    const root = parsed;
    const payload = typeof root.data === "object" && root.data !== null && !("token" in root) && !("message" in root) ? root.data : root;
    const success = payload.success === true || root.success === true || payload.code === 200 || root.code === 200 || payload.status === "ok" || root.status === "ok" || payload.status === "success" || root.status === "success";
    return {
      success,
      token: text(payload.token),
      message: text(payload.message) ?? text(payload.error) ?? text(root.message) ?? fallbackMessage
    };
  }
  function failureMessage(error, fallback) {
    if (!(error instanceof HttpError)) {
      return fallback;
    }
    if (error.status === -1) {
      return "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5";
    }
    if (error.status === 0) {
      return "\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5";
    }
    try {
      const data = JSON.parse(error.body);
      if (typeof data === "object" && data !== null) {
        const record = data;
        const message = text(record.message) ?? text(record.error);
        if (message) {
          return message;
        }
      }
    } catch {
    }
    return error.body ? error.body.slice(0, 100) : fallback;
  }
  var Submitter = class {
    constructor(options, transport, outcome) {
      this.options = options;
      this.transport = transport;
      this.outcome = outcome;
    }
    submit(data) {
      this.transport.request("POST", this.options.checkUrl, data).then((body) => {
        const result = parseCheckResponse(body, this.options.failText);
        if (result.success) {
          this.outcome.onSuccess(result);
        } else {
          this.outcome.onFailure(result.message || this.options.failText);
        }
      }).catch((error) => {
        this.outcome.onFailure(failureMessage(error, this.options.failText));
      });
    }
  };

  // node_modules/xq-captcha-core/dist/index.mjs
  var import_modal = __toESM(require_modal(), 1);
  var HiddenInput = class {
    constructor(dom, options) {
      this.dom = dom;
      this.options = options;
      this.form = null;
      this.guard = null;
      this.fallback = null;
    }
    /** 初始化：解析目标元素，并把守卫设为“未通过”状态以拦截提交。 */
    mount() {
      this.resolve();
      this.block();
    }
    /**
     * 未通过验证：守卫模式下写入自定义提示让浏览器拦截提交；
     * 回退模式下移除动态字段，保持原有无令牌语义。
     */
    block() {
      if (this.guard) {
        this.guard.value = "";
        this.guard.setCustomValidity(this.guardText());
      } else if (this.fallback) {
        this.fallback.remove();
        this.fallback = null;
      }
    }
    /**
     * 验证通过：守卫模式下清空提示放行并写入令牌；回退模式下动态插入字段。
     * backend_only 无令牌时，守卫只放行不写值，回退模式不插入字段。
     */
    sync(token) {
      if (this.guard) {
        this.guard.value = token ?? "";
        this.guard.setCustomValidity("");
        return;
      }
      const name = this.options.inputName;
      if (!name || !token || !this.options.autoInsertInput) {
        return;
      }
      if (!this.fallback) {
        const trigger = this.dom.queryGlobal(this.options.handleDom);
        if (!trigger) {
          return;
        }
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = token;
        this.fallback = input;
        if (this.form) {
          this.form.append(input);
        } else {
          trigger.parentNode?.insertBefore(input, trigger.nextSibling);
        }
        return;
      }
      this.fallback.value = token;
    }
    /** 销毁时：清空守卫提示并移除动态字段，不删除宿主的静态元素。 */
    dispose() {
      if (this.guard) {
        this.guard.value = "";
        this.guard.setCustomValidity("");
        this.guard = null;
      }
      this.fallback?.remove();
      this.fallback = null;
      this.form = null;
    }
    /** 兼容旧调用：等同 block()，保留 remove 方法名避免外部破坏。 */
    remove() {
      this.block();
    }
    /** 在触发器所属表单内解析静态守卫元素；找不到则不启用守卫模式。 */
    resolve() {
      const name = this.options.inputName;
      if (!name) {
        return;
      }
      const trigger = this.dom.queryGlobal(this.options.handleDom);
      if (trigger) {
        this.form = trigger.closest("form");
      }
      const scope = this.form ?? document;
      const candidate = scope.querySelector(
        `input[name="${CSS.escape(name)}"]`
      );
      if (candidate && candidate.type !== "hidden") {
        this.guard = candidate;
      }
    }
    guardText() {
      return this.guard?.dataset.xqGuardText || this.options.guardText;
    }
  };
  var OK_VISIBLE_MS = 3e3;
  var ERROR_VISIBLE_MS = 2e3;
  var FADE_MS = 150;
  var Message = class {
    constructor(dom, selectors) {
      this.dom = dom;
      this.selectors = selectors;
      this.timers = [];
    }
    show(text2, ok) {
      this.clearTimers();
      const target = this.dom.query(ok ? this.selectors.msgOk : this.selectors.msgError);
      const other = this.dom.query(ok ? this.selectors.msgError : this.selectors.msgOk);
      if (other) {
        other.classList.remove("show");
        other.hidden = true;
      }
      if (!target) {
        return;
      }
      target.textContent = text2;
      target.hidden = false;
      void target.offsetWidth;
      target.classList.add("show");
      this.timers.push(
        window.setTimeout(() => {
          target.classList.remove("show");
          this.timers.push(
            window.setTimeout(() => {
              target.hidden = true;
            }, FADE_MS)
          );
        }, ok ? OK_VISIBLE_MS : ERROR_VISIBLE_MS)
      );
    }
    hideOk() {
      const node = this.dom.query(this.selectors.msgOk);
      if (node) {
        node.classList.remove("show");
        node.hidden = true;
      }
    }
    dispose() {
      this.clearTimers();
    }
    clearTimers() {
      for (const timer of this.timers) {
        clearTimeout(timer);
      }
      this.timers = [];
    }
  };
  var SHAKE_MS = 500;
  var ModalHost = class {
    constructor(dom, modalSelector, contentSelector, shakeClass, hooks = {}) {
      this.dom = dom;
      this.modalSelector = modalSelector;
      this.contentSelector = contentSelector;
      this.shakeClass = shakeClass;
      this.hooks = hooks;
      this.instance = null;
      this.shakeTimer = null;
      this.hideHandler = null;
      this.shownHandler = null;
      this.programmatic = false;
    }
    get element() {
      return this.dom.queryGlobal(this.modalSelector);
    }
    mount() {
      const element = this.element;
      if (!element) {
        return;
      }
      if (this.shownHandler) {
        element.removeEventListener("shown.bs.modal", this.shownHandler);
      }
      this.shownHandler = () => this.hooks.onShown?.();
      element.addEventListener("shown.bs.modal", this.shownHandler);
      if (!this.instance) {
        this.instance = import_modal.default.getOrCreateInstance(element, {
          backdrop: true,
          keyboard: true,
          focus: true
        });
      }
      if (!this.hideHandler) {
        this.hideHandler = () => {
          if (!this.programmatic) {
            this.hooks.onUserClose?.();
          }
          this.programmatic = false;
        };
        element.addEventListener("hide.bs.modal", this.hideHandler);
      }
    }
    open() {
      this.ensureInstance().show();
    }
    close() {
      const element = this.element;
      if (!element || !import_modal.default.getInstance(element)) {
        return;
      }
      this.programmatic = true;
      this.instance?.hide();
    }
    setType(type) {
      this.element?.setAttribute("data-xq-captcha-type", type);
    }
    shake() {
      const content = this.dom.query(this.contentSelector);
      if (!content) {
        return;
      }
      content.classList.add(this.shakeClass);
      this.clearShakeTimer();
      this.shakeTimer = window.setTimeout(() => {
        content.classList.remove(this.shakeClass);
        this.shakeTimer = null;
      }, SHAKE_MS);
    }
    dispose() {
      this.clearShakeTimer();
      const element = this.element;
      if (!element) {
        this.instance = null;
        return;
      }
      if (this.hideHandler) {
        element.removeEventListener("hide.bs.modal", this.hideHandler);
      }
      if (this.shownHandler) {
        element.removeEventListener("shown.bs.modal", this.shownHandler);
      }
      const finalize = () => {
        this.instance?.dispose();
        element.remove();
        this.instance = null;
        this.sweepBackdrop();
      };
      if (this.instance && element.classList.contains("show")) {
        element.addEventListener("hidden.bs.modal", finalize, { once: true });
        this.instance.hide();
        window.setTimeout(() => {
          if (this.instance) {
            finalize();
          }
        }, 600);
      } else {
        finalize();
      }
    }
    ensureInstance() {
      if (this.instance) {
        return this.instance;
      }
      const element = this.element;
      this.instance = element ? import_modal.default.getOrCreateInstance(element) : null;
      return this.instance;
    }
    sweepBackdrop() {
      if (document.querySelector(".modal.show")) {
        return;
      }
      for (const backdrop of document.querySelectorAll(".modal-backdrop")) {
        backdrop.remove();
      }
      document.body.classList.remove("modal-open");
      document.body.style.removeProperty("padding-right");
    }
    clearShakeTimer() {
      if (this.shakeTimer !== null) {
        clearTimeout(this.shakeTimer);
        this.shakeTimer = null;
      }
    }
  };
  var Theme = class {
    constructor(dom, modalSelector) {
      this.dom = dom;
      this.modalSelector = modalSelector;
      this.current = "auto";
      this.media = null;
      this.onSystemChange = () => {
        if (this.current === "auto") {
          this.write(this.resolve());
        }
      };
    }
    apply(theme) {
      this.current = theme || "auto";
      if (this.current === "auto") {
        this.media ?? (this.media = window.matchMedia("(prefers-color-scheme: dark)"));
        this.media.addEventListener("change", this.onSystemChange);
      } else {
        this.media?.removeEventListener("change", this.onSystemChange);
      }
      this.write(this.resolve());
    }
    dispose() {
      this.media?.removeEventListener("change", this.onSystemChange);
      this.media = null;
    }
    resolve() {
      if (this.current === "light" || this.current === "dark") {
        return this.current;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    write(resolved) {
      this.dom.queryGlobal(this.modalSelector)?.setAttribute("data-bs-theme", resolved);
    }
  };
  var Trigger = class {
    constructor(dom, options, classes, triggerSelector) {
      this.dom = dom;
      this.options = options;
      this.classes = classes;
      this.triggerSelector = triggerSelector;
      this.bound = /* @__PURE__ */ new Set();
      this.handler = null;
      this.useBtnSuccess = false;
    }
    bind(onOpen) {
      this.detach();
      this.handler = onOpen;
      for (const node of this.nodes()) {
        node.classList.add("btn", "btn-outline-primary");
        this.render(node, this.options.placeholder, this.options.showRipple);
        this.bound.add(node);
        node.addEventListener("click", onOpen);
      }
    }
    detach() {
      if (this.handler) {
        for (const node of this.bound) {
          node.removeEventListener("click", this.handler);
        }
      }
      this.bound.clear();
      this.handler = null;
    }
    showPlaceholder() {
      this.renderAll(this.options.placeholder, this.options.showRipple);
    }
    showSuccess() {
      this.renderAll(this.options.successText, false);
    }
    showFail() {
      this.renderAll(this.options.failText, false);
    }
    /** 成功后是否使用 btn-success（点选包 true，滑动包用自定义 verified 类）。 */
    setSuccessStyle(useBtnSuccess) {
      this.useBtnSuccess = useBtnSuccess;
    }
    renderAll(text2, ripple) {
      for (const node of this.nodes()) {
        this.render(node, text2, ripple);
      }
    }
    render(node, text2, ripple) {
      node.textContent = text2;
      node.classList.remove(this.classes.verified, "btn-success");
      node.classList.toggle(this.classes.ripple, ripple);
      if (this.useBtnSuccess) {
        node.classList.add("btn-success");
        node.classList.remove("btn-outline-primary");
      }
    }
    nodes() {
      return this.dom.queryAllGlobal(this.options.handleDom || this.triggerSelector);
    }
  };
  var SUCCESS_HIDE_MS = 2e3;
  var FAIL_REFRESH_MS = 1200;
  var FORM_ERROR_EVENT = "xq.form.error";
  var CaptchaBehaviour = class {
    bindContext(ctx) {
      this.ctx = ctx;
      this.onContextReady();
    }
    /** 上下文就绪后创建依赖 state/dom 的内部组件。 */
    onContextReady() {
    }
  };
  var BaseCaptcha = class {
    constructor(behaviour, hooks, options = {}) {
      this.behaviour = behaviour;
      this.hooks = hooks;
      this.successHideTimer = null;
      this.failRefreshTimer = null;
      this.formErrorHandler = null;
      this.outcome = {
        onSuccess: (result) => this.handleSuccess(result),
        onFailure: (message) => this.handleFail(message)
      };
      this.options = resolveOptions(hooks.defaultOptions, options);
      this.dom = new Dom();
      this.state = new State(hooks.type);
      this.callbacks = new Callbacks(hooks.logPrefix);
      behaviour.bindContext({
        dom: this.dom,
        state: this.state,
        options: this.options,
        type: hooks.type,
        submit: (data) => this.submit(data),
        emitRefresh: () => this.emitRefresh()
      });
      this.modal = new ModalHost(
        this.dom,
        hooks.modalSelector,
        hooks.contentSelector,
        hooks.shakeClass,
        {
          onUserClose: hooks.useModalCloseHook ? () => {
            this.callbacks.emit("close");
            this.callbacks.emit("hide");
          } : void 0,
          onShown: () => this.behaviour.onModalShown?.()
        }
      );
      this.message = new Message(this.dom, hooks.messageSelectors);
      this.theme = new Theme(this.dom, hooks.modalSelector);
      this.trigger = new Trigger(
        this.dom,
        this.options,
        hooks.triggerClasses,
        hooks.triggerSelector
      );
      this.trigger.setSuccessStyle(hooks.type === "click");
      this.hiddenInput = new HiddenInput(this.dom, this.options);
      this.transport = createTransport(this.options);
      this.dataClient = new DataClient(this.options, this.transport, hooks.type);
      this.submitter = new Submitter(this.options, this.transport, this.outcome);
    }
    init(options) {
      if (options) {
        Object.assign(this.options, resolveOptions(this.hooks.defaultOptions, options));
        this.transport = createTransport(this.options);
        this.dataClient = new DataClient(this.options, this.transport, this.hooks.type);
        this.submitter = new Submitter(this.options, this.transport, this.outcome);
      }
      this.dom.setRoot(this.behaviour.buildModal(this.options));
      this.modal.mount();
      this.theme.apply(this.options.theme);
      this.modal.setType(this.hooks.type);
      this.behaviour.attachInteraction();
      this.bindTools();
      this.trigger.bind(() => this.show());
      this.bindFormError();
      this.hiddenInput.mount();
      return this;
    }
    /** 类型特有工具按钮绑定（滑动包还需绑定关闭按钮）。 */
    bindTools() {
    }
    /** 绑定到弹窗内按钮，避免重复绑定。 */
    bindButton(selector, action, attr = "xqCaptchaBound") {
      const node = this.dom.query(selector);
      if (!node || node.dataset[attr] === "1") {
        return;
      }
      node.dataset[attr] = "1";
      node.addEventListener("click", action);
    }
    show() {
      this.clearTimers();
      this.state.beginRound();
      this.behaviour.resetForShow();
      this.hiddenInput.block();
      this.trigger.showPlaceholder();
      this.message.hideOk();
      this.modal.open();
      this.refresh();
      this.callbacks.emit("show");
    }
    hide() {
      this.behaviour.suspendInteraction();
      this.modal.close();
      this.callbacks.emit("hide");
    }
    refresh() {
      this.clearFailTimer();
      this.state.beginRefresh();
      this.behaviour.prepareRefresh();
      this.dataClient.load().then((data) => this.behaviour.applyData(data)).catch((error) => {
        console.error(`${this.hooks.logPrefix}: \u83B7\u53D6\u9A8C\u8BC1\u7801\u5931\u8D25`, error);
        this.behaviour.onDataError?.();
        const reason = error instanceof Error ? error.message : this.options.failText;
        this.message.show(reason, false);
        this.state.busy = false;
        this.state.passed = false;
        this.state.token = null;
        this.hiddenInput.block();
        this.callbacks.emit("fail", reason);
      });
    }
    reset() {
      this.hide();
      this.clearTimers();
      this.state.beginRound();
      this.hiddenInput.block();
      this.trigger.showPlaceholder();
      this.refresh();
      this.callbacks.emit("reset");
      return this;
    }
    result() {
      return this.state.passed;
    }
    getToken() {
      return this.state.token;
    }
    getCaptchaType() {
      return this.state.type;
    }
    setTheme(theme) {
      this.options.theme = theme || "auto";
      this.theme.apply(this.options.theme);
      return this;
    }
    onSuccess(fn) {
      this.callbacks.set("success", fn);
      return this;
    }
    onFail(fn) {
      this.callbacks.set("fail", fn);
      return this;
    }
    onClose(fn) {
      this.callbacks.set("close", fn);
      return this;
    }
    onShow(fn) {
      this.callbacks.set("show", fn);
      return this;
    }
    onHide(fn) {
      this.callbacks.set("hide", fn);
      return this;
    }
    onRefresh(fn) {
      this.callbacks.set("refresh", fn);
      return this;
    }
    onReset(fn) {
      this.callbacks.set("reset", fn);
      return this;
    }
    dispose() {
      this.clearTimers();
      this.behaviour.detachInteraction();
      this.trigger.detach();
      this.message.dispose();
      this.theme.dispose();
      this.modal.dispose();
      this.hiddenInput.dispose();
      if (this.formErrorHandler) {
        document.removeEventListener(FORM_ERROR_EVENT, this.formErrorHandler);
        this.formErrorHandler = null;
      }
    }
    submit(data) {
      this.submitter.submit(data);
    }
    emitRefresh() {
      this.callbacks.emit("refresh", this.hooks.type, false);
    }
    handleSuccess(result) {
      this.state.busy = false;
      this.state.passed = true;
      if (result.token) {
        this.state.token = result.token;
      }
      this.trigger.showSuccess();
      this.message.show(this.options.successText, true);
      this.hiddenInput.sync(this.getToken());
      this.clearSuccessTimer();
      this.successHideTimer = window.setTimeout(() => {
        this.successHideTimer = null;
        this.hide();
      }, SUCCESS_HIDE_MS);
      this.callbacks.emit("success", this.getToken());
    }
    handleFail(message) {
      this.state.busy = false;
      this.state.passed = false;
      this.state.token = null;
      this.hiddenInput.block();
      this.behaviour.markFailures();
      this.modal.shake();
      this.message.show(message, false);
      this.trigger.showFail();
      this.callbacks.emit("fail", message);
      this.clearFailTimer();
      this.failRefreshTimer = window.setTimeout(() => {
        this.failRefreshTimer = null;
        this.behaviour.beforeFailRefresh();
        this.state.busy = false;
        this.refresh();
      }, FAIL_REFRESH_MS);
    }
    bindFormError() {
      if (this.formErrorHandler) {
        return;
      }
      this.formErrorHandler = (event) => {
        const form = event.target;
        if (!(form instanceof Element) || !form.querySelector(this.options.handleDom)) {
          return;
        }
        try {
          this.reset();
        } catch (error) {
          console.error(`${this.hooks.logPrefix}: \u8868\u5355\u5931\u8D25\u590D\u4F4D\u5F02\u5E38`, error);
        }
      };
      document.addEventListener(FORM_ERROR_EVENT, this.formErrorHandler);
    }
    clearTimers() {
      this.clearSuccessTimer();
      this.clearFailTimer();
    }
    clearSuccessTimer() {
      if (this.successHideTimer !== null) {
        clearTimeout(this.successHideTimer);
        this.successHideTimer = null;
      }
    }
    clearFailTimer() {
      if (this.failRefreshTimer !== null) {
        clearTimeout(this.failRefreshTimer);
        this.failRefreshTimer = null;
      }
    }
  };

  // src/captcha/core/options.ts
  var DEFAULT_OPTIONS = {
    ...BASE_OPTIONS,
    slideText: "\u62D6\u52A8\u5DE6\u8FB9\u6ED1\u5757\u5B8C\u6210\u4E0A\u65B9\u62FC\u56FE"
  };
  function resolveOptions2(overrides = {}) {
    return resolveOptions(DEFAULT_OPTIONS, overrides);
  }

  // src/captcha/core/selectors.ts
  var SEL = {
    /** 唯一公开的触发选择器，宿主页面按此放置触发元素。 */
    trigger: ".xq-captcha",
    modal: "#xq-slide-captcha-modal",
    dialog: ".xq-captcha-dialog",
    content: ".xq-captcha-content",
    loading: ".xq-captcha-loading",
    canvasWrap: ".xq-captcha-canvas-wrap",
    bgCanvas: ".xq-captcha-bg-canvas",
    markCanvas: ".xq-captcha-mark-canvas",
    msgError: ".xq-captcha-alert-error",
    msgOk: ".xq-captcha-alert-success",
    slideArea: ".xq-captcha-slide-area",
    slideBlock: ".xq-captcha-slide-block",
    slideText: ".xq-captcha-slide-hint",
    close: ".xq-captcha-close",
    refresh: ".xq-captcha-refresh",
    copyright: ".xq-captcha-copyright",
    progressBar: ".xq-captcha-progress-bar"
  };
  var CLS = {
    ripple: "xq-captcha-ripple",
    verified: "xq-captcha-verified",
    dragging: "xq-captcha-dragging",
    shake: "xq-captcha-shake",
    loadingError: "xq-captcha-loading-error",
    hidden: "d-none"
  };
  var BOUND_ATTR = "xqCaptchaBound";

  // src/captcha/render/canvas.ts
  function context2d(canvas, willReadFrequently = false) {
    return canvas.getContext("2d", { willReadFrequently });
  }
  var CanvasPair = class {
    constructor(dom, state) {
      this.dom = dom;
      this.state = state;
    }
    dom;
    state;
    get bg() {
      return this.dom.query(SEL.bgCanvas);
    }
    get mark() {
      return this.dom.query(SEL.markCanvas);
    }
    /** 画布像素尺寸随后端下发的 bg_width / bg_height 走，坐标换算才不失真。 */
    resize(width, height) {
      for (const canvas of [this.bg, this.mark]) {
        if (canvas) {
          canvas.width = width;
          canvas.height = height;
        }
      }
    }
    clear() {
      for (const canvas of [this.bg, this.mark]) {
        const ctx = canvas && context2d(canvas);
        if (canvas && ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
    }
    clearMark() {
      const canvas = this.mark;
      const ctx = canvas && context2d(canvas);
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    setVisible(visible) {
      for (const canvas of [this.bg, this.mark]) {
        if (canvas) {
          canvas.style.display = visible ? "block" : "none";
        }
      }
    }
    /** 必须在画布可见后测量：display:none 时 getBoundingClientRect() 恒为 0。 */
    measure() {
      const canvas = this.bg;
      if (!canvas || canvas.width <= 0) {
        return;
      }
      const wrap = this.dom.query(SEL.canvasWrap);
      const width = wrap?.getBoundingClientRect().width || canvas.getBoundingClientRect().width || canvas.width;
      this.state.scale = width / canvas.width;
      this.state.invScale = canvas.width / width;
    }
    /** 滑动图画布里只画合成图第 0 段（带缺口背景），点击图整张即背景。 */
    drawBackground(image) {
      const canvas = this.bg;
      const ctx = canvas && context2d(canvas);
      if (!canvas || !ctx) {
        return;
      }
      const { imgWidth, imgHeight } = this.state;
      ctx.drawImage(image, 0, 0, imgWidth, imgHeight, 0, 0, imgWidth, imgHeight);
    }
  };

  // src/captcha/render/image-loader.ts
  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("\u9A8C\u8BC1\u7801\u56FE\u7247\u52A0\u8F7D\u5931\u8D25"));
      image.src = src;
    });
  }

  // src/captcha/render/slide-layer.ts
  var LUMA_RED = 77;
  var LUMA_GREEN = 150;
  var LUMA_BLUE = 29;
  var WINDOW_RADIUS = 1;
  var REFERENCE_SAMPLES = 5;
  var ALPHA_BASE = 5;
  var ALPHA_RAMP = 15;
  var SlideLayer = class {
    constructor(canvas, state) {
      this.canvas = canvas;
      this.state = state;
    }
    canvas;
    state;
    image = null;
    prepared = null;
    reset() {
      this.image = null;
      this.prepared = null;
    }
    setImage(image) {
      this.image = image;
      this.prepared = null;
      if (this.state.type === "slide") {
        this.prepare(image);
      }
    }
    draw() {
      if (this.state.type !== "slide") {
        return;
      }
      const canvas = this.canvas.mark;
      const ctx = canvas && context2d(canvas, true);
      if (!canvas || !ctx) {
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const drawOffset = this.state.markOffset * this.state.invScale;
      const drawWidth = Math.min(this.state.markWidth, canvas.width - drawOffset);
      if (drawWidth <= 0) {
        return;
      }
      const height = this.state.imgHeight;
      if (this.prepared) {
        ctx.drawImage(this.prepared, 0, 0, drawWidth, height, drawOffset, 0, drawWidth, height);
      } else if (this.image) {
        ctx.drawImage(this.image, 0, height, drawWidth, height, drawOffset, 0, drawWidth, height);
      }
    }
    prepare(image) {
      const width = this.state.markWidth;
      const height = this.state.imgHeight;
      const layer = document.createElement("canvas");
      layer.width = width;
      layer.height = height;
      const ctx = context2d(layer, true);
      if (!ctx) {
        return;
      }
      ctx.drawImage(image, 0, height, width, height, 0, 0, width, height);
      try {
        const pixels = ctx.getImageData(0, 0, width, height);
        cutOutBackdrop(pixels.data, width, height);
        ctx.putImageData(pixels, 0, 0);
      } catch (error) {
        console.warn("xq-slide-captcha: \u6ED1\u5757\u56FE\u5C42\u62A0\u56FE\u5931\u8D25\uFF0C\u56DE\u9000\u5230\u539F\u56FE", error);
      }
      this.prepared = layer;
    }
  };
  function cutOutBackdrop(data, width, height) {
    for (let y = 0; y < height; y++) {
      const row = windowAverages(data, width, y);
      const reference = estimateBackdrop(row);
      for (let x = 0; x < width; x++) {
        const delta = Math.max(0, row[x] - reference);
        const alpha = Math.max(0, Math.min(255, Math.round((delta - ALPHA_BASE) / ALPHA_RAMP * 255)));
        const i = (y * width + x) * 4;
        if (alpha < data[i + 3]) {
          data[i + 3] = alpha;
        }
      }
    }
  }
  function windowAverages(data, width, y) {
    const result = new Float32Array(width);
    for (let x = 0; x < width; x++) {
      let total = 0;
      let count = 0;
      for (let dx = -WINDOW_RADIUS; dx <= WINDOW_RADIUS; dx++) {
        const sx = x + dx;
        if (sx < 0 || sx >= width) {
          continue;
        }
        const i = (y * width + sx) * 4;
        total += (data[i] * LUMA_RED + data[i + 1] * LUMA_GREEN + data[i + 2] * LUMA_BLUE) / 256;
        count++;
      }
      result[x] = count > 0 ? total / count : 0;
    }
    return result;
  }
  function estimateBackdrop(row) {
    let lowest = Number.POSITIVE_INFINITY;
    const last = row.length - 1;
    for (let s = 0; s < REFERENCE_SAMPLES; s++) {
      const x = Math.min(last, Math.round(s * last / (REFERENCE_SAMPLES - 1)));
      lowest = Math.min(lowest, row[x] ?? 0);
    }
    return Number.isFinite(lowest) ? lowest : 0;
  }

  // src/captcha/slide/drag-handler.ts
  var DragHandler = class {
    constructor(target, enabled, callbacks) {
      this.target = target;
      this.enabled = enabled;
      this.callbacks = callbacks;
    }
    target;
    enabled;
    callbacks;
    dragging = false;
    onDown = (event) => {
      if (this.dragging || !this.enabled()) {
        return;
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      this.dragging = true;
      this.bindDocument();
      this.callbacks.onStart(event.clientX, event.clientY);
    };
    onMove = (event) => {
      if (!this.dragging) {
        return;
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      this.callbacks.onMove(event.clientX, event.clientY);
    };
    onUp = (event) => {
      if (!this.dragging) {
        return;
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      this.stop();
      this.callbacks.onEnd();
    };
    onCancel = () => {
      if (!this.dragging) {
        return;
      }
      this.stop();
      this.callbacks.onCancel();
    };
    attach() {
      this.target.addEventListener("pointerdown", this.onDown);
    }
    detach() {
      this.target.removeEventListener("pointerdown", this.onDown);
      this.stop();
    }
    /** 中止进行中的拖动，不触发任何回调（弹窗隐藏 / 重置时用）。 */
    cancel() {
      this.stop();
    }
    stop() {
      this.dragging = false;
      this.unbindDocument();
    }
    bindDocument() {
      document.addEventListener("pointermove", this.onMove, { passive: false });
      document.addEventListener("pointerup", this.onUp, { passive: false });
      document.addEventListener("pointercancel", this.onCancel);
    }
    unbindDocument() {
      document.removeEventListener("pointermove", this.onMove);
      document.removeEventListener("pointerup", this.onUp);
      document.removeEventListener("pointercancel", this.onCancel);
    }
  };

  // src/captcha/slide/keyboard-handler.ts
  var STEP = 4;
  var STEP_SHIFT = 12;
  var DIRECTIONS = {
    ArrowLeft: -1,
    Left: -1,
    ArrowRight: 1,
    Right: 1
  };
  var JUMP_KEYS = {
    Home: "start",
    End: "end"
  };
  var KeyboardHandler = class {
    constructor(target, state, callbacks) {
      this.target = target;
      this.state = state;
      this.callbacks = callbacks;
    }
    target;
    state;
    callbacks;
    keyUp = null;
    onKeyDown = (event) => {
      if (!this.enabled()) {
        return;
      }
      const step = event.shiftKey ? STEP_SHIFT : STEP;
      const direction = DIRECTIONS[event.key];
      let next = null;
      if (direction !== void 0) {
        next = this.state.markOffset + direction * step;
      } else if (Object.prototype.hasOwnProperty.call(JUMP_KEYS, event.key)) {
        next = JUMP_KEYS[event.key] === "start" ? 0 : this.state.maxOffset;
      }
      if (next === null) {
        return;
      }
      event.preventDefault();
      this.callbacks.onOffset(Math.max(0, Math.min(next, this.state.maxOffset)));
      this.listenKeyUp();
    };
    attach() {
      this.target.addEventListener("keydown", this.onKeyDown);
    }
    detach() {
      this.target.removeEventListener("keydown", this.onKeyDown);
      this.clearKeyUp();
    }
    /** 取消尚未触发的 keyup 提交，保留 keydown 绑定。 */
    cancelCommit() {
      this.clearKeyUp();
    }
    /** 自移除监听，避免隐藏/重置后残留全局 keyup 导致重复提交。 */
    listenKeyUp() {
      if (this.keyUp) {
        return;
      }
      const handler = () => {
        this.clearKeyUp();
        if (this.enabled()) {
          this.callbacks.onCommit();
        }
      };
      this.keyUp = handler;
      document.addEventListener("keyup", handler);
    }
    clearKeyUp() {
      if (this.keyUp) {
        document.removeEventListener("keyup", this.keyUp);
        this.keyUp = null;
      }
    }
    enabled() {
      return this.state.type === "slide" && this.state.imgLoaded && !this.state.busy;
    }
  };

  // src/captcha/slide/track-recorder.ts
  var TrackRecorder = class {
    points = [];
    start = 0;
    get samples() {
      return this.points;
    }
    get started() {
      return this.start > 0;
    }
    begin() {
      this.points = [];
      this.start = Date.now();
    }
    record(x, y) {
      this.points.push({
        x: Math.round(x),
        y: Math.round(y),
        t: Date.now() - this.start
      });
    }
    reset() {
      this.points = [];
      this.start = 0;
    }
  };

  // src/captcha/slide/slider.ts
  var Slider = class {
    constructor(dom, state, layer, onCommit) {
      this.dom = dom;
      this.state = state;
      this.layer = layer;
      this.onCommit = onCommit;
    }
    dom;
    state;
    layer;
    onCommit;
    recorder = new TrackRecorder();
    drag = null;
    keyboard = null;
    startClientX = 0;
    startClientY = 0;
    get track() {
      return this.recorder.samples;
    }
    attach() {
      const block = this.block;
      if (!block) {
        return;
      }
      this.detach();
      this.drag = new DragHandler(block, () => this.enabled(), {
        onStart: (x, y) => this.start(x, y),
        onMove: (x, y) => this.move(x, y),
        onEnd: () => this.submit(),
        onCancel: () => this.abort()
      });
      this.keyboard = new KeyboardHandler(block, this.state, {
        onOffset: (offset) => this.keyMove(offset),
        onCommit: () => this.submit()
      });
      this.drag.attach();
      this.keyboard.attach();
    }
    detach() {
      this.drag?.detach();
      this.keyboard?.detach();
      this.drag = null;
      this.keyboard = null;
    }
    /** 新一轮验证码：滑块归零、轨迹清空。 */
    reset() {
      this.recorder.reset();
      this.state.markOffset = 0;
      this.paint();
    }
    /** 弹窗隐藏 / 重置：中止进行中的拖动与待触发的键盘提交，保留事件绑定。 */
    suspend() {
      this.drag?.cancel();
      this.keyboard?.cancelCommit();
      this.state.cancelFrame();
      this.state.moving = false;
      this.block?.classList.remove(CLS.dragging);
    }
    start(clientX, clientY) {
      this.startClientX = clientX;
      this.startClientY = clientY;
      this.state.busy = true;
      this.state.moving = true;
      this.recorder.begin();
      this.block?.classList.add(CLS.dragging);
    }
    move(clientX, clientY) {
      const offset = Math.max(0, Math.min(clientX - this.startClientX, this.state.maxOffset));
      const inverse = this.state.scale > 0 ? 1 / this.state.scale : 1;
      this.recorder.record(
        offset * inverse,
        this.state.markTopY + (clientY - this.startClientY) * inverse
      );
      if (offset === this.state.markOffset) {
        return;
      }
      this.state.markOffset = offset;
      this.state.cancelFrame();
      this.state.rafId = requestAnimationFrame(() => {
        this.paint();
        this.state.rafId = null;
      });
    }
    keyMove(offset) {
      if (!this.recorder.started) {
        this.recorder.begin();
      }
      this.recorder.record(offset * this.state.invScale, this.state.markTopY);
      this.state.markOffset = offset;
      this.paint();
    }
    submit() {
      this.state.cancelFrame();
      this.state.moving = false;
      this.state.busy = true;
      this.block?.classList.remove(CLS.dragging);
      this.paint();
      this.onCommit(Math.round(this.state.markOffset * this.state.invScale), this.recorder.samples);
    }
    /** 手势被系统打断：不提交，回到可再次拖动的状态。 */
    abort() {
      this.state.cancelFrame();
      this.state.moving = false;
      this.state.busy = false;
      this.block?.classList.remove(CLS.dragging);
      this.reset();
    }
    paint() {
      const block = this.block;
      const offset = this.state.markOffset;
      const max = this.state.maxOffset;
      const percent = max > 0 ? Math.round(offset / max * 100) : 0;
      if (block) {
        block.style.transform = `translateX(${offset}px)`;
        block.setAttribute("aria-valuenow", String(percent));
      }
      const bar = this.dom.query(SEL.progressBar);
      if (bar) {
        bar.style.width = `${percent}%`;
        bar.setAttribute("aria-valuenow", String(percent));
      }
      this.layer.draw();
    }
    enabled() {
      return this.state.type === "slide" && this.state.imgLoaded && !this.state.busy;
    }
    get block() {
      return this.dom.query(SEL.slideBlock);
    }
  };

  // src/captcha/ui/hint.ts
  var Hint = class {
    constructor(dom, options) {
      this.dom = dom;
      this.options = options;
    }
    dom;
    options;
    forSlide() {
      const node = this.dom.query(SEL.slideText);
      if (!node) {
        return;
      }
      node.textContent = this.options.slideText;
      node.removeAttribute("style");
      node.classList.remove("d-none");
    }
  };

  // src/captcha/ui/loading.ts
  var Loading = class {
    constructor(dom) {
      this.dom = dom;
    }
    dom;
    show() {
      const node = this.element;
      if (!node) {
        return;
      }
      const spinner = document.createElement("div");
      spinner.className = "spinner-border text-primary";
      spinner.setAttribute("role", "status");
      const label = document.createElement("span");
      label.className = "visually-hidden";
      label.textContent = "\u52A0\u8F7D\u4E2D";
      spinner.append(label);
      const caption = document.createElement("span");
      caption.textContent = "\u52A0\u8F7D\u4E2D...";
      node.replaceChildren(spinner, caption);
      node.classList.remove(CLS.loadingError);
      node.classList.remove(CLS.hidden);
    }
    hide() {
      const node = this.element;
      if (!node) {
        return;
      }
      node.replaceChildren();
      node.classList.remove(CLS.loadingError);
      node.classList.add(CLS.hidden);
    }
    fail() {
      const node = this.element;
      if (!node) {
        return;
      }
      const text2 = document.createElement("div");
      text2.className = "text-danger small fw-semibold text-center";
      text2.append("\u52A0\u8F7D\u5931\u8D25", document.createElement("br"), "\u8BF7\u5237\u65B0\u91CD\u8BD5");
      node.replaceChildren(text2);
      node.classList.add(CLS.loadingError);
      node.classList.remove(CLS.hidden);
    }
    get element() {
      return this.dom.query(SEL.loading);
    }
  };

  // src/captcha/ui/template.ts
  function el(tag, className = "", attrs = {}) {
    const node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    for (const [name, value] of Object.entries(attrs)) {
      node.setAttribute(name, value);
    }
    return node;
  }
  function buildModal(options) {
    const existing = document.querySelector(SEL.modal);
    if (existing) {
      return existing;
    }
    const modal = el("div", "modal fade xq-captcha-modal", {
      id: "xq-slide-captcha-modal",
      "data-xq-captcha-kind": "slide",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "\u4EBA\u673A\u9A8C\u8BC1",
      "aria-hidden": "true",
      tabindex: "-1"
    });
    const dialog = el("div", "modal-dialog modal-dialog-centered xq-captcha-dialog");
    const content = el("div", "modal-content xq-captcha-content");
    const header = el("div", "modal-header");
    const title = el("h5", "modal-title h6");
    title.textContent = "\u5B89\u5168\u9A8C\u8BC1";
    header.append(title);
    if (options.showClose) {
      const close = el("button", "btn-close xq-captcha-close", {
        type: "button",
        "aria-label": "\u5173\u95ED"
      });
      header.append(close);
    }
    content.append(header);
    const body = el("div", "modal-body");
    const wrap = el("div", `${SEL.canvasWrap.slice(1)} position-relative w-100 overflow-hidden rounded border`);
    const loading = el(
      "div",
      `${SEL.loading.slice(1)} position-absolute top-0 start-0 w-100 h-100 z-3 d-flex flex-column align-items-center justify-content-center gap-2`
    );
    wrap.append(loading);
    wrap.append(
      el("canvas", `${SEL.bgCanvas.slice(1)} position-relative z-1 d-block w-100 h-auto border-0`, {
        width: "240",
        height: "150",
        "aria-label": "\u9A8C\u8BC1\u7801\u56FE\u7247"
      })
    );
    wrap.append(
      el("canvas", `${SEL.markCanvas.slice(1)} position-absolute top-0 start-0 w-100 h-100 z-2 pe-none`, {
        width: "240",
        height: "150"
      })
    );
    body.append(wrap);
    const error = el("div", "alert alert-danger fade xq-captcha-alert-error", { role: "alert" });
    const success = el("div", "alert alert-success fade xq-captcha-alert-success", {
      role: "status"
    });
    error.style.display = "none";
    success.style.display = "none";
    body.append(error, success);
    const slide = el("div", `${SEL.slideArea.slice(1)} position-relative w-100 overflow-hidden rounded-pill border`);
    const block = el(
      "button",
      `btn btn-primary rounded-circle d-flex align-items-center justify-content-center p-0 user-select-none ${SEL.slideBlock.slice(1)}`,
      {
        type: "button",
        tabindex: "0",
        role: "slider",
        "aria-label": "\u62D6\u52A8\u6ED1\u5757\u5B8C\u6210\u62FC\u56FE",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": "0"
      }
    );
    const hint = el("span", `${SEL.slideText.slice(1)} d-flex align-items-center justify-content-center pe-none user-select-none`);
    hint.textContent = options.slideText;
    const progress = el("div", "progress xq-captcha-progress");
    const bar = el("div", `progress-bar ${SEL.progressBar.slice(1)}`, {
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": "0"
    });
    progress.append(bar);
    slide.append(block, hint, progress);
    body.append(slide);
    content.append(body);
    const footer = el("div", "modal-footer");
    const copyright = el("a", `${SEL.copyright.slice(1)} link-secondary small`, {
      href: options.copyright.url,
      target: "_blank",
      rel: "noopener noreferrer",
      title: options.copyright.title
    });
    copyright.textContent = options.copyright.text;
    footer.append(copyright);
    if (options.showRefresh) {
      const refresh = el("button", `btn btn-outline-secondary btn-sm ${SEL.refresh.slice(1)}`, {
        type: "button",
        "aria-label": "\u5237\u65B0\u9A8C\u8BC1\u7801"
      });
      refresh.textContent = "\u5237\u65B0";
      footer.append(refresh);
    }
    content.append(footer);
    dialog.append(content);
    modal.append(dialog);
    document.body.append(modal);
    return modal;
  }

  // src/captcha/slide-captcha.ts
  var HOOKS = {
    logPrefix: "xq-slide-captcha",
    type: "slide",
    defaultOptions: resolveOptions2({}),
    modalSelector: SEL.modal,
    contentSelector: SEL.content,
    shakeClass: "xq-captcha-shake",
    messageSelectors: { msgOk: SEL.msgOk, msgError: SEL.msgError },
    triggerClasses: { ripple: "xq-captcha-ripple", verified: "xq-captcha-verified" },
    triggerSelector: SEL.trigger
  };
  var SlideBehaviour = class extends CaptchaBehaviour {
    canvas;
    layer;
    slider;
    hint;
    loading;
    onContextReady() {
      this.canvas = new CanvasPair(this.ctx.dom, this.ctx.state);
      this.layer = new SlideLayer(this.canvas, this.ctx.state);
      this.hint = new Hint(this.ctx.dom, this.ctx.options);
      this.loading = new Loading(this.ctx.dom);
      this.slider = new Slider(this.ctx.dom, this.ctx.state, this.layer, (offset, track) => {
        this.ctx.submit({
          captcha_r: String(offset),
          slide_track: JSON.stringify(track)
        });
      });
    }
    buildModal(options) {
      return buildModal(options);
    }
    attachInteraction() {
      this.slider.attach();
    }
    detachInteraction() {
      this.slider.detach();
    }
    resetForShow() {
      this.slider.suspend();
      this.slider.reset();
    }
    suspendInteraction() {
      this.slider.suspend();
    }
    prepareRefresh() {
      this.slider.reset();
      this.layer.reset();
      this.canvas.setVisible(false);
      this.canvas.clear();
      this.loading.show();
    }
    async applyData(data) {
      this.ctx.state.imgWidth = data.bg_width || 240;
      this.ctx.state.imgHeight = data.bg_height || 150;
      this.ctx.state.markWidth = data.mark_width || 50;
      this.ctx.state.markTopY = typeof data.pos_y === "number" ? data.pos_y : 0;
      this.hint.forSlide();
      this.canvas.resize(this.ctx.state.imgWidth, this.ctx.state.imgHeight);
      this.ctx.emitRefresh();
      try {
        const image = await loadImage(data.image_base64);
        this.canvas.setVisible(true);
        this.canvas.measure();
        this.ctx.state.maxOffset = Math.max(
          0,
          Math.round((this.ctx.state.imgWidth - this.ctx.state.markWidth) * this.ctx.state.scale)
        );
        this.canvas.drawBackground(image);
        this.canvas.clearMark();
        this.layer.setImage(image);
        this.ctx.state.imgLoaded = true;
        this.loading.hide();
        this.slider.reset();
      } catch (error) {
        console.error("xq-slide-captcha: \u9A8C\u8BC1\u7801\u56FE\u7247\u52A0\u8F7D\u5931\u8D25", error);
        this.loading.fail();
      }
    }
    onDataError() {
      this.loading.fail();
    }
    markFailures() {
    }
    beforeFailRefresh() {
    }
    onModalShown() {
      this.canvas.measure();
      this.layer.draw();
    }
    get track() {
      return this.slider.track;
    }
  };
  var SlideCaptcha = class extends BaseCaptcha {
    slideBehaviour;
    constructor(options = {}) {
      const behaviour = new SlideBehaviour();
      super(behaviour, HOOKS, options);
      this.slideBehaviour = behaviour;
    }
    init(options) {
      return super.init(options);
    }
    getSlideTrack() {
      return this.slideBehaviour.track;
    }
    bindTools() {
      this.bindButton(SEL.close, () => {
        this.callbacks.emit("close");
        this.hide();
      }, BOUND_ATTR);
      this.bindButton(SEL.refresh, () => this.refresh(), BOUND_ATTR);
    }
  };

  // src/captcha/index.ts
  var slideCaptcha = new SlideCaptcha();
  function installGlobal(instance = slideCaptcha) {
    window.xqSlideCaptcha = instance;
    return instance;
  }

  // src/ts/index.ts
  if (typeof window !== "undefined") {
    window.xqSlideCaptcha = slideCaptcha;
  }
})();
/*! Bundled license information:

bootstrap/js/dist/dom/data.js:
  (*!
    * Bootstrap data.js v5.3.9 (https://getbootstrap.com/)
    * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/index.js:
  (*!
    * Bootstrap index.js v5.3.9 (https://getbootstrap.com/)
    * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/event-handler.js:
  (*!
    * Bootstrap event-handler.js v5.3.9 (https://getbootstrap.com/)
    * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/manipulator.js:
  (*!
    * Bootstrap manipulator.js v5.3.9 (https://getbootstrap.com/)
    * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/config.js:
  (*!
    * Bootstrap config.js v5.3.9 (https://getbootstrap.com/)
    * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/base-component.js:
  (*!
    * Bootstrap base-component.js v5.3.9 (https://getbootstrap.com/)
    * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/selector-engine.js:
  (*!
    * Bootstrap selector-engine.js v5.3.9 (https://getbootstrap.com/)
    * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/backdrop.js:
  (*!
    * Bootstrap backdrop.js v5.3.9 (https://getbootstrap.com/)
    * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/component-functions.js:
  (*!
    * Bootstrap component-functions.js v5.3.9 (https://getbootstrap.com/)
    * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/focustrap.js:
  (*!
    * Bootstrap focustrap.js v5.3.9 (https://getbootstrap.com/)
    * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/scrollbar.js:
  (*!
    * Bootstrap scrollbar.js v5.3.9 (https://getbootstrap.com/)
    * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/modal.js:
  (*!
    * Bootstrap modal.js v5.3.9 (https://getbootstrap.com/)
    * Copyright 2011-2026 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

xq-captcha-core/dist/logic.mjs:
xq-captcha-core/dist/index.mjs:
  (*!
   * xq-captcha-core v1.1.0 (https://xqkeji.cn/)
   * Author xqkeji.cn
   * LICENSE AGPL-3.0-only
   * Copyright 2026 xqkeji.cn
   *)
*/
