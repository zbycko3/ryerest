!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"h",(function(){return c})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"g",(function(){return l}));var o=2592e3,r="__",i={atid:"atid",ath:"ath",atid2:"atid2",ath2:"ath2",atu:"atu",ats:"ats",att:"att"},a={source_tid:"wph_tid",source_cid:"wph_cid",source_uid:"wph_uid",source_vid:"wph_vid",source_hash:"wph_hash",source_host:"wph_host",source_clid:"wpclid"},c={user:"wph_a",session:"wph_s"},s={wpclid:{name:"__wph_clid"},wph_a:{duration:31536e3},wph_s:{duration:1800}},u=10,l="wph_init"},function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return l}));var o=n(0);function r(t,e,n){var o,r=new Date;n?(r.setTime(r.getTime()+1e3*n),o="; expires=".concat(r.toGMTString())):o="",window.document.cookie="".concat(t,"=").concat(e).concat(o,"; path=/")}function i(t){for(var e="".concat(t,"="),n=window.document.cookie.split(";"),o=0;o<n.length;o++){for(var r=n[o];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(e))return r.substring(e.length,r.length)}return null}function a(t,e,n){r(t,e+"."+(new Date).getTime(),n)}function c(t){var e=i(t);if(!e)return null;var n=e.split(".");if(n.length>1&&!isNaN(n.slice(-1)[0])){var o=n.pop(),r=new Date;return r.setTime(o),{value:n.join("."),date:r}}return{value:e,date:null}}function s(t){r(t,"",-1)}function u(t){return o.a[t]&&o.a[t].name||"".concat(o.c).concat(t)}function l(t){return o.a[t]&&o.a[t].duration||o.b}e.a={toQueryString:function(t){return Object.keys(t).map((function(e){var n=escape(e);return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(t[n]))})).join("&")},getQueryParams:function(t){var e,n={},o=/[?&]?([^=]+)=([^&]*)/g;for(t=(t=t.split("?").pop()).split("+").join(" ");e=o.exec(t);)n[decodeURIComponent(escape(e[1]))]=decodeURIComponent(escape(encodeURIComponent(e[2])));return n},parseUtm:function(){return location.search.substring(1).split("&").reduce((function(t,e){if(e.indexOf("utm_")>-1){var n=e.split("=");t[n[0]]=n[1]}return t}),{})},hostFromUrl:function(t){var e=t.indexOf("://")>-1;return t.split("/")[e?2:0]},setCookie:r,getCookie:i,setCompoundCookie:a,getCompoundCookie:c,deleteCookie:s}},function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"i",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"f",(function(){return a})),n.d(e,"j",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return h}));var o=["https://pixel.wp.pl/api/collect"],r="https://pixel.wp.pl/api/logger",i="https://pixel.wp.pl/api/fr",a="https://pixel.wp.pl/w/cs.html",c="https://panel.domodi.pl/ecommerce",s="//allani.pl/affi/track",u="https://trackingshoptransactions.domodi.pl/api/TrackingShopTransaction/TrackShopTransaction",l="visitor_wp_tr",d="wp_tr",h="wp_tr"},function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(0);function i(){return String(Math.floor(Math.random()*Math.pow(10,r.e)))}function a(t){return Object(o.c)(Object(o.e)(t))}function c(t,e){var n=Object(o.e)(t);e?Object(o.f)(n,e,Object(o.d)(t)):Object(o.b)(n)}var s=n(2);function u(t){function e(t,e){return t<<e|t>>>32-e}function n(t){var e,n="";for(e=7;e>=0;e--)n+=(t>>>4*e&15).toString(16);return n}var o,r,i,a,c,s,u,l,d,h=new Array(80),f=1732584193,p=4023233417,m=2562383102,g=271733878,y=3285377520,v=(t=function(t){t=t.replace(/\r\n/g,"\n");for(var e="",n=0;n<t.length;n++){var o=t.charCodeAt(n);o<128?e+=String.fromCharCode(o):o>127&&o<2048?(e+=String.fromCharCode(o>>6|192),e+=String.fromCharCode(63&o|128)):(e+=String.fromCharCode(o>>12|224),e+=String.fromCharCode(o>>6&63|128),e+=String.fromCharCode(63&o|128))}return e}(t)).length,b=new Array;for(r=0;r<v-3;r+=4)i=t.charCodeAt(r)<<24|t.charCodeAt(r+1)<<16|t.charCodeAt(r+2)<<8|t.charCodeAt(r+3),b.push(i);switch(v%4){case 0:r=2147483648;break;case 1:r=t.charCodeAt(v-1)<<24|8388608;break;case 2:r=t.charCodeAt(v-2)<<24|t.charCodeAt(v-1)<<16|32768;break;case 3:r=t.charCodeAt(v-3)<<24|t.charCodeAt(v-2)<<16|t.charCodeAt(v-1)<<8|128}for(b.push(r);b.length%16!=14;)b.push(0);for(b.push(v>>>29),b.push(v<<3&4294967295),o=0;o<b.length;o+=16){for(r=0;r<16;r++)h[r]=b[o+r];for(r=16;r<=79;r++)h[r]=e(h[r-3]^h[r-8]^h[r-14]^h[r-16],1);for(a=f,c=p,s=m,u=g,l=y,r=0;r<=19;r++)d=e(a,5)+(c&s|~c&u)+l+h[r]+1518500249&4294967295,l=u,u=s,s=e(c,30),c=a,a=d;for(r=20;r<=39;r++)d=e(a,5)+(c^s^u)+l+h[r]+1859775393&4294967295,l=u,u=s,s=e(c,30),c=a,a=d;for(r=40;r<=59;r++)d=e(a,5)+(c&s|c&u|s&u)+l+h[r]+2400959708&4294967295,l=u,u=s,s=e(c,30),c=a,a=d;for(r=60;r<=79;r++)d=e(a,5)+(c^s^u)+l+h[r]+3395469782&4294967295,l=u,u=s,s=e(c,30),c=a,a=d;f=f+a&4294967295,p=p+c&4294967295,m=m+s&4294967295,g=g+u&4294967295,y=y+l&4294967295}return(d=n(f)+n(p)+n(m)+n(g)+n(y)).toLowerCase()}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={setMatchedParamsAsCookie:function(t,e,n){Object.keys(e).forEach((function(r){var i=e[r];t.hasOwnProperty(i)&&o.a.setCookie(Object(o.e)(i),t[i],n)}))},generateTransactionSignature:function(t){var e=["t"],n=Object.keys(t).reduce((function(n,o){return-1===e.indexOf(o)&&(n[o]=t[o]),n}),{});return"".concat(r.c,"wph.").concat(u(o.a.toQueryString(n)))},getDebugInfo:function(t){return"debug"===t[this.name]},getCookies:function(){var t=r.c;return{allani:{id:o.a.getCookie(t+r.f.atid),hash:o.a.getCookie(t+r.f.ath)},domodi:{id:o.a.getCookie(t+r.f.atid2),hash:o.a.getCookie(t+r.f.ath2),shopId:o.a.getCookie(t+r.f.ats),userId:o.a.getCookie(t+r.f.atu),time:o.a.getCookie(t+r.f.att)},global:Object.keys(r.d).reduce((function(t,e){return t[e]=o.a.getCookie(Object(o.e)(r.d[e])),t}),{}),session:Object.keys(r.h).reduce((function(t,e){return t[e]=a(r.h[e])&&a(r.h[e]).value,t}),{})}},getBaseData:function(){return{k:this.key,h:location.hostname,r:document.referrer,l:location.href,t:Date.now(),v:"4.0.17"}},getSessionData:function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[r.h[n]]=t[n]);return this.newSession&&(e[r.g]=1),e},createPixel:function(t,e){var n=e?[e]:s.e,r=u(o.a.toQueryString(t));return t.i=r,n.map((function(e){var n=new Image(1,1),r=e.indexOf("?")>-1;return n.src="".concat(e).concat(r?"&":"?").concat(o.a.toQueryString(t)),n}))},contentMapper:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===t.content_ids&&t.contents&&(t.content_ids=t.contents.map((function(t){return t.id?t.id:0}))),Object.keys(t).reduce((function(e,n){var o=t[n];if(o||0===o)switch(n){case"content_ids":e.c_item_ids=o,e.c_content_ids=o;break;case"contents":e.c_contents=JSON.stringify(o);break;case"source_clid":e.wph_clid=o;break;default:e["c_"+n]=o}return e}),{})},warn:function(t){window.console.warn("WPH Pixel:",t,"See",s.j,"for more information.")},trackSession:function(){this.newSession=!1;var t=o.a.hostFromUrl(document.referrer),e=window.location.host,n=o.a.parseUtm(),s=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){l(t,e,n[e])}))}return t}({},o.a.getQueryParams(window.location.search),o.a.getQueryParams(document.referrer))[r.d.source_clid],u=a(r.h.user),d=a(r.h.session);t&&t!==e||n.utm_source||s||!u||!d||d.date.getDate()!==(new Date).getDate()?(this.newSession=!0,u||c(r.h.user,i()),c(r.h.session,i())):(c(r.h.session,d.value),c(r.h.user,u.value))}};function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){m(t,e,n[e])}))}return t}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,"actions",{init:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.key=t;var r=o.a.parseUtm();if((n=f({},n,r))&&"object"===h(n)&&n.constructor===Object){this.blockLegacyRequest=n.blr,delete n.blr;var i=n.overAll;if(delete n.overAll,i)this.opt=n;else{var a={e:"init"},c=this.common.getBaseData.call(this),s=this.common.contentMapper.call(this,n),u=this.common.getCookies.call(this),l=this.common.getSessionData.call(this,u.session),d=this.common.contentMapper.call(this,{source_tid:u.global.source_tid});u.domodi.id&&(d.dtid=u.domodi.id),u.allani.id&&(d.atid=u.allani.id),u.global.source_clid&&(d.wph_clid=u.global.source_clid),this.common.createPixel.call(this,f({},a,c,s,l,d))}}this.modules.forEach((function(t){e.module=f({},e.module,t)})),window.isTest&&window.setTracker(this)},track:function(t){if("string"==typeof t&&this.module.events.hasOwnProperty(t)){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];this.send.apply(this,[t].concat(n))}else this.common.warn("You are sending a non-standard event '".concat(t,"'."))},trackCustom:function(t){var e=h(t);if("string"===e){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.send.apply(this,[t].concat(o))}else this.common.warn("The event name must be of type - string, but you provide a type - ".concat(e))}});var n=f({},r.f,r.d),i=f({},o.a.getQueryParams(window.location.search),o.a.getQueryParams(document.referrer));this.common=d,this.name=e,this.queue=[],this.key=null,this.module={events:{}},this.modules=[],this.common.setMatchedParamsAsCookie(i,n,r.b),this.debug=this.common.getDebugInfo.call(this,i),this.common.trackSession.call(this)}var e,n,i;return e=t,(n=[{key:"registerModule",value:function(t){this.modules.push(t)}},{key:"validateContent",value:function(t){for(var e in t)if(this.module.content&&this.module.content.hasOwnProperty(e)&&(null===t[e]||void 0===t[e]||this.module.content[e].type.name!==t[e].constructor.name))return this.common.warn("'".concat(e,"' must be of type '").concat(this.module.content[e].type.name,"'")),!1;return!0}},{key:"send",value:function(t,e){var n=this.common.getCookies.call(this),r=this.common.getBaseData.call(this),i=this.common.contentMapper.call(this,e),a=this.common.contentMapper.call(this,this.opt),c=this.common.contentMapper.call(this,o.a.parseUtm()),s=this.common.contentMapper.call(this,n.global),u=this.common.getSessionData.call(this,n.session),l={e:t};n.domodi.id&&(l.dtid=n.domodi.id),n.allani.id&&(l.atid=n.allani.id);var d=f({},r,l,i,a,c,s,u);this.validateContent(e),this.queue.push(d),"function"==typeof this.module.events[t]?this.module.events[t].call(this,d,n):this.common.createPixel.call(this,d)}},{key:"push",value:function(t){if("string"==typeof t&&this.actions.hasOwnProperty(t)){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];this.actions[t].apply(this,[].concat(n))}else this.common.warn("You are sending a non-standard action ".concat(t,"."))}}])&&p(e.prototype,n),i&&p(e,i),t}(),y=Object.freeze({events:{Purchase:function(t,e){var n=this.common.generateTransactionSignature.call(this,t);o.a.getCookie(n)?this.common.warn("Transaction already sent."):(this.common.createPixel.call(this,t),this.blockLegacyRequest||(e.domodi.id&&this.common.createPixel.call(this,function(t,e){return{productIds:e.c_item_ids,orderValue:e.c_value,shopId:t.domodi.shopId,userId:t.domodi.userId,timeOfEvent:(new Date).toISOString(),timeOfVisit:t.domodi.time,atid2:t.domodi.id,ath2:t.domodi.hash,orderId:e.c_transaction_id||""}}(e,t),s.h),e.allani.id&&this.common.createPixel.call(this,function(t,e){var n={pids:e.c_item_ids,oval:e.c_value,tid:t.allani.id,th:t.allani.hash,ver:e.v};return e.c_transaction_id&&(n.oid=e.c_transaction_id),n}(e,t),s.d)),o.a.setCookie(n,!0,r.b))},ViewContent:{},AddToCart:{},CustomEvent:{},PageView:{},ViewPage:{}},content:{value:{type:Number},id:{type:String},shipping_cost:{type:Number},discount_code:{type:String},in_stock:{type:Boolean},name:{type:String},currency:{type:String},ean:{type:String},sizes:{type:Array},quantity:{type:Number},transaction_id:{type:String},content_ids:{type:Array},content_type:{type:String},content_category:{type:String},content_category_id:{type:String}}});!function(t,e,n){try{var r=[],i=t.DomodiTrackObject||t.WphTrackObject;i&&i.constructor===Array?r=i:r.push(i||"wph"),r.forEach((function(e){var n=new g(e),o=t[e];n.registerModule(y),o&&o.queue&&o.queue.constructor===Array&&o.queue.forEach((function(t){return n.push.apply(n,t)})),t[e]=n.push.bind(n)}))}catch(t){if(-1!==e.href.indexOf("http")){var a=new Image(1,1),c={t:"error",v:"4.0.17",h:e.href,m:t.message,ua:n.userAgent};t.stack&&(c.s=t.stack),a.src=s.i+"?"+o.a.toQueryString(c)}console.warn(t)}}(window,location,navigator)},function(t,e,n){t.exports=n(3)}]);
//# sourceMappingURL=tr.js.map