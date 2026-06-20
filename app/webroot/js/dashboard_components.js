/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.11.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popper = factory());
}(this, (function () { 'use strict';

var nativeHints = ['native code', '[object MutationObserverConstructor]'];

/**
 * Determine if a function is implemented natively (as opposed to a polyfill).
 * @method
 * @memberof Popper.Utils
 * @argument {Function | undefined} fn the function to check
 * @returns {Boolean}
 */
var isNative = (function (fn) {
  return nativeHints.some(function (hint) {
    return (fn || '').toString().indexOf(hint) > -1;
  });
});

var isBrowser = typeof window !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var scheduled = false;
  var i = 0;
  var elem = document.createElement('span');

  // MutationObserver provides a mechanism for scheduling microtasks, which
  // are scheduled *before* the next task. This gives us a way to debounce
  // a function but ensure it's called *before* the next paint.
  var observer = new MutationObserver(function () {
    fn();
    scheduled = false;
  });

  observer.observe(elem, { attributes: true });

  return function () {
    if (!scheduled) {
      scheduled = true;
      elem.setAttribute('x-index', i);
      i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
    }
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

// It's common for MutationObserver polyfills to be seen in the wild, however
// these rely on Mutation Events which only occur when an element is connected
// to the DOM. The algorithm used in this module does not use a connected element,
// and so we must ensure that a *native* MutationObserver is available.
var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
    return window.document.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return window.document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = window.document.documentElement;
    var scrollingElement = window.document.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], html['client' + axis], html['offset' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var computedStyle = isIE10$1() && window.getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = +styles.borderTopWidth.split('px')[0];
  var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = +styles.marginTop.split('px')[0];
    var marginLeft = +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = window.document.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = window.document.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = window.document.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier.function) {
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier.function || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? window : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  window.addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  window.removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if the arrow style has been computed, apply the arrow style
  if (data.offsets.arrow) {
    setStyles(data.arrowElement, data.offsets.arrow);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update attributes and styles of `data`
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var side = isVertical ? 'top' : 'left';
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  var sideValue = center - getClientRect(data.offsets.popper)[side];

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = Math.round(sideValue);
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[placement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference.jquery ? reference[0] : reference;
    this.popper = popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));
//# sourceMappingURL=popper.js.map

/*!
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");!function(t){var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),function(){function t(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(t){function e(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(t){return(t[0]||t).nodeType}function i(){return{bindType:s.end,delegateType:s.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}}function o(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in a)if(void 0!==t.style[e])return{end:a[e]};return!1}function r(e){var n=this,i=!1;return t(this).one(l.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||l.triggerTransitionEnd(n)},e),this}var s=!1,a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n=e.getAttribute("data-target");n&&"#"!==n||(n=e.getAttribute("href")||"");try{return t(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger(s.end)},supportsTransitionEnd:function(){return Boolean(s)},typeCheckConfig:function(t,i,o){for(var r in o)if(o.hasOwnProperty(r)){var s=o[r],a=i[r],l=a&&n(a)?"element":e(a);if(!new RegExp(s).test(l))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+l+'" but expected type "'+s+'".')}}};return s=o(),t.fn.emulateTransitionEnd=r,l.supportsTransitionEnd()&&(t.event.special[l.TRANSITION_END]=i()),l}(jQuery),s=(function(t){var e="alert",i=t.fn[e],s={DISMISS:'[data-dismiss="alert"]'},a={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},l={ALERT:"alert",FADE:"fade",SHOW:"show"},h=function(){function e(t){n(this,e),this._element=t}return e.prototype.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.prototype.dispose=function(){t.removeData(this._element,"bs.alert"),this._element=null},e.prototype._getRootElement=function(e){var n=r.getSelectorFromElement(e),i=!1;return n&&(i=t(n)[0]),i||(i=t(e).closest("."+l.ALERT)[0]),i},e.prototype._triggerCloseEvent=function(e){var n=t.Event(a.CLOSE);return t(e).trigger(n),n},e.prototype._removeElement=function(e){var n=this;t(e).removeClass(l.SHOW),r.supportsTransitionEnd()&&t(e).hasClass(l.FADE)?t(e).one(r.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(150):this._destroyElement(e)},e.prototype._destroyElement=function(e){t(e).detach().trigger(a.CLOSED).remove()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data("bs.alert");o||(o=new e(this),i.data("bs.alert",o)),"close"===n&&o[n](this)})},e._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),e}();t(document).on(a.CLICK_DATA_API,s.DISMISS,h._handleDismiss(new h)),t.fn[e]=h._jQueryInterface,t.fn[e].Constructor=h,t.fn[e].noConflict=function(){return t.fn[e]=i,h._jQueryInterface}}(jQuery),function(t){var e="button",i=t.fn[e],r={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},s={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},a={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},l=function(){function e(t){n(this,e),this._element=t}return e.prototype.toggle=function(){var e=!0,n=!0,i=t(this._element).closest(s.DATA_TOGGLE)[0];if(i){var o=t(this._element).find(s.INPUT)[0];if(o){if("radio"===o.type)if(o.checked&&t(this._element).hasClass(r.ACTIVE))e=!1;else{var a=t(i).find(s.ACTIVE)[0];a&&t(a).removeClass(r.ACTIVE)}if(e){if(o.hasAttribute("disabled")||i.hasAttribute("disabled")||o.classList.contains("disabled")||i.classList.contains("disabled"))return;o.checked=!t(this._element).hasClass(r.ACTIVE),t(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!t(this._element).hasClass(r.ACTIVE)),e&&t(this._element).toggleClass(r.ACTIVE)},e.prototype.dispose=function(){t.removeData(this._element,"bs.button"),this._element=null},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.button");i||(i=new e(this),t(this).data("bs.button",i)),"toggle"===n&&i[n]()})},o(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),e}();t(document).on(a.CLICK_DATA_API,s.DATA_TOGGLE_CARROT,function(e){e.preventDefault();var n=e.target;t(n).hasClass(r.BUTTON)||(n=t(n).closest(s.BUTTON)),l._jQueryInterface.call(t(n),"toggle")}).on(a.FOCUS_BLUR_DATA_API,s.DATA_TOGGLE_CARROT,function(e){var n=t(e.target).closest(s.BUTTON)[0];t(n).toggleClass(r.FOCUS,/^focus(in)?$/.test(e.type))}),t.fn[e]=l._jQueryInterface,t.fn[e].Constructor=l,t.fn[e].noConflict=function(){return t.fn[e]=i,l._jQueryInterface}}(jQuery),function(t){var e="carousel",s="bs.carousel",a="."+s,l=t.fn[e],h={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},c={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},u={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},d={SLIDE:"slide"+a,SLID:"slid"+a,KEYDOWN:"keydown"+a,MOUSEENTER:"mouseenter"+a,MOUSELEAVE:"mouseleave"+a,TOUCHEND:"touchend"+a,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},f={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},p={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},_=function(){function l(e,i){n(this,l),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(i),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(p.INDICATORS)[0],this._addEventListeners()}return l.prototype.next=function(){this._isSliding||this._slide(u.NEXT)},l.prototype.nextWhenVisible=function(){document.hidden||this.next()},l.prototype.prev=function(){this._isSliding||this._slide(u.PREV)},l.prototype.pause=function(e){e||(this._isPaused=!0),t(this._element).find(p.NEXT_PREV)[0]&&r.supportsTransitionEnd()&&(r.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},l.prototype.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},l.prototype.to=function(e){var n=this;this._activeElement=t(this._element).find(p.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var o=e>i?u.NEXT:u.PREV;this._slide(o,this._items[e])}},l.prototype.dispose=function(){t(this._element).off(a),t.removeData(this._element,s),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},l.prototype._getConfig=function(n){return n=t.extend({},h,n),r.typeCheckConfig(e,n,c),n},l.prototype._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},l.prototype._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:return}},l.prototype._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(p.ITEM)),this._items.indexOf(e)},l.prototype._getItemByDirection=function(t,e){var n=t===u.NEXT,i=t===u.PREV,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===u.PREV?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},l.prototype._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),o=this._getItemIndex(t(this._element).find(p.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:o,to:i});return t(this._element).trigger(r),r},l.prototype._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(p.ACTIVE).removeClass(f.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(f.ACTIVE)}},l.prototype._slide=function(e,n){var i=this,o=t(this._element).find(p.ACTIVE_ITEM)[0],s=this._getItemIndex(o),a=n||o&&this._getItemByDirection(e,o),l=this._getItemIndex(a),h=Boolean(this._interval),c=void 0,_=void 0,g=void 0;if(e===u.NEXT?(c=f.LEFT,_=f.NEXT,g=u.LEFT):(c=f.RIGHT,_=f.PREV,g=u.RIGHT),a&&t(a).hasClass(f.ACTIVE))this._isSliding=!1;else if(!this._triggerSlideEvent(a,g).isDefaultPrevented()&&o&&a){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(a);var m=t.Event(d.SLID,{relatedTarget:a,direction:g,from:s,to:l});r.supportsTransitionEnd()&&t(this._element).hasClass(f.SLIDE)?(t(a).addClass(_),r.reflow(a),t(o).addClass(c),t(a).addClass(c),t(o).one(r.TRANSITION_END,function(){t(a).removeClass(c+" "+_).addClass(f.ACTIVE),t(o).removeClass(f.ACTIVE+" "+_+" "+c),i._isSliding=!1,setTimeout(function(){return t(i._element).trigger(m)},0)}).emulateTransitionEnd(600)):(t(o).removeClass(f.ACTIVE),t(a).addClass(f.ACTIVE),this._isSliding=!1,t(this._element).trigger(m)),h&&this.cycle()}},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(s),o=t.extend({},h,t(this).data());"object"===(void 0===e?"undefined":i(e))&&t.extend(o,e);var r="string"==typeof e?e:o.slide;if(n||(n=new l(this,o),t(this).data(s,n)),"number"==typeof e)n.to(e);else if("string"==typeof r){if(void 0===n[r])throw new Error('No method named "'+r+'"');n[r]()}else o.interval&&(n.pause(),n.cycle())})},l._dataApiClickHandler=function(e){var n=r.getSelectorFromElement(this);if(n){var i=t(n)[0];if(i&&t(i).hasClass(f.CAROUSEL)){var o=t.extend({},t(i).data(),t(this).data()),a=this.getAttribute("data-slide-to");a&&(o.interval=!1),l._jQueryInterface.call(t(i),o),a&&t(i).data(s).to(a),e.preventDefault()}}},o(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return h}}]),l}();t(document).on(d.CLICK_DATA_API,p.DATA_SLIDE,_._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(p.DATA_RIDE).each(function(){var e=t(this);_._jQueryInterface.call(e,e.data())})}),t.fn[e]=_._jQueryInterface,t.fn[e].Constructor=_,t.fn[e].noConflict=function(){return t.fn[e]=l,_._jQueryInterface}}(jQuery),function(t){var e="collapse",s="bs.collapse",a=t.fn[e],l={toggle:!0,parent:""},h={toggle:"boolean",parent:"string"},c={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},u={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},d={WIDTH:"width",HEIGHT:"height"},f={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},p=function(){function a(e,i){n(this,a),this._isTransitioning=!1,this._element=e,this._config=this._getConfig(i),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var o=t(f.DATA_TOGGLE),s=0;s<o.length;s++){var l=o[s],h=r.getSelectorFromElement(l);null!==h&&t(h).filter(e).length>0&&this._triggerArray.push(l)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return a.prototype.toggle=function(){t(this._element).hasClass(u.SHOW)?this.hide():this.show()},a.prototype.show=function(){var e=this;if(!this._isTransitioning&&!t(this._element).hasClass(u.SHOW)){var n=void 0,i=void 0;if(this._parent&&((n=t.makeArray(t(this._parent).children().children(f.ACTIVES))).length||(n=null)),!(n&&(i=t(n).data(s))&&i._isTransitioning)){var o=t.Event(c.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){n&&(a._jQueryInterface.call(t(n),"hide"),i||t(n).data(s,null));var l=this._getDimension();t(this._element).removeClass(u.COLLAPSE).addClass(u.COLLAPSING),this._element.style[l]=0,this._triggerArray.length&&t(this._triggerArray).removeClass(u.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var h=function(){t(e._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).addClass(u.SHOW),e._element.style[l]="",e.setTransitioning(!1),t(e._element).trigger(c.SHOWN)};if(r.supportsTransitionEnd()){var d="scroll"+(l[0].toUpperCase()+l.slice(1));t(this._element).one(r.TRANSITION_END,h).emulateTransitionEnd(600),this._element.style[l]=this._element[d]+"px"}else h()}}}},a.prototype.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(u.SHOW)){var n=t.Event(c.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",r.reflow(this._element),t(this._element).addClass(u.COLLAPSING).removeClass(u.COLLAPSE).removeClass(u.SHOW),this._triggerArray.length)for(var o=0;o<this._triggerArray.length;o++){var s=this._triggerArray[o],a=r.getSelectorFromElement(s);null!==a&&(t(a).hasClass(u.SHOW)||t(s).addClass(u.COLLAPSED).attr("aria-expanded",!1))}this.setTransitioning(!0);var l=function(){e.setTransitioning(!1),t(e._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).trigger(c.HIDDEN)};this._element.style[i]="",r.supportsTransitionEnd()?t(this._element).one(r.TRANSITION_END,l).emulateTransitionEnd(600):l()}}},a.prototype.setTransitioning=function(t){this._isTransitioning=t},a.prototype.dispose=function(){t.removeData(this._element,s),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},a.prototype._getConfig=function(n){return n=t.extend({},l,n),n.toggle=Boolean(n.toggle),r.typeCheckConfig(e,n,h),n},a.prototype._getDimension=function(){return t(this._element).hasClass(d.WIDTH)?d.WIDTH:d.HEIGHT},a.prototype._getParent=function(){var e=this,n=t(this._config.parent)[0],i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(i).each(function(t,n){e._addAriaAndCollapsedClass(a._getTargetFromElement(n),[n])}),n},a.prototype._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(u.SHOW);n.length&&t(n).toggleClass(u.COLLAPSED,!i).attr("aria-expanded",i)}},a._getTargetFromElement=function(e){var n=r.getSelectorFromElement(e);return n?t(n)[0]:null},a._jQueryInterface=function(e){return this.each(function(){var n=t(this),o=n.data(s),r=t.extend({},l,n.data(),"object"===(void 0===e?"undefined":i(e))&&e);if(!o&&r.toggle&&/show|hide/.test(e)&&(r.toggle=!1),o||(o=new a(this,r),n.data(s,o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return l}}]),a}();t(document).on(c.CLICK_DATA_API,f.DATA_TOGGLE,function(e){/input|textarea/i.test(e.target.tagName)||e.preventDefault();var n=t(this),i=r.getSelectorFromElement(this);t(i).each(function(){var e=t(this),i=e.data(s)?"toggle":n.data();p._jQueryInterface.call(e,i)})}),t.fn[e]=p._jQueryInterface,t.fn[e].Constructor=p,t.fn[e].noConflict=function(){return t.fn[e]=a,p._jQueryInterface}}(jQuery),function(t){if("undefined"==typeof Popper)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var e="dropdown",s="bs.dropdown",a="."+s,l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK:"click"+a,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},u={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left"},d={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled)"},f={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end"},p={placement:f.BOTTOM,offset:0,flip:!0},_={placement:"string",offset:"(number|string)",flip:"boolean"},g=function(){function l(t,e){n(this,l),this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}return l.prototype.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u.DISABLED)){var e=l._getParentFromElement(this._element),n=t(this._menu).hasClass(u.SHOW);if(l._clearMenus(),!n){var i={relatedTarget:this._element},o=t.Event(c.SHOW,i);if(t(e).trigger(o),!o.isDefaultPrevented()){var r=this._element;t(e).hasClass(u.DROPUP)&&(t(this._menu).hasClass(u.MENULEFT)||t(this._menu).hasClass(u.MENURIGHT))&&(r=e),this._popper=new Popper(r,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!t(e).closest(d.NAVBAR_NAV).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(u.SHOW),t(e).toggleClass(u.SHOW).trigger(t.Event(c.SHOWN,i))}}}},l.prototype.dispose=function(){t.removeData(this._element,s),t(this._element).off(a),this._element=null,this._menu=null,null!==this._popper&&this._popper.destroy(),this._popper=null},l.prototype.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l.prototype._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l.prototype._getConfig=function(n){var i=t(this._element).data();return void 0!==i.placement&&(i.placement=f[i.placement.toUpperCase()]),n=t.extend({},this.constructor.Default,t(this._element).data(),n),r.typeCheckConfig(e,n,this.constructor.DefaultType),n},l.prototype._getMenuElement=function(){if(!this._menu){var e=l._getParentFromElement(this._element);this._menu=t(e).find(d.MENU)[0]}return this._menu},l.prototype._getPlacement=function(){var e=t(this._element).parent(),n=this._config.placement;return e.hasClass(u.DROPUP)||this._config.placement===f.TOP?(n=f.TOP,t(this._menu).hasClass(u.MENURIGHT)&&(n=f.TOPEND)):t(this._menu).hasClass(u.MENURIGHT)&&(n=f.BOTTOMEND),n},l.prototype._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l.prototype._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:{offset:this._config.offset},flip:{enabled:this._config.flip}}};return this._inNavbar&&(t.modifiers.applyStyle={enabled:!this._inNavbar}),t},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(s),o="object"===(void 0===e?"undefined":i(e))?e:null;if(n||(n=new l(this,o),t(this).data(s,n)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},l._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(d.DATA_TOGGLE)),i=0;i<n.length;i++){var o=l._getParentFromElement(n[i]),r=t(n[i]).data(s),a={relatedTarget:n[i]};if(r){var h=r._menu;if(t(o).hasClass(u.SHOW)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(o,e.target))){var f=t.Event(c.HIDE,a);t(o).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[i].setAttribute("aria-expanded","false"),t(h).removeClass(u.SHOW),t(o).removeClass(u.SHOW).trigger(t.Event(c.HIDDEN,a)))}}}},l._getParentFromElement=function(e){var n=void 0,i=r.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},l._dataApiKeydownHandler=function(e){if(!(!h.test(e.which)||/button/i.test(e.target.tagName)&&32===e.which||/input|textarea/i.test(e.target.tagName)||(e.preventDefault(),e.stopPropagation(),this.disabled||t(this).hasClass(u.DISABLED)))){var n=l._getParentFromElement(this),i=t(n).hasClass(u.SHOW);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var o=t(n).find(d.VISIBLE_ITEMS).get();if(o.length){var r=o.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<o.length-1&&r++,r<0&&(r=0),o[r].focus()}}else{if(27===e.which){var s=t(n).find(d.DATA_TOGGLE)[0];t(s).trigger("focus")}t(this).trigger("click")}}},o(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return p}},{key:"DefaultType",get:function(){return _}}]),l}();t(document).on(c.KEYDOWN_DATA_API,d.DATA_TOGGLE,g._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,d.MENU,g._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,g._clearMenus).on(c.CLICK_DATA_API,d.DATA_TOGGLE,function(e){e.preventDefault(),e.stopPropagation(),g._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,d.FORM_CHILD,function(t){t.stopPropagation()}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=l,g._jQueryInterface}}(jQuery),function(t){var e="modal",s=".bs.modal",a=t.fn[e],l={backdrop:!0,keyboard:!0,focus:!0,show:!0},h={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},c={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},u={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},d={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},f=function(){function a(e,i){n(this,a),this._config=this._getConfig(i),this._element=e,this._dialog=t(e).find(d.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return a.prototype.toggle=function(t){return this._isShown?this.hide():this.show(t)},a.prototype.show=function(e){var n=this;if(!this._isTransitioning){r.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE)&&(this._isTransitioning=!0);var i=t.Event(c.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),t(document.body).addClass(u.OPEN),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(c.CLICK_DISMISS,d.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(c.MOUSEDOWN_DISMISS,function(){t(n._element).one(c.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},a.prototype.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=r.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE);i&&(this._isTransitioning=!0);var o=t.Event(c.HIDE);t(this._element).trigger(o),this._isShown&&!o.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),t(document).off(c.FOCUSIN),t(this._element).removeClass(u.SHOW),t(this._element).off(c.CLICK_DISMISS),t(this._dialog).off(c.MOUSEDOWN_DISMISS),i?t(this._element).one(r.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal())}},a.prototype.dispose=function(){t.removeData(this._element,"bs.modal"),t(window,document,this._element,this._backdrop).off(s),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},a.prototype.handleUpdate=function(){this._adjustDialog()},a.prototype._getConfig=function(n){return n=t.extend({},l,n),r.typeCheckConfig(e,n,h),n},a.prototype._showElement=function(e){var n=this,i=r.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&r.reflow(this._element),t(this._element).addClass(u.SHOW),this._config.focus&&this._enforceFocus();var o=t.Event(c.SHOWN,{relatedTarget:e}),s=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(o)};i?t(this._dialog).one(r.TRANSITION_END,s).emulateTransitionEnd(300):s()},a.prototype._enforceFocus=function(){var e=this;t(document).off(c.FOCUSIN).on(c.FOCUSIN,function(n){document===n.target||e._element===n.target||t(e._element).has(n.target).length||e._element.focus()})},a.prototype._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(c.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(c.KEYDOWN_DISMISS)},a.prototype._setResizeEvent=function(){var e=this;this._isShown?t(window).on(c.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(c.RESIZE)},a.prototype._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(u.OPEN),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(c.HIDDEN)})},a.prototype._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},a.prototype._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(u.FADE)?u.FADE:"";if(this._isShown&&this._config.backdrop){var o=r.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u.BACKDROP,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(c.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),o&&r.reflow(this._backdrop),t(this._backdrop).addClass(u.SHOW),!e)return;if(!o)return void e();t(this._backdrop).one(r.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(u.SHOW);var s=function(){n._removeBackdrop(),e&&e()};r.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE)?t(this._backdrop).one(r.TRANSITION_END,s).emulateTransitionEnd(150):s()}else e&&e()},a.prototype._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},a.prototype._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},a.prototype._checkScrollbar=function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},a.prototype._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(d.FIXED_CONTENT).each(function(n,i){var o=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",o).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(d.NAVBAR_TOGGLER).each(function(n,i){var o=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",o).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},a.prototype._resetScrollbar=function(){t(d.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");void 0!==i&&t(n).css("padding-right",i).removeData("padding-right")}),t(d.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");void 0!==i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");void 0!==e&&t("body").css("padding-right",e).removeData("padding-right")},a.prototype._getScrollbarWidth=function(){var t=document.createElement("div");t.className=u.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},a._jQueryInterface=function(e,n){return this.each(function(){var o=t(this).data("bs.modal"),r=t.extend({},a.Default,t(this).data(),"object"===(void 0===e?"undefined":i(e))&&e);if(o||(o=new a(this,r),t(this).data("bs.modal",o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e](n)}else r.show&&o.show(n)})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return l}}]),a}();t(document).on(c.CLICK_DATA_API,d.DATA_TOGGLE,function(e){var n=this,i=void 0,o=r.getSelectorFromElement(this);o&&(i=t(o)[0]);var s=t(i).data("bs.modal")?"toggle":t.extend({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var a=t(i).one(c.SHOW,function(e){e.isDefaultPrevented()||a.one(c.HIDDEN,function(){t(n).is(":visible")&&n.focus()})});f._jQueryInterface.call(t(i),s,this)}),t.fn[e]=f._jQueryInterface,t.fn[e].Constructor=f,t.fn[e].noConflict=function(){return t.fn[e]=a,f._jQueryInterface}}(jQuery),function(t){var e="scrollspy",s=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},c={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},u={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d={OFFSET:"offset",POSITION:"position"},f=function(){function s(e,i){var o=this;n(this,s),this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(i),this._selector=this._config.target+" "+u.NAV_LINKS+","+this._config.target+" "+u.LIST_ITEMS+","+this._config.target+" "+u.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return o._process(t)}),this.refresh(),this._process()}return s.prototype.refresh=function(){var e=this,n=this._scrollElement!==this._scrollElement.window?d.POSITION:d.OFFSET,i="auto"===this._config.method?n:this._config.method,o=i===d.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n=void 0,s=r.getSelectorFromElement(e);if(s&&(n=t(s)[0]),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[t(n)[i]().top+o,s]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},s.prototype.dispose=function(){t.removeData(this._element,"bs.scrollspy"),t(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},s.prototype._getConfig=function(n){if("string"!=typeof(n=t.extend({},a,n)).target){var i=t(n.target).attr("id");i||(i=r.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return r.typeCheckConfig(e,n,l),n},s.prototype._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},s.prototype._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},s.prototype._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},s.prototype._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}},s.prototype._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c.DROPDOWN_ITEM)?(i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c.ACTIVE),i.addClass(c.ACTIVE)):(i.addClass(c.ACTIVE),i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS+", "+u.LIST_ITEMS).addClass(c.ACTIVE)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},s.prototype._clear=function(){t(this._selector).filter(u.ACTIVE).removeClass(c.ACTIVE)},s._jQueryInterface=function(e){return this.each(function(){var n=t(this).data("bs.scrollspy"),o="object"===(void 0===e?"undefined":i(e))&&e;if(n||(n=new s(this,o),t(this).data("bs.scrollspy",n)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},o(s,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return a}}]),s}();t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(u.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);f._jQueryInterface.call(i,i.data())}}),t.fn[e]=f._jQueryInterface,t.fn[e].Constructor=f,t.fn[e].noConflict=function(){return t.fn[e]=s,f._jQueryInterface}}(jQuery),function(t){var e=t.fn.tab,i={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},s={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},a={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},l=function(){function e(t){n(this,e),this._element=t}return e.prototype.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(s.ACTIVE)||t(this._element).hasClass(s.DISABLED))){var n=void 0,o=void 0,l=t(this._element).closest(a.NAV_LIST_GROUP)[0],h=r.getSelectorFromElement(this._element);l&&(o=t.makeArray(t(l).find(a.ACTIVE)),o=o[o.length-1]);var c=t.Event(i.HIDE,{relatedTarget:this._element}),u=t.Event(i.SHOW,{relatedTarget:o});if(o&&t(o).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){h&&(n=t(h)[0]),this._activate(this._element,l);var d=function(){var n=t.Event(i.HIDDEN,{relatedTarget:e._element}),r=t.Event(i.SHOWN,{relatedTarget:o});t(o).trigger(n),t(e._element).trigger(r)};n?this._activate(n,n.parentNode,d):d()}}},e.prototype.dispose=function(){t.removeData(this._element,"bs.tab"),this._element=null},e.prototype._activate=function(e,n,i){var o=this,l=t(n).find(a.ACTIVE)[0],h=i&&r.supportsTransitionEnd()&&l&&t(l).hasClass(s.FADE),c=function(){return o._transitionComplete(e,l,h,i)};l&&h?t(l).one(r.TRANSITION_END,c).emulateTransitionEnd(150):c(),l&&t(l).removeClass(s.SHOW)},e.prototype._transitionComplete=function(e,n,i,o){if(n){t(n).removeClass(s.ACTIVE);var l=t(n.parentNode).find(a.DROPDOWN_ACTIVE_CHILD)[0];l&&t(l).removeClass(s.ACTIVE),n.setAttribute("aria-expanded",!1)}if(t(e).addClass(s.ACTIVE),e.setAttribute("aria-expanded",!0),i?(r.reflow(e),t(e).addClass(s.SHOW)):t(e).removeClass(s.FADE),e.parentNode&&t(e.parentNode).hasClass(s.DROPDOWN_MENU)){var h=t(e).closest(a.DROPDOWN)[0];h&&t(h).find(a.DROPDOWN_TOGGLE).addClass(s.ACTIVE),e.setAttribute("aria-expanded",!0)}o&&o()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data("bs.tab");if(o||(o=new e(this),i.data("bs.tab",o)),"string"==typeof n){if(void 0===o[n])throw new Error('No method named "'+n+'"');o[n]()}})},o(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),e}();t(document).on(i.CLICK_DATA_API,a.DATA_TOGGLE,function(e){e.preventDefault(),l._jQueryInterface.call(t(this),"show")}),t.fn.tab=l._jQueryInterface,t.fn.tab.Constructor=l,t.fn.tab.noConflict=function(){return t.fn.tab=e,l._jQueryInterface}}(jQuery),function(t){if("undefined"==typeof Popper)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var e="tooltip",s=".bs.tooltip",a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip"},d={SHOW:"show",OUT:"out"},f={HIDE:"hide"+s,HIDDEN:"hidden"+s,SHOW:"show"+s,SHOWN:"shown"+s,INSERTED:"inserted"+s,CLICK:"click"+s,FOCUSIN:"focusin"+s,FOCUSOUT:"focusout"+s,MOUSEENTER:"mouseenter"+s,MOUSELEAVE:"mouseleave"+s},p={FADE:"fade",SHOW:"show"},_={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},g={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},m=function(){function a(t,e){n(this,a),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}return a.prototype.enable=function(){this._isEnabled=!0},a.prototype.disable=function(){this._isEnabled=!1},a.prototype.toggleEnabled=function(){this._isEnabled=!this._isEnabled},a.prototype.toggle=function(e){if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p.SHOW))return void this._leave(null,this);this._enter(null,this)}},a.prototype.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},a.prototype.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var n=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(n);var i=t.contains(this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!i)return;var o=this.getTipElement(),s=r.getUID(this.constructor.NAME);o.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&t(o).addClass(p.FADE);var l="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(o).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(o).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Popper(this.element,o,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:_.ARROW}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(o).addClass(p.SHOW),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d.OUT&&e._leave(null,e)};r.supportsTransitionEnd()&&t(this.tip).hasClass(p.FADE)?t(this.tip).one(r.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},a.prototype.hide=function(e){var n=this,i=this.getTipElement(),o=t.Event(this.constructor.Event.HIDE),s=function(){n._hoverState!==d.SHOW&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(o),o.isDefaultPrevented()||(t(i).removeClass(p.SHOW),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[g.CLICK]=!1,this._activeTrigger[g.FOCUS]=!1,this._activeTrigger[g.HOVER]=!1,r.supportsTransitionEnd()&&t(this.tip).hasClass(p.FADE)?t(i).one(r.TRANSITION_END,s).emulateTransitionEnd(150):s(),this._hoverState="")},a.prototype.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},a.prototype.isWithContent=function(){return Boolean(this.getTitle())},a.prototype.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},a.prototype.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0]},a.prototype.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(_.TOOLTIP_INNER),this.getTitle()),e.removeClass(p.FADE+" "+p.SHOW)},a.prototype.setElementContent=function(e,n){var o=this.config.html;"object"===(void 0===n?"undefined":i(n))&&(n.nodeType||n.jquery)?o?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[o?"html":"text"](n)},a.prototype.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},a.prototype._getAttachment=function(t){return c[t.toUpperCase()]},a.prototype._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==g.MANUAL){var i=n===g.HOVER?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,o=n===g.HOVER?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(o,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=t.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},a.prototype._fixTitle=function(){var t=i(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},a.prototype._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?g.FOCUS:g.HOVER]=!0),t(n.getTipElement()).hasClass(p.SHOW)||n._hoverState===d.SHOW?n._hoverState=d.SHOW:(clearTimeout(n._timeout),n._hoverState=d.SHOW,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===d.SHOW&&n.show()},n.config.delay.show):n.show())},a.prototype._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?g.FOCUS:g.HOVER]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d.OUT,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d.OUT&&n.hide()},n.config.delay.hide):n.hide())},a.prototype._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},a.prototype._getConfig=function(n){return(n=t.extend({},this.constructor.Default,t(this.element).data(),n)).delay&&"number"==typeof n.delay&&(n.delay={show:n.delay,hide:n.delay}),n.title&&"number"==typeof n.title&&(n.title=n.title.toString()),n.content&&"number"==typeof n.content&&(n.content=n.content.toString()),r.typeCheckConfig(e,n,this.constructor.DefaultType),n},a.prototype._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},a.prototype._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},a.prototype._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},a.prototype._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(p.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data("bs.tooltip"),o="object"===(void 0===e?"undefined":i(e))&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,o),t(this).data("bs.tooltip",n)),"string"==typeof e)){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return f}},{key:"EVENT_KEY",get:function(){return s}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=a,m._jQueryInterface},m}(jQuery));!function(r){var a="popover",l=".bs.popover",h=r.fn[a],c=new RegExp("(^|\\s)bs-popover\\S+","g"),u=r.extend({},s.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),d=r.extend({},s.DefaultType,{content:"(string|element|function)"}),f={FADE:"fade",SHOW:"show"},p={TITLE:".popover-header",CONTENT:".popover-body"},_={HIDE:"hide"+l,HIDDEN:"hidden"+l,SHOW:"show"+l,SHOWN:"shown"+l,INSERTED:"inserted"+l,CLICK:"click"+l,FOCUSIN:"focusin"+l,FOCUSOUT:"focusout"+l,MOUSEENTER:"mouseenter"+l,MOUSELEAVE:"mouseleave"+l},g=function(s){function h(){return n(this,h),t(this,s.apply(this,arguments))}return e(h,s),h.prototype.isWithContent=function(){return this.getTitle()||this._getContent()},h.prototype.addAttachmentClass=function(t){r(this.getTipElement()).addClass("bs-popover-"+t)},h.prototype.getTipElement=function(){return this.tip=this.tip||r(this.config.template)[0]},h.prototype.setContent=function(){var t=r(this.getTipElement());this.setElementContent(t.find(p.TITLE),this.getTitle()),this.setElementContent(t.find(p.CONTENT),this._getContent()),t.removeClass(f.FADE+" "+f.SHOW)},h.prototype._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},h.prototype._cleanTipClass=function(){var t=r(this.getTipElement()),e=t.attr("class").match(c);null!==e&&e.length>0&&t.removeClass(e.join(""))},h._jQueryInterface=function(t){return this.each(function(){var e=r(this).data("bs.popover"),n="object"===(void 0===t?"undefined":i(t))?t:null;if((e||!/destroy|hide/.test(t))&&(e||(e=new h(this,n),r(this).data("bs.popover",e)),"string"==typeof t)){if(void 0===e[t])throw new Error('No method named "'+t+'"');e[t]()}})},o(h,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return a}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return l}},{key:"DefaultType",get:function(){return d}}]),h}(s);r.fn[a]=g._jQueryInterface,r.fn[a].Constructor=g,r.fn[a].noConflict=function(){return r.fn[a]=h,g._jQueryInterface}}(jQuery)}();
/**
 * lc_switch.js
 * Version: 1.0
 * Author: LCweb - Luca Montanari
 * Website: http://www.lcweb.it
 * Licensed under the MIT license
 */

(function(a){if("undefined"!=typeof a.fn.lc_switch)return!1;a.fn.lc_switch=function(d,f){a.fn.lcs_destroy=function(){a(this).each(function(){a(this).parents(".lcs_wrap").children().not("input").remove();a(this).unwrap()});return!0};a.fn.lcs_on=function(){a(this).each(function(){var b=a(this).parents(".lcs_wrap"),c=b.find("input");"function"==typeof a.fn.prop?b.find("input").prop("checked",!0):b.find("input").attr("checked",!0);b.find("input").trigger("lcs-on");b.find("input").trigger("lcs-statuschange");
b.find(".lcs_switch").removeClass("lcs_off").addClass("lcs_on");if(b.find(".lcs_switch").hasClass("lcs_radio_switch")){var d=c.attr("name");b.parents("form").find("input[name="+d+"]").not(c).lcs_off()}});return!0};a.fn.lcs_off=function(){a(this).each(function(){var b=a(this).parents(".lcs_wrap");"function"==typeof a.fn.prop?b.find("input").prop("checked",!1):b.find("input").attr("checked",!1);b.find("input").trigger("lcs-off");b.find("input").trigger("lcs-statuschange");b.find(".lcs_switch").removeClass("lcs_on").addClass("lcs_off")});
return!0};return this.each(function(){if(!a(this).parent().hasClass("lcs_wrap")){var b="undefined"==typeof d?"ON":d,c="undefined"==typeof f?"OFF":f,b=b?'<div class="lcs_label lcs_label_on">'+b+"</div>":"",c=c?'<div class="lcs_label lcs_label_off">'+c+"</div>":"",g=a(this).is(":disabled")?!0:!1,e=a(this).is(":checked")?!0:!1,e=""+(e?" lcs_on":" lcs_off");g&&(e+=" lcs_disabled");b='<div class="lcs_switch '+e+'"><div class="lcs_cursor"></div>'+b+c+"</div>";!a(this).is(":input")||"checkbox"!=a(this).attr("type")&&
"radio"!=a(this).attr("type")||(a(this).wrap('<div class="lcs_wrap"></div>'),a(this).parent().append(b),a(this).parent().find(".lcs_switch").addClass("lcs_"+a(this).attr("type")+"_switch"))}})};a(document).ready(function(){a(document).delegate(".lcs_switch:not(.lcs_disabled)","click tap",function(d){a(this).hasClass("lcs_on")?a(this).hasClass("lcs_radio_switch")||a(this).lcs_off():a(this).lcs_on()});a(document).delegate(".lcs_wrap input","change",function(){a(this).is(":checked")?a(this).lcs_on():
a(this).lcs_off()})})})(jQuery);

/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

/**
 * @author trixta
 * @version 1.2
 */
(function($){

var mwheelI = {
			pos: [-260, -260]
		},
	minDif 	= 3,
	doc 	= document,
	root 	= doc.documentElement,
	body 	= doc.body,
	longDelay, shortDelay
;

function unsetPos(){
	if(this === mwheelI.elem){
		mwheelI.pos = [-260, -260];
		mwheelI.elem = false;
		minDif = 3;
	}
}

$.event.special.mwheelIntent = {
	setup: function(){
		var jElm = $(this).bind('mousewheel', $.event.special.mwheelIntent.handler);
		if( this !== doc && this !== root && this !== body ){
			jElm.bind('mouseleave', unsetPos);
		}
		jElm = null;
        return true;
    },
	teardown: function(){
        $(this)
			.unbind('mousewheel', $.event.special.mwheelIntent.handler)
			.unbind('mouseleave', unsetPos)
		;
        return true;
    },
    handler: function(e, d){
		var pos = [e.clientX, e.clientY];
		if( this === mwheelI.elem || Math.abs(mwheelI.pos[0] - pos[0]) > minDif || Math.abs(mwheelI.pos[1] - pos[1]) > minDif ){
            mwheelI.elem = this;
			mwheelI.pos = pos;
			minDif = 250;
			
			clearTimeout(shortDelay);
			shortDelay = setTimeout(function(){
				minDif = 10;
			}, 200);
			clearTimeout(longDelay);
			longDelay = setTimeout(function(){
				minDif = 3;
			}, 1500);
			e = $.extend({}, e, {type: 'mwheelIntent'});
            return ($.event.dispatch || $.event.handle).apply(this, arguments);
		}
    }
};
$.fn.extend({
	mwheelIntent: function(fn) {
		return fn ? this.bind("mwheelIntent", fn) : this.trigger("mwheelIntent");
	},
	
	unmwheelIntent: function(fn) {
		return this.unbind("mwheelIntent", fn);
	}
});

$(function(){
	body = doc.body;
	//assume that document is always scrollable, doesn't hurt if not
	$(doc).bind('mwheelIntent.mwheelIntentDefault', $.noop);
});
})(jQuery);

/*!
 * jScrollPane - v2.0.23 - 2016-01-28
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2014 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.fn.jScrollPane=function(b){function c(b,c){function d(c){var f,h,j,k,l,o,p=!1,q=!1;if(N=c,void 0===O)l=b.scrollTop(),o=b.scrollLeft(),b.css({overflow:"hidden",padding:0}),P=b.innerWidth()+rb,Q=b.innerHeight(),b.width(P),O=a('<div class="jspPane" />').css("padding",qb).append(b.children()),R=a('<div class="jspContainer" />').css({width:P+"px",height:Q+"px"}).append(O).appendTo(b);else{if(b.css("width",""),p=N.stickToBottom&&A(),q=N.stickToRight&&B(),k=b.innerWidth()+rb!=P||b.outerHeight()!=Q,k&&(P=b.innerWidth()+rb,Q=b.innerHeight(),R.css({width:P+"px",height:Q+"px"})),!k&&sb==S&&O.outerHeight()==T)return void b.width(P);sb=S,O.css("width",""),b.width(P),R.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}O.css("overflow","auto"),S=c.contentWidth?c.contentWidth:O[0].scrollWidth,T=O[0].scrollHeight,O.css("overflow",""),U=S/P,V=T/Q,W=V>1,X=U>1,X||W?(b.addClass("jspScrollable"),f=N.maintainPosition&&($||bb),f&&(h=y(),j=z()),e(),g(),i(),f&&(w(q?S-P:h,!1),v(p?T-Q:j,!1)),F(),C(),L(),N.enableKeyboardNavigation&&H(),N.clickOnTrack&&m(),J(),N.hijackInternalLinks&&K()):(b.removeClass("jspScrollable"),O.css({top:0,left:0,width:R.width()-rb}),D(),G(),I(),n()),N.autoReinitialise&&!pb?pb=setInterval(function(){d(N)},N.autoReinitialiseDelay):!N.autoReinitialise&&pb&&clearInterval(pb),l&&b.scrollTop(0)&&v(l,!1),o&&b.scrollLeft(0)&&w(o,!1),b.trigger("jsp-initialised",[X||W])}function e(){W&&(R.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'),a('<div class="jspDragBottom" />'))),a('<div class="jspCap jspCapBottom" />'))),cb=R.find(">.jspVerticalBar"),db=cb.find(">.jspTrack"),Y=db.find(">.jspDrag"),N.showArrows&&(hb=a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",k(0,-1)).bind("click.jsp",E),ib=a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",k(0,1)).bind("click.jsp",E),N.arrowScrollOnHover&&(hb.bind("mouseover.jsp",k(0,-1,hb)),ib.bind("mouseover.jsp",k(0,1,ib))),j(db,N.verticalArrowPositions,hb,ib)),fb=Q,R.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){fb-=a(this).outerHeight()}),Y.hover(function(){Y.addClass("jspHover")},function(){Y.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",E),Y.addClass("jspActive");var c=b.pageY-Y.position().top;return a("html").bind("mousemove.jsp",function(a){p(a.pageY-c,!1)}).bind("mouseup.jsp mouseleave.jsp",o),!1}),f())}function f(){db.height(fb+"px"),$=0,eb=N.verticalGutter+db.outerWidth(),O.width(P-eb-rb);try{0===cb.position().left&&O.css("margin-left",eb+"px")}catch(a){}}function g(){X&&(R.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'),a('<div class="jspDragRight" />'))),a('<div class="jspCap jspCapRight" />'))),jb=R.find(">.jspHorizontalBar"),kb=jb.find(">.jspTrack"),_=kb.find(">.jspDrag"),N.showArrows&&(nb=a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",k(-1,0)).bind("click.jsp",E),ob=a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",k(1,0)).bind("click.jsp",E),N.arrowScrollOnHover&&(nb.bind("mouseover.jsp",k(-1,0,nb)),ob.bind("mouseover.jsp",k(1,0,ob))),j(kb,N.horizontalArrowPositions,nb,ob)),_.hover(function(){_.addClass("jspHover")},function(){_.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",E),_.addClass("jspActive");var c=b.pageX-_.position().left;return a("html").bind("mousemove.jsp",function(a){r(a.pageX-c,!1)}).bind("mouseup.jsp mouseleave.jsp",o),!1}),lb=R.innerWidth(),h())}function h(){R.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){lb-=a(this).outerWidth()}),kb.width(lb+"px"),bb=0}function i(){if(X&&W){var b=kb.outerHeight(),c=db.outerWidth();fb-=b,a(jb).find(">.jspCap:visible,>.jspArrow").each(function(){lb+=a(this).outerWidth()}),lb-=c,Q-=c,P-=b,kb.parent().append(a('<div class="jspCorner" />').css("width",b+"px")),f(),h()}X&&O.width(R.outerWidth()-rb+"px"),T=O.outerHeight(),V=T/Q,X&&(mb=Math.ceil(1/U*lb),mb>N.horizontalDragMaxWidth?mb=N.horizontalDragMaxWidth:mb<N.horizontalDragMinWidth&&(mb=N.horizontalDragMinWidth),_.width(mb+"px"),ab=lb-mb,s(bb)),W&&(gb=Math.ceil(1/V*fb),gb>N.verticalDragMaxHeight?gb=N.verticalDragMaxHeight:gb<N.verticalDragMinHeight&&(gb=N.verticalDragMinHeight),Y.height(gb+"px"),Z=fb-gb,q($))}function j(a,b,c,d){var e,f="before",g="after";"os"==b&&(b=/Mac/.test(navigator.platform)?"after":"split"),b==f?g=b:b==g&&(f=b,e=c,c=d,d=e),a[f](c)[g](d)}function k(a,b,c){return function(){return l(a,b,this,c),this.blur(),!1}}function l(b,c,d,e){d=a(d).addClass("jspActive");var f,g,h=!0,i=function(){0!==b&&tb.scrollByX(b*N.arrowButtonSpeed),0!==c&&tb.scrollByY(c*N.arrowButtonSpeed),g=setTimeout(i,h?N.initialDelay:N.arrowRepeatFreq),h=!1};i(),f=e?"mouseout.jsp":"mouseup.jsp",e=e||a("html"),e.bind(f,function(){d.removeClass("jspActive"),g&&clearTimeout(g),g=null,e.unbind(f)})}function m(){n(),W&&db.bind("mousedown.jsp",function(b){if(void 0===b.originalTarget||b.originalTarget==b.currentTarget){var c,d=a(this),e=d.offset(),f=b.pageY-e.top-$,g=!0,h=function(){var a=d.offset(),e=b.pageY-a.top-gb/2,j=Q*N.scrollPagePercent,k=Z*j/(T-Q);if(0>f)$-k>e?tb.scrollByY(-j):p(e);else{if(!(f>0))return void i();e>$+k?tb.scrollByY(j):p(e)}c=setTimeout(h,g?N.initialDelay:N.trackClickRepeatFreq),g=!1},i=function(){c&&clearTimeout(c),c=null,a(document).unbind("mouseup.jsp",i)};return h(),a(document).bind("mouseup.jsp",i),!1}}),X&&kb.bind("mousedown.jsp",function(b){if(void 0===b.originalTarget||b.originalTarget==b.currentTarget){var c,d=a(this),e=d.offset(),f=b.pageX-e.left-bb,g=!0,h=function(){var a=d.offset(),e=b.pageX-a.left-mb/2,j=P*N.scrollPagePercent,k=ab*j/(S-P);if(0>f)bb-k>e?tb.scrollByX(-j):r(e);else{if(!(f>0))return void i();e>bb+k?tb.scrollByX(j):r(e)}c=setTimeout(h,g?N.initialDelay:N.trackClickRepeatFreq),g=!1},i=function(){c&&clearTimeout(c),c=null,a(document).unbind("mouseup.jsp",i)};return h(),a(document).bind("mouseup.jsp",i),!1}})}function n(){kb&&kb.unbind("mousedown.jsp"),db&&db.unbind("mousedown.jsp")}function o(){a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),Y&&Y.removeClass("jspActive"),_&&_.removeClass("jspActive")}function p(c,d){if(W){0>c?c=0:c>Z&&(c=Z);var e=new a.Event("jsp-will-scroll-y");if(b.trigger(e,[c]),!e.isDefaultPrevented()){var f=c||0,g=0===f,h=f==Z,i=c/Z,j=-i*(T-Q);void 0===d&&(d=N.animateScroll),d?tb.animate(Y,"top",c,q,function(){b.trigger("jsp-user-scroll-y",[-j,g,h])}):(Y.css("top",c),q(c),b.trigger("jsp-user-scroll-y",[-j,g,h]))}}}function q(a){void 0===a&&(a=Y.position().top),R.scrollTop(0),$=a||0;var c=0===$,d=$==Z,e=a/Z,f=-e*(T-Q);(ub!=c||wb!=d)&&(ub=c,wb=d,b.trigger("jsp-arrow-change",[ub,wb,vb,xb])),t(c,d),O.css("top",f),b.trigger("jsp-scroll-y",[-f,c,d]).trigger("scroll")}function r(c,d){if(X){0>c?c=0:c>ab&&(c=ab);var e=new a.Event("jsp-will-scroll-x");if(b.trigger(e,[c]),!e.isDefaultPrevented()){var f=c||0,g=0===f,h=f==ab,i=c/ab,j=-i*(S-P);void 0===d&&(d=N.animateScroll),d?tb.animate(_,"left",c,s,function(){b.trigger("jsp-user-scroll-x",[-j,g,h])}):(_.css("left",c),s(c),b.trigger("jsp-user-scroll-x",[-j,g,h]))}}}function s(a){void 0===a&&(a=_.position().left),R.scrollTop(0),bb=a||0;var c=0===bb,d=bb==ab,e=a/ab,f=-e*(S-P);(vb!=c||xb!=d)&&(vb=c,xb=d,b.trigger("jsp-arrow-change",[ub,wb,vb,xb])),u(c,d),O.css("left",f),b.trigger("jsp-scroll-x",[-f,c,d]).trigger("scroll")}function t(a,b){N.showArrows&&(hb[a?"addClass":"removeClass"]("jspDisabled"),ib[b?"addClass":"removeClass"]("jspDisabled"))}function u(a,b){N.showArrows&&(nb[a?"addClass":"removeClass"]("jspDisabled"),ob[b?"addClass":"removeClass"]("jspDisabled"))}function v(a,b){var c=a/(T-Q);p(c*Z,b)}function w(a,b){var c=a/(S-P);r(c*ab,b)}function x(b,c,d){var e,f,g,h,i,j,k,l,m,n=0,o=0;try{e=a(b)}catch(p){return}for(f=e.outerHeight(),g=e.outerWidth(),R.scrollTop(0),R.scrollLeft(0);!e.is(".jspPane");)if(n+=e.position().top,o+=e.position().left,e=e.offsetParent(),/^body|html$/i.test(e[0].nodeName))return;h=z(),j=h+Q,h>n||c?l=n-N.horizontalGutter:n+f>j&&(l=n-Q+f+N.horizontalGutter),isNaN(l)||v(l,d),i=y(),k=i+P,i>o||c?m=o-N.horizontalGutter:o+g>k&&(m=o-P+g+N.horizontalGutter),isNaN(m)||w(m,d)}function y(){return-O.position().left}function z(){return-O.position().top}function A(){var a=T-Q;return a>20&&a-z()<10}function B(){var a=S-P;return a>20&&a-y()<10}function C(){R.unbind(zb).bind(zb,function(a,b,c,d){bb||(bb=0),$||($=0);var e=bb,f=$,g=a.deltaFactor||N.mouseWheelSpeed;return tb.scrollBy(c*g,-d*g,!1),e==bb&&f==$})}function D(){R.unbind(zb)}function E(){return!1}function F(){O.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(a){x(a.target,!1)})}function G(){O.find(":input,a").unbind("focus.jsp")}function H(){function c(){var a=bb,b=$;switch(d){case 40:tb.scrollByY(N.keyboardSpeed,!1);break;case 38:tb.scrollByY(-N.keyboardSpeed,!1);break;case 34:case 32:tb.scrollByY(Q*N.scrollPagePercent,!1);break;case 33:tb.scrollByY(-Q*N.scrollPagePercent,!1);break;case 39:tb.scrollByX(N.keyboardSpeed,!1);break;case 37:tb.scrollByX(-N.keyboardSpeed,!1)}return e=a!=bb||b!=$}var d,e,f=[];X&&f.push(jb[0]),W&&f.push(cb[0]),O.bind("focus.jsp",function(){b.focus()}),b.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(b){if(b.target===this||f.length&&a(b.target).closest(f).length){var g=bb,h=$;switch(b.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:d=b.keyCode,c();break;case 35:v(T-Q),d=null;break;case 36:v(0),d=null}return e=b.keyCode==d&&g!=bb||h!=$,!e}}).bind("keypress.jsp",function(b){return b.keyCode==d&&c(),b.target===this||f.length&&a(b.target).closest(f).length?!e:void 0}),N.hideFocus?(b.css("outline","none"),"hideFocus"in R[0]&&b.attr("hideFocus",!0)):(b.css("outline",""),"hideFocus"in R[0]&&b.attr("hideFocus",!1))}function I(){b.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"),O.unbind(".jsp")}function J(){if(location.hash&&location.hash.length>1){var b,c,d=escape(location.hash.substr(1));try{b=a("#"+d+', a[name="'+d+'"]')}catch(e){return}b.length&&O.find(d)&&(0===R.scrollTop()?c=setInterval(function(){R.scrollTop()>0&&(x(b,!0),a(document).scrollTop(R.position().top),clearInterval(c))},50):(x(b,!0),a(document).scrollTop(R.position().top)))}}function K(){a(document.body).data("jspHijack")||(a(document.body).data("jspHijack",!0),a(document.body).delegate('a[href*="#"]',"click",function(b){var c,d,e,f,g,h,i=this.href.substr(0,this.href.indexOf("#")),j=location.href;if(-1!==location.href.indexOf("#")&&(j=location.href.substr(0,location.href.indexOf("#"))),i===j){c=escape(this.href.substr(this.href.indexOf("#")+1));try{d=a("#"+c+', a[name="'+c+'"]')}catch(k){return}d.length&&(e=d.closest(".jspScrollable"),f=e.data("jsp"),f.scrollToElement(d,!0),e[0].scrollIntoView&&(g=a(window).scrollTop(),h=d.offset().top,(g>h||h>g+a(window).height())&&e[0].scrollIntoView()),b.preventDefault())}}))}function L(){var a,b,c,d,e,f=!1;R.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(g){var h=g.originalEvent.touches[0];a=y(),b=z(),c=h.pageX,d=h.pageY,e=!1,f=!0}).bind("touchmove.jsp",function(g){if(f){var h=g.originalEvent.touches[0],i=bb,j=$;return tb.scrollTo(a+c-h.pageX,b+d-h.pageY),e=e||Math.abs(c-h.pageX)>5||Math.abs(d-h.pageY)>5,i==bb&&j==$}}).bind("touchend.jsp",function(){f=!1}).bind("click.jsp-touchclick",function(){return e?(e=!1,!1):void 0})}function M(){var a=z(),c=y();b.removeClass("jspScrollable").unbind(".jsp"),O.unbind(".jsp"),b.replaceWith(yb.append(O.children())),yb.scrollTop(a),yb.scrollLeft(c),pb&&clearInterval(pb)}var N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb=this,ub=!0,vb=!0,wb=!1,xb=!1,yb=b.clone(!1,!1).empty(),zb=a.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";"border-box"===b.css("box-sizing")?(qb=0,rb=0):(qb=b.css("paddingTop")+" "+b.css("paddingRight")+" "+b.css("paddingBottom")+" "+b.css("paddingLeft"),rb=(parseInt(b.css("paddingLeft"),10)||0)+(parseInt(b.css("paddingRight"),10)||0)),a.extend(tb,{reinitialise:function(b){b=a.extend({},N,b),d(b)},scrollToElement:function(a,b,c){x(a,b,c)},scrollTo:function(a,b,c){w(a,c),v(b,c)},scrollToX:function(a,b){w(a,b)},scrollToY:function(a,b){v(a,b)},scrollToPercentX:function(a,b){w(a*(S-P),b)},scrollToPercentY:function(a,b){v(a*(T-Q),b)},scrollBy:function(a,b,c){tb.scrollByX(a,c),tb.scrollByY(b,c)},scrollByX:function(a,b){var c=y()+Math[0>a?"floor":"ceil"](a),d=c/(S-P);r(d*ab,b)},scrollByY:function(a,b){var c=z()+Math[0>a?"floor":"ceil"](a),d=c/(T-Q);p(d*Z,b)},positionDragX:function(a,b){r(a,b)},positionDragY:function(a,b){p(a,b)},animate:function(a,b,c,d,e){var f={};f[b]=c,a.animate(f,{duration:N.animateDuration,easing:N.animateEase,queue:!1,step:d,complete:e})},getContentPositionX:function(){return y()},getContentPositionY:function(){return z()},getContentWidth:function(){return S},getContentHeight:function(){return T},getPercentScrolledX:function(){return y()/(S-P)},getPercentScrolledY:function(){return z()/(T-Q)},getIsScrollableH:function(){return X},getIsScrollableV:function(){return W},getContentPane:function(){return O},scrollToBottom:function(a){p(Z,a)},hijackInternalLinks:a.noop,destroy:function(){M()}}),d(c)}return b=a.extend({},a.fn.jScrollPane.defaults,b),a.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){b[this]=b[this]||b.speed}),this.each(function(){var d=a(this),e=d.data("jsp");e?e.reinitialise(b):(a("script",d).filter('[type="text/javascript"],:not([type])').remove(),e=new c(d,b),d.data("jsp",e))})},a.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:void 0,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}});
"use strict";
(function($, window, document, undefined) {


    var pluginName = "metisMenu",
        defaults = {
            toggle: true,
            doubleTapToGo: false
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var $this = $(this.element),
                $toggle = this.settings.toggle,
                obj = this
            if (this.isIE() <= 9) {
                $this.find("li.active").has("ul").children("ul").collapse("show");
                $this.find("li").not(".active").has("ul").children("ul").collapse("hide");
            } else {
                $this.find("li.active").has("ul").children("ul").addClass("collapse show");
                $this.find("li").not(".active").has("ul").children("ul").addClass("collapse");
            }
            //add the "doubleTapToGo" class to active items if needed
            if (obj.settings.doubleTapToGo) {
                $this.find("li.active").has("ul").children("a").addClass("doubleTapToGo");
            }
            $this.find("li").has("ul").children("a").on("click", function(e) {
                e.preventDefault();
                //Do we need to enable the double tap
                if (obj.settings.doubleTapToGo) {
                    //if we hit a second time on the link and the href is valid, navigate to that url
                    if (obj.doubleTapToGo($(this)) && $(this).attr("href") !== "#" && $(this).attr("href") !== "") {
                        e.stopPropagation();
                        document.location = $(this).attr("href");
                        return;
                    }
                }
                $(this).parent("li").toggleClass("active").children("ul").collapse({
                    toggle: true,
                    animate: false
                });
                $this.find("li.active").has("ul").children("ul").addClass("collapse show");
                if ($toggle) {
                    $(this).parent("li").siblings().removeClass("active").children("ul.show").collapse("hide");
                    $this.find("li.active").has("ul").children("ul").addClass("collapse show");
                    $this.find("li").not(".active").has("ul").children("ul").removeClass("show");
                }
            });
        },
        isIE: function() { //https://gist.github.com/padolsey/527683
            var undef,
                v = 3,
                div = document.createElement("div"),
                all = div.getElementsByTagName("i");
            while (
                div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->",
                    all[0]
                ) {
                return v > 4 ? v : undef;
            }
        },
        //Enable the link on the second click.
        doubleTapToGo: function(elem) {
            var $this = $(this.element);
            //if the class "doubleTapToGo" exists, remove it and return
            if (elem.hasClass("doubleTapToGo")) {
                elem.removeClass("doubleTapToGo");
                return true;
            }
            //does not exists, add a new class and return false
            if (elem.parent().children("ul").length) {
                //first remove all other class
                $this.find(".doubleTapToGo").removeClass("doubleTapToGo");
                //add the class on the current element
                elem.addClass("doubleTapToGo");
                return false;
            }
        }
    };
    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
        return this;
    };
    $("#main li").hover(function() {
        $(this).find("i.fa").css("transform", "rotateY(150deg)")
    })
})(jQuery, window, document);
//    ==========menu hover===============

$('#messages').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
});

function menu_default() {
    if ($("body").hasClass("sidebar-left-hidden")) {
        if ($("#content").height() < 950) {
            $(".sidebar-left-hidden #left").addClass("sm_content");
        }
        $("#menu>li").has("ul").children("a").off("click").on("click", function(e) {
            e.preventDefault();
        });
    } else {
        $("#left").removeClass("sm_content");
        $("#menu li").has("ul").children("a").off("click");
        $("#menu").find("li").has("ul").children("a").on("click", function(e) {
            e.preventDefault();
            $(this).parent("li").toggleClass("active").children("ul").collapse({
                toggle: true,
                animate: false
            });
            $("#menu").find("li.active").has("ul").children("ul").addClass("collapse show");
            $(this).parent("li").siblings().removeClass("active").children("ul.show").collapse("hide");
            $("#menu").find("li").not(".active").has("ul").children("ul").removeClass("show");
        });
    }
}
$("#menu li:nth-child(2)").find("ul").removeClass("sidebarbottom");
//        ======================
// skins js
function loadjscssfile(filename, filetype) {
    if (filetype == "css") {
        var fileref = document.createElement("link");
        fileref.rel = "stylesheet";
        fileref.type = "text/css";
        fileref.href = 'css/skins/' + filename;
        $("#skin_change").attr("href", "css/skins/" + filename + "")
    }
}

// End of skins js
//    ======================================core js=======================================
(function(window) {
    var
        // Is Modernizr defined on the global scope
        Modernizr = typeof Modernizr !== "undefined" ? Modernizr : false,
        // whether or not is a touch device
        isTouchDevice = Modernizr ? Modernizr.touch : !!('ontouch' in window || 'onmsgesturechange' in window),
        // Are we expecting a touch or a click?
        buttonPressedEvent = (isTouchDevice) ? 'touch' : 'click',
        Admire = function() {
            this.init();
        };
    // Initialization method
    Admire.prototype.init = function() {
        this.isTouchDevice = isTouchDevice;
        this.buttonPressedEvent = buttonPressedEvent;
    };
    Admire.prototype.getViewportHeight = function() {
        var docElement = document.documentElement,
            client = docElement.clientHeight,
            inner = window.innerHeight;
        if (client < inner)
            return inner;
        else
            return client;
    };
    Admire.prototype.getViewportWidth = function() {
        var docElement = document.documentElement,
            client = docElement.clientWidth,
            inner = window.innerWidth;
        if (client < inner)
            return inner;
        else
            return client;
    };
    // Creates a Admire object.
    window.Admire = new Admire();
})(this);
// =====================resize plugin===================
//  jQuery resize event - v1.1 - 3/14/2010
(function($, h, c) {
    var a = $([]),
        e = $.resize = $.extend($.resize, {}),
        i, k = "setTimeout",
        j = "resize",
        d = j + "-special-event",
        b = "delay",
        f = "throttleWindow";
    e[b] = 250;
    e[f] = true;
    $.event.special[j] = {
        setup: function() {
            if (!e[f] && this[k]) {
                return false;
            }
            var l = $(this);
            a = a.add(l);
            $.data(this, d, { w: l.width(), h: l.height() });
            if (a.length === 1) {
                g();
            }
        },
        teardown: function() {
            if (!e[f] && this[k]) {
                return false
            }
            var l = $(this);
            a = a.not(l);
            l.removeData(d);
            if (!a.length) {
                clearTimeout(i);
            }
        },
        add: function(l) {
            if (!e[f] && this[k]) {
                return false
            }
            var n;

            function m(s, o, p) {
                var q = $(this),
                    r = $.data(this, d);
                r.w = o !== c ? o : q.width();
                r.h = p !== c ? p : q.height();
                n.apply(this, arguments)
            }

            if ($.isFunction(l)) {
                n = l;
                return m
            } else {
                n = l.handler;
                l.handler = m
            }
        }
    };

    function g() {
        i = h[k](function() {
            a.each(function() {
                var n = $(this),
                    m = n.width(),
                    l = n.height(),
                    o = $.data(this, d);
                if (m !== o.w || l !== o.h) {
                    n.trigger(j, [o.w = m, o.h = l])
                }
            });
            g()
        }, e[b])
    }
})(jQuery, this);
// =====================resize plugin end===============
(function($) {
    var $navBar = $('nav.navbar'),
        $body = $('body'),
        $menu = $('#menu');

    function addPaddingTop(el, val) {
        el.css('padding-top', val);
    }

    function removePaddingTop(el) {
        el.css('padding-top', 'inherit');
    }

    function getHeight(el) {
        return el.outerHeight();
    }

    function init() {
        var isFixedNav = $navBar.hasClass('navbar-fixed-top');
        var bodyPadTop = isFixedNav ? $navBar.outerHeight(true) : 0;
        $body.css('padding-top', bodyPadTop);
        if ($body.hasClass('menu-affix')) {
            $menu
                .css({
                    height: function() {
                        return $(window).height();
                    },
                    top: bodyPadTop - 1,
                    bottom: 0
                });
        }
    }

    Admire.navBar = function() {
        var resizeTimer;
        init();
        $(window).resize(function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(init(), 250);
        });
    };
    return Admire;
})(jQuery);
(function($, Admire) {
    var $body = $('body'),
        $leftToggle = $('.toggle-left'),
        $rightToggle = $('.toggle-right');
    var leftopened = 0;
    var demo = $("<div />").css({
        position: "fixed",
        top: "200px",
        right: "-1px",
        transition: 'all 0.3s ease-in-out',
        background: "#00cc99",
        "border-radius": "5px 0px 0px 5px",
        padding: "5px",
        "font-size": "16px",
        cursor: "pointer",
        color: "#ddd"
    }).html(" <i class='fa fa-fw fa-cog skin-icon'></i>").addClass("no-print");
    // $body.append(demo);
    $(".no-print").on("mouseenter mouseleave", function() {
        $(".skin-icon").toggleClass("fa-spin");
        return false;
    });
    Admire.admireAnimatePanel = function() {
        if ($('#left').length) {
            $leftToggle.on(Admire.buttonPressedEvent, function(e) {
                // $(".toggle-left").on('click', function(e) {
                if ($(window).width() < 768) {
                    $body.toggleClass('sidebar-left-opened');
                    // $body.removeClass("sidebar-right-opened");
                } else {
                    $body.toggleClass("sidebar-left-hidden");
                    $body.removeClass("sidebar-right-opened");
                }
                menu_default();
            });
        } else {
            $leftToggle.addClass('hidden');
        }
        demo.on('click', function(e) {
            $body.toggleClass("sidebar-right-opened");
        });
    };
    return Admire;
})(jQuery, Admire || {});
$(window).on("load", function() {
    $('.preloader img').fadeOut();
    $('.preloader').fadeOut(1000);
});
$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();
    $('#menu').metisMenu();
    Admire.navBar();
    Admire.admireAnimatePanel();

    function _fix() {
        //Get window height and the wrapper height
        var height = $(window).height() - $("#top").height();
        var wrapper = $(".wrapper");
        wrapper.css("min-height", height + "px");
        var content = wrapper.height();
        //If the wrapper height is greater than the window
        if (content > height) {
            //then set sidebar height to the wrapper
            $("html, body").css("min-height", content + 0 + "px");
            $("#left").css("min-height", content + 2 + "px");
        } else {
            //Otherwise, set the sidebar to the height of the window
            $("html, body").css("min-height", height + 0 + "px");
            $("#left").css("min-height", height + 2 + "px");
        }
    }

    function fix_sidebar() {
        if (!$("body").hasClass("fixed")) {
            return;
        }
        if ($(window).width() > 767) {
            $('.left_content').jScrollPane({
                autoReinitialise: true,
                autoReinitialiseDelay: 100
            });
        } else {
            $('.left_content').jScrollPane({
                autoReinitialise: true,
                autoReinitialiseDelay: 100
            });
        }
    }

    //Fire upon load admire
    setTimeout(_fix, 100);
    //Fix the fixed layout sidebar scroll bug
    fix_sidebar();
    //Fire when wrapper is resized
    $(".wrapper").on("resize", function() {
        _fix();
        fix_sidebar();
    });

    $('#messages,#notifications').css("height", 220);
    $('#messages,#notifications').jScrollPane({
        autoReinitialise: true,
        autoReinitialiseDelay: 100
    });

    $("#request_btn, #notifications_section, #messages_section").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#request_list, #notifications_dropdown, #messages_dropdown').addClass('animated fadeIn').one(animationEnd, function() {
            $("#request_list, #notifications_dropdown, #messages_dropdown").removeClass('animated fadeIn');
        });
    });

    $("#menu>.dropdown_menu").hover(function() {
        var sideoffset = $("#menu").offset();
        var submenuoffset = $(this).children("ul").offset();
        if (sideoffset.top + $("#menu").height() < submenuoffset.top + $(this).children("ul").height()) {
            $(this).children("ul").addClass("sidebarbottom");
        }
    });

    //    ============================fading effect=======

    //    ==========================Different cards=====================
    //        Card close
    $('.card-header .fa-close').on('click', function() {
        $(this).closest('.card').parent().hide('slow');
    });
    //        Card toggle
    $(".card-header .fa-chevron-up").on("click", function() {
        $(this).closest('.card').find('.card-body').slideToggle();
        $(this).toggleClass("fa-chevron-up").toggleClass("fa-chevron-down");
    });

    //        Card edit
    (function($) {
        $.fn.setCursorToTextEnd = function() {
            var $initialVal = this.val();
            this.val($initialVal);
        };
    })(jQuery);
    $(".card-header .fa-pencil").on('click', function(e) {
        var edit = $(this).closest('.card').find('.card-header .card-title').text();
        var editable = $(this).closest('.card').find('.card-header');
        var editBox = "<div class='card_editbox'><input type='text' class='form-control text_for_save' maxlength='20' value='" + edit + "'></div>";
        if (!$(this).hasClass("fa-check")) {
            editable.after(editBox);
            $(this).closest('.card').find("input").focus().setCursorToTextEnd();
        } else {
            $(this).closest(".card").find(".card_editbox").remove();
        }
        $(this).toggleClass('fa-check').toggleClass('fa-pencil');
    });
    $(".card").on("input", ".text_for_save", function() {
        $(this).closest('.card').find('.card-header .card-title').text($(this).val());
    });

    //        Card colors
    $(".card-header .fa-tint").on('click', function() {
        var colorpick = $(this).closest('.card').find('.card-header');
        var headerColor = '<div class="header_colors">' +
            '<div class="inline_table"><div class="bg-primary" data-color="bg-primary"></div></div>' +
            '<div class="inline_table"><div class="bg-success" data-color="bg-success"></div></div>' +
            '<div class="inline_table"><div class="bg-warning" data-color="bg-warning"></div></div>' +
            '<div class="inline_table"><div class="bg-danger" data-color="bg-danger"></div></div>' +
            '<div class="inline_table"><div class="bg-info" data-color="bg-info"></div></div>' +
            '<div class="inline_table"><div class="bg-mint" data-color="bg-mint"></div></div>' +
            '<div class="inline_table"><div class="bg-white" data-color="bg-white"></div></div></div>'
        if ($(this).hasClass("fa-tint")) {
            colorpick.after(headerColor);
        } else {
            $(this).closest(".card").find('.header_colors').hide('slow');
        }
        $(".header_colors").each(function() {
            $(this).find('.inline_table div').on('click', function() {
                $(this).closest('.card').find('.card-header').removeClass().addClass("card-header " + $(this).attr("data-color"));
            });
        });
        $(this).toggleClass("fa-tint").toggleClass("fa-file-image-o");
    });

    //        Full screen
    $(".card-header .fa-arrows-alt").on('click', function() {
        $(this).closest('.card').toggleClass('fullscreen');
    });

    //        Card Refreshing
    $(".card_refresh").on("click", function() {
        var card = $(this).parents(".card");
        card_refresh(card);
        setTimeout(function() {
            card_refresh(card);
        }, 2000);
    });

    function card_refresh(card) {
        if (!card.hasClass("card-refreshing")) {
            card.append('<div class="card_refresh_section"><img src="img/loader.gif"/></div>');
            card.find(".card_refresh_section").width(card.width()).height(card.height());
            card.addClass("card-refreshing");

        } else {
            card.find(".card_refresh_section").remove();
            card.removeClass("card-refreshing");
        }
    }
    // =============================== Right side bar =======================


    function scroll_fixtop() {
        var rightHeightTop = $(window).height() - top.height();
        $(".request_scrollable").css("height", rightHeightTop+20);
    }

    function scroll_fixtop2() {
        var rightHeightTop2 = $(window).height();
        $(".request_scrollable").css("height", rightHeightTop2+20);

    }

    function fixed_menu_scroll() {
        if ($("body").hasClass("fixedNav_position")) {
            var leftHeight = $(window).height() - $("#top").height();
            $('.left_scrolled').css("height", leftHeight);
            $('.left_scrolled').jScrollPane({
                autoReinitialise: true,
                autoReinitialiseDelay: 100
            });
        } else {
            var leftHeight = $(window).height();
            $('.left_scrolled').css("height", leftHeight);
            $('.left_scrolled').jScrollPane({
                autoReinitialise: true,
                autoReinitialiseDelay: 100
            });
            var content_height = $("#content").height();
            var window_height = $(window).height();
            if (window_height > content_height) {
                var leftHeight = $(window).height() - $("#top").height();
                $('.left_scrolled').css("height", leftHeight);
                $('.left_scrolled').jScrollPane({
                    autoReinitialise: true,
                    autoReinitialiseDelay: 100
                });
            }
        }

    }

    function fixed_menu_scroll2() {

        var element = $('.menu_scroll').jScrollPane();
        var api = element.data('jsp');
        api.destroy();
        $(".menu_scroll").removeAttr("style");

        if (left_height_unfixed > $("#content").height()) {
            $("#left").css("min-height", left_height_unfixed);

        }
    }
    var top = $("#top");
    var left = $("#left");
    var body = $("body");
    var input = $("input");
    var fixedNav = $('#setting_fixed_nav').find(input);
    var fixedMenu = $('#setting_fixed_menunav').find(input);
    var breadcrumb = $('#setting_breadcrumb').find(input);
    fixedNav.lc_switch();
    fixedMenu.lc_switch();
    breadcrumb.lc_switch();

    function top_resize() {
        var topHeight = top.height();
        $("#request_list").css("padding-top", topHeight);
    }
    top_resize();
    $("#top").on("resize", function() {
        top_resize();
    });

    function right_fix() {
        var rightHeight = $(window).height();
        $(".request_scrollable").css("height", rightHeight+20)
    }

    function scroll_fix() {
        var rightHeight = $(window).height() - top.height();
        $('.request_scrollable').jScrollPane({
            autoReinitialise: true,
            autoReinitialiseDelay: 100
        });
    }
    right_fix();
    scroll_fix();
    $(window).on("resize", function() {
        right_fix();
        scroll_fix();
    });
    $("#request_btn").on("click", function() {
        body.toggleClass("right_menu_section");
    });
    if ($(window).width() > 767) {
        breadcrumb.on('lcs-statuschange', function() {
            $(".head").toggleClass("breadcrumb_hide");
            if ($("#setting_fixed_menunav .lcs_switch").hasClass("lcs_off")) {
                $(".menu_scroll").removeClass("left_scrolled");
            }
        });
        fixedNav.on('lcs-statuschange', function() {
            $("#top").toggleClass("fixed");
            $(".wrapper").toggleClass("fixedNav_top");
            body.toggleClass("fixedNav_position");
            if ($("#top").hasClass("fixed")) {
                $(".menu_scroll").removeClass("left_scrolled");
                scroll_fixtop();
                $(window).on("resize", function() {
                    scroll_fixtop();
                });
            } else {
                scroll_fixtop2();
                $(window).on("resize", function() {
                    scroll_fixtop2();
                });
            }
        });

        var left_height_unfixed = $("#left").height();
        fixedMenu.on('lcs-statuschange', function() {
            $("#left").toggleClass("fixed");
            body.toggleClass("fixedMenu_left");
            $("#left.fixed").find(".menu_scroll").addClass("left_scrolled");
            if (body.hasClass("fixedMenu_left")) {
                fixed_menu_scroll();
                $(window).on("resize", function() {
                    fixed_menu_scroll();
                });
                fixedNav.on('lcs-statuschange', function() {
                    if ($("body").hasClass("fixedNav_position")) {
                        var leftHeight11 = $(window).height() - $("#top").height();
                        $('.menu_scroll').css("height", leftHeight11);
                    } else {
                        var leftHeight11 = $(window).height();
                        $('.menu_scroll').css("height", leftHeight11);
                    }
                });
            } else {
                fixedNav.on('lcs-statuschange', function() {
                    // $('.menu_scroll').css("height", "");
                    $('.menu_scroll').removeAttr('style');
                });
                fixed_menu_scroll2();
                $(window).on("resize", function() {
                    fixed_menu_scroll2();
                });
            }
        });

    }

    $(window).on("scroll", function() {
        var window_height = $(window).height();
        $("#content").css("min-height", window_height);
        if($("#top").hasClass("fixed")){
            scroll_fixtop()
        }else{
            request_scrollable_default();
        }
        if ($(this).scrollTop() > 50) {
            $('#request_list,.fixedMenu_left #left').addClass('rightsidebar-without-nav');
        } else {
            $('#request_list,.fixedMenu_left #left').removeClass('rightsidebar-without-nav');
        }

        if ($(this).scrollTop() > 50 && $(this).scrollTop() < 100) {
            $('#request_list,.fixedMenu_left #left').addClass('rightsidebar-without-nav-small');
        } else {
            $('#request_list,.fixedMenu_left #left').removeClass('rightsidebar-without-nav-small');
        }

    });
    // fixed header
    var top = $("#top");
    function request_scrollable_default(){
        var rightHeightTop2=$(window).height();
        $(".request_scrollable").css("height", rightHeightTop2+20);
    }
    function scroll_fixtop() {
        var rightHeightTop = $(window).height() - top.height();
        $(".request_scrollable").css("height", rightHeightTop+20)
    }
    scroll_fixtop();
    $(window).on("resize", function() {
        scroll_fixtop();
        request_scrollable_default();
    });
    // Fixed menu
    function fixed_menu_scroll() {
        if ($("body").hasClass("fixedNav_position")) {
            var leftHeight = $(window).height() - $("#top").height();
            $('.left_scrolled').css("height", leftHeight);
            $('.left_scrolled').jScrollPane({
                autoReinitialise: true,
                autoReinitialiseDelay: 100
            });
        } else {
            var leftHeight = $(window).height();
            $('.left_scrolled').css("height", leftHeight);
            $('.left_scrolled').jScrollPane({
                autoReinitialise: true,
                autoReinitialiseDelay: 100
            });
        }
    }
    fixed_menu_scroll();
    $(window).on("resize", function() {
        fixed_menu_scroll();
    });

    if ($("body").hasClass("fixedMenu_left")) {
        $('#setting_fixed_nav').find('input').on('lcs-statuschange', function() {
            if ($("body").hasClass("fixedNav_position")) {
                if ($("#top").hasClass("fixed")) {
                    var leftHeight_fixednav = $(window).height() - $("#top").height();
                    $('.menu_scroll').css("height", leftHeight_fixednav);
                    $('.menu_scroll').css("min-height", leftHeight_fixednav);
                }
            } else {
                var leftHeight_withoutfixednav = $(window).height();
                $('.menu_scroll').css("height", leftHeight_withoutfixednav);
            }
        });

    }
});

// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.4 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
!function(a){var b,c,d="0.4.2",e="hasOwnProperty",f=/[\.\/]/,g="*",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)"zIndex"in h[p]&&(l.push(h[p].zIndex),h[p].zIndex<0&&(m[h[p].zIndex]=h[p]));for(l.sort(i);l[j]<0;)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],"zIndex"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k._events=j,k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,d=d.hasOwnProperty(c[e])&&d[c[e]]||(d[c[e]]={n:{}});for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.f=function(a){var b=[].slice.call(arguments,1);return function(){k.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},k.stop=function(){c=1},k.nt=function(a){return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},k.nts=function(){return b.split(f)},k.off=k.unbind=function(a,b){if(!a)return void(k._events=j={n:{}});var c,d,h,i,l,m,n,o=a.split(f),p=[j];for(i=0,l=o.length;l>i;i++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[i]!=g)c[o[i]]&&h.push(c[o[i]]);else for(d in c)c[e](d)&&h.push(c[d]);p.splice.apply(p,h)}for(i=0,l=p.length;l>i;i++)for(c=p[i];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var q=c.n[d].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){return k.unbind(a,c),b.apply(this,arguments)};return k.on(a,c)},k.version=d,k.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=k:"undefined"!=typeof define?define("eve",[],function(){return k}):a.eve=k}(window||this),function(a,b){"function"==typeof define&&define.amd?define(["eve"],function(c){return b(a,c)}):b(a,a.eve||"function"==typeof require&&require("eve"))}(this,function(a,b){function c(a){if(c.is(a,"function"))return u?a():b.on("raphael.DOMload",a);if(c.is(a,V))return c._engine.create[D](c,a.splice(0,3+c.is(a[0],T))).add(a);var d=Array.prototype.slice.call(arguments,0);if(c.is(d[d.length-1],"function")){var e=d.pop();return u?e.call(c._engine.create[D](c,d)):b.on("raphael.DOMload",function(){e.call(c._engine.create[D](c,d))})}return c._engine.create[D](c,arguments)}function d(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=d(a[c]));return b}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function f(a,b,c){function d(){var f=Array.prototype.slice.call(arguments,0),g=f.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];return h[z](g)?(e(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[D](b,f),c?c(h[g]):h[g])}return d}function g(){return this.hex}function h(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function i(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function j(a,b,c,d,e,f,g,h,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=i(q,a,c,e,g),s=i(q,b,d,f,h),t=r*r+s*s;o+=n[p]*N.sqrt(t)}return k*o}function k(a,b,c,d,e,f,g,h,i){if(!(0>i||j(a,b,c,d,e,f,g,h)<i)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=j(a,b,c,d,e,f,g,h,n);Q(k-i)>o;)m/=2,n+=(i>k?1:-1)*m,k=j(a,b,c,d,e,f,g,h,n);return n}}function l(a,b,c,d,e,f,g,h){if(!(O(a,c)<P(e,g)||P(a,c)>O(e,g)||O(b,d)<P(f,h)||P(b,d)>O(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+P(a,c).toFixed(2)||n>+O(a,c).toFixed(2)||n<+P(e,g).toFixed(2)||n>+O(e,g).toFixed(2)||o<+P(b,d).toFixed(2)||o>+O(b,d).toFixed(2)||o<+P(f,h).toFixed(2)||o>+O(f,h).toFixed(2)))return{x:l,y:m}}}}function m(a,b,d){var e=c.bezierBBox(a),f=c.bezierBBox(b);if(!c.isBBoxIntersect(e,f))return d?0:[];for(var g=j.apply(0,a),h=j.apply(0,b),i=O(~~(g/5),1),k=O(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;i+1>q;q++){var r=c.findDotsAtSegment.apply(c,a.concat(q/i));m.push({x:r.x,y:r.y,t:q/i})}for(q=0;k+1>q;q++)r=c.findDotsAtSegment.apply(c,b.concat(q/k)),n.push({x:r.x,y:r.y,t:q/k});for(q=0;i>q;q++)for(var s=0;k>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=Q(u.x-t.x)<.001?"y":"x",y=Q(w.x-v.x)<.001?"y":"x",z=l(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+Q((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+Q((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:P(A,1),t2:P(B,1)}))}}return p}function n(a,b,d){a=c._path2curve(a),b=c._path2curve(b);for(var e,f,g,h,i,j,k,l,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=b.length;u>t;t++){var v=b[t];if("M"==v[0])g=k=v[1],h=l=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,l,k,l],g=k,h=l);var w=m(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function o(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+H+this.y+H+this.width+" × "+this.height}function q(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,Q(f)<b)return e;if(h=(3*l*e+2*k)*e+j,Q(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),Q(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function r(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[z](e)&&(d[_(e)]=a[e],c.push(_(e)));c.sort(lb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function s(a,d,e,f,g,h){e=_(e);var i,j,k,l,m,n,p=a.ms,r={},s={},t={};if(f)for(v=0,x=ic.length;x>v;v++){var u=ic[v];if(u.el.id==d.id&&u.anim==a){u.percent!=e?(ic.splice(v,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var v=0,x=a.percents.length;x>v;v++){if(a.percents[v]==e||a.percents[v]>f*a.top){e=a.percents[v],m=a.percents[v-1]||0,p=p/a.top*(e-m),l=a.percents[v+1],i=a.anim[e];break}f&&d.attr(a.anim[a.percents[v]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var y in i)if(i[z](y)&&(db[z](y)||d.paper.customAttributes[z](y)))switch(r[y]=d.attr(y),null==r[y]&&(r[y]=cb[y]),s[y]=i[y],db[y]){case T:t[y]=(s[y]-r[y])/p;break;case"colour":r[y]=c.getRGB(r[y]);var A=c.getRGB(s[y]);t[y]={r:(A.r-r[y].r)/p,g:(A.g-r[y].g)/p,b:(A.b-r[y].b)/p};break;case"path":var B=Kb(r[y],s[y]),C=B[1];for(r[y]=B[0],t[y]=[],v=0,x=r[y].length;x>v;v++){t[y][v]=[0];for(var D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(C[v][D]-r[y][v][D])/p}break;case"transform":var G=d._,H=Pb(G[y],s[y]);if(H)for(r[y]=H.from,s[y]=H.to,t[y]=[],t[y].real=!0,v=0,x=r[y].length;x>v;v++)for(t[y][v]=[r[y][v][0]],D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(s[y][v][D]-r[y][v][D])/p;else{var K=d.matrix||new o,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[y]=[K.a,K.b,K.c,K.d,K.e,K.f],Nb(L,s[y]),s[y]=L._.transform,t[y]=[(L.matrix.a-K.a)/p,(L.matrix.b-K.b)/p,(L.matrix.c-K.c)/p,(L.matrix.d-K.d)/p,(L.matrix.e-K.e)/p,(L.matrix.f-K.f)/p]}break;case"csv":var M=I(i[y])[J](w),N=I(r[y])[J](w);if("clip-rect"==y)for(r[y]=N,t[y]=[],v=N.length;v--;)t[y][v]=(M[v]-r[y][v])/p;s[y]=M;break;default:for(M=[][E](i[y]),N=[][E](r[y]),t[y]=[],v=d.paper.customAttributes[y].length;v--;)t[y][v]=((M[v]||0)-(N[v]||0))/p}var O=i.easing,P=c.easing_formulas[O];if(!P)if(P=I(O).match(Z),P&&5==P.length){var Q=P;P=function(a){return q(a,+Q[1],+Q[2],+Q[3],+Q[4],p)}}else P=nb;if(n=i.start||a.start||+new Date,u={anim:a,percent:e,timestamp:n,start:n+(a.del||0),status:0,initstatus:f||0,stop:!1,ms:p,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||a.times,origin:d.attr(),totalOrigin:g},ic.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-p*f,1==ic.length))return kc();k&&(u.start=new Date-u.ms*f),1==ic.length&&jc(kc)}b("raphael.anim.start."+d.id,d,a)}}function t(a){for(var b=0;b<ic.length;b++)ic[b].el.paper==a&&ic.splice(b--,1)}c.version="2.1.2",c.eve=b;var u,v,w=/[, ]+/,x={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},y=/\{(\d+)\}/g,z="hasOwnProperty",A={doc:document,win:a},B={was:Object.prototype[z].call(A.win,"Raphael"),is:A.win.Raphael},C=function(){this.ca=this.customAttributes={}},D="apply",E="concat",F="ontouchstart"in A.win||A.win.DocumentTouch&&A.doc instanceof DocumentTouch,G="",H=" ",I=String,J="split",K="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](H),L={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},M=I.prototype.toLowerCase,N=Math,O=N.max,P=N.min,Q=N.abs,R=N.pow,S=N.PI,T="number",U="string",V="array",W=Object.prototype.toString,X=(c._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Y={NaN:1,Infinity:1,"-Infinity":1},Z=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,$=N.round,_=parseFloat,ab=parseInt,bb=I.prototype.toUpperCase,cb=c._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},db=c._availableAnimAttrs={blur:T,"clip-rect":"csv",cx:T,cy:T,fill:"colour","fill-opacity":T,"font-size":T,height:T,opacity:T,path:"path",r:T,rx:T,ry:T,stroke:"colour","stroke-opacity":T,"stroke-width":T,transform:"transform",width:T,x:T,y:T},eb=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,fb={hs:1,rg:1},gb=/,?([achlmqrstvxz]),?/gi,hb=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ib=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,jb=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,kb=(c._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),lb=function(a,b){return _(a)-_(b)},mb=function(){},nb=function(a){return a},ob=c._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},pb=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},qb=c._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)}},rb=c.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Kb(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(c._g=A,c.type=A.win.SVGAngle||A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==c.type){var sb,tb=A.doc.createElement("div");if(tb.innerHTML='<v:shape adj="1"/>',sb=tb.firstChild,sb.style.behavior="url(#default#VML)",!sb||"object"!=typeof sb.adj)return c.type=G;tb=null}c.svg=!(c.vml="VML"==c.type),c._Paper=C,c.fn=v=C.prototype=c.prototype,c._id=0,c._oid=0,c.is=function(a,b){return b=M.call(b),"finite"==b?!Y[z](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||W.call(a).slice(8,-1).toLowerCase()==b},c.angle=function(a,b,d,e,f,g){if(null==f){var h=a-d,i=b-e;return h||i?(180+180*N.atan2(-i,-h)/S+360)%360:0}return c.angle(a,b,f,g)-c.angle(d,e,f,g)},c.rad=function(a){return a%360*S/180},c.deg=function(a){return Math.round(180*a/S%360*1e3)/1e3},c.snapTo=function(a,b,d){if(d=c.is(d,"finite")?d:10,c.is(a,V)){for(var e=a.length;e--;)if(Q(a[e]-b)<=d)return a[e]}else{a=+a;var f=b%a;if(d>f)return b-f;if(f>a-d)return b-f+a}return b};c.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=16*N.random()|0,c="x"==a?b:3&b|8;return c.toString(16)});c.setWindow=function(a){b("raphael.setWindow",c,A.win,a),A.win=a,A.doc=A.win.document,c._engine.initWin&&c._engine.initWin(A.win)};var ub=function(a){if(c.vml){var b,d=/^\s+|\s+$/g;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),b=e.body}catch(g){b=createPopup().document.body}var h=b.createTextRange();ub=f(function(a){try{b.style.color=I(a).replace(d,G);var c=h.queryCommandValue("ForeColor");return c=(255&c)<<16|65280&c|(16711680&c)>>>16,"#"+("000000"+c.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=A.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",A.doc.body.appendChild(i),ub=f(function(a){return i.style.color=a,A.doc.defaultView.getComputedStyle(i,G).getPropertyValue("color")})}return ub(a)},vb=function(){return"hsb("+[this.h,this.s,this.b]+")"},wb=function(){return"hsl("+[this.h,this.s,this.l]+")"},xb=function(){return this.hex},yb=function(a,b,d){if(null==b&&c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&c.is(a,U)){var e=c.getRGB(a);a=e.r,b=e.g,d=e.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},zb=function(a,b,d,e){a*=255,b*=255,d*=255;var f={r:a,g:b,b:d,hex:c.rgb(a,b,d),toString:xb};return c.is(e,"finite")&&(f.opacity=e),f};c.color=function(a){var b;return c.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):c.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):(c.is(a,"string")&&(a=c.getRGB(a)),c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=xb,a},c.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,d=a.o,a=a.h),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Q(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-Q(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.rgb2hsb=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=O(a,b,c),g=f-P(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:vb}},c.rgb2hsl=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=O(a,b,c),h=P(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:wb}},c._path2string=function(){return this.join(",").replace(gb,"$1")};c._preload=function(a,b){var c=A.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,A.doc.body.removeChild(this)},c.onerror=function(){A.doc.body.removeChild(this)},A.doc.body.appendChild(c),c.src=a};c.getRGB=f(function(a){if(!a||(a=I(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:g};!(fb[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=ub(a));var b,d,e,f,h,i,j=a.match(X);return j?(j[2]&&(e=ab(j[2].substring(5),16),d=ab(j[2].substring(3,5),16),b=ab(j[2].substring(1,3),16)),j[3]&&(e=ab((h=j[3].charAt(3))+h,16),d=ab((h=j[3].charAt(2))+h,16),b=ab((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100)),j[5]?(i=j[5][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsb2rgb(b,d,e,f)):j[6]?(i=j[6][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsl2rgb(b,d,e,f)):(j={r:b,g:d,b:e,toString:g},j.hex="#"+(16777216|e|d<<8|b<<16).toString(16).slice(1),c.is(f,"finite")&&(j.opacity=f),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g}},c),c.hsb=f(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=f(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=f(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),c.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},c.getColor.reset=function(){delete this.start},c.parsePathString=function(a){if(!a)return null;var b=Ab(a);if(b.arr)return Cb(b.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return c.is(a,V)&&c.is(a[0],V)&&(e=Cb(a)),e.length||I(a).replace(hb,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(jb,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][E](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][E](f));else for(;f.length>=d[g]&&(e.push([b][E](f.splice(0,d[g]))),d[g]););}),e.toString=c._path2string,b.arr=Cb(e),e},c.parseTransformString=f(function(a){if(!a)return null;var b=[];return c.is(a,V)&&c.is(a[0],V)&&(b=Cb(a)),b.length||I(a).replace(ib,function(a,c,d){{var e=[];M.call(c)}d.replace(jb,function(a,b){b&&e.push(+b)}),b.push([c][E](e))}),b.toString=c._path2string,b});var Ab=function(a){var b=Ab.ps=Ab.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[z](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};c.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=R(j,3),l=R(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*N.atan2(q-s,r-t)/S;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},c.bezierBBox=function(a,b,d,e,f,g,h,i){c.is(a,"array")||(a=[a,b,d,e,f,g,h,i]);var j=Jb.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},c.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},c.isBBoxIntersect=function(a,b){var d=c.isPointInsideBBox;return d(b,a.x,a.y)||d(b,a.x2,a.y)||d(b,a.x,a.y2)||d(b,a.x2,a.y2)||d(a,b.x,b.y)||d(a,b.x2,b.y)||d(a,b.x,b.y2)||d(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)},c.pathIntersection=function(a,b){return n(a,b)},c.pathIntersectionNumber=function(a,b){return n(a,b,1)},c.isPointInsidePath=function(a,b,d){var e=c.pathBBox(a);return c.isPointInsideBBox(e,b,d)&&n(a,[["M",b,d],["H",e.x2+10]],1)%2==1},c._removedFactory=function(a){return function(){b("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var Bb=c.pathBBox=function(a){var b=Ab(a);if(b.bbox)return d(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Kb(a);for(var c,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(c=a[i],"M"==c[0])e=c[1],f=c[2],g.push(e),h.push(f);else{var k=Jb(e,f,c[1],c[2],c[3],c[4],c[5],c[6]);g=g[E](k.min.x,k.max.x),h=h[E](k.min.y,k.max.y),e=c[5],f=c[6]}var l=P[D](0,g),m=P[D](0,h),n=O[D](0,g),o=O[D](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=d(r),r},Cb=function(a){var b=d(a);return b.toString=c._path2string,b},Db=c._pathToRelative=function(a){var b=Ab(a);if(b.rel)return Cb(b.rel);c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=M.call(m[0]))switch(l[0]=M.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=c._path2string,b.rel=Cb(d),d},Eb=c._pathToAbsolute=function(a){var b=Ab(a);if(b.abs)return Cb(b.abs);if(c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],g=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=bb.call(l[0]))switch(k[0]=bb.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][E](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[E](h(p,m));break;case"M":g=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][E](l.slice(1)),d.pop(),d=d[E](h(p,m)),k=["R"][E](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=c._path2string,b.abs=Cb(d),d},Fb=function(a,b,c,d){return[a,b,c,d,c,d]},Gb=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Hb=function(a,b,c,d,e,g,h,i,j,k){var l,m=120*S/180,n=S/180*(+e||0),o=[],p=f(function(a,b,c){var d=a*N.cos(c)-b*N.sin(c),e=a*N.sin(c)+b*N.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(N.cos(S/180*e),N.sin(S/180*e),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=N.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*N.sqrt(Q((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=N.asin(((b-x)/d).toFixed(9)),z=N.asin(((j-x)/d).toFixed(9));y=w>a?S-y:y,z=w>i?S-z:z,0>y&&(y=2*S+y),0>z&&(z=2*S+z),h&&y>z&&(y-=2*S),!h&&z>y&&(z-=2*S)}var A=z-y;if(Q(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+c*N.cos(z),j=x+d*N.sin(z),o=Hb(i,j,c,d,e,0,h,C,D,[z,B,w,x])}A=z-y;var F=N.cos(y),G=N.sin(y),H=N.cos(z),I=N.sin(z),K=N.tan(A/4),L=4/3*c*K,M=4/3*d*K,O=[a,b],P=[a+L*G,b-M*F],R=[i+L*I,j-M*H],T=[i,j];if(P[0]=2*O[0]-P[0],P[1]=2*O[1]-P[1],k)return[P,R,T][E](o);o=[P,R,T][E](o).join()[J](",");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ib=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:R(j,3)*a+3*R(j,2)*i*c+3*j*i*i*e+R(i,3)*g,y:R(j,3)*b+3*R(j,2)*i*d+3*j*i*i*f+R(i,3)*h}},Jb=f(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:P[D](0,p),y:P[D](0,o)},max:{x:O[D](0,p),y:O[D](0,o)}}}),Kb=c._path2curve=f(function(a,b){var c=!b&&Ab(a);if(!b&&c.curve)return Cb(c.curve);for(var d=Eb(a),e=b&&Eb(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e,f={T:1,Q:1};if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in f)&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][E](Hb[D](0,[b.x,b.y][E](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][E](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][E](Gb(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][E](Gb(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][E](Fb(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][E](Fb(b.x,b.y,a[1],b.y));break;case"V":a=["C"][E](Fb(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][E](Fb(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)k[b]="A",e&&(l[b]="A"),a.splice(b++,0,["C"][E](c.splice(0,6)));a.splice(b,1),p=O(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],p=O(d.length,e&&e.length||0))},k=[],l=[],m="",n="",o=0,p=O(d.length,e&&e.length||0);p>o;o++){d[o]&&(m=d[o][0]),"C"!=m&&(k[o]=m,o&&(n=k[o-1])),d[o]=h(d[o],f,n),"A"!=k[o]&&"C"==m&&(k[o]="C"),i(d,o),e&&(e[o]&&(m=e[o][0]),"C"!=m&&(l[o]=m,o&&(n=l[o-1])),e[o]=h(e[o],g,n),"A"!=l[o]&&"C"==m&&(l[o]="C"),i(e,o)),j(d,e,f,g,o),j(e,d,g,f,o);var q=d[o],r=e&&e[o],s=q.length,t=e&&r.length;f.x=q[s-2],f.y=q[s-1],f.bx=_(q[s-4])||f.x,f.by=_(q[s-3])||f.y,g.bx=e&&(_(r[t-4])||g.x),g.by=e&&(_(r[t-3])||g.y),g.x=e&&r[t-2],g.y=e&&r[t-1]}return e||(c.curve=Cb(d)),e?[d,e]:d},null,Cb),Lb=(c._parseDots=f(function(a){for(var b=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=c.getRGB(g[1]),f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),b.push(f)}for(d=1,e=b.length-1;e>d;d++)if(!b[d].offset){for(var h=_(b[d-1].offset||0),i=0,j=d+1;e>j;j++)if(b[j].offset){i=b[j].offset;break}i||(i=100,j=e),i=_(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,b[d].offset=h+"%"}return b}),c._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Mb=(c._tofront=function(a,b){b.top!==a&&(Lb(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},c._toback=function(a,b){b.bottom!==a&&(Lb(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},c._insertafter=function(a,b,c){Lb(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},c._insertbefore=function(a,b,c){Lb(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},c.toMatrix=function(a,b){var c=Bb(a),d={_:{transform:G},getBBox:function(){return c}};return Nb(d,b),d.matrix}),Nb=(c.transformPath=function(a,b){return rb(a,Mb(a,b))},c._extractTransform=function(a,b){if(null==b)return a._.transform;b=I(b).replace(/\.{3}|\u2026/g,a._.transform||G);var d=c.parseTransformString(b),e=0,f=0,g=0,h=1,i=1,j=a._,k=new o;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var n,p,q,r,s,t=d[l],u=t.length,v=I(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;"t"==v&&3==u?w?(n=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-n,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ob=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Pb=c._equaliseTransform=function(a,b){b=I(b).replace(/\.{3}|\u2026/g,a),a=c.parseTransformString(a)||[],b=c.parseTransformString(b)||[];
for(var d,e,f,g,h=O(a.length,b.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ob(b[k]),g=b[k]||Ob(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=O(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])}return{from:i,to:j}};c._getContainer=function(a,b,d,e){var f;return f=null!=e||c.is(a,"object")?a:A.doc.getElementById(a),null!=f?f.tagName?null==b?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:b,height:d}:{container:1,x:a,y:b,width:d,height:e}:void 0},c.pathToRelative=Db,c._engine={},c.path2curve=Kb,c.matrix=function(a,b,c,d,e,f){return new o(a,b,c,d,e,f)},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var c=N.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof o&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new o(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,b,d){a=c.rad(a),b=b||0,d=d||0;var e=+N.cos(a).toFixed(9),f=+N.sin(a).toFixed(9);this.add(e,f,-f,e,b,d),this.add(1,0,0,1,-b,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[I.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return c.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=N.sqrt(b(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=N.sqrt(b(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=c.deg(N.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=c.deg(N.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[J]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:G)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:G)+(b.rotate?"r"+[b.rotate,0,0]:G)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(o.prototype);var Qb=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);v.safari="Apple Computer, Inc."==navigator.vendor&&(Qb&&Qb[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Qb&&Qb[1]<8?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:mb;for(var Rb=function(){this.returnValue=!1},Sb=function(){return this.originalEvent.preventDefault()},Tb=function(){this.cancelBubble=!0},Ub=function(){return this.originalEvent.stopPropagation()},Vb=function(a){var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,c=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Wb=function(){return A.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Vb(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),F&&L[b]){var f=function(b){for(var e=Vb(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Sb,b.stopPropagation=Ub;break}return c.call(d,b,e.x,e.y)};a.addEventListener(L[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),F&&L[b]&&a.removeEventListener(L[b],f,!1),!0}}:A.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||A.win.event;var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,e=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Rb,a.stopPropagation=a.stopPropagation||Tb,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),Xb=[],Yb=function(a){for(var c,d=a.clientX,e=a.clientY,f=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,g=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,h=Xb.length;h--;){if(c=Xb[h],F&&a.touches){for(var i,j=a.touches.length;j--;)if(i=a.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;A.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,A.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&b("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f,b("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},Zb=function(a){c.unmousemove(Yb).unmouseup(Zb);for(var d,e=Xb.length;e--;)d=Xb[e],d.el._drag={},b("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,a);Xb=[]},$b=c.el={},_b=K.length;_b--;)!function(a){c[a]=$b[a]=function(b,d){return c.is(b,"function")&&(this.events=this.events||[],this.events.push({name:a,f:b,unbind:Wb(this.shape||this.node||A.doc,a,b,d||this)})),this},c["un"+a]=$b["un"+a]=function(b){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!c.is(b,"undefined")&&d[e].f!=b||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(K[_b]);$b.data=function(a,d){var e=kb[this.id]=kb[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[z](f)&&this.data(f,a[f]);return this}return b("raphael.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("raphael.data.set."+this.id,this,d,a),this},$b.removeData=function(a){return null==a?kb[this.id]={}:kb[this.id]&&delete kb[this.id][a],this},$b.getData=function(){return d(kb[this.id]||{})},$b.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},$b.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var ac=[];$b.drag=function(a,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,m=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;if(this._drag.id=i.identifier,F&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Xb.length&&c.mousemove(Yb).mouseup(Zb),Xb.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("raphael.drag.start."+this.id,d),a&&b.on("raphael.drag.move."+this.id,a),e&&b.on("raphael.drag.end."+this.id,e),b("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},ac.push({el:this,start:i}),this.mousedown(i),this},$b.onDragOver=function(a){a?b.on("raphael.drag.over."+this.id,a):b.unbind("raphael.drag.over."+this.id)},$b.undrag=function(){for(var a=ac.length;a--;)ac[a].el==this&&(this.unmousedown(ac[a].start),ac.splice(a,1),b.unbind("raphael.drag.*."+this.id));!ac.length&&c.unmousemove(Yb).unmouseup(Zb),Xb=[]},v.circle=function(a,b,d){var e=c._engine.circle(this,a||0,b||0,d||0);return this.__set__&&this.__set__.push(e),e},v.rect=function(a,b,d,e,f){var g=c._engine.rect(this,a||0,b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.ellipse=function(a,b,d,e){var f=c._engine.ellipse(this,a||0,b||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},v.path=function(a){a&&!c.is(a,U)&&!c.is(a[0],V)&&(a+=G);var b=c._engine.path(c.format[D](c,arguments),this);return this.__set__&&this.__set__.push(b),b},v.image=function(a,b,d,e,f){var g=c._engine.image(this,a||"about:blank",b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.text=function(a,b,d){var e=c._engine.text(this,a||0,b||0,I(d));return this.__set__&&this.__set__.push(e),e},v.set=function(a){!c.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var b=new mc(a);return this.__set__&&this.__set__.push(b),b.paper=this,b.type="set",b},v.setStart=function(a){this.__set__=a||this.set()},v.setFinish=function(){var a=this.__set__;return delete this.__set__,a},v.getSize=function(){var a=this.canvas.parentNode;return{width:a.offsetWidth,height:a.offsetHeight}},v.setSize=function(a,b){return c._engine.setSize.call(this,a,b)},v.setViewBox=function(a,b,d,e,f){return c._engine.setViewBox.call(this,a,b,d,e,f)},v.top=v.bottom=null,v.raphael=c;var bc=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(A.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(A.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};v.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=A.doc.elementFromPoint(a,b);if(A.win.opera&&"svg"==e.tagName){var f=bc(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},v.getElementsByBBox=function(a){var b=this.set();return this.forEach(function(d){c.isBBoxIntersect(d.getBBox(),a)&&b.push(d)}),b},v.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},v.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},v.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},$b.isPointInside=function(a,b){var d=this.realPath=qb[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=c.transformPath(d,this.attr("transform"))),c.isPointInsidePath(d,a,b)},$b.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=qb[this.type](this),b.bboxwt=Bb(this.realPath),b.bboxwt.toString=p,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=qb[this.type](this)),b.bbox=Bb(rb(this.realPath,this.matrix)),b.bbox.toString=p,b.dirty=b.dirtyT=0),b.bbox)},$b.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},$b.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||qb[this.type](this);f=this.matrix?rb(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cc=function(a,b,d,e,f,g,h,i,l){return null==l?j(a,b,d,e,f,g,h,i):c.findDotsAtSegment(a,b,d,e,f,g,h,i,k(a,b,d,e,f,g,h,i,l))},dc=function(a,b){return function(d,e,f){d=Kb(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(b&&!m.start){if(k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!b)return k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:b?m:c.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},ec=dc(1),fc=dc(),gc=dc(0,1);c.getTotalLength=ec,c.getPointAtLength=fc,c.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return gc(a,b).end;var d=gc(a,c,1);return b?gc(d,b).end:d},$b.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():ec(a)},$b.getPointAtLength=function(a){var b=this.getPath();if(b)return fc(b,a)},$b.getPath=function(){var a,b=c._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return b&&(a=b(this)),a},$b.getSubpath=function(a,b){var d=this.getPath();if(d)return c.getSubpath(d,a,b)};var hc=c.easing_formulas={linear:function(a){return a},"<":function(a){return R(a,1.7)},">":function(a){return R(a,.48)},"<>":function(a){var b=.48-a/1.04,c=N.sqrt(.1734+b*b),d=c-b,e=R(Q(d),1/3)*(0>d?-1:1),f=-c-b,g=R(Q(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:R(2,-10*a)*N.sin(2*(a-.075)*S/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};hc.easeIn=hc["ease-in"]=hc["<"],hc.easeOut=hc["ease-out"]=hc[">"],hc.easeInOut=hc["ease-in-out"]=hc["<>"],hc["back-in"]=hc.backIn,hc["back-out"]=hc.backOut;var ic=[],jc=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},kc=function(){for(var a=+new Date,d=0;d<ic.length;d++){var e=ic[d];if(!e.el.removed&&!e.paused){var f,g,h=a-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&ic.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var r in k)if(k[z](r)){switch(db[r]){case T:f=+k[r]+q*i*l[r];break;case"colour":f="rgb("+[lc($(k[r].r+q*i*l[r].r)),lc($(k[r].g+q*i*l[r].g)),lc($(k[r].b+q*i*l[r].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[r].length;u>t;t++){f[t]=[k[r][t][0]];for(var v=1,w=k[r][t].length;w>v;v++)f[t][v]=+k[r][t][v]+q*i*l[r][t][v];f[t]=f[t].join(H)}f=f.join(H);break;case"transform":if(l[r].real)for(f=[],t=0,u=k[r].length;u>t;t++)for(f[t]=[k[r][t][0]],v=1,w=k[r][t].length;w>v;v++)f[t][v]=k[r][t][v]+q*i*l[r][t][v];else{var x=function(a){return+k[r][a]+q*i*l[r][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==r)for(f=[],t=4;t--;)f[t]=+k[r][t]+q*i*l[r][t];break;default:var y=[][E](k[r]);for(f=[],t=n.paper.customAttributes[r].length;t--;)f[t]=+y[t]+q*i*l[r][t]}o[r]=f}n.attr(o),function(a,c,d){setTimeout(function(){b("raphael.anim.frame."+a,c,d)})}(n.id,n,e.anim)}else{if(function(a,d,e){setTimeout(function(){b("raphael.anim.frame."+d.id,d,e),b("raphael.anim.finish."+d.id,d,e),c.is(a,"function")&&a.call(d)})}(e.callback,n,e.anim),n.attr(m),ic.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[z](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),s(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&s(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}c.svg&&n&&n.paper&&n.paper.safari(),ic.length&&jc(kc)},lc=function(a){return a>255?255:0>a?0:a};$b.animateWith=function(a,b,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof r?d:c.animation(d,e,f,g);s(i,h,i.percents[0],null,h.attr());for(var j=0,k=ic.length;k>j;j++)if(ic[j].anim==b&&ic[j].el==a){ic[k-1].start=ic[j].start;break}return h},$b.onAnimation=function(a){return a?b.on("raphael.anim.frame."+this.id,a):b.unbind("raphael.anim.frame."+this.id),this},r.prototype.delay=function(a){var b=new r(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},r.prototype.repeat=function(a){var b=new r(this.anim,this.ms);return b.del=this.del,b.times=N.floor(O(a,0))||1,b},c.animation=function(a,b,d,e){if(a instanceof r)return a;(c.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),b=+b||0;var f,g,h={};for(g in a)a[z](g)&&_(g)!=g&&_(g)+"%"!=g&&(f=!0,h[g]=a[g]);if(f)return d&&(h.easing=d),e&&(h.callback=e),new r({100:h},b);if(e){var i=0;for(var j in a){var k=ab(j);a[z](j)&&k>i&&(i=k)}i+="%",!a[i].callback&&(a[i].callback=e)}return new r(a,b)},$b.animate=function(a,b,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof r?a:c.animation(a,b,d,e);return s(g,f,g.percents[0],null,f.attr()),f},$b.setTime=function(a,b){return a&&null!=b&&this.status(a,P(b,a.ms)/a.ms),this},$b.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return s(a,this,-1,P(b,1)),this;for(c=ic.length;c>f;f++)if(d=ic[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},$b.pause=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.pause."+this.id,this,ic[c].anim)!==!1&&(ic[c].paused=!0);return this},$b.resume=function(a){for(var c=0;c<ic.length;c++)if(ic[c].el.id==this.id&&(!a||ic[c].anim==a)){var d=ic[c];b("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},$b.stop=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.stop."+this.id,this,ic[c].anim)!==!1&&ic.splice(c--,1);return this},b.on("raphael.remove",t),b.on("raphael.clear",t),$b.toString=function(){return"Raphaël’s object"};var mc=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=$b.constructor&&a[b].constructor!=mc||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},nc=mc.prototype;nc.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=$b.constructor&&a.constructor!=mc||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},nc.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},nc.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var oc in $b)$b[z](oc)&&(nc[oc]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][D](c,b)})}}(oc));return nc.attr=function(a,b){if(a&&c.is(a,V)&&c.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,b);return this},nc.clear=function(){for(;this.length;)this.pop()},nc.splice=function(a,b){a=0>a?O(this.length+a,0):a,b=O(0,P(this.length-a,b));var c,d=[],e=[],f=[];for(c=2;c<arguments.length;c++)f.push(arguments[c]);for(c=0;b>c;c++)e.push(this[a+c]);for(;c<this.length-a;c++)d.push(this[a+c]);var g=f.length;for(c=0;c<g+d.length;c++)this.items[a+c]=this[a+c]=g>c?f[c]:d[c-g];for(c=this.items.length=this.length-=b-g;this[c];)delete this[c++];return new mc(e)},nc.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},nc.animate=function(a,b,d,e){(c.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=c.is(d,U)?d:g;var k=c.animation(a,b,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},nc.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},nc.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=P[D](0,a),b=P[D](0,b),c=O[D](0,c),d=O[D](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},nc.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},nc.toString=function(){return"Raphaël‘s set"},nc.glow=function(a){var b=this.paper.set();return this.forEach(function(c){var d=c.glow(a);null!=d&&d.forEach(function(a){b.push(a)})}),b},nc.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(c=!0,!1):void 0}),c},c.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[z](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=ab(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[z](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[z](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},v.getFont=function(a,b,d,e){if(e=e||"normal",d=d||"normal",b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400,c.fonts){var f=c.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,G)+"(\\s|$)","i");for(var h in c.fonts)if(c.fonts[z](h)&&g.test(h)){f=c.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=b||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},v.print=function(a,b,d,e,f,g,h,i){g=g||"middle",h=O(P(h||0,1),-1),i=O(P(i||1,3),1);var j,k=I(d)[J](G),l=0,m=0,n=G;if(c.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[J](w),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,x=0,m=0,r+=q*i;else{var v=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(v.w||e.w)+(v.k&&v.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=c.transformPath(x.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(b-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},v.add=function(a){if(c.is(a,"array"))for(var b,d=this.set(),e=0,f=a.length;f>e;e++)b=a[e]||{},x[z](b.type)&&d.push(this[b.type]().attr(b));return d},c.format=function(a,b){var d=c.is(b,V)?[0][E](b):arguments;return a&&c.is(a,U)&&d.length-1&&(a=a.replace(y,function(a,b){return null==d[++b]?G:d[b]})),a||G},c.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),c.ninja=function(){return B.was?A.win.Raphael=B.is:delete Raphael,c},c.st=nc,b.on("raphael.DOMload",function(){u=!0}),function(a,b,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):c.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(b,d=function(){a.removeEventListener(b,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),function(){if(c.svg){var a="hasOwnProperty",b=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=c.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};c.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[a](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),b(e[f])):d.setAttribute(f,b(e[f])))}else d=c._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(a,e){var j="linear",k=a.id+e,m=.5,n=.5,o=a.node,p=a.paper,r=o.style,s=c._g.doc.getElementById(k);if(!s){if(e=b(e).replace(c._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(c.rad(t)),f.sin(c.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=c._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),a.gradient&&k!=a.gradient.id&&(p.defs.removeChild(a.gradient),delete a.gradient),!a.gradient){s=q(j+"Gradient",{id:k}),a.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:a.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}return q(o,{fill:"url('"+document.location+"#"+k+"')",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=b(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y+"-obj"+d.id;c._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=c._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-E*u):(g=E*u,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=c.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-g):(g=0,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:c.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[a](k)&&!p[k]){var F=c._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,c,d){if(c=u[b(c).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=c.length;h--;)g[h]=c[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[a](o)){if(!c._availableAttrs[a](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"title":var u=i.getElementsByTagName("title");if(u.length&&(u=u[0]))u.firstChild.nodeValue=p;else{u=q("title");var w=c._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u)}break;case"href":case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var z=q("a");x.insertBefore(z,i),z.appendChild(i),x=z}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var A=b(p).split(j);if(4==A.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var B=q("clipPath"),C=q("rect");B.id=c.createUUID(),q(C,{x:A[0],y:A[1],width:A[2],height:A[3]}),B.appendChild(C),d.paper.defs.appendChild(B),q(i,{"clip-path":"url(#"+B.id+")"}),d.clip=C}if(!p){var D=i.getAttribute("clip-path");if(D){var E=c._g.doc.getElementById(D.replace(/(^url\(#|\)$)/g,l));E&&E.parentNode.removeChild(E),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=c._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var F=b(p).match(c._ISURL);if(F){B=q("pattern");var G=q("image");B.id=c.createUUID(),q(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(G,{x:0,y:0,"xlink:href":F[1]}),B.appendChild(G),function(a){c._preload(F[1],function(){var b=this.offsetWidth,c=this.offsetHeight;q(a,{width:b,height:c}),q(G,{width:b,height:c}),d.paper.safari()})}(B),d.paper.defs.appendChild(B),q(i,{fill:"url(#"+B.id+")"}),d.pattern=B,d.pattern&&s(d);break}var H=c.getRGB(p);if(H.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var I=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(I){var J=I.getElementsByTagName("stop");q(J[J.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!c.is(k.opacity,"undefined")&&c.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!c.is(k["fill-opacity"],"undefined")&&c.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});H[a]("opacity")&&q(i,{"fill-opacity":H.opacity>1?H.opacity/100:H.opacity});case"stroke":H=c.getRGB(p),i.setAttribute(o,H.hex),"stroke"==o&&H[a]("opacity")&&q(i,{"stroke-opacity":H.opacity>1?H.opacity/100:H.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p);break;
case"opacity":k.gradient&&!k[a]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){I=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),I&&(J=I.getElementsByTagName("stop"),q(J[J.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var K=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[K]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[a]("text")||f[a]("font")||f[a]("font-size")||f[a]("x")||f[a]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(c._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[a]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=b(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(c._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&c.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a){return a.parentNode&&"a"===a.parentNode.tagName.toLowerCase()?a.parentNode:a},A=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.matrix=c.matrix(),this.realPath=null,this.paper=b,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},B=c.el;A.prototype=B,B.constructor=A,c._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new A(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},B.rotate=function(a,c,e){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,c,e]])),this},B.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this},B.translate=function(a,c){return this.removed?this:(a=b(a).split(j),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this.transform(this._.transform.concat([["t",a,c]])),this)},B.transform=function(b){var d=this._;if(null==b)return d.transform;if(c._extractTransform(this,b),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[a]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},B.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},B.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},B.remove=function(){var a=z(this.node);if(!this.removed&&a.parentNode){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),c._tear(this,b),a.parentNode.removeChild(a),this.removeData();for(var d in this)this[d]="function"==typeof this[d]?c._removedFactory(d):null;this.removed=!0}},B._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b,c=!1;this.paper.canvas.parentElement?b=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(b=this.paper.canvas.parentNode.style),b&&"none"==b.display&&(c=!0,b.display="");var d={};try{d=this.node.getBBox()}catch(e){d={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{d=d||{},c&&(b.display="none")}return a&&this.hide(),d},B.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if("fill"==b&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==b)return this._.transform;for(var g=b.split(j),h={},i=0,l=g.length;l>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return l-1?h:h[g[0]]}if(null==d&&c.is(b,"array")){for(h={},i=0,l=b.length;l>i;i++)h[b[i]]=this.attr(b[i]);return h}if(null!=d){var m={};m[b]=d}else null!=b&&c.is(b,"object")&&(m=b);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[a](n)&&m[a](n)&&c.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[a](p)&&(m[p]=o[p])}return w(this,m),this},B.toFront=function(){if(this.removed)return this;var a=z(this.node);a.parentNode.appendChild(a);var b=this.paper;return b.top!=this&&c._tofront(this,b),this},B.toBack=function(){if(this.removed)return this;var a=z(this.node),b=a.parentNode;b.insertBefore(a,b.firstChild),c._toback(this,this.paper);this.paper;return this},B.insertAfter=function(a){if(this.removed||!a)return this;var b=z(this.node),d=z(a.node||a[a.length-1].node);return d.nextSibling?d.parentNode.insertBefore(b,d.nextSibling):d.parentNode.appendChild(b),c._insertafter(this,a,this.paper),this},B.insertBefore=function(a){if(this.removed||!a)return this;var b=z(this.node),d=z(a.node||a[0].node);return d.parentNode.insertBefore(b,d),c._insertbefore(this,a,this.paper),this},B.blur=function(a){var b=this;if(0!==+a){var d=q("filter"),e=q("feGaussianBlur");b.attrs.blur=a,d.id=c.createUUID(),q(e,{stdDeviation:+a||1.5}),d.appendChild(e),b.paper.defs.appendChild(d),b._blur=d,q(b.node,{filter:"url(#"+d.id+")"})}else b._blur&&(b._blur.parentNode.removeChild(b._blur),delete b._blur,delete b.attrs.blur),b.node.removeAttribute("filter");return b},c._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new A(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},c._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:b,y:c,width:d,height:e,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},c._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new A(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},c._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},c._engine.text=function(a,b,d,e){var f=q("text");a.canvas&&a.canvas.appendChild(f);var g=new A(f,a);return g.attrs={x:b,y:d,"text-anchor":"middle",text:e,"font-family":c._availableAttrs["font-family"],"font-size":c._availableAttrs["font-size"],stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},c._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a&&a.container,d=a.x,e=a.y,f=a.width,g=a.height;if(!b)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==b?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",c._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i)),b=new c._Paper,b.width=f,b.height=g,b.canvas=i,b.clear(),b._left=b._top=0,h&&(b.renderfix=function(){}),b.renderfix(),b},c._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=this.getSize(),j=g(c/i.width,d/i.height),l=this.top,n=e?"xMidYMid meet":"xMinYMin";for(null==a?(this._vbSize&&(j=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=j,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:n});j&&l;)h="stroke-width"in l.attrs?l.attrs["stroke-width"]:1,l.attr({"stroke-width":h}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[a,b,c,d,!!e],this},c.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},c.prototype.clear=function(){c.eve("raphael.clear",this);for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël "+c.version)),a.appendChild(this.desc),a.appendChild(this.defs=q("defs"))},c.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null};var C=c.st;for(var D in B)B[a](D)&&!C[a](D)&&(C[D]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(D))}}(),function(){if(c.vml){var a="hasOwnProperty",b=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=c.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(a){var d=/[ahqstv]/gi,e=c._pathToAbsolute;if(b(a).match(d)&&(e=c._path2curve),d=/[clmz]/g,e==c._pathToAbsolute&&!b(a).match(d)){var g=b(a).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(a);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(a,b,d){var e=c.matrix();return e.rotate(-a,.5,.5),{dx:e.x(b,d),dy:e.y(b,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};c.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,c,d){for(var e=b(c).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[a](t)&&(m[t]=i[t]);if(q&&(m.path=c._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~b(m.path).toLowerCase().indexOf("r")?c._pathToAbsolute(m.path):m.path),e._.dirty=1,"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=b(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||c._g.doc.createElement("div"),I=H.style;I.clip=c.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=b(i.fill).match(c._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],c._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=c.getRGB(i.fill).hex,K.src=o,K.type="solid",c.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=b(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+c.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=c.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),"stroke-dasharray"in i){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[a](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=b(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=c.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(a,f,g){a.attrs=a.attrs||{};var h=(a.attrs,Math.pow),i="linear",j=".5 .5";if(a.attrs.gradient=f,f=b(f).replace(c._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=c._parseDots(f);if(!l)return null;if(a=a.shape||a.node,l.length){a.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),a.appendChild(g)}return 1},D=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=b,this.matrix=c.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},E=c.el;D.prototype=E,E.constructor=D,E.transform=function(a){if(null==a)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=a=b(a).replace(/\.{3}|\u2026/g,this._.transform||o)),c._extractTransform(this,f+a);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~b(this.attrs.fill).indexOf("-"),l=!b(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=b(h),i.offset=h.offset();return null!==d&&(this._.transform=d,c._extractTransform(this,d)),this},E.rotate=function(a,c,e){if(this.removed)return this;if(null!=a){if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,c,e]])),this}},E.translate=function(a,c){return this.removed?this:(a=b(a).split(k),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=c),this.transform(this._.transform.concat([["t",a,c]])),this)},E.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E.auxGetBBox=c.el.getBBox,E.getBBox=function(){var a=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var b={},c=1/this.paper._viewBoxShift.scale;return b.x=a.x-this.paper._viewBoxShift.dx,b.x*=c,b.y=a.y-this.paper._viewBoxShift.dy,b.y*=c,b.width=a.width*c,b.height=a.height*c,b.x2=b.x+b.width,b.y2=b.y+b.height,b}return a},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),c.eve.unbind("raphael.*.*."+this.id),c._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;this.removed=!0}},E.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if(b==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=b.split(k),h={},i=0,m=g.length;m>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&c.is(b,"array")){for(h={},i=0,m=b.length;m>i;i++)h[b[i]]=this.attr(b[i]);return h}var n;null!=d&&(n={},n[b]=d),null==d&&c.is(b,"object")&&(n=b);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[a](o)&&n[a](o)&&c.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[a](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&c._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper)),this)},E.insertAfter=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this)},E.insertBefore=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),c._insertbefore(this,a,this.paper),this)},E.blur=function(a){var b=this.node.runtimeStyle,d=b.filter;return d=d.replace(r,o),0!==+a?(this.attrs.blur=a,b.filter=d+n+m+".Blur(pixelradius="+(+a||1.5)+")",b.margin=c.format("-{0}px 0 0 -{0}px",f(+a||1.5))):(b.filter=d,b.margin=0,delete this.attrs.blur),this},c._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},c._engine.rect=function(a,b,d,e,f,g){var h=c._rectPath(b,d,e,f,g),i=a.path(h),j=i.attrs;return i.X=j.x=b,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},c._engine.ellipse=function(a,b,c,d,e){{var f=a.path();f.attrs}return f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},c._engine.circle=function(a,b,c,d){{var e=a.path();e.attrs}return e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},c._engine.image=function(a,b,d,e,f,g){var h=c._rectPath(d,e,f,g),i=a.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=b,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=b,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},c._engine.text=function(a,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=c.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=b(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,a),l={fill:"#000",stroke:"none",font:c._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=b(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),a.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},c._engine.setSize=function(a,b){var d=this.canvas.style;return this.width=a,this.height=b,a==+a&&(a+="px"),b==+b&&(b+="px"),d.width=a,d.height=b,d.clip="rect(0 "+a+" "+b+" 0)",this._viewBox&&c._engine.setViewBox.apply(this,this._viewBox),this},c._engine.setViewBox=function(a,b,d,e,f){c.eve("raphael.setViewBox",this,this._viewBox,[a,b,d,e,f]);var g,h,i=this.getSize(),j=i.width,k=i.height;return f&&(g=k/e,h=j/d,j>d*g&&(a-=(j-d*g)/2/g),k>e*h&&(b-=(k-e*h)/2/h)),this._viewBox=[a,b,d,e,!!f],this._viewBoxShift={dx:-a,dy:-b,scale:i},this.forEach(function(a){a.transform("...")}),this};var F;c._engine.initWin=function(a){var b=a.document;b.styleSheets.length<31?b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):b.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},c._engine.initWin(c._g.win),c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a.container,d=a.height,e=a.width,f=a.x,g=a.y;if(!b)throw new Error("VML container not found.");var h=new c._Paper,i=h.canvas=c._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=c._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==b?(c._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i),h.renderfix=function(){},h},c.prototype.clear=function(){c.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=c._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},c.prototype.remove=function(){c.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;return!0};var G=c.st;for(var H in E)E[a](H)&&!G[a](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}(),B.was?A.win.Raphael=c:Raphael=c,"object"==typeof exports&&(module.exports=c),c});
!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:NaN}function r(n){return null===n?NaN:+n}function i(n){return!isNaN(n)}function u(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n(t[u],e)<0?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n(t[u],e)>0?i=u:r=u+1}return r}}}function o(n){return n.length}function a(n){for(var t=1;n*t%1;)t*=10;return t}function l(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function c(){this._=Object.create(null)}function f(n){return(n+="")===bo||n[0]===_o?_o+n:n}function s(n){return(n+="")[0]===_o?n.slice(1):n}function h(n){return f(n)in this._}function p(n){return(n=f(n))in this._&&delete this._[n]}function g(){var n=[];for(var t in this._)n.push(s(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function y(){this._=Object.create(null)}function m(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=wo.length;r>e;++e){var i=wo[e]+t;if(i in n)return i}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,i=-1,u=r.length;++i<u;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new c;return t.on=function(t,i){var u,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,u=e.indexOf(o)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function S(){ao.event.preventDefault()}function k(){for(var n,t=ao.event;n=t.sourceEvent;)t=n;return t}function N(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=ao.event;i.target=n,ao.event=i,t[i.type].apply(e,r)}finally{ao.event=u}}},t}function E(n){return ko(n,Co),n}function A(n){return"function"==typeof n?n:function(){return No(n,this)}}function C(n){return"function"==typeof n?n:function(){return Eo(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ao.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?u:i}function L(n){return n.trim().replace(/\s+/g," ")}function q(n){return new RegExp("(?:^|\\s+)"+ao.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=T(n).map(D);var i=n.length;return"function"==typeof t?r:e}function D(n){var t=q(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",L(i+" "+n))):e.setAttribute("class",L(i.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function U(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function j(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e===zo&&t.documentElement.namespaceURI===zo?t.createElement(n):t.createElementNS(e,n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=ao.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return Ao(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,u=n[e],o=0,a=u.length;a>o;o++)(i=u[o])&&t(i,o,e);return n}function Z(n){return ko(n,qo),n}function V(n){var t,e;return function(r,i,u){var o,a=n[u].update,l=a.length;for(u!=e&&(e=u,t=0),i>=t&&(t=i+1);!(o=a[t])&&++t<l;);return o}}function X(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function i(){var i=l(t,co(arguments));r.call(this),this.addEventListener(n,this[o]=i,i.$=e),i._=t}function u(){var t,e=new RegExp("^__on([^.]+)"+ao.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),l=$;a>0&&(n=n.slice(0,a));var c=To.get(n);return c&&(n=c,l=B),a?t?i:r:t?b:u}function $(n,t){return function(e){var r=ao.event;ao.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ao.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Do,i="click"+r,u=ao.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==Ro&&(Ro="onselectstart"in e?!1:x(e.style,"userSelect")),Ro){var o=n(e).style,a=o[Ro];o[Ro]="none"}return function(n){if(u.on(r,null),Ro&&(o[Ro]=a),n){var t=function(){u.on(i,null)};u.on(i,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var i=r.createSVGPoint();if(0>Po){var u=t(n);if(u.scrollX||u.scrollY){r=ao.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var o=r[0][0].getScreenCTM();Po=!(o.f||o.e),r.remove()}}return Po?(i.x=e.pageX,i.y=e.pageY):(i.x=e.clientX,i.y=e.clientY),i=i.matrixTransform(n.getScreenCTM().inverse()),[i.x,i.y]}var a=n.getBoundingClientRect();return[e.clientX-a.left-n.clientLeft,e.clientY-a.top-n.clientTop]}function G(){return ao.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nn(n){return n>1?0:-1>n?Fo:Math.acos(n)}function tn(n){return n>1?Io:-1>n?-Io:Math.asin(n)}function en(n){return((n=Math.exp(n))-1/n)/2}function rn(n){return((n=Math.exp(n))+1/n)/2}function un(n){return((n=Math.exp(2*n))-1)/(n+1)}function on(n){return(n=Math.sin(n/2))*n}function an(){}function ln(n,t,e){return this instanceof ln?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ln?new ln(n.h,n.s,n.l):_n(""+n,wn,ln):new ln(n,t,e)}function cn(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?u+(o-u)*n/60:180>n?o:240>n?u+(o-u)*(240-n)/60:u}function i(n){return Math.round(255*r(n))}var u,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,u=2*e-o,new mn(i(n+120),i(n),i(n-120))}function fn(n,t,e){return this instanceof fn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof fn?new fn(n.h,n.c,n.l):n instanceof hn?gn(n.l,n.a,n.b):gn((n=Sn((n=ao.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new fn(n,t,e)}function sn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new hn(e,Math.cos(n*=Yo)*t,Math.sin(n)*t)}function hn(n,t,e){return this instanceof hn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof hn?new hn(n.l,n.a,n.b):n instanceof fn?sn(n.h,n.c,n.l):Sn((n=mn(n)).r,n.g,n.b):new hn(n,t,e)}function pn(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200;return i=vn(i)*na,r=vn(r)*ta,u=vn(u)*ea,new mn(yn(3.2404542*i-1.5371385*r-.4985314*u),yn(-.969266*i+1.8760108*r+.041556*u),yn(.0556434*i-.2040259*r+1.0572252*u))}function gn(n,t,e){return n>0?new fn(Math.atan2(e,t)*Zo,Math.sqrt(t*t+e*e),n):new fn(NaN,NaN,n)}function vn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function dn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function yn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function mn(n,t,e){return this instanceof mn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mn?new mn(n.r,n.g,n.b):_n(""+n,mn,cn):new mn(n,t,e)}function Mn(n){return new mn(n>>16,n>>8&255,255&n)}function xn(n){return Mn(n)+""}function bn(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _n(n,t,e){var r,i,u,o=0,a=0,l=0;if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(Nn(i[0]),Nn(i[1]),Nn(i[2]))}return(u=ua.get(n))?t(u.r,u.g,u.b):(null==n||"#"!==n.charAt(0)||isNaN(u=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&u)>>4,o=o>>4|o,a=240&u,a=a>>4|a,l=15&u,l=l<<4|l):7===n.length&&(o=(16711680&u)>>16,a=(65280&u)>>8,l=255&u)),t(o,a,l))}function wn(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-u,l=(o+u)/2;return a?(i=.5>l?a/(o+u):a/(2-o-u),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=NaN,i=l>0&&1>l?0:r),new ln(r,i,l)}function Sn(n,t,e){n=kn(n),t=kn(t),e=kn(e);var r=dn((.4124564*n+.3575761*t+.1804375*e)/na),i=dn((.2126729*n+.7151522*t+.072175*e)/ta),u=dn((.0193339*n+.119192*t+.9503041*e)/ea);return hn(116*i-16,500*(r-i),200*(i-u))}function kn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nn(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function En(n){return"function"==typeof n?n:function(){return n}}function An(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Cn(t,e,n,r)}}function Cn(n,t,e,r){function i(){var n,t=l.status;if(!t&&Ln(l)||t>=200&&300>t||304===t){try{n=e.call(u,l)}catch(r){return void o.error.call(u,r)}o.load.call(u,n)}else o.error.call(u,l)}var u={},o=ao.dispatch("beforesend","progress","load","error"),a={},l=new XMLHttpRequest,c=null;return!this.XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(n)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=i:l.onreadystatechange=function(){l.readyState>3&&i()},l.onprogress=function(n){var t=ao.event;ao.event=n;try{o.progress.call(u,l)}finally{ao.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.responseType=function(n){return arguments.length?(c=n,u):c},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(co(arguments)))}}),u.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),l.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),l.setRequestHeader)for(var f in a)l.setRequestHeader(f,a[f]);return null!=t&&l.overrideMimeType&&l.overrideMimeType(t),null!=c&&(l.responseType=c),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),o.beforesend.call(u,l),l.send(null==r?null:r),u},u.abort=function(){return l.abort(),u},ao.rebind(u,o,"on"),null==r?u:u.get(zn(r))}function zn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Ln(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qn(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var i=e+t,u={c:n,t:i,n:null};return aa?aa.n=u:oa=u,aa=u,la||(ca=clearTimeout(ca),la=1,fa(Tn)),u}function Tn(){var n=Rn(),t=Dn()-n;t>24?(isFinite(t)&&(clearTimeout(ca),ca=setTimeout(Tn,t)),la=0):(la=1,fa(Tn))}function Rn(){for(var n=Date.now(),t=oa;t;)n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n;return n}function Dn(){for(var n,t=oa,e=1/0;t;)t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:oa=t.n;return aa=n,e}function Pn(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Un(n,t){var e=Math.pow(10,3*xo(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function jn(n){var t=n.decimal,e=n.thousands,r=n.grouping,i=n.currency,u=r&&e?function(n,t){for(var i=n.length,u=[],o=0,a=r[0],l=0;i>0&&a>0&&(l+a+1>t&&(a=Math.max(1,t-l)),u.push(n.substring(i-=a,i+a)),!((l+=a+1)>t));)a=r[o=(o+1)%r.length];return u.reverse().join(e)}:m;return function(n){var e=ha.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",l=e[4]||"",c=e[5],f=+e[6],s=e[7],h=e[8],p=e[9],g=1,v="",d="",y=!1,m=!0;switch(h&&(h=+h.substring(1)),(c||"0"===r&&"="===o)&&(c=r="0",o="="),p){case"n":s=!0,p="g";break;case"%":g=100,d="%",p="f";break;case"p":g=100,d="%",p="r";break;case"b":case"o":case"x":case"X":"#"===l&&(v="0"+p.toLowerCase());case"c":m=!1;case"d":y=!0,h=0;break;case"s":g=-1,p="r"}"$"===l&&(v=i[0],d=i[1]),"r"!=p||h||(p="g"),null!=h&&("g"==p?h=Math.max(1,Math.min(21,h)):"e"!=p&&"f"!=p||(h=Math.max(0,Math.min(20,h)))),p=pa.get(p)||Fn;var M=c&&s;return function(n){var e=d;if(y&&n%1)return"";var i=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>g){var l=ao.formatPrefix(n,h);n=l.scale(n),e=l.symbol+d}else n*=g;n=p(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=m?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!c&&s&&(x=u(x,1/0));var S=v.length+x.length+b.length+(M?0:i.length),k=f>S?new Array(S=f-S+1).join(r):"";return M&&(x=u(k+x,k.length?f-b.length:1/0)),i+=v,n=x+b,("<"===o?i+n+k:">"===o?k+i+n:"^"===o?k.substring(0,S>>=1)+i+n+k.substring(S):i+(M?n:k+n))+e}}}function Fn(n){return n+""}function Hn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function On(n,t,e){function r(t){var e=n(t),r=u(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new va(e-1)),1),e}function u(n,e){return t(n=new va(+n),e),n}function o(n,r,u){var o=i(n),a=[];if(u>1)for(;r>o;)e(o)%u||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{va=Hn;var r=new Hn;return r._=n,o(r,t,e)}finally{va=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=o;var l=n.utc=In(n);return l.floor=l,l.round=In(r),l.ceil=In(i),l.offset=In(u),l.range=a,n}function In(n){return function(t,e){try{va=Hn;var r=new Hn;return r._=t,n(r,e)._}finally{va=Date}}}function Yn(n){function t(n){function t(t){for(var e,i,u,o=[],a=-1,l=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(l,a)),null!=(i=ya[e=n.charAt(++a)])&&(e=n.charAt(++a)),(u=A[e])&&(e=u(t,null==i?"e"===e?" ":"0":i)),o.push(e),l=a+1);return o.push(n.slice(l,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},i=e(r,n,t,0);if(i!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var u=null!=r.Z&&va!==Hn,o=new(u?Hn:va);return"j"in r?o.setFullYear(r.y,0,r.j):"W"in r||"U"in r?("w"in r||(r.w="W"in r?1:0),o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),u?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var i,u,o,a=0,l=t.length,c=e.length;l>a;){if(r>=c)return-1;if(i=t.charCodeAt(a++),37===i){if(o=t.charAt(a++),u=C[o in ya?t.charAt(a++):o],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){N.lastIndex=0;var r=N.exec(t.slice(e));return r?(n.m=E.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,A.c.toString(),t,r)}function l(n,t,r){return e(n,A.x.toString(),t,r)}function c(n,t,r){return e(n,A.X.toString(),t,r)}function f(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var s=n.dateTime,h=n.date,p=n.time,g=n.periods,v=n.days,d=n.shortDays,y=n.months,m=n.shortMonths;t.utc=function(n){function e(n){try{va=Hn;var t=new va;return t._=n,r(t)}finally{va=Date}}var r=t(n);return e.parse=function(n){try{va=Hn;var t=r.parse(n);return t&&t._}finally{va=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ct;var M=ao.map(),x=Vn(v),b=Xn(v),_=Vn(d),w=Xn(d),S=Vn(y),k=Xn(y),N=Vn(m),E=Xn(m);g.forEach(function(n,t){M.set(n.toLowerCase(),t)});var A={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return m[n.getMonth()]},B:function(n){return y[n.getMonth()]},c:t(s),d:function(n,t){return Zn(n.getDate(),t,2)},e:function(n,t){return Zn(n.getDate(),t,2)},H:function(n,t){return Zn(n.getHours(),t,2)},I:function(n,t){return Zn(n.getHours()%12||12,t,2)},j:function(n,t){return Zn(1+ga.dayOfYear(n),t,3)},L:function(n,t){return Zn(n.getMilliseconds(),t,3)},m:function(n,t){return Zn(n.getMonth()+1,t,2)},M:function(n,t){return Zn(n.getMinutes(),t,2)},p:function(n){return g[+(n.getHours()>=12)]},S:function(n,t){return Zn(n.getSeconds(),t,2)},U:function(n,t){return Zn(ga.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Zn(ga.mondayOfYear(n),t,2)},x:t(h),X:t(p),y:function(n,t){return Zn(n.getFullYear()%100,t,2)},Y:function(n,t){return Zn(n.getFullYear()%1e4,t,4)},Z:at,"%":function(){return"%"}},C={a:r,A:i,b:u,B:o,c:a,d:tt,e:tt,H:rt,I:rt,j:et,L:ot,m:nt,M:it,p:f,S:ut,U:Bn,w:$n,W:Wn,x:l,X:c,y:Gn,Y:Jn,Z:Kn,"%":lt};return t}function Zn(n,t,e){var r=0>n?"-":"",i=(r?-n:n)+"",u=i.length;return r+(e>u?new Array(e-u+1).join(t)+i:i)}function Vn(n){return new RegExp("^(?:"+n.map(ao.requote).join("|")+")","i")}function Xn(n){for(var t=new c,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function $n(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Bn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Wn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Jn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Gn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.y=Qn(+r[0]),e+r[0].length):-1}function Kn(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Qn(n){return n+(n>68?1900:2e3)}function nt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function tt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function et(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function rt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function it(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ut(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ot(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function at(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=xo(t)/60|0,i=xo(t)%60;return e+Zn(r,"0",2)+Zn(i,"0",2)}function lt(n,t,e){Ma.lastIndex=0;var r=Ma.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ct(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ft(){}function st(n,t,e){var r=e.s=n+t,i=r-n,u=r-i;e.t=n-u+(t-i)}function ht(n,t){n&&wa.hasOwnProperty(n.type)&&wa[n.type](n,t)}function pt(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function gt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)pt(n[e],t,1);t.polygonEnd()}function vt(){function n(n,t){n*=Yo,t=t*Yo/2+Fo/4;var e=n-r,o=e>=0?1:-1,a=o*e,l=Math.cos(t),c=Math.sin(t),f=u*c,s=i*l+f*Math.cos(a),h=f*o*Math.sin(a);ka.add(Math.atan2(h,s)),r=n,i=l,u=c}var t,e,r,i,u;Na.point=function(o,a){Na.point=n,r=(t=o)*Yo,i=Math.cos(a=(e=a)*Yo/2+Fo/4),u=Math.sin(a)},Na.lineEnd=function(){n(t,e)}}function dt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function yt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function mt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Mt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function xt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function bt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function _t(n){return[Math.atan2(n[1],n[0]),tn(n[2])]}function wt(n,t){return xo(n[0]-t[0])<Uo&&xo(n[1]-t[1])<Uo}function St(n,t){n*=Yo;var e=Math.cos(t*=Yo);kt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function kt(n,t,e){++Ea,Ca+=(n-Ca)/Ea,za+=(t-za)/Ea,La+=(e-La)/Ea}function Nt(){function n(n,i){n*=Yo;var u=Math.cos(i*=Yo),o=u*Math.cos(n),a=u*Math.sin(n),l=Math.sin(i),c=Math.atan2(Math.sqrt((c=e*l-r*a)*c+(c=r*o-t*l)*c+(c=t*a-e*o)*c),t*o+e*a+r*l);Aa+=c,qa+=c*(t+(t=o)),Ta+=c*(e+(e=a)),Ra+=c*(r+(r=l)),kt(t,e,r)}var t,e,r;ja.point=function(i,u){i*=Yo;var o=Math.cos(u*=Yo);t=o*Math.cos(i),e=o*Math.sin(i),r=Math.sin(u),ja.point=n,kt(t,e,r)}}function Et(){ja.point=St}function At(){function n(n,t){n*=Yo;var e=Math.cos(t*=Yo),o=e*Math.cos(n),a=e*Math.sin(n),l=Math.sin(t),c=i*l-u*a,f=u*o-r*l,s=r*a-i*o,h=Math.sqrt(c*c+f*f+s*s),p=r*o+i*a+u*l,g=h&&-nn(p)/h,v=Math.atan2(h,p);Da+=g*c,Pa+=g*f,Ua+=g*s,Aa+=v,qa+=v*(r+(r=o)),Ta+=v*(i+(i=a)),Ra+=v*(u+(u=l)),kt(r,i,u)}var t,e,r,i,u;ja.point=function(o,a){t=o,e=a,ja.point=n,o*=Yo;var l=Math.cos(a*=Yo);r=l*Math.cos(o),i=l*Math.sin(o),u=Math.sin(a),kt(r,i,u)},ja.lineEnd=function(){n(t,e),ja.lineEnd=Et,ja.point=St}}function Ct(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function zt(){return!0}function Lt(n,t,e,r,i){var u=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(wt(e,r)){i.lineStart();for(var a=0;t>a;++a)i.point((e=n[a])[0],e[1]);return void i.lineEnd()}var l=new Tt(e,n,null,!0),c=new Tt(e,null,l,!1);l.o=c,u.push(l),o.push(c),l=new Tt(r,n,null,!1),c=new Tt(r,null,l,!0),l.o=c,u.push(l),o.push(c)}}),o.sort(t),qt(u),qt(o),u.length){for(var a=0,l=e,c=o.length;c>a;++a)o[a].e=l=!l;for(var f,s,h=u[0];;){for(var p=h,g=!0;p.v;)if((p=p.n)===h)return;f=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(g)for(var a=0,c=f.length;c>a;++a)i.point((s=f[a])[0],s[1]);else r(p.x,p.n.x,1,i);p=p.n}else{if(g){f=p.p.z;for(var a=f.length-1;a>=0;--a)i.point((s=f[a])[0],s[1])}else r(p.x,p.p.x,-1,i);p=p.p}p=p.o,f=p.z,g=!g}while(!p.v);i.lineEnd()}}}function qt(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.n=e=n[r],e.p=i,i=e;i.n=e=n[0],e.p=i}}function Tt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Rt(n,t,e,r){return function(i,u){function o(t,e){var r=i(t,e);n(t=r[0],e=r[1])&&u.point(t,e)}function a(n,t){var e=i(n,t);d.point(e[0],e[1])}function l(){m.point=a,d.lineStart()}function c(){m.point=o,d.lineEnd()}function f(n,t){v.push([n,t]);var e=i(n,t);x.point(e[0],e[1])}function s(){x.lineStart(),v=[]}function h(){f(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),g.push(v),v=null,r)if(1&t){n=e[0];var i,r=n.length-1,o=-1;if(r>0){for(b||(u.polygonStart(),b=!0),u.lineStart();++o<r;)u.point((i=n[o])[0],i[1]);u.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),p.push(e.filter(Dt))}var p,g,v,d=t(u),y=i.invert(r[0],r[1]),m={point:o,lineStart:l,lineEnd:c,polygonStart:function(){m.point=f,m.lineStart=s,m.lineEnd=h,p=[],g=[]},polygonEnd:function(){m.point=o,m.lineStart=l,m.lineEnd=c,p=ao.merge(p);var n=Ot(y,g);p.length?(b||(u.polygonStart(),b=!0),Lt(p,Ut,n,e,u)):n&&(b||(u.polygonStart(),b=!0),u.lineStart(),e(null,null,1,u),u.lineEnd()),b&&(u.polygonEnd(),b=!1),p=g=null},sphere:function(){u.polygonStart(),u.lineStart(),e(null,null,1,u),u.lineEnd(),u.polygonEnd()}},M=Pt(),x=t(M),b=!1;return m}}function Dt(n){return n.length>1}function Pt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Ut(n,t){return((n=n.x)[0]<0?n[1]-Io-Uo:Io-n[1])-((t=t.x)[0]<0?t[1]-Io-Uo:Io-t[1])}function jt(n){var t,e=NaN,r=NaN,i=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(u,o){var a=u>0?Fo:-Fo,l=xo(u-e);xo(l-Fo)<Uo?(n.point(e,r=(r+o)/2>0?Io:-Io),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(u,r),t=0):i!==a&&l>=Fo&&(xo(e-i)<Uo&&(e-=i*Uo),xo(u-a)<Uo&&(u-=a*Uo),r=Ft(e,r,u,o),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=u,r=o),i=a},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function Ft(n,t,e,r){var i,u,o=Math.sin(n-e);return xo(o)>Uo?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*o)):(t+r)/2}function Ht(n,t,e,r){var i;if(null==n)i=e*Io,r.point(-Fo,i),r.point(0,i),r.point(Fo,i),r.point(Fo,0),r.point(Fo,-i),r.point(0,-i),r.point(-Fo,-i),r.point(-Fo,0),r.point(-Fo,i);else if(xo(n[0]-t[0])>Uo){var u=n[0]<t[0]?Fo:-Fo;i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function Ot(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],u=0,o=0;ka.reset();for(var a=0,l=t.length;l>a;++a){var c=t[a],f=c.length;if(f)for(var s=c[0],h=s[0],p=s[1]/2+Fo/4,g=Math.sin(p),v=Math.cos(p),d=1;;){d===f&&(d=0),n=c[d];var y=n[0],m=n[1]/2+Fo/4,M=Math.sin(m),x=Math.cos(m),b=y-h,_=b>=0?1:-1,w=_*b,S=w>Fo,k=g*M;if(ka.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),u+=S?b+_*Ho:b,S^h>=e^y>=e){var N=mt(dt(s),dt(n));bt(N);var E=mt(i,N);bt(E);var A=(S^b>=0?-1:1)*tn(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=y,g=M,v=x,s=n}}return(-Uo>u||Uo>u&&-Uo>ka)^1&o}function It(n){function t(n,t){return Math.cos(n)*Math.cos(t)>u}function e(n){var e,u,l,c,f;return{lineStart:function(){c=l=!1,f=1},point:function(s,h){var p,g=[s,h],v=t(s,h),d=o?v?0:i(s,h):v?i(s+(0>s?Fo:-Fo),h):0;if(!e&&(c=l=v)&&n.lineStart(),v!==l&&(p=r(e,g),(wt(e,p)||wt(g,p))&&(g[0]+=Uo,g[1]+=Uo,v=t(g[0],g[1]))),v!==l)f=0,v?(n.lineStart(),p=r(g,e),n.point(p[0],p[1])):(p=r(e,g),n.point(p[0],p[1]),n.lineEnd()),e=p;else if(a&&e&&o^v){var y;d&u||!(y=r(g,e,!0))||(f=0,o?(n.lineStart(),n.point(y[0][0],y[0][1]),n.point(y[1][0],y[1][1]),n.lineEnd()):(n.point(y[1][0],y[1][1]),n.lineEnd(),n.lineStart(),n.point(y[0][0],y[0][1])))}!v||e&&wt(e,g)||n.point(g[0],g[1]),e=g,l=v,u=d},lineEnd:function(){l&&n.lineEnd(),e=null},clean:function(){return f|(c&&l)<<1}}}function r(n,t,e){var r=dt(n),i=dt(t),o=[1,0,0],a=mt(r,i),l=yt(a,a),c=a[0],f=l-c*c;if(!f)return!e&&n;var s=u*l/f,h=-u*c/f,p=mt(o,a),g=xt(o,s),v=xt(a,h);Mt(g,v);var d=p,y=yt(g,d),m=yt(d,d),M=y*y-m*(yt(g,g)-1);if(!(0>M)){var x=Math.sqrt(M),b=xt(d,(-y-x)/m);if(Mt(b,g),b=_t(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],N=t[1];w>S&&(_=w,w=S,S=_);var E=S-w,A=xo(E-Fo)<Uo,C=A||Uo>E;if(!A&&k>N&&(_=k,k=N,N=_),C?A?k+N>0^b[1]<(xo(b[0]-w)<Uo?k:N):k<=b[1]&&b[1]<=N:E>Fo^(w<=b[0]&&b[0]<=S)){var z=xt(d,(-y+x)/m);return Mt(z,g),[b,_t(z)]}}}function i(t,e){var r=o?n:Fo-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}var u=Math.cos(n),o=u>0,a=xo(u)>Uo,l=ve(n,6*Yo);return Rt(t,e,l,o?[0,-n]:[-Fo,n-Fo])}function Yt(n,t,e,r){return function(i){var u,o=i.a,a=i.b,l=o.x,c=o.y,f=a.x,s=a.y,h=0,p=1,g=f-l,v=s-c;if(u=n-l,g||!(u>0)){if(u/=g,0>g){if(h>u)return;p>u&&(p=u)}else if(g>0){if(u>p)return;u>h&&(h=u)}if(u=e-l,g||!(0>u)){if(u/=g,0>g){if(u>p)return;u>h&&(h=u)}else if(g>0){if(h>u)return;p>u&&(p=u)}if(u=t-c,v||!(u>0)){if(u/=v,0>v){if(h>u)return;p>u&&(p=u)}else if(v>0){if(u>p)return;u>h&&(h=u)}if(u=r-c,v||!(0>u)){if(u/=v,0>v){if(u>p)return;u>h&&(h=u)}else if(v>0){if(h>u)return;p>u&&(p=u)}return h>0&&(i.a={x:l+h*g,y:c+h*v}),1>p&&(i.b={x:l+p*g,y:c+p*v}),i}}}}}}function Zt(n,t,e,r){function i(r,i){return xo(r[0]-n)<Uo?i>0?0:3:xo(r[0]-e)<Uo?i>0?2:1:xo(r[1]-t)<Uo?i>0?1:0:i>0?3:2}function u(n,t){return o(n.x,t.x)}function o(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function l(n){for(var t=0,e=d.length,r=n[1],i=0;e>i;++i)for(var u,o=1,a=d[i],l=a.length,c=a[0];l>o;++o)u=a[o],c[1]<=r?u[1]>r&&Q(c,u,n)>0&&++t:u[1]<=r&&Q(c,u,n)<0&&--t,c=u;return 0!==t}function c(u,a,l,c){var f=0,s=0;if(null==u||(f=i(u,l))!==(s=i(a,l))||o(u,a)<0^l>0){do c.point(0===f||3===f?n:e,f>1?r:t);while((f=(f+l+4)%4)!==s)}else c.point(a[0],a[1])}function f(i,u){return i>=n&&e>=i&&u>=t&&r>=u}function s(n,t){f(n,t)&&a.point(n,t)}function h(){C.point=g,d&&d.push(y=[]),S=!0,w=!1,b=_=NaN}function p(){v&&(g(m,M),x&&w&&E.rejoin(),v.push(E.buffer())),C.point=s,w&&a.lineEnd()}function g(n,t){n=Math.max(-Ha,Math.min(Ha,n)),t=Math.max(-Ha,Math.min(Ha,t));var e=f(n,t);if(d&&y.push([n,t]),S)m=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};A(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,y,m,M,x,b,_,w,S,k,N=a,E=Pt(),A=Yt(n,t,e,r),C={point:s,lineStart:h,lineEnd:p,polygonStart:function(){a=E,v=[],d=[],k=!0},polygonEnd:function(){a=N,v=ao.merge(v);var t=l([n,r]),e=k&&t,i=v.length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),c(null,null,1,a),a.lineEnd()),i&&Lt(v,u,t,c,a),a.polygonEnd()),v=d=y=null}};return C}}function Vt(n){var t=0,e=Fo/3,r=ae(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Fo/180,e=n[1]*Fo/180):[t/Fo*180,e/Fo*180]},i}function Xt(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),o-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),o=Math.sqrt(u)/i;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/i,tn((u-(n*n+e*e)*i*i)/(2*i))]},e}function $t(){function n(n,t){Ia+=i*n-r*t,r=n,i=t}var t,e,r,i;$a.point=function(u,o){$a.point=n,t=r=u,e=i=o},$a.lineEnd=function(){n(t,e)}}function Bt(n,t){Ya>n&&(Ya=n),n>Va&&(Va=n),Za>t&&(Za=t),t>Xa&&(Xa=t)}function Wt(){function n(n,t){o.push("M",n,",",t,u)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function i(){o.push("Z")}var u=Jt(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return u=Jt(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Jt(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Gt(n,t){Ca+=n,za+=t,++La}function Kt(){function n(n,r){var i=n-t,u=r-e,o=Math.sqrt(i*i+u*u);qa+=o*(t+n)/2,Ta+=o*(e+r)/2,Ra+=o,Gt(t=n,e=r)}var t,e;Wa.point=function(r,i){Wa.point=n,Gt(t=r,e=i)}}function Qt(){Wa.point=Gt}function ne(){function n(n,t){var e=n-r,u=t-i,o=Math.sqrt(e*e+u*u);qa+=o*(r+n)/2,Ta+=o*(i+t)/2,Ra+=o,o=i*n-r*t,Da+=o*(r+n),Pa+=o*(i+t),Ua+=3*o,Gt(r=n,i=t)}var t,e,r,i;Wa.point=function(u,o){Wa.point=n,Gt(t=r=u,e=i=o)},Wa.lineEnd=function(){n(t,e)}}function te(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,Ho)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function i(){a.point=t}function u(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:i,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=i,a.point=t},pointRadius:function(n){return o=n,a},result:b};return a}function ee(n){function t(n){return(a?r:e)(n)}function e(t){return ue(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=NaN,S.point=u,t.lineStart()}function u(e,r){var u=dt([e,r]),o=n(e,r);i(M,x,m,b,_,w,M=o[0],x=o[1],m=e,b=u[0],_=u[1],w=u[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function l(){
r(),S.point=c,S.lineEnd=f}function c(n,t){u(s=n,h=t),p=M,g=x,v=b,d=_,y=w,S.point=u}function f(){i(M,x,m,b,_,w,p,g,s,v,d,y,a,t),S.lineEnd=o,o()}var s,h,p,g,v,d,y,m,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=l},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function i(t,e,r,a,l,c,f,s,h,p,g,v,d,y){var m=f-t,M=s-e,x=m*m+M*M;if(x>4*u&&d--){var b=a+p,_=l+g,w=c+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),N=xo(xo(w)-1)<Uo||xo(r-h)<Uo?(r+h)/2:Math.atan2(_,b),E=n(N,k),A=E[0],C=E[1],z=A-t,L=C-e,q=M*z-m*L;(q*q/x>u||xo((m*z+M*L)/x-.5)>.3||o>a*p+l*g+c*v)&&(i(t,e,r,a,l,c,A,C,N,b/=S,_/=S,w,d,y),y.point(A,C),i(A,C,N,b,_,w,f,s,h,p,g,v,d,y))}}var u=.5,o=Math.cos(30*Yo),a=16;return t.precision=function(n){return arguments.length?(a=(u=n*n)>0&&16,t):Math.sqrt(u)},t}function re(n){var t=ee(function(t,e){return n([t*Zo,e*Zo])});return function(n){return le(t(n))}}function ie(n){this.stream=n}function ue(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function oe(n){return ae(function(){return n})()}function ae(n){function t(n){return n=a(n[0]*Yo,n[1]*Yo),[n[0]*h+l,c-n[1]*h]}function e(n){return n=a.invert((n[0]-l)/h,(c-n[1])/h),n&&[n[0]*Zo,n[1]*Zo]}function r(){a=Ct(o=se(y,M,x),u);var n=u(v,d);return l=p-n[0]*h,c=g+n[1]*h,i()}function i(){return f&&(f.valid=!1,f=null),t}var u,o,a,l,c,f,s=ee(function(n,t){return n=u(n,t),[n[0]*h+l,c-n[1]*h]}),h=150,p=480,g=250,v=0,d=0,y=0,M=0,x=0,b=Fa,_=m,w=null,S=null;return t.stream=function(n){return f&&(f.valid=!1),f=le(b(o,s(_(n)))),f.valid=!0,f},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Fa):It((w=+n)*Yo),i()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Zt(n[0][0],n[0][1],n[1][0],n[1][1]):m,i()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(p=+n[0],g=+n[1],r()):[p,g]},t.center=function(n){return arguments.length?(v=n[0]%360*Yo,d=n[1]%360*Yo,r()):[v*Zo,d*Zo]},t.rotate=function(n){return arguments.length?(y=n[0]%360*Yo,M=n[1]%360*Yo,x=n.length>2?n[2]%360*Yo:0,r()):[y*Zo,M*Zo,x*Zo]},ao.rebind(t,s,"precision"),function(){return u=n.apply(this,arguments),t.invert=u.invert&&e,r()}}function le(n){return ue(n,function(t,e){n.point(t*Yo,e*Yo)})}function ce(n,t){return[n,t]}function fe(n,t){return[n>Fo?n-Ho:-Fo>n?n+Ho:n,t]}function se(n,t,e){return n?t||e?Ct(pe(n),ge(t,e)):pe(n):t||e?ge(t,e):fe}function he(n){return function(t,e){return t+=n,[t>Fo?t-Ho:-Fo>t?t+Ho:t,e]}}function pe(n){var t=he(n);return t.invert=he(-n),t}function ge(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*r+a*i;return[Math.atan2(l*u-f*o,a*r-c*i),tn(f*u+l*o)]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*u-l*o;return[Math.atan2(l*u+c*o,a*r+f*i),tn(f*r-a*i)]},e}function ve(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,u,o,a){var l=o*t;null!=i?(i=de(e,i),u=de(e,u),(o>0?u>i:i>u)&&(i+=o*Ho)):(i=n+o*Ho,u=n-.5*l);for(var c,f=i;o>0?f>u:u>f;f-=l)a.point((c=_t([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],c[1])}}function de(n,t){var e=dt(t);e[0]-=n,bt(e);var r=nn(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Uo)%(2*Math.PI)}function ye(n,t,e){var r=ao.range(n,t-Uo,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function me(n,t,e){var r=ao.range(n,t-Uo,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function Me(n){return n.source}function xe(n){return n.target}function be(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),o=Math.cos(r),a=Math.sin(r),l=i*Math.cos(n),c=i*Math.sin(n),f=o*Math.cos(e),s=o*Math.sin(e),h=2*Math.asin(Math.sqrt(on(r-t)+i*o*on(e-n))),p=1/Math.sin(h),g=h?function(n){var t=Math.sin(n*=h)*p,e=Math.sin(h-n)*p,r=e*l+t*f,i=e*c+t*s,o=e*u+t*a;return[Math.atan2(i,r)*Zo,Math.atan2(o,Math.sqrt(r*r+i*i))*Zo]}:function(){return[n*Zo,t*Zo]};return g.distance=h,g}function _e(){function n(n,i){var u=Math.sin(i*=Yo),o=Math.cos(i),a=xo((n*=Yo)-t),l=Math.cos(a);Ja+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*u-e*o*l)*a),e*u+r*o*l),t=n,e=u,r=o}var t,e,r;Ga.point=function(i,u){t=i*Yo,e=Math.sin(u*=Yo),r=Math.cos(u),Ga.point=n},Ga.lineEnd=function(){Ga.point=Ga.lineEnd=b}}function we(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i);return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),o=Math.cos(i);return[Math.atan2(n*u,r*o),Math.asin(r&&e*u/r)]},e}function Se(n,t){function e(n,t){o>0?-Io+Uo>t&&(t=-Io+Uo):t>Io-Uo&&(t=Io-Uo);var e=o/Math.pow(i(t),u);return[e*Math.sin(u*n),o-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Fo/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),o=r*Math.pow(i(n),u)/u;return u?(e.invert=function(n,t){var e=o-t,r=K(u)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(o/r,1/u))-Io]},e):Ne}function ke(n,t){function e(n,t){var e=u-t;return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n;return xo(i)<Uo?ce:(e.invert=function(n,t){var e=u-t;return[Math.atan2(n,e)/i,u-K(i)*Math.sqrt(n*n+e*e)]},e)}function Ne(n,t){return[n,Math.log(Math.tan(Fo/4+t/2))]}function Ee(n){var t,e=oe(n),r=e.scale,i=e.translate,u=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=u.apply(e,arguments);if(o===e){if(t=null==n){var a=Fo*r(),l=i();u([[l[0]-a,l[1]-a],[l[0]+a,l[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Ae(n,t){return[Math.log(Math.tan(Fo/4+t/2)),-n]}function Ce(n){return n[0]}function ze(n){return n[1]}function Le(n){for(var t=n.length,e=[0,1],r=2,i=2;t>i;i++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function qe(n,t){return n[0]-t[0]||n[1]-t[1]}function Te(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Re(n,t,e,r){var i=n[0],u=e[0],o=t[0]-i,a=r[0]-u,l=n[1],c=e[1],f=t[1]-l,s=r[1]-c,h=(a*(l-c)-s*(i-u))/(s*o-a*f);return[i+h*o,l+h*f]}function De(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Pe(){rr(this),this.edge=this.site=this.circle=null}function Ue(n){var t=cl.pop()||new Pe;return t.site=n,t}function je(n){Be(n),ol.remove(n),cl.push(n),rr(n)}function Fe(n){var t=n.circle,e=t.x,r=t.cy,i={x:e,y:r},u=n.P,o=n.N,a=[n];je(n);for(var l=u;l.circle&&xo(e-l.circle.x)<Uo&&xo(r-l.circle.cy)<Uo;)u=l.P,a.unshift(l),je(l),l=u;a.unshift(l),Be(l);for(var c=o;c.circle&&xo(e-c.circle.x)<Uo&&xo(r-c.circle.cy)<Uo;)o=c.N,a.push(c),je(c),c=o;a.push(c),Be(c);var f,s=a.length;for(f=1;s>f;++f)c=a[f],l=a[f-1],nr(c.edge,l.site,c.site,i);l=a[0],c=a[s-1],c.edge=Ke(l.site,c.site,null,i),$e(l),$e(c)}function He(n){for(var t,e,r,i,u=n.x,o=n.y,a=ol._;a;)if(r=Oe(a,o)-u,r>Uo)a=a.L;else{if(i=u-Ie(a,o),!(i>Uo)){r>-Uo?(t=a.P,e=a):i>-Uo?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var l=Ue(n);if(ol.insert(t,l),t||e){if(t===e)return Be(t),e=Ue(t.site),ol.insert(l,e),l.edge=e.edge=Ke(t.site,l.site),$e(t),void $e(e);if(!e)return void(l.edge=Ke(t.site,l.site));Be(t),Be(e);var c=t.site,f=c.x,s=c.y,h=n.x-f,p=n.y-s,g=e.site,v=g.x-f,d=g.y-s,y=2*(h*d-p*v),m=h*h+p*p,M=v*v+d*d,x={x:(d*m-p*M)/y+f,y:(h*M-v*m)/y+s};nr(e.edge,c,g,x),l.edge=Ke(c,n,null,x),e.edge=Ke(n,g,null,x),$e(t),$e(e)}}function Oe(n,t){var e=n.site,r=e.x,i=e.y,u=i-t;if(!u)return r;var o=n.P;if(!o)return-(1/0);e=o.site;var a=e.x,l=e.y,c=l-t;if(!c)return a;var f=a-r,s=1/u-1/c,h=f/c;return s?(-h+Math.sqrt(h*h-2*s*(f*f/(-2*c)-l+c/2+i-u/2)))/s+r:(r+a)/2}function Ie(n,t){var e=n.N;if(e)return Oe(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ye(n){this.site=n,this.edges=[]}function Ze(n){for(var t,e,r,i,u,o,a,l,c,f,s=n[0][0],h=n[1][0],p=n[0][1],g=n[1][1],v=ul,d=v.length;d--;)if(u=v[d],u&&u.prepare())for(a=u.edges,l=a.length,o=0;l>o;)f=a[o].end(),r=f.x,i=f.y,c=a[++o%l].start(),t=c.x,e=c.y,(xo(r-t)>Uo||xo(i-e)>Uo)&&(a.splice(o,0,new tr(Qe(u.site,f,xo(r-s)<Uo&&g-i>Uo?{x:s,y:xo(t-s)<Uo?e:g}:xo(i-g)<Uo&&h-r>Uo?{x:xo(e-g)<Uo?t:h,y:g}:xo(r-h)<Uo&&i-p>Uo?{x:h,y:xo(t-h)<Uo?e:p}:xo(i-p)<Uo&&r-s>Uo?{x:xo(e-p)<Uo?t:s,y:p}:null),u.site,null)),++l)}function Ve(n,t){return t.angle-n.angle}function Xe(){rr(this),this.x=this.y=this.arc=this.site=this.cy=null}function $e(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,i=n.site,u=e.site;if(r!==u){var o=i.x,a=i.y,l=r.x-o,c=r.y-a,f=u.x-o,s=u.y-a,h=2*(l*s-c*f);if(!(h>=-jo)){var p=l*l+c*c,g=f*f+s*s,v=(s*p-c*g)/h,d=(l*g-f*p)/h,s=d+a,y=fl.pop()||new Xe;y.arc=n,y.site=i,y.x=v+o,y.y=s+Math.sqrt(v*v+d*d),y.cy=s,n.circle=y;for(var m=null,M=ll._;M;)if(y.y<M.y||y.y===M.y&&y.x<=M.x){if(!M.L){m=M.P;break}M=M.L}else{if(!M.R){m=M;break}M=M.R}ll.insert(m,y),m||(al=y)}}}}function Be(n){var t=n.circle;t&&(t.P||(al=t.N),ll.remove(t),fl.push(t),rr(t),n.circle=null)}function We(n){for(var t,e=il,r=Yt(n[0][0],n[0][1],n[1][0],n[1][1]),i=e.length;i--;)t=e[i],(!Je(t,n)||!r(t)||xo(t.a.x-t.b.x)<Uo&&xo(t.a.y-t.b.y)<Uo)&&(t.a=t.b=null,e.splice(i,1))}function Je(n,t){var e=n.b;if(e)return!0;var r,i,u=n.a,o=t[0][0],a=t[1][0],l=t[0][1],c=t[1][1],f=n.l,s=n.r,h=f.x,p=f.y,g=s.x,v=s.y,d=(h+g)/2,y=(p+v)/2;if(v===p){if(o>d||d>=a)return;if(h>g){if(u){if(u.y>=c)return}else u={x:d,y:l};e={x:d,y:c}}else{if(u){if(u.y<l)return}else u={x:d,y:c};e={x:d,y:l}}}else if(r=(h-g)/(v-p),i=y-r*d,-1>r||r>1)if(h>g){if(u){if(u.y>=c)return}else u={x:(l-i)/r,y:l};e={x:(c-i)/r,y:c}}else{if(u){if(u.y<l)return}else u={x:(c-i)/r,y:c};e={x:(l-i)/r,y:l}}else if(v>p){if(u){if(u.x>=a)return}else u={x:o,y:r*o+i};e={x:a,y:r*a+i}}else{if(u){if(u.x<o)return}else u={x:a,y:r*a+i};e={x:o,y:r*o+i}}return n.a=u,n.b=e,!0}function Ge(n,t){this.l=n,this.r=t,this.a=this.b=null}function Ke(n,t,e,r){var i=new Ge(n,t);return il.push(i),e&&nr(i,n,t,e),r&&nr(i,t,n,r),ul[n.i].edges.push(new tr(i,n,t)),ul[t.i].edges.push(new tr(i,t,n)),i}function Qe(n,t,e){var r=new Ge(n,null);return r.a=t,r.b=e,il.push(r),r}function nr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function tr(n,t,e){var r=n.a,i=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(i.x-r.x,r.y-i.y):Math.atan2(r.x-i.x,i.y-r.y)}function er(){this._=null}function rr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ir(n,t){var e=t,r=t.R,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ur(n,t){var e=t,r=t.L,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function or(n){for(;n.L;)n=n.L;return n}function ar(n,t){var e,r,i,u=n.sort(lr).pop();for(il=[],ul=new Array(n.length),ol=new er,ll=new er;;)if(i=al,u&&(!i||u.y<i.y||u.y===i.y&&u.x<i.x))u.x===e&&u.y===r||(ul[u.i]=new Ye(u),He(u),e=u.x,r=u.y),u=n.pop();else{if(!i)break;Fe(i.arc)}t&&(We(t),Ze(t));var o={cells:ul,edges:il};return ol=ll=il=ul=null,o}function lr(n,t){return t.y-n.y||t.x-n.x}function cr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function fr(n){return n.x}function sr(n){return n.y}function hr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function pr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var o=.5*(e+i),a=.5*(r+u),l=t.nodes;l[0]&&pr(n,l[0],e,r,o,a),l[1]&&pr(n,l[1],o,r,i,a),l[2]&&pr(n,l[2],e,a,o,u),l[3]&&pr(n,l[3],o,a,i,u)}}function gr(n,t,e,r,i,u,o){var a,l=1/0;return function c(n,f,s,h,p){if(!(f>u||s>o||r>h||i>p)){if(g=n.point){var g,v=t-n.x,d=e-n.y,y=v*v+d*d;if(l>y){var m=Math.sqrt(l=y);r=t-m,i=e-m,u=t+m,o=e+m,a=g}}for(var M=n.nodes,x=.5*(f+h),b=.5*(s+p),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:c(n,f,s,x,b);break;case 1:c(n,x,s,h,b);break;case 2:c(n,f,b,x,p);break;case 3:c(n,x,b,h,p)}}}(n,r,i,u,o),a}function vr(n,t){n=ao.rgb(n),t=ao.rgb(t);var e=n.r,r=n.g,i=n.b,u=t.r-e,o=t.g-r,a=t.b-i;return function(n){return"#"+bn(Math.round(e+u*n))+bn(Math.round(r+o*n))+bn(Math.round(i+a*n))}}function dr(n,t){var e,r={},i={};for(e in n)e in t?r[e]=Mr(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function yr(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function mr(n,t){var e,r,i,u=hl.lastIndex=pl.lastIndex=0,o=-1,a=[],l=[];for(n+="",t+="";(e=hl.exec(n))&&(r=pl.exec(t));)(i=r.index)>u&&(i=t.slice(u,i),a[o]?a[o]+=i:a[++o]=i),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:yr(e,r)})),u=pl.lastIndex;return u<t.length&&(i=t.slice(u),a[o]?a[o]+=i:a[++o]=i),a.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0;t>r;++r)a[(e=l[r]).i]=e.x(n);return a.join("")})}function Mr(n,t){for(var e,r=ao.interpolators.length;--r>=0&&!(e=ao.interpolators[r](n,t)););return e}function xr(n,t){var e,r=[],i=[],u=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(Mr(n[e],t[e]));for(;u>e;++e)i[e]=n[e];for(;o>e;++e)i[e]=t[e];return function(n){for(e=0;a>e;++e)i[e]=r[e](n);return i}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function kr(n){return n*n*n}function Nr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Er(n){return function(t){return Math.pow(t,n)}}function Ar(n){return 1-Math.cos(n*Io)}function Cr(n){return Math.pow(2,10*(n-1))}function zr(n){return 1-Math.sqrt(1-n*n)}function Lr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Ho*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Ho/t)}}function qr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Tr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Rr(n,t){n=ao.hcl(n),t=ao.hcl(t);var e=n.h,r=n.c,i=n.l,u=t.h-e,o=t.c-r,a=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return sn(e+u*n,r+o*n,i+a*n)+""}}function Dr(n,t){n=ao.hsl(n),t=ao.hsl(t);var e=n.h,r=n.s,i=n.l,u=t.h-e,o=t.s-r,a=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return cn(e+u*n,r+o*n,i+a*n)+""}}function Pr(n,t){n=ao.lab(n),t=ao.lab(t);var e=n.l,r=n.a,i=n.b,u=t.l-e,o=t.a-r,a=t.b-i;return function(n){return pn(e+u*n,r+o*n,i+a*n)+""}}function Ur(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function jr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Hr(t),i=Fr(t,e),u=Hr(Or(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Zo,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*Zo:0}function Fr(n,t){return n[0]*t[0]+n[1]*t[1]}function Hr(n){var t=Math.sqrt(Fr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Or(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ir(n){return n.length?n.pop()+",":""}function Yr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push("translate(",null,",",null,")");r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function Zr(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(Ir(e)+"rotate(",null,")")-2,x:yr(n,t)})):t&&e.push(Ir(e)+"rotate("+t+")")}function Vr(n,t,e,r){n!==t?r.push({i:e.push(Ir(e)+"skewX(",null,")")-2,x:yr(n,t)}):t&&e.push(Ir(e)+"skewX("+t+")")}function Xr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push(Ir(e)+"scale(",null,",",null,")");r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else 1===t[0]&&1===t[1]||e.push(Ir(e)+"scale("+t+")")}function $r(n,t){var e=[],r=[];return n=ao.transform(n),t=ao.transform(t),Yr(n.translate,t.translate,e,r),Zr(n.rotate,t.rotate,e,r),Vr(n.skew,t.skew,e,r),Xr(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,i=-1,u=r.length;++i<u;)e[(t=r[i]).i]=t.x(n);return e.join("")}}function Br(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Wr(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent;return i}function Gr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Kr(n,t){if(n===t)return n;for(var e=Gr(n),r=Gr(t),i=e.pop(),u=r.pop(),o=null;i===u;)o=i,i=e.pop(),u=r.pop();return o}function Qr(n){n.fixed|=2}function ni(n){n.fixed&=-7}function ti(n){n.fixed|=4,n.px=n.x,n.py=n.y}function ei(n){n.fixed&=-5}function ri(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var u,o=n.nodes,a=o.length,l=-1;++l<a;)u=o[l],null!=u&&(ri(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var c=t*e[n.point.index];n.charge+=n.pointCharge=c,r+=c*n.point.x,i+=c*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function ii(n,t){return ao.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=fi,n}function ui(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(i=n.children)&&(r=i.length))for(var r,i;--r>=0;)e.push(i[r])}function oi(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(u=n.children)&&(i=u.length))for(var i,u,o=-1;++o<i;)e.push(u[o]);for(;null!=(n=r.pop());)t(n)}function ai(n){return n.children}function li(n){return n.value}function ci(n,t){return t.value-n.value}function fi(n){return ao.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function si(n){return n.x}function hi(n){return n.y}function pi(n,t,e){n.y0=t,n.y=e}function gi(n){return ao.range(n.length)}function vi(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function di(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;u>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function yi(n){return n.reduce(mi,0)}function mi(n,t){return n+t[1]}function Mi(n,t){return xi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function xi(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r;return u}function bi(n){return[ao.min(n),ao.max(n)]}function _i(n,t){return n.value-t.value}function wi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Si(n,t){n._pack_next=t,t._pack_prev=n}function ki(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return.999*i*i>e*e+r*r}function Ni(n){function t(n){f=Math.min(n.x-n.r,f),s=Math.max(n.x+n.r,s),h=Math.min(n.y-n.r,h),p=Math.max(n.y+n.r,p)}if((e=n.children)&&(c=e.length)){var e,r,i,u,o,a,l,c,f=1/0,s=-(1/0),h=1/0,p=-(1/0);if(e.forEach(Ei),r=e[0],r.x=-r.r,r.y=0,t(r),c>1&&(i=e[1],i.x=i.r,i.y=0,t(i),c>2))for(u=e[2],zi(r,i,u),t(u),wi(r,u),r._pack_prev=u,wi(u,i),i=r._pack_next,o=3;c>o;o++){zi(r,i,u=e[o]);var g=0,v=1,d=1;for(a=i._pack_next;a!==i;a=a._pack_next,v++)if(ki(a,u)){g=1;break}if(1==g)for(l=r._pack_prev;l!==a._pack_prev&&!ki(l,u);l=l._pack_prev,d++);g?(d>v||v==d&&i.r<r.r?Si(r,i=a):Si(r=l,i),o--):(wi(r,u),i=u,t(u))}var y=(f+s)/2,m=(h+p)/2,M=0;for(o=0;c>o;o++)u=e[o],u.x-=y,u.y-=m,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y));n.r=M,e.forEach(Ai)}}function Ei(n){n._pack_next=n._pack_prev=n}function Ai(n){delete n._pack_next,delete n._pack_prev}function Ci(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,o=i.length;++u<o;)Ci(i[u],t,e,r)}function zi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y;if(r&&(i||u)){var o=t.r+e.r,a=i*i+u*u;o*=o,r*=r;var l=.5+(r-o)/(2*a),c=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+l*i+c*u,e.y=n.y+l*u-c*i}else e.x=n.x+r,e.y=n.y}function Li(n,t){return n.parent==t.parent?1:2}function qi(n){var t=n.children;return t.length?t[0]:n.t}function Ti(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ri(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Di(n){for(var t,e=0,r=0,i=n.children,u=i.length;--u>=0;)t=i[u],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Pi(n,t,e){return n.a.parent===t.parent?n.a:e}function Ui(n){return 1+ao.max(n,function(n){return n.y})}function ji(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Fi(n){var t=n.children;return t&&t.length?Fi(t[0]):n}function Hi(n){var t,e=n.children;return e&&(t=e.length)?Hi(e[t-1]):n}function Oi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ii(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>u&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Yi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Zi(n){return n.rangeExtent?n.rangeExtent():Yi(n.range())}function Vi(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1]);return function(n){return u(i(n))}}function Xi(n,t){var e,r=0,i=n.length-1,u=n[r],o=n[i];return u>o&&(e=r,r=i,i=e,e=u,u=o,o=e),n[r]=t.floor(u),n[i]=t.ceil(o),n}function $i(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:Sl}function Bi(n,t,e,r){var i=[],u=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)i.push(e(n[o-1],n[o])),u.push(r(t[o-1],t[o]));return function(t){var e=ao.bisect(n,t,1,a)-1;return u[e](i[e](t))}}function Wi(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Bi:Vi,l=r?Wr:Br;return o=i(n,t,l,e),a=i(t,n,l,Mr),u}function u(n){return o(n)}var o,a;return u.invert=function(n){return a(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Ur)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return Qi(n,t)},u.tickFormat=function(t,e){return nu(n,t,e)},u.nice=function(t){return Gi(n,t),i()},u.copy=function(){return Wi(n,t,e,r)},i()}function Ji(n,t){return ao.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Gi(n,t){return Xi(n,$i(Ki(n,t)[2])),Xi(n,$i(Ki(n,t)[2])),n}function Ki(n,t){null==t&&(t=10);var e=Yi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function Qi(n,t){return ao.range.apply(ao,Ki(n,t))}function nu(n,t,e){var r=Ki(n,t);if(e){var i=ha.exec(e);if(i.shift(),"s"===i[8]){var u=ao.formatPrefix(Math.max(xo(r[0]),xo(r[1])));return i[7]||(i[7]="."+tu(u.scale(r[2]))),i[8]="f",e=ao.format(i.join("")),function(n){return e(u.scale(n))+u.symbol}}i[7]||(i[7]="."+eu(i[8],r)),e=i.join("")}else e=",."+tu(r[2])+"f";return ao.format(e)}function tu(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function eu(n,t){var e=tu(t[2]);return n in kl?Math.abs(e-tu(Math.max(xo(t[0]),xo(t[1]))))+ +("e"!==n):e-2*("%"===n)}function ru(n,t,e,r){function i(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function u(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(i(t))}return o.invert=function(t){return u(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(i)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(i)),o):t},o.nice=function(){var t=Xi(r.map(i),e?Math:El);return n.domain(t),r=t.map(u),o},o.ticks=function(){var n=Yi(r),o=[],a=n[0],l=n[1],c=Math.floor(i(a)),f=Math.ceil(i(l)),s=t%1?2:t;if(isFinite(f-c)){if(e){for(;f>c;c++)for(var h=1;s>h;h++)o.push(u(c)*h);o.push(u(c))}else for(o.push(u(c));c++<f;)for(var h=s-1;h>0;h--)o.push(u(c)*h);for(c=0;o[c]<a;c++);for(f=o.length;o[f-1]>l;f--);o=o.slice(c,f)}return o},o.tickFormat=function(n,e){if(!arguments.length)return Nl;arguments.length<2?e=Nl:"function"!=typeof e&&(e=ao.format(e));var r=Math.max(1,t*n/o.ticks().length);return function(n){var o=n/u(Math.round(i(n)));return t-.5>o*t&&(o*=t),r>=o?e(n):""}},o.copy=function(){return ru(n.copy(),t,e,r)},Ji(o,n)}function iu(n,t,e){function r(t){return n(i(t))}var i=uu(t),u=uu(1/t);return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return Qi(e,n)},r.tickFormat=function(n,t){return nu(e,n,t)},r.nice=function(n){return r.domain(Gi(e,n))},r.exponent=function(o){return arguments.length?(i=uu(t=o),u=uu(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return iu(n.copy(),t,e)},Ji(r,n)}function uu(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function ou(n,t){function e(e){return u[((i.get(e)||("range"===t.t?i.set(e,n.push(e)):NaN))-1)%u.length]}function r(t,e){return ao.range(n.length).map(function(n){return t+e*n})}var i,u,o;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new c;for(var u,o=-1,a=r.length;++o<a;)i.has(u=r[o])||i.set(u,n.push(u));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(u=n,o=0,t={t:"range",a:arguments},e):u},e.rangePoints=function(i,a){arguments.length<2&&(a=0);var l=i[0],c=i[1],f=n.length<2?(l=(l+c)/2,0):(c-l)/(n.length-1+a);return u=r(l+f*a/2,f),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(i,a){arguments.length<2&&(a=0);var l=i[0],c=i[1],f=n.length<2?(l=c=Math.round((l+c)/2),0):(c-l)/(n.length-1+a)|0;return u=r(l+Math.round(f*a/2+(c-l-(n.length-1+a)*f)/2),f),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a);var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=(s-f)/(n.length-a+2*l);return u=r(f+h*l,h),c&&u.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a);var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=Math.floor((s-f)/(n.length-a+2*l));return u=r(f+Math.round((s-f-(n.length-a)*h)/2),h),c&&u.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Yi(t.a[0])},e.copy=function(){return ou(n,t)},e.domain(n)}function au(n,t){function u(){var e=0,r=t.length;for(a=[];++e<r;)a[e-1]=ao.quantile(n,e/r);return o}function o(n){return isNaN(n=+n)?void 0:t[ao.bisect(a,n)]}var a;return o.domain=function(t){return arguments.length?(n=t.map(r).filter(i).sort(e),u()):n},o.range=function(n){return arguments.length?(t=n,u()):t},o.quantiles=function(){return a},o.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?a[e-1]:n[0],e<a.length?a[e]:n[n.length-1]]},o.copy=function(){return au(n,t)},u()}function lu(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),o=e.length-1,r}var u,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/u+n,[t,t+1/u]},r.copy=function(){return lu(n,t,e)},i()}function cu(n,t){function e(e){return e>=e?t[ao.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return cu(n,t)},e}function fu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Qi(n,t)},t.tickFormat=function(t,e){return nu(n,t,e)},t.copy=function(){return fu(n)},t}function su(){return 0}function hu(n){return n.innerRadius}function pu(n){return n.outerRadius}function gu(n){return n.startAngle}function vu(n){return n.endAngle}function du(n){return n&&n.padAngle}function yu(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function mu(n,t,e,r,i){var u=n[0]-t[0],o=n[1]-t[1],a=(i?r:-r)/Math.sqrt(u*u+o*o),l=a*o,c=-a*u,f=n[0]+l,s=n[1]+c,h=t[0]+l,p=t[1]+c,g=(f+h)/2,v=(s+p)/2,d=h-f,y=p-s,m=d*d+y*y,M=e-r,x=f*p-h*s,b=(0>y?-1:1)*Math.sqrt(Math.max(0,M*M*m-x*x)),_=(x*y-d*b)/m,w=(-x*d-y*b)/m,S=(x*y+d*b)/m,k=(-x*d+y*b)/m,N=_-g,E=w-v,A=S-g,C=k-v;return N*N+E*E>A*A+C*C&&(_=S,w=k),[[_-l,w-c],[_*e/M,w*e/M]]}function Mu(n){function t(t){function o(){c.push("M",u(n(f),a))}for(var l,c=[],f=[],s=-1,h=t.length,p=En(e),g=En(r);++s<h;)i.call(this,l=t[s],s)?f.push([+p.call(this,l,s),+g.call(this,l,s)]):f.length&&(o(),f=[]);return f.length&&o(),c.length?c.join(""):null}var e=Ce,r=ze,i=zt,u=xu,o=u.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?u=n:(u=Tl.get(n)||xu).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function xu(n){return n.length>1?n.join("L"):n+"Z"}function bu(n){return n.join("L")+"Z"}function _u(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&i.push("H",r[0]),i.join("")}function wu(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function Su(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function ku(n,t){return n.length<4?xu(n):n[1]+Au(n.slice(1,-1),Cu(n,t))}function Nu(n,t){return n.length<3?bu(n):n[0]+Au((n.push(n[0]),n),Cu([n[n.length-2]].concat(n,[n[1]]),t))}function Eu(n,t){return n.length<3?xu(n):n[0]+Au(n,Cu(n,t))}function Au(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return xu(n);var e=n.length!=t.length,r="",i=n[0],u=n[1],o=t[0],a=o,l=1;if(e&&(r+="Q"+(u[0]-2*o[0]/3)+","+(u[1]-2*o[1]/3)+","+u[0]+","+u[1],i=n[1],l=2),t.length>1){a=t[1],u=n[l],l++,r+="C"+(i[0]+o[0])+","+(i[1]+o[1])+","+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1];for(var c=2;c<t.length;c++,l++)u=n[l],a=t[c],r+="S"+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1]}if(e){var f=n[l];r+="Q"+(u[0]+2*a[0]/3)+","+(u[1]+2*a[1]/3)+","+f[0]+","+f[1]}return r}function Cu(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],o=n[1],a=1,l=n.length;++a<l;)e=u,u=o,o=n[a],r.push([i*(o[0]-e[0]),i*(o[1]-e[1])]);return r}function zu(n){if(n.length<3)return xu(n);var t=1,e=n.length,r=n[0],i=r[0],u=r[1],o=[i,i,i,(r=n[1])[0]],a=[u,u,u,r[1]],l=[i,",",u,"L",Ru(Pl,o),",",Ru(Pl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Du(l,o,a);return n.pop(),l.push("L",r),l.join("")}function Lu(n){if(n.length<4)return xu(n);for(var t,e=[],r=-1,i=n.length,u=[0],o=[0];++r<3;)t=n[r],u.push(t[0]),o.push(t[1]);for(e.push(Ru(Pl,u)+","+Ru(Pl,o)),--r;++r<i;)t=n[r],u.shift(),u.push(t[0]),o.shift(),o.push(t[1]),Du(e,u,o);return e.join("")}function qu(n){for(var t,e,r=-1,i=n.length,u=i+4,o=[],a=[];++r<4;)e=n[r%i],o.push(e[0]),a.push(e[1]);for(t=[Ru(Pl,o),",",Ru(Pl,a)],--r;++r<u;)e=n[r%i],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Du(t,o,a);return t.join("")}function Tu(n,t){var e=n.length-1;if(e)for(var r,i,u=n[0][0],o=n[0][1],a=n[e][0]-u,l=n[e][1]-o,c=-1;++c<=e;)r=n[c],i=c/e,r[0]=t*r[0]+(1-t)*(u+i*a),r[1]=t*r[1]+(1-t)*(o+i*l);return zu(n)}function Ru(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Du(n,t,e){n.push("C",Ru(Rl,t),",",Ru(Rl,e),",",Ru(Dl,t),",",Ru(Dl,e),",",Ru(Pl,t),",",Ru(Pl,e))}function Pu(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Uu(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],o=r[0]=Pu(i,u);++t<e;)r[t]=(o+(o=Pu(i=u,u=n[t+1])))/2;return r[t]=o,r}function ju(n){for(var t,e,r,i,u=[],o=Uu(n),a=-1,l=n.length-1;++a<l;)t=Pu(n[a],n[a+1]),xo(t)<Uo?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),o[a]=i*e,o[a+1]=i*r));for(a=-1;++a<=l;)i=(n[Math.min(l,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),u.push([i||0,o[a]*i||0]);return u}function Fu(n){return n.length<3?xu(n):n[0]+Au(n,ju(n))}function Hu(n){for(var t,e,r,i=-1,u=n.length;++i<u;)t=n[i],e=t[0],r=t[1]-Io,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Ou(n){function t(t){function l(){v.push("M",a(n(y),s),f,c(n(d.reverse()),s),"Z")}for(var h,p,g,v=[],d=[],y=[],m=-1,M=t.length,x=En(e),b=En(i),_=e===r?function(){
return p}:En(r),w=i===u?function(){return g}:En(u);++m<M;)o.call(this,h=t[m],m)?(d.push([p=+x.call(this,h,m),g=+b.call(this,h,m)]),y.push([+_.call(this,h,m),+w.call(this,h,m)])):d.length&&(l(),d=[],y=[]);return d.length&&l(),v.length?v.join(""):null}var e=Ce,r=Ce,i=0,u=ze,o=zt,a=xu,l=a.key,c=a,f="L",s=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(l="function"==typeof n?a=n:(a=Tl.get(n)||xu).key,c=a.reverse||a,f=a.closed?"M":"L",t):l},t.tension=function(n){return arguments.length?(s=n,t):s},t}function Iu(n){return n.radius}function Yu(n){return[n.x,n.y]}function Zu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Io;return[e*Math.cos(r),e*Math.sin(r)]}}function Vu(){return 64}function Xu(){return"circle"}function $u(n){var t=Math.sqrt(n/Fo);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Bu(n){return function(){var t,e,r;(t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function Wu(n,t,e){return ko(n,Yl),n.namespace=t,n.id=e,n}function Ju(n,t,e,r){var i=n.id,u=n.namespace;return Y(n,"function"==typeof e?function(n,o,a){n[u][i].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[u][i].tween.set(t,e)}))}function Gu(n){return null==n&&(n=""),function(){this.textContent=n}}function Ku(n){return null==n?"__transition__":"__transition_"+n+"__"}function Qu(n,t,e,r,i){function u(n){var t=v.delay;return f.t=t+l,n>=t?o(n-t):void(f.c=o)}function o(e){var i=g.active,u=g[i];u&&(u.timer.c=null,u.timer.t=NaN,--g.count,delete g[i],u.event&&u.event.interrupt.call(n,n.__data__,u.index));for(var o in g)if(r>+o){var c=g[o];c.timer.c=null,c.timer.t=NaN,--g.count,delete g[o]}f.c=a,qn(function(){return f.c&&a(e||1)&&(f.c=null,f.t=NaN),1},0,l),g.active=r,v.event&&v.event.start.call(n,n.__data__,t),p=[],v.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&p.push(r)}),h=v.ease,s=v.duration}function a(i){for(var u=i/s,o=h(u),a=p.length;a>0;)p[--a].call(n,o);return u>=1?(v.event&&v.event.end.call(n,n.__data__,t),--g.count?delete g[r]:delete n[e],1):void 0}var l,f,s,h,p,g=n[e]||(n[e]={active:0,count:0}),v=g[r];v||(l=i.time,f=qn(u,0,l),v=g[r]={tween:new c,time:l,timer:f,delay:i.delay,duration:i.duration,ease:i.ease,index:t},i=null,++g.count)}function no(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function to(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function eo(n){return n.toISOString()}function ro(n,t,e){function r(t){return n(t)}function i(n,e){var r=n[1]-n[0],i=r/e,u=ao.bisect(Kl,i);return u==Kl.length?[t.year,Ki(n.map(function(n){return n/31536e6}),e)[2]]:u?t[i/Kl[u-1]<Kl[u]/i?u-1:u]:[tc,Ki(n,e)[2]]}return r.invert=function(t){return io(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(io)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,io(+e+1),t).length}var u=r.domain(),o=Yi(u),a=null==n?i(o,10):"number"==typeof n&&i(o,n);return a&&(n=a[0],t=a[1]),r.domain(Xi(u,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=io(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=io(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Yi(r.domain()),u=null==n?i(e,10):"number"==typeof n?i(e,n):!n.range&&[{range:n},t];return u&&(n=u[0],t=u[1]),n.range(e[0],io(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return ro(n.copy(),t,e)},Ji(r,n)}function io(n){return new Date(n)}function uo(n){return JSON.parse(n.responseText)}function oo(n){var t=fo.createRange();return t.selectNode(fo.body),t.createContextualFragment(n.responseText)}var ao={version:"3.5.17"},lo=[].slice,co=function(n){return lo.call(n)},fo=this.document;if(fo)try{co(fo.documentElement.childNodes)[0].nodeType}catch(so){co=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),fo)try{fo.createElement("DIV").style.setProperty("opacity",0,"")}catch(ho){var po=this.Element.prototype,go=po.setAttribute,vo=po.setAttributeNS,yo=this.CSSStyleDeclaration.prototype,mo=yo.setProperty;po.setAttribute=function(n,t){go.call(this,n,t+"")},po.setAttributeNS=function(n,t,e){vo.call(this,n,t,e+"")},yo.setProperty=function(n,t,e){mo.call(this,n,t+"",e)}}ao.ascending=e,ao.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},ao.min=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<u;)null!=(r=n[i])&&e>r&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},ao.max=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<u;)null!=(r=n[i])&&r>e&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},ao.extent=function(n,t){var e,r,i,u=-1,o=n.length;if(1===arguments.length){for(;++u<o;)if(null!=(r=n[u])&&r>=r){e=i=r;break}for(;++u<o;)null!=(r=n[u])&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++u<o;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=i=r;break}for(;++u<o;)null!=(r=t.call(n,n[u],u))&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},ao.sum=function(n,t){var e,r=0,u=n.length,o=-1;if(1===arguments.length)for(;++o<u;)i(e=+n[o])&&(r+=e);else for(;++o<u;)i(e=+t.call(n,n[o],o))&&(r+=e);return r},ao.mean=function(n,t){var e,u=0,o=n.length,a=-1,l=o;if(1===arguments.length)for(;++a<o;)i(e=r(n[a]))?u+=e:--l;else for(;++a<o;)i(e=r(t.call(n,n[a],a)))?u+=e:--l;return l?u/l:void 0},ao.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r;return u?i+u*(n[r]-i):i},ao.median=function(n,t){var u,o=[],a=n.length,l=-1;if(1===arguments.length)for(;++l<a;)i(u=r(n[l]))&&o.push(u);else for(;++l<a;)i(u=r(t.call(n,n[l],l)))&&o.push(u);return o.length?ao.quantile(o.sort(e),.5):void 0},ao.variance=function(n,t){var e,u,o=n.length,a=0,l=0,c=-1,f=0;if(1===arguments.length)for(;++c<o;)i(e=r(n[c]))&&(u=e-a,a+=u/++f,l+=u*(e-a));else for(;++c<o;)i(e=r(t.call(n,n[c],c)))&&(u=e-a,a+=u/++f,l+=u*(e-a));return f>1?l/(f-1):void 0},ao.deviation=function(){var n=ao.variance.apply(this,arguments);return n?Math.sqrt(n):n};var Mo=u(e);ao.bisectLeft=Mo.left,ao.bisect=ao.bisectRight=Mo.right,ao.bisector=function(n){return u(1===n.length?function(t,r){return e(n(t),r)}:n)},ao.shuffle=function(n,t,e){(u=arguments.length)<3&&(e=n.length,2>u&&(t=0));for(var r,i,u=e-t;u;)i=Math.random()*u--|0,r=n[u+t],n[u+t]=n[i+t],n[i+t]=r;return n},ao.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ao.pairs=function(n){for(var t,e=0,r=n.length-1,i=n[0],u=new Array(0>r?0:r);r>e;)u[e]=[t=i,i=n[++e]];return u},ao.transpose=function(n){if(!(i=n.length))return[];for(var t=-1,e=ao.min(n,o),r=new Array(e);++t<e;)for(var i,u=-1,a=r[t]=new Array(i);++u<i;)a[u]=n[u][t];return r},ao.zip=function(){return ao.transpose(arguments)},ao.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ao.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ao.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ao.merge=function(n){for(var t,e,r,i=n.length,u=-1,o=0;++u<i;)o+=n[u].length;for(e=new Array(o);--i>=0;)for(r=n[i],t=r.length;--t>=0;)e[--o]=r[t];return e};var xo=Math.abs;ao.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,i=[],u=a(xo(e)),o=-1;if(n*=u,t*=u,e*=u,0>e)for(;(r=n+e*++o)>t;)i.push(r/u);else for(;(r=n+e*++o)<t;)i.push(r/u);return i},ao.map=function(n,t){var e=new c;if(n instanceof c)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,i=-1,u=n.length;if(1===arguments.length)for(;++i<u;)e.set(i,n[i]);else for(;++i<u;)e.set(t.call(n,r=n[i],i),r)}else for(var o in n)e.set(o,n[o]);return e};var bo="__proto__",_o="\x00";l(c,{has:h,get:function(n){return this._[f(n)]},set:function(n,t){return this._[f(n)]=t},remove:p,keys:g,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:s(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t),this._[t])}}),ao.nest=function(){function n(t,o,a){if(a>=u.length)return r?r.call(i,o):e?o.sort(e):o;for(var l,f,s,h,p=-1,g=o.length,v=u[a++],d=new c;++p<g;)(h=d.get(l=v(f=o[p])))?h.push(f):d.set(l,[f]);return t?(f=t(),s=function(e,r){f.set(e,n(t,r,a))}):(f={},s=function(e,r){f[e]=n(t,r,a)}),d.forEach(s),f}function t(n,e){if(e>=u.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,i={},u=[],o=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n(ao.map,e,0),0)},i.key=function(n){return u.push(n),i},i.sortKeys=function(n){return o[u.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},ao.set=function(n){var t=new y;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},l(y,{has:h,add:function(n){return this._[f(n+="")]=!0,n},remove:p,values:g,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t))}}),ao.behavior={},ao.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=M(n,t,t[e]);return n};var wo=["webkit","ms","moz","Moz","o","O"];ao.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ao.event=null,ao.requote=function(n){return n.replace(So,"\\$&")};var So=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ko={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},No=function(n,t){return t.querySelector(n)},Eo=function(n,t){return t.querySelectorAll(n)},Ao=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(Ao=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(No=function(n,t){return Sizzle(n,t)[0]||null},Eo=Sizzle,Ao=Sizzle.matchesSelector),ao.selection=function(){return ao.select(fo.documentElement)};var Co=ao.selection.prototype=[];Co.select=function(n){var t,e,r,i,u=[];n=A(n);for(var o=-1,a=this.length;++o<a;){u.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var l=-1,c=r.length;++l<c;)(i=r[l])?(t.push(e=n.call(i,i.__data__,l,o)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return E(u)},Co.selectAll=function(n){var t,e,r=[];n=C(n);for(var i=-1,u=this.length;++i<u;)for(var o=this[i],a=-1,l=o.length;++a<l;)(e=o[a])&&(r.push(t=co(n.call(e,e.__data__,a,i))),t.parentNode=e);return E(r)};var zo="http://www.w3.org/1999/xhtml",Lo={svg:"http://www.w3.org/2000/svg",xhtml:zo,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ao.ns={prefix:Lo,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),Lo.hasOwnProperty(e)?{space:Lo[e],local:n}:n}},Co.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ao.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},Co.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!q(n[i]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},Co.style=function(n,e,r){var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>i){var u=this.node();return t(u).getComputedStyle(u,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},Co.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(U(t,n[t]));return this}return this.each(U(n,t))},Co.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Co.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Co.append=function(n){return n=j(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Co.insert=function(n,t){return n=j(n),t=A(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},Co.remove=function(){return this.each(F)},Co.data=function(n,t){function e(n,e){var r,i,u,o=n.length,s=e.length,h=Math.min(o,s),p=new Array(s),g=new Array(s),v=new Array(o);if(t){var d,y=new c,m=new Array(o);for(r=-1;++r<o;)(i=n[r])&&(y.has(d=t.call(i,i.__data__,r))?v[r]=i:y.set(d,i),m[r]=d);for(r=-1;++r<s;)(i=y.get(d=t.call(e,u=e[r],r)))?i!==!0&&(p[r]=i,i.__data__=u):g[r]=H(u),y.set(d,!0);for(r=-1;++r<o;)r in m&&y.get(m[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)i=n[r],u=e[r],i?(i.__data__=u,p[r]=i):g[r]=H(u);for(;s>r;++r)g[r]=H(e[r]);for(;o>r;++r)v[r]=n[r]}g.update=p,g.parentNode=p.parentNode=v.parentNode=n.parentNode,a.push(g),l.push(p),f.push(v)}var r,i,u=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++u<o;)(i=r[u])&&(n[u]=i.__data__);return n}var a=Z([]),l=E([]),f=E([]);if("function"==typeof n)for(;++u<o;)e(r=this[u],n.call(r,r.parentNode.__data__,u));else for(;++u<o;)e(r=this[u],n);return l.enter=function(){return a},l.exit=function(){return f},l},Co.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Co.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=O(n));for(var u=0,o=this.length;o>u;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode;for(var a=0,l=e.length;l>a;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return E(i)},Co.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},Co.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Co.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Co.call=function(n){var t=co(arguments);return n.apply(t[0]=this,t),this},Co.empty=function(){return!this.node()},Co.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null},Co.size=function(){var n=0;return Y(this,function(){++n}),n};var qo=[];ao.selection.enter=Z,ao.selection.enter.prototype=qo,qo.append=Co.append,qo.empty=Co.empty,qo.node=Co.node,qo.call=Co.call,qo.size=Co.size,qo.select=function(n){for(var t,e,r,i,u,o=[],a=-1,l=this.length;++a<l;){r=(i=this[a]).update,o.push(t=[]),t.parentNode=i.parentNode;for(var c=-1,f=i.length;++c<f;)(u=i[c])?(t.push(r[c]=e=n.call(i.parentNode,u.__data__,c,a)),e.__data__=u.__data__):t.push(null)}return E(o)},qo.insert=function(n,t){return arguments.length<2&&(t=V(this)),Co.insert.call(this,n,t)},ao.select=function(t){var e;return"string"==typeof t?(e=[No(t,fo)],e.parentNode=fo.documentElement):(e=[t],e.parentNode=n(t)),E([e])},ao.selectAll=function(n){var t;return"string"==typeof n?(t=co(Eo(n,fo)),t.parentNode=fo.documentElement):(t=co(n),t.parentNode=null),E([t])},Co.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var To=ao.map({mouseenter:"mouseover",mouseleave:"mouseout"});fo&&To.forEach(function(n){"on"+n in fo&&To.remove(n)});var Ro,Do=0;ao.mouse=function(n){return J(n,k())};var Po=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;ao.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,i=0,u=t.length;u>i;++i)if((r=t[i]).identifier===e)return J(n,r)},ao.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",o)}function e(n,t,e,u,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],g|=n|e,M=r,p({type:"drag",x:r[0]+c[0],y:r[1]+c[1],dx:n,dy:e}))}function l(){t(h,v)&&(y.on(u+d,null).on(o+d,null),m(g),p({type:"dragend"}))}var c,f=this,s=ao.event.target.correspondingElement||ao.event.target,h=f.parentNode,p=r.of(f,arguments),g=0,v=n(),d=".drag"+(null==v?"":"-"+v),y=ao.select(e(s)).on(u+d,a).on(o+d,l),m=W(s),M=t(h,v);i?(c=i.apply(f,arguments),c=[c.x-M[0],c.y-M[1]]):c=[0,0],p({type:"dragstart"})}}var r=N(n,"drag","dragstart","dragend"),i=null,u=e(b,ao.mouse,t,"mousemove","mouseup"),o=e(G,ao.touch,m,"touchmove","touchend");return n.origin=function(t){return arguments.length?(i=t,n):i},ao.rebind(n,r,"on")},ao.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?co(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Uo=1e-6,jo=Uo*Uo,Fo=Math.PI,Ho=2*Fo,Oo=Ho-Uo,Io=Fo/2,Yo=Fo/180,Zo=180/Fo,Vo=Math.SQRT2,Xo=2,$o=4;ao.interpolateZoom=function(n,t){var e,r,i=n[0],u=n[1],o=n[2],a=t[0],l=t[1],c=t[2],f=a-i,s=l-u,h=f*f+s*s;if(jo>h)r=Math.log(c/o)/Vo,e=function(n){return[i+n*f,u+n*s,o*Math.exp(Vo*n*r)]};else{var p=Math.sqrt(h),g=(c*c-o*o+$o*h)/(2*o*Xo*p),v=(c*c-o*o-$o*h)/(2*c*Xo*p),d=Math.log(Math.sqrt(g*g+1)-g),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-d)/Vo,e=function(n){var t=n*r,e=rn(d),a=o/(Xo*p)*(e*un(Vo*t+d)-en(d));return[i+a*f,u+a*s,o*e/rn(Vo*t+d)]}}return e.duration=1e3*r,e},ao.behavior.zoom=function(){function n(n){n.on(L,s).on(Wo+".zoom",p).on("dblclick.zoom",g).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function i(n){k.k=Math.max(A[0],Math.min(A[1],n))}function u(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function o(t,e,r,o){t.__chart__={x:k.x,y:k.y,k:k.k},i(Math.pow(2,o)),u(d=e,r),t=ao.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function a(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function l(n){z++||n({type:"zoomstart"})}function c(n){a(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function f(n){--z||(n({type:"zoomend"}),d=null)}function s(){function n(){a=1,u(ao.mouse(i),h),c(o)}function r(){s.on(q,null).on(T,null),p(a),f(o)}var i=this,o=D.of(i,arguments),a=0,s=ao.select(t(i)).on(q,n).on(T,r),h=e(ao.mouse(i)),p=W(i);Il.call(i),l(o)}function h(){function n(){var n=ao.touches(g);return p=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=ao.event.target;ao.select(t).on(x,r).on(b,a),_.push(t);for(var e=ao.event.changedTouches,i=0,u=e.length;u>i;++i)d[e[i].identifier]=null;var l=n(),c=Date.now();if(1===l.length){if(500>c-M){var f=l[0];o(g,f,d[f.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=c}else if(l.length>1){var f=l[0],s=l[1],h=f[0]-s[0],p=f[1]-s[1];y=h*h+p*p}}function r(){var n,t,e,r,o=ao.touches(g);Il.call(g);for(var a=0,l=o.length;l>a;++a,r=null)if(e=o[a],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var f=(f=e[0]-n[0])*f+(f=e[1]-n[1])*f,s=y&&Math.sqrt(f/y);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],i(s*p)}M=null,u(n,t),c(v)}function a(){if(ao.event.touches.length){for(var t=ao.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var i in d)return void n()}ao.selectAll(_).on(m,null),w.on(L,s).on(R,h),N(),f(v)}var p,g=this,v=D.of(g,arguments),d={},y=0,m=".zoom-"+ao.event.changedTouches[0].identifier,x="touchmove"+m,b="touchend"+m,_=[],w=ao.select(g),N=W(g);t(),l(v),w.on(L,null).on(R,t)}function p(){var n=D.of(this,arguments);m?clearTimeout(m):(Il.call(this),v=e(d=y||ao.mouse(this)),l(n)),m=setTimeout(function(){m=null,f(n)},50),S(),i(Math.pow(2,.002*Bo())*k.k),u(d,v),c(n)}function g(){var n=ao.mouse(this),t=Math.log(k.k)/Math.LN2;o(this,n,e(n),ao.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,y,m,M,x,b,_,w,k={x:0,y:0,k:1},E=[960,500],A=Jo,C=250,z=0,L="mousedown.zoom",q="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=N(n,"zoomstart","zoom","zoomend");return Wo||(Wo="onwheel"in fo?(Bo=function(){return-ao.event.deltaY*(ao.event.deltaMode?120:1)},"wheel"):"onmousewheel"in fo?(Bo=function(){return ao.event.wheelDelta},"mousewheel"):(Bo=function(){return-ao.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Hl?ao.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},l(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],i=d?d[0]:e/2,u=d?d[1]:r/2,o=ao.interpolateZoom([(i-k.x)/k.k,(u-k.y)/k.k,e/k.k],[(i-t.x)/t.k,(u-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:i-r[0]*a,y:u-r[1]*a,k:a},c(n)}}).each("interrupt.zoom",function(){f(n)}).each("end.zoom",function(){f(n)}):(this.__chart__=k,l(n),c(n),f(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},a(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:null},i(+t),a(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Jo:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(y=t&&[+t[0],+t[1]],n):y},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},ao.rebind(n,D,"on")};var Bo,Wo,Jo=[0,1/0];ao.color=an,an.prototype.toString=function(){return this.rgb()+""},ao.hsl=ln;var Go=ln.prototype=new an;Go.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,this.l/n)},Go.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,n*this.l)},Go.rgb=function(){return cn(this.h,this.s,this.l)},ao.hcl=fn;var Ko=fn.prototype=new an;Ko.brighter=function(n){return new fn(this.h,this.c,Math.min(100,this.l+Qo*(arguments.length?n:1)))},Ko.darker=function(n){return new fn(this.h,this.c,Math.max(0,this.l-Qo*(arguments.length?n:1)))},Ko.rgb=function(){return sn(this.h,this.c,this.l).rgb()},ao.lab=hn;var Qo=18,na=.95047,ta=1,ea=1.08883,ra=hn.prototype=new an;ra.brighter=function(n){return new hn(Math.min(100,this.l+Qo*(arguments.length?n:1)),this.a,this.b)},ra.darker=function(n){return new hn(Math.max(0,this.l-Qo*(arguments.length?n:1)),this.a,this.b)},ra.rgb=function(){return pn(this.l,this.a,this.b)},ao.rgb=mn;var ia=mn.prototype=new an;ia.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),new mn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new mn(i,i,i)},ia.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new mn(n*this.r,n*this.g,n*this.b)},ia.hsl=function(){return wn(this.r,this.g,this.b)},ia.toString=function(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)};var ua=ao.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});ua.forEach(function(n,t){ua.set(n,Mn(t))}),ao.functor=En,ao.xhr=An(m),ao.dsv=function(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null);var o=Cn(n,t,null==e?r:i(e),u);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:i(n)):e},o}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function u(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(f>=c)return o;if(i)return i=!1,u;var t=f;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}f=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,10===n.charCodeAt(e+2)&&++f):10===r&&(i=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;c>f;){var r=n.charCodeAt(f++),a=1;if(10===r)i=!0;else if(13===r)i=!0,10===n.charCodeAt(f)&&(++f,++a);else if(r!==l)continue;return n.slice(t,f-a)}return n.slice(t)}for(var r,i,u={},o={},a=[],c=n.length,f=0,s=0;(r=e())!==o;){for(var h=[];r!==u&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,s++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new y,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(u).join("\n")},e},ao.csv=ao.dsv(",","text/csv"),ao.tsv=ao.dsv("	","text/tab-separated-values");var oa,aa,la,ca,fa=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ao.timer=function(){qn.apply(this,arguments)},ao.timer.flush=function(){Rn(),Dn()},ao.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var sa=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Un);ao.formatPrefix=function(n,t){var e=0;return(n=+n)&&(0>n&&(n*=-1),t&&(n=ao.round(n,Pn(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),sa[8+e/3]};var ha=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,pa=ao.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ao.round(n,Pn(n,t))).toFixed(Math.max(0,Math.min(20,Pn(n*(1+1e-15),t))))}}),ga=ao.time={},va=Date;Hn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){da.setUTCDate.apply(this._,arguments)},setDay:function(){da.setUTCDay.apply(this._,arguments)},setFullYear:function(){da.setUTCFullYear.apply(this._,arguments)},setHours:function(){da.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){da.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){da.setUTCMinutes.apply(this._,arguments)},setMonth:function(){da.setUTCMonth.apply(this._,arguments)},setSeconds:function(){da.setUTCSeconds.apply(this._,arguments)},setTime:function(){da.setTime.apply(this._,arguments)}};var da=Date.prototype;ga.year=On(function(n){return n=ga.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ga.years=ga.year.range,ga.years.utc=ga.year.utc.range,ga.day=On(function(n){var t=new va(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ga.days=ga.day.range,ga.days.utc=ga.day.utc.range,ga.dayOfYear=function(n){var t=ga.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ga[n]=On(function(n){return(n=ga.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ga.year(n).getDay();return Math.floor((ga.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ga[n+"s"]=e.range,ga[n+"s"].utc=e.utc.range,ga[n+"OfYear"]=function(n){var e=ga.year(n).getDay();return Math.floor((ga.dayOfYear(n)+(e+t)%7)/7)}}),ga.week=ga.sunday,ga.weeks=ga.sunday.range,ga.weeks.utc=ga.sunday.utc.range,ga.weekOfYear=ga.sundayOfYear;var ya={"-":"",_:" ",0:"0"},ma=/^\s*\d+/,Ma=/^%/;ao.locale=function(n){return{numberFormat:jn(n),timeFormat:Yn(n)}};var xa=ao.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ao.format=xa.numberFormat,ao.geo={},ft.prototype={s:0,t:0,add:function(n){st(n,this.t,ba),st(ba.s,this.s,this),this.s?this.t+=ba.t:this.s=ba.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var ba=new ft;ao.geo.stream=function(n,t){n&&_a.hasOwnProperty(n.type)?_a[n.type](n,t):ht(n,t)};var _a={Feature:function(n,t){ht(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)ht(e[r].geometry,t)}},wa={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){pt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)pt(e[r],t,0)},Polygon:function(n,t){gt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)gt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)ht(e[r],t)}};ao.geo.area=function(n){return Sa=0,ao.geo.stream(n,Na),Sa};var Sa,ka=new ft,Na={sphere:function(){Sa+=4*Fo},point:b,lineStart:b,lineEnd:b,polygonStart:function(){ka.reset(),Na.lineStart=vt},polygonEnd:function(){var n=2*ka;Sa+=0>n?4*Fo+n:n,Na.lineStart=Na.lineEnd=Na.point=b}};ao.geo.bounds=function(){function n(n,t){M.push(x=[f=n,h=n]),s>t&&(s=t),t>p&&(p=t)}function t(t,e){var r=dt([t*Yo,e*Yo]);if(y){var i=mt(y,r),u=[i[1],-i[0],0],o=mt(u,i);bt(o),o=_t(o);var l=t-g,c=l>0?1:-1,v=o[0]*Zo*c,d=xo(l)>180;if(d^(v>c*g&&c*t>v)){var m=o[1]*Zo;m>p&&(p=m)}else if(v=(v+360)%360-180,d^(v>c*g&&c*t>v)){var m=-o[1]*Zo;s>m&&(s=m)}else s>e&&(s=e),e>p&&(p=e);d?g>t?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t):h>=f?(f>t&&(f=t),t>h&&(h=t)):t>g?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t)}else n(t,e);y=r,g=t}function e(){b.point=t}function r(){x[0]=f,x[1]=h,b.point=n,y=null}function i(n,e){if(y){var r=n-g;m+=xo(r)>180?r+(r>0?360:-360):r}else v=n,d=e;Na.point(n,e),t(n,e)}function u(){Na.lineStart()}function o(){i(v,d),Na.lineEnd(),xo(m)>Uo&&(f=-(h=180)),x[0]=f,x[1]=h,y=null}function a(n,t){return(t-=n)<0?t+360:t}function l(n,t){return n[0]-t[0]}function c(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var f,s,h,p,g,v,d,y,m,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=o,m=0,Na.polygonStart()},polygonEnd:function(){Na.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>ka?(f=-(h=180),s=-(p=90)):m>Uo?p=90:-Uo>m&&(s=-90),x[0]=f,x[1]=h}};return function(n){p=h=-(f=s=1/0),M=[],ao.geo.stream(n,b);var t=M.length;if(t){M.sort(l);for(var e,r=1,i=M[0],u=[i];t>r;++r)e=M[r],c(e[0],i)||c(e[1],i)?(a(i[0],e[1])>a(i[0],i[1])&&(i[1]=e[1]),a(e[0],i[1])>a(i[0],i[1])&&(i[0]=e[0])):u.push(i=e);for(var o,e,g=-(1/0),t=u.length-1,r=0,i=u[t];t>=r;i=e,++r)e=u[r],(o=a(i[1],e[0]))>g&&(g=o,f=e[0],h=i[1])}return M=x=null,f===1/0||s===1/0?[[NaN,NaN],[NaN,NaN]]:[[f,s],[h,p]]}}(),ao.geo.centroid=function(n){Ea=Aa=Ca=za=La=qa=Ta=Ra=Da=Pa=Ua=0,ao.geo.stream(n,ja);var t=Da,e=Pa,r=Ua,i=t*t+e*e+r*r;return jo>i&&(t=qa,e=Ta,r=Ra,Uo>Aa&&(t=Ca,e=za,r=La),i=t*t+e*e+r*r,jo>i)?[NaN,NaN]:[Math.atan2(e,t)*Zo,tn(r/Math.sqrt(i))*Zo]};var Ea,Aa,Ca,za,La,qa,Ta,Ra,Da,Pa,Ua,ja={sphere:b,point:St,lineStart:Nt,lineEnd:Et,polygonStart:function(){ja.lineStart=At},polygonEnd:function(){ja.lineStart=Nt}},Fa=Rt(zt,jt,Ht,[-Fo,-Fo/2]),Ha=1e9;ao.geo.clipExtent=function(){var n,t,e,r,i,u,o={stream:function(n){return i&&(i.valid=!1),i=u(n),i.valid=!0,i},extent:function(a){return arguments.length?(u=Zt(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),i&&(i.valid=!1,i=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ao.geo.conicEqualArea=function(){return Vt(Xt)}).raw=Xt,ao.geo.albers=function(){return ao.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ao.geo.albersUsa=function(){function n(n){var u=n[0],o=n[1];return t=null,e(u,o),t||(r(u,o),t)||i(u,o),t}var t,e,r,i,u=ao.geo.albers(),o=ao.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ao.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?o:i>=.166&&.234>i&&r>=-.214&&-.115>r?a:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),o.precision(t),a.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),o.scale(.35*t),a.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate();var c=u.scale(),f=+t[0],s=+t[1];return e=u.translate(t).clipExtent([[f-.455*c,s-.238*c],[f+.455*c,s+.238*c]]).stream(l).point,r=o.translate([f-.307*c,s+.201*c]).clipExtent([[f-.425*c+Uo,s+.12*c+Uo],[f-.214*c-Uo,s+.234*c-Uo]]).stream(l).point,i=a.translate([f-.205*c,s+.212*c]).clipExtent([[f-.214*c+Uo,s+.166*c+Uo],[f-.115*c-Uo,s+.234*c-Uo]]).stream(l).point,n},n.scale(1070)};var Oa,Ia,Ya,Za,Va,Xa,$a={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Ia=0,$a.lineStart=$t},polygonEnd:function(){$a.lineStart=$a.lineEnd=$a.point=b,Oa+=xo(Ia/2)}},Ba={point:Bt,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Wa={point:Gt,lineStart:Kt,lineEnd:Qt,polygonStart:function(){Wa.lineStart=ne},polygonEnd:function(){Wa.point=Gt,Wa.lineStart=Kt,Wa.lineEnd=Qt}};ao.geo.path=function(){function n(n){return n&&("function"==typeof a&&u.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=i(u)),ao.geo.stream(n,o)),u.result()}function t(){return o=null,n}var e,r,i,u,o,a=4.5;return n.area=function(n){return Oa=0,ao.geo.stream(n,i($a)),Oa},n.centroid=function(n){return Ca=za=La=qa=Ta=Ra=Da=Pa=Ua=0,ao.geo.stream(n,i(Wa)),Ua?[Da/Ua,Pa/Ua]:Ra?[qa/Ra,Ta/Ra]:La?[Ca/La,za/La]:[NaN,NaN]},n.bounds=function(n){return Va=Xa=-(Ya=Za=1/0),ao.geo.stream(n,i(Ba)),[[Ya,Za],[Va,Xa]]},n.projection=function(n){return arguments.length?(i=(e=n)?n.stream||re(n):m,t()):e},n.context=function(n){return arguments.length?(u=null==(r=n)?new Wt:new te(n),"function"!=typeof a&&u.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(u.pointRadius(+t),+t),n):a},n.projection(ao.geo.albersUsa()).context(null)},ao.geo.transform=function(n){return{stream:function(t){var e=new ie(t);for(var r in n)e[r]=n[r];return e}}},ie.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ao.geo.projection=oe,ao.geo.projectionMutator=ae,(ao.geo.equirectangular=function(){return oe(ce)}).raw=ce.invert=ce,ao.geo.rotation=function(n){function t(t){return t=n(t[0]*Yo,t[1]*Yo),t[0]*=Zo,t[1]*=Zo,t}return n=se(n[0]%360*Yo,n[1]*Yo,n.length>2?n[2]*Yo:0),t.invert=function(t){return t=n.invert(t[0]*Yo,t[1]*Yo),t[0]*=Zo,t[1]*=Zo,t},t},fe.invert=ce,ao.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=se(-n[0]*Yo,-n[1]*Yo,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Zo,n[1]*=Zo}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=ve((t=+r)*Yo,i*Yo),n):t},n.precision=function(r){return arguments.length?(e=ve(t*Yo,(i=+r)*Yo),n):i},n.angle(90)},ao.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Yo,i=n[1]*Yo,u=t[1]*Yo,o=Math.sin(r),a=Math.cos(r),l=Math.sin(i),c=Math.cos(i),f=Math.sin(u),s=Math.cos(u);return Math.atan2(Math.sqrt((e=s*o)*e+(e=c*f-l*s*a)*e),l*f+c*s*a)},ao.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ao.range(Math.ceil(u/d)*d,i,d).map(h).concat(ao.range(Math.ceil(c/y)*y,l,y).map(p)).concat(ao.range(Math.ceil(r/g)*g,e,g).filter(function(n){return xo(n%d)>Uo}).map(f)).concat(ao.range(Math.ceil(a/v)*v,o,v).filter(function(n){return xo(n%y)>Uo}).map(s))}var e,r,i,u,o,a,l,c,f,s,h,p,g=10,v=g,d=90,y=360,m=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(p(l).slice(1),h(i).reverse().slice(1),p(c).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],c=+t[0][1],l=+t[1][1],u>i&&(t=u,u=i,i=t),c>l&&(t=c,c=l,l=t),n.precision(m)):[[u,c],[i,l]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(m)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],y=+t[1],n):[d,y]},n.minorStep=function(t){return arguments.length?(g=+t[0],v=+t[1],n):[g,v]},n.precision=function(t){return arguments.length?(m=+t,f=ye(a,o,90),s=me(r,e,m),h=ye(c,l,90),p=me(u,i,m),n):m},n.majorExtent([[-180,-90+Uo],[180,90-Uo]]).minorExtent([[-180,-80-Uo],[180,80+Uo]])},ao.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=Me,i=xe;return n.distance=function(){return ao.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ao.geo.interpolate=function(n,t){return be(n[0]*Yo,n[1]*Yo,t[0]*Yo,t[1]*Yo)},ao.geo.length=function(n){return Ja=0,ao.geo.stream(n,Ga),Ja};var Ja,Ga={sphere:b,point:b,lineStart:_e,lineEnd:b,polygonStart:b,polygonEnd:b},Ka=we(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ao.geo.azimuthalEqualArea=function(){return oe(Ka)}).raw=Ka;var Qa=we(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},m);(ao.geo.azimuthalEquidistant=function(){return oe(Qa)}).raw=Qa,(ao.geo.conicConformal=function(){return Vt(Se)}).raw=Se,(ao.geo.conicEquidistant=function(){return Vt(ke)}).raw=ke;var nl=we(function(n){return 1/n},Math.atan);(ao.geo.gnomonic=function(){return oe(nl)}).raw=nl,Ne.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Io]},(ao.geo.mercator=function(){return Ee(Ne)}).raw=Ne;var tl=we(function(){return 1},Math.asin);(ao.geo.orthographic=function(){return oe(tl)}).raw=tl;var el=we(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ao.geo.stereographic=function(){return oe(el)}).raw=el,Ae.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Io]},(ao.geo.transverseMercator=function(){var n=Ee(Ae),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ae,ao.geom={},ao.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i=En(e),u=En(r),o=n.length,a=[],l=[];for(t=0;o>t;t++)a.push([+i.call(this,n[t],t),+u.call(this,n[t],t),t]);for(a.sort(qe),t=0;o>t;t++)l.push([a[t][0],-a[t][1]]);var c=Le(a),f=Le(l),s=f[0]===c[0],h=f[f.length-1]===c[c.length-1],p=[];for(t=c.length-1;t>=0;--t)p.push(n[a[c[t]][2]]);for(t=+s;t<f.length-h;++t)p.push(n[a[f[t]][2]]);return p}var e=Ce,r=ze;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ao.geom.polygon=function(n){return ko(n,rl),n};var rl=ao.geom.polygon.prototype=[];rl.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0;++t<e;)n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1];return.5*i},rl.centroid=function(n){var t,e,r=-1,i=this.length,u=0,o=0,a=this[i-1];for(arguments.length||(n=-1/(6*this.area()));++r<i;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],u+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[u*n,o*n]},rl.clip=function(n){for(var t,e,r,i,u,o,a=De(n),l=-1,c=this.length-De(this),f=this[c-1];++l<c;){for(t=n.slice(),n.length=0,i=this[l],u=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Te(o,f,i)?(Te(u,f,i)||n.push(Re(u,o,f,i)),n.push(o)):Te(u,f,i)&&n.push(Re(u,o,f,i)),u=o;a&&n.push(n[0]),f=i}return n};var il,ul,ol,al,ll,cl=[],fl=[];Ye.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ve),t.length},tr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},er.prototype={insert:function(n,t){var e,r,i;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=or(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.R&&(ir(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ur(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.L&&(ur(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ir(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,i=n.U,u=n.L,o=n.R;if(e=u?o?or(o):u:o,i?i.L===n?i.L=e:i.R=e:this._=e,u&&o?(r=e.C,e.C=n.C,e.L=u,u.U=e,e!==o?(i=e.U,e.U=n.U,n=e.R,i.L=n,e.R=o,o.U=e):(e.U=i,i=e,n=e.R)):(r=n.C,n=e),n&&(n.U=i),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===i.L){if(t=i.R,t.C&&(t.C=!1,i.C=!0,ir(this,i),t=i.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ur(this,t),t=i.R),t.C=i.C,i.C=t.R.C=!1,ir(this,i),n=this._;break}}else if(t=i.L,t.C&&(t.C=!1,i.C=!0,ur(this,i),t=i.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ir(this,t),t=i.L),t.C=i.C,i.C=t.L.C=!1,ur(this,i),n=this._;break}t.C=!0,n=i,i=i.U}while(!n.C);n&&(n.C=!1)}}},ao.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],i=a[0][1],u=a[1][0],o=a[1][1];return ar(e(n),a).cells.forEach(function(e,a){var l=e.edges,c=e.site,f=t[a]=l.length?l.map(function(n){var t=n.start();return[t.x,t.y]}):c.x>=r&&c.x<=u&&c.y>=i&&c.y<=o?[[r,o],[u,o],[u,i],[r,i]]:[];f.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(u(n,t)/Uo)*Uo,y:Math.round(o(n,t)/Uo)*Uo,i:t}})}var r=Ce,i=ze,u=r,o=i,a=sl;return n?t(n):(t.links=function(n){return ar(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return ar(e(n)).cells.forEach(function(e,r){for(var i,u,o=e.site,a=e.edges.sort(Ve),l=-1,c=a.length,f=a[c-1].edge,s=f.l===o?f.r:f.l;++l<c;)i=f,u=s,f=a[l].edge,s=f.l===o?f.r:f.l,r<u.i&&r<s.i&&cr(o,u,s)<0&&t.push([n[r],n[u.i],n[s.i]])}),t},t.x=function(n){return arguments.length?(u=En(r=n),t):r},t.y=function(n){return arguments.length?(o=En(i=n),t):i},t.clipExtent=function(n){return arguments.length?(a=null==n?sl:n,t):a===sl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===sl?null:a&&a[1]},t)};var sl=[[-1e6,-1e6],[1e6,1e6]];ao.geom.delaunay=function(n){return ao.geom.voronoi().triangles(n)},ao.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var l=n.x,f=n.y;if(null!=l)if(xo(l-e)+xo(f-r)<.01)c(n,t,e,r,i,u,o,a);else{var s=n.point;n.x=n.y=n.point=null,c(n,s,l,f,i,u,o,a),c(n,t,e,r,i,u,o,a)}else n.x=e,n.y=r,n.point=t}else c(n,t,e,r,i,u,o,a)}function c(n,t,e,r,i,o,a,l){var c=.5*(i+a),f=.5*(o+l),s=e>=c,h=r>=f,p=h<<1|s;n.leaf=!1,n=n.nodes[p]||(n.nodes[p]=hr()),s?i=c:a=c,h?o=f:l=f,u(n,t,e,r,i,o,a,l)}var f,s,h,p,g,v,d,y,m,M=En(a),x=En(l);if(null!=t)v=t,d=e,y=r,m=i;else if(y=m=-(v=d=1/0),s=[],h=[],g=n.length,o)for(p=0;g>p;++p)f=n[p],f.x<v&&(v=f.x),f.y<d&&(d=f.y),f.x>y&&(y=f.x),f.y>m&&(m=f.y),s.push(f.x),h.push(f.y);else for(p=0;g>p;++p){var b=+M(f=n[p],p),_=+x(f,p);v>b&&(v=b),d>_&&(d=_),b>y&&(y=b),_>m&&(m=_),s.push(b),h.push(_)}var w=y-v,S=m-d;w>S?m=d+w:y=v+S;var k=hr();if(k.add=function(n){u(k,n,+M(n,++p),+x(n,p),v,d,y,m)},k.visit=function(n){pr(n,k,v,d,y,m)},k.find=function(n){return gr(k,n[0],n[1],v,d,y,m)},p=-1,null==t){for(;++p<g;)u(k,n[p],s[p],h[p],v,d,y,m);--p}else n.forEach(k.add);return s=h=n=f=null,k}var o,a=Ce,l=ze;return(o=arguments.length)?(a=fr,l=sr,3===o&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(a=n,u):a},u.y=function(n){return arguments.length?(l=n,u):l},u.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),u):null==t?null:[[t,e],[r,i]]},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r-t,i-e]},u)},ao.interpolateRgb=vr,ao.interpolateObject=dr,ao.interpolateNumber=yr,ao.interpolateString=mr;var hl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pl=new RegExp(hl.source,"g");ao.interpolate=Mr,ao.interpolators=[function(n,t){var e=typeof t;return("string"===e?ua.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?vr:mr:t instanceof an?vr:Array.isArray(t)?xr:"object"===e&&isNaN(t)?dr:yr)(n,t)}],ao.interpolateArray=xr;var gl=function(){return m},vl=ao.map({linear:gl,poly:Er,quad:function(){return Sr},cubic:function(){return kr},sin:function(){return Ar},exp:function(){return Cr},circle:function(){return zr},elastic:Lr,back:qr,bounce:function(){return Tr}}),dl=ao.map({"in":m,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});ao.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=vl.get(e)||gl,r=dl.get(r)||m,br(r(e.apply(null,lo.call(arguments,1))))},ao.interpolateHcl=Rr,ao.interpolateHsl=Dr,ao.interpolateLab=Pr,ao.interpolateRound=Ur,ao.transform=function(n){var t=fo.createElementNS(ao.ns.prefix.svg,"g");return(ao.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new jr(e?e.matrix:yl)})(n)},jr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var yl={a:1,b:0,c:0,d:1,e:0,f:0};ao.interpolateTransform=$r,ao.layout={},ao.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Jr(n[e]));return t}},ao.layout.chord=function(){function n(){var n,c,s,h,p,g={},v=[],d=ao.range(u),y=[];for(e=[],r=[],n=0,h=-1;++h<u;){for(c=0,p=-1;++p<u;)c+=i[h][p];v.push(c),y.push(ao.range(u)),n+=c}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&y.forEach(function(n,t){n.sort(function(n,e){return a(i[t][n],i[t][e])})}),n=(Ho-f*u)/n,c=0,h=-1;++h<u;){for(s=c,p=-1;++p<u;){var m=d[h],M=y[m][p],x=i[m][M],b=c,_=c+=x*n;g[m+"-"+M]={index:m,subindex:M,startAngle:b,endAngle:_,value:x}}r[m]={index:m,startAngle:s,endAngle:c,value:v[m]},c+=f}for(h=-1;++h<u;)for(p=h-1;++p<u;){var w=g[h+"-"+p],S=g[p+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}l&&t()}function t(){e.sort(function(n,t){return l((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,o,a,l,c={},f=0;return c.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,c):i},c.padding=function(n){return arguments.length?(f=n,e=r=null,c):f},c.sortGroups=function(n){return arguments.length?(o=n,e=r=null,c):o},c.sortSubgroups=function(n){return arguments.length?(a=n,e=null,c):a},c.sortChords=function(n){return arguments.length?(l=n,e&&t(),c):l},c.chords=function(){return e||n(),e},c.groups=function(){return r||n(),r},c},ao.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,o=t.cy-n.y,a=i-e,l=u*u+o*o;if(l>a*a/y){if(v>l){var c=t.charge/l;n.px-=u*c,n.py-=o*c}return!0}if(t.point&&l&&v>l){var c=t.pointCharge/l;n.px-=u*c,n.py-=o*c}}return!t.charge}}function t(n){n.px=ao.event.x,n.py=ao.event.y,l.resume()}var e,r,i,u,o,a,l={},c=ao.dispatch("start","tick","end"),f=[1,1],s=.9,h=ml,p=Ml,g=-30,v=xl,d=.1,y=.64,M=[],x=[];return l.tick=function(){if((i*=.99)<.005)return e=null,c.end({type:"end",alpha:i=0}),!0;var t,r,l,h,p,v,y,m,b,_=M.length,w=x.length;for(r=0;w>r;++r)l=x[r],h=l.source,p=l.target,m=p.x-h.x,b=p.y-h.y,(v=m*m+b*b)&&(v=i*o[r]*((v=Math.sqrt(v))-u[r])/v,m*=v,b*=v,p.x-=m*(y=h.weight+p.weight?h.weight/(h.weight+p.weight):.5),p.y-=b*y,h.x+=m*(y=1-y),h.y+=b*y);if((y=i*d)&&(m=f[0]/2,b=f[1]/2,r=-1,y))for(;++r<_;)l=M[r],l.x+=(m-l.x)*y,l.y+=(b-l.y)*y;if(g)for(ri(t=ao.geom.quadtree(M),i,a),r=-1;++r<_;)(l=M[r]).fixed||t.visit(n(l));for(r=-1;++r<_;)l=M[r],l.fixed?(l.x=l.px,l.y=l.py):(l.x-=(l.px-(l.px=l.x))*s,l.y-=(l.py-(l.py=l.y))*s);c.tick({type:"tick",alpha:i})},l.nodes=function(n){return arguments.length?(M=n,l):M},l.links=function(n){return arguments.length?(x=n,l):x},l.size=function(n){return arguments.length?(f=n,l):f},l.linkDistance=function(n){return arguments.length?(h="function"==typeof n?n:+n,l):h},l.distance=l.linkDistance,l.linkStrength=function(n){return arguments.length?(p="function"==typeof n?n:+n,l):p},l.friction=function(n){return arguments.length?(s=+n,l):s},l.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,l):g},l.chargeDistance=function(n){return arguments.length?(v=n*n,l):Math.sqrt(v)},l.gravity=function(n){return arguments.length?(d=+n,l):d},l.theta=function(n){return arguments.length?(y=n*n,l):Math.sqrt(y)},l.alpha=function(n){return arguments.length?(n=+n,i?n>0?i=n:(e.c=null,e.t=NaN,e=null,c.end({type:"end",alpha:i=0})):n>0&&(c.start({type:"start",alpha:i=n}),e=qn(l.tick)),l):i},l.start=function(){function n(n,r){if(!e){for(e=new Array(i),l=0;i>l;++l)e[l]=[];for(l=0;c>l;++l){var u=x[l];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var o,a=e[t],l=-1,f=a.length;++l<f;)if(!isNaN(o=a[l][n]))return o;return Math.random()*r}var t,e,r,i=M.length,c=x.length,s=f[0],v=f[1];for(t=0;i>t;++t)(r=M[t]).index=t,r.weight=0;for(t=0;c>t;++t)r=x[t],"number"==typeof r.source&&(r.source=M[r.source]),"number"==typeof r.target&&(r.target=M[r.target]),++r.source.weight,++r.target.weight;for(t=0;i>t;++t)r=M[t],isNaN(r.x)&&(r.x=n("x",s)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof h)for(t=0;c>t;++t)u[t]=+h.call(this,x[t],t);else for(t=0;c>t;++t)u[t]=h;if(o=[],"function"==typeof p)for(t=0;c>t;++t)o[t]=+p.call(this,x[t],t);else for(t=0;c>t;++t)o[t]=p;if(a=[],"function"==typeof g)for(t=0;i>t;++t)a[t]=+g.call(this,M[t],t);else for(t=0;i>t;++t)a[t]=g;return l.resume()},l.resume=function(){return l.alpha(.1)},l.stop=function(){return l.alpha(0)},l.drag=function(){return r||(r=ao.behavior.drag().origin(m).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",ni)),arguments.length?void this.on("mouseover.force",ti).on("mouseout.force",ei).call(r):r},ao.rebind(l,c,"on")};var ml=20,Ml=1,xl=1/0;ao.layout.hierarchy=function(){function n(i){var u,o=[i],a=[];for(i.depth=0;null!=(u=o.pop());)if(a.push(u),(c=e.call(n,u,u.depth))&&(l=c.length)){for(var l,c,f;--l>=0;)o.push(f=c[l]),f.parent=u,f.depth=u.depth+1;r&&(u.value=0),u.children=c}else r&&(u.value=+r.call(n,u,u.depth)||0),delete u.children;return oi(i,function(n){var e,i;t&&(e=n.children)&&e.sort(t),r&&(i=n.parent)&&(i.value+=n.value)}),a}var t=ci,e=ai,r=li;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(ui(t,function(n){n.children&&(n.value=0)}),oi(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ao.layout.partition=function(){function n(t,e,r,i){var u=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(o=u.length)){var o,a,l,c=-1;for(r=t.value?r/t.value:0;++c<o;)n(a=u[c],e,l=a.value*r,i),e+=l}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,t(e[u]));return 1+r}function e(e,u){var o=r.call(this,e,u);return n(o[0],0,i[0],i[1]/t(o[0])),o}var r=ao.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},ii(e,r)},ao.layout.pie=function(){function n(o){var a,l=o.length,c=o.map(function(e,r){return+t.call(n,e,r)}),f=+("function"==typeof r?r.apply(this,arguments):r),s=("function"==typeof i?i.apply(this,arguments):i)-f,h=Math.min(Math.abs(s)/l,+("function"==typeof u?u.apply(this,arguments):u)),p=h*(0>s?-1:1),g=ao.sum(c),v=g?(s-l*p)/g:0,d=ao.range(l),y=[];return null!=e&&d.sort(e===bl?function(n,t){return c[t]-c[n]}:function(n,t){return e(o[n],o[t])}),d.forEach(function(n){y[n]={data:o[n],value:a=c[n],startAngle:f,endAngle:f+=a*v+p,padAngle:h}}),y}var t=Number,e=bl,r=0,i=Ho,u=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n.padAngle=function(t){return arguments.length?(u=t,n):u},n};var bl={};ao.layout.stack=function(){function n(a,l){if(!(h=a.length))return a;var c=a.map(function(e,r){return t.call(n,e,r)}),f=c.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),o.call(n,t,e)]})}),s=e.call(n,f,l);c=ao.permute(c,s),f=ao.permute(f,s);var h,p,g,v,d=r.call(n,f,l),y=c[0].length;for(g=0;y>g;++g)for(i.call(n,c[0][g],v=d[g],f[0][g][1]),p=1;h>p;++p)i.call(n,c[p][g],v+=f[p-1][g][1],f[p][g][1]);return a}var t=m,e=gi,r=vi,i=pi,u=si,o=hi;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:_l.get(t)||gi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:wl.get(t)||vi,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(i=t,n):i},n};var _l=ao.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(di),u=n.map(yi),o=ao.range(r).sort(function(n,t){return i[n]-i[t]}),a=0,l=0,c=[],f=[];for(t=0;r>t;++t)e=o[t],l>a?(a+=u[e],c.push(e)):(l+=u[e],f.push(e));return f.reverse().concat(c)},reverse:function(n){return ao.range(n.length).reverse()},"default":gi}),wl=ao.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,o=[],a=0,l=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;u>e;++e)l[e]=(a-o[e])/2;return l},wiggle:function(n){var t,e,r,i,u,o,a,l,c,f=n.length,s=n[0],h=s.length,p=[];for(p[0]=l=c=0,e=1;h>e;++e){for(t=0,i=0;f>t;++t)i+=n[t][e][1];for(t=0,u=0,a=s[e][0]-s[e-1][0];f>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;u+=o*n[t][e][1]}p[e]=l-=i?u/i*a:0,c>l&&(c=l)}for(e=0;h>e;++e)p[e]-=c;return p},expand:function(n){var t,e,r,i=n.length,u=n[0].length,o=1/i,a=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=o}for(e=0;u>e;++e)a[e]=0;return a},zero:vi});ao.layout.histogram=function(){function n(n,u){for(var o,a,l=[],c=n.map(e,this),f=r.call(this,c,u),s=i.call(this,f,c,u),u=-1,h=c.length,p=s.length-1,g=t?1:1/h;++u<p;)o=l[u]=[],o.dx=s[u+1]-(o.x=s[u]),o.y=0;if(p>0)for(u=-1;++u<h;)a=c[u],a>=f[0]&&a<=f[1]&&(o=l[ao.bisect(s,a,1,p)-1],o.y+=g,o.push(n[u]));return l}var t=!0,e=Number,r=bi,i=Mi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=En(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return xi(n,t)}:En(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ao.layout.pack=function(){function n(n,u){var o=e.call(this,n,u),a=o[0],l=i[0],c=i[1],f=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,oi(a,function(n){n.r=+f(n.value)}),oi(a,Ni),r){var s=r*(t?1:Math.max(2*a.r/l,2*a.r/c))/2;oi(a,function(n){n.r+=s}),oi(a,Ni),oi(a,function(n){n.r-=s})}return Ci(a,l/2,c/2,t?1:1/Math.max(2*a.r/l,2*a.r/c)),o}var t,e=ao.layout.hierarchy().sort(_i),r=0,i=[1,1];return n.size=function(t){return arguments.length?(i=t,n):i},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},ii(n,e)},ao.layout.tree=function(){function n(n,i){var f=o.call(this,n,i),s=f[0],h=t(s);if(oi(h,e),h.parent.m=-h.z,ui(h,r),c)ui(s,u);else{var p=s,g=s,v=s;ui(s,function(n){n.x<p.x&&(p=n),n.x>g.x&&(g=n),n.depth>v.depth&&(v=n)});var d=a(p,g)/2-p.x,y=l[0]/(g.x+a(g,p)/2+d),m=l[1]/(v.depth||1);ui(s,function(n){n.x=(n.x+d)*y,n.y=n.depth*m})}return f}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var i,u=t.children,o=0,a=u.length;a>o;++o)r.push((u[o]=i={_:u[o],parent:t,children:(i=u[o].children)&&i.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=i);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Di(n);var u=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-u):n.z=u}else r&&(n.z=r.z+a(n._,r._));n.parent.A=i(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function i(n,t,e){if(t){for(var r,i=n,u=n,o=t,l=i.parent.children[0],c=i.m,f=u.m,s=o.m,h=l.m;o=Ti(o),i=qi(i),o&&i;)l=qi(l),u=Ti(u),u.a=n,r=o.z+s-i.z-c+a(o._,i._),r>0&&(Ri(Pi(o,n,e),n,r),c+=r,f+=r),s+=o.m,c+=i.m,h+=l.m,f+=u.m;o&&!Ti(u)&&(u.t=o,u.m+=s-f),i&&!qi(l)&&(l.t=i,l.m+=c-h,e=n)}return e}function u(n){n.x*=l[0],n.y=n.depth*l[1]}var o=ao.layout.hierarchy().sort(null).value(null),a=Li,l=[1,1],c=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(c=null==(l=t)?u:null,n):c?null:l},n.nodeSize=function(t){return arguments.length?(c=null==(l=t)?null:u,n):c?l:null},ii(n,o)},ao.layout.cluster=function(){function n(n,u){var o,a=t.call(this,n,u),l=a[0],c=0;oi(l,function(n){var t=n.children;t&&t.length?(n.x=ji(t),n.y=Ui(t)):(n.x=o?c+=e(n,o):0,n.y=0,o=n)});var f=Fi(l),s=Hi(l),h=f.x-e(f,s)/2,p=s.x+e(s,f)/2;return oi(l,i?function(n){n.x=(n.x-l.x)*r[0],n.y=(l.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(p-h)*r[0],n.y=(1-(l.y?n.y/l.y:1))*r[1]}),a}var t=ao.layout.hierarchy().sort(null).value(null),e=Li,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ii(n,t)},ao.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var u=e.children;if(u&&u.length){var o,a,l,c=s(e),f=[],h=u.slice(),g=1/0,v="slice"===p?c.dx:"dice"===p?c.dy:"slice-dice"===p?1&e.depth?c.dy:c.dx:Math.min(c.dx,c.dy);for(n(h,c.dx*c.dy/e.value),f.area=0;(l=h.length)>0;)f.push(o=h[l-1]),f.area+=o.area,"squarify"!==p||(a=r(f,v))<=g?(h.pop(),g=a):(f.area-=f.pop().area,i(f,v,c,!1),v=Math.min(c.dx,c.dy),f.length=f.area=0,g=1/0);f.length&&(i(f,v,c,!0),f.length=f.area=0),u.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var u,o=s(t),a=r.slice(),l=[];for(n(a,o.dx*o.dy/t.value),l.area=0;u=a.pop();)l.push(u),l.area+=u.area,null!=u.z&&(i(l,u.z?o.dx:o.dy,o,!a.length),l.length=l.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(u>e&&(u=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*g/r,r/(t*u*g)):1/0}function i(n,t,e,r){var i,u=-1,o=n.length,a=e.x,c=e.y,f=t?l(n.area/t):0;
if(t==e.dx){for((r||f>e.dy)&&(f=e.dy);++u<o;)i=n[u],i.x=a,i.y=c,i.dy=f,a+=i.dx=Math.min(e.x+e.dx-a,f?l(i.area/f):0);i.z=!0,i.dx+=e.x+e.dx-a,e.y+=f,e.dy-=f}else{for((r||f>e.dx)&&(f=e.dx);++u<o;)i=n[u],i.x=a,i.y=c,i.dx=f,c+=i.dy=Math.min(e.y+e.dy-c,f?l(i.area/f):0);i.z=!1,i.dy+=e.y+e.dy-c,e.x+=f,e.dx-=f}}function u(r){var i=o||a(r),u=i[0];return u.x=u.y=0,u.value?(u.dx=c[0],u.dy=c[1]):u.dx=u.dy=0,o&&a.revalue(u),n([u],u.dx*u.dy/u.value),(o?e:t)(u),h&&(o=i),i}var o,a=ao.layout.hierarchy(),l=Math.round,c=[1,1],f=null,s=Oi,h=!1,p="squarify",g=.5*(1+Math.sqrt(5));return u.size=function(n){return arguments.length?(c=n,u):c},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth);return null==e?Oi(t):Ii(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ii(t,n)}if(!arguments.length)return f;var r;return s=null==(f=n)?Oi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(l=n?Math.round:Number,u):l!=Number},u.sticky=function(n){return arguments.length?(h=n,o=null,u):h},u.ratio=function(n){return arguments.length?(g=n,u):g},u.mode=function(n){return arguments.length?(p=n+"",u):p},ii(u,a)},ao.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ao.random.normal.apply(ao,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ao.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ao.scale={};var Sl={floor:m,ceil:m};ao.scale.linear=function(){return Wi([0,1],[0,1],Mr,!1)};var kl={s:1,g:1,p:1,r:1,e:1};ao.scale.log=function(){return ru(ao.scale.linear().domain([0,1]),10,!0,[1,10])};var Nl=ao.format(".0e"),El={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ao.scale.pow=function(){return iu(ao.scale.linear(),1,[0,1])},ao.scale.sqrt=function(){return ao.scale.pow().exponent(.5)},ao.scale.ordinal=function(){return ou([],{t:"range",a:[[]]})},ao.scale.category10=function(){return ao.scale.ordinal().range(Al)},ao.scale.category20=function(){return ao.scale.ordinal().range(Cl)},ao.scale.category20b=function(){return ao.scale.ordinal().range(zl)},ao.scale.category20c=function(){return ao.scale.ordinal().range(Ll)};var Al=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(xn),Cl=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(xn),zl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(xn),Ll=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(xn);ao.scale.quantile=function(){return au([],[])},ao.scale.quantize=function(){return lu(0,1,[0,1])},ao.scale.threshold=function(){return cu([.5],[0,1])},ao.scale.identity=function(){return fu([0,1])},ao.svg={},ao.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),c=Math.max(0,+r.apply(this,arguments)),f=o.apply(this,arguments)-Io,s=a.apply(this,arguments)-Io,h=Math.abs(s-f),p=f>s?0:1;if(n>c&&(g=c,c=n,n=g),h>=Oo)return t(c,p)+(n?t(n,1-p):"")+"Z";var g,v,d,y,m,M,x,b,_,w,S,k,N=0,E=0,A=[];if((y=(+l.apply(this,arguments)||0)/2)&&(d=u===ql?Math.sqrt(n*n+c*c):+u.apply(this,arguments),p||(E*=-1),c&&(E=tn(d/c*Math.sin(y))),n&&(N=tn(d/n*Math.sin(y)))),c){m=c*Math.cos(f+E),M=c*Math.sin(f+E),x=c*Math.cos(s-E),b=c*Math.sin(s-E);var C=Math.abs(s-f-2*E)<=Fo?0:1;if(E&&yu(m,M,x,b)===p^C){var z=(f+s)/2;m=c*Math.cos(z),M=c*Math.sin(z),x=b=null}}else m=M=0;if(n){_=n*Math.cos(s-N),w=n*Math.sin(s-N),S=n*Math.cos(f+N),k=n*Math.sin(f+N);var L=Math.abs(f-s+2*N)<=Fo?0:1;if(N&&yu(_,w,S,k)===1-p^L){var q=(f+s)/2;_=n*Math.cos(q),w=n*Math.sin(q),S=k=null}}else _=w=0;if(h>Uo&&(g=Math.min(Math.abs(c-n)/2,+i.apply(this,arguments)))>.001){v=c>n^p?0:1;var T=g,R=g;if(Fo>h){var D=null==S?[_,w]:null==x?[m,M]:Re([m,M],[S,k],[x,b],[_,w]),P=m-D[0],U=M-D[1],j=x-D[0],F=b-D[1],H=1/Math.sin(Math.acos((P*j+U*F)/(Math.sqrt(P*P+U*U)*Math.sqrt(j*j+F*F)))/2),O=Math.sqrt(D[0]*D[0]+D[1]*D[1]);R=Math.min(g,(n-O)/(H-1)),T=Math.min(g,(c-O)/(H+1))}if(null!=x){var I=mu(null==S?[_,w]:[S,k],[m,M],c,T,p),Y=mu([x,b],[_,w],c,T,p);g===T?A.push("M",I[0],"A",T,",",T," 0 0,",v," ",I[1],"A",c,",",c," 0 ",1-p^yu(I[1][0],I[1][1],Y[1][0],Y[1][1]),",",p," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",I[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",m,",",M);if(null!=S){var Z=mu([m,M],[S,k],n,-R,p),V=mu([_,w],null==x?[m,M]:[x,b],n,-R,p);g===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",n,",",n," 0 ",p^yu(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-p," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",m,",",M),null!=x&&A.push("A",c,",",c," 0 ",C,",",p," ",x,",",b),A.push("L",_,",",w),null!=S&&A.push("A",n,",",n," 0 ",L,",",1-p," ",S,",",k);return A.push("Z"),A.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=hu,r=pu,i=su,u=ql,o=gu,a=vu,l=du;return n.innerRadius=function(t){return arguments.length?(e=En(t),n):e},n.outerRadius=function(t){return arguments.length?(r=En(t),n):r},n.cornerRadius=function(t){return arguments.length?(i=En(t),n):i},n.padRadius=function(t){return arguments.length?(u=t==ql?ql:En(t),n):u},n.startAngle=function(t){return arguments.length?(o=En(t),n):o},n.endAngle=function(t){return arguments.length?(a=En(t),n):a},n.padAngle=function(t){return arguments.length?(l=En(t),n):l},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-Io;return[Math.cos(t)*n,Math.sin(t)*n]},n};var ql="auto";ao.svg.line=function(){return Mu(m)};var Tl=ao.map({linear:xu,"linear-closed":bu,step:_u,"step-before":wu,"step-after":Su,basis:zu,"basis-open":Lu,"basis-closed":qu,bundle:Tu,cardinal:Eu,"cardinal-open":ku,"cardinal-closed":Nu,monotone:Fu});Tl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Rl=[0,2/3,1/3,0],Dl=[0,1/3,2/3,0],Pl=[0,1/6,2/3,1/6];ao.svg.line.radial=function(){var n=Mu(Hu);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},wu.reverse=Su,Su.reverse=wu,ao.svg.area=function(){return Ou(m)},ao.svg.area.radial=function(){var n=Ou(Hu);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ao.svg.chord=function(){function n(n,a){var l=t(this,u,n,a),c=t(this,o,n,a);return"M"+l.p0+r(l.r,l.p1,l.a1-l.a0)+(e(l,c)?i(l.r,l.p1,l.r,l.p0):i(l.r,l.p1,c.r,c.p0)+r(c.r,c.p1,c.a1-c.a0)+i(c.r,c.p1,l.r,l.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=a.call(n,i,r),o=l.call(n,i,r)-Io,f=c.call(n,i,r)-Io;return{r:u,a0:o,a1:f,p0:[u*Math.cos(o),u*Math.sin(o)],p1:[u*Math.cos(f),u*Math.sin(f)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Fo)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=Me,o=xe,a=Iu,l=gu,c=vu;return n.radius=function(t){return arguments.length?(a=En(t),n):a},n.source=function(t){return arguments.length?(u=En(t),n):u},n.target=function(t){return arguments.length?(o=En(t),n):o},n.startAngle=function(t){return arguments.length?(l=En(t),n):l},n.endAngle=function(t){return arguments.length?(c=En(t),n):c},n},ao.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),o=e.call(this,n,i),a=(u.y+o.y)/2,l=[u,{x:u.x,y:a},{x:o.x,y:a},o];return l=l.map(r),"M"+l[0]+"C"+l[1]+" "+l[2]+" "+l[3]}var t=Me,e=xe,r=Yu;return n.source=function(e){return arguments.length?(t=En(e),n):t},n.target=function(t){return arguments.length?(e=En(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ao.svg.diagonal.radial=function(){var n=ao.svg.diagonal(),t=Yu,e=n.projection;return n.projection=function(n){return arguments.length?e(Zu(t=n)):t},n},ao.svg.symbol=function(){function n(n,r){return(Ul.get(t.call(this,n,r))||$u)(e.call(this,n,r))}var t=Xu,e=Vu;return n.type=function(e){return arguments.length?(t=En(e),n):t},n.size=function(t){return arguments.length?(e=En(t),n):e},n};var Ul=ao.map({circle:$u,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Fl)),e=t*Fl;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ao.svg.symbolTypes=Ul.keys();var jl=Math.sqrt(3),Fl=Math.tan(30*Yo);Co.transition=function(n){for(var t,e,r=Hl||++Zl,i=Ku(n),u=[],o=Ol||{time:Date.now(),ease:Nr,delay:0,duration:250},a=-1,l=this.length;++a<l;){u.push(t=[]);for(var c=this[a],f=-1,s=c.length;++f<s;)(e=c[f])&&Qu(e,f,i,r,o),t.push(e)}return Wu(u,i,r)},Co.interrupt=function(n){return this.each(null==n?Il:Bu(Ku(n)))};var Hl,Ol,Il=Bu(Ku()),Yl=[],Zl=0;Yl.call=Co.call,Yl.empty=Co.empty,Yl.node=Co.node,Yl.size=Co.size,ao.transition=function(n,t){return n&&n.transition?Hl?n.transition(t):n:ao.selection().transition(n)},ao.transition.prototype=Yl,Yl.select=function(n){var t,e,r,i=this.id,u=this.namespace,o=[];n=A(n);for(var a=-1,l=this.length;++a<l;){o.push(t=[]);for(var c=this[a],f=-1,s=c.length;++f<s;)(r=c[f])&&(e=n.call(r,r.__data__,f,a))?("__data__"in r&&(e.__data__=r.__data__),Qu(e,f,u,i,r[u][i]),t.push(e)):t.push(null)}return Wu(o,u,i)},Yl.selectAll=function(n){var t,e,r,i,u,o=this.id,a=this.namespace,l=[];n=C(n);for(var c=-1,f=this.length;++c<f;)for(var s=this[c],h=-1,p=s.length;++h<p;)if(r=s[h]){u=r[a][o],e=n.call(r,r.__data__,h,c),l.push(t=[]);for(var g=-1,v=e.length;++g<v;)(i=e[g])&&Qu(i,g,a,o,u),t.push(i)}return Wu(l,a,o)},Yl.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=O(n));for(var u=0,o=this.length;o>u;u++){i.push(t=[]);for(var e=this[u],a=0,l=e.length;l>a;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return Wu(i,this.namespace,this.id)},Yl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(i){i[r][e].tween.set(n,t)})},Yl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?$r:Mr,a=ao.ns.qualify(n);return Ju(this,"attr."+n,t,a.local?u:i)},Yl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ao.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},Yl.style=function(n,e,r){function i(){this.style.removeProperty(n)}function u(e){return null==e?i:(e+="",function(){var i,u=t(this).getComputedStyle(this,null).getPropertyValue(n);return u!==e&&(i=Mr(u,e),function(t){this.style.setProperty(n,i(t),r)})})}var o=arguments.length;if(3>o){if("string"!=typeof n){2>o&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Ju(this,"style."+n,e,u)},Yl.styleTween=function(n,e,r){function i(i,u){var o=e.call(this,i,u,t(this).getComputedStyle(this,null).getPropertyValue(n));return o&&function(t){this.style.setProperty(n,o(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,i)},Yl.text=function(n){return Ju(this,"text",n,Gu)},Yl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Yl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ao.ease.apply(ao,arguments)),Y(this,function(r){r[e][t].ease=n}))},Yl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,i,u){r[e][t].delay=+n.call(r,r.__data__,i,u)}:(n=+n,function(r){r[e][t].delay=n}))},Yl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,i,u){r[e][t].duration=Math.max(1,n.call(r,r.__data__,i,u))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Yl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var i=Ol,u=Hl;try{Hl=e,Y(this,function(t,i,u){Ol=t[r][e],n.call(t,t.__data__,i,u)})}finally{Ol=i,Hl=u}}else Y(this,function(i){var u=i[r][e];(u.event||(u.event=ao.dispatch("start","end","interrupt"))).on(n,t)});return this},Yl.transition=function(){for(var n,t,e,r,i=this.id,u=++Zl,o=this.namespace,a=[],l=0,c=this.length;c>l;l++){a.push(n=[]);for(var t=this[l],f=0,s=t.length;s>f;f++)(e=t[f])&&(r=e[o][i],Qu(e,f,o,u,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Wu(a,o,u)},ao.svg.axis=function(){function n(n){n.each(function(){var n,c=ao.select(this),f=this.__chart__||e,s=this.__chart__=e.copy(),h=null==l?s.ticks?s.ticks.apply(s,a):s.domain():l,p=null==t?s.tickFormat?s.tickFormat.apply(s,a):m:t,g=c.selectAll(".tick").data(h,s),v=g.enter().insert("g",".domain").attr("class","tick").style("opacity",Uo),d=ao.transition(g.exit()).style("opacity",Uo).remove(),y=ao.transition(g.order()).style("opacity",1),M=Math.max(i,0)+o,x=Zi(s),b=c.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),ao.transition(b));v.append("line"),v.append("text");var w,S,k,N,E=v.select("line"),A=y.select("line"),C=g.select("text").text(p),z=v.select("text"),L=y.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=no,w="x",k="y",S="x2",N="y2",C.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*u+"V0H"+x[1]+"V"+q*u)):(n=to,w="y",k="x",S="y2",N="x2",C.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),_.attr("d","M"+q*u+","+x[0]+"H0V"+x[1]+"H"+q*u)),E.attr(N,q*i),z.attr(k,q*M),A.attr(S,0).attr(N,q*i),L.attr(w,0).attr(k,q*M),s.rangeBand){var T=s,R=T.rangeBand()/2;f=s=function(n){return T(n)+R}}else f.rangeBand?f=s:d.call(n,s,f);v.call(n,f,s),y.call(n,s,s)})}var t,e=ao.scale.linear(),r=Vl,i=6,u=6,o=3,a=[10],l=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Xl?t+"":Vl,n):r},n.ticks=function(){return arguments.length?(a=co(arguments),n):a},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(i=+t,u=+arguments[e-1],n):i},n.innerTickSize=function(t){return arguments.length?(i=+t,n):i},n.outerTickSize=function(t){return arguments.length?(u=+t,n):u},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Vl="bottom",Xl={top:1,right:1,bottom:1,left:1};ao.svg.brush=function(){function n(t){t.each(function(){var t=ao.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=t.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=t.selectAll(".resize").data(v,m);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return $l[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,s=ao.transition(t),h=ao.transition(o);c&&(l=Zi(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(s)),f&&(l=Zi(f),h.attr("y",l[0]).attr("height",l[1]-l[0]),i(s)),e(s)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function i(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function u(){function u(){32==ao.event.keyCode&&(C||(M=null,L[0]-=s[1],L[1]-=h[1],C=2),S())}function v(){32==ao.event.keyCode&&2==C&&(L[0]+=s[1],L[1]+=h[1],C=0,S())}function d(){var n=ao.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(ao.event.altKey?(M||(M=[(s[0]+s[1])/2,(h[0]+h[1])/2]),L[0]=s[+(n[0]<M[0])],L[1]=h[+(n[1]<M[1])]):M=null),E&&y(n,c,0)&&(r(k),t=!0),A&&y(n,f,1)&&(i(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function y(n,t,e){var r,i,u=Zi(t),l=u[0],c=u[1],f=L[e],v=e?h:s,d=v[1]-v[0];return C&&(l-=f,c-=d+f),r=(e?g:p)?Math.max(l,Math.min(c,n[e])):n[e],C?i=(r+=f)+d:(M&&(f=Math.max(l,Math.min(c,2*M[e]-r))),r>f?(i=r,r=f):i=f),v[0]!=r||v[1]!=i?(e?a=null:o=null,v[0]=r,v[1]=i,!0):void 0}function m(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ao.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=ao.select(ao.event.target),w=l.of(b,arguments),k=ao.select(b),N=_.datum(),E=!/^(n|s)$/.test(N)&&c,A=!/^(e|w)$/.test(N)&&f,C=_.classed("extent"),z=W(b),L=ao.mouse(b),q=ao.select(t(b)).on("keydown.brush",u).on("keyup.brush",v);if(ao.event.changedTouches?q.on("touchmove.brush",d).on("touchend.brush",m):q.on("mousemove.brush",d).on("mouseup.brush",m),k.interrupt().selectAll("*").interrupt(),C)L[0]=s[0]-L[0],L[1]=h[0]-L[1];else if(N){var T=+/w$/.test(N),R=+/^n/.test(N);x=[s[1-T]-L[0],h[1-R]-L[1]],L[0]=s[T],L[1]=h[R]}else ao.event.altKey&&(M=L.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),ao.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var o,a,l=N(n,"brushstart","brush","brushend"),c=null,f=null,s=[0,0],h=[0,0],p=!0,g=!0,v=Bl[0];return n.event=function(n){n.each(function(){var n=l.of(this,arguments),t={x:s,y:h,i:o,j:a},e=this.__chart__||t;this.__chart__=t,Hl?ao.select(this).transition().each("start.brush",function(){o=e.i,a=e.j,s=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=xr(s,t.x),r=xr(h,t.y);return o=a=null,function(i){s=t.x=e(i),h=t.y=r(i),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){o=t.i,a=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=Bl[!c<<1|!f],n):c},n.y=function(t){return arguments.length?(f=t,v=Bl[!c<<1|!f],n):f},n.clamp=function(t){return arguments.length?(c&&f?(p=!!t[0],g=!!t[1]):c?p=!!t:f&&(g=!!t),n):c&&f?[p,g]:c?p:f?g:null},n.extent=function(t){var e,r,i,u,l;return arguments.length?(c&&(e=t[0],r=t[1],f&&(e=e[0],r=r[0]),o=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(l=e,e=r,r=l),e==s[0]&&r==s[1]||(s=[e,r])),f&&(i=t[0],u=t[1],c&&(i=i[1],u=u[1]),a=[i,u],f.invert&&(i=f(i),u=f(u)),i>u&&(l=i,i=u,u=l),i==h[0]&&u==h[1]||(h=[i,u])),n):(c&&(o?(e=o[0],r=o[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(l=e,e=r,r=l))),f&&(a?(i=a[0],u=a[1]):(i=h[0],u=h[1],f.invert&&(i=f.invert(i),u=f.invert(u)),i>u&&(l=i,i=u,u=l))),c&&f?[[e,i],[r,u]]:c?[e,r]:f&&[i,u])},n.clear=function(){return n.empty()||(s=[0,0],h=[0,0],o=a=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!f&&h[0]==h[1]},ao.rebind(n,l,"on")};var $l={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Bl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Wl=ga.format=xa.timeFormat,Jl=Wl.utc,Gl=Jl("%Y-%m-%dT%H:%M:%S.%LZ");Wl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?eo:Gl,eo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},eo.toString=Gl.toString,ga.second=On(function(n){return new va(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ga.seconds=ga.second.range,ga.seconds.utc=ga.second.utc.range,ga.minute=On(function(n){return new va(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ga.minutes=ga.minute.range,ga.minutes.utc=ga.minute.utc.range,ga.hour=On(function(n){var t=n.getTimezoneOffset()/60;return new va(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ga.hours=ga.hour.range,ga.hours.utc=ga.hour.utc.range,ga.month=On(function(n){return n=ga.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ga.months=ga.month.range,ga.months.utc=ga.month.utc.range;var Kl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Ql=[[ga.second,1],[ga.second,5],[ga.second,15],[ga.second,30],[ga.minute,1],[ga.minute,5],[ga.minute,15],[ga.minute,30],[ga.hour,1],[ga.hour,3],[ga.hour,6],[ga.hour,12],[ga.day,1],[ga.day,2],[ga.week,1],[ga.month,1],[ga.month,3],[ga.year,1]],nc=Wl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",zt]]),tc={range:function(n,t,e){return ao.range(Math.ceil(n/e)*e,+t,e).map(io)},floor:m,ceil:m};Ql.year=ga.year,ga.scale=function(){return ro(ao.scale.linear(),Ql,nc)};var ec=Ql.map(function(n){return[n[0].utc,n[1]]}),rc=Jl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",zt]]);ec.year=ga.year.utc,ga.scale.utc=function(){return ro(ao.scale.linear(),ec,rc)},ao.text=An(function(n){return n.responseText}),ao.json=function(n,t){return Cn(n,"application/json",uo,t)},ao.html=function(n,t){return Cn(n,"text/html",oo,t)},ao.xml=An(function(n){return n.responseXML}),"function"==typeof define&&define.amd?(this.d3=ao,define(ao)):"object"==typeof module&&module.exports?module.exports=ao:this.d3=ao}();
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.c3=e()}(this,function(){"use strict";function t(t,e){function i(t,e){t.attr("transform",function(t){return"translate("+Math.ceil(e(t)+w)+", 0)"})}function n(t,e){t.attr("transform",function(t){return"translate(0,"+Math.ceil(e(t))+")"})}function a(t){var e=t[0],i=t[t.length-1];return e<i?[e,i]:[i,e]}function o(t){var e,i,n=[];if(t.ticks)return t.ticks.apply(t,p);for(i=t.domain(),e=Math.ceil(i[0]);e<i[1];e++)n.push(e);return n.length>0&&n[0]>0&&n.unshift(n[0]-(n[1]-n[0])),n}function s(){var t,i=_.copy();return e.isCategory&&(t=_.domain(),i.domain([t[0],t[1]-1])),i}function c(t){var e=g?g(t):t;return void 0!==e?e:""}function d(t){if(r)return r;var e={h:11.5,w:5.5};return t.select("text").text(c).each(function(t){var i=this.getBoundingClientRect(),n=c(t),a=i.height,r=n?i.width/n.length:void 0;a&&r&&(e.h=a,e.w=r)}).text(""),r=e,e}function l(i){return e.withoutTransition?i:t.transition(i)}function u(r){r.each(function(){function r(t,i){function n(t,e){r=void 0;for(var s=1;s<e.length;s++)if(" "===e.charAt(s)&&(r=s),a=e.substr(0,s+1),o=z.w*a.length,i<o)return n(t.concat(e.substr(0,r||s)),e.slice(r?r+1:s));return t.concat(e)}var a,r,o,s=c(t),d=[];return"[object Array]"===Object.prototype.toString.call(s)?s:((!i||i<=0)&&(i=Y?95:e.isCategory?Math.ceil(P(L[1])-P(L[0]))-12:110),n(d,s+""))}function g(t,e){var i=z.h;return 0===e&&(i="left"===x||"right"===x?-((B[t.index]-1)*(z.h/2)-3):".71em"),i}var p,v,b,A=u.g=t.select(this),T=this.__chart__||_,P=this.__chart__=s(),L=S||o(P),C=A.selectAll(".tick").data(L,P),V=C.enter().insert("g",".domain").attr("class","tick").style("opacity",1e-6),G=C.exit().remove(),E=l(C).style("opacity",1),I=_.rangeExtent?_.rangeExtent():a(_.range()),O=A.selectAll(".domain").data([0]),R=(O.enter().append("path").attr("class","domain"),l(O));V.append("line"),V.append("text");var D=V.select("line"),F=E.select("line"),X=V.select("text"),k=E.select("text");e.isCategory?(w=Math.ceil((P(1)-P(0))/2),v=f?0:w,b=f?w:0):w=v=0;var M,H,z=d(A.select(".tick")),B=[],N=Math.max(y,0)+m,Y="left"===x||"right"===x;(H=(M=C.select("text")).selectAll("tspan").data(function(t,i){var n=e.tickMultiline?r(t,e.tickWidth):[].concat(c(t));return B[i]=n.length,n.map(function(t){return{index:i,splitted:t}})})).enter().append("tspan"),H.exit().remove(),H.text(function(t){return t.splitted});var j=e.tickTextRotate;switch(x){case"bottom":p=i,D.attr("y2",y),X.attr("y",N),F.attr("x1",v).attr("x2",v).attr("y2",function(t){var e=_(t)+(f?0:w);return I[0]<e&&e<I[1]?y:0}),k.attr("x",0).attr("y",function(t){return t?11.5-t/15*2.5*(t>0?1:-1):N}(j)).style("text-anchor",function(t){return t?t>0?"start":"end":"middle"}(j)).attr("transform",function(t){return t?"rotate("+t+")":""}(j)),H.attr("x",0).attr("dy",g).attr("dx",function(t){return t?8*Math.sin(Math.PI*(t/180)):0}(j)),R.attr("d","M"+I[0]+","+h+"V0H"+I[1]+"V"+h);break;case"top":p=i,D.attr("y2",-y),X.attr("y",-N),F.attr("x2",0).attr("y2",-y),k.attr("x",0).attr("y",-N),M.style("text-anchor","middle"),H.attr("x",0).attr("dy","0em"),R.attr("d","M"+I[0]+","+-h+"V0H"+I[1]+"V"+-h);break;case"left":p=n,D.attr("x2",-y),X.attr("x",-N),F.attr("x2",-y).attr("y1",b).attr("y2",b),k.attr("x",-N).attr("y",w),M.style("text-anchor","end"),H.attr("x",-N).attr("dy",g),R.attr("d","M"+-h+","+I[0]+"H0V"+I[1]+"H"+-h);break;case"right":p=n,D.attr("x2",y),X.attr("x",N),F.attr("x2",y).attr("y2",0),k.attr("x",N).attr("y",0),M.style("text-anchor","start"),H.attr("x",N).attr("dy",g),R.attr("d","M"+h+","+I[0]+"H0V"+I[1]+"H"+h)}if(P.rangeBand){var U=P,W=U.rangeBand()/2;T=P=function(t){return U(t)+W}}else T.rangeBand?T=P:G.call(p,P);V.call(p,T),E.call(p,P)})}var h,g,p,f,_=t.scale.linear(),x="bottom",y=6,m=3,S=null,w=0,v=!0;return e=e||{},h=e.withOuterTick?6:0,u.scale=function(t){return arguments.length?(_=t,u):_},u.orient=function(t){return arguments.length?(x=t in{top:1,right:1,bottom:1,left:1}?t+"":"bottom",u):x},u.tickFormat=function(t){return arguments.length?(g=t,u):g},u.tickCentered=function(t){return arguments.length?(f=t,u):f},u.tickOffset=function(){return w},u.tickInterval=function(){var t;return t=e.isCategory?2*w:(u.g.select("path.domain").node().getTotalLength()-2*h)/u.g.selectAll("line").size(),t===1/0?0:t},u.ticks=function(){return arguments.length?(p=arguments,u):p},u.tickCulling=function(t){return arguments.length?(v=t,u):v},u.tickValues=function(t){if("function"==typeof t)S=function(){return t(_.domain())};else{if(!arguments.length)return S;S=t}return u},u}function e(t){i.call(this,t)}function i(t){this.owner=t}function n(t){var e=this.internal=new a(this);e.loadConfig(t),e.beforeInit(t),e.init(),e.afterInit(t),function t(e,i,n){Object.keys(e).forEach(function(a){i[a]=e[a].bind(n),Object.keys(e[a]).length>0&&t(e[a],i[a],n)})}(b,this,this)}function a(t){var e=this;e.d3=window.d3?window.d3:"undefined"!=typeof require?require("d3"):void 0,e.api=t,e.config=e.getDefaultConfig(),e.data={},e.cache={},e.axes={}}var r,o={target:"c3-target",chart:"c3-chart",chartLine:"c3-chart-line",chartLines:"c3-chart-lines",chartBar:"c3-chart-bar",chartBars:"c3-chart-bars",chartText:"c3-chart-text",chartTexts:"c3-chart-texts",chartArc:"c3-chart-arc",chartArcs:"c3-chart-arcs",chartArcsTitle:"c3-chart-arcs-title",chartArcsBackground:"c3-chart-arcs-background",chartArcsGaugeUnit:"c3-chart-arcs-gauge-unit",chartArcsGaugeMax:"c3-chart-arcs-gauge-max",chartArcsGaugeMin:"c3-chart-arcs-gauge-min",selectedCircle:"c3-selected-circle",selectedCircles:"c3-selected-circles",eventRect:"c3-event-rect",eventRects:"c3-event-rects",eventRectsSingle:"c3-event-rects-single",eventRectsMultiple:"c3-event-rects-multiple",zoomRect:"c3-zoom-rect",brush:"c3-brush",focused:"c3-focused",defocused:"c3-defocused",region:"c3-region",regions:"c3-regions",title:"c3-title",tooltipContainer:"c3-tooltip-container",tooltip:"c3-tooltip",tooltipName:"c3-tooltip-name",shape:"c3-shape",shapes:"c3-shapes",line:"c3-line",lines:"c3-lines",bar:"c3-bar",bars:"c3-bars",circle:"c3-circle",circles:"c3-circles",arc:"c3-arc",arcs:"c3-arcs",area:"c3-area",areas:"c3-areas",empty:"c3-empty",text:"c3-text",texts:"c3-texts",gaugeValue:"c3-gauge-value",grid:"c3-grid",gridLines:"c3-grid-lines",xgrid:"c3-xgrid",xgrids:"c3-xgrids",xgridLine:"c3-xgrid-line",xgridLines:"c3-xgrid-lines",xgridFocus:"c3-xgrid-focus",ygrid:"c3-ygrid",ygrids:"c3-ygrids",ygridLine:"c3-ygrid-line",ygridLines:"c3-ygrid-lines",axis:"c3-axis",axisX:"c3-axis-x",axisXLabel:"c3-axis-x-label",axisY:"c3-axis-y",axisYLabel:"c3-axis-y-label",axisY2:"c3-axis-y2",axisY2Label:"c3-axis-y2-label",legendBackground:"c3-legend-background",legendItem:"c3-legend-item",legendItemEvent:"c3-legend-item-event",legendItemTile:"c3-legend-item-tile",legendItemHidden:"c3-legend-item-hidden",legendItemFocused:"c3-legend-item-focused",dragarea:"c3-dragarea",EXPANDED:"_expanded_",SELECTED:"_selected_",INCLUDED:"_included_"},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=function(t){return t||0===t},d=function(t){return"function"==typeof t},l=function(t){return Array.isArray(t)},u=function(t){return"string"==typeof t},h=function(t){return void 0===t},g=function(t){return void 0!==t},p=function(t){return 10*Math.ceil(t/10)},f=function(t){return Math.ceil(t)+.5},_=function(t){return t[1]-t[0]},x=function(t){return void 0===t||null===t||u(t)&&0===t.length||"object"===(void 0===t?"undefined":s(t))&&0===Object.keys(t).length},y=function(t){return!A.isEmpty(t)},m=function(t,e,i){return void 0!==t[e]?t[e]:i},S=function(t,e){var i=!1;return Object.keys(t).forEach(function(n){t[n]===e&&(i=!0)}),i},w=function(t){return"string"==typeof t?t.replace(/</g,"&lt;").replace(/>/g,"&gt;"):t},v=function(t){var e=t.getBoundingClientRect(),i=[t.pathSegList.getItem(0),t.pathSegList.getItem(1)];return{x:i[0].x,y:Math.min(i[0].y,i[1].y),width:e.width,height:e.height}};!function(t,e){if(Object.create)e.prototype=Object.create(t.prototype);else{var i=function(){};i.prototype=t.prototype,e.prototype=new i}e.prototype.constructor=e}(i,e),e.prototype.init=function(){var t=this.owner,e=t.config,i=t.main;t.axes.x=i.append("g").attr("class",o.axis+" "+o.axisX).attr("clip-path",t.clipPathForXAxis).attr("transform",t.getTranslate("x")).style("visibility",e.axis_x_show?"visible":"hidden"),t.axes.x.append("text").attr("class",o.axisXLabel).attr("transform",e.axis_rotated?"rotate(-90)":"").style("text-anchor",this.textAnchorForXAxisLabel.bind(this)),t.axes.y=i.append("g").attr("class",o.axis+" "+o.axisY).attr("clip-path",e.axis_y_inner?"":t.clipPathForYAxis).attr("transform",t.getTranslate("y")).style("visibility",e.axis_y_show?"visible":"hidden"),t.axes.y.append("text").attr("class",o.axisYLabel).attr("transform",e.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForYAxisLabel.bind(this)),t.axes.y2=i.append("g").attr("class",o.axis+" "+o.axisY2).attr("transform",t.getTranslate("y2")).style("visibility",e.axis_y2_show?"visible":"hidden"),t.axes.y2.append("text").attr("class",o.axisY2Label).attr("transform",e.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForY2AxisLabel.bind(this))},e.prototype.getXAxis=function(e,i,n,a,r,o,s){var c=this.owner,d=c.config,l={isCategory:c.isCategorized(),withOuterTick:r,tickMultiline:d.axis_x_tick_multiline,tickWidth:d.axis_x_tick_width,tickTextRotate:s?0:d.axis_x_tick_rotate,withoutTransition:o},u=t(c.d3,l).scale(e).orient(i);return c.isTimeSeries()&&a&&"function"!=typeof a&&(a=a.map(function(t){return c.parseDate(t)})),u.tickFormat(n).tickValues(a),c.isCategorized()&&(u.tickCentered(d.axis_x_tick_centered),x(d.axis_x_tick_culling)&&(d.axis_x_tick_culling=!1)),u},e.prototype.updateXAxisTickValues=function(t,e){var i,n=this.owner,a=n.config;return(a.axis_x_tick_fit||a.axis_x_tick_count)&&(i=this.generateTickValues(n.mapTargetsToUniqueXs(t),a.axis_x_tick_count,n.isTimeSeries())),e?e.tickValues(i):(n.xAxis.tickValues(i),n.subXAxis.tickValues(i)),i},e.prototype.getYAxis=function(e,i,n,a,r,o,s){var c=this.owner,d=c.config,l={withOuterTick:r,withoutTransition:o,tickTextRotate:s?0:d.axis_y_tick_rotate},u=t(c.d3,l).scale(e).orient(i).tickFormat(n);return c.isTimeSeriesY()?u.ticks(c.d3.time[d.axis_y_tick_time_value],d.axis_y_tick_time_interval):u.tickValues(a),u},e.prototype.getId=function(t){var e=this.owner.config;return t in e.data_axes?e.data_axes[t]:"y"},e.prototype.getXAxisTickFormat=function(){var t=this.owner,e=t.config,i=t.isTimeSeries()?t.defaultAxisTimeFormat:t.isCategorized()?t.categoryName:function(t){return t<0?t.toFixed(0):t};return e.axis_x_tick_format&&(d(e.axis_x_tick_format)?i=e.axis_x_tick_format:t.isTimeSeries()&&(i=function(i){return i?t.axisTimeFormat(e.axis_x_tick_format)(i):""})),d(i)?function(e){return i.call(t,e)}:i},e.prototype.getTickValues=function(t,e){return t||(e?e.tickValues():void 0)},e.prototype.getXAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_x_tick_values,this.owner.xAxis)},e.prototype.getYAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y_tick_values,this.owner.yAxis)},e.prototype.getY2AxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y2_tick_values,this.owner.y2Axis)},e.prototype.getLabelOptionByAxisId=function(t){var e,i=this.owner.config;return"y"===t?e=i.axis_y_label:"y2"===t?e=i.axis_y2_label:"x"===t&&(e=i.axis_x_label),e},e.prototype.getLabelText=function(t){var e=this.getLabelOptionByAxisId(t);return u(e)?e:e?e.text:null},e.prototype.setLabelText=function(t,e){var i=this.owner.config,n=this.getLabelOptionByAxisId(t);u(n)?"y"===t?i.axis_y_label=e:"y2"===t?i.axis_y2_label=e:"x"===t&&(i.axis_x_label=e):n&&(n.text=e)},e.prototype.getLabelPosition=function(t,e){var i=this.getLabelOptionByAxisId(t),n=i&&"object"===(void 0===i?"undefined":s(i))&&i.position?i.position:e;return{isInner:n.indexOf("inner")>=0,isOuter:n.indexOf("outer")>=0,isLeft:n.indexOf("left")>=0,isCenter:n.indexOf("center")>=0,isRight:n.indexOf("right")>=0,isTop:n.indexOf("top")>=0,isMiddle:n.indexOf("middle")>=0,isBottom:n.indexOf("bottom")>=0}},e.prototype.getXAxisLabelPosition=function(){return this.getLabelPosition("x",this.owner.config.axis_rotated?"inner-top":"inner-right")},e.prototype.getYAxisLabelPosition=function(){return this.getLabelPosition("y",this.owner.config.axis_rotated?"inner-right":"inner-top")},e.prototype.getY2AxisLabelPosition=function(){return this.getLabelPosition("y2",this.owner.config.axis_rotated?"inner-right":"inner-top")},e.prototype.getLabelPositionById=function(t){return"y2"===t?this.getY2AxisLabelPosition():"y"===t?this.getYAxisLabelPosition():this.getXAxisLabelPosition()},e.prototype.textForXAxisLabel=function(){return this.getLabelText("x")},e.prototype.textForYAxisLabel=function(){return this.getLabelText("y")},e.prototype.textForY2AxisLabel=function(){return this.getLabelText("y2")},e.prototype.xForAxisLabel=function(t,e){var i=this.owner;return t?e.isLeft?0:e.isCenter?i.width/2:i.width:e.isBottom?-i.height:e.isMiddle?-i.height/2:0},e.prototype.dxForAxisLabel=function(t,e){return t?e.isLeft?"0.5em":e.isRight?"-0.5em":"0":e.isTop?"-0.5em":e.isBottom?"0.5em":"0"},e.prototype.textAnchorForAxisLabel=function(t,e){return t?e.isLeft?"start":e.isCenter?"middle":"end":e.isBottom?"start":e.isMiddle?"middle":"end"},e.prototype.xForXAxisLabel=function(){return this.xForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},e.prototype.xForYAxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},e.prototype.xForY2AxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},e.prototype.dxForXAxisLabel=function(){return this.dxForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},e.prototype.dxForYAxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},e.prototype.dxForY2AxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},e.prototype.dyForXAxisLabel=function(){var t=this.owner.config,e=this.getXAxisLabelPosition();return t.axis_rotated?e.isInner?"1.2em":-25-this.getMaxTickWidth("x"):e.isInner?"-0.5em":t.axis_x_height?t.axis_x_height-10:"3em"},e.prototype.dyForYAxisLabel=function(){var t=this.owner,e=this.getYAxisLabelPosition();return t.config.axis_rotated?e.isInner?"-0.5em":"3em":e.isInner?"1.2em":-10-(t.config.axis_y_inner?0:this.getMaxTickWidth("y")+10)},e.prototype.dyForY2AxisLabel=function(){var t=this.owner,e=this.getY2AxisLabelPosition();return t.config.axis_rotated?e.isInner?"1.2em":"-2.2em":e.isInner?"-0.5em":15+(t.config.axis_y2_inner?0:this.getMaxTickWidth("y2")+15)},e.prototype.textAnchorForXAxisLabel=function(){var t=this.owner;return this.textAnchorForAxisLabel(!t.config.axis_rotated,this.getXAxisLabelPosition())},e.prototype.textAnchorForYAxisLabel=function(){var t=this.owner;return this.textAnchorForAxisLabel(t.config.axis_rotated,this.getYAxisLabelPosition())},e.prototype.textAnchorForY2AxisLabel=function(){var t=this.owner;return this.textAnchorForAxisLabel(t.config.axis_rotated,this.getY2AxisLabelPosition())},e.prototype.getMaxTickWidth=function(t,e){var i,n,a,r,o=this.owner,s=o.config,c=0;return e&&o.currentMaxTickWidths[t]?o.currentMaxTickWidths[t]:(o.svg&&(i=o.filterTargetsToShow(o.data.targets),"y"===t?(n=o.y.copy().domain(o.getYDomain(i,"y")),a=this.getYAxis(n,o.yOrient,s.axis_y_tick_format,o.yAxisTickValues,!1,!0,!0)):"y2"===t?(n=o.y2.copy().domain(o.getYDomain(i,"y2")),a=this.getYAxis(n,o.y2Orient,s.axis_y2_tick_format,o.y2AxisTickValues,!1,!0,!0)):(n=o.x.copy().domain(o.getXDomain(i)),a=this.getXAxis(n,o.xOrient,o.xAxisTickFormat,o.xAxisTickValues,!1,!0,!0),this.updateXAxisTickValues(i,a)),(r=o.d3.select("body").append("div").classed("c3",!0)).append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0).append("g").call(a).each(function(){o.d3.select(this).selectAll("text").each(function(){var t=this.getBoundingClientRect();c<t.width&&(c=t.width)}),r.remove()})),o.currentMaxTickWidths[t]=c<=0?o.currentMaxTickWidths[t]:c,o.currentMaxTickWidths[t])},e.prototype.updateLabels=function(t){var e=this.owner,i=e.main.select("."+o.axisX+" ."+o.axisXLabel),n=e.main.select("."+o.axisY+" ."+o.axisYLabel),a=e.main.select("."+o.axisY2+" ."+o.axisY2Label);(t?i.transition():i).attr("x",this.xForXAxisLabel.bind(this)).attr("dx",this.dxForXAxisLabel.bind(this)).attr("dy",this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)),(t?n.transition():n).attr("x",this.xForYAxisLabel.bind(this)).attr("dx",this.dxForYAxisLabel.bind(this)).attr("dy",this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)),(t?a.transition():a).attr("x",this.xForY2AxisLabel.bind(this)).attr("dx",this.dxForY2AxisLabel.bind(this)).attr("dy",this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this))},e.prototype.getPadding=function(t,e,i,n){var a="number"==typeof t?t:t[e];return c(a)?"ratio"===t.unit?t[e]*n:this.convertPixelsToAxisPadding(a,n):i},e.prototype.convertPixelsToAxisPadding=function(t,e){var i=this.owner;return e*(t/(i.config.axis_rotated?i.width:i.height))},e.prototype.generateTickValues=function(t,e,i){var n,a,r,o,s,c,l,u=t;if(e)if(1===(n=d(e)?e():e))u=[t[0]];else if(2===n)u=[t[0],t[t.length-1]];else if(n>2){for(o=n-2,a=t[0],s=((r=t[t.length-1])-a)/(o+1),u=[a],c=0;c<o;c++)l=+a+s*(c+1),u.push(i?new Date(l):l);u.push(r)}return i||(u=u.sort(function(t,e){return t-e})),u},e.prototype.generateTransitions=function(t){var e=this.owner.axes;return{axisX:t?e.x.transition().duration(t):e.x,axisY:t?e.y.transition().duration(t):e.y,axisY2:t?e.y2.transition().duration(t):e.y2,axisSubX:t?e.subx.transition().duration(t):e.subx}},e.prototype.redraw=function(t,e){var i=this.owner;i.axes.x.style("opacity",e?0:1),i.axes.y.style("opacity",e?0:1),i.axes.y2.style("opacity",e?0:1),i.axes.subx.style("opacity",e?0:1),t.axisX.call(i.xAxis),t.axisY.call(i.yAxis),t.axisY2.call(i.y2Axis),t.axisSubX.call(i.subXAxis)};var b,A,T={version:"0.4.16"};return T.generate=function(t){return new n(t)},T.chart={fn:n.prototype,internal:{fn:a.prototype,axis:{fn:e.prototype}}},b=T.chart.fn,A=T.chart.internal.fn,T.chart.internal.axis.fn,A.beforeInit=function(){},A.afterInit=function(){},A.init=function(){var t=this,e=t.config;if(t.initParams(),e.data_url)t.convertUrlToData(e.data_url,e.data_mimeType,e.data_headers,e.data_keys,t.initWithData);else if(e.data_json)t.initWithData(t.convertJsonToData(e.data_json,e.data_keys));else if(e.data_rows)t.initWithData(t.convertRowsToData(e.data_rows));else{if(!e.data_columns)throw Error("url or json or rows or columns is required.");t.initWithData(t.convertColumnsToData(e.data_columns))}},A.initParams=function(){var t=this,e=t.d3,i=t.config;t.clipId="c3-"+ +new Date+"-clip",t.clipIdForXAxis=t.clipId+"-xaxis",t.clipIdForYAxis=t.clipId+"-yaxis",t.clipIdForGrid=t.clipId+"-grid",t.clipIdForSubchart=t.clipId+"-subchart",t.clipPath=t.getClipPath(t.clipId),t.clipPathForXAxis=t.getClipPath(t.clipIdForXAxis),t.clipPathForYAxis=t.getClipPath(t.clipIdForYAxis),t.clipPathForGrid=t.getClipPath(t.clipIdForGrid),t.clipPathForSubchart=t.getClipPath(t.clipIdForSubchart),t.dragStart=null,t.dragging=!1,t.flowing=!1,t.cancelClick=!1,t.mouseover=!1,t.transiting=!1,t.color=t.generateColor(),t.levelColor=t.generateLevelColor(),t.dataTimeFormat=i.data_xLocaltime?e.time.format:e.time.format.utc,t.axisTimeFormat=i.axis_x_localtime?e.time.format:e.time.format.utc,t.defaultAxisTimeFormat=t.axisTimeFormat.multi([[".%L",function(t){return t.getMilliseconds()}],[":%S",function(t){return t.getSeconds()}],["%I:%M",function(t){return t.getMinutes()}],["%I %p",function(t){return t.getHours()}],["%-m/%-d",function(t){return t.getDay()&&1!==t.getDate()}],["%-m/%-d",function(t){return 1!==t.getDate()}],["%-m/%-d",function(t){return t.getMonth()}],["%Y/%-m/%-d",function(){return!0}]]),t.hiddenTargetIds=[],t.hiddenLegendIds=[],t.focusedTargetIds=[],t.defocusedTargetIds=[],t.xOrient=i.axis_rotated?"left":"bottom",t.yOrient=i.axis_rotated?i.axis_y_inner?"top":"bottom":i.axis_y_inner?"right":"left",t.y2Orient=i.axis_rotated?i.axis_y2_inner?"bottom":"top":i.axis_y2_inner?"left":"right",t.subXOrient=i.axis_rotated?"left":"bottom",t.isLegendRight="right"===i.legend_position,t.isLegendInset="inset"===i.legend_position,t.isLegendTop="top-left"===i.legend_inset_anchor||"top-right"===i.legend_inset_anchor,t.isLegendLeft="top-left"===i.legend_inset_anchor||"bottom-left"===i.legend_inset_anchor,t.legendStep=0,t.legendItemWidth=0,t.legendItemHeight=0,t.currentMaxTickWidths={x:0,y:0,y2:0},t.rotated_padding_left=30,t.rotated_padding_right=i.axis_rotated&&!i.axis_x_show?0:30,t.rotated_padding_top=5,t.withoutFadeIn={},t.intervalForObserveInserted=void 0,t.axes.subx=e.selectAll([])},A.initChartElements=function(){this.initBar&&this.initBar(),this.initLine&&this.initLine(),this.initArc&&this.initArc(),this.initGauge&&this.initGauge(),this.initText&&this.initText()},A.initWithData=function(t){var i,n,a=this,r=a.d3,s=a.config,c=!0;a.axis=new e(a),a.initPie&&a.initPie(),a.initBrush&&a.initBrush(),a.initZoom&&a.initZoom(),s.bindto?"function"==typeof s.bindto.node?a.selectChart=s.bindto:a.selectChart=r.select(s.bindto):a.selectChart=r.selectAll([]),a.selectChart.empty()&&(a.selectChart=r.select(document.createElement("div")).style("opacity",0),a.observeInserted(a.selectChart),c=!1),a.selectChart.html("").classed("c3",!0),a.data.xs={},a.data.targets=a.convertDataToTargets(t),s.data_filter&&(a.data.targets=a.data.targets.filter(s.data_filter)),s.data_hide&&a.addHiddenTargetIds(!0===s.data_hide?a.mapToIds(a.data.targets):s.data_hide),s.legend_hide&&a.addHiddenLegendIds(!0===s.legend_hide?a.mapToIds(a.data.targets):s.legend_hide),a.hasType("gauge")&&(s.legend_show=!1),a.updateSizes(),a.updateScales(),a.x.domain(r.extent(a.getXDomain(a.data.targets))),a.y.domain(a.getYDomain(a.data.targets,"y")),a.y2.domain(a.getYDomain(a.data.targets,"y2")),a.subX.domain(a.x.domain()),a.subY.domain(a.y.domain()),a.subY2.domain(a.y2.domain()),a.orgXDomain=a.x.domain(),a.brush&&a.brush.scale(a.subX),s.zoom_enabled&&a.zoom.scale(a.x),a.svg=a.selectChart.append("svg").style("overflow","hidden").on("mouseenter",function(){return s.onmouseover.call(a)}).on("mouseleave",function(){return s.onmouseout.call(a)}),a.config.svg_classname&&a.svg.attr("class",a.config.svg_classname),i=a.svg.append("defs"),a.clipChart=a.appendClip(i,a.clipId),a.clipXAxis=a.appendClip(i,a.clipIdForXAxis),a.clipYAxis=a.appendClip(i,a.clipIdForYAxis),a.clipGrid=a.appendClip(i,a.clipIdForGrid),a.clipSubchart=a.appendClip(i,a.clipIdForSubchart),a.updateSvgSize(),n=a.main=a.svg.append("g").attr("transform",a.getTranslate("main")),a.initSubchart&&a.initSubchart(),a.initTooltip&&a.initTooltip(),a.initLegend&&a.initLegend(),a.initTitle&&a.initTitle(),n.append("text").attr("class",o.text+" "+o.empty).attr("text-anchor","middle").attr("dominant-baseline","middle"),a.initRegion(),a.initGrid(),n.append("g").attr("clip-path",a.clipPath).attr("class",o.chart),s.grid_lines_front&&a.initGridLines(),a.initEventRect(),a.initChartElements(),n.insert("rect",s.zoom_privileged?null:"g."+o.regions).attr("class",o.zoomRect).attr("width",a.width).attr("height",a.height).style("opacity",0).on("dblclick.zoom",null),s.axis_x_extent&&a.brush.extent(a.getDefaultExtent()),a.axis.init(),a.updateTargets(a.data.targets),c&&(a.updateDimension(),a.config.oninit.call(a),a.redraw({withTransition:!1,withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransitionForAxis:!1})),a.bindResize(),a.api.element=a.selectChart.node()},A.smoothLines=function(t,e){var i=this;"grid"===e&&t.each(function(){var t=i.d3.select(this),e=t.attr("x1"),n=t.attr("x2"),a=t.attr("y1"),r=t.attr("y2");t.attr({x1:Math.ceil(e),x2:Math.ceil(n),y1:Math.ceil(a),y2:Math.ceil(r)})})},A.updateSizes=function(){var t=this,e=t.config,i=t.legend?t.getLegendHeight():0,n=t.legend?t.getLegendWidth():0,a=t.isLegendRight||t.isLegendInset?0:i,r=t.hasArcType(),o=e.axis_rotated||r?0:t.getHorizontalAxisHeight("x"),s=e.subchart_show&&!r?e.subchart_size_height+o:0;t.currentWidth=t.getCurrentWidth(),t.currentHeight=t.getCurrentHeight(),t.margin=e.axis_rotated?{top:t.getHorizontalAxisHeight("y2")+t.getCurrentPaddingTop(),right:r?0:t.getCurrentPaddingRight(),bottom:t.getHorizontalAxisHeight("y")+a+t.getCurrentPaddingBottom(),left:s+(r?0:t.getCurrentPaddingLeft())}:{top:4+t.getCurrentPaddingTop(),right:r?0:t.getCurrentPaddingRight(),bottom:o+s+a+t.getCurrentPaddingBottom(),left:r?0:t.getCurrentPaddingLeft()},t.margin2=e.axis_rotated?{top:t.margin.top,right:NaN,bottom:20+a,left:t.rotated_padding_left}:{top:t.currentHeight-s-a,right:NaN,bottom:o+a,left:t.margin.left},t.margin3={top:0,right:NaN,bottom:0,left:0},t.updateSizeForLegend&&t.updateSizeForLegend(i,n),t.width=t.currentWidth-t.margin.left-t.margin.right,t.height=t.currentHeight-t.margin.top-t.margin.bottom,t.width<0&&(t.width=0),t.height<0&&(t.height=0),t.width2=e.axis_rotated?t.margin.left-t.rotated_padding_left-t.rotated_padding_right:t.width,t.height2=e.axis_rotated?t.height:t.currentHeight-t.margin2.top-t.margin2.bottom,t.width2<0&&(t.width2=0),t.height2<0&&(t.height2=0),t.arcWidth=t.width-(t.isLegendRight?n+10:0),t.arcHeight=t.height-(t.isLegendRight?0:10),t.hasType("gauge")&&!e.gauge_fullCircle&&(t.arcHeight+=t.height-t.getGaugeLabelHeight()),t.updateRadius&&t.updateRadius(),t.isLegendRight&&r&&(t.margin3.left=t.arcWidth/2+1.1*t.radiusExpanded)},A.updateTargets=function(t){var e=this;e.updateTargetsForText(t),e.updateTargetsForBar(t),e.updateTargetsForLine(t),e.hasArcType()&&e.updateTargetsForArc&&e.updateTargetsForArc(t),e.updateTargetsForSubchart&&e.updateTargetsForSubchart(t),e.showTargets()},A.showTargets=function(){var t=this;t.svg.selectAll("."+o.target).filter(function(e){return t.isTargetToShow(e.id)}).transition().duration(t.config.transition_duration).style("opacity",1)},A.redraw=function(t,e){var i,n,a,r,s,c,d,l,u,h,g,p,f,_,x,y,S,w,v,b,A,T,P,L,C,V,G,E,I,O=this,R=O.main,D=O.d3,F=O.config,X=O.getShapeIndices(O.isAreaType),k=O.getShapeIndices(O.isBarType),M=O.getShapeIndices(O.isLineType),H=O.hasArcType(),z=O.filterTargetsToShow(O.data.targets),B=O.xv.bind(O);if(t=t||{},i=m(t,"withY",!0),n=m(t,"withSubchart",!0),a=m(t,"withTransition",!0),c=m(t,"withTransform",!1),d=m(t,"withUpdateXDomain",!1),l=m(t,"withUpdateOrgXDomain",!1),u=m(t,"withTrimXDomain",!0),f=m(t,"withUpdateXAxis",d),h=m(t,"withLegend",!1),g=m(t,"withEventRect",!0),p=m(t,"withDimension",!0),r=m(t,"withTransitionForExit",a),s=m(t,"withTransitionForAxis",a),v=a?F.transition_duration:0,b=r?v:0,A=s?v:0,e=e||O.axis.generateTransitions(A),h&&F.legend_show?O.updateLegend(O.mapToIds(O.data.targets),t,e):p&&O.updateDimension(!0),O.isCategorized()&&0===z.length&&O.x.domain([0,O.axes.x.selectAll(".tick").size()]),z.length?(O.updateXDomain(z,d,l,u),F.axis_x_tick_values||(L=O.axis.updateXAxisTickValues(z))):(O.xAxis.tickValues([]),O.subXAxis.tickValues([])),F.zoom_rescale&&!t.flow&&(G=O.x.orgDomain()),O.y.domain(O.getYDomain(z,"y",G)),O.y2.domain(O.getYDomain(z,"y2",G)),!F.axis_y_tick_values&&F.axis_y_tick_count&&O.yAxis.tickValues(O.axis.generateTickValues(O.y.domain(),F.axis_y_tick_count)),!F.axis_y2_tick_values&&F.axis_y2_tick_count&&O.y2Axis.tickValues(O.axis.generateTickValues(O.y2.domain(),F.axis_y2_tick_count)),O.axis.redraw(e,H),O.axis.updateLabels(a),(d||f)&&z.length)if(F.axis_x_tick_culling&&L){for(C=1;C<L.length;C++)if(L.length/C<F.axis_x_tick_culling_max){V=C;break}O.svg.selectAll("."+o.axisX+" .tick text").each(function(t){var e=L.indexOf(t);e>=0&&D.select(this).style("display",e%V?"none":"block")})}else O.svg.selectAll("."+o.axisX+" .tick text").style("display","block");_=O.generateDrawArea?O.generateDrawArea(X,!1):void 0,x=O.generateDrawBar?O.generateDrawBar(k):void 0,y=O.generateDrawLine?O.generateDrawLine(M,!1):void 0,S=O.generateXYForText(X,k,M,!0),w=O.generateXYForText(X,k,M,!1),i&&(O.subY.domain(O.getYDomain(z,"y")),O.subY2.domain(O.getYDomain(z,"y2"))),O.updateXgridFocus(),R.select("text."+o.text+"."+o.empty).attr("x",O.width/2).attr("y",O.height/2).text(F.data_empty_label_text).transition().style("opacity",z.length?0:1),O.updateGrid(v),O.updateRegion(v),O.updateBar(b),O.updateLine(b),O.updateArea(b),O.updateCircle(),O.hasDataLabel()&&O.updateText(b),O.redrawTitle&&O.redrawTitle(),O.redrawArc&&O.redrawArc(v,b,c),O.redrawSubchart&&O.redrawSubchart(n,e,v,b,X,k,M),R.selectAll("."+o.selectedCircles).filter(O.isBarType.bind(O)).selectAll("circle").remove(),F.interaction_enabled&&!t.flow&&g&&(O.redrawEventRect(),O.updateZoom&&O.updateZoom()),O.updateCircleY(),E=(O.config.axis_rotated?O.circleY:O.circleX).bind(O),I=(O.config.axis_rotated?O.circleX:O.circleY).bind(O),t.flow&&(P=O.generateFlow({targets:z,flow:t.flow,duration:t.flow.duration,drawBar:x,drawLine:y,drawArea:_,cx:E,cy:I,xv:B,xForText:S,yForText:w})),(v||P)&&O.isTabVisible()?D.transition().duration(v).each(function(){var e=[];[O.redrawBar(x,!0),O.redrawLine(y,!0),O.redrawArea(_,!0),O.redrawCircle(E,I,!0),O.redrawText(S,w,t.flow,!0),O.redrawRegion(!0),O.redrawGrid(!0)].forEach(function(t){t.forEach(function(t){e.push(t)})}),T=O.generateWait(),e.forEach(function(t){T.add(t)})}).call(T,function(){P&&P(),F.onrendered&&F.onrendered.call(O)}):(O.redrawBar(x),O.redrawLine(y),O.redrawArea(_),O.redrawCircle(E,I),O.redrawText(S,w,t.flow),O.redrawRegion(),O.redrawGrid(),F.onrendered&&F.onrendered.call(O)),O.mapToIds(O.data.targets).forEach(function(t){O.withoutFadeIn[t]=!0})},A.updateAndRedraw=function(t){var e,i=this,n=i.config;(t=t||{}).withTransition=m(t,"withTransition",!0),t.withTransform=m(t,"withTransform",!1),t.withLegend=m(t,"withLegend",!1),t.withUpdateXDomain=!0,t.withUpdateOrgXDomain=!0,t.withTransitionForExit=!1,t.withTransitionForTransform=m(t,"withTransitionForTransform",t.withTransition),i.updateSizes(),t.withLegend&&n.legend_show||(e=i.axis.generateTransitions(t.withTransitionForAxis?n.transition_duration:0),i.updateScales(),i.updateSvgSize(),i.transformAll(t.withTransitionForTransform,e)),i.redraw(t,e)},A.redrawWithoutRescale=function(){this.redraw({withY:!1,withSubchart:!1,withEventRect:!1,withTransitionForAxis:!1})},A.isTimeSeries=function(){return"timeseries"===this.config.axis_x_type},A.isCategorized=function(){return this.config.axis_x_type.indexOf("categor")>=0},A.isCustomX=function(){var t=this,e=t.config;return!t.isTimeSeries()&&(e.data_x||y(e.data_xs))},A.isTimeSeriesY=function(){return"timeseries"===this.config.axis_y_type},A.getTranslate=function(t){var e,i,n=this,a=n.config;return"main"===t?(e=f(n.margin.left),i=f(n.margin.top)):"context"===t?(e=f(n.margin2.left),i=f(n.margin2.top)):"legend"===t?(e=n.margin3.left,i=n.margin3.top):"x"===t?(e=0,i=a.axis_rotated?0:n.height):"y"===t?(e=0,i=a.axis_rotated?n.height:0):"y2"===t?(e=a.axis_rotated?0:n.width,i=a.axis_rotated?1:0):"subx"===t?(e=0,i=a.axis_rotated?0:n.height2):"arc"===t&&(e=n.arcWidth/2,i=n.arcHeight/2),"translate("+e+","+i+")"},A.initialOpacity=function(t){return null!==t.value&&this.withoutFadeIn[t.id]?1:0},A.initialOpacityForCircle=function(t){return null!==t.value&&this.withoutFadeIn[t.id]?this.opacityForCircle(t):0},A.opacityForCircle=function(t){var e=(d(this.config.point_show)?this.config.point_show(t):this.config.point_show)?1:0;return c(t.value)?this.isScatterType(t)?.5:e:0},A.opacityForText=function(){return this.hasDataLabel()?1:0},A.xx=function(t){return t?this.x(t.x):null},A.xv=function(t){var e=this,i=t.value;return e.isTimeSeries()?i=e.parseDate(t.value):e.isCategorized()&&"string"==typeof t.value&&(i=e.config.axis_x_categories.indexOf(t.value)),Math.ceil(e.x(i))},A.yv=function(t){var e=this,i=t.axis&&"y2"===t.axis?e.y2:e.y;return Math.ceil(i(t.value))},A.subxx=function(t){return t?this.subX(t.x):null},A.transformMain=function(t,e){var i,n,a,r=this;e&&e.axisX?i=e.axisX:(i=r.main.select("."+o.axisX),t&&(i=i.transition())),e&&e.axisY?n=e.axisY:(n=r.main.select("."+o.axisY),t&&(n=n.transition())),e&&e.axisY2?a=e.axisY2:(a=r.main.select("."+o.axisY2),t&&(a=a.transition())),(t?r.main.transition():r.main).attr("transform",r.getTranslate("main")),i.attr("transform",r.getTranslate("x")),n.attr("transform",r.getTranslate("y")),a.attr("transform",r.getTranslate("y2")),r.main.select("."+o.chartArcs).attr("transform",r.getTranslate("arc"))},A.transformAll=function(t,e){var i=this;i.transformMain(t,e),i.config.subchart_show&&i.transformContext(t,e),i.legend&&i.transformLegend(t)},A.updateSvgSize=function(){var t=this,e=t.svg.select(".c3-brush .background");t.svg.attr("width",t.currentWidth).attr("height",t.currentHeight),t.svg.selectAll(["#"+t.clipId,"#"+t.clipIdForGrid]).select("rect").attr("width",t.width).attr("height",t.height),t.svg.select("#"+t.clipIdForXAxis).select("rect").attr("x",t.getXAxisClipX.bind(t)).attr("y",t.getXAxisClipY.bind(t)).attr("width",t.getXAxisClipWidth.bind(t)).attr("height",t.getXAxisClipHeight.bind(t)),t.svg.select("#"+t.clipIdForYAxis).select("rect").attr("x",t.getYAxisClipX.bind(t)).attr("y",t.getYAxisClipY.bind(t)).attr("width",t.getYAxisClipWidth.bind(t)).attr("height",t.getYAxisClipHeight.bind(t)),t.svg.select("#"+t.clipIdForSubchart).select("rect").attr("width",t.width).attr("height",e.size()?e.attr("height"):0),t.svg.select("."+o.zoomRect).attr("width",t.width).attr("height",t.height),t.selectChart.style("max-height",t.currentHeight+"px")},A.updateDimension=function(t){var e=this;t||(e.config.axis_rotated?(e.axes.x.call(e.xAxis),e.axes.subx.call(e.subXAxis)):(e.axes.y.call(e.yAxis),e.axes.y2.call(e.y2Axis))),e.updateSizes(),e.updateScales(),e.updateSvgSize(),e.transformAll(!1)},A.observeInserted=function(t){var e,i=this;"undefined"!=typeof MutationObserver?(e=new MutationObserver(function(n){n.forEach(function(n){"childList"===n.type&&n.previousSibling&&(e.disconnect(),i.intervalForObserveInserted=window.setInterval(function(){t.node().parentNode&&(window.clearInterval(i.intervalForObserveInserted),i.updateDimension(),i.brush&&i.brush.update(),i.config.oninit.call(i),i.redraw({withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransition:!1,withTransitionForTransform:!1,withLegend:!0}),t.transition().style("opacity",1))},10))})})).observe(t.node(),{attributes:!0,childList:!0,characterData:!0}):window.console.error("MutationObserver not defined.")},A.bindResize=function(){var t=this,e=t.config;if(t.resizeFunction=t.generateResize(),t.resizeFunction.add(function(){e.onresize.call(t)}),e.resize_auto&&t.resizeFunction.add(function(){void 0!==t.resizeTimeout&&window.clearTimeout(t.resizeTimeout),t.resizeTimeout=window.setTimeout(function(){delete t.resizeTimeout,t.api.flush()},100)}),t.resizeFunction.add(function(){e.onresized.call(t)}),window.attachEvent)window.attachEvent("onresize",t.resizeFunction);else if(window.addEventListener)window.addEventListener("resize",t.resizeFunction,!1);else{var i=window.onresize;i?i.add&&i.remove||(i=t.generateResize()).add(window.onresize):i=t.generateResize(),i.add(t.resizeFunction),window.onresize=i}},A.generateResize=function(){function t(){e.forEach(function(t){t()})}var e=[];return t.add=function(t){e.push(t)},t.remove=function(t){for(var i=0;i<e.length;i++)if(e[i]===t){e.splice(i,1);break}},t},A.endall=function(t,e){var i=0;t.each(function(){++i}).each("end",function(){--i||e.apply(this,arguments)})},A.generateWait=function(){var t=[],e=function(e,i){var n=setInterval(function(){var e=0;t.forEach(function(t){if(t.empty())e+=1;else try{t.transition()}catch(t){e+=1}}),e===t.length&&(clearInterval(n),i&&i())},10)};return e.add=function(e){t.push(e)},e},A.parseDate=function(t){var e,i=this;return t instanceof Date?e=t:"string"==typeof t?e=i.dataTimeFormat(i.config.data_xFormat).parse(t):"object"===(void 0===t?"undefined":s(t))?e=new Date(+t):"number"!=typeof t||isNaN(t)||(e=new Date(+t)),e&&!isNaN(+e)||window.console.error("Failed to parse x '"+t+"' to Date object"),e},A.isTabVisible=function(){var t;return void 0!==document.hidden?t="hidden":void 0!==document.mozHidden?t="mozHidden":void 0!==document.msHidden?t="msHidden":void 0!==document.webkitHidden&&(t="webkitHidden"),!document[t]},A.isValue=c,A.isFunction=d,A.isString=u,A.isUndefined=h,A.isDefined=g,A.ceil10=p,A.asHalfPixel=f,A.diffDomain=_,A.isEmpty=x,A.notEmpty=y,A.notEmpty=y,A.getOption=m,A.hasValue=S,A.sanitise=w,A.getPathBox=v,A.CLASS=o,Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,n=function(){},a=function(){return i.apply(this instanceof n?this:t,e.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,a.prototype=new n,a}),"SVGPathSeg"in window||(window.SVGPathSeg=function(t,e,i){this.pathSegType=t,this.pathSegTypeAsLetter=e,this._owningPathSegList=i},window.SVGPathSeg.prototype.classname="SVGPathSeg",window.SVGPathSeg.PATHSEG_UNKNOWN=0,window.SVGPathSeg.PATHSEG_CLOSEPATH=1,window.SVGPathSeg.PATHSEG_MOVETO_ABS=2,window.SVGPathSeg.PATHSEG_MOVETO_REL=3,window.SVGPathSeg.PATHSEG_LINETO_ABS=4,window.SVGPathSeg.PATHSEG_LINETO_REL=5,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS=6,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL=7,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS=8,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL=9,window.SVGPathSeg.PATHSEG_ARC_ABS=10,window.SVGPathSeg.PATHSEG_ARC_REL=11,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS=12,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL=13,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS=14,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL=15,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS=16,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL=17,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS=18,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL=19,window.SVGPathSeg.prototype._segmentChanged=function(){this._owningPathSegList&&this._owningPathSegList.segmentChanged(this)},window.SVGPathSegClosePath=function(t){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CLOSEPATH,"z",t)},window.SVGPathSegClosePath.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegClosePath.prototype.toString=function(){return"[object SVGPathSegClosePath]"},window.SVGPathSegClosePath.prototype._asPathString=function(){return this.pathSegTypeAsLetter},window.SVGPathSegClosePath.prototype.clone=function(){return new window.SVGPathSegClosePath(void 0)},window.SVGPathSegMovetoAbs=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_ABS,"M",t),this._x=e,this._y=i},window.SVGPathSegMovetoAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegMovetoAbs.prototype.toString=function(){return"[object SVGPathSegMovetoAbs]"},window.SVGPathSegMovetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegMovetoAbs.prototype.clone=function(){return new window.SVGPathSegMovetoAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegMovetoRel=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_REL,"m",t),this._x=e,this._y=i},window.SVGPathSegMovetoRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegMovetoRel.prototype.toString=function(){return"[object SVGPathSegMovetoRel]"},window.SVGPathSegMovetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegMovetoRel.prototype.clone=function(){return new window.SVGPathSegMovetoRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoAbs=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_ABS,"L",t),this._x=e,this._y=i},window.SVGPathSegLinetoAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoAbs.prototype.toString=function(){return"[object SVGPathSegLinetoAbs]"},window.SVGPathSegLinetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegLinetoAbs.prototype.clone=function(){return new window.SVGPathSegLinetoAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoRel=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_REL,"l",t),this._x=e,this._y=i},window.SVGPathSegLinetoRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoRel.prototype.toString=function(){return"[object SVGPathSegLinetoRel]"},window.SVGPathSegLinetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegLinetoRel.prototype.clone=function(){return new window.SVGPathSegLinetoRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicAbs=function(t,e,i,n,a,r,o){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,"C",t),this._x=e,this._y=i,this._x1=n,this._y1=a,this._x2=r,this._y2=o},window.SVGPathSegCurvetoCubicAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicAbs]"},window.SVGPathSegCurvetoCubicAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicAbs(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicRel=function(t,e,i,n,a,r,o){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,"c",t),this._x=e,this._y=i,this._x1=n,this._y1=a,this._x2=r,this._y2=o},window.SVGPathSegCurvetoCubicRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicRel]"},window.SVGPathSegCurvetoCubicRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicRel(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticAbs=function(t,e,i,n,a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,"Q",t),this._x=e,this._y=i,this._x1=n,this._y1=a},window.SVGPathSegCurvetoQuadraticAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticAbs]"},window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticAbs(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticRel=function(t,e,i,n,a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,"q",t),this._x=e,this._y=i,this._x1=n,this._y1=a},window.SVGPathSegCurvetoQuadraticRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticRel]"},window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticRel(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcAbs=function(t,e,i,n,a,r,o,s){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_ABS,"A",t),this._x=e,this._y=i,this._r1=n,this._r2=a,this._angle=r,this._largeArcFlag=o,this._sweepFlag=s},window.SVGPathSegArcAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcAbs.prototype.toString=function(){return"[object SVGPathSegArcAbs]"},window.SVGPathSegArcAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},window.SVGPathSegArcAbs.prototype.clone=function(){return new window.SVGPathSegArcAbs(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(window.SVGPathSegArcAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcRel=function(t,e,i,n,a,r,o,s){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_REL,"a",t),this._x=e,this._y=i,this._r1=n,this._r2=a,this._angle=r,this._largeArcFlag=o,this._sweepFlag=s},window.SVGPathSegArcRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcRel.prototype.toString=function(){return"[object SVGPathSegArcRel]"},window.SVGPathSegArcRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},window.SVGPathSegArcRel.prototype.clone=function(){return new window.SVGPathSegArcRel(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(window.SVGPathSegArcRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalAbs=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,"H",t),this._x=e},window.SVGPathSegLinetoHorizontalAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalAbs]"},window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},window.SVGPathSegLinetoHorizontalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalAbs(void 0,this._x)},Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalRel=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,"h",t),this._x=e},window.SVGPathSegLinetoHorizontalRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalRel.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalRel]"},window.SVGPathSegLinetoHorizontalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},window.SVGPathSegLinetoHorizontalRel.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalRel(void 0,this._x)},Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalAbs=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,"V",t),this._y=e},window.SVGPathSegLinetoVerticalAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalAbs]"},window.SVGPathSegLinetoVerticalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},window.SVGPathSegLinetoVerticalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalAbs(void 0,this._y)},Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalRel=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,"v",t),this._y=e},window.SVGPathSegLinetoVerticalRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalRel.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalRel]"},window.SVGPathSegLinetoVerticalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},window.SVGPathSegLinetoVerticalRel.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalRel(void 0,this._y)},Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothAbs=function(t,e,i,n,a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,"S",t),this._x=e,this._y=i,this._x2=n,this._y2=a},window.SVGPathSegCurvetoCubicSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothAbs]"},window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothRel=function(t,e,i,n,a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,"s",t),this._x=e,this._y=i,this._x2=n,this._y2=a},window.SVGPathSegCurvetoCubicSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothRel]"},window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothAbs=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,"T",t),this._x=e,this._y=i},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothAbs]"},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothRel=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,"t",t),this._x=e,this._y=i},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothRel]"},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathElement.prototype.createSVGPathSegClosePath=function(){return new window.SVGPathSegClosePath(void 0)},window.SVGPathElement.prototype.createSVGPathSegMovetoAbs=function(t,e){return new window.SVGPathSegMovetoAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegMovetoRel=function(t,e){return new window.SVGPathSegMovetoRel(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegLinetoAbs=function(t,e){return new window.SVGPathSegLinetoAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegLinetoRel=function(t,e){return new window.SVGPathSegLinetoRel(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs=function(t,e,i,n,a,r){return new window.SVGPathSegCurvetoCubicAbs(void 0,t,e,i,n,a,r)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel=function(t,e,i,n,a,r){return new window.SVGPathSegCurvetoCubicRel(void 0,t,e,i,n,a,r)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs=function(t,e,i,n){return new window.SVGPathSegCurvetoQuadraticAbs(void 0,t,e,i,n)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel=function(t,e,i,n){return new window.SVGPathSegCurvetoQuadraticRel(void 0,t,e,i,n)},window.SVGPathElement.prototype.createSVGPathSegArcAbs=function(t,e,i,n,a,r,o){return new window.SVGPathSegArcAbs(void 0,t,e,i,n,a,r,o)},window.SVGPathElement.prototype.createSVGPathSegArcRel=function(t,e,i,n,a,r,o){return new window.SVGPathSegArcRel(void 0,t,e,i,n,a,r,o)},window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs=function(t){return new window.SVGPathSegLinetoHorizontalAbs(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel=function(t){return new window.SVGPathSegLinetoHorizontalRel(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs=function(t){return new window.SVGPathSegLinetoVerticalAbs(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel=function(t){return new window.SVGPathSegLinetoVerticalRel(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs=function(t,e,i,n){return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,t,e,i,n)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel=function(t,e,i,n){return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,t,e,i,n)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs=function(t,e){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel=function(t,e){return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,t,e)},"getPathSegAtLength"in window.SVGPathElement.prototype||(window.SVGPathElement.prototype.getPathSegAtLength=function(t){if(void 0===t||!isFinite(t))throw"Invalid arguments.";var e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttribute("d",this.getAttribute("d"));var i=e.pathSegList.numberOfItems-1;if(i<=0)return 0;do{if(e.pathSegList.removeItem(i),t>e.getTotalLength())break;i--}while(i>0);return i})),"SVGPathSegList"in window||(window.SVGPathSegList=function(t){this._pathElement=t,this._list=this._parsePath(this._pathElement.getAttribute("d")),this._mutationObserverConfig={attributes:!0,attributeFilter:["d"]},this._pathElementMutationObserver=new MutationObserver(this._updateListFromPathMutations.bind(this)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},window.SVGPathSegList.prototype.classname="SVGPathSegList",Object.defineProperty(window.SVGPathSegList.prototype,"numberOfItems",{get:function(){return this._checkPathSynchronizedToList(),this._list.length},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"pathSegList",{get:function(){return this._pathSegList||(this._pathSegList=new window.SVGPathSegList(this)),this._pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"normalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"animatedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"animatedNormalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),window.SVGPathSegList.prototype._checkPathSynchronizedToList=function(){this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())},window.SVGPathSegList.prototype._updateListFromPathMutations=function(t){if(this._pathElement){var e=!1;t.forEach(function(t){"d"==t.attributeName&&(e=!0)}),e&&(this._list=this._parsePath(this._pathElement.getAttribute("d")))}},window.SVGPathSegList.prototype._writeListToPath=function(){this._pathElementMutationObserver.disconnect(),this._pathElement.setAttribute("d",window.SVGPathSegList._pathSegArrayAsString(this._list)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},window.SVGPathSegList.prototype.segmentChanged=function(t){this._writeListToPath()},window.SVGPathSegList.prototype.clear=function(){this._checkPathSynchronizedToList(),this._list.forEach(function(t){t._owningPathSegList=null}),this._list=[],this._writeListToPath()},window.SVGPathSegList.prototype.initialize=function(t){return this._checkPathSynchronizedToList(),this._list=[t],t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList.prototype._checkValidIndex=function(t){if(isNaN(t)||t<0||t>=this.numberOfItems)throw"INDEX_SIZE_ERR"},window.SVGPathSegList.prototype.getItem=function(t){return this._checkPathSynchronizedToList(),this._checkValidIndex(t),this._list[t]},window.SVGPathSegList.prototype.insertItemBefore=function(t,e){return this._checkPathSynchronizedToList(),e>this.numberOfItems&&(e=this.numberOfItems),t._owningPathSegList&&(t=t.clone()),this._list.splice(e,0,t),t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList.prototype.replaceItem=function(t,e){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._checkValidIndex(e),this._list[e]=t,t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList.prototype.removeItem=function(t){this._checkPathSynchronizedToList(),this._checkValidIndex(t);var e=this._list[t];return this._list.splice(t,1),this._writeListToPath(),e},window.SVGPathSegList.prototype.appendItem=function(t){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._list.push(t),t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList._pathSegArrayAsString=function(t){var e="",i=!0;return t.forEach(function(t){i?(i=!1,e+=t._asPathString()):e+=" "+t._asPathString()}),e},window.SVGPathSegList.prototype._parsePath=function(t){if(!t||0==t.length)return[];var e=this,i=function(){this.pathSegList=[]};i.prototype.appendSegment=function(t){this.pathSegList.push(t)};var n=function(t){this._string=t,this._currentIndex=0,this._endIndex=this._string.length,this._previousCommand=window.SVGPathSeg.PATHSEG_UNKNOWN,this._skipOptionalSpaces()};n.prototype._isCurrentSpace=function(){var t=this._string[this._currentIndex];return t<=" "&&(" "==t||"\n"==t||"\t"==t||"\r"==t||"\f"==t)},n.prototype._skipOptionalSpaces=function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex++;return this._currentIndex<this._endIndex},n.prototype._skipOptionalSpacesOrDelimiter=function(){return!(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!=this._string.charAt(this._currentIndex))&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","==this._string.charAt(this._currentIndex)&&(this._currentIndex++,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},n.prototype.hasMoreData=function(){return this._currentIndex<this._endIndex},n.prototype.peekSegmentType=function(){var t=this._string[this._currentIndex];return this._pathSegTypeFromChar(t)},n.prototype._pathSegTypeFromChar=function(t){switch(t){case"Z":case"z":return window.SVGPathSeg.PATHSEG_CLOSEPATH;case"M":return window.SVGPathSeg.PATHSEG_MOVETO_ABS;case"m":return window.SVGPathSeg.PATHSEG_MOVETO_REL;case"L":return window.SVGPathSeg.PATHSEG_LINETO_ABS;case"l":return window.SVGPathSeg.PATHSEG_LINETO_REL;case"C":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;case"c":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;case"Q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;case"q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;case"A":return window.SVGPathSeg.PATHSEG_ARC_ABS;case"a":return window.SVGPathSeg.PATHSEG_ARC_REL;case"H":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;case"h":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;case"V":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;case"v":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;case"S":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;case"s":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;case"T":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;case"t":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;default:return window.SVGPathSeg.PATHSEG_UNKNOWN}},n.prototype._nextCommandHelper=function(t,e){return("+"==t||"-"==t||"."==t||t>="0"&&t<="9")&&e!=window.SVGPathSeg.PATHSEG_CLOSEPATH?e==window.SVGPathSeg.PATHSEG_MOVETO_ABS?window.SVGPathSeg.PATHSEG_LINETO_ABS:e==window.SVGPathSeg.PATHSEG_MOVETO_REL?window.SVGPathSeg.PATHSEG_LINETO_REL:e:window.SVGPathSeg.PATHSEG_UNKNOWN},n.prototype.initialCommandIsMoveTo=function(){if(!this.hasMoreData())return!0;var t=this.peekSegmentType();return t==window.SVGPathSeg.PATHSEG_MOVETO_ABS||t==window.SVGPathSeg.PATHSEG_MOVETO_REL},n.prototype._parseNumber=function(){var t=0,e=0,i=1,n=0,a=1,r=1,o=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:this._currentIndex<this._endIndex&&"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,a=-1),!(this._currentIndex==this._endIndex||(this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")&&"."!=this._string.charAt(this._currentIndex))){for(var s=this._currentIndex;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)this._currentIndex++;if(this._currentIndex!=s)for(var c=this._currentIndex-1,d=1;c>=s;)e+=d*(this._string.charAt(c--)-"0"),d*=10;if(this._currentIndex<this._endIndex&&"."==this._string.charAt(this._currentIndex)){if(++this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return;for(;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)i*=10,n+=(this._string.charAt(this._currentIndex)-"0")/i,this._currentIndex+=1}if(this._currentIndex!=o&&this._currentIndex+1<this._endIndex&&("e"==this._string.charAt(this._currentIndex)||"E"==this._string.charAt(this._currentIndex))&&"x"!=this._string.charAt(this._currentIndex+1)&&"m"!=this._string.charAt(this._currentIndex+1)){if(this._currentIndex++,"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,r=-1),this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return;for(;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)t*=10,t+=this._string.charAt(this._currentIndex)-"0",this._currentIndex++}var l=e+n;if(l*=a,t&&(l*=Math.pow(10,r*t)),o!=this._currentIndex)return this._skipOptionalSpacesOrDelimiter(),l}},n.prototype._parseArcFlag=function(){if(!(this._currentIndex>=this._endIndex)){var t=!1,e=this._string.charAt(this._currentIndex++);if("0"==e)t=!1;else{if("1"!=e)return;t=!0}return this._skipOptionalSpacesOrDelimiter(),t}},n.prototype.parseSegment=function(){var t=this._string[this._currentIndex],i=this._pathSegTypeFromChar(t);if(i==window.SVGPathSeg.PATHSEG_UNKNOWN){if(this._previousCommand==window.SVGPathSeg.PATHSEG_UNKNOWN)return null;if((i=this._nextCommandHelper(t,this._previousCommand))==window.SVGPathSeg.PATHSEG_UNKNOWN)return null}else this._currentIndex++;switch(this._previousCommand=i,i){case window.SVGPathSeg.PATHSEG_MOVETO_REL:return new window.SVGPathSegMovetoRel(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_MOVETO_ABS:return new window.SVGPathSegMovetoAbs(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_REL:return new window.SVGPathSegLinetoRel(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_ABS:return new window.SVGPathSegLinetoAbs(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:return new window.SVGPathSegLinetoHorizontalRel(e,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:return new window.SVGPathSegLinetoHorizontalAbs(e,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:return new window.SVGPathSegLinetoVerticalRel(e,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:return new window.SVGPathSegLinetoVerticalAbs(e,this._parseNumber());case window.SVGPathSeg.PATHSEG_CLOSEPATH:return this._skipOptionalSpaces(),new window.SVGPathSegClosePath(e);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:return n={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicRel(e,n.x,n.y,n.x1,n.y1,n.x2,n.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:return n={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicAbs(e,n.x,n.y,n.x1,n.y1,n.x2,n.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:return n={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicSmoothRel(e,n.x,n.y,n.x2,n.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:return n={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicSmoothAbs(e,n.x,n.y,n.x2,n.y2);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:return n={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoQuadraticRel(e,n.x,n.y,n.x1,n.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:return n={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoQuadraticAbs(e,n.x,n.y,n.x1,n.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:return new window.SVGPathSegCurvetoQuadraticSmoothRel(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:return new window.SVGPathSegCurvetoQuadraticSmoothAbs(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_ARC_REL:return n={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegArcRel(e,n.x,n.y,n.x1,n.y1,n.arcAngle,n.arcLarge,n.arcSweep);case window.SVGPathSeg.PATHSEG_ARC_ABS:var n={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegArcAbs(e,n.x,n.y,n.x1,n.y1,n.arcAngle,n.arcLarge,n.arcSweep);default:throw"Unknown path seg type."}};var a=new i,r=new n(t);if(!r.initialCommandIsMoveTo())return[];for(;r.hasMoreData();){var o=r.parseSegment();if(!o)return[];a.appendSegment(o)}return a.pathSegList}),b.axis=function(){},b.axis.labels=function(t){var e=this.internal;arguments.length&&(Object.keys(t).forEach(function(i){e.axis.setLabelText(i,t[i])}),e.axis.updateLabels())},b.axis.max=function(t){var e=this.internal,i=e.config;if(!arguments.length)return{x:i.axis_x_max,y:i.axis_y_max,y2:i.axis_y2_max};"object"===(void 0===t?"undefined":s(t))?(c(t.x)&&(i.axis_x_max=t.x),c(t.y)&&(i.axis_y_max=t.y),c(t.y2)&&(i.axis_y2_max=t.y2)):i.axis_y_max=i.axis_y2_max=t,e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})},b.axis.min=function(t){var e=this.internal,i=e.config;if(!arguments.length)return{x:i.axis_x_min,y:i.axis_y_min,y2:i.axis_y2_min};"object"===(void 0===t?"undefined":s(t))?(c(t.x)&&(i.axis_x_min=t.x),c(t.y)&&(i.axis_y_min=t.y),c(t.y2)&&(i.axis_y2_min=t.y2)):i.axis_y_min=i.axis_y2_min=t,e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})},b.axis.range=function(t){if(!arguments.length)return{max:this.axis.max(),min:this.axis.min()};void 0!==t.max&&this.axis.max(t.max),void 0!==t.min&&this.axis.min(t.min)},b.category=function(t,e){var i=this.internal,n=i.config;return arguments.length>1&&(n.axis_x_categories[t]=e,i.redraw()),n.axis_x_categories[t]},b.categories=function(t){var e=this.internal,i=e.config;return arguments.length?(i.axis_x_categories=t,e.redraw(),i.axis_x_categories):i.axis_x_categories},b.resize=function(t){var e=this.internal.config;e.size_width=t?t.width:null,e.size_height=t?t.height:null,this.flush()},b.flush=function(){this.internal.updateAndRedraw({withLegend:!0,withTransition:!1,withTransitionForTransform:!1})},b.destroy=function(){var t=this.internal;if(window.clearInterval(t.intervalForObserveInserted),void 0!==t.resizeTimeout&&window.clearTimeout(t.resizeTimeout),window.detachEvent)window.detachEvent("onresize",t.resizeFunction);else if(window.removeEventListener)window.removeEventListener("resize",t.resizeFunction);else{var e=window.onresize;e&&e.add&&e.remove&&e.remove(t.resizeFunction)}return t.selectChart.classed("c3",!1).html(""),Object.keys(t).forEach(function(e){t[e]=null}),null},b.color=function(t){return this.internal.color(t)},b.data=function(t){var e=this.internal.data.targets;return void 0===t?e:e.filter(function(e){return[].concat(t).indexOf(e.id)>=0})},b.data.shown=function(t){return this.internal.filterTargetsToShow(this.data(t))},b.data.values=function(t){var e,i=null;return t&&(i=(e=this.data(t))[0]?e[0].values.map(function(t){return t.value}):null),i},b.data.names=function(t){return this.internal.clearLegendItemTextBoxCache(),this.internal.updateDataAttributes("names",t)},b.data.colors=function(t){return this.internal.updateDataAttributes("colors",t)},b.data.axes=function(t){return this.internal.updateDataAttributes("axes",t)},b.flow=function(t){var e,i,n,a,r,o,s,d=this.internal,l=[],u=d.getMaxDataCount(),h=0,g=0;if(t.json)i=d.convertJsonToData(t.json,t.keys);else if(t.rows)i=d.convertRowsToData(t.rows);else{if(!t.columns)return;i=d.convertColumnsToData(t.columns)}e=d.convertDataToTargets(i,!0),d.data.targets.forEach(function(t){var i,n,a=!1;for(i=0;i<e.length;i++)if(t.id===e[i].id){for(a=!0,t.values[t.values.length-1]&&(g=t.values[t.values.length-1].index+1),h=e[i].values.length,n=0;n<h;n++)e[i].values[n].index=g+n,d.isTimeSeries()||(e[i].values[n].x=g+n);t.values=t.values.concat(e[i].values),e.splice(i,1);break}a||l.push(t.id)}),d.data.targets.forEach(function(t){var e,i;for(e=0;e<l.length;e++)if(t.id===l[e])for(g=t.values[t.values.length-1].index+1,i=0;i<h;i++)t.values.push({id:t.id,index:g+i,x:d.isTimeSeries()?d.getOtherTargetX(g+i):g+i,value:null})}),d.data.targets.length&&e.forEach(function(t){var e,i=[];for(e=d.data.targets[0].values[0].index;e<g;e++)i.push({id:t.id,index:e,x:d.isTimeSeries()?d.getOtherTargetX(e):e,value:null});t.values.forEach(function(t){t.index+=g,d.isTimeSeries()||(t.x+=g)}),t.values=i.concat(t.values)}),d.data.targets=d.data.targets.concat(e),d.getMaxDataCount(),r=(a=d.data.targets[0]).values[0],void 0!==t.to?(h=0,s=d.isTimeSeries()?d.parseDate(t.to):t.to,a.values.forEach(function(t){t.x<s&&h++})):void 0!==t.length&&(h=t.length),u?1===u&&d.isTimeSeries()&&(o=(a.values[a.values.length-1].x-r.x)/2,n=[new Date(+r.x-o),new Date(+r.x+o)],d.updateXDomain(null,!0,!0,!1,n)):(o=d.isTimeSeries()?a.values.length>1?a.values[a.values.length-1].x-r.x:r.x-d.getXDomain(d.data.targets)[0]:1,n=[r.x-o,r.x],d.updateXDomain(null,!0,!0,!1,n)),d.updateTargets(d.data.targets),d.redraw({flow:{index:r.index,length:h,duration:c(t.duration)?t.duration:d.config.transition_duration,done:t.done,orgDataCount:u},withLegend:!0,withTransition:u>1,withTrimXDomain:!1,withUpdateXAxis:!0})},A.generateFlow=function(t){var e=this,i=e.config,n=e.d3;return function(){var a,r,s,c=t.targets,d=t.flow,l=t.drawBar,u=t.drawLine,h=t.drawArea,g=t.cx,p=t.cy,f=t.xv,x=t.xForText,y=t.yForText,m=t.duration,S=1,w=d.index,v=d.length,b=e.getValueOnIndex(e.data.targets[0].values,w),A=e.getValueOnIndex(e.data.targets[0].values,w+v),T=e.x.domain(),P=d.duration||m,L=d.done||function(){},C=e.generateWait(),V=e.xgrid||n.selectAll([]),G=e.xgridLines||n.selectAll([]),E=e.mainRegion||n.selectAll([]),I=e.mainText||n.selectAll([]),O=e.mainBar||n.selectAll([]),R=e.mainLine||n.selectAll([]),D=e.mainArea||n.selectAll([]),F=e.mainCircle||n.selectAll([]);e.flowing=!0,e.data.targets.forEach(function(t){t.values.splice(0,v)}),s=e.updateXDomain(c,!0,!0),e.updateXGrid&&e.updateXGrid(!0),d.orgDataCount?a=1===d.orgDataCount||(b&&b.x)===(A&&A.x)?e.x(T[0])-e.x(s[0]):e.isTimeSeries()?e.x(T[0])-e.x(s[0]):e.x(b.x)-e.x(A.x):1!==e.data.targets[0].values.length?a=e.x(T[0])-e.x(s[0]):e.isTimeSeries()?(b=e.getValueOnIndex(e.data.targets[0].values,0),A=e.getValueOnIndex(e.data.targets[0].values,e.data.targets[0].values.length-1),a=e.x(b.x)-e.x(A.x)):a=_(s)/2,S=_(T)/_(s),r="translate("+a+",0) scale("+S+",1)",e.hideXGridFocus(),n.transition().ease("linear").duration(P).each(function(){C.add(e.axes.x.transition().call(e.xAxis)),C.add(O.transition().attr("transform",r)),C.add(R.transition().attr("transform",r)),C.add(D.transition().attr("transform",r)),C.add(F.transition().attr("transform",r)),C.add(I.transition().attr("transform",r)),C.add(E.filter(e.isRegionOnX).transition().attr("transform",r)),C.add(V.transition().attr("transform",r)),C.add(G.transition().attr("transform",r))}).call(C,function(){var t,n=[],a=[],r=[];if(v){for(t=0;t<v;t++)n.push("."+o.shape+"-"+(w+t)),a.push("."+o.text+"-"+(w+t)),r.push("."+o.eventRect+"-"+(w+t));e.svg.selectAll("."+o.shapes).selectAll(n).remove(),e.svg.selectAll("."+o.texts).selectAll(a).remove(),e.svg.selectAll("."+o.eventRects).selectAll(r).remove(),e.svg.select("."+o.xgrid).remove()}V.attr("transform",null).attr(e.xgridAttr),G.attr("transform",null),G.select("line").attr("x1",i.axis_rotated?0:f).attr("x2",i.axis_rotated?e.width:f),G.select("text").attr("x",i.axis_rotated?e.width:0).attr("y",f),O.attr("transform",null).attr("d",l),R.attr("transform",null).attr("d",u),D.attr("transform",null).attr("d",h),F.attr("transform",null).attr("cx",g).attr("cy",p),I.attr("transform",null).attr("x",x).attr("y",y).style("fill-opacity",e.opacityForText.bind(e)),E.attr("transform",null),E.select("rect").filter(e.isRegionOnX).attr("x",e.regionX.bind(e)).attr("width",e.regionWidth.bind(e)),i.interaction_enabled&&e.redrawEventRect(),L(),e.flowing=!1})}},b.focus=function(t){var e,i=this.internal;t=i.mapToTargetIds(t),e=i.svg.selectAll(i.selectorTargets(t.filter(i.isTargetToShow,i))),this.revert(),this.defocus(),e.classed(o.focused,!0).classed(o.defocused,!1),i.hasArcType()&&i.expandArc(t),i.toggleFocusLegend(t,!0),i.focusedTargetIds=t,i.defocusedTargetIds=i.defocusedTargetIds.filter(function(e){return t.indexOf(e)<0})},b.defocus=function(t){var e=this.internal;t=e.mapToTargetIds(t),e.svg.selectAll(e.selectorTargets(t.filter(e.isTargetToShow,e))).classed(o.focused,!1).classed(o.defocused,!0),e.hasArcType()&&e.unexpandArc(t),e.toggleFocusLegend(t,!1),e.focusedTargetIds=e.focusedTargetIds.filter(function(e){return t.indexOf(e)<0}),e.defocusedTargetIds=t},b.revert=function(t){var e=this.internal;t=e.mapToTargetIds(t),e.svg.selectAll(e.selectorTargets(t)).classed(o.focused,!1).classed(o.defocused,!1),e.hasArcType()&&e.unexpandArc(t),e.config.legend_show&&(e.showLegend(t.filter(e.isLegendToShow.bind(e))),e.legend.selectAll(e.selectorLegends(t)).filter(function(){return e.d3.select(this).classed(o.legendItemFocused)}).classed(o.legendItemFocused,!1)),e.focusedTargetIds=[],e.defocusedTargetIds=[]},b.xgrids=function(t){var e=this.internal,i=e.config;return t?(i.grid_x_lines=t,e.redrawWithoutRescale(),i.grid_x_lines):i.grid_x_lines},b.xgrids.add=function(t){var e=this.internal;return this.xgrids(e.config.grid_x_lines.concat(t||[]))},b.xgrids.remove=function(t){this.internal.removeGridLines(t,!0)},b.ygrids=function(t){var e=this.internal,i=e.config;return t?(i.grid_y_lines=t,e.redrawWithoutRescale(),i.grid_y_lines):i.grid_y_lines},b.ygrids.add=function(t){var e=this.internal;return this.ygrids(e.config.grid_y_lines.concat(t||[]))},b.ygrids.remove=function(t){this.internal.removeGridLines(t,!1)},b.groups=function(t){var e=this.internal,i=e.config;return void 0===t?i.data_groups:(i.data_groups=t,e.redraw(),i.data_groups)},b.legend=function(){},b.legend.show=function(t){var e=this.internal;e.showLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})},b.legend.hide=function(t){var e=this.internal;e.hideLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})},b.load=function(t){var e=this.internal,i=e.config;t.xs&&e.addXs(t.xs),"names"in t&&b.data.names.bind(this)(t.names),"classes"in t&&Object.keys(t.classes).forEach(function(e){i.data_classes[e]=t.classes[e]}),"categories"in t&&e.isCategorized()&&(i.axis_x_categories=t.categories),"axes"in t&&Object.keys(t.axes).forEach(function(e){i.data_axes[e]=t.axes[e]}),"colors"in t&&Object.keys(t.colors).forEach(function(e){i.data_colors[e]=t.colors[e]}),"cacheIds"in t&&e.hasCaches(t.cacheIds)?e.load(e.getCaches(t.cacheIds),t.done):"unload"in t?e.unload(e.mapToTargetIds("boolean"==typeof t.unload&&t.unload?null:t.unload),function(){e.loadFromArgs(t)}):e.loadFromArgs(t)},b.unload=function(t){var e=this.internal;(t=t||{})instanceof Array?t={ids:t}:"string"==typeof t&&(t={ids:[t]}),e.unload(e.mapToTargetIds(t.ids),function(){e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),t.done&&t.done()})},b.regions=function(t){var e=this.internal,i=e.config;return t?(i.regions=t,e.redrawWithoutRescale(),i.regions):i.regions},b.regions.add=function(t){var e=this.internal,i=e.config;return t?(i.regions=i.regions.concat(t),e.redrawWithoutRescale(),i.regions):i.regions},b.regions.remove=function(t){var e,i,n,a=this.internal,r=a.config;return t=t||{},e=a.getOption(t,"duration",r.transition_duration),i=a.getOption(t,"classes",[o.region]),n=a.main.select("."+o.regions).selectAll(i.map(function(t){return"."+t})),(e?n.transition().duration(e):n).style("opacity",0).remove(),r.regions=r.regions.filter(function(t){var e=!1;return!t.class||(t.class.split(" ").forEach(function(t){i.indexOf(t)>=0&&(e=!0)}),!e)}),r.regions},b.selected=function(t){var e=this.internal,i=e.d3;return i.merge(e.main.selectAll("."+o.shapes+e.getTargetSelectorSuffix(t)).selectAll("."+o.shape).filter(function(){return i.select(this).classed(o.SELECTED)}).map(function(t){return t.map(function(t){var e=t.__data__;return e.data?e.data:e})}))},b.select=function(t,e,i){var n=this.internal,a=n.d3,r=n.config;r.data_selection_enabled&&n.main.selectAll("."+o.shapes).selectAll("."+o.shape).each(function(s,c){var d=a.select(this),l=s.data?s.data.id:s.id,u=n.getToggle(this,s).bind(n),h=r.data_selection_grouped||!t||t.indexOf(l)>=0,g=!e||e.indexOf(c)>=0,p=d.classed(o.SELECTED);d.classed(o.line)||d.classed(o.area)||(h&&g?r.data_selection_isselectable(s)&&!p&&u(!0,d.classed(o.SELECTED,!0),s,c):void 0!==i&&i&&p&&u(!1,d.classed(o.SELECTED,!1),s,c))})},b.unselect=function(t,e){var i=this.internal,n=i.d3,a=i.config;a.data_selection_enabled&&i.main.selectAll("."+o.shapes).selectAll("."+o.shape).each(function(r,s){var c=n.select(this),d=r.data?r.data.id:r.id,l=i.getToggle(this,r).bind(i),u=a.data_selection_grouped||!t||t.indexOf(d)>=0,h=!e||e.indexOf(s)>=0,g=c.classed(o.SELECTED);c.classed(o.line)||c.classed(o.area)||u&&h&&a.data_selection_isselectable(r)&&g&&l(!1,c.classed(o.SELECTED,!1),r,s)})},b.show=function(t,e){var i,n=this.internal;t=n.mapToTargetIds(t),e=e||{},n.removeHiddenTargetIds(t),(i=n.svg.selectAll(n.selectorTargets(t))).transition().style("opacity",1,"important").call(n.endall,function(){i.style("opacity",null).style("opacity",1)}),e.withLegend&&n.showLegend(t),n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},b.hide=function(t,e){var i,n=this.internal;t=n.mapToTargetIds(t),e=e||{},n.addHiddenTargetIds(t),(i=n.svg.selectAll(n.selectorTargets(t))).transition().style("opacity",0,"important").call(n.endall,function(){i.style("opacity",null).style("opacity",0)}),e.withLegend&&n.hideLegend(t),n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},b.toggle=function(t,e){var i=this,n=this.internal;n.mapToTargetIds(t).forEach(function(t){n.isTargetToShow(t)?i.hide(t,e):i.show(t,e)})},b.tooltip=function(){},b.tooltip.show=function(t){var e,i,n=this.internal;t.mouse&&(i=t.mouse),t.data?n.isMultipleX()?(i=[n.x(t.data.x),n.getYScale(t.data.id)(t.data.value)],e=null):e=c(t.data.index)?t.data.index:n.getIndexByX(t.data.x):void 0!==t.x?e=n.getIndexByX(t.x):void 0!==t.index&&(e=t.index),n.dispatchEvent("mouseover",e,i),n.dispatchEvent("mousemove",e,i),n.config.tooltip_onshow.call(n,t.data)},b.tooltip.hide=function(){this.internal.dispatchEvent("mouseout",0),this.internal.config.tooltip_onhide.call(this)},b.transform=function(t,e){var i=this.internal,n=["pie","donut"].indexOf(t)>=0?{withTransform:!0}:null;i.transformTo(e,t,n)},A.transformTo=function(t,e,i){var n=this,a=!n.hasArcType(),r=i||{withTransitionForAxis:a};r.withTransitionForTransform=!1,n.transiting=!1,n.setTargetType(t,e),n.updateTargets(n.data.targets),n.updateAndRedraw(r)},b.x=function(t){var e=this.internal;return arguments.length&&(e.updateTargetX(e.data.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),e.data.xs},b.xs=function(t){var e=this.internal;return arguments.length&&(e.updateTargetXs(e.data.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),e.data.xs},b.zoom=function(t){var e=this.internal;return t&&(e.isTimeSeries()&&(t=t.map(function(t){return e.parseDate(t)})),e.brush.extent(t),e.redraw({withUpdateXDomain:!0,withY:e.config.zoom_rescale}),e.config.zoom_onzoom.call(this,e.x.orgDomain())),e.brush.extent()},b.zoom.enable=function(t){var e=this.internal;e.config.zoom_enabled=t,e.updateAndRedraw()},b.unzoom=function(){var t=this.internal;t.brush.clear().update(),t.redraw({withUpdateXDomain:!0})},b.zoom.max=function(t){var e=this.internal,i=e.config,n=e.d3;if(0!==t&&!t)return i.zoom_x_max;i.zoom_x_max=n.max([e.orgXDomain[1],t])},b.zoom.min=function(t){var e=this.internal,i=e.config,n=e.d3;if(0!==t&&!t)return i.zoom_x_min;i.zoom_x_min=n.min([e.orgXDomain[0],t])},b.zoom.range=function(t){if(!arguments.length)return{max:this.domain.max(),min:this.domain.min()};void 0!==t.max&&this.domain.max(t.max),void 0!==t.min&&this.domain.min(t.min)},A.initPie=function(){var t=this,e=t.d3,i=t.config;t.pie=e.layout.pie().value(function(t){return t.values.reduce(function(t,e){return t+e.value},0)}),i.data_order||t.pie.sort(null)},A.updateRadius=function(){var t=this,e=t.config,i=e.gauge_width||e.donut_width;t.radiusExpanded=Math.min(t.arcWidth,t.arcHeight)/2,t.radius=.95*t.radiusExpanded,t.innerRadiusRatio=i?(t.radius-i)/t.radius:.6,t.innerRadius=t.hasType("donut")||t.hasType("gauge")?t.radius*t.innerRadiusRatio:0},A.updateArc=function(){var t=this;t.svgArc=t.getSvgArc(),t.svgArcExpanded=t.getSvgArcExpanded(),t.svgArcExpandedSub=t.getSvgArcExpanded(.98)},A.updateAngle=function(t){var e,i,n,a,r=this,o=r.config,s=!1,c=0;return o?(r.pie(r.filterTargetsToShow(r.data.targets)).forEach(function(e){s||e.data.id!==t.data.id||(s=!0,(t=e).index=c),c++}),isNaN(t.startAngle)&&(t.startAngle=0),isNaN(t.endAngle)&&(t.endAngle=t.startAngle),r.isGaugeType(t.data)&&(e=o.gauge_min,i=o.gauge_max,n=Math.PI*(o.gauge_fullCircle?2:1)/(i-e),a=t.value<e?0:t.value<i?t.value-e:i-e,t.startAngle=o.gauge_startingAngle,t.endAngle=t.startAngle+n*a),s?t:null):null},A.getSvgArc=function(){var t=this,e=t.d3.svg.arc().outerRadius(t.radius).innerRadius(t.innerRadius),i=function(i,n){var a;return n?e(i):(a=t.updateAngle(i),a?e(a):"M 0 0")};return i.centroid=e.centroid,i},A.getSvgArcExpanded=function(t){var e=this,i=e.d3.svg.arc().outerRadius(e.radiusExpanded*(t||1)).innerRadius(e.innerRadius);return function(t){var n=e.updateAngle(t);return n?i(n):"M 0 0"}},A.getArc=function(t,e,i){return i||this.isArcType(t.data)?this.svgArc(t,e):"M 0 0"},A.transformForArcLabel=function(t){var e,i,n,a,r,o=this,s=o.config,c=o.updateAngle(t),l="";return c&&!o.hasType("gauge")&&(e=this.svgArc.centroid(c),i=isNaN(e[0])?0:e[0],n=isNaN(e[1])?0:e[1],a=Math.sqrt(i*i+n*n),l="translate("+i*(r=o.hasType("donut")&&s.donut_label_ratio?d(s.donut_label_ratio)?s.donut_label_ratio(t,o.radius,a):s.donut_label_ratio:o.hasType("pie")&&s.pie_label_ratio?d(s.pie_label_ratio)?s.pie_label_ratio(t,o.radius,a):s.pie_label_ratio:o.radius&&a?(36/o.radius>.375?1.175-36/o.radius:.8)*o.radius/a:0)+","+n*r+")"),l},A.getArcRatio=function(t){var e=this,i=e.config,n=Math.PI*(e.hasType("gauge")&&!i.gauge_fullCircle?1:2);return t?(t.endAngle-t.startAngle)/n:null},A.convertToArcData=function(t){return this.addName({id:t.data.id,value:t.value,ratio:this.getArcRatio(t),index:t.index})},A.textForArcLabel=function(t){var e,i,n,a,r,o=this;return o.shouldShowArcLabel()?(e=o.updateAngle(t),i=e?e.value:null,n=o.getArcRatio(e),a=t.data.id,o.hasType("gauge")||o.meetsArcLabelThreshold(n)?(r=o.getArcLabelFormat(),r?r(i,n,a):o.defaultArcValueFormat(i,n)):""):""},A.textForGaugeMinMax=function(t,e){var i=this.getGaugeLabelExtents();return i?i(t,e):t},A.expandArc=function(t){var e,i=this;i.transiting?e=window.setInterval(function(){i.transiting||(window.clearInterval(e),i.legend.selectAll(".c3-legend-item-focused").size()>0&&i.expandArc(t))},10):(t=i.mapToTargetIds(t),i.svg.selectAll(i.selectorTargets(t,"."+o.chartArc)).each(function(t){i.shouldExpand(t.data.id)&&i.d3.select(this).selectAll("path").transition().duration(i.expandDuration(t.data.id)).attr("d",i.svgArcExpanded).transition().duration(2*i.expandDuration(t.data.id)).attr("d",i.svgArcExpandedSub).each(function(t){i.isDonutType(t.data)})}))},A.unexpandArc=function(t){var e=this;e.transiting||(t=e.mapToTargetIds(t),e.svg.selectAll(e.selectorTargets(t,"."+o.chartArc)).selectAll("path").transition().duration(function(t){return e.expandDuration(t.data.id)}).attr("d",e.svgArc),e.svg.selectAll("."+o.arc))},A.expandDuration=function(t){var e=this,i=e.config;return e.isDonutType(t)?i.donut_expand_duration:e.isGaugeType(t)?i.gauge_expand_duration:e.isPieType(t)?i.pie_expand_duration:50},A.shouldExpand=function(t){var e=this,i=e.config;return e.isDonutType(t)&&i.donut_expand||e.isGaugeType(t)&&i.gauge_expand||e.isPieType(t)&&i.pie_expand},A.shouldShowArcLabel=function(){var t=this,e=t.config,i=!0;return t.hasType("donut")?i=e.donut_label_show:t.hasType("pie")&&(i=e.pie_label_show),i},A.meetsArcLabelThreshold=function(t){var e=this,i=e.config;return t>=(e.hasType("donut")?i.donut_label_threshold:i.pie_label_threshold)},A.getArcLabelFormat=function(){var t=this,e=t.config,i=e.pie_label_format;return t.hasType("gauge")?i=e.gauge_label_format:t.hasType("donut")&&(i=e.donut_label_format),i},A.getGaugeLabelExtents=function(){return this.config.gauge_label_extents},A.getArcTitle=function(){var t=this;return t.hasType("donut")?t.config.donut_title:""},A.updateTargetsForArc=function(t){var e,i=this,n=i.main,a=i.classChartArc.bind(i),r=i.classArcs.bind(i),s=i.classFocus.bind(i);(e=n.select("."+o.chartArcs).selectAll("."+o.chartArc).data(i.pie(t)).attr("class",function(t){return a(t)+s(t.data)}).enter().append("g").attr("class",a)).append("g").attr("class",r),e.append("text").attr("dy",i.hasType("gauge")?"-.1em":".35em").style("opacity",0).style("text-anchor","middle").style("pointer-events","none")},A.initArc=function(){var t=this;t.arcs=t.main.select("."+o.chart).append("g").attr("class",o.chartArcs).attr("transform",t.getTranslate("arc")),t.arcs.append("text").attr("class",o.chartArcsTitle).style("text-anchor","middle").text(t.getArcTitle())},A.redrawArc=function(t,e,i){var n,a=this,r=a.d3,s=a.config,c=a.main;(n=c.selectAll("."+o.arcs).selectAll("."+o.arc).data(a.arcData.bind(a))).enter().append("path").attr("class",a.classArc.bind(a)).style("fill",function(t){return a.color(t.data)}).style("cursor",function(t){return s.interaction_enabled&&s.data_selection_isselectable(t)?"pointer":null}).each(function(t){a.isGaugeType(t.data)&&(t.startAngle=t.endAngle=s.gauge_startingAngle),this._current=t}),n.attr("transform",function(t){return!a.isGaugeType(t.data)&&i?"scale(0)":""}).on("mouseover",s.interaction_enabled?function(t){var e,i;a.transiting||(e=a.updateAngle(t))&&(i=a.convertToArcData(e),a.expandArc(e.data.id),a.api.focus(e.data.id),a.toggleFocusLegend(e.data.id,!0),a.config.data_onmouseover(i,this))}:null).on("mousemove",s.interaction_enabled?function(t){var e,i=a.updateAngle(t);i&&(e=[a.convertToArcData(i)],a.showTooltip(e,this))}:null).on("mouseout",s.interaction_enabled?function(t){var e,i;a.transiting||(e=a.updateAngle(t))&&(i=a.convertToArcData(e),a.unexpandArc(e.data.id),a.api.revert(),a.revertLegend(),a.hideTooltip(),a.config.data_onmouseout(i,this))}:null).on("click",s.interaction_enabled?function(t,e){var i,n=a.updateAngle(t);n&&(i=a.convertToArcData(n),a.toggleShape&&a.toggleShape(this,i,e),a.config.data_onclick.call(a.api,i,this))}:null).each(function(){a.transiting=!0}).transition().duration(t).attrTween("d",function(t){var e,i=a.updateAngle(t);return i?(isNaN(this._current.startAngle)&&(this._current.startAngle=0),isNaN(this._current.endAngle)&&(this._current.endAngle=this._current.startAngle),e=r.interpolate(this._current,i),this._current=e(0),function(i){var n=e(i);return n.data=t.data,a.getArc(n,!0)}):function(){return"M 0 0"}}).attr("transform",i?"scale(1)":"").style("fill",function(t){return a.levelColor?a.levelColor(t.data.values[0].value):a.color(t.data.id)}).call(a.endall,function(){a.transiting=!1}),n.exit().transition().duration(e).style("opacity",0).remove(),c.selectAll("."+o.chartArc).select("text").style("opacity",0).attr("class",function(t){return a.isGaugeType(t.data)?o.gaugeValue:""}).text(a.textForArcLabel.bind(a)).attr("transform",a.transformForArcLabel.bind(a)).style("font-size",function(t){return a.isGaugeType(t.data)?Math.round(a.radius/5)+"px":""}).transition().duration(t).style("opacity",function(t){return a.isTargetToShow(t.data.id)&&a.isArcType(t.data)?1:0}),c.select("."+o.chartArcsTitle).style("opacity",a.hasType("donut")||a.hasType("gauge")?1:0),a.hasType("gauge")&&(a.arcs.select("."+o.chartArcsBackground).attr("d",function(){var t={data:[{value:s.gauge_max}],startAngle:s.gauge_startingAngle,endAngle:-1*s.gauge_startingAngle};return a.getArc(t,!0,!0)}),a.arcs.select("."+o.chartArcsGaugeUnit).attr("dy",".75em").text(s.gauge_label_show?s.gauge_units:""),a.arcs.select("."+o.chartArcsGaugeMin).attr("dx",-1*(a.innerRadius+(a.radius-a.innerRadius)/(s.gauge_fullCircle?1:2))+"px").attr("dy","1.2em").text(s.gauge_label_show?a.textForGaugeMinMax(s.gauge_min,!1):""),a.arcs.select("."+o.chartArcsGaugeMax).attr("dx",a.innerRadius+(a.radius-a.innerRadius)/(s.gauge_fullCircle?1:2)+"px").attr("dy","1.2em").text(s.gauge_label_show?a.textForGaugeMinMax(s.gauge_max,!0):""))},A.initGauge=function(){var t=this.arcs;this.hasType("gauge")&&(t.append("path").attr("class",o.chartArcsBackground),t.append("text").attr("class",o.chartArcsGaugeUnit).style("text-anchor","middle").style("pointer-events","none"),t.append("text").attr("class",o.chartArcsGaugeMin).style("text-anchor","middle").style("pointer-events","none"),t.append("text").attr("class",o.chartArcsGaugeMax).style("text-anchor","middle").style("pointer-events","none"))},A.getGaugeLabelHeight=function(){return this.config.gauge_label_show?20:0},A.hasCaches=function(t){for(var e=0;e<t.length;e++)if(!(t[e]in this.cache))return!1;return!0},A.addCache=function(t,e){this.cache[t]=this.cloneTarget(e)},A.getCaches=function(t){var e,i=[];for(e=0;e<t.length;e++)t[e]in this.cache&&i.push(this.cloneTarget(this.cache[t[e]]));return i},A.categoryName=function(t){var e=this.config;return t<e.axis_x_categories.length?e.axis_x_categories[t]:t},A.generateClass=function(t,e){return" "+t+" "+t+this.getTargetSelectorSuffix(e)},A.classText=function(t){return this.generateClass(o.text,t.index)},A.classTexts=function(t){return this.generateClass(o.texts,t.id)},A.classShape=function(t){return this.generateClass(o.shape,t.index)},A.classShapes=function(t){return this.generateClass(o.shapes,t.id)},A.classLine=function(t){return this.classShape(t)+this.generateClass(o.line,t.id)},A.classLines=function(t){return this.classShapes(t)+this.generateClass(o.lines,t.id)},A.classCircle=function(t){return this.classShape(t)+this.generateClass(o.circle,t.index)},A.classCircles=function(t){return this.classShapes(t)+this.generateClass(o.circles,t.id)},A.classBar=function(t){return this.classShape(t)+this.generateClass(o.bar,t.index)},A.classBars=function(t){return this.classShapes(t)+this.generateClass(o.bars,t.id)},A.classArc=function(t){return this.classShape(t.data)+this.generateClass(o.arc,t.data.id)},A.classArcs=function(t){return this.classShapes(t.data)+this.generateClass(o.arcs,t.data.id)},A.classArea=function(t){return this.classShape(t)+this.generateClass(o.area,t.id)},A.classAreas=function(t){return this.classShapes(t)+this.generateClass(o.areas,t.id)},A.classRegion=function(t,e){return this.generateClass(o.region,e)+" "+("class"in t?t.class:"")},A.classEvent=function(t){return this.generateClass(o.eventRect,t.index)},A.classTarget=function(t){var e=this,i=e.config.data_classes[t],n="";return i&&(n=" "+o.target+"-"+i),e.generateClass(o.target,t)+n},A.classFocus=function(t){return this.classFocused(t)+this.classDefocused(t)},A.classFocused=function(t){return" "+(this.focusedTargetIds.indexOf(t.id)>=0?o.focused:"")},A.classDefocused=function(t){return" "+(this.defocusedTargetIds.indexOf(t.id)>=0?o.defocused:"")},A.classChartText=function(t){return o.chartText+this.classTarget(t.id)},A.classChartLine=function(t){return o.chartLine+this.classTarget(t.id)},A.classChartBar=function(t){return o.chartBar+this.classTarget(t.id)},A.classChartArc=function(t){return o.chartArc+this.classTarget(t.data.id)},A.getTargetSelectorSuffix=function(t){return t||0===t?("-"+t).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g,"-"):""},A.selectorTarget=function(t,e){return(e||"")+"."+o.target+this.getTargetSelectorSuffix(t)},A.selectorTargets=function(t,e){var i=this;return t=t||[],t.length?t.map(function(t){return i.selectorTarget(t,e)}):null},A.selectorLegend=function(t){return"."+o.legendItem+this.getTargetSelectorSuffix(t)},A.selectorLegends=function(t){var e=this;return t&&t.length?t.map(function(t){return e.selectorLegend(t)}):null},A.getClipPath=function(t){return"url("+(window.navigator.appVersion.toLowerCase().indexOf("msie 9.")>=0?"":document.URL.split("#")[0])+"#"+t+")"},A.appendClip=function(t,e){return t.append("clipPath").attr("id",e).append("rect")},A.getAxisClipX=function(t){var e=Math.max(30,this.margin.left);return t?-(1+e):-(e-1)},A.getAxisClipY=function(t){return t?-20:-this.margin.top},A.getXAxisClipX=function(){var t=this;return t.getAxisClipX(!t.config.axis_rotated)},A.getXAxisClipY=function(){var t=this;return t.getAxisClipY(!t.config.axis_rotated)},A.getYAxisClipX=function(){var t=this;return t.config.axis_y_inner?-1:t.getAxisClipX(t.config.axis_rotated)},A.getYAxisClipY=function(){var t=this;return t.getAxisClipY(t.config.axis_rotated)},A.getAxisClipWidth=function(t){var e=this,i=Math.max(30,e.margin.left),n=Math.max(30,e.margin.right);return t?e.width+2+i+n:e.margin.left+20},A.getAxisClipHeight=function(t){return(t?this.margin.bottom:this.margin.top+this.height)+20},A.getXAxisClipWidth=function(){var t=this;return t.getAxisClipWidth(!t.config.axis_rotated)},A.getXAxisClipHeight=function(){var t=this;return t.getAxisClipHeight(!t.config.axis_rotated)},A.getYAxisClipWidth=function(){var t=this;return t.getAxisClipWidth(t.config.axis_rotated)+(t.config.axis_y_inner?20:0)},A.getYAxisClipHeight=function(){var t=this;return t.getAxisClipHeight(t.config.axis_rotated)},A.generateColor=function(){var t=this,e=t.config,i=t.d3,n=e.data_colors,a=y(e.color_pattern)?e.color_pattern:i.scale.category10().range(),r=e.data_color,o=[];return function(t){var e,i=t.id||t.data&&t.data.id||t;return n[i]instanceof Function?e=n[i](t):n[i]?e=n[i]:(o.indexOf(i)<0&&o.push(i),e=a[o.indexOf(i)%a.length],n[i]=e),r instanceof Function?r(e,t):e}},A.generateLevelColor=function(){var t=this.config,e=t.color_pattern,i=t.color_threshold,n="value"===i.unit,a=i.values&&i.values.length?i.values:[],r=i.max||100;return y(t.color_threshold)?function(t){var i,o=e[e.length-1];for(i=0;i<a.length;i++)if((n?t:100*t/r)<a[i]){o=e[i];break}return o}:null},A.getDefaultConfig=function(){var t={bindto:"#chart",svg_classname:void 0,size_width:void 0,size_height:void 0,padding_left:void 0,padding_right:void 0,padding_top:void 0,padding_bottom:void 0,resize_auto:!0,zoom_enabled:!1,zoom_extent:void 0,zoom_privileged:!1,zoom_rescale:!1,zoom_onzoom:function(){},zoom_onzoomstart:function(){},zoom_onzoomend:function(){},zoom_x_min:void 0,zoom_x_max:void 0,interaction_brighten:!0,interaction_enabled:!0,onmouseover:function(){},onmouseout:function(){},onresize:function(){},onresized:function(){},oninit:function(){},onrendered:function(){},transition_duration:350,data_x:void 0,data_xs:{},data_xFormat:"%Y-%m-%d",data_xLocaltime:!0,data_xSort:!0,data_idConverter:function(t){return t},data_names:{},data_classes:{},data_groups:[],data_axes:{},data_type:void 0,data_types:{},data_labels:{},data_order:"desc",data_regions:{},data_color:void 0,data_colors:{},data_hide:!1,data_filter:void 0,data_selection_enabled:!1,data_selection_grouped:!1,data_selection_isselectable:function(){return!0},data_selection_multiple:!0,data_selection_draggable:!1,data_onclick:function(){},data_onmouseover:function(){},data_onmouseout:function(){},data_onselected:function(){},data_onunselected:function(){},data_url:void 0,data_headers:void 0,data_json:void 0,data_rows:void 0,data_columns:void 0,data_mimeType:void 0,data_keys:void 0,data_empty_label_text:"",subchart_show:!1,subchart_size_height:60,subchart_axis_x_show:!0,subchart_onbrush:function(){},color_pattern:[],color_threshold:{},legend_show:!0,legend_hide:!1,legend_position:"bottom",legend_inset_anchor:"top-left",legend_inset_x:10,legend_inset_y:0,legend_inset_step:void 0,legend_item_onclick:void 0,legend_item_onmouseover:void 0,legend_item_onmouseout:void 0,legend_equally:!1,legend_padding:0,legend_item_tile_width:10,legend_item_tile_height:10,axis_rotated:!1,axis_x_show:!0,axis_x_type:"indexed",axis_x_localtime:!0,axis_x_categories:[],axis_x_tick_centered:!1,axis_x_tick_format:void 0,axis_x_tick_culling:{},axis_x_tick_culling_max:10,axis_x_tick_count:void 0,axis_x_tick_fit:!0,axis_x_tick_values:null,axis_x_tick_rotate:0,axis_x_tick_outer:!0,axis_x_tick_multiline:!0,axis_x_tick_width:null,axis_x_max:void 0,axis_x_min:void 0,axis_x_padding:{},axis_x_height:void 0,axis_x_extent:void 0,axis_x_label:{},axis_y_show:!0,axis_y_type:void 0,axis_y_max:void 0,axis_y_min:void 0,axis_y_inverted:!1,axis_y_center:void 0,axis_y_inner:void 0,axis_y_label:{},axis_y_tick_format:void 0,axis_y_tick_outer:!0,axis_y_tick_values:null,axis_y_tick_rotate:0,axis_y_tick_count:void 0,axis_y_tick_time_value:void 0,axis_y_tick_time_interval:void 0,axis_y_padding:{},axis_y_default:void 0,axis_y2_show:!1,axis_y2_max:void 0,axis_y2_min:void 0,axis_y2_inverted:!1,axis_y2_center:void 0,axis_y2_inner:void 0,axis_y2_label:{},axis_y2_tick_format:void 0,axis_y2_tick_outer:!0,axis_y2_tick_values:null,axis_y2_tick_count:void 0,axis_y2_padding:{},axis_y2_default:void 0,grid_x_show:!1,grid_x_type:"tick",grid_x_lines:[],grid_y_show:!1,grid_y_lines:[],grid_y_ticks:10,grid_focus_show:!0,grid_lines_front:!0,point_show:!0,point_r:2.5,point_sensitivity:10,point_focus_expand_enabled:!0,point_focus_expand_r:void 0,point_select_r:void 0,line_connectNull:!1,line_step_type:"step",bar_width:void 0,bar_width_ratio:.6,bar_width_max:void 0,bar_zerobased:!0,area_zerobased:!0,area_above:!1,pie_label_show:!0,pie_label_format:void 0,pie_label_threshold:.05,pie_label_ratio:void 0,pie_expand:{},pie_expand_duration:50,gauge_fullCircle:!1,gauge_label_show:!0,gauge_label_format:void 0,gauge_min:0,gauge_max:100,gauge_startingAngle:-1*Math.PI/2,gauge_label_extents:void 0,gauge_units:void 0,gauge_width:void 0,gauge_expand:{},gauge_expand_duration:50,donut_label_show:!0,donut_label_format:void 0,donut_label_threshold:.05,donut_label_ratio:void 0,donut_width:void 0,donut_title:"",donut_expand:{},donut_expand_duration:50,spline_interpolation_type:"cardinal",regions:[],tooltip_show:!0,tooltip_grouped:!0,tooltip_order:void 0,tooltip_format_title:void 0,tooltip_format_name:void 0,tooltip_format_value:void 0,tooltip_position:void 0,tooltip_contents:function(t,e,i,n){return this.getTooltipContent?this.getTooltipContent(t,e,i,n):""},tooltip_init_show:!1,tooltip_init_x:0,tooltip_init_position:{top:"0px",left:"50px"},tooltip_onshow:function(){},tooltip_onhide:function(){},title_text:void 0,title_padding:{top:0,right:0,bottom:0,left:0},title_position:"top-center"};return Object.keys(this.additionalConfig).forEach(function(e){t[e]=this.additionalConfig[e]},this),t},A.additionalConfig={},A.loadConfig=function(t){function e(){var t=n.shift();return t&&i&&"object"===(void 0===i?"undefined":s(i))&&t in i?(i=i[t],e()):t?void 0:i}var i,n,a,r=this.config;Object.keys(r).forEach(function(o){i=t,n=o.split("_"),void 0!==(a=e())&&(r[o]=a)})},A.convertUrlToData=function(t,e,i,n,a){var r=this,o=e||"csv",s=r.d3.xhr(t);i&&Object.keys(i).forEach(function(t){s.header(t,i[t])}),s.get(function(t,e){var i,s=e.response||e.responseText;if(!e)throw new Error(t.responseURL+" "+t.status+" ("+t.statusText+")");i="json"===o?r.convertJsonToData(JSON.parse(s),n):"tsv"===o?r.convertTsvToData(s):r.convertCsvToData(s),a.call(r,i)})},A.convertXsvToData=function(t,e){var i,n=e.parseRows(t);return 1===n.length?(i=[{}],n[0].forEach(function(t){i[0][t]=null})):i=e.parse(t),i},A.convertCsvToData=function(t){return this.convertXsvToData(t,this.d3.csv)},A.convertTsvToData=function(t){return this.convertXsvToData(t,this.d3.tsv)},A.convertJsonToData=function(t,e){var i,n,a=this,r=[];return e?(e.x?(i=e.value.concat(e.x),a.config.data_x=e.x):i=e.value,r.push(i),t.forEach(function(t){var e=[];i.forEach(function(i){var n=a.findValueInJson(t,i);h(n)&&(n=null),e.push(n)}),r.push(e)}),n=a.convertRowsToData(r)):(Object.keys(t).forEach(function(e){r.push([e].concat(t[e]))}),n=a.convertColumnsToData(r)),n},A.findValueInJson=function(t,e){for(var i=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n=0;n<i.length;++n){var a=i[n];if(!(a in t))return;t=t[a]}return t},A.convertRowsToData=function(t){for(var e=[],i=t[0],n=1;n<t.length;n++){for(var a={},r=0;r<t[n].length;r++){if(void 0===t[n][r])throw new Error("Source data is missing a component at ("+n+","+r+")!");a[i[r]]=t[n][r]}e.push(a)}return e},A.convertColumnsToData=function(t){for(var e=[],i=0;i<t.length;i++)for(var n=t[i][0],a=1;a<t[i].length;a++){if(void 0===e[a-1]&&(e[a-1]={}),void 0===t[i][a])throw new Error("Source data is missing a component at ("+i+","+a+")!");e[a-1][n]=t[i][a]}return e},A.convertDataToTargets=function(t,e){var i,n=this,a=n.config,r=n.d3.keys(t[0]).filter(n.isNotX,n),o=n.d3.keys(t[0]).filter(n.isX,n);return r.forEach(function(i){var r=n.getXKey(i);n.isCustomX()||n.isTimeSeries()?o.indexOf(r)>=0?n.data.xs[i]=(e&&n.data.xs[i]?n.data.xs[i]:[]).concat(t.map(function(t){return t[r]}).filter(c).map(function(t,e){return n.generateTargetX(t,i,e)})):a.data_x?n.data.xs[i]=n.getOtherTargetXs():y(a.data_xs)&&(n.data.xs[i]=n.getXValuesOfXKey(r,n.data.targets)):n.data.xs[i]=t.map(function(t,e){return e})}),r.forEach(function(t){if(!n.data.xs[t])throw new Error('x is not defined for id = "'+t+'".')}),(i=r.map(function(e,i){var r=a.data_idConverter(e);return{id:r,id_org:e,values:t.map(function(t,o){var s,c=t[n.getXKey(e)],d=null===t[e]||isNaN(t[e])?null:+t[e];return n.isCustomX()&&n.isCategorized()&&void 0!==c?(0===i&&0===o&&(a.axis_x_categories=[]),-1===(s=a.axis_x_categories.indexOf(c))&&(s=a.axis_x_categories.length,a.axis_x_categories.push(c))):s=n.generateTargetX(c,e,o),(void 0===t[e]||n.data.xs[e].length<=o)&&(s=void 0),{x:s,value:d,id:r}}).filter(function(t){return g(t.x)})}})).forEach(function(t){var e;a.data_xSort&&(t.values=t.values.sort(function(t,e){return(t.x||0===t.x?t.x:1/0)-(e.x||0===e.x?e.x:1/0)})),e=0,t.values.forEach(function(t){t.index=e++}),n.data.xs[t.id].sort(function(t,e){return t-e})}),n.hasNegativeValue=n.hasNegativeValueInTargets(i),n.hasPositiveValue=n.hasPositiveValueInTargets(i),a.data_type&&n.setTargetType(n.mapToIds(i).filter(function(t){return!(t in a.data_types)}),a.data_type),i.forEach(function(t){n.addCache(t.id_org,t)}),i},A.isX=function(t){var e=this.config;return e.data_x&&t===e.data_x||y(e.data_xs)&&S(e.data_xs,t)},A.isNotX=function(t){return!this.isX(t)},A.getXKey=function(t){var e=this.config;return e.data_x?e.data_x:y(e.data_xs)?e.data_xs[t]:null},A.getXValuesOfXKey=function(t,e){var i,n=this;return(e&&y(e)?n.mapToIds(e):[]).forEach(function(e){n.getXKey(e)===t&&(i=n.data.xs[e])}),i},A.getIndexByX=function(t){var e=this,i=e.filterByX(e.data.targets,t);return i.length?i[0].index:null},A.getXValue=function(t,e){var i=this;return t in i.data.xs&&i.data.xs[t]&&c(i.data.xs[t][e])?i.data.xs[t][e]:e},A.getOtherTargetXs=function(){var t=this,e=Object.keys(t.data.xs);return e.length?t.data.xs[e[0]]:null},A.getOtherTargetX=function(t){var e=this.getOtherTargetXs();return e&&t<e.length?e[t]:null},A.addXs=function(t){var e=this;Object.keys(t).forEach(function(i){e.config.data_xs[i]=t[i]})},A.hasMultipleX=function(t){return this.d3.set(Object.keys(t).map(function(e){return t[e]})).size()>1},A.isMultipleX=function(){return y(this.config.data_xs)||!this.config.data_xSort||this.hasType("scatter")},A.addName=function(t){var e,i=this;return t&&(e=i.config.data_names[t.id],t.name=void 0!==e?e:t.id),t},A.getValueOnIndex=function(t,e){var i=t.filter(function(t){return t.index===e});return i.length?i[0]:null},A.updateTargetX=function(t,e){var i=this;t.forEach(function(t){t.values.forEach(function(n,a){n.x=i.generateTargetX(e[a],t.id,a)}),i.data.xs[t.id]=e})},A.updateTargetXs=function(t,e){var i=this;t.forEach(function(t){e[t.id]&&i.updateTargetX([t],e[t.id])})},A.generateTargetX=function(t,e,i){var n=this;return n.isTimeSeries()?t?n.parseDate(t):n.parseDate(n.getXValue(e,i)):n.isCustomX()&&!n.isCategorized()?c(t)?+t:n.getXValue(e,i):i},A.cloneTarget=function(t){return{id:t.id,id_org:t.id_org,values:t.values.map(function(t){return{x:t.x,value:t.value,id:t.id}})}},A.updateXs=function(){var t=this;t.data.targets.length&&(t.xs=[],t.data.targets[0].values.forEach(function(e){t.xs[e.index]=e.x}))},A.getPrevX=function(t){var e=this.xs[t-1];return void 0!==e?e:null},A.getNextX=function(t){var e=this.xs[t+1];return void 0!==e?e:null},A.getMaxDataCount=function(){var t=this;return t.d3.max(t.data.targets,function(t){return t.values.length})},A.getMaxDataCountTarget=function(t){var e,i=t.length,n=0;return i>1?t.forEach(function(t){t.values.length>n&&(e=t,n=t.values.length)}):e=i?t[0]:null,e},A.getEdgeX=function(t){var e=this;return t.length?[e.d3.min(t,function(t){return t.values[0].x}),e.d3.max(t,function(t){return t.values[t.values.length-1].x})]:[0,0]},A.mapToIds=function(t){return t.map(function(t){return t.id})},A.mapToTargetIds=function(t){var e=this;return t?[].concat(t):e.mapToIds(e.data.targets)},A.hasTarget=function(t,e){var i,n=this.mapToIds(t);for(i=0;i<n.length;i++)if(n[i]===e)return!0;return!1},A.isTargetToShow=function(t){return this.hiddenTargetIds.indexOf(t)<0},A.isLegendToShow=function(t){return this.hiddenLegendIds.indexOf(t)<0},A.filterTargetsToShow=function(t){var e=this;return t.filter(function(t){return e.isTargetToShow(t.id)})},A.mapTargetsToUniqueXs=function(t){var e=this,i=e.d3.set(e.d3.merge(t.map(function(t){return t.values.map(function(t){return+t.x})}))).values();return(i=e.isTimeSeries()?i.map(function(t){return new Date(+t)}):i.map(function(t){return+t})).sort(function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN})},A.addHiddenTargetIds=function(t){t=t instanceof Array?t:new Array(t);for(var e=0;e<t.length;e++)this.hiddenTargetIds.indexOf(t[e])<0&&(this.hiddenTargetIds=this.hiddenTargetIds.concat(t[e]))},A.removeHiddenTargetIds=function(t){this.hiddenTargetIds=this.hiddenTargetIds.filter(function(e){return t.indexOf(e)<0})},A.addHiddenLegendIds=function(t){t=t instanceof Array?t:new Array(t);for(var e=0;e<t.length;e++)this.hiddenLegendIds.indexOf(t[e])<0&&(this.hiddenLegendIds=this.hiddenLegendIds.concat(t[e]))},A.removeHiddenLegendIds=function(t){this.hiddenLegendIds=this.hiddenLegendIds.filter(function(e){return t.indexOf(e)<0})},A.getValuesAsIdKeyed=function(t){var e={};return t.forEach(function(t){e[t.id]=[],t.values.forEach(function(i){e[t.id].push(i.value)})}),e},A.checkValueInTargets=function(t,e){var i,n,a,r=Object.keys(t);for(i=0;i<r.length;i++)for(a=t[r[i]].values,n=0;n<a.length;n++)if(e(a[n].value))return!0;return!1},A.hasNegativeValueInTargets=function(t){return this.checkValueInTargets(t,function(t){return t<0})},A.hasPositiveValueInTargets=function(t){return this.checkValueInTargets(t,function(t){return t>0})},A.isOrderDesc=function(){var t=this.config;return"string"==typeof t.data_order&&"desc"===t.data_order.toLowerCase()},A.isOrderAsc=function(){var t=this.config;return"string"==typeof t.data_order&&"asc"===t.data_order.toLowerCase()},A.orderTargets=function(t){var e=this,i=e.config,n=e.isOrderAsc(),a=e.isOrderDesc();return n||a?t.sort(function(t,e){var i=function(t,e){return t+Math.abs(e.value)},a=t.values.reduce(i,0),r=e.values.reduce(i,0);return n?r-a:a-r}):d(i.data_order)?t.sort(i.data_order):l(i.data_order)&&t.sort(function(t,e){return i.data_order.indexOf(t.id)-i.data_order.indexOf(e.id)}),t},A.filterByX=function(t,e){return this.d3.merge(t.map(function(t){return t.values})).filter(function(t){return t.x-e==0})},A.filterRemoveNull=function(t){return t.filter(function(t){return c(t.value)})},A.filterByXDomain=function(t,e){return t.map(function(t){return{id:t.id,id_org:t.id_org,values:t.values.filter(function(t){return e[0]<=t.x&&t.x<=e[1]})}})},A.hasDataLabel=function(){var t=this.config;return!("boolean"!=typeof t.data_labels||!t.data_labels)||!("object"!==s(t.data_labels)||!y(t.data_labels))},A.getDataLabelLength=function(t,e,i){var n=this,a=[0,0];return n.selectChart.select("svg").selectAll(".dummy").data([t,e]).enter().append("text").text(function(t){return n.dataLabelFormat(t.id)(t)}).each(function(t,e){a[e]=1.3*this.getBoundingClientRect()[i]}).remove(),a},A.isNoneArc=function(t){return this.hasTarget(this.data.targets,t.id)},A.isArc=function(t){return"data"in t&&this.hasTarget(this.data.targets,t.data.id)},A.findSameXOfValues=function(t,e){var i,n=t[e].x,a=[];for(i=e-1;i>=0&&n===t[i].x;i--)a.push(t[i]);for(i=e;i<t.length&&n===t[i].x;i++)a.push(t[i]);return a},A.findClosestFromTargets=function(t,e){var i,n=this;return i=t.map(function(t){return n.findClosest(t.values,e)}),n.findClosest(i,e)},A.findClosest=function(t,e){var i,n=this,a=n.config.point_sensitivity;return t.filter(function(t){return t&&n.isBarType(t.id)}).forEach(function(t){var e=n.main.select("."+o.bars+n.getTargetSelectorSuffix(t.id)+" ."+o.bar+"-"+t.index).node();!i&&n.isWithinBar(e)&&(i=t)}),t.filter(function(t){return t&&!n.isBarType(t.id)}).forEach(function(t){var r=n.dist(t,e);r<a&&(a=r,i=t)}),i},A.dist=function(t,e){var i=this,n=i.config,a=n.axis_rotated?1:0,r=n.axis_rotated?0:1,o=i.circleY(t,t.index),s=i.x(t.x);return Math.sqrt(Math.pow(s-e[a],2)+Math.pow(o-e[r],2))},A.convertValuesToStep=function(t){var e,i=[].concat(t);if(!this.isCategorized())return t;for(e=t.length+1;0<e;e--)i[e]=i[e-1];return i[0]={x:i[0].x-1,value:i[0].value,id:i[0].id},i[t.length+1]={x:i[t.length].x+1,value:i[t.length].value,id:i[t.length].id},i},A.updateDataAttributes=function(t,e){var i=this,n=i.config["data_"+t];return void 0===e?n:(Object.keys(e).forEach(function(t){n[t]=e[t]}),i.redraw({withLegend:!0}),n)},A.load=function(t,e){var i=this;t&&(e.filter&&(t=t.filter(e.filter)),(e.type||e.types)&&t.forEach(function(t){var n=e.types&&e.types[t.id]?e.types[t.id]:e.type;i.setTargetType(t.id,n)}),i.data.targets.forEach(function(e){for(var i=0;i<t.length;i++)if(e.id===t[i].id){e.values=t[i].values,t.splice(i,1);break}}),i.data.targets=i.data.targets.concat(t)),i.updateTargets(i.data.targets),i.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),e.done&&e.done()},A.loadFromArgs=function(t){var e=this;t.data?e.load(e.convertDataToTargets(t.data),t):t.url?e.convertUrlToData(t.url,t.mimeType,t.headers,t.keys,function(i){e.load(e.convertDataToTargets(i),t)}):t.json?e.load(e.convertDataToTargets(e.convertJsonToData(t.json,t.keys)),t):t.rows?e.load(e.convertDataToTargets(e.convertRowsToData(t.rows)),t):t.columns?e.load(e.convertDataToTargets(e.convertColumnsToData(t.columns)),t):e.load(null,t)},A.unload=function(t,e){var i=this;e||(e=function(){}),(t=t.filter(function(t){return i.hasTarget(i.data.targets,t)}))&&0!==t.length?(i.svg.selectAll(t.map(function(t){return i.selectorTarget(t)})).transition().style("opacity",0).remove().call(i.endall,e),t.forEach(function(t){i.withoutFadeIn[t]=!1,i.legend&&i.legend.selectAll("."+o.legendItem+i.getTargetSelectorSuffix(t)).remove(),i.data.targets=i.data.targets.filter(function(e){return e.id!==t})})):e()},A.getYDomainMin=function(t){var e,i,n,a,r,o,s=this,c=s.config,d=s.mapToIds(t),l=s.getValuesAsIdKeyed(t);if(c.data_groups.length>0)for(o=s.hasNegativeValueInTargets(t),e=0;e<c.data_groups.length;e++)if(0!==(a=c.data_groups[e].filter(function(t){return d.indexOf(t)>=0})).length)for(n=a[0],o&&l[n]&&l[n].forEach(function(t,e){l[n][e]=t<0?t:0}),i=1;i<a.length;i++)r=a[i],l[r]&&l[r].forEach(function(t,e){s.axis.getId(r)!==s.axis.getId(n)||!l[n]||o&&+t>0||(l[n][e]+=+t)});return s.d3.min(Object.keys(l).map(function(t){return s.d3.min(l[t])}))},A.getYDomainMax=function(t){var e,i,n,a,r,o,s=this,c=s.config,d=s.mapToIds(t),l=s.getValuesAsIdKeyed(t);if(c.data_groups.length>0)for(o=s.hasPositiveValueInTargets(t),e=0;e<c.data_groups.length;e++)if(0!==(a=c.data_groups[e].filter(function(t){return d.indexOf(t)>=0})).length)for(n=a[0],o&&l[n]&&l[n].forEach(function(t,e){l[n][e]=t>0?t:0}),i=1;i<a.length;i++)r=a[i],l[r]&&l[r].forEach(function(t,e){s.axis.getId(r)!==s.axis.getId(n)||!l[n]||o&&+t<0||(l[n][e]+=+t)});return s.d3.max(Object.keys(l).map(function(t){return s.d3.max(l[t])}))},A.getYDomain=function(t,e,i){var n,a,r,o,s,d,l,u,h,g,p=this,f=p.config,x=t.filter(function(t){return p.axis.getId(t.id)===e}),m=i?p.filterByXDomain(x,i):x,S="y2"===e?f.axis_y2_min:f.axis_y_min,w="y2"===e?f.axis_y2_max:f.axis_y_max,v=p.getYDomainMin(m),b=p.getYDomainMax(m),A="y2"===e?f.axis_y2_center:f.axis_y_center,T=p.hasType("bar",m)&&f.bar_zerobased||p.hasType("area",m)&&f.area_zerobased,P="y2"===e?f.axis_y2_inverted:f.axis_y_inverted,L=p.hasDataLabel()&&f.axis_rotated,C=p.hasDataLabel()&&!f.axis_rotated;return v=c(S)?S:c(w)?v<w?v:w-10:v,b=c(w)?w:c(S)?S<b?b:S+10:b,0===m.length?"y2"===e?p.y2.domain():p.y.domain():(isNaN(v)&&(v=0),isNaN(b)&&(b=v),v===b&&(v<0?b=0:v=0),h=v>=0&&b>=0,g=v<=0&&b<=0,(c(S)&&h||c(w)&&g)&&(T=!1),T&&(h&&(v=0),g&&(b=0)),a=Math.abs(b-v),r=o=.1*a,void 0!==A&&(b=A+(s=Math.max(Math.abs(v),Math.abs(b))),v=A-s),L?(d=p.getDataLabelLength(v,b,"width"),l=_(p.y.range()),r+=a*((u=[d[0]/l,d[1]/l])[1]/(1-u[0]-u[1])),o+=a*(u[0]/(1-u[0]-u[1]))):C&&(d=p.getDataLabelLength(v,b,"height"),r+=p.axis.convertPixelsToAxisPadding(d[1],a),o+=p.axis.convertPixelsToAxisPadding(d[0],a)),"y"===e&&y(f.axis_y_padding)&&(r=p.axis.getPadding(f.axis_y_padding,"top",r,a),o=p.axis.getPadding(f.axis_y_padding,"bottom",o,a)),"y2"===e&&y(f.axis_y2_padding)&&(r=p.axis.getPadding(f.axis_y2_padding,"top",r,a),o=p.axis.getPadding(f.axis_y2_padding,"bottom",o,a)),T&&(h&&(o=v),g&&(r=-b)),n=[v-o,b+r],P?n.reverse():n)},A.getXDomainMin=function(t){var e=this,i=e.config;return void 0!==i.axis_x_min?e.isTimeSeries()?this.parseDate(i.axis_x_min):i.axis_x_min:e.d3.min(t,function(t){return e.d3.min(t.values,function(t){return t.x})})},A.getXDomainMax=function(t){var e=this,i=e.config;return void 0!==i.axis_x_max?e.isTimeSeries()?this.parseDate(i.axis_x_max):i.axis_x_max:e.d3.max(t,function(t){return e.d3.max(t.values,function(t){return t.x})})},A.getXDomainPadding=function(t){var e,i,n,a,r=this,o=r.config,d=t[1]-t[0];return i=r.isCategorized()?0:r.hasType("bar")?(e=r.getMaxDataCount())>1?d/(e-1)/2:.5:.01*d,"object"===s(o.axis_x_padding)&&y(o.axis_x_padding)?(n=c(o.axis_x_padding.left)?o.axis_x_padding.left:i,a=c(o.axis_x_padding.right)?o.axis_x_padding.right:i):n=a="number"==typeof o.axis_x_padding?o.axis_x_padding:i,{left:n,right:a}},A.getXDomain=function(t){var e=this,i=[e.getXDomainMin(t),e.getXDomainMax(t)],n=i[0],a=i[1],r=e.getXDomainPadding(i),o=0,s=0;return n-a!=0||e.isCategorized()||(e.isTimeSeries()?(n=new Date(.5*n.getTime()),a=new Date(1.5*a.getTime())):(n=0===n?1:.5*n,a=0===a?-1:1.5*a)),(n||0===n)&&(o=e.isTimeSeries()?new Date(n.getTime()-r.left):n-r.left),(a||0===a)&&(s=e.isTimeSeries()?new Date(a.getTime()+r.right):a+r.right),[o,s]},A.updateXDomain=function(t,e,i,n,a){var r=this,o=r.config;return i&&(r.x.domain(a||r.d3.extent(r.getXDomain(t))),r.orgXDomain=r.x.domain(),o.zoom_enabled&&r.zoom.scale(r.x).updateScaleExtent(),r.subX.domain(r.x.domain()),r.brush&&r.brush.scale(r.subX)),e&&(r.x.domain(a||(!r.brush||r.brush.empty()?r.orgXDomain:r.brush.extent())),o.zoom_enabled&&r.zoom.scale(r.x).updateScaleExtent()),n&&r.x.domain(r.trimXDomain(r.x.orgDomain())),r.x.domain()},A.trimXDomain=function(t){var e=this.getZoomDomain(),i=e[0],n=e[1];return t[0]<=i&&(t[1]=+t[1]+(i-t[0]),t[0]=i),n<=t[1]&&(t[0]=+t[0]-(t[1]-n),t[1]=n),t},A.drag=function(t){var e,i,n,a,r,s,c,d,l=this,u=l.config,h=l.main,g=l.d3;l.hasArcType()||u.data_selection_enabled&&(u.zoom_enabled&&!l.zoom.altDomain||u.data_selection_multiple&&(e=l.dragStart[0],i=l.dragStart[1],n=t[0],a=t[1],r=Math.min(e,n),s=Math.max(e,n),c=u.data_selection_grouped?l.margin.top:Math.min(i,a),d=u.data_selection_grouped?l.height:Math.max(i,a),h.select("."+o.dragarea).attr("x",r).attr("y",c).attr("width",s-r).attr("height",d-c),h.selectAll("."+o.shapes).selectAll("."+o.shape).filter(function(t){return u.data_selection_isselectable(t)}).each(function(t,e){var i,n,a,u,h,p,f=g.select(this),_=f.classed(o.SELECTED),x=f.classed(o.INCLUDED),y=!1;if(f.classed(o.circle))i=1*f.attr("cx"),n=1*f.attr("cy"),h=l.togglePoint,y=r<i&&i<s&&c<n&&n<d;else{if(!f.classed(o.bar))return;i=(p=v(this)).x,n=p.y,a=p.width,u=p.height,h=l.togglePath,y=!(s<i||i+a<r||d<n||n+u<c)}y^x&&(f.classed(o.INCLUDED,!x),f.classed(o.SELECTED,!_),h.call(l,!_,f,t,e))})))},A.dragstart=function(t){var e=this,i=e.config;e.hasArcType()||i.data_selection_enabled&&(e.dragStart=t,e.main.select("."+o.chart).append("rect").attr("class",o.dragarea).style("opacity",.1),e.dragging=!0)},A.dragend=function(){var t=this,e=t.config;t.hasArcType()||e.data_selection_enabled&&(t.main.select("."+o.dragarea).transition().duration(100).style("opacity",0).remove(),t.main.selectAll("."+o.shape).classed(o.INCLUDED,!1),t.dragging=!1)},A.getYFormat=function(t){var e=this,i=t&&!e.hasType("gauge")?e.defaultArcValueFormat:e.yFormat,n=t&&!e.hasType("gauge")?e.defaultArcValueFormat:e.y2Format;return function(t,a,r){return("y2"===e.axis.getId(r)?n:i).call(e,t,a)}},A.yFormat=function(t){var e=this,i=e.config;return(i.axis_y_tick_format?i.axis_y_tick_format:e.defaultValueFormat)(t)},A.y2Format=function(t){var e=this,i=e.config;return(i.axis_y2_tick_format?i.axis_y2_tick_format:e.defaultValueFormat)(t)},A.defaultValueFormat=function(t){return c(t)?+t:""},A.defaultArcValueFormat=function(t,e){return(100*e).toFixed(1)+"%"},A.dataLabelFormat=function(t){var e=this.config.data_labels,i=function(t){return c(t)?+t:""};return"function"==typeof e.format?e.format:"object"===s(e.format)?e.format[t]?!0===e.format[t]?i:e.format[t]:function(){return""}:i},A.initGrid=function(){var t=this,e=t.config,i=t.d3;t.grid=t.main.append("g").attr("clip-path",t.clipPathForGrid).attr("class",o.grid),e.grid_x_show&&t.grid.append("g").attr("class",o.xgrids),e.grid_y_show&&t.grid.append("g").attr("class",o.ygrids),e.grid_focus_show&&t.grid.append("g").attr("class",o.xgridFocus).append("line").attr("class",o.xgridFocus),t.xgrid=i.selectAll([]),e.grid_lines_front||t.initGridLines()},A.initGridLines=function(){var t=this,e=t.d3;t.gridLines=t.main.append("g").attr("clip-path",t.clipPathForGrid).attr("class",o.grid+" "+o.gridLines),t.gridLines.append("g").attr("class",o.xgridLines),t.gridLines.append("g").attr("class",o.ygridLines),t.xgridLines=e.selectAll([])},A.updateXGrid=function(t){var e=this,i=e.config,n=e.d3,a=e.generateGridData(i.grid_x_type,e.x),r=e.isCategorized()?e.xAxis.tickOffset():0;e.xgridAttr=i.axis_rotated?{x1:0,x2:e.width,y1:function(t){return e.x(t)-r},y2:function(t){return e.x(t)-r}}:{x1:function(t){return e.x(t)+r},x2:function(t){return e.x(t)+r},y1:0,y2:e.height},e.xgrid=e.main.select("."+o.xgrids).selectAll("."+o.xgrid).data(a),e.xgrid.enter().append("line").attr("class",o.xgrid),t||e.xgrid.attr(e.xgridAttr).style("opacity",function(){return+n.select(this).attr(i.axis_rotated?"y1":"x1")===(i.axis_rotated?e.height:0)?0:1}),e.xgrid.exit().remove()},A.updateYGrid=function(){var t=this,e=t.config,i=t.yAxis.tickValues()||t.y.ticks(e.grid_y_ticks);t.ygrid=t.main.select("."+o.ygrids).selectAll("."+o.ygrid).data(i),t.ygrid.enter().append("line").attr("class",o.ygrid),t.ygrid.attr("x1",e.axis_rotated?t.y:0).attr("x2",e.axis_rotated?t.y:t.width).attr("y1",e.axis_rotated?0:t.y).attr("y2",e.axis_rotated?t.height:t.y),t.ygrid.exit().remove(),t.smoothLines(t.ygrid,"grid")},A.gridTextAnchor=function(t){return t.position?t.position:"end"},A.gridTextDx=function(t){return"start"===t.position?4:"middle"===t.position?0:-4},A.xGridTextX=function(t){return"start"===t.position?-this.height:"middle"===t.position?-this.height/2:0},A.yGridTextX=function(t){return"start"===t.position?0:"middle"===t.position?this.width/2:this.width},A.updateGrid=function(t){var e,i,n,a=this,r=a.main,s=a.config;a.grid.style("visibility",a.hasArcType()?"hidden":"visible"),r.select("line."+o.xgridFocus).style("visibility","hidden"),s.grid_x_show&&a.updateXGrid(),a.xgridLines=r.select("."+o.xgridLines).selectAll("."+o.xgridLine).data(s.grid_x_lines),(e=a.xgridLines.enter().append("g").attr("class",function(t){return o.xgridLine+(t.class?" "+t.class:"")})).append("line").style("opacity",0),e.append("text").attr("text-anchor",a.gridTextAnchor).attr("transform",s.axis_rotated?"":"rotate(-90)").attr("dx",a.gridTextDx).attr("dy",-5).style("opacity",0),a.xgridLines.exit().transition().duration(t).style("opacity",0).remove(),s.grid_y_show&&a.updateYGrid(),a.ygridLines=r.select("."+o.ygridLines).selectAll("."+o.ygridLine).data(s.grid_y_lines),(i=a.ygridLines.enter().append("g").attr("class",function(t){return o.ygridLine+(t.class?" "+t.class:"")})).append("line").style("opacity",0),i.append("text").attr("text-anchor",a.gridTextAnchor).attr("transform",s.axis_rotated?"rotate(-90)":"").attr("dx",a.gridTextDx).attr("dy",-5).style("opacity",0),n=a.yv.bind(a),a.ygridLines.select("line").transition().duration(t).attr("x1",s.axis_rotated?n:0).attr("x2",s.axis_rotated?n:a.width).attr("y1",s.axis_rotated?0:n).attr("y2",s.axis_rotated?a.height:n).style("opacity",1),a.ygridLines.select("text").transition().duration(t).attr("x",s.axis_rotated?a.xGridTextX.bind(a):a.yGridTextX.bind(a)).attr("y",n).text(function(t){return t.text}).style("opacity",1),a.ygridLines.exit().transition().duration(t).style("opacity",0).remove()},A.redrawGrid=function(t){var e=this,i=e.config,n=e.xv.bind(e),a=e.xgridLines.select("line"),r=e.xgridLines.select("text");return[(t?a.transition():a).attr("x1",i.axis_rotated?0:n).attr("x2",i.axis_rotated?e.width:n).attr("y1",i.axis_rotated?n:0).attr("y2",i.axis_rotated?n:e.height).style("opacity",1),(t?r.transition():r).attr("x",i.axis_rotated?e.yGridTextX.bind(e):e.xGridTextX.bind(e)).attr("y",n).text(function(t){return t.text}).style("opacity",1)]},A.showXGridFocus=function(t){var e=this,i=e.config,n=t.filter(function(t){return t&&c(t.value)}),a=e.main.selectAll("line."+o.xgridFocus),r=e.xx.bind(e);i.tooltip_show&&(e.hasType("scatter")||e.hasArcType()||(a.style("visibility","visible").data([n[0]]).attr(i.axis_rotated?"y1":"x1",r).attr(i.axis_rotated?"y2":"x2",r),e.smoothLines(a,"grid")))},A.hideXGridFocus=function(){this.main.select("line."+o.xgridFocus).style("visibility","hidden")},A.updateXgridFocus=function(){var t=this,e=t.config;t.main.select("line."+o.xgridFocus).attr("x1",e.axis_rotated?0:-10).attr("x2",e.axis_rotated?t.width:-10).attr("y1",e.axis_rotated?-10:0).attr("y2",e.axis_rotated?-10:t.height)},A.generateGridData=function(t,e){var i,n,a,r,s=this,c=[],d=s.main.select("."+o.axisX).selectAll(".tick").size();if("year"===t)for(n=(i=s.getXDomain())[0].getFullYear(),a=i[1].getFullYear(),r=n;r<=a;r++)c.push(new Date(r+"-01-01 00:00:00"));else(c=e.ticks(10)).length>d&&(c=c.filter(function(t){return(""+t).indexOf(".")<0}));return c},A.getGridFilterToRemove=function(t){return t?function(e){var i=!1;return[].concat(t).forEach(function(t){("value"in t&&e.value===t.value||"class"in t&&e.class===t.class)&&(i=!0)}),i}:function(){return!0}},A.removeGridLines=function(t,e){var i=this,n=i.config,a=i.getGridFilterToRemove(t),r=function(t){return!a(t)},s=e?o.xgridLines:o.ygridLines,c=e?o.xgridLine:o.ygridLine;i.main.select("."+s).selectAll("."+c).filter(a).transition().duration(n.transition_duration).style("opacity",0).remove(),e?n.grid_x_lines=n.grid_x_lines.filter(r):n.grid_y_lines=n.grid_y_lines.filter(r)},A.initEventRect=function(){this.main.select("."+o.chart).append("g").attr("class",o.eventRects).style("fill-opacity",0)},A.redrawEventRect=function(){var t,e,i=this,n=i.config,a=i.isMultipleX(),r=i.main.select("."+o.eventRects).style("cursor",n.zoom_enabled?n.axis_rotated?"ns-resize":"ew-resize":null).classed(o.eventRectsMultiple,a).classed(o.eventRectsSingle,!a);r.selectAll("."+o.eventRect).remove(),i.eventRect=r.selectAll("."+o.eventRect),a?(t=i.eventRect.data([0]),i.generateEventRectsForMultipleXs(t.enter()),i.updateEventRect(t)):(e=i.getMaxDataCountTarget(i.data.targets),r.datum(e?e.values:[]),i.eventRect=r.selectAll("."+o.eventRect),t=i.eventRect.data(function(t){return t}),i.generateEventRectsForSingleX(t.enter()),i.updateEventRect(t),t.exit().remove())},A.updateEventRect=function(t){var e,i,n,a,r,o,s=this,c=s.config;t=t||s.eventRect.data(function(t){return t}),s.isMultipleX()?(e=0,i=0,n=s.width,a=s.height):(!s.isCustomX()&&!s.isTimeSeries()||s.isCategorized()?(r=s.getEventRectWidth(),o=function(t){return s.x(t.x)-r/2}):(s.updateXs(),r=function(t){var e=s.getPrevX(t.index),i=s.getNextX(t.index);return null===e&&null===i?c.axis_rotated?s.height:s.width:(null===e&&(e=s.x.domain()[0]),null===i&&(i=s.x.domain()[1]),Math.max(0,(s.x(i)-s.x(e))/2))},o=function(t){var e=s.getPrevX(t.index),i=s.getNextX(t.index),n=s.data.xs[t.id][t.index];return null===e&&null===i?0:(null===e&&(e=s.x.domain()[0]),(s.x(n)+s.x(e))/2)}),e=c.axis_rotated?0:o,i=c.axis_rotated?o:0,n=c.axis_rotated?s.width:r,a=c.axis_rotated?r:s.height),t.attr("class",s.classEvent.bind(s)).attr("x",e).attr("y",i).attr("width",n).attr("height",a)},A.generateEventRectsForSingleX=function(t){var e=this,i=e.d3,n=e.config;t.append("rect").attr("class",e.classEvent.bind(e)).style("cursor",n.data_selection_enabled&&n.data_selection_grouped?"pointer":null).on("mouseover",function(t){var i=t.index;e.dragging||e.flowing||e.hasArcType()||(n.point_focus_expand_enabled&&e.expandCircles(i,null,!0),e.expandBars(i,null,!0),e.main.selectAll("."+o.shape+"-"+i).each(function(t){n.data_onmouseover.call(e.api,t)}))}).on("mouseout",function(t){var i=t.index;e.config&&(e.hasArcType()||(e.hideXGridFocus(),e.hideTooltip(),e.unexpandCircles(),e.unexpandBars(),e.main.selectAll("."+o.shape+"-"+i).each(function(t){n.data_onmouseout.call(e.api,t)})))}).on("mousemove",function(t){var a,r=t.index,s=e.svg.select("."+o.eventRect+"-"+r);e.dragging||e.flowing||e.hasArcType()||(e.isStepType(t)&&"step-after"===e.config.line_step_type&&i.mouse(this)[0]<e.x(e.getXValue(t.id,r))&&(r-=1),a=e.filterTargetsToShow(e.data.targets).map(function(t){return e.addName(e.getValueOnIndex(t.values,r))}),n.tooltip_grouped&&(e.showTooltip(a,this),e.showXGridFocus(a)),(!n.tooltip_grouped||n.data_selection_enabled&&!n.data_selection_grouped)&&e.main.selectAll("."+o.shape+"-"+r).each(function(){i.select(this).classed(o.EXPANDED,!0),n.data_selection_enabled&&s.style("cursor",n.data_selection_grouped?"pointer":null),n.tooltip_grouped||(e.hideXGridFocus(),e.hideTooltip(),n.data_selection_grouped||(e.unexpandCircles(r),e.unexpandBars(r)))}).filter(function(t){return e.isWithinShape(this,t)}).each(function(t){n.data_selection_enabled&&(n.data_selection_grouped||n.data_selection_isselectable(t))&&s.style("cursor","pointer"),n.tooltip_grouped||(e.showTooltip([t],this),e.showXGridFocus([t]),n.point_focus_expand_enabled&&e.expandCircles(r,t.id,!0),e.expandBars(r,t.id,!0))}))}).on("click",function(t){var a=t.index;!e.hasArcType()&&e.toggleShape&&(e.cancelClick?e.cancelClick=!1:(e.isStepType(t)&&"step-after"===n.line_step_type&&i.mouse(this)[0]<e.x(e.getXValue(t.id,a))&&(a-=1),e.main.selectAll("."+o.shape+"-"+a).each(function(t){(n.data_selection_grouped||e.isWithinShape(this,t))&&(e.toggleShape(this,t,a),e.config.data_onclick.call(e.api,t,this))})))}).call(n.data_selection_draggable&&e.drag?i.behavior.drag().origin(Object).on("drag",function(){e.drag(i.mouse(this))}).on("dragstart",function(){e.dragstart(i.mouse(this))}).on("dragend",function(){e.dragend()}):function(){})},A.generateEventRectsForMultipleXs=function(t){function e(){i.svg.select("."+o.eventRect).style("cursor",null),i.hideXGridFocus(),i.hideTooltip(),i.unexpandCircles(),i.unexpandBars()}var i=this,n=i.d3,a=i.config;t.append("rect").attr("x",0).attr("y",0).attr("width",i.width).attr("height",i.height).attr("class",o.eventRect).on("mouseout",function(){i.config&&(i.hasArcType()||e())}).on("mousemove",function(){var t,r,s,c=i.filterTargetsToShow(i.data.targets);i.dragging||i.hasArcType(c)||(t=n.mouse(this),r=i.findClosestFromTargets(c,t),!i.mouseover||r&&r.id===i.mouseover.id||(a.data_onmouseout.call(i.api,i.mouseover),i.mouseover=void 0),r?(s=(i.isScatterType(r)||!a.tooltip_grouped?[r]:i.filterByX(c,r.x)).map(function(t){return i.addName(t)}),i.showTooltip(s,this),a.point_focus_expand_enabled&&i.expandCircles(r.index,r.id,!0),i.expandBars(r.index,r.id,!0),i.showXGridFocus(s),(i.isBarType(r.id)||i.dist(r,t)<a.point_sensitivity)&&(i.svg.select("."+o.eventRect).style("cursor","pointer"),i.mouseover||(a.data_onmouseover.call(i.api,r),i.mouseover=r))):e())}).on("click",function(){var t,e,r=i.filterTargetsToShow(i.data.targets);i.hasArcType(r)||(t=n.mouse(this),(e=i.findClosestFromTargets(r,t))&&(i.isBarType(e.id)||i.dist(e,t)<a.point_sensitivity)&&i.main.selectAll("."+o.shapes+i.getTargetSelectorSuffix(e.id)).selectAll("."+o.shape+"-"+e.index).each(function(){(a.data_selection_grouped||i.isWithinShape(this,e))&&(i.toggleShape(this,e,e.index),i.config.data_onclick.call(i.api,e,this))}))}).call(a.data_selection_draggable&&i.drag?n.behavior.drag().origin(Object).on("drag",function(){i.drag(n.mouse(this))}).on("dragstart",function(){i.dragstart(n.mouse(this))}).on("dragend",function(){i.dragend()}):function(){})},A.dispatchEvent=function(t,e,i){var n=this,a="."+o.eventRect+(n.isMultipleX()?"":"-"+e),r=n.main.select(a).node(),s=r.getBoundingClientRect(),c=s.left+(i?i[0]:0),d=s.top+(i?i[1]:0),l=document.createEvent("MouseEvents");l.initMouseEvent(t,!0,!0,window,0,c,d,c,d,!1,!1,!1,!1,0,null),r.dispatchEvent(l)},A.initLegend=function(){var t=this;if(t.legendItemTextBox={},t.legendHasRendered=!1,t.legend=t.svg.append("g").attr("transform",t.getTranslate("legend")),!t.config.legend_show)return t.legend.style("visibility","hidden"),void(t.hiddenLegendIds=t.mapToIds(t.data.targets));t.updateLegendWithDefaults()},A.updateLegendWithDefaults=function(){var t=this;t.updateLegend(t.mapToIds(t.data.targets),{withTransform:!1,withTransitionForTransform:!1,withTransition:!1})},A.updateSizeForLegend=function(t,e){var i=this,n=i.config,a={top:i.isLegendTop?i.getCurrentPaddingTop()+n.legend_inset_y+5.5:i.currentHeight-t-i.getCurrentPaddingBottom()-n.legend_inset_y,left:i.isLegendLeft?i.getCurrentPaddingLeft()+n.legend_inset_x+.5:i.currentWidth-e-i.getCurrentPaddingRight()-n.legend_inset_x+.5};i.margin3={top:i.isLegendRight?0:i.isLegendInset?a.top:i.currentHeight-t,right:NaN,bottom:0,left:i.isLegendRight?i.currentWidth-e:i.isLegendInset?a.left:0}},A.transformLegend=function(t){var e=this;(t?e.legend.transition():e.legend).attr("transform",e.getTranslate("legend"))},A.updateLegendStep=function(t){this.legendStep=t},A.updateLegendItemWidth=function(t){this.legendItemWidth=t},A.updateLegendItemHeight=function(t){this.legendItemHeight=t},A.getLegendWidth=function(){var t=this;return t.config.legend_show?t.isLegendRight||t.isLegendInset?t.legendItemWidth*(t.legendStep+1):t.currentWidth:0},A.getLegendHeight=function(){var t=this,e=0;return t.config.legend_show&&(e=t.isLegendRight?t.currentHeight:Math.max(20,t.legendItemHeight)*(t.legendStep+1)),e},A.opacityForLegend=function(t){return t.classed(o.legendItemHidden)?null:1},A.opacityForUnfocusedLegend=function(t){return t.classed(o.legendItemHidden)?null:.3},A.toggleFocusLegend=function(t,e){var i=this;t=i.mapToTargetIds(t),i.legend.selectAll("."+o.legendItem).filter(function(e){return t.indexOf(e)>=0}).classed(o.legendItemFocused,e).transition().duration(100).style("opacity",function(){return(e?i.opacityForLegend:i.opacityForUnfocusedLegend).call(i,i.d3.select(this))})},A.revertLegend=function(){var t=this,e=t.d3;t.legend.selectAll("."+o.legendItem).classed(o.legendItemFocused,!1).transition().duration(100).style("opacity",function(){return t.opacityForLegend(e.select(this))})},A.showLegend=function(t){var e=this,i=e.config;i.legend_show||(i.legend_show=!0,e.legend.style("visibility","visible"),e.legendHasRendered||e.updateLegendWithDefaults()),e.removeHiddenLegendIds(t),e.legend.selectAll(e.selectorLegends(t)).style("visibility","visible").transition().style("opacity",function(){return e.opacityForLegend(e.d3.select(this))})},A.hideLegend=function(t){var e=this,i=e.config;i.legend_show&&x(t)&&(i.legend_show=!1,e.legend.style("visibility","hidden")),e.addHiddenLegendIds(t),e.legend.selectAll(e.selectorLegends(t)).style("opacity",0).style("visibility","hidden")},A.clearLegendItemTextBoxCache=function(){this.legendItemTextBox={}},A.updateLegend=function(t,e,i){function n(t,e){return b.legendItemTextBox[e]||(b.legendItemTextBox[e]=b.getTextRect(t.textContent,o.legendItem,t)),b.legendItemTextBox[e]}function a(e,i,a){function r(t,e){e||(o=(p-E-g)/2)<V&&(o=(p-g)/2,E=0,X++),F[t]=X,D[X]=b.isLegendInset?10:o,I[t]=E,E+=g}var o,s,c=0===a,d=a===t.length-1,l=n(e,i),u=l.width+G+(!d||b.isLegendRight||b.isLegendInset?P:0)+A.legend_padding,h=l.height+T,g=b.isLegendRight||b.isLegendInset?h:u,p=b.isLegendRight||b.isLegendInset?b.getLegendHeight():b.getLegendWidth();c&&(E=0,X=0,L=0,C=0),!A.legend_show||b.isLegendToShow(i)?(O[i]=u,R[i]=h,(!L||u>=L)&&(L=u),(!C||h>=C)&&(C=h),s=b.isLegendRight||b.isLegendInset?C:L,A.legend_equally?(Object.keys(O).forEach(function(t){O[t]=L}),Object.keys(R).forEach(function(t){R[t]=C}),(o=(p-s*t.length)/2)<V?(E=0,X=0,t.forEach(function(t){r(t)})):r(i,!0)):r(i)):O[i]=R[i]=F[i]=I[i]=0}var r,s,c,d,l,u,h,g,p,f,_,x,y,S,w,v,b=this,A=b.config,T=4,P=10,L=0,C=0,V=10,G=A.legend_item_tile_width+5,E=0,I={},O={},R={},D=[0],F={},X=0;t=t.filter(function(t){return!(void 0!==A.data_names[t])||null!==A.data_names[t]}),_=m(e=e||{},"withTransition",!0),x=m(e,"withTransitionForTransform",!0),b.isLegendInset&&(X=A.legend_inset_step?A.legend_inset_step:t.length,b.updateLegendStep(X)),b.isLegendRight?(r=function(t){return L*F[t]},d=function(t){return D[F[t]]+I[t]}):b.isLegendInset?(r=function(t){return L*F[t]+10},d=function(t){return D[F[t]]+I[t]}):(r=function(t){return D[F[t]]+I[t]},d=function(t){return C*F[t]}),s=function(t,e){return r(t,e)+4+A.legend_item_tile_width},l=function(t,e){return d(t,e)+9},c=function(t,e){return r(t,e)},u=function(t,e){return d(t,e)-5},h=function(t,e){return r(t,e)-2},g=function(t,e){return r(t,e)-2+A.legend_item_tile_width},p=function(t,e){return d(t,e)+4},(f=b.legend.selectAll("."+o.legendItem).data(t).enter().append("g").attr("class",function(t){return b.generateClass(o.legendItem,t)}).style("visibility",function(t){return b.isLegendToShow(t)?"visible":"hidden"}).style("cursor","pointer").on("click",function(t){A.legend_item_onclick?A.legend_item_onclick.call(b,t):b.d3.event.altKey?(b.api.hide(),b.api.show(t)):(b.api.toggle(t),b.isTargetToShow(t)?b.api.focus(t):b.api.revert())}).on("mouseover",function(t){A.legend_item_onmouseover?A.legend_item_onmouseover.call(b,t):(b.d3.select(this).classed(o.legendItemFocused,!0),!b.transiting&&b.isTargetToShow(t)&&b.api.focus(t))}).on("mouseout",function(t){A.legend_item_onmouseout?A.legend_item_onmouseout.call(b,t):(b.d3.select(this).classed(o.legendItemFocused,!1),b.api.revert())})).append("text").text(function(t){return void 0!==A.data_names[t]?A.data_names[t]:t}).each(function(t,e){a(this,t,e)}).style("pointer-events","none").attr("x",b.isLegendRight||b.isLegendInset?s:-200).attr("y",b.isLegendRight||b.isLegendInset?-200:l),f.append("rect").attr("class",o.legendItemEvent).style("fill-opacity",0).attr("x",b.isLegendRight||b.isLegendInset?c:-200).attr("y",b.isLegendRight||b.isLegendInset?-200:u),f.append("line").attr("class",o.legendItemTile).style("stroke",b.color).style("pointer-events","none").attr("x1",b.isLegendRight||b.isLegendInset?h:-200).attr("y1",b.isLegendRight||b.isLegendInset?-200:p).attr("x2",b.isLegendRight||b.isLegendInset?g:-200).attr("y2",b.isLegendRight||b.isLegendInset?-200:p).attr("stroke-width",A.legend_item_tile_height),v=b.legend.select("."+o.legendBackground+" rect"),b.isLegendInset&&L>0&&0===v.size()&&(v=b.legend.insert("g","."+o.legendItem).attr("class",o.legendBackground).append("rect")),y=b.legend.selectAll("text").data(t).text(function(t){return void 0!==A.data_names[t]?A.data_names[t]:t}).each(function(t,e){a(this,t,e)}),(_?y.transition():y).attr("x",s).attr("y",l),S=b.legend.selectAll("rect."+o.legendItemEvent).data(t),(_?S.transition():S).attr("width",function(t){return O[t]}).attr("height",function(t){return R[t]}).attr("x",c).attr("y",u),w=b.legend.selectAll("line."+o.legendItemTile).data(t),(_?w.transition():w).style("stroke",b.color).attr("x1",h).attr("y1",p).attr("x2",g).attr("y2",p),v&&(_?v.transition():v).attr("height",b.getLegendHeight()-12).attr("width",L*(X+1)+10),b.legend.selectAll("."+o.legendItem).classed(o.legendItemHidden,function(t){return!b.isTargetToShow(t)}),b.updateLegendItemWidth(L),b.updateLegendItemHeight(C),b.updateLegendStep(X),b.updateSizes(),b.updateScales(),b.updateSvgSize(),b.transformAll(x,i),b.legendHasRendered=!0},A.initRegion=function(){var t=this;t.region=t.main.append("g").attr("clip-path",t.clipPath).attr("class",o.regions)},A.updateRegion=function(t){var e=this,i=e.config;e.region.style("visibility",e.hasArcType()?"hidden":"visible"),e.mainRegion=e.main.select("."+o.regions).selectAll("."+o.region).data(i.regions),e.mainRegion.enter().append("g").append("rect").style("fill-opacity",0),e.mainRegion.attr("class",e.classRegion.bind(e)),e.mainRegion.exit().transition().duration(t).style("opacity",0).remove()},A.redrawRegion=function(t){var e=this,i=e.mainRegion.selectAll("rect").each(function(){var t=e.d3.select(this.parentNode).datum();e.d3.select(this).datum(t)}),n=e.regionX.bind(e),a=e.regionY.bind(e),r=e.regionWidth.bind(e),o=e.regionHeight.bind(e);return[(t?i.transition():i).attr("x",n).attr("y",a).attr("width",r).attr("height",o).style("fill-opacity",function(t){return c(t.opacity)?t.opacity:.1})]},A.regionX=function(t){var e=this,i=e.config,n="y"===t.axis?e.y:e.y2;return"y"===t.axis||"y2"===t.axis?i.axis_rotated&&"start"in t?n(t.start):0:i.axis_rotated?0:"start"in t?e.x(e.isTimeSeries()?e.parseDate(t.start):t.start):0},A.regionY=function(t){var e=this,i=e.config,n="y"===t.axis?e.y:e.y2;return"y"===t.axis||"y2"===t.axis?i.axis_rotated?0:"end"in t?n(t.end):0:i.axis_rotated&&"start"in t?e.x(e.isTimeSeries()?e.parseDate(t.start):t.start):0},A.regionWidth=function(t){var e,i=this,n=i.config,a=i.regionX(t),r="y"===t.axis?i.y:i.y2;return e="y"===t.axis||"y2"===t.axis?n.axis_rotated&&"end"in t?r(t.end):i.width:n.axis_rotated?i.width:"end"in t?i.x(i.isTimeSeries()?i.parseDate(t.end):t.end):i.width,e<a?0:e-a},A.regionHeight=function(t){var e,i=this,n=i.config,a=this.regionY(t),r="y"===t.axis?i.y:i.y2;return e="y"===t.axis||"y2"===t.axis?n.axis_rotated?i.height:"start"in t?r(t.start):i.height:n.axis_rotated&&"end"in t?i.x(i.isTimeSeries()?i.parseDate(t.end):t.end):i.height,e<a?0:e-a},A.isRegionOnX=function(t){return!t.axis||"x"===t.axis},A.getScale=function(t,e,i){return(i?this.d3.time.scale():this.d3.scale.linear()).range([t,e])},A.getX=function(t,e,i,n){var a,r=this,o=r.getScale(t,e,r.isTimeSeries()),s=i?o.domain(i):o;r.isCategorized()?(n=n||function(){return 0},o=function(t,e){var i=s(t)+n(t);return e?i:Math.ceil(i)}):o=function(t,e){var i=s(t);return e?i:Math.ceil(i)};for(a in s)o[a]=s[a];return o.orgDomain=function(){return s.domain()},r.isCategorized()&&(o.domain=function(t){return arguments.length?(s.domain(t),o):(t=this.orgDomain(),[t[0],t[1]+1])}),o},A.getY=function(t,e,i){var n=this.getScale(t,e,this.isTimeSeriesY());return i&&n.domain(i),n},A.getYScale=function(t){return"y2"===this.axis.getId(t)?this.y2:this.y},A.getSubYScale=function(t){return"y2"===this.axis.getId(t)?this.subY2:this.subY},A.updateScales=function(){var t=this,e=t.config,i=!t.x;t.xMin=e.axis_rotated?1:0,t.xMax=e.axis_rotated?t.height:t.width,t.yMin=e.axis_rotated?0:t.height,t.yMax=e.axis_rotated?t.width:1,t.subXMin=t.xMin,t.subXMax=t.xMax,t.subYMin=e.axis_rotated?0:t.height2,t.subYMax=e.axis_rotated?t.width2:1,t.x=t.getX(t.xMin,t.xMax,i?void 0:t.x.orgDomain(),function(){return t.xAxis.tickOffset()}),t.y=t.getY(t.yMin,t.yMax,i?e.axis_y_default:t.y.domain()),t.y2=t.getY(t.yMin,t.yMax,i?e.axis_y2_default:t.y2.domain()),t.subX=t.getX(t.xMin,t.xMax,t.orgXDomain,function(e){return e%1?0:t.subXAxis.tickOffset()}),t.subY=t.getY(t.subYMin,t.subYMax,i?e.axis_y_default:t.subY.domain()),t.subY2=t.getY(t.subYMin,t.subYMax,i?e.axis_y2_default:t.subY2.domain()),t.xAxisTickFormat=t.axis.getXAxisTickFormat(),t.xAxisTickValues=t.axis.getXAxisTickValues(),t.yAxisTickValues=t.axis.getYAxisTickValues(),t.y2AxisTickValues=t.axis.getY2AxisTickValues(),t.xAxis=t.axis.getXAxis(t.x,t.xOrient,t.xAxisTickFormat,t.xAxisTickValues,e.axis_x_tick_outer),t.subXAxis=t.axis.getXAxis(t.subX,t.subXOrient,t.xAxisTickFormat,t.xAxisTickValues,e.axis_x_tick_outer),t.yAxis=t.axis.getYAxis(t.y,t.yOrient,e.axis_y_tick_format,t.yAxisTickValues,e.axis_y_tick_outer),t.y2Axis=t.axis.getYAxis(t.y2,t.y2Orient,e.axis_y2_tick_format,t.y2AxisTickValues,e.axis_y2_tick_outer),i||(t.brush&&t.brush.scale(t.subX),e.zoom_enabled&&t.zoom.scale(t.x)),t.updateArc&&t.updateArc()},A.selectPoint=function(t,e,i){var n=this,a=n.config,r=(a.axis_rotated?n.circleY:n.circleX).bind(n),s=(a.axis_rotated?n.circleX:n.circleY).bind(n),c=n.pointSelectR.bind(n);a.data_onselected.call(n.api,e,t.node()),n.main.select("."+o.selectedCircles+n.getTargetSelectorSuffix(e.id)).selectAll("."+o.selectedCircle+"-"+i).data([e]).enter().append("circle").attr("class",function(){return n.generateClass(o.selectedCircle,i)}).attr("cx",r).attr("cy",s).attr("stroke",function(){return n.color(e)}).attr("r",function(t){return 1.4*n.pointSelectR(t)}).transition().duration(100).attr("r",c)},A.unselectPoint=function(t,e,i){var n=this;n.config.data_onunselected.call(n.api,e,t.node()),n.main.select("."+o.selectedCircles+n.getTargetSelectorSuffix(e.id)).selectAll("."+o.selectedCircle+"-"+i).transition().duration(100).attr("r",0).remove()},A.togglePoint=function(t,e,i,n){t?this.selectPoint(e,i,n):this.unselectPoint(e,i,n)},A.selectPath=function(t,e){var i=this;i.config.data_onselected.call(i,e,t.node()),i.config.interaction_brighten&&t.transition().duration(100).style("fill",function(){return i.d3.rgb(i.color(e)).brighter(.75)})},A.unselectPath=function(t,e){var i=this;i.config.data_onunselected.call(i,e,t.node()),i.config.interaction_brighten&&t.transition().duration(100).style("fill",function(){return i.color(e)})},A.togglePath=function(t,e,i,n){t?this.selectPath(e,i,n):this.unselectPath(e,i,n)},A.getToggle=function(t,e){var i,n=this;return"circle"===t.nodeName?i=n.isStepType(e)?function(){}:n.togglePoint:"path"===t.nodeName&&(i=n.togglePath),i},A.toggleShape=function(t,e,i){var n=this,a=n.d3,r=n.config,s=a.select(t),c=s.classed(o.SELECTED),d=n.getToggle(t,e).bind(n);r.data_selection_enabled&&r.data_selection_isselectable(e)&&(r.data_selection_multiple||n.main.selectAll("."+o.shapes+(r.data_selection_grouped?n.getTargetSelectorSuffix(e.id):"")).selectAll("."+o.shape).each(function(t,e){var i=a.select(this);i.classed(o.SELECTED)&&d(!1,i.classed(o.SELECTED,!1),t,e)}),s.classed(o.SELECTED,!c),d(!c,s,e,i))},A.initBar=function(){this.main.select("."+o.chart).append("g").attr("class",o.chartBars)},A.updateTargetsForBar=function(t){var e=this,i=e.config,n=e.classChartBar.bind(e),a=e.classBars.bind(e),r=e.classFocus.bind(e);e.main.select("."+o.chartBars).selectAll("."+o.chartBar).data(t).attr("class",function(t){return n(t)+r(t)}).enter().append("g").attr("class",n).style("pointer-events","none").append("g").attr("class",a).style("cursor",function(t){return i.data_selection_isselectable(t)?"pointer":null})},A.updateBar=function(t){var e=this,i=e.barData.bind(e),n=e.classBar.bind(e),a=e.initialOpacity.bind(e),r=function(t){return e.color(t.id)};e.mainBar=e.main.selectAll("."+o.bars).selectAll("."+o.bar).data(i),e.mainBar.enter().append("path").attr("class",n).style("stroke",r).style("fill",r),e.mainBar.style("opacity",a),e.mainBar.exit().transition().duration(t).remove()},A.redrawBar=function(t,e){return[(e?this.mainBar.transition(Math.random().toString()):this.mainBar).attr("d",t).style("stroke",this.color).style("fill",this.color).style("opacity",1)]},A.getBarW=function(t,e){var i=this.config,n="number"==typeof i.bar_width?i.bar_width:e?t.tickInterval()*i.bar_width_ratio/e:0;return i.bar_width_max&&n>i.bar_width_max?i.bar_width_max:n},A.getBars=function(t,e){var i=this;return(e?i.main.selectAll("."+o.bars+i.getTargetSelectorSuffix(e)):i.main).selectAll("."+o.bar+(c(t)?"-"+t:""))},A.expandBars=function(t,e,i){var n=this;i&&n.unexpandBars(),n.getBars(t,e).classed(o.EXPANDED,!0)},A.unexpandBars=function(t){this.getBars(t).classed(o.EXPANDED,!1)},A.generateDrawBar=function(t,e){var i=this,n=i.config,a=i.generateGetBarPoints(t,e);return function(t,e){var i=a(t,e),r=n.axis_rotated?1:0,o=n.axis_rotated?0:1;return"M "+i[0][r]+","+i[0][o]+" L"+i[1][r]+","+i[1][o]+" L"+i[2][r]+","+i[2][o]+" L"+i[3][r]+","+i[3][o]+" z"}},A.generateGetBarPoints=function(t,e){var i=this,n=e?i.subXAxis:i.xAxis,a=t.__max__+1,r=i.getBarW(n,a),o=i.getShapeX(r,a,t,!!e),s=i.getShapeY(!!e),c=i.getShapeOffset(i.isBarType,t,!!e),d=e?i.getSubYScale:i.getYScale;return function(t,e){var n=d.call(i,t.id)(0),a=c(t,e)||n,l=o(t),u=s(t);return i.config.axis_rotated&&(0<t.value&&u<n||t.value<0&&n<u)&&(u=n),[[l,a],[l,u-(n-a)],[l+r,u-(n-a)],[l+r,a]]}},A.isWithinBar=function(t){var e=this.d3.mouse(t),i=t.getBoundingClientRect(),n=t.pathSegList.getItem(0),a=t.pathSegList.getItem(1),r=Math.min(n.x,a.x),o=Math.min(n.y,a.y),s=r+i.width+2,c=o+i.height+2,d=o-2;return r-2<e[0]&&e[0]<s&&d<e[1]&&e[1]<c},A.getShapeIndices=function(t){var e,i,n=this,a=n.config,r={},o=0;return n.filterTargetsToShow(n.data.targets.filter(t,n)).forEach(function(t){for(e=0;e<a.data_groups.length;e++)if(!(a.data_groups[e].indexOf(t.id)<0))for(i=0;i<a.data_groups[e].length;i++)if(a.data_groups[e][i]in r){r[t.id]=r[a.data_groups[e][i]];break}void 0===r[t.id]&&(r[t.id]=o++)}),r.__max__=o-1,r},A.getShapeX=function(t,e,i,n){var a=this,r=n?a.subX:a.x;return function(n){var a=n.id in i?i[n.id]:0;return n.x||0===n.x?r(n.x)-t*(e/2-a):0}},A.getShapeY=function(t){var e=this;return function(i){return(t?e.getSubYScale(i.id):e.getYScale(i.id))(i.value)}},A.getShapeOffset=function(t,e,i){var n=this,a=n.orderTargets(n.filterTargetsToShow(n.data.targets.filter(t,n))),r=a.map(function(t){return t.id});return function(t,o){var s=i?n.getSubYScale(t.id):n.getYScale(t.id),c=s(0),d=c;return a.forEach(function(i){var a=n.isStepType(t)?n.convertValuesToStep(i.values):i.values;i.id!==t.id&&e[i.id]===e[t.id]&&r.indexOf(i.id)<r.indexOf(t.id)&&(void 0!==a[o]&&+a[o].x==+t.x||(o=-1,a.forEach(function(e,i){e.x===t.x&&(o=i)})),o in a&&a[o].value*t.value>=0&&(d+=s(a[o].value)-c))}),d}},A.isWithinShape=function(t,e){var i,n=this,a=n.d3.select(t);return n.isTargetToShow(e.id)?"circle"===t.nodeName?i=n.isStepType(e)?n.isWithinStep(t,n.getYScale(e.id)(e.value)):n.isWithinCircle(t,1.5*n.pointSelectR(e)):"path"===t.nodeName&&(i=!a.classed(o.bar)||n.isWithinBar(t)):i=!1,i},A.getInterpolate=function(t){var e=this,i=e.isInterpolationType(e.config.spline_interpolation_type)?e.config.spline_interpolation_type:"cardinal";return e.isSplineType(t)?i:e.isStepType(t)?e.config.line_step_type:"linear"},A.initLine=function(){this.main.select("."+o.chart).append("g").attr("class",o.chartLines)},A.updateTargetsForLine=function(t){var e,i=this,n=i.config,a=i.classChartLine.bind(i),r=i.classLines.bind(i),s=i.classAreas.bind(i),c=i.classCircles.bind(i),d=i.classFocus.bind(i);(e=i.main.select("."+o.chartLines).selectAll("."+o.chartLine).data(t).attr("class",function(t){return a(t)+d(t)}).enter().append("g").attr("class",a).style("opacity",0).style("pointer-events","none")).append("g").attr("class",r),e.append("g").attr("class",s),e.append("g").attr("class",function(t){return i.generateClass(o.selectedCircles,t.id)}),e.append("g").attr("class",c).style("cursor",function(t){return n.data_selection_isselectable(t)?"pointer":null}),t.forEach(function(t){i.main.selectAll("."+o.selectedCircles+i.getTargetSelectorSuffix(t.id)).selectAll("."+o.selectedCircle).each(function(e){e.value=t.values[e.index].value})})},A.updateLine=function(t){var e=this;e.mainLine=e.main.selectAll("."+o.lines).selectAll("."+o.line).data(e.lineData.bind(e)),e.mainLine.enter().append("path").attr("class",e.classLine.bind(e)).style("stroke",e.color),e.mainLine.style("opacity",e.initialOpacity.bind(e)).style("shape-rendering",function(t){return e.isStepType(t)?"crispEdges":""}).attr("transform",null),e.mainLine.exit().transition().duration(t).style("opacity",0).remove()},A.redrawLine=function(t,e){return[(e?this.mainLine.transition(Math.random().toString()):this.mainLine).attr("d",t).style("stroke",this.color).style("opacity",1)]},A.generateDrawLine=function(t,e){var i=this,n=i.config,a=i.d3.svg.line(),r=i.generateGetLinePoints(t,e),o=e?i.getSubYScale:i.getYScale,s=function(t){return(e?i.subxx:i.xx).call(i,t)},c=function(t,e){return n.data_groups.length>0?r(t,e)[0][1]:o.call(i,t.id)(t.value)};return a=n.axis_rotated?a.x(c).y(s):a.x(s).y(c),n.line_connectNull||(a=a.defined(function(t){return null!=t.value})),function(t){var r,s=n.line_connectNull?i.filterRemoveNull(t.values):t.values,c=e?i.x:i.subX,d=o.call(i,t.id),l=0,u=0;return i.isLineType(t)?n.data_regions[t.id]?r=i.lineWithRegions(s,c,d,n.data_regions[t.id]):(i.isStepType(t)&&(s=i.convertValuesToStep(s)),r=a.interpolate(i.getInterpolate(t))(s)):(s[0]&&(l=c(s[0].x),u=d(s[0].value)),r=n.axis_rotated?"M "+u+" "+l:"M "+l+" "+u),r||"M 0 0"}},A.generateGetLinePoints=function(t,e){var i=this,n=i.config,a=t.__max__+1,r=i.getShapeX(0,a,t,!!e),o=i.getShapeY(!!e),s=i.getShapeOffset(i.isLineType,t,!!e),c=e?i.getSubYScale:i.getYScale;return function(t,e){var a=c.call(i,t.id)(0),d=s(t,e)||a,l=r(t),u=o(t);return n.axis_rotated&&(0<t.value&&u<a||t.value<0&&a<u)&&(u=a),[[l,u-(a-d)],[l,u-(a-d)],[l,u-(a-d)],[l,u-(a-d)]]}},A.lineWithRegions=function(t,e,i,n){function a(t){return"M"+t[0][0]+" "+t[0][1]+" "+t[1][0]+" "+t[1][1]}var r,o,s,c,d,l,u,h,g,p,f,_=this,x=_.config,y="M",m=_.isCategorized()?.5:0,S=[];if(void 0!==n)for(r=0;r<n.length;r++)S[r]={},void 0===n[r].start?S[r].start=t[0].x:S[r].start=_.isTimeSeries()?_.parseDate(n[r].start):n[r].start,void 0===n[r].end?S[r].end=t[t.length-1].x:S[r].end=_.isTimeSeries()?_.parseDate(n[r].end):n[r].end;for(p=x.axis_rotated?function(t){return i(t.value)}:function(t){return e(t.x)},f=x.axis_rotated?function(t){return e(t.x)}:function(t){return i(t.value)},s=_.isTimeSeries()?function(t,n,r,o){var s,c=t.x.getTime(),l=n.x-t.x,u=new Date(c+l*r),h=new Date(c+l*(r+o));return s=x.axis_rotated?[[i(d(r)),e(u)],[i(d(r+o)),e(h)]]:[[e(u),i(d(r))],[e(h),i(d(r+o))]],a(s)}:function(t,n,r,o){var s;return s=x.axis_rotated?[[i(d(r),!0),e(c(r))],[i(d(r+o),!0),e(c(r+o))]]:[[e(c(r),!0),i(d(r))],[e(c(r+o),!0),i(d(r+o))]],a(s)},r=0;r<t.length;r++){if(void 0!==S&&function(t,e){var i;for(i=0;i<e.length;i++)if(e[i].start<t&&t<=e[i].end)return!0;return!1}(t[r].x,S))for(c=_.getScale(t[r-1].x+m,t[r].x+m,_.isTimeSeries()),d=_.getScale(t[r-1].value,t[r].value),l=e(t[r].x)-e(t[r-1].x),u=i(t[r].value)-i(t[r-1].value),g=2*(h=2/Math.sqrt(Math.pow(l,2)+Math.pow(u,2))),o=h;o<=1;o+=g)y+=s(t[r-1],t[r],o,h);else y+=" "+p(t[r])+" "+f(t[r]);t[r].x}return y},A.updateArea=function(t){var e=this,i=e.d3;e.mainArea=e.main.selectAll("."+o.areas).selectAll("."+o.area).data(e.lineData.bind(e)),e.mainArea.enter().append("path").attr("class",e.classArea.bind(e)).style("fill",e.color).style("opacity",function(){return e.orgAreaOpacity=+i.select(this).style("opacity"),0}),e.mainArea.style("opacity",e.orgAreaOpacity),e.mainArea.exit().transition().duration(t).style("opacity",0).remove()},A.redrawArea=function(t,e){return[(e?this.mainArea.transition(Math.random().toString()):this.mainArea).attr("d",t).style("fill",this.color).style("opacity",this.orgAreaOpacity)]},A.generateDrawArea=function(t,e){var i=this,n=i.config,a=i.d3.svg.area(),r=i.generateGetAreaPoints(t,e),o=e?i.getSubYScale:i.getYScale,s=function(t){return(e?i.subxx:i.xx).call(i,t)},c=function(t,e){return n.data_groups.length>0?r(t,e)[0][1]:o.call(i,t.id)(i.getAreaBaseValue(t.id))},d=function(t,e){return n.data_groups.length>0?r(t,e)[1][1]:o.call(i,t.id)(t.value)};return a=n.axis_rotated?a.x0(c).x1(d).y(s):a.x(s).y0(n.area_above?0:c).y1(d),n.line_connectNull||(a=a.defined(function(t){return null!==t.value})),function(t){var e,r=n.line_connectNull?i.filterRemoveNull(t.values):t.values,o=0,s=0;return i.isAreaType(t)?(i.isStepType(t)&&(r=i.convertValuesToStep(r)),e=a.interpolate(i.getInterpolate(t))(r)):(r[0]&&(o=i.x(r[0].x),s=i.getYScale(t.id)(r[0].value)),e=n.axis_rotated?"M "+s+" "+o:"M "+o+" "+s),e||"M 0 0"}},A.getAreaBaseValue=function(){return 0},A.generateGetAreaPoints=function(t,e){var i=this,n=i.config,a=t.__max__+1,r=i.getShapeX(0,a,t,!!e),o=i.getShapeY(!!e),s=i.getShapeOffset(i.isAreaType,t,!!e),c=e?i.getSubYScale:i.getYScale;return function(t,e){var a=c.call(i,t.id)(0),d=s(t,e)||a,l=r(t),u=o(t);return n.axis_rotated&&(0<t.value&&u<a||t.value<0&&a<u)&&(u=a),[[l,d],[l,u-(a-d)],[l,u-(a-d)],[l,d]]}},A.updateCircle=function(){var t=this;t.mainCircle=t.main.selectAll("."+o.circles).selectAll("."+o.circle).data(t.lineOrScatterData.bind(t)),t.mainCircle.enter().append("circle").attr("class",t.classCircle.bind(t)).attr("r",t.pointR.bind(t)).style("fill",t.color),t.mainCircle.style("opacity",t.initialOpacityForCircle.bind(t)),t.mainCircle.exit().remove()},A.redrawCircle=function(t,e,i){var n=this.main.selectAll("."+o.selectedCircle);return[(i?this.mainCircle.transition(Math.random().toString()):this.mainCircle).style("opacity",this.opacityForCircle.bind(this)).style("fill",this.color).attr("cx",t).attr("cy",e),(i?n.transition(Math.random().toString()):n).attr("cx",t).attr("cy",e)]},A.circleX=function(t){return t.x||0===t.x?this.x(t.x):null},A.updateCircleY=function(){var t,e,i=this;i.config.data_groups.length>0?(t=i.getShapeIndices(i.isLineType),e=i.generateGetLinePoints(t),i.circleY=function(t,i){return e(t,i)[0][1]}):i.circleY=function(t){return i.getYScale(t.id)(t.value)}},A.getCircles=function(t,e){var i=this;return(e?i.main.selectAll("."+o.circles+i.getTargetSelectorSuffix(e)):i.main).selectAll("."+o.circle+(c(t)?"-"+t:""))},A.expandCircles=function(t,e,i){var n=this,a=n.pointExpandedR.bind(n);i&&n.unexpandCircles(),n.getCircles(t,e).classed(o.EXPANDED,!0).attr("r",a)},A.unexpandCircles=function(t){var e=this,i=e.pointR.bind(e);e.getCircles(t).filter(function(){return e.d3.select(this).classed(o.EXPANDED)}).classed(o.EXPANDED,!1).attr("r",i)},A.pointR=function(t){var e=this,i=e.config;return e.isStepType(t)?0:d(i.point_r)?i.point_r(t):i.point_r},A.pointExpandedR=function(t){var e=this,i=e.config;return i.point_focus_expand_enabled?i.point_focus_expand_r?i.point_focus_expand_r:1.75*e.pointR(t):e.pointR(t)},A.pointSelectR=function(t){var e=this,i=e.config;return d(i.point_select_r)?i.point_select_r(t):i.point_select_r?i.point_select_r:4*e.pointR(t)},A.isWithinCircle=function(t,e){var i=this.d3,n=i.mouse(t),a=i.select(t),r=+a.attr("cx"),o=+a.attr("cy");return Math.sqrt(Math.pow(r-n[0],2)+Math.pow(o-n[1],2))<e},A.isWithinStep=function(t,e){return Math.abs(e-this.d3.mouse(t)[1])<30},A.getCurrentWidth=function(){var t=this,e=t.config;return e.size_width?e.size_width:t.getParentWidth()},A.getCurrentHeight=function(){var t=this,e=t.config,i=e.size_height?e.size_height:t.getParentHeight();return i>0?i:320/(t.hasType("gauge")&&!e.gauge_fullCircle?2:1)},A.getCurrentPaddingTop=function(){var t=this,e=t.config,i=c(e.padding_top)?e.padding_top:0;return t.title&&t.title.node()&&(i+=t.getTitlePadding()),i},A.getCurrentPaddingBottom=function(){var t=this.config;return c(t.padding_bottom)?t.padding_bottom:0},A.getCurrentPaddingLeft=function(t){var e=this,i=e.config;return c(i.padding_left)?i.padding_left:i.axis_rotated?i.axis_x_show?Math.max(p(e.getAxisWidthByAxisId("x",t)),40):1:!i.axis_y_show||i.axis_y_inner?e.axis.getYAxisLabelPosition().isOuter?30:1:p(e.getAxisWidthByAxisId("y",t))},A.getCurrentPaddingRight=function(){var t=this,e=t.config,i=t.isLegendRight?t.getLegendWidth()+20:0;return c(e.padding_right)?e.padding_right+1:e.axis_rotated?10+i:!e.axis_y2_show||e.axis_y2_inner?2+i+(t.axis.getY2AxisLabelPosition().isOuter?20:0):p(t.getAxisWidthByAxisId("y2"))+i},A.getParentRectValue=function(t){for(var e,i=this.selectChart.node();i&&"BODY"!==i.tagName;){try{e=i.getBoundingClientRect()[t]}catch(n){"width"===t&&(e=i.offsetWidth)}if(e)break;i=i.parentNode}return e},A.getParentWidth=function(){return this.getParentRectValue("width")},A.getParentHeight=function(){var t=this.selectChart.style("height");return t.indexOf("px")>0?+t.replace("px",""):0},A.getSvgLeft=function(t){var e=this,i=e.config,n=i.axis_rotated||!i.axis_rotated&&!i.axis_y_inner,a=i.axis_rotated?o.axisX:o.axisY,r=e.main.select("."+a).node(),s=r&&n?r.getBoundingClientRect():{right:0},c=e.selectChart.node().getBoundingClientRect(),d=e.hasArcType(),l=s.right-c.left-(d?0:e.getCurrentPaddingLeft(t));return l>0?l:0},A.getAxisWidthByAxisId=function(t,e){var i=this,n=i.axis.getLabelPositionById(t);return i.axis.getMaxTickWidth(t,e)+(n.isInner?20:40)},A.getHorizontalAxisHeight=function(t){var e=this,i=e.config,n=30;return"x"!==t||i.axis_x_show?"x"===t&&i.axis_x_height?i.axis_x_height:"y"!==t||i.axis_y_show?"y2"!==t||i.axis_y2_show?("x"===t&&!i.axis_rotated&&i.axis_x_tick_rotate&&(n=30+e.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-i.axis_x_tick_rotate)/180)),"y"===t&&i.axis_rotated&&i.axis_y_tick_rotate&&(n=30+e.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-i.axis_y_tick_rotate)/180)),n+(e.axis.getLabelPositionById(t).isInner?0:10)+("y2"===t?-10:0)):e.rotated_padding_top:!i.legend_show||e.isLegendRight||e.isLegendInset?1:10:8},A.getEventRectWidth=function(){return Math.max(0,this.xAxis.tickInterval())},A.initBrush=function(){var t=this,e=t.d3;t.brush=e.svg.brush().on("brush",function(){t.redrawForBrush()}),t.brush.update=function(){return t.context&&t.context.select("."+o.brush).call(this),this},t.brush.scale=function(e){return t.config.axis_rotated?this.y(e):this.x(e)}},A.initSubchart=function(){var t=this,e=t.config,i=t.context=t.svg.append("g").attr("transform",t.getTranslate("context")),n=e.subchart_show?"visible":"hidden";i.style("visibility",n),i.append("g").attr("clip-path",t.clipPathForSubchart).attr("class",o.chart),i.select("."+o.chart).append("g").attr("class",o.chartBars),i.select("."+o.chart).append("g").attr("class",o.chartLines),i.append("g").attr("clip-path",t.clipPath).attr("class",o.brush).call(t.brush),t.axes.subx=i.append("g").attr("class",o.axisX).attr("transform",t.getTranslate("subx")).attr("clip-path",e.axis_rotated?"":t.clipPathForXAxis).style("visibility",e.subchart_axis_x_show?n:"hidden")},A.updateTargetsForSubchart=function(t){var e,i=this,n=i.context,a=i.config,r=i.classChartBar.bind(i),s=i.classBars.bind(i),c=i.classChartLine.bind(i),d=i.classLines.bind(i),l=i.classAreas.bind(i);a.subchart_show&&(n.select("."+o.chartBars).selectAll("."+o.chartBar).data(t).attr("class",r).enter().append("g").style("opacity",0).attr("class",r).append("g").attr("class",s),(e=n.select("."+o.chartLines).selectAll("."+o.chartLine).data(t).attr("class",c).enter().append("g").style("opacity",0).attr("class",c)).append("g").attr("class",d),e.append("g").attr("class",l),n.selectAll("."+o.brush+" rect").attr(a.axis_rotated?"width":"height",a.axis_rotated?i.width2:i.height2))},A.updateBarForSubchart=function(t){var e=this;e.contextBar=e.context.selectAll("."+o.bars).selectAll("."+o.bar).data(e.barData.bind(e)),e.contextBar.enter().append("path").attr("class",e.classBar.bind(e)).style("stroke","none").style("fill",e.color),e.contextBar.style("opacity",e.initialOpacity.bind(e)),e.contextBar.exit().transition().duration(t).style("opacity",0).remove()},A.redrawBarForSubchart=function(t,e,i){(e?this.contextBar.transition(Math.random().toString()).duration(i):this.contextBar).attr("d",t).style("opacity",1)},A.updateLineForSubchart=function(t){var e=this;e.contextLine=e.context.selectAll("."+o.lines).selectAll("."+o.line).data(e.lineData.bind(e)),e.contextLine.enter().append("path").attr("class",e.classLine.bind(e)).style("stroke",e.color),e.contextLine.style("opacity",e.initialOpacity.bind(e)),e.contextLine.exit().transition().duration(t).style("opacity",0).remove()},A.redrawLineForSubchart=function(t,e,i){(e?this.contextLine.transition(Math.random().toString()).duration(i):this.contextLine).attr("d",t).style("opacity",1)},A.updateAreaForSubchart=function(t){var e=this,i=e.d3;e.contextArea=e.context.selectAll("."+o.areas).selectAll("."+o.area).data(e.lineData.bind(e)),e.contextArea.enter().append("path").attr("class",e.classArea.bind(e)).style("fill",e.color).style("opacity",function(){return e.orgAreaOpacity=+i.select(this).style("opacity"),0}),e.contextArea.style("opacity",0),e.contextArea.exit().transition().duration(t).style("opacity",0).remove()},A.redrawAreaForSubchart=function(t,e,i){(e?this.contextArea.transition(Math.random().toString()).duration(i):this.contextArea).attr("d",t).style("fill",this.color).style("opacity",this.orgAreaOpacity)},A.redrawSubchart=function(t,e,i,n,a,r,o){var s,c,d,l=this,u=l.d3,h=l.config;l.context.style("visibility",h.subchart_show?"visible":"hidden"),h.subchart_show&&(u.event&&"zoom"===u.event.type&&l.brush.extent(l.x.orgDomain()).update(),t&&(l.brush.empty()||l.brush.extent(l.x.orgDomain()).update(),s=l.generateDrawArea(a,!0),c=l.generateDrawBar(r,!0),d=l.generateDrawLine(o,!0),l.updateBarForSubchart(i),l.updateLineForSubchart(i),l.updateAreaForSubchart(i),l.redrawBarForSubchart(c,i,i),l.redrawLineForSubchart(d,i,i),l.redrawAreaForSubchart(s,i,i)))},A.redrawForBrush=function(){var t=this,e=t.x;t.redraw({withTransition:!1,withY:t.config.zoom_rescale,withSubchart:!1,withUpdateXDomain:!0,withDimension:!1}),t.config.subchart_onbrush.call(t.api,e.orgDomain())},A.transformContext=function(t,e){var i,n=this;e&&e.axisSubX?i=e.axisSubX:(i=n.context.select("."+o.axisX),t&&(i=i.transition())),n.context.attr("transform",n.getTranslate("context")),i.attr("transform",n.getTranslate("subx"))},A.getDefaultExtent=function(){var t=this,e=t.config,i=d(e.axis_x_extent)?e.axis_x_extent(t.getXDomain(t.data.targets)):e.axis_x_extent;return t.isTimeSeries()&&(i=[t.parseDate(i[0]),t.parseDate(i[1])]),i},A.initText=function(){var t=this;t.main.select("."+o.chart).append("g").attr("class",o.chartTexts),t.mainText=t.d3.selectAll([])},A.updateTargetsForText=function(t){var e=this,i=e.classChartText.bind(e),n=e.classTexts.bind(e),a=e.classFocus.bind(e);e.main.select("."+o.chartTexts).selectAll("."+o.chartText).data(t).attr("class",function(t){return i(t)+a(t)}).enter().append("g").attr("class",i).style("opacity",0).style("pointer-events","none").append("g").attr("class",n)},A.updateText=function(t){var e=this,i=e.config,n=e.barOrLineData.bind(e),a=e.classText.bind(e);e.mainText=e.main.selectAll("."+o.texts).selectAll("."+o.text).data(n),e.mainText.enter().append("text").attr("class",a).attr("text-anchor",function(t){return i.axis_rotated?t.value<0?"end":"start":"middle"}).style("stroke","none").style("fill",function(t){return e.color(t)}).style("fill-opacity",0),e.mainText.text(function(t,i,n){return e.dataLabelFormat(t.id)(t.value,t.id,i,n)}),e.mainText.exit().transition().duration(t).style("fill-opacity",0).remove()},A.redrawText=function(t,e,i,n){return[(n?this.mainText.transition():this.mainText).attr("x",t).attr("y",e).style("fill",this.color).style("fill-opacity",i?0:this.opacityForText.bind(this))]},A.getTextRect=function(t,e,i){var n,a=this.d3.select("body").append("div").classed("c3",!0),r=a.append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0),o=this.d3.select(i).style("font");return r.selectAll(".dummy").data([t]).enter().append("text").classed(e||"",!0).style("font",o).text(t).each(function(){n=this.getBoundingClientRect()}),a.remove(),n},A.generateXYForText=function(t,e,i,n){var a=this,r=a.generateGetAreaPoints(t,!1),o=a.generateGetBarPoints(e,!1),s=a.generateGetLinePoints(i,!1),c=n?a.getXForText:a.getYForText;return function(t,e){var i=a.isAreaType(t)?r:a.isBarType(t)?o:s;return c.call(a,i(t,e),t,this)}},A.getXForText=function(t,e,i){var n,a,r=this,o=i.getBoundingClientRect();return r.config.axis_rotated?(a=r.isBarType(e)?4:6,n=t[2][1]+a*(e.value<0?-1:1)):n=r.hasType("bar")?(t[2][0]+t[0][0])/2:t[0][0],null===e.value&&(n>r.width?n=r.width-o.width:n<0&&(n=4)),n},A.getYForText=function(t,e,i){var n,a=this,r=i.getBoundingClientRect();return a.config.axis_rotated?n=(t[0][0]+t[2][0]+.6*r.height)/2:(n=t[2][1],e.value<0||0===e.value&&!a.hasPositiveValue?(n+=r.height,a.isBarType(e)&&a.isSafari()?n-=3:!a.isBarType(e)&&a.isChrome()&&(n+=3)):n+=a.isBarType(e)?-3:-6),null!==e.value||a.config.axis_rotated||(n<r.height?n=r.height:n>this.height&&(n=this.height-4)),n},A.initTitle=function(){var t=this;t.title=t.svg.append("text").text(t.config.title_text).attr("class",t.CLASS.title)},A.redrawTitle=function(){var t=this;t.title.attr("x",t.xForTitle.bind(t)).attr("y",t.yForTitle.bind(t))},A.xForTitle=function(){var t=this,e=t.config,i=e.title_position||"left";return i.indexOf("right")>=0?t.currentWidth-t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).width-e.title_padding.right:i.indexOf("center")>=0?(t.currentWidth-t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).width)/2:e.title_padding.left},A.yForTitle=function(){var t=this;return t.config.title_padding.top+t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).height},A.getTitlePadding=function(){var t=this;return t.yForTitle()+t.config.title_padding.bottom},A.initTooltip=function(){var t,e=this,i=e.config;if(e.tooltip=e.selectChart.style("position","relative").append("div").attr("class",o.tooltipContainer).style("position","absolute").style("pointer-events","none").style("display","none"),i.tooltip_init_show){if(e.isTimeSeries()&&u(i.tooltip_init_x)){for(i.tooltip_init_x=e.parseDate(i.tooltip_init_x),t=0;t<e.data.targets[0].values.length&&e.data.targets[0].values[t].x-i.tooltip_init_x!=0;t++);i.tooltip_init_x=t}e.tooltip.html(i.tooltip_contents.call(e,e.data.targets.map(function(t){return e.addName(t.values[i.tooltip_init_x])}),e.axis.getXAxisTickFormat(),e.getYFormat(e.hasArcType()),e.color)),e.tooltip.style("top",i.tooltip_init_position.top).style("left",i.tooltip_init_position.left).style("display","block")}},A.getTooltipSortFunction=function(){var t=this,e=t.config;if(0!==e.data_groups.length&&void 0===e.tooltip_order){var i=t.orderTargets(t.data.targets).map(function(t){return t.id});return(t.isOrderAsc()||t.isOrderDesc())&&(i=i.reverse()),function(t,e){return i.indexOf(t.id)-i.indexOf(e.id)}}var n=e.tooltip_order;void 0===n&&(n=e.data_order);var a=function(t){return t?t.value:null};if(u(n)&&"asc"===n.toLowerCase())return function(t,e){return a(t)-a(e)};if(u(n)&&"desc"===n.toLowerCase())return function(t,e){return a(e)-a(t)};if(d(n)){var r=n;return void 0===e.tooltip_order&&(r=function(t,e){return n(t?{id:t.id,values:[t]}:null,e?{id:e.id,values:[e]}:null)}),r}return l(n)?function(t,e){return n.indexOf(t.id)-n.indexOf(e.id)}:void 0},A.getTooltipContent=function(t,e,i,n){var a,r,o,s,c,d,l=this,u=l.config,h=u.tooltip_format_title||e,g=u.tooltip_format_name||function(t){return t},p=u.tooltip_format_value||i,f=this.getTooltipSortFunction();for(f&&t.sort(f),r=0;r<t.length;r++)if(t[r]&&(t[r].value||0===t[r].value)&&(a||(o=w(h?h(t[r].x):t[r].x),a="<table class='"+l.CLASS.tooltip+"'>"+(o||0===o?"<tr><th colspan='2'>"+o+"</th></tr>":"")),void 0!==(s=w(p(t[r].value,t[r].ratio,t[r].id,t[r].index,t))))){if(null===t[r].name)continue;c=w(g(t[r].name,t[r].ratio,t[r].id,t[r].index)),d=l.levelColor?l.levelColor(t[r].value):n(t[r].id),a+="<tr class='"+l.CLASS.tooltipName+"-"+l.getTargetSelectorSuffix(t[r].id)+"'>",a+="<td class='name'><span style='background-color:"+d+"'></span>"+c+"</td>",a+="<td class='value'>"+s+"</td>",a+="</tr>"}return a+"</table>"},A.tooltipPosition=function(t,e,i,n){var a,r,o,s,c,d=this,l=d.config,u=d.d3,h=d.hasArcType(),g=u.mouse(n);return h?(r=(d.width-(d.isLegendRight?d.getLegendWidth():0))/2+g[0],s=d.height/2+g[1]+20):(a=d.getSvgLeft(!0),l.axis_rotated?(o=(r=a+g[0]+100)+e,c=d.currentWidth-d.getCurrentPaddingRight(),s=d.x(t[0].x)+20):(o=(r=a+d.getCurrentPaddingLeft(!0)+d.x(t[0].x)+20)+e,c=a+d.currentWidth-d.getCurrentPaddingRight(),s=g[1]+15),o>c&&(r-=o-c+20),s+i>d.currentHeight&&(s-=i+30)),s<0&&(s=0),{top:s,left:r}},A.showTooltip=function(t,e){var i,n,a,r=this,o=r.config,s=r.hasArcType(),d=t.filter(function(t){return t&&c(t.value)}),l=o.tooltip_position||A.tooltipPosition;0!==d.length&&o.tooltip_show&&(r.tooltip.html(o.tooltip_contents.call(r,t,r.axis.getXAxisTickFormat(),r.getYFormat(s),r.color)).style("display","block"),i=r.tooltip.property("offsetWidth"),n=r.tooltip.property("offsetHeight"),a=l.call(this,d,i,n,e),r.tooltip.style("top",a.top+"px").style("left",a.left+"px"))},A.hideTooltip=function(){this.tooltip.style("display","none")},A.setTargetType=function(t,e){var i=this,n=i.config;i.mapToTargetIds(t).forEach(function(t){i.withoutFadeIn[t]=e===n.data_types[t],n.data_types[t]=e}),t||(n.data_type=e)},A.hasType=function(t,e){var i=this,n=i.config.data_types,a=!1;return e=e||i.data.targets,e&&e.length?e.forEach(function(e){var i=n[e.id];(i&&i.indexOf(t)>=0||!i&&"line"===t)&&(a=!0)}):Object.keys(n).length?Object.keys(n).forEach(function(e){n[e]===t&&(a=!0)}):a=i.config.data_type===t,a},A.hasArcType=function(t){return this.hasType("pie",t)||this.hasType("donut",t)||this.hasType("gauge",t)},A.isLineType=function(t){var e=this.config,i=u(t)?t:t.id;return!e.data_types[i]||["line","spline","area","area-spline","step","area-step"].indexOf(e.data_types[i])>=0},A.isStepType=function(t){var e=u(t)?t:t.id;return["step","area-step"].indexOf(this.config.data_types[e])>=0},A.isSplineType=function(t){var e=u(t)?t:t.id;return["spline","area-spline"].indexOf(this.config.data_types[e])>=0},A.isAreaType=function(t){var e=u(t)?t:t.id;return["area","area-spline","area-step"].indexOf(this.config.data_types[e])>=0},A.isBarType=function(t){var e=u(t)?t:t.id;return"bar"===this.config.data_types[e]},A.isScatterType=function(t){var e=u(t)?t:t.id;return"scatter"===this.config.data_types[e]},A.isPieType=function(t){var e=u(t)?t:t.id;return"pie"===this.config.data_types[e]},A.isGaugeType=function(t){var e=u(t)?t:t.id;return"gauge"===this.config.data_types[e]},A.isDonutType=function(t){var e=u(t)?t:t.id;return"donut"===this.config.data_types[e]},A.isArcType=function(t){return this.isPieType(t)||this.isDonutType(t)||this.isGaugeType(t)},A.lineData=function(t){return this.isLineType(t)?[t]:[]},A.arcData=function(t){return this.isArcType(t.data)?[t]:[]},A.barData=function(t){return this.isBarType(t)?t.values:[]},A.lineOrScatterData=function(t){return this.isLineType(t)||this.isScatterType(t)?t.values:[]},A.barOrLineData=function(t){return this.isBarType(t)||this.isLineType(t)?t.values:[]},A.isInterpolationType=function(t){return["linear","linear-closed","basis","basis-open","basis-closed","bundle","cardinal","cardinal-open","cardinal-closed","monotone"].indexOf(t)>=0},A.isSafari=function(){var t=window.navigator.userAgent;return t.indexOf("Safari")>=0&&t.indexOf("Chrome")<0},A.isChrome=function(){return window.navigator.userAgent.indexOf("Chrome")>=0},A.initZoom=function(){var t,e=this,i=e.d3,n=e.config;e.zoom=i.behavior.zoom().on("zoomstart",function(){t=i.event.sourceEvent,e.zoom.altDomain=i.event.sourceEvent.altKey?e.x.orgDomain():null,n.zoom_onzoomstart.call(e.api,i.event.sourceEvent)}).on("zoom",function(){e.redrawForZoom.call(e)}).on("zoomend",function(){var a=i.event.sourceEvent;a&&t.clientX===a.clientX&&t.clientY===a.clientY||(e.redrawEventRect(),e.updateZoom(),n.zoom_onzoomend.call(e.api,e.x.orgDomain()))}),e.zoom.scale=function(t){return n.axis_rotated?this.y(t):this.x(t)},e.zoom.orgScaleExtent=function(){var t=n.zoom_extent?n.zoom_extent:[1,10];return[t[0],Math.max(e.getMaxDataCount()/t[1],t[1])]},e.zoom.updateScaleExtent=function(){var t=_(e.x.orgDomain())/_(e.getZoomDomain()),i=this.orgScaleExtent();return this.scaleExtent([i[0]*t,i[1]*t]),this}},A.getZoomDomain=function(){var t=this,e=t.config,i=t.d3;return[i.min([t.orgXDomain[0],e.zoom_x_min]),i.max([t.orgXDomain[1],e.zoom_x_max])]},A.updateZoom=function(){var t=this,e=t.config.zoom_enabled?t.zoom:function(){};t.main.select("."+o.zoomRect).call(e).on("dblclick.zoom",null),t.main.selectAll("."+o.eventRect).call(e).on("dblclick.zoom",null)},A.redrawForZoom=function(){var t=this,e=t.d3,i=t.config,n=t.zoom,a=t.x;if(i.zoom_enabled&&0!==t.filterTargetsToShow(t.data.targets).length){if("mousemove"===e.event.sourceEvent.type&&n.altDomain)return a.domain(n.altDomain),void n.scale(a).updateScaleExtent();t.isCategorized()&&a.orgDomain()[0]===t.orgXDomain[0]&&a.domain([t.orgXDomain[0]-1e-10,a.orgDomain()[1]]),t.redraw({withTransition:!1,withY:i.zoom_rescale,withSubchart:!1,withEventRect:!1,withDimension:!1}),"mousemove"===e.event.sourceEvent.type&&(t.cancelClick=!0),i.zoom_onzoom.call(t.api,a.orgDomain())}},T});
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=d(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),u(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)u(e(n[o]),t)}function u(t,n,o){var s=!(!o||!o.force)&&o.force;return!(!t||!s&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0)}function d(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),u(),d(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function u(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function d(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!e(":focus",I).length||t)return clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.3",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
//# sourceMappingURL=toastr.js.map

(function(){function require(name){var module=require.modules[name];if(!module)throw new Error('failed to require "'+name+'"');if(!("exports"in module)&&typeof module.definition==="function"){module.client=module.component=true;module.definition.call(this,module.exports={},module);delete module.definition}return module.exports}require.loader="component";require.helper={};require.helper.semVerSort=function(a,b){var aArray=a.version.split(".");var bArray=b.version.split(".");for(var i=0;i<aArray.length;++i){var aInt=parseInt(aArray[i],10);var bInt=parseInt(bArray[i],10);if(aInt===bInt){var aLex=aArray[i].substr((""+aInt).length);var bLex=bArray[i].substr((""+bInt).length);if(aLex===""&&bLex!=="")return 1;if(aLex!==""&&bLex==="")return-1;if(aLex!==""&&bLex!=="")return aLex>bLex?1:-1;continue}else if(aInt>bInt){return 1}else{return-1}}return 0};require.latest=function(name,returnPath){function showError(name){throw new Error('failed to find latest module of "'+name+'"')}var versionRegexp=/(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;var remoteRegexp=/(.*)~(.*)/;if(!remoteRegexp.test(name))showError(name);var moduleNames=Object.keys(require.modules);var semVerCandidates=[];var otherCandidates=[];for(var i=0;i<moduleNames.length;i++){var moduleName=moduleNames[i];if(new RegExp(name+"@").test(moduleName)){var version=moduleName.substr(name.length+1);var semVerMatch=versionRegexp.exec(moduleName);if(semVerMatch!=null){semVerCandidates.push({version:version,name:moduleName})}else{otherCandidates.push({version:version,name:moduleName})}}}if(semVerCandidates.concat(otherCandidates).length===0){showError(name)}if(semVerCandidates.length>0){var module=semVerCandidates.sort(require.helper.semVerSort).pop().name;if(returnPath===true){return module}return require(module)}var module=otherCandidates.pop().name;if(returnPath===true){return module}return require(module)};require.modules={};require.register=function(name,definition){require.modules[name]={definition:definition}};require.define=function(name,exports){require.modules[name]={exports:exports}};require.register("abpetkov~transitionize@0.0.3",function(exports,module){module.exports=Transitionize;function Transitionize(element,props){if(!(this instanceof Transitionize))return new Transitionize(element,props);this.element=element;this.props=props||{};this.init()}Transitionize.prototype.isSafari=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)};Transitionize.prototype.init=function(){var transitions=[];for(var key in this.props){transitions.push(key+" "+this.props[key])}this.element.style.transition=transitions.join(", ");if(this.isSafari())this.element.style.webkitTransition=transitions.join(", ")}});require.register("ftlabs~fastclick@v0.6.11",function(exports,module){function FastClick(layer){"use strict";var oldOnClick,self=this;this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=10;this.layer=layer;if(!layer||!layer.nodeType){throw new TypeError("Layer must be a document node")}this.onClick=function(){return FastClick.prototype.onClick.apply(self,arguments)};this.onMouse=function(){return FastClick.prototype.onMouse.apply(self,arguments)};this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(self,arguments)};this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(self,arguments)};this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(self,arguments)};this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(self,arguments)};if(FastClick.notNeeded(layer)){return}if(this.deviceIsAndroid){layer.addEventListener("mouseover",this.onMouse,true);layer.addEventListener("mousedown",this.onMouse,true);layer.addEventListener("mouseup",this.onMouse,true)}layer.addEventListener("click",this.onClick,true);layer.addEventListener("touchstart",this.onTouchStart,false);layer.addEventListener("touchmove",this.onTouchMove,false);layer.addEventListener("touchend",this.onTouchEnd,false);layer.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;if(type==="click"){rmv.call(layer,type,callback.hijacked||callback,capture)}else{rmv.call(layer,type,callback,capture)}};layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;if(type==="click"){adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){if(!event.propagationStopped){callback(event)}}),capture)}else{adv.call(layer,type,callback,capture)}}}if(typeof layer.onclick==="function"){oldOnClick=layer.onclick;layer.addEventListener("click",function(event){oldOnClick(event)},false);layer.onclick=null}}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(target){"use strict";switch(target.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(target.disabled){return true}break;case"input":if(this.deviceIsIOS&&target.type==="file"||target.disabled){return true}break;case"label":case"video":return true}return/\bneedsclick\b/.test(target.className)};FastClick.prototype.needsFocus=function(target){"use strict";switch(target.nodeName.toLowerCase()){case"textarea":return true;case"select":return!this.deviceIsAndroid;case"input":switch(target.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!target.disabled&&!target.readOnly;default:return/\bneedsfocus\b/.test(target.className)}};FastClick.prototype.sendClick=function(targetElement,event){"use strict";var clickEvent,touch;if(document.activeElement&&document.activeElement!==targetElement){document.activeElement.blur()}touch=event.changedTouches[0];clickEvent=document.createEvent("MouseEvents");clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);clickEvent.forwardedTouchEvent=true;targetElement.dispatchEvent(clickEvent)};FastClick.prototype.determineEventType=function(targetElement){"use strict";if(this.deviceIsAndroid&&targetElement.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};FastClick.prototype.focus=function(targetElement){"use strict";var length;if(this.deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf("date")!==0&&targetElement.type!=="time"){length=targetElement.value.length;targetElement.setSelectionRange(length,length)}else{targetElement.focus()}};FastClick.prototype.updateScrollParent=function(targetElement){"use strict";var scrollParent,parentElement;scrollParent=targetElement.fastClickScrollParent;if(!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement;targetElement.fastClickScrollParent=parentElement;break}parentElement=parentElement.parentElement}while(parentElement)}if(scrollParent){scrollParent.fastClickLastScrollTop=scrollParent.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){"use strict";if(eventTarget.nodeType===Node.TEXT_NODE){return eventTarget.parentNode}return eventTarget};FastClick.prototype.onTouchStart=function(event){"use strict";var targetElement,touch,selection;if(event.targetTouches.length>1){return true}targetElement=this.getTargetElementFromEventTarget(event.target);touch=event.targetTouches[0];if(this.deviceIsIOS){selection=window.getSelection();if(selection.rangeCount&&!selection.isCollapsed){return true}if(!this.deviceIsIOS4){if(touch.identifier===this.lastTouchIdentifier){event.preventDefault();return false}this.lastTouchIdentifier=touch.identifier;this.updateScrollParent(targetElement)}}this.trackingClick=true;this.trackingClickStart=event.timeStamp;this.targetElement=targetElement;this.touchStartX=touch.pageX;this.touchStartY=touch.pageY;if(event.timeStamp-this.lastClickTime<200){event.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(event){"use strict";var touch=event.changedTouches[0],boundary=this.touchBoundary;if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){return true}return false};FastClick.prototype.onTouchMove=function(event){"use strict";if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(labelElement){"use strict";if(labelElement.control!==undefined){return labelElement.control}if(labelElement.htmlFor){return document.getElementById(labelElement.htmlFor)}return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(event){"use strict";var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick){return true}if(event.timeStamp-this.lastClickTime<200){this.cancelNextClick=true;return true}this.cancelNextClick=false;this.lastClickTime=event.timeStamp;trackingClickStart=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(this.deviceIsIOSWithBadTarget){touch=event.changedTouches[0];targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent}targetTagName=targetElement.tagName.toLowerCase();if(targetTagName==="label"){forElement=this.findControl(targetElement);if(forElement){this.focus(targetElement);if(this.deviceIsAndroid){return false}targetElement=forElement}}else if(this.needsFocus(targetElement)){if(event.timeStamp-trackingClickStart>100||this.deviceIsIOS&&window.top!==window&&targetTagName==="input"){this.targetElement=null;return false}this.focus(targetElement);if(!this.deviceIsIOS4||targetTagName!=="select"){this.targetElement=null;event.preventDefault()}return false}if(this.deviceIsIOS&&!this.deviceIsIOS4){scrollParent=targetElement.fastClickScrollParent;if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){return true}}if(!this.needsClick(targetElement)){event.preventDefault();this.sendClick(targetElement,event)}return false};FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(event){"use strict";if(!this.targetElement){return true}if(event.forwardedTouchEvent){return true}if(!event.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(event.stopImmediatePropagation){event.stopImmediatePropagation()}else{event.propagationStopped=true}event.stopPropagation();event.preventDefault();return false}return true};FastClick.prototype.onClick=function(event){"use strict";var permitted;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(event.target.type==="submit"&&event.detail===0){return true}permitted=this.onMouse(event);if(!permitted){this.targetElement=null}return permitted};FastClick.prototype.destroy=function(){"use strict";var layer=this.layer;if(this.deviceIsAndroid){layer.removeEventListener("mouseover",this.onMouse,true);layer.removeEventListener("mousedown",this.onMouse,true);layer.removeEventListener("mouseup",this.onMouse,true)}layer.removeEventListener("click",this.onClick,true);layer.removeEventListener("touchstart",this.onTouchStart,false);layer.removeEventListener("touchmove",this.onTouchMove,false);layer.removeEventListener("touchend",this.onTouchEnd,false);layer.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(layer){"use strict";var metaViewport;var chromeVersion;if(typeof window.ontouchstart==="undefined"){return true}chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(chromeVersion){if(FastClick.prototype.deviceIsAndroid){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport){if(metaViewport.content.indexOf("user-scalable=no")!==-1){return true}if(chromeVersion>31&&window.innerWidth<=window.screen.width){return true}}}else{return true}}if(layer.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(layer){"use strict";return new FastClick(layer)};if(typeof define!=="undefined"&&define.amd){define(function(){"use strict";return FastClick})}else if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}});require.register("component~indexof@0.0.3",function(exports,module){module.exports=function(arr,obj){if(arr.indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i}return-1}});require.register("component~classes@1.2.1",function(exports,module){var index=require("component~indexof@0.0.3");var re=/\s+/;var toString=Object.prototype.toString;module.exports=function(el){return new ClassList(el)};function ClassList(el){if(!el)throw new Error("A DOM element reference is required");this.el=el;this.list=el.classList}ClassList.prototype.add=function(name){if(this.list){this.list.add(name);return this}var arr=this.array();var i=index(arr,name);if(!~i)arr.push(name);this.el.className=arr.join(" ");return this};ClassList.prototype.remove=function(name){if("[object RegExp]"==toString.call(name)){return this.removeMatching(name)}if(this.list){this.list.remove(name);return this}var arr=this.array();var i=index(arr,name);if(~i)arr.splice(i,1);this.el.className=arr.join(" ");return this};ClassList.prototype.removeMatching=function(re){var arr=this.array();for(var i=0;i<arr.length;i++){if(re.test(arr[i])){this.remove(arr[i])}}return this};ClassList.prototype.toggle=function(name,force){if(this.list){if("undefined"!==typeof force){if(force!==this.list.toggle(name,force)){this.list.toggle(name)}}else{this.list.toggle(name)}return this}if("undefined"!==typeof force){if(!force){this.remove(name)}else{this.add(name)}}else{if(this.has(name)){this.remove(name)}else{this.add(name)}}return this};ClassList.prototype.array=function(){var str=this.el.className.replace(/^\s+|\s+$/g,"");var arr=str.split(re);if(""===arr[0])arr.shift();return arr};ClassList.prototype.has=ClassList.prototype.contains=function(name){return this.list?this.list.contains(name):!!~index(this.array(),name)}});require.register("switchery",function(exports,module){var transitionize=require("abpetkov~transitionize@0.0.3"),fastclick=require("ftlabs~fastclick@v0.6.11"),classes=require("component~classes@1.2.1");module.exports=Switchery;var defaults={color:"#64bd63",secondaryColor:"#dfdfdf",jackColor:"#fff",className:"switchery",disabled:false,disabledOpacity:.5,speed:"0.4s",size:"default"};function Switchery(element,options){if(!(this instanceof Switchery))return new Switchery(element,options);this.element=element;this.options=options||{};for(var i in defaults){if(this.options[i]==null){this.options[i]=defaults[i]}}if(this.element!=null&&this.element.type=="checkbox")this.init()}Switchery.prototype.hide=function(){this.element.style.display="none"};Switchery.prototype.show=function(){var switcher=this.create();this.insertAfter(this.element,switcher)};Switchery.prototype.create=function(){this.switcher=document.createElement("span");this.jack=document.createElement("small");this.switcher.appendChild(this.jack);this.switcher.className=this.options.className;return this.switcher};Switchery.prototype.insertAfter=function(reference,target){reference.parentNode.insertBefore(target,reference.nextSibling)};Switchery.prototype.isChecked=function(){return this.element.checked};Switchery.prototype.isDisabled=function(){return this.options.disabled||this.element.disabled||this.element.readOnly};Switchery.prototype.setPosition=function(clicked){var checked=this.isChecked(),switcher=this.switcher,jack=this.jack;if(clicked&&checked)checked=false;else if(clicked&&!checked)checked=true;if(checked===true){this.element.checked=true;if(window.getComputedStyle)jack.style.left=parseInt(window.getComputedStyle(switcher).width)-parseInt(window.getComputedStyle(jack).width)+"px";else jack.style.left=parseInt(switcher.currentStyle["width"])-parseInt(jack.currentStyle["width"])+"px";if(this.options.color)this.colorize();this.setSpeed()}else{jack.style.left=0;this.element.checked=false;this.switcher.style.boxShadow="inset 0 0 0 0 "+this.options.secondaryColor;this.switcher.style.borderColor=this.options.secondaryColor;this.switcher.style.backgroundColor=this.options.secondaryColor!==defaults.secondaryColor?this.options.secondaryColor:"#fff";this.jack.style.backgroundColor=this.options.jackColor;this.setSpeed()}};Switchery.prototype.setSpeed=function(){var switcherProp={},jackProp={left:this.options.speed.replace(/[a-z]/,"")/2+"s"};if(this.isChecked()){switcherProp={border:this.options.speed,"box-shadow":this.options.speed,"background-color":this.options.speed.replace(/[a-z]/,"")*3+"s"}}else{switcherProp={border:this.options.speed,"box-shadow":this.options.speed}}transitionize(this.switcher,switcherProp);transitionize(this.jack,jackProp)};Switchery.prototype.setSize=function(){var small="switchery-small",normal="switchery-default",large="switchery-large";switch(this.options.size){case"small":classes(this.switcher).add(small);break;case"large":classes(this.switcher).add(large);break;default:classes(this.switcher).add(normal);break}};Switchery.prototype.colorize=function(){var switcherHeight=this.switcher.offsetHeight/2;this.switcher.style.backgroundColor=this.options.color;this.switcher.style.borderColor=this.options.color;this.switcher.style.boxShadow="inset 0 0 0 "+switcherHeight+"px "+this.options.color;this.jack.style.backgroundColor=this.options.jackColor};Switchery.prototype.handleOnchange=function(state){if(document.dispatchEvent){var event=document.createEvent("HTMLEvents");event.initEvent("change",true,true);this.element.dispatchEvent(event)}else{this.element.fireEvent("onchange")}};Switchery.prototype.handleChange=function(){var self=this,el=this.element;if(el.addEventListener){el.addEventListener("change",function(){self.setPosition()})}else{el.attachEvent("onchange",function(){self.setPosition()})}};Switchery.prototype.handleClick=function(){var self=this,switcher=this.switcher,parent=self.element.parentNode.tagName.toLowerCase(),labelParent=parent==="label"?false:true;if(this.isDisabled()===false){fastclick(switcher);if(switcher.addEventListener){switcher.addEventListener("click",function(e){self.setPosition(labelParent);self.handleOnchange(self.element.checked)})}else{switcher.attachEvent("onclick",function(){self.setPosition(labelParent);self.handleOnchange(self.element.checked)})}}else{this.element.disabled=true;this.switcher.style.opacity=this.options.disabledOpacity}};Switchery.prototype.markAsSwitched=function(){this.element.setAttribute("data-switchery",true)};Switchery.prototype.markedAsSwitched=function(){return this.element.getAttribute("data-switchery")};Switchery.prototype.init=function(){this.hide();this.show();this.setSize();this.setPosition();this.markAsSwitched();this.handleChange();this.handleClick()}});if(typeof exports=="object"){module.exports=require("switchery")}else if(typeof define=="function"&&define.amd){define("Switchery",[],function(){return require("switchery")})}else{(this||window)["Switchery"]=require("switchery")}})();
/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/

// first an inline dependency, jquery.colorhelpers.js, we inline it here
// for convenience

/* Plugin for jQuery for working with colors.
 *
 * Version 1.1.
 *
 * Inspiration from jQuery color animation plugin by John Resig.
 *
 * Released under the MIT license by Ole Laursen, October 2009.
 *
 * Examples:
 *
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
 *   var c = $.color.extract($("#mydiv"), 'background-color');
 *   console.log(c.r, c.g, c.b, c.a);
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
 *
 * Note that .scale() and .add() return the same modified object
 * instead of making a new one.
 *
 * V. 1.1: Fix error handling so e.g. parsing an empty string does
 * produce a color rather than just crashing.
 */
(function($){$.color={};$.color.make=function(r,g,b,a){var o={};o.r=r||0;o.g=g||0;o.b=b||0;o.a=a!=null?a:1;o.add=function(c,d){for(var i=0;i<c.length;++i)o[c.charAt(i)]+=d;return o.normalize()};o.scale=function(c,f){for(var i=0;i<c.length;++i)o[c.charAt(i)]*=f;return o.normalize()};o.toString=function(){if(o.a>=1){return"rgb("+[o.r,o.g,o.b].join(",")+")"}else{return"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"}};o.normalize=function(){function clamp(min,value,max){return value<min?min:value>max?max:value}o.r=clamp(0,parseInt(o.r),255);o.g=clamp(0,parseInt(o.g),255);o.b=clamp(0,parseInt(o.b),255);o.a=clamp(0,o.a,1);return o};o.clone=function(){return $.color.make(o.r,o.b,o.g,o.a)};return o.normalize()};$.color.extract=function(elem,css){var c;do{c=elem.css(css).toLowerCase();if(c!=""&&c!="transparent")break;elem=elem.parent()}while(elem.length&&!$.nodeName(elem.get(0),"body"));if(c=="rgba(0, 0, 0, 0)")c="transparent";return $.color.parse(c)};$.color.parse=function(str){var res,m=$.color.make;if(res=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10));if(res=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10),parseFloat(res[4]));if(res=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55);if(res=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55,parseFloat(res[4]));if(res=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))return m(parseInt(res[1],16),parseInt(res[2],16),parseInt(res[3],16));if(res=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))return m(parseInt(res[1]+res[1],16),parseInt(res[2]+res[2],16),parseInt(res[3]+res[3],16));var name=$.trim(str).toLowerCase();if(name=="transparent")return m(255,255,255,0);else{res=lookupColors[name]||[0,0,0];return m(res[0],res[1],res[2])}};var lookupColors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

// the actual Flot code
(function($) {

	// Cache the prototype hasOwnProperty for faster access

	var hasOwnProperty = Object.prototype.hasOwnProperty;

    // A shim to provide 'detach' to jQuery versions prior to 1.4.  Using a DOM
    // operation produces the same effect as detach, i.e. removing the element
    // without touching its jQuery data.

    // Do not merge this into Flot 0.9, since it requires jQuery 1.4.4+.

    if (!$.fn.detach) {
        $.fn.detach = function() {
            return this.each(function() {
                if (this.parentNode) {
                    this.parentNode.removeChild( this );
                }
            });
        };
    }

	///////////////////////////////////////////////////////////////////////////
	// The Canvas object is a wrapper around an HTML5 <canvas> tag.
	//
	// @constructor
	// @param {string} cls List of classes to apply to the canvas.
	// @param {element} container Element onto which to append the canvas.
	//
	// Requiring a container is a little iffy, but unfortunately canvas
	// operations don't work unless the canvas is attached to the DOM.

	function Canvas(cls, container) {

		var element = container.children("." + cls)[0];

		if (element == null) {

			element = document.createElement("canvas");
			element.className = cls;

			$(element).css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
				.appendTo(container);

			// If HTML5 Canvas isn't available, fall back to [Ex|Flash]canvas

			if (!element.getContext) {
				if (window.G_vmlCanvasManager) {
					element = window.G_vmlCanvasManager.initElement(element);
				} else {
					throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
				}
			}
		}

		this.element = element;

		var context = this.context = element.getContext("2d");

		// Determine the screen's ratio of physical to device-independent
		// pixels.  This is the ratio between the canvas width that the browser
		// advertises and the number of pixels actually present in that space.

		// The iPhone 4, for example, has a device-independent width of 320px,
		// but its screen is actually 640px wide.  It therefore has a pixel
		// ratio of 2, while most normal devices have a ratio of 1.

		var devicePixelRatio = window.devicePixelRatio || 1,
			backingStoreRatio =
				context.webkitBackingStorePixelRatio ||
				context.mozBackingStorePixelRatio ||
				context.msBackingStorePixelRatio ||
				context.oBackingStorePixelRatio ||
				context.backingStorePixelRatio || 1;

		this.pixelRatio = devicePixelRatio / backingStoreRatio;

		// Size the canvas to match the internal dimensions of its container

		this.resize(container.width(), container.height());

		// Collection of HTML div layers for text overlaid onto the canvas

		this.textContainer = null;
		this.text = {};

		// Cache of text fragments and metrics, so we can avoid expensively
		// re-calculating them when the plot is re-rendered in a loop.

		this._textCache = {};
	}

	// Resizes the canvas to the given dimensions.
	//
	// @param {number} width New width of the canvas, in pixels.
	// @param {number} width New height of the canvas, in pixels.

	Canvas.prototype.resize = function(width, height) {

		if (width <= 0 || height <= 0) {
			throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height);
		}

		var element = this.element,
			context = this.context,
			pixelRatio = this.pixelRatio;

		// Resize the canvas, increasing its density based on the display's
		// pixel ratio; basically giving it more pixels without increasing the
		// size of its element, to take advantage of the fact that retina
		// displays have that many more pixels in the same advertised space.

		// Resizing should reset the state (excanvas seems to be buggy though)

		if (this.width != width) {
			element.width = width * pixelRatio;
			element.style.width = width + "px";
			this.width = width;
		}

		if (this.height != height) {
			element.height = height * pixelRatio;
			element.style.height = height + "px";
			this.height = height;
		}

		// Save the context, so we can reset in case we get replotted.  The
		// restore ensure that we're really back at the initial state, and
		// should be safe even if we haven't saved the initial state yet.

		context.restore();
		context.save();

		// Scale the coordinate space to match the display density; so even though we
		// may have twice as many pixels, we still want lines and other drawing to
		// appear at the same size; the extra pixels will just make them crisper.

		context.scale(pixelRatio, pixelRatio);
	};

	// Clears the entire canvas area, not including any overlaid HTML text

	Canvas.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height);
	};

	// Finishes rendering the canvas, including managing the text overlay.

	Canvas.prototype.render = function() {

		var cache = this._textCache;

		// For each text layer, add elements marked as active that haven't
		// already been rendered, and remove those that are no longer active.

		for (var layerKey in cache) {
			if (hasOwnProperty.call(cache, layerKey)) {

				var layer = this.getTextLayer(layerKey),
					layerCache = cache[layerKey];

				layer.hide();

				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {

								var positions = styleCache[key].positions;

								for (var i = 0, position; position = positions[i]; i++) {
									if (position.active) {
										if (!position.rendered) {
											layer.append(position.element);
											position.rendered = true;
										}
									} else {
										positions.splice(i--, 1);
										if (position.rendered) {
											position.element.detach();
										}
									}
								}

								if (positions.length == 0) {
									delete styleCache[key];
								}
							}
						}
					}
				}

				layer.show();
			}
		}
	};

	// Creates (if necessary) and returns the text overlay container.
	//
	// @param {string} classes String of space-separated CSS classes used to
	//     uniquely identify the text layer.
	// @return {object} The jQuery-wrapped text-layer div.

	Canvas.prototype.getTextLayer = function(classes) {

		var layer = this.text[classes];

		// Create the text layer if it doesn't exist

		if (layer == null) {

			// Create the text layer container, if it doesn't exist

			if (this.textContainer == null) {
				this.textContainer = $("<div class='flot-text'></div>")
					.css({
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						'font-size': "smaller",
						color: "#545454"
					})
					.insertAfter(this.element);
			}

			layer = this.text[classes] = $("<div></div>")
				.addClass(classes)
				.css({
					position: "absolute",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0
				})
				.appendTo(this.textContainer);
		}

		return layer;
	};

	// Creates (if necessary) and returns a text info object.
	//
	// The object looks like this:
	//
	// {
	//     width: Width of the text's wrapper div.
	//     height: Height of the text's wrapper div.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     positions: Array of positions at which this text is drawn.
	// }
	//
	// The positions array contains objects that look like this:
	//
	// {
	//     active: Flag indicating whether the text should be visible.
	//     rendered: Flag indicating whether the text is currently visible.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     x: X coordinate at which to draw the text.
	//     y: Y coordinate at which to draw the text.
	// }
	//
	// Each position after the first receives a clone of the original element.
	//
	// The idea is that that the width, height, and general 'identity' of the
	// text is constant no matter where it is placed; the placements are a
	// secondary property.
	//
	// Canvas maintains a cache of recently-used text info objects; getTextInfo
	// either returns the cached element or creates a new entry.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {string} text Text string to retrieve info for.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @return {object} a text info object.

	Canvas.prototype.getTextInfo = function(layer, text, font, angle, width) {

		var textStyle, layerCache, styleCache, info;

		// Cast the value to a string, in case we were given a number or such

		text = "" + text;

		// If the font is a font-spec object, generate a CSS font definition

		if (typeof font === "object") {
			textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px/" + font.lineHeight + "px " + font.family;
		} else {
			textStyle = font;
		}

		// Retrieve (or create) the cache for the text's layer and styles

		layerCache = this._textCache[layer];

		if (layerCache == null) {
			layerCache = this._textCache[layer] = {};
		}

		styleCache = layerCache[textStyle];

		if (styleCache == null) {
			styleCache = layerCache[textStyle] = {};
		}

		info = styleCache[text];

		// If we can't find a matching element in our cache, create a new one

		if (info == null) {

			var element = $("<div></div>").html(text)
				.css({
					position: "absolute",
					'max-width': width,
					top: -9999
				})
				.appendTo(this.getTextLayer(layer));

			if (typeof font === "object") {
				element.css({
					font: textStyle,
					color: font.color
				});
			} else if (typeof font === "string") {
				element.addClass(font);
			}

			info = styleCache[text] = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				element: element,
				positions: []
			};

			element.detach();
		}

		return info;
	};

	// Adds a text string to the canvas text overlay.
	//
	// The text isn't drawn immediately; it is marked as rendering, which will
	// result in its addition to the canvas on the next render pass.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number} x X coordinate at which to draw the text.
	// @param {number} y Y coordinate at which to draw the text.
	// @param {string} text Text string to draw.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @param {string=} halign Horizontal alignment of the text; either "left",
	//     "center" or "right".
	// @param {string=} valign Vertical alignment of the text; either "top",
	//     "middle" or "bottom".

	Canvas.prototype.addText = function(layer, x, y, text, font, angle, width, halign, valign) {

		var info = this.getTextInfo(layer, text, font, angle, width),
			positions = info.positions;

		// Tweak the div's position to match the text's alignment

		if (halign == "center") {
			x -= info.width / 2;
		} else if (halign == "right") {
			x -= info.width;
		}

		if (valign == "middle") {
			y -= info.height / 2;
		} else if (valign == "bottom") {
			y -= info.height;
		}

		// Determine whether this text already exists at this position.
		// If so, mark it for inclusion in the next render pass.

		for (var i = 0, position; position = positions[i]; i++) {
			if (position.x == x && position.y == y) {
				position.active = true;
				return;
			}
		}

		// If the text doesn't exist at this position, create a new entry

		// For the very first position we'll re-use the original element,
		// while for subsequent ones we'll clone it.

		position = {
			active: true,
			rendered: false,
			element: positions.length ? info.element.clone() : info.element,
			x: x,
			y: y
		};

		positions.push(position);

		// Move the element to its final position within the container

		position.element.css({
			top: Math.round(y),
			left: Math.round(x),
			'text-align': halign	// In case the text wraps
		});
	};

	// Removes one or more text strings from the canvas text overlay.
	//
	// If no parameters are given, all text within the layer is removed.
	//
	// Note that the text is not immediately removed; it is simply marked as
	// inactive, which will result in its removal on the next render pass.
	// This avoids the performance penalty for 'clear and redraw' behavior,
	// where we potentially get rid of all text on a layer, but will likely
	// add back most or all of it later, as when redrawing axes, for example.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number=} x X coordinate of the text.
	// @param {number=} y Y coordinate of the text.
	// @param {string=} text Text string to remove.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which the text is rotated, in degrees.
	//     Angle is currently unused, it will be implemented in the future.

	Canvas.prototype.removeText = function(layer, x, y, text, font, angle) {
		if (text == null) {
			var layerCache = this._textCache[layer];
			if (layerCache != null) {
				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {
								var positions = styleCache[key].positions;
								for (var i = 0, position; position = positions[i]; i++) {
									position.active = false;
								}
							}
						}
					}
				}
			}
		} else {
			var positions = this.getTextInfo(layer, text, font, angle).positions;
			for (var i = 0, position; position = positions[i]; i++) {
				if (position.x == x && position.y == y) {
					position.active = false;
				}
			}
		}
	};

	///////////////////////////////////////////////////////////////////////////
	// The top-level container for the entire plot.

    function Plot(placeholder, data_, options_, plugins) {
        // data is on the form:
        //   [ series1, series2 ... ]
        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }

        var series = [],
            options = {
                // the color theme used for graphs
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: 5, // distance from grid edge to default legend container within plot
                    backgroundColor: null, // null means auto-detect
                    backgroundOpacity: 0.85, // set to 0 to avoid background
                    sorted: null    // default to no legend sorting
                },
                xaxis: {
                    show: null, // null = auto-detect, true = always, false = never
                    position: "bottom", // or "top"
                    mode: null, // null or "time"
                    font: null, // null (derived from CSS in placeholder) or object like { size: 11, lineHeight: 13, style: "italic", weight: "bold", family: "sans-serif", variant: "small-caps" }
                    color: null, // base color, labels, ticks
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                    transform: null, // null or f: number -> number to transform axis
                    inverseTransform: null, // if transform is set, this should be the inverse function
                    min: null, // min. value to show, null means set automatically
                    max: null, // max. value to show, null means set automatically
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string
                    labelWidth: null, // size of tick labels in pixels
                    labelHeight: null,
                    reserveSpace: null, // whether to reserve space even if axis isn't shown
                    tickLength: null, // size in pixels of ticks, or "full" for whole line
                    alignTicksWithAxis: null, // axis number or null for no sync
                    tickDecimals: null, // no. of decimals, null means auto
                    tickSize: null, // number or [number, "unit"]
                    minTickSize: null // number or [number, "unit"]
                },
                yaxis: {
                    autoscaleMargin: 0.02,
                    position: "left" // or "right"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: false,
                        radius: 3,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: "#ffffff",
                        symbol: "circle" // or callback
                    },
                    lines: {
                        // we don't put in show: false so we can see
                        // whether lines were actively disabled
                        lineWidth: 2, // in pixels
                        fill: false,
                        fillColor: null,
                        steps: false
                        // Omit 'zero', so we can later default its value to
                        // match that of the 'fill' option.
                    },
                    bars: {
                        show: false,
                        lineWidth: 2, // in pixels
                        barWidth: 1, // in units of the x axis
                        fill: true,
                        fillColor: null,
                        align: "left", // "left", "right", or "center"
                        horizontal: false,
                        zero: true
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: true,
                    aboveData: false,
                    color: "#545454", // primary color used for outline and labels
                    backgroundColor: null, // null for transparent, else color
                    borderColor: null, // set if different from the grid color
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                    margin: 0, // distance from the canvas edge to the grid
                    labelMargin: 5, // in pixels
                    axisMargin: 8, // in pixels
                    borderWidth: 2, // in pixels
                    minBorderMargin: null, // in pixels, null means taken from points radius
                    markings: null, // array of ranges or fn: axes -> array of ranges
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    // interactive stuff
                    clickable: false,
                    hoverable: false,
                    autoHighlight: true, // highlight in case mouse is near
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
                },
                interaction: {
                    redrawOverlayInterval: 1000/60 // time between updates, -1 means in same flow
                },
                hooks: {}
            },
        surface = null,     // the canvas for the plot itself
        overlay = null,     // canvas for interactive stuff on top of plot
        eventHolder = null, // jQuery object that events should be bound to
        ctx = null, octx = null,
        xaxes = [], yaxes = [],
        plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
        plotWidth = 0, plotHeight = 0,
        hooks = {
            processOptions: [],
            processRawData: [],
            processDatapoints: [],
            processOffset: [],
            drawBackground: [],
            drawSeries: [],
            draw: [],
            bindEvents: [],
            drawOverlay: [],
            shutdown: []
        },
        plot = this;

        // public functions
        plot.setData = setData;
        plot.setupGrid = setupGrid;
        plot.draw = draw;
        plot.getPlaceholder = function() { return placeholder; };
        plot.getCanvas = function() { return surface.element; };
        plot.getPlotOffset = function() { return plotOffset; };
        plot.width = function () { return plotWidth; };
        plot.height = function () { return plotHeight; };
        plot.offset = function () {
            var o = eventHolder.offset();
            o.left += plotOffset.left;
            o.top += plotOffset.top;
            return o;
        };
        plot.getData = function () { return series; };
        plot.getAxes = function () {
            var res = {}, i;
            $.each(xaxes.concat(yaxes), function (_, axis) {
                if (axis)
                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
            });
            return res;
        };
        plot.getXAxes = function () { return xaxes; };
        plot.getYAxes = function () { return yaxes; };
        plot.c2p = canvasToAxisCoords;
        plot.p2c = axisToCanvasCoords;
        plot.getOptions = function () { return options; };
        plot.highlight = highlight;
        plot.unhighlight = unhighlight;
        plot.triggerRedrawOverlay = triggerRedrawOverlay;
        plot.pointOffset = function(point) {
            return {
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)
            };
        };
        plot.shutdown = shutdown;
        plot.destroy = function () {
            shutdown();
            placeholder.removeData("plot").empty();

            series = [];
            options = null;
            surface = null;
            overlay = null;
            eventHolder = null;
            ctx = null;
            octx = null;
            xaxes = [];
            yaxes = [];
            hooks = null;
            highlights = [];
            plot = null;
        };
        plot.resize = function () {
        	var width = placeholder.width(),
        		height = placeholder.height();
            surface.resize(width, height);
            overlay.resize(width, height);
        };

        // public attributes
        plot.hooks = hooks;

        // initialize
        initPlugins(plot);
        parseOptions(options_);
        setupCanvases();
        setData(data_);
        setupGrid();
        draw();
        bindEvents();


        function executeHooks(hook, args) {
            args = [plot].concat(args);
            for (var i = 0; i < hook.length; ++i)
                hook[i].apply(this, args);
        }

        function initPlugins() {

            // References to key classes, allowing plugins to modify them

            var classes = {
                Canvas: Canvas
            };

            for (var i = 0; i < plugins.length; ++i) {
                var p = plugins[i];
                p.init(plot, classes);
                if (p.options)
                    $.extend(true, options, p.options);
            }
        }

        function parseOptions(opts) {

            $.extend(true, options, opts);

            // $.extend merges arrays, rather than replacing them.  When less
            // colors are provided than the size of the default palette, we
            // end up with those colors plus the remaining defaults, which is
            // not expected behavior; avoid it by replacing them here.

            if (opts && opts.colors) {
            	options.colors = opts.colors;
            }

            if (options.xaxis.color == null)
                options.xaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();
            if (options.yaxis.color == null)
                options.yaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            if (options.xaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;
            if (options.yaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;

            if (options.grid.borderColor == null)
                options.grid.borderColor = options.grid.color;
            if (options.grid.tickColor == null)
                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            // Fill in defaults for axis options, including any unspecified
            // font-spec fields, if a font-spec was provided.

            // If no x/y axis options were provided, create one of each anyway,
            // since the rest of the code assumes that they exist.

            var i, axisOptions, axisCount,
                fontSize = placeholder.css("font-size"),
                fontSizeDefault = fontSize ? +fontSize.replace("px", "") : 13,
                fontDefaults = {
                    style: placeholder.css("font-style"),
                    size: Math.round(0.8 * fontSizeDefault),
                    variant: placeholder.css("font-variant"),
                    weight: placeholder.css("font-weight"),
                    family: placeholder.css("font-family")
                };

            axisCount = options.xaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.xaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.xaxis, axisOptions);
                options.xaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            axisCount = options.yaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.yaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.yaxis, axisOptions);
                options.yaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            // backwards compatibility, to be removed in future
            if (options.xaxis.noTicks && options.xaxis.ticks == null)
                options.xaxis.ticks = options.xaxis.noTicks;
            if (options.yaxis.noTicks && options.yaxis.ticks == null)
                options.yaxis.ticks = options.yaxis.noTicks;
            if (options.x2axis) {
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
                options.xaxes[1].position = "top";
                // Override the inherit to allow the axis to auto-scale
                if (options.x2axis.min == null) {
                    options.xaxes[1].min = null;
                }
                if (options.x2axis.max == null) {
                    options.xaxes[1].max = null;
                }
            }
            if (options.y2axis) {
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
                options.yaxes[1].position = "right";
                // Override the inherit to allow the axis to auto-scale
                if (options.y2axis.min == null) {
                    options.yaxes[1].min = null;
                }
                if (options.y2axis.max == null) {
                    options.yaxes[1].max = null;
                }
            }
            if (options.grid.coloredAreas)
                options.grid.markings = options.grid.coloredAreas;
            if (options.grid.coloredAreasColor)
                options.grid.markingsColor = options.grid.coloredAreasColor;
            if (options.lines)
                $.extend(true, options.series.lines, options.lines);
            if (options.points)
                $.extend(true, options.series.points, options.points);
            if (options.bars)
                $.extend(true, options.series.bars, options.bars);
            if (options.shadowSize != null)
                options.series.shadowSize = options.shadowSize;
            if (options.highlightColor != null)
                options.series.highlightColor = options.highlightColor;

            // save options on axes for future reference
            for (i = 0; i < options.xaxes.length; ++i)
                getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
            for (i = 0; i < options.yaxes.length; ++i)
                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

            // add hooks from options
            for (var n in hooks)
                if (options.hooks[n] && options.hooks[n].length)
                    hooks[n] = hooks[n].concat(options.hooks[n]);

            executeHooks(hooks.processOptions, [options]);
        }

        function setData(d) {
            series = parseData(d);
            fillInSeriesOptions();
            processData();
        }

        function parseData(d) {
            var res = [];
            for (var i = 0; i < d.length; ++i) {
                var s = $.extend(true, {}, options.series);

                if (d[i].data != null) {
                    s.data = d[i].data; // move the data instead of deep-copy
                    delete d[i].data;

                    $.extend(true, s, d[i]);

                    d[i].data = s.data;
                }
                else
                    s.data = d[i];
                res.push(s);
            }

            return res;
        }

        function axisNumber(obj, coord) {
            var a = obj[coord + "axis"];
            if (typeof a == "object") // if we got a real axis, extract number
                a = a.n;
            if (typeof a != "number")
                a = 1; // default to first axis
            return a;
        }

        function allAxes() {
            // return flat array without annoying null entries
            return $.grep(xaxes.concat(yaxes), function (a) { return a; });
        }

        function canvasToAxisCoords(pos) {
            // return an object with x/y corresponding to all used axes
            var res = {}, i, axis;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used)
                    res["x" + axis.n] = axis.c2p(pos.left);
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used)
                    res["y" + axis.n] = axis.c2p(pos.top);
            }

            if (res.x1 !== undefined)
                res.x = res.x1;
            if (res.y1 !== undefined)
                res.y = res.y1;

            return res;
        }

        function axisToCanvasCoords(pos) {
            // get canvas coords from the first pair of x/y found in pos
            var res = {}, i, axis, key;

            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used) {
                    key = "x" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "x";

                    if (pos[key] != null) {
                        res.left = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used) {
                    key = "y" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "y";

                    if (pos[key] != null) {
                        res.top = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            return res;
        }

        function getOrCreateAxis(axes, number) {
            if (!axes[number - 1])
                axes[number - 1] = {
                    n: number, // save the number for future reference
                    direction: axes == xaxes ? "x" : "y",
                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
                };

            return axes[number - 1];
        }

        function fillInSeriesOptions() {

            var neededColors = series.length, maxIndex = -1, i;

            // Subtract the number of series that already have fixed colors or
            // color indexes from the number that we still need to generate.

            for (i = 0; i < series.length; ++i) {
                var sc = series[i].color;
                if (sc != null) {
                    neededColors--;
                    if (typeof sc == "number" && sc > maxIndex) {
                        maxIndex = sc;
                    }
                }
            }

            // If any of the series have fixed color indexes, then we need to
            // generate at least as many colors as the highest index.

            if (neededColors <= maxIndex) {
                neededColors = maxIndex + 1;
            }

            // Generate all the colors, using first the option colors and then
            // variations on those colors once they're exhausted.

            var c, colors = [], colorPool = options.colors,
                colorPoolSize = colorPool.length, variation = 0;

            for (i = 0; i < neededColors; i++) {

                c = $.color.parse(colorPool[i % colorPoolSize] || "#666");

                // Each time we exhaust the colors in the pool we adjust
                // a scaling factor used to produce more variations on
                // those colors. The factor alternates negative/positive
                // to produce lighter/darker colors.

                // Reset the variation after every few cycles, or else
                // it will end up producing only white or black colors.

                if (i % colorPoolSize == 0 && i) {
                    if (variation >= 0) {
                        if (variation < 0.5) {
                            variation = -variation - 0.2;
                        } else variation = 0;
                    } else variation = -variation;
                }

                colors[i] = c.scale('rgb', 1 + variation);
            }

            // Finalize the series options, filling in their colors

            var colori = 0, s;
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                // assign colors
                if (s.color == null) {
                    s.color = colors[colori].toString();
                    ++colori;
                }
                else if (typeof s.color == "number")
                    s.color = colors[s.color].toString();

                // turn on lines automatically in case nothing is set
                if (s.lines.show == null) {
                    var v, show = true;
                    for (v in s)
                        if (s[v] && s[v].show) {
                            show = false;
                            break;
                        }
                    if (show)
                        s.lines.show = true;
                }

                // If nothing was provided for lines.zero, default it to match
                // lines.fill, since areas by default should extend to zero.

                if (s.lines.zero == null) {
                    s.lines.zero = !!s.lines.fill;
                }

                // setup axes
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
            }
        }

        function processData() {
            var topSentry = Number.POSITIVE_INFINITY,
                bottomSentry = Number.NEGATIVE_INFINITY,
                fakeInfinity = Number.MAX_VALUE,
                i, j, k, m, length,
                s, points, ps, x, y, axis, val, f, p,
                data, format;

            function updateAxis(axis, min, max) {
                if (min < axis.datamin && min != -fakeInfinity)
                    axis.datamin = min;
                if (max > axis.datamax && max != fakeInfinity)
                    axis.datamax = max;
            }

            $.each(allAxes(), function (_, axis) {
                // init axis
                axis.datamin = topSentry;
                axis.datamax = bottomSentry;
                axis.used = false;
            });

            for (i = 0; i < series.length; ++i) {
                s = series[i];
                s.datapoints = { points: [] };

                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
            }

            // first pass: clean and copy data
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                data = s.data;
                format = s.datapoints.format;

                if (!format) {
                    format = [];
                    // find out how to copy
                    format.push({ x: true, number: true, required: true });
                    format.push({ y: true, number: true, required: true });

                    if (s.bars.show || (s.lines.show && s.lines.fill)) {
                        var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
                        format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                        if (s.bars.horizontal) {
                            delete format[format.length - 1].y;
                            format[format.length - 1].x = true;
                        }
                    }

                    s.datapoints.format = format;
                }

                if (s.datapoints.pointsize != null)
                    continue; // already filled in

                s.datapoints.pointsize = format.length;

                ps = s.datapoints.pointsize;
                points = s.datapoints.points;

                var insertSteps = s.lines.show && s.lines.steps;
                s.xaxis.used = s.yaxis.used = true;

                for (j = k = 0; j < data.length; ++j, k += ps) {
                    p = data[j];

                    var nullify = p == null;
                    if (!nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = p[m];
                            f = format[m];

                            if (f) {
                                if (f.number && val != null) {
                                    val = +val; // convert to number
                                    if (isNaN(val))
                                        val = null;
                                    else if (val == Infinity)
                                        val = fakeInfinity;
                                    else if (val == -Infinity)
                                        val = -fakeInfinity;
                                }

                                if (val == null) {
                                    if (f.required)
                                        nullify = true;

                                    if (f.defaultValue != null)
                                        val = f.defaultValue;
                                }
                            }

                            points[k + m] = val;
                        }
                    }

                    if (nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = points[k + m];
                            if (val != null) {
                                f = format[m];
                                // extract min/max info
                                if (f.autoscale !== false) {
                                    if (f.x) {
                                        updateAxis(s.xaxis, val, val);
                                    }
                                    if (f.y) {
                                        updateAxis(s.yaxis, val, val);
                                    }
                                }
                            }
                            points[k + m] = null;
                        }
                    }
                    else {
                        // a little bit of line specific stuff that
                        // perhaps shouldn't be here, but lacking
                        // better means...
                        if (insertSteps && k > 0
                            && points[k - ps] != null
                            && points[k - ps] != points[k]
                            && points[k - ps + 1] != points[k + 1]) {
                            // copy the point to make room for a middle point
                            for (m = 0; m < ps; ++m)
                                points[k + ps + m] = points[k + m];

                            // middle point has same y
                            points[k + 1] = points[k - ps + 1];

                            // we've added a point, better reflect that
                            k += ps;
                        }
                    }
                }
            }

            // give the hooks a chance to run
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
            }

            // second pass: find datamax/datamin for auto-scaling
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                points = s.datapoints.points;
                ps = s.datapoints.pointsize;
                format = s.datapoints.format;

                var xmin = topSentry, ymin = topSentry,
                    xmax = bottomSentry, ymax = bottomSentry;

                for (j = 0; j < points.length; j += ps) {
                    if (points[j] == null)
                        continue;

                    for (m = 0; m < ps; ++m) {
                        val = points[j + m];
                        f = format[m];
                        if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)
                            continue;

                        if (f.x) {
                            if (val < xmin)
                                xmin = val;
                            if (val > xmax)
                                xmax = val;
                        }
                        if (f.y) {
                            if (val < ymin)
                                ymin = val;
                            if (val > ymax)
                                ymax = val;
                        }
                    }
                }

                if (s.bars.show) {
                    // make sure we got room for the bar on the dancing floor
                    var delta;

                    switch (s.bars.align) {
                        case "left":
                            delta = 0;
                            break;
                        case "right":
                            delta = -s.bars.barWidth;
                            break;
                        default:
                            delta = -s.bars.barWidth / 2;
                    }

                    if (s.bars.horizontal) {
                        ymin += delta;
                        ymax += delta + s.bars.barWidth;
                    }
                    else {
                        xmin += delta;
                        xmax += delta + s.bars.barWidth;
                    }
                }

                updateAxis(s.xaxis, xmin, xmax);
                updateAxis(s.yaxis, ymin, ymax);
            }

            $.each(allAxes(), function (_, axis) {
                if (axis.datamin == topSentry)
                    axis.datamin = null;
                if (axis.datamax == bottomSentry)
                    axis.datamax = null;
            });
        }

        function setupCanvases() {

            // Make sure the placeholder is clear of everything except canvases
            // from a previous plot in this container that we'll try to re-use.

            placeholder.css("padding", 0) // padding messes up the positioning
                .children().filter(function(){
                    return !$(this).hasClass("flot-overlay") && !$(this).hasClass('flot-base');
                }).remove();

            if (placeholder.css("position") == 'static')
                placeholder.css("position", "relative"); // for positioning labels and overlay

            surface = new Canvas("flot-base", placeholder);
            overlay = new Canvas("flot-overlay", placeholder); // overlay canvas for interactive features

            ctx = surface.context;
            octx = overlay.context;

            // define which element we're listening for events on
            eventHolder = $(overlay.element).unbind();

            // If we're re-using a plot object, shut down the old one

            var existing = placeholder.data("plot");

            if (existing) {
                existing.shutdown();
                overlay.clear();
            }

            // save in case we get replotted
            placeholder.data("plot", plot);
        }

        function bindEvents() {
            // bind events
            if (options.grid.hoverable) {
                eventHolder.mousemove(onMouseMove);

                // Use bind, rather than .mouseleave, because we officially
                // still support jQuery 1.2.6, which doesn't define a shortcut
                // for mouseenter or mouseleave.  This was a bug/oversight that
                // was fixed somewhere around 1.3.x.  We can return to using
                // .mouseleave when we drop support for 1.2.6.

                eventHolder.bind("mouseleave", onMouseLeave);
            }

            if (options.grid.clickable)
                eventHolder.click(onClick);

            executeHooks(hooks.bindEvents, [eventHolder]);
        }

        function shutdown() {
            if (redrawTimeout)
                clearTimeout(redrawTimeout);

            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mouseleave", onMouseLeave);
            eventHolder.unbind("click", onClick);

            executeHooks(hooks.shutdown, [eventHolder]);
        }

        function setTransformationHelpers(axis) {
            // set helper functions on the axis, assumes plot area
            // has been computed already

            function identity(x) { return x; }

            var s, m, t = axis.options.transform || identity,
                it = axis.options.inverseTransform;

            // precompute how much the axis is scaling a point
            // in canvas space
            if (axis.direction == "x") {
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
                m = Math.min(t(axis.max), t(axis.min));
            }
            else {
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
                s = -s;
                m = Math.max(t(axis.max), t(axis.min));
            }

            // data point to canvas coordinate
            if (t == identity) // slight optimization
                axis.p2c = function (p) { return (p - m) * s; };
            else
                axis.p2c = function (p) { return (t(p) - m) * s; };
            // canvas coordinate to data point
            if (!it)
                axis.c2p = function (c) { return m + c / s; };
            else
                axis.c2p = function (c) { return it(m + c / s); };
        }

        function measureTickLabels(axis) {

            var opts = axis.options,
                ticks = axis.ticks || [],
                labelWidth = opts.labelWidth || 0,
                labelHeight = opts.labelHeight || 0,
                maxWidth = labelWidth || (axis.direction == "x" ? Math.floor(surface.width / (ticks.length || 1)) : null),
                legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                font = opts.font || "flot-tick-label tickLabel";

            for (var i = 0; i < ticks.length; ++i) {

                var t = ticks[i];

                if (!t.label)
                    continue;

                var info = surface.getTextInfo(layer, t.label, font, null, maxWidth);

                labelWidth = Math.max(labelWidth, info.width);
                labelHeight = Math.max(labelHeight, info.height);
            }

            axis.labelWidth = opts.labelWidth || labelWidth;
            axis.labelHeight = opts.labelHeight || labelHeight;
        }

        function allocateAxisBoxFirstPhase(axis) {
            // find the bounding box of the axis by looking at label
            // widths/heights and ticks, make room by diminishing the
            // plotOffset; this first phase only looks at one
            // dimension per axis, the other dimension depends on the
            // other axes so will have to wait

            var lw = axis.labelWidth,
                lh = axis.labelHeight,
                pos = axis.options.position,
                isXAxis = axis.direction === "x",
                tickLength = axis.options.tickLength,
                axisMargin = options.grid.axisMargin,
                padding = options.grid.labelMargin,
                innermost = true,
                outermost = true,
                first = true,
                found = false;

            // Determine the axis's position in its direction and on its side

            $.each(isXAxis ? xaxes : yaxes, function(i, a) {
                if (a && (a.show || a.reserveSpace)) {
                    if (a === axis) {
                        found = true;
                    } else if (a.options.position === pos) {
                        if (found) {
                            outermost = false;
                        } else {
                            innermost = false;
                        }
                    }
                    if (!found) {
                        first = false;
                    }
                }
            });

            // The outermost axis on each side has no margin

            if (outermost) {
                axisMargin = 0;
            }

            // The ticks for the first axis in each direction stretch across

            if (tickLength == null) {
                tickLength = first ? "full" : 5;
            }

            if (!isNaN(+tickLength))
                padding += +tickLength;

            if (isXAxis) {
                lh += padding;

                if (pos == "bottom") {
                    plotOffset.bottom += lh + axisMargin;
                    axis.box = { top: surface.height - plotOffset.bottom, height: lh };
                }
                else {
                    axis.box = { top: plotOffset.top + axisMargin, height: lh };
                    plotOffset.top += lh + axisMargin;
                }
            }
            else {
                lw += padding;

                if (pos == "left") {
                    axis.box = { left: plotOffset.left + axisMargin, width: lw };
                    plotOffset.left += lw + axisMargin;
                }
                else {
                    plotOffset.right += lw + axisMargin;
                    axis.box = { left: surface.width - plotOffset.right, width: lw };
                }
            }

             // save for future reference
            axis.position = pos;
            axis.tickLength = tickLength;
            axis.box.padding = padding;
            axis.innermost = innermost;
        }

        function allocateAxisBoxSecondPhase(axis) {
            // now that all axis boxes have been placed in one
            // dimension, we can set the remaining dimension coordinates
            if (axis.direction == "x") {
                axis.box.left = plotOffset.left - axis.labelWidth / 2;
                axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth;
            }
            else {
                axis.box.top = plotOffset.top - axis.labelHeight / 2;
                axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight;
            }
        }

        function adjustLayoutForThingsStickingOut() {
            // possibly adjust plot offset to ensure everything stays
            // inside the canvas and isn't clipped off

            var minMargin = options.grid.minBorderMargin,
                axis, i;

            // check stuff from the plot (FIXME: this should just read
            // a value from the series, otherwise it's impossible to
            // customize)
            if (minMargin == null) {
                minMargin = 0;
                for (i = 0; i < series.length; ++i)
                    minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth/2));
            }

            var margins = {
                left: minMargin,
                right: minMargin,
                top: minMargin,
                bottom: minMargin
            };

            // check axis labels, note we don't check the actual
            // labels but instead use the overall width/height to not
            // jump as much around with replots
            $.each(allAxes(), function (_, axis) {
                if (axis.reserveSpace && axis.ticks && axis.ticks.length) {
                    if (axis.direction === "x") {
                        margins.left = Math.max(margins.left, axis.labelWidth / 2);
                        margins.right = Math.max(margins.right, axis.labelWidth / 2);
                    } else {
                        margins.bottom = Math.max(margins.bottom, axis.labelHeight / 2);
                        margins.top = Math.max(margins.top, axis.labelHeight / 2);
                    }
                }
            });

            plotOffset.left = Math.ceil(Math.max(margins.left, plotOffset.left));
            plotOffset.right = Math.ceil(Math.max(margins.right, plotOffset.right));
            plotOffset.top = Math.ceil(Math.max(margins.top, plotOffset.top));
            plotOffset.bottom = Math.ceil(Math.max(margins.bottom, plotOffset.bottom));
        }

        function setupGrid() {
            var i, axes = allAxes(), showGrid = options.grid.show;

            // Initialize the plot's offset from the edge of the canvas

            for (var a in plotOffset) {
                var margin = options.grid.margin || 0;
                plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0;
            }

            executeHooks(hooks.processOffset, [plotOffset]);

            // If the grid is visible, add its border width to the offset

            for (var a in plotOffset) {
                if(typeof(options.grid.borderWidth) == "object") {
                    plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0;
                }
                else {
                    plotOffset[a] += showGrid ? options.grid.borderWidth : 0;
                }
            }

            $.each(axes, function (_, axis) {
                var axisOpts = axis.options;
                axis.show = axisOpts.show == null ? axis.used : axisOpts.show;
                axis.reserveSpace = axisOpts.reserveSpace == null ? axis.show : axisOpts.reserveSpace;
                setRange(axis);
            });

            if (showGrid) {

                var allocatedAxes = $.grep(axes, function (axis) {
                    return axis.show || axis.reserveSpace;
                });

                $.each(allocatedAxes, function (_, axis) {
                    // make the ticks
                    setupTickGeneration(axis);
                    setTicks(axis);
                    snapRangeToTicks(axis, axis.ticks);
                    // find labelWidth/Height for axis
                    measureTickLabels(axis);
                });

                // with all dimensions calculated, we can compute the
                // axis bounding boxes, start from the outside
                // (reverse order)
                for (i = allocatedAxes.length - 1; i >= 0; --i)
                    allocateAxisBoxFirstPhase(allocatedAxes[i]);

                // make sure we've got enough space for things that
                // might stick out
                adjustLayoutForThingsStickingOut();

                $.each(allocatedAxes, function (_, axis) {
                    allocateAxisBoxSecondPhase(axis);
                });
            }

            plotWidth = surface.width - plotOffset.left - plotOffset.right;
            plotHeight = surface.height - plotOffset.bottom - plotOffset.top;

            // now we got the proper plot dimensions, we can compute the scaling
            $.each(axes, function (_, axis) {
                setTransformationHelpers(axis);
            });

            if (showGrid) {
                drawAxisLabels();
            }

            insertLegend();
        }

        function setRange(axis) {
            var opts = axis.options,
                min = +(opts.min != null ? opts.min : axis.datamin),
                max = +(opts.max != null ? opts.max : axis.datamax),
                delta = max - min;

            if (delta == 0.0) {
                // degenerate case
                var widen = max == 0 ? 1 : 0.01;

                if (opts.min == null)
                    min -= widen;
                // always widen max if we couldn't widen min to ensure we
                // don't fall into min == max which doesn't work
                if (opts.max == null || opts.min != null)
                    max += widen;
            }
            else {
                // consider autoscaling
                var margin = opts.autoscaleMargin;
                if (margin != null) {
                    if (opts.min == null) {
                        min -= delta * margin;
                        // make sure we don't go below zero if all values
                        // are positive
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)
                            min = 0;
                    }
                    if (opts.max == null) {
                        max += delta * margin;
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)
                            max = 0;
                    }
                }
            }
            axis.min = min;
            axis.max = max;
        }

        function setupTickGeneration(axis) {
            var opts = axis.options;

            // estimate number of ticks
            var noTicks;
            if (typeof opts.ticks == "number" && opts.ticks > 0)
                noTicks = opts.ticks;
            else
                // heuristic based on the model a*sqrt(x) fitted to
                // some data points that seemed reasonable
                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);

            var delta = (axis.max - axis.min) / noTicks,
                dec = -Math.floor(Math.log(delta) / Math.LN10),
                maxDec = opts.tickDecimals;

            if (maxDec != null && dec > maxDec) {
                dec = maxDec;
            }

            var magn = Math.pow(10, -dec),
                norm = delta / magn, // norm is between 1.0 and 10.0
                size;

            if (norm < 1.5) {
                size = 1;
            } else if (norm < 3) {
                size = 2;
                // special case for 2.5, requires an extra decimal
                if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                    size = 2.5;
                    ++dec;
                }
            } else if (norm < 7.5) {
                size = 5;
            } else {
                size = 10;
            }

            size *= magn;

            if (opts.minTickSize != null && size < opts.minTickSize) {
                size = opts.minTickSize;
            }

            axis.delta = delta;
            axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
            axis.tickSize = opts.tickSize || size;

            // Time mode was moved to a plug-in in 0.8, and since so many people use it
            // we'll add an especially friendly reminder to make sure they included it.

            if (opts.mode == "time" && !axis.tickGenerator) {
                throw new Error("Time mode requires the flot.time plugin.");
            }

            // Flot supports base-10 axes; any other mode else is handled by a plug-in,
            // like flot.time.js.

            if (!axis.tickGenerator) {

                axis.tickGenerator = function (axis) {

                    var ticks = [],
                        start = floorInBase(axis.min, axis.tickSize),
                        i = 0,
                        v = Number.NaN,
                        prev;

                    do {
                        prev = v;
                        v = start + i * axis.tickSize;
                        ticks.push(v);
                        ++i;
                    } while (v < axis.max && v != prev);
                    return ticks;
                };

				axis.tickFormatter = function (value, axis) {

					var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
					var formatted = "" + Math.round(value * factor) / factor;

					// If tickDecimals was specified, ensure that we have exactly that
					// much precision; otherwise default to the value's own precision.

					if (axis.tickDecimals != null) {
						var decimal = formatted.indexOf(".");
						var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
						if (precision < axis.tickDecimals) {
							return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);
						}
					}

                    return formatted;
                };
            }

            if ($.isFunction(opts.tickFormatter))
                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };

            if (opts.alignTicksWithAxis != null) {
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
                if (otherAxis && otherAxis.used && otherAxis != axis) {
                    // consider snapping min/max to outermost nice ticks
                    var niceTicks = axis.tickGenerator(axis);
                    if (niceTicks.length > 0) {
                        if (opts.min == null)
                            axis.min = Math.min(axis.min, niceTicks[0]);
                        if (opts.max == null && niceTicks.length > 1)
                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
                    }

                    axis.tickGenerator = function (axis) {
                        // copy ticks, scaled to this axis
                        var ticks = [], v, i;
                        for (i = 0; i < otherAxis.ticks.length; ++i) {
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                            v = axis.min + v * (axis.max - axis.min);
                            ticks.push(v);
                        }
                        return ticks;
                    };

                    // we might need an extra decimal since forced
                    // ticks don't necessarily fit naturally
                    if (!axis.mode && opts.tickDecimals == null) {
                        var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1),
                            ts = axis.tickGenerator(axis);

                        // only proceed if the tick interval rounded
                        // with an extra decimal doesn't give us a
                        // zero at end
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
                            axis.tickDecimals = extraDec;
                    }
                }
            }
        }

        function setTicks(axis) {
            var oticks = axis.options.ticks, ticks = [];
            if (oticks == null || (typeof oticks == "number" && oticks > 0))
                ticks = axis.tickGenerator(axis);
            else if (oticks) {
                if ($.isFunction(oticks))
                    // generate the ticks
                    ticks = oticks(axis);
                else
                    ticks = oticks;
            }

            // clean up/labelify the supplied ticks, copy them over
            var i, v;
            axis.ticks = [];
            for (i = 0; i < ticks.length; ++i) {
                var label = null;
                var t = ticks[i];
                if (typeof t == "object") {
                    v = +t[0];
                    if (t.length > 1)
                        label = t[1];
                }
                else
                    v = +t;
                if (label == null)
                    label = axis.tickFormatter(v, axis);
                if (!isNaN(v))
                    axis.ticks.push({ v: v, label: label });
            }
        }

        function snapRangeToTicks(axis, ticks) {
            if (axis.options.autoscaleMargin && ticks.length > 0) {
                // snap to ticks
                if (axis.options.min == null)
                    axis.min = Math.min(axis.min, ticks[0].v);
                if (axis.options.max == null && ticks.length > 1)
                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
            }
        }

        function draw() {

            surface.clear();

            executeHooks(hooks.drawBackground, [ctx]);

            var grid = options.grid;

            // draw background, if any
            if (grid.show && grid.backgroundColor)
                drawBackground();

            if (grid.show && !grid.aboveData) {
                drawGrid();
            }

            for (var i = 0; i < series.length; ++i) {
                executeHooks(hooks.drawSeries, [ctx, series[i]]);
                drawSeries(series[i]);
            }

            executeHooks(hooks.draw, [ctx]);

            if (grid.show && grid.aboveData) {
                drawGrid();
            }

            surface.render();

            // A draw implies that either the axes or data have changed, so we
            // should probably update the overlay highlights as well.

            triggerRedrawOverlay();
        }

        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = allAxes();

            for (var i = 0; i < axes.length; ++i) {
                axis = axes[i];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)
                        key = coord + "axis"; // support x1axis as xaxis
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break;
                    }
                }
            }

            // backwards-compat stuff - to be removed in future
            if (!ranges[key]) {
                axis = coord == "x" ? xaxes[0] : yaxes[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"];
            }

            // auto-reverse as an added bonus
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp;
            }

            return { from: from, to: to, axis: axis };
        }

        function drawBackground() {
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
            ctx.fillRect(0, 0, plotWidth, plotHeight);
            ctx.restore();
        }

        function drawGrid() {
            var i, axes, bw, bc;

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // draw markings
            var markings = options.grid.markings;
            if (markings) {
                if ($.isFunction(markings)) {
                    axes = plot.getAxes();
                    // xmin etc. is backwards compatibility, to be
                    // removed in the future
                    axes.xmin = axes.xaxis.min;
                    axes.xmax = axes.xaxis.max;
                    axes.ymin = axes.yaxis.min;
                    axes.ymax = axes.yaxis.max;

                    markings = markings(axes);
                }

                for (i = 0; i < markings.length; ++i) {
                    var m = markings[i],
                        xrange = extractRange(m, "x"),
                        yrange = extractRange(m, "y");

                    // fill in missing
                    if (xrange.from == null)
                        xrange.from = xrange.axis.min;
                    if (xrange.to == null)
                        xrange.to = xrange.axis.max;
                    if (yrange.from == null)
                        yrange.from = yrange.axis.min;
                    if (yrange.to == null)
                        yrange.to = yrange.axis.max;

                    // clip
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
                        continue;

                    xrange.from = Math.max(xrange.from, xrange.axis.min);
                    xrange.to = Math.min(xrange.to, xrange.axis.max);
                    yrange.from = Math.max(yrange.from, yrange.axis.min);
                    yrange.to = Math.min(yrange.to, yrange.axis.max);

                    var xequal = xrange.from === xrange.to,
                        yequal = yrange.from === yrange.to;

                    if (xequal && yequal) {
                        continue;
                    }

                    // then draw
                    xrange.from = Math.floor(xrange.axis.p2c(xrange.from));
                    xrange.to = Math.floor(xrange.axis.p2c(xrange.to));
                    yrange.from = Math.floor(yrange.axis.p2c(yrange.from));
                    yrange.to = Math.floor(yrange.axis.p2c(yrange.to));

                    if (xequal || yequal) {
                        var lineWidth = m.lineWidth || options.grid.markingsLineWidth,
                            subPixel = lineWidth % 2 ? 0.5 : 0;
                        ctx.beginPath();
                        ctx.strokeStyle = m.color || options.grid.markingsColor;
                        ctx.lineWidth = lineWidth;
                        if (xequal) {
                            ctx.moveTo(xrange.to + subPixel, yrange.from);
                            ctx.lineTo(xrange.to + subPixel, yrange.to);
                        } else {
                            ctx.moveTo(xrange.from, yrange.to + subPixel);
                            ctx.lineTo(xrange.to, yrange.to + subPixel);                            
                        }
                        ctx.stroke();
                    } else {
                        ctx.fillStyle = m.color || options.grid.markingsColor;
                        ctx.fillRect(xrange.from, yrange.to,
                                     xrange.to - xrange.from,
                                     yrange.from - yrange.to);
                    }
                }
            }

            // draw the ticks
            axes = allAxes();
            bw = options.grid.borderWidth;

            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box,
                    t = axis.tickLength, x, y, xoff, yoff;
                if (!axis.show || axis.ticks.length == 0)
                    continue;

                ctx.lineWidth = 1;

                // find the edges
                if (axis.direction == "x") {
                    x = 0;
                    if (t == "full")
                        y = (axis.position == "top" ? 0 : plotHeight);
                    else
                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
                }
                else {
                    y = 0;
                    if (t == "full")
                        x = (axis.position == "left" ? 0 : plotWidth);
                    else
                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
                }

                // draw tick bar
                if (!axis.innermost) {
                    ctx.strokeStyle = axis.options.color;
                    ctx.beginPath();
                    xoff = yoff = 0;
                    if (axis.direction == "x")
                        xoff = plotWidth + 1;
                    else
                        yoff = plotHeight + 1;

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x") {
                            y = Math.floor(y) + 0.5;
                        } else {
                            x = Math.floor(x) + 0.5;
                        }
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                    ctx.stroke();
                }

                // draw ticks

                ctx.strokeStyle = axis.options.tickColor;

                ctx.beginPath();
                for (i = 0; i < axis.ticks.length; ++i) {
                    var v = axis.ticks[i].v;

                    xoff = yoff = 0;

                    if (isNaN(v) || v < axis.min || v > axis.max
                        // skip those lying on the axes if we got a border
                        || (t == "full"
                            && ((typeof bw == "object" && bw[axis.position] > 0) || bw > 0)
                            && (v == axis.min || v == axis.max)))
                        continue;

                    if (axis.direction == "x") {
                        x = axis.p2c(v);
                        yoff = t == "full" ? -plotHeight : t;

                        if (axis.position == "top")
                            yoff = -yoff;
                    }
                    else {
                        y = axis.p2c(v);
                        xoff = t == "full" ? -plotWidth : t;

                        if (axis.position == "left")
                            xoff = -xoff;
                    }

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x")
                            x = Math.floor(x) + 0.5;
                        else
                            y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                }

                ctx.stroke();
            }


            // draw border
            if (bw) {
                // If either borderWidth or borderColor is an object, then draw the border
                // line by line instead of as one rectangle
                bc = options.grid.borderColor;
                if(typeof bw == "object" || typeof bc == "object") {
                    if (typeof bw !== "object") {
                        bw = {top: bw, right: bw, bottom: bw, left: bw};
                    }
                    if (typeof bc !== "object") {
                        bc = {top: bc, right: bc, bottom: bc, left: bc};
                    }

                    if (bw.top > 0) {
                        ctx.strokeStyle = bc.top;
                        ctx.lineWidth = bw.top;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left, 0 - bw.top/2);
                        ctx.lineTo(plotWidth, 0 - bw.top/2);
                        ctx.stroke();
                    }

                    if (bw.right > 0) {
                        ctx.strokeStyle = bc.right;
                        ctx.lineWidth = bw.right;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);
                        ctx.lineTo(plotWidth + bw.right / 2, plotHeight);
                        ctx.stroke();
                    }

                    if (bw.bottom > 0) {
                        ctx.strokeStyle = bc.bottom;
                        ctx.lineWidth = bw.bottom;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);
                        ctx.lineTo(0, plotHeight + bw.bottom / 2);
                        ctx.stroke();
                    }

                    if (bw.left > 0) {
                        ctx.strokeStyle = bc.left;
                        ctx.lineWidth = bw.left;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left/2, plotHeight + bw.bottom);
                        ctx.lineTo(0- bw.left/2, 0);
                        ctx.stroke();
                    }
                }
                else {
                    ctx.lineWidth = bw;
                    ctx.strokeStyle = options.grid.borderColor;
                    ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
                }
            }

            ctx.restore();
        }

        function drawAxisLabels() {

            $.each(allAxes(), function (_, axis) {
                var box = axis.box,
                    legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                    layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                    font = axis.options.font || "flot-tick-label tickLabel",
                    tick, x, y, halign, valign;

                // Remove text before checking for axis.show and ticks.length;
                // otherwise plugins, like flot-tickrotor, that draw their own
                // tick labels will end up with both theirs and the defaults.

                surface.removeText(layer);

                if (!axis.show || axis.ticks.length == 0)
                    return;

                for (var i = 0; i < axis.ticks.length; ++i) {

                    tick = axis.ticks[i];
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)
                        continue;

                    if (axis.direction == "x") {
                        halign = "center";
                        x = plotOffset.left + axis.p2c(tick.v);
                        if (axis.position == "bottom") {
                            y = box.top + box.padding;
                        } else {
                            y = box.top + box.height - box.padding;
                            valign = "bottom";
                        }
                    } else {
                        valign = "middle";
                        y = plotOffset.top + axis.p2c(tick.v);
                        if (axis.position == "left") {
                            x = box.left + box.width - box.padding;
                            halign = "right";
                        } else {
                            x = box.left + box.padding;
                        }
                    }

                    surface.addText(layer, x, y, tick.label, font, null, null, halign, valign);
                }
            });
        }

        function drawSeries(series) {
            if (series.lines.show)
                drawSeriesLines(series);
            if (series.bars.show)
                drawSeriesBars(series);
            if (series.points.show)
                drawSeriesPoints(series);
        }

        function drawSeriesLines(series) {
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    prevx = null, prevy = null;

                ctx.beginPath();
                for (var i = ps; i < points.length; i += ps) {
                    var x1 = points[i - ps], y1 = points[i - ps + 1],
                        x2 = points[i], y2 = points[i + 1];

                    if (x1 == null || x2 == null)
                        continue;

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min) {
                        if (y2 < axisy.min)
                            continue;   // line segment is outside
                        // compute new intersection point
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min) {
                        if (y1 < axisy.min)
                            continue;
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max) {
                        if (y2 > axisy.max)
                            continue;
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max) {
                        if (y1 > axisy.max)
                            continue;
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (x1 != prevx || y1 != prevy)
                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);

                    prevx = x2;
                    prevy = y2;
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
                }
                ctx.stroke();
            }

            function plotLineArea(datapoints, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),
                    i = 0, top, areaOpen = false,
                    ypos = 1, segmentStart = 0, segmentEnd = 0;

                // we process each segment in two turns, first forward
                // direction to sketch out top, then once we hit the
                // end we go backwards to sketch the bottom
                while (true) {
                    if (ps > 0 && i > points.length + ps)
                        break;

                    i += ps; // ps is negative if going backwards

                    var x1 = points[i - ps],
                        y1 = points[i - ps + ypos],
                        x2 = points[i], y2 = points[i + ypos];

                    if (areaOpen) {
                        if (ps > 0 && x1 != null && x2 == null) {
                            // at turning point
                            segmentEnd = i;
                            ps = -ps;
                            ypos = 2;
                            continue;
                        }

                        if (ps < 0 && i == segmentStart + ps) {
                            // done with the reverse sweep
                            ctx.fill();
                            areaOpen = false;
                            ps = -ps;
                            ypos = 1;
                            i = segmentStart = segmentEnd + ps;
                            continue;
                        }
                    }

                    if (x1 == null || x2 == null)
                        continue;

                    // clip x values

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (!areaOpen) {
                        // open area
                        ctx.beginPath();
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                        areaOpen = true;
                    }

                    // now first check the case where both is outside
                    if (y1 >= axisy.max && y2 >= axisy.max) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                        continue;
                    }
                    else if (y1 <= axisy.min && y2 <= axisy.min) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                        continue;
                    }

                    // else it's a bit more complicated, there might
                    // be a flat maxed out rectangle first, then a
                    // triangular cutout or reverse; to find these
                    // keep track of the current x values
                    var x1old = x1, x2old = x2;

                    // clip the y values, without shortcutting, we
                    // go through all cases in turn

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // if the x value was changed we got a rectangle
                    // to fill
                    if (x1 != x1old) {
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
                        // it goes to (x1, y1), but we fill that below
                    }

                    // fill triangular section, this sometimes result
                    // in redundant points if (x1, y1) hasn't changed
                    // from previous line to, but we just ignore that
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

                    // fill the other rectangle if it's there
                    if (x2 != x2old) {
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
                    }
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineJoin = "round";

            var lw = series.lines.lineWidth,
                sw = series.shadowSize;
            // FIXME: consider another form of shadow when filling is turned on
            if (lw > 0 && sw > 0) {
                // draw shadow as a thick and thin line with transparency
                ctx.lineWidth = sw;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                // position shadow at angle from the mid of line
                var angle = Math.PI/18;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw/2;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                plotLineArea(series.datapoints, series.xaxis, series.yaxis);
            }

            if (lw > 0)
                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function drawSeriesPoints(series) {
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                        continue;

                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                    else
                        symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();

                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            var lw = series.points.lineWidth,
                sw = series.shadowSize,
                radius = series.points.radius,
                symbol = series.points.symbol;

            // If the user sets the line width to 0, we change it to a very 
            // small value. A line width of 0 seems to force the default of 1.
            // Doing the conditional here allows the shadow setting to still be 
            // optional even with a lineWidth of 0.

            if( lw == 0 )
                lw = 0.0001;

            if (lw > 0 && sw > 0) {
                // draw shadow in two steps
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series.datapoints, radius, null, w + w/2, true,
                           series.xaxis, series.yaxis, symbol);

                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w/2, true,
                           series.xaxis, series.yaxis, symbol);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series.datapoints, radius,
                       getFillStyle(series.points, series.color), 0, false,
                       series.xaxis, series.yaxis, symbol);
            ctx.restore();
        }

        function drawBar(x, y, b, barLeft, barRight, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top,
                drawLeft, drawRight, drawTop, drawBottom,
                tmp;

            // in horizontal mode, we start the bar from the left
            // instead of from the bottom so it appears to be
            // horizontal rather than vertical
            if (horizontal) {
                drawBottom = drawRight = drawTop = true;
                drawLeft = false;
                left = b;
                right = x;
                top = y + barLeft;
                bottom = y + barRight;

                // account for negative bars
                if (right < left) {
                    tmp = right;
                    right = left;
                    left = tmp;
                    drawLeft = true;
                    drawRight = false;
                }
            }
            else {
                drawLeft = drawRight = drawTop = true;
                drawBottom = false;
                left = x + barLeft;
                right = x + barRight;
                bottom = b;
                top = y;

                // account for negative bars
                if (top < bottom) {
                    tmp = top;
                    top = bottom;
                    bottom = tmp;
                    drawBottom = true;
                    drawTop = false;
                }
            }

            // clip
            if (right < axisx.min || left > axisx.max ||
                top < axisy.min || bottom > axisy.max)
                return;

            if (left < axisx.min) {
                left = axisx.min;
                drawLeft = false;
            }

            if (right > axisx.max) {
                right = axisx.max;
                drawRight = false;
            }

            if (bottom < axisy.min) {
                bottom = axisy.min;
                drawBottom = false;
            }

            if (top > axisy.max) {
                top = axisy.max;
                drawTop = false;
            }

            left = axisx.p2c(left);
            bottom = axisy.p2c(bottom);
            right = axisx.p2c(right);
            top = axisy.p2c(top);

            // fill the bar
            if (fillStyleCallback) {
                c.fillStyle = fillStyleCallback(bottom, top);
                c.fillRect(left, top, right - left, bottom - top)
            }

            // draw outline
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
                c.beginPath();

                // FIXME: inline moveTo is buggy with excanvas
                c.moveTo(left, bottom);
                if (drawLeft)
                    c.lineTo(left, top);
                else
                    c.moveTo(left, top);
                if (drawTop)
                    c.lineTo(right, top);
                else
                    c.moveTo(right, top);
                if (drawRight)
                    c.lineTo(right, bottom);
                else
                    c.moveTo(right, bottom);
                if (drawBottom)
                    c.lineTo(left, bottom);
                else
                    c.moveTo(left, bottom);
                c.stroke();
            }
        }

        function drawSeriesBars(series) {
            function plotBars(datapoints, barLeft, barRight, fillStyleCallback, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    if (points[i] == null)
                        continue;
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // FIXME: figure out a way to add shadows (for instance along the right edge)
            ctx.lineWidth = series.bars.lineWidth;
            ctx.strokeStyle = series.color;

            var barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function getFillStyle(filloptions, seriesColor, bottom, top) {
            var fill = filloptions.fill;
            if (!fill)
                return null;

            if (filloptions.fillColor)
                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);

            var c = $.color.parse(seriesColor);
            c.a = typeof fill == "number" ? fill : 0.4;
            c.normalize();
            return c.toString();
        }

        function insertLegend() {

            if (options.legend.container != null) {
                $(options.legend.container).html("");
            } else {
                placeholder.find(".legend").remove();
            }

            if (!options.legend.show) {
                return;
            }

            var fragments = [], entries = [], rowStarted = false,
                lf = options.legend.labelFormatter, s, label;

            // Build a list of legend entries, with each having a label and a color

            for (var i = 0; i < series.length; ++i) {
                s = series[i];
                if (s.label) {
                    label = lf ? lf(s.label, s) : s.label;
                    if (label) {
                        entries.push({
                            label: label,
                            color: s.color
                        });
                    }
                }
            }

            // Sort the legend using either the default or a custom comparator

            if (options.legend.sorted) {
                if ($.isFunction(options.legend.sorted)) {
                    entries.sort(options.legend.sorted);
                } else if (options.legend.sorted == "reverse") {
                	entries.reverse();
                } else {
                    var ascending = options.legend.sorted != "descending";
                    entries.sort(function(a, b) {
                        return a.label == b.label ? 0 : (
                            (a.label < b.label) != ascending ? 1 : -1   // Logical XOR
                        );
                    });
                }
            }

            // Generate markup for the list of entries, in their final order

            for (var i = 0; i < entries.length; ++i) {

                var entry = entries[i];

                if (i % options.legend.noColumns == 0) {
                    if (rowStarted)
                        fragments.push('</tr>');
                    fragments.push('<tr>');
                    rowStarted = true;
                }

                fragments.push(
                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' +
                    '<td class="legendLabel">' + entry.label + '</td>'
                );
            }

            if (rowStarted)
                fragments.push('</tr>');

            if (fragments.length == 0)
                return;

            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
            if (options.legend.container != null)
                $(options.legend.container).html(table);
            else {
                var pos = "",
                    p = options.legend.position,
                    m = options.legend.margin;
                if (m[0] == null)
                    m = [m, m];
                if (p.charAt(0) == "n")
                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
                else if (p.charAt(0) == "s")
                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
                if (p.charAt(1) == "e")
                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
                else if (p.charAt(1) == "w")
                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0.0) {
                    // put in the transparent background
                    // separately to avoid blended labels and
                    // label boxes
                    var c = options.legend.backgroundColor;
                    if (c == null) {
                        c = options.grid.backgroundColor;
                        if (c && typeof c == "string")
                            c = $.color.parse(c);
                        else
                            c = $.color.extract(legend, 'background-color');
                        c.a = 1;
                        c = c.toString();
                    }
                    var div = legend.children();
                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
                }
            }
        }


        // interactive features

        var highlights = [],
            redrawTimeout = null;

        // returns the data item the mouse is over, or null if none is found
        function findNearbyItem(mouseX, mouseY, seriesFilter) {
            var maxDistance = options.grid.mouseActiveRadius,
                smallestDistance = maxDistance * maxDistance + 1,
                item = null, foundPoint = false, i, j, ps;

            for (i = series.length - 1; i >= 0; --i) {
                if (!seriesFilter(series[i]))
                    continue;

                var s = series[i],
                    axisx = s.xaxis,
                    axisy = s.yaxis,
                    points = s.datapoints.points,
                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
                    my = axisy.c2p(mouseY),
                    maxx = maxDistance / axisx.scale,
                    maxy = maxDistance / axisy.scale;

                ps = s.datapoints.pointsize;
                // with inverse transforms, we can't use the maxx/maxy
                // optimization, sadly
                if (axisx.options.inverseTransform)
                    maxx = Number.MAX_VALUE;
                if (axisy.options.inverseTransform)
                    maxy = Number.MAX_VALUE;

                if (s.lines.show || s.points.show) {
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1];
                        if (x == null)
                            continue;

                        // For points and lines, the cursor must be within a
                        // certain distance to the data point
                        if (x - mx > maxx || x - mx < -maxx ||
                            y - my > maxy || y - my < -maxy)
                            continue;

                        // We have to calculate distances in pixels, not in
                        // data units, because the scales of the axes may be different
                        var dx = Math.abs(axisx.p2c(x) - mouseX),
                            dy = Math.abs(axisy.p2c(y) - mouseY),
                            dist = dx * dx + dy * dy; // we save the sqrt

                        // use <= to ensure last point takes precedence
                        // (last generally means on top of)
                        if (dist < smallestDistance) {
                            smallestDistance = dist;
                            item = [i, j / ps];
                        }
                    }
                }

                if (s.bars.show && !item) { // no other point can be nearby

                    var barLeft, barRight;

                    switch (s.bars.align) {
                        case "left":
                            barLeft = 0;
                            break;
                        case "right":
                            barLeft = -s.bars.barWidth;
                            break;
                        default:
                            barLeft = -s.bars.barWidth / 2;
                    }

                    barRight = barLeft + s.bars.barWidth;

                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1], b = points[j + 2];
                        if (x == null)
                            continue;

                        // for a bar graph, the cursor must be inside the bar
                        if (series[i].bars.horizontal ?
                            (mx <= Math.max(b, x) && mx >= Math.min(b, x) &&
                             my >= y + barLeft && my <= y + barRight) :
                            (mx >= x + barLeft && mx <= x + barRight &&
                             my >= Math.min(b, y) && my <= Math.max(b, y)))
                                item = [i, j / ps];
                    }
                }
            }

            if (item) {
                i = item[0];
                j = item[1];
                ps = series[i].datapoints.pointsize;

                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                         dataIndex: j,
                         series: series[i],
                         seriesIndex: i };
            }

            return null;
        }

        function onMouseMove(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return s["hoverable"] != false; });
        }

        function onMouseLeave(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return false; });
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e,
                                   function (s) { return s["clickable"] != false; });
        }

        // trigger click or hover event (they send the same parameters
        // so we share their code)
        function triggerClickHoverEvent(eventname, event, seriesFilter) {
            var offset = eventHolder.offset(),
                canvasX = event.pageX - offset.left - plotOffset.left,
                canvasY = event.pageY - offset.top - plotOffset.top,
            pos = canvasToAxisCoords({ left: canvasX, top: canvasY });

            pos.pageX = event.pageX;
            pos.pageY = event.pageY;

            var item = findNearbyItem(canvasX, canvasY, seriesFilter);

            if (item) {
                // fill in mouse pos for any listeners out there
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10);
            }

            if (options.grid.autoHighlight) {
                // clear auto-highlights
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname &&
                        !(item && h.series == item.series &&
                          h.point[0] == item.datapoint[0] &&
                          h.point[1] == item.datapoint[1]))
                        unhighlight(h.series, h.point);
                }

                if (item)
                    highlight(item.series, item.datapoint, eventname);
            }

            placeholder.trigger(eventname, [ pos, item ]);
        }

        function triggerRedrawOverlay() {
            var t = options.interaction.redrawOverlayInterval;
            if (t == -1) {      // skip event queue
                drawOverlay();
                return;
            }

            if (!redrawTimeout)
                redrawTimeout = setTimeout(drawOverlay, t);
        }

        function drawOverlay() {
            redrawTimeout = null;

            // draw highlights
            octx.save();
            overlay.clear();
            octx.translate(plotOffset.left, plotOffset.top);

            var i, hi;
            for (i = 0; i < highlights.length; ++i) {
                hi = highlights[i];

                if (hi.series.bars.show)
                    drawBarHighlight(hi.series, hi.point);
                else
                    drawPointHighlight(hi.series, hi.point);
            }
            octx.restore();

            executeHooks(hooks.drawOverlay, [octx]);
        }

        function highlight(s, point, auto) {
            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i == -1) {
                highlights.push({ series: s, point: point, auto: auto });

                triggerRedrawOverlay();
            }
            else if (!auto)
                highlights[i].auto = false;
        }

        function unhighlight(s, point) {
            if (s == null && point == null) {
                highlights = [];
                triggerRedrawOverlay();
                return;
            }

            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i != -1) {
                highlights.splice(i, 1);

                triggerRedrawOverlay();
            }
        }

        function indexOfHighlight(s, p) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s && h.point[0] == p[0]
                    && h.point[1] == p[1])
                    return i;
            }
            return -1;
        }

        function drawPointHighlight(series, point) {
            var x = point[0], y = point[1],
                axisx = series.xaxis, axisy = series.yaxis,
                highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString();

            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                return;

            var pointRadius = series.points.radius + series.points.lineWidth / 2;
            octx.lineWidth = pointRadius;
            octx.strokeStyle = highlightColor;
            var radius = 1.5 * pointRadius;
            x = axisx.p2c(x);
            y = axisy.p2c(y);

            octx.beginPath();
            if (series.points.symbol == "circle")
                octx.arc(x, y, radius, 0, 2 * Math.PI, false);
            else
                series.points.symbol(octx, x, y, radius, false);
            octx.closePath();
            octx.stroke();
        }

        function drawBarHighlight(series, point) {
            var highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString(),
                fillStyle = highlightColor,
                barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            octx.lineWidth = series.bars.lineWidth;
            octx.strokeStyle = highlightColor;

            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
                    function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
        }

        function getColorOrGradient(spec, bottom, top, defaultColor) {
            if (typeof spec == "string")
                return spec;
            else {
                // assume this is a gradient spec; IE currently only
                // supports a simple vertical gradient properly, so that's
                // what we support too
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);

                for (var i = 0, l = spec.colors.length; i < l; ++i) {
                    var c = spec.colors[i];
                    if (typeof c != "string") {
                        var co = $.color.parse(defaultColor);
                        if (c.brightness != null)
                            co = co.scale('rgb', c.brightness);
                        if (c.opacity != null)
                            co.a *= c.opacity;
                        c = co.toString();
                    }
                    gradient.addColorStop(i / (l - 1), c);
                }

                return gradient;
            }
        }
    }

    // Add the plot function to the top level of the jQuery object

    $.plot = function(placeholder, data, options) {
        //var t0 = new Date();
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
        //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));
        return plot;
    };

    $.plot.version = "0.8.3";

    $.plot.plugins = [];

    // Also add the plot function as a chainable property

    $.fn.plot = function(data, options) {
        return this.each(function() {
            $.plot(this, data, options);
        });
    };

    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }

})(jQuery);

/* Flot plugin for automatically redrawing plots as the placeholder resizes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

It works by listening for changes on the placeholder div (through the jQuery
resize event plugin) - if the size changes, it will redraw the plot.

There are no options. If you need to disable the plugin for some plots, you
can just fix the size of their placeholders.

*/

/* Inline dependency:
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,t){"$:nomunge";var i=[],n=$.resize=$.extend($.resize,{}),a,r=false,s="setTimeout",u="resize",m=u+"-special-event",o="pendingDelay",l="activeDelay",f="throttleWindow";n[o]=200;n[l]=20;n[f]=true;$.event.special[u]={setup:function(){if(!n[f]&&this[s]){return false}var e=$(this);i.push(this);e.data(m,{w:e.width(),h:e.height()});if(i.length===1){a=t;h()}},teardown:function(){if(!n[f]&&this[s]){return false}var e=$(this);for(var t=i.length-1;t>=0;t--){if(i[t]==this){i.splice(t,1);break}}e.removeData(m);if(!i.length){if(r){cancelAnimationFrame(a)}else{clearTimeout(a)}a=null}},add:function(e){if(!n[f]&&this[s]){return false}var i;function a(e,n,a){var r=$(this),s=r.data(m)||{};s.w=n!==t?n:r.width();s.h=a!==t?a:r.height();i.apply(this,arguments)}if($.isFunction(e)){i=e;return a}else{i=e.handler;e.handler=a}}};function h(t){if(r===true){r=t||1}for(var s=i.length-1;s>=0;s--){var l=$(i[s]);if(l[0]==e||l.is(":visible")){var f=l.width(),c=l.height(),d=l.data(m);if(d&&(f!==d.w||c!==d.h)){l.trigger(u,[d.w=f,d.h=c]);r=t||true}}else{d=l.data(m);d.w=0;d.h=0}}if(a!==null){if(r&&(t==null||t-r<1e3)){a=e.requestAnimationFrame(h)}else{a=setTimeout(h,n[o]);r=false}}}if(!e.requestAnimationFrame){e.requestAnimationFrame=function(){return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t,i){return e.setTimeout(function(){t((new Date).getTime())},n[l])}}()}if(!e.cancelAnimationFrame){e.cancelAnimationFrame=function(){return e.webkitCancelRequestAnimationFrame||e.mozCancelRequestAnimationFrame||e.oCancelRequestAnimationFrame||e.msCancelRequestAnimationFrame||clearTimeout}()}})(jQuery,this);

(function ($) {
    var options = { }; // no options

    function init(plot) {
        function onResize() {
            var placeholder = plot.getPlaceholder();

            // somebody might have hidden us and we can't plot
            // when we don't have the dimensions
            if (placeholder.width() == 0 || placeholder.height() == 0)
                return;

            plot.resize();
            plot.setupGrid();
            plot.draw();
        }
        
        function bindEvents(plot, eventHolder) {
            plot.getPlaceholder().resize(onResize);
        }

        function shutdown(plot, eventHolder) {
            plot.getPlaceholder().unbind("resize", onResize);
        }
        
        plot.hooks.bindEvents.push(bindEvents);
        plot.hooks.shutdown.push(shutdown);
    }
    
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'resize',
        version: '1.0'
    });
})(jQuery);

/* Flot plugin for stacking data sets rather than overlyaing them.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes the data is sorted on x (or y if stacking horizontally).
For line charts, it is assumed that if a line has an undefined gap (from a
null point), then the line above it should have the same gap - insert zeros
instead of "null" if you want another behaviour. This also holds for the start
and end of the chart. Note that stacking a mix of positive and negative values
in most instances doesn't make sense (so it looks weird).

Two or more series are stacked when their "stack" attribute is set to the same
key (which can be any number or string or just "true"). To specify the default
stack, you can set the stack option like this:

	series: {
		stack: null/false, true, or a key (number/string)
	}

You can also specify it for a single series, like this:

	$.plot( $("#placeholder"), [{
		data: [ ... ],
		stack: true
	}])

The stacking order is determined by the order of the data series in the array
(later series end up on top of the previous).

Internally, the plugin modifies the datapoints in each series, adding an
offset to the y value. For line series, extra data points are inserted through
interpolation. If there's a second y value, it's also adjusted (e.g for bar
charts or filled areas).

*/

(function ($) {
    var options = {
        series: { stack: null } // or number/string
    };
    
    function init(plot) {
        function findMatchingSeries(s, allseries) {
            var res = null;
            for (var i = 0; i < allseries.length; ++i) {
                if (s == allseries[i])
                    break;
                
                if (allseries[i].stack == s.stack)
                    res = allseries[i];
            }
            
            return res;
        }
        
        function stackData(plot, s, datapoints) {
            if (s.stack == null || s.stack === false)
                return;

            var other = findMatchingSeries(s, plot.getData());
            if (!other)
                return;

            var ps = datapoints.pointsize,
                points = datapoints.points,
                otherps = other.datapoints.pointsize,
                otherpoints = other.datapoints.points,
                newpoints = [],
                px, py, intery, qx, qy, bottom,
                withlines = s.lines.show,
                horizontal = s.bars.horizontal,
                withbottom = ps > 2 && (horizontal ? datapoints.format[2].x : datapoints.format[2].y),
                withsteps = withlines && s.lines.steps,
                fromgap = true,
                keyOffset = horizontal ? 1 : 0,
                accumulateOffset = horizontal ? 0 : 1,
                i = 0, j = 0, l, m;

            while (true) {
                if (i >= points.length)
                    break;

                l = newpoints.length;

                if (points[i] == null) {
                    // copy gaps
                    for (m = 0; m < ps; ++m)
                        newpoints.push(points[i + m]);
                    i += ps;
                }
                else if (j >= otherpoints.length) {
                    // for lines, we can't use the rest of the points
                    if (!withlines) {
                        for (m = 0; m < ps; ++m)
                            newpoints.push(points[i + m]);
                    }
                    i += ps;
                }
                else if (otherpoints[j] == null) {
                    // oops, got a gap
                    for (m = 0; m < ps; ++m)
                        newpoints.push(null);
                    fromgap = true;
                    j += otherps;
                }
                else {
                    // cases where we actually got two points
                    px = points[i + keyOffset];
                    py = points[i + accumulateOffset];
                    qx = otherpoints[j + keyOffset];
                    qy = otherpoints[j + accumulateOffset];
                    bottom = 0;

                    if (px == qx) {
                        for (m = 0; m < ps; ++m)
                            newpoints.push(points[i + m]);

                        newpoints[l + accumulateOffset] += qy;
                        bottom = qy;
                        
                        i += ps;
                        j += otherps;
                    }
                    else if (px > qx) {
                        // we got past point below, might need to
                        // insert interpolated extra point
                        if (withlines && i > 0 && points[i - ps] != null) {
                            intery = py + (points[i - ps + accumulateOffset] - py) * (qx - px) / (points[i - ps + keyOffset] - px);
                            newpoints.push(qx);
                            newpoints.push(intery + qy);
                            for (m = 2; m < ps; ++m)
                                newpoints.push(points[i + m]);
                            bottom = qy; 
                        }

                        j += otherps;
                    }
                    else { // px < qx
                        if (fromgap && withlines) {
                            // if we come from a gap, we just skip this point
                            i += ps;
                            continue;
                        }
                            
                        for (m = 0; m < ps; ++m)
                            newpoints.push(points[i + m]);
                        
                        // we might be able to interpolate a point below,
                        // this can give us a better y
                        if (withlines && j > 0 && otherpoints[j - otherps] != null)
                            bottom = qy + (otherpoints[j - otherps + accumulateOffset] - qy) * (px - qx) / (otherpoints[j - otherps + keyOffset] - qx);

                        newpoints[l + accumulateOffset] += bottom;
                        
                        i += ps;
                    }

                    fromgap = false;
                    
                    if (l != newpoints.length && withbottom)
                        newpoints[l + 2] += bottom;
                }

                // maintain the line steps invariant
                if (withsteps && l != newpoints.length && l > 0
                    && newpoints[l] != null
                    && newpoints[l] != newpoints[l - ps]
                    && newpoints[l + 1] != newpoints[l - ps + 1]) {
                    for (m = 0; m < ps; ++m)
                        newpoints[l + ps + m] = newpoints[l + m];
                    newpoints[l + 1] = newpoints[l - ps + 1];
                }
            }

            datapoints.points = newpoints;
        }
        
        plot.hooks.processDatapoints.push(stackData);
    }
    
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'stack',
        version: '1.2'
    });
})(jQuery);

/* Pretty handling of time axes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

Set axis.mode to "time" to enable. See the section "Time series data" in
API.txt for details.

*/

(function($) {

	var options = {
		xaxis: {
			timezone: null,		// "browser" for local to the client or timezone for timezone-js
			timeformat: null,	// format string to use
			twelveHourClock: false,	// 12 or 24 time in time mode
			monthNames: null	// list of names of months
		}
	};

	// round to nearby lower multiple of base

	function floorInBase(n, base) {
		return base * Math.floor(n / base);
	}

	// Returns a string with the date d formatted according to fmt.
	// A subset of the Open Group's strftime format is supported.

	function formatDate(d, fmt, monthNames, dayNames) {

		if (typeof d.strftime == "function") {
			return d.strftime(fmt);
		}

		var leftPad = function(n, pad) {
			n = "" + n;
			pad = "" + (pad == null ? "0" : pad);
			return n.length == 1 ? pad + n : n;
		};

		var r = [];
		var escape = false;
		var hours = d.getHours();
		var isAM = hours < 12;

		if (monthNames == null) {
			monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		}

		if (dayNames == null) {
			dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		}

		var hours12;

		if (hours > 12) {
			hours12 = hours - 12;
		} else if (hours == 0) {
			hours12 = 12;
		} else {
			hours12 = hours;
		}

		for (var i = 0; i < fmt.length; ++i) {

			var c = fmt.charAt(i);

			if (escape) {
				switch (c) {
					case 'a': c = "" + dayNames[d.getDay()]; break;
					case 'b': c = "" + monthNames[d.getMonth()]; break;
					case 'd': c = leftPad(d.getDate()); break;
					case 'e': c = leftPad(d.getDate(), " "); break;
					case 'h':	// For back-compat with 0.7; remove in 1.0
					case 'H': c = leftPad(hours); break;
					case 'I': c = leftPad(hours12); break;
					case 'l': c = leftPad(hours12, " "); break;
					case 'm': c = leftPad(d.getMonth() + 1); break;
					case 'M': c = leftPad(d.getMinutes()); break;
					// quarters not in Open Group's strftime specification
					case 'q':
						c = "" + (Math.floor(d.getMonth() / 3) + 1); break;
					case 'S': c = leftPad(d.getSeconds()); break;
					case 'y': c = leftPad(d.getFullYear() % 100); break;
					case 'Y': c = "" + d.getFullYear(); break;
					case 'p': c = (isAM) ? ("" + "am") : ("" + "pm"); break;
					case 'P': c = (isAM) ? ("" + "AM") : ("" + "PM"); break;
					case 'w': c = "" + d.getDay(); break;
				}
				r.push(c);
				escape = false;
			} else {
				if (c == "%") {
					escape = true;
				} else {
					r.push(c);
				}
			}
		}

		return r.join("");
	}

	// To have a consistent view of time-based data independent of which time
	// zone the client happens to be in we need a date-like object independent
	// of time zones.  This is done through a wrapper that only calls the UTC
	// versions of the accessor methods.

	function makeUtcWrapper(d) {

		function addProxyMethod(sourceObj, sourceMethod, targetObj, targetMethod) {
			sourceObj[sourceMethod] = function() {
				return targetObj[targetMethod].apply(targetObj, arguments);
			};
		};

		var utc = {
			date: d
		};

		// support strftime, if found

		if (d.strftime != undefined) {
			addProxyMethod(utc, "strftime", d, "strftime");
		}

		addProxyMethod(utc, "getTime", d, "getTime");
		addProxyMethod(utc, "setTime", d, "setTime");

		var props = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"];

		for (var p = 0; p < props.length; p++) {
			addProxyMethod(utc, "get" + props[p], d, "getUTC" + props[p]);
			addProxyMethod(utc, "set" + props[p], d, "setUTC" + props[p]);
		}

		return utc;
	};

	// select time zone strategy.  This returns a date-like object tied to the
	// desired timezone

	function dateGenerator(ts, opts) {
		if (opts.timezone == "browser") {
			return new Date(ts);
		} else if (!opts.timezone || opts.timezone == "utc") {
			return makeUtcWrapper(new Date(ts));
		} else if (typeof timezoneJS != "undefined" && typeof timezoneJS.Date != "undefined") {
			var d = new timezoneJS.Date();
			// timezone-js is fickle, so be sure to set the time zone before
			// setting the time.
			d.setTimezone(opts.timezone);
			d.setTime(ts);
			return d;
		} else {
			return makeUtcWrapper(new Date(ts));
		}
	}
	
	// map of app. size of time units in milliseconds

	var timeUnitSize = {
		"second": 1000,
		"minute": 60 * 1000,
		"hour": 60 * 60 * 1000,
		"day": 24 * 60 * 60 * 1000,
		"month": 30 * 24 * 60 * 60 * 1000,
		"quarter": 3 * 30 * 24 * 60 * 60 * 1000,
		"year": 365.2425 * 24 * 60 * 60 * 1000
	};

	// the allowed tick sizes, after 1 year we use
	// an integer algorithm

	var baseSpec = [
		[1, "second"], [2, "second"], [5, "second"], [10, "second"],
		[30, "second"], 
		[1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"],
		[30, "minute"], 
		[1, "hour"], [2, "hour"], [4, "hour"],
		[8, "hour"], [12, "hour"],
		[1, "day"], [2, "day"], [3, "day"],
		[0.25, "month"], [0.5, "month"], [1, "month"],
		[2, "month"]
	];

	// we don't know which variant(s) we'll need yet, but generating both is
	// cheap

	var specMonths = baseSpec.concat([[3, "month"], [6, "month"],
		[1, "year"]]);
	var specQuarters = baseSpec.concat([[1, "quarter"], [2, "quarter"],
		[1, "year"]]);

	function init(plot) {
		plot.hooks.processOptions.push(function (plot, options) {
			$.each(plot.getAxes(), function(axisName, axis) {

				var opts = axis.options;

				if (opts.mode == "time") {
					axis.tickGenerator = function(axis) {

						var ticks = [];
						var d = dateGenerator(axis.min, opts);
						var minSize = 0;

						// make quarter use a possibility if quarters are
						// mentioned in either of these options

						var spec = (opts.tickSize && opts.tickSize[1] ===
							"quarter") ||
							(opts.minTickSize && opts.minTickSize[1] ===
							"quarter") ? specQuarters : specMonths;

						if (opts.minTickSize != null) {
							if (typeof opts.tickSize == "number") {
								minSize = opts.tickSize;
							} else {
								minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]];
							}
						}

						for (var i = 0; i < spec.length - 1; ++i) {
							if (axis.delta < (spec[i][0] * timeUnitSize[spec[i][1]]
											  + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2
								&& spec[i][0] * timeUnitSize[spec[i][1]] >= minSize) {
								break;
							}
						}

						var size = spec[i][0];
						var unit = spec[i][1];

						// special-case the possibility of several years

						if (unit == "year") {

							// if given a minTickSize in years, just use it,
							// ensuring that it's an integer

							if (opts.minTickSize != null && opts.minTickSize[1] == "year") {
								size = Math.floor(opts.minTickSize[0]);
							} else {

								var magn = Math.pow(10, Math.floor(Math.log(axis.delta / timeUnitSize.year) / Math.LN10));
								var norm = (axis.delta / timeUnitSize.year) / magn;

								if (norm < 1.5) {
									size = 1;
								} else if (norm < 3) {
									size = 2;
								} else if (norm < 7.5) {
									size = 5;
								} else {
									size = 10;
								}

								size *= magn;
							}

							// minimum size for years is 1

							if (size < 1) {
								size = 1;
							}
						}

						axis.tickSize = opts.tickSize || [size, unit];
						var tickSize = axis.tickSize[0];
						unit = axis.tickSize[1];

						var step = tickSize * timeUnitSize[unit];

						if (unit == "second") {
							d.setSeconds(floorInBase(d.getSeconds(), tickSize));
						} else if (unit == "minute") {
							d.setMinutes(floorInBase(d.getMinutes(), tickSize));
						} else if (unit == "hour") {
							d.setHours(floorInBase(d.getHours(), tickSize));
						} else if (unit == "month") {
							d.setMonth(floorInBase(d.getMonth(), tickSize));
						} else if (unit == "quarter") {
							d.setMonth(3 * floorInBase(d.getMonth() / 3,
								tickSize));
						} else if (unit == "year") {
							d.setFullYear(floorInBase(d.getFullYear(), tickSize));
						}

						// reset smaller components

						d.setMilliseconds(0);

						if (step >= timeUnitSize.minute) {
							d.setSeconds(0);
						}
						if (step >= timeUnitSize.hour) {
							d.setMinutes(0);
						}
						if (step >= timeUnitSize.day) {
							d.setHours(0);
						}
						if (step >= timeUnitSize.day * 4) {
							d.setDate(1);
						}
						if (step >= timeUnitSize.month * 2) {
							d.setMonth(floorInBase(d.getMonth(), 3));
						}
						if (step >= timeUnitSize.quarter * 2) {
							d.setMonth(floorInBase(d.getMonth(), 6));
						}
						if (step >= timeUnitSize.year) {
							d.setMonth(0);
						}

						var carry = 0;
						var v = Number.NaN;
						var prev;

						do {

							prev = v;
							v = d.getTime();
							ticks.push(v);

							if (unit == "month" || unit == "quarter") {
								if (tickSize < 1) {

									// a bit complicated - we'll divide the
									// month/quarter up but we need to take
									// care of fractions so we don't end up in
									// the middle of a day

									d.setDate(1);
									var start = d.getTime();
									d.setMonth(d.getMonth() +
										(unit == "quarter" ? 3 : 1));
									var end = d.getTime();
									d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
									carry = d.getHours();
									d.setHours(0);
								} else {
									d.setMonth(d.getMonth() +
										tickSize * (unit == "quarter" ? 3 : 1));
								}
							} else if (unit == "year") {
								d.setFullYear(d.getFullYear() + tickSize);
							} else {
								d.setTime(v + step);
							}
						} while (v < axis.max && v != prev);

						return ticks;
					};

					axis.tickFormatter = function (v, axis) {

						var d = dateGenerator(v, axis.options);

						// first check global format

						if (opts.timeformat != null) {
							return formatDate(d, opts.timeformat, opts.monthNames, opts.dayNames);
						}

						// possibly use quarters if quarters are mentioned in
						// any of these places

						var useQuarters = (axis.options.tickSize &&
								axis.options.tickSize[1] == "quarter") ||
							(axis.options.minTickSize &&
								axis.options.minTickSize[1] == "quarter");

						var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
						var span = axis.max - axis.min;
						var suffix = (opts.twelveHourClock) ? " %p" : "";
						var hourCode = (opts.twelveHourClock) ? "%I" : "%H";
						var fmt;

						if (t < timeUnitSize.minute) {
							fmt = hourCode + ":%M:%S" + suffix;
						} else if (t < timeUnitSize.day) {
							if (span < 2 * timeUnitSize.day) {
								fmt = hourCode + ":%M" + suffix;
							} else {
								fmt = "%b %d " + hourCode + ":%M" + suffix;
							}
						} else if (t < timeUnitSize.month) {
							fmt = "%b %d";
						} else if ((useQuarters && t < timeUnitSize.quarter) ||
							(!useQuarters && t < timeUnitSize.year)) {
							if (span < timeUnitSize.year) {
								fmt = "%b";
							} else {
								fmt = "%b %Y";
							}
						} else if (useQuarters && t < timeUnitSize.year) {
							if (span < timeUnitSize.year) {
								fmt = "Q%q";
							} else {
								fmt = "Q%q %Y";
							}
						} else {
							fmt = "%Y";
						}

						var rt = formatDate(d, fmt, opts.monthNames, opts.dayNames);

						return rt;
					};
				}
			});
		});
	}

	$.plot.plugins.push({
		init: init,
		options: options,
		name: 'time',
		version: '1.0'
	});

	// Time-axis support used to be in Flot core, which exposed the
	// formatDate function on the plot object.  Various plugins depend
	// on the function, so we need to re-expose it here.

	$.plot.formatDate = formatDate;
	$.plot.dateGenerator = dateGenerator;

})(jQuery);

!function(a){"use strict";function b(a,b,c,d,e,f,g){var j,k,l,m,n,o,p,q,h=Math.pow,i=Math.sqrt;return j=i(h(c-a,2)+h(d-b,2)),k=i(h(e-c,2)+h(f-d,2)),l=g*j/(j+k),m=g-l,n=c+l*(a-e),o=d+l*(b-f),p=c-m*(a-e),q=d-m*(b-f),[n,o,p,q]}function d(b,c,d,e,f){var g=a.color.parse(f);g.a="number"==typeof e?e:.3,g.normalize(),g=g.toString(),c.beginPath(),c.moveTo(b[0][0],b[0][1]);for(var h=b.length,i=0;h>i;i++)c[b[i][3]].apply(c,b[i][2]);c.stroke(),c.lineWidth=0,c.lineTo(b[h-1][0],d),c.lineTo(b[0][0],d),c.closePath(),e!==!1&&(c.fillStyle=g,c.fill())}function e(a,b,d,e){(void 0===b||"bezier"!==b&&"quadratic"!==b)&&(b="quadratic"),b+="CurveTo",0==c.length?c.push([d[0],d[1],e.concat(d.slice(2)),b]):"quadraticCurveTo"==b&&2==d.length?(e=e.slice(0,2).concat(d),c.push([d[0],d[1],e,b])):c.push([d[2],d[3],e.concat(d.slice(2)),b])}function f(f,g,h){if(h.splines.show===!0){var k,l,m,i=[],j=h.splines.tension||.5,n=h.datapoints.points,o=h.datapoints.pointsize,p=f.getPlotOffset(),q=n.length,r=[];if(c=[],4>q/o)return a.extend(h.lines,h.splines),void 0;for(k=0;q>k;k+=o)l=n[k],m=n[k+1],null==l||l<h.xaxis.min||l>h.xaxis.max||m<h.yaxis.min||m>h.yaxis.max||r.push(h.xaxis.p2c(l)+p.left,h.yaxis.p2c(m)+p.top);for(q=r.length,k=0;q-2>k;k+=2)i=i.concat(b.apply(this,r.slice(k,k+6).concat([j])));for(g.save(),g.strokeStyle=h.color,g.lineWidth=h.splines.lineWidth,e(g,"quadratic",r.slice(0,4),i.slice(0,2)),k=2;q-3>k;k+=2)e(g,"bezier",r.slice(k,k+4),i.slice(2*k-2,2*k+2));e(g,"quadratic",r.slice(q-2,q),[i[2*q-10],i[2*q-9],r[q-4],r[q-3]]),d(c,g,f.height()+10,h.splines.fill,h.color),g.restore()}}var c=[];a.plot.plugins.push({init:function(a){a.hooks.drawSeries.push(f)},options:{series:{splines:{show:!1,lineWidth:2,tension:.5,fill:!1}}},name:"spline",version:"0.8.2"})}(jQuery);
/* Flot plugin for plotting textual data or categories.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

Consider a dataset like [["February", 34], ["March", 20], ...]. This plugin
allows you to plot such a dataset directly.

To enable it, you must specify mode: "categories" on the axis with the textual
labels, e.g.

	$.plot("#placeholder", data, { xaxis: { mode: "categories" } });

By default, the labels are ordered as they are met in the data series. If you
need a different ordering, you can specify "categories" on the axis options
and list the categories there:

	xaxis: {
		mode: "categories",
		categories: ["February", "March", "April"]
	}

If you need to customize the distances between the categories, you can specify
"categories" as an object mapping labels to values

	xaxis: {
		mode: "categories",
		categories: { "February": 1, "March": 3, "April": 4 }
	}

If you don't specify all categories, the remaining categories will be numbered
from the max value plus 1 (with a spacing of 1 between each).

Internally, the plugin works by transforming the input data through an auto-
generated mapping where the first category becomes 0, the second 1, etc.
Hence, a point like ["February", 34] becomes [0, 34] internally in Flot (this
is visible in hover and click events that return numbers rather than the
category labels). The plugin also overrides the tick generator to spit out the
categories as ticks instead of the values.

If you need to map a value back to its label, the mapping is always accessible
as "categories" on the axis object, e.g. plot.getAxes().xaxis.categories.

*/

(function ($) {
    var options = {
        xaxis: {
            categories: null
        },
        yaxis: {
            categories: null
        }
    };
    
    function processRawData(plot, series, data, datapoints) {
        // if categories are enabled, we need to disable
        // auto-transformation to numbers so the strings are intact
        // for later processing

        var xCategories = series.xaxis.options.mode == "categories",
            yCategories = series.yaxis.options.mode == "categories";
        
        if (!(xCategories || yCategories))
            return;

        var format = datapoints.format;

        if (!format) {
            // FIXME: auto-detection should really not be defined here
            var s = series;
            format = [];
            format.push({ x: true, number: true, required: true });
            format.push({ y: true, number: true, required: true });

            if (s.bars.show || (s.lines.show && s.lines.fill)) {
                var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
                format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                if (s.bars.horizontal) {
                    delete format[format.length - 1].y;
                    format[format.length - 1].x = true;
                }
            }
            
            datapoints.format = format;
        }

        for (var m = 0; m < format.length; ++m) {
            if (format[m].x && xCategories)
                format[m].number = false;
            
            if (format[m].y && yCategories)
                format[m].number = false;
        }
    }

    function getNextIndex(categories) {
        var index = -1;
        
        for (var v in categories)
            if (categories[v] > index)
                index = categories[v];

        return index + 1;
    }

    function categoriesTickGenerator(axis) {
        var res = [];
        for (var label in axis.categories) {
            var v = axis.categories[label];
            if (v >= axis.min && v <= axis.max)
                res.push([v, label]);
        }

        res.sort(function (a, b) { return a[0] - b[0]; });

        return res;
    }
    
    function setupCategoriesForAxis(series, axis, datapoints) {
        if (series[axis].options.mode != "categories")
            return;
        
        if (!series[axis].categories) {
            // parse options
            var c = {}, o = series[axis].options.categories || {};
            if ($.isArray(o)) {
                for (var i = 0; i < o.length; ++i)
                    c[o[i]] = i;
            }
            else {
                for (var v in o)
                    c[v] = o[v];
            }
            
            series[axis].categories = c;
        }

        // fix ticks
        if (!series[axis].options.ticks)
            series[axis].options.ticks = categoriesTickGenerator;

        transformPointsOnAxis(datapoints, axis, series[axis].categories);
    }
    
    function transformPointsOnAxis(datapoints, axis, categories) {
        // go through the points, transforming them
        var points = datapoints.points,
            ps = datapoints.pointsize,
            format = datapoints.format,
            formatColumn = axis.charAt(0),
            index = getNextIndex(categories);

        for (var i = 0; i < points.length; i += ps) {
            if (points[i] == null)
                continue;
            
            for (var m = 0; m < ps; ++m) {
                var val = points[i + m];

                if (val == null || !format[m][formatColumn])
                    continue;

                if (!(val in categories)) {
                    categories[val] = index;
                    ++index;
                }
                
                points[i + m] = categories[val];
            }
        }
    }

    function processDatapoints(plot, series, datapoints) {
        setupCategoriesForAxis(series, "xaxis", datapoints);
        setupCategoriesForAxis(series, "yaxis", datapoints);
    }

    function init(plot) {
        plot.hooks.processRawData.push(processRawData);
        plot.hooks.processDatapoints.push(processDatapoints);
    }
    
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'categories',
        version: '1.0'
    });
})(jQuery);

/* Flot plugin for rendering pie charts.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes that each series has a single data value, and that each
value is a positive integer or zero.  Negative numbers don't make sense for a
pie chart, and have unpredictable results.  The values do NOT need to be
passed in as percentages; the plugin will calculate the total and per-slice
percentages internally.

* Created by Brian Medendorp

* Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars

The plugin supports these options:

	series: {
		pie: {
			show: true/false
			radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
			innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
			startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
			tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
			offset: {
				top: integer value to move the pie up or down
				left: integer value to move the pie left or right, or 'auto'
			},
			stroke: {
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
				width: integer pixel width of the stroke
			},
			label: {
				show: true/false, or 'auto'
				formatter:  a user-defined function that modifies the text/style of the label text
				radius: 0-1 for percentage of fullsize, or a specified pixel length
				background: {
					color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
					opacity: 0-1
				},
				threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
			},
			combine: {
				threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
				label: any text value of what the combined slice should be labeled
			}
			highlight: {
				opacity: 0-1
			}
		}
	}

More detail and specific examples can be found in the included HTML file.

*/

(function($) {

	// Maximum redraw attempts when fitting labels within the plot

	var REDRAW_ATTEMPTS = 10;

	// Factor by which to shrink the pie when fitting labels within the plot

	var REDRAW_SHRINK = 0.95;

	function init(plot) {

		var canvas = null,
			target = null,
			options = null,
			maxRadius = null,
			centerLeft = null,
			centerTop = null,
			processed = false,
			ctx = null;

		// interactive variables

		var highlights = [];

		// add hook to determine if pie plugin in enabled, and then perform necessary operations

		plot.hooks.processOptions.push(function(plot, options) {
			if (options.series.pie.show) {

				options.grid.show = false;

				// set labels.show

				if (options.series.pie.label.show == "auto") {
					if (options.legend.show) {
						options.series.pie.label.show = false;
					} else {
						options.series.pie.label.show = true;
					}
				}

				// set radius

				if (options.series.pie.radius == "auto") {
					if (options.series.pie.label.show) {
						options.series.pie.radius = 3/4;
					} else {
						options.series.pie.radius = 1;
					}
				}

				// ensure sane tilt

				if (options.series.pie.tilt > 1) {
					options.series.pie.tilt = 1;
				} else if (options.series.pie.tilt < 0) {
					options.series.pie.tilt = 0;
				}
			}
		});

		plot.hooks.bindEvents.push(function(plot, eventHolder) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				if (options.grid.hoverable) {
					eventHolder.unbind("mousemove").mousemove(onMouseMove);
				}
				if (options.grid.clickable) {
					eventHolder.unbind("click").click(onClick);
				}
			}
		});

		plot.hooks.processDatapoints.push(function(plot, series, data, datapoints) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				processDatapoints(plot, series, data, datapoints);
			}
		});

		plot.hooks.drawOverlay.push(function(plot, octx) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				drawOverlay(plot, octx);
			}
		});

		plot.hooks.draw.push(function(plot, newCtx) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				draw(plot, newCtx);
			}
		});

		function processDatapoints(plot, series, datapoints) {
			if (!processed)	{
				processed = true;
				canvas = plot.getCanvas();
				target = $(canvas).parent();
				options = plot.getOptions();
				plot.setData(combine(plot.getData()));
			}
		}

		function combine(data) {

			var total = 0,
				combined = 0,
				numCombined = 0,
				color = options.series.pie.combine.color,
				newdata = [];

			// Fix up the raw data from Flot, ensuring the data is numeric

			for (var i = 0; i < data.length; ++i) {

				var value = data[i].data;

				// If the data is an array, we'll assume that it's a standard
				// Flot x-y pair, and are concerned only with the second value.

				// Note how we use the original array, rather than creating a
				// new one; this is more efficient and preserves any extra data
				// that the user may have stored in higher indexes.

				if ($.isArray(value) && value.length == 1) {
    				value = value[0];
				}

				if ($.isArray(value)) {
					// Equivalent to $.isNumeric() but compatible with jQuery < 1.7
					if (!isNaN(parseFloat(value[1])) && isFinite(value[1])) {
						value[1] = +value[1];
					} else {
						value[1] = 0;
					}
				} else if (!isNaN(parseFloat(value)) && isFinite(value)) {
					value = [1, +value];
				} else {
					value = [1, 0];
				}

				data[i].data = [value];
			}

			// Sum up all the slices, so we can calculate percentages for each

			for (var i = 0; i < data.length; ++i) {
				total += data[i].data[0][1];
			}

			// Count the number of slices with percentages below the combine
			// threshold; if it turns out to be just one, we won't combine.

			for (var i = 0; i < data.length; ++i) {
				var value = data[i].data[0][1];
				if (value / total <= options.series.pie.combine.threshold) {
					combined += value;
					numCombined++;
					if (!color) {
						color = data[i].color;
					}
				}
			}

			for (var i = 0; i < data.length; ++i) {
				var value = data[i].data[0][1];
				if (numCombined < 2 || value / total > options.series.pie.combine.threshold) {
					newdata.push(
						$.extend(data[i], {     /* extend to allow keeping all other original data values
						                           and using them e.g. in labelFormatter. */
							data: [[1, value]],
							color: data[i].color,
							label: data[i].label,
							angle: value * Math.PI * 2 / total,
							percent: value / (total / 100)
						})
					);
				}
			}

			if (numCombined > 1) {
				newdata.push({
					data: [[1, combined]],
					color: color,
					label: options.series.pie.combine.label,
					angle: combined * Math.PI * 2 / total,
					percent: combined / (total / 100)
				});
			}

			return newdata;
		}

		function draw(plot, newCtx) {

			if (!target) {
				return; // if no series were passed
			}

			var canvasWidth = plot.getPlaceholder().width(),
				canvasHeight = plot.getPlaceholder().height(),
				legendWidth = target.children().filter(".legend").children().width() || 0;

			ctx = newCtx;

			// WARNING: HACK! REWRITE THIS CODE AS SOON AS POSSIBLE!

			// When combining smaller slices into an 'other' slice, we need to
			// add a new series.  Since Flot gives plugins no way to modify the
			// list of series, the pie plugin uses a hack where the first call
			// to processDatapoints results in a call to setData with the new
			// list of series, then subsequent processDatapoints do nothing.

			// The plugin-global 'processed' flag is used to control this hack;
			// it starts out false, and is set to true after the first call to
			// processDatapoints.

			// Unfortunately this turns future setData calls into no-ops; they
			// call processDatapoints, the flag is true, and nothing happens.

			// To fix this we'll set the flag back to false here in draw, when
			// all series have been processed, so the next sequence of calls to
			// processDatapoints once again starts out with a slice-combine.
			// This is really a hack; in 0.9 we need to give plugins a proper
			// way to modify series before any processing begins.

			processed = false;

			// calculate maximum radius and center point

			maxRadius =  Math.min(canvasWidth, canvasHeight / options.series.pie.tilt) / 2;
			centerTop = canvasHeight / 2 + options.series.pie.offset.top;
			centerLeft = canvasWidth / 2;

			if (options.series.pie.offset.left == "auto") {
				if (options.legend.position.match("w")) {
					centerLeft += legendWidth / 2;
				} else {
					centerLeft -= legendWidth / 2;
				}
				if (centerLeft < maxRadius) {
					centerLeft = maxRadius;
				} else if (centerLeft > canvasWidth - maxRadius) {
					centerLeft = canvasWidth - maxRadius;
				}
			} else {
				centerLeft += options.series.pie.offset.left;
			}

			var slices = plot.getData(),
				attempts = 0;

			// Keep shrinking the pie's radius until drawPie returns true,
			// indicating that all the labels fit, or we try too many times.

			do {
				if (attempts > 0) {
					maxRadius *= REDRAW_SHRINK;
				}
				attempts += 1;
				clear();
				if (options.series.pie.tilt <= 0.8) {
					drawShadow();
				}
			} while (!drawPie() && attempts < REDRAW_ATTEMPTS)

			if (attempts >= REDRAW_ATTEMPTS) {
				clear();
				target.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>");
			}

			if (plot.setSeries && plot.insertLegend) {
				plot.setSeries(slices);
				plot.insertLegend();
			}

			// we're actually done at this point, just defining internal functions at this point

			function clear() {
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				target.children().filter(".pieLabel, .pieLabelBackground").remove();
			}

			function drawShadow() {

				var shadowLeft = options.series.pie.shadow.left;
				var shadowTop = options.series.pie.shadow.top;
				var edge = 10;
				var alpha = options.series.pie.shadow.alpha;
				var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

				if (radius >= canvasWidth / 2 - shadowLeft || radius * options.series.pie.tilt >= canvasHeight / 2 - shadowTop || radius <= edge) {
					return;	// shadow would be outside canvas, so don't draw it
				}

				ctx.save();
				ctx.translate(shadowLeft,shadowTop);
				ctx.globalAlpha = alpha;
				ctx.fillStyle = "#000";

				// center and rotate to starting position

				ctx.translate(centerLeft,centerTop);
				ctx.scale(1, options.series.pie.tilt);

				//radius -= edge;

				for (var i = 1; i <= edge; i++) {
					ctx.beginPath();
					ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
					ctx.fill();
					radius -= i;
				}

				ctx.restore();
			}

			function drawPie() {

				var startAngle = Math.PI * options.series.pie.startAngle;
				var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

				// center and rotate to starting position

				ctx.save();
				ctx.translate(centerLeft,centerTop);
				ctx.scale(1, options.series.pie.tilt);
				//ctx.rotate(startAngle); // start at top; -- This doesn't work properly in Opera

				// draw slices

				ctx.save();
				var currentAngle = startAngle;
				for (var i = 0; i < slices.length; ++i) {
					slices[i].startAngle = currentAngle;
					drawSlice(slices[i].angle, slices[i].color, true);
				}
				ctx.restore();

				// draw slice outlines

				if (options.series.pie.stroke.width > 0) {
					ctx.save();
					ctx.lineWidth = options.series.pie.stroke.width;
					currentAngle = startAngle;
					for (var i = 0; i < slices.length; ++i) {
						drawSlice(slices[i].angle, options.series.pie.stroke.color, false);
					}
					ctx.restore();
				}

				// draw donut hole

				drawDonutHole(ctx);

				ctx.restore();

				// Draw the labels, returning true if they fit within the plot

				if (options.series.pie.label.show) {
					return drawLabels();
				} else return true;

				function drawSlice(angle, color, fill) {

					if (angle <= 0 || isNaN(angle)) {
						return;
					}

					if (fill) {
						ctx.fillStyle = color;
					} else {
						ctx.strokeStyle = color;
						ctx.lineJoin = "round";
					}

					ctx.beginPath();
					if (Math.abs(angle - Math.PI * 2) > 0.000000001) {
						ctx.moveTo(0, 0); // Center of the pie
					}

					//ctx.arc(0, 0, radius, 0, angle, false); // This doesn't work properly in Opera
					ctx.arc(0, 0, radius,currentAngle, currentAngle + angle / 2, false);
					ctx.arc(0, 0, radius,currentAngle + angle / 2, currentAngle + angle, false);
					ctx.closePath();
					//ctx.rotate(angle); // This doesn't work properly in Opera
					currentAngle += angle;

					if (fill) {
						ctx.fill();
					} else {
						ctx.stroke();
					}
				}

				function drawLabels() {

					var currentAngle = startAngle;
					var radius = options.series.pie.label.radius > 1 ? options.series.pie.label.radius : maxRadius * options.series.pie.label.radius;

					for (var i = 0; i < slices.length; ++i) {
						if (slices[i].percent >= options.series.pie.label.threshold * 100) {
							if (!drawLabel(slices[i], currentAngle, i)) {
								return false;
							}
						}
						currentAngle += slices[i].angle;
					}

					return true;

					function drawLabel(slice, startAngle, index) {

						if (slice.data[0][1] == 0) {
							return true;
						}

						// format label text

						var lf = options.legend.labelFormatter, text, plf = options.series.pie.label.formatter;

						if (lf) {
							text = lf(slice.label, slice);
						} else {
							text = slice.label;
						}

						if (plf) {
							text = plf(text, slice);
						}

						var halfAngle = ((startAngle + slice.angle) + startAngle) / 2;
						var x = centerLeft + Math.round(Math.cos(halfAngle) * radius);
						var y = centerTop + Math.round(Math.sin(halfAngle) * radius) * options.series.pie.tilt;

						var html = "<span class='pieLabel' id='pieLabel" + index + "' style='position:absolute;top:" + y + "px;left:" + x + "px;'>" + text + "</span>";
						target.append(html);

						var label = target.children("#pieLabel" + index);
						var labelTop = (y - label.height() / 2);
						var labelLeft = (x - label.width() / 2);

						label.css("top", labelTop);
						label.css("left", labelLeft);

						// check to make sure that the label is not outside the canvas

						if (0 - labelTop > 0 || 0 - labelLeft > 0 || canvasHeight - (labelTop + label.height()) < 0 || canvasWidth - (labelLeft + label.width()) < 0) {
							return false;
						}

						if (options.series.pie.label.background.opacity != 0) {

							// put in the transparent background separately to avoid blended labels and label boxes

							var c = options.series.pie.label.background.color;

							if (c == null) {
								c = slice.color;
							}

							var pos = "top:" + labelTop + "px;left:" + labelLeft + "px;";
							$("<div class='pieLabelBackground' style='position:absolute;width:" + label.width() + "px;height:" + label.height() + "px;" + pos + "background-color:" + c + ";'></div>")
								.css("opacity", options.series.pie.label.background.opacity)
								.insertBefore(label);
						}

						return true;
					} // end individual label function
				} // end drawLabels function
			} // end drawPie function
		} // end draw function

		// Placed here because it needs to be accessed from multiple locations

		function drawDonutHole(layer) {
			if (options.series.pie.innerRadius > 0) {

				// subtract the center

				layer.save();
				var innerRadius = options.series.pie.innerRadius > 1 ? options.series.pie.innerRadius : maxRadius * options.series.pie.innerRadius;
				layer.globalCompositeOperation = "destination-out"; // this does not work with excanvas, but it will fall back to using the stroke color
				layer.beginPath();
				layer.fillStyle = options.series.pie.stroke.color;
				layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
				layer.fill();
				layer.closePath();
				layer.restore();

				// add inner stroke

				layer.save();
				layer.beginPath();
				layer.strokeStyle = options.series.pie.stroke.color;
				layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
				layer.stroke();
				layer.closePath();
				layer.restore();

				// TODO: add extra shadow inside hole (with a mask) if the pie is tilted.
			}
		}

		//-- Additional Interactive related functions --

		function isPointInPoly(poly, pt) {
			for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
				((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1]< poly[i][1]))
				&& (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])
				&& (c = !c);
			return c;
		}

		function findNearbySlice(mouseX, mouseY) {

			var slices = plot.getData(),
				options = plot.getOptions(),
				radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius,
				x, y;

			for (var i = 0; i < slices.length; ++i) {

				var s = slices[i];

				if (s.pie.show) {

					ctx.save();
					ctx.beginPath();
					ctx.moveTo(0, 0); // Center of the pie
					//ctx.scale(1, options.series.pie.tilt);	// this actually seems to break everything when here.
					ctx.arc(0, 0, radius, s.startAngle, s.startAngle + s.angle / 2, false);
					ctx.arc(0, 0, radius, s.startAngle + s.angle / 2, s.startAngle + s.angle, false);
					ctx.closePath();
					x = mouseX - centerLeft;
					y = mouseY - centerTop;

					if (ctx.isPointInPath) {
						if (ctx.isPointInPath(mouseX - centerLeft, mouseY - centerTop)) {
							ctx.restore();
							return {
								datapoint: [s.percent, s.data],
								dataIndex: 0,
								series: s,
								seriesIndex: i
							};
						}
					} else {

						// excanvas for IE doesn;t support isPointInPath, this is a workaround.

						var p1X = radius * Math.cos(s.startAngle),
							p1Y = radius * Math.sin(s.startAngle),
							p2X = radius * Math.cos(s.startAngle + s.angle / 4),
							p2Y = radius * Math.sin(s.startAngle + s.angle / 4),
							p3X = radius * Math.cos(s.startAngle + s.angle / 2),
							p3Y = radius * Math.sin(s.startAngle + s.angle / 2),
							p4X = radius * Math.cos(s.startAngle + s.angle / 1.5),
							p4Y = radius * Math.sin(s.startAngle + s.angle / 1.5),
							p5X = radius * Math.cos(s.startAngle + s.angle),
							p5Y = radius * Math.sin(s.startAngle + s.angle),
							arrPoly = [[0, 0], [p1X, p1Y], [p2X, p2Y], [p3X, p3Y], [p4X, p4Y], [p5X, p5Y]],
							arrPoint = [x, y];

						// TODO: perhaps do some mathmatical trickery here with the Y-coordinate to compensate for pie tilt?

						if (isPointInPoly(arrPoly, arrPoint)) {
							ctx.restore();
							return {
								datapoint: [s.percent, s.data],
								dataIndex: 0,
								series: s,
								seriesIndex: i
							};
						}
					}

					ctx.restore();
				}
			}

			return null;
		}

		function onMouseMove(e) {
			triggerClickHoverEvent("plothover", e);
		}

		function onClick(e) {
			triggerClickHoverEvent("plotclick", e);
		}

		// trigger click or hover event (they send the same parameters so we share their code)

		function triggerClickHoverEvent(eventname, e) {

			var offset = plot.offset();
			var canvasX = parseInt(e.pageX - offset.left);
			var canvasY =  parseInt(e.pageY - offset.top);
			var item = findNearbySlice(canvasX, canvasY);

			if (options.grid.autoHighlight) {

				// clear auto-highlights

				for (var i = 0; i < highlights.length; ++i) {
					var h = highlights[i];
					if (h.auto == eventname && !(item && h.series == item.series)) {
						unhighlight(h.series);
					}
				}
			}

			// highlight the slice

			if (item) {
				highlight(item.series, eventname);
			}

			// trigger any hover bind events

			var pos = { pageX: e.pageX, pageY: e.pageY };
			target.trigger(eventname, [pos, item]);
		}

		function highlight(s, auto) {
			//if (typeof s == "number") {
			//	s = series[s];
			//}

			var i = indexOfHighlight(s);

			if (i == -1) {
				highlights.push({ series: s, auto: auto });
				plot.triggerRedrawOverlay();
			} else if (!auto) {
				highlights[i].auto = false;
			}
		}

		function unhighlight(s) {
			if (s == null) {
				highlights = [];
				plot.triggerRedrawOverlay();
			}

			//if (typeof s == "number") {
			//	s = series[s];
			//}

			var i = indexOfHighlight(s);

			if (i != -1) {
				highlights.splice(i, 1);
				plot.triggerRedrawOverlay();
			}
		}

		function indexOfHighlight(s) {
			for (var i = 0; i < highlights.length; ++i) {
				var h = highlights[i];
				if (h.series == s)
					return i;
			}
			return -1;
		}

		function drawOverlay(plot, octx) {

			var options = plot.getOptions();

			var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

			octx.save();
			octx.translate(centerLeft, centerTop);
			octx.scale(1, options.series.pie.tilt);

			for (var i = 0; i < highlights.length; ++i) {
				drawHighlight(highlights[i].series);
			}

			drawDonutHole(octx);

			octx.restore();

			function drawHighlight(series) {

				if (series.angle <= 0 || isNaN(series.angle)) {
					return;
				}

				//octx.fillStyle = parseColor(options.series.pie.highlight.color).scale(null, null, null, options.series.pie.highlight.opacity).toString();
				octx.fillStyle = "rgba(255, 255, 255, " + options.series.pie.highlight.opacity + ")"; // this is temporary until we have access to parseColor
				octx.beginPath();
				if (Math.abs(series.angle - Math.PI * 2) > 0.000000001) {
					octx.moveTo(0, 0); // Center of the pie
				}
				octx.arc(0, 0, radius, series.startAngle, series.startAngle + series.angle / 2, false);
				octx.arc(0, 0, radius, series.startAngle + series.angle / 2, series.startAngle + series.angle, false);
				octx.closePath();
				octx.fill();
			}
		}
	} // end init (plugin body)

	// define pie specific options and their default values

	var options = {
		series: {
			pie: {
				show: false,
				radius: "auto",	// actual radius of the visible pie (based on full calculated radius if <=1, or hard pixel value)
				innerRadius: 0, /* for donut */
				startAngle: 3/2,
				tilt: 1,
				shadow: {
					left: 5,	// shadow left offset
					top: 15,	// shadow top offset
					alpha: 0.02	// shadow alpha
				},
				offset: {
					top: 0,
					left: "auto"
				},
				stroke: {
					color: "#fff",
					width: 1
				},
				label: {
					show: "auto",
					formatter: function(label, slice) {
						return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + slice.color + ";'>" + label + "<br/>" + Math.round(slice.percent) + "%</div>";
					},	// formatter function
					radius: 1,	// radius at which to place the labels (based on full calculated radius if <=1, or hard pixel value)
					background: {
						color: null,
						opacity: 0
					},
					threshold: 0	// percentage at which to hide the label (i.e. the slice is too narrow)
				},
				combine: {
					threshold: -1,	// percentage at which to combine little slices into one larger slice
					color: null,	// color to give the new slice (auto-generated if null)
					label: "Other"	// label to give the new slice
				},
				highlight: {
					//color: "#fff",		// will add this functionality once parseColor is available
					opacity: 0.5
				}
			}
		}
	};

	$.plot.plugins.push({
		init: init,
		options: options,
		name: "pie",
		version: "1.1"
	});

})(jQuery);

/*
 * jquery.flot.tooltip
 * 
 * description: easy-to-use tooltips for Flot charts
 * version: 0.8.7
 * authors: Krzysztof Urbas @krzysu [myviews.pl],Evan Steinkerchner @Roundaround
 * website: https://github.com/krzysu/flot.tooltip
 * 
 * build on 2016-03-15
 * released under MIT License, 2012
*/ 
!function(a){var b={tooltip:{show:!1,cssClass:"flotTip",content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,monthNames:null,dayNames:null,shifts:{x:10,y:20},defaultTheme:!0,snap:!0,lines:!1,clickTips:!1,onHover:function(a,b){},$compat:!1}};b.tooltipOpts=b.tooltip;var c=function(a){this.tipPosition={x:0,y:0},this.init(a)};c.prototype.init=function(b){function c(a){var c={};c.x=a.pageX,c.y=a.pageY,b.setTooltipPosition(c)}function d(c,d,g){f.clickmode?(a(b.getPlaceholder()).bind("plothover",e),b.hideTooltip(),f.clickmode=!1):(e(c,d,g),f.getDomElement().is(":visible")&&(a(b.getPlaceholder()).unbind("plothover",e),f.clickmode=!0))}function e(c,d,e){var g=function(a,b,c,d){return Math.sqrt((c-a)*(c-a)+(d-b)*(d-b))},h=function(a,b,c,d,e,f,h){if(!h||(h=function(a,b,c,d,e,f){if("undefined"!=typeof c)return{x:c,y:b};if("undefined"!=typeof d)return{x:a,y:d};var g,h=-1/((f-d)/(e-c));return{x:g=(e*(a*h-b+d)+c*(a*-h+b-f))/(h*(e-c)+d-f),y:h*g-h*a+b}}(a,b,c,d,e,f),h.x>=Math.min(c,e)&&h.x<=Math.max(c,e)&&h.y>=Math.min(d,f)&&h.y<=Math.max(d,f))){var i=d-f,j=e-c,k=c*f-d*e;return Math.abs(i*a+j*b+k)/Math.sqrt(i*i+j*j)}var l=g(a,b,c,d),m=g(a,b,e,f);return l>m?m:l};if(e)b.showTooltip(e,f.tooltipOptions.snap?e:d);else if(f.plotOptions.series.lines.show&&f.tooltipOptions.lines===!0){var i=f.plotOptions.grid.mouseActiveRadius,j={distance:i+1},k=d;a.each(b.getData(),function(a,c){for(var e=0,i=-1,l=1;l<c.data.length;l++)c.data[l-1][0]<=d.x&&c.data[l][0]>=d.x&&(e=l-1,i=l);if(-1===i)return void b.hideTooltip();var m={x:c.data[e][0],y:c.data[e][1]},n={x:c.data[i][0],y:c.data[i][1]},o=h(c.xaxis.p2c(d.x),c.yaxis.p2c(d.y),c.xaxis.p2c(m.x),c.yaxis.p2c(m.y),c.xaxis.p2c(n.x),c.yaxis.p2c(n.y),!1);if(o<j.distance){var p=g(m.x,m.y,d.x,d.y)<g(d.x,d.y,n.x,n.y)?e:i,q=(c.datapoints.pointsize,[d.x,m.y+(n.y-m.y)*((d.x-m.x)/(n.x-m.x))]),r={datapoint:q,dataIndex:p,series:c,seriesIndex:a};j={distance:o,item:r},f.tooltipOptions.snap&&(k={pageX:c.xaxis.p2c(q[0]),pageY:c.yaxis.p2c(q[1])})}}),j.distance<i+1?b.showTooltip(j.item,k):b.hideTooltip()}else b.hideTooltip()}var f=this,g=a.plot.plugins.length;if(this.plotPlugins=[],g)for(var h=0;g>h;h++)this.plotPlugins.push(a.plot.plugins[h].name);b.hooks.bindEvents.push(function(b,g){if(f.plotOptions=b.getOptions(),"boolean"==typeof f.plotOptions.tooltip&&(f.plotOptions.tooltipOpts.show=f.plotOptions.tooltip,f.plotOptions.tooltip=f.plotOptions.tooltipOpts,delete f.plotOptions.tooltipOpts),f.plotOptions.tooltip.show!==!1&&"undefined"!=typeof f.plotOptions.tooltip.show){f.tooltipOptions=f.plotOptions.tooltip,f.tooltipOptions.$compat?(f.wfunc="width",f.hfunc="height"):(f.wfunc="innerWidth",f.hfunc="innerHeight");f.getDomElement();a(b.getPlaceholder()).bind("plothover",e),f.tooltipOptions.clickTips&&a(b.getPlaceholder()).bind("plotclick",d),f.clickmode=!1,a(g).bind("mousemove",c)}}),b.hooks.shutdown.push(function(b,f){a(b.getPlaceholder()).unbind("plothover",e),a(b.getPlaceholder()).unbind("plotclick",d),b.removeTooltip(),a(f).unbind("mousemove",c)}),b.setTooltipPosition=function(b){var c=f.getDomElement(),d=c.outerWidth()+f.tooltipOptions.shifts.x,e=c.outerHeight()+f.tooltipOptions.shifts.y;b.x-a(window).scrollLeft()>a(window)[f.wfunc]()-d&&(b.x-=d),b.y-a(window).scrollTop()>a(window)[f.hfunc]()-e&&(b.y-=e),isNaN(b.x)?f.tipPosition.x=f.tipPosition.xPrev:(f.tipPosition.x=b.x,f.tipPosition.xPrev=b.x),isNaN(b.y)?f.tipPosition.y=f.tipPosition.yPrev:(f.tipPosition.y=b.y,f.tipPosition.yPrev=b.y)},b.showTooltip=function(a,c,d){var e=f.getDomElement(),g=f.stringFormat(f.tooltipOptions.content,a);""!==g&&(e.html(g),b.setTooltipPosition({x:c.pageX,y:c.pageY}),e.css({left:f.tipPosition.x+f.tooltipOptions.shifts.x,top:f.tipPosition.y+f.tooltipOptions.shifts.y}).show(),"function"==typeof f.tooltipOptions.onHover&&f.tooltipOptions.onHover(a,e))},b.hideTooltip=function(){f.getDomElement().hide().html("")},b.removeTooltip=function(){f.getDomElement().remove()}},c.prototype.getDomElement=function(){var b=a("<div>");return this.tooltipOptions&&this.tooltipOptions.cssClass&&(b=a("."+this.tooltipOptions.cssClass),0===b.length&&(b=a("<div />").addClass(this.tooltipOptions.cssClass),b.appendTo("body").hide().css({position:"absolute"}),this.tooltipOptions.defaultTheme&&b.css({background:"#fff","z-index":"1040",padding:"0.4em 0.6em","border-radius":"0.5em","font-size":"0.8em",border:"1px solid #111",display:"none","white-space":"nowrap"}))),b},c.prototype.stringFormat=function(a,b){var c,d,e,f,g,h=/%p\.{0,1}(\d{0,})/,i=/%s/,j=/%c/,k=/%lx/,l=/%ly/,m=/%x\.{0,1}(\d{0,})/,n=/%y\.{0,1}(\d{0,})/,o="%x",p="%y",q="%ct",r="%n";if("undefined"!=typeof b.series.threshold?(c=b.datapoint[0],d=b.datapoint[1],e=b.datapoint[2]):"undefined"!=typeof b.series.curvedLines?(c=b.datapoint[0],d=b.datapoint[1]):"undefined"!=typeof b.series.lines&&b.series.lines.steps?(c=b.series.datapoints.points[2*b.dataIndex],d=b.series.datapoints.points[2*b.dataIndex+1],e=""):(c=b.series.data[b.dataIndex][0],d=b.series.data[b.dataIndex][1],e=b.series.data[b.dataIndex][2]),null===b.series.label&&b.series.originSeries&&(b.series.label=b.series.originSeries.label),"function"==typeof a&&(a=a(b.series.label,c,d,b)),"boolean"==typeof a&&!a)return"";if(e&&(a=a.replace(q,e)),"undefined"!=typeof b.series.percent?f=b.series.percent:"undefined"!=typeof b.series.percents&&(f=b.series.percents[b.dataIndex]),"number"==typeof f&&(a=this.adjustValPrecision(h,a,f)),b.series.hasOwnProperty("pie")&&(g=b.series.data[0][1]),"number"==typeof g&&(a=a.replace(r,g)),a="undefined"!=typeof b.series.label?a.replace(i,b.series.label):a.replace(i,""),a="undefined"!=typeof b.series.color?a.replace(j,b.series.color):a.replace(j,""),a=this.hasAxisLabel("xaxis",b)?a.replace(k,b.series.xaxis.options.axisLabel):a.replace(k,""),a=this.hasAxisLabel("yaxis",b)?a.replace(l,b.series.yaxis.options.axisLabel):a.replace(l,""),this.isTimeMode("xaxis",b)&&this.isXDateFormat(b)&&(a=a.replace(m,this.timestampToDate(c,this.tooltipOptions.xDateFormat,b.series.xaxis.options))),this.isTimeMode("yaxis",b)&&this.isYDateFormat(b)&&(a=a.replace(n,this.timestampToDate(d,this.tooltipOptions.yDateFormat,b.series.yaxis.options))),"number"==typeof c&&(a=this.adjustValPrecision(m,a,c)),"number"==typeof d&&(a=this.adjustValPrecision(n,a,d)),"undefined"!=typeof b.series.xaxis.ticks){var s;s=this.hasRotatedXAxisTicks(b)?"rotatedTicks":"ticks";var t=b.dataIndex+b.seriesIndex;for(var u in b.series.xaxis[s])if(b.series.xaxis[s].hasOwnProperty(t)&&!this.isTimeMode("xaxis",b)){var v=this.isCategoriesMode("xaxis",b)?b.series.xaxis[s][t].label:b.series.xaxis[s][t].v;v===c&&(a=a.replace(m,b.series.xaxis[s][t].label.replace(/\$/g,"$$$$")))}}if("undefined"!=typeof b.series.yaxis.ticks)for(var w in b.series.yaxis.ticks)if(b.series.yaxis.ticks.hasOwnProperty(w)){var x=this.isCategoriesMode("yaxis",b)?b.series.yaxis.ticks[w].label:b.series.yaxis.ticks[w].v;x===d&&(a=a.replace(n,b.series.yaxis.ticks[w].label.replace(/\$/g,"$$$$")))}return"undefined"!=typeof b.series.xaxis.tickFormatter&&(a=a.replace(o,b.series.xaxis.tickFormatter(c,b.series.xaxis).replace(/\$/g,"$$"))),"undefined"!=typeof b.series.yaxis.tickFormatter&&(a=a.replace(p,b.series.yaxis.tickFormatter(d,b.series.yaxis).replace(/\$/g,"$$"))),a},c.prototype.isTimeMode=function(a,b){return"undefined"!=typeof b.series[a].options.mode&&"time"===b.series[a].options.mode},c.prototype.isXDateFormat=function(a){return"undefined"!=typeof this.tooltipOptions.xDateFormat&&null!==this.tooltipOptions.xDateFormat},c.prototype.isYDateFormat=function(a){return"undefined"!=typeof this.tooltipOptions.yDateFormat&&null!==this.tooltipOptions.yDateFormat},c.prototype.isCategoriesMode=function(a,b){return"undefined"!=typeof b.series[a].options.mode&&"categories"===b.series[a].options.mode},c.prototype.timestampToDate=function(b,c,d){var e=a.plot.dateGenerator(b,d);return a.plot.formatDate(e,c,this.tooltipOptions.monthNames,this.tooltipOptions.dayNames)},c.prototype.adjustValPrecision=function(a,b,c){var d,e=b.match(a);return null!==e&&""!==RegExp.$1&&(d=RegExp.$1,c=c.toFixed(d),b=b.replace(a,c)),b},c.prototype.hasAxisLabel=function(b,c){return-1!==a.inArray("axisLabels",this.plotPlugins)&&"undefined"!=typeof c.series[b].options.axisLabel&&c.series[b].options.axisLabel.length>0},c.prototype.hasRotatedXAxisTicks=function(b){return-1!==a.inArray("tickRotor",this.plotPlugins)&&"undefined"!=typeof b.series.xaxis.rotatedTicks};var d=function(a){new c(a)};a.plot.plugins.push({init:d,options:b,name:"tooltip",version:"0.8.5"})}(jQuery);
/*
                      _____              _____              _____             _______         
                     /\    \            /\    \            /\    \           /::\    \        
                    /::\    \          /::\    \          /::\    \         /::::\    \       
                   /::::\    \         \:::\    \        /::::\    \       /::::::\    \      
                  /::::::\    \         \:::\    \      /::::::\    \     /::::::::\    \     
                 /:::/\:::\    \         \:::\    \    /:::/\:::\    \   /:::/~~\:::\    \    
                /:::/__\:::\    \         \:::\    \  /:::/__\:::\    \ /:::/    \:::\    \   
               /::::\   \:::\    \        /::::\    \ \:::\   \:::\    \:::/    / \:::\    \  
              /::::::\   \:::\    \__    /::::::\    \_\:::\   \:::\    \:/____/   \:::\____\ 
             /:::/\:::\   \:::\____\ \  /:::/\:::\    \ \:::\   \:::\    \    |     |:::|    |
            /:::/  \:::\   \:::|    | \/:::/  \:::\____\ \:::\   \:::\____\___|     |:::|____|
            \::/   |::::\  /:::|____| /:::/    \::/    /  \:::\   \::/    /   _\___/:::/    / 
             \/____|:::::\/:::/    /\/:::/    / \/____/\   \:::\   \/____/:\ |::| /:::/    /  
                   |:::::::::/    /:::::/    /      \:::\   \:::\    \  \:::\|::|/:::/    /   
                   |::|\::::/    /\::::/____/        \:::\   \:::\____\  \::::::::::/    /    
                   |::| \::/____/  \:::\    \         \:::\  /:::/    /   \::::::::/    /     
                   |::|  ~|         \:::\    \         \:::\/:::/    /     \::::::/    /      
                   |::|   |          \:::\    \         \::::::/    /       \::::/____/       
                   \::|   |           \:::\____\         \::::/    /         |::|    |        
                    \:|   |            \::/    /          \::/    /          |::|____|        
                     \|___|             \/____/            \/____/            ~~              
                                                                                                                
     ____.________                                  _____       .___                                     .___ 
    |    |\_____  \  __ __   ___________ ___.__.   /  _  \    __| _/__  _______    ____   ____  ____   __| _/ 
    |    | /  / \  \|  |  \_/ __ \_  __ <   |  |  /  /_\  \  / __ |\  \/ /\__  \  /    \_/ ___\/ __ \ / __ |  
/\__|    |/   \_/.  \  |  /\  ___/|  | \/\___  | /    |    \/ /_/ | \   /  / __ \|   |  \  \__\  ___// /_/ |  
\________|\_____\ \_/____/  \___  >__|   / ____| \____|__  /\____ |  \_/  (____  /___|  /\___  >___  >____ |  
                 \__>           \/       \/              \/      \/            \/     \/     \/    \/     \/  
                   _______                        ___________.__        __                                    
                   \      \   ______  _  ________ \__    ___/|__| ____ |  | __ ___________                    
          ______   /   |   \_/ __ \ \/ \/ /  ___/   |    |   |  |/ ___\|  |/ // __ \_  __ \   ______          
         /_____/  /    |    \  ___/\     /\___ \    |    |   |  \  \___|    <\  ___/|  | \/  /_____/          
                  \____|__  /\___  >\/\_//____  >   |____|   |__|\___  >__|_ \\___  >__|                      
                          \/     \/           \/                     \/     \/    \/                          
*/

;
(function($, window, document, undefined) {
        'use strict';
        // undefined is used here as the undefined global variable in ECMAScript 3 is
        // mutable (ie. it can be hasMoved by someone else). undefined isn't really being
        // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
        // can no longer be modified.

        // window and document are passed through as local variable rather than global
        // as this (slightly) quickens the resolution process and can be more efficiently
        // minified (especially when both are regularly referenced in your plugin).

        // Create the defaults once
        var pluginName = 'newsTicker',
                defaults = {
                        row_height: 20,
                        max_rows: 3,
                        speed: 400,
                        duration: 2500,
                        direction: 'up',
                        autostart: 1,
                        pauseOnHover: 1,
                        nextButton: null,
                        prevButton: null,
                        startButton: null,
                        stopButton: null,
                        hasMoved: function() {},
                        movingUp: function() {},
                        movingDown: function() {},
                        start: function() {},
                        stop: function() {},
                        pause: function() {},
                        unpause: function() {}
                };

        // The actual plugin constructor
        function Plugin(element, options) {
                this.element = element;
                this.$el = $(element);
                this.options = $.extend({}, defaults, options);
                this._defaults = defaults;
                this._name = pluginName;
                this.moveInterval;
                this.state = 0;
                this.paused = 0;
                this.moving = 0;
                if (this.$el.is('ul') || this.$el.is('ol')) {
                        this.init();
                }
        }

        Plugin.prototype = {
                init: function() {
                        this.$el.height(this.options.row_height * this.options.max_rows)
                                .css({overflow : 'hidden'});

                        this.checkSpeed();

                        if(this.options.nextButton && typeof(this.options.nextButton[0]) !== 'undefined')
                                this.options.nextButton.click(function(e) {
                                        this.moveNext();
                                        this.resetInterval();
                                }.bind(this));
                        if(this.options.prevButton && typeof(this.options.prevButton[0]) !== 'undefined')
                                this.options.prevButton.click(function(e) {
                                        this.movePrev();
                                        this.resetInterval();
                                }.bind(this));
                        if(this.options.stopButton && typeof(this.options.stopButton[0]) !== 'undefined')
                                this.options.stopButton.click(function(e) {
                                        this.stop()
                                }.bind(this));
                        if(this.options.startButton && typeof(this.options.startButton[0]) !== 'undefined')
                                this.options.startButton.click(function(e) {
                                        this.start()
                                }.bind(this));
                        
                        if(this.options.pauseOnHover) {
                                this.$el.hover(function() {
                                        if (this.state)
                                                this.pause();
                                }.bind(this), function() {
                                        if (this.state)
                                                this.unpause();
                                }.bind(this));
                        }

                        if(this.options.autostart)
                                this.start();
                },

                start: function() {
                        if (!this.state) {
                                this.state = 1;
                                this.resetInterval();
                                this.options.start();
                        }
                },

                stop: function() {
                        if (this.state) {
                                clearInterval(this.moveInterval);
                                this.state = 0;
                                this.options.stop();
                        }
                },

                resetInterval: function() {
                        if (this.state) {
                                clearInterval(this.moveInterval);
                                this.moveInterval = setInterval(function() {this.move()}.bind(this), this.options.duration);
                        }
                },

                move: function() {
                         if (!this.paused) this.moveNext();
                },

                moveNext: function() {
                        if (this.options.direction === 'down')
                                this.moveDown();
                        else if (this.options.direction === 'up')
                                this.moveUp();
                },

                movePrev: function() {
                        if (this.options.direction === 'down')
                                this.moveUp();
                        else if (this.options.direction === 'up')
                                this.moveDown();
                },

                pause: function() {
                        if (!this.paused) this.paused = 1;
                        this.options.pause();
                },

                unpause: function() {
                        if (this.paused) this.paused = 0;
                        this.options.unpause();
                },

                moveDown: function() {
                        if (!this.moving) {
                                this.moving = 1;
                                this.options.movingDown();
                                this.$el.children('li:last').detach().prependTo(this.$el).css('marginTop', '-' + this.options.row_height + 'px')
                                        .animate({marginTop: '0px'}, this.options.speed, function(){
                                                this.moving = 0;
                                                this.options.hasMoved();
                                        }.bind(this));
                        }
                },

                moveUp: function() {
                        if (!this.moving) {
                                this.moving = 1;
                                this.options.movingUp();
                                var element = this.$el.children('li:first');
                                element.animate({marginTop: '-' + this.options.row_height + 'px'}, this.options.speed,
                                        function(){
                                                element.detach().css('marginTop', '0').appendTo(this.$el);
                                                this.moving = 0;
                                                this.options.hasMoved();
                                        }.bind(this));
                        }
                },

                updateOption: function(option, value) {
                        if (typeof(this.options[option]) !== 'undefined'){
                                this.options[option] = value;
                                if (option == 'duration' || option == 'speed'){
                                    this.checkSpeed();
                                    this.resetInterval();
                                }
                        }
                },

                getState: function() {
                        if (paused) return 2
                        else return this.state;//0 = stopped, 1 = started
                },

                checkSpeed: function() {
                        if (this.options.duration < (this.options.speed + 25))
                                this.options.speed = this.options.duration - 25;
                },

                destroy: function() {
                        this._destroy(); //or this.delete; depends on jQuery version
                }
        };

        // A really lightweight plugin wrapper around the constructor,
        // preventing against multiple instantiations
        $.fn[pluginName] = function(option) {
                var args = arguments;
                
                return this.each(function() {
                        var $this = $(this),
                                data = $.data(this, 'plugin_' + pluginName),
                                options = typeof option === 'object' && option;
                        if (!data) {
                                $this.data('plugin_' + pluginName, (data = new Plugin(this, options)));
                        }
                        // if first argument is a string, call silimarly named function
                        // this gives flexibility to call functions of the plugin e.g.
                        //   - $('.dial').plugin('destroy');
                        //   - $('.dial').plugin('render', $('.new-child'));
                        if (typeof option === 'string') {
                                data[option].apply(data, Array.prototype.slice.call(args, 1));
                        }
                });
        };
})(jQuery, window, document);
!function(a,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t(require,exports,module):a.CountUp=t()}(this,function(a,t,n){var e=function(a,t,n,e,i,r){for(var o=0,s=["webkit","moz","ms","o"],m=0;m<s.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[s[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[m]+"CancelAnimationFrame"]||window[s[m]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,t){var n=(new Date).getTime(),e=Math.max(0,16-(n-o)),i=window.setTimeout(function(){a(n+e)},e);return o=n+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});var u=this;u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null};for(var l in r)r.hasOwnProperty(l)&&(u.options[l]=r[l]);""===u.options.separator&&(u.options.useGrouping=!1),u.options.prefix||(u.options.prefix=""),u.options.suffix||(u.options.suffix=""),u.d="string"==typeof a?document.getElementById(a):a,u.startVal=Number(t),u.endVal=Number(n),u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.decimals=Math.max(0,e||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(i)||2e3,u.formatNumber=function(a){a=a.toFixed(u.decimals),a+="";var t,n,e,i;if(t=a.split("."),n=t[0],e=t.length>1?u.options.decimal+t[1]:"",i=/(\d+)(\d{3})/,u.options.useGrouping)for(;i.test(n);)n=n.replace(i,"$1"+u.options.separator+"$2");return u.options.prefix+n+e+u.options.suffix},u.easeOutExpo=function(a,t,n,e){return n*(-Math.pow(2,-10*a/e)+1)*1024/1023+t},u.easingFn=u.options.easingFn?u.options.easingFn:u.easeOutExpo,u.formattingFn=u.options.formattingFn?u.options.formattingFn:u.formatNumber,u.version=function(){return"1.7.1"},u.printValue=function(a){var t=u.formattingFn(a);"INPUT"===u.d.tagName?this.d.value=t:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=t:this.d.innerHTML=t},u.count=function(a){u.startTime||(u.startTime=a),u.timestamp=a;var t=a-u.startTime;u.remaining=u.duration-t,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.easingFn(t,0,u.startVal-u.endVal,u.duration):u.frameVal=u.easingFn(t,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(t/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(t/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),t<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(a){return u.callback=a,u.rAF=requestAnimationFrame(u.count),!1},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.startVal=t,cancelAnimationFrame(u.rAF),u.printValue(u.startVal)},u.update=function(a){cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=Number(a),u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count)},u.printValue(u.startVal)};return e});
"use strict";
$(document).ready(function() {

    /* Toastr notifications */

    var i = -1;
    var toastCount = 0;
    var $toastlast;

    var shortCutFunction = "success";
    var msg = "Thanks for checking our theme!";
    var title = "<span>Welcome!</span> <h5 class='text-white'>Micheal</h5>";
    var $showDuration = 1000;
    var $hideDuration = 1000;
    var $timeOut = 5000;
    var $extendedTimeOut = 1000;
    var $showEasing = "swing";
    var $hideEasing = "linear";
    var $showMethod = "fadeIn";
    var $hideMethod = "fadeOut";
    var toastIndex = toastCount++;
    toastr.options = {
        closeButton: $('#closeButton').prop('checked'),
        debug: $('#debugInfo').prop('checked'),
        positionClass: 'toast-top-right',
        onclick: null
    };
    if ($('#addBehaviorOnToastClick').prop('checked')) {
        toastr.options.onclick = function() {
            alert('You can perform some custom action after a toast goes away');
        };
    }
    if ($showDuration.length) {
        toastr.options.showDuration = $showDuration;
    }
    if ($hideDuration.length) {
        toastr.options.hideDuration = $hideDuration;
    }
    if ($timeOut.length) {
        toastr.options.timeOut = $timeOut;
    }
    if ($extendedTimeOut.length) {
        toastr.options.extendedTimeOut = $extendedTimeOut;
    }
    if ($showEasing.length) {
        toastr.options.showEasing = $showEasing;
    }
    if ($hideEasing.length) {
        toastr.options.hideEasing = $hideEasing;
    }
    if ($showMethod.length) {
        toastr.options.showMethod = $showMethod;
    }
    if ($hideMethod.length) {
        toastr.options.hideMethod = $hideMethod;
    }
    $("#toastrOptions").text("Command: toastr[" + shortCutFunction + "](\"" + msg + (title ? "\", \"" + title : '') + "\")\n\ntoastr.options = " + JSON.stringify(toastr.options, null, 2));
    var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
    $toastlast = $toast;
    // =====================main chart js============================
    // tabs 1
    //start area chart
    var da1 = [["Jan", 80],["Feb", 100],["Mar", 95],["Apr", 105],["May", 80],["Jun", 95],["Jul", 80],["Aug", 90],["Sep", 115],["Oct", 90],["Nov", 85],["Dec", 90]];
    var da2 = [["Jan", 40],["Feb", 60],["Mar", 50],["Apr", 60],["May", 35],["Jun", 45],["Jul", 30],["Aug", 40],["Sep", 60],["Oct", 40],["Nov", 60],["Dec", 35]];
    $.plot("#area-chart", [{
        data: da1,
        label: "Views",
        color: "#69d3be"
    },{
        data: da2,
        label: "Likes",
        color: "#4FB7FE"
    }], {
        series: {
            lines: {
                show: !0,
                fill: .8,
                fillColor: { colors: [{ opacity: 0.0 }, { opacity: 0.6}] }
            },
            points: {
                show: !0,
                radius: 3
            }
        },
        grid: {
            borderColor: "#fff",
            borderWidth: 1,
            hoverable: !0
        },
        tooltip: true,
        tooltipOpts: {
            content: "%y",
            defaultTheme: true
        },
        xaxis: {
            tickColor: "#eff",
            mode: "categories"
        },
        yaxis: {
            tickColor: "#eff"
        },
        shadowSize: 0
    });



    // tab-2
    var realtoggle = new Switchery(document.querySelector('#toggle_real'), { size: 'small', color: '#00c0ef', jackColor: '#fff' });
    var data_1 = [],
        totalPoints_1 = 70;

    function getRandomData_1() {
        if (data_1.length > 0)
            data_1 = data_1.slice(1);
        // do a random walk
        while (data_1.length < totalPoints_1) {
            var prev_1 = data_1.length > 0 ? data_1[data_1.length - 1] : 50;
            var y = prev_1 + Math.random() * 10 - 5;
            if (y < 25)
                y = 30;
            if (y > 100)
                y = 90;
            data_1.push(y);
        }
        var res_1 = [];
        for (var i = 0; i < data_1.length; ++i)
            res_1.push([i, data_1[i]])
        return res_1;
    }

    // setup control widget
    var updateInterval_1 = 300;

    // setup plot
    var options_1 = {
        colors: ["linear-gradient(70deg, #4FB7FE 0)"],

        series: {
            shadowSize: 0,
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.3
                    }, {
                        opacity: 1
                    }]
                }
            }
        },
        yaxis: {
            min: 0,
            max: 120
            // tickLength:0
        },
        xaxis: {
            show: false
            // tickLength:0
        },
        grid: {
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#fff'
        }
    };

    var plot_1 = $.plot($("#realtime"), [getRandomData_1()], options_1);

    function update_1() {
        plot_1.setData([getRandomData_1()]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot_1.draw();
        if ($("#toggle_real").prop("checked")) {
            setTimeout(update_1, updateInterval_1);
        }
    }

    update_1();

    $("#toggle_real").on("change",function() {
        update_1();
    });
    // tab2 end
// -=========================end main chat js========================
    // ========================to do list==============

    $('body').on('click', '.border_color', function() {
        $('#btn_color').removeClass('btn-secondary btn-danger btn-primary btn-info btn-mint').addClass($(this).data('color'));
        $('#btn_color').data('badge', $(this).data('badge'));
        $('#btn_color').css("color", "#fff");
        return false;
    });
    $('[data-toggle="popover"]').popover({
        html: true,
        placement: 'right',
        content: function() {
            return $($(this).data('contentwrapper')).html();
        }
    });
    $(".border_danger").on('click',function() {
        $(".todo_mintbadge").addClass('border_danger')
    });
    $("form#main_input_box").submit(function(event) {
        event.preventDefault();
        var deleteButton = " <a href='' class='tododelete redcolor'><span class='fa fa-trash'></span></a>";
        var striks = " <span class='dividor'>|</span> ";
        var editButton = " <a href='#' class='todoedit'><span class='fa fa-pencil'></span></a>";
        var checkBox = "<input type='checkbox' class='striked' />";
        var twoButtons = "<div class='col-3 showbtns todoitembtns'>" + editButton + striks + deleteButton + "</div>";
        var badgeClass = $('#btn_color').data('badge');
        $(".list_of_items").prepend("<div class='todolist_list showactions px-3'>" + "<div class='row'><div class='col-9 nopad custom_textbox1'> <div class='todo_mintbadge " + badgeClass + "'> </div> <div class='todoitemcheck'>" + checkBox + "</div>" + "<div class='todotext todoitem'>" + $("#custom_textbox").val() + "</div> </div>" +   twoButtons + "<span class='seperator'></span></div>");
        $("#custom_textbox").val('');
        $('#btn_color').css("color", "#fff");
        return false;
    });
    $(".todo_section").on('click','.tododelete', function(e) {
        e.preventDefault();
        $(this).closest('.todolist_list').remove();
    });
    $(".todo_section").on('click','.striked', function(e) {
        $(this).closest('.todolist_list').find('.todotext').toggleClass('strikethrough');
        $(this).closest('.todolist_list').find('.showbtns').toggle();
    });
    $(".todo_section").on('click',".todoedit", function(e) {
        var editButton = " <a href='#' class='todoedit'><span class='fa fa-pencil'></span></a>";
        e.preventDefault();
        $(this).closest('.todolist_list').find('.striked').toggle();
        if ($(this).text() == " ") {
            $(this).closest('.todolist_list').find(".showbtns").toggleClass("opacityfull");
            var text1 = $(this).closest('.todolist_list').find("input[type='text'][name='text']").val().trim();
            if (text1 === '') {
                alert('Come on! you can\'t create a todo without title');
                $(this).closest('.todolist_list').find("input[type='text'][name='text']").focus();
                $(this).closest('.todolist_list').find(".striked").hide();
                return;
            }
            $(this).closest('.todolist_list').find('.todotext').html(text1);
            $(this).html("<span class='fa fa-pencil'></span>");
            $(this).closest('.todolist_list').find(".showbtns").toggleClass("opacityfull");
            return;
        }
        var text = '';
        text = $(this).closest('.todolist_list').find('.todotext').text();
        text = "<input type='text' name='text' value='" + text + "' onkeypress='return event.keyCode != 13;' />";
        $(this).closest('.todolist_list').find('.todotext').html(text);
        $(this).html("<span class='fa fa-check'></span> ");
        text = '';
        return;
    });
    $("#custom_textbox").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });
    // ======================to do list end=============================
    // =================top 4 sections countup js==================
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
    };
    new CountUp("sales_count", 0, 750, 0, 2.5, options).start();
    new CountUp("visitors_count", 0, 1700, 0, 2.5, options).start();
    new CountUp("revenue_count", 0, 1200, 0, 2.5, options).start();
    new CountUp("subscribers_count", 0, 1020, 0, 2.5, options).start();
    // =========================News ticker===========================================
    var nt_example1 = $('#nt-example1').newsTicker({
        direction: 'down',
        row_height: 85,
        max_rows: 3,
        duration: 2000
    });

    $('.todo_section').slimscroll({
        height: '213px',
        size: '5px',
        opacity: 0.2
    });
    $(".content").css("height",300);
    $('.content').jScrollPane({
        autoReinitialise: true,
        autoReinitialiseDelay: 100
    });

    //server load
    var flot2 = function() {
        // We use an inline data source in the example, usually data would
        // be fetched from a server
        var data = [],
            totalPoints = 100;

        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // Do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }
                data.push(y);
            }
            // Zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }
            return res;
        }
        var plot2 = $.plot("#flotchart2", [getRandomData()], {
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: false
            },
            colors: ["#22BAA0"],
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'},
            tooltip: true,
            tooltipOpts: {
                content: "Y: %y",
                defaultTheme: false
            }
        });

        function update() {
            plot2.setData([getRandomData()]);
            plot2.draw();
            setTimeout(update, 30);
        }
        update();
    };
    flot2();
    //donut
    var datax = [{
        label: "Profile",
        data: 150,
        color: '#00c0ef'
    }, {
        label: "Facebook ",
        data: 130,
        color: '#668cff'
    }, {
        label: "Twitter ",
        data: 190,
        color: '#0fb0c0'
    }, {
        label: "Google+",
        data: 180,
        color: '#ff8080'
    }, {
        label: "Linkedin",
        data: 120,
        color: '#ffb300'
    }];
    $.plot($("#donut"), datax, {
        series: {
            pie: {
                innerRadius: 0.5,
                show: true
            }
        },
        legend: {
            show: false
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s"
        }
    });
    var progressBarContainer = $('#progress-bar');
    var progressBar = {
        chain: [],
        progressBar: progressBarContainer.find('.progress-bar'),
        progressInfo: progressBarContainer.children('.progress-info'),
        set: function(value, info, noPush) {
            if (!noPush) {
                this.chain.push(value);
            }
            if (this.chain[0] == value) {
                this.go(value, info);
            } else {
                var self = this;
                setTimeout(function() {
                    self.set(value, info, true)
                }, 500);
            }
        },
        go: function(value, info) {
            this.progressInfo.text(info);
            var self = this;
            var interval = setInterval(function() {
                var curr = self.progressBar.attr('aria-valuenow');
                if (curr >= value) {
                    clearInterval(interval);
                    self.progressBar.attr('aria-valuenow', value);
                    self.progressBar.css('width', value + '%');
                    self.chain.shift()
                } else {
                    self.progressBar.attr('aria-valuenow', ++curr);
                    self.progressBar.css('width', curr + '%');
                }
            }, 10)
        }
    };
    progressBar.set(5);
    progressBar.set(12);
    progressBar.set(22);
    progressBar.set(32);
    progressBar.set(52);
    var progressBarContainer12 = $('#progress-bar1');
    var progressBar = {
        chain: [],
        progressBar: progressBarContainer12.find('.progress-bar'),
        progressInfo: progressBarContainer12.children('.progress-primary'),
        set: function(value, info, noPush) {
            if (!noPush) {
                this.chain.push(value);
            }
            if (this.chain[0] == value) {
                this.go(value, info);
            } else {
                var self = this;
                setTimeout(function() {
                    self.set(value, info, true)
                }, 500);
            }
        },
        go: function(value, info) {
            this.progressInfo.text(info);
            var self = this;
            var interval = setInterval(function() {
                var curr = self.progressBar.attr('aria-valuenow');
                if (curr >= value) {
                    clearInterval(interval);
                    self.progressBar.attr('aria-valuenow', value);
                    self.progressBar.css('width', value + '%');
                    self.chain.shift()
                } else {
                    self.progressBar.attr('aria-valuenow', ++curr);
                    self.progressBar.css('width', curr + '%');
                }
            }, 10)
        }
    };
    progressBar.set(5);
    progressBar.set(10);
    progressBar.set(40);
    progressBar.set(60);
    progressBar.set(80);
    var progressBarContainer2 = $('#progress-bar2');
    var progressBar = {
        chain: [],
        progressBar: progressBarContainer2.find('.progress-bar'),
        progressInfo: progressBarContainer2.children('.progress-primary'),
        set: function(value, info, noPush) {
            if (!noPush) {
                this.chain.push(value);
            }
            if (this.chain[0] == value) {
                this.go(value, info);
            } else {
                var self = this;
                setTimeout(function() {
                    self.set(value, info, true)
                }, 500);
            }
        },
        go: function(value, info) {
            this.progressInfo.text(info);
            var self = this;
            var interval = setInterval(function() {
                var curr = self.progressBar.attr('aria-valuenow');
                if (curr >= value) {
                    clearInterval(interval);
                    self.progressBar.attr('aria-valuenow', value);
                    self.progressBar.css('width', value + '%');
                    self.chain.shift()
                } else {
                    self.progressBar.attr('aria-valuenow', ++curr);
                    self.progressBar.css('width', curr + '%');
                }
            }, 10)
        }
    };
    progressBar.set(5);
    progressBar.set(12);
    progressBar.set(22);
    progressBar.set(52);
    progressBar.set(73);
    var progressBarContainer1 = $('#progress-bar3');
    var progressBar = {
        chain: [],
        progressBar: progressBarContainer1.find('.progress-bar'),
        progressInfo: progressBarContainer1.children('.progress-info'),
        set: function(value, info, noPush) {
            if (!noPush) {
                this.chain.push(value);
            }
            if (this.chain[0] == value) {
                this.go(value, info);
            } else {
                var self = this;
                setTimeout(function() {
                    self.set(value, info, true)
                }, 500);
            }
        },
        go: function(value, info) {
            this.progressInfo.text(info);
            var self = this;
            var interval = setInterval(function() {
                var curr = self.progressBar.attr('aria-valuenow');
                if (curr >= value) {
                    clearInterval(interval);
                    self.progressBar.attr('aria-valuenow', value);
                    self.progressBar.css('width', value + '%');
                    self.chain.shift()
                } else {
                    self.progressBar.attr('aria-valuenow', ++curr);
                    self.progressBar.css('width', curr + '%');
                }
            }, 10)
        }
    };
    progressBar.set(5);
    progressBar.set(10);
    progressBar.set(22);
    progressBar.set(37);
    progressBar.set(50);
    var progressBarContainer = $('#progress-bar4');
    var progressBar = {
        chain: [],
        progressBar: progressBarContainer.find('.progress-bar'),
        progressInfo: progressBarContainer.children('.progress-info'),
        set: function(value, info, noPush) {
            if (!noPush) {
                this.chain.push(value);
            }
            if (this.chain[0] == value) {
                this.go(value, info);
            } else {
                var self = this;
                setTimeout(function() {
                    self.set(value, info, true)
                }, 500);
            }
        },
        go: function(value, info) {
            this.progressInfo.text(info);
            var self = this;
            var interval = setInterval(function() {
                var curr = self.progressBar.attr('aria-valuenow');
                if (curr >= value) {
                    clearInterval(interval);
                    self.progressBar.attr('aria-valuenow', value);
                    self.progressBar.css('width', value + '%');
                    self.chain.shift()
                } else {
                    self.progressBar.attr('aria-valuenow', ++curr);
                    self.progressBar.css('width', curr + '%');
                }
            }, 10)
        }
    };
    progressBar.set(5);
    progressBar.set(12);
    progressBar.set(22);
    progressBar.set(37);
    progressBar.set(40);
    var progressBarContainer = $('#progress-bar5');
    var progressBar = {
        chain: [],
        progressBar: progressBarContainer.find('.progress-bar'),
        progressInfo: progressBarContainer.children('.progress-info'),
        set: function(value, info, noPush) {
            if (!noPush) {
                this.chain.push(value);
            }
            if (this.chain[0] == value) {
                this.go(value, info);
            } else {
                var self = this;
                setTimeout(function() {
                    self.set(value, info, true)
                }, 500);
            }
        },
        go: function(value, info) {
            this.progressInfo.text(info);
            var self = this;
            var interval = setInterval(function() {
                var curr = self.progressBar.attr('aria-valuenow');
                if (curr >= value) {
                    clearInterval(interval);
                    self.progressBar.attr('aria-valuenow', value);
                    self.progressBar.css('width', value + '%');
                    self.chain.shift()
                } else {
                    self.progressBar.attr('aria-valuenow', ++curr);
                    self.progressBar.css('width', curr + '%');
                }
            }, 10)
        }
    };
    progressBar.set(5);
    progressBar.set(12);
    progressBar.set(42);
    progressBar.set(72);
    progressBar.set(93);

});

