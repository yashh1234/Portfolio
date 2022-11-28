self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* harmony import */ var C_Users_yashg_OneDrive_Desktop_Projects_portfolio_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _ref;

var projects = [{
  title: 'Task Manager App',
  description: "Made a task manager/to-do list website. Front-end is developed using HTML, CSS and JS. Written a back-end API using NodeJS and Express which performs CRUD operations.",
  image: '/images/1.png',
  tags: ['HTML', 'CSS', 'NodeJS', 'Express'],
  source: 'https://task-manager-app-420.up.railway.app/',
  visit: 'https://github.com/yashh1234/Task-Manager-App',
  id: 0
}, {
  title: 'Tution Classes Website',
  description: "Made a website for tuition classes using HTML, Bootstrap. It has different sections on the home page for different subjects and users can select which subjects they want to get classes for.",
  image: '/images/2.png',
  tags: ['HTML', 'Bootstrap'],
  source: 'https://yashh1234.github.io/iTutorials/index.html',
  visit: 'https://github.com/yashh1234/iTutorials',
  id: 1
}, (_ref = {
  title: 'Food Ordering Website',
  description: "Made a website for a restaurant using HTML, CSS, Bootstrap and JS. Added a sign-up and sign-in page to the website. Integrated a chat-bot to help users in the ordering process. The chat-bot also confirms the order.",
  image: '/images/3.png',
  tags: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'SASS']
}, (0,C_Users_yashg_OneDrive_Desktop_Projects_portfolio_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "tags", ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'SASS']), (0,C_Users_yashg_OneDrive_Desktop_Projects_portfolio_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "source", 'https://github.com/yashh1234'), (0,C_Users_yashg_OneDrive_Desktop_Projects_portfolio_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "visit", 'https://github.com/yashh1234/Food-Ordering-Website'), (0,C_Users_yashg_OneDrive_Desktop_Projects_portfolio_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "id", 2), _ref), {
  title: 'Customer Segmentation Using K-Means Clustering',
  description: "Divided customers using basic data of customers like age, gender, annual income and spending score. Used Mall Customer Segmentation Data which is available on Kaggle. From the segmented customers we can decide what type of advertisements have to be targeted on the specific group of customers.",
  image: '/images/4.png',
  tags: [],
  source: 'https://github.com/yashh1234',
  visit: 'https://github.com/yashh1234/Customer-Segmentation',
  id: 3
}];
var TimeLineData = [{
  year: 2022,
  text: 'Software Engineering Virtual Experience (Forage)'
}, {
  year: 2022,
  text: 'AWS Academy Graduate - AWS Academy Cloud Foundations'
}, {
  year: 2022,
  text: 'Basic Image Classification with TensorFlow'
}, {
  year: 2020,
  text: 'Creating Database Tables with SQL'
}, {
  year: 2020,
  text: 'Machine Learning for All'
}, {
  year: 2020,
  text: 'Technical Support Fundamentals'
}, {
  year: 2020,
  text: 'Programming for Everybody (Getting Started With Python'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGtCQURUO0FBRUVDLGFBQVcsRUFBRSx3S0FGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixRQUFoQixFQUEwQixTQUExQixDQUpWO0FBS0VDLFFBQU0sRUFBRSw4Q0FMVjtBQU1FQyxPQUFLLEVBQUUsK0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLHdCQURUO0FBRUVDLGFBQVcsRUFBQywrTEFGZDtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsV0FBVCxDQUpSO0FBS0VDLFFBQU0sRUFBRSxtREFMVjtBQU1FQyxPQUFLLEVBQUUseUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FWc0I7QUFvQnBCTixPQUFLLEVBQUUsdUJBcEJhO0FBcUJwQkMsYUFBVyxFQUFFLHdOQXJCTztBQXNCbEJDLE9BQUssRUFBRSxlQXRCVztBQXVCbEJDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFdBQWhCLEVBQTZCLFlBQTdCLEVBQTJDLE1BQTNDO0FBdkJZLDBLQXdCWixDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFdBQWhCLEVBQTZCLFlBQTdCLEVBQTJDLE1BQTNDLENBeEJZLDRLQXlCWiw4QkF6QlksMktBMEJiLG9EQTFCYSx3S0EyQmhCLENBM0JnQixVQTZCdEI7QUFDRUgsT0FBSyxFQUFFLGdEQURUO0FBRUVDLGFBQVcsRUFBRSx1U0FGZjtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUUsRUFKUjtBQUtFQyxRQUFNLEVBQUUsOEJBTFY7QUFNRUMsT0FBSyxFQUFFLG9EQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBN0JzQixDQUFqQjtBQXdDQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixFQU0xQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FOMEIsRUFPMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBUDBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk1MDQyYjcxZWRlN2VkYTM3ODMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdUYXNrIE1hbmFnZXIgQXBwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIk1hZGUgYSB0YXNrIG1hbmFnZXIvdG8tZG8gbGlzdCB3ZWJzaXRlLiBGcm9udC1lbmQgaXMgZGV2ZWxvcGVkIHVzaW5nIEhUTUwsIENTUyBhbmQgSlMuIFdyaXR0ZW4gYSBiYWNrLWVuZCBBUEkgdXNpbmcgTm9kZUpTIGFuZCBFeHByZXNzIHdoaWNoIHBlcmZvcm1zIENSVUQgb3BlcmF0aW9ucy5cIixcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzEucG5nJyxcclxuICAgICAgdGFnczogWydIVE1MJywgJ0NTUycsICdOb2RlSlMnLCAnRXhwcmVzcyddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly90YXNrLW1hbmFnZXItYXBwLTQyMC51cC5yYWlsd2F5LmFwcC8nLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20veWFzaGgxMjM0L1Rhc2stTWFuYWdlci1BcHAnLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1R1dGlvbiBDbGFzc2VzIFdlYnNpdGUnLFxyXG4gICAgZGVzY3JpcHRpb246XCJNYWRlIGEgd2Vic2l0ZSBmb3IgdHVpdGlvbiBjbGFzc2VzIHVzaW5nIEhUTUwsIEJvb3RzdHJhcC4gSXQgaGFzIGRpZmZlcmVudCBzZWN0aW9ucyBvbiB0aGUgaG9tZSBwYWdlIGZvciBkaWZmZXJlbnQgc3ViamVjdHMgYW5kIHVzZXJzIGNhbiBzZWxlY3Qgd2hpY2ggc3ViamVjdHMgdGhleSB3YW50IHRvIGdldCBjbGFzc2VzIGZvci5cIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy8yLnBuZycsXHJcbiAgICB0YWdzOiBbJ0hUTUwnLCAnQm9vdHN0cmFwJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL3lhc2hoMTIzNC5naXRodWIuaW8vaVR1dG9yaWFscy9pbmRleC5odG1sJyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL3lhc2hoMTIzNC9pVHV0b3JpYWxzJyxcclxuICAgIGlkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdGb29kIE9yZGVyaW5nIFdlYnNpdGUnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTWFkZSBhIHdlYnNpdGUgZm9yIGEgcmVzdGF1cmFudCB1c2luZyBIVE1MLCBDU1MsIEJvb3RzdHJhcCBhbmQgSlMuIEFkZGVkIGEgc2lnbi11cCBhbmQgc2lnbi1pbiBwYWdlIHRvIHRoZSB3ZWJzaXRlLiBJbnRlZ3JhdGVkIGEgY2hhdC1ib3QgdG8gaGVscCB1c2VycyBpbiB0aGUgb3JkZXJpbmcgcHJvY2Vzcy4gVGhlIGNoYXQtYm90IGFsc28gY29uZmlybXMgdGhlIG9yZGVyLlwiLFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMy5wbmcnLFxyXG4gICAgICB0YWdzOiBbJ0hUTUwnLCAnQ1NTJywgJ0Jvb3RzdHJhcCcsICdKYXZhc2NyaXB0JywgJ1NBU1MnXSxcclxuICAgICAgdGFnczogWydIVE1MJywgJ0NTUycsICdCb290c3RyYXAnLCAnSmF2YXNjcmlwdCcsICdTQVNTJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20veWFzaGgxMjM0JyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL3lhc2hoMTIzNC9Gb29kLU9yZGVyaW5nLVdlYnNpdGUnLFxyXG4gICAgaWQ6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0N1c3RvbWVyIFNlZ21lbnRhdGlvbiBVc2luZyBLLU1lYW5zIENsdXN0ZXJpbmcnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRGl2aWRlZCBjdXN0b21lcnMgdXNpbmcgYmFzaWMgZGF0YSBvZiBjdXN0b21lcnMgbGlrZSBhZ2UsIGdlbmRlciwgYW5udWFsIGluY29tZSBhbmQgc3BlbmRpbmcgc2NvcmUuIFVzZWQgTWFsbCBDdXN0b21lciBTZWdtZW50YXRpb24gRGF0YSB3aGljaCBpcyBhdmFpbGFibGUgb24gS2FnZ2xlLiBGcm9tIHRoZSBzZWdtZW50ZWQgY3VzdG9tZXJzIHdlIGNhbiBkZWNpZGUgd2hhdCB0eXBlIG9mIGFkdmVydGlzZW1lbnRzIGhhdmUgdG8gYmUgdGFyZ2V0ZWQgb24gdGhlIHNwZWNpZmljIGdyb3VwIG9mIGN1c3RvbWVycy5cIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy80LnBuZycsXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS95YXNoaDEyMzQnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20veWFzaGgxMjM0L0N1c3RvbWVyLVNlZ21lbnRhdGlvbicsXHJcbiAgICBpZDogMyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcclxuICB7IHllYXI6IDIwMjIsIHRleHQ6ICdTb2Z0d2FyZSBFbmdpbmVlcmluZyBWaXJ0dWFsIEV4cGVyaWVuY2UgKEZvcmFnZSknLCB9LFxyXG4gIHsgeWVhcjogMjAyMiwgdGV4dDogJ0FXUyBBY2FkZW15IEdyYWR1YXRlIC0gQVdTIEFjYWRlbXkgQ2xvdWQgRm91bmRhdGlvbnMnLCB9LFxyXG4gIHsgeWVhcjogMjAyMiwgdGV4dDogJ0Jhc2ljIEltYWdlIENsYXNzaWZpY2F0aW9uIHdpdGggVGVuc29yRmxvdycsIH0sXHJcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnQ3JlYXRpbmcgRGF0YWJhc2UgVGFibGVzIHdpdGggU1FMJ30sXHJcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnTWFjaGluZSBMZWFybmluZyBmb3IgQWxsJ30sXHJcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnVGVjaG5pY2FsIFN1cHBvcnQgRnVuZGFtZW50YWxzJ30sXHJcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnUHJvZ3JhbW1pbmcgZm9yIEV2ZXJ5Ym9keSAoR2V0dGluZyBTdGFydGVkIFdpdGggUHl0aG9uJ30sXHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==