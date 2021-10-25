"use strict";
exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 3998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2400);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4389);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9709);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6049);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5893);








const navigation = [{
  name: 'Home',
  href: '/',
  current: true
}, {
  name: 'White Paper',
  href: '/whitepaper',
  current: false
}, {
  name: 'Blog',
  href: '/blog',
  current: false
}, {
  name: 'Media',
  href: '/media',
  current: false
}, {
  name: 'CCR',
  href: '/crypto-credit-report',
  current: false
}, {
  name: 'FAQ',
  href: '/faq',
  current: false
}, {
  name: 'The Team',
  href: '/team',
  current: false
}];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Nav(props) {
  const {
    0: sidebarOpen,
    1: setSidebarOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex h-screen overflow-hidden max-w-7xl block m-auto",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Transition.Root */ .uT.Root, {
        show: sidebarOpen,
        as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Dialog */ .Vq, {
          as: "div",
          className: "fixed inset-0 flex z-40 md:hidden",
          onClose: setSidebarOpen,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Transition.Child */ .uT.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            enter: "transition-opacity ease-linear duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "transition-opacity ease-linear duration-300",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Dialog.Overlay */ .Vq.Overlay, {
              className: "fixed bg-white inset-0 bg-gray-600 bg-opacity-75"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Transition.Child */ .uT.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            enter: "transition ease-in-out duration-300 transform",
            enterFrom: "-translate-x-full",
            enterTo: "translate-x-0",
            leave: "transition ease-in-out duration-300 transform",
            leaveFrom: "translate-x-0",
            leaveTo: "-translate-x-full",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Transition.Child */ .uT.Child, {
                as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                enter: "ease-in-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in-out duration-300",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "absolute top-0 right-0 -mr-12 pt-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                    type: "button",
                    className: "ml-1 flex items-center justify-center h-10 w-10",
                    onClick: () => setSidebarOpen(false),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__/* .XIcon */ .b0D, {
                      className: "h-6 w-6 text-white",
                      "aria-hidden": "true"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                      className: "sr-only",
                      children: "Close sidebar"
                    })]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "mt-5 flex-1 h-0 overflow-y-auto",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("nav", {
                  className: "px-2 space-y-1",
                  children: [navigation.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                    href: item.href,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                      className: "cursor-pointer bg-gray-100 hover:bg-gray-50 group flex justify-center px-2 py-2 text-base font-medium rounded-md",
                      children: item.name
                    })
                  }, item.name)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                    href: "https://app.uniswap.org/#/swap?outputCurrency=0x68cfb82eacb9f198d508b514d898a403c449533e",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "cursor-pointer bg-gray-100 hover:bg-gray-50 group flex justify-center px-2 py-2 text-base font-medium rounded-md",
                    children: "Buy CMK"
                  })]
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "flex-shrink-0 w-14",
            "aria-hidden": "true"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "hidden md:flex md:flex-shrink-0",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "flex flex-col w-64",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "flex flex-col flex-grow pt-5 pb-4 overflow-y-auto",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "mt-5 flex-grow flex flex-col",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("nav", {
                className: "flex-1 px-2 pt-28 space-y-1 text-right",
                children: [navigation.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                  href: item.href,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                    className: "cursor-pointer group flex flex-row-reverse pr-5 px-2 py-2 text-sm hover:font-medium rounded-md",
                    children: [" ", item.name]
                  })
                }, item.name)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                  href: "https://app.uniswap.org/#/swap?outputCurrency=0x68cfb82eacb9f198d508b514d898a403c449533e",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "cursor-pointer group flex flex-row-reverse pr-5 px-2 py-2 text-sm active:font-medium rounded-md",
                  children: "Buy CMK"
                })]
              })
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col w-0 flex-1 overflow-hidden md:mr-40",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "relative z-10 h-16 md:h-24",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            type: "button",
            className: "my-3 pt-2.5 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",
            onClick: () => setSidebarOpen(true),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
              fill: "#3b0065",
              viewBox: "0 0 100 80",
              width: "30",
              height: "30",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("rect", {
                width: "100",
                height: "10"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("rect", {
                y: "30",
                width: "100",
                height: "10"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("rect", {
                y: "60",
                width: "100",
                height: "10"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              className: "sr-only",
              children: "Open sidebar"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "grid grid-cols-3 h-24",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "hidden md:flex justify-center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                href: "https://credmark.com/",
                rel: "noreferrer",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                  width: 45,
                  className: "flex justify-right pt-6",
                  src: "/assets/credmark-logo.png",
                  alt: "Credmark Logo"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "flex flex-1 hidden md:flex medium:flex-grow-0 items-center justify-end mr-10 md:pt-2.5 mr-16",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                href: "https://app.credmark.com/",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                  src: "/assets/App.png",
                  width: 75,
                  alt: "App button"
                })
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("main", {
          className: "flex-1 mb-2.5 relative overflow-y-hidden focus:outline-none rounded-4xl",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((simplebar_react__WEBPACK_IMPORTED_MODULE_3___default()), {
            style: {
              maxHeight: '100%'
            },
            forceVisible: "y",
            autoHide: false,
            scrollbarMinSize: 50,
            scrollbarMaxSize: 50,
            children: props.page
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_layout_footer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {})]
      })]
    })
  });
}

/***/ })

};
;