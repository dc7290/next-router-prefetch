
  /**
   * @license
   * @dc7290/next-router-prefetch v1.0.0
   * Released under the MIT License.
   */

import require$$0, { useRef, useEffect } from 'react';

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

  var _react = _interopRequireDefault(require$$0);

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

var _react = interopRequireDefault(require$$0);

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

  var _react = interopRequireDefault(require$$0);

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
    const prefetchTarget = useRef(null);
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
    useEffect(() => {
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

export default usePrefetchRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL25leHQvcm91dGVyLmpzIiwiLi4vc3JjL2xpYi9wcmVwYXJlVXJsQXMudHMiLCIuLi9zcmMvdXNlUHJlZmV0Y2hSb3V0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9Z2V0QXNzZXRQYXRoRnJvbVJvdXRlOy8vIFRyYW5zbGF0ZXMgYSBsb2dpY2FsIHJvdXRlIGludG8gaXRzIHBhZ2VzIGFzc2V0IHBhdGggKHJlbGF0aXZlIGZyb20gYSBjb21tb24gcHJlZml4KVxuLy8gXCJhc3NldCBwYXRoXCIgYmVpbmcgaXRzIGphdmFzY3JpcHQgZmlsZSwgZGF0YSBmaWxlLCBwcmVyZW5kZXJlZCBodG1sLC4uLlxuZnVuY3Rpb24gZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLGV4dD0nJyl7Y29uc3QgcGF0aD1yb3V0ZT09PScvJz8nL2luZGV4JzovXlxcL2luZGV4KFxcL3wkKS8udGVzdChyb3V0ZSk/YC9pbmRleCR7cm91dGV9YDpgJHtyb3V0ZX1gO3JldHVybiBwYXRoK2V4dDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0Jzt2YXIgYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLGM9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxkPWI/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixlPWI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGY9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsZz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxoPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGs9Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxsPWI/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsbT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHE9Yj9cblN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpOjYwMTIwLHI9Yj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSx0PWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsdj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5ibG9ja1wiKTo2MDEyMSx3PWI/U3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpOjYwMTE3LHg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucmVzcG9uZGVyXCIpOjYwMTE4LHk9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc2NvcGVcIik6NjAxMTk7XG5mdW5jdGlvbiB6KGEpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpe3ZhciB1PWEuJCR0eXBlb2Y7c3dpdGNoKHUpe2Nhc2UgYzpzd2l0Y2goYT1hLnR5cGUsYSl7Y2FzZSBsOmNhc2UgbTpjYXNlIGU6Y2FzZSBnOmNhc2UgZjpjYXNlIHA6cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIG46Y2FzZSB0OmNhc2UgcjpjYXNlIGg6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm4gdX19Y2FzZSBkOnJldHVybiB1fX19ZnVuY3Rpb24gQShhKXtyZXR1cm4geihhKT09PW19ZXhwb3J0cy5Bc3luY01vZGU9bDtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPW07ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aztleHBvcnRzLkNvbnRleHRQcm92aWRlcj1oO2V4cG9ydHMuRWxlbWVudD1jO2V4cG9ydHMuRm9yd2FyZFJlZj1uO2V4cG9ydHMuRnJhZ21lbnQ9ZTtleHBvcnRzLkxhenk9dDtleHBvcnRzLk1lbW89cjtleHBvcnRzLlBvcnRhbD1kO1xuZXhwb3J0cy5Qcm9maWxlcj1nO2V4cG9ydHMuU3RyaWN0TW9kZT1mO2V4cG9ydHMuU3VzcGVuc2U9cDtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiBBKGEpfHx6KGEpPT09bH07ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPUE7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWt9O2V4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1ofTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXR9O1xuZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1yfTtleHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09ZH07ZXhwb3J0cy5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09Z307ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1mfTtleHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1wfTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGF8fGE9PT1lfHxhPT09bXx8YT09PWd8fGE9PT1mfHxhPT09cHx8YT09PXF8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09dHx8YS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW58fGEuJCR0eXBlb2Y9PT13fHxhLiQkdHlwZW9mPT09eHx8YS4kJHR5cGVvZj09PXl8fGEuJCR0eXBlb2Y9PT12KX07ZXhwb3J0cy50eXBlT2Y9ejtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvcm91dGVyJylcbiIsImltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiO1xuaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlsc1wiO1xuXG5pbXBvcnQgdHlwZSB7IE5leHRSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB0eXBlIHsgVXJsIH0gZnJvbSBcIi4uL3VzZVByZWZldGNoUm91dGVyXCI7XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKTtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHByZXBhcmVVcmxBcyB9IGZyb20gXCIuL2xpYi9wcmVwYXJlVXJsQXNcIjtcblxuaW1wb3J0IHR5cGUgeyBSZWFjdEV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBVcmxPYmplY3QgfSBmcm9tIFwidXJsXCI7XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nO1xuXG50eXBlIFRyYW5zaXRpb25PcHRpb25zID0ge1xuICBzaGFsbG93PzogYm9vbGVhbjtcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2U7XG4gIHNjcm9sbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBQcmVmZXRjaFJvdXRlck9wdGlvbnMgPSB7XG4gIHVybDogVXJsO1xuICBhcz86IHN0cmluZyB8IFVybE9iamVjdCB8IHVuZGVmaW5lZDtcbiAgb3B0aW9ucz86IFRyYW5zaXRpb25PcHRpb25zIHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByZWZldGNoUm91dGVyPFQgZXh0ZW5kcyBFbGVtZW50PihcbiAgcHJlZmV0Y2hSb3V0ZXJPcHRpb25zOiBQcmVmZXRjaFJvdXRlck9wdGlvbnNcbikge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVSb3V0ZXJQdXNoOiBSZWFjdEV2ZW50SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcm91dGVyLnB1c2goXG4gICAgICBwcmVmZXRjaFJvdXRlck9wdGlvbnMudXJsLFxuICAgICAgcHJlZmV0Y2hSb3V0ZXJPcHRpb25zLmFzLFxuICAgICAgcHJlZmV0Y2hSb3V0ZXJPcHRpb25zLm9wdGlvbnNcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHByZWZldGNoVGFyZ2V0ID0gdXNlUmVmPFQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgcHJlZmV0Y2hMaW5rID0gKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgcHJlZmV0Y2hSb3V0ZXJPcHRpb25zLnVybCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVmZXRjaFJvdXRlck9wdGlvbnMudXJsLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJlZmV0Y2hSb3V0ZXJPcHRpb25zLnVybCxcbiAgICAgICAgcHJlZmV0Y2hSb3V0ZXJPcHRpb25zLmFzXG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXJsLFxuICAgICAgICBhcyxcbiAgICAgIH07XG4gICAgfVxuICB9O1xuICBjb25zdCBwcmVmZXRjaCA9ICgpID0+IHtcbiAgICByb3V0ZXIucHJlZmV0Y2gocHJlZmV0Y2hMaW5rKCkudXJsLCBwcmVmZXRjaExpbmsoKS5hcyk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgcHJlZmV0Y2goKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHByZWZldGNoVGFyZ2V0LmN1cnJlbnQpIHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUocHJlZmV0Y2hUYXJnZXQuY3VycmVudCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVSb3V0ZXJQdXNoLFxuICAgIHByZWZldGNoVGFyZ2V0LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm1vZHVsZSIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfX2VzTW9kdWxlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUkJDAiLCJURVNUX1JPVVRFIiwibGV4ZXIiLCJzdHIiLCJ0b2tlbnMiLCJpIiwibGVuZ3RoIiwiY2hhciIsInB1c2giLCJ0eXBlIiwiaW5kZXgiLCJ2YWx1ZSIsIm5hbWUiLCJqIiwiY29kZSIsImNoYXJDb2RlQXQiLCJUeXBlRXJyb3IiLCJjb3VudCIsInBhdHRlcm4iLCJwYXJzZSIsIm9wdGlvbnMiLCJfYSIsInByZWZpeGVzIiwiZGVmYXVsdFBhdHRlcm4iLCJlc2NhcGVTdHJpbmciLCJkZWxpbWl0ZXIiLCJyZXN1bHQiLCJwYXRoIiwidHJ5Q29uc3VtZSIsIm11c3RDb25zdW1lIiwidW5kZWZpbmVkIiwibmV4dFR5cGUiLCJjb25zdW1lVGV4dCIsInByZWZpeCIsImluZGV4T2YiLCJzdWZmaXgiLCJtb2RpZmllciIsIm9wZW4iLCJuYW1lXzEiLCJwYXR0ZXJuXzEiLCJjb21waWxlIiwidG9rZW5zVG9GdW5jdGlvbiIsInJlRmxhZ3MiLCJmbGFncyIsImVuY29kZSIsIngiLCJfYiIsInZhbGlkYXRlIiwibWF0Y2hlcyIsIm1hcCIsInRva2VuIiwiUmVnRXhwIiwiZGF0YSIsIm9wdGlvbmFsIiwicmVwZWF0IiwiQXJyYXkiLCJpc0FycmF5Iiwic2VnbWVudCIsInRlc3QiLCJTdHJpbmciLCJ0eXBlT2ZNZXNzYWdlIiwibWF0Y2giLCJrZXlzIiwicmUiLCJwYXRoVG9SZWdleHAiLCJyZWdleHBUb0Z1bmN0aW9uIiwiZGVjb2RlIiwicGF0aG5hbWUiLCJtIiwiZXhlYyIsInBhcmFtcyIsImNyZWF0ZSIsIl9sb29wXzEiLCJzcGxpdCIsInJlcGxhY2UiLCJzZW5zaXRpdmUiLCJyZWdleHBUb1JlZ2V4cCIsImdyb3VwcyIsInNvdXJjZSIsImFycmF5VG9SZWdleHAiLCJwYXRocyIsInBhcnRzIiwiam9pbiIsInN0cmluZ1RvUmVnZXhwIiwidG9rZW5zVG9SZWdleHAiLCJzdHJpY3QiLCJzdGFydCIsIl9jIiwiZW5kIiwiX2QiLCJlbmRzV2l0aCIsInJvdXRlIiwiX2kiLCJ0b2tlbnNfMSIsIm1vZCIsImVuZFRva2VuIiwiaXNFbmREZWxpbWl0ZWQiLCJiIiwiYyIsImQiLCJlIiwiZiIsImciLCJoIiwiayIsImwiLCJuIiwicCIsInEiLCJyIiwidCIsInYiLCJ3IiwieSIsInoiLCJhIiwidSIsIiQkdHlwZW9mIiwiQSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImhhc1N5bWJvbCIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlJFQUNUX1BPUlRBTF9UWVBFIiwiUkVBQ1RfRlJBR01FTlRfVFlQRSIsIlJFQUNUX1NUUklDVF9NT0RFX1RZUEUiLCJSRUFDVF9QUk9GSUxFUl9UWVBFIiwiUkVBQ1RfUFJPVklERVJfVFlQRSIsIlJFQUNUX0NPTlRFWFRfVFlQRSIsIlJFQUNUX0FTWU5DX01PREVfVFlQRSIsIlJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIiwiUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUiLCJSRUFDVF9NRU1PX1RZUEUiLCJSRUFDVF9MQVpZX1RZUEUiLCJSRUFDVF9CTE9DS19UWVBFIiwiUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSIsIlJFQUNUX1JFU1BPTkRFUl9UWVBFIiwiUkVBQ1RfU0NPUEVfVFlQRSIsImlzVmFsaWRFbGVtZW50VHlwZSIsInR5cGVPZiIsIm9iamVjdCIsIiQkdHlwZW9mVHlwZSIsIkFzeW5jTW9kZSIsIkNvbmN1cnJlbnRNb2RlIiwiQ29udGV4dENvbnN1bWVyIiwiQ29udGV4dFByb3ZpZGVyIiwiRWxlbWVudCIsIkZvcndhcmRSZWYiLCJGcmFnbWVudCIsIkxhenkiLCJNZW1vIiwiUG9ydGFsIiwiUHJvZmlsZXIiLCJTdHJpY3RNb2RlIiwiU3VzcGVuc2UiLCJoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSIsImlzQXN5bmNNb2RlIiwiY29uc29sZSIsImlzQ29uY3VycmVudE1vZGUiLCJpc0NvbnRleHRDb25zdW1lciIsImlzQ29udGV4dFByb3ZpZGVyIiwiaXNFbGVtZW50IiwiaXNGb3J3YXJkUmVmIiwiaXNGcmFnbWVudCIsImlzTGF6eSIsImlzTWVtbyIsImlzUG9ydGFsIiwiaXNQcm9maWxlciIsImlzU3RyaWN0TW9kZSIsImlzU3VzcGVuc2UiLCJleHBvcnRzIiwicmVxdWlyZSQkMSIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJhZGRCYXNlUGF0aCIsInJvdXRlciIsInVzZVJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLElBQUEsV0FBQSxHQUFBLFNBQUE7O0FBQUEsSUFBQSxXQUFBLEdBQUFkLHlCQUFBLENBQUFlLGFBQUEsQ0FBQTs7QUFBQSxTQUFBbEIsMEJBQUEsR0FBQTtBQUFBLE1BQUEsT0FBQSxPQUFBLEtBQUEsVUFBQSxFQUFBLE9BQUEsSUFBQTtBQUFBLE1BQUEsS0FBQSxHQUFBLElBQUEsT0FBQSxFQUFBOztBQUFBLEVBQUFBLDBCQUFBLEdBQUEsb0NBQUE7QUFBQSxXQUFBLEtBQUE7QUFBQSxHQUFBOztBQUFBLFNBQUEsS0FBQTtBQUFBOztBQUFBLFNBQUFHLHlCQUFBLENBQUEsR0FBQSxFQUFBO0FBQUEsTUFBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsRUFBQTtBQUFBLFdBQUEsR0FBQTtBQUFBOztBQUFBLE1BQUEsR0FBQSxLQUFBLElBQUEsSUFBQSxRQUFBLEdBQUEsTUFBQSxRQUFBLElBQUEsT0FBQSxHQUFBLEtBQUEsVUFBQSxFQUFBO0FBQUEsV0FBQTtBQUFBLGlCQUFBO0FBQUEsS0FBQTtBQUFBOztBQUFBLE1BQUEsS0FBQSxHQUFBSCwwQkFBQSxFQUFBOztBQUFBLE1BQUEsS0FBQSxJQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEVBQUE7QUFBQSxXQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBO0FBQUE7O0FBQUEsTUFBQSxNQUFBLEdBQUEsRUFBQTtBQUFBLE1BQUEscUJBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxJQUFBLE1BQUEsQ0FBQSx3QkFBQTs7QUFBQSxPQUFBLElBQUEsR0FBQSxJQUFBLEdBQUEsRUFBQTtBQUFBLFFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUEsRUFBQTtBQUFBLFVBQUEsSUFBQSxHQUFBLHFCQUFBLEdBQUEsTUFBQSxDQUFBLHdCQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUE7O0FBQUEsVUFBQSxJQUFBLEtBQUEsSUFBQSxDQUFBLEdBQUEsSUFBQSxJQUFBLENBQUEsR0FBQSxDQUFBLEVBQUE7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBO0FBQUEsT0FBQSxNQUFBO0FBQUEsUUFBQSxNQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxFQUFBLE1BQUEsV0FBQSxHQUFBLEdBQUE7O0FBQUEsTUFBQSxLQUFBLEVBQUE7QUFBQSxJQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxFQUFBLE1BQUE7QUFBQTs7QUFBQSxTQUFBLE1BQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkEsSUFBTW1C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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
