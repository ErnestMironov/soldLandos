// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/index.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./fonts\\Circe-Regular.eot":[["Circe-Regular.743dd531.eot","styles/fonts/Circe-Regular.eot"],"styles/fonts/Circe-Regular.eot"],"./fonts\\Circe-Regular.woff":[["Circe-Regular.67f70d2e.woff","styles/fonts/Circe-Regular.woff"],"styles/fonts/Circe-Regular.woff"],"./fonts\\Circe-Regular.ttf":[["Circe-Regular.a3b38cb9.ttf","styles/fonts/Circe-Regular.ttf"],"styles/fonts/Circe-Regular.ttf"],"./fonts\\Circe-Light.eot":[["Circe-Light.e94fdbc5.eot","styles/fonts/Circe-Light.eot"],"styles/fonts/Circe-Light.eot"],"./fonts\\Circe-Light.woff":[["Circe-Light.fe46e6fc.woff","styles/fonts/Circe-Light.woff"],"styles/fonts/Circe-Light.woff"],"./fonts\\Circe-Light.ttf":[["Circe-Light.974e539c.ttf","styles/fonts/Circe-Light.ttf"],"styles/fonts/Circe-Light.ttf"],"./fonts\\Circe-Bold.eot":[["Circe-Bold.ad8ad318.eot","styles/fonts/Circe-Bold.eot"],"styles/fonts/Circe-Bold.eot"],"./fonts\\Circe-Bold.woff":[["Circe-Bold.062dde0b.woff","styles/fonts/Circe-Bold.woff"],"styles/fonts/Circe-Bold.woff"],"./fonts\\Circe-Bold.ttf":[["Circe-Bold.f3a62b7b.ttf","styles/fonts/Circe-Bold.ttf"],"styles/fonts/Circe-Bold.ttf"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scripts/components/pie.js":[function(require,module,exports) {
function pie() {
  var pie = document.querySelector(".content__pie");
  var close = document.querySelectorAll(".reality-top__back");
  var services = document.querySelectorAll(".content__pie-piece");
  var tops = document.querySelectorAll(".reality-top");

  function isActive() {
    if (pie.classList.contains("active")) {
      return true;
    } else {
      return false;
    }
  }

  function closeAll() {
    pie.classList.remove("active");
    services.forEach(function (item, i, arr) {
      item.classList.remove("active");
    });
    tops.forEach(function (item, i, arr) {
      item.classList.remove("active");
    });
  }

  ;

  function selectService(service) {
    var list = service.getAttribute("data-service");
    list = document.querySelector(".reality-top_".concat(list));

    if (isActive()) {
      closeAll();
    } else {
      service.classList.add("active");
      pie.classList.add("active");
      list.classList.add("active");
    }
  }

  services.forEach(function (item, i, arr) {
    item.addEventListener("click", function () {
      selectService(item);
    });
  });
  close.forEach(function (item, i, arr) {
    item.addEventListener("click", function () {
      closeAll();
    });
  });

  (function actualDate() {
    function formatDate(date) {
      var dd = date.getDate();
      if (dd < 10) dd = '0' + dd;
      var mm = date.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;
      var yy = date.getFullYear() % 100;
      if (yy < 10) yy = '0' + yy;
      return dd + '.' + mm + '.' + yy;
    }

    var d = new Date();
    var datePlaces = document.querySelectorAll(".reality-top__date");
    datePlaces.forEach(function (item, i, arr) {
      item.textContent = formatDate(d);
    });
  })();
}

module.exports = pie;
},{}],"scripts/components/menu.js":[function(require,module,exports) {
function menu() {
  var menu = document.querySelector(".header__menu");
  var menuBtn = document.querySelector(".menu-btn");
  var html = document.querySelector("html");
  var body = document.querySelector("body");
  var mainWrap = document.querySelector(".main-wrap");

  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  function open() {
    menu.classList.add("active");
    menuBtn.classList.add("active"); // html.style.overflow = "hidden";
    // body.style.overflow = "hidden";
  }

  function close() {
    menu.classList.remove("active");
    menuBtn.classList.remove("active"); // html.style.overflow = "visible";
    // body.style.overflow = "visible";
  }

  menuBtn.addEventListener("click", function () {
    if (hasClass(menu, "active")) {
      close();
    } else {
      open();
    }
  });
  mainWrap.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      close();
    }
  });
}

module.exports = menu;
},{}],"scripts/index.js":[function(require,module,exports) {
"use strict";

require("./../styles/index.scss");

var _pie = _interopRequireDefault(require("./components/pie"));

var _menu = _interopRequireDefault(require("./components/menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import footer from './components/footer';
// import header from './components/header';
(0, _pie.default)();
(0, _menu.default)(); // const app = document.querySelector('#app');
// app.innerHTML = header.header + footer.footer;
},{"./../styles/index.scss":"styles/index.scss","./components/pie":"scripts/components/pie.js","./components/menu":"scripts/components/menu.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64634" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/index.js"], null)
//# sourceMappingURL=/scripts.bcf3243b.js.map