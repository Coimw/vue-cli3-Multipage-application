(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("44eb");


/***/ }),

/***/ "3ab3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.82b9c7a5.png";

/***/ }),

/***/ "44eb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.11@core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("e44b");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.11@core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("6648");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.11@core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("5f54");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.11@core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__("f0e6");

// EXTERNAL MODULE: ./node_modules/_vue@2.6.11@vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("0261");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5a76954c-vue-loader-template"}!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./src/pages/index/index.vue?vue&type=template&id=ca6de082&
var indexvue_type_template_id_ca6de082_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_c('h1',{on:{"click":_vm.getInfo}},[_vm._v("This is index page")]),_c('a',{attrs:{"href":"/user/index"}},[_vm._v("用户主页")]),_c('br'),_c('a',{attrs:{"href":"/about.html"}},[_vm._v("关于")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index/index.vue?vue&type=template&id=ca6de082&

// EXTERNAL MODULE: ./node_modules/_regenerator-runtime@0.13.3@regenerator-runtime/runtime.js
var runtime = __webpack_require__("63ff");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("57f0");

// EXTERNAL MODULE: ./node_modules/_axios@0.18.1@axios/index.js
var _axios_0_18_1_axios = __webpack_require__("f753");
var _axios_0_18_1_axios_default = /*#__PURE__*/__webpack_require__.n(_axios_0_18_1_axios);

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.11@core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("9e76");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.11@core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("9dd9");

// CONCATENATED MODULE: ./src/utils/core/cookie.js


var cookie = {
  getCookie: function getCookie(name) {
    // 读取COOKIE
    var reg = new RegExp('(^| )' + name + '(?:=([^;]*))?(;|$)');
    var val = document.cookie.match(reg);

    if (!val || !val[2]) {
      return '';
    }

    var res = val[2];

    try {
      if (/(%[0-9A-F]{2}){2,}/.test(res)) {
        // utf8编码
        return decodeURIComponent(res);
      } else {
        // unicode编码
        return unescape(res);
      }
    } catch (e) {
      return unescape(res);
    }
  },
  setCookie: function setCookie(name, value, expires, path, domain, secure) {
    // 写入COOKIES

    /* eslint-disable */
    var exp = new Date();
    expires = expires || null;
    path = path || '/';
    domain = domain || null;
    secure = secure || false;
    if (expires) exp.setMinutes(exp.getMinutes() + parseInt(expires));
    document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
  },
  delCookie: function delCookie(name, path, domain, secure) {
    // 删除cookie
    var value = this.getCookie(name);

    if (value != null) {
      var exp = new Date();
      exp.setMinutes(exp.getMinutes() - 1000);
      path = path || '/';
      document.cookie = name + '=;expires=' + exp.toGMTString() + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
    }
  }
};
/* harmony default export */ var core_cookie = (cookie);
// CONCATENATED MODULE: ./src/utils/core/http.js



/* eslint-disable */

 // 默认配置

_axios_0_18_1_axios_default.a.defaults.timeout = 10000; // 超时
// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL; // 不同环境下的BASE_URL
// 请求拦截

_axios_0_18_1_axios_default.a.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
}); // 响应拦截

_axios_0_18_1_axios_default.a.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
}); // get请求

function get(_x) {
  return _get.apply(this, arguments);
}

function _get() {
  _get = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url) {
    var params,
        res,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.prev = 1;
            _context.next = 4;
            return _axios_0_18_1_axios_default.a.get(url, params);

          case 4:
            res = _context.sent;
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              resolve(res.data);
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _get.apply(this, arguments);
}

var os = {
  windows: /Windows/ig.test(navigator.userAgent),
  macos: /Mac OS/ig.test(navigator.userAgent)
}; // post 请求

function post(_x2) {
  return _post.apply(this, arguments);
}

function _post() {
  _post = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(url) {
    var params,
        res,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            _context2.prev = 1;
            _context2.next = 4;
            return _axios_0_18_1_axios_default.a.post(url, params);

          case 4:
            res = _context2.sent;
            console.log(url);
            return _context2.abrupt("return", new Promise(function (resolve) {
              var data = res.body;

              if (data.retcode === 0) {
                resolve(res.data);
              }
            }));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _post.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/style/index.less
var style = __webpack_require__("cd22");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5a76954c-vue-loader-template"}!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./src/components/header/header.vue?vue&type=template&id=525827d6&
var headervue_type_template_id_525827d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_c('div',{staticClass:"bd"},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__("3ab3")}}),_c('div',{staticClass:"right-part"},[_c('span',{attrs:{"data-id":"spUsername"}},[_vm._v(_vm._s(_vm.username))]),_vm._m(0)])])])}
var headervue_type_template_id_525827d6_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('a',{staticClass:"link",attrs:{"href":"javascript:void(0)"}},[_vm._v("注销")])])}]


// CONCATENATED MODULE: ./src/components/header/header.vue?vue&type=template&id=525827d6&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./src/components/header/header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var headervue_type_script_lang_js_ = ({
  name: 'Header',
  data: function data() {
    return {
      username: '匿名'
    };
  },
  created: function created() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/components/header/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/header/header.vue?vue&type=style&index=0&lang=scss&
var headervue_type_style_index_0_lang_scss_ = __webpack_require__("a14e");

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.0@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("623f");

// CONCATENATED MODULE: ./src/components/header/header.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_headervue_type_script_lang_js_,
  headervue_type_template_id_525827d6_render,
  headervue_type_template_id_525827d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var header = (component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./src/pages/index/index.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var indexvue_type_script_lang_js_ = ({
  components: {
    Header: header
  },
  methods: {
    // 接口调用示例
    getInfo: function () {
      var _getInfo = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var params, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  test: 'test'
                };
                _context.next = 3;
                return post('/test', params);

              case 3:
                result = _context.sent;
                console.log(result);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInfo() {
        return _getInfo.apply(this, arguments);
      }

      return getInfo;
    }()
  }
});
// CONCATENATED MODULE: ./src/pages/index/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_indexvue_type_script_lang_js_ = (indexvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/index/index.vue





/* normalize component */

var index_component = Object(componentNormalizer["a" /* default */])(
  pages_indexvue_type_script_lang_js_,
  indexvue_type_template_id_ca6de082_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var index = (index_component.exports);
// CONCATENATED MODULE: ./src/pages/index/index.js






new vue_runtime_esm["a" /* default */]({
  el: '#content',
  render: function render(h) {
    return h(index);
  }
});

/***/ }),

/***/ "a14e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f066");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cd22":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f066":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[1,2,1,0,5,6]]]);