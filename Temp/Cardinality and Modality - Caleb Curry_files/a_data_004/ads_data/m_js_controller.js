(function(_){var ba,ca,ha,ka,ma,pa,ua,va,z,Aa,Ba,Ea,Ia,Ma,Pa,Ra,Za,$a,ab,bb,cb,eb,ib,kb,lb,nb,ob,pb,qb,sb,rb,tb,vb,ub,wb,xb,yb,zb,Cb,Db,Jb,Ib,Hb,Mb,Ob,Pb,Rb,Sb,Tb,Ub,Vb,Zb,$b,ac,bc,dc,ec,ic,gc,jc,nc,pc,oc,rc,sc,tc,wc,yc,zc,Cc,Dc,Fc,Gc,Hc,Jc,fa,da,ea,oa,na;ba=function(a){return function(){return _.aa[a].apply(this,arguments)}};ca=function(){ca=function(){};da.Symbol||(da.Symbol=ea)};_.ia=function(){ca();var a=da.Symbol.iterator;a||(a=da.Symbol.iterator=da.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&fa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(this)}});_.ia=function(){}};ha=function(a){var b=0;return ka(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};ka=function(a){_.ia();a={next:a};a[da.Symbol.iterator]=function(){return this};return a};_.la=function(a){_.ia();var b=a[window.Symbol.iterator];return b?b.call(a):ha(a)};ma=function(a){if(a){for(var b=da,c=["Promise"],d=0;d<c.length-1;d++){var e=c[d];e in b||(b[e]={});b=b[e]}c=c[c.length-1];d=b[c];a=a(d);a!=d&&null!=a&&fa(b,c,{configurable:!0,writable:!0,value:a})}};pa=function(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.N=b.prototype};_.k=function(a){return void 0!==a};_.n=function(a){return"string"==typeof a};_.u=function(a,b,c){a=a.split(".");c=c||_.q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&_.k(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};_.qa=function(){};_.ra=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.sa=function(a){return"array"==_.ra(a)};_.ta=function(a){return"function"==_.ra(a)};ua=function(a,b,c){return a.call.apply(a.bind,arguments)};va=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};_.v=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.v=ua:_.v=va;return _.v.apply(null,arguments)};_.w=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};_.y=function(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Xb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};_.xa=function(a,b){b=(0,_.wa)(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c};_.ya=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};z=function(a){return-1!=za.indexOf(a)};Aa=function(){return z("iPhone")&&!z("iPod")&&!z("iPad")};Ba=function(a){Ba[" "](a);return a};_.Ca=function(a,b){try{return Ba(a[b]),!0}catch(c){}return!1};Ea=function(){var a=_.q.document;return a?a.documentMode:void 0};_.A=function(){};_.B=function(a,b,c){a.b=null;b||(b=[]);a.A=void 0;a.l=-1;a.c=b;a:{if(b=a.c.length){--b;var d=a.c[b];if(d&&"object"==typeof d&&!_.sa(d)&&!(Fa&&d instanceof window.Uint8Array)){a.o=b-a.l;a.g=d;break a}}a.o=Number.MAX_VALUE}a.v={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.o)d+=a.l,a.c[d]=a.c[d]||Ga;else{var e=a.o+a.l;a.c[e]||(a.g=a.c[e]={});a.g[d]=a.g[d]||Ga}};_.Ha=function(a,b){if(b<a.o){b+=a.l;var c=a.c[b];return c===Ga?a.c[b]=[]:c}if(a.g)return c=a.g[b],c===Ga?a.g[b]=[]:c};Ia=function(a,b){if(b<a.o){b+=a.l;var c=a.c[b];return c===Ga?a.c[b]=[]:c}c=a.g[b];return c===Ga?a.g[b]=[]:c};_.C=function(a,b,c){a=_.Ha(a,b);return null==a?c:a};_.D=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=_.Ha(a,c);d&&(a.b[c]=new b(d))}return a.b[c]};_.Ja=function(a,b,c){a.b||(a.b={});if(!a.b[c]){for(var d=Ia(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.b[c]=e}b=a.b[c];b==Ga&&(b=a.b[c]=[]);return b};_.Ka=function(a){if(a.b)for(var b in a.b){var c=a.b[b];if(_.sa(c))for(var d=0;d<c.length;d++)c[d]&&_.Ka(c[d]);else c&&_.Ka(c)}return a.c};Ma=function(a){_.B(this,a,La)};_.Oa=function(a){_.B(this,a,Na)};Pa=function(a){_.B(this,a,null)};_.Qa=function(a){_.B(this,a,null)};Ra=function(a){return _.Ja(a,_.Oa,1)};_.Sa=function(a,b){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c||!/[?&]ae=1(&|$)/.test(a))return null;try{return{wa:a+(b?"":"&act=1"),K:(0,window.decodeURIComponent)(c[1]),Ia:c.index}}catch(d){return null}};_.Ua=function(){this.c="";this.l=Ta};_.Va=function(a){if(a instanceof _.Ua&&a.constructor===_.Ua&&a.l===Ta)return a.c;_.ra(a);return"type_error:SafeUrl"};_.Ya=function(a){if(a instanceof _.Ua)return a;a="object"==typeof a&&a.g?a.b():String(a);Wa.test(a)||(a="about:invalid#zClosurez");return _.Xa(a)};_.Xa=function(a){var b=new _.Ua;b.c=a;return b};Za=function(a,b){b=b instanceof _.Ua?b:_.Ya(b);a.href=_.Va(b)};$a=function(a,b,c,d,e){c="&"+b+"="+c;var f=a.indexOf("&"+d+"=");c=0>f?a+c:a.substring(0,f)+c+a.substring(f);return 2E3<c.length?_.k(e)?$a(a,b,e,d,void 0):a:c};ab=function(a,b){this.b=_.k(a)?a:0;this.c=_.k(b)?b:0};bb=function(a){try{return!!a&&null!=a.location.href&&_.Ca(a,"foo")}catch(b){return!1}};cb=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};_.E=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};_.db=function(a,b,c){var d=!1,e=!1;e=void 0===e?!1:e;d=void 0===d?!1:d;a.google_image_requests||(a.google_image_requests=[]);var f=a.document.createElement("img");if(c||d){var g=function(b){c&&c(b);d&&_.xa(a.google_image_requests,f);f.removeEventListener&&f.removeEventListener("load",g,!1);f.removeEventListener&&f.removeEventListener("error",g,!1)};_.E(f,"load",g);_.E(f,"error",g)}e&&(f.referrerPolicy="no-referrer");f.src=b;a.google_image_requests.push(f)};eb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};_.fb=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};_.gb=function(a,b,c){c=void 0===c?_.F:c;switch(a){case 2:return c.getElementsByClassName(b);case 3:return c.getElementsByTagName(b)}return[]};_.G=function(a,b,c){c=void 0===c?_.F:c;switch(a){case 1:if(c.getElementById)return c.getElementById(b);break;case 2:case 3:if(a=_.gb(a,b,c),0<a.length)return a[0]}return null};ib=function(a,b){a&&eb(b,function(b,d){a.style[d]=b})};kb=function(a,b,c,d){b=c(d,b);if(!(b instanceof Array))return a;(0,_.jb)(b,function(b){if(2!==b.length&&3!==b.length)return a;a=$a(a,b[0],b[1],"adurl",b[2])});return a};lb=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};nb=function(a,b){this.b=a;this.c=b};ob=function(a,b){this.url=a;this.Aa=!!b;this.depth=null};pb=function(){this.g="&";this.l=_.k(void 0)?void 0:"trn";this.o=!1;this.c={};this.v=0;this.b=[]};qb=function(a,b){var c={};c[a]=b;return[c]};sb=function(a,b,c,d,e){var f=[];cb(a,function(a,l){(a=rb(a,b,c,d,e))&&f.push(l+"="+a)});return f.join(b)};rb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(rb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(sb(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};tb=function(a,b,c,d){a.b.push(b);a.c[b]=qb(c,d)};vb=function(a,b,c,d){b=b+"//"+c+d;var e=ub(a)-d.length;if(0>e)return"";a.b.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.b.length;f++)for(var g=a.b[f],l=a.c[g],p=0;p<l.length;p++){if(!e){d=null==d?g:d;break}var m=sb(l[p],a.g,",$");if(m){m=c+m;if(e>=m.length){e-=m.length;b+=m;c=a.g;break}else a.o&&(c=e,m[c-1]==a.g&&--c,b+=m.substr(0,c),c=a.g,e=0);d=null==d?g:d}}f="";a.l&&null!=d&&(f=c+a.l+"="+d);return b+f};ub=function(a){if(!a.l)return 4E3;var b=1,c;for(c in a.c)b=c.length>b?c.length:b;return 4E3-a.l.length-b-a.g.length-1};wb=function(a,b,c,d,e,f){if((d?a.o:Math.random())<(e||a.b))try{if(c instanceof pb)var g=c;else g=new pb,cb(c,function(a,b){var c=g,d=c.v++;a=qb(b,a);c.b.push(d);c.c[d]=a});var l=vb(g,a.l,a.c,a.g+b+"&");l&&("undefined"===typeof f?_.db(_.q,l,void 0):_.db(_.q,l,f))}catch(p){}};xb=function(){var a=_.q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,_.I)()};yb=function(){var a=void 0===a?_.q:a;return(a=a.performance)&&a.now?a.now():null};zb=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};Cb=function(){var a=Ab;this.events=[];this.c=a||_.q;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=Bb()||(null!=b?b:1>Math.random())};Db=function(a){a&&J&&Bb()&&(J.clearMarks("goog_"+a.uniqueId+"_start"),J.clearMarks("goog_"+a.uniqueId+"_end"))};_.Gb=function(){var a=Eb;this.g=Fb;this.l=this.b;this.c=void 0===a?null:a};Jb=function(a,b,c,d){try{if(a.c&&a.c.b){var e=a.c.start(b.toString(),3);var f=c();var g=a.c;c=e;if(g.b&&"number"==typeof c.value){var l=yb()||xb();c.duration=l-c.value;var p="goog_"+c.uniqueId+"_end";J&&Bb()&&J.mark(p);g.b&&g.events.push(c)}}else f=c()}catch(m){g=!0;try{Db(e),g=(d||a.l).call(a,b,new Hb(Ib(m),m.fileName,m.lineNumber),void 0,void 0)}catch(r){a.b(217,r)}if(!g)throw m;}return f};_.Lb=function(a,b,c){var d=Kb;return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];return Jb(d,a,function(){return b.apply(c,f)},void 0)}};Ib=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};Hb=function(a,b,c){lb.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};Mb=function(){if(!Ab.google_measure_js_timing){var a=Eb;a.b=!1;a.events!=a.c.google_js_reporting_queue&&(Bb()&&(0,_.jb)(a.events,Db),a.events.length=0)}};_.Nb=function(a,b,c){wb(Fb,a,b,"jserror"!=a,c,void 0)};Ob=function(a,b){this.b=a;this.C=b;this.o=[];this.g=[];this.A={};this.c={};this.v=this.l=!1;this.B=-1};Pb=function(a,b,c){var d=b=b.getAttribute("data-original-click-url");if(d)for(var e=0;e<a.o.length;e++)d=kb(d,b,a.o[e],c);return d};Rb=function(a,b){(/[?&]ae=1(&|$)/.test(b.href)||_.C(a.b,38,!1))&&Jb(Kb,446,function(){var c=Date.now(),d;if(d=c-a.B>_.C(a.b,39,0))a:{if(d=_.Sa(b.href,!0)){var e=b.href,f=d.Ia;var g=d.wa;g=g.slice(0,f)+"&act=1&ri=1"+g.slice(f);if(window.navigator.sendBeacon){if(window.navigator.sendBeacon(g,"")){Za(b,d.K);d=!0;break a}Za(b,e.slice(0,f)+"&ri=2"+e.slice(f))}else Za(b,e.slice(0,f)+"&ri=16"+e.slice(f))}d=!1}d&&(a.B=c)},Qb)};Sb=function(a,b,c,d){if(0!=a.g.length&&(d.preventDefault?!d.defaultPrevented:!1!==d.returnValue)){var e=1==d.which&&!d.ctrlKey&&"_blank"!=b.target&&"_new"!=b.target;e&&_.fb(d);for(var f=[],g={},l=0;l<a.g.length;g={url:g.url},l++)if(g.url=a.g[l](c),g.url){var p=new window.Promise(function(a){return function(b){_.db(_.K,a.url,b)}}(g));f.push(p)}c=window.Promise.all(f);f=new window.Promise(function(a){window.setTimeout(a,2E3)});e&&window.Promise.race([c,f]).then((0,_.v)(Ob.prototype.G,a,b,d))}};Tb=function(a,b,c,d){a.c[d]||(a.c[d]={});a.c[d][c]||(a.c[d][c]=[]);_.E(b,d,(0,_.v)(a.D,a,b,c,d))};Ub=function(a,b,c){var d=b.href;if(a.C){if(a.C.Qa(b,c,a.b,a.v))return!0}else if(_.q.googdlu&&(_.q.googdlu.tryOpenPlayStore&&_.q.googdlu.tryOpenPlayStore(c,d,_.C(a.b,15,""))||_.q.googdlu.tryOpenItunesStore&&_.q.googdlu.tryOpenItunesStore(c,d,_.C(a.b,15,""))))return!0;return _.C(a.b,31,!1)&&_.C(a.b,30,!1)&&_.C(a.b,28,"")&&_.q.googdlu&&_.q.googdlu.tryOpenAppUrl?(_.q.googdlu.tryOpenAppUrl(c,d,_.C(a.b,32,""),_.C(a.b,28,"")),!0):!1};Vb=function(a){if(a.classList)return a.classList;a=a.className;return _.n(a)&&a.match(/\S+/g)||[]};_.Wb=function(a,b){a.classList?a.classList.add(b):(a.classList?a.classList.contains(b):0<=(0,_.wa)(Vb(a),b))||(a.className+=0<a.className.length?" "+b:b)};_.Yb=function(a,b){if(a.classList)a.classList.remove(b);else if(a.classList?a.classList.contains(b):0<=(0,_.wa)(Vb(a),b))a.className=Xb(Vb(a),function(a){return a!=b}).join(" ")};Zb=function(a){_.q.setTimeout(function(){throw a;},0)};$b=function(){var a=_.q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,_.v)(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.k(c.next)){c=c.next;var a=c.xa;c.xa=null;a()}};return function(a){d.next={xa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};window.document.documentElement.appendChild(b)}:function(a){_.q.setTimeout(a,0)}};ac=function(a,b){this.g=a;this.l=b;this.c=0;this.b=null};bc=function(){this.c=this.b=null};dc=function(){var a=cc,b=null;a.b&&(b=a.b,a.b=a.b.next,a.b||(a.c=null),b.next=null);return b};ec=function(){this.next=this.c=this.b=null};ic=function(a){fc||gc();hc||(fc(),hc=!0);cc.add(a,void 0)};gc=function(){if(_.q.Promise&&_.q.Promise.resolve){var a=_.q.Promise.resolve(void 0);fc=function(){a.then(jc)}}else fc=function(){var a=jc;!_.ta(_.q.setImmediate)||_.q.Window&&_.q.Window.prototype&&!z("Edge")&&_.q.Window.prototype.setImmediate==_.q.setImmediate?(kc||(kc=$b()),kc(a)):_.q.setImmediate(a)}};jc=function(){for(var a;a=dc();){try{a.b.call(a.c)}catch(c){Zb(c)}var b=lc;b.l(a);100>b.c&&(b.c++,a.next=b.b,b.b=a)}hc=!1};_.L=function(){this.l=this.l;this.g=this.g};_.mc=function(a){_.L.call(this);this.A=1;this.o=[];this.v=0;this.b=[];this.c={};this.C=!!a};nc=function(a,b,c){ic(function(){a.apply(b,c)})};pc=function(a,b,c,d){this.o=new _.mc;this.c=a;this.c[0]=[b];this.l=[];this.g=new Ob(c,d);this.b=c;b=_.C(this.b,22,"");c=_.C(this.b,23,"");b&&c&&d&&(d.canOpenIntents([{url:b,id:b,H:c}],(0,_.v)(this.Da,this))||d.canOpenURLs(b,(0,_.v)(this.Da,this)));(d=_.G(1,"common_15click_anchor"))?(a[20]=[d],oc(this,20)):(d=_.ya(_.gb(2,"common_15click_anchor")),0<d.length&&(a[20]=d,oc(this,20)))};_.qc=function(a,b,c){a=a.getElementsByAdPiece(b);if(c)for(b=0;b<a.length;b++){var d=a[b].getAttribute(c);if(d)return d}return null};oc=function(a,b){if(a.c[b]&&a.oa(b)){a.l.push(b);var c=a.g;a=a.c[b];for(var d=0;d<a.length;d++){var e=a[d];e.href&&e.setAttribute("data-original-click-url",e.href);Tb(c,e,b,"mousedown");Tb(c,e,b,"click")}c.A[b]=!0}};rc=function(a,b){a=a.getElementsByAdPiece(b);for(b=0;b<a.length;b++)if(!a[b].href)return!1;return!0};sc=function(a){this.A=new _.mc;this.o=null;this.g=[];this.b=a;this.l=[];this.v=!1;this.c=null};tc=function(a){a=new sc(new Ma(a));_.u("adSlot",a,void 0);return a};_.uc=function(){var a=_.q.adSlot;return a?a:(Kb.b("hdrNDslt",Error("no adslot"),void 0,void 0),tc(null))};wc=function(a,b,c){pc.call(this,a,b,c,_.uc().c);for(a=0;a<vc.length;a++)oc(this,vc[a])};yc=function(a,b){var c=M,d={};if(!b)return null;d[0]=[b];eb(xc,function(a){c[a]&&(d[a]=_.ya(_.gb(2,c[a],b)))});return new wc(d,b,a)};zc=function(a){_.C(a,19,!1)&&(0,_.jb)(Ia(a,20),function(a){_.db(_.K,a,void 0)})};Cc=function(a,b,c){b.gqid=Ac;b.qqid=Bc;b.com=a;_.Nb("glaurung",b,c)};Dc=function(a,b){var c=_.D(b,Pa,16);c&&_.C(c,12,!1)&&_.C(b,5,!1)&&ib(a,{backgroundColor:"transparent",backgroundImage:"none"})};Fc=function(a,b,c){var d=a.b,e=_.D(d,Pa,16);if(e&&_.C(e,1,!1)){e=M;for(var f in e)delete e[f];M[1]="title-link";M[2]="url-link";M[3]="body-link";M[4]="button-link";M[8]="favicon-link";M[6]="image-link";M[26]="price";M[23]="reviews";M[43]="rating-stars";M[44]="reviews-count";M[24]="app-store";M[25]="promo-headline";M[33]="app-icon";M[16]="image-gallery";M[40]="image-gallery-image-link";M[36]="logo-link";M[37]="advertiser-link";M[38]="call-to-action-link";M[39]="video";M[42]="logo";M[50]="badge-box";M[9]="ad-background";_.G(2,"app-store-link",b)&&(M[24]="app-store-link");_.G(2,"app-icon-link",b)&&(M[33]="app-icon-link");_.G(2,"promo-headline-link",b)&&(M[25]="promo-headline-link")}f=_.G(1,"adunit",b);e=_.G(1,"ads",b);if(!f||!e)return 1;var g={};0==_.C(d,32,0)?(g.width=_.C(d,2,0)+"px",g.height=_.C(d,3,0)+"px",g.position="absolute",g.top="0",g.left="0"):(g.width="100%",g.height="100%");g.overflow="hidden";ib(f,g);Dc(f,d);Dc(e,d);try{c(e,a)}catch(m){return _.C(d,13,!1)&&(Ec=m),2}c=0;d=Ra(d);for(f=0;f<d.length;f++){g=d[f];var l="taw"+_.C(g,2,0);e=_.G(1,l,b);if(!e)return 3;e=yc(g,e);if(!e)return 1;_.K.registerAd?_.K.registerAd(e,l):c=4;_.C(g,11,!1)&&_.K.initAppPromo&&_.K.initAppPromo(e,a);zc(g);if(_.C(g,19,!1))if(l=Ia(g,33),0<l.length)for(g=0;g<l.length;g++){var p=(0,_.v)(wc.prototype.v,e,l[g]);e.g.g.push(p)}else g=(0,_.v)(wc.prototype.v,e,_.C(g,21,"")),e.g.g.push(g);a.pa(e)}return c};Gc=function(a,b,c){var d=[];d[0]=[c];d[15]=[b];(b=_.G(1,"abgc"))&&(d[27]=[b]);(b=_.G(1,"cbc"))&&(d[28]=[b]);pc.call(this,d,c,a,_.uc().c);oc(this,15)};Hc=function(a,b){var c={};c[0]=[b];pc.call(this,c,b,a,_.uc().c)};Jc=function(a,b,c){pc.call(this,a,b,c,_.uc().c);for(a=0;a<Ic.length;a++)oc(this,Ic[a]);this.listen(4,"mouseover",(0,_.v)(this.F,this,0,"onhoverbg",!1));this.listen(4,"mouseout",(0,_.v)(this.F,this,0,"onhoverbg",!0))};_.aa=[];fa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};da="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;ea=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();ma(function(a){function b(a){this.c=0;this.g=void 0;this.b=[];var b=this.l();try{a(b.resolve,b.reject)}catch(p){b.reject(p)}}function c(){this.b=null}function d(a){return a instanceof b?a:new b(function(b){b(a)})}if(a)return a;c.prototype.c=function(a){null==this.b&&(this.b=[],this.l());this.b.push(a)};c.prototype.l=function(){var a=this;this.g(function(){a.v()})};var e=da.setTimeout;c.prototype.g=function(a){e(a,0)};c.prototype.v=function(){for(;this.b&&this.b.length;){var a=this.b;this.b=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(m){this.o(m)}}}this.b=null};c.prototype.o=function(a){this.g(function(){throw a;})};b.prototype.l=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.D),reject:a(this.o)}};b.prototype.D=function(a){if(a===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.G(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.C(a):this.v(a)}};b.prototype.C=function(a){var b=void 0;try{b=a.then}catch(p){this.o(p);return}"function"==typeof b?this.J(b,a):this.v(a)};b.prototype.o=function(a){this.A(2,a)};b.prototype.v=function(a){this.A(1,a)};b.prototype.A=function(a,b){if(0!=this.c)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.c);this.c=a;this.g=b;this.B()};b.prototype.B=function(){if(null!=this.b){for(var a=0;a<this.b.length;++a)f.c(this.b[a]);this.b=null}};var f=new c;b.prototype.G=function(a){var b=this.l();a.ma(b.resolve,b.reject)};b.prototype.J=function(a,b){var c=this.l();try{a.call(b,c.resolve,c.reject)}catch(m){c.reject(m)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(Da){f(Da)}}:b}var e,f,g=new b(function(a,b){e=a;f=b});this.ma(d(a,e),d(c,f));return g};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.ma=function(a,b){function c(){switch(d.c){case 1:a(d.g);break;case 2:b(d.g);break;default:throw Error("Unexpected state: "+d.c);}}var d=this;null==this.b?f.c(c):this.b.push(c)};b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(b,c){for(var e=_.la(a),f=e.next();!f.done;f=e.next())d(f.value).ma(b,c)})};b.all=function(a){var c=_.la(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){g[b]=c;l--;0==l&&a(g)}}var g=[],l=0;do g.push(void 0),l++,d(e.value).ma(f(g.length-1),b),e=c.next();while(!e.done)})};return b});var Kc;if("function"==typeof Object.setPrototypeOf)Kc=Object.setPrototypeOf;else{var Lc;a:{var Mc={Ha:!0},Nc={};try{Nc.__proto__=Mc;Lc=Nc.Ha;break a}catch(a){}Lc=!1}Kc=Lc?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}oa=Kc;na="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};_.q=this;_.I=Date.now||function(){return+new Date};var Xb;_.wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(_.n(a))return _.n(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.jb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=_.n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};Xb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=_.n(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var l=f[g];b.call(void 0,l,g,a)&&(d[e++]=l)}return d};_.Oc=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=_.n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};_.Pc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var za;a:{var Qc=_.q.navigator;if(Qc){var Rc=Qc.userAgent;if(Rc){za=Rc;break a}}za=""};Ba[" "]=_.qa;var Uc,$c;_.Sc=z("Opera");_.Tc=z("Trident")||z("MSIE");Uc=z("Edge");_.Vc=z("Gecko")&&!(-1!=za.toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge");_.Wc=-1!=za.toLowerCase().indexOf("webkit")&&!z("Edge");_.Xc=z("Android");_.Yc=Aa();_.Zc=z("iPad");a:{var ad="",bd=function(){var a=za;if(_.Vc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Uc)return/Edge\/([\d\.]+)/.exec(a);if(_.Tc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Wc)return/WebKit\/(\S+)/.exec(a);if(_.Sc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();bd&&(ad=bd?bd[1]:"");if(_.Tc){var cd=Ea();if(null!=cd&&cd>(0,window.parseFloat)(ad)){$c=String(cd);break a}}$c=ad}_.dd=$c;var fd=_.q.document;_.ed=fd&&_.Tc?Ea()||("CSS1Compat"==fd.compatMode?(0,window.parseInt)(_.dd,10):5):void 0;_.gd=Aa()||z("iPod");_.hd=z("iPad");_.id=z("Android")&&!((z("Chrome")||z("CriOS"))&&!z("Edge")||z("Firefox")||z("Opera")||z("Silk"));var Fa="function"==typeof window.Uint8Array,Ga=[];_.y(Ma,_.A);_.y(_.Oa,_.A);_.y(Pa,_.A);_.y(_.Qa,_.A);var La=[1,23],Na=[20,33];_.Oa.prototype.getType=function(){return _.C(this,1,0)};_.Ua.prototype.g=!0;_.Ua.prototype.b=function(){return this.c};var Wa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ta={};_.Xa("about:blank");var xc;xc={sb:0,Sb:1,Tb:45,Ub:46,Gb:48,URL:2,kb:3,ab:4,Rb:5,Lb:7,yb:8,ib:9,Ab:6,Db:34,tb:13,bb:14,zb:15,Bb:16,Cb:40,Pb:47,Wb:29,pb:30,Qb:49,Hb:17,lb:18,rb:19,qb:20,Nb:23,fb:24,Kb:25,Jb:26,gb:27,Ib:28,VIDEO:39,Vb:31,ob:32,eb:33,ub:35,Eb:36,cb:37,nb:38,Fb:42,Mb:43,Ob:44,jb:50,vb:1E3,wb:1001,xb:1002};_.jd=[16,47,49,18,27,28,39];_.F=window.document;_.K=window;ab.prototype.ceil=function(){this.b=Math.ceil(this.b);this.c=Math.ceil(this.c);return this};ab.prototype.floor=function(){this.b=Math.floor(this.b);this.c=Math.floor(this.c);return this};ab.prototype.round=function(){this.b=Math.round(this.b);this.c=Math.round(this.c);return this};var kd=!!window.google_async_iframe_id,ld=kd&&window.parent||window;var md=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var od=null;var J=_.q.performance,pd=!!(J&&J.mark&&J.measure&&J.clearMarks),Bb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=pd){var b;if(null===od){od="";try{a="";try{a=_.q.top.location.hash}catch(c){a=_.q.location.hash}a&&(od=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=od;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});Cb.prototype.start=function(a,b){if(!this.b)return null;var c=yb()||xb();a=new zb(a,b,c);b="goog_"+a.uniqueId+"_start";J&&Bb()&&J.mark(b);return a};_.Gb.prototype.pinger=ba(0);_.Gb.prototype.b=function(a,b,c,d,e){e=e||"jserror";try{var f=new pb;f.o=!0;tb(f,1,"context",a);b.error&&b.meta&&b.id||(b=new Hb(Ib(b),b.fileName,b.lineNumber));b.msg&&tb(f,2,"msg",b.msg.substring(0,512));b.file&&tb(f,3,"file",b.file);0<b.line&&tb(f,4,"line",b.line);var g=b.meta||{};if(d)try{d(g)}catch(nd){}b=[g];f.b.push(5);f.c[5]=b;d=_.q;b=[];g=null;do{var l=d;if(bb(l)){var p=l.location.href;g=l.document&&l.document.referrer||null}else p=g,g=null;b.push(new ob(p||""));try{d=l.parent}catch(nd){d=null}}while(d&&l!=d);p=0;for(var m=b.length-1;p<=m;++p)b[p].depth=m-p;l=_.q;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var r=b[m];r.url||(r.url=l.location.ancestorOrigins[m-1]||"",r.Aa=!0)}var t=new ob(_.q.location.href,!1);l=null;var x=b.length-1;for(r=x;0<=r;--r){var H=b[r];!l&&md.test(H.url)&&(l=H);if(H.url&&!H.Aa){t=H;break}}H=null;var Nh=b.length&&b[x].url;0!=t.depth&&Nh&&(H=b[x]);var Da=new nb(t,H);Da.c&&tb(f,6,"top",Da.c.url||"");tb(f,7,"url",Da.b.url||"");wb(this.g,e,f,!1,c)}catch(nd){try{wb(this.g,e,{context:"ecmserr",rctx:a,msg:Ib(nd),url:Da&&Da.b.url},!1,c)}catch(Nj){}}return!0};pa(Hb,lb);var Fb,Kb;if(kd&&!bb(ld)){var qd="."+_.F.domain;try{for(;2<qd.split(".").length&&!bb(ld);)_.F.domain=qd=qd.substr(qd.indexOf(".")+1),ld=window.parent}catch(a){}bb(ld)||(ld=window)}var Ab=ld,Eb=new Cb;Fb=new function(){var a=void 0===a?_.K:a;this.l="http:"===a.location.protocol?"http:":"https:";this.c="pagead2.googlesyndication.com";this.g="/pagead/gen_204?id=";this.b=.01;this.o=Math.random()};Kb=new _.Gb;"complete"==Ab.document.readyState?Mb():Eb.b&&_.E(Ab,"load",function(){Mb()});var Qb=Kb.b;Ob.prototype.G=function(a,b){this.l=!0;var c=!1;if(b.target)a:{c=b.target;var d=b.button,e=b.ctrlKey,f=b.shiftKey,g=b.metaKey,l=b.altKey,p=new ab(b.x,b.y);if(window.document.createEvent){var m=window.document.createEvent("MouseEvents");m.initMouseEvent("click",!0,!0,null,0,p.b,p.c,p.b,p.c,e,l,f,g,d,null)}else if(window.document.createEventObject)m=window.document.createEventObject(),m.Yb="onclick",m.button=d,m.ctrlKey=e,m.altKey=l,m.shiftKey=f,m.metaKey=g,m.clientX=p.b,m.clientY=p.c,m.screenX=p.b,m.screenY=p.c;else{c=!1;break a}c.dispatchEvent?(c.dispatchEvent(m),c=!0):c=!1}!a.href||c||Ub(this,a,b)||(Rb(this,a),_.K.top.location=a.href)};Ob.prototype.D=function(a,b,c,d){if(this.l)this.l=!1;else{d||(d=_.K.event);this.c[c][b].forEach(function(a){a(d)});if(a.href){var e=Pb(this,a,d.type);e&&(a.href=e)}"click"==c&&(Sb(this,a,b,d),(d.preventDefault?d.defaultPrevented:!1===d.returnValue)||Ub(this,a,d)||Rb(this,a))}};var kc;ac.prototype.get=function(){if(0<this.c){this.c--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};var lc=new ac(function(){return new ec},function(a){a.reset()});bc.prototype.add=function(a,b){var c=lc.get();c.set(a,b);this.c?this.c.next=c:this.b=c;this.c=c};ec.prototype.set=function(a,b){this.b=a;this.c=b;this.next=null};ec.prototype.reset=function(){this.next=this.c=this.b=null};var fc,hc=!1,cc=new bc;_.L.prototype.l=!1;_.L.prototype.ra=ba(1);_.L.prototype.I=ba(3);_.y(_.mc,_.L);_.mc.prototype.subscribe=function(a,b,c){var d=this.c[a];d||(d=this.c[a]=[]);var e=this.A;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.A=e+3;d.push(e);return e};_.mc.prototype.D=function(a){var b=this.b[a];b&&(b=this.c[b],0!=this.v?(this.o.push(a),this.b[a+1]=_.qa):(b&&_.xa(b,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2]))};_.mc.prototype.B=function(a,b){var c=this.c[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.C)for(e=0;e<c.length;e++){var g=c[e];nc(this.b[g+1],this.b[g+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.v--,0<this.o.length&&0==this.v)for(;c=this.o.pop();)this.D(c)}}}};_.mc.prototype.I=ba(2);_.h=pc.prototype;_.h.Da=function(a,b){b=(a=_.C(this.b,22,""))&&b?b[a]:!1;this.g.v=!!b;this.F(0,"app_installed",!b)};_.h.navigationAdPieces=function(){return this.l};_.h.oa=function(){return!0};_.h.has=function(a){return(a=this.c[a])&&0<a.length};_.h.listen=function(a,b,c){var d=this.c[a];if(d){var e=this.g;c=_.w(c,a,this);var f=("click"==b||"mousedown"==b)&&e.A[a];e.c[b]||(e.c[b]={});e.c[b][a]||(e.c[b][a]=[]);e.c[b][a].push(c);if(!f)for(a=0;a<d.length;a++)_.E(d[a],b,c)}};_.h.F=function(a,b,c){if(b){a=this.getElementsByAdPiece(a);for(var d=0;d<a.length;d++)c?_.Yb(a[d],b):_.Wb(a[d],b)}};_.h.getElementsByAdPiece=function(a){return this.c[a]?this.c[a]:[]};_.h.creativeConversionUrl=function(){return _.C(this.b,6,"")};_.h.redirectUrl=function(){return _.C(this.b,8,"")};_.h.getIndex=function(){return _.C(this.b,2,0)};_.h.listenOnObject=function(a,b){this.o.subscribe(a,b)};_.h.fireOnObject=function(a,b){this.o.B(a,b)};_.h=sc.prototype;_.h.forEachAd=function(a){(0,_.jb)(this.g,a)};_.h.pa=function(a){this.g.push(a)};_.h.La=function(a){if(a=_.G(1,a))this.o=a;if(0==this.g.length)_.q.css=null;else{for(a=0;a<this.l.length;++a)this.l[a]();this.v=!0}};_.h.listenOnObject=function(a,b){this.A.subscribe(a,b)};_.h.fireOnObject=function(a,b){this.A.B(a,b)};_.h.registerFinalizeCallback=function(a){this.v?a():this.l.push(a)};_.h.getSerializedAdSlotData=function(){return _.Ka(this.b)};_.h.getAdsLength=function(){return this.g.length};_.h.getAd=function(a){return 0<=a&&a<this.g.length&&this.g[a].getIndex()==a?this.g[a]:null};_.h.getContainer=function(){return this.o};_.h.openSystemBrowser=function(a){return this.c?(this.c.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0}),!0):!1};_.h.openAttribution=function(a){return this.c?(this.c.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0,useCustomTabs:!0}),!0):!1};pa(wc,pc);wc.prototype.oa=function(a){return rc(this,a)||4==a};wc.prototype.v=function(a,b){return this.oa(b)?a:""};var vc=[1,2,3,4,8,6,40,24,33,25,36,37,38,9];var Ac="UNKNOWN",Bc="UNKNOWN",Ec=null,N={},M=(N[1]="ad-title",N[2]="ad-url",N[3]="ad-body",N[4]="ad-button",N[8]="ad-favicon",N[6]="ad-image",N[26]="ad-price",N[23]="ad-reviews",N[43]="ad-rating-stars",N[44]="ad-reviews-count",N[24]="ad-app-store-image",N[25]="ad-promo-headline",N[33]="ad-app-icon",N[16]="ad-image-gallery",N[40]="ad-image-gallery-image",N[36]="ad-logo",N[37]="ad-advertiser",N[38]="ad-call-to-action",N[39]="ad-video",N[42]="ad-logo-wrapper",N[9]="ad-background",N);pa(Gc,pc);pa(Hc,pc);pa(Jc,pc);Jc.prototype.oa=function(a){return rc(this,a)||4==a};var O={},rd=(O[1]="rhtitle",O[45]="rhtitleline1",O[46]="rhtitleline2",O[48]="rhlongtitle",O[3]="rhbody",O[2]="rhurl",O[4]="rhbutton",O[8]="rhfavicon",O[14]="rhaddress",O[6]="rhimage",O[34]="rhimagetemplate",O[49]="rh-scrollflow",O[16]="rhimagegallery",O[47]="rhreviewgallery",O[29]="rhviewimagegallery",O[30]="rhcloseimagegalleryview",O[31]="rhtrydemobutton",O[32]="rhclosetrydemoview",O[39]="rhvideo",O[9]="rhbackground",O[13]="rh-icore-empty",O[5]="rhsitelink",O[7]="rhradlink",O[17]="rh-multiframe",O[18]="rh-box-breadcrumbs",O[23]="rhstarratings",O[24]="rhstoreicon",O[25]="rhpromotext",O[26]="rhprice",O[27]="abgc",O[28]="cbc",O[35]="rhdemocountdowntimer",O[36]="rhlogo",O[1001]="rhoverlap-imagegallery",O[1002]="rhoverlap-trydemo",O),Ic=[1,45,46,48,2,4,5,7,8,3,9,6,14,15,34,26,24,36];sc.prototype.forEachAd=sc.prototype.forEachAd;sc.prototype.addAd=sc.prototype.pa;sc.prototype.finalize=sc.prototype.La;_.u("buildAdSlot",tc,void 0);_.u("buildGlaurungAds",function(a,b,c){var d=(new Date).getTime(),e=1,f=!1;Ec=null;try{f=_.C(a.b,13,!1),Ac=_.C(a.b,8,""),Bc=_.C(a.b,7,""),e=Fc(a,b,c)}catch(g){f&&(Ec=g),e=1}a=(new Date).getTime();b={};b.r=e;b.d=a-d;Cc("bridge",b);return e},void 0);_.u("glaurungError",function(){return Ec},void 0);_.u("glaurungBridge.log",Cc,void 0);_.u("glaurungBridge.getAdPieceClassName",function(a){return M[a]},void 0);_.u("buildImageAd",function(a,b){if(0>b||b>=Ra(a.b).length)a=null;else{a=Ra(a.b)[b];b=_.G(1,"google_image_div");var c=_.G(1,"aw0");a=b&&c?new Gc(a,c,b):null}return a},void 0);_.u("buildRichmediaAd",function(a,b){return 0>b||b>=Ra(a.b).length?null:new Hc(Ra(a.b)[b],_.F.body)},void 0);_.u("buildTextAd",function(a,b){var c=a.b;if(!(0>b||b>=Ra(c).length)){if(0>b||b>=Ra(a.b).length)var d=null;else{d=Ra(a.b)[b];var e=_.G(1,"taw"+b);if(e){var f={0:[e]},g;for(g in xc){var l=xc[g],p=rd[l];p&&(f[l]=_.ya(_.gb(2,p,e)))}d=new Jc(f,e,d)}else d=null}d&&(_.K.registerAd&&_.K.registerAd(d,"taw"+b),a.pa(d),_.C(Ra(c)[b],11,!1)&&_.K.initAppPromo&&_.K.initAppPromo(d,a))}},void 0);})(window.hydra=window.hydra||{});