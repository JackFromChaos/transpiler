"use strict";
var fs = require('fs');
//Copy the information into this file from grammar.txt.
//A demo of this script is in pegjs_test.html.
//Convert this source code to EcmaScript 5 using Babel:
//    http://babeljs.io/

//This list specifies the languages that will be parsed.,

const list_of_languages = "C#,PHP,C,JavaScript,Lua,Java,Haxe".split(",");
//const list_of_languages = "Java,JavaScript,Lua,C#".split(",");

var PEG=function(undefined){"use strict";var modules={define:function(u,e){function A(u){for(var e=t+u,A=/[^\/]+\/\.\.\/|\.\//;A.test(e);)e=e.replace(A,"");return modules[e]}var t=u.replace(/(^|\/)[^/]+$/,"$1"),r={exports:{}};e(r,A),this[u]=r.exports}};return modules.define("utils/arrays",function(u,e){var A={range:function(u,e){var A,t,r=e-u,n=new Array(r);for(A=0,t=u;r>A;A++,t++)n[A]=t;return n},find:function(u,e){var A,t=u.length;if("function"==typeof e){for(A=0;t>A;A++)if(e(u[A]))return u[A]}else for(A=0;t>A;A++)if(u[A]===e)return u[A]},indexOf:function(u,e){var A,t=u.length;if("function"==typeof e){for(A=0;t>A;A++)if(e(u[A]))return A}else for(A=0;t>A;A++)if(u[A]===e)return A;return-1},contains:function(u,e){return-1!==A.indexOf(u,e)},each:function(u,e){var A,t=u.length;for(A=0;t>A;A++)e(u[A],A)},map:function(u,e){var A,t=u.length,r=new Array(t);for(A=0;t>A;A++)r[A]=e(u[A],A);return r},pluck:function(u,e){return A.map(u,function(u){return u[e]})},every:function(u,e){var A,t=u.length;for(A=0;t>A;A++)if(!e(u[A]))return!1;return!0},some:function(u,e){var A,t=u.length;for(A=0;t>A;A++)if(e(u[A]))return!0;return!1}};u.exports=A}),modules.define("utils/objects",function(u,e){var A={keys:function(u){var e,A=[];for(e in u)u.hasOwnProperty(e)&&A.push(e);return A},values:function(u){var e,A=[];for(e in u)u.hasOwnProperty(e)&&A.push(u[e]);return A},clone:function(u){var e,A={};for(e in u)u.hasOwnProperty(e)&&(A[e]=u[e]);return A},defaults:function(u,e){var A;for(A in e)e.hasOwnProperty(A)&&(A in u||(u[A]=e[A]))}};u.exports=A}),modules.define("utils/classes",function(u,e){var A={subclass:function(u,e){function A(){this.constructor=u}A.prototype=e.prototype,u.prototype=new A}};u.exports=A}),modules.define("grammar-error",function(u,e){function A(u,e){this.name="GrammarError",this.message=u,this.location=e,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,A)}var t=e("./utils/classes");t.subclass(A,Error),u.exports=A}),modules.define("parser",function(u,e){u.exports=function(){function u(u,e){function A(){this.constructor=u}A.prototype=e.prototype,u.prototype=new A}function e(u,A,t,r){this.message=u,this.expected=A,this.found=t,this.location=r,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}function A(u){function A(){return u.substring(Un,jn)}function t(){return E(Un,jn)}function r(e){throw s(e,null,u.substring(Un,jn),E(Un,jn))}function n(e){var A,t,r=Hn[e];if(r)return r;for(A=e-1;!Hn[A];)A--;for(r=Hn[A],r={line:r.line,column:r.column,seenCR:r.seenCR};e>A;)t=u.charAt(A),"\n"===t?(r.seenCR||r.line++,r.column=1,r.seenCR=!1):"\r"===t||"\u2028"===t||"\u2029"===t?(r.line++,r.column=1,r.seenCR=!0):(r.column++,r.seenCR=!1),A++;return Hn[e]=r,r}function E(u,e){var A=n(u),t=n(e);return{start:{offset:u,line:A.line,column:A.column},end:{offset:e,line:t.line,column:t.column}}}function C(u){zn>jn||(jn>zn&&(zn=jn,Mn=[]),Mn.push(u))}function s(u,A,t,r){function n(u){var e=1;for(u.sort(function(u,e){return u.description<e.description?-1:u.description>e.description?1:0});e<u.length;)u[e-1]===u[e]?u.splice(e,1):e++}function E(u,e){function A(u){function e(u){return u.charCodeAt(0).toString(16).toUpperCase()}return u.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(u){return"\\x0"+e(u)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(u){return"\\x"+e(u)}).replace(/[\u0100-\u0FFF]/g,function(u){return"\\u0"+e(u)}).replace(/[\u1000-\uFFFF]/g,function(u){return"\\u"+e(u)})}var t,r,n,E=new Array(u.length);for(n=0;n<u.length;n++)E[n]=u[n].description;return t=u.length>1?E.slice(0,-1).join(", ")+" or "+E[u.length-1]:E[0],r=e?'"'+A(e)+'"':"end of input","Expected "+t+" but "+r+" found."}return null!==A&&n(A),new e(null!==u?u:E(A,t),A,t,r)}function i(){var u,e,A,t,r,n,E;if(u=jn,e=ee(),e!==Fe)if(A=jn,t=a(),t!==Fe?(r=ee(),r!==Fe?(t=[t,r],A=t):(jn=A,A=Fe)):(jn=A,A=Fe),A===Fe&&(A=null),A!==Fe){if(t=[],r=jn,n=F(),n!==Fe?(E=ee(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe),r!==Fe)for(;r!==Fe;)t.push(r),r=jn,n=F(),n!==Fe?(E=ee(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe);else t=Fe;t!==Fe?(Un=u,e=pe(A,t),u=e):(jn=u,u=Fe)}else jn=u,u=Fe;else jn=u,u=Fe;return u}function a(){var u,e,A;return u=jn,e=Eu(),e!==Fe?(A=te(),A!==Fe?(Un=u,e=Be(e),u=e):(jn=u,u=Fe)):(jn=u,u=Fe),u}function F(){var e,A,t,r,n,E,s,i;return e=jn,A=I(),A!==Fe?(t=ee(),t!==Fe?(r=jn,n=M(),n!==Fe?(E=ee(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe),r===Fe&&(r=null),r!==Fe?(61===u.charCodeAt(jn)?(n=De,jn++):(n=Fe,0===Gn&&C(le)),n!==Fe?(E=ee(),E!==Fe?(s=o(),s!==Fe?(i=te(),i!==Fe?(Un=e,A=de(A,r,s),e=A):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe),e}function o(){var e,A,t,r,n,E,s,i;if(e=jn,A=c(),A!==Fe){for(t=[],r=jn,n=ee(),n!==Fe?(47===u.charCodeAt(jn)?(E=fe,jn++):(E=Fe,0===Gn&&C(he)),E!==Fe?(s=ee(),s!==Fe?(i=c(),i!==Fe?(n=[n,E,s,i],r=n):(jn=r,r=Fe)):(jn=r,r=Fe)):(jn=r,r=Fe)):(jn=r,r=Fe);r!==Fe;)t.push(r),r=jn,n=ee(),n!==Fe?(47===u.charCodeAt(jn)?(E=fe,jn++):(E=Fe,0===Gn&&C(he)),E!==Fe?(s=ee(),s!==Fe?(i=c(),i!==Fe?(n=[n,E,s,i],r=n):(jn=r,r=Fe)):(jn=r,r=Fe)):(jn=r,r=Fe)):(jn=r,r=Fe);t!==Fe?(Un=e,A=ve(A,t),e=A):(jn=e,e=Fe)}else jn=e,e=Fe;return e}function c(){var u,e,A,t,r;return u=jn,e=p(),e!==Fe?(A=jn,t=ee(),t!==Fe?(r=Eu(),r!==Fe?(t=[t,r],A=t):(jn=A,A=Fe)):(jn=A,A=Fe),A===Fe&&(A=null),A!==Fe?(Un=u,e=ge(e,A),u=e):(jn=u,u=Fe)):(jn=u,u=Fe),u}function p(){var u,e,A,t,r,n;if(u=jn,e=B(),e!==Fe){for(A=[],t=jn,r=ee(),r!==Fe?(n=B(),n!==Fe?(r=[r,n],t=r):(jn=t,t=Fe)):(jn=t,t=Fe);t!==Fe;)A.push(t),t=jn,r=ee(),r!==Fe?(n=B(),n!==Fe?(r=[r,n],t=r):(jn=t,t=Fe)):(jn=t,t=Fe);A!==Fe?(Un=u,e=me(e,A),u=e):(jn=u,u=Fe)}else jn=u,u=Fe;return u}function B(){var e,A,t,r,n,E;return e=jn,A=S(),A!==Fe?(t=ee(),t!==Fe?(58===u.charCodeAt(jn)?(r=ye,jn++):(r=Fe,0===Gn&&C(Pe)),r!==Fe?(n=ee(),n!==Fe?(E=D(),E!==Fe?(Un=e,A=be(A,E),e=A):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe),e===Fe&&(e=D()),e}function D(){var u,e,A,t;return u=jn,e=l(),e!==Fe?(A=ee(),A!==Fe?(t=d(),t!==Fe?(Un=u,e=xe(e,t),u=e):(jn=u,u=Fe)):(jn=u,u=Fe)):(jn=u,u=Fe),u===Fe&&(u=d()),u}function l(){var e;return 36===u.charCodeAt(jn)?(e=_e,jn++):(e=Fe,0===Gn&&C($e)),e===Fe&&(38===u.charCodeAt(jn)?(e=Re,jn++):(e=Fe,0===Gn&&C(ke)),e===Fe&&(33===u.charCodeAt(jn)?(e=Se,jn++):(e=Fe,0===Gn&&C(Ie)))),e}function d(){var u,e,A,t;return u=jn,e=h(),e!==Fe?(A=ee(),A!==Fe?(t=f(),t!==Fe?(Un=u,e=Oe(e,t),u=e):(jn=u,u=Fe)):(jn=u,u=Fe)):(jn=u,u=Fe),u===Fe&&(u=h()),u}function f(){var e;return 63===u.charCodeAt(jn)?(e=Le,jn++):(e=Fe,0===Gn&&C(Te)),e===Fe&&(42===u.charCodeAt(jn)?(e=we,jn++):(e=Fe,0===Gn&&C(Ne)),e===Fe&&(43===u.charCodeAt(jn)?(e=je,jn++):(e=Fe,0===Gn&&C(Ue)))),e}function h(){var e,A,t,r,n,E;return e=z(),e===Fe&&(e=Y(),e===Fe&&(e=nu(),e===Fe&&(e=v(),e===Fe&&(e=g(),e===Fe&&(e=jn,40===u.charCodeAt(jn)?(A=He,jn++):(A=Fe,0===Gn&&C(ze)),A!==Fe?(t=ee(),t!==Fe?(r=o(),r!==Fe?(n=ee(),n!==Fe?(41===u.charCodeAt(jn)?(E=Me,jn++):(E=Fe,0===Gn&&C(Ge)),E!==Fe?(Un=e,A=qe(r),e=A):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe)))))),e}function v(){var e,A,t,r,n,E,s,i;return e=jn,A=I(),A!==Fe?(t=jn,Gn++,r=jn,n=ee(),n!==Fe?(E=jn,s=M(),s!==Fe?(i=ee(),i!==Fe?(s=[s,i],E=s):(jn=E,E=Fe)):(jn=E,E=Fe),E===Fe&&(E=null),E!==Fe?(61===u.charCodeAt(jn)?(s=De,jn++):(s=Fe,0===Gn&&C(le)),s!==Fe?(n=[n,E,s],r=n):(jn=r,r=Fe)):(jn=r,r=Fe)):(jn=r,r=Fe),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(Un=e,A=Ye(A),e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function g(){var u,e,A,t;return u=jn,e=m(),e!==Fe?(A=ee(),A!==Fe?(t=Eu(),t!==Fe?(Un=u,e=Ve(e,t),u=e):(jn=u,u=Fe)):(jn=u,u=Fe)):(jn=u,u=Fe),u}function m(){var e;return 38===u.charCodeAt(jn)?(e=Re,jn++):(e=Fe,0===Gn&&C(ke)),e===Fe&&(33===u.charCodeAt(jn)?(e=Se,jn++):(e=Fe,0===Gn&&C(Ie))),e}function y(){var e;return u.length>jn?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(We)),e}function P(){var e,A;return Gn++,9===u.charCodeAt(jn)?(e=Je,jn++):(e=Fe,0===Gn&&C(Ze)),e===Fe&&(11===u.charCodeAt(jn)?(e=Ke,jn++):(e=Fe,0===Gn&&C(Qe)),e===Fe&&(12===u.charCodeAt(jn)?(e=uA,jn++):(e=Fe,0===Gn&&C(eA)),e===Fe&&(32===u.charCodeAt(jn)?(e=AA,jn++):(e=Fe,0===Gn&&C(tA)),e===Fe&&(160===u.charCodeAt(jn)?(e=rA,jn++):(e=Fe,0===Gn&&C(nA)),e===Fe&&(65279===u.charCodeAt(jn)?(e=EA,jn++):(e=Fe,0===Gn&&C(CA)),e===Fe&&(e=du())))))),Gn--,e===Fe&&(A=Fe,0===Gn&&C(Xe)),e}function b(){var e;return sA.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(iA)),e}function x(){var e,A;return Gn++,10===u.charCodeAt(jn)?(e=FA,jn++):(e=Fe,0===Gn&&C(oA)),e===Fe&&(u.substr(jn,2)===cA?(e=cA,jn+=2):(e=Fe,0===Gn&&C(pA)),e===Fe&&(13===u.charCodeAt(jn)?(e=BA,jn++):(e=Fe,0===Gn&&C(DA)),e===Fe&&(8232===u.charCodeAt(jn)?(e=lA,jn++):(e=Fe,0===Gn&&C(dA)),e===Fe&&(8233===u.charCodeAt(jn)?(e=fA,jn++):(e=Fe,0===Gn&&C(hA)))))),Gn--,e===Fe&&(A=Fe,0===Gn&&C(aA)),e}function _(){var u,e;return Gn++,u=$(),u===Fe&&(u=k()),Gn--,u===Fe&&(e=Fe,0===Gn&&C(vA)),u}function $(){var e,A,t,r,n,E;if(e=jn,u.substr(jn,2)===gA?(A=gA,jn+=2):(A=Fe,0===Gn&&C(mA)),A!==Fe){for(t=[],r=jn,n=jn,Gn++,u.substr(jn,2)===yA?(E=yA,jn+=2):(E=Fe,0===Gn&&C(PA)),Gn--,E===Fe?n=void 0:(jn=n,n=Fe),n!==Fe?(E=y(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe);r!==Fe;)t.push(r),r=jn,n=jn,Gn++,u.substr(jn,2)===yA?(E=yA,jn+=2):(E=Fe,0===Gn&&C(PA)),Gn--,E===Fe?n=void 0:(jn=n,n=Fe),n!==Fe?(E=y(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe);t!==Fe?(u.substr(jn,2)===yA?(r=yA,jn+=2):(r=Fe,0===Gn&&C(PA)),r!==Fe?(A=[A,t,r],e=A):(jn=e,e=Fe)):(jn=e,e=Fe)}else jn=e,e=Fe;return e}function R(){var e,A,t,r,n,E;if(e=jn,u.substr(jn,2)===gA?(A=gA,jn+=2):(A=Fe,0===Gn&&C(mA)),A!==Fe){for(t=[],r=jn,n=jn,Gn++,u.substr(jn,2)===yA?(E=yA,jn+=2):(E=Fe,0===Gn&&C(PA)),E===Fe&&(E=b()),Gn--,E===Fe?n=void 0:(jn=n,n=Fe),n!==Fe?(E=y(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe);r!==Fe;)t.push(r),r=jn,n=jn,Gn++,u.substr(jn,2)===yA?(E=yA,jn+=2):(E=Fe,0===Gn&&C(PA)),E===Fe&&(E=b()),Gn--,E===Fe?n=void 0:(jn=n,n=Fe),n!==Fe?(E=y(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe);t!==Fe?(u.substr(jn,2)===yA?(r=yA,jn+=2):(r=Fe,0===Gn&&C(PA)),r!==Fe?(A=[A,t,r],e=A):(jn=e,e=Fe)):(jn=e,e=Fe)}else jn=e,e=Fe;return e}function k(){var e,A,t,r,n,E;if(e=jn,u.substr(jn,2)===bA?(A=bA,jn+=2):(A=Fe,0===Gn&&C(xA)),A!==Fe){for(t=[],r=jn,n=jn,Gn++,E=b(),Gn--,E===Fe?n=void 0:(jn=n,n=Fe),n!==Fe?(E=y(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe);r!==Fe;)t.push(r),r=jn,n=jn,Gn++,E=b(),Gn--,E===Fe?n=void 0:(jn=n,n=Fe),n!==Fe?(E=y(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe);t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)}else jn=e,e=Fe;return e}function S(){var u,e,A;return u=jn,e=jn,Gn++,A=N(),Gn--,A===Fe?e=void 0:(jn=e,e=Fe),e!==Fe?(A=I(),A!==Fe?(Un=u,e=_A(A),u=e):(jn=u,u=Fe)):(jn=u,u=Fe),u}function I(){var u,e,A,t;if(Gn++,u=jn,e=O(),e!==Fe){for(A=[],t=L();t!==Fe;)A.push(t),t=L();A!==Fe?(Un=u,e=RA(e,A),u=e):(jn=u,u=Fe)}else jn=u,u=Fe;return Gn--,u===Fe&&(e=Fe,0===Gn&&C($A)),u}function O(){var e,A,t;return e=T(),e===Fe&&(36===u.charCodeAt(jn)?(e=_e,jn++):(e=Fe,0===Gn&&C($e)),e===Fe&&(95===u.charCodeAt(jn)?(e=kA,jn++):(e=Fe,0===Gn&&C(SA)),e===Fe&&(e=jn,92===u.charCodeAt(jn)?(A=IA,jn++):(A=Fe,0===Gn&&C(OA)),A!==Fe?(t=Au(),t!==Fe?(Un=e,A=LA(t),e=A):(jn=e,e=Fe)):(jn=e,e=Fe)))),e}function L(){var e;return e=O(),e===Fe&&(e=w(),e===Fe&&(e=Bu(),e===Fe&&(e=lu(),e===Fe&&(8204===u.charCodeAt(jn)?(e=TA,jn++):(e=Fe,0===Gn&&C(wA)),e===Fe&&(8205===u.charCodeAt(jn)?(e=NA,jn++):(e=Fe,0===Gn&&C(jA))))))),e}function T(){var u;return u=ou(),u===Fe&&(u=su(),u===Fe&&(u=Fu(),u===Fe&&(u=iu(),u===Fe&&(u=au(),u===Fe&&(u=Du()))))),u}function w(){var u;return u=pu(),u===Fe&&(u=cu()),u}function N(){var u;return u=j(),u===Fe&&(u=U(),u===Fe&&(u=zu(),u===Fe&&(u=H()))),u}function j(){var u;return u=fu(),u===Fe&&(u=hu(),u===Fe&&(u=vu(),u===Fe&&(u=yu(),u===Fe&&(u=Pu(),u===Fe&&(u=bu(),u===Fe&&(u=xu(),u===Fe&&(u=_u(),u===Fe&&(u=$u(),u===Fe&&(u=Ou(),u===Fe&&(u=Lu(),u===Fe&&(u=Tu(),u===Fe&&(u=wu(),u===Fe&&(u=ju(),u===Fe&&(u=Uu(),u===Fe&&(u=Hu(),u===Fe&&(u=Mu(),u===Fe&&(u=qu(),u===Fe&&(u=Yu(),u===Fe&&(u=Vu(),u===Fe&&(u=Xu(),u===Fe&&(u=Ju(),u===Fe&&(u=Zu(),u===Fe&&(u=Ku(),u===Fe&&(u=Qu(),u===Fe&&(u=ue()))))))))))))))))))))))))),u}function U(){var u;return u=gu(),u===Fe&&(u=mu(),u===Fe&&(u=Ru(),u===Fe&&(u=ku(),u===Fe&&(u=Su(),u===Fe&&(u=Nu(),u===Fe&&(u=Gu())))))),u}function H(){var u;return u=Wu(),u===Fe&&(u=Iu()),u}function z(){var e,A,t;return Gn++,e=jn,A=M(),A!==Fe?(105===u.charCodeAt(jn)?(t=HA,jn++):(t=Fe,0===Gn&&C(zA)),t===Fe&&(t=null),t!==Fe?(Un=e,A=MA(A,t),e=A):(jn=e,e=Fe)):(jn=e,e=Fe),Gn--,e===Fe&&(A=Fe,0===Gn&&C(UA)),e}function M(){var e,A,t,r;if(Gn++,e=jn,34===u.charCodeAt(jn)?(A=qA,jn++):(A=Fe,0===Gn&&C(YA)),A!==Fe){for(t=[],r=G();r!==Fe;)t.push(r),r=G();t!==Fe?(34===u.charCodeAt(jn)?(r=qA,jn++):(r=Fe,0===Gn&&C(YA)),r!==Fe?(Un=e,A=VA(t),e=A):(jn=e,e=Fe)):(jn=e,e=Fe)}else jn=e,e=Fe;if(e===Fe)if(e=jn,39===u.charCodeAt(jn)?(A=WA,jn++):(A=Fe,0===Gn&&C(XA)),A!==Fe){for(t=[],r=q();r!==Fe;)t.push(r),r=q();t!==Fe?(39===u.charCodeAt(jn)?(r=WA,jn++):(r=Fe,0===Gn&&C(XA)),r!==Fe?(Un=e,A=VA(t),e=A):(jn=e,e=Fe)):(jn=e,e=Fe)}else jn=e,e=Fe;return Gn--,e===Fe&&(A=Fe,0===Gn&&C(GA)),e}function G(){var e,A,t;return e=jn,A=jn,Gn++,34===u.charCodeAt(jn)?(t=qA,jn++):(t=Fe,0===Gn&&C(YA)),t===Fe&&(92===u.charCodeAt(jn)?(t=IA,jn++):(t=Fe,0===Gn&&C(OA)),t===Fe&&(t=b())),Gn--,t===Fe?A=void 0:(jn=A,A=Fe),A!==Fe?(t=y(),t!==Fe?(Un=e,A=JA(),e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e===Fe&&(e=jn,92===u.charCodeAt(jn)?(A=IA,jn++):(A=Fe,0===Gn&&C(OA)),A!==Fe?(t=J(),t!==Fe?(Un=e,A=LA(t),e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e===Fe&&(e=X())),e}function q(){var e,A,t;return e=jn,A=jn,Gn++,39===u.charCodeAt(jn)?(t=WA,jn++):(t=Fe,0===Gn&&C(XA)),t===Fe&&(92===u.charCodeAt(jn)?(t=IA,jn++):(t=Fe,0===Gn&&C(OA)),t===Fe&&(t=b())),Gn--,t===Fe?A=void 0:(jn=A,A=Fe),A!==Fe?(t=y(),t!==Fe?(Un=e,A=JA(),e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e===Fe&&(e=jn,92===u.charCodeAt(jn)?(A=IA,jn++):(A=Fe,0===Gn&&C(OA)),A!==Fe?(t=J(),t!==Fe?(Un=e,A=LA(t),e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e===Fe&&(e=X())),e}function Y(){var e,A,t,r,n,E;if(Gn++,e=jn,91===u.charCodeAt(jn)?(A=KA,jn++):(A=Fe,0===Gn&&C(QA)),A!==Fe)if(94===u.charCodeAt(jn)?(t=ut,jn++):(t=Fe,0===Gn&&C(et)),t===Fe&&(t=null),t!==Fe){for(r=[],n=V(),n===Fe&&(n=W());n!==Fe;)r.push(n),n=V(),n===Fe&&(n=W());r!==Fe?(93===u.charCodeAt(jn)?(n=At,jn++):(n=Fe,0===Gn&&C(tt)),n!==Fe?(105===u.charCodeAt(jn)?(E=HA,jn++):(E=Fe,0===Gn&&C(zA)),E===Fe&&(E=null),E!==Fe?(Un=e,A=rt(t,r,E),e=A):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe)}else jn=e,e=Fe;else jn=e,e=Fe;return Gn--,e===Fe&&(A=Fe,0===Gn&&C(ZA)),e}function V(){var e,A,t,r;return e=jn,A=W(),A!==Fe?(45===u.charCodeAt(jn)?(t=nt,jn++):(t=Fe,0===Gn&&C(Et)),t!==Fe?(r=W(),r!==Fe?(Un=e,A=Ct(A,r),e=A):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe),e}function W(){var e,A,t;return e=jn,A=jn,Gn++,93===u.charCodeAt(jn)?(t=At,jn++):(t=Fe,0===Gn&&C(tt)),t===Fe&&(92===u.charCodeAt(jn)?(t=IA,jn++):(t=Fe,0===Gn&&C(OA)),t===Fe&&(t=b())),Gn--,t===Fe?A=void 0:(jn=A,A=Fe),A!==Fe?(t=y(),t!==Fe?(Un=e,A=JA(),e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e===Fe&&(e=jn,92===u.charCodeAt(jn)?(A=IA,jn++):(A=Fe,0===Gn&&C(OA)),A!==Fe?(t=J(),t!==Fe?(Un=e,A=LA(t),e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e===Fe&&(e=X())),e}function X(){var e,A,t;return e=jn,92===u.charCodeAt(jn)?(A=IA,jn++):(A=Fe,0===Gn&&C(OA)),A!==Fe?(t=x(),t!==Fe?(Un=e,A=st(),e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function J(){var e,A,t,r;return e=Z(),e===Fe&&(e=jn,48===u.charCodeAt(jn)?(A=it,jn++):(A=Fe,0===Gn&&C(at)),A!==Fe?(t=jn,Gn++,r=tu(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(Un=e,A=Ft(),e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e===Fe&&(e=eu(),e===Fe&&(e=Au()))),e}function Z(){var u;return u=K(),u===Fe&&(u=Q()),u}function K(){var e,A;return 39===u.charCodeAt(jn)?(e=WA,jn++):(e=Fe,0===Gn&&C(XA)),e===Fe&&(34===u.charCodeAt(jn)?(e=qA,jn++):(e=Fe,0===Gn&&C(YA)),e===Fe&&(92===u.charCodeAt(jn)?(e=IA,jn++):(e=Fe,0===Gn&&C(OA)),e===Fe&&(e=jn,98===u.charCodeAt(jn)?(A=ot,jn++):(A=Fe,0===Gn&&C(ct)),A!==Fe&&(Un=e,A=pt()),e=A,e===Fe&&(e=jn,102===u.charCodeAt(jn)?(A=Bt,jn++):(A=Fe,0===Gn&&C(Dt)),A!==Fe&&(Un=e,A=lt()),e=A,e===Fe&&(e=jn,110===u.charCodeAt(jn)?(A=dt,jn++):(A=Fe,0===Gn&&C(ft)),A!==Fe&&(Un=e,A=ht()),e=A,e===Fe&&(e=jn,114===u.charCodeAt(jn)?(A=vt,jn++):(A=Fe,0===Gn&&C(gt)),A!==Fe&&(Un=e,A=mt()),e=A,e===Fe&&(e=jn,116===u.charCodeAt(jn)?(A=yt,jn++):(A=Fe,0===Gn&&C(Pt)),A!==Fe&&(Un=e,A=bt()),e=A,e===Fe&&(e=jn,118===u.charCodeAt(jn)?(A=xt,jn++):(A=Fe,0===Gn&&C(_t)),A!==Fe&&(Un=e,A=$t()),e=A)))))))),e}function Q(){var u,e,A;return u=jn,e=jn,Gn++,A=uu(),A===Fe&&(A=b()),Gn--,A===Fe?e=void 0:(jn=e,e=Fe),e!==Fe?(A=y(),A!==Fe?(Un=u,e=JA(),u=e):(jn=u,u=Fe)):(jn=u,u=Fe),u}function uu(){var e;return e=K(),e===Fe&&(e=tu(),e===Fe&&(120===u.charCodeAt(jn)?(e=Rt,jn++):(e=Fe,0===Gn&&C(kt)),e===Fe&&(117===u.charCodeAt(jn)?(e=St,jn++):(e=Fe,0===Gn&&C(It))))),e}function eu(){var e,A,t,r,n,E;return e=jn,120===u.charCodeAt(jn)?(A=Rt,jn++):(A=Fe,0===Gn&&C(kt)),A!==Fe?(t=jn,r=jn,n=ru(),n!==Fe?(E=ru(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe),t=r!==Fe?u.substring(t,jn):r,t!==Fe?(Un=e,A=Ot(t),e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Au(){var e,A,t,r,n,E,s,i;return e=jn,117===u.charCodeAt(jn)?(A=St,jn++):(A=Fe,0===Gn&&C(It)),A!==Fe?(t=jn,r=jn,n=ru(),n!==Fe?(E=ru(),E!==Fe?(s=ru(),s!==Fe?(i=ru(),i!==Fe?(n=[n,E,s,i],r=n):(jn=r,r=Fe)):(jn=r,r=Fe)):(jn=r,r=Fe)):(jn=r,r=Fe),t=r!==Fe?u.substring(t,jn):r,t!==Fe?(Un=e,A=Ot(t),e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function tu(){var e;return Lt.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(Tt)),e}function ru(){var e;return wt.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(Nt)),e}function nu(){var e,A;return e=jn,46===u.charCodeAt(jn)?(A=jt,jn++):(A=Fe,0===Gn&&C(Ut)),A!==Fe&&(Un=e,A=Ht()),e=A}function Eu(){var e,A,t,r;return Gn++,e=jn,123===u.charCodeAt(jn)?(A=Mt,jn++):(A=Fe,0===Gn&&C(Gt)),A!==Fe?(t=Cu(),t!==Fe?(125===u.charCodeAt(jn)?(r=qt,jn++):(r=Fe,0===Gn&&C(Yt)),r!==Fe?(Un=e,A=Vt(t),e=A):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe),Gn--,e===Fe&&(A=Fe,0===Gn&&C(zt)),e}function Cu(){var e,A,t,r,n,E;if(e=jn,A=[],t=[],r=jn,n=jn,Gn++,Wt.test(u.charAt(jn))?(E=u.charAt(jn),jn++):(E=Fe,0===Gn&&C(Xt)),Gn--,E===Fe?n=void 0:(jn=n,n=Fe),n!==Fe?(E=y(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe),r!==Fe)for(;r!==Fe;)t.push(r),r=jn,n=jn,Gn++,Wt.test(u.charAt(jn))?(E=u.charAt(jn),jn++):(E=Fe,0===Gn&&C(Xt)),Gn--,E===Fe?n=void 0:(jn=n,n=Fe),n!==Fe?(E=y(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe);else t=Fe;for(t===Fe&&(t=jn,123===u.charCodeAt(jn)?(r=Mt,jn++):(r=Fe,0===Gn&&C(Gt)),r!==Fe?(n=Cu(),n!==Fe?(125===u.charCodeAt(jn)?(E=qt,jn++):(E=Fe,0===Gn&&C(Yt)),E!==Fe?(r=[r,n,E],t=r):(jn=t,t=Fe)):(jn=t,t=Fe)):(jn=t,t=Fe));t!==Fe;){if(A.push(t),t=[],r=jn,n=jn,Gn++,Wt.test(u.charAt(jn))?(E=u.charAt(jn),jn++):(E=Fe,0===Gn&&C(Xt)),Gn--,E===Fe?n=void 0:(jn=n,n=Fe),n!==Fe?(E=y(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe),r!==Fe)for(;r!==Fe;)t.push(r),r=jn,n=jn,Gn++,Wt.test(u.charAt(jn))?(E=u.charAt(jn),jn++):(E=Fe,0===Gn&&C(Xt)),Gn--,E===Fe?n=void 0:(jn=n,n=Fe),n!==Fe?(E=y(),E!==Fe?(n=[n,E],r=n):(jn=r,r=Fe)):(jn=r,r=Fe);else t=Fe;t===Fe&&(t=jn,123===u.charCodeAt(jn)?(r=Mt,jn++):(r=Fe,0===Gn&&C(Gt)),r!==Fe?(n=Cu(),n!==Fe?(125===u.charCodeAt(jn)?(E=qt,jn++):(E=Fe,0===Gn&&C(Yt)),E!==Fe?(r=[r,n,E],t=r):(jn=t,t=Fe)):(jn=t,t=Fe)):(jn=t,t=Fe))}return e=A!==Fe?u.substring(e,jn):A}function su(){var e;return Jt.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(Zt)),e}function iu(){var e;return Kt.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(Qt)),e}function au(){var e;return ur.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(er)),e}function Fu(){var e;return Ar.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(tr)),e}function ou(){var e;return rr.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(nr)),e}function cu(){var e;return Er.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(Cr)),e}function pu(){var e;return sr.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(ir)),e}function Bu(){var e;return ar.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(Fr)),e}function Du(){var e;return or.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(cr)),e}function lu(){var e;return pr.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(Br)),e}function du(){var e;return Dr.test(u.charAt(jn))?(e=u.charAt(jn),jn++):(e=Fe,0===Gn&&C(lr)),e}function fu(){var e,A,t,r;return e=jn,u.substr(jn,5)===dr?(A=dr,jn+=5):(A=Fe,0===Gn&&C(fr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function hu(){var e,A,t,r;return e=jn,u.substr(jn,4)===hr?(A=hr,jn+=4):(A=Fe,0===Gn&&C(vr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function vu(){var e,A,t,r;return e=jn,u.substr(jn,5)===gr?(A=gr,jn+=5):(A=Fe,0===Gn&&C(mr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function gu(){var e,A,t,r;return e=jn,u.substr(jn,5)===yr?(A=yr,jn+=5):(A=Fe,0===Gn&&C(Pr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function mu(){var e,A,t,r;return e=jn,u.substr(jn,5)===br?(A=br,jn+=5):(A=Fe,0===Gn&&C(xr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function yu(){var e,A,t,r;return e=jn,u.substr(jn,8)===_r?(A=_r,jn+=8):(A=Fe,0===Gn&&C($r)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Pu(){var e,A,t,r;return e=jn,u.substr(jn,8)===Rr?(A=Rr,jn+=8):(A=Fe,0===Gn&&C(kr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function bu(){var e,A,t,r;return e=jn,u.substr(jn,7)===Sr?(A=Sr,jn+=7):(A=Fe,0===Gn&&C(Ir)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function xu(){var e,A,t,r;return e=jn,u.substr(jn,6)===Or?(A=Or,jn+=6):(A=Fe,0===Gn&&C(Lr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function _u(){var e,A,t,r;return e=jn,u.substr(jn,2)===Tr?(A=Tr,jn+=2):(A=Fe,0===Gn&&C(wr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function $u(){var e,A,t,r;return e=jn,u.substr(jn,4)===Nr?(A=Nr,jn+=4):(A=Fe,0===Gn&&C(jr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Ru(){var e,A,t,r;return e=jn,u.substr(jn,4)===Ur?(A=Ur,jn+=4):(A=Fe,0===Gn&&C(Hr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function ku(){var e,A,t,r;return e=jn,u.substr(jn,6)===zr?(A=zr,jn+=6):(A=Fe,0===Gn&&C(Mr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Su(){var e,A,t,r;return e=jn,u.substr(jn,7)===Gr?(A=Gr,jn+=7):(A=Fe,0===Gn&&C(qr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Iu(){var e,A,t,r;return e=jn,u.substr(jn,5)===Yr?(A=Yr,jn+=5):(A=Fe,0===Gn&&C(Vr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Ou(){var e,A,t,r;return e=jn,u.substr(jn,7)===Wr?(A=Wr,jn+=7):(A=Fe,0===Gn&&C(Xr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Lu(){var e,A,t,r;return e=jn,u.substr(jn,3)===Jr?(A=Jr,jn+=3):(A=Fe,0===Gn&&C(Zr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Tu(){var e,A,t,r;return e=jn,u.substr(jn,8)===Kr?(A=Kr,jn+=8):(A=Fe,0===Gn&&C(Qr)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function wu(){var e,A,t,r;return e=jn,u.substr(jn,2)===un?(A=un,jn+=2):(A=Fe,0===Gn&&C(en)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Nu(){var e,A,t,r;return e=jn,u.substr(jn,6)===An?(A=An,jn+=6):(A=Fe,0===Gn&&C(tn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function ju(){var e,A,t,r;return e=jn,u.substr(jn,10)===rn?(A=rn,jn+=10):(A=Fe,0===Gn&&C(nn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Uu(){var e,A,t,r;return e=jn,u.substr(jn,2)===En?(A=En,jn+=2):(A=Fe,0===Gn&&C(Cn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Hu(){var e,A,t,r;return e=jn,u.substr(jn,3)===sn?(A=sn,jn+=3):(A=Fe,0===Gn&&C(an)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function zu(){var e,A,t,r;return e=jn,u.substr(jn,4)===Fn?(A=Fn,jn+=4):(A=Fe,0===Gn&&C(on)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Mu(){var e,A,t,r;return e=jn,u.substr(jn,6)===cn?(A=cn,jn+=6):(A=Fe,0===Gn&&C(pn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Gu(){var e,A,t,r;return e=jn,u.substr(jn,5)===Bn?(A=Bn,jn+=5):(A=Fe,0===Gn&&C(Dn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function qu(){var e,A,t,r;return e=jn,u.substr(jn,6)===ln?(A=ln,jn+=6):(A=Fe,0===Gn&&C(dn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Yu(){var e,A,t,r;return e=jn,u.substr(jn,4)===fn?(A=fn,jn+=4):(A=Fe,0===Gn&&C(hn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Vu(){var e,A,t,r;return e=jn,u.substr(jn,5)===vn?(A=vn,jn+=5):(A=Fe,0===Gn&&C(gn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Wu(){var e,A,t,r;return e=jn,u.substr(jn,4)===mn?(A=mn,jn+=4):(A=Fe,0===Gn&&C(yn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Xu(){var e,A,t,r;return e=jn,u.substr(jn,3)===Pn?(A=Pn,jn+=3):(A=Fe,0===Gn&&C(bn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Ju(){var e,A,t,r;return e=jn,u.substr(jn,6)===xn?(A=xn,jn+=6):(A=Fe,0===Gn&&C(_n)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Zu(){var e,A,t,r;return e=jn,u.substr(jn,3)===$n?(A=$n,jn+=3):(A=Fe,0===Gn&&C(Rn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Ku(){var e,A,t,r;return e=jn,u.substr(jn,4)===kn?(A=kn,jn+=4):(A=Fe,0===Gn&&C(Sn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function Qu(){var e,A,t,r;return e=jn,u.substr(jn,5)===In?(A=In,jn+=5):(A=Fe,0===Gn&&C(On)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function ue(){var e,A,t,r;return e=jn,u.substr(jn,4)===Ln?(A=Ln,jn+=4):(A=Fe,0===Gn&&C(Tn)),A!==Fe?(t=jn,Gn++,r=L(),Gn--,r===Fe?t=void 0:(jn=t,t=Fe),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e}function ee(){var u,e;for(u=[],e=P(),e===Fe&&(e=x(),e===Fe&&(e=_()));e!==Fe;)u.push(e),e=P(),e===Fe&&(e=x(),e===Fe&&(e=_()));return u}function Ae(){var u,e;for(u=[],e=P(),e===Fe&&(e=R());e!==Fe;)u.push(e),e=P(),e===Fe&&(e=R());return u}function te(){var e,A,t,r;return e=jn,A=ee(),A!==Fe?(59===u.charCodeAt(jn)?(t=wn,jn++):(t=Fe,0===Gn&&C(Nn)),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe),e===Fe&&(e=jn,A=Ae(),A!==Fe?(t=k(),t===Fe&&(t=null),t!==Fe?(r=x(),r!==Fe?(A=[A,t,r],e=A):(jn=e,e=Fe)):(jn=e,e=Fe)):(jn=e,e=Fe),e===Fe&&(e=jn,A=ee(),A!==Fe?(t=re(),t!==Fe?(A=[A,t],e=A):(jn=e,e=Fe)):(jn=e,e=Fe))),e}function re(){var e,A;return e=jn,Gn++,u.length>jn?(A=u.charAt(jn),jn++):(A=Fe,0===Gn&&C(We)),Gn--,A===Fe?e=void 0:(jn=e,e=Fe),e}function ne(u){var e,A=[];for(e=0;e<u.length;e++)""!==u[e]&&A.push(u[e]);return A}function Ee(u,e){return u?u[e]:null}function Ce(u,e){var A,t=new Array(u.length);for(A=0;A<u.length;A++)t[A]=u[A][e];return t}function se(u,e,A){return[u].concat(Ce(e,A))}var ie,ae=arguments.length>1?arguments[1]:{},Fe={},oe={Grammar:i},ce=i,pe=function(u,e){return{type:"grammar",initializer:Ee(u,0),rules:Ce(e,0),location:t()}},Be=function(u){return{type:"initializer",code:u,location:t()}},De="=",le={type:"literal",value:"=",description:'"="'},de=function(u,e,A){return{type:"rule",name:u,expression:null!==e?{type:"named",name:e[0],expression:A,location:t()}:A,location:t()}},fe="/",he={type:"literal",value:"/",description:'"/"'},ve=function(u,e){return e.length>0?{type:"choice",alternatives:se(u,e,3),location:t()}:u},ge=function(u,e){return null!==e?{type:"action",expression:u,code:e[1],location:t()}:u},me=function(u,e){return e.length>0?{type:"sequence",elements:se(u,e,1),location:t()}:u},ye=":",Pe={type:"literal",value:":",description:'":"'},be=function(u,e){return{type:"labeled",label:u,expression:e,location:t()}},xe=function(u,e){return{type:qn[u],expression:e,location:t()}},_e="$",$e={type:"literal",value:"$",description:'"$"'},Re="&",ke={type:"literal",value:"&",description:'"&"'},Se="!",Ie={type:"literal",value:"!",description:'"!"'},Oe=function(u,e){return{type:Yn[e],expression:u,location:t()}},Le="?",Te={type:"literal",value:"?",description:'"?"'},we="*",Ne={type:"literal",value:"*",description:'"*"'},je="+",Ue={type:"literal",value:"+",description:'"+"'},He="(",ze={type:"literal",value:"(",description:'"("'},Me=")",Ge={type:"literal",value:")",description:'")"'},qe=function(u){return u},Ye=function(u){return{type:"rule_ref",name:u,location:t()}},Ve=function(u,e){return{type:Vn[u],code:e,location:t()}},We={type:"any",description:"any character"},Xe={type:"other",description:"whitespace"},Je="	",Ze={type:"literal",value:"	",description:'"\\t"'},Ke="",Qe={type:"literal",value:"",description:'"\\x0B"'},uA="\f",eA={type:"literal",value:"\f",description:'"\\f"'},AA=" ",tA={type:"literal",value:" ",description:'" "'},rA=" ",nA={type:"literal",value:" ",description:'"\\xA0"'},EA="\ufeff",CA={type:"literal",value:"\ufeff",description:'"\\uFEFF"'},sA=/^[\n\r\u2028\u2029]/,iA={type:"class",value:"[\\n\\r\\u2028\\u2029]",description:"[\\n\\r\\u2028\\u2029]"},aA={type:"other",description:"end of line"},FA="\n",oA={type:"literal",value:"\n",description:'"\\n"'},cA="\r\n",pA={type:"literal",value:"\r\n",description:'"\\r\\n"'},BA="\r",DA={type:"literal",value:"\r",description:'"\\r"'},lA="\u2028",dA={type:"literal",value:"\u2028",description:'"\\u2028"'},fA="\u2029",hA={type:"literal",value:"\u2029",description:'"\\u2029"'},vA={type:"other",description:"comment"},gA="/*",mA={type:"literal",value:"/*",description:'"/*"'},yA="*/",PA={type:"literal",value:"*/",description:'"*/"'},bA="//",xA={type:"literal",value:"//",description:'"//"'},_A=function(u){return u},$A={type:"other",description:"identifier"},RA=function(u,e){return u+e.join("")},kA="_",SA={type:"literal",value:"_",description:'"_"'},IA="\\",OA={type:"literal",value:"\\",description:'"\\\\"'},LA=function(u){return u},TA="‌",wA={type:"literal",value:"‌",description:'"\\u200C"'},NA="‍",jA={type:"literal",value:"‍",description:'"\\u200D"'},UA={type:"other",description:"literal"},HA="i",zA={type:"literal",value:"i",description:'"i"'},MA=function(u,e){return{type:"literal",value:u,ignoreCase:null!==e,location:t()}},GA={type:"other",description:"string"},qA='"',YA={type:"literal",value:'"',description:'"\\""'},VA=function(u){return u.join("")},WA="'",XA={type:"literal",value:"'",description:'"\'"'},JA=function(){return A()},ZA={type:"other",description:"character class"},KA="[",QA={type:"literal",value:"[",description:'"["'},ut="^",et={type:"literal",value:"^",description:'"^"'},At="]",tt={type:"literal",
value:"]",description:'"]"'},rt=function(u,e,r){return{type:"class",parts:ne(e),inverted:null!==u,ignoreCase:null!==r,rawText:A(),location:t()}},nt="-",Et={type:"literal",value:"-",description:'"-"'},Ct=function(u,e){return u.charCodeAt(0)>e.charCodeAt(0)&&r("Invalid character range: "+A()+"."),[u,e]},st=function(){return""},it="0",at={type:"literal",value:"0",description:'"0"'},Ft=function(){return"\x00"},ot="b",ct={type:"literal",value:"b",description:'"b"'},pt=function(){return"\b"},Bt="f",Dt={type:"literal",value:"f",description:'"f"'},lt=function(){return"\f"},dt="n",ft={type:"literal",value:"n",description:'"n"'},ht=function(){return"\n"},vt="r",gt={type:"literal",value:"r",description:'"r"'},mt=function(){return"\r"},yt="t",Pt={type:"literal",value:"t",description:'"t"'},bt=function(){return"	"},xt="v",_t={type:"literal",value:"v",description:'"v"'},$t=function(){return""},Rt="x",kt={type:"literal",value:"x",description:'"x"'},St="u",It={type:"literal",value:"u",description:'"u"'},Ot=function(u){return String.fromCharCode(parseInt(u,16))},Lt=/^[0-9]/,Tt={type:"class",value:"[0-9]",description:"[0-9]"},wt=/^[0-9a-f]/i,Nt={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},jt=".",Ut={type:"literal",value:".",description:'"."'},Ht=function(){return{type:"any",location:t()}},zt={type:"other",description:"code block"},Mt="{",Gt={type:"literal",value:"{",description:'"{"'},qt="}",Yt={type:"literal",value:"}",description:'"}"'},Vt=function(u){return u},Wt=/^[{}]/,Xt={type:"class",value:"[{}]",description:"[{}]"},Jt=/^[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137-\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148-\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C-\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA-\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9-\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC-\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF-\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F-\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0-\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB-\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE-\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6-\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FC7\u1FD0-\u1FD3\u1FD6-\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6-\u1FF7\u210A\u210E-\u210F\u2113\u212F\u2134\u2139\u213C-\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65-\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73-\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3-\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]/,Zt={type:"class",value:"[\\u0061-\\u007A\\u00B5\\u00DF-\\u00F6\\u00F8-\\u00FF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137-\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148-\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C-\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA-\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9-\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC-\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF-\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F-\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02AF\\u0371\\u0373\\u0377\\u037B-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0-\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB-\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE-\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0561-\\u0587\\u13F8-\\u13FD\\u1D00-\\u1D2B\\u1D6B-\\u1D77\\u1D79-\\u1D9A\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6-\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FC7\\u1FD0-\\u1FD3\\u1FD6-\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6-\\u1FF7\\u210A\\u210E-\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C-\\u213D\\u2146-\\u2149\\u214E\\u2184\\u2C30-\\u2C5E\\u2C61\\u2C65-\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73-\\u2C74\\u2C76-\\u2C7B\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3-\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F\\uA771-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7B5\\uA7B7\\uA7FA\\uAB30-\\uAB5A\\uAB60-\\uAB65\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A]",description:"[\\u0061-\\u007A\\u00B5\\u00DF-\\u00F6\\u00F8-\\u00FF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137-\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148-\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C-\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA-\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9-\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC-\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF-\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F-\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02AF\\u0371\\u0373\\u0377\\u037B-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0-\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB-\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE-\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0561-\\u0587\\u13F8-\\u13FD\\u1D00-\\u1D2B\\u1D6B-\\u1D77\\u1D79-\\u1D9A\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6-\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FC7\\u1FD0-\\u1FD3\\u1FD6-\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6-\\u1FF7\\u210A\\u210E-\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C-\\u213D\\u2146-\\u2149\\u214E\\u2184\\u2C30-\\u2C5E\\u2C61\\u2C65-\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73-\\u2C74\\u2C76-\\u2C7B\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3-\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F\\uA771-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7B5\\uA7B7\\uA7FA\\uAB30-\\uAB5A\\uAB60-\\uAB65\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A]"},Kt=/^[\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5-\u06E6\u07F4-\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C-\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D-\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C-\uA69D\uA717-\uA71F\uA770\uA788\uA7F8-\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3-\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E-\uFF9F]/,Qt={type:"class",value:"[\\u02B0-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0374\\u037A\\u0559\\u0640\\u06E5-\\u06E6\\u07F4-\\u07F5\\u07FA\\u081A\\u0824\\u0828\\u0971\\u0E46\\u0EC6\\u10FC\\u17D7\\u1843\\u1AA7\\u1C78-\\u1C7D\\u1D2C-\\u1D6A\\u1D78\\u1D9B-\\u1DBF\\u2071\\u207F\\u2090-\\u209C\\u2C7C-\\u2C7D\\u2D6F\\u2E2F\\u3005\\u3031-\\u3035\\u303B\\u309D-\\u309E\\u30FC-\\u30FE\\uA015\\uA4F8-\\uA4FD\\uA60C\\uA67F\\uA69C-\\uA69D\\uA717-\\uA71F\\uA770\\uA788\\uA7F8-\\uA7F9\\uA9CF\\uA9E6\\uAA70\\uAADD\\uAAF3-\\uAAF4\\uAB5C-\\uAB5F\\uFF70\\uFF9E-\\uFF9F]",description:"[\\u02B0-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0374\\u037A\\u0559\\u0640\\u06E5-\\u06E6\\u07F4-\\u07F5\\u07FA\\u081A\\u0824\\u0828\\u0971\\u0E46\\u0EC6\\u10FC\\u17D7\\u1843\\u1AA7\\u1C78-\\u1C7D\\u1D2C-\\u1D6A\\u1D78\\u1D9B-\\u1DBF\\u2071\\u207F\\u2090-\\u209C\\u2C7C-\\u2C7D\\u2D6F\\u2E2F\\u3005\\u3031-\\u3035\\u303B\\u309D-\\u309E\\u30FC-\\u30FE\\uA015\\uA4F8-\\uA4FD\\uA60C\\uA67F\\uA69C-\\uA69D\\uA717-\\uA71F\\uA770\\uA788\\uA7F8-\\uA7F9\\uA9CF\\uA9E6\\uAA70\\uAADD\\uAAF3-\\uAAF4\\uAB5C-\\uAB5F\\uFF70\\uFF9E-\\uFF9F]"},ur=/^[\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05F0-\u05F2\u0620-\u063F\u0641-\u064A\u066E-\u066F\u0671-\u06D3\u06D5\u06EE-\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC-\u09DD\u09DF-\u09E1\u09F0-\u09F1\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33\u0A35-\u0A36\u0A38-\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0-\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B5C-\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60-\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0-\u0CE1\u0CF1-\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E45\u0E81-\u0E82\u0E84\u0E87-\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065-\u1066\u106E-\u1070\u1075-\u1081\u108E\u10D0-\u10FA\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE-\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5-\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A-\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,er={type:"class",value:"[\\u00AA\\u00BA\\u01BB\\u01C0-\\u01C3\\u0294\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u063F\\u0641-\\u064A\\u066E-\\u066F\\u0671-\\u06D3\\u06D5\\u06EE-\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u0800-\\u0815\\u0840-\\u0858\\u08A0-\\u08B4\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0972-\\u0980\\u0985-\\u098C\\u098F-\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC-\\u09DD\\u09DF-\\u09E1\\u09F0-\\u09F1\\u0A05-\\u0A0A\\u0A0F-\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32-\\u0A33\\u0A35-\\u0A36\\u0A38-\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2-\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0-\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F-\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32-\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C-\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99-\\u0B9A\\u0B9C\\u0B9E-\\u0B9F\\u0BA3-\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C60-\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0-\\u0CE1\\u0CF1-\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32-\\u0E33\\u0E40-\\u0E45\\u0E81-\\u0E82\\u0E84\\u0E87-\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA-\\u0EAB\\u0EAD-\\u0EB0\\u0EB2-\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065-\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10D0-\\u10FA\\u10FD-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16F1-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17DC\\u1820-\\u1842\\u1844-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE-\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C77\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5-\\u1CF6\\u2135-\\u2138\\u2D30-\\u2D67\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u3006\\u303C\\u3041-\\u3096\\u309F\\u30A1-\\u30FA\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uA000-\\uA014\\uA016-\\uA48C\\uA4D0-\\uA4F7\\uA500-\\uA60B\\uA610-\\uA61F\\uA62A-\\uA62B\\uA66E\\uA6A0-\\uA6E5\\uA78F\\uA7F7\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9E0-\\uA9E4\\uA9E7-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA6F\\uAA71-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5-\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADC\\uAAE0-\\uAAEA\\uAAF2\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40-\\uFB41\\uFB43-\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF66-\\uFF6F\\uFF71-\\uFF9D\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]",description:"[\\u00AA\\u00BA\\u01BB\\u01C0-\\u01C3\\u0294\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u063F\\u0641-\\u064A\\u066E-\\u066F\\u0671-\\u06D3\\u06D5\\u06EE-\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u0800-\\u0815\\u0840-\\u0858\\u08A0-\\u08B4\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0972-\\u0980\\u0985-\\u098C\\u098F-\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC-\\u09DD\\u09DF-\\u09E1\\u09F0-\\u09F1\\u0A05-\\u0A0A\\u0A0F-\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32-\\u0A33\\u0A35-\\u0A36\\u0A38-\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2-\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0-\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F-\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32-\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C-\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99-\\u0B9A\\u0B9C\\u0B9E-\\u0B9F\\u0BA3-\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C60-\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0-\\u0CE1\\u0CF1-\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32-\\u0E33\\u0E40-\\u0E45\\u0E81-\\u0E82\\u0E84\\u0E87-\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA-\\u0EAB\\u0EAD-\\u0EB0\\u0EB2-\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065-\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10D0-\\u10FA\\u10FD-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16F1-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17DC\\u1820-\\u1842\\u1844-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE-\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C77\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5-\\u1CF6\\u2135-\\u2138\\u2D30-\\u2D67\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u3006\\u303C\\u3041-\\u3096\\u309F\\u30A1-\\u30FA\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uA000-\\uA014\\uA016-\\uA48C\\uA4D0-\\uA4F7\\uA500-\\uA60B\\uA610-\\uA61F\\uA62A-\\uA62B\\uA66E\\uA6A0-\\uA6E5\\uA78F\\uA7F7\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9E0-\\uA9E4\\uA9E7-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA6F\\uAA71-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5-\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADC\\uAAE0-\\uAAEA\\uAAF2\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40-\\uFB41\\uFB43-\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF66-\\uFF6F\\uFF71-\\uFF9D\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"},Ar=/^[\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC]/,tr={type:"class",value:"[\\u01C5\\u01C8\\u01CB\\u01F2\\u1F88-\\u1F8F\\u1F98-\\u1F9F\\u1FA8-\\u1FAF\\u1FBC\\u1FCC\\u1FFC]",description:"[\\u01C5\\u01C8\\u01CB\\u01F2\\u1F88-\\u1F8F\\u1F98-\\u1F9F\\u1FA8-\\u1FAF\\u1FBC\\u1FCC\\u1FFC]"},rr=/^[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178-\u0179\u017B\u017D\u0181-\u0182\u0184\u0186-\u0187\u0189-\u018B\u018E-\u0191\u0193-\u0194\u0196-\u0198\u019C-\u019D\u019F-\u01A0\u01A2\u01A4\u01A6-\u01A7\u01A9\u01AC\u01AE-\u01AF\u01B1-\u01B3\u01B5\u01B7-\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A-\u023B\u023D-\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E-\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9-\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0-\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E-\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D-\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A]/,nr={
type:"class",value:"[\\u0041-\\u005A\\u00C0-\\u00D6\\u00D8-\\u00DE\\u0100\\u0102\\u0104\\u0106\\u0108\\u010A\\u010C\\u010E\\u0110\\u0112\\u0114\\u0116\\u0118\\u011A\\u011C\\u011E\\u0120\\u0122\\u0124\\u0126\\u0128\\u012A\\u012C\\u012E\\u0130\\u0132\\u0134\\u0136\\u0139\\u013B\\u013D\\u013F\\u0141\\u0143\\u0145\\u0147\\u014A\\u014C\\u014E\\u0150\\u0152\\u0154\\u0156\\u0158\\u015A\\u015C\\u015E\\u0160\\u0162\\u0164\\u0166\\u0168\\u016A\\u016C\\u016E\\u0170\\u0172\\u0174\\u0176\\u0178-\\u0179\\u017B\\u017D\\u0181-\\u0182\\u0184\\u0186-\\u0187\\u0189-\\u018B\\u018E-\\u0191\\u0193-\\u0194\\u0196-\\u0198\\u019C-\\u019D\\u019F-\\u01A0\\u01A2\\u01A4\\u01A6-\\u01A7\\u01A9\\u01AC\\u01AE-\\u01AF\\u01B1-\\u01B3\\u01B5\\u01B7-\\u01B8\\u01BC\\u01C4\\u01C7\\u01CA\\u01CD\\u01CF\\u01D1\\u01D3\\u01D5\\u01D7\\u01D9\\u01DB\\u01DE\\u01E0\\u01E2\\u01E4\\u01E6\\u01E8\\u01EA\\u01EC\\u01EE\\u01F1\\u01F4\\u01F6-\\u01F8\\u01FA\\u01FC\\u01FE\\u0200\\u0202\\u0204\\u0206\\u0208\\u020A\\u020C\\u020E\\u0210\\u0212\\u0214\\u0216\\u0218\\u021A\\u021C\\u021E\\u0220\\u0222\\u0224\\u0226\\u0228\\u022A\\u022C\\u022E\\u0230\\u0232\\u023A-\\u023B\\u023D-\\u023E\\u0241\\u0243-\\u0246\\u0248\\u024A\\u024C\\u024E\\u0370\\u0372\\u0376\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u038F\\u0391-\\u03A1\\u03A3-\\u03AB\\u03CF\\u03D2-\\u03D4\\u03D8\\u03DA\\u03DC\\u03DE\\u03E0\\u03E2\\u03E4\\u03E6\\u03E8\\u03EA\\u03EC\\u03EE\\u03F4\\u03F7\\u03F9-\\u03FA\\u03FD-\\u042F\\u0460\\u0462\\u0464\\u0466\\u0468\\u046A\\u046C\\u046E\\u0470\\u0472\\u0474\\u0476\\u0478\\u047A\\u047C\\u047E\\u0480\\u048A\\u048C\\u048E\\u0490\\u0492\\u0494\\u0496\\u0498\\u049A\\u049C\\u049E\\u04A0\\u04A2\\u04A4\\u04A6\\u04A8\\u04AA\\u04AC\\u04AE\\u04B0\\u04B2\\u04B4\\u04B6\\u04B8\\u04BA\\u04BC\\u04BE\\u04C0-\\u04C1\\u04C3\\u04C5\\u04C7\\u04C9\\u04CB\\u04CD\\u04D0\\u04D2\\u04D4\\u04D6\\u04D8\\u04DA\\u04DC\\u04DE\\u04E0\\u04E2\\u04E4\\u04E6\\u04E8\\u04EA\\u04EC\\u04EE\\u04F0\\u04F2\\u04F4\\u04F6\\u04F8\\u04FA\\u04FC\\u04FE\\u0500\\u0502\\u0504\\u0506\\u0508\\u050A\\u050C\\u050E\\u0510\\u0512\\u0514\\u0516\\u0518\\u051A\\u051C\\u051E\\u0520\\u0522\\u0524\\u0526\\u0528\\u052A\\u052C\\u052E\\u0531-\\u0556\\u10A0-\\u10C5\\u10C7\\u10CD\\u13A0-\\u13F5\\u1E00\\u1E02\\u1E04\\u1E06\\u1E08\\u1E0A\\u1E0C\\u1E0E\\u1E10\\u1E12\\u1E14\\u1E16\\u1E18\\u1E1A\\u1E1C\\u1E1E\\u1E20\\u1E22\\u1E24\\u1E26\\u1E28\\u1E2A\\u1E2C\\u1E2E\\u1E30\\u1E32\\u1E34\\u1E36\\u1E38\\u1E3A\\u1E3C\\u1E3E\\u1E40\\u1E42\\u1E44\\u1E46\\u1E48\\u1E4A\\u1E4C\\u1E4E\\u1E50\\u1E52\\u1E54\\u1E56\\u1E58\\u1E5A\\u1E5C\\u1E5E\\u1E60\\u1E62\\u1E64\\u1E66\\u1E68\\u1E6A\\u1E6C\\u1E6E\\u1E70\\u1E72\\u1E74\\u1E76\\u1E78\\u1E7A\\u1E7C\\u1E7E\\u1E80\\u1E82\\u1E84\\u1E86\\u1E88\\u1E8A\\u1E8C\\u1E8E\\u1E90\\u1E92\\u1E94\\u1E9E\\u1EA0\\u1EA2\\u1EA4\\u1EA6\\u1EA8\\u1EAA\\u1EAC\\u1EAE\\u1EB0\\u1EB2\\u1EB4\\u1EB6\\u1EB8\\u1EBA\\u1EBC\\u1EBE\\u1EC0\\u1EC2\\u1EC4\\u1EC6\\u1EC8\\u1ECA\\u1ECC\\u1ECE\\u1ED0\\u1ED2\\u1ED4\\u1ED6\\u1ED8\\u1EDA\\u1EDC\\u1EDE\\u1EE0\\u1EE2\\u1EE4\\u1EE6\\u1EE8\\u1EEA\\u1EEC\\u1EEE\\u1EF0\\u1EF2\\u1EF4\\u1EF6\\u1EF8\\u1EFA\\u1EFC\\u1EFE\\u1F08-\\u1F0F\\u1F18-\\u1F1D\\u1F28-\\u1F2F\\u1F38-\\u1F3F\\u1F48-\\u1F4D\\u1F59\\u1F5B\\u1F5D\\u1F5F\\u1F68-\\u1F6F\\u1FB8-\\u1FBB\\u1FC8-\\u1FCB\\u1FD8-\\u1FDB\\u1FE8-\\u1FEC\\u1FF8-\\u1FFB\\u2102\\u2107\\u210B-\\u210D\\u2110-\\u2112\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u2130-\\u2133\\u213E-\\u213F\\u2145\\u2183\\u2C00-\\u2C2E\\u2C60\\u2C62-\\u2C64\\u2C67\\u2C69\\u2C6B\\u2C6D-\\u2C70\\u2C72\\u2C75\\u2C7E-\\u2C80\\u2C82\\u2C84\\u2C86\\u2C88\\u2C8A\\u2C8C\\u2C8E\\u2C90\\u2C92\\u2C94\\u2C96\\u2C98\\u2C9A\\u2C9C\\u2C9E\\u2CA0\\u2CA2\\u2CA4\\u2CA6\\u2CA8\\u2CAA\\u2CAC\\u2CAE\\u2CB0\\u2CB2\\u2CB4\\u2CB6\\u2CB8\\u2CBA\\u2CBC\\u2CBE\\u2CC0\\u2CC2\\u2CC4\\u2CC6\\u2CC8\\u2CCA\\u2CCC\\u2CCE\\u2CD0\\u2CD2\\u2CD4\\u2CD6\\u2CD8\\u2CDA\\u2CDC\\u2CDE\\u2CE0\\u2CE2\\u2CEB\\u2CED\\u2CF2\\uA640\\uA642\\uA644\\uA646\\uA648\\uA64A\\uA64C\\uA64E\\uA650\\uA652\\uA654\\uA656\\uA658\\uA65A\\uA65C\\uA65E\\uA660\\uA662\\uA664\\uA666\\uA668\\uA66A\\uA66C\\uA680\\uA682\\uA684\\uA686\\uA688\\uA68A\\uA68C\\uA68E\\uA690\\uA692\\uA694\\uA696\\uA698\\uA69A\\uA722\\uA724\\uA726\\uA728\\uA72A\\uA72C\\uA72E\\uA732\\uA734\\uA736\\uA738\\uA73A\\uA73C\\uA73E\\uA740\\uA742\\uA744\\uA746\\uA748\\uA74A\\uA74C\\uA74E\\uA750\\uA752\\uA754\\uA756\\uA758\\uA75A\\uA75C\\uA75E\\uA760\\uA762\\uA764\\uA766\\uA768\\uA76A\\uA76C\\uA76E\\uA779\\uA77B\\uA77D-\\uA77E\\uA780\\uA782\\uA784\\uA786\\uA78B\\uA78D\\uA790\\uA792\\uA796\\uA798\\uA79A\\uA79C\\uA79E\\uA7A0\\uA7A2\\uA7A4\\uA7A6\\uA7A8\\uA7AA-\\uA7AD\\uA7B0-\\uA7B4\\uA7B6\\uFF21-\\uFF3A]",description:"[\\u0041-\\u005A\\u00C0-\\u00D6\\u00D8-\\u00DE\\u0100\\u0102\\u0104\\u0106\\u0108\\u010A\\u010C\\u010E\\u0110\\u0112\\u0114\\u0116\\u0118\\u011A\\u011C\\u011E\\u0120\\u0122\\u0124\\u0126\\u0128\\u012A\\u012C\\u012E\\u0130\\u0132\\u0134\\u0136\\u0139\\u013B\\u013D\\u013F\\u0141\\u0143\\u0145\\u0147\\u014A\\u014C\\u014E\\u0150\\u0152\\u0154\\u0156\\u0158\\u015A\\u015C\\u015E\\u0160\\u0162\\u0164\\u0166\\u0168\\u016A\\u016C\\u016E\\u0170\\u0172\\u0174\\u0176\\u0178-\\u0179\\u017B\\u017D\\u0181-\\u0182\\u0184\\u0186-\\u0187\\u0189-\\u018B\\u018E-\\u0191\\u0193-\\u0194\\u0196-\\u0198\\u019C-\\u019D\\u019F-\\u01A0\\u01A2\\u01A4\\u01A6-\\u01A7\\u01A9\\u01AC\\u01AE-\\u01AF\\u01B1-\\u01B3\\u01B5\\u01B7-\\u01B8\\u01BC\\u01C4\\u01C7\\u01CA\\u01CD\\u01CF\\u01D1\\u01D3\\u01D5\\u01D7\\u01D9\\u01DB\\u01DE\\u01E0\\u01E2\\u01E4\\u01E6\\u01E8\\u01EA\\u01EC\\u01EE\\u01F1\\u01F4\\u01F6-\\u01F8\\u01FA\\u01FC\\u01FE\\u0200\\u0202\\u0204\\u0206\\u0208\\u020A\\u020C\\u020E\\u0210\\u0212\\u0214\\u0216\\u0218\\u021A\\u021C\\u021E\\u0220\\u0222\\u0224\\u0226\\u0228\\u022A\\u022C\\u022E\\u0230\\u0232\\u023A-\\u023B\\u023D-\\u023E\\u0241\\u0243-\\u0246\\u0248\\u024A\\u024C\\u024E\\u0370\\u0372\\u0376\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u038F\\u0391-\\u03A1\\u03A3-\\u03AB\\u03CF\\u03D2-\\u03D4\\u03D8\\u03DA\\u03DC\\u03DE\\u03E0\\u03E2\\u03E4\\u03E6\\u03E8\\u03EA\\u03EC\\u03EE\\u03F4\\u03F7\\u03F9-\\u03FA\\u03FD-\\u042F\\u0460\\u0462\\u0464\\u0466\\u0468\\u046A\\u046C\\u046E\\u0470\\u0472\\u0474\\u0476\\u0478\\u047A\\u047C\\u047E\\u0480\\u048A\\u048C\\u048E\\u0490\\u0492\\u0494\\u0496\\u0498\\u049A\\u049C\\u049E\\u04A0\\u04A2\\u04A4\\u04A6\\u04A8\\u04AA\\u04AC\\u04AE\\u04B0\\u04B2\\u04B4\\u04B6\\u04B8\\u04BA\\u04BC\\u04BE\\u04C0-\\u04C1\\u04C3\\u04C5\\u04C7\\u04C9\\u04CB\\u04CD\\u04D0\\u04D2\\u04D4\\u04D6\\u04D8\\u04DA\\u04DC\\u04DE\\u04E0\\u04E2\\u04E4\\u04E6\\u04E8\\u04EA\\u04EC\\u04EE\\u04F0\\u04F2\\u04F4\\u04F6\\u04F8\\u04FA\\u04FC\\u04FE\\u0500\\u0502\\u0504\\u0506\\u0508\\u050A\\u050C\\u050E\\u0510\\u0512\\u0514\\u0516\\u0518\\u051A\\u051C\\u051E\\u0520\\u0522\\u0524\\u0526\\u0528\\u052A\\u052C\\u052E\\u0531-\\u0556\\u10A0-\\u10C5\\u10C7\\u10CD\\u13A0-\\u13F5\\u1E00\\u1E02\\u1E04\\u1E06\\u1E08\\u1E0A\\u1E0C\\u1E0E\\u1E10\\u1E12\\u1E14\\u1E16\\u1E18\\u1E1A\\u1E1C\\u1E1E\\u1E20\\u1E22\\u1E24\\u1E26\\u1E28\\u1E2A\\u1E2C\\u1E2E\\u1E30\\u1E32\\u1E34\\u1E36\\u1E38\\u1E3A\\u1E3C\\u1E3E\\u1E40\\u1E42\\u1E44\\u1E46\\u1E48\\u1E4A\\u1E4C\\u1E4E\\u1E50\\u1E52\\u1E54\\u1E56\\u1E58\\u1E5A\\u1E5C\\u1E5E\\u1E60\\u1E62\\u1E64\\u1E66\\u1E68\\u1E6A\\u1E6C\\u1E6E\\u1E70\\u1E72\\u1E74\\u1E76\\u1E78\\u1E7A\\u1E7C\\u1E7E\\u1E80\\u1E82\\u1E84\\u1E86\\u1E88\\u1E8A\\u1E8C\\u1E8E\\u1E90\\u1E92\\u1E94\\u1E9E\\u1EA0\\u1EA2\\u1EA4\\u1EA6\\u1EA8\\u1EAA\\u1EAC\\u1EAE\\u1EB0\\u1EB2\\u1EB4\\u1EB6\\u1EB8\\u1EBA\\u1EBC\\u1EBE\\u1EC0\\u1EC2\\u1EC4\\u1EC6\\u1EC8\\u1ECA\\u1ECC\\u1ECE\\u1ED0\\u1ED2\\u1ED4\\u1ED6\\u1ED8\\u1EDA\\u1EDC\\u1EDE\\u1EE0\\u1EE2\\u1EE4\\u1EE6\\u1EE8\\u1EEA\\u1EEC\\u1EEE\\u1EF0\\u1EF2\\u1EF4\\u1EF6\\u1EF8\\u1EFA\\u1EFC\\u1EFE\\u1F08-\\u1F0F\\u1F18-\\u1F1D\\u1F28-\\u1F2F\\u1F38-\\u1F3F\\u1F48-\\u1F4D\\u1F59\\u1F5B\\u1F5D\\u1F5F\\u1F68-\\u1F6F\\u1FB8-\\u1FBB\\u1FC8-\\u1FCB\\u1FD8-\\u1FDB\\u1FE8-\\u1FEC\\u1FF8-\\u1FFB\\u2102\\u2107\\u210B-\\u210D\\u2110-\\u2112\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u2130-\\u2133\\u213E-\\u213F\\u2145\\u2183\\u2C00-\\u2C2E\\u2C60\\u2C62-\\u2C64\\u2C67\\u2C69\\u2C6B\\u2C6D-\\u2C70\\u2C72\\u2C75\\u2C7E-\\u2C80\\u2C82\\u2C84\\u2C86\\u2C88\\u2C8A\\u2C8C\\u2C8E\\u2C90\\u2C92\\u2C94\\u2C96\\u2C98\\u2C9A\\u2C9C\\u2C9E\\u2CA0\\u2CA2\\u2CA4\\u2CA6\\u2CA8\\u2CAA\\u2CAC\\u2CAE\\u2CB0\\u2CB2\\u2CB4\\u2CB6\\u2CB8\\u2CBA\\u2CBC\\u2CBE\\u2CC0\\u2CC2\\u2CC4\\u2CC6\\u2CC8\\u2CCA\\u2CCC\\u2CCE\\u2CD0\\u2CD2\\u2CD4\\u2CD6\\u2CD8\\u2CDA\\u2CDC\\u2CDE\\u2CE0\\u2CE2\\u2CEB\\u2CED\\u2CF2\\uA640\\uA642\\uA644\\uA646\\uA648\\uA64A\\uA64C\\uA64E\\uA650\\uA652\\uA654\\uA656\\uA658\\uA65A\\uA65C\\uA65E\\uA660\\uA662\\uA664\\uA666\\uA668\\uA66A\\uA66C\\uA680\\uA682\\uA684\\uA686\\uA688\\uA68A\\uA68C\\uA68E\\uA690\\uA692\\uA694\\uA696\\uA698\\uA69A\\uA722\\uA724\\uA726\\uA728\\uA72A\\uA72C\\uA72E\\uA732\\uA734\\uA736\\uA738\\uA73A\\uA73C\\uA73E\\uA740\\uA742\\uA744\\uA746\\uA748\\uA74A\\uA74C\\uA74E\\uA750\\uA752\\uA754\\uA756\\uA758\\uA75A\\uA75C\\uA75E\\uA760\\uA762\\uA764\\uA766\\uA768\\uA76A\\uA76C\\uA76E\\uA779\\uA77B\\uA77D-\\uA77E\\uA780\\uA782\\uA784\\uA786\\uA78B\\uA78D\\uA790\\uA792\\uA796\\uA798\\uA79A\\uA79C\\uA79E\\uA7A0\\uA7A2\\uA7A4\\uA7A6\\uA7A8\\uA7AA-\\uA7AD\\uA7B0-\\uA7B4\\uA7B6\\uFF21-\\uFF3A]"},Er=/^[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E-\u094F\u0982-\u0983\u09BE-\u09C0\u09C7-\u09C8\u09CB-\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB-\u0ACC\u0B02-\u0B03\u0B3E\u0B40\u0B47-\u0B48\u0B4B-\u0B4C\u0B57\u0BBE-\u0BBF\u0BC1-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82-\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7-\u0CC8\u0CCA-\u0CCB\u0CD5-\u0CD6\u0D02-\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82-\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2-\u0DF3\u0F3E-\u0F3F\u0F7F\u102B-\u102C\u1031\u1038\u103B-\u103C\u1056-\u1057\u1062-\u1064\u1067-\u106D\u1083-\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7-\u17C8\u1923-\u1926\u1929-\u192B\u1930-\u1931\u1933-\u1938\u1A19-\u1A1A\u1A55\u1A57\u1A61\u1A63-\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43-\u1B44\u1B82\u1BA1\u1BA6-\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2-\u1BF3\u1C24-\u1C2B\u1C34-\u1C35\u1CE1\u1CF2-\u1CF3\u302E-\u302F\uA823-\uA824\uA827\uA880-\uA881\uA8B4-\uA8C3\uA952-\uA953\uA983\uA9B4-\uA9B5\uA9BA-\uA9BB\uA9BD-\uA9C0\uAA2F-\uAA30\uAA33-\uAA34\uAA4D\uAA7B\uAA7D\uAAEB\uAAEE-\uAAEF\uAAF5\uABE3-\uABE4\uABE6-\uABE7\uABE9-\uABEA\uABEC]/,Cr={type:"class",value:"[\\u0903\\u093B\\u093E-\\u0940\\u0949-\\u094C\\u094E-\\u094F\\u0982-\\u0983\\u09BE-\\u09C0\\u09C7-\\u09C8\\u09CB-\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB-\\u0ACC\\u0B02-\\u0B03\\u0B3E\\u0B40\\u0B47-\\u0B48\\u0B4B-\\u0B4C\\u0B57\\u0BBE-\\u0BBF\\u0BC1-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82-\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7-\\u0CC8\\u0CCA-\\u0CCB\\u0CD5-\\u0CD6\\u0D02-\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82-\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2-\\u0DF3\\u0F3E-\\u0F3F\\u0F7F\\u102B-\\u102C\\u1031\\u1038\\u103B-\\u103C\\u1056-\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083-\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7-\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930-\\u1931\\u1933-\\u1938\\u1A19-\\u1A1A\\u1A55\\u1A57\\u1A61\\u1A63-\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43-\\u1B44\\u1B82\\u1BA1\\u1BA6-\\u1BA7\\u1BAA\\u1BE7\\u1BEA-\\u1BEC\\u1BEE\\u1BF2-\\u1BF3\\u1C24-\\u1C2B\\u1C34-\\u1C35\\u1CE1\\u1CF2-\\u1CF3\\u302E-\\u302F\\uA823-\\uA824\\uA827\\uA880-\\uA881\\uA8B4-\\uA8C3\\uA952-\\uA953\\uA983\\uA9B4-\\uA9B5\\uA9BA-\\uA9BB\\uA9BD-\\uA9C0\\uAA2F-\\uAA30\\uAA33-\\uAA34\\uAA4D\\uAA7B\\uAA7D\\uAAEB\\uAAEE-\\uAAEF\\uAAF5\\uABE3-\\uABE4\\uABE6-\\uABE7\\uABE9-\\uABEA\\uABEC]",description:"[\\u0903\\u093B\\u093E-\\u0940\\u0949-\\u094C\\u094E-\\u094F\\u0982-\\u0983\\u09BE-\\u09C0\\u09C7-\\u09C8\\u09CB-\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB-\\u0ACC\\u0B02-\\u0B03\\u0B3E\\u0B40\\u0B47-\\u0B48\\u0B4B-\\u0B4C\\u0B57\\u0BBE-\\u0BBF\\u0BC1-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82-\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7-\\u0CC8\\u0CCA-\\u0CCB\\u0CD5-\\u0CD6\\u0D02-\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82-\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2-\\u0DF3\\u0F3E-\\u0F3F\\u0F7F\\u102B-\\u102C\\u1031\\u1038\\u103B-\\u103C\\u1056-\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083-\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7-\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930-\\u1931\\u1933-\\u1938\\u1A19-\\u1A1A\\u1A55\\u1A57\\u1A61\\u1A63-\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43-\\u1B44\\u1B82\\u1BA1\\u1BA6-\\u1BA7\\u1BAA\\u1BE7\\u1BEA-\\u1BEC\\u1BEE\\u1BF2-\\u1BF3\\u1C24-\\u1C2B\\u1C34-\\u1C35\\u1CE1\\u1CF2-\\u1CF3\\u302E-\\u302F\\uA823-\\uA824\\uA827\\uA880-\\uA881\\uA8B4-\\uA8C3\\uA952-\\uA953\\uA983\\uA9B4-\\uA9B5\\uA9BA-\\uA9BB\\uA9BD-\\uA9C0\\uAA2F-\\uAA30\\uAA33-\\uAA34\\uAA4D\\uAA7B\\uAA7D\\uAAEB\\uAAEE-\\uAAEF\\uAAF5\\uABE3-\\uABE4\\uABE6-\\uABE7\\uABE9-\\uABEA\\uABEC]"},sr=/^[\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962-\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2-\u09E3\u0A01-\u0A02\u0A3C\u0A41-\u0A42\u0A47-\u0A48\u0A4B-\u0A4D\u0A51\u0A70-\u0A71\u0A75\u0A81-\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7-\u0AC8\u0ACD\u0AE2-\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62-\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55-\u0C56\u0C62-\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC-\u0CCD\u0CE2-\u0CE3\u0D01\u0D41-\u0D44\u0D4D\u0D62-\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB-\u0EBC\u0EC8-\u0ECD\u0F18-\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039-\u103A\u103D-\u103E\u1058-\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17B4-\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193B\u1A17-\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80-\u1B81\u1BA2-\u1BA5\u1BA8-\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8-\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8-\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099-\u309A\uA66F\uA674-\uA67D\uA69E-\uA69F\uA6F0-\uA6F1\uA802\uA806\uA80B\uA825-\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31-\uAA32\uAA35-\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7-\uAAB8\uAABE-\uAABF\uAAC1\uAAEC-\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/,ir={type:"class",value:"[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1-\\u05C2\\u05C4-\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7-\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u08E3-\\u0902\\u093A\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0957\\u0962-\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2-\\u09E3\\u0A01-\\u0A02\\u0A3C\\u0A41-\\u0A42\\u0A47-\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70-\\u0A71\\u0A75\\u0A81-\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7-\\u0AC8\\u0ACD\\u0AE2-\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62-\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C00\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55-\\u0C56\\u0C62-\\u0C63\\u0C81\\u0CBC\\u0CBF\\u0CC6\\u0CCC-\\u0CCD\\u0CE2-\\u0CE3\\u0D01\\u0D41-\\u0D44\\u0D4D\\u0D62-\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB-\\u0EBC\\u0EC8-\\u0ECD\\u0F18-\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86-\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039-\\u103A\\u103D-\\u103E\\u1058-\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085-\\u1086\\u108D\\u109D\\u135D-\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752-\\u1753\\u1772-\\u1773\\u17B4-\\u17B5\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927-\\u1928\\u1932\\u1939-\\u193B\\u1A17-\\u1A18\\u1A1B\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1AB0-\\u1ABD\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80-\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BA9\\u1BAB-\\u1BAD\\u1BE6\\u1BE8-\\u1BE9\\u1BED\\u1BEF-\\u1BF1\\u1C2C-\\u1C33\\u1C36-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1CF4\\u1CF8-\\u1CF9\\u1DC0-\\u1DF5\\u1DFC-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302D\\u3099-\\u309A\\uA66F\\uA674-\\uA67D\\uA69E-\\uA69F\\uA6F0-\\uA6F1\\uA802\\uA806\\uA80B\\uA825-\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uA9E5\\uAA29-\\uAA2E\\uAA31-\\uAA32\\uAA35-\\uAA36\\uAA43\\uAA4C\\uAA7C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7-\\uAAB8\\uAABE-\\uAABF\\uAAC1\\uAAEC-\\uAAED\\uAAF6\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F]",description:"[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1-\\u05C2\\u05C4-\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7-\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u08E3-\\u0902\\u093A\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0957\\u0962-\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2-\\u09E3\\u0A01-\\u0A02\\u0A3C\\u0A41-\\u0A42\\u0A47-\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70-\\u0A71\\u0A75\\u0A81-\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7-\\u0AC8\\u0ACD\\u0AE2-\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62-\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C00\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55-\\u0C56\\u0C62-\\u0C63\\u0C81\\u0CBC\\u0CBF\\u0CC6\\u0CCC-\\u0CCD\\u0CE2-\\u0CE3\\u0D01\\u0D41-\\u0D44\\u0D4D\\u0D62-\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB-\\u0EBC\\u0EC8-\\u0ECD\\u0F18-\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86-\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039-\\u103A\\u103D-\\u103E\\u1058-\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085-\\u1086\\u108D\\u109D\\u135D-\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752-\\u1753\\u1772-\\u1773\\u17B4-\\u17B5\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927-\\u1928\\u1932\\u1939-\\u193B\\u1A17-\\u1A18\\u1A1B\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1AB0-\\u1ABD\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80-\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BA9\\u1BAB-\\u1BAD\\u1BE6\\u1BE8-\\u1BE9\\u1BED\\u1BEF-\\u1BF1\\u1C2C-\\u1C33\\u1C36-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1CF4\\u1CF8-\\u1CF9\\u1DC0-\\u1DF5\\u1DFC-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302D\\u3099-\\u309A\\uA66F\\uA674-\\uA67D\\uA69E-\\uA69F\\uA6F0-\\uA6F1\\uA802\\uA806\\uA80B\\uA825-\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uA9E5\\uAA29-\\uAA2E\\uAA31-\\uAA32\\uAA35-\\uAA36\\uAA43\\uAA4C\\uAA7C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7-\\uAAB8\\uAABE-\\uAABF\\uAAC1\\uAAEC-\\uAAED\\uAAF6\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F]"},ar=/^[0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]/,Fr={type:"class",value:"[\\u0030-\\u0039\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]",description:"[\\u0030-\\u0039\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]"},or=/^[\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF]/,cr={type:"class",value:"[\\u16EE-\\u16F0\\u2160-\\u2182\\u2185-\\u2188\\u3007\\u3021-\\u3029\\u3038-\\u303A\\uA6E6-\\uA6EF]",description:"[\\u16EE-\\u16F0\\u2160-\\u2182\\u2185-\\u2188\\u3007\\u3021-\\u3029\\u3038-\\u303A\\uA6E6-\\uA6EF]"},pr=/^[_\u203F-\u2040\u2054\uFE33-\uFE34\uFE4D-\uFE4F\uFF3F]/,Br={type:"class",value:"[\\u005F\\u203F-\\u2040\\u2054\\uFE33-\\uFE34\\uFE4D-\\uFE4F\\uFF3F]",description:"[\\u005F\\u203F-\\u2040\\u2054\\uFE33-\\uFE34\\uFE4D-\\uFE4F\\uFF3F]"},Dr=/^[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,lr={type:"class",value:"[\\u0020\\u00A0\\u1680\\u2000-\\u200A\\u202F\\u205F\\u3000]",description:"[\\u0020\\u00A0\\u1680\\u2000-\\u200A\\u202F\\u205F\\u3000]"},dr="break",fr={type:"literal",value:"break",description:'"break"'},hr="case",vr={type:"literal",value:"case",description:'"case"'},gr="catch",mr={type:"literal",value:"catch",description:'"catch"'},yr="class",Pr={type:"literal",value:"class",description:'"class"'},br="const",xr={type:"literal",value:"const",description:'"const"'},_r="continue",$r={type:"literal",value:"continue",description:'"continue"'},Rr="debugger",kr={type:"literal",value:"debugger",description:'"debugger"'},Sr="default",Ir={type:"literal",value:"default",description:'"default"'},Or="delete",Lr={type:"literal",value:"delete",description:'"delete"'},Tr="do",wr={type:"literal",value:"do",description:'"do"'},Nr="else",jr={type:"literal",value:"else",description:'"else"'},Ur="enum",Hr={type:"literal",value:"enum",description:'"enum"'},zr="export",Mr={type:"literal",value:"export",description:'"export"'},Gr="extends",qr={type:"literal",value:"extends",description:'"extends"'},Yr="false",Vr={type:"literal",value:"false",description:'"false"'},Wr="finally",Xr={type:"literal",value:"finally",description:'"finally"'},Jr="for",Zr={type:"literal",value:"for",description:'"for"'},Kr="function",Qr={type:"literal",value:"function",description:'"function"'},un="if",en={type:"literal",value:"if",description:'"if"'},An="import",tn={type:"literal",value:"import",description:'"import"'},rn="instanceof",nn={type:"literal",value:"instanceof",description:'"instanceof"'},En="in",Cn={type:"literal",value:"in",description:'"in"'},sn="new",an={type:"literal",value:"new",description:'"new"'},Fn="null",on={type:"literal",value:"null",description:'"null"'},cn="return",pn={type:"literal",value:"return",description:'"return"'},Bn="super",Dn={type:"literal",value:"super",description:'"super"'},ln="switch",dn={type:"literal",value:"switch",description:'"switch"'},fn="this",hn={type:"literal",value:"this",description:'"this"'},vn="throw",gn={type:"literal",value:"throw",description:'"throw"'},mn="true",yn={type:"literal",value:"true",description:'"true"'},Pn="try",bn={type:"literal",value:"try",description:'"try"'},xn="typeof",_n={type:"literal",value:"typeof",description:'"typeof"'},$n="var",Rn={type:"literal",value:"var",description:'"var"'},kn="void",Sn={type:"literal",value:"void",description:'"void"'},In="while",On={type:"literal",value:"while",description:'"while"'},Ln="with",Tn={type:"literal",value:"with",description:'"with"'},wn=";",Nn={type:"literal",value:";",description:'";"'},jn=0,Un=0,Hn=[{line:1,column:1,seenCR:!1}],zn=0,Mn=[],Gn=0;if("startRule"in ae){if(!(ae.startRule in oe))throw new Error("Can't start parsing from rule \""+ae.startRule+'".');ce=oe[ae.startRule]}var qn={$:"text","&":"simple_and","!":"simple_not"},Yn={"?":"optional","*":"zero_or_more","+":"one_or_more"},Vn={"&":"semantic_and","!":"semantic_not"};if(ie=ce(),ie!==Fe&&jn===u.length)return ie;throw ie!==Fe&&jn<u.length&&C({type:"end",description:"end of input"}),s(null,Mn,zn<u.length?u.charAt(zn):null,zn<u.length?E(zn,zn+1):E(zn,zn))}return u(e,Error),{SyntaxError:e,parse:A}}()}),modules.define("compiler/visitor",function(u,e){var A=e("../utils/objects"),t=e("../utils/arrays"),r={build:function(u){function e(e){return u[e.type].apply(null,arguments)}function r(){}function n(u){var A=Array.prototype.slice.call(arguments,1);e.apply(null,[u.expression].concat(A))}function E(u){return function(A){var r=Array.prototype.slice.call(arguments,1);t.each(A[u],function(u){e.apply(null,[u].concat(r))})}}var C={grammar:function(u){var A=Array.prototype.slice.call(arguments,1);u.initializer&&e.apply(null,[u.initializer].concat(A)),t.each(u.rules,function(u){e.apply(null,[u].concat(A))})},initializer:r,rule:n,named:n,choice:E("alternatives"),action:n,sequence:E("elements"),labeled:n,text:n,simple_and:n,simple_not:n,optional:n,zero_or_more:n,one_or_more:n,semantic_and:r,semantic_not:r,rule_ref:r,literal:r,"class":r,any:r};return A.defaults(u,C),e}};u.exports=r}),modules.define("compiler/asts",function(u,e){var A=e("../utils/arrays"),t=e("./visitor"),r={findRule:function(u,e){return A.find(u.rules,function(u){return u.name===e})},indexOfRule:function(u,e){return A.indexOf(u.rules,function(u){return u.name===e})},alwaysAdvancesOnSuccess:function(u,e){function n(){return!0}function E(){return!1}function C(u){return s(u.expression)}var s=t.build({rule:C,named:C,choice:function(u){return A.every(u.alternatives,s)},action:C,sequence:function(u){return A.some(u.elements,s)},labeled:C,text:C,simple_and:E,simple_not:E,optional:E,zero_or_more:E,one_or_more:C,semantic_and:E,semantic_not:E,rule_ref:function(e){return s(r.findRule(u,e.name))},literal:function(u){return""!==u.value},"class":n,any:n});return s(e)}};u.exports=r}),modules.define("compiler/opcodes",function(u,e){var A={PUSH:0,PUSH_UNDEFINED:1,PUSH_NULL:2,PUSH_FAILED:3,PUSH_EMPTY_ARRAY:4,PUSH_CURR_POS:5,POP:6,POP_CURR_POS:7,POP_N:8,NIP:9,APPEND:10,WRAP:11,TEXT:12,IF:13,IF_ERROR:14,IF_NOT_ERROR:15,WHILE_NOT_ERROR:16,MATCH_ANY:17,MATCH_STRING:18,MATCH_STRING_IC:19,MATCH_REGEXP:20,ACCEPT_N:21,ACCEPT_STRING:22,FAIL:23,LOAD_SAVED_POS:24,UPDATE_SAVED_POS:25,CALL:26,RULE:27,SILENT_FAILS_ON:28,SILENT_FAILS_OFF:29};u.exports=A}),modules.define("compiler/javascript",function(u,e){function A(u){return u.charCodeAt(0).toString(16).toUpperCase()}var t={stringEscape:function(u){return u.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(u){return"\\x0"+A(u)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(u){return"\\x"+A(u)}).replace(/[\u0100-\u0FFF]/g,function(u){return"\\u0"+A(u)}).replace(/[\u1000-\uFFFF]/g,function(u){return"\\u"+A(u)})},regexpClassEscape:function(u){return u.replace(/\\/g,"\\\\").replace(/\//g,"\\/").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\v/g,"\\x0B").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x08\x0E\x0F]/g,function(u){return"\\x0"+A(u)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(u){return"\\x"+A(u)}).replace(/[\u0100-\u0FFF]/g,function(u){return"\\u0"+A(u)}).replace(/[\u1000-\uFFFF]/g,function(u){return"\\u"+A(u)})}};u.exports=t}),modules.define("compiler/passes/generate-bytecode",function(u,e){function A(u){function e(u){var e=t.indexOf(D,u);return-1===e?D.push(u)-1:e}function A(u,A){return e("function("+u.join(", ")+") {"+A+"}")}function i(){return Array.prototype.concat.apply([],arguments)}function a(u,e,A){return u.concat([e.length,A.length],e,A)}function F(u,e){return u.concat([e.length],e)}function o(u,e,A,n){var E=t.map(r.values(A),function(u){return n-u});return[C.CALL,u,e,E.length].concat(E)}function c(u,e,A){return i([C.PUSH_CURR_POS],[C.SILENT_FAILS_ON],l(u,{sp:A.sp+1,env:r.clone(A.env),action:null}),[C.SILENT_FAILS_OFF],a([e?C.IF_ERROR:C.IF_NOT_ERROR],i([C.POP],[e?C.POP:C.POP_CURR_POS],[C.PUSH_UNDEFINED]),i([C.POP],[e?C.POP_CURR_POS:C.POP],[C.PUSH_FAILED])))}function p(u,e,t){var n=A(r.keys(t.env),u);return i([C.UPDATE_SAVED_POS],o(n,0,t.env,t.sp),a([C.IF],i([C.POP],e?[C.PUSH_FAILED]:[C.PUSH_UNDEFINED]),i([C.POP],e?[C.PUSH_UNDEFINED]:[C.PUSH_FAILED])))}function B(u){return F([C.WHILE_NOT_ERROR],i([C.APPEND],u))}var D=[],l=E.build({grammar:function(u){t.each(u.rules,l),u.consts=D},rule:function(u){u.bytecode=l(u.expression,{sp:-1,env:{},action:null})},named:function(u,A){var t=e('{ type: "other", description: "'+s.stringEscape(u.name)+'" }');return i([C.SILENT_FAILS_ON],l(u.expression,A),[C.SILENT_FAILS_OFF],a([C.IF_ERROR],[C.FAIL,t],[]))},choice:function(u,e){function A(u,e){return i(l(u[0],{sp:e.sp,env:r.clone(e.env),action:null}),u.length>1?a([C.IF_ERROR],i([C.POP],A(u.slice(1),e)),[]):[])}return A(u.alternatives,e)},action:function(u,e){var t=r.clone(e.env),n="sequence"!==u.expression.type||0===u.expression.elements.length,E=l(u.expression,{sp:e.sp+(n?1:0),env:t,action:u}),s=A(r.keys(t),u.code);return n?i([C.PUSH_CURR_POS],E,a([C.IF_NOT_ERROR],i([C.LOAD_SAVED_POS,1],o(s,1,t,e.sp+2)),[]),[C.NIP]):E},sequence:function(u,e){function t(e,n){var E,s;return e.length>0?(E=u.elements.length-e.slice(1).length,i(l(e[0],{sp:n.sp,env:n.env,action:null}),a([C.IF_NOT_ERROR],t(e.slice(1),{sp:n.sp+1,env:n.env,action:n.action}),i(E>1?[C.POP_N,E]:[C.POP],[C.POP_CURR_POS],[C.PUSH_FAILED])))):n.action?(s=A(r.keys(n.env),n.action.code),i([C.LOAD_SAVED_POS,u.elements.length],o(s,u.elements.length,n.env,n.sp),[C.NIP])):i([C.WRAP,u.elements.length],[C.NIP])}return i([C.PUSH_CURR_POS],t(u.elements,{sp:e.sp+1,env:e.env,action:e.action}))},labeled:function(u,e){var A=r.clone(e.env);return e.env[u.label]=e.sp+1,l(u.expression,{sp:e.sp,env:A,action:null})},text:function(u,e){return i([C.PUSH_CURR_POS],l(u.expression,{sp:e.sp+1,env:r.clone(e.env),action:null}),a([C.IF_NOT_ERROR],i([C.POP],[C.TEXT]),[C.NIP]))},simple_and:function(u,e){return c(u.expression,!1,e)},simple_not:function(u,e){return c(u.expression,!0,e)},optional:function(u,e){return i(l(u.expression,{sp:e.sp,env:r.clone(e.env),action:null}),a([C.IF_ERROR],i([C.POP],[C.PUSH_NULL]),[]))},zero_or_more:function(u,e){var A=l(u.expression,{sp:e.sp+1,env:r.clone(e.env),action:null});return i([C.PUSH_EMPTY_ARRAY],A,B(A),[C.POP])},one_or_more:function(u,e){var A=l(u.expression,{sp:e.sp+1,env:r.clone(e.env),action:null});return i([C.PUSH_EMPTY_ARRAY],A,a([C.IF_NOT_ERROR],i(B(A),[C.POP]),i([C.POP],[C.POP],[C.PUSH_FAILED])))},semantic_and:function(u,e){return p(u.code,!1,e)},semantic_not:function(u,e){return p(u.code,!0,e)},rule_ref:function(e){return[C.RULE,n.indexOfRule(u,e.name)];
},literal:function(u){var A,t;return u.value.length>0?(A=e('"'+s.stringEscape(u.ignoreCase?u.value.toLowerCase():u.value)+'"'),t=e(["{",'type: "literal",','value: "'+s.stringEscape(u.value)+'",','description: "'+s.stringEscape('"'+s.stringEscape(u.value)+'"')+'"',"}"].join(" ")),a(u.ignoreCase?[C.MATCH_STRING_IC,A]:[C.MATCH_STRING,A],u.ignoreCase?[C.ACCEPT_N,u.value.length]:[C.ACCEPT_STRING,A],[C.FAIL,t])):(A=e('""'),[C.PUSH,A])},"class":function(u){var A,r,n;return A=u.parts.length>0?"/^["+(u.inverted?"^":"")+t.map(u.parts,function(u){return u instanceof Array?s.regexpClassEscape(u[0])+"-"+s.regexpClassEscape(u[1]):s.regexpClassEscape(u)}).join("")+"]/"+(u.ignoreCase?"i":""):u.inverted?"/^[\\S\\s]/":"/^(?!)/",r=e(A),n=e(["{",'type: "class",','value: "'+s.stringEscape(u.rawText)+'",','description: "'+s.stringEscape(u.rawText)+'"',"}"].join(" ")),a([C.MATCH_REGEXP,r],[C.ACCEPT_N,1],[C.FAIL,n])},any:function(){var u=e('{ type: "any", description: "any character" }');return a([C.MATCH_ANY],[C.ACCEPT_N,1],[C.FAIL,u])}});l(u)}var t=e("../../utils/arrays"),r=e("../../utils/objects"),n=e("../asts"),E=e("../visitor"),C=e("../opcodes"),s=e("../javascript");u.exports=A}),modules.define("compiler/passes/generate-javascript",function(module,require){function generateJavascript(ast,options){function indent2(u){return u.replace(/^(.+)$/gm,"  $1")}function indent4(u){return u.replace(/^(.+)$/gm,"    $1")}function indent8(u){return u.replace(/^(.+)$/gm,"        $1")}function indent10(u){return u.replace(/^(.+)$/gm,"          $1")}function generateTables(){return"size"===options.optimize?["peg$consts = [",indent2(ast.consts.join(",\n")),"],","","peg$bytecode = [",indent2(arrays.map(ast.rules,function(u){return'peg$decode("'+js.stringEscape(arrays.map(u.bytecode,function(u){return String.fromCharCode(u+32)}).join(""))+'")'}).join(",\n")),"],"].join("\n"):arrays.map(ast.consts,function(u,e){return"peg$c"+e+" = "+u+","}).join("\n")}function generateRuleHeader(u,e){var A=[];return A.push(""),options.trace&&A.push(["peg$tracer.trace({",'  type:     "rule.enter",',"  rule:     "+u+",","  location: peg$computeLocation(startPos, startPos)","});",""].join("\n")),options.cache&&(A.push(["var key    = peg$currPos * "+ast.rules.length+" + "+e+",","    cached = peg$resultsCache[key];","","if (cached) {","  peg$currPos = cached.nextPos;",""].join("\n")),options.trace&&A.push(["if (cached.result !== peg$FAILED) {","  peg$tracer.trace({",'    type:   "rule.match",',"    rule:   "+u+",","    result: cached.result,","    location: peg$computeLocation(startPos, peg$currPos)","  });","} else {","  peg$tracer.trace({",'    type: "rule.fail",',"    rule: "+u+",","    location: peg$computeLocation(startPos, startPos)","  });","}",""].join("\n")),A.push(["  return cached.result;","}",""].join("\n"))),A.join("\n")}function generateRuleFooter(u,e){var A=[];return options.cache&&A.push(["","peg$resultsCache[key] = { nextPos: peg$currPos, result: "+e+" };"].join("\n")),options.trace&&A.push(["","if ("+e+" !== peg$FAILED) {","  peg$tracer.trace({",'    type:   "rule.match",',"    rule:   "+u+",","    result: "+e+",","    location: peg$computeLocation(startPos, peg$currPos)","  });","} else {","  peg$tracer.trace({",'    type: "rule.fail",',"    rule: "+u+",","    location: peg$computeLocation(startPos, startPos)","  });","}"].join("\n")),A.push(["","return "+e+";"].join("\n")),A.join("\n")}function generateInterpreter(){function u(u,e){var A=e+3,t="bc[ip + "+(A-2)+"]",r="bc[ip + "+(A-1)+"]";return["ends.push(end);","ips.push(ip + "+A+" + "+t+" + "+r+");","","if ("+u+") {","  end = ip + "+A+" + "+t+";","  ip += "+A+";","} else {","  end = ip + "+A+" + "+t+" + "+r+";","  ip += "+A+" + "+t+";","}","","break;"].join("\n")}function e(u){var e=2,A="bc[ip + "+(e-1)+"]";return["if ("+u+") {","  ends.push(end);","  ips.push(ip);","","  end = ip + "+e+" + "+A+";","  ip += "+e+";","} else {","  ip += "+e+" + "+A+";","}","","break;"].join("\n")}function A(){var u=4,e="bc[ip + "+(u-1)+"]";return["params = bc.slice(ip + "+u+", ip + "+u+" + "+e+");","for (i = 0; i < "+e+"; i++) {","  params[i] = stack[stack.length - 1 - params[i]];","}","","stack.splice(","  stack.length - bc[ip + 2],","  bc[ip + 2],","  peg$consts[bc[ip + 1]].apply(null, params)",");","","ip += "+u+" + "+e+";","break;"].join("\n")}var t=[];return t.push(["function peg$decode(s) {","  var bc = new Array(s.length), i;","","  for (i = 0; i < s.length; i++) {","    bc[i] = s.charCodeAt(i) - 32;","  }","","  return bc;","}","","function peg$parseRule(index) {"].join("\n")),options.trace?t.push(["  var bc       = peg$bytecode[index],","      ip       = 0,","      ips      = [],","      end      = bc.length,","      ends     = [],","      stack    = [],","      startPos = peg$currPos,","      params, i;"].join("\n")):t.push(["  var bc    = peg$bytecode[index],","      ip    = 0,","      ips   = [],","      end   = bc.length,","      ends  = [],","      stack = [],","      params, i;"].join("\n")),t.push(indent2(generateRuleHeader("peg$ruleNames[index]","index"))),t.push(["  while (true) {","    while (ip < end) {","      switch (bc[ip]) {","        case "+op.PUSH+":","          stack.push(peg$consts[bc[ip + 1]]);","          ip += 2;","          break;","","        case "+op.PUSH_UNDEFINED+":","          stack.push(void 0);","          ip++;","          break;","","        case "+op.PUSH_NULL+":","          stack.push(null);","          ip++;","          break;","","        case "+op.PUSH_FAILED+":","          stack.push(peg$FAILED);","          ip++;","          break;","","        case "+op.PUSH_EMPTY_ARRAY+":","          stack.push([]);","          ip++;","          break;","","        case "+op.PUSH_CURR_POS+":","          stack.push(peg$currPos);","          ip++;","          break;","","        case "+op.POP+":","          stack.pop();","          ip++;","          break;","","        case "+op.POP_CURR_POS+":","          peg$currPos = stack.pop();","          ip++;","          break;","","        case "+op.POP_N+":","          stack.length -= bc[ip + 1];","          ip += 2;","          break;","","        case "+op.NIP+":","          stack.splice(-2, 1);","          ip++;","          break;","","        case "+op.APPEND+":","          stack[stack.length - 2].push(stack.pop());","          ip++;","          break;","","        case "+op.WRAP+":","          stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));","          ip += 2;","          break;","","        case "+op.TEXT+":","          stack.push(input.substring(stack.pop(), peg$currPos));","          ip++;","          break;","","        case "+op.IF+":",indent10(u("stack[stack.length - 1]",0)),"","        case "+op.IF_ERROR+":",indent10(u("stack[stack.length - 1] === peg$FAILED",0)),"","        case "+op.IF_NOT_ERROR+":",indent10(u("stack[stack.length - 1] !== peg$FAILED",0)),"","        case "+op.WHILE_NOT_ERROR+":",indent10(e("stack[stack.length - 1] !== peg$FAILED")),"","        case "+op.MATCH_ANY+":",indent10(u("input.length > peg$currPos",0)),"","        case "+op.MATCH_STRING+":",indent10(u("input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]",1)),"","        case "+op.MATCH_STRING_IC+":",indent10(u("input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]",1)),"","        case "+op.MATCH_REGEXP+":",indent10(u("peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))",1)),"","        case "+op.ACCEPT_N+":","          stack.push(input.substr(peg$currPos, bc[ip + 1]));","          peg$currPos += bc[ip + 1];","          ip += 2;","          break;","","        case "+op.ACCEPT_STRING+":","          stack.push(peg$consts[bc[ip + 1]]);","          peg$currPos += peg$consts[bc[ip + 1]].length;","          ip += 2;","          break;","","        case "+op.FAIL+":","          stack.push(peg$FAILED);","          if (peg$silentFails === 0) {","            peg$fail(peg$consts[bc[ip + 1]]);","          }","          ip += 2;","          break;","","        case "+op.LOAD_SAVED_POS+":","          peg$savedPos = stack[stack.length - 1 - bc[ip + 1]];","          ip += 2;","          break;","","        case "+op.UPDATE_SAVED_POS+":","          peg$savedPos = peg$currPos;","          ip++;","          break;","","        case "+op.CALL+":",indent10(A()),"","        case "+op.RULE+":","          stack.push(peg$parseRule(bc[ip + 1]));","          ip += 2;","          break;","","        case "+op.SILENT_FAILS_ON+":","          peg$silentFails++;","          ip++;","          break;","","        case "+op.SILENT_FAILS_OFF+":","          peg$silentFails--;","          ip++;","          break;","","        default:",'          throw new Error("Invalid opcode: " + bc[ip] + ".");',"      }","    }","","    if (ends.length > 0) {","      end = ends.pop();","      ip = ips.pop();","    } else {","      break;","    }","  }"].join("\n")),t.push(indent2(generateRuleFooter("peg$ruleNames[index]","stack[0]"))),t.push("}"),t.join("\n")}function generateRuleFunction(rule){function c(u){return"peg$c"+u}function s(u){return"s"+u}function compile(bc){function compileCondition(u,e){var A,t,r,n,E=e+3,C=bc[ip+E-2],s=bc[ip+E-1],i=stack.sp;if(ip+=E,A=compile(bc.slice(ip,ip+C)),r=stack.sp,ip+=C,s>0&&(stack.sp=i,t=compile(bc.slice(ip,ip+s)),n=stack.sp,ip+=s,r!==n))throw new Error("Branches of a condition must move the stack pointer in the same way.");parts.push("if ("+u+") {"),parts.push(indent2(A)),s>0&&(parts.push("} else {"),parts.push(indent2(t))),parts.push("}")}function compileLoop(u){var e,A,t=2,r=bc[ip+t-1],n=stack.sp;if(ip+=t,e=compile(bc.slice(ip,ip+r)),A=stack.sp,ip+=r,A!==n)throw new Error("Body of a loop can't move the stack pointer.");parts.push("while ("+u+") {"),parts.push(indent2(e)),parts.push("}")}function compileCall(){var u=4,e=bc[ip+u-1],A=c(bc[ip+1])+"("+arrays.map(bc.slice(ip+u,ip+u+e),function(u){return stack.index(u)}).join(", ")+")";stack.pop(bc[ip+2]),parts.push(stack.push(A)),ip+=u+e}for(var ip=0,end=bc.length,parts=[],value;end>ip;)switch(bc[ip]){case op.PUSH:parts.push(stack.push(c(bc[ip+1]))),ip+=2;break;case op.PUSH_CURR_POS:parts.push(stack.push("peg$currPos")),ip++;break;case op.PUSH_UNDEFINED:parts.push(stack.push("void 0")),ip++;break;case op.PUSH_NULL:parts.push(stack.push("null")),ip++;break;case op.PUSH_FAILED:parts.push(stack.push("peg$FAILED")),ip++;break;case op.PUSH_EMPTY_ARRAY:parts.push(stack.push("[]")),ip++;break;case op.POP:stack.pop(),ip++;break;case op.POP_CURR_POS:parts.push("peg$currPos = "+stack.pop()+";"),ip++;break;case op.POP_N:stack.pop(bc[ip+1]),ip+=2;break;case op.NIP:value=stack.pop(),stack.pop(),parts.push(stack.push(value)),ip++;break;case op.APPEND:value=stack.pop(),parts.push(stack.top()+".push("+value+");"),ip++;break;case op.WRAP:parts.push(stack.push("["+stack.pop(bc[ip+1]).join(", ")+"]")),ip+=2;break;case op.TEXT:parts.push(stack.push("input.substring("+stack.pop()+", peg$currPos)")),ip++;break;case op.IF:compileCondition(stack.top(),0);break;case op.IF_ERROR:compileCondition(stack.top()+" === peg$FAILED",0);break;case op.IF_NOT_ERROR:compileCondition(stack.top()+" !== peg$FAILED",0);break;case op.WHILE_NOT_ERROR:compileLoop(stack.top()+" !== peg$FAILED",0);break;case op.MATCH_ANY:compileCondition("input.length > peg$currPos",0);break;case op.MATCH_STRING:compileCondition(eval(ast.consts[bc[ip+1]]).length>1?"input.substr(peg$currPos, "+eval(ast.consts[bc[ip+1]]).length+") === "+c(bc[ip+1]):"input.charCodeAt(peg$currPos) === "+eval(ast.consts[bc[ip+1]]).charCodeAt(0),1);break;case op.MATCH_STRING_IC:compileCondition("input.substr(peg$currPos, "+eval(ast.consts[bc[ip+1]]).length+").toLowerCase() === "+c(bc[ip+1]),1);break;case op.MATCH_REGEXP:compileCondition(c(bc[ip+1])+".test(input.charAt(peg$currPos))",1);break;case op.ACCEPT_N:parts.push(stack.push(bc[ip+1]>1?"input.substr(peg$currPos, "+bc[ip+1]+")":"input.charAt(peg$currPos)")),parts.push(bc[ip+1]>1?"peg$currPos += "+bc[ip+1]+";":"peg$currPos++;"),ip+=2;break;case op.ACCEPT_STRING:parts.push(stack.push(c(bc[ip+1]))),parts.push(eval(ast.consts[bc[ip+1]]).length>1?"peg$currPos += "+eval(ast.consts[bc[ip+1]]).length+";":"peg$currPos++;"),ip+=2;break;case op.FAIL:parts.push(stack.push("peg$FAILED")),parts.push("if (peg$silentFails === 0) { peg$fail("+c(bc[ip+1])+"); }"),ip+=2;break;case op.LOAD_SAVED_POS:parts.push("peg$savedPos = "+stack.index(bc[ip+1])+";"),ip+=2;break;case op.UPDATE_SAVED_POS:parts.push("peg$savedPos = peg$currPos;"),ip++;break;case op.CALL:compileCall();break;case op.RULE:parts.push(stack.push("peg$parse"+ast.rules[bc[ip+1]].name+"()")),ip+=2;break;case op.SILENT_FAILS_ON:parts.push("peg$silentFails++;"),ip++;break;case op.SILENT_FAILS_OFF:parts.push("peg$silentFails--;"),ip++;break;default:throw new Error("Invalid opcode: "+bc[ip]+".")}return parts.join("\n")}var parts=[],code,stack={sp:-1,maxSp:-1,push:function(u){var e=s(++this.sp)+" = "+u+";";return this.sp>this.maxSp&&(this.maxSp=this.sp),e},pop:function(){var u,e;return 0===arguments.length?s(this.sp--):(u=arguments[0],e=arrays.map(arrays.range(this.sp-u+1,this.sp+1),s),this.sp-=u,e)},top:function(){return s(this.sp)},index:function(u){return s(this.sp-u)}};return code=compile(rule.bytecode),parts.push("function peg$parse"+rule.name+"() {"),options.trace?parts.push(["  var "+arrays.map(arrays.range(0,stack.maxSp+1),s).join(", ")+",","      startPos = peg$currPos;"].join("\n")):parts.push("  var "+arrays.map(arrays.range(0,stack.maxSp+1),s).join(", ")+";"),parts.push(indent2(generateRuleHeader('"'+js.stringEscape(rule.name)+'"',asts.indexOfRule(ast,rule.name)))),parts.push(indent2(code)),parts.push(indent2(generateRuleFooter('"'+js.stringEscape(rule.name)+'"',s(0)))),parts.push("}"),parts.join("\n")}var parts=[],startRuleIndices,startRuleIndex,startRuleFunctions,startRuleFunction,ruleNames;parts.push(["(function() {",'  "use strict";',"","  /*","   * Generated by PEG.js 0.9.0.","   *","   * http://pegjs.org/","   */","","  function peg$subclass(child, parent) {","    function ctor() { this.constructor = child; }","    ctor.prototype = parent.prototype;","    child.prototype = new ctor();","  }","","  function peg$SyntaxError(message, expected, found, location) {","    this.message  = message;","    this.expected = expected;","    this.found    = found;","    this.location = location;",'    this.name     = "SyntaxError";',"",'    if (typeof Error.captureStackTrace === "function") {',"      Error.captureStackTrace(this, peg$SyntaxError);","    }","  }","","  peg$subclass(peg$SyntaxError, Error);",""].join("\n")),options.trace&&parts.push(["  function peg$DefaultTracer() {","    this.indentLevel = 0;","  }","","  peg$DefaultTracer.prototype.trace = function(event) {","    var that = this;","","    function log(event) {","      function repeat(string, n) {",'         var result = "", i;',"","         for (i = 0; i < n; i++) {","           result += string;","         }","","         return result;","      }","","      function pad(string, length) {",'        return string + repeat(" ", length - string.length);',"      }","",'      if (typeof console === "object") {',"        console.log(",'          event.location.start.line + ":" + event.location.start.column + "-"','            + event.location.end.line + ":" + event.location.end.column + " "','            + pad(event.type, 10) + " "','            + repeat("  ", that.indentLevel) + event.rule',"        );","      }","    }","","    switch (event.type) {",'      case "rule.enter":',"        log(event);","        this.indentLevel++;","        break;","",'      case "rule.match":',"        this.indentLevel--;","        log(event);","        break;","",'      case "rule.fail":',"        this.indentLevel--;","        log(event);","        break;","","      default:",'        throw new Error("Invalid event type: " + event.type + ".");',"    }","  };",""].join("\n")),parts.push(["  function peg$parse(input) {","    var options = arguments.length > 1 ? arguments[1] : {},","        parser  = this,","","        peg$FAILED = {},",""].join("\n")),"size"===options.optimize?(startRuleIndices="{ "+arrays.map(options.allowedStartRules,function(u){return u+": "+asts.indexOfRule(ast,u)}).join(", ")+" }",startRuleIndex=asts.indexOfRule(ast,options.allowedStartRules[0]),parts.push(["        peg$startRuleIndices = "+startRuleIndices+",","        peg$startRuleIndex   = "+startRuleIndex+","].join("\n"))):(startRuleFunctions="{ "+arrays.map(options.allowedStartRules,function(u){return u+": peg$parse"+u}).join(", ")+" }",startRuleFunction="peg$parse"+options.allowedStartRules[0],parts.push(["        peg$startRuleFunctions = "+startRuleFunctions+",","        peg$startRuleFunction  = "+startRuleFunction+","].join("\n"))),parts.push(""),parts.push(indent8(generateTables())),parts.push(["","        peg$currPos          = 0,","        peg$savedPos         = 0,","        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],","        peg$maxFailPos       = 0,","        peg$maxFailExpected  = [],","        peg$silentFails      = 0,",""].join("\n")),options.cache&&parts.push(["        peg$resultsCache = {},",""].join("\n")),options.trace&&("size"===options.optimize&&(ruleNames="["+arrays.map(ast.rules,function(u){return'"'+js.stringEscape(u.name)+'"'}).join(", ")+"]",parts.push(["        peg$ruleNames = "+ruleNames+",",""].join("\n"))),parts.push(['        peg$tracer = "tracer" in options ? options.tracer : new peg$DefaultTracer(),',""].join("\n"))),parts.push(["        peg$result;",""].join("\n")),"size"===options.optimize?parts.push(['    if ("startRule" in options) {',"      if (!(options.startRule in peg$startRuleIndices)) {",'        throw new Error("Can\'t start parsing from rule \\"" + options.startRule + "\\".");',"      }","","      peg$startRuleIndex = peg$startRuleIndices[options.startRule];","    }"].join("\n")):parts.push(['    if ("startRule" in options) {',"      if (!(options.startRule in peg$startRuleFunctions)) {",'        throw new Error("Can\'t start parsing from rule \\"" + options.startRule + "\\".");',"      }","","      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];","    }"].join("\n")),parts.push(["","    function text() {","      return input.substring(peg$savedPos, peg$currPos);","    }","","    function location() {","      return peg$computeLocation(peg$savedPos, peg$currPos);","    }","","    function expected(description) {","      throw peg$buildException(","        null,",'        [{ type: "other", description: description }],',"        input.substring(peg$savedPos, peg$currPos),","        peg$computeLocation(peg$savedPos, peg$currPos)","      );","    }","","    function error(message) {","      throw peg$buildException(","        message,","        null,","        input.substring(peg$savedPos, peg$currPos),","        peg$computeLocation(peg$savedPos, peg$currPos)","      );","    }","","    function peg$computePosDetails(pos) {","      var details = peg$posDetailsCache[pos],","          p, ch;","","      if (details) {","        return details;","      } else {","        p = pos - 1;","        while (!peg$posDetailsCache[p]) {","          p--;","        }","","        details = peg$posDetailsCache[p];","        details = {","          line:   details.line,","          column: details.column,","          seenCR: details.seenCR","        };","","        while (p < pos) {","          ch = input.charAt(p);",'          if (ch === "\\n") {',"            if (!details.seenCR) { details.line++; }","            details.column = 1;","            details.seenCR = false;",'          } else if (ch === "\\r" || ch === "\\u2028" || ch === "\\u2029") {',"            details.line++;","            details.column = 1;","            details.seenCR = true;","          } else {","            details.column++;","            details.seenCR = false;","          }","","          p++;","        }","","        peg$posDetailsCache[pos] = details;","        return details;","      }","    }","","    function peg$computeLocation(startPos, endPos) {","      var startPosDetails = peg$computePosDetails(startPos),","          endPosDetails   = peg$computePosDetails(endPos);","","      return {","        start: {","          offset: startPos,","          line:   startPosDetails.line,","          column: startPosDetails.column","        },","        end: {","          offset: endPos,","          line:   endPosDetails.line,","          column: endPosDetails.column","        }","      };","    }","","    function peg$fail(expected) {","      if (peg$currPos < peg$maxFailPos) { return; }","","      if (peg$currPos > peg$maxFailPos) {","        peg$maxFailPos = peg$currPos;","        peg$maxFailExpected = [];","      }","","      peg$maxFailExpected.push(expected);","    }","","    function peg$buildException(message, expected, found, location) {","      function cleanupExpected(expected) {","        var i = 1;","","        expected.sort(function(a, b) {","          if (a.description < b.description) {","            return -1;","          } else if (a.description > b.description) {","            return 1;","          } else {","            return 0;","          }","        });","","        while (i < expected.length) {","          if (expected[i - 1] === expected[i]) {","            expected.splice(i, 1);","          } else {","            i++;","          }","        }","      }","","      function buildMessage(expected, found) {","        function stringEscape(s) {","          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }","","          return s","            .replace(/\\\\/g,   '\\\\\\\\')","            .replace(/\"/g,    '\\\\\"')","            .replace(/\\x08/g, '\\\\b')","            .replace(/\\t/g,   '\\\\t')","            .replace(/\\n/g,   '\\\\n')","            .replace(/\\f/g,   '\\\\f')","            .replace(/\\r/g,   '\\\\r')","            .replace(/[\\x00-\\x07\\x0B\\x0E\\x0F]/g, function(ch) { return '\\\\x0' + hex(ch); })","            .replace(/[\\x10-\\x1F\\x80-\\xFF]/g,    function(ch) { return '\\\\x'  + hex(ch); })","            .replace(/[\\u0100-\\u0FFF]/g,         function(ch) { return '\\\\u0' + hex(ch); })","            .replace(/[\\u1000-\\uFFFF]/g,         function(ch) { return '\\\\u'  + hex(ch); });","        }","","        var expectedDescs = new Array(expected.length),","            expectedDesc, foundDesc, i;","","        for (i = 0; i < expected.length; i++) {","          expectedDescs[i] = expected[i].description;","        }","","        expectedDesc = expected.length > 1",'          ? expectedDescs.slice(0, -1).join(", ")','              + " or "',"              + expectedDescs[expected.length - 1]","          : expectedDescs[0];","",'        foundDesc = found ? "\\"" + stringEscape(found) + "\\"" : "end of input";',"",'        return "Expected " + expectedDesc + " but " + foundDesc + " found.";',"      }","","      if (expected !== null) {","        cleanupExpected(expected);","      }","","      return new peg$SyntaxError(","        message !== null ? message : buildMessage(expected, found),","        expected,","        found,","        location","      );","    }",""].join("\n")),"size"===options.optimize?(parts.push(indent4(generateInterpreter())),parts.push("")):arrays.each(ast.rules,function(u){parts.push(indent4(generateRuleFunction(u))),parts.push("")}),ast.initializer&&(parts.push(indent4(ast.initializer.code)),parts.push("")),"size"===options.optimize?parts.push("    peg$result = peg$parseRule(peg$startRuleIndex);"):parts.push("    peg$result = peg$startRuleFunction();"),parts.push(["","    if (peg$result !== peg$FAILED && peg$currPos === input.length) {","      return peg$result;","    } else {","      if (peg$result !== peg$FAILED && peg$currPos < input.length) {",'        peg$fail({ type: "end", description: "end of input" });',"      }","","      throw peg$buildException(","        null,","        peg$maxFailExpected,","        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,","        peg$maxFailPos < input.length","          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)","          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)","      );","    }","  }","","  return {"].join("\n")),options.trace?parts.push(["    SyntaxError:   peg$SyntaxError,","    DefaultTracer: peg$DefaultTracer,","    parse:         peg$parse"].join("\n")):parts.push(["    SyntaxError: peg$SyntaxError,","    parse:       peg$parse"].join("\n")),parts.push(["  };","})()"].join("\n")),ast.code=parts.join("\n")}var arrays=require("../../utils/arrays"),asts=require("../asts"),op=require("../opcodes"),js=require("../javascript");module.exports=generateJavascript}),modules.define("compiler/passes/remove-proxy-rules",function(u,e){function A(u,e){function A(u){return"rule"===u.type&&"rule_ref"===u.expression.type}function n(u,e,A){var t=r.build({rule_ref:function(u){u.name===e&&(u.name=A)}});t(u)}var E=[];t.each(u.rules,function(r,C){A(r)&&(n(u,r.name,r.expression.name),t.contains(e.allowedStartRules,r.name)||E.push(C))}),E.reverse(),t.each(E,function(e){u.rules.splice(e,1)})}var t=e("../../utils/arrays"),r=e("../visitor");u.exports=A}),modules.define("compiler/passes/report-left-recursion",function(u,e){function A(u){var e=[],A=E.build({rule:function(u){e.push(u.name),A(u.expression),e.pop(u.name)},sequence:function(e){t.every(e.elements,function(e){return A(e),!n.alwaysAdvancesOnSuccess(u,e)})},rule_ref:function(E){if(t.contains(e,E.name))throw new r('Left recursion detected for rule "'+E.name+'".',E.location);A(n.findRule(u,E.name))}});A(u)}var t=e("../../utils/arrays"),r=e("../../grammar-error"),n=e("../asts"),E=e("../visitor");u.exports=A}),modules.define("compiler/passes/report-infinite-loops",function(u,e){function A(u){var e=n.build({zero_or_more:function(e){if(!r.alwaysAdvancesOnSuccess(u,e.expression))throw new t("Infinite loop detected.",e.location)},one_or_more:function(e){if(!r.alwaysAdvancesOnSuccess(u,e.expression))throw new t("Infinite loop detected.",e.location)}});e(u)}var t=e("../../grammar-error"),r=e("../asts"),n=e("../visitor");u.exports=A}),modules.define("compiler/passes/report-missing-rules",function(u,e){function A(u){var e=n.build({rule_ref:function(e){if(!r.findRule(u,e.name))throw new t('Referenced rule "'+e.name+'" does not exist.',e.location)}});e(u)}var t=e("../../grammar-error"),r=e("../asts"),n=e("../visitor");u.exports=A}),modules.define("compiler",function(module,require){var arrays=require("./utils/arrays"),objects=require("./utils/objects"),compiler={passes:{check:{reportMissingRules:require("./compiler/passes/report-missing-rules"),reportLeftRecursion:require("./compiler/passes/report-left-recursion"),reportInfiniteLoops:require("./compiler/passes/report-infinite-loops")},transform:{removeProxyRules:require("./compiler/passes/remove-proxy-rules")},generate:{generateBytecode:require("./compiler/passes/generate-bytecode"),generateJavascript:require("./compiler/passes/generate-javascript")}},compile:function(ast,passes){var options=arguments.length>2?objects.clone(arguments[2]):{},stage;objects.defaults(options,{allowedStartRules:[ast.rules[0].name],cache:!1,trace:!1,optimize:"speed",output:"source"});for(stage in passes)passes.hasOwnProperty(stage)&&arrays.each(passes[stage],function(u){u(ast,options)});switch(options.output){case"parser":return eval(ast.code);case"source":return ast.code}}};module.exports=compiler}),modules.define("peg",function(u,e){var A=e("./utils/arrays"),t=e("./utils/objects"),r={VERSION:"0.9.0",GrammarError:e("./grammar-error"),parser:e("./parser"),compiler:e("./compiler"),buildParser:function(u){function e(u){var e,A={};for(e in u)u.hasOwnProperty(e)&&(A[e]=t.values(u[e]));return A}var r=arguments.length>1?t.clone(arguments[1]):{},n="plugins"in r?r.plugins:[],E={parser:this.parser,passes:e(this.compiler.passes)};return A.each(n,function(u){u.use(E,r)}),this.compiler.compile(E.parser.parse(u),E.passes,r)}};u.exports=r}),modules.peg}();

console.log("translateLang is the most important function in this file.\n");

function acs(lang, theString){
	return (theString.split(",").indexOf(lang) !== -1);
}

function pattern_to_input(functionName, lang){
	var theString;
	for(var i in thePatterns[functionName]){
		if(acs(lang, i)){
			theString = thePatterns[functionName][i];
			break;
		}
	}
	if(theString === undefined){
		throw(functionName + " is not yet defined in " + lang + " in string_to_dict")
	}
	theString = theString.split(" ");
	var stringInput = "{return [\""+functionName+"\", {";
	for(var i = 0; i < theString.length; i++){
		if((theString[i].indexOf(":") !== -1) && theString[i][0] !== ":" && theString[i][theString[i].length-1] !== ":"){
			theString[i] = theString[i].split(":");
			stringInput += theString[i][0]+":"+theString[i][0]+",";
			theString[i] = theString[i][0]+":"+theString[i][1];
		}
		else if(theString[i] === "_" || theString[i] === "__"){
			theString[i] = " " + theString[i];
		}
		else{
			theString[i] = '"'+theString[i]+'"';
		}
	}
	
	return functionName + " = " + theString.join(" ") + " " + stringInput + "}];}";
}

function pattern_to_output(theDict, thePattern, theLang){
	var theString;
	for(var i in thePatterns[thePattern]){
		if(acs(theLang, i)){
			theString = thePatterns[thePattern][i];
			break;
		}
	}
	if(theString === undefined){
		throw("\nnot yet defined in string_to_dict: " + JSON.stringify(thePattern) + " in " + theLang);
	}
	theString = theString.split(" ");
	for(var i = 0; i < theString.length; i++){
		if(theString[i][0] === ":" || theString[i][theString[i].length-1] === ":"){
			theString[i] = theString[i];
		}
		else if(theString[i].indexOf(":") !== -1){
			var currentKey = theDict[theString[i].split(":")[0]];
			if(currentKey === undefined){
				throw theString[i].split(":")[0] + " is not defined for " + thePattern + " in " + theLang;
			}
			theString[i] = currentKey;
		}
		else if(theString[i] === "__"){
			theString[i] = " ";
		}
		else if(theString[i] === "_"){
			theString[i] = '';
		}
	}
	return theString.join("");
}

//Define the patterns in output_dict before defining them here.
const thePatterns = {
	
};
var string_to_dict =
`import,a:Identifier
	JavaScript
		import __ * __ as __ a __ from __ \' a \' ;
	crosslanguage
		(import __ a )
	Fortran
		USE __ a
	Visual Basic .NET
		Imports __ a
	REBOL
		a : __ load __ % a .r
	Prolog
		:- consult( a ) .
	MiniZinc
		include __ \' a .mzn\' ;
	PHP
		include __ \' a .php\' ;
	C,C++
		#include __ \\" a .h\\"
	C#
		using __ a ;
	Julia
		using __ a
	Haskell,EngScript,Python,Scala,Go,Groovy,Picat,Elm,Swift
		import __ a
	Java,D,Haxe
		import __ a ;
	Ruby,Lua
		require __ \' a \'
	Perl,Perl 6,Chapel
		\"use a ;\"
key_value_separator
	Python,C,Dart,Visual Basic .NET,D,C#,Frink,Swift,JavaScript,TypeScript,PHP,Perl,Lua,Ruby,Prolog,Julia,Haxe,C++,Scala,Octave,Elixir,Wolfram
		,
	Java
		;
	REBOL
		__
dictionary,a:key_value_list,input:type,output:type
	Python,C,Dart,JavaScript,TypeScript,Lua,Ruby,Julia,C++,EngScript,Visual Basic .NET
		{ a }
	Java
		new __ HashMap < input , output > ( ) { { a } }
	C#
		new __ Dictionary < input , output > { a }
	Perl
		( a )
	PHP
		array( a )
	Haxe,Frink,Swift,Elixir,D,Wolfram
		[ a ]
	Scala
		Map( a )
	Octave
		struct ( a )
	REBOL
		to-hash [ a ]
var_name,name:Identifier
	PHP,Perl,Bash,Tcl,AutoIt,Perl 6,Puppet,Hack,AWK,PowerShell
		$ name
	EngScript,Wolfram,crosslanguage,Erlang,English,Mathematical notation,Pascal,Picat,Prolog,Katahdin,TypeScript,JavaScript,Frink,MiniZinc,Aldor,Flora-2,F-logic,D,Genie,ooc,Janus,Chapel,ABAP,COBOL,PicoLisp,REXX,PL/I,Falcon,IDP,Processing,Sympy,Maxima,Z3,Shen,Ceylon,nools,Pyke,Self,GNU Smalltalk,Elixir,LispyScript,Standard ML,Nimrod,Occam,ANTLR,Boo,Seed7,pyparsing,EBNF,Agda,Icon,Octave,Cobra,Kotlin,C++,Drools,Oz,Pike,Delphi,Racket,ML,Java,Pawn,Fortran,Ada,FreeBASIC,MATLAB,newLisp,Hy,OCaml,Julia,AutoIt,C#,Gosu,AutoHotKey,Groovy,Rust,R,Swift,Vala,Go,Scala,Nemerle,Visual Basic,Visual Basic .NET,Clojure,Haxe,CoffeeScript,Dart,JavaScript,C#,Python,Ruby,Haskell,C,Lua,Gambas,Common Lisp,Scheme,REBOL,F#
		name
	CLIPS
		? name
default_parameter,type:type,name:var_name,value:expression
	Python,AutoHotKey,Julia,Nemerle,PHP
		name = value
	C#,D,Groovy
		type __ name = value
	Ruby
		name : value
	Scala,Swift,Python
		name : type = value
	Haxe
		? name = value
	Visual Basic .NET
		Optional __ name __ As __ type = value
	Java,JavaScript,Lua,C
		_
_initializer_list,var1:expression,var2:initializer_list_separator,var3:_initializer_list
	Lua,Java,C++,JavaScript,C#,Perl,Fortran,C,PHP,Haskell,Haxe,Python,Ruby,TypeScript,MiniZinc
		var1 var2 var3
initialize_empty_var,type:type,name:var_name
	Java,C#,C++,C,D,Janus,Fortran
		type __ name
	JavaScript,Haxe
		var __ name
	TypeScript
		var __ name : type
	PHP
		name
	MiniZinc
		type : name
	Z3
		( declare-const __ name __ type )
	Lua
		local __ name
anonymous_function,params:function_parameters,b:series_of_statements,return_type:type
	Ruby
		Proc . new { | params | b }
	JavaScript,TypeScript,Haxe,R,PHP
		function ( params ) { b }
	Haskell
		(\\ params -> b )
	Frink
		{ | params | body }
	Erlang
		fun ( params ) __ b __ end
	Lua
		function ( params ) __ b __ end
	Swift
		{ ( params ) -> return_type __ in __ b }
	Go
		func ( params ) return_type { b }
	Dart
		( ( params ) => b )
	C++
		[ = ] ( params ) -> int { b }
	Java
		( params ) -> { b }
	Haxe
		( name __ params -> b )
	Python
		( lambda __ params : b )
	Delphi
		function ( params ) begin __ b __ end ;
	D
		( params ) { body }
strlen,a:parentheses_expression
	crosslanguage
		( strlen __ a __ b )
	Python
		len ( a )
	R
		nchar ( a )
	Erlang
		string:len ( a )
	Visual Basic,Visual Basic .NET,Gambas
		Len ( a )
	JavaScript,TypeScript,Ruby,Scala,Gosu,Picat,Haxe,OCaml,D
		a . length
	REBOL
		length? __ a
	Java,C++,Kotlin
		a . length ( )
	PHP,C,Pawn,Hack
		strlen ( a )
	MiniZinc,Julia
		length ( a )
	Haskell
		( length a )
	C#
		a . Length
	Swift
		countElements ( a )
	AutoIt
		StringLen ( a )
	Common Lisp
		( length __ a )
	Racket,Scheme
		( string-length __ a )
	Perl,Octave
		length ( a )
	Nemerle
		a . Length
	Fortran
		LEN ( a )
	Lua
		string . len ( a )
	Wolfram
		StringLength [ a ]
not_equal,a:Add,b:Add
	Lua
		a ~= b
	JavaScript,PHP,TypeScript
		a !== b
	Java,Wolfram,C,C++,D,C#,Julia,Perl,Ruby,Haxe,Python,MiniZinc
		a != b
	English
		a __ does __ not __ equal __ b
	Prolog
		not ( a == b )
	Mathematical notation
		a ≠ b
	Janus
		a # b
	Fortran
		a .NE. b
	Z3
		( not ( = __ a __ b ) )
key_value_list,var1:key_value,var2:key_value_separator,var3:key_value_list
	Lua,JavaScript,Java,C#,C++,C,Ruby,PHP,Python,Perl,Fortran,Haxe,TypeScript
		var1 var2 var3
Or,var1:greater_than,var2:Or
	JavaScript,Wolfram,Chapel,Elixir,Frink,ooc,Picat,Janus,Processing,Pike,nools,Pawn,MATLAB,Hack,Gosu,Rust,AutoIt,AutoHotKey,TypeScript,Ceylon,Groovy,D,Octave,AWK,Julia,Scala,F#,Swift,Nemerle,Vala,Go,Perl,Java,Haskell,Haxe,C,C++,C#,Dart,R
		var1 || var2
	Python
		var1 __ or __ var2
	Fortran
		var1 __ .OR. __ var2
	Z3
		( or __ var1 __ var2 )
And,a:Or,b:And
	Java,JavaScript,C#
		a && b
	Python
		a __ and __ b
	MiniZinc
		a /\\ b
	Fortran
		a .AND. b
	Z3
		( and __ a __ b )
this,a:Identifier
	Ruby,CoffeeScript
		@ a
	Java,EngScript,Dart,Groovy,TypeScript,JavaScript,C#,C++,Haxe,Chapel
		this . a
	Python
		self . a
	PHP,Hack
		$this -> a
	Swift,Scala
		a
	REBOL
		self / a
array_length,a:parentheses_expression
	crosslanguage
		( array_length __ a )
	Lua
		# a
	Python,Cython,Go
		len ( a )
	Java,Picat,Scala,D,CoffeeScript,TypeScript,Dart,Vala,JavaScript,Ruby,Haxe,Cobra
		a . length
	C#,Visual Basic,Visual Basic .NET,PowerShell
		a . Length
	MiniZinc,Julia,R
		length ( a )
	Common Lisp
		( list-length __ a )
	PHP
		count ( a )
	Rust
		a . len ( )
	Emacs Lisp,Scheme,Racket,Haskell
		( length __ a )
	C++,Groovy
		a . size ( )
	C
		sizeof ( a ) / sizeof ( a [ 0 ] )
	Perl
		scalar ( a )
	REBOL
		length? __ a
	Swift
		a . count
	Clojure
		( count __ array )
	Hy
		( len __ a )
	Octave
		length ( a )
	Fortran,Janus
		size ( a )
	Wolfram
		Length [ a ]
initializer_list_separator
	Python,D,Frink,Fortran,Chapel,Octave,Julia,English,Pascal,Delphi,Prolog,MiniZinc,EngScript,Cython,Groovy,Dart,TypeScript,CoffeeScript,Nemerle,JavaScript,Haxe,Haskell,Ruby,REBOL,Polish notation,Swift,Java,Picat,C#,Go,Lua,C++,C,Visual Basic .NET,Visual Basic,PHP,Scala,Perl,Wolfram
		,
	REBOL
		__
initializer_list,a:_initializer_list
	Java,Picat,C#,Go,Lua,C++,C,Visual Basic .NET,Visual Basic,Wolfram
		{ a }
	Python,D,Frink,REBOL,Octave,Julia,Prolog,MiniZinc,EngScript,Cython,Groovy,Dart,TypeScript,CoffeeScript,Nemerle,JavaScript,Haxe,Haskell,Ruby,REBOL,Polish notation,Swift
		[ a ]
	PHP
		array ( a )
	Scala
		Array ( a )
	Perl,Chapel
		( a )
	Fortran
		(/ a /)
key_value,a:Identifier,b:expression
	Groovy,D,Dart,JavaScript,CoffeeScript,Swift,Elixir,Swift
		a : b
	Python
		' a ' : b
	Ruby,PHP,Haxe,Perl,Julia
		a => b
	REBOL
		a __ b
	Lua
		a = b
	C++,C,C#,Visual Basic .NET
		{ a , b }
	Scala,Wolfram
		a -> b
	Octave
		a , b
	Frink
		[ a , b ]
	Java
		put ( a , b )
strcmp,a:parentheses_expression,b:parentheses_expression
	crosslanguage
		( strcmp __ a __ b )
	Visual Basic,Visual Basic .NET,F#,Prolog
		a = b
	Python,Chapel,Julia,Fortran,MiniZinc,Picat,Go,Vala,AutoIt,REBOL,Ceylon,Groovy,Scala,CoffeeScript,AWK,Ruby,Haskell,Haxe,Dart,Lua,Swift
		a == b
	JavaScript,PHP,TypeScript,Hack
		a === b
	C,Octave
		strcmp ( a , b ) == 0
	C++
		a . compare ( b )
	C#
		a . Equals ( b )
	Java
		a . equals ( b )
	Common Lisp
		( equal __ a __ b )
	CLIPS
		( str-compare __ a __ b )
	Hy
		( = __ a __ b )
	Perl
		a __ eq __ b
	Erlang
		string:equal ( a , b )
sqrt,x:expression
	Java,JavaScript,TypeScript,Ruby,Haxe
		Math . sqrt ( x )
	C#,Visual Basic .NET
		Math . Sqrt ( x )
	C,Perl,PHP,Perl 6,Maxima,MiniZinc,Prolog,Octave,D,Haskell
		sqrt ( x )
	Lua,Python
		math . sqrt ( x )
	REBOL
		square-root __ x
	Scala
		scala . math . sqrt ( x )
	C++
		std :: sqrt ( x )
	Erlang
		math:sqrt ( x )
	Wolfram
		Sqrt [ x ]
parentheses_expression,a:expression
	Pascal,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET
		( a )
	Racket,Z3,CLIPS,GNU Smalltalk,newLisp,Hy,Common Lisp,Emacs Lisp,Clojure,Sibilant,LispyScript
		a
join,array:parentheses_expression,separator:parentheses_expression
	C#
		String . Join ( separator , array )
	PHP
		implode ( separator , array )
	Perl
		join ( separator , array )
	D
		join ( array , separator )
	Lua
		table . concat ( array , separator )
	Go
		Strings . join ( array , separator )
	JavaScript,Haxe,CoffeeScript,Ruby,Groovy,Java,TypeScript
		array . join ( separator )
	Python
		separator . join ( array )
plus_equals,a:(access_array/dot_notation/Identifier),b:expression
	Janus,TypeScript,Python,Lua,Java,C,C++,C#,JavaScript,Haxe,PHP,Chapel,Perl
		a += b
	Ruby,Picat
		a = a + b
minus_equals,a:(dot_notation/access_array/Identifier),b:expression
	Janus,TypeScript,Python,Lua,Java,C,C++,C#,JavaScript,PHP,Haxe,Hack,Fortran
		a -= b
	Ruby
		a = a - b
concatenate_string,a:Add,b:concatenate_string
	Common Lisp
		( concatenate __ 'string __ a __ b )
	C,Z3,Java,Chapel,Frink,FreeBASIC,Nemerle,D,Cython,Ceylon,CoffeeScript,TypeScript,Dart,Gosu,Groovy,Scala,Swift,F#,Python,JavaScript,C#,Haxe,Ruby,C++,Vala
		a + b
	Lua,EngScript
		a .. b
	Fortran
		a // b
	PHP,AutoHotKey,Hack,Perl
		a . b
	OCaml
		a ^ b
	REBOL
		append __ a __ b
	Haskell,MiniZinc,Picat,Elm
		a ++ b
	CLIPS
		( str-cat a b )
	Clojure
		( str a b )
	Erlang
		string:concat ( a , b )
	Julia
		string ( a , b )
	Octave
		strcat ( a , b )
	Racket
		( string-append a b )
	Delphi
		Concat ( a , b )
	Visual Basic,Gambas,Nimrod,AutoIt,Visual Basic .NET,OpenOffice Basic
		a & b
	Elixir,Wolfram
		a <> b
	Perl 6
		a ~ b
split,aString:parentheses_expression,separator:parentheses_expression
	JavaScript,CoffeeScript,Java,Python,Dart,Scala,Groovy,Haxe,Ruby,Rust,TypeScript
		aString . split ( separator )
	Lua
		string . gmatch ( aString , separator )
	PHP
		explode ( separator , aString )
	Perl,Processing
		split ( separator , aString )
	REBOL
		split __ aString __ separator
	C#
		aString . Split ( new string[] { separator } , StringSplitOptions . None )
	Picat,D
		split ( aString , separator )
	Haskell
		( splitOn __ aString __ separator )
	Wolfram
		StringSplit [ aString , separator ]
pow,a:expression,b:expression
	Lua
		math . pow ( a , b )
	Scala
		scala.math.pow ( a , b )
	C#,Visual Basic .NET
		Math . Pow ( a , b )
	JavaScript,Java,TypeScript,Haxe
		Math . pow ( a , b )
	Python,Chapel,Haskell,COBOL,Picat,ooc,PL/I,REXX,Maxima,AWK,R,F#,AutoHotKey,Tcl,AutoIt,Groovy,Octave,Ruby,Perl,Fortran
		( a ** b )
	REBOL
		power __ a __ b
	C,C++,PHP,Hack,Swift,MiniZinc,D
		pow ( a , b )
	Julia,EngScript,Visual Basic,Visual Basic .NET,Gambas,Go,Ceylon,Wolfram
		a ^ b
	Rust
		num::pow ( a , b )
	Hy,Common Lisp,Racket,Clojure
		( expt __ num1 __ num2 )
	Erlang
		math:pow ( a , b )
case_statements,a:case,b:case_statements
	Java,C,C#,C++,JavaScript,PHP,Haxe,Fortran,Ruby,Lua,Dart,TypeScript
		a __ b
statement_with_semicolon,var1:statement
	C,Dafny,Chapel,Katahdin,Frink,MiniZinc,Falcon,Aldor,IDP,Processing,Maxima,Seed7,Drools,EBNF,ANTLR,EngScript,OpenOffice Basic,Ada,ALGOL 68,D,Ceylon,Rust,TypeScript,Octave,AutoHotKey,Pascal,Delphi,JavaScript,Pike,Objective-C,OCaml,Java,Scala,Dart,PHP,C#,C++,Haxe,AWK,bc,Haskell,Perl,Perl 6,Go,Nemerle,Vala
		var1 ;
	Python,Z3,Swift,Wolfram,Gambas,Pascal,Delphi,AutoHotKey,REBOL,Octave,Janus,Cython,Mathematical notation,Picat,Lua,Ruby,Haskell,Erlang,Prolog,Scala,Visual Basic .NET,Fortran,Julia,R
		var1
dot_notation,var_name:Identifier,var_name:dot_notation
	Java,JavaScript,D,Haxe,C#,Perl 6
		var1 . var2
	PHP,C
		var1 -> var2
sin,var1:expression
	Java,JavaScript,TypeScript,Ruby,Haxe
		Math . sin ( var1 )
	Lua,Python
		math . sin ( var1 )
	C,D,PHP,Perl,Perl 6,Maxima,Fortran,MiniZinc,Swift,Prolog,Octave,Dart,Haskell
		sin ( var1 )
	C#,Visual Basic .NET
		Math . Sin ( var1 )
	Wolfram
		Sin [ var1 ]
cos,var1:expression
	Java,JavaScript,TypeScript,Ruby,Haxe
		Math . cos ( var1 )
	Lua,Python
		math . cos ( var1 )
	C,D,PHP,Perl,Perl 6,Maxima,Fortran,MiniZinc,Swift,Prolog,Octave,Dart,Haskell
		cos ( var1 )
	C#,Visual Basic .NET
		Math . Cos ( var1 )
	Wolfram
		Cos [ var1 ]
tan,var1:expression
	Java,JavaScript,TypeScript,Ruby,Haxe
		Math . tan ( var1 )
	Lua,Python
		math . tan ( var1 )
	C,D,PHP,Perl,Perl 6,Maxima,Fortran,MiniZinc,Swift,Prolog,Octave,Dart,Haskell
		tan ( var1 )
	C#,Visual Basic .NET
		Math . Tan ( var1 )
	Wolfram
		Tan [ var1 ]
instance_method,name:Identifier,type:type,params:function_parameters,body:series_of_statements
	JavaScript
		name ( params ) { body }
	Perl 6
		method __ name __ ( params ) { body }
	Chapel
		def __ name ( params ) : type { body }
	Java,C#
		public __ type __ name ( params ) { body }
	PHP
		public __ function __ name ( params ) { body }
	Ruby
		def __ name ( params ) __ body __ end
	C++,D
		type __ name ( params ) { body }
	Haxe
		public __ function __ name ( params ) : type { body }
	Lua
		_
	Python
		def __ name (  self, params ) : \\n #indent \\n body \\n #unindent
typeless_instance_method,name:Identifier,params:function_parameters,body:series_of_statements
	JavaScript
		name ( params ) { body }
	Chapel
		def __ name ( params ) { body }
	Java
		public __ Object __ name ( params ) { body }
	C#
		public __ object __ name ( params ) { body }
	PHP
		public __ function __ name ( params ) { body }
	Ruby
		def __ name ( params ) __ body __ end
	C++,D
		auto __ name ( params ) { body }
	Haxe
		public __ function __ name ( params ) { body }
	Lua
		_
	Python
		def __ name ( self, params ) : \\n #indent \\n body \\n #unindent
typeless_static_method,name:Identifier,params:function_parameters,body:series_of_statements
	JavaScript
		static __ name ( params ) { body }
	Haxe
		public __ static __ function __ name ( params ) { body }
	Lua,Julia
		function __ name ( params ) __ body __ end
	Java
		public __ static __ Object __ name ( params ) { body }
	C#
		public __ static __ object __ name ( params ) { body }
	Dart
		static __ name ( params ) { body }
	C++
		static __ auto __ name ( params ) { body }
	PHP
		public __ static __ function __ name ( params ) { body }
	Ruby
		def __ self . name ( params ) __ body __ end
	Python
		@staticmethod \\n __ def __ name (  params ) : \\n #indent \\n body \\n #unindent
static_method,name:Identifier,return_type:type,params:function_parameters,body:series_of_statements
	Haxe
		public __ static __ function __ name ( params ) { body }
	Lua,Julia
		function __ name ( params ) __ body __ end
	Java,C#
		public __ static __ return_type __ name ( params ) { body }
	C++,Dart
		static __ return_type __ name ( params ) { body }
	PHP
		public __ static __ function __ name ( params ) { body }
	Ruby
		def __ self . name ( params ) __ body __ end
	C
		return_type __ name ( params ) { body }
	JavaScript
		static __ name ( params ) { body }
	Picat
		_
	Python
		@staticmethod \\n __ def __ name (  params ) : \n #indent \\n body \\n #unindent
declare_new_object,var_name:var_name,class_name:Identifier,params:function_call_parameters
	Java,C#,D
		class_name __ var_name = new __ class_name ( params )
	JavaScript,Haxe,Chapel
		var __ var_name = new __ class_name ( params )
	PHP
		var_name = new __ class_name ( params )
	Python
		var_name = class_name ( params )
	Ruby
		var_name = class_name . new ( params )
	Perl
		my __ var_name = class_name -> new ( params )
	C++
		class_name __ var_name ( params )
	C,Picat,MiniZinc,Prolog,Lua
		_
string_to_int,a:expression
	Python
		int ( a )
	Haxe
		Std . parseInt ( a )
	PHP
		( int ) a
	Haskell
		( read __ a )
	Perl
		a
	C#
		Int32 . Parse( a )
	Visual Basic .NET
		Convert . toInt32 ( a )
	Java
		Integer . parseInt ( a )
	C
		atoi ( a )
	Scala
		a . toInt
	D
		std . conv . to!int ( a )
	Ruby
		Integer ( a )
	REBOL
		to __ integer! __ a
	Lua
		tonumber ( a )
	JavaScript,TypeScript
		parseInt ( a )
	C++
		atoi ( a . c_str ( ) )
	Dart
		int . parse ( a )
int_to_string,a:parentheses_expression
	Python
		str ( a )
	Wolfram
		ToString [ a ]
	Swift,JavaScript,TypeScript
		String ( a )
	Java
		Integer . toString ( a )
	Haskell
		( show __ a )
	Perl
		a
	C#
		Convert . ToString ( a )
	Ruby
		a . to_s
	C++
		std :: to_string ( a )
	Lua
		tostring ( a )
	Haxe
		Std . toString ( a )
	D
		std . conv . to!string ( a )
	PHP
		( string ) a
	Dart
		a . toString ( )
typeless_declare_constant,name:var_name,value:expression
	PHP,JavaScript,Dart,TypeScript
		const __ name = value
	Visual Basic .NET
		Public __ Const __ name = value
	Rust,Swift
		let __ name = value
	C
		const __ __auto_type __ name = value
	C#
		const __ object __ name = value
	D,C++
		const __ auto __ name = value
	Common Lisp
		( setf __ name __ value )
	Scala
		val __ name = value
	Python,Ruby,Haskell,Erlang,Julia,Picat,Prolog
		name = value
	Lua
		local __ name = value
	Perl
		my __ name = value
	REBOL
		name : value
	Haxe
		static __ inline __ var __ name = value
	Java
		final __ Object __ name = value
	C
		static __ const __ name = value
	Chapel
		var name = value
declare_constant,name:var_name,type:type,value:expression
	PHP,JavaScript
		const __ name = value
	Z3
		( declare-const __ name __ type ) ( assert __ ( = __ name __ value ) )
	Visual Basic .NET
		Public __ Const __ name __ As __ type = value
	Rust,Swift
		let __ name = value
	C++,C,D,C#
		const __ type __ name = value
	Common Lisp
		( setf __ name __ value )
	MiniZinc
		type : name = value
	Scala
		val __ name : type = value
	Python,Ruby,Haskell,Erlang,Julia,Picat,Prolog
		name = value
	Lua
		local __ name = value
	Perl
		my __ name = value
	REBOL
		name : value
	Haxe
		static __ inline __ var __ name = value
	Java
		final __ type __ name = value
	C
		static __ const __ name = value
	Chapel
		var name : type = value
constructor,name:Identifier,params:function_parameters,body:series_of_statements
	crosslanguage
		(constructor __ name __ params __ body)
	Python
		def __ __init__ (  self , params ) : \\n #indent \n body \\n #unindent
	Java,C#
		public __ name ( params ) { body }
	Swift
		init ( params ) { body }
	JavaScript
		constructor ( params ) { body }
	Ruby
		def __ initialize ( params ) __ body __ end
	PHP
		function __ construct ( params ) { body }
	Perl
		sub __ new { body }
	Haxe
		public __ function __ new ( params ) { body }
	C++,Dart
		name ( params ) { body }
	D
		this ( params ) { body }
	Chapel
		proc __ name ( params ) { body }
function_call_named_parameter,name:Identifier,value:expression
	Python,C#,Fortran,Scala
		name = value
	Modula-3,Visual Basic .NET
		name := value
	Ruby
		name : value
	JavaScript,Lua,Java,C,PHP,Haxe,MiniZinc,C++
		value
function_call,theName:dot_notation,args:function_call_parameters
	C,Chapel,Elixir,Janus,Perl 6,Pascal,Rust,Hack,Katahdin,MiniZinc,Pawn,Aldor,Picat,D,Genie,ooc,PL/I,Delphi,Standard ML,REXX,Falcon,IDP,Processing,Maxima,Swift,Boo,R,MATLAB,AutoIt,Pike,Gosu,AWK,AutoHotKey,Gambas,Kotlin,Nemerle,EngScript,Prolog,Groovy,Scala,CoffeeScript,Julia,TypeScript,Fortran,Octave,C++,Go,Cobra,Ruby,Vala,F#,Java,Ceylon,OCaml,Erlang,Python,C#,Lua,Haxe,JavaScript,Dart,bc,Visual Basic,Visual Basic .NET,PHP,Perl
		theName ( args )
	Haskell,Z3,CLIPS,Clojure,Common Lisp,CLIPS,Racket,Scheme,crosslanguage
		( theName args )
for,statement_1:initialize_var,condition:expression,statement_2:set_var,body:series_of_statements
	Java,D,Pawn,Groovy,JavaScript,Dart,TypeScript,PHP,Hack,C#,Perl,C++,AWK,Pike
		for ( statement_1 ; condition ; statement_2 ) { body }
	C
		init:initialize_empty_var ; for ( statement_1 ; condition ; statement_2 ) { body }
	Haxe
		statement_1 ;  while ( condition ) { body statement_2 ; }
	Lua,Ruby
		statement_1 __ while __ condition __ do __ body __ statement_2 __ end
while,a:Or,b:series_of_statements
	Fortran
		WHILE __ ( a ) __ DO __ b __ ENDDO
	Pascal
		while __ a __ do __ begin __ b __ end;
	Delphi
		While __ a __ do __ begin __ b __ end;
	Rust,Frink,Dafny
		while __ a { b }
	C,Perl 6,Katahdin,Chapel,ooc,Processing,Pike,Kotlin,Pawn,PowerShell,Hack,Gosu,AutoHotKey,Ceylon,D,TypeScript,ActionScript,Nemerle,Dart,Swift,Groovy,Scala,Java,JavaScript,PHP,C#,Perl,C++,Haxe,R,AWK,Vala
		while ( a ) { b }
	Lua,Ruby,Julia
		while __ a __ b __ end
	Picat
		while __ ( a ) __ b __ end
	REBOL
		while [ a ] [ b ]
	Common Lisp
		( loop __ while __ a __ do __ b )
	Hy,newLisp,CLIPS
		( while __ a __ b )
	Python,Cython
		while __ a : \n #indent \n b \n #unindent
	Visual Basic,Visual Basic .NET
		While __ a __ b __ End While
	Octave
		while ( a ) __ endwhile
	Wolfram
		While [ a , b ]
function,return_type:type,params:function_parameters,name:Identifier,body:series_of_statements
	C++,Vala,C,Dart,Ceylon,Pike,D
		return_type __ name ( params ) { body }
	Java,C#
		public __ static __ return_type __ name ( params ) { body }
	JavaScript,PHP
		function __ name ( params ) { body }
	Lua,Julia
		function __ name ( params ) __ body __ end
	Wolfram
		name [ params ] := body
	Frink
		name [ params ] := { body }
	POP-11
		define __ name ( params ) -> Result; __ body __ enddefine;
	Z3
		( define-fun __ name ( params ) __ return_type __ body )
	Mathematical notation
		name ( params ) = { body }
	Chapel
		proc __ name ( params ) : return_type { body }
	Prolog
		name ( params ) __ :- __ body .
	Picat
		name ( params ) = to_return => body .
	Swift
		func __ name ( params ) -> return_type { body }
	Maxima
		name ( params ) := body
	Rust
		fn __ name ( params ) -> return_type { body }
	Clojure
		( defn name [ params ] body )
	Octave
		function __ retval = name ( params ) body __ endfunction
	Haskell
		name __ params = \\n body
	Common Lisp
		(defun __ name ( params ) body )
	Fortran
		FUNC __ name __ ( params ) __ RESULT ( retval ) __ return_type :: retval __ body __ END __ FUNCTION __ name
	Scala
		def __ name ( params ) : return_type = { body }
	MiniZinc
		function __ return_type : name ( params ) = body ;
	CLIPS
		( deffunction __ name ( params ) body )
	Erlang
		name ( params ) -> body
	Perl
		sub __ name { params __ body }
	Perl 6
		sub __ name ( params ) { body }
	Pawn
		name ( params ) { body }
	Ruby
		def __ name ( params ) __ body __ end
	TypeScript
		function __ name ( params ) : return_type { body }
	REBOL
		name : __ func [ params ] [ body ]
	Haxe
		public __ static __ function __ name ( params ) : return_type { body }
	Hack
		function __ name ( params ) : return_type { body }
	R
		name <- function ( params ) { body }
	bc
		define name ( params ) { body }
	Visual Basic,Visual Basic .NET
		Function name ( params ) As return_type body End Function
	Racket,newLisp
		(define (name params) body )
	Janus
		procedure name ( params ) body
	Python
		def __ name ( params ) -> type : \\n #indent \\n body \\n #unindent
else,a:series_of_statements
	Fortran
		ELSE __ a
	Hack,Dafny,Perl 6,Frink,Chapel,Katahdin,Pawn,PowerShell,Puppet,Ceylon,D,Rust,TypeScript,Scala,AutoHotKey,Gosu,Groovy,Java,Swift,Dart,AWK,JavaScript,Haxe,PHP,C#,Go,Perl,C++,C,Tcl,R,Vala,bc
		else { a }
	Ruby,Janus,Lua,Haskell,CLIPS,MiniZinc,Julia,Octave,Picat,Pascal,Maxima
		else \n a
	Erlang
		true -> a
	Python,Cython
		else : \n #indent \n b \n #unindent
	Prolog
		a
	Visual Basic .NET
		Else __ a
	REBOL
		true [ a ]
	Common Lisp
		( t __ a )
	English
		otherwise __ a
	Wolfram,Z3
		a
elif,condition:And,body:series_of_statements,next:elif_or_else
	D,Chapel,Pawn,Ceylon,Scala,TypeScript,AutoHotKey,AWK,R,Groovy,Gosu,Katahdin,Java,Swift,Nemerle,C,Dart,Vala,JavaScript,C#,C++,Haxe
		else __ if ( a ) { b } c
	Z3
		( ite __ a __ b __ c )
	Rust,Go
		else __ if __ a { b } c
	PHP,Hack,Perl
		elseif ( a ) { b } c
	Julia,Octave,Lua
		elseif __ a __ b __ c
	Ruby
		elsif __ a __ then __ b __ c
	Picat
		elseif __ a __ then __ b __ c
	Haskell,Pascal,Maxima
		else __ if __ a __ then __ b __ c
	Erlang
		a -> b __ c
	R,F#
		a <- b __ c
	CLIPS
		( if __ a __ then __ ( b __ c ) )
	MiniZinc
		else __ if __ a __ then __ b __ c
	Python,Cython
		elif __ a : \\n #indent \\n b \\n #unindent __ c
	Prolog
		a -> b ; __ c
	Visual Basic .NET
		ElseIf __ a __ Then __ b __ c
	Fortran
		ELSE __ IF __ a __ THEN __ b __ c
	REBOL
		a [ b ] __ c
	Common Lisp
		( a __ b ) __ c
	English
		otherwise __ if __ a __ then __ b __ c
	Wolfram
		If [ a , b , c ]
return,a:And
	Java,Kal,EngScript,Pawn,Ada,PowerShell,Rust,D,Ceylon,TypeScript,Hack,AutoHotKey,Gosu,Swift,Pike,Objective-C,C,Groovy,Scala,CoffeeScript,Julia,Dart,C#,JavaScript,Go,Haxe,PHP,C++,Perl,Vala,Lua,Python,REBOL,Ruby,Tcl,AWK,bc,Chapel,Perl 6
		return __ a
	MiniZinc,Z3,Erlang,Maxima,Standard ML,Icon,Oz,CLIPS,newLisp,Hy,Sibilant,LispyScript,ALGOL 68,Clojure,Prolog,Common Lisp,F#,OCaml,Haskell,ML,Racket,Nemerle
		a
	Visual Basic,Visual Basic .NET,AutoIt
		Return __ a
	Octave,Fortran
		retval = a
	Pascal
		Exit ( a )
	Picat
		to_return = a
	R
		return ( a )
	Wolfram
		Return [ a ]
	POP-11
		a -> Result
set_var,name:(access_array/var_name),value:expression
	Z3
		( declare_const __ name:Identifier __ value )
	JavaScript,Perl 6,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,ooc,D,Genie,Janus,Ceylon,IDP,Sympy,Prolog,Processing,Java,EBNF,Boo,Gosu,Pike,Kotlin,Icon,PowerShell,EngScript,Pawn,FreeBASIC,Hack,Nimrod,OpenOffice Basic,Groovy,TypeScript,Rust,CoffeeScript,Fortran,AWK,Go,Swift,Vala,C,Julia,Scala,Cobra,Erlang,AutoIt,Dart,Java,OCaml,Haxe,C#,MATLAB,C++,PHP,Perl,Python,Lua,Ruby,Gambas,Octave,Visual Basic,Visual Basic .NET,bc
		name = value
print,a:expression
	Erlang
		io : fwrite ( a )
	C++
		cout << a
	Haxe
		trace ( a )
	Prolog
		write ( a )
	C#
		Console . WriteLine ( a )
	REBOL,Fortran,Perl,PHP
		print __ a
	Ruby
		puts ( a )
	Visual Basic .NET
		System . Console . WriteLine ( a )
	Scala,Julia,Swift
		println ( a )
	JavaScript,TypeScript
		console . log ( a )
	Python,Cython,Ceylon,R,Gosu,Dart,Vala,Perl,PHP,Hack,AWK,Lua
		print ( a )
	Java
		System . out . println ( a )
	C
		printf ( a )
	Haskell
		( putStrLn __ a )
	Hy,Common Lisp,crosslanguage
		( print __ a )
	Rust
		println!( a )
	Octave
		disp ( a )
	Chapel,D
		writeln ( a )
	Frink
		print [ a ]
	Wolfram
		Print [ a ]
series_of_statements,var1:statement,var2:series_of_statements
	Java,Dafny,Z3,Elm,Bash,Perl 6,Mathematical notation,Katahdin,Frink,MiniZinc,Aldor,COBOL,ooc,Genie,ECLiPSe,nools,Agda,PL/I,REXX,IDP,Falcon,Processing,Sympy,Maxima,Pyke,Elixir,GNU Smalltalk,Seed7,Standard ML,Occam,Boo,Drools,Icon,Mercury,EngScript,Pike,Oz,Kotlin,Pawn,FreeBASIC,Ada,PowerShell,Gosu,Nimrod,Cython,OpenOffice Basic,ALGOL 68,D,Ceylon,Rust,CoffeeScript,ActionScript,TypeScript,Fortran,Octave,ML,AutoHotKey,Delphi,Pascal,F#,Self,Swift,Nemerle,Dart,C,AutoIt,Cobra,Julia,Groovy,Scala,OCaml,Erlang,Gambas,Hack,C++,MATLAB,REBOL,Red,Lua,Go,AWK,Haskell,Perl,Python,JavaScript,C#,PHP,Ruby,R,Haxe,Visual Basic,Visual Basic .NET,Vala,bc
		var1 __ var2
	Prolog
		var1 , var2
	Wolfram
		var1 ; var2
comment,var1:[^\\n]+
	Java,Dafny,Janus,Chapel,Rust,Frink,D,Genie,Ceylon,Hack,Maxima,Kotlin,Delphi,Dart,TypeScript,Swift,Vala,C#,JavaScript,Haxe,Scala,Go,C,C++,Pike,PHP,F#,Nemerle,crosslanguage,Gosu,Groovy":
		// var1 \\n
	OCaml,Standard ML,ML
		(*{ var1 _ }*)
	MATLAB,MiniZinc,Octave,Erlang,Prolog,Picat
		% var1 \\n
	REBOL
		comment [ var1 ]
	Wolfram
		(* var1 _ *)
	Pascal
		{ var1 _ }
	Fortran
		! var1 \\n
	Z3
		; var1 \\n
	Bash,Perl 6,PowerShell,Seed7,Cobra,Icon,EngScript,Nimrod,CoffeeScript,Julia,AWK,Ruby,Perl,R,Tcl,bc,Python,Cython
		# var1 \\n
	Lua,Haskell,Ada
		-- var1 \\n
initialize_var,name:var_name,type:type,value:expression
	Rust
		let __ mut __ name = value
	Dafny
		var name : type := value
	Z3
		( declare-const __ name __ type ) ( assert __ ( = __ name __ value ) )
	F#
		let __ mutable __ name = value
	Common Lisp
		( setf __ name __ value )
	MiniZinc
		type : name = value
	Python,Ruby,Haskell,Erlang,Prolog,Julia,Picat,Octave
		name = value
	JavaScript,PHP,Hack,Swift
		var __ name = value
	Lua
		local __ name = value
	Janus
		local __ type __ name = value
	Perl
		my __ name = value
	C,Java,C#,C++,D
		type __ name = value
	REBOL
		name : value
	Visual Basic,Visual Basic .NET,OpenOffice Basic
		Dim __ name __ As __ type = value
	R
		name <- value
	Fortran
		type :: name = value
	Chapel,Haxe,Scala,TypeScript
		var __ name : type = value
typeless_initialize_var,name:var_name,value:expression
	C++,D
		auto __ name = value
	C#,Dafny,JavaScript,Haxe,PHP,TypeScript,Dart,Swift
		var __ name = value
	Lua
		local __ name = value
	Python,Ruby,Haskell,Erlang,Prolog,Julia,Picat,Octave,PHP
		name = value
	C
		__auto_type __ name = value
	Java
		Object __ name = value
	C#,JavaScript,Haxe,Swift
		var __ name = value
	Perl
		my __ name = value
int,t1:type
	Hack,Dafny,Janus,Chapel,MiniZinc,EngScript,Cython,ALGOL 68,D,Octave,Tcl,crosslanguage,ML,AWK,Julia,Gosu,OCaml,F#,Pike,Objective-C,Go,Cobra,Dart,Groovy,Python,Hy,Java,C#,C,C++,Vala,Nemerle,crosslanguage
		int
	PHP,Prolog,Common Lisp,Picat
		integer
	Fortran
		INTEGER
	REBOL
		integer!
	Ceylon,Gambas,OpenOffice Basic,Pascal,Erlang,Delphi,Visual Basic,Visual Basic .NET
		Integer
	Haxe,ooc,Swift,Scala,Perl 6,Z3
		Int
	JavaScript,TypeScript,CoffeeScript,Lua,Perl
		number
	Haskell
		Num
	Ruby
		fixnum
char
	Java,C
		char
string
	Java,Ceylon,Gambas,Dart,Gosu,Groovy,Scala,Pascal,Swift,Ruby,Haxe,Haskell,Visual Basic,Visual Basic .NET
		String
	Vala,D,crosslanguage,Chapel,Prolog,MiniZinc,Genie,Hack,Nimrod,ALGOL 68,TypeScript,CoffeeScript,Octave,Tcl,AWK,Julia,C#,F#,Perl,Lua,JavaScript,Go,PHP,C++,Nemerle,Erlang
		string
	C
		char*
void
	EngScript,PHP,Hy,Cython,Go,Pike,Objective-C,Java,C,C++,C#,Vala,TypeScript,D,JavaScript,Lua
		void
	Haxe
		Void
	Scala
		Unit
boolean
	TypeScript,Python,Hy,Java,JavaScript,Lua,Perl
		boolean
	C++,Dafny,Chapel,C,crosslanguage,Rust,MiniZinc,EngScript,Dart,D,Vala,crosslanguage,Go,Cobra,C#,F#,PHP,Hack
		bool
	Haxe,Haskell,Swift,Julia,Perl 6,Z3
		Bool
	Fortran
		LOGICAL
if,c:elif_or_else,b:series_of_statements,a:And
	Erlang
		if __ a -> b __ c __ end
	Fortran
		IF __ a __ THEN __ b __ c __ END __ IF
	REBOL
		case [ a [ b ] c ]
	Julia
		if __ a __ b __ c __ end
	Lua,Ruby,Picat
		if __ a __ then __ b __ c __ end
	Octave
		if __ a __ b __ c __ endif
	Haskell,Pascal,Maxima
		if __ a __ then __ b __ c
	Java,Perl 6,Chapel,Katahdin,Pawn,PowerShell,D,Ceylon,TypeScript,ActionScript,Hack,AutoHotKey,Gosu,Nemerle,Swift,Nemerle,Pike,Groovy,Scala,Dart,JavaScript,C#,C,C++,Perl,Haxe,PHP,R,AWK,Vala,bc,Squirrel
		if ( a ) { b } c
	Rust,Go
		if __ a { b } c
	Visual Basic,Visual Basic .NET
		If __ a __ b __ c
	CLIPS
		( if __ a __ then __ b __ c )
	Z3
		( ite __ a __ b __ c )
	MiniZinc
		if __ a __ then __ b __ c __ endif
	Python,Cython
		if __ a : \n #indent \n b \n #unindent \n c
	Prolog
		( a -> b ; c )
	Visual Basic
		If __ a __ Then __ b __ c __ End __ If
	Common Lisp
		( cond ( a __ b ) __ c )
	Wolfram
		If [ a , b , c ]
foreach,array:expression,var_name:var_name,typeInArray:type,body:series_of_statements
	JavaScript
		array . forEach ( function ( var_name ) { body  } ) ;
	MiniZinc
		forall ( var_name in array ) ( body ) ;
	PHP,Hack
		foreach ( array __ as __ var_name ) { body }
	Java
		for ( typeInArray __ var_name : array ) { body }
	C#,Vala
		foreach ( typeInArray __ var_name __ in __ array ) { body }
	Lua
		for __ var_name __ in __ array __ do __ body __ end
	Python,Cython
		for __ var_name __ in __ array : \\n #indent \\n body \\n #unindent
	Julia
		for __ var_name __ in __ array __ body __ end
	Chapel,Swift
		for __ var_name __ in __ array { body }
	Pawn
		foreach ( new __ var_name : array ) { body }
	Picat
		foreach ( var_name __ in __ array ) __ body __ end
	Picat
		foreach ( var_name __ in __ array ) ( body ) end
	AWK,Ceylon
		for __ ( __ var_name __ in __ array ) { body }
	Go
		for __ var_name := range __ array { body }
	Haxe,Groovy
		for ( var_name __ in __ array ) { body }
	Ruby
		array . each __ do | var_name | __ body __ end
	Nemerle,PowerShell
		foreach ( var_name __ in __ array ) { body }
	Scala
		for ( var_name -> array ) { body }
	REBOL
		foreach __ var_name __ array [ body ]
	C++
		for ( typeInArray __ & __ var_name : array ){ body }
	Perl
		foreach __ var_name ( array ) { body }
	D
		foreach ( var_name , array ) { body }
	Gambas
		FOR __ EACH __ var_name __ IN __ array __ body __ NEXT
	Visual Basic .NET
		For __ Each __ var_name __ As __ typeInArray __ In __ array __ body __ Next
compare_ints,var1:Add,var2:Add
	Lua,Dafny,Wolfram,D,Rust,R,MiniZinc,Frink,Picat,Pike,Pawn,Processing,C++,Ceylon,CoffeeScript,Octave,Swift,AWK,Julia,Perl,Groovy,Erlang,Haxe,Scala,Java,Vala,Dart,Python,C#,C,Go,Haskell,Ruby
		var1 == var2
	JavaScript,PHP,TypeScript,Hack
		var1 === var2
	Z3
		( = __ var1 __ var2 )
	Fortran
		var1 .eq. var2
	Maxima,REBOL,F#,AutoIt,Pascal,Delphi,Visual Basic,Visual Basic .NET
		var1 = var2
class,name:Identifier,body:series_of_statements
	C,Z3,Lua
		body
	Java,C#
		public __ class __ name { body }
	C++
		class __ name { body } ;
	JavaScript,Hack,PHP,Scala,Haxe,Chapel,Swift,D,TypeScript,Dart,Perl 6
		class __ name { body }
	Ruby
		class __ name __ body __ end
	R
		_
function_parameter,type:type,name:var_name
	crosslanguage
		( parameter __ type __ name )
	C#,Java,Ceylon,ALGOL 68,Groovy,D,C++,Pawn,Pike,Vala,C,Janus
		type __ name
	Haxe,Dafny,Chapel,Pascal,Rust,Genie,Hack,Nimrod,TypeScript,Gosu,Delphi,Nemerle,Scala,Swift
		name : type
	Go
		name __ type
	MiniZinc
		var __ type : name
	Haskell,Scheme,Python,Mathematical notation,LispyScript,CLIPS,Clojure,F#,ML,Racket,OCaml,Tcl,Common Lisp,newLisp,Python,Cython,Frink,Picat,IDP,PowerShell,Maxima,Icon,CoffeeScript,Fortran,Octave,AutoHotKey,Julia,Prolog,AWK,Kotlin,Dart,JavaScript,Nemerle,Erlang,PHP,AutoIt,Lua,Ruby,R,bc
		name
	REBOL
		type [ name ]
	OpenOffice Basic,Gambas
		name __ As __ type
	Visual Basic,Visual Basic .NET
		name __ as __ type
	Perl
		name = push;
	Wolfram
		name \_
	Z3
		( name __ type )
switch,a:expression,b:case_statements,c:default
	crosslanguage
		( switch __ a __ b __ c )
	Rust
		match __ a { b __ c }
	Elixir
		case __ a __ do __ b __ c __ end
	Scala
		a __ match { b __ c }
	Octave
		switch ( a ) b __ endswitch
	Java,D,PowerShell,Nemerle,D,TypeScript,Hack,Swift,Groovy,Dart,AWK,C#,JavaScript,C++,PHP,C,Go,Haxe,Vala
		switch ( a ) { b __ c }
	Ruby
		case __ a __ b __ c __ end
	Haskell,Erlang
		case __ a __ of __ b __ c __ end
	Delphi,Pascal
		Case __ a __ of __ b __ c __ end;
	CLIPS
		( switch __ a __ b __ c )
	Visual Basic .NET,Visual Basic
		Select __ Case __ a __ b __ c __ End __ Select
	REBOL
		switch/default [ a __ b ]
	Fortran
		SELECT __ CASE ( a ) __ b __ c __ END __ SELECT
	Clojure
		( case __ a __ b __ c )
	Chapel
		select ( a ) { b c }
	Wolfram
		Switch [ a , b , c ]
	Python,Lua
		
case,a:expression,b:series_of_statements
	Lua,Python
		_
	crosslanguage
		( case __ a __ b )
	JavaScript,D,Java,C#,C,C++,TypeScript,Dart,PHP,Hack
		case __ a : b break ;
	Go,Haxe,Swift
		case __ a : b
	Fortran
		CASE ( a ) __ b
	Rust
		a => { b }
	Ruby
		when __ a __ b
	Haskell,Erlang,Elixir
		a __ -> \\n b
	CLIPS
		( case __ a __ then __ b )
	Scala
		case __ a => b
	Visual Basic .NET
		Case __ a __ b
	REBOL
		a [ b ]
	Octave
		case __ a __ b
	Clojure
		( a __ b )
	Pascal,Delphi:
		a : b
	Chapel
		when __ a { b }
	Wolfram
		a , b
access_array,a:Identifier,b:array_access_list
	Python,Lua,C#,Julia,D,Swift,Julia,Janus,MiniZinc,Picat,Nimrod,AutoIt,Cython,CoffeeScript,Dart,TypeScript,AWK,Vala,Perl,Java,JavaScript,Ruby,Go,C++,PHP,Haxe,C
		a [ b ]
	Scala,Octave,Fortran,Visual Basic, Visual Basic .NET
		a ( b )
	Haskell
		( a !! b )
	Frink
		a @ b
array_access_list,var1:expression,var2:array_access_list,separator:array_access_separator
	Java,C#,Lua,C++,Python,JavaScript,C,PHP,Ruby,Scala,Haxe,Fortran,TypeScript,MiniZinc,Dart
		var1 separator var2
array_access_separator
	C#,MiniZinc,Fortran,Julia,Visual Basic,Visual Basic .NET
		,
	Python,D,Lua,Picat,Janus,Nimrod,AutoIt,Cython,CoffeeScript,Dart,TypeScript,AWK,Vala,Perl,Java,JavaScript,Ruby,Go,C++,PHP,Haxe,C
		][
	Haskell
		!!
	Scala
		)(
	Frink
		@
default,a:series_of_statements
	Python,Cython,Lua,MiniZinc,Prolog,Lua
		_
	Fortran
		CASE __ DEFAULT __ a
	crosslanguage
		( default __ a )
	JavaScript,D,C,Java,C#,C++,TypeScript,Dart,PHP,Haxe,Hack,Go,Swift
		default : a
	Ruby,Pascal,Delphi
		else __ a
	Haskell
		\_ -> \\n __ a
	Rust
		\_ => a
	CLIPS
		( default __ a )
	Scala
		case __ \_ => a
	Visual Basic .NET
		Case __ Else __ a
	REBOL
		][ a
	Octave
		otherwise __ a
	Chapel
		otherwise { a }
	Clojure
		a
	Wolfram
		\_ , a
`.split("\n");
var current_function;
var current_language_list;
for(var i = 0; i < string_to_dict.length; i++){
	if(string_to_dict[i].lastIndexOf("		", 0) === 0){
		string_to_dict[i] = string_to_dict[i].substring(2);
		thePatterns[current_function][current_language_list] = string_to_dict[i];
	}
	else if(string_to_dict[i].lastIndexOf("	", 0) === 0){
		string_to_dict[i] = string_to_dict[i].substring(1);
		current_language_list = string_to_dict[i];
		thePatterns[current_function][string_to_dict[i]] = {};
	}
	else{
		thePatterns[string_to_dict[i]] = {};
		current_function = string_to_dict[i];
	}
}


for(var current in thePatterns){
	if(current.indexOf(",") !== -1){
		var current1 = current.split(",");
		var listOfVariables = [];
		for(var i = 0; i < current1.length; i++){
			if(current1[i].indexOf(":") !== -1){
				listOfVariables.push(current1[i].split(":")[0]);
			}
		}
		for(var i in thePatterns[current]){
			thePatterns[current][i] = thePatterns[current][i].split(" ");
			var stringToReturn;
			for(var j = 0; j < thePatterns[current][i].length; j++){
				var theIndex = listOfVariables.indexOf(thePatterns[current][i][j]);
				//console.log(theIndex)
				if(theIndex !== -1){
					thePatterns[current][i][j] = current1[theIndex+1];
				}
				if(j === 0){
					stringToReturn = thePatterns[current][i][0];
					if(thePatterns[current][i].length > 2 && thePatterns[current][i][1] !== "_" && thePatterns[current][i][1] !== "__"){
						stringToReturn += " _"
					}
				}
				else{
					stringToReturn += " " + thePatterns[current][i][j]
					if(j < thePatterns[current][i].length-1){
						if(thePatterns[current][i][j+1] !== "__" && thePatterns[current][i][j+1] !== "_" && thePatterns[current][i][j] !== "__" && thePatterns[current][i][j] !== "_"){
							stringToReturn += " _"
						}
					}
				}
			}
			thePatterns[current][i] = stringToReturn;
		}
		thePatterns[current1[0]] = thePatterns[current];
		//console.log(JSON.stringify(thePatterns[current]));
	}
}
//throw(JSON.stringify(thePatterns["function"]["Haxe"]));

function generateCode(parseTree, outputLang){
	if(typeof(parseTree) === "string"){
		return parseTree;
	}
	var d = {};
	for(var current in parseTree[1]){
		d[current] = generateCode(parseTree[1][current], outputLang);
	}
	switch(parseTree[0]){
		case 'initialize_var':
			if(acs(outputLang, "Java,C#,C++,JavaScript,TypeScript")){
				if(d.type === undefined){
					if (acs(outputLang, "Java,C#")){
						d.type = "Object";
					}
					else if(acs(outputLang, "C++")){
						d.type = "auto";
					}
					else if(acs(outputLang, "Haxe,JavaScript,TypeScript")){
						return pattern_to_output(d,"initialize_var","JavaScript");
					}
					else{
						throw("Initializing a typeless variable")
					}
				}
			}
			return pattern_to_output(d,"initialize_var",outputLang);
		break;
		case 'function_parameter':
			if(d.type === undefined){
				if(acs(outputLang, "C#,Java")){
					d.type = "Object";
				}
				else if(acs(outputLang, "D,C++")){
					d.type = "auto";
				}
			}
			
			return pattern_to_output(d,"function_parameter",outputLang);
		break;
		case "+":
			if(acs(outputLang, "Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET")){
				return "(" + d.var1 +"+"+ d.var2 + ")";
			}
			else if(acs(outputLang, "Z3")){
				return "(+ " + d.var1 +" "+ d.var2 + ")";
			}
		break;
		case "-":
			if(acs(outputLang, "Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET")){
				return "(" + d.var1 +"-"+ d.var2 + ")";
			}
			else if(acs(outputLang, "Z3")){
				return "(- " + d.var1 +" "+ d.var2 + ")";
			}
		break;
		case ">":
			if(acs(outputLang, "Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET")){
				return "(" + d.var1 +">"+ d.var2 + ")";
			}
			else if(acs(outputLang, "Z3")){
				return "(> " + d.var1 +" "+ d.var2 + ")";
			}
		break;
		case "<":
			if(acs(outputLang, "Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET")){
				return "(" + d.var1 +"<"+ d.var2 + ")";
			}
			else if(acs(outputLang, "Z3")){
				return "(< " + d.var1 +" "+ d.var2 + ")";
			}
		break;
		case ">=":
			if(acs(outputLang, "Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET")){
				return "(" + d.var1 +">="+ d.var2 + ")";
			}
			else if(acs(outputLang, "Z3")){
				return "(>= " + d.var1 +" "+ d.var2 + ")";
			}
		break;
		case "<=":
			if(acs(outputLang, "Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET")){
				return "(" + d.var1 +"<="+ d.var2 + ")";
			}
			else if(acs(outputLang, "Z3")){
				return "(<= " + d.var1 +" "+ d.var2 + ")";
			}
		break;
		case "*":
			if(acs(outputLang, "Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET")){
				return "(" + d.var1 +"*"+ d.var2 + ")";
			}
			else if(acs(outputLang, "Z3")){
				return "(* " + d.var1 +" "+ d.var2 + ")";
			}
		break;
		case "string_literal":
			return "\"" + d.var1 + "\"";
		break;
		case "/":
			if(acs(outputLang, "Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET")){
				return "(" + d.var1 +"/"+ d.var2 + ")";
			}
			else if(acs(outputLang, "Z3")){
				return "(/ " + d.var1 +" "+ d.var2 + ")";
			}
		break;
		case "parameters":
			if(acs(outputLang,"JavaScript,Dafny,Wolfram,Gambas,D,Frink,Chapel,Swift,Perl 6,OCaml,Janus,Mathematical notation,Pascal,Rust,Picat,AutoHotKey,Maxima,Octave,Julia,R,Prolog,Fortran,Go,MiniZinc,Erlang,CoffeeScript,PHP,Hack,Java,C#,C,C++,Lua,TypeScript,Dart,Ruby,Python,Haxe,Scala,Visual Basic,Visual Basic .NET")){
				return d.var1 +","+ d.var2;
			}
			else if(acs(outputLang, "Hy,Z3,Scheme,Racket,Common Lisp,CLIPS,REBOL,Haskell,Racket,Clojure")){
				return d.var1 +" "+d.var2;
			}
		break;
		case 'function':
			if(d.type === undefined){
				if(acs(outputLang, "Java,C#")){
					d.type = "Object"
				}
				else if(acs(outputLang, "D,C++")){
					d.type = "auto"
				}
			}
			return pattern_to_output(d,"function",outputLang);
		break;
		case 'declare_constant':
			if(d.type === undefined){
				if(acs(outputLang, "Java")){
					d.type = "Object"
				}
				else if(acs(outputLang, "C#")){
					d.type = "var"
				}
				else if(acs(outputLang, "D,C++")){
					d.type = "auto"
				}
			}
			return pattern_to_output(d,"declare_constant",outputLang);
		break;
		case "compare_ints":
			var toReturn = pattern_to_output(d,"compare_ints",outputLang);
			if(!acs(outputLang, "Racket,Z3,CLIPS,GNU Smalltalk,newLisp,Hy,Common Lisp,Emacs Lisp,Clojure,Sibilant,LispyScript")){
				return "(" + toReturn +")";
			}
			return toReturn;
		break;
		case "function_call_parameters":
			if(acs(outputLang,"JavaScript,Dafny,Wolfram,Gambas,D,Frink,Chapel,Swift,Perl 6,OCaml,Janus,Mathematical notation,Pascal,Rust,Picat,AutoHotKey,Maxima,Octave,Julia,R,Prolog,Fortran,Go,MiniZinc,Erlang,CoffeeScript,PHP,Hack,Java,C#,C,C++,Lua,TypeScript,Dart,Ruby,Python,Haxe,Scala,Visual Basic,Visual Basic .NET")){
				return d.var1 +","+ d.var2;
			}
		break;
		case "type":
			if(d.var2 === undefined){
				return d.var1;
			}
			else
				return d.var1 + d.var2;
		case "array_type_suffix":
			if(d.var2 === undefined){
				return d.var1;
			}
			else
				return d.var1 + d.var2;
		default:
			return pattern_to_output(d,parseTree[0],outputLang);
	}
	if(parseTree[0] === undefined)
		throw(JSON.stringify(parseTree));
	
	var keys = [];
	for(var k in parseTree[1]) keys.push(k);
	throw parseTree[0] + " is not yet defined for " + outputLang + " with keys " + keys.join(",")
}

	var output_dict = {
		'statement':{
			"Java,JavaScript,C#,PHP,Haxe,Ruby":
				"statement = function / foreach / import / switch / if / class / while / for / statement_with_semicolon / comment / multiline_comment",
			"C,Lua,R,Julia,Perl":
				"statement = if / import / while / for / function / statement_with_semicolon / comment / multiline_comment",
			"Z3,Prolog,Haskell":
				"statement = function / import / if / statement_with_semicolon / comment",
		},
		'join':{
			'C':'join = Integer',
		},
		'foreach':{
			'C':'foreach = for',
		},
		'int_to_string':{
			'C':'int_to_string = Integer',
		},
		'split':{
			'C':'split = Integer',
		},
		'instance_method':{
			'C':'instance_method = function',
		},
		'typeless_instance_method':{
			'C':'typeless_instance_method = function',
		},
		'typeless_static_method':{
			'C':'typeless_static_method = function',
		},
		'case_statements':{
			'Java,C#,C++,JavaScript,PHP,Haxe,Fortran':
				'case_statements = a:case _ b:case_statements {return ["case_statements", {a:a, b:b}]} / case',
			'Lua,Python,R,Julia':
				'',
		},
		'switch':{
			'Lua,Python,R,Julia':
				'',
		},
		'default':{
			'Lua,Python,R,Julia':
				'',
		},
		'series_of_statements':{
			'Java,Dafny,Z3,Elm,Bash,Perl 6,Mathematical notation,Katahdin,Frink,MiniZinc,Aldor,COBOL,ooc,Genie,ECLiPSe,nools,Agda,PL/I,REXX,IDP,Falcon,Processing,Sympy,Maxima,Pyke,Elixir,GNU Smalltalk,Seed7,Standard ML,Occam,Boo,Drools,Icon,Mercury,EngScript,Pike,Oz,Kotlin,Pawn,FreeBASIC,Ada,PowerShell,Gosu,Nimrod,Cython,OpenOffice Basic,ALGOL 68,D,Ceylon,Rust,CoffeeScript,ActionScript,TypeScript,Fortran,Octave,ML,AutoHotKey,Delphi,Pascal,F#,Self,Swift,Nemerle,Dart,C,AutoIt,Cobra,Julia,Groovy,Scala,OCaml,Erlang,Gambas,Hack,C++,MATLAB,REBOL,Red,Lua,Go,AWK,Haskell,Perl,Python,JavaScript,C#,PHP,Ruby,R,Haxe,Visual Basic,Visual Basic .NET,Vala,bc':
				pattern_to_input("series_of_statements", "Java") + " / statement",
			'Picat,Prolog':
				pattern_to_input("series_of_statements", "Prolog") +" / statement",
			'Wolfram':
				pattern_to_input("series_of_statements", "Wolfram") +" / statement",
		},
		'multiline_comment':{
			'Java,JavaScript,C,C#,PHP,C++,Haxe,TypeScript':
				'multiline_comment = "/*" var1:((!("*/" / "/*") .)+) "*/" {return ["comment", {var1:text(var1)}];}',
			'Z3,Lua,Ruby,R,Fortran':
				'multiline_comment = comment',
			'Haskell':
				'multiline_comment = "{-|" var1:((!("{-|" / "-}") .)+) "-}" {return ["comment", {var1:text(var1)}];}',
			'Perl':
				'"=begin comment\\n" var1:((!("=begin comment" / "end_comment" / "=cut") .)+) "=end comment\\n=cut\\n"',
		},
		'statement_with_semicolon':{
			'Java,C#,JavaScript,C,PHP,Haxe,Ruby':
				'statement_with_semicolon = var1:(print / set_var / plus_equals / minus_equals / declare_constant / initialize_var / typeless_initialize_var / initialize_empty_var / return / function_call ) _ ";" {return ["statement_with_semicolon", {var1:var1}]}',
			'Z3,Lua':
				'statement_with_semicolon = var1:(print / set_var / plus_equals / minus_equals / declare_constant / initialize_var / typeless_initialize_var / return / function_call ) {return ["statement_with_semicolon", {var1:var1}]}',
			'Lua':
				'statement_with_semicolon = var1:(print / set_var / initialize_empty_var / plus_equals / minus_equals / declare_constant / initialize_var / typeless_initialize_var / return / function_call ) {return ["statement_with_semicolon", {var1:var1}]}',
			'Haskell':
				'statement_with_semicolon = var1:(print / return / function_call ) {return ["statement_with_semicolon", {var1:var1}]}',
		},
		'elif_or_else':{
			'Java,JavaScript,TypeScript,C,C#,Haxe,PHP,Lua,Ruby,R,Fortran,Perl,C++':
				"elif_or_else = elif / else",
			'Z3,CLIPS':
				'',
		},
		'function_parameters':{
			'JavaScript,Dafny,Wolfram,Gambas,D,Frink,Chapel,Swift,Perl 6,OCaml,Janus,Mathematical notation,Pascal,Rust,Picat,AutoHotKey,Maxima,Octave,Julia,R,Prolog,Fortran,Go,MiniZinc,Erlang,CoffeeScript,PHP,Hack,Java,C#,C,C++,Lua,TypeScript,Dart,Ruby,Python,Haxe,Scala,Visual Basic,Visual Basic .NET':
<<<<<<< HEAD
				'function_parameters =  var1:function_parameter _ "," _ var2:function_parameters {return ["parameters", {var1:var1, var2:var2}];} /  function_parameter / _',
			'Hy,Z3,Scheme,Racket,Common Lisp,CLIPS,REBOL,Haskell,Racket,Clojure':
				'function_parameters =  var1:function_parameter __ var2:function_parameters {return ["parameters", {var1:var1, var2:var2}];} /  function_parameter / _',
=======
				'function_parameters =  var1:function_parameter _ "," _ var2:function_parameters {return ["parameters", {var1:var1, var2:var2}];} /  function_parameter / _ {return ""}',
			'Hy,Z3,Scheme,Racket,Common Lisp,CLIPS,REBOL,Haskell,Racket,Clojure':
				'function_parameters =  var1:function_parameter __ var2:function_parameters {return ["parameters", {var1:var1, var2:var2}];} /  function_parameter / _ {return ""}',
>>>>>>> a388725d431e2709a9cab6efab772df2f5af5740

		},
		'class':{
			"C,Z3,Lua":
				'class = function',
		},
		'while':{
			"Z3":
				"",
			"Lua,Ruby,Julia":
				'while = "while" (_ "(" _ condition:Or _ ")" / __ condition:Or) __ body:series_of_statements __ "end" {return ["while", {condition:condition, body:body}]}',

		},
		'And':{
			"JavaScript,Wolfram,D,Chapel,Elixir,Hack,PHP,Frink,ooc,Picat,Janus,Processing,Pike,Pawn,MATLAB,Hack,Gosu,Rust,AutoIt,AutoHotKey,TypeScript,Ceylon,Groovy,Octave,Julia,Scala,F#,Swift,Nemerle,Vala,Dart,C,C++,C#,OCaml,AWK,Java,Haskell,Haxe,Bash,Haxe,Go,Perl,R":
				pattern_to_input('And', "JavaScript") + ' / Or',
			"Python,Mathematical notation,Genie,IDP,Maxima,EngScript,Ada,newLisp,OCaml,Nimrod,CoffeeScript,Pascal,Delphi,Erlang,REBOL,Lua,PHP,crosslanguage,Ruby":
				pattern_to_input('And', "Python") + ' / Or',
			"Fortran":
				pattern_to_input('And', "Fortran") + ' / Or',
			"MiniZinc":
				pattern_to_input('And', "MiniZinc") + ' / Or',
			"Z3":
				pattern_to_input('And', "Z3") + ' / Or',
		},
		'Or':{
			"JavaScript,Wolfram,Chapel,Elixir,Frink,ooc,Picat,Janus,Processing,Pike,nools,Pawn,MATLAB,Hack,Gosu,Rust,AutoIt,AutoHotKey,TypeScript,Ceylon,Groovy,D,Octave,AWK,Julia,Scala,F#,Swift,Nemerle,Vala,Go,Perl,Java,Haskell,Haxe,C,C++,C#,Dart,R":
				pattern_to_input('Or', "JavaScript") + ' / greater_than',
			"Python,Mathematical notation,Genie,IDP,Maxima,EngScript,Ada,newLisp,OCaml,Nimrod,CoffeeScript,Pascal,Delphi,Erlang,REBOL,Lua,PHP,crosslanguage,Ruby":
				pattern_to_input('Or', "Python") + ' / greater_than',				
			"PHP":
				'Or = var1:greater_than (_ "||" _ / __ "or" __) var2:Or {return ["or", {var1:var1, var2:var2}]} / greater_than',
			'Z3':
				pattern_to_input('Or', "Z3") + ' / greater_than',
			"Fortran":
				pattern_to_input('Or', "Fortran") + ' / greater_than',
			"MiniZinc":
				pattern_to_input('Or', "JavaScript") + ' / greater_than',
			
		},
		'greater_than':{
			"Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET":
				'greater_than = var1:Add _ ">" _ var2:Add {return [">", {var1:var1, var2:var2}]} / less_than',
			'Z3':
				'greater_than = "(" _ ">" __ var1:Add __ var2:Add _ ")" {return [">", {var1:var1, var2:var2}]} / less_than',
		},
		'less_than':{
			"Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET":
				'less_than = var1:Add _ "<" _ var2:Add {return ["<", {var1:var1, var2:var2}]} / less_than_or_equal',
			'Z3':
				'less_than = "(" _ ">=" __ var1:Add __ var2:Add _ ")" {return ["<", {var1:var1, var2:var2}]} / less_than_or_equal',
		},
		'less_than_or_equal':{
			"Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET":
				'less_than_or_equal = var1:Add _ "<=" _ var2:Add {return ["<=", {var1:var1, var2:var2}]} / greater_than_or_equal',
			'Z3':
				'less_than_or_equal = "(" _ "<=" __ var1:Add __ var2:Add _ ")" {return ["<=", {var1:var1, var2:var2}]} / greater_than_or_equal',
		},
		'greater_than_or_equal':{
			"Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET":
				'greater_than_or_equal = var1:Add _ ">=" _ var2:Add {return [">=", {var1:var1, var2:var2}]} / compare_ints',
			'Z3':
				'greater_than_or_equal = "(" _ ">=" __ var1:Add __ var2:Add _ ")" {return [">=", {var1:var1, var2:var2}]} / compare_ints',
		},
		'compare_ints':{
			'Lua,Dafny,Wolfram,D,Rust,R,MiniZinc,Frink,Picat,Pike,Pawn,Processing,C++,Ceylon,CoffeeScript,Octave,Swift,AWK,Julia,Perl,Groovy,Erlang,Haxe,Scala,Java,Vala,Dart,Python,C#,C,Go,Haskell,Ruby':
				'compare_ints = var1:Add _ "==" _ var2:Add {return ["compare_ints", {var1:var1, var2:var2}]} / Add',
			'JavaScript,PHP,TypeScript,Hack':
				'compare_ints = var1:Add _ "===" _ var2:Add {return ["compare_ints", {var1:var1, var2:var2}]} / Add',
			'Z3':
				'compare_ints = "(" _ "=" __ var1:Add __ var2:Add _ ")" {return ["compare_ints", {var1:var1, var2:var2}]} / Add',
		},
		'Add':{
			"Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET":
				'Add = var1:Multiply _ symbol:("+"/"-") _ var2:Add {return [symbol,{var1:var1,var2:var2}];} / Multiply',
			'Z3':
				'Add = "(" _ symbol:("+"/"-") __  var1:Multiply __ var2:Add _ ")" {return [symbol,{var1:var1,var2:var2}];} / Multiply',
		},
		'Multiply':{
			"Pascal,Wolfram,Chapel,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET":
				'Multiply = var1:Factor _ symbol:("/"/"*") _ var2:Multiply {return [symbol, {var1:var1,var2:var2}];} / Factor',
			'Z3':
				'Multiply = "(" _ symbol:("/"/"*") __ var1:Factor __ var2:Multiply _ ")" {return [symbol, {var1:var1,var2:var2}];} / Factor',
		},
		'dot_notation':{
			'Java,Lua,JavaScript,D,Haxe,C#,Perl 6,Ruby,TypeScript':
				'dot_notation = var1:Identifier "." var2:dot_notation {return ["dot_notation", {var1:var1, var2:var2}];} / Identifier',
			'PHP,C':
				'dot_notation = var1:Identifier "->" var2:dot_notation {return ["dot_notation", {var1:var1, var2:var2}];} / Identifier',
			'Z3,R':
				"",
		},
		'function_call':{
			"C,Chapel,Elixir,Janus,Perl 6,Pascal,Rust,Hack,Katahdin,MiniZinc,Pawn,Aldor,Picat,D,Genie,ooc,PL/I,Delphi,Standard ML,REXX,Falcon,IDP,Processing,Maxima,Swift,Boo,R,MATLAB,AutoIt,Pike,Gosu,AWK,AutoHotKey,Gambas,Kotlin,Nemerle,EngScript,Prolog,Groovy,Scala,CoffeeScript,Julia,TypeScript,Fortran,Octave,C++,Go,Cobra,Ruby,Vala,F#,Java,Ceylon,OCaml,Erlang,Python,C#,Lua,Haxe,JavaScript,Dart,bc,Visual Basic,Visual Basic .NET,PHP,Perl":
				'function_call = theName:Identifier _ "(" _ args:( function_call_parameters / _ ) _ ")" {return ["function_call", {theName:theName, args:args}]}',
			"Z3":
				'function_call = "(" theName:Identifier __ args:( function_call_parameters / _ ) _ ")" {return ["function_call", {theName:theName, args:args}]}',
		},
		'parentheses_expression':{
			'Pascal,Katahdin,Frink,MiniZinc,Picat,Java,ECLiPSe,D,ooc,Genie,Janus,PL/I,IDP,Processing,Maxima,Seed7,Self,GNU Smalltalk,Drools,Standard ML,Oz,Cobra,Pike,Prolog,EngScript,Kotlin,Pawn,FreeBASIC,MATLAB,Ada,FreeBASIC,Gosu,Gambas,Nimrod,AutoIt,ALGOL 68,Ceylon,Groovy,Rust,CoffeeScript,TypeScript,Fortran,Octave,ML,Hack,AutoHotKey,Scala,Delphi,Tcl,Swift,Vala,C,F#,C++,Dart,JavaScript,REBOL,Julia,Erlang,OCaml,crosslanguage,C#,Nemerle,AWK,Java,Lua,Perl,Haxe,Python,PHP,Haskell,Go,Ruby,R,bc,Visual Basic,Visual Basic .NET':
				'parentheses_expression = string_literal / "(" var1:expression ")" {return ["parentheses_expression", {"a":var1}];} / function_call / dot_notation'
		},
		'function_call_parameters':{
			'JavaScript,Wolfram,D,Frink,Delphi,EngScript,Chapel,Perl,Swift,Perl 6,OCaml,Janus,Mathematical notation,Pascal,Rust,Picat,AutoHotKey,Maxima,Octave,Julia,R,Prolog,Fortran,Go,MiniZinc,Erlang,CoffeeScript,PHP,Hack,Java,C#,C,C++,Lua,TypeScript,Dart,Ruby,Python,Haxe,Scala,Visual Basic,Visual Basic .NET':
				'function_call_parameters = (var1:(function_call_named_parameter/expression) _ "," _ var2:function_call_parameters) {return ["function_call_parameters", {var1:var1, var2:var2}]} / (function_call_named_parameter/expression)',
			'Hy,crosslanguage,Coq,Scheme,Racket,Common Lisp,CLIPS,REBOL,Haskell,Racket,Clojure,Z3':
				'function_call_parameters = (var1:(function_call_named_parameter/expression) __ var2:function_call_parameters) {return ["function_call_parameters", {var1:var1, var2:var2}]} / (function_call_named_parameter/expression)',
		},
		'this':{
			'Lua,C':'this = Identifier'
		},
		'anonymous_function':{
			'C,C#,Fortran':'anonymous_function = set_var'
		},
		'sin':{
			'Z3':'sin = Integer'
		},
		'cos':{
			'Z3':'cos = Integer'
		},
		'tan':{
			'Z3':'tan = Integer'
		},
		'Factor':{
			"Java,Haxe,JavaScript,TypeScript,C,C++,PHP,Lua,Ruby,R,Lua":
				'Factor = anonymous_function / this / dictionary / initializer_list / access_array / string_to_int / int_to_string / strcmp / function_call / strlen / sqrt / split / string_literal / "(" expr:expression ")" { return ["parentheses_expression", {"a":expr}]; } / pow / sin / cos / tan / dot_notation / Identifier / Integer',
			"C#":
				'Factor =  string_to_int / int_to_string / strcmp / this / dictionary / initializer_list / access_array / function_call / strlen / sqrt / split / string_literal / "(" expr:expression ")" {return ["parentheses_expression", {"a":expr}]} / pow / sin / cos / tan / dot_notation / Identifier / Integer',
			'Z3':
				'Factor = function_call / split / Integer / Identifier / string_literal / "(" expr:expression ")" { return expr; }',
		},
		'type':{
			"Java,C,C#,Haxe,C++":
<<<<<<< HEAD
				'type = var1:_type var2:array_type_suffix {return ["type",{var1:var1, var2:var2}];} / var1:_type {return var1;}',
			"JavaScript,PHP,Z3,Lua,Ruby,R,Fortran,Z3":
				'type = var1:_type {return ["type", {var1:var1}]}',
=======
				'type = var1:_type var2:array_type_suffix {return var1 + var2;} / var1:_type {return var1;}',
			"JavaScript,PHP,Z3,Lua,Ruby,R,Fortran":
				'type = type:_type {return type}',
			'Z3':
				'',
>>>>>>> a388725d431e2709a9cab6efab772df2f5af5740
		},
		'_type':{
			"Java,C,C#,Haxe,Ruby,Fortran":
				'_type = char / boolean / int / string / void',
			"Ruby":
				'_type = char / int / string',
			"Z3":
				'_type = int / boolean',
			"PHP,Lua,JavaScript,TypeScript,R":
				'_type = int / string / boolean',
		},
		'boolean':{
			'Ruby':'boolean = int',
		},
		'initialize_empty_var':{
			'Ruby':'initialize_empty_var = initialize_var',
		},
		'char':{
			'Z3':
				'',
			'JavaScript,PHP,Lua,Haxe,C#,Ruby':
				'char = string',
		},
		'string':{
			"Z3":
				'',
		},
		'void':{
			"JavaScript,PHP,Z3,Lua,Ruby":
				'void = int',
		},
		'array_type_suffix':{
			"Java,C#,C++,Haxe":
				'array_type_suffix = var1:"[]" var2:array_type_suffix {return ["array_type_suffix", {var1:var1, var2:var2}];} / "[]"',
			"C":
				'array_type_suffix = var1:("[]"/"*") var2:array_type_suffix {return ["array_type_suffix", {var1:var1, var2:var2}];} / ("[]"/ "*")',
			"JavaScript,PHP,Z3,Lua,Ruby":
				"",
		},
		'case':{
			'Lua,Python':
				'',
		},
	}

for(current in thePatterns){
	//throw Object.keys(thePatterns);
	if((current.indexOf(",") === -1) && (current.indexOf(":") === -1) && (current.indexOf(" ") === -1) && (current.indexOf("\t") === -1) && (current !== "")){
	if(!(current in output_dict)){
		output_dict[current] = {};
	}
	for(current1 in thePatterns[current]){
			//throw JSON.stringify(current1+","+current);
			//console.log(thePatterns[current]);
			if(!(current1 in output_dict[current])){
				output_dict[current][current1] = pattern_to_input(current, current1.split(",")[0]);
			}
			//throw(JSON.stringify(output_dict[current]));
	}
}
}
//throw(JSON.stringify(output_dict["comment"]));

function getOutput(lang, statement_name){
	for(var current in output_dict[statement_name]){
		if(acs(lang, current)){
			return "\n" + output_dict[statement_name][current];
		}
	}
	throw statement_name + " is not yet defined for " + lang + " in output_dict";
}

var functions_to_implement = 0;
const list_of_statements = Object.keys(output_dict);
for(var current of list_of_languages){
	for(var current1 of list_of_statements){
		try{
			getOutput(current,current1)
		}
		catch(e){
			console.log(e);
			functions_to_implement += 1;
		}
	}
}
if(functions_to_implement > 0){
	throw "Implement all of these functions.";
}

function generateParser(lang){
	var toReturn = "Main = _ var1:series_of_statements _ {return var1;} / _"
+ "\n" + "expression =  And";

	for(let current of list_of_statements){
		toReturn += getOutput(lang, current);
	}
	toReturn += `
Identifier "identifier" = !(type / Integer / "split" / "equals" / "Console" / "System" / "break" / "while" / "if" / "else" / "ite" / "end" / "then") [a-zA-Z0-9]+ {return text();}
key_value_list = var1:key_value _ var2:key_value_separator _ var3:key_value_list {return ["key_value_list", {var1:var1,var2:var2,var3:var3}]}
/ key_value
_initializer_list = var1:expression _ var2:initializer_list_separator _ var3:_initializer_list {return ["_initializer_list", {var1:var1,var2:var2,var3:var3}];}
/ expression
array_access_list =  var1:expression _ separator:array_access_separator _ var2:array_access_list {return ["array_access_list", {var1:var1, separator:separator, var2:var2}]} / expression
Integer "integer" = [0-9]+ { return text(); }
_ "whitespace" = [ \\t\\n\\r]*
__ "whitespace2" = [ \\t\\n\\r] [ \\t\\n\\r]*  
string_literal = '"' var1:_string_literal '"' {return ["string_literal", {var1:var1}];} / "'" var1:__string_literal "'" {return ["string literal", var1];}
_string_literal = [^"]+ {return text();}
__string_literal = [^']+ {return text();}`
	//console.log("\n\n\n\n\n"+toReturn);
	return toReturn;
}

const java_input_text = `
public static int main(int a, int b){
	while(a == b){
		System.out.println(a);
	}
	if(a){print(a);}
	else if(a){print(a);}
	else{print(a,b);}
	return a+b;
}
`


var parsers = {};
var add_to_string = "";
for(var current of list_of_languages){
	var inputText = generateParser(current);
	parsers[current] = PEG.buildParser(inputText);
	add_to_string += "'"+current+"':"+parsers[current]+",";
	//console.log(parsers[current]);
}

function translateLang(lang1, lang2, text){
	var parseTree = parsers[lang1].parse(text);
	return generateCode(parseTree, lang2)
}

var theString = acs.toString()+"\n"+pattern_to_output.toString() +"\nvar thePatterns = "+JSON.stringify(thePatterns)+";\nvar parsers = {"+ add_to_string +"};"+generateCode.toString()+"\n"+translateLang.toString()+"\n";
fs.writeFile('optimized_translator.js', theString, function (err) {
	if (err) throw err;
	console.log('Generated optimized_translator.js');
});


//const parseTree = parsers["Java"].parse(java_input_text);



function translateLangs(lang, text){
	var parseTree = parsers[lang].parse(text);
	//console.log(JSON.stringify(parseTree));
	for(var current of list_of_languages){
		console.log(generateCode(parseTree, current));
	}
}

/*
console.log(translateLang("JavaScript", "Lua",
`function add(a,b){ var g = 1; var a = [3,4,5]; console.log(a !== b); return a + b; }
var a;
var b = 2;
const a = 3;
return d*2 + 3;
var a = {Hello:1, wow:3};
return function(a,b){console.log(a+b);};
`)); */

/* console.log(translateLang("Java", "C#",
`int i = i+3*4+5*3;
boolean b = (3 || 5) && (6 + 7);
System.out.println(a || 4);
System.out.println(a.equals("Hello"));
`));
*/

//console.log(translateLang("Z3", "Lua", "(ite d b c)"));
//console.log(translateLang("C", "Haxe", "bool a = \"Hello\"; printf(3);"));
//console.log(translateLang("Java", "Z3", "public static int add(int a, int b){ if(b == 2){ return 2; } else{return a + b;}}"));
//console.log(translateLang("Java", "C", "String a = 3; System.out.println(a+2*1);"));
