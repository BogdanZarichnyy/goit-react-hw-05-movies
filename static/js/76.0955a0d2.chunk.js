"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(885),c=n(791),a=n(739),o=n(527),i=n(432),u="Cast_list__GlWio",s="Cast_image__mOsuM",f="Cast_title__0cH9s",l="Cast_text__P2vgu",p=n(184),h=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],h=e[1],m=(0,a.UO)().movieId;if((0,c.useEffect)((function(){(0,o.XT)("movie/".concat(m,"/credits")).then((function(t){return t.json()})).then((function(t){h(t.cast)})).catch((function(t){return console.log(t)}))}),[m]),n)return(0,p.jsx)("ul",{className:u,children:n.map((function(t){var e=t.cast_id,n=t.character,r=t.original_name,c=t.profile_path;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{className:s,src:c?"https://image.tmdb.org/t/p/w500".concat(c):i,alt:r}),(0,p.jsxs)("h2",{className:f,children:["Author: ",r]}),(0,p.jsx)("p",{className:l,children:n})]},e)}))})}},527:function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n,r,c,a,o){try{var i=t[a](o),u=i.value}catch(s){return void n(s)}i.done?e(u):Promise.resolve(u).then(r,c)}n.d(e,{tx:function(){return h},XT:function(){return l},V0:function(){return p}});var i=n(757),u=n.n(i),s="539ecd3158acd68003a6c74a29ad2087",f="https://api.themoviedb.org/3/",l=function(){var t,e=(t=u().mark((function t(e){var n,r,c=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},r=a({api_key:s,language:"en-US"},n),t.prev=2,t.next=5,fetch("".concat(f).concat(e,"?")+new URLSearchParams(r).toString());case 5:return t.abrupt("return",t.sent);case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})),function(){var e=this,n=arguments;return new Promise((function(r,c){var a=t.apply(e,n);function i(t){o(a,r,c,i,u,"next",t)}function u(t){o(a,r,c,i,u,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}(),p=function(t,e){return l(t,{query:e,page:1,include_adult:"false"})},h=function(t){return l(t,{page:1})}},432:function(t,e,n){t.exports=n.p+"static/media/music.061d4a5fa4b6eccf9ce5.jpg"}}]);
//# sourceMappingURL=76.0955a0d2.chunk.js.map