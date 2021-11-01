"use strict";
exports.id = 503;
exports.ids = [503];
exports.modules = {

/***/ 7294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(2408);
} else {}


/***/ }),

/***/ 2503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ Z)
});

// UNUSED EXPORTS: SWRConfig, mutate, unstable_serialize, useSWRConfig

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/dequal/lite/index.mjs
var has = Object.prototype.hasOwnProperty;

function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

;// CONCATENATED MODULE: ./node_modules/swr/dist/index.esm.js
function l(e,r,n,t){return new(n||(n=Promise))(function(i,u){function o(e){try{c(t.next(e))}catch(e){u(e)}}function a(e){try{c(t.throw(e))}catch(e){u(e)}}function c(e){var r;e.done?i(e.value):(r=e.value,r instanceof n?r:new n(function(e){e(r)})).then(o,a)}c((t=t.apply(e,r||[])).next())})}function s(e,r){var n,t,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,t&&(i=2&u[0]?t.return:u[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,u[1])).done)return i;switch(t=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,t=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=r.call(e,o)}catch(e){u=[6,e],t=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var d={}[0],v=function(e){return e===d},h=function(e){return"function"==typeof e},g=function(){},p=function(e,r){return Object.assign({},e,r)},y=!0,b="undefined"!=typeof window,w="undefined"!=typeof document,m=b&&window.addEventListener||g,O=w&&document.addEventListener||g,V={isOnline:function(){return y},isVisible:function(){var e=w&&document.visibilityState;return!!v(e)||"hidden"!==e}},k={initFocus:function(e){O("visibilitychange",e),m("focus",e)},initReconnect:function(e){m("online",function(){y=!0,e()}),m("offline",function(){y=!1})}},T="undefined"==typeof window||"Deno"in window,R=T?null:window.requestAnimationFrame,S=R?function(e){return R(e)}:function(e){return setTimeout(e,1)},E=T?react.useEffect:react.useLayoutEffect,I="undefined"!=typeof navigator&&navigator.connection,x=!T&&I&&(["slow-2g","2g"].includes(I.effectiveType)||I.saveData),P=new WeakMap,F=0;function M(e){if(h(e))try{e=e()}catch(r){e=""}var r;return Array.isArray(e)?(r=e,e=function(e){if(!e.length)return"";for(var r="arg",n=0;n<e.length;++n){var t=e[n],i=d;null===t||"object"!=typeof t&&!h(t)?i=JSON.stringify(t):P.has(t)?i=P.get(t):(i=F,P.set(t,F++)),r+="$"+i}return r}(e)):r=[e=String(e||"")],[e,r,e?"$err$"+e:"",e?"$req$"+e:""]}var W=new WeakMap,$=function(e,r,n,t,i,u){void 0===u&&(u=!1);var o=W.get(e),a=o[0],c=o[1],f=a[r],l=c[r];if(l)for(var s=0;s<l.length;++s)l[s](n,t,i);return u&&f&&f[0]?f[0](2).then(function(){return e.get(r)}):e.get(r)},q=0,C=function(){return++q},D=function(e,r,n,t){return void 0===t&&(t=!0),l(void 0,void 0,void 0,function(){var i,u,o,a,c,f,l,g,p,y,b;return s(this,function(s){switch(s.label){case 0:if(i=M(r),u=i[0],o=i[2],!u)return[2];if(a=W.get(e),c=a[2],f=a[3],v(n))return[2,$(e,u,e.get(u),e.get(o),d,t)];if(p=c[u]=C(),f[u]=0,h(n))try{n=n(e.get(u))}catch(e){n=d,g=e}if(!n||!h(n.then))return[3,5];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,n];case 2:return l=s.sent(),[3,4];case 3:return y=s.sent(),g=y,[3,4];case 4:if(p!==c[u]){if(g)throw g;return[2,l]}return[3,6];case 5:l=n,s.label=6;case 6:return v(l)||e.set(u,l),e.set(o,g),f[u]=C(),[4,$(e,u,l,g,d,t)];case 7:if(b=s.sent(),g)throw g;return[2,b]}})})};function L(e,r){for(var n in e)e[n][0]&&e[n][0](r)}function j(e,r){if(!W.has(e)){var n=p(k,r),t={},i=D.bind(d,e);return W.set(e,[t,{},{},{},{},{},i]),T||(n.initFocus(L.bind(d,t,0)),n.initReconnect(L.bind(d,t,1))),[e,i]}}var A=j(new Map),G=A[0],H=A[1],J=p({onLoadingSlow:g,onSuccess:g,onError:g,onErrorRetry:function(e,r,n,t,i){if(V.isVisible()){var u=n.errorRetryCount,o=i.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*n.errorRetryInterval;!v(u)&&o>u||setTimeout(t,a,i)}},revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:x?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:x?5e3:3e3,compare:dequal,isPaused:function(){return!1},cache:G,mutate:H,fallback:{}},V);function N(e,r){var n=p(e,r);if(!r)return n;var t=e.use,i=e.fallback,u=r.use,o=r.fallback;return t&&u&&(n.use=t.concat(u)),i&&o&&(n.fallback=p(i,o)),n}var z=(0,react.createContext)({});function B(e){return h(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]}var K,Q=function(e,r,n){var t=r[e]||(r[e]=[]);return t.push(n),function(){var e=t.indexOf(n);e>=0&&(t[e]=t[t.length-1],t.pop())}},U={dedupe:!0},X=Object.defineProperty(function(e){var r=e.children,n=e.value,o=N((0,react.useContext)(z),n),a=n&&n.provider,c=(0,react.useState)(function(){return a?j(a(o.cache||G),n):d})[0];return c&&(o.cache=c[0],o.mutate=c[1]),(0,react.createElement)(z.Provider,{value:o},r)},"default",{value:J}),Y=function(e){return M(e)[0]},Z=(K=function(e,r,n){var t=n.cache,u=n.compare,f=n.fallbackData,h=n.suspense,g=n.revalidateOnMount,y=n.refreshInterval,b=n.refreshWhenHidden,w=n.refreshWhenOffline,m=W.get(t),O=m[0],V=m[1],k=m[2],R=m[3],I=m[4],x=m[5],P=M(e),F=P[0],q=P[1],L=P[2],j=P[3],A=(0,react.useRef)(!1),G=(0,react.useRef)(!1),H=(0,react.useRef)(F),J=(0,react.useRef)(n),N=function(){return J.current},z=t.get(F),B=v(f)?n.fallback[F]:f,K=v(z)?B:z,X=t.get(L);if(h&&(!F||!r))throw new Error("useSWR requires either key or fetcher with suspense mode");var Y=function(){return v(g)?h?!A.current&&!v(K):v(K)||n.revalidateIfStale:g},Z=!(!F||!r)&&(!!t.get(j)||!A.current&&Y()),_=function(e,r){var n=(0,react.useState)({})[1],t=(0,react.useRef)(e),u=(0,react.useRef)({data:!1,error:!1,isValidating:!1}),c=(0,react.useCallback)(function(e){var i=!1,o=t.current;for(var a in e){var c=a;o[c]!==e[c]&&(o[c]=e[c],u.current[c]&&(i=!0))}i&&!r.current&&n({})},[]);return E(function(){t.current=e}),[t,u.current,c]}({data:K,error:X,isValidating:Z},G),ee=_[0],re=_[1],ne=_[2],te=(0,react.useCallback)(function(e){return l(void 0,void 0,void 0,function(){var i,o,a,c,f,l,h,g,p;return s(this,function(s){switch(s.label){case 0:if(!F||!r||G.current||N().isPaused())return[2,!1];a=!0,c=e||{},f=!v(I[F])&&c.dedupe,l=function(){return!G.current&&F===H.current&&A.current},h=function(){delete I[F],delete x[F]},s.label=1;case 1:return s.trys.push([1,6,,7]),t.set(j,!0),ne({isValidating:!0}),f||$(t,F,ee.current.data,ee.current.error,!0),f?(o=x[F],[4,I[F]]):[3,3];case 2:return i=s.sent(),[3,5];case 3:return n.loadingTimeout&&!t.get(F)&&setTimeout(function(){a&&l()&&N().onLoadingSlow(F,n)},n.loadingTimeout),x[F]=o=C(),[4,I[F]=r.apply(r,q)];case 4:i=s.sent(),setTimeout(function(){x[F]===o&&h()},n.dedupingInterval),l()&&N().onSuccess(i,F,n),s.label=5;case 5:return x[F]!==o?[2,!1]:(t.set(L,d),t.set(j,!1),g={isValidating:!1},!v(k[F])&&(o<=k[F]||o<=R[F]||0===R[F])?(ne(g),[2,!1]):(v(ee.current.error)||(g.error=d),u(ee.current.data,i)||(g.data=i),u(t.get(F),i)||t.set(F,i),ne(g),f||$(t,F,i,g.error,!1),[3,7]));case 6:return p=s.sent(),h(),t.set(j,!1),N().isPaused()?(ne({isValidating:!1}),[2,!1]):(t.set(L,p),ee.current.error!==p&&(ne({isValidating:!1,error:p}),f||$(t,F,d,p,!1)),l()&&(N().onError(p,F,n),n.shouldRetryOnError&&N().onErrorRetry(p,F,n,te,{retryCount:(c.retryCount||0)+1,dedupe:!0})),[3,7]);case 7:return a=!1,[2,!0]}})})},[F]),ie=(0,react.useCallback)(function(e,r){return D(t,H.current,e,r)},[]);if(E(function(){J.current=n}),E(function(){if(F){var e=A.current,r=te.bind(d,U),n=function(){return N().isVisible()&&N().isOnline()},t=0,i=Q(F,V,function(e,r,n){ne(p({error:r,isValidating:n},u(e,ee.current.data)?null:{data:e}))}),o=Q(F,O,function(e){if(0===e){var i=Date.now();N().revalidateOnFocus&&i>t&&n()&&(t=i+N().focusThrottleInterval,r())}else if(1===e)N().revalidateOnReconnect&&n()&&r();else if(2===e)return te()});return G.current=!1,H.current=F,e&&ne({data:K,error:X,isValidating:Z}),Y()&&(v(K)||T?r():S(r)),A.current=!0,function(){G.current=!0,i(),o()}}},[F,te]),E(function(){var e;function r(){y&&-1!==e&&(e=setTimeout(n,y))}function n(){ee.current.error||!b&&!N().isVisible()||!w&&!N().isOnline()?r():te(U).then(function(){return r()})}return r(),function(){e&&(clearTimeout(e),e=-1)}},[y,b,w,te]),(0,react.useDebugValue)(K),h&&v(K))throw v(X)?te(U):X;return{mutate:ie,get data(){return re.data=!0,K},get error(){return re.error=!0,X},get isValidating(){return re.isValidating=!0,Z}}},function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=B(e),i=n[0],u=n[1],o=n[2],a=p(J,(0,react.useContext)(z)),c=N(a,o),f=K,l=c.use;if(l)for(var s=l.length;s-- >0;)f=l[s](f);return f(i,u||c.fetcher,c)}),_=function(){return p(J,t(z))};


/***/ })

};
;