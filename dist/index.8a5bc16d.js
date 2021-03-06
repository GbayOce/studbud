// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7GifH":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "97912cc17f1f5bdf37964fbc8a5bc16d"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] ???? Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ??? Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          ???? ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4OAbU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _navigationJs = require("./components/navigation.js");
var _navigationJsDefault = parcelHelpers.interopDefault(_navigationJs);
var _tasklistJs = require("./components/tasklist.js");
var _stopwatchJs = require("./components/stopwatch.js");
var _musicJs = require("./components/music.js");
var _pomodoroJs = require("./components/pomodoro.js");
const links = document.querySelectorAll('nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');
var nav = new _navigationJsDefault.default(links, pages);
nav.getLinks();
nav.links.forEach(function(link) {
    link.addEventListener('click', function() {
        let pageId = nav.getHash(link);
        nav.setPage(pageId);
    });
});

},{"./components/navigation.js":"2K1cj","./components/tasklist.js":"Rj9Cl","./components/stopwatch.js":"4w2wn","./components/music.js":"24CWj","@parcel/transformer-js/src/esmodule-helpers.js":"367CR","./components/pomodoro.js":"2KGxt"}],"2K1cj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// this is for the navigation to work
class Navigation {
    constructor(links, pages){
        this.links = links;
        this.pages = pages;
        this.currentPage = null;
    }
    getLinks() {
        console.log(this.links);
    }
    //changes the active status of each page. 
    setPage(pageId) {
        this.currentPage = pageId;
        console.log(this.currentPage);
        this.links.forEach((link)=>{
            link.classList.remove('active');
            if (this.getHash(link) === pageId) link.classList.add('active');
        });
        this.pages.forEach((page)=>{
            page.style.display = 'none';
        });
        document.getElementById(pageId).style.display = "block";
    }
    getHash(link) {
        return link.href.split("#")[1];
    }
}
exports.default = Navigation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"367CR":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Rj9Cl":[function(require,module,exports) {
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");
button.addEventListener("click", function(event) {
    //browser functionality, checking that it auto happens
    event.preventDefault();
    // storing retrieved values 
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
    console.log(tasklist);
});
var taskListArray = [];
function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        id: Date.now(),
        taskDescription,
        dueDate,
        dateCreated,
        estimatedTime,
        completionTime,
        priorityRating,
        estimatedTime,
        completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
    renderHome(task);
}
// this is for the task list 
function renderTask(task) {
    // creates the html elements 
    updateEmpty();
    let itemT = document.createElement("li");
    itemT.setAttribute('data-id', task.id);
    itemT.innerHTML = "<p>" + task.taskDescription + "</p";
    //task to array 
    tasklist.appendChild(itemT);
    //priorityrating colour (doesnt work)
    // if (task.priorityRating="Low"){
    //     itemT.style.backgroundColor="green";
    // } else if (task.priorityRating = "Medium") {  
    //     itemT.style.backgroundColor="yellow";
    //   } else { 
    //     (task.priorityRating = "High") 
    //     itemT.style.backgroundColor="red";
    //   }
    itemT.style.backgroundColor = "white"; // background colour of the li output 
    // DOM elements - delete button 
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    itemT.appendChild(delButton);
    delButton.style.float = "right";
    delButton.style.width = "100px";
    //  delButton.style.right = "600px";
    delButton.style.position = "relative";
    delButton.style.top = "-40px";
    // Event listeners for delete button 
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex((task1)=>task1.id === Number(id)
        );
        removeItemFromArray(taskListArray, index);
        updateEmpty();
        itemT.remove();
    });
    form.reset();
}
// Clears user input from array 
function removeItemFromArray(arr, index) {
    if (index > -1) arr.splice(index, 1);
    return arr;
}
function updateEmpty() {
    if (taskListArray.length > 0) document.getElementById('emptyList').style.display = 'none';
    else document.getElementById('emptyList').style.display = 'block';
}
//this takes the task list values from tasklist to the home page 
function renderHome(task) {
    updateEmpty();
    let item = document.createElement("p");
    let dateItem = document.createElement("p");
    let estItem = document.createElement("p");
    item.setAttribute('data-id', task.id);
    dateItem.setAttribute('data-id', task.id);
    estItem.setAttribute('data-id', task.id);
    item.innerHTML = "<p>" + task.taskDescription + "</p";
    dateItem.innerHTML = "<p>" + task.dueDate + "</p";
    estItem.innerHTML = "<p>" + task.estimatedTime + " minutes" + "</p";
    let home = document.getElementById("home");
    home.appendChild(item);
    home.appendChild(dateItem);
    home.appendChild(estItem);
    //this is for user task, html elements 
    item.style.backgroundColor = "white";
    //  item.style.opacity = "70%";
    item.style.borderRadius = "20px";
    item.style.width = "700px";
    // item.style.height = "20px";
    item.style.display = "flex";
    item.style.padding = "20px";
    item.style.float = "left";
    item.style.border = "solid";
    //this is for due date, html elements 
    dateItem.style.backgroundColor = "white";
    dateItem.style.borderRadius = "20px";
    dateItem.style.outline = " black";
    dateItem.style.width = "300px";
    dateItem.style.height = "60px";
    dateItem.style.position = "relative";
    dateItem.style.left = "70px";
    dateItem.style.float = "left";
    dateItem.style.display = "inline";
    dateItem.style.padding = "20px";
    dateItem.style.border = "solid";
    //this is for estimated time data
    estItem.style.backgroundColor = "white";
    estItem.style.borderRadius = "20px";
    estItem.style.outline = " black";
    estItem.style.width = "200px";
    estItem.style.height = "60px";
    estItem.style.position = "relative";
    estItem.style.left = "120px";
    estItem.style.float = "left";
    estItem.style.display = "inline";
    estItem.style.padding = "20px";
    estItem.style.border = "solid";
    let compButton = document.createElement("button");
    let compButtonText = document.createTextNode("Complete");
    compButton.appendChild(compButtonText);
    item.appendChild(compButton);
    compButton.style.position = "absolute";
    compButton.style.right = "180px";
    compButton.style.border = "solid";
    compButton.style.height = "60px";
    compButton.style.borderColor = "green";
    compButton.style.backgroundColor = "lightgreen";
    compButton.style.borderRadius = "20px";
    compButton.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex((task1)=>task1.id === Number(id)
        );
        removeItemFromArray(taskListArray, index);
        item.remove();
        dateItem.remove();
        estItem.remove();
        document.getElementById('beep').play(); //when you click on complete button, plays a jingle 
    });
    form.reset();
}

},{}],"4w2wn":[function(require,module,exports) {
//Stopwatch code from https://codepen.io/FRADAR/pen/mdOvbvm\
// by FRADAR
// stopwatch math 
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}
let startTime;
let elapsedTime = 0;
let timerInterval;
//stopwatch face text 
function print(txt) {
    document.getElementById("display").innerHTML = txt;
}
//button functionality 
function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
}
function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
}
function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
}
function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");
playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

},{}],"24CWj":[function(require,module,exports) {

},{}],"2KGxt":[function(require,module,exports) {
// This code was referenced from https://codepen.io/Divlo/pen/vYEbPoB
/* Variables DOM */ const buttonPlay = document.getElementById('buttonPlay');
const playIcon = document.getElementById('playIcon');
const buttonReset = document.getElementById('buttonReset');
const timeLeftDOM = document.getElementById('timeLeft');
const labelSessionBreak = document.getElementById('labelSessionBreak');
const sessionLengthDOM = document.getElementById('sessionLength');
const breakLengthDOM = document.getElementById('breakLength');
const sessionDecrement = document.getElementById('sessionDecrement');
const sessionIncrement = document.getElementById('sessionIncrement');
const breakDecrement = document.getElementById('breakDecrement');
const breakIncrement = document.getElementById('breakIncrement');
/* Variables */ const arrayTime = timeLeftDOM.innerText.split(":");
let timeLeft = parseInt(arrayTime[0] * 60) + parseInt(arrayTime[1]); // time left in seconds 
let playIsClicked = true;
let isSession = false;
let breakLength = 300;
let timeLength = 1500;
function convertSeconds(seconds) {
    return {
        minutes: Math.floor(seconds / 60),
        seconds: seconds % 60
    };
}
let interval;
/* Handle play/pause Button */ buttonPlay.addEventListener('click', ()=>{
    // Chrono start (play)
    if (playIsClicked) {
        if (interval) clearInterval(interval);
        interval = setInterval(handleTime, 1000);
        // pause icons 
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        function handleTime() {
            if (timeLeft <= 0) {
                // Session
                if (isSession) {
                    labelSessionBreak.innerText = "Session";
                    timeLeft = timeLength;
                } else {
                    labelSessionBreak.innerText = "Break";
                    timeLeft = breakLength;
                    document.getElementById('beep').currentTime = 0;
                    document.getElementById('beep').play();
                }
                isSession = !isSession;
            } else if (playIsClicked) clearInterval(interval);
            else {
                timeLeft--;
                const minutesAndSeconds = convertSeconds(timeLeft);
                timeLeftDOM.innerText = `${('0' + minutesAndSeconds.minutes).slice(-2)}:${('0' + minutesAndSeconds.seconds).slice(-2)}`;
            }
        }
    } else {
        playIcon.classList.add('fa-play');
        playIcon.classList.remove('fa-pause');
    }
    playIsClicked = !playIsClicked;
});
/* Handle reset button */ buttonReset.addEventListener('click', ()=>{
    breakLength = 300;
    timeLength = 1500;
    timeLeft = timeLength;
    breakLengthDOM.innerText = "5";
    sessionLengthDOM.innerText = "25";
    timeLeftDOM.innerText = "25:00";
    if (!playIsClicked) buttonPlay.click();
});
/* Handle length button */ function handleLengthButton(lengthValue, htmlElement, isAddition, isBreakLength) {
    let result = 1;
    if (isAddition) {
        result = ++lengthValue;
        htmlElement.innerText = result;
    } else if (lengthValue != 1) {
        result = --lengthValue;
        htmlElement.innerText = result;
    }
    if (!playIsClicked) buttonPlay.click();
    let resultSeconds = result * 60;
    if (!isBreakLength) {
        timeLength = resultSeconds;
        if (labelSessionBreak.innerText === 'SESSION') {
            timeLeftDOM.innerText = ('0' + result).slice(-2) + ":00";
            timeLeft = resultSeconds;
        }
    } else {
        breakLength = resultSeconds;
        if (labelSessionBreak.innerText === 'BREAK') {
            timeLeftDOM.innerText = ('0' + result).slice(-2) + ":00";
            timeLeft = resultSeconds;
        }
    }
    return resultSeconds;
}
sessionDecrement.addEventListener('click', ()=>{
    handleLengthButton(parseInt(sessionLengthDOM.innerText), sessionLengthDOM, false, false);
});
sessionIncrement.addEventListener('click', ()=>{
    handleLengthButton(parseInt(sessionLengthDOM.innerText), sessionLengthDOM, true, false);
});
breakDecrement.addEventListener('click', ()=>{
    breakLength = handleLengthButton(parseInt(breakLengthDOM.innerText), breakLengthDOM, false, true);
});
breakIncrement.addEventListener('click', ()=>{
    breakLength = handleLengthButton(parseInt(breakLengthDOM.innerText), breakLengthDOM, true, true);
});

},{}]},["7GifH","4OAbU"], "4OAbU", "parcelRequiref77e")

//# sourceMappingURL=index.8a5bc16d.js.map
