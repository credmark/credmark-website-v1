/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogPostPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/@sanity/client/lib/sanityClient.js
var sanityClient = __webpack_require__(9729);
var sanityClient_default = /*#__PURE__*/__webpack_require__.n(sanityClient);
;// CONCATENATED MODULE: ./lib/sanity.js

/* harmony default export */ const sanity = (sanityClient_default()({
  projectId: "9y1au457",
  // you can find this in sanity.json
  dataset: "production",
  apiVersion: "2021-09-07",
  // or the name you chose in step 1
  useCdn: false // `false` if you want to ensure fresh data

}));
;// CONCATENATED MODULE: ./lib/api.js

const postFields = `
title, 
subtitle,
"date": publishedAt,
"author": author->name,
"slug": slug.current,
"mainImage": mainImage.asset->url,
"content": body,
`;
async function getAllPosts() {
  const results = await sanity.fetch(`*[_type == "post"]| order(publishedAt desc) {${postFields}}`);
  return results;
}
async function getBlogBySlug(slug) {
  const results = await sanity.fetch(`*[_type == "post" && slug.current == $slug] {
        ${postFields}
    }`, {
    slug
  }).then(res => res === null || res === void 0 ? void 0 : res[0]);
  return results;
}
// EXTERNAL MODULE: ./node_modules/@sanity/block-content-to-react/lib/BlockContent.js
var BlockContent = __webpack_require__(8863);
var BlockContent_default = /*#__PURE__*/__webpack_require__.n(BlockContent);
// EXTERNAL MODULE: ./components/layout/nav.js
var nav = __webpack_require__(3998);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./pages/blog/[slug].js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const serializers = {
  types: {
    code: serializer => {
      return /*#__PURE__*/jsx_runtime.jsx("h1", {
        children: "Code Block"
      });
    }
  }
};
function BlogPostPage({
  post
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("title", {
        children: [post.title, " | CREDMARK"]
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        content: "Blog | Credmark",
        property: "og:title"
      }, "og:title"), /*#__PURE__*/jsx_runtime.jsx("meta", {
        name: "description",
        content: "Welcome to the Credmark blog. Subscribe to find out about company updates and industry research."
      }), /*#__PURE__*/jsx_runtime.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/jsx_runtime.jsx("script", {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${"UA-201404361-1"}`
      }), /*#__PURE__*/jsx_runtime.jsx("script", {
        dangerouslySetInnerHTML: {
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${"UA-201404361-1"}', {
              page_path: window.location.pathname,
            });
          `
        }
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "nav",
      children: /*#__PURE__*/jsx_runtime.jsx(nav/* default */.Z, {
        page: /*#__PURE__*/jsx_runtime.jsx(BlogDetail, {
          post: post
        })
      })
    })]
  });
}

const BlogDetail = ({
  post
}) => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "bg-white pb-10",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "max-w-5xl block m-auto text-center px-5",
      children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
        href: "/blog",
        rel: "noreferrer",
        children: /*#__PURE__*/jsx_runtime.jsx("img", {
          id: "blogbutton",
          className: "h-auto cursor-pointer mt-40",
          fill: "#3B0065",
          width: 30,
          height: 30,
          src: "/assets/BackButton.svg"
        })
      }), /*#__PURE__*/jsx_runtime.jsx("img", {
        id: "blogPage",
        className: "w-56 h-52 rounded-lg block m-auto mb-10",
        src: post.mainImage
      }), /*#__PURE__*/jsx_runtime.jsx("h1", {
        className: "text-xl md:px-20",
        children: post.title
      }), /*#__PURE__*/jsx_runtime.jsx((BlockContent_default()), _objectSpread({
        className: "text-left leading-loose pt-10 px-5 md:px-20",
        serializers: serializers,
        blocks: post.content
      }, sanity.config()))]
    })
  });
};

async function getStaticProps({
  params
}) {
  const post = await getBlogBySlug(params.slug);
  return {
    props: {
      post
    }
  };
}
async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts === null || posts === void 0 ? void 0 : posts.map(posts => ({
      params: {
        slug: posts.slug
      }
    })),
    fallback: false
  };
}

/***/ }),

<<<<<<< HEAD
/***/ 5718:
=======
/***/ 2910:
>>>>>>> 77133a39a37afd37375acb5e633d89c6a1a20366
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(2333)
      processEnv([{"path":".env","contents":"NEXT_PUBLIC_GOOGLE_ANALYTICS=UA-201404361-1\ndomain='credmark.com'"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(8881)

      const appMod = __webpack_require__(7672)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(2980)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/blog/[slug]",
<<<<<<< HEAD
        buildId: "c2YWods6VWPWr2ykFGRll",
        escapedBuildId: "c2YWods6VWPWr2ykFGRll",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"83dd37984f9bfbe00b2093af21208357",previewModeSigningKey:"cdb206107589660013a2feff8f9582a79eee5cc6af63c50fcad197175ad920f8",previewModeEncryptionKey:"5cecb8147c3c5d8c85489192278cd14c4603589c6f7cbb29a8fa87e61395d50a"}
=======
        buildId: "Wd04JdrV7EafBKCrkdwgE",
        escapedBuildId: "Wd04JdrV7EafBKCrkdwgE",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"5a87322a0755ece9ee95e1892382fe7c",previewModeSigningKey:"045a248263e25edcd174d7920f3f2beec99199d7e826590e08d0a14c5b122418",previewModeEncryptionKey:"71bc4d355aec94cd0fd23d36ab0911b2f6403f3082795f63dc52162b05718d76"}
>>>>>>> 77133a39a37afd37375acb5e633d89c6a1a20366
      })
      
    

/***/ }),

/***/ 9059:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 4293:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 5532:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 6417:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 8614:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 5747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 8605:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 7211:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 1631:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 3700:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 2087:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 1191:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 2413:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 4304:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 4016:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 3867:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 8835:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 1669:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 8761:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
<<<<<<< HEAD
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [112,436,536,729,863,414,193,998], () => (__webpack_require__(5718)))
=======
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [112,436,536,729,863,414,193,998], () => (__webpack_require__(2910)))
>>>>>>> 77133a39a37afd37375acb5e633d89c6a1a20366
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			492: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(112);
/******/ 			__webpack_require__.e(436);
/******/ 			__webpack_require__.e(536);
/******/ 			__webpack_require__.e(729);
/******/ 			__webpack_require__.e(863);
/******/ 			__webpack_require__.e(414);
/******/ 			__webpack_require__.e(193);
/******/ 			__webpack_require__.e(998);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;