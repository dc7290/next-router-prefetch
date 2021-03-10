
  /**
   * @license
   * @dc7290/next-router-prefetch v1.0.0
   * Released under the MIT License.
   */

'use strict';

var require$$0 = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
});

function _getRequireWildcardCache$2() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache$2 = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard$2(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof_1(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache$2();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var interopRequireWildcard = _interopRequireWildcard$2;

function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var interopRequireDefault = _interopRequireDefault$1;

var normalizeTrailingSlash = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.removePathTrailingSlash = removePathTrailingSlash;
  exports.normalizePathTrailingSlash = void 0;
  /**
  * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
  */

  function removePathTrailingSlash(path) {
    return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  }
  /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */


  var normalizePathTrailingSlash = process.env.__NEXT_TRAILING_SLASH ? function (path) {
    if (/\.[^/]+\/?$/.test(path)) {
      return removePathTrailingSlash(path);
    } else if (path.endsWith('/')) {
      return path;
    } else {
      return path + '/';
    }
  } : removePathTrailingSlash;
  exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
});

var _default$4 = getAssetPathFromRoute; // Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

function getAssetPathFromRoute(route) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index".concat(route) : "".concat(route);
  return path + ext;
}

var getAssetPathFromRoute_1 = /*#__PURE__*/Object.defineProperty({
  "default": _default$4
}, '__esModule', {
  value: true
});

var requestIdleCallback_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

  var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
    var start = Date.now();
    return setTimeout(function () {
      cb({
        didTimeout: false,
        timeRemaining: function timeRemaining() {
          return Math.max(0, 50 - (Date.now() - start));
        }
      });
    }, 1);
  };

  exports.requestIdleCallback = requestIdleCallback;

  var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
    return clearTimeout(id);
  };

  exports.cancelIdleCallback = cancelIdleCallback;
});

var routeLoader = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.markAssetError = markAssetError;
  exports.isAssetError = isAssetError;
  exports.getClientBuildManifest = getClientBuildManifest;
  exports["default"] = void 0;

  var _getAssetPathFromRoute = interopRequireDefault(getAssetPathFromRoute_1); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
  // considers as "Good" time-to-interactive. We must assume something went
  // wrong beyond this point, and then fall-back to a full page transition to
  // show the user something of value.


  var MS_MAX_IDLE_DELAY = 3800;

  function withFuture(key, map, generator) {
    var entry = map.get(key);

    if (entry) {
      if ('future' in entry) {
        return entry.future;
      }

      return Promise.resolve(entry);
    }

    var resolver;
    var prom = new Promise(function (resolve) {
      resolver = resolve;
    });
    map.set(key, entry = {
      resolve: resolver,
      future: prom
    });
    return generator ? // eslint-disable-next-line no-sequences
    generator().then(function (value) {
      return resolver(value), value;
    }) : prom;
  }

  function hasPrefetch(link) {
    try {
      link = document.createElement('link');
      return (// detect IE11 since it supports prefetch but isn't detected
        // with relList.support
        !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
      );
    } catch (_unused) {
      return false;
    }
  }

  var canPrefetch = hasPrefetch();

  function prefetchViaDom(href, as, link) {
    return new Promise(function (res, rej) {
      if (document.querySelector("link[rel=\"prefetch\"][href^=\"".concat(href, "\"]"))) {
        return res();
      }

      link = document.createElement('link'); // The order of property assignment here is intentional:

      if (as) link.as = as;
      link.rel = "prefetch";
      link.crossOrigin = process.env.__NEXT_CROSS_ORIGIN;
      link.onload = res;
      link.onerror = rej; // `href` should always be last:

      link.href = href;
      document.head.appendChild(link);
    });
  }

  var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

  function markAssetError(err) {
    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
  }

  function isAssetError(err) {
    return err && ASSET_LOAD_ERROR in err;
  }

  function appendScript(src, script) {
    return new Promise(function (resolve, reject) {
      script = document.createElement('script'); // The order of property assignment here is intentional.
      // 1. Setup success/failure hooks in case the browser synchronously
      //    executes when `src` is set.

      script.onload = resolve;

      script.onerror = function () {
        return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
      }; // 2. Configure the cross-origin attribute before setting `src` in case the
      //    browser begins to fetch.


      script.crossOrigin = process.env.__NEXT_CROSS_ORIGIN; // 3. Finally, set the source and inject into the DOM in case the child
      //    must be appended for fetching to start.

      script.src = src;
      document.body.appendChild(script);
    });
  }

  function idleTimeout(ms, err) {
    return new Promise(function (_resolve, reject) {
      return (0, requestIdleCallback_1.requestIdleCallback)(function () {
        return setTimeout(function () {
          return reject(err);
        }, ms);
      });
    });
  } // TODO: stop exporting or cache the failure
  // It'd be best to stop exporting this. It's an implementation detail. We're
  // only exporting it for backwards compatibilty with the `page-loader`.
  // Only cache this response as a last resort if we cannot eliminate all other
  // code branches that use the Build Manifest Callback and push them through
  // the Route Loader interface.


  function getClientBuildManifest() {
    if (self.__BUILD_MANIFEST) {
      return Promise.resolve(self.__BUILD_MANIFEST);
    }

    var onBuildManifest = new Promise(function (resolve) {
      // Mandatory because this is not concurrent safe:
      var cb = self.__BUILD_MANIFEST_CB;

      self.__BUILD_MANIFEST_CB = function () {
        resolve(self.__BUILD_MANIFEST);
        cb && cb();
      };
    });
    return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
  }

  function getFilesForRoute(assetPrefix, route) {
    if (process.env.NODE_ENV === 'development') {
      return Promise.resolve({
        scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute["default"])(route, '.js'))],
        // Styles are handled by `style-loader` in development:
        css: []
      });
    }

    return getClientBuildManifest().then(function (manifest) {
      if (!(route in manifest)) {
        throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
      }

      var allFiles = manifest[route].map(function (entry) {
        return assetPrefix + '/_next/' + encodeURI(entry);
      });
      return {
        scripts: allFiles.filter(function (v) {
          return v.endsWith('.js');
        }),
        css: allFiles.filter(function (v) {
          return v.endsWith('.css');
        })
      };
    });
  }

  function createRouteLoader(assetPrefix) {
    var entrypoints = new Map();
    var loadedScripts = new Map();
    var styleSheets = new Map();
    var routes = new Map();

    function maybeExecuteScript(src) {
      var prom = loadedScripts.get(src);

      if (prom) {
        return prom;
      } // Skip executing script if it's already in the DOM:


      if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
        return Promise.resolve();
      }

      loadedScripts.set(src, prom = appendScript(src));
      return prom;
    }

    function fetchStyleSheet(href) {
      var prom = styleSheets.get(href);

      if (prom) {
        return prom;
      }

      styleSheets.set(href, prom = fetch(href).then(function (res) {
        if (!res.ok) {
          throw new Error("Failed to load stylesheet: ".concat(href));
        }

        return res.text().then(function (text) {
          return {
            href: href,
            content: text
          };
        });
      })["catch"](function (err) {
        throw markAssetError(err);
      }));
      return prom;
    }

    return {
      whenEntrypoint: function whenEntrypoint(route) {
        return withFuture(route, entrypoints);
      },
      onEntrypoint: function onEntrypoint(route, execute) {
        Promise.resolve(execute).then(function (fn) {
          return fn();
        }).then(function (exports) {
          return {
            component: exports && exports["default"] || exports,
            exports: exports
          };
        }, function (err) {
          return {
            error: err
          };
        }).then(function (input) {
          var old = entrypoints.get(route);
          entrypoints.set(route, input);
          if (old && 'resolve' in old) old.resolve(input);
        });
      },
      loadRoute: function loadRoute(route) {
        var _this = this;

        return withFuture(route, routes, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _yield$getFilesForRou, scripts, css, _yield$Promise$all, _yield$Promise$all2, styles, entrypoint, res;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return getFilesForRoute(assetPrefix, route);

                case 3:
                  _yield$getFilesForRou = _context.sent;
                  scripts = _yield$getFilesForRou.scripts;
                  css = _yield$getFilesForRou.css;
                  _context.next = 8;
                  return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);

                case 8:
                  _yield$Promise$all = _context.sent;
                  _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                  styles = _yield$Promise$all2[1];
                  _context.next = 13;
                  return Promise.race([_this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route))))]);

                case 13:
                  entrypoint = _context.sent;
                  res = Object.assign({
                    styles: styles
                  }, entrypoint);
                  return _context.abrupt("return", 'error' in entrypoint ? entrypoint : res);

                case 18:
                  _context.prev = 18;
                  _context.t0 = _context["catch"](0);
                  return _context.abrupt("return", {
                    error: _context.t0
                  });

                case 21:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 18]]);
        })));
      },
      prefetch: function prefetch(route) {
        var _this2 = this;

        // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
        // License: Apache 2.0
        var cn;

        if (cn = navigator.connection) {
          // Don't prefetch if using 2G or if Save-Data is enabled.
          if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
        }

        return getFilesForRoute(assetPrefix, route).then(function (output) {
          return Promise.all(canPrefetch ? output.scripts.map(function (script) {
            return prefetchViaDom(script, 'script');
          }) : []);
        }).then(function () {
          (0, requestIdleCallback_1.requestIdleCallback)(function () {
            return _this2.loadRoute(route);
          });
        })["catch"]( // swallow prefetch errors
        function () {});
      }
    };
  }

  var _default = createRouteLoader;
  exports["default"] = _default;
});

var normalizePathSep_1 = normalizePathSep;
var denormalizePagePath_2 = denormalizePagePath;

function normalizePathSep(path) {
  return path.replace(/\\/g, '/');
}

function denormalizePagePath(page) {
  page = normalizePathSep(page);

  if (page.startsWith('/index/')) {
    page = page.slice(6);
  } else if (page === '/index') {
    page = '/';
  }

  return page;
}

var denormalizePagePath_1 = /*#__PURE__*/Object.defineProperty({
  normalizePathSep: normalizePathSep_1,
  denormalizePagePath: denormalizePagePath_2
}, '__esModule', {
  value: true
});

var normalizeLocalePath_2 = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  var detectedLocale; // first item will be empty string from splitting at first char

  var pathnameParts = pathname.split('/');
  (locales || []).some(function (locale) {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname: pathname,
    detectedLocale: detectedLocale
  };
}

var normalizeLocalePath_1 = /*#__PURE__*/Object.defineProperty({
  normalizeLocalePath: normalizeLocalePath_2
}, '__esModule', {
  value: true
});

var _default$3 = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

var mitt_1 = /*#__PURE__*/Object.defineProperty({
  "default": _default$3
}, '__esModule', {
  value: true
});

var searchParamsToUrlQuery_1 = searchParamsToUrlQuery;
var urlQueryToSearchParams_1 = urlQueryToSearchParams;
var assign_1 = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

var querystring$1 = /*#__PURE__*/Object.defineProperty({
  searchParamsToUrlQuery: searchParamsToUrlQuery_1,
  urlQueryToSearchParams: urlQueryToSearchParams_1,
  assign: assign_1
}, '__esModule', {
  value: true
});

var formatUrl_2 = formatUrl;

var querystring = _interopRequireWildcard$1(querystring$1);

