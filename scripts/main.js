function n(c,a,b,d){c.i.ca(c.V,a,b,d)}function r(c,a,b,d){c.i.m?n(c,a,b,d):c.i.Eb()._OnMessageFromDOM({type:"event",component:c.V,handler:a,dispatchOpts:d||null,data:b,responseId:null})}function t(c,a,b){c.i.h(c.V,a,b)}function u(c,a){for(const [b,d]of a)t(c,b,d)}window.na=class{constructor(c,a){this.i=c;this.V=a}Ma(){}};window.pc=class{constructor(){}};"use strict";function aa(c,a){t(c,"get-element",b=>{const d=v(c,b.elementId);return a(d,b)})}
function v(c,a){c=c.J.get(a);if(!c)throw Error(`no element with id ${a}`);return c.fa}
window.Oa=class extends self.na{constructor(c,a){super(c,a);this.J=new Map;this.T=!0;u(this,[["create",()=>{throw Error("required override");}],["destroy",b=>{b=b.elementId;const d=v(this,b);this.T&&d.parentElement.removeChild(d);this.J.delete(b)}],["set-visible",b=>{if(this.T){var d=this.J.get(b.elementId),e=d.fa;d.ib?e.style.display=b.isVisible?"":"none":d.Xb=!!b.isVisible}}],["update-position",b=>{if(this.T){var d=this.J.get(b.elementId),e=d.fa,f=this.i;e.style.left=b.left+"px";e.style.top=b.top+
"px";e.style.width=b.width+"px";e.style.height=b.height+"px";var h=b.fontSize;null!==h&&(e.style.fontSize=h+"em");h=b.htmlIndex;d.ac=h;h=f.Pa(h);h!==d.C&&(e.remove(),f.pa(h).appendChild(e),d.C=h,f.va());b=b.htmlZIndex;b!==d.ya&&(d.ya=b,f.va());d.ib||(d.ib=!0,d.Xb&&(e.style.display=""))}}],["update-state",b=>{v(this,b.elementId);throw Error("required override");}],["focus",b=>{const d=v(this,b.elementId);b.focus?d.focus():d.blur()}],["set-css-style",b=>{const d=v(this,b.elementId),e=b.prop;b=b.val;
e.startsWith("--")?d.style.setProperty(e,b):d.style[e]=b}],["set-attribute",b=>{v(this,b.elementId).setAttribute(b.name,b.val)}],["remove-attribute",b=>{v(this,b.elementId).removeAttribute(b.name)}]]);aa(this,b=>b)}};"use strict";const w=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),x=/android/i.test(navigator.userAgent),ba=/safari/i.test(navigator.userAgent)&&!/(chrome|chromium|edg\/|OPR\/|nwjs)/i.test(navigator.userAgent);let y=0;
function z(c){const a=document.createElement("script");a.async=!1;a.type="module";return c.ec?new Promise(b=>{const d="c3_resolve_"+y;++y;self[d]=b;a.textContent=c.jc+`\n\nself["${d}"]();`;document.head.appendChild(a)}):new Promise((b,d)=>{a.onload=b;a.onerror=d;a.src=c;document.head.appendChild(a)})}
async function ca(){if(!navigator.userActivation||"undefined"===typeof OffscreenCanvas)return!1;try{let c=!1;const a=new Worker(URL.createObjectURL(new Blob(['\n\tself.addEventListener("message", () =>\n\t{\n\t\ttry {\n\t\t\tconst offscreenCanvas = new OffscreenCanvas(32, 32);\n\t\t\tconst gl = offscreenCanvas.getContext("webgl");\n\t\t\tself.postMessage(!!gl);\n\t\t}\n\t\tcatch (err)\n\t\t{\n\t\t\tconsole.warn("Feature detection worker error:", err);\n\t\t\tself.postMessage(false);\n\t\t}\n\t});'],{type:"text/javascript"})),
{get type(){c=!0}}),b=await new Promise(d=>{a.addEventListener("message",e=>{a.terminate();d(e.data)});a.postMessage("")});return c&&b}catch(c){return console.warn("Error feature detecting worker mode: ",c),!1}}let A=new Audio;
const da={"audio/webm; codecs=opus":!!A.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!A.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!A.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!A.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!A.canPlayType("audio/mp4"),"audio/mpeg":!!A.canPlayType("audio/mpeg")};A=null;async function ea(c){c=await B(c);return(new TextDecoder("utf-8")).decode(c)}
function B(c){return new Promise((a,b)=>{const d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>b(e);d.readAsArrayBuffer(c)})}const C=[];let D=0;window.RealFile=window.File;const E=[],F=new Map,G=new Map;let fa=0;const H=[];self.runOnStartup=function(c){if("function"!==typeof c)throw Error("runOnStartup called without a function");H.push(c)};const J=new Set(["cordova","playable-ad","instant-games"]);let K=!1;
window.qa=class c{constructor(a){this.m=a.lc;this.Y=null;this.l="";this.L=a.ic;this.aa={};this.Ca=this.N=null;this.I=[];this.F=null;this.kb=!0;this.j=[];this.Ga=[];this.Ha=!1;this.mb=()=>this.Cb();this.jb=!1;this.W=null;this.K=-1;this.$b=()=>this.Nb();this.Z=new Set;this.Ja=null;this.nb=[];this.g=a.ob;this.Aa="file"===location.protocol.substr(0,4);if("playable-ad"===this.g||"instant-games"===this.g)this.m=!1;ba&&(this.m=!1);if("cordova"===this.g&&this.m&&x){const b=/Chrome\/(\d+)/i.exec(navigator.userAgent);
b&&90<=parseInt(b[1],10)||(this.m=!1)}this.G()?self.chrome.webview.addEventListener("message",b=>this.$a(b.data)):"macos-wkwebview"===this.g&&(self.C3WrapperOnMessage=b=>this.$a(b));this.ga=this.v=null;"html5"!==this.g||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.h("canvas","update-size",b=>this.Rb(b));this.h("canvas","set-html-layer-count",
b=>this._OnSetHTMLLayerCount(b));this.h("canvas","cleanup-html-layers",()=>this.Ib());this.h("runtime","cordova-fetch-local-file",b=>this.Jb(b));this.h("runtime","create-job-worker",()=>this.Kb());this.h("runtime","send-wrapper-extension-message",b=>this.Qb(b));"cordova"===this.g?document.addEventListener("deviceready",()=>this.Ya(a)):this.Ya(a)}Qa(){return this.j[0].canvas}Pa(a){return Math.min(a,this.j.length-1)}pa(a){if(0>a||a>=this.j.length)throw new RangeError("invalid canvas layer");return this.j[a].ba}tb(){return w&&
"cordova"===this.g}R(){const a=navigator.userAgent;return w&&J.has(this.g)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}rb(){return x}Ra(){return x&&J.has(this.g)}Sa(){return"windows-webview2"===this.g||!!("preview"===this.g&&window.chrome&&window.chrome.webview&&window.chrome.webview.postMessage)}G(){return this.Sa()||"xbox-uwp-webview2"===this.g}async Ya(a){this.m&&!await ca()&&(this.m=!1);"macos-wkwebview"===this.g?this.S({type:"ready"}):this.G()&&(this.Ub(),this.nb=(await this.Hb()).registeredComponentIds);
if("playable-ad"===this.g){this.v=self.c3_base64files;this.ga={};await this.zb();for(let d=0,e=a.O.length;d<e;++d){var b=a.O[d];this.ga.hasOwnProperty(b)?a.O[d]={ec:!0,jc:this.ga[b]}:this.v.hasOwnProperty(b)&&(a.O[d]=URL.createObjectURL(this.v[b]))}a.ka=[]}if("nwjs"===this.g&&self.nw&&self.nw.App.manifest["c3-steam-mode"]){let d=0;this.Ta(()=>{d++;document.body.style.opacity=0===d%2?"1":"0.999"})}a.hc?this.l=a.hc:(b=location.origin,this.l=("null"===b?"file:///":b)+location.pathname,b=this.l.lastIndexOf("/"),
-1!==b&&(this.l=this.l.substr(0,b+1)));a.nc&&(this.aa=a.nc);b=new MessageChannel;this.Y=b.port1;this.Y.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(d=>this.Mb(d));this.W=new self.ub(this);await ha(this.W);"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((d,e)=>{window.AndroidFullScreen.immersiveMode(d,e)})}catch(d){console.error("Failed to enter Android immersive mode: ",
d)}this.m?await this.Gb(a,b.port2):await this.Fb(a,b.port2)}sa(a){a=this.aa.hasOwnProperty(a)?this.aa[a]:a.endsWith("/workermain.js")&&this.aa.hasOwnProperty("workermain.js")?this.aa["workermain.js"]:"playable-ad"===this.g&&this.v.hasOwnProperty(a)?this.v[a]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ma(a,b,d){if(a.startsWith("blob:"))return new Worker(a,d);if("cordova"===this.g&&this.Aa)return a=await this.la(d.dc?a:this.L+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),
d);a=new URL(a,b);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),d)}return new Worker(a,d)}u(){return Math.max(window.innerWidth,1)}o(){return Math.max(window.innerHeight,1)}oa(){return this.G()||(new Set(["cordova","nwjs","macos-wkwebview"])).has(this.g)?"standalone":window.matchMedia("(display-mode: fullscreen)").matches?"fullscreen":window.matchMedia("(display-mode: standalone)").matches?
"standalone":window.matchMedia("(display-mode: minimal-ui)").matches?"minimal-ui":navigator.standalone?"standalone":"browser"}Xa(a){var b=this.l,d=location.href,e=this.u(),f=this.o(),h=this.oa(),g=window.devicePixelRatio,k=c.P(),l=a.sc,m=window.cr_previewImageBlobs||this.v,p=window.cr_previewProjectFileBlobs,q=window.cr_previewProjectFiles,ta=window.cr_swClientId||"";a=a.ob;var ua=(new URLSearchParams(self.location.search)).has("debug"),I=this.W;return{runtimeBaseUrl:b,previewUrl:d,windowInnerWidth:e,
windowInnerHeight:f,cssDisplayMode:h,devicePixelRatio:g,isFullscreen:k,projectData:l,previewImageBlobs:m,previewProjectFileBlobs:p,previewProjectFileSWUrls:q,swClientId:ta,exportType:a,isDebug:ua,ife:!!self.rc,jobScheduler:{inputPort:I.za,outputPort:I.Fa,maxNumWorkers:I.Yb},supportedAudioFormats:da,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.L+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.L+"opus.wasm.wasm",isFileProtocol:this.Aa,isiOSCordova:this.tb(),isiOSWebView:this.R(),
isWindowsWebView2:this.Sa(),isAnyWebView2Wrapper:this.G(),wrapperComponentIds:this.nb,isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async Gb(a,b){const d=this.sa(a.mc);"preview"===this.g?(this.N=new Worker("previewworker.js",{type:"module",name:"Runtime"}),await new Promise((l,m)=>{const p=q=>{this.N.removeEventListener("message",p);q.data&&"ok"===q.data.type?l():m()};this.N.addEventListener("message",p);this.N.postMessage({type:"construct-worker-init","import":(new URL(d,this.l)).toString()})})):
this.N=await this.ma(d,this.l,{type:"module",name:"Runtime",dc:!0});const e=document.createElement("canvas");e.style.display="none";const f=e.transferControlToOffscreen();document.body.appendChild(e);const h=document.createElement("div");h.className="c3htmlwrap";document.body.appendChild(h);this.j.push({canvas:e,ba:h});window.c3canvas=e;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();let g=a.ka||[],k=a.O;g=await Promise.all(g.map(l=>this.H(l)));k=await Promise.all(k.map(l=>this.H(l)));
if("cordova"===this.g)for(let l=0,m=a.ja.length;l<m;++l){const p=a.ja[l],q=p[0];if(q===a.Ka||"scriptsInEvents.js"===q||q.endsWith("/scriptsInEvents.js"))p[1]=await this.H(q)}this.N.postMessage(Object.assign(this.Xa(a),{type:"init-runtime",isInWorker:!0,messagePort:b,canvas:f,workerDependencyScripts:g,engineScripts:k,projectScripts:a.ja,mainProjectScript:a.Ka,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[b,f,...ia(this.W)]);this.I=E.map(l=>new l(this));this.Wa();L(e);M(h);ja(this.F);self.c3_callFunction=
(l,m)=>{var p=this.F;return p.i.vb(p.V,{name:l,params:m})};"preview"===this.g&&(self.goToLastErrorScript=()=>this.ca("runtime","go-to-last-error-script"))}async Fb(a,b){const d=document.createElement("canvas");d.style.display="none";document.body.appendChild(d);var e=document.createElement("div");e.className="c3htmlwrap";document.body.appendChild(e);this.j.push({canvas:d,ba:e});window.c3canvas=d;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();this.I=E.map(g=>new g(this));this.Wa();
L(d);M(e);e=a.O.map(g=>"string"===typeof g?(new URL(g,this.l)).toString():g);if(Array.isArray(a.ka)){var f=[...a.ka].map(g=>g instanceof Blob?URL.createObjectURL(g):g);e.unshift(...f)}e=await Promise.all(e.map(g=>this.H(g)));await Promise.all(e.map(g=>z(g)));e=self.C3_ProjectScriptsStatus;f=a.Ka;const h=a.ja;for(let [g,k]of h)if(k||(k=g),g===f)try{k=await this.H(k),await z(k),"preview"!==this.g||e[g]||this.ab(g,"main script did not run to completion")}catch(l){this.ab(g,l)}else if("scriptsInEvents.js"===
g||g.endsWith("/scriptsInEvents.js"))k=await this.H(k),await z(k);"preview"===this.g&&"object"!==typeof self.oc.qc?(this.ea(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Xa(a),{isInWorker:!1,messagePort:b,canvas:d,runOnStartupFunctions:H}),ja(this.F),this.Za(),this.Ca=self.C3_CreateRuntime(a),
await self.C3_InitRuntime(this.Ca,a))}ab(a,b){this.ea();console.error(`[Preview] Failed to load project main script (${a}): `,b);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Za(){this.ea()}ea(){const a=window.cr_previewLoadingElem;a&&(a.parentElement.removeChild(a),window.cr_previewLoadingElem=null)}async Kb(){const a=await ka(this.W);return{outputPort:a,transferables:[a]}}Rb(a){if(!this.jb){var b=
a.styleWidth+"px",d=a.styleHeight+"px",e=a.marginLeft+"px",f=a.marginTop+"px";for(const {canvas:h,ba:g}of this.j)h.style.width=b,h.style.height=d,h.style.marginLeft=e,h.style.marginTop=f,g.style.width=b,g.style.height=d,g.style.marginLeft=e,g.style.marginTop=f,this.kb&&(h.style.display="",g.style.display="");document.documentElement.style.setProperty("--construct-scale",a.displayScale);this.kb=!1}}_OnSetHTMLLayerCount(a){var b=a.count,d=a.immediate,e=a.styleWidth+"px",f=a.styleHeight+"px";const h=
a.marginLeft+"px",g=a.marginTop+"px";a=[];const k=[];if(b<this.j.length)for(;this.j.length>b;){const {canvas:l,ba:m}=this.j.pop();m.remove();this.m&&!d?this.Ga.push(l):l.remove()}else if(b>this.j.length)for(let l=0,m=b-this.j.length;l<m;++l)b=document.createElement("canvas"),b.classList.add("c3overlay"),this.m?(d=b.transferControlToOffscreen(),a.push(d),k.push(d)):a.push(b),document.body.appendChild(b),d=document.createElement("div"),d.classList.add("c3htmlwrap","c3overlay"),document.body.appendChild(d),
b.style.width=e,b.style.height=f,b.style.marginLeft=h,b.style.marginTop=g,d.style.width=e,d.style.height=f,d.style.marginLeft=h,d.style.marginTop=g,L(b),M(d),this.j.push({canvas:b,ba:d});for(const l of this.I)if(l instanceof window.Oa&&l.T)for(const m of l.J.values())e=l.i.Pa(m.ac),f=m.C,-1!==e&&-1!==f&&e!==f&&(f=m.fa,f.remove(),l.i.pa(e).appendChild(f),m.C=e);this.va();return{addedCanvases:a,transferables:k}}Ib(){for(const a of this.Ga)a.remove();this.Ga.length=0}va(){this.Ha||(this.Ha=!0,this.Ta(this.mb))}Cb(){this.Tb(this.mb);
this.Ha=!1;let a=[];for(var b of this.I)if(b instanceof window.Oa){var d=b.T?[...b.J.values()]:null;d&&a.push(...d)}a.sort((h,g)=>{const k=h.C,l=g.C;return k!==l?k-l:h.ya-g.ya});let e=d=b=0,f=a.length;for(;e<f;++e){const h=a[e];h.C!==b&&(this.Va(b,a.slice(d,e)),b=h.C,d=e)}d<e&&this.Va(b,a.slice(d,e))}Va(a,b){if(!(1>=b.length||a>=this.j.length)){b=b.map(k=>k.fa);var d=new Set(b);a=this.pa(a);for(var e=Array.from(a.children).filter(k=>d.has(k)),f=0,h=Math.min(b.length,e.length);f<h&&b[f]===e[f];++f);
for(var g=f;g<h;++g)e[g].remove();for(g=f;g<h;++g)a.appendChild(b[g])}}Eb(){if(this.m)throw Error("not available in worker mode");return this.Ca}ca(a,b,d,e){this.Y.postMessage({type:"event",component:a,handler:b,dispatchOpts:e||null,data:d,responseId:null},void 0)}vb(a,b){const d=fa++,e=new Promise((f,h)=>{G.set(d,{resolve:f,reject:h})});this.Y.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:b,responseId:d},void 0);return e}_OnMessageFromRuntime(a){const b=
a.type;if("event"===b)return this.Lb(a);if("result"===b)this.Ob(a);else if("runtime-ready"===b)this.Pb();else if("alert-error"===b)this.ea(),alert(a.message);else if("creating-runtime"===b)this.Za();else throw Error(`unknown message '${b}'`);}Lb(a){const b=a.component,d=a.handler,e=a.data,f=a.responseId;if(a=F.get(b))if(a=a.get(d)){var h=null;try{h=a(e)}catch(g){console.error(`Exception in '${b}' handler '${d}':`,g);null!==f&&this.da(f,!1,""+g);return}if(null===f)return h;h&&h.then?h.then(g=>this.da(f,
!0,g)).catch(g=>{console.error(`Rejection from '${b}' handler '${d}':`,g);this.da(f,!1,""+g)}):this.da(f,!0,h)}else console.warn(`[DOM] No handler '${d}' for component '${b}'`);else console.warn(`[DOM] No event handlers for component '${b}'`)}da(a,b,d){let e;d&&d.transferables&&(e=d.transferables);this.Y.postMessage({type:"result",responseId:a,isOk:b,result:d},e)}Ob(a){const b=a.responseId,d=a.isOk;a=a.result;const e=G.get(b);d?e.resolve(a):e.reject(a);G.delete(b)}h(a,b,d){let e=F.get(a);e||(e=new Map,
F.set(a,e));if(e.has(b))throw Error(`[DOM] Component '${a}' already has handler '${b}'`);e.set(b,d)}static La(a){if(E.includes(a))throw Error("DOM handler already added");E.push(a)}Wa(){for(const a of this.I)if("runtime"===a.V){this.F=a;return}throw Error("cannot find runtime DOM handler");}Mb(a){this.ca("debugger","message",a)}Pb(){for(const a of this.I)a.Ma()}static P(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||K)}static bb(a){K=!!a}Ta(a){this.Z.add(a);
this.ua()}Tb(a){this.Z.delete(a);0===this.Z.size&&this.Ua()}ua(){-1===this.K&&0<this.Z.size&&(this.K=requestAnimationFrame(this.$b))}Ua(){-1!==this.K&&(cancelAnimationFrame(this.K),this.K=-1)}Nb(){this.K=-1;for(const a of this.Z)a();this.ua()}ta(){this.F.ta()}wb(){this.jb=!0}qb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}sb(a){return!this.qb(a)}async H(a){return"cordova"===this.g&&(a.startsWith("file:")||this.Aa&&this.sb(a))?(a.startsWith(this.l)&&(a=a.substr(this.l.length)),
a=await this.la(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async Jb(a){const b=a.filename;switch(a.as){case "text":return await this.pb(b);case "buffer":return await this.la(b);default:throw Error("unsupported type");}}Na(a){const b=window.cordova.file.applicationDirectory+"www/"+a;return new Promise((d,e)=>{window.resolveLocalFileSystemURL(b,f=>{f.file(d,e)},e)})}async pb(a){a=await this.Na(a);return await ea(a)}ra(){if(C.length&&!(8<=D)){D++;var a=C.shift();this.Ab(a.filename,
a.kc,a.cc)}}la(a){return new Promise((b,d)=>{C.push({filename:a,kc:e=>{D--;this.ra();b(e)},cc:e=>{D--;this.ra();d(e)}});this.ra()})}async Ab(a,b,d){try{const e=await this.Na(a),f=await B(e);b(f)}catch(e){d(e)}}$a(a){if("entered-fullscreen"===a)c.bb(!0),N(this.F);else if("exited-fullscreen"===a)c.bb(!1),N(this.F);else if("object"===typeof a){const b=a.type;"wrapper-init-response"===b?(this.Ja(a),this.Ja=null):"extension-message"===b?this.ca("runtime","wrapper-extension-message",a):console.warn("Unknown wrapper message: ",
a)}else console.warn("Unknown wrapper message: ",a)}Qb(a){this.S({type:"extension-message",componentId:a.componentId,messageId:a.messageId,params:a.params||[],asyncId:a.asyncId})}S(a){this.G()?window.chrome.webview.postMessage(JSON.stringify(a)):"macos-wkwebview"===this.g&&window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a))}Ub(){window.moveTo=(a,b)=>{this.S({type:"set-window-position",windowX:Math.ceil(a),windowY:Math.ceil(b)})};window.resizeTo=(a,b)=>{this.S({type:"set-window-size",
windowWidth:Math.ceil(a),windowHeight:Math.ceil(b)})}}Hb(){return this.G()?new Promise(a=>{this.Ja=a;this.S({type:"wrapper-init"})}):Promise.resolve()}async zb(){const a=[];for(const [b,d]of Object.entries(this.v))a.push(this.yb(b,d));await Promise.all(a)}async yb(a,b){if("object"===typeof b)this.v[a]=new Blob([b.str],{type:b.type}),this.ga[a]=b.str;else{let d=await this.Db(b);d||(d=this.Bb(b));this.v[a]=d}}async Db(a){try{return await (await fetch(a)).blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
b),null}}Bb(a){a=this.Sb(a);return this.xb(a.data,a.fc)}Sb(a){var b=a.indexOf(",");if(0>b)throw new URIError("expected comma in data: uri");var d=a.substring(b+1);b=a.substring(5,b).split(";");a=b[0]||"";const e=b[2];d="base64"===b[1]||"base64"===e?atob(d):decodeURIComponent(d);return{fc:a,data:d}}xb(a,b){var d=a.length;let e=d>>2,f=new Uint8Array(d),h=new Uint32Array(f.buffer,0,e),g,k;for(k=g=0;g<e;++g)h[g]=a.charCodeAt(k++)|a.charCodeAt(k++)<<8|a.charCodeAt(k++)<<16|a.charCodeAt(k++)<<24;for(d&=
3;d--;)f[k]=a.charCodeAt(k),++k;return new Blob([f],{type:b})}};"use strict";const O=self.qa,la=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),P={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},Q={dispatchUserScriptEvent:!0},R={dispatchRuntimeEvent:!0};function ma(c){return new Promise((a,b)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=e=>b(e);d.rel="stylesheet";d.href=c;document.head.appendChild(d)})}
function oa(c){return new Promise((a,b)=>{const d=new Image;d.onload=()=>a(d);d.onerror=e=>b(e);d.src=c})}async function pa(c){c=URL.createObjectURL(c);try{return await oa(c)}finally{URL.revokeObjectURL(c)}}function ra(c){do{if(c.parentNode&&c.hasAttribute("contenteditable"))return!0;c=c.parentNode}while(c);return!1}const sa=new Set(["input","textarea","datalist","select"]),va=new Set(["canvas","body","html"]);
function S(c){c.target.tagName&&va.has(c.target.tagName.toLowerCase())&&c.preventDefault()}function T(c){c.target.tagName&&c.target.classList.contains("c3htmlwrap")&&c.preventDefault()}function wa(c){(c.metaKey||c.ctrlKey)&&c.preventDefault()}
self.C3_GetSvgImageSize=async function(c){c=await pa(c);if(0<c.width&&0<c.height)return[c.width,c.height];c.style.position="absolute";c.style.left="0px";c.style.top="0px";c.style.visibility="hidden";document.body.appendChild(c);const a=c.getBoundingClientRect();document.body.removeChild(c);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(c,a,b,d,e){c=await pa(c);const f=document.createElement("canvas");f.width=d;f.height=e;f.getContext("2d").drawImage(c,0,0,a,b);return f};
let U=!1;document.addEventListener("pause",()=>U=!0);document.addEventListener("resume",()=>U=!1);function L(c){c.addEventListener("selectstart",S);c.addEventListener("gesturehold",S);c.addEventListener("pointerdown",S)}function M(c){c.addEventListener("selectstart",T);c.addEventListener("gesturehold",T);c.addEventListener("touchstart",T)}function ja(c){c.gb=!0;c.Ba=c.i.u();c.X=c.i.o()}
function N(c){if(!c.s){var a=O.P();a&&"any"!==c.Ia&&xa(c);n(c,"fullscreenchange",{isFullscreen:a,innerWidth:c.u(),innerHeight:c.o()})}}async function ya(c){await Promise.all(c.webfonts.map(async a=>{a=new FontFace(a.name,`url('${a.url}')`);document.fonts.add(a);await a.load()}))}
async function za(c){var a=c.imageBitmapOpts;c=await self.C3_RasterSvgImageBlob(c.blob,c.imageWidth,c.imageHeight,c.surfaceWidth,c.surfaceHeight);a=a?await createImageBitmap(c,a):await createImageBitmap(c);return{imageBitmap:a,transferables:[a]}}async function Aa(c){return await self.C3_GetSvgImageSize(c.blob)}function Ba(c){window.c3_postToMessagePort&&(c.from="runtime",window.c3_postToMessagePort(c))}
function Ca(c){self.setTimeout(()=>{c.fb=!0},1E3);"cordova"===c.i.g?(document.addEventListener("pause",()=>V(c,!0)),document.addEventListener("resume",()=>V(c,!1))):document.addEventListener("visibilitychange",()=>V(c,"hidden"===document.visibilityState));c.ha=!("hidden"!==document.visibilityState&&!U);return{isSuspended:c.ha}}
function Da(c){c.eb||(c.eb=!0,window.addEventListener("deviceorientation",a=>{c.s||n(c,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},P)}),window.addEventListener("deviceorientationabsolute",a=>{c.s||n(c,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},P)}))}
function Ea(c){c.cb||(c.cb=!0,window.addEventListener("devicemotion",a=>{if(!c.s){var b=null,d=a.acceleration;d&&(b={x:d.x||0,y:d.y||0,z:d.z||0});d=null;var e=a.accelerationIncludingGravity;e&&(d={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});n(c,"devicemotion",{acceleration:b,accelerationIncludingGravity:d,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},P)}}))}async function Fa(c){await ma(c.url)}
function Ga(c,a){c.hb=a.message;-1===c.xa&&(c.xa=setTimeout(()=>{c.xa=-1;const b=document.getElementById("exportToVideoMessage");b&&(b.textContent=c.hb)},250))}function W(c,a){console.warn("[Construct] Fullscreen request failed: ",a);n(c,"fullscreenerror",{isFullscreen:O.P(),innerWidth:c.u(),innerHeight:c.o()})}
function V(c,a){c.ha!==a&&((c.ha=a)?c.i.Ua():c.i.ua(),n(c,"visibilitychange",{hidden:a}),!a&&c.i.R()&&(c=()=>{document.scrollingElement.scrollTop=0;document.scrollingElement.scrollLeft=0},setTimeout(c,50),setTimeout(c,100),setTimeout(c,250),setTimeout(c,500)))}
function Ha(c,a,b){"Backspace"===b.key&&S(b);"nwjs"===c.i.g&&"u"===b.key&&(b.ctrlKey||b.metaKey)&&b.preventDefault();if(!c.s){var d=la.get(b.code)||b.code;r(c,a,{code:d,key:b.key,which:b.which,repeat:b.repeat,altKey:b.altKey,ctrlKey:b.ctrlKey,metaKey:b.metaKey,shiftKey:b.shiftKey,timeStamp:b.timeStamp},P)}}
function X(c,a,b,d){c.s||b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents||r(c,a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY+c.B,pageX:b.pageX,pageY:b.pageY+c.B,movementX:b.movementX||0,movementY:b.movementY||0,timeStamp:b.timeStamp},d)}
function Y(c,a,b){if(!c.s){var d=0;"mouse"===b.pointerType&&(d=c.Ea);r(c,a,{pointerId:b.pointerId,pointerType:b.pointerType,button:b.button,buttons:b.buttons,lastButtons:d,clientX:b.clientX,clientY:b.clientY+c.B,pageX:b.pageX,pageY:b.pageY+c.B,movementX:b.movementX||0,movementY:b.movementY||0,width:b.width||0,height:b.height||0,pressure:b.pressure||0,tangentialPressure:b.tangentialPressure||0,tiltX:b.tiltX||0,tiltY:b.tiltY||0,twist:b.twist||0,timeStamp:b.timeStamp},P);"mouse"===b.pointerType&&(c.Ea=
b.buttons)}}function Z(c,a,b){document.body.style.position="";document.body.style.overflow="";document.body.style.transform="";c.B=0;if(0<b){var d=document.activeElement;d&&(d=d.getBoundingClientRect(),a=(d.top+d.bottom)/2-(a-b)/2,a>b&&(a=b),0>a&&(a=0),0<a&&(document.body.style.position="absolute",document.body.style.overflow="visible",document.body.style.transform=`translateY(${-a}px)`,c.B=a))}}
function Ia(c,a,b,d){const e=c.u(),f=c.o();c.M=-1;e!=a||f!=b?n(c,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:O.P(),cssDisplayMode:c.i.oa()}):10>d&&Ja(c,e,f,d+1)}function Ja(c,a,b,d){-1!==c.M&&clearTimeout(c.M);c.M=setTimeout(()=>Ia(c,a,b,d),48)}
function xa(c){c=c.Ia;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",
a)}}function Ka(c){return!c||c===document||c===window||c===document.body||"canvas"===c.tagName.toLowerCase()}
O.La(class extends self.na{constructor(c){super(c,"runtime");this.gb=!1;this.M=-1;this.Ia="any";this.ha=this.cb=this.eb=!1;this.ia=document.createElement("div");this.ia.className="c3-screen-reader-text";this.ia.setAttribute("aria-live","polite");document.body.appendChild(this.ia);this.D=null;this.s=!1;this.hb="";this.xa=-1;this.fb=!1;this.Ba=c.u();this.X=c.o();this.B=this.$=0;c.h("runtime","invoke-download",b=>{const d=b.url;b=b.filename;const e=document.createElement("a"),f=document.body;e.textContent=
b;e.href=d;e.download=b;f.appendChild(e);e.click();f.removeChild(e)});c.h("runtime","load-webfonts",b=>ya(b));c.h("runtime","raster-svg-image",b=>za(b));c.h("runtime","get-svg-image-size",b=>Aa(b));c.h("runtime","set-target-orientation",b=>{this.Ia=b.targetOrientation});c.h("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});c.h("runtime","post-to-debugger",b=>Ba(b));c.h("runtime","go-to-script",b=>Ba(b));c.h("runtime","before-start-ticking",()=>Ca(this));c.h("runtime","debug-highlight",
b=>{if(b.show){this.D||(this.D=document.createElement("div"),this.D.id="inspectOutline",document.body.appendChild(this.D));var d=this.D;d.style.display="";d.style.left=b.left-1+"px";d.style.top=b.top-1+"px";d.style.width=b.width+2+"px";d.style.height=b.height+2+"px";d.textContent=b.name}else this.D&&(this.D.style.display="none")});c.h("runtime","enable-device-orientation",()=>Da(this));c.h("runtime","enable-device-motion",()=>Ea(this));c.h("runtime","add-stylesheet",b=>Fa(b));c.h("runtime","script-create-worker",
b=>{const d=b.port2;(new Worker(b.url,b.opts)).postMessage({type:"construct-worker-init",port2:d},[d])});c.h("runtime","alert",b=>{alert(b.message)});c.h("runtime","screen-reader-text",b=>{var d=b.type;"create"===d?(d=document.createElement("p"),d.id="c3-sr-"+b.id,d.textContent=b.text,this.ia.appendChild(d)):"update"===d?(d=document.getElementById("c3-sr-"+b.id))?d.textContent=b.text:console.warn(`[Construct] Missing screen reader text with id ${b.id}`):"release"===d?(d=document.getElementById("c3-sr-"+
b.id))?d.remove():console.warn(`[Construct] Missing screen reader text with id ${b.id}`):console.warn(`[Construct] Unknown screen reader text update '${d}'`)});c.h("runtime","hide-cordova-splash",()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});c.h("runtime","set-exporting-to-video",b=>{this.s=!0;const d=document.createElement("h1");d.id="exportToVideoMessage";d.textContent=b.message;document.body.prepend(d);document.body.classList.add("exportingToVideo");
this.i.Qa().style.display="";this.i.wb()});c.h("runtime","export-to-video-progress",b=>Ga(this,b));c.h("runtime","exported-to-video",b=>{window.bc({type:"exported-video",arrayBuffer:b.arrayBuffer,contentType:b.contentType,time:b.time})});c.h("runtime","exported-to-image-sequence",b=>{window.bc({type:"exported-image-sequence",blobArr:b.blobArr,time:b.time,gif:b.gif})});const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const d=b.target;a.has(d.tagName.toLowerCase())||
ra(d)||b.preventDefault()});window.addEventListener("selectstart",S);window.addEventListener("gesturehold",S);window.addEventListener("touchstart",S,{passive:!1});window.addEventListener("pointerdown",S,{passive:!1});this.Ea=0;window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()});window.addEventListener("mousewheel",wa,{passive:!1});window.addEventListener("wheel",wa,{passive:!1});window.addEventListener("resize",()=>{a:{if(!this.s&&this.gb){var b=this.u();var d=this.o();if(this.i.Ra()){if(this.fb){if(this.Ba===
b&&d<this.X){this.$=this.X-d;Z(this,this.X,this.$);b=void 0;break a}0<this.$&&(this.$=0,Z(this,d,this.$))}this.Ba=b;this.X=d}n(this,"window-resize",{innerWidth:b,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:O.P(),cssDisplayMode:this.i.oa()});this.i.R()&&(-1!==this.M&&clearTimeout(this.M),Ia(this,b,d,0))}b=void 0}return b});window.addEventListener("fullscreenchange",()=>N(this));window.addEventListener("webkitfullscreenchange",()=>N(this));window.addEventListener("mozfullscreenchange",
()=>N(this));window.addEventListener("fullscreenerror",b=>W(this,b));window.addEventListener("webkitfullscreenerror",b=>W(this,b));window.addEventListener("mozfullscreenerror",b=>W(this,b));if(c.R()){let b=Infinity;window.visualViewport.addEventListener("resize",()=>{const d=window.visualViewport.height;d>b&&(document.scrollingElement.scrollTop=0,document.scrollingElement.scrollLeft=0);b=d});document.documentElement.setAttribute("ioswebview","")}this.Da=new Set;this.Zb=new WeakSet;this.Wb=!1}Ma(){window.addEventListener("focus",
()=>{n(this,"window-focus",null,R)});window.addEventListener("blur",()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(b){a=!1}n(this,"window-blur",{parentHasFocus:a},R);this.Ea=0});window.addEventListener("focusin",a=>{a=a.target;(sa.has(a.tagName.toLowerCase())||ra(a))&&n(this,"keyboard-blur",null,R)});window.addEventListener("keydown",a=>Ha(this,"keydown",a));window.addEventListener("keyup",a=>Ha(this,"keyup",a));window.addEventListener("mousedown",a=>X(this,"mousedown",a,Q));
window.addEventListener("mousemove",a=>X(this,"mousemove",a,Q));window.addEventListener("mouseup",a=>X(this,"mouseup",a,Q));window.addEventListener("dblclick",a=>X(this,"dblclick",a,P));window.addEventListener("wheel",a=>{this.s||n(this,"wheel",{clientX:a.clientX,clientY:a.clientY+this.B,pageX:a.pageX,pageY:a.pageY+this.B,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},P)});window.addEventListener("pointerdown",a=>{window!==window.top&&window.focus();Ka(a.target)&&
document.activeElement&&!Ka(document.activeElement)&&document.activeElement.blur();Y(this,"pointerdown",a)});this.i.m&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?window.addEventListener("pointerrawupdate",a=>{Y(this,"pointermove",a)}):window.addEventListener("pointermove",a=>Y(this,"pointermove",a));window.addEventListener("pointerup",a=>Y(this,"pointerup",a));window.addEventListener("pointercancel",a=>Y(this,"pointercancel",a));const c=()=>this.ta();window.addEventListener("pointerup",
c,!0);window.addEventListener("touchend",c,!0);window.addEventListener("click",c,!0);window.addEventListener("keydown",c,!0);window.addEventListener("gamepadconnected",c,!0);this.i.rb()&&!this.i.Ra()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{Z(this,this.o(),navigator.virtualKeyboard.boundingRect.height)}));this.i.R()&&(document.scrollingElement.scrollTop=0,document.scrollingElement.scrollLeft=0)}u(){return this.i.u()}o(){return this.i.o()}ta(){var c=
[...this.Da];this.Da.clear();if(!this.Wb)for(const a of c)(c=a.play())&&c.catch(()=>{this.Zb.has(a)||this.Da.add(a)})}});"use strict";async function ha(c){if(c.Vb)throw Error("already initialised");c.Vb=!0;var a=c.A.sa(("playable-ad"===c.A.g?c.A.L:"")+"dispatchworker.js");c.wa=await c.A.ma(a,c.U,{name:"DispatchWorker"});a=new MessageChannel;c.za=a.port1;c.wa.postMessage({type:"_init","in-port":a.port2},[a.port2]);c.Fa=await ka(c)}function ia(c){return[c.za,c.Fa]}
async function ka(c){const a=c.lb.length;var b=c.A.sa(("playable-ad"===c.A.g?c.A.L:"")+"jobworker.js");b=await c.A.ma(b,c.U,{name:"JobWorker"+a});const d=new MessageChannel,e=new MessageChannel;c.wa.postMessage({type:"_addJobWorker",port:d.port1},[d.port1]);b.postMessage({type:"init",number:a,"dispatch-port":d.port2,"output-port":e.port2},[d.port2,e.port2]);c.lb.push(b);return e.port1}
self.ub=class{constructor(c){this.A=c;this.U=c.l;this.U="preview"===c.g?this.U+"workers/":this.U+c.L;this.Yb=Math.min(navigator.hardwareConcurrency||2,16);this.wa=null;this.lb=[];this.Fa=this.za=null}};"use strict";window.C3_Is_Supported&&(window.c3_runtimeInterface=new self.qa({lc:!0,mc:"workermain.js",O:["scripts/c3runtime.js"],ja:[],Ka:"",ic:"scripts/",ka:[],ob:"html5"}));"use strict";
self.qa.La(class extends self.na{constructor(c){super(c,"mouse");u(this,[["cursor",a=>{document.documentElement.style.cursor=a}],["request-pointer-lock",()=>{this.i.Qa().requestPointerLock()}],["release-pointer-lock",()=>{document.exitPointerLock()}]]);document.addEventListener("pointerlockchange",()=>{n(this,"pointer-lock-change",{"has-pointer-lock":!!document.pointerLockElement})});document.addEventListener("pointerlockerror",()=>{n(this,"pointer-lock-error",{"has-pointer-lock":!!document.pointerLockElement})})}});
