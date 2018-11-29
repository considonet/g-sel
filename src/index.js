// G.sel 3.1.0
// Selector cache
// Copyright (C) 2013-2018 ConsidoNet Solutions / www.considonet.com
// Released under MIT Licence

/*
VERSION HISTORY
3.1.0 (20181129) @pg
+ Switched to git (now available on github), file cleanup
+ Now built with rollup

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

import $ from "jquery";

export const $window = $(window);
export const $html = $("html");
export const $root = $("html,body");
export const $body = $(document.body);
export const $document = $(document);