function _getRequireWildcardCache$1() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache$1 = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard$1(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache$1();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && _typeof(query) === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

var formatUrl_1 = /*#__PURE__*/Object.defineProperty({
  formatUrl: formatUrl_2
}, '__esModule', {
  value: true
});

var utils = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.execOnce = execOnce;
  exports.getLocationOrigin = getLocationOrigin;
  exports.getURL = getURL;
  exports.getDisplayName = getDisplayName;
  exports.isResSent = isResSent;
  exports.loadGetInitialProps = loadGetInitialProps;
  exports.formatWithValidation = formatWithValidation;
  exports.ST = exports.SP = exports.urlObjectKeys = void 0;
  /**
  * Utils
  */

  function execOnce(fn) {
    var used = false;
    var result;
    return function () {
      if (!used) {
        used = true;
        result = fn.apply(void 0, arguments);
      }

      return result;
    };
  }

  function getLocationOrigin() {
    var _window$location = window.location,
        protocol = _window$location.protocol,
        hostname = _window$location.hostname,
        port = _window$location.port;
    return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
  }

  function getURL() {
    var href = window.location.href;
    var origin = getLocationOrigin();
    return href.substring(origin.length);
  }

  function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
  }

  function isResSent(res) {
    return res.finished || res.headersSent;
  }

  function loadGetInitialProps(_x, _x2) {
    return _loadGetInitialProps.apply(this, arguments);
  }

  function _loadGetInitialProps() {
    _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(App, ctx) {
      var _App$prototype, message, res, props, _message;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(process.env.NODE_ENV !== 'production')) {
                _context.next = 4;
                break;
              }

              if (!((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps)) {
                _context.next = 4;
                break;
              }

              message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.");
              throw new Error(message);

            case 4:
              // when called from _app `ctx` is nested in `ctx`
              res = ctx.res || ctx.ctx && ctx.ctx.res;

              if (App.getInitialProps) {
                _context.next = 12;
                break;
              }

              if (!(ctx.ctx && ctx.Component)) {
                _context.next = 11;
                break;
              }

              _context.next = 9;
              return loadGetInitialProps(ctx.Component, ctx.ctx);

            case 9:
              _context.t0 = _context.sent;
              return _context.abrupt("return", {
                pageProps: _context.t0
              });

            case 11:
              return _context.abrupt("return", {});

            case 12:
              _context.next = 14;
              return App.getInitialProps(ctx);

            case 14:
              props = _context.sent;

              if (!(res && isResSent(res))) {
                _context.next = 17;
                break;
              }

              return _context.abrupt("return", props);

            case 17:
              if (props) {
                _context.next = 20;
                break;
              }

              _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
              throw new Error(_message);

            case 20:
              if (process.env.NODE_ENV !== 'production') {
                if (Object.keys(props).length === 0 && !ctx.ctx) {
                  console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps"));
                }
              }

              return _context.abrupt("return", props);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _loadGetInitialProps.apply(this, arguments);
  }

  var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
  exports.urlObjectKeys = urlObjectKeys;

  function formatWithValidation(url) {
    if (process.env.NODE_ENV === 'development') {
      if (url !== null && _typeof(url) === 'object') {
        Object.keys(url).forEach(function (key) {
          if (urlObjectKeys.indexOf(key) === -1) {
            console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
          }
        });
      }
    }

    return (0, formatUrl_1.formatUrl)(url);
  }

  var SP = typeof performance !== 'undefined';
  exports.SP = SP;
  var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
  exports.ST = ST;
});

var isDynamicRoute_1 = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

var isDynamic = /*#__PURE__*/Object.defineProperty({
  isDynamicRoute: isDynamicRoute_1
}, '__esModule', {
  value: true
});

var parseRelativeUrl_2 = parseRelativeUrl;
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  var globalBase = new URL(typeof window === 'undefined' ? 'http://n' : (0, utils.getLocationOrigin)());
  var resolvedBase = base ? new URL(base, globalBase) : globalBase;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin;

  if (origin !== globalBase.origin) {
    throw new Error("invariant: invalid relative URL, router received ".concat(url));
  }

  return {
    pathname: pathname,
    query: (0, querystring$1.searchParamsToUrlQuery)(searchParams),
    search: search,
    hash: hash,
    href: href.slice(globalBase.origin.length)
  };
}

var parseRelativeUrl_1 = /*#__PURE__*/Object.defineProperty({
  parseRelativeUrl: parseRelativeUrl_2
}, '__esModule', {
  value: true
});

function lexer(str) {
  var tokens = [];
  var i = 0;

  while (i < str.length) {
    var _char = str[i];

    if (_char === "*" || _char === "+" || _char === "?") {
      tokens.push({
        type: "MODIFIER",
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (_char === "\\") {
      tokens.push({
        type: "ESCAPED_CHAR",
        index: i++,
        value: str[i++]
      });
      continue;
    }

    if (_char === "{") {
      tokens.push({
        type: "OPEN",
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (_char === "}") {
      tokens.push({
        type: "CLOSE",
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (_char === ":") {
      var name = "";
      var j = i + 1;

      while (j < str.length) {
        var code = str.charCodeAt(j);

        if ( // `0-9`
        code >= 48 && code <= 57 || // `A-Z`
        code >= 65 && code <= 90 || // `a-z`
        code >= 97 && code <= 122 || // `_`
        code === 95) {
          name += str[j++];
          continue;
        }

        break;
      }

      if (!name) throw new TypeError("Missing parameter name at " + i);
      tokens.push({
        type: "NAME",
        index: i,
        value: name
      });
      i = j;
      continue;
    }

    if (_char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;

      if (str[j] === "?") {
        throw new TypeError("Pattern cannot start with \"?\" at " + j);
      }

      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }

        if (str[j] === ")") {
          count--;

          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;

          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at " + j);
          }
        }

        pattern += str[j++];
      }

      if (count) throw new TypeError("Unbalanced pattern at " + i);
      if (!pattern) throw new TypeError("Missing pattern at " + i);
      tokens.push({
        type: "PATTERN",
        index: i,
        value: pattern
      });
      i = j;
      continue;
    }

    tokens.push({
      type: "CHAR",
      index: i,
      value: str[i++]
    });
  }

  tokens.push({
    type: "END",
    index: i,
    value: ""
  });
  return tokens;
}
/**
 * Parse a string for the raw tokens.
 */


function parse(str, options) {
  if (options === void 0) {
    options = {};
  }

  var tokens = lexer(str);
  var _a = options.prefixes,
      prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";

  var tryConsume = function tryConsume(type) {
    if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
  };

  var mustConsume = function mustConsume(type) {
    var value = tryConsume(type);
    if (value !== undefined) return value;
    var _a = tokens[i],
        nextType = _a.type,
        index = _a.index;
    throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
  };

  var consumeText = function consumeText() {
    var result = "";
    var value; // tslint:disable-next-line

    while (value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result += value;
    }

    return result;
  };

  while (i < tokens.length) {
    var _char2 = tryConsume("CHAR");

    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");

    if (name || pattern) {
      var prefix = _char2 || "";

      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }

      if (path) {
        result.push(path);
        path = "";
      }

      result.push({
        name: name || key++,
        prefix: prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }

    var value = _char2 || tryConsume("ESCAPED_CHAR");

    if (value) {
      path += value;
      continue;
    }

    if (path) {
      result.push(path);
      path = "";
    }

    var open = tryConsume("OPEN");

    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix: prefix,
        suffix: suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }

    mustConsume("END");
  }

  return result;
}

var parse_1 = parse;
/**
 * Compile a string to a template function for the path.
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}

var compile_1 = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */

function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }

  var reFlags = flags(options);
  var _a = options.encode,
      encode = _a === void 0 ? function (x) {
    return x;
  } : _a,
      _b = options.validate,
      validate = _b === void 0 ? true : _b; // Compile all the tokens into regexps.

  var matches = tokens.map(function (token) {
    if (_typeof(token) === "object") {
      return new RegExp("^(?:" + token.pattern + ")$", reFlags);
    }
  });
  return function (data) {
    var path = "";

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === "string") {
        path += token;
        continue;
      }

      var value = data ? data[token.name] : undefined;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";

      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
        }

        if (value.length === 0) {
          if (optional) continue;
          throw new TypeError("Expected \"" + token.name + "\" to not be empty");
        }

        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);

          if (validate && !matches[i].test(segment)) {
            throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
          }

          path += token.prefix + segment + token.suffix;
        }

        continue;
      }

      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);

        if (validate && !matches[i].test(segment)) {
          throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
        }

        path += token.prefix + segment + token.suffix;
        continue;
      }

      if (optional) continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
    }

    return path;
  };
}

var tokensToFunction_1 = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */

function match(str, options) {
  var keys = [];
  var re = pathToRegexp$1(str, keys, options);
  return regexpToFunction(re, keys, options);
}

var match_1 = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */

function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.decode,
      decode = _a === void 0 ? function (x) {
    return x;
  } : _a;
  return function (pathname) {
    var m = re.exec(pathname);
    if (!m) return false;
    var path = m[0],
        index = m.index;
    var params = Object.create(null);

    var _loop_1 = function _loop_1(i) {
      // tslint:disable-next-line
      if (m[i] === undefined) return "continue";
      var key = keys[i - 1];

      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i], key);
      }
    };

    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }

    return {
      path: path,
      index: index,
      params: params
    };
  };
}

var regexpToFunction_1 = regexpToFunction;
/**
 * Escape a regular expression string.
 */

function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */


function flags(options) {
  return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */


function regexpToRegexp(path, keys) {
  if (!keys) return path; // Use a negative lookahead to match only capturing groups.

  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
      });
    }
  }

  return path;
}
/**
 * Transform an array into a regexp.
 */


function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function (path) {
    return pathToRegexp$1(path, keys, options).source;
  });
  return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */


function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.strict,
      strict = _a === void 0 ? false : _a,
      _b = options.start,
      start = _b === void 0 ? true : _b,
      _c = options.end,
      end = _c === void 0 ? true : _c,
      _d = options.encode,
      encode = _d === void 0 ? function (x) {
    return x;
  } : _d;
  var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
  var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
  var route = start ? "^" : ""; // Iterate over the tokens and create our regexp string.

  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];

    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));

      if (token.pattern) {
        if (keys) keys.push(token);

        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
          } else {
            route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
          }
        } else {
          route += "(" + token.pattern + ")" + token.modifier;
        }
      } else {
        route += "(?:" + prefix + suffix + ")" + token.modifier;
      }
    }
  }

  if (end) {
    if (!strict) route += delimiter + "?";
    route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : // tslint:disable-next-line
    endToken === undefined;

    if (!strict) {
      route += "(?:" + delimiter + "(?=" + endsWith + "))?";
    }

    if (!isEndDelimited) {
      route += "(?=" + delimiter + "|" + endsWith + ")";
    }
  }

  return new RegExp(route, flags(options));
}

var tokensToRegexp_1 = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */

function pathToRegexp$1(path, keys, options) {
  if (path instanceof RegExp) return regexpToRegexp(path, keys);
  if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}

var pathToRegexp_2 = pathToRegexp$1;
var pathToRegexp_1 = /*#__PURE__*/Object.defineProperty({
  parse: parse_1,
  compile: compile_1,
  tokensToFunction: tokensToFunction_1,
  match: match_1,
  regexpToFunction: regexpToFunction_1,
  tokensToRegexp: tokensToRegexp_1,
  pathToRegexp: pathToRegexp_2
}, '__esModule', {
  value: true
});

var pathMatch = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.pathToRegexp = exports["default"] = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

  var pathToRegexp = _interopRequireWildcard(pathToRegexp_1);

  exports.pathToRegexp = pathToRegexp;

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj["default"] = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  var matcherOptions = {
    sensitive: false,
    delimiter: '/'
  };
  exports.matcherOptions = matcherOptions;

  var customRouteMatcherOptions = _objectSpread2(_objectSpread2({}, matcherOptions), {}, {
    strict: true
  });

  exports.customRouteMatcherOptions = customRouteMatcherOptions;

  var _default = function _default() {
    var customRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return function (path) {
      var keys = [];
      var matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
      var matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
      return function (pathname, params) {
        var res = pathname == null ? false : matcher(pathname);

        if (!res) {
          return false;
        }

        if (customRoute) {
          var _iterator = _createForOfIteratorHelper(keys),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var key = _step.value;

              // unnamed params should be removed as they
              // are not allowed to be used in the destination
              if (typeof key.name === 'number') {
                delete res.params[key.name];
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return _objectSpread2(_objectSpread2({}, params), res.params);
      };
    };
  };

  exports["default"] = _default;
});

var compileNonPath_1 = compileNonPath;
var _default$2 = prepareDestination;

