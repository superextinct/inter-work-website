!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Fontsampler=e()}}(function(){return function(){return function e(t,n,a){function o(s,i){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!i&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[s]={exports:{}};t[s][0].call(d.exports,function(e){return o(t[s][1][e]||e)},d,d.exports,e,t,n,a)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<a.length;s++)o(a[s]);return o}}()({1:[function(e,t,n){"use strict";var a=Object.prototype.hasOwnProperty,o=Object.prototype.toString,r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===o.call(e)},l=function(e){if(!e||"[object Object]"!==o.call(e))return!1;var t,n=a.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&a.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!r)return!1;for(t in e);return void 0===t||a.call(e,t)},c=function(e,t){r&&"__proto__"===t.name?r(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},d=function(e,t){if("__proto__"===t){if(!a.call(e,t))return;if(s)return s(e,t).value}return e[t]};t.exports=function e(){var t,n,a,o,r,s,u=arguments[0],f=1,p=arguments.length,h=!1;for("boolean"==typeof u&&(h=u,u=arguments[1]||{},f=2),(null==u||"object"!=typeof u&&"function"!=typeof u)&&(u={});f<p;++f)if(null!=(t=arguments[f]))for(n in t)a=d(u,n),u!==(o=d(t,n))&&(h&&o&&(l(o)||(r=i(o)))?(r?(r=!1,s=a&&i(a)?a:[]):s=a&&l(a)?a:{},c(u,{name:n,newValue:e(h,s,o)})):void 0!==o&&c(u,{name:n,newValue:o}));return u}},{}],2:[function(e,t,n){!function(){function e(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function a(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function o(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function r(t,n){function a(){var e=r;o(e)&&e.a.parentNode&&n(e.g)}var r=t;e(t.b,a),e(t.c,a),o(t)}function s(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}var i=null,l=null,c=null,d=null;function u(){return null===d&&(d=!!document.fonts),d}function f(){if(null===c){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}c=""!==e.style.font}return c}function p(e,t){return[e.style,e.weight,f()?e.stretch:"","100px",t].join(" ")}s.prototype.load=function(e,t){var o=this,s=e||"BESbswy",c=0,d=t||3e3,f=(new Date).getTime();return new Promise(function(e,t){if(u()&&!function(){if(null===l)if(u()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);l=!!e&&603>parseInt(e[1],10)}else l=!1;return l}()){var h=new Promise(function(e,t){!function n(){(new Date).getTime()-f>=d?t(Error(d+"ms timeout exceeded")):document.fonts.load(p(o,'"'+o.family+'"'),s).then(function(t){1<=t.length?e():setTimeout(n,25)},t)}()}),v=new Promise(function(e,t){c=setTimeout(function(){t(Error(d+"ms timeout exceeded"))},d)});Promise.race([v,h]).then(function(){clearTimeout(c),e(o)},t)}else!function(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e()}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())})}(function(){function l(){var t;(t=-1!=m&&-1!=g||-1!=m&&-1!=y||-1!=g&&-1!=y)&&((t=m!=g&&m!=y&&g!=y)||(null===i&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),i=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=i&&(m==b&&g==b&&y==b||m==x&&g==x&&y==x||m==C&&g==C&&y==C)),t=!t),t&&(w.parentNode&&w.parentNode.removeChild(w),clearTimeout(c),e(o))}var u=new n(s),h=new n(s),v=new n(s),m=-1,g=-1,y=-1,b=-1,x=-1,C=-1,w=document.createElement("div");w.dir="ltr",a(u,p(o,"sans-serif")),a(h,p(o,"serif")),a(v,p(o,"monospace")),w.appendChild(u.a),w.appendChild(h.a),w.appendChild(v.a),document.body.appendChild(w),b=u.a.offsetWidth,x=h.a.offsetWidth,C=v.a.offsetWidth,function e(){if((new Date).getTime()-f>=d)w.parentNode&&w.parentNode.removeChild(w),t(Error(d+"ms timeout exceeded"));else{var n=document.hidden;!0!==n&&void 0!==n||(m=u.a.offsetWidth,g=h.a.offsetWidth,y=v.a.offsetWidth,l()),c=setTimeout(e,50)}}(),r(u,function(e){m=e,l()}),a(u,p(o,'"'+o.family+'",sans-serif')),r(h,function(e){g=e,l()}),a(h,p(o,'"'+o.family+'",serif')),r(v,function(e){y=e,l()}),a(v,p(o,'"'+o.family+'",monospace'))})})},"object"==typeof t?t.exports=s:(window.FontFaceObserver=s,window.FontFaceObserver.prototype.load=s.prototype.load)}()},{}],3:[function(e,t,n){t.exports={initialText:"",multiline:!0,lazyload:!1,generate:!1,timeout:3e3,classes:{rootClass:"fontsamplerjs",initClass:"fsjs-initialized",loadingClass:"fsjs-loading",timeoutClass:"fsjs-timeout",preloadingClass:"fsjs-preloading",wrapperClass:"fsjs-wrapper",blockClass:"fsjs-block",elementClass:"fsjs-element",labelClass:"fsjs-label",labelTextClass:"fsjs-label-text",labelValueClass:"fsjs-label-value",labelUnitClass:"fsjs-label-unit",buttonClass:"fsjs-button",buttonSelectedClass:"fsjs-button-selected",disabledClass:"fsjs-disabled"},order:["tester"],ui:{tester:{editable:!0,label:!1,render:!0},fontfamily:{label:"Font",init:"",render:!0},fontsize:{unit:"px",init:36,min:8,max:96,step:1,label:"Size",render:!0},lineheight:{unit:"%",init:100,min:60,max:120,step:5,label:"Leading",render:!0},letterspacing:{unit:"em",init:0,min:-.1,max:.1,step:.01,label:"Letterspacing",render:!0},alignment:{choices:["left|Left","center|Centered","right|Right"],init:"left",label:"Alignment",render:!0},direction:{choices:["ltr|Left to right","rtl|Right to left"],init:"ltr",label:"Direction",render:!0},language:{choices:["en-GB|English","de-De|Deutsch","nl-NL|Dutch"],init:"en-Gb",label:"Language",render:!0},opentype:{choices:["liga|Ligatures","frac|Fractions"],init:["liga"],label:"Opentype features",render:!0},variation:{axes:[],render:!0}}}},{}],4:[function(e,t,n){t.exports={noFonts:"Fontsampler: No fonts were passed in.",initFontFormatting:"Fontsampler: Passed in fonts are not in expected format. Expected [ { name: 'Font Name', files: [ 'fontfile.woff', 'fontfile.woff2' ] }, … ]",fileNotfound:"Fontsampler: The passed in file could not be loaded.",missingRoot:"Fontsampler: Passed in root element invalid: ",tooManyFiles:"Fontsampler: Supplied more than one woff or woff2 for a font: ",invalidUIItem:"Fontsampler: The supplied UI item is not supported: ",invalidEvent:"Fontsampler: Invalid event type. You can only register Fontsampler events on the Fontsampler instance.",newInit:"Fontsampler: Instantiated Fontsampler without 'new' keyword. Create Fontsamplers using new Fontsampler(…)",dataFontsJsonInvalid:"Fontsampler: The data-fonts JSON failed to parse.",invalidDOMOptions:"Fontsampler: Could not parse data-options on Fontsampler root node. Make sure it is valid JSON and follows the default options structure.",invalidVariation:"Fontsampler: Invalid variation instance values"}},{}],5:[function(e,t,n){t.exports={init:"fontsampler.events.init",languageChanged:"fontsampler.events.languagechanged",fontChanged:"fontsampler.events.fontchanged",fontLoaded:"fontsampler.events.fontloaded",fontRendered:"fontsampler.events.fontrendered",fontsPreloaded:"fontsampler.events.fontspreloaded",valueChanged:"fontsampler.events.valuechanged",opentypeChanged:"fontsampler.events.opentypechanged"}},{}],6:[function(e,t,n){var a=e("../node_modules/fontfaceobserver/fontfaceobserver.standalone"),o=e("./constants/errors"),r=(e("./helpers/supports"),e("./helpers/helpers"));function s(){var e=[],t={},n={};function r(a){if(e.splice(e.indexOf(a.family),1),a.isLoaded=!0,t[a.family]=a,a.family in n&&"success"in n[a.family]){for(var o=0;o<n[a.family].success.length;o++)n[a.family].success[o](a);n[a.family]={}}}function s(e,t,n){console.error(e,t,n),console.error(new Error(o.fileNotfound)),"function"==typeof error&&error(n)}return{onFontDone:function(o,i,l,c,d){o in t==1?!0===t[o].isLoaded?l(t[o]):c(t[o]):-1!==e.indexOf(o)?(n[o].success.push(l),n[o].error.push(c)):(e.push(o),n[o]={success:[l],error:[c]},function(e,t,n){if(void 0===n&&(n=3e3),"FontFace"in window){var o=new FontFace(e,"url("+t+")",{});o.load().then(function(){document.fonts.add(o),r(o)},function(n){s(e,t,n)})}else{var i=new a(e);i.load(null,n).then(function(e){r(e)},function(n){s(e,t,n)});var l=document.createElement("style");l.appendChild(document.createTextNode("@font-face { font-family: '"+e+"'; src: url('"+t+"'); }")),document.head.appendChild(l)}}(o,i,d))}}}function i(e,t,n,a){if(!e)return!1;var o=e.substring(e.lastIndexOf("/")+1);o=(o=o.substring(0,o.lastIndexOf("."))).replace(/\W/gm,""),"FontsamplerFontloader"in window==!1&&(window.FontsamplerFontloader=s()),window.FontsamplerFontloader.onFontDone(o,e,t,n,a)}t.exports={loadFont:i,fromFiles:function(e,t,n,a){font=r.bestWoff(e),i(font,t,n,a)}}},{"../node_modules/fontfaceobserver/fontfaceobserver.standalone":2,"./constants/errors":4,"./helpers/helpers":9,"./helpers/supports":11}],7:[function(e,t,n){
/**
 * Fontsampler.js
 *
 * A configurable standalone webfont type tester for displaying and manipulating sample text.
 *
 * @author Johannes Neumeier <hello@underscoretype.com>
 * @copyright 2019 Johannes Neumeier
 * @license GNU GPLv3
 */
var a=e("../node_modules/extend"),o=e("./fontloader"),r=e("./ui"),s=e("./preloader"),i=e("./constants/errors"),l=e("./constants/events"),c=e("./constants/defaults"),d=e("./helpers/helpers"),u=e("./helpers/utils"),f=e("./helpers/dom"),p=e("./helpers/supports");t.exports=function(e,t,n){console.debug("Fontsampler()",e,t,n);var h,v,m,g=new s,y=!1,b=JSON.parse(JSON.stringify(c)),x=this;if(this===window)throw new Error(i.newInit);if(!e)throw new Error(i.missingRoot+e);function C(t){if(x.currentFont.fontface=t,h.setStatusClass(v.classes.loadingClass,!1),h.setInputCss("fontFamily",t.family),h.setActiveAxes(x.currentFont.axes),"instance"in x.currentFont==1){var n=function(t){var n,a={};if("instance"in t==0)return a;n=t.instance.split(",");for(var o=0;o<n.length;o++){var r=n[o].trim().split(" ");a[r[0]]=r[1];var s=e.querySelector("[data-axis='"+r[0]+"']");s&&(s.value=r[1],h.sendNativeEvent("change",s)),h.setLabelValue(r[0],r[1])}return a}(x.currentFont);h.setInputVariation(n)}h.setActiveOpentype(x.currentFont.features),"string"==typeof x.currentFont.language&&h.setActiveLanguage(x.currentFont.language),h.setActiveFont(x.currentFont.name),g.resume(),e.dispatchEvent(new CustomEvent(l.fontRendered))}return this.root=e,this.initialized=!1,this.currentFont=!1,this.loadedFonts=[],v=function(e){var t=!1,n=this.root.querySelectorAll("[data-fsjs]"),o=[],r=[],s=[],i=[];if("options"in this.root.dataset)try{t=JSON.parse(this.root.dataset.options)}catch(e){console.error(e)}if("object"==typeof e&&"object"==typeof t?y=a(!0,e,t):"object"==typeof e?y=e:"object"==typeof t&&(y=t),"object"==typeof y){if("ui"in y==1)for(var l in y.ui)y.ui.hasOwnProperty(l)&&"object"!=typeof y.ui[l]&&(y.ui[l]=b.ui[l]);v=a(!0,b,y)}else v=b;if(n.length>0)for(var c=0;c<n.length;c++)o[c]=n[c].dataset.fsjs;r="object"==typeof e&&"order"in e?u.flattenDeep(e.order):[],s="object"==typeof e&&"ui"in e?Object.keys(e.ui):[],i=o.concat(r,s),-1===(i=u.arrayUnique(i)).indexOf("tester")&&i.push("tester"),"object"==typeof e&&"order"in e&&Array.isArray(e.order)&&e.order.length?v.order=e.order:"object"==typeof t&&"order"in t&&Array.isArray(t.order)&&t.order.length&&(v.order=t.order);for(var d=u.flattenDeep(v.order),f=0;f<i.length;f++)-1===d.indexOf(i[f])&&v.order.push(i[f]);return v}.call(this,n),m=function(e){var t=d.extractFontsFromDOM(this.root);if((!e||e.length<1)&&t&&(e=t),!e)throw new Error(i.noFonts);if(!d.validateFontsFormatting(e))throw console.error(e),new Error(i.initFontFormatting);return e}.call(this,t),m=function(e){if(!p.variableFonts)return e;for(var t=[],n=0;n<e.length;n++){var a=e[n],o=d.bestWoff(a.files);if("instances"in a==1&&Array.isArray(a.instances)){if(!1===o||"woff"===o.substr(-4)||!p.woff2){a.axes=[],a.instances=[],t.push(a);continue}for(var r=0;r<a.instances.length;r++){var s=d.parseParts(a.instances[r]);axes=s.val.split(",").map(function(e){var t=e.trim().split(" ");return t[0]}),"axes"in a==1&&(axes=u.arrayUnique(axes.concat(a.axes))),t.push({name:s.text,files:a.files,instance:s.val,axes:axes,language:a.language,features:a.features})}}else a.axes=a.axes?a.axes:[],t.push(a)}return t}.call(this,m),h=r(this.root,m,v),this.init=function(){console.debug("Fontsampler.init()",this,this.root);var t=0;return"init"in v.ui.fontfamily==1&&"string"==typeof v.ui.fontfamily.init&&""!==v.ui.fontfamily.init&&(t=v.ui.fontfamily.init),h.init(),function(){this.root.addEventListener(l.opentypeChanged,function(){var e=h.getOpentype();h.setInputOpentype(e)});var e=this;this.root.addEventListener(l.fontChanged,function(t){t.detail.font&&void 0===this.currentFont&&e.showFont(t.detail.font)})}.call(this),this.showFont.call(this,t),v.lazyload&&(h.setStatusClass(v.classes.preloadingClass,!0),g.load(m,function(){h.setStatusClass(v.classes.preloadingClass,!1),e.dispatchEvent(new CustomEvent(l.fontsPreloaded))})),f.nodeAddClass(this.root,v.classes.initClass),f.nodeAddClass(this.root,p.woff2?"fsjs-woff2":"fsjs-woff"),f.nodeAddClass(this.root,p.variableFonts?"fsjs-variable-fonts":"fsjs-no-variable-fonts"),this.root.dispatchEvent(new CustomEvent(l.init)),this.initialized=!0,this},this.showFont=function(t){var n;console.debug("Fontsampler.showFont",t),g.pause(),h.setStatusClass(v.classes.loadingClass,!0),h.setStatusClass(v.classes.timeoutClass,!1),"string"==typeof t?(n=m.filter(function(e,n){return m[n].name===t}).pop())||(n=m[0]):"number"==typeof t&&t>=0&&t<=m.length&&(n=m[t]),this.currentFont&&this.currentFont.files&&JSON.stringify(this.currentFont.files)===JSON.stringify(n.files)?(n.fontface=this.currentFont.fontface,this.currentFont=n,C(this.currentFont.fontface)):(this.currentFont=n,o.fromFiles(n.files,function(t){var n=JSON.stringify(t);-1===x.loadedFonts.indexOf(n)&&(x.loadedFonts.push(n),e.dispatchEvent(new CustomEvent(l.fontLoaded,{detail:t}))),C(t)},function(e){h.setStatusClass(v.classes.loadingClass,!1),h.setStatusClass(v.classes.timeoutClass,!0),x.currentFont=!1},v.timeout))},this.setText=function(e){h.setInputText(e)},this.getValue=function(e){return h.getValue(e)},this.setValue=function(e,t){return h.setValue(e,t)},this.setLabel=function(e,t){return h.setLabelValue(e,t)},this}},{"../node_modules/extend":1,"./constants/defaults":3,"./constants/errors":4,"./constants/events":5,"./fontloader":6,"./helpers/dom":8,"./helpers/helpers":9,"./helpers/supports":11,"./helpers/utils":12,"./preloader":13,"./ui":14}],8:[function(e,t,n){function a(e,t){return t||(t=""),e===t?t:(t=t.trim(),e?(e=e.trim(),-1===t.split(" ").indexOf(e)?t?t+" "+e:e:t):t)}function o(e){return"object"==typeof e&&null!==e&&"nodeType"in e}t.exports={nodeAddClass:function(e,t){return!(!o(e)||"string"!=typeof t||(e.className=a(t,e.className),0))},nodeAddClasses:function(e,t){if(!o(e)||!Array.isArray(t)||t.length<1)return!1;for(var n=0;n<t.length;n++)e.className=a(t[n],e.className);return!0},nodeRemoveClass:function(e,t){return!(!o(e)||"string"!=typeof t||(e.className=function(e,t){if(!t)return"";if(t=t.trim(),!e)return t;e=e.trim();var n=t.split(" "),a=n.indexOf(e);return-1!==a&&n.splice(a,1),n.length>0?n.join(" "):""}(t,e.className),0))},isNode:o}},{}],9:[function(e,t,n){var a=e("./supports");function o(e,t){var n={name:"Default",files:[]};if(e.dataset.fonts)try{return JSON.parse(e.dataset.fonts)}catch(t){throw console.error(e.dataset.fonts),new Error(errors.dataFontsJsonInvalid)}return e.dataset.name&&(n.name=e.dataset.name),e.dataset.woff&&n.files.push(e.dataset.woff),e.dataset.woff2&&n.files.push(e.dataset.woff2),!!((n.name||!n.name&&t)&&n.files.length>0)&&[n]}function r(e){return e.substring(e.lastIndexOf(".")+1)}t.exports={getExtension:r,parseParts:function(e){var t,n,a;return-1!==e.indexOf("|")?(n=(t=e.split("|"))[0],a=t[1]):(n=e,a=e),{val:n,text:a}},validateFontsFormatting:function(e){if("object"!=typeof e||!Array.isArray(e))return!1;for(var t=0;t<e.length;t++){var n=e[t];if("object"!=typeof n)return!1;if(!n.name||!n.files||!Array.isArray(n.files)||n.files.length<=0)return!1}return!0},extractFontsFromDOM:function(e){var t,n=e.querySelector("[data-fsjs='fontfamily']"),a=[],r=o(e,!0);if(r)return r;if(!n)return!1;for(t=n.querySelectorAll("option"),i=0;i<t.length;i++){var s=o(t[i],!1);a&&(a=a.concat(s))}return a||!1},bestWoff:function(e){if("object"!=typeof e||!Array.isArray(e))return!1;var t=e.filter(function(e){return"woff"===r(e)}),n=e.filter(function(e){return"woff2"===r(e)});if(t.length>1||n.length>1)throw new Error(errors.tooManyFiles+e);return n.length>0&&a.woff2?n.shift():t.length>0&&t.shift()}}},{"./supports":11}],10:[function(e,t,n){t.exports=function(){var e=null;return window.getSelection&&document.createRange?e=function(e,t,n){var a=0,o=document.createRange();o.setStart(e,0),o.collapse(!0);for(var r,s=[e],i=!1,l=!1;!l&&(r=s.pop());)if(3==r.nodeType){var c=a+r.length;!i&&t>=a&&t<=c&&(o.setStart(r,t-a),i=!0),i&&n>=a&&n<=c&&(o.setEnd(r,n-a),l=!0),a=c}else for(var d=r.childNodes.length;d--;)s.push(r.childNodes[d]);var u=window.getSelection();u.removeAllRanges(),u.addRange(o)}:document.selection&&(e=function(e,t,n){var a=document.body.createTextRange();a.moveToElementText(e),a.collapse(!0),a.moveEnd("character",n),a.moveStart("character",t),a.select()}),{setCaret:e,getCaret:function(e){var t,n=0,a=e.ownerDocument||e.document,o=a.defaultView||a.parentWindow;if(void 0!==o.getSelection){if((t=o.getSelection()).rangeCount>0){var r=o.getSelection().getRangeAt(0),s=r.cloneRange();s.selectNodeContents(e),s.setEnd(r.endContainer,r.endOffset),n=s.toString().length}}else if((t=a.selection)&&"Control"!=t.type){var i=t.createRange(),l=a.body.createTextRange();l.moveToElementText(e),l.setEndPoint("EndToEnd",i),n=l.text.length}return n}}}},{}],11:[function(e,t,n){t.exports={variableFonts:"CSS"in window!=0&&"supports"in CSS!=0&&CSS.supports("(font-variation-settings: normal)"),woff2:function(){if("FontFace"in window==0)return!1;var e=new FontFace("t",'url( "data:application/font-woff2;base64,d09GMgABAAAAAADwAAoAAAAAAiQAAACoAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAALAogOAE2AiQDBgsGAAQgBSAHIBuDAciO1EZ3I/mL5/+5/rfPnTt9/9Qa8H4cUUZxaRbh36LiKJoVh61XGzw6ufkpoeZBW4KphwFYIJGHB4LAY4hby++gW+6N1EN94I49v86yCpUdYgqeZrOWN34CMQg2tAmthdli0eePIwAKNIIRS4AGZFzdX9lbBUAQlm//f262/61o8PlYO/D1/X4FrWFFgdCQD9DpGJSxmFyjOAGUU4P0qigcNb82GAAA" ) format( "woff2" )',{});return e.load().catch(function(){}),"loading"===e.status||"loaded"===e.status}()}},{}],12:[function(e,t,n){t.exports={flattenDeep:function e(t){return t.reduce(function(t,n){return Array.isArray(n)?t.concat(e(n)):t.concat([n])},[])},arrayUnique:function(e){return!!Array.isArray(e)&&e.filter(function(e,t,n){return n.indexOf(e)===t},e)},clamp:function(e,t,n,a){if(e=parseFloat(e),t=parseFloat(t),n=parseFloat(n),isNaN(e)||isNaN(t)||isNaN(n)){if(void 0===a)return e;e=a}return e<t?e=t:e>n&&(e=n),e}}},{}],13:[function(e,t,n){var a=e("./fontloader");t.exports=function(){var e=[],t=!0,n=null;function o(){e.length>0&&t&&a.fromFiles(e[0].files,function(){e.shift(),0===e.length&&n&&n(),e.length>0&&t&&o()},function(){},5e3)}return{load:function(a,r){e=a.slice(0),t=!0,"function"==typeof r&&(n=r),o()},pause:function(){t=!1},resume:function(){t=!0,e.length>0?o():n&&n()}}}},{"./fontloader":6}],14:[function(e,t,n){var a=e("./helpers/selection"),o=e("./uielements"),r=(e("./fontloader"),e("./constants/errors")),s=e("./constants/events"),i=e("./helpers/dom"),l=e("./helpers/utils"),c=e("./helpers/supports");t.exports=function(e,t,n){var d={tester:"textfield",fontsize:"slider",lineheight:"slider",letterspacing:"slider",fontfamily:"dropdown",alignment:"buttongroup",direction:"buttongroup",language:"dropdown",opentype:"checkboxes",variation:"slidergroup"},u={fontsize:"fontSize",lineheight:"lineHeight",letterspacing:"letterSpacing",alignment:"text-align"},f={},p=null,h=null,v="";function m(t){var a,o;if("string"==typeof t)return function(t){if(t in d==0)throw new Error(r.invalidUIItem+t);var a=F(t),o=!1,s=!1,l=n.ui[t];return a?(o=A(t,a),s=function(t,n){void 0===n&&(n=e);var a=e.querySelector("[data-fsjs-for='"+t+"']");return!!i.isNode(a)&&a}(t,a),n.ui[t].label&&!s?(s=p.label(l.label,l.unit,l.init,t),a.appendChild(s),C(s,t)):s&&C(s,t),o?x(o,t):(o=y(t),a.appendChild(o),x(o,t)),b(a,t),f[t]=a,!0!==n.ui[t].render&&(f[t]=!1,a.parentNode&&a.parentNode.removeChild(a),!1)):!a&&(!0===n.ui[t].render||"variation"===t&&!0===n.ui.variations.render)&&(a=g(t),f[t]=a,a)}(t);if(Array.isArray(t)){(o=document.createElement("div")).className=n.classes.wrapperClass;for(var s=0;s<t.length;s++)(a=m(t[s]))&&o.appendChild(a);return!(o.children.length<1)&&o}return!1}function g(e){var t=document.createElement("div"),a=y(e),o=!1;return opt=n.ui[e],opt.label&&(o=p.label(opt.label,opt.unit,opt.init,e),t.appendChild(o),C(o,e)),t.appendChild(a),x(a,e),b(t,e),t}function y(e){var t=p[d[e]](e,n.ui[e]);return x(t,e),t}function b(e,t){var a=[n.classes.blockClass,n.classes.blockClass+"-"+t,n.classes.blockClass+"-type-"+d[t]];i.nodeAddClasses(e,a),e.dataset.fsjsBlock=t}function x(e,t){e=p[d[t]](t,n.ui[t],e),i.nodeAddClass(e,n.classes.elementClass),e.dataset.fsjs=t,e.dataset.fsjsUi=d[t]}function C(e,t){var a=e.querySelector("."+n.classes.labelTextClass),o=e.querySelector("."+n.classes.labelValueClass),r=e.querySelector("."+n.classes.labelUnitClass),s=A(t);i.isNode(a)&&""===a.textContent&&(a.textContent=n.ui[t].label),i.isNode(o)&&-1===["slider"].indexOf(d[t])&&(o.textContent=""),i.isNode(o)&&o&&""===o.textContent&&(o.textContent=s.value),i.isNode(r)&&r&&""===r.textContent&&(r.textContent=s.dataset.unit),i.nodeAddClass(e,n.classes.labelClass),e.dataset.fsjsFor=t}function w(e){var t=F(e),a=A(e,t),o=d[e],r=n.ui[e];if(t){if("slider"===o)I(e,r.init),a.addEventListener("change",S);else if("dropdown"===o)a.addEventListener("change",N),I(e,r.init);else if("buttongroup"===o){var s=a.querySelectorAll("[data-choice]");if(s.length>0)for(var l=0;l<s.length;l++)s[l].addEventListener("click",O),s[l].dataset.choice===n.ui[e].init?i.nodeAddClass(s[l],n.classes.buttonSelectedClass):i.nodeRemoveClass(s[l],n.classes.buttonSelectedClass);I(e,n.ui[e].init)}else if("checkboxes"===o){var c=a.querySelectorAll("[data-feature]");if(c.length>0){for(var u={},f=0;f<c.length;f++){var p=c[f];p.addEventListener("change",j),"features"in p.dataset&&(u[p.dataset.features]=p.checked?"1":"0")}W(u)}}else if("slidergroup"===o){var h=a.querySelectorAll("[data-fsjs-ui='slider']");if(h&&h.length>0){for(var v=0;v<h.length;v++)h[v].addEventListener("change",E);V(function(){var e=!1;if("ui"in n&&"variation"in n.ui&&"axes"in n.ui.variation){for(var t in e={},n.ui.variation.axes){var a=n.ui.variation.axes[t];e[a.tag]=a.init}return e}return{}}())}}return!0}}function A(t,n){void 0!==n&&t in d!=0||(n=e);var a=e.querySelector("[data-fsjs='"+t+"']");return!!i.isNode(a)&&a}function F(t,n){void 0!==n&&t in d!=0||(n=e);var a=e.querySelector("[data-fsjs-block='"+t+"']");return!!i.isNode(a)&&a}function N(e){I(e.target.dataset.fsjs,e.target.value)}function E(e){P(e.target.dataset.axis,e.target.value)}function S(e){I(e.target.dataset.fsjs)}function j(){T(s.opentypeChanged)}function O(e){var t=e.currentTarget.parentNode,a=t.dataset.fsjs,o=t.querySelectorAll("[data-choice]");if(a in d&&"buttongroup"===d[a]){for(var r=0;r<o.length;r++)i.nodeRemoveClass(o[r],n.classes.buttonSelectedClass);i.nodeAddClass(e.currentTarget,n.classes.buttonSelectedClass),I(a,e.currentTarget.dataset.choice)}}function T(t,n){e.dispatchEvent(new CustomEvent(t,{detail:n}))}function L(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(e,!1,!0),t.dispatchEvent(n)}function k(e){if("keypress"===e.type){if(13===e.keyCode)return e.preventDefault(),!1}else{var t=f.tester.textContent;-1!==t.indexOf("\n")&&(f.tester.innerHTML(t.replace("/\n/gi","")),a.setCaret(f.tester,f.tester.textContent.length,0))}}function D(e){var t=A(e);return!!t&&t.value}function q(e){if(!f.variation)return!1;var t,n=f.variation.querySelectorAll("[data-axis]"),a={};if(n)for(var o=0;o<n.length;o++)a[(t=n[o]).dataset.axis]=t.value;return"string"==typeof e&&e in a?a[e]:a}function I(t,a){var o=A(t);switch(t){case"fontsize":case"lineheight":case"letterspacing":void 0===a?a=D(t):(a=l.clamp(a,n.ui[t].min,n.ui[t].max,n.ui[t].init),o.value.toString()!==a.toString()&&(o.value=a,L("change",o))),J(t,a),R(u[t],a+n.ui[t].unit);break;case"variation":V(a);break;case"opentype":W(a);break;case"language":U("lang",a);break;case"fontfamily":e.dispatchEvent(new CustomEvent(s.fontChanged,{detail:{font:a}}));break;case"alignment":R(u[t],a);break;case"direction":U("dir",a)}var r={};r[t]=a,T(s.valueChanged,r)}function P(e,t){var a,o=q();(function(e,t){if(!Array.isArray(n.ui.variation.axes))return!1;for(var a=0;a<n.ui.variation.axes.length;a++){var o=n.ui.variation.axes[a];if(o.tag===e)return!(parseFloat(t)<parseFloat(o.min)||parseFloat(t)>parseFloat(o.max))}return!1})(e,t)&&(void 0===(a=(a=n.ui.variation.axes.filter(function(t){return t.tag===e}))&&void 0!==a?a[0]:{min:100,max:900}).min&&(a.min=100),void 0===a.max&&(a.max=900),o[e]=l.clamp(t,a.min,a.max),J(e,t),z(o))}function V(e){if("object"!=typeof e)return!1;for(var t in e)e.hasOwnProperty(t)&&P(t,e[t])}function R(e,t){h.style[e]=t}function U(e,t){h.setAttribute(e,t)}function W(e){var t,n=[];for(var a in e)e.hasOwnProperty(a)&&a&&void 0!==a&&n.push('"'+a+'" '+(e[a]?"1":"0"));t=n.join(","),h.style["font-feature-settings"]=t}function z(e){var a=[];for(var o in e)e.hasOwnProperty(o)&&o&&void 0!==o&&a.push('"'+o+'" '+e[o]);if(val=a.join(","),h.style["font-variation-settings"]=val,i.isNode(f.fontfamily)){var r=function(e){if("object"!=typeof e)return!1;for(var n in e)isNaN(parseInt(e[n]))||(e[n]=e[n].toString());for(var a=0;a<t.length;a++){var o=t[a];if("instance"in o!=0)try{for(var r=o.instance.split(","),s={},i=0;i<r.length;i++){var l=r[i].trim().split(" ");s[l[0]]=l[1].toString()}if(Object.keys(e).length!==Object.keys(s).length)continue;if(JSON.stringify(s)===JSON.stringify(e))return o}catch(e){continue}}return!1}(e);if(!1===r)i.nodeAddClass(f.fontfamily,n.classes.disabledClass);else{i.nodeRemoveClass(f.fontfamily,n.classes.disabledClass);var s,l=A("fontfamily");l.value!==r.name&&(s=l.querySelector("option[value='"+r.name+"']"),i.isNode(s)&&(s.selected=!0),l.value=r.name,L("change",l))}}}function J(t,a){var o=e.querySelector("[data-fsjs-for='"+t+"'] ."+n.classes.labelValueClass);o&&(o.textContent=a)}return{init:function(){console.debug("Fontsampler.Interface.init()",e,t,n),i.nodeAddClass(e,n.classes.rootClass),p=o(e,n),n.ui.fontfamily&&"boolean"==typeof n.ui.fontfamily&&(n.ui.fontfamily={}),n.ui.fontfamily.choices=t.map(function(e){return e.name}),1===e.childNodes.length&&e.childNodes[0].nodeType===Node.TEXT_NODE&&(v=e.childNodes[0].textContent,e.removeChild(e.childNodes[0])),n.originalText=v;for(var a=0;a<n.order.length;a++){var r=m(n.order[a]);i.isNode(r)&&r.childNodes.length>0&&!r.isConnected&&e.appendChild(r)}for(var s in h=A("tester",f.tester),f)f.hasOwnProperty(s)&&w(s);if(!n.multiline){var l=["keypress","keyup","change","paste"];for(var c in l)l.hasOwnProperty(c)&&f.tester.addEventListener(l[c],k)}f.tester.addEventListener("paste",function(e){e.preventDefault();var t="";e.clipboardData||e.originalEvent.clipboardData?t=(e.originalEvent||e).clipboardData.getData("text/plain"):window.clipboardData&&(t=window.clipboardData.getData("Text")),n.multiline||(t=t.replace(/(?:\r\n|\r|\n|<br>)/g," ")),document.queryCommandSupported("insertText")?document.execCommand("insertText",!1,t):document.execCommand("paste",!1,t)})},getValue:D,setValue:I,setVariations:V,getCssValue:function(e){var t=A(e);return t?t.value+t.dataset.unit:""},getButtongroupValue:function(e){var t,a=A(e);return a&&(t=a.querySelector("."+n.classes.buttonSelectedClass)),t?t.dataset.choice:""},getOpentype:function(){if(!f.opentype)return!1;var e=f.opentype.querySelectorAll("[data-feature]");if(e){for(var t={},n=0;n<e.length;n++){var a=e[n];t[a.dataset.feature]=a.checked}return t}},getVariation:q,getCssAttrForKey:function(e){return e in u&&u[e]},getKeyForCssAttr:function(e){for(var t in u)if(u.hasOwnProperty(t)&&u[t]===e)return t;return!1},setInputCss:R,setInputAttr:U,setInputOpentype:W,setInputVariation:z,setInputText:function(e){e&&h&&(h.textContent=e)},setStatusClass:function(t,n){!0===n?i.nodeAddClass(e,t):!1===n&&i.nodeRemoveClass(e,t)},setActiveFont:function(e){if(i.isNode(f.fontfamily)){var t,a=A("fontfamily",f.fontfamily);i.nodeRemoveClass(f.fontfamily,n.classes.disabledClass),i.isNode(a)&&a.value!==e&&(t=a.querySelectorAll("option[value='"+e+"']"),i.isNode(t)&&(t.selected=!0),a.value=e,L("change",a))}},setActiveAxes:function(e){if(i.isNode(f.variation)){var t=f.variation.querySelectorAll("[data-axis]");if(t)for(var a=0;a<t.length;a++)!Array.isArray(e)||e.length<1||-1===e.indexOf(t[a].dataset.axis)||!1===c.woff2||!1===c.variableFonts?i.nodeAddClass(t[a].parentNode,n.classes.disabledClass):i.nodeRemoveClass(t[a].parentNode,n.classes.disabledClass)}},setActiveLanguage:function(t){if(i.isNode(f.language)&&"string"==typeof t&&-1!==n.ui.language.choices.map(function(e){return e.split("|")[0]}).length){var a=f.language.querySelector("option[value='"+t+"']");i.isNode(a)&&(f.language.value=t,a.selected=!0,L("change",f.language),e.dispatchEvent(new CustomEvent(s.languageChanged)))}},setActiveOpentype:function(e){var t=!1;if(i.isNode(f.opentype)&&(t=f.opentype.querySelectorAll("[data-feature]")),t)for(var n=0;n<t.length;n++)Array.isArray(e)&&-1===e.indexOf(t[n].dataset.feature)?i.nodeAddClass(t[n].parentNode,"fsjs-checkbox-inactive"):i.nodeRemoveClass(t[n].parentNode,"fsjs-checkbox-inactive")},setLabelValue:J,sendEvent:T,sendNativeEvent:L}}},{"./constants/errors":4,"./constants/events":5,"./fontloader":6,"./helpers/dom":8,"./helpers/selection":10,"./helpers/supports":11,"./helpers/utils":12,"./uielements":15}],15:[function(e,t,n){var a=e("./helpers/helpers"),o=e("./helpers/dom");t.exports=function(e,t){function n(e,t){if(null!=e&&"object"==typeof t)for(var n in t)t.hasOwnProperty(n)&&(e.hasAttribute(n)||e.setAttribute(n,t[n]))}return{dropdown:function(e,t,n){var r=o.isNode(n)?n:document.createElement("select");if("choices"in t==0||t.choices.length<1)return!1;for(var s=0;s<t.choices.length;s++){var i=a.parseParts(t.choices[s]),l=r.querySelector("option[value='"+i.val+"']");o.isNode(l)||((l=document.createElement("option")).appendChild(document.createTextNode(i.text)),r.appendChild(l)),l.value=i.val,"init"in t&&t.init===i.text&&(l.selected=!0,r.value=l.value),"instance"in t&&(l.dataset.instance=t.instance)}return r.dataset.fsjs=e,r},slider:function(e,t,a){var r=o.isNode(a)?a:document.createElement("input"),s={type:"range",min:t.min,max:t.max,value:t.init,step:t.step};return r.setAttribute("autocomplete","off"),n(r,s),void 0===r.value&&(r.value=t.init,r.setAttribute("value",t.init)),"unit"in r.dataset==0&&(r.dataset.unit=t.unit),"init"in r.dataset==0&&(r.dataset.init=t.init),e&&(r.dataset.fsjs=e),r},slidergroup:function(e,t,n){for(var a=o.isNode(n)?n:document.createElement("div"),r=0;r<t.axes.length;r++){var s=a.querySelector("[data-axis-block='"+t.axes[r].tag+"']");if(o.isNode(s)||((s=document.createElement("div")).dataset.axisBlock=t.axes[r].tag,a.appendChild(s)),t.axes[r].label){var i=a.querySelector("[data-fsjs-for='"+t.axes[r].tag+"']");o.isNode(i)||(i=this.label(t.axes[r].label,!1,t.axes[r].init,t.axes[r].tag),s.appendChild(i))}var l=a.querySelector("[data-axis='"+t.axes[r].tag+"']");o.isNode(l)||((l=this.slider(!1,t.axes[r])).dataset.fsjsUi="slider",s.appendChild(l)),l.dataset.axis=t.axes[r].tag}return a},label:function(e,n,a,r){var s,i,l=document.createElement("label"),c=document.createElement("span");return l.dataset.fsjsFor=r,o.nodeAddClass(l,t.classes.labelClass),c.className=t.classes.labelTextClass,c.appendChild(document.createTextNode(e)),l.appendChild(c),""!==a&&((s=document.createElement("span")).className=t.classes.labelValueClass,s.appendChild(document.createTextNode(a)),l.appendChild(s)),"string"==typeof n&&((i=document.createElement("span")).className=t.classes.labelUnitClass,i.appendChild(document.createTextNode(n)),l.appendChild(i)),l},textfield:function(e,a,o){var r=null==o?document.createElement("div"):o;return n(r,{autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:a.editable}),r.dataset.fsjs=e,r.dataset.replaceText||(t.initialText?r.appendChild(document.createTextNode(t.initialText)):!t.initialText&&t.originalText&&r.appendChild(document.createTextNode(t.originalText)),r.dataset.replaceText=!0),r},buttongroup:function(e,n){var r=document.createElement("div");for(var s in n.choices){var i=document.createElement("button"),l=a.parseParts(n.choices[s]);i.dataset.choice=l.val,i.appendChild(document.createTextNode(l.text)),o.nodeAddClass(t.classes.buttonClass),n.init===l.val&&(i.className=t.classes.buttonSelectedClass),r.appendChild(i)}return r.dataset.fsjs=e,r},checkboxes:function(e,t){var n=document.createElement("div");for(var o in n.dataset.fsjs=e,t.choices)if(t.choices.hasOwnProperty(o)){var r=a.parseParts(t.choices[o]),s=document.createElement("label"),i=document.createElement("input"),l=document.createElement("span");i.setAttribute("type","checkbox"),i.dataset.feature=r.val,-1!==t.init.indexOf(Object.values(r)[0])&&(i.checked=!0),l.appendChild(document.createTextNode(r.text)),s.appendChild(i),s.appendChild(l),n.append(s)}return n}}}},{"./helpers/dom":8,"./helpers/helpers":9}]},{},[7])(7)});