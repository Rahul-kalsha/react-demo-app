(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{66:function(t,e,n){t.exports=n(80)},71:function(t,e,n){},73:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(25),i=n.n(a),l=(n(71),n(73),n(3)),c=n(57),u=n(177),s=n(186),f=n(187),h=n(182),p=n(94),m=n.n(p),d=function(){return r.createElement(r.Fragment,null,r.createElement(s.a,{sx:{minWidth:275}},r.createElement(f.a,{variant:"outlined"},r.createElement(s.a,{component:"form",sx:{display:"block",maxWidth:"450px",margin:"auto",p:"10px","& button":{p:"10px",width:"100%",mt:"10px"},"& .MuiTextField-root":{m:"5px 0px 10px 0px",width:"100%"}},noValidate:!0,autoComplete:"off"},r.createElement(u.a,{label:"Username",defaultValue:"",helperText:"Please enter your user name"}),r.createElement(u.a,{label:"Password",defaultValue:"",helperText:"Please enter your password"}),r.createElement(h.a,{variant:"contained",endIcon:r.createElement(m.a,null)},"Login")))))},v=function(){return o.a.createElement("div",null,"Signup")},g=function(){return o.a.createElement("div",null,"Dashboard")},y=n(20),E=n(8),x=n(188),w=n(189),b=n(190),L=n(191),k=n(77),O=n(62),T=n.n(O),j=n(183),_=n(184),S=n(176),F=n(179);function G(){G=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(T){l=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=x(i,n);if(l){if(l===s)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=c;var s={};function f(){}function h(){}function p(){}var m={};l(m,o,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(k([])));v&&v!==e&&n.call(v,o)&&(m=v);var g=p.prototype=f.prototype=Object.create(m);function y(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,l){var c=u(t[o],t,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,l)},function(t){r("throw",t,i,l)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,l)})}l(c.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,l(g,"constructor",p),l(p,"constructor",h),h.displayName=l(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(E.prototype),l(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(c(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},y(g),l(g,i,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var P=[{label:"Login",navigateTo:"/login"},{label:"Signup",navigateTo:"/signup"},{label:"Dashboard",navigateTo:"/dashboard"}],C=["Profile","Account","Dashboard","Logout"],N=function(){var t=r.useState(null),e=Object(E.a)(t,2),n=e[0],o=e[1],a=r.useState(null),i=Object(E.a)(a,2),c=i[0],u=i[1],f=Object(l.j)(),p=function(){var t=Object(y.a)(G().mark(function t(e){return G().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Test",e),o(null);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),m=function(){u(null)};return r.createElement(x.a,{position:"static"},r.createElement(j.a,{maxWidth:"xl"},r.createElement(w.a,{disableGutters:!0},r.createElement(s.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},r.createElement(b.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(t){o(t.currentTarget)},color:"inherit"},r.createElement(T.a,null)),r.createElement(k.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:p,sx:{display:{xs:"block",md:"none"}}},P.map(function(t){return r.createElement(F.a,{key:t.label,onClick:function(){p(t),f(t.navigateTo,{replace:!0})}},r.createElement(L.a,{textAlign:"center"},t.label))}))),r.createElement(s.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},P.map(function(t){return r.createElement(h.a,{key:t.label,onClick:function(){p(t),f(t.navigateTo,{replace:!0})},sx:{my:2,color:"white",display:"block"}},t.label)})),r.createElement(s.a,{sx:{flexGrow:0}},r.createElement(S.a,{title:"Open settings"},r.createElement(b.a,{onClick:function(t){u(t.currentTarget)},sx:{p:0}},r.createElement(_.a,null))),r.createElement(k.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(c),onClose:m},C.map(function(t){return r.createElement(F.a,{key:t,onClick:m},r.createElement(L.a,{textAlign:"center"},t))}))))))},A=function(){return Object(l.m)([{path:"/login",element:o.a.createElement(d,null)},{path:"/signup",element:o.a.createElement(v,null)},{path:"/dashboard",element:o.a.createElement(g,null),children:[]}])};var I=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement(c.a,null,o.a.createElement(N,null),o.a.createElement(A,null))))},z=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,175)).then(function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),a(t),i(t)})};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),z()}},[[66,3,2]]]);
//# sourceMappingURL=main.abf332c5.chunk.js.map