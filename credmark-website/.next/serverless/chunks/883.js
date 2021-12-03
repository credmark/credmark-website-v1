"use strict";
exports.id = 883;
exports.ids = [883,85];
exports.modules = {

/***/ 883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_8": () => (/* binding */ getAllMediaPosts)
/* harmony export */ });
/* unused harmony exports getAllPosts, getBlogBySlug */
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41095);

const postFields = (/* unused pure expression or super */ null && (`
title, 
subtitle,
"date": publishedAt,
"author": author->name,
"slug": slug.current,
"mainImage": mainImage.asset->url,
"content": body,
`));
async function getAllPosts() {
  const results = await client.fetch(`*[_type == "post"]| order(publishedAt desc) {${postFields}}`);
  return results;
}
async function getBlogBySlug(slug) {
  const results = await client.fetch(`*[_type == "post" && slug.current == $slug] {
        ${postFields}
    }`, {
    slug
  }).then(res => res === null || res === void 0 ? void 0 : res[0]);
  return results;
}
async function getAllMediaPosts() {
  const mediaPostFields = `"category": category->,
    title, 
    subtitle,
    url,
    publishedAt,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    body,
    "slug": slug.current`;
  const results = await _sanity__WEBPACK_IMPORTED_MODULE_0__/* .default.fetch */ .Z.fetch(`*[_type == "mediaPost"]| order(publishedAt desc) {${mediaPostFields}}`);
  return results;
}

/***/ }),

/***/ 41095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59729);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: "9y1au457",
  // you can find this in sanity.json
  dataset: "production",
  apiVersion: "2021-09-07",
  // or the name you chose in step 1
  useCdn: false // `false` if you want to ensure fresh data

}));

/***/ })

};
;