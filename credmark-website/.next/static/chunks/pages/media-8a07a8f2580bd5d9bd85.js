(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[361],{4864:function(e,t,r){"use strict";r(7294);var n=r(5893);t.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"bg-black py-10 md:py-20",children:(0,n.jsx)("div",{className:"max-w-8xl block m-auto",children:(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 px-5",children:[(0,n.jsxs)("div",{className:"pb-15",children:[(0,n.jsx)("h4",{className:"text-white text-center text-2lg pb-5 pt-0",children:"Learn more about Credmark"}),(0,n.jsxs)("div",{className:"flex justify-center",children:[(0,n.jsx)("button",{type:"button",className:"credmark mr-5 mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-purple",children:"Documentation"}),(0,n.jsx)("button",{type:"button",className:"credmark mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-purple bg-white",children:"Get in touch"})]})]}),(0,n.jsxs)("div",{className:"ml-15",children:[(0,n.jsx)("p",{className:"credmark text-center md:text-left text-white text-base pt-16 md:pt-0",children:"Newsletter"}),(0,n.jsx)("p",{className:"text-white text-center md:text-left text-base",children:"For the latest partnerships, community updates and more"})]})]})})})})}},6518:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return ie},default:function(){return oe}});var n=r(9008);var a=r(6988);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(c){u=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return i}}(e,t)||(0,a.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=r(7294),u=r(5893),c=function(e){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"box col-xs pt-10",children:[(0,u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:(0,u.jsx)("img",{alt:e.alt,src:e.img,className:"cursor-pointer px-5 pb-5"})}),(0,u.jsx)("p",{className:"text-xs text-black font-bold px-5",children:e.date}),(0,u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:(0,u.jsx)("p",{className:"px-5 credmark cursor-pointer text-black text-lg",children:e.description})}),(0,u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:(0,u.jsx)("p",{className:"px-5 cursor-pointer text-black text-base",children:"Read more"})})]})})},s=r(381),l=r.n(s),d=function(e){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"bg-lightpink py-20",children:(0,u.jsxs)("div",{className:"max-w-6xl px-5 block m-auto",children:[(0,u.jsx)("h1",{className:"credmark text-5xl py-5",children:e.title}),(0,u.jsx)("h2",{className:"credmark text-pink text-lg",children:e.description})]})})})},f=r(4864),p=r(4389);function h(e){var t=e.posts,r=i(o.useState([]),2),n=r[0],a=r[1],s=i(o.useState("all"),2),h=s[0],m=s[1];return o.useEffect((function(){a("all"===h?t:t.filter((function(e){return e.category.slug.current===h})))}),[h]),(0,u.jsxs)("main",{children:[(0,u.jsx)("div",{children:(0,u.jsx)(d,{title:"Media",description:"Featuring Credmark's latest press announcements"})}),(0,u.jsx)("div",{className:"px-5 max-w-5xl md:m-auto",children:(0,u.jsxs)("div",{className:"pt-10 border-b-1 border-gray-700 block m-auto md:m-auto space-x-5 md:space-x-20",children:[(0,u.jsx)("button",{className:"border-b-2 border-transparent hover:border-purple pb-5 pl-5",onClick:function(){m("all")},children:"All"}),(0,u.jsx)("button",{className:"border-b-2 border-transparent hover:border-purple pb-5",onClick:function(){m("press")},children:"Press"}),(0,u.jsx)("button",{className:"border-b-2 border-transparent hover:border-purple pb-5",onClick:function(){m("announcements")},children:"Announcements"})]})}),(0,u.jsx)("div",{className:"block m-auto max-w-5xl",children:(0,u.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto container-md pb-10",children:n.map((function(e){return(0,u.jsx)(c,{link:e.url,img:e.mainImage,alt:e.mainImageAlt,title:e.title,description:e.subtitle,date:l()(e.publishedAt).format("MM/DD/YYYY")},e.slug)}))})}),(0,u.jsx)(f.Z,{}),(0,u.jsx)(p.Z,{})]})}var m=r(3998),g=Object.prototype.hasOwnProperty;function v(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,u)}c((n=n.apply(e,t||[])).next())}))}function x(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var b={}[0],y=function(e){return e===b},w=function(e){return"function"==typeof e},j=function(){},k=function(e,t){return Object.assign({},e,t)},N=!0,S="undefined"!=typeof window,R="undefined"!=typeof document,C=S&&window.addEventListener||j,E=R&&document.addEventListener||j,O={isOnline:function(){return N},isVisible:function(){var e=R&&document.visibilityState;return!!y(e)||"hidden"!==e}},_={initFocus:function(e){E("visibilitychange",e),C("focus",e)},initReconnect:function(e){C("online",(function(){N=!0,e()})),C("offline",(function(){N=!1}))}},T="undefined"==typeof window||"Deno"in window,A=T?null:window.requestAnimationFrame,I=A?function(e){return A(e)}:function(e){return setTimeout(e,1)},V=T?o.useEffect:o.useLayoutEffect,M="undefined"!=typeof navigator&&navigator.connection,D=!T&&M&&(["slow-2g","2g"].includes(M.effectiveType)||M.saveData),F=new WeakMap,P=0;function L(e){if(w(e))try{e=e()}catch(t){e=""}var t;return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",r=0;r<e.length;++r){var n=e[r],a=b;null===n||"object"!=typeof n&&!w(n)?a=JSON.stringify(n):F.has(n)?a=F.get(n):(a=P,F.set(n,P++)),t+="$"+a}return t}(e)):t=[e=String(e||"")],[e,t,e?"$err$"+e:"",e?"$req$"+e:""]}var Z=new WeakMap,$=function(e,t,r,n,a,i){void 0===i&&(i=!1);var o=Z.get(e),u=o[0],c=o[1],s=u[t],l=c[t];if(l)for(var d=0;d<l.length;++d)l[d](r,n,a);return i&&s&&s[0]?s[0](2).then((function(){return e.get(t)})):e.get(t)},W=0,Y=function(){return++W},q=function(e,t,r,n){return void 0===n&&(n=!0),v(void 0,void 0,void 0,(function(){var a,i,o,u,c,s,l,d,f,p,h;return x(this,(function(m){switch(m.label){case 0:if(a=L(t),i=a[0],o=a[2],!i)return[2];if(u=Z.get(e),c=u[2],s=u[3],y(r))return[2,$(e,i,e.get(i),e.get(o),b,n)];if(f=c[i]=Y(),s[i]=0,w(r))try{r=r(e.get(i))}catch(e){r=b,d=e}if(!r||!w(r.then))return[3,5];m.label=1;case 1:return m.trys.push([1,3,,4]),[4,r];case 2:return l=m.sent(),[3,4];case 3:return p=m.sent(),d=p,[3,4];case 4:if(f!==c[i]){if(d)throw d;return[2,l]}return[3,6];case 5:l=r,m.label=6;case 6:return y(l)||e.set(i,l),e.set(o,d),s[i]=Y(),[4,$(e,i,l,d,b,n)];case 7:if(h=m.sent(),d)throw d;return[2,h]}}))}))};function G(e,t){for(var r in e)e[r][0]&&e[r][0](t)}function U(e,t){if(!Z.has(e)){var r=k(_,t),n={},a=q.bind(b,e);return Z.set(e,[n,{},{},{},{},{},a]),T||(r.initFocus(G.bind(b,n,0)),r.initReconnect(G.bind(b,n,1))),[e,a]}}var H=U(new Map),X=H[0],J=H[1],K=k({onLoadingSlow:j,onSuccess:j,onError:j,onErrorRetry:function(e,t,r,n,a){if(O.isVisible()){var i=r.errorRetryCount,o=a.retryCount,u=~~((Math.random()+.5)*(1<<(o<8?o:8)))*r.errorRetryInterval;!y(i)&&o>i||setTimeout(n,u,a)}},revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:D?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:D?5e3:3e3,compare:function e(t,r){var n,a;if(t===r)return!0;if(t&&r&&(n=t.constructor)===r.constructor){if(n===Date)return t.getTime()===r.getTime();if(n===RegExp)return t.toString()===r.toString();if(n===Array){if((a=t.length)===r.length)for(;a--&&e(t[a],r[a]););return-1===a}if(!n||"object"===typeof t){for(n in a=0,t){if(g.call(t,n)&&++a&&!g.call(r,n))return!1;if(!(n in r)||!e(t[n],r[n]))return!1}return Object.keys(r).length===a}}return t!==t&&r!==r},isPaused:function(){return!1},cache:X,mutate:J,fallback:{}},O);function z(e,t){var r=k(e,t);if(!t)return r;var n=e.use,a=e.fallback,i=t.use,o=t.fallback;return n&&i&&(r.use=n.concat(i)),a&&o&&(r.fallback=k(a,o)),r}var B=(0,o.createContext)({});function Q(e){return w(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]}var ee,te=function(e,t,r){var n=t[e]||(t[e]=[]);return n.push(r),function(){var e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},re={dedupe:!0},ne=(Object.defineProperty((function(e){var t=e.children,r=e.value,n=z((0,o.useContext)(B),r),a=r&&r.provider,i=(0,o.useState)((function(){return a?U(a(n.cache||X),r):b}))[0];return i&&(n.cache=i[0],n.mutate=i[1]),(0,o.createElement)(B.Provider,{value:n},t)}),"default",{value:K}),ee=function(e,t,r){var n=r.cache,a=r.compare,i=r.fallbackData,u=r.suspense,c=r.revalidateOnMount,s=r.refreshInterval,l=r.refreshWhenHidden,d=r.refreshWhenOffline,f=Z.get(n),p=f[0],h=f[1],m=f[2],g=f[3],w=f[4],j=f[5],N=L(e),S=N[0],R=N[1],C=N[2],E=N[3],O=(0,o.useRef)(!1),_=(0,o.useRef)(!1),A=(0,o.useRef)(S),M=(0,o.useRef)(r),D=function(){return M.current},F=n.get(S),P=y(i)?r.fallback[S]:i,W=y(F)?P:F,G=n.get(C);if(u&&(!S||!t))throw new Error("useSWR requires either key or fetcher with suspense mode");var U=function(){return y(c)?u?!O.current&&!y(W):y(W)||r.revalidateIfStale:c},H=!(!S||!t)&&(!!n.get(E)||!O.current&&U()),X=function(e,t){var r=(0,o.useState)({})[1],n=(0,o.useRef)(e),a=(0,o.useRef)({data:!1,error:!1,isValidating:!1}),i=(0,o.useCallback)((function(e){var i=!1,o=n.current;for(var u in e){var c=u;o[c]!==e[c]&&(o[c]=e[c],a.current[c]&&(i=!0))}i&&!t.current&&r({})}),[]);return V((function(){n.current=e})),[n,a.current,i]}({data:W,error:G,isValidating:H},_),J=X[0],K=X[1],z=X[2],B=(0,o.useCallback)((function(e){return v(void 0,void 0,void 0,(function(){var i,o,u,c,s,l,d,f,p;return x(this,(function(h){switch(h.label){case 0:if(!S||!t||_.current||D().isPaused())return[2,!1];u=!0,c=e||{},s=!y(w[S])&&c.dedupe,l=function(){return!_.current&&S===A.current&&O.current},d=function(){delete w[S],delete j[S]},h.label=1;case 1:return h.trys.push([1,6,,7]),n.set(E,!0),z({isValidating:!0}),s||$(n,S,J.current.data,J.current.error,!0),s?(o=j[S],[4,w[S]]):[3,3];case 2:return i=h.sent(),[3,5];case 3:return r.loadingTimeout&&!n.get(S)&&setTimeout((function(){u&&l()&&D().onLoadingSlow(S,r)}),r.loadingTimeout),j[S]=o=Y(),[4,w[S]=t.apply(t,R)];case 4:i=h.sent(),setTimeout((function(){j[S]===o&&d()}),r.dedupingInterval),l()&&D().onSuccess(i,S,r),h.label=5;case 5:return j[S]!==o?[2,!1]:(n.set(C,b),n.set(E,!1),f={isValidating:!1},!y(m[S])&&(o<=m[S]||o<=g[S]||0===g[S])?(z(f),[2,!1]):(y(J.current.error)||(f.error=b),a(J.current.data,i)||(f.data=i),a(n.get(S),i)||n.set(S,i),z(f),s||$(n,S,i,f.error,!1),[3,7]));case 6:return p=h.sent(),d(),n.set(E,!1),D().isPaused()?(z({isValidating:!1}),[2,!1]):(n.set(C,p),J.current.error!==p&&(z({isValidating:!1,error:p}),s||$(n,S,b,p,!1)),l()&&(D().onError(p,S,r),r.shouldRetryOnError&&D().onErrorRetry(p,S,r,B,{retryCount:(c.retryCount||0)+1,dedupe:!0})),[3,7]);case 7:return u=!1,[2,!0]}}))}))}),[S]),Q=(0,o.useCallback)((function(e,t){return q(n,A.current,e,t)}),[]);if(V((function(){M.current=r})),V((function(){if(S){var e=O.current,t=B.bind(b,re),r=function(){return D().isVisible()&&D().isOnline()},n=0,i=te(S,h,(function(e,t,r){z(k({error:t,isValidating:r},a(e,J.current.data)?null:{data:e}))})),o=te(S,p,(function(e){if(0===e){var a=Date.now();D().revalidateOnFocus&&a>n&&r()&&(n=a+D().focusThrottleInterval,t())}else if(1===e)D().revalidateOnReconnect&&r()&&t();else if(2===e)return B()}));return _.current=!1,A.current=S,e&&z({data:W,error:G,isValidating:H}),U()&&(y(W)||T?t():I(t)),O.current=!0,function(){_.current=!0,i(),o()}}}),[S,B]),V((function(){var e;function t(){s&&-1!==e&&(e=setTimeout(r,s))}function r(){J.current.error||!l&&!D().isVisible()||!d&&!D().isOnline()?t():B(re).then((function(){return t()}))}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[s,l,d,B]),(0,o.useDebugValue)(W),u&&y(W))throw y(G)?B(re):G;return{mutate:Q,get data(){return K.data=!0,W},get error(){return K.error=!0,G},get isValidating(){return K.isValidating=!0,H}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Q(e),n=r[0],a=r[1],i=r[2],u=k(K,(0,o.useContext)(B)),c=z(u,i),s=ee,l=c.use;if(l)for(var d=l.length;d-- >0;)s=l[d](s);return s(n,a||c.fetcher,c)}),ae=function(e){return fetch(e).then((function(e){return e.json()}))},ie=!0;function oe(e){var t=e.posts,r=ne("/api/mediaPosts",ae,{fallbackData:t}).data;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(n.default,{children:[(0,u.jsx)("title",{children:"Media and Crypto Reports | CREDMARK"}),(0,u.jsx)("meta",{content:"Media and Crypto Reports | Credmark",property:"og:title"},"og:title"),(0,u.jsx)("meta",{name:"description",content:"Check out our latest press articles and crypto credit reports."}),(0,u.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,u.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat("UA-201404361-1")}),(0,u.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat("UA-201404361-1","', {\n              page_path: window.location.pathname,\n            });\n          ")}})]}),(0,u.jsx)("div",{className:"nav",children:(0,u.jsx)(m.Z,{page:(0,u.jsx)(h,{posts:r})})})]})}},1275:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/media",function(){return r(6518)}])},6586:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},6988:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(6586);function a(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){e.O(0,[774,885,514,998,888,179],(function(){return t=1275,e(e.s=t);var t}));var t=e.O();_N_E=t}]);