exports.id = 391;
exports.ids = [391];
exports.modules = {

/***/ 75147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavWhite)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12400);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34389);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69709);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98984);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);










function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function NavWhite(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    className: "h-16 sticky top-0 z-10",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("main", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Disclosure */ .pJ, {
        as: "nav",
        className: "shadow",
        children: ({
          open
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex justify-between",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "flex",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "flex-shrink-0 flex items-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    className: "block lg:hidden h-14 w-auto mt-2",
                    src: "../assets/credmark-logo.png",
                    alt: "Workflow"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                    href: "/",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                      width: 250,
                      className: "h-auto hidden lg:block h-12 flex justify-start m-0 mt-4 px-10",
                      src: "../assets/credmark-logo-purple.png",
                      alt: "Credmark logo"
                    })
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "hidden sm:ml-8 sm:flex sm:items-center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Menu */ .v2, {
                  as: "div",
                  className: "ml-3 relative",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Menu.Button */ .v2.Button, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        className: "sr-only",
                        children: "Open user menu"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                        href: "https://discord.com/invite/3dSfMqP3d4",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "px-5 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                        children: "Community"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                        className: "mx-5 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                          href: "/team",
                          className: "px-5 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                          children: "Team"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                        className: "mx-5 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                          href: "/faq",
                          className: "px-8 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                          children: "FAQ"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                        href: "https://app.credmark.com/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
                          type: "button",
                          className: "ml-5 transform hover:scale-110 px-5 credmark mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-credmarkpurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                          children: "APP"
                        })
                      })]
                    })
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "-mr-2 flex items-center sm:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Disclosure.Button */ .pJ.Button, {
                  className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                    className: "sr-only",
                    children: "Open main menu"
                  }), open ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__/* .XIcon */ .b0D, {
                    className: "block h-6 w-6",
                    "aria-hidden": "true"
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__/* .MenuIcon */ .Oqj, {
                    className: "block h-6 w-6",
                    "aria-hidden": "true"
                  })]
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Disclosure.Panel */ .pJ.Panel, {
            className: "sm:hidden",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "pt-2 pb-3 space-y-1",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Disclosure.Button */ .pJ.Button, {
                as: "a",
                href: "#",
                className: "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
                children: "Community"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Disclosure.Button */ .pJ.Button, {
                as: "a",
                href: "/team",
                className: "border-transparent block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
                children: "Team"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Disclosure.Button */ .pJ.Button, {
                as: "a",
                href: "/faq",
                className: "border-transparent block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
                children: "FAQ"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                href: "https://app.credmark.com/",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
                  type: "button",
                  className: "ml-3 px-5 credmark mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-credmarkpurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                  children: "APP"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "pt-4 pb-3 border-t border-gray-200",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "flex items-center px-4"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "mt-3 space-y-1"
              })]
            })]
          })]
        })
      }), props.page]
    })
  });
}

/***/ }),

/***/ 72431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;