var pathToRegexp = _interopRequireWildcard(pathToRegexp_1);

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (var _i = 0, _Object$keys = Object.keys(params); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (value.includes(":".concat(key))) {
      value = value.replace(new RegExp(":".concat(key, "\\*"), 'g'), ":".concat(key, "--ESCAPED_PARAM_ASTERISKS")).replace(new RegExp(":".concat(key, "\\?"), 'g'), ":".concat(key, "--ESCAPED_PARAM_QUESTION")).replace(new RegExp(":".concat(key, "\\+"), 'g'), ":".concat(key, "--ESCAPED_PARAM_PLUS")).replace(new RegExp(":".concat(key, "(?!\\w)"), 'g'), "--ESCAPED_PARAM_COLON".concat(key));
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile("/".concat(value), {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  var parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  var hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, parseRelativeUrl_1.parseRelativeUrl)(destination);
  } else {
    var _URL = new URL(destination),
        pathname = _URL.pathname,
        searchParams = _URL.searchParams,
        hash = _URL.hash,
        hostname = _URL.hostname,
        port = _URL.port,
        protocol = _URL.protocol,
        search = _URL.search,
        href = _URL.href;

    parsedDestination = {
      pathname: pathname,
      query: (0, querystring$1.searchParamsToUrlQuery)(searchParams),
      hash: hash,
      protocol: protocol,
      hostname: hostname,
      port: port,
      search: search,
      href: href
    };
  }

  var destQuery = parsedDestination.query;
  var destPath = "".concat(parsedDestination.pathname).concat(parsedDestination.hash || '');
  var destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  var destPathParams = destPathParamKeys.map(function (key) {
    return key.name;
  });
  var destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  var newUrl; // update any params in query values

  for (var _i2 = 0, _Object$entries = Object.entries(destQuery); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        strOrArray = _Object$entries$_i[1];

    var value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  var paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(function (name) {
      return name !== 'nextInternalLocale';
    });
  }

  if (appendParamsToQuery && !paramKeys.some(function (key) {
    return destPathParams.includes(key);
  })) {
    var _iterator = _createForOfIteratorHelper(paramKeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _key = _step.value;

        if (!(_key in destQuery)) {
          destQuery[_key] = params[_key];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  try {
    newUrl = destinationCompiler(params);

    var _newUrl$split = newUrl.split('#'),
        _newUrl$split2 = _slicedToArray(_newUrl$split, 2),
        _pathname = _newUrl$split2[0],
        _hash = _newUrl$split2[1];

    parsedDestination.pathname = _pathname;
    parsedDestination.hash = "".concat(_hash ? '#' : '').concat(_hash || '');
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match");
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread2(_objectSpread2({}, query), parsedDestination.query);
  return {
    newUrl: newUrl,
    parsedDestination: parsedDestination
  };
}

var prepareDestination_1 = /*#__PURE__*/Object.defineProperty({
  compileNonPath: compileNonPath_1,
  "default": _default$2
}, '__esModule', {
  value: true
});

var _default$1 = resolveRewrites;

var _pathMatch = _interopRequireDefault(pathMatch);

var _prepareDestination = _interopRequireDefault(prepareDestination_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var customRouteMatcher = (0, _pathMatch["default"])(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  var matchedPage = false;
  var parsedAs = (0, parseRelativeUrl_1.parseRelativeUrl)(asPath);
  var fsPathname = (0, normalizeTrailingSlash.removePathTrailingSlash)((0, normalizeLocalePath_1.normalizeLocalePath)((0, router$2.delBasePath)(parsedAs.pathname), locales).pathname);
  var resolvedHref;

  if (!pages.includes(fsPathname)) {
    var _iterator = _createForOfIteratorHelper(rewrites),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var rewrite = _step.value;
        var matcher = customRouteMatcher(rewrite.source);
        var params = matcher(parsedAs.pathname);

        if (params) {
          if (!rewrite.destination) {
            // this is a proxied rewrite which isn't handled on the client
            break;
          }

          var destRes = (0, _prepareDestination["default"])(rewrite.destination, params, query, true);
          parsedAs = destRes.parsedDestination;
          asPath = destRes.newUrl;
          Object.assign(query, destRes.parsedDestination.query);
          fsPathname = (0, normalizeTrailingSlash.removePathTrailingSlash)((0, normalizeLocalePath_1.normalizeLocalePath)((0, router$2.delBasePath)(asPath), locales).pathname);

          if (pages.includes(fsPathname)) {
            // check if we now match a page as this means we are done
            // resolving the rewrites
            matchedPage = true;
            resolvedHref = fsPathname;
            break;
          } // check if we match a dynamic-route, if so we break the rewrites chain


          resolvedHref = resolveHref(fsPathname);

          if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
            matchedPage = true;
            break;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return {
    asPath: asPath,
    parsedAs: parsedAs,
    matchedPage: matchedPage,
    resolvedHref: resolvedHref
  };
}

var resolveRewrites_1 = /*#__PURE__*/Object.defineProperty({
  "default": _default$1
}, '__esModule', {
  value: true
});

var getRouteMatcher_1 = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

var routeMatcher = /*#__PURE__*/Object.defineProperty({
  getRouteMatcher: getRouteMatcher_1
}, '__esModule', {
  value: true
});

var getRouteRegex_1 = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getRouteRegex(normalizedRoute) {
  var segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = segments.map(function (segment) {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      var _parseParameter = parseParameter(segment.slice(1, -1)),
          key = _parseParameter.key,
          optional = _parseParameter.optional,
          repeat = _parseParameter.repeat;

      groups[key] = {
        pos: groupIndex++,
        repeat: repeat,
        optional: optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return "/".concat(escapeRegex(segment));
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (typeof window === 'undefined') {
    var routeKeyCharCode = 97;
    var routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    var getSafeRouteKey = function getSafeRouteKey() {
      var routeKey = '';

      for (var i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    var routeKeys = {};
    var namedParameterizedRoute = segments.map(function (segment) {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        var _parseParameter2 = parseParameter(segment.slice(1, -1)),
            key = _parseParameter2.key,
            optional = _parseParameter2.optional,
            repeat = _parseParameter2.repeat; // replace any non-word characters since they can break
        // the named regex


        var cleanedKey = key.replace(/\W/g, '');
        var invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? "(?:/(?<".concat(cleanedKey, ">.+?))?") : "/(?<".concat(cleanedKey, ">.+?)") : "/(?<".concat(cleanedKey, ">[^/]+?)");
      } else {
        return "/".concat(escapeRegex(segment));
      }
    }).join('');
    return {
      re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
      groups: groups,
      routeKeys: routeKeys,
      namedRegex: "^".concat(namedParameterizedRoute, "(?:/)?$")
    };
  }

  return {
    re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
    groups: groups
  };
}

var routeRegex = /*#__PURE__*/Object.defineProperty({
  getRouteRegex: getRouteRegex_1
}, '__esModule', {
  value: true
});

var detectDomainLocale_2 = detectDomainLocale;

function detectDomainLocale(domainItems, hostname, detectedLocale) {
  var domainItem;

  if (domainItems) {
    if (detectedLocale) {
      detectedLocale = detectedLocale.toLowerCase();
    }

    var _iterator = _createForOfIteratorHelper(domainItems),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        var _item$domain, _item$locales; // remove port if present


        var domainHostname = (_item$domain = item.domain) == null ? void 0 : _item$domain.split(':')[0].toLowerCase();

        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || (_item$locales = item.locales) != null && _item$locales.some(function (locale) {
          return locale.toLowerCase() === detectedLocale;
        })) {
          domainItem = item;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return domainItem;
}

var detectDomainLocale_1 = /*#__PURE__*/Object.defineProperty({
  detectDomainLocale: detectDomainLocale_2
}, '__esModule', {
  value: true
});

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = "function" === typeof Symbol && Symbol["for"],
    c = b ? Symbol["for"]("react.element") : 60103,
    d = b ? Symbol["for"]("react.portal") : 60106,
    e = b ? Symbol["for"]("react.fragment") : 60107,
    f = b ? Symbol["for"]("react.strict_mode") : 60108,
    g = b ? Symbol["for"]("react.profiler") : 60114,
    h = b ? Symbol["for"]("react.provider") : 60109,
    k = b ? Symbol["for"]("react.context") : 60110,
    l = b ? Symbol["for"]("react.async_mode") : 60111,
    m = b ? Symbol["for"]("react.concurrent_mode") : 60111,
    n = b ? Symbol["for"]("react.forward_ref") : 60112,
    p = b ? Symbol["for"]("react.suspense") : 60113,
    q = b ? Symbol["for"]("react.suspense_list") : 60120,
    r = b ? Symbol["for"]("react.memo") : 60115,
    t = b ? Symbol["for"]("react.lazy") : 60116,
    v = b ? Symbol["for"]("react.block") : 60121,
    w = b ? Symbol["for"]("react.fundamental") : 60117,
    x = b ? Symbol["for"]("react.responder") : 60118,
    y = b ? Symbol["for"]("react.scope") : 60119;

function z(a) {
  if ("object" === _typeof(a) && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;

var isAsyncMode = function isAsyncMode(a) {
  return A(a) || z(a) === l;
};

var isConcurrentMode = A;

var isContextConsumer = function isContextConsumer(a) {
  return z(a) === k;
};

var isContextProvider = function isContextProvider(a) {
  return z(a) === h;
};

var isElement = function isElement(a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === c;
};

var isForwardRef = function isForwardRef(a) {
  return z(a) === n;
};

var isFragment = function isFragment(a) {
  return z(a) === e;
};

var isLazy = function isLazy(a) {
  return z(a) === t;
};

var isMemo = function isMemo(a) {
  return z(a) === r;
};

var isPortal = function isPortal(a) {
  return z(a) === d;
};

var isProfiler = function isProfiler(a) {
  return z(a) === g;
};

var isStrictMode = function isStrictMode(a) {
  return z(a) === f;
};

var isSuspense = function isSuspense(a) {
  return z(a) === p;
};

var isValidElementType = function isValidElementType(a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

var typeOf = z;
var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {

  if (process.env.NODE_ENV !== "production") {
    (function () {
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if (_typeof(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});

var reactIs = createCommonjsModule(function (module) {

  if (process.env.NODE_ENV === 'production') {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
});

var router$2 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.getDomainLocale = getDomainLocale;
  exports.addLocale = addLocale;
  exports.delLocale = delLocale;
  exports.hasBasePath = hasBasePath;
  exports.addBasePath = addBasePath;
  exports.delBasePath = delBasePath;
  exports.isLocalURL = isLocalURL;
  exports.interpolateAs = interpolateAs;
  exports.resolveHref = resolveHref;
  exports["default"] = void 0;

  var _mitt = _interopRequireDefault(mitt_1);

  var _resolveRewrites = _interopRequireDefault(resolveRewrites_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  /* global __NEXT_DATA__ */
  // tslint:disable:no-console


  var detectDomainLocale;

  if (process.env.__NEXT_I18N_SUPPORT) {
    detectDomainLocale = detectDomainLocale_1.detectDomainLocale;
  }

  var basePath = process.env.__NEXT_ROUTER_BASEPATH || '';

  function buildCancellationError() {
    return Object.assign(new Error('Route Cancelled'), {
      cancelled: true
    });
  }

  function addPathPrefix(path, prefix) {
    return prefix && path.startsWith('/') ? path === '/' ? (0, normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : "".concat(prefix).concat(pathNoQueryHash(path) === '/' ? path.substring(1) : path) : path;
  }

  function getDomainLocale(path, locale, locales, domainLocales) {
    if (process.env.__NEXT_I18N_SUPPORT) {
      locale = locale || (0, normalizeLocalePath_1.normalizeLocalePath)(path, locales).detectedLocale;
      var detectedDomain = detectDomainLocale(domainLocales, undefined, locale);

      if (detectedDomain) {
        return "http".concat(detectedDomain.http ? '' : 's', "://").concat(detectedDomain.domain).concat(basePath || '').concat(locale === detectedDomain.defaultLocale ? '' : "/".concat(locale)).concat(path);
      }

      return false;
    }

    return false;
  }

  function addLocale(path, locale, defaultLocale) {
    if (process.env.__NEXT_I18N_SUPPORT) {
      return locale && locale !== defaultLocale && !path.startsWith('/' + locale + '/') && path !== '/' + locale ? addPathPrefix(path, '/' + locale) : path;
    }

    return path;
  }

  function delLocale(path, locale) {
    if (process.env.__NEXT_I18N_SUPPORT) {
      return locale && (path.startsWith('/' + locale + '/') || path === '/' + locale) ? path.substr(locale.length + 1) || '/' : path;
    }

    return path;
  }

  function pathNoQueryHash(path) {
    var queryIndex = path.indexOf('?');
    var hashIndex = path.indexOf('#');

    if (queryIndex > -1 || hashIndex > -1) {
      path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
    }

    return path;
  }

  function hasBasePath(path) {
    path = pathNoQueryHash(path);
    return path === basePath || path.startsWith(basePath + '/');
  }

  function addBasePath(path) {
    // we only add the basepath on relative urls
    return addPathPrefix(path, basePath);
  }

  function delBasePath(path) {
    path = path.slice(basePath.length);
    if (!path.startsWith('/')) path = "/".concat(path);
    return path;
  }
  /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */


  function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (url.startsWith('/') || url.startsWith('#')) return true;

    try {
      // absolute urls can be local if they are on the same origin
      var locationOrigin = (0, utils.getLocationOrigin)();
      var resolved = new URL(url, locationOrigin);
      return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
    } catch (_) {
      return false;
    }
  }

  function interpolateAs(route, asPathname, query) {
    var interpolatedRoute = '';
    var dynamicRegex = (0, routeRegex.getRouteRegex)(route);
    var dynamicGroups = dynamicRegex.groups;
    var dynamicMatches = // Try to match the dynamic route against the asPath
    (asPathname !== route ? (0, routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
    // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    var params = Object.keys(dynamicGroups);

    if (!params.every(function (param) {
      var value = dynamicMatches[param] || '';
      var _dynamicGroups$param = dynamicGroups[param],
          repeat = _dynamicGroups$param.repeat,
          optional = _dynamicGroups$param.optional; // support single-level catch-all
      // TODO: more robust handling for user-error (passing `/`)

      var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

      if (optional) {
        replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
      }

      if (repeat && !Array.isArray(value)) value = [value];
      return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
      interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
      // path delimiter escaped since they are being inserted
      // into the URL and we expect URL encoded segments
      // when parsing dynamic route params
      function (segment) {
        return encodeURIComponent(segment);
      }).join('/') : encodeURIComponent(value)) || '/');
    })) {
      interpolatedRoute = ''; // did not satisfy all requirements
      // n.b. We ignore this error because we handle warning for this case in
      // development in the `<Link>` component directly.
    }

    return {
      params: params,
      result: interpolatedRoute
    };
  }

  function omitParmsFromQuery(query, params) {
    var filteredQuery = {};
    Object.keys(query).forEach(function (key) {
      if (!params.includes(key)) {
        filteredQuery[key] = query[key];
      }
    });
    return filteredQuery;
  }
  /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */


  function resolveHref(currentPath, href, resolveAs) {
    // we use a dummy base url for relative urls
    var base = new URL(currentPath, 'http://n');
    var urlAsString = typeof href === 'string' ? href : (0, utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

    if (!isLocalURL(urlAsString)) {
      return resolveAs ? [urlAsString] : urlAsString;
    }

    try {
      var finalUrl = new URL(urlAsString, base);
      finalUrl.pathname = (0, normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
      var interpolatedAs = '';

      if ((0, isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
        var query = (0, querystring$1.searchParamsToUrlQuery)(finalUrl.searchParams);

        var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
            result = _interpolateAs.result,
            params = _interpolateAs.params;

        if (result) {
          interpolatedAs = (0, utils.formatWithValidation)({
            pathname: result,
            hash: finalUrl.hash,
            query: omitParmsFromQuery(query, params)
          });
        }
      } // if the origin didn't change, it means we received a relative href


      var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
      return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
    } catch (_) {
      return resolveAs ? [urlAsString] : urlAsString;
    }
  }

  function stripOrigin(url) {
    var origin = (0, utils.getLocationOrigin)();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
  }

  function prepareUrlAs(router, url, as) {
    // If url and as provided as an object representation,
    // we'll format them into the string version here.
    var _resolveHref = resolveHref(router.pathname, url, true),
        _resolveHref2 = _slicedToArray(_resolveHref, 2),
        resolvedHref = _resolveHref2[0],
        resolvedAs = _resolveHref2[1];

    var origin = (0, utils.getLocationOrigin)();
    var hrefHadOrigin = resolvedHref.startsWith(origin);
    var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    var preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
    var preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
    return {
      url: preparedUrl,
      as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
    };
  }

  function resolveDynamicRoute(parsedHref, pages) {
    var applyBasePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var pathname = parsedHref.pathname;
    var cleanPathname = (0, normalizeTrailingSlash.removePathTrailingSlash)((0, denormalizePagePath_1.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(function (page) {
        if ((0, isDynamic.isDynamicRoute)(page) && (0, routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }

  var manualScrollRestoration = process.env.__NEXT_SCROLL_RESTORATION && typeof window !== 'undefined' && 'scrollRestoration' in window.history && !!function () {
    try {
      var v = '__next'; // eslint-disable-next-line no-sequences

      return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), true;
    } catch (n) {}
  }();
  var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

  function fetchRetry(url, attempts) {
    return fetch(url, {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (attempts > 1 && res.status >= 500) {
          return fetchRetry(url, attempts - 1);
        }

        if (res.status === 404) {
          return res.json().then(function (data) {
            if (data.notFound) {
              return {
                notFound: SSG_DATA_NOT_FOUND
              };
            }

            throw new Error("Failed to load static props");
          });
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  function fetchNextData(dataHref, isServerRender) {
    return fetchRetry(dataHref, isServerRender ? 3 : 1)["catch"](function (err) {
      // We should only trigger a server-side transition if this was caused
      // on a client-side transition. Otherwise, we'd get into an infinite
      // loop.
      if (!isServerRender) {
        (0, routeLoader.markAssetError)(err);
      }

      throw err;
    });
  }

  var Router = /*#__PURE__*/function () {
    /**
    * Map of all components loaded in `Router`
    */
    // Static Data Cache
    function Router(_pathname, _query, _as, _ref) {
      var _this = this;

      var initialProps = _ref.initialProps,
          pageLoader = _ref.pageLoader,
          App = _ref.App,
          wrapApp = _ref.wrapApp,
          Component = _ref.Component,
          err = _ref.err,
          subscription = _ref.subscription,
          isFallback = _ref.isFallback,
          locale = _ref.locale,
          locales = _ref.locales,
          defaultLocale = _ref.defaultLocale,
          domainLocales = _ref.domainLocales,
          isPreview = _ref.isPreview;

      _classCallCheck(this, Router);

      this.route = void 0;
      this.pathname = void 0;
      this.query = void 0;
      this.asPath = void 0;
      this.basePath = void 0;
      this.components = void 0;
      this.sdc = {};
      this.sub = void 0;
      this.clc = void 0;
      this.pageLoader = void 0;
      this._bps = void 0;
      this.events = void 0;
      this._wrapApp = void 0;
      this.isSsr = void 0;
      this.isFallback = void 0;
      this._inFlightRoute = void 0;
      this._shallow = void 0;
      this.locale = void 0;
      this.locales = void 0;
      this.defaultLocale = void 0;
      this.domainLocales = void 0;
      this.isReady = void 0;
      this.isPreview = void 0;
      this.isLocaleDomain = void 0;
      this._idx = 0;

      this.onPopState = function (e) {
        var state = e.state;

        if (!state) {
          // We get state as undefined for two reasons.
          //  1. With older safari (< 8) and older chrome (< 34)
          //  2. When the URL changed with #
          //
          // In the both cases, we don't need to proceed and change the route.
          // (as it's already changed)
          // But we can simply replace the state with the new changes.
          // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
          // So, doing the following for (1) does no harm.
          var _pathname2 = _this.pathname,
              query = _this.query;

          _this.changeState('replaceState', (0, utils.formatWithValidation)({
            pathname: addBasePath(_pathname2),
            query: query
          }), (0, utils.getURL)());

          return;
        }

        if (!state.__N) {
          return;
        }

        var forcedScroll;
        var url = state.url,
            as = state.as,
            options = state.options,
            idx = state.idx;

        if (process.env.__NEXT_SCROLL_RESTORATION) {
          if (manualScrollRestoration) {
            if (_this._idx !== idx) {
              // Snapshot current scroll position:
              try {
                sessionStorage.setItem('__next_scroll_' + _this._idx, JSON.stringify({
                  x: self.pageXOffset,
                  y: self.pageYOffset
                }));
              } catch (_unused) {} // Restore old scroll position:


              try {
                var v = sessionStorage.getItem('__next_scroll_' + idx);
                forcedScroll = JSON.parse(v);
              } catch (_unused2) {
                forcedScroll = {
                  x: 0,
                  y: 0
                };
              }
            }
          }
        }

        _this._idx = idx;

        var _ref2 = (0, parseRelativeUrl_1.parseRelativeUrl)(url),
            pathname = _ref2.pathname; // Make sure we don't re-render on initial load,
        // can be caused by navigating back from an external site


        if (_this.isSsr && as === _this.asPath && pathname === _this.pathname) {
          return;
        } // If the downstream application returns falsy, return.
        // They will then be responsible for handling the event.


        if (_this._bps && !_this._bps(state)) {
          return;
        }

        _this.change('replaceState', url, as, Object.assign({}, options, {
          shallow: options.shallow && _this._shallow,
          locale: options.locale || _this.defaultLocale
        }), forcedScroll);
      }; // represents the current component key


      this.route = (0, normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

      this.components = {}; // We should not keep the cache, if there's an error
      // Otherwise, this cause issues when when going back and
      // come again to the errored page.

      if (_pathname !== '/_error') {
        this.components[this.route] = {
          Component: Component,
          initial: true,
          props: initialProps,
          err: err,
          __N_SSG: initialProps && initialProps.__N_SSG,
          __N_SSP: initialProps && initialProps.__N_SSP
        };
      }

      this.components['/_app'] = {
        Component: App,
        styleSheets: [
          /* /_app does not need its stylesheets managed */
        ]
      }; // Backwards compat for Router.router.events
      // TODO: Should be remove the following major version as it was never documented

      this.events = Router.events;
      this.pageLoader = pageLoader;
      this.pathname = _pathname;
      this.query = _query; // if auto prerendered and dynamic route wait to update asPath
      // until after mount to prevent hydration mismatch

      var autoExportDynamic = (0, isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

      this.asPath = autoExportDynamic ? _pathname : _as;
      this.basePath = basePath;
      this.sub = subscription;
      this.clc = null;
      this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
      // back from external site

      this.isSsr = true;
      this.isFallback = isFallback;
      this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
      this.isPreview = !!isPreview;
      this.isLocaleDomain = false;

      if (process.env.__NEXT_I18N_SUPPORT) {
        this.locale = locale;
        this.locales = locales;
        this.defaultLocale = defaultLocale;
        this.domainLocales = domainLocales;
        this.isLocaleDomain = !!detectDomainLocale(domainLocales, self.location.hostname);
      }

      if (typeof window !== 'undefined') {
        // make sure "as" doesn't start with double slashes or else it can
        // throw an error as it's considered invalid
        if (_as.substr(0, 2) !== '//') {
          // in order for `e.state` to work on the `onpopstate` event
          // we have to register the initial route upon initialization
          this.changeState('replaceState', (0, utils.formatWithValidation)({
            pathname: addBasePath(_pathname),
            query: _query
          }), (0, utils.getURL)(), {
            locale: locale
          });
        }

        window.addEventListener('popstate', this.onPopState); // enable custom scroll restoration handling when available
        // otherwise fallback to browser's default handling

        if (process.env.__NEXT_SCROLL_RESTORATION) {
          if (manualScrollRestoration) {
            window.history.scrollRestoration = 'manual';
          }
        }
      }
    }

    _createClass(Router, [{
      key: "reload",
      value: function reload() {
        window.location.reload();
      }
      /**
      * Go back in history
      */

    }, {
      key: "back",
      value: function back() {
        window.history.back();
      }
      /**
      * Performs a `pushState` with arguments
      * @param url of the route
      * @param as masks `url` for the browser
      * @param options object you can define `shallow` and other options
      */

    }, {
      key: "push",
      value: function push(url, as) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (process.env.__NEXT_SCROLL_RESTORATION) {
          // TODO: remove in the future when we update history before route change
          // is complete, as the popstate event should handle this capture.
          if (manualScrollRestoration) {
            try {
              // Snapshot scroll position right before navigating to a new page:
              sessionStorage.setItem('__next_scroll_' + this._idx, JSON.stringify({
                x: self.pageXOffset,
                y: self.pageYOffset
              }));
            } catch (_unused3) {}
          }
        }

        var _prepareUrlAs = prepareUrlAs(this, url, as);

        url = _prepareUrlAs.url;
        as = _prepareUrlAs.as;
        return this.change('pushState', url, as, options);
      }
      /**
      * Performs a `replaceState` with arguments
      * @param url of the route
      * @param as masks `url` for the browser
      * @param options object you can define `shallow` and other options
      */

    }, {
      key: "replace",
      value: function replace(url, as) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var _prepareUrlAs2 = prepareUrlAs(this, url, as);

        url = _prepareUrlAs2.url;
        as = _prepareUrlAs2.as;
        return this.change('replaceState', url, as, options);
      }
    }, {
      key: "change",
      value: function () {
        var _change = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, url, as, options, forcedScroll) {
          var _options$scroll, localeChange, parsedAs, localePathResult, didNavigate, _this$locales, detectedDomain, asNoBasePath, _options$shallow, shallow, routeProps, cleanedAs, parsed, _parsed, pathname, query, pages, rewrites, _yield, route, resolvedAs, rewritesResult, _parsedAs, asPathname, routeRegex$1, routeMatch, shouldInterpolate, interpolatedAs, missingParams, _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, routeInfo, _routeInfo, error, props, __N_SSG, __N_SSP, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, notFoundRoute, appComp, isValidShallowRoute;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (isLocalURL(url)) {
                    _context.next = 3;
                    break;
                  }

                  window.location.href = url;
                  return _context.abrupt("return", false);

                case 3:
                  // for static pages with query params in the URL we delay
                  // marking the router ready until after the query is updated
                  if (options._h) {
                    this.isReady = true;
                  } // Default to scroll reset behavior unless explicitly specified to be
                  // `false`! This makes the behavior between using `Router#push` and a
                  // `<Link />` consistent.


                  options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
                  localeChange = options.locale !== this.locale;

                  if (!process.env.__NEXT_I18N_SUPPORT) {
                    _context.next = 18;
                    break;
                  }

                  this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

                  if (typeof options.locale === 'undefined') {
                    options.locale = this.locale;
                  }

                  parsedAs = (0, parseRelativeUrl_1.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
                  localePathResult = (0, normalizeLocalePath_1.normalizeLocalePath)(parsedAs.pathname, this.locales);

                  if (localePathResult.detectedLocale) {
                    this.locale = localePathResult.detectedLocale;
                    parsedAs.pathname = addBasePath(parsedAs.pathname);
                    as = (0, utils.formatWithValidation)(parsedAs);
                    url = addBasePath((0, normalizeLocalePath_1.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
                  }

                  didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
                  // moves this on its own due to the return

                  if (process.env.__NEXT_I18N_SUPPORT) {
                    // if the locale isn't configured hard navigate to show 404 page
                    if (!((_this$locales = this.locales) != null && _this$locales.includes(this.locale))) {
                      parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
                      window.location.href = (0, utils.formatWithValidation)(parsedAs); // this was previously a return but was removed in favor
                      // of better dead code elimination with regenerator runtime

                      didNavigate = true;
                    }
                  }

                  detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
                  // moves this on its own due to the return

                  if (process.env.__NEXT_I18N_SUPPORT) {
                    // if we are navigating to a domain locale ensure we redirect to the
                    // correct domain
                    if (!didNavigate && detectedDomain && this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
                      asNoBasePath = delBasePath(as);
                      window.location.href = "http".concat(detectedDomain.http ? '' : 's', "://").concat(detectedDomain.domain).concat(addBasePath("".concat(this.locale === detectedDomain.defaultLocale ? '' : "/".concat(this.locale)).concat(asNoBasePath === '/' ? '' : asNoBasePath) || '/')); // this was previously a return but was removed in favor
                      // of better dead code elimination with regenerator runtime

                      didNavigate = true;
                    }
                  }

                  if (!didNavigate) {
                    _context.next = 18;
                    break;
                  }

                  return _context.abrupt("return", new Promise(function () {}));

                case 18:
                  if (!options._h) {
                    this.isSsr = false;
                  } // marking route changes as a navigation start entry


                  if (utils.ST) {
                    performance.mark('routeChange');
                  }

                  _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                  routeProps = {
                    shallow: shallow
                  };

                  if (this._inFlightRoute) {
                    this.abortComponentLoad(this._inFlightRoute, routeProps);
                  }

                  as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
                  cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
                  this._inFlightRoute = as; // If the url change is only related to a hash change
                  // We should not proceed. We should only change the state.
                  // WARNING: `_h` is an internal option for handing Next.js client-side
                  // hydration. Your app should _never_ use this property. It may change at
                  // any time without notice.

                  if (!(!options._h && this.onlyAHashChange(cleanedAs))) {
                    _context.next = 34;
                    break;
                  }

                  this.asPath = cleanedAs;
                  Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

                  this.changeState(method, url, as, options);
                  this.scrollToHash(cleanedAs);
                  this.notify(this.components[this.route], null);
                  Router.events.emit('hashChangeComplete', as, routeProps);
                  return _context.abrupt("return", true);

                case 34:
                  parsed = (0, parseRelativeUrl_1.parseRelativeUrl)(url);
                  _parsed = parsed, pathname = _parsed.pathname, query = _parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                  // get their query parameters to allow ensuring they can be parsed properly
                  // when rewritten to

                  _context.prev = 36;
                  _context.next = 39;
                  return this.pageLoader.getPageList();

                case 39:
                  pages = _context.sent;
                  _context.next = 42;
                  return (0, routeLoader.getClientBuildManifest)();

                case 42:
                  _yield = _context.sent;
                  rewrites = _yield.__rewrites;
                  _context.next = 50;
                  break;

                case 46:
                  _context.prev = 46;
                  _context.t0 = _context["catch"](36);
                  // If we fail to resolve the page list or client-build manifest, we must
                  // do a server-side transition:
                  window.location.href = as;
                  return _context.abrupt("return", false);

                case 50:
                  parsed = resolveDynamicRoute(parsed, pages);

                  if (parsed.pathname !== pathname) {
                    pathname = parsed.pathname;
                    url = (0, utils.formatWithValidation)(parsed);
                  } // url and as should always be prefixed with basePath by this
                  // point by either next/link or router.push/replace so strip the
                  // basePath from the pathname to match the pages dir 1-to-1


                  pathname = pathname ? (0, normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
                  // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                  // We also need to set the method = replaceState always
                  // as this should not go into the history (That's how browsers work)
                  // We should compare the new asPath to the current asPath, not the url

                  if (!this.urlIsNew(cleanedAs) && !localeChange) {
                    method = 'replaceState';
                  }

                  route = (0, normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
                  // pages to allow building the data URL correctly

                  resolvedAs = as;

                  if (process.env.__NEXT_HAS_REWRITES && as.startsWith('/')) {
                    rewritesResult = (0, _resolveRewrites["default"])(addBasePath(addLocale(delBasePath(as), this.locale)), pages, rewrites, query, function (p) {
                      return resolveDynamicRoute({
                        pathname: p
                      }, pages).pathname;
                    }, this.locales);
                    resolvedAs = rewritesResult.asPath;

                    if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                      // if this directly matches a page we need to update the href to
                      // allow the correct page chunk to be loaded
                      route = rewritesResult.resolvedHref;
                      pathname = rewritesResult.resolvedHref;
                      parsed.pathname = pathname;
                      url = (0, utils.formatWithValidation)(parsed);
                    }
                  }

                  if (isLocalURL(as)) {
                    _context.next = 62;
                    break;
                  }

                  if (!(process.env.NODE_ENV !== 'production')) {
                    _context.next = 60;
                    break;
                  }

                  throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as");

                case 60:
                  window.location.href = as;
                  return _context.abrupt("return", false);

                case 62:
                  resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

                  if (!(0, isDynamic.isDynamicRoute)(route)) {
                    _context.next = 78;
                    break;
                  }

                  _parsedAs = (0, parseRelativeUrl_1.parseRelativeUrl)(resolvedAs);
                  asPathname = _parsedAs.pathname;
                  routeRegex$1 = (0, routeRegex.getRouteRegex)(route);
                  routeMatch = (0, routeMatcher.getRouteMatcher)(routeRegex$1)(asPathname);
                  shouldInterpolate = route === asPathname;
                  interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                  if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                    _context.next = 77;
                    break;
                  }

                  missingParams = Object.keys(routeRegex$1.groups).filter(function (param) {
                    return !query[param];
                  });

                  if (!(missingParams.length > 0)) {
                    _context.next = 75;
                    break;
                  }

                  if (process.env.NODE_ENV !== 'production') {
                    console.warn("".concat(shouldInterpolate ? "Interpolating href" : "Mismatching `as` and `href`", " failed to manually provide ") + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
                  }

                  throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://err.sh/vercel/next.js/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

                case 75:
                  _context.next = 78;
                  break;

                case 77:
                  if (shouldInterpolate) {
                    as = (0, utils.formatWithValidation)(Object.assign({}, _parsedAs, {
                      pathname: interpolatedAs.result,
                      query: omitParmsFromQuery(query, interpolatedAs.params)
                    }));
                  } else {
                    // Merge params into `query`, overwriting any specified in search
                    Object.assign(query, routeMatch);
                  }

                case 78:
                  Router.events.emit('routeChangeStart', as, routeProps);
                  _context.prev = 79;
                  _context.next = 82;
                  return this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);

                case 82:
                  routeInfo = _context.sent;
                  _routeInfo = routeInfo, error = _routeInfo.error, props = _routeInfo.props, __N_SSG = _routeInfo.__N_SSG, __N_SSP = _routeInfo.__N_SSP; // handle redirect on client-transition

                  if (!((__N_SSG || __N_SSP) && props)) {
                    _context.next = 109;
                    break;
                  }

                  if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                    _context.next = 95;
                    break;
                  }

                  destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                  // client-navigation if it is falling back to hard navigation if
                  // it's not

                  if (!destination.startsWith('/')) {
                    _context.next = 93;
                    break;
                  }

                  parsedHref = (0, parseRelativeUrl_1.parseRelativeUrl)(destination);
                  resolveDynamicRoute(parsedHref, pages, false);

                  if (!pages.includes(parsedHref.pathname)) {
                    _context.next = 93;
                    break;
                  }

                  _prepareUrlAs3 = prepareUrlAs(this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                  return _context.abrupt("return", this.change(method, newUrl, newAs, options));

                case 93:
                  window.location.href = destination;
                  return _context.abrupt("return", new Promise(function () {}));

                case 95:
                  this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                  if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                    _context.next = 109;
                    break;
                  }

                  _context.prev = 97;
                  _context.next = 100;
                  return this.fetchComponent('/404');

                case 100:
                  notFoundRoute = '/404';
                  _context.next = 106;
                  break;

                case 103:
                  _context.prev = 103;
                  _context.t1 = _context["catch"](97);
                  notFoundRoute = '/_error';

                case 106:
                  _context.next = 108;
                  return this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
                    shallow: false
                  });

                case 108:
                  routeInfo = _context.sent;

                case 109:
                  Router.events.emit('beforeHistoryChange', as, routeProps);
                  this.changeState(method, url, as, options);

                  if (process.env.NODE_ENV !== 'production') {
                    appComp = this.components['/_app'].Component;
                    window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
                  } // shallow routing is only allowed for same page URL changes.


                  isValidShallowRoute = options.shallow && this.route === route;

                  if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
                    // ensure statusCode is still correct for static 500 page
                    // when updating query information
                    props.pageProps.statusCode = 500;
                  }

                  _context.next = 116;
                  return this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
                    x: 0,
                    y: 0
                  }))["catch"](function (e) {
                    if (e.cancelled) error = error || e;else throw e;
                  });

                case 116:
                  if (!error) {
                    _context.next = 119;
                    break;
                  }

                  Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                  throw error;

                case 119:
                  if (process.env.__NEXT_I18N_SUPPORT) {
                    if (this.locale) {
                      document.documentElement.lang = this.locale;
                    }
                  }

                  Router.events.emit('routeChangeComplete', as, routeProps);
                  return _context.abrupt("return", true);

                case 124:
                  _context.prev = 124;
                  _context.t2 = _context["catch"](79);

                  if (!_context.t2.cancelled) {
                    _context.next = 128;
                    break;
                  }

                  return _context.abrupt("return", false);

                case 128:
                  throw _context.t2;

                case 129:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[36, 46], [79, 124], [97, 103]]);
        }));

        function change(_x, _x2, _x3, _x4, _x5) {
          return _change.apply(this, arguments);
        }

        return change;
      }()
    }, {
      key: "changeState",
      value: function changeState(method, url, as) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        if (process.env.NODE_ENV !== 'production') {
          if (typeof window.history === 'undefined') {
            console.error("Warning: window.history is not available.");
            return;
          }

          if (typeof window.history[method] === 'undefined') {
            console.error("Warning: window.history.".concat(method, " is not available"));
            return;
          }
        }

        if (method !== 'pushState' || (0, utils.getURL)() !== as) {
          this._shallow = options.shallow;
          window.history[method]({
            url: url,
            as: as,
            options: options,
            __N: true,
            idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
          }, // Most browsers currently ignores this parameter, although they may use it in the future.
          // Passing the empty string here should be safe against future changes to the method.
          // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
          '', as);
        }
      }
    }, {
      key: "handleRouteInfoError",
      value: function () {
        var _handleRouteInfoError = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(err, pathname, query, as, routeProps, loadErrorFail) {
          var Component, styleSheets, props, _yield$this$fetchComp, routeInfo;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!err.cancelled) {
                    _context2.next = 2;
                    break;
                  }

                  throw err;

                case 2:
                  if (!((0, routeLoader.isAssetError)(err) || loadErrorFail)) {
                    _context2.next = 6;
                    break;
                  }

                  Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
                  //  1. Page doesn't exists
                  //  2. Page does exist in a different zone
                  //  3. Internal error while loading the page
                  // So, doing a hard reload is the proper way to deal with this.

                  window.location.href = as; // Changing the URL doesn't block executing the current code path.
                  // So let's throw a cancellation error stop the routing logic.

                  throw buildCancellationError();

                case 6:
                  _context2.prev = 6;

                  if (!(typeof Component === 'undefined' || typeof styleSheets === 'undefined')) {
                    _context2.next = 14;
                    break;
                  }
                  _context2.next = 11;
                  return this.fetchComponent('/_error');

                case 11:
                  _yield$this$fetchComp = _context2.sent;
                  Component = _yield$this$fetchComp.page;
                  styleSheets = _yield$this$fetchComp.styleSheets;

                case 14:
                  routeInfo = {
                    props: props,
                    Component: Component,
                    styleSheets: styleSheets,
                    err: err,
                    error: err
                  };

                  if (routeInfo.props) {
                    _context2.next = 26;
                    break;
                  }

                  _context2.prev = 16;
                  _context2.next = 19;
                  return this.getInitialProps(Component, {
                    err: err,
                    pathname: pathname,
                    query: query
                  });

                case 19:
                  routeInfo.props = _context2.sent;
                  _context2.next = 26;
                  break;

                case 22:
                  _context2.prev = 22;
                  _context2.t0 = _context2["catch"](16);
                  console.error('Error in error page `getInitialProps`: ', _context2.t0);
                  routeInfo.props = {};

                case 26:
                  return _context2.abrupt("return", routeInfo);

                case 29:
                  _context2.prev = 29;
                  _context2.t1 = _context2["catch"](6);
                  return _context2.abrupt("return", this.handleRouteInfoError(_context2.t1, pathname, query, as, routeProps, true));

                case 32:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[6, 29], [16, 22]]);
        }));

        function handleRouteInfoError(_x6, _x7, _x8, _x9, _x10, _x11) {
          return _handleRouteInfoError.apply(this, arguments);
        }

        return handleRouteInfoError;
      }()
    }, {
      key: "getRouteInfo",
      value: function () {
        var _getRouteInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(route, pathname, query, as, resolvedAs, routeProps) {
          var _this2 = this;

          var existingRouteInfo, cachedRouteInfo, routeInfo, Component, __N_SSG, __N_SSP, isValidElementType, dataHref, props;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  existingRouteInfo = this.components[route];

                  if (!(routeProps.shallow && existingRouteInfo && this.route === route)) {
                    _context3.next = 4;
                    break;
                  }

                  return _context3.abrupt("return", existingRouteInfo);

                case 4:
                  cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;

                  if (!cachedRouteInfo) {
                    _context3.next = 9;
                    break;
                  }

                  _context3.t0 = cachedRouteInfo;
                  _context3.next = 12;
                  break;

                case 9:
                  _context3.next = 11;
                  return this.fetchComponent(route).then(function (res) {
                    return {
                      Component: res.page,
                      styleSheets: res.styleSheets,
                      __N_SSG: res.mod.__N_SSG,
                      __N_SSP: res.mod.__N_SSP
                    };
                  });

                case 11:
                  _context3.t0 = _context3.sent;

                case 12:
                  routeInfo = _context3.t0;
                  Component = routeInfo.Component, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP;

                  if (!(process.env.NODE_ENV !== 'production')) {
                    _context3.next = 18;
                    break;
                  }

                  isValidElementType = reactIs.isValidElementType;

                  if (isValidElementType(Component)) {
                    _context3.next = 18;
                    break;
                  }

                  throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

                case 18:
                  if (__N_SSG || __N_SSP) {
                    dataHref = this.pageLoader.getDataHref((0, utils.formatWithValidation)({
                      pathname: pathname,
                      query: query
                    }), resolvedAs, __N_SSG, this.locale);
                  }

                  _context3.next = 21;
                  return this._getData(function () {
                    return __N_SSG ? _this2._getStaticData(dataHref) : __N_SSP ? _this2._getServerData(dataHref) : _this2.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
                    {
                      pathname: pathname,
                      query: query,
                      asPath: as
                    });
                  });

                case 21:
                  props = _context3.sent;
                  routeInfo.props = props;
                  this.components[route] = routeInfo;
                  return _context3.abrupt("return", routeInfo);

                case 27:
                  _context3.prev = 27;
                  _context3.t1 = _context3["catch"](0);
                  return _context3.abrupt("return", this.handleRouteInfoError(_context3.t1, pathname, query, as, routeProps));

                case 30:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[0, 27]]);
        }));

        function getRouteInfo(_x12, _x13, _x14, _x15, _x16, _x17) {
          return _getRouteInfo.apply(this, arguments);
        }

        return getRouteInfo;
      }()
    }, {
      key: "set",
      value: function set(route, pathname, query, as, data, resetScroll) {
        this.isFallback = false;
        this.route = route;
        this.pathname = pathname;
        this.query = query;
        this.asPath = as;
        return this.notify(data, resetScroll);
      }
      /**
      * Callback to execute before replacing router state
      * @param cb callback to be executed
      */

    }, {
      key: "beforePopState",
      value: function beforePopState(cb) {
        this._bps = cb;
      }
    }, {
      key: "onlyAHashChange",
      value: function onlyAHashChange(as) {
        if (!this.asPath) return false;

        var _this$asPath$split = this.asPath.split('#'),
            _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
            oldUrlNoHash = _this$asPath$split2[0],
            oldHash = _this$asPath$split2[1];

        var _as$split = as.split('#'),
            _as$split2 = _slicedToArray(_as$split, 2),
            newUrlNoHash = _as$split2[0],
            newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
          return true;
        } // If the urls are change, there's more than a hash change


        if (oldUrlNoHash !== newUrlNoHash) {
          return false;
        } // If the hash has changed, then it's a hash only change.
        // This check is necessary to handle both the enter and
        // leave hash === '' cases. The identity case falls through
        // and is treated as a next reload.


        return oldHash !== newHash;
      }
    }, {
      key: "scrollToHash",
      value: function scrollToHash(as) {
        var _as$split3 = as.split('#'),
            _as$split4 = _slicedToArray(_as$split3, 2),
            hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value or `#top`
        // To mirror browsers


        if (hash === '' || hash === 'top') {
          window.scrollTo(0, 0);
          return;
        } // First we check if the element by id is found


        var idEl = document.getElementById(hash);

        if (idEl) {
          idEl.scrollIntoView();
          return;
        } // If there's no element with the id, we check the `name` property
        // To mirror browsers


        var nameEl = document.getElementsByName(hash)[0];

        if (nameEl) {
          nameEl.scrollIntoView();
        }
      }
    }, {
      key: "urlIsNew",
      value: function urlIsNew(asPath) {
        return this.asPath !== asPath;
      }
      /**
      * Prefetch page code, you may wait for the data during page rendering.
      * This feature only works in production!
      * @param url the href of prefetched page
      * @param asPath the as path of the prefetched page
      */

    }, {
      key: "prefetch",
      value: function () {
        var _prefetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url) {
          var _this3 = this;

          var asPath,
              options,
              parsed,
              _parsed2,
              pathname,
              parsedAs,
              localePathResult,
              pages,
              route,
              resolvedAs,
              rewrites,
              _yield2,
              rewritesResult,
              _args4 = arguments;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  asPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : url;
                  options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                  parsed = (0, parseRelativeUrl_1.parseRelativeUrl)(url);
                  _parsed2 = parsed, pathname = _parsed2.pathname;

                  if (process.env.__NEXT_I18N_SUPPORT) {
                    if (options.locale === false) {
                      pathname = (0, normalizeLocalePath_1.normalizeLocalePath)(pathname, this.locales).pathname;
                      parsed.pathname = pathname;
                      url = (0, utils.formatWithValidation)(parsed);
                      parsedAs = (0, parseRelativeUrl_1.parseRelativeUrl)(asPath);
                      localePathResult = (0, normalizeLocalePath_1.normalizeLocalePath)(parsedAs.pathname, this.locales);
                      parsedAs.pathname = localePathResult.pathname;
                      options.locale = localePathResult.detectedLocale || this.defaultLocale;
                      asPath = (0, utils.formatWithValidation)(parsedAs);
                    }
                  }

                  _context4.next = 7;
                  return this.pageLoader.getPageList();

                case 7:
                  pages = _context4.sent;
                  parsed = resolveDynamicRoute(parsed, pages, false);

                  if (parsed.pathname !== pathname) {
                    pathname = parsed.pathname;
                    url = (0, utils.formatWithValidation)(parsed);
                  }

                  route = (0, normalizeTrailingSlash.removePathTrailingSlash)(pathname);
                  resolvedAs = asPath;

                  if (!(process.env.__NEXT_HAS_REWRITES && asPath.startsWith('/'))) {
                    _context4.next = 19;
                    break;
                  }

                  _context4.next = 15;
                  return (0, routeLoader.getClientBuildManifest)();

                case 15:
                  _yield2 = _context4.sent;
                  rewrites = _yield2.__rewrites;
                  rewritesResult = (0, _resolveRewrites["default"])(addBasePath(addLocale(delBasePath(asPath), this.locale)), pages, rewrites, parsed.query, function (p) {
                    return resolveDynamicRoute({
                      pathname: p
                    }, pages).pathname;
                  }, this.locales);

                  if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                    // if this directly matches a page we need to update the href to
                    // allow the correct page chunk to be loaded
                    route = rewritesResult.resolvedHref;
                    pathname = rewritesResult.resolvedHref;
                    parsed.pathname = pathname;
                    url = (0, utils.formatWithValidation)(parsed);
                    resolvedAs = rewritesResult.asPath;
                  }

                case 19:
                  if (!(process.env.NODE_ENV !== 'production')) {
                    _context4.next = 21;
                    break;
                  }

                  return _context4.abrupt("return");

                case 21:
                  _context4.next = 23;
                  return Promise.all([this.pageLoader._isSsg(url).then(function (isSsg) {
                    return isSsg ? _this3._getStaticData(_this3.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : _this3.locale)) : false;
                  }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

                case 23:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function prefetch(_x18) {
          return _prefetch.apply(this, arguments);
        }

        return prefetch;
      }()
    }, {
      key: "fetchComponent",
      value: function () {
        var _fetchComponent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(route) {
          var cancelled, cancel, componentResult, error;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  cancelled = false;

                  cancel = this.clc = function () {
                    cancelled = true;
                  };

                  _context5.next = 4;
                  return this.pageLoader.loadPage(route);

                case 4:
                  componentResult = _context5.sent;

                  if (!cancelled) {
                    _context5.next = 9;
                    break;
                  }

                  error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                  error.cancelled = true;
                  throw error;

                case 9:
                  if (cancel === this.clc) {
                    this.clc = null;
                  }

                  return _context5.abrupt("return", componentResult);

                case 11:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function fetchComponent(_x19) {
          return _fetchComponent.apply(this, arguments);
        }

        return fetchComponent;
      }()
    }, {
      key: "_getData",
      value: function _getData(fn) {
        var _this4 = this;

        var cancelled = false;

        var cancel = function cancel() {
          cancelled = true;
        };

        this.clc = cancel;
        return fn().then(function (data) {
          if (cancel === _this4.clc) {
            _this4.clc = null;
          }

          if (cancelled) {
            var err = new Error('Loading initial props cancelled');
            err.cancelled = true;
            throw err;
          }

          return data;
        });
      }
    }, {
      key: "_getStaticData",
      value: function _getStaticData(dataHref) {
        var _this5 = this;

        var _URL = new URL(dataHref, window.location.href),
            cacheKey = _URL.href;

        if (process.env.NODE_ENV === 'production' && !this.isPreview && this.sdc[cacheKey]) {
          return Promise.resolve(this.sdc[cacheKey]);
        }

        return fetchNextData(dataHref, this.isSsr).then(function (data) {
          _this5.sdc[cacheKey] = data;
          return data;
        });
      }
    }, {
      key: "_getServerData",
      value: function _getServerData(dataHref) {
        return fetchNextData(dataHref, this.isSsr);
      }
    }, {
      key: "getInitialProps",
      value: function getInitialProps(Component, ctx) {
        var App = this.components['/_app'].Component;

        var AppTree = this._wrapApp(App);

        ctx.AppTree = AppTree;
        return (0, utils.loadGetInitialProps)(App, {
          AppTree: AppTree,
          Component: Component,
          router: this,
          ctx: ctx
        });
      }
    }, {
      key: "abortComponentLoad",
      value: function abortComponentLoad(as, routeProps) {
        if (this.clc) {
          Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
          this.clc();
          this.clc = null;
        }
      }
    }, {
      key: "notify",
      value: function notify(data, resetScroll) {
        return this.sub(data, this.components['/_app'].Component, resetScroll);
      }
    }]);

    return Router;
  }();

  exports["default"] = Router;
  Router.events = (0, _mitt["default"])();
});

var routerContext = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.RouterContext = void 0;

  var _react = _interopRequireDefault(require$$0__default['default']);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  var RouterContext = /*#__PURE__*/_react["default"].createContext(null);

  exports.RouterContext = RouterContext;

  if (process.env.NODE_ENV !== 'production') {
    RouterContext.displayName = 'RouterContext';
  }
});

var _default = withRouter;

var _react = interopRequireDefault(require$$0__default['default']);

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, router$1.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (process.env.NODE_ENV !== 'production') {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

var withRouter_1 = /*#__PURE__*/Object.defineProperty({
  "default": _default
}, '__esModule', {
  value: true
});

var router$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.useRouter = useRouter;
  exports.makePublicRouterInstance = makePublicRouterInstance;
  exports.createRouter = exports.withRouter = exports["default"] = void 0;

  var _react = interopRequireDefault(require$$0__default['default']);

  var _router2 = interopRequireWildcard(router$2);

  exports.Router = _router2["default"];
  exports.NextRouter = _router2.NextRouter;

  var _withRouter = interopRequireDefault(withRouter_1);

  exports.withRouter = _withRouter["default"];
  /* global window */

  var singletonRouter = {
    router: null,
    // holds the actual router instance
    readyCallbacks: [],
    ready: function ready(cb) {
      if (this.router) return cb();

      if (typeof window !== 'undefined') {
        this.readyCallbacks.push(cb);
      }
    }
  }; // Create public properties and methods of the router in the singletonRouter

  var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
  var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
  var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

  Object.defineProperty(singletonRouter, 'events', {
    get: function get() {
      return _router2["default"].events;
    }
  });
  urlPropertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    Object.defineProperty(singletonRouter, field, {
      get: function get() {
        var router = getRouter();
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {

    singletonRouter[field] = function () {
      var router = getRouter();
      return router[field].apply(router, arguments);
    };
  });
  routerEvents.forEach(function (event) {
    singletonRouter.ready(function () {
      _router2["default"].events.on(event, function () {
        var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
        var _singletonRouter = singletonRouter;

        if (_singletonRouter[eventField]) {
          try {
            _singletonRouter[eventField].apply(_singletonRouter, arguments);
          } catch (err) {
            console.error("Error when running the Router event: ".concat(eventField));
            console.error("".concat(err.message, "\n").concat(err.stack));
          }
        }
      });
    });
  });

  function getRouter() {
    if (!singletonRouter.router) {
      var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
      throw new Error(message);
    }

    return singletonRouter.router;
  } // Export the singletonRouter and this is the public API.


  var _default = singletonRouter; // Reexport the withRoute HOC

  exports["default"] = _default;

  function useRouter() {
    return _react["default"].useContext(routerContext.RouterContext);
  } // INTERNAL APIS
  // -------------
  // (do not use following exports inside the app)
  // Create a router and assign it as the singleton instance.
  // This is used in client side when we are initilizing the app.
  // This should **not** use inside the server.


  var createRouter = function createRouter() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    singletonRouter.router = _construct(_router2["default"], args);
    singletonRouter.readyCallbacks.forEach(function (cb) {
      return cb();
    });
    singletonRouter.readyCallbacks = [];
    return singletonRouter.router;
  }; // This function is used to create the `withRouter` router instance


  exports.createRouter = createRouter;

  function makePublicRouterInstance(router) {
    var _router = router;
    var instance = {};

    var _iterator = _createForOfIteratorHelper(urlPropertyFields),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var property = _step.value;

        if (_typeof(_router[property]) === 'object') {
          instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

          continue;
        }

        instance[property] = _router[property];
      } // Events is a static property on the router, the router doesn't have to be initialized to use it

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    instance.events = _router2["default"].events;
    coreMethodFields.forEach(function (field) {
      instance[field] = function () {
        return _router[field].apply(_router, arguments);
      };
    });
    return instance;
  }
});

var router = router$1;

function stripOrigin(url) {
    const origin = utils.getLocationOrigin();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
}
function prepareUrlAs(router, url, as) {
    let [resolvedHref, resolvedAs] = router$2.resolveHref(router.pathname, url, true);
    const origin = utils.getLocationOrigin();
    const hrefHadOrigin = resolvedHref.startsWith(origin);
    const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    const preparedUrl = hrefHadOrigin ? resolvedHref : router$2.addBasePath(resolvedHref);
    const preparedAs = as
        ? stripOrigin(router$2.resolveHref(router.pathname, as))
        : resolvedAs || resolvedHref;
    return {
        url: preparedUrl,
        as: asHadOrigin ? preparedAs : router$2.addBasePath(preparedAs),
    };
}

function usePrefetchRouter(prefetchRouterOptions) {
    const router$1 = router.useRouter();
    const handleRouterPush = (event) => {
        event.preventDefault();
        router$1.push(prefetchRouterOptions.url, prefetchRouterOptions.as, prefetchRouterOptions.options);
    };
    const prefetchTarget = require$$0.useRef(null);
    const prefetchLink = () => {
        if (typeof prefetchRouterOptions.url === "string") {
            return {
                url: prefetchRouterOptions.url,
            };
        }
        else {
            const { url, as } = prepareUrlAs(router$1, prefetchRouterOptions.url, prefetchRouterOptions.as);
            return {
                url,
                as,
            };
        }
    };
    const prefetch = () => {
        router$1.prefetch(prefetchLink().url, prefetchLink().as);
    };
    require$$0.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    prefetch();
                }
            });
        });
        if (prefetchTarget.current) {
            observer.observe(prefetchTarget.current);
        }
    }, []);
    return {
        handleRouterPush,
        prefetchTarget,
    };
}

module.exports = usePrefetchRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcyIsIi4uL3NyYy9saWIvcHJlcGFyZVVybEFzLnRzIiwiLi4vc3JjL3VzZVByZWZldGNoUm91dGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PWdldEFzc2V0UGF0aEZyb21Sb3V0ZTsvLyBUcmFuc2xhdGVzIGEgbG9naWNhbCByb3V0ZSBpbnRvIGl0cyBwYWdlcyBhc3NldCBwYXRoIChyZWxhdGl2ZSBmcm9tIGEgY29tbW9uIHByZWZpeClcbi8vIFwiYXNzZXQgcGF0aFwiIGJlaW5nIGl0cyBqYXZhc2NyaXB0IGZpbGUsIGRhdGEgZmlsZSwgcHJlcmVuZGVyZWQgaHRtbCwuLi5cbmZ1bmN0aW9uIGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSxleHQ9Jycpe2NvbnN0IHBhdGg9cm91dGU9PT0nLyc/Jy9pbmRleCc6L15cXC9pbmRleChcXC98JCkvLnRlc3Qocm91dGUpP2AvaW5kZXgke3JvdXRlfWA6YCR7cm91dGV9YDtyZXR1cm4gcGF0aCtleHQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7dmFyIGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixjPWI/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsZD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsZT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxmPWI/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGc9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsaD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxrPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsbD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLG09Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLG49Yj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIscD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxxPWI/XG5TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTo2MDEyMCxyPWI/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6NjAxMTUsdD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2LHY9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYmxvY2tcIik6NjAxMjEsdz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mdW5kYW1lbnRhbFwiKTo2MDExNyx4PWI/U3ltYm9sLmZvcihcInJlYWN0LnJlc3BvbmRlclwiKTo2MDExOCx5PWI/U3ltYm9sLmZvcihcInJlYWN0LnNjb3BlXCIpOjYwMTE5O1xuZnVuY3Rpb24geihhKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXt2YXIgdT1hLiQkdHlwZW9mO3N3aXRjaCh1KXtjYXNlIGM6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgbDpjYXNlIG06Y2FzZSBlOmNhc2UgZzpjYXNlIGY6Y2FzZSBwOnJldHVybiBhO2RlZmF1bHQ6c3dpdGNoKGE9YSYmYS4kJHR5cGVvZixhKXtjYXNlIGs6Y2FzZSBuOmNhc2UgdDpjYXNlIHI6Y2FzZSBoOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuIHV9fWNhc2UgZDpyZXR1cm4gdX19fWZ1bmN0aW9uIEEoYSl7cmV0dXJuIHooYSk9PT1tfWV4cG9ydHMuQXN5bmNNb2RlPWw7ZXhwb3J0cy5Db25jdXJyZW50TW9kZT1tO2V4cG9ydHMuQ29udGV4dENvbnN1bWVyPWs7ZXhwb3J0cy5Db250ZXh0UHJvdmlkZXI9aDtleHBvcnRzLkVsZW1lbnQ9YztleHBvcnRzLkZvcndhcmRSZWY9bjtleHBvcnRzLkZyYWdtZW50PWU7ZXhwb3J0cy5MYXp5PXQ7ZXhwb3J0cy5NZW1vPXI7ZXhwb3J0cy5Qb3J0YWw9ZDtcbmV4cG9ydHMuUHJvZmlsZXI9ZztleHBvcnRzLlN0cmljdE1vZGU9ZjtleHBvcnRzLlN1c3BlbnNlPXA7ZXhwb3J0cy5pc0FzeW5jTW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gQShhKXx8eihhKT09PWx9O2V4cG9ydHMuaXNDb25jdXJyZW50TW9kZT1BO2V4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1rfTtleHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09aH07ZXhwb3J0cy5pc0VsZW1lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWN9O2V4cG9ydHMuaXNGb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09bn07ZXhwb3J0cy5pc0ZyYWdtZW50PWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09ZX07ZXhwb3J0cy5pc0xhenk9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT10fTtcbmV4cG9ydHMuaXNNZW1vPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09cn07ZXhwb3J0cy5pc1BvcnRhbD1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWR9O2V4cG9ydHMuaXNQcm9maWxlcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWd9O2V4cG9ydHMuaXNTdHJpY3RNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09Zn07ZXhwb3J0cy5pc1N1c3BlbnNlPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09cH07XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZT1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfHxhPT09ZXx8YT09PW18fGE9PT1nfHxhPT09Znx8YT09PXB8fGE9PT1xfHxcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiYoYS4kJHR5cGVvZj09PXR8fGEuJCR0eXBlb2Y9PT1yfHxhLiQkdHlwZW9mPT09aHx8YS4kJHR5cGVvZj09PWt8fGEuJCR0eXBlb2Y9PT1ufHxhLiQkdHlwZW9mPT09d3x8YS4kJHR5cGVvZj09PXh8fGEuJCR0eXBlb2Y9PT15fHxhLiQkdHlwZW9mPT09dil9O2V4cG9ydHMudHlwZU9mPXo7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L3JvdXRlcicpXG4iLCJpbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIjtcbmltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHNcIjtcblxuaW1wb3J0IHR5cGUgeyBOZXh0Um91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgdHlwZSB7IFVybCB9IGZyb20gXCIuLi91c2VQcmVmZXRjaFJvdXRlclwiO1xuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSk7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH07XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBwcmVwYXJlVXJsQXMgfSBmcm9tIFwiLi9saWIvcHJlcGFyZVVybEFzXCI7XG5cbmltcG9ydCB0eXBlIHsgUmVhY3RFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgVXJsT2JqZWN0IH0gZnJvbSBcInVybFwiO1xuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZztcblxudHlwZSBUcmFuc2l0aW9uT3B0aW9ucyA9IHtcbiAgc2hhbGxvdz86IGJvb2xlYW47XG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlO1xuICBzY3JvbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hSb3V0ZXJPcHRpb25zID0ge1xuICB1cmw6IFVybDtcbiAgYXM/OiBzdHJpbmcgfCBVcmxPYmplY3QgfCB1bmRlZmluZWQ7XG4gIG9wdGlvbnM/OiBUcmFuc2l0aW9uT3B0aW9ucyB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcmVmZXRjaFJvdXRlcjxUIGV4dGVuZHMgRWxlbWVudD4oXG4gIHByZWZldGNoUm91dGVyT3B0aW9uczogUHJlZmV0Y2hSb3V0ZXJPcHRpb25zXG4pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlUm91dGVyUHVzaDogUmVhY3RFdmVudEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJvdXRlci5wdXNoKFxuICAgICAgcHJlZmV0Y2hSb3V0ZXJPcHRpb25zLnVybCxcbiAgICAgIHByZWZldGNoUm91dGVyT3B0aW9ucy5hcyxcbiAgICAgIHByZWZldGNoUm91dGVyT3B0aW9ucy5vcHRpb25zXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBwcmVmZXRjaFRhcmdldCA9IHVzZVJlZjxUIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHByZWZldGNoTGluayA9ICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHByZWZldGNoUm91dGVyT3B0aW9ucy51cmwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlZmV0Y2hSb3V0ZXJPcHRpb25zLnVybCxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByZWZldGNoUm91dGVyT3B0aW9ucy51cmwsXG4gICAgICAgIHByZWZldGNoUm91dGVyT3B0aW9ucy5hc1xuICAgICAgKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybCxcbiAgICAgICAgYXMsXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJlZmV0Y2ggPSAoKSA9PiB7XG4gICAgcm91dGVyLnByZWZldGNoKHByZWZldGNoTGluaygpLnVybCwgcHJlZmV0Y2hMaW5rKCkuYXMpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHByZWZldGNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChwcmVmZXRjaFRhcmdldC5jdXJyZW50KSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHByZWZldGNoVGFyZ2V0LmN1cnJlbnQpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgaGFuZGxlUm91dGVyUHVzaCxcbiAgICBwcmVmZXRjaFRhcmdldCxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJtb2R1bGUiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX19lc01vZHVsZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlJCQwIiwiVEVTVF9ST1VURSIsImxleGVyIiwic3RyIiwidG9rZW5zIiwiaSIsImxlbmd0aCIsImNoYXIiLCJwdXNoIiwidHlwZSIsImluZGV4IiwidmFsdWUiLCJuYW1lIiwiaiIsImNvZGUiLCJjaGFyQ29kZUF0IiwiVHlwZUVycm9yIiwiY291bnQiLCJwYXR0ZXJuIiwicGFyc2UiLCJvcHRpb25zIiwiX2EiLCJwcmVmaXhlcyIsImRlZmF1bHRQYXR0ZXJuIiwiZXNjYXBlU3RyaW5nIiwiZGVsaW1pdGVyIiwicmVzdWx0IiwicGF0aCIsInRyeUNvbnN1bWUiLCJtdXN0Q29uc3VtZSIsInVuZGVmaW5lZCIsIm5leHRUeXBlIiwiY29uc3VtZVRleHQiLCJwcmVmaXgiLCJpbmRleE9mIiwic3VmZml4IiwibW9kaWZpZXIiLCJvcGVuIiwibmFtZV8xIiwicGF0dGVybl8xIiwiY29tcGlsZSIsInRva2Vuc1RvRnVuY3Rpb24iLCJyZUZsYWdzIiwiZmxhZ3MiLCJlbmNvZGUiLCJ4IiwiX2IiLCJ2YWxpZGF0ZSIsIm1hdGNoZXMiLCJtYXAiLCJ0b2tlbiIsIlJlZ0V4cCIsImRhdGEiLCJvcHRpb25hbCIsInJlcGVhdCIsIkFycmF5IiwiaXNBcnJheSIsInNlZ21lbnQiLCJ0ZXN0IiwiU3RyaW5nIiwidHlwZU9mTWVzc2FnZSIsIm1hdGNoIiwia2V5cyIsInJlIiwicGF0aFRvUmVnZXhwIiwicmVnZXhwVG9GdW5jdGlvbiIsImRlY29kZSIsInBhdGhuYW1lIiwibSIsImV4ZWMiLCJwYXJhbXMiLCJjcmVhdGUiLCJfbG9vcF8xIiwic3BsaXQiLCJyZXBsYWNlIiwic2Vuc2l0aXZlIiwicmVnZXhwVG9SZWdleHAiLCJncm91cHMiLCJzb3VyY2UiLCJhcnJheVRvUmVnZXhwIiwicGF0aHMiLCJwYXJ0cyIsImpvaW4iLCJzdHJpbmdUb1JlZ2V4cCIsInRva2Vuc1RvUmVnZXhwIiwic3RyaWN0Iiwic3RhcnQiLCJfYyIsImVuZCIsIl9kIiwiZW5kc1dpdGgiLCJyb3V0ZSIsIl9pIiwidG9rZW5zXzEiLCJtb2QiLCJlbmRUb2tlbiIsImlzRW5kRGVsaW1pdGVkIiwiYiIsImMiLCJkIiwiZSIsImYiLCJnIiwiaCIsImsiLCJsIiwibiIsInAiLCJxIiwiciIsInQiLCJ2IiwidyIsInkiLCJ6IiwiYSIsInUiLCIkJHR5cGVvZiIsIkEiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJoYXNTeW1ib2wiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJSRUFDVF9QT1JUQUxfVFlQRSIsIlJFQUNUX0ZSQUdNRU5UX1RZUEUiLCJSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIiwiUkVBQ1RfUFJPRklMRVJfVFlQRSIsIlJFQUNUX1BST1ZJREVSX1RZUEUiLCJSRUFDVF9DT05URVhUX1RZUEUiLCJSRUFDVF9BU1lOQ19NT0RFX1RZUEUiLCJSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSIsIlJFQUNUX0ZPUldBUkRfUkVGX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIiwiUkVBQ1RfTUVNT19UWVBFIiwiUkVBQ1RfTEFaWV9UWVBFIiwiUkVBQ1RfQkxPQ0tfVFlQRSIsIlJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUiLCJSRUFDVF9SRVNQT05ERVJfVFlQRSIsIlJFQUNUX1NDT1BFX1RZUEUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJ0eXBlT2YiLCJvYmplY3QiLCIkJHR5cGVvZlR5cGUiLCJBc3luY01vZGUiLCJDb25jdXJyZW50TW9kZSIsIkNvbnRleHRDb25zdW1lciIsIkNvbnRleHRQcm92aWRlciIsIkVsZW1lbnQiLCJGb3J3YXJkUmVmIiwiRnJhZ21lbnQiLCJMYXp5IiwiTWVtbyIsIlBvcnRhbCIsIlByb2ZpbGVyIiwiU3RyaWN0TW9kZSIsIlN1c3BlbnNlIiwiaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUiLCJpc0FzeW5jTW9kZSIsImNvbnNvbGUiLCJpc0NvbmN1cnJlbnRNb2RlIiwiaXNDb250ZXh0Q29uc3VtZXIiLCJpc0NvbnRleHRQcm92aWRlciIsImlzRWxlbWVudCIsImlzRm9yd2FyZFJlZiIsImlzRnJhZ21lbnQiLCJpc0xhenkiLCJpc01lbW8iLCJpc1BvcnRhbCIsImlzUHJvZmlsZXIiLCJpc1N0cmljdE1vZGUiLCJpc1N1c3BlbnNlIiwiZXhwb3J0cyIsInJlcXVpcmUkJDEiLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVIcmVmIiwiYWRkQmFzZVBhdGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3Mi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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxJQUFBLFdBQUEsR0FBQSxTQUFBOztBQUFBLElBQUEsV0FBQSxHQUFBZCx5QkFBQSxDQUFBZSxhQUFBLENBQUE7O0FBQUEsU0FBQWxCLDBCQUFBLEdBQUE7QUFBQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFVBQUEsRUFBQSxPQUFBLElBQUE7QUFBQSxNQUFBLEtBQUEsR0FBQSxJQUFBLE9BQUEsRUFBQTs7QUFBQSxFQUFBQSwwQkFBQSxHQUFBLG9DQUFBO0FBQUEsV0FBQSxLQUFBO0FBQUEsR0FBQTs7QUFBQSxTQUFBLEtBQUE7QUFBQTs7QUFBQSxTQUFBRyx5QkFBQSxDQUFBLEdBQUEsRUFBQTtBQUFBLE1BQUEsR0FBQSxJQUFBLEdBQUEsQ0FBQSxVQUFBLEVBQUE7QUFBQSxXQUFBLEdBQUE7QUFBQTs7QUFBQSxNQUFBLEdBQUEsS0FBQSxJQUFBLElBQUEsUUFBQSxHQUFBLE1BQUEsUUFBQSxJQUFBLE9BQUEsR0FBQSxLQUFBLFVBQUEsRUFBQTtBQUFBLFdBQUE7QUFBQSxpQkFBQTtBQUFBLEtBQUE7QUFBQTs7QUFBQSxNQUFBLEtBQUEsR0FBQUgsMEJBQUEsRUFBQTs7QUFBQSxNQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBO0FBQUEsV0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBOztBQUFBLE1BQUEsTUFBQSxHQUFBLEVBQUE7QUFBQSxNQUFBLHFCQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsSUFBQSxNQUFBLENBQUEsd0JBQUE7O0FBQUEsT0FBQSxJQUFBLEdBQUEsSUFBQSxHQUFBLEVBQUE7QUFBQSxRQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLEVBQUE7QUFBQSxVQUFBLElBQUEsR0FBQSxxQkFBQSxHQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUEsR0FBQSxJQUFBOztBQUFBLFVBQUEsSUFBQSxLQUFBLElBQUEsQ0FBQSxHQUFBLElBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBO0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQTtBQUFBLE9BQUEsTUFBQTtBQUFBLFFBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsRUFBQSxNQUFBLFdBQUEsR0FBQSxHQUFBOztBQUFBLE1BQUEsS0FBQSxFQUFBO0FBQUEsSUFBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUEsU0FBQSxNQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEYsVUFBYyxHQUFHOUssUUFBakI7O0FDU0EsU0FBUyxXQUFXLENBQUMsR0FBVztJQUM5QixNQUFNLE1BQU0sR0FBRytLLHVCQUFpQixFQUFFLENBQUM7SUFFbkMsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNyRSxDQUFDO1NBRWUsWUFBWSxDQUFDLE1BQWtCLEVBQUUsR0FBUSxFQUFFLEVBQVE7SUFDakUsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsR0FBR0Msb0JBQVcsQ0FBQyxNQUFN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
