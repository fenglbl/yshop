(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0aaf":function(t,n,e){"use strict";e.r(n);var i=e("877a"),o=e("becb");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("5d41");var r,u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"3ca675b8",null,!1,i["a"],r);n["default"]=c.exports},"2ca5":function(t,n,e){var i=e("6e51");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("155bf9a6",i,!0,{sourceMap:!1,shadowMode:!1})},"469f":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("7d7b")},"5d41":function(t,n,e){"use strict";var i=e("2ca5"),o=e.n(i);o.a},"5d73":function(t,n,e){t.exports=e("469f")},"6e51":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.login[data-v-3ca675b8]{position:fixed;width:100%;height:100%;background-color:#73cbb6}.login .icon[data-v-3ca675b8]{position:fixed;top:%?100?%;left:50%;margin-left:%?-70?%}.login .icon .image[data-v-3ca675b8]{width:%?140?%;height:%?140?%}.login .form-box[data-v-3ca675b8]{position:fixed;top:%?350?%;left:50%;width:%?650?%;background-color:#fff;text-align:center;margin-left:%?-325?%;padding:%?30?% 0;border-radius:%?20?%;z-index:10}.login .form-box .title[data-v-3ca675b8]{font-size:%?32?%;font-weight:700;padding:%?10?% 0;border-bottom:%?4?% solid #f50}.login .form-box .form[data-v-3ca675b8]{margin:%?40?%}.login .form-box .form .input[data-v-3ca675b8]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% 0;margin:%?30?% 0;border-bottom:1px solid #f1f1f1}.login .form-box .form .input uni-image[data-v-3ca675b8]{width:%?48?%;height:%?48?%}.login .form-box .form .input uni-input[data-v-3ca675b8]{padding-left:%?20?%;text-align:left}.login .form-box .form .btn-login[data-v-3ca675b8]{margin-top:%?40?%;height:%?80?%;border-radius:%?60?%;line-height:%?80?%;color:#fff;font-size:%?32?%;font-weight:700;background:-webkit-gradient(linear,left top,right top,from(#f35447),to(#ff8e3c));background:-webkit-linear-gradient(left,#f35447,#ff8e3c);background:linear-gradient(90deg,#f35447,#ff8e3c);background:-moz-linear-gradient(to right,#f35447 0,#ff8e3c 100%)}.login .form-box .to-reg[data-v-3ca675b8]{font-size:%?30?%;color:#d3d3d3}.login .form-box .to-reg uni-text[data-v-3ca675b8]{color:#73cbb6}.login .dc[data-v-3ca675b8]{position:fixed;background-color:#f0ad4e;left:50%;border-radius:%?8?%;opacity:.5}.login .dc1[data-v-3ca675b8]{width:%?600?%;height:%?40?%;margin-left:%?-300?%;z-index:9;top:%?843?%}.login .dc2[data-v-3ca675b8]{width:%?550?%;height:%?60?%;margin-left:%?-275?%;z-index:9;top:%?833?%}.login .dc3[data-v-3ca675b8]{width:%?500?%;height:%?60?%;margin-left:%?-250?%;z-index:9;top:%?843?%}',""])},"768b":function(t,n,e){"use strict";e.r(n);var i=e("a745"),o=e.n(i);function a(t){if(o()(t))return t}var r=e("5d73"),u=e.n(r);function c(t,n){var e=[],i=!0,o=!1,a=void 0;try{for(var r,c=u()(t);!(i=(r=c.next()).done);i=!0)if(e.push(r.value),n&&e.length===n)break}catch(s){o=!0,a=s}finally{try{i||null==c["return"]||c["return"]()}finally{if(o)throw a}}return e}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function d(t,n){return a(t)||c(t,n)||s()}e.d(n,"default",function(){return d})},"7d7b":function(t,n,e){var i=e("e4ae"),o=e("7cd6");t.exports=e("584a").getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return i(n.call(t))}},"877a":function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"login"},[e("v-uni-view",{staticClass:"icon"},[e("v-uni-image",{staticClass:"image",attrs:{src:"../../static/img/login/icon.png",mode:""}})],1),e("v-uni-view",{staticClass:"form-box"},[e("v-uni-text",{staticClass:"title"},[t._v("账号登录")]),e("v-uni-view",{staticClass:"form"},[e("v-uni-view",{staticClass:"input"},[e("v-uni-image",{attrs:{src:"../../static/img/login/手机.png",mode:""}}),e("v-uni-input",{attrs:{type:"number",value:"1895038739",placeholder:"输入手机号码",maxlength:"11"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.setUser.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"input"},[e("v-uni-image",{attrs:{src:"../../static/img/login/密码.png",mode:""}}),e("v-uni-input",{attrs:{type:"text",value:"12345",password:"true",placeholder:"输入登录密码"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.setPass.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"btn-login",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.login.apply(void 0,arguments)}}},[t._v("登录")])],1),e("v-uni-view",{staticClass:"to-reg"},[t._v("没有账号？"),e("v-uni-text",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toReg.apply(void 0,arguments)}}},[t._v("立即注册")])],1)],1),e("v-uni-view",{staticClass:"dc dc1"}),e("v-uni-view",{staticClass:"dc dc2"}),e("v-uni-view",{staticClass:"dc dc3"})],1)},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},becb:function(t,n,e){"use strict";e.r(n);var i=e("d59f"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},d59f:function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("768b")),a=e("e21e"),r={data:function(){return{user:"",pass:""}},onLoad:function(t){t.page},onReady:function(){console.log(this.$store.getters.token)},methods:{setUser:function(t){this.user=t.detail.value},setPass:function(t){this.pass=t.detail.value},login:function(){var t=this;(0,a.login)({user:this.user,pass:this.pass}).then(function(n){var e=(0,o.default)(n,2),i=(e[0],e[1].data);if(console.log(n),1==i.code){var a=i.data.token;t.$store.commit("login",a),console.log(i),uni.setStorageSync("token",a),uni.navigateBack()}uni.showToast({icon:1==i.code?"success":"none",title:i.msg,mask:!0})})},toReg:function(){uni.navigateTo({url:"../reg/reg"})}}};n.default=r},e21e:function(t,n,e){"use strict";var i=e("288e"),o=i(e("768b")),a=i(e("795b")),r="http://47.106.131.165:8182/v1";t.exports={index:function(){return uni.request({url:r+"/index"})},login:function(t){return uni.request({url:r+"/login",data:t,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"}})},cart:function(){return uni.request({url:r+"/cart",header:{token:uni.getStorageSync("token")}})},category:function(){return uni.request({url:r+"/category"})},userList:function(){return uni.request({url:r+"/userList",header:{token:uni.getStorageSync("token")}})},detail:function(t){return uni.request({url:r+"/detail",data:{id:t},header:{token:uni.getStorageSync("token")}})},user:function(){return new a.default(function(t,n){uni.request({url:r+"/user",header:{token:uni.getStorageSync("token")}}).then(function(n){var e=(0,o.default)(n,2),i=(e[0],e[1].data);1==i.code&&uni.setStorageSync("token",i.data.token),t(i)})})},collect:function(t,n){return uni.request({url:r+"/collect/"+t,method:"POST",header:{token:uni.getStorageSync("token"),sid:n}})}}}}]);