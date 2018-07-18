"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$document = exports.$body = exports.$root = exports.$html = exports.$window = undefined;

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $window = exports.$window = (0, _jquery2.default)(window); // G.sel 3.0.0
// Selector cache
// Copyright (C) 2013-2018 ConsidoNet Solutions / www.considonet.com
// Released under MIT Licence

/*
VERSION HISTORY
3.0.0 (20180718) @pg
+ Switched to semver
* Dist package now transpiled from ES6 (compatibility with building environments not transpiling node_modules)
+ Source linted with tslint

2.0.1.20180214 @pg
+ TypeScript declarations

2.0.0.20171106
+ Modular ES6 rewrite

1.0.3.20170529 @pg
+ ES6

1.0.1.20170510 @pg
+ Code refactor, namespace for jQuery

1.0.0.20170126 @pg
+ Initial version

*/

var $html = exports.$html = (0, _jquery2.default)("html");
var $root = exports.$root = (0, _jquery2.default)("html,body");
var $body = exports.$body = (0, _jquery2.default)(document.body);
var $document = exports.$document = (0, _jquery2.default)(document);