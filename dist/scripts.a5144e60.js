parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"481L":[function(require,module,exports) {

},{"./fonts\\Circe-Regular.eot":[["Circe-Regular.d99298b9.eot","8vTJ"],"8vTJ"],"./fonts\\Circe-Regular.woff":[["Circe-Regular.5d6fed0f.woff","gsmp"],"gsmp"],"./fonts\\Circe-Regular.ttf":[["Circe-Regular.9e37d454.ttf","zXaw"],"zXaw"],"./fonts\\Circe-Light.eot":[["Circe-Light.8804826e.eot","RRvV"],"RRvV"],"./fonts\\Circe-Light.woff":[["Circe-Light.9e7bb627.woff","7Bkn"],"7Bkn"],"./fonts\\Circe-Light.ttf":[["Circe-Light.852fb9a8.ttf","9lhK"],"9lhK"],"./fonts\\Circe-Bold.eot":[["Circe-Bold.bf79373d.eot","wZyN"],"wZyN"],"./fonts\\Circe-Bold.woff":[["Circe-Bold.486615a5.woff","XBY1"],"XBY1"],"./fonts\\Circe-Bold.ttf":[["Circe-Bold.a35b91f4.ttf","UrPk"],"UrPk"]}],"D+Gl":[function(require,module,exports) {
function e(){var e=document.querySelector(".content__pie");function t(t){var c=t.getAttribute("data-service");c=document.querySelector(".reality-top_".concat(c)),e.classList.contains("active")?(e.classList.remove("active"),t.classList.remove("active"),c.classList.remove("active")):(t.classList.add("active"),e.classList.add("active"),c.classList.add("active"))}document.querySelectorAll(".content__pie-piece").forEach(function(e,c,i){e.addEventListener("click",function(){t(e)})})}module.exports=e;
},{}],"g2Hq":[function(require,module,exports) {
"use strict";require("./../styles/index.scss");var e=s(require("./components/pie"));function s(e){return e&&e.__esModule?e:{default:e}}(0,e.default)();
},{"./../styles/index.scss":"481L","./components/pie":"D+Gl"}]},{},["g2Hq"], null)
//# sourceMappingURL=scripts.a5144e60.js.map