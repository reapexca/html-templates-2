/*!Extend touch.js*/
(function(i){var g={},b,k,h,e=750,a;function c(m){return"tagName" in m?m:m.parentNode}function j(n,m,p,o){var r=Math.abs(n-m),q=Math.abs(p-o);return r>=q?(n-m>0?"Left":"Right"):(p-o>0?"Up":"Down")}function l(){a=null;if(g.last){g.el.trigger("longTap");g={}}}function d(){if(a){clearTimeout(a)}a=null}function f(){if(b){clearTimeout(b)}if(k){clearTimeout(k)}if(h){clearTimeout(h)}if(a){clearTimeout(a)}b=k=h=a=null;g={}}i(document).ready(function(){var m,n;i(document.body).bind("touchstart",function(o){m=Date.now();n=m-(g.last||m);g.el=i(c(o.touches[0].target));b&&clearTimeout(b);g.x1=o.touches[0].pageX;g.y1=o.touches[0].pageY;if(n>0&&n<=250){g.isDoubleTap=true}g.last=m;a=setTimeout(l,e)}).bind("touchmove",function(o){d();g.x2=o.touches[0].pageX;g.y2=o.touches[0].pageY;if(Math.abs(g.x1-g.x2)>10){o.preventDefault()}}).bind("touchend",function(o){d();if((g.x2&&Math.abs(g.x1-g.x2)>30)||(g.y2&&Math.abs(g.y1-g.y2)>30)){h=setTimeout(function(){g.el.trigger("swipe");g.el.trigger("swipe"+(j(g.x1,g.x2,g.y1,g.y2)));g={}},0)}else{if("last" in g){k=setTimeout(function(){var p=i.Event("tap");p.cancelTouch=f;g.el.trigger(p);if(g.isDoubleTap){g.el.trigger("doubleTap");g={}}else{b=setTimeout(function(){b=null;g.el.trigger("singleTap");g={}},250)}},0)}}}).bind("touchcancel",f);i(window).bind("scroll",f)});["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(n){i.fn[n]=function(m){return this.bind(n,m)}})})(Zepto);
/*!Extend zepto.extend.js*/
(function(a){a.extend(a,{contains:function(b,c){return b.compareDocumentPosition?!!(b.compareDocumentPosition(c)&16):b!==c&&b.contains(c)}})})(Zepto);(function(a,c){a.extend(a,{toString:function(d){return Object.prototype.toString.call(d)},slice:function(e,d){return Array.prototype.slice.call(e,d||0)},later:function(f,d,h,e,g){return window["set"+(h?"Interval":"Timeout")](function(){f.apply(e,g)},d||0)},parseTpl:function(g,f){var d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+g.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/<%=([\s\S]+?)%>/g,function(h,i){return"',"+i.replace(/\\'/g,"'")+",'"}).replace(/<%([\s\S]+?)%>/g,function(h,i){return"');"+i.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";var e=new Function("obj",d);return f?e(f):e},throttle:function(d,e,i){var g=0,f;if(typeof e!=="function"){i=e;e=d;d=250}function h(){var m=this,n=Date.now()-g,l=arguments;function k(){g=Date.now();e.apply(m,l)}function j(){f=c}if(i&&!f){k()}f&&clearTimeout(f);if(i===c&&n>d){k()}else{f=setTimeout(i?j:k,i===c@d-n_3Ad)}}h._zid=e._zid=e._zid||a.proxy(e)._zid;return h},debounce:function(d,f,e){return f===c?a.throttle(250,d,false):a.throttle(d,f,e===c?false:e!==false)}});a.each("String Boolean RegExp Number Date Object Null Undefined".split(" "),function(e,d){var f;if("is"+d in a){return}switch(d){case"Null":f=function(g){return g===null};break;case"Undefined":f=function(g){return g===c};break;default:f=function(g){return new RegExp(d+"]","i").test(b(g))}}a["is"+d]=f});var b=a.toString})(Zepto);(function(d,g){var c=navigator.userAgent,a=navigator.appVersion,b=d.browser;d.extend(b,{qq:/qq/i.test(c),uc:/UC/i.test(c)||/UC/i.test(a)});b.uc=b.uc||!b.qq&&!b.chrome&&!b.firefox&&!/safari/i.test(c);try{b.version=b.uc?a.match(/UC(?:Browser)?\/([\d.]+)/)[1]:b.qq?c.match(/MQQBrowser\/([\d.]+)/)[1]:b.version}catch(f){}d.support=d.extend(d.support||{},{orientation:!(b.uc||(parseFloat(d.os.version)<5&&(b.qq||b.chrome)))&&!(d.os.android&&parseFloat(d.os.version)>3)&&"orientation" in window&&"onorientationchange" in window,touch:"ontouchend" in document,cssTransitions:"WebKitTransitionEvent" in window,has3d:"WebKitCSSMatrix" in window&&"m11" in new WebKitCSSMatrix()})})(Zepto);(function(b){b.matchMedia=(function(){var g=0,e="gmu-media-detect",d=b.fx.transitionEnd,h=b.fx.cssPrefix,f=b("<style></style>").append("."+e+"{"+h+"transition: width 0.001ms; width: 0; position: relative; bottom: -999999px;}\n").appendTo("head");return function(k){var m=e+g++,l=b('<div class="'+e+'" id="'+m+'"></div>').appendTo("body"),j=[],i;f.append("@media "+k+" { #"+m+" { width: 100px; } }\n");l.on(d,function(){i.matches=l.width()===100;b.each(j,function(n,o){b.isFunction(o)&&o.call(i,i)})});i={matches:l.width()===100,media:k,addListener:function(n){j.push(n);return this},removeListener:function(o){var n=j.indexOf(o);~n&&j.splice(n,1);return this}};return i}}());b(function(){var d=function(f){if(e!==f.matches){b(window).trigger("ortchange");e=f.matches}},e=true;b.mediaQuery={ortchange:"screen and (width: "+window.innerWidth+"px)"};b.matchMedia(b.mediaQuery.ortchange).addListener(d)});function a(){b(window).on("scroll",b.debounce(80,function(){b(document).trigger("scrollStop")},false))}function c(){b(window).off("scroll");a()}a();b(window).on("pageshow",function(d){if(d.persisted){b(document).off("touchstart",c).one("touchstart",c)}})})(Zepto);
/*!Extend zepto.fix.js*/
(function(a,b){a.extend(a.fn,{fix:function(e){var d=this;if(d.attr("isFixed")){return d}d.css(e).css("position","fixed").attr("isFixed",true);var h=a('<div style="position:fixed;top:10px;"></div>').appendTo("body"),f=h[0].getBoundingClientRect().top,c=function(){if(window.pageYOffset>0){if(h[0].getBoundingClientRect().top!==f){d.css("position","absolute");g();a(document).on("scrollStop",g);a(window).on("ortchange",g)}a(document).off("scrollStop",c);h.remove()}},g=function(){d.css({top:window.pageYOffset+(e.bottom!==b?window.innerHeight-d.height()-e.bottom:(e.top||0)),left:e.right!==b?document.body.offsetWidth-d.width()-e.right:(e.left||0)});e.width=="100%"&&d.css("width",document.body.offsetWidth)};a(document).on("scrollStop",c);return d}})}(Zepto));
/*!Extend zepto.highlight.js*/
(function(e){var d,a=false,f,c,b=function(){clearTimeout(f);if(d&&(c=d.attr("highlight-cls"))){d.removeClass(c).attr("highlight-cls","");d=null}};e.extend(e.fn,{highlight:function(g){a=a||!!e(document).on("touchend.highlight touchmove.highlight touchcancel.highlight",b);b();return this.each(function(){var h=e(this);h.css("-webkit-tap-highlight-color","rgba(255,255,255,0)").off("touchstart.highlight");g&&h.on("touchstart.highlight",function(){f=e.later(function(){d=h.attr("highlight-cls",g).addClass(g)},100)})})}})})(Zepto);
/*!Extend zepto.imglazyload.js*/
(function(b){var a;b.fn.imglazyload=function(c){var e=Array.prototype.splice,c=b.extend({threshold:0,container:window,urlName:"data-url",placeHolder:"",eventName:"scrollStop",refresh:false,innerScroll:false,isVertical:true,startload:null},c),h=b(c.container),j=c.isVertical,d=b.isWindow(h.get(0)),f={win:[j?"scrollY":"scrollX",j?"innerHeight":"innerWidth"],img:[j?"top":"left",j?"height":"width"]};!d&&(f.win=f.img);function k(o){var n=d?window:h.offset(),l=n[f.win[0]],m=n[f.win[1]];return l>=o[f.img[0]]-c.threshold-m&&l<=o[f.img[0]]+o[f.img[1]]}a=b.slice(this).reverse();if(c.refresh){return this}function i(n){var l=b(n),m;b.isFunction(c.startload)&&c.startload.call(l);m=b("<img />").on("load",function(){l.replaceWith(m).trigger("loadcomplete");m.off("load")}).on("error",function(){var o=b.Event("error");l.trigger(o);o.defaultPrevented||a.push(n);m.off("error").remove()}).attr("src",l.attr(c.urlName))}function g(){var l,m,n,o;for(l=a.length;l--;){m=b(o=a[l]);n=m.offset();k(n)&&(e.call(a,l,1),i(o))}}b(document).ready(function(){c.placeHolder&&b(a).append(c.placeHolder);g()});!c.innerScroll&&b(window).on(c.eventName+" ortchange",function(){g()});b.fn.imglazyload.detect=g;return this}})(Zepto);
/*!Extend zepto.iscroll.js*/
/*
 * iScroll v4.2.2 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function(h,E){var u=Math,o=[],l=E.createElement("div").style,z=(function(){var H="webkitT,MozT,msT,OT,t".split(","),G,F=0,m=H.length;for(;F<m;F++){G=H[F]+"ransform";if(G in l){return H[F].substr(0,H[F].length-1)}}return false})(),D=z?"-"+z.toLowerCase()+"-":"",k=s("transform"),x=s("transitionProperty"),j=s("transitionDuration"),n=s("transformOrigin"),B=s("transitionTimingFunction"),e=s("transitionDelay"),A=(/android/gi).test(navigator.appVersion),r=(/hp-tablet/gi).test(navigator.appVersion),i=s("perspective") in l,y="ontouchstart" in h&&!r,d=!!z,f=s("transition") in l,g="onorientationchange" in h?"orientationchange":"resize",b=y?"touchstart":"mousedown",t=y?"touchmove":"mousemove",c=y?"touchend":"mouseup",w=y?"touchcancel":"mouseup",a=(function(){if(z===false){return false}var m={"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"};return m[z]})(),q=(function(){return h.requestAnimationFrame||h.webkitRequestAnimationFrame||h.mozRequestAnimationFrame||h.oRequestAnimationFrame||h.msRequestAnimationFrame||function(m){return setTimeout(m,1)}})(),p=(function(){return h.cancelRequestAnimationFrame||h.webkitCancelAnimationFrame||h.webkitCancelRequestAnimationFrame||h.mozCancelRequestAnimationFrame||h.oCancelRequestAnimationFrame||h.msCancelRequestAnimationFrame||clearTimeout})(),C=i?" translateZ(0)":"",v=function(G,m){var H=this,F;H.wrapper=typeof G=="object"?G:E.getElementById(G);H.wrapper.style.overflow="hidden";H.scroller=H.wrapper.children[0];H.translateZ=C;H.options={hScroll:true,vScroll:true,x:0,y:0,bounce:true,bounceLock:false,momentum:true,lockDirection:true,useTransform:true,useTransition:false,topOffset:0,checkDOMChanges:false,handleClick:true,onRefresh:null,onBeforeScrollStart:function(I){I.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null};for(F in m){H.options[F]=m[F]}H.x=H.options.x;H.y=H.options.y;H.options.useTransform=d&&H.options.useTransform;H.options.useTransition=f&&H.options.useTransition;H.scroller.style[x]=H.options.useTransform?D+"transform":"top left";H.scroller.style[j]="0";H.scroller.style[n]="0 0";if(H.options.useTransition){H.scroller.style[B]="cubic-bezier(0.33,0.66,0.66,1)"}if(H.options.useTransform){H.scroller.style[k]="translate("+H.x+"px,"+H.y+"px)"+C}else{H.scroller.style.cssText+=";position:absolute;top:"+H.y+"px;left:"+H.x+"px"}H.refresh();H._bind(g,h);H._bind(b);if(H.options.checkDOMChanges){H.checkDOMTime=setInterval(function(){H._checkDOMChanges()},500)}};v.prototype={enabled:true,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,isStopScrollAction:false,handleEvent:function(F){var m=this;switch(F.type){case b:if(!y&&F.button!==0){return}m._start(F);break;case t:m._move(F);break;case c:case w:m._end(F);break;case g:m._resize();break;case a:m._transitionEnd(F);break}},_checkDOMChanges:function(){if(this.moved||this.animating||(this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale)){return}this.refresh()},_resize:function(){var m=this;setTimeout(function(){m.refresh()},A?200:0)},_pos:function(m,F){m=this.hScroll?m:0;F=this.vScroll?F:0;if(this.options.useTransform){this.scroller.style[k]="translate("+m+"px,"+F+"px) scale("+this.scale+")"+C}else{m=u.round(m);F=u.round(F);this.scroller.style.left=m+"px";this.scroller.style.top=F+"px"}this.x=m;this.y=F},_start:function(K){var J=this,F=y?K.touches[0]:K,G,m,L,I,H;if(!J.enabled){return}if(J.options.onBeforeScrollStart){J.options.onBeforeScrollStart.call(J,K)}if(J.options.useTransition){J._transitionTime(0)}J.moved=false;J.animating=false;J.distX=0;J.distY=0;J.absDistX=0;J.absDistY=0;J.dirX=0;J.dirY=0;J.isStopScrollAction=false;if(J.options.momentum){if(J.options.useTransform){G=getComputedStyle(J.scroller,null)[k].replace(/[^0-9\-.,]/g,"").split(",");m=+G[4];L=+G[5]}else{m=+getComputedStyle(J.scroller,null).left.replace(/[^0-9-]/g,"");L=+getComputedStyle(J.scroller,null).top.replace(/[^0-9-]/g,"")}if(m!=J.x||L!=J.y){J.isStopScrollAction=true;if(J.options.useTransition){J._unbind(a)}else{p(J.aniTime)}J.steps=[];J._pos(m,L);if(J.options.onScrollEnd){J.options.onScrollEnd.call(J)}}}J.startX=J.x;J.startY=J.y;J.pointX=F.pageX;J.pointY=F.pageY;J.startTime=K.timeStamp||Date.now();if(J.options.onScrollStart){J.options.onScrollStart.call(J,K)}J._bind(t,h);J._bind(c,h);J._bind(w,h)},_move:function(K){var H=this,F=y?K.touches[0]:K,G=F.pageX-H.pointX,m=F.pageY-H.pointY,L=H.x+G,J=H.y+m,I=K.timeStamp||Date.now();if(H.options.onBeforeScrollMove){H.options.onBeforeScrollMove.call(H,K)}H.pointX=F.pageX;H.pointY=F.pageY;if(L>0||L<H.maxScrollX){L=H.options.bounce?H.x+(G/2):L>=0||H.maxScrollX>=0?0:H.maxScrollX}if(J>H.minScrollY||J<H.maxScrollY){J=H.options.bounce?H.y+(m/2):J>=H.minScrollY||H.maxScrollY>=0?H.minScrollY:H.maxScrollY}H.distX+=G;H.distY+=m;H.absDistX=u.abs(H.distX);H.absDistY=u.abs(H.distY);if(H.absDistX<6&&H.absDistY<6){return}if(H.options.lockDirection){if(H.absDistX>H.absDistY+5){J=H.y;m=0}else{if(H.absDistY>H.absDistX+5){L=H.x;G=0}}}H.moved=true;H._beforePos?H._beforePos(J,m)&&H._pos(L,J):H._pos(L,J);H.dirX=G>0?-1:G<0?1:0;H.dirY=m>0?-1:m<0?1:0;if(I-H.startTime>300){H.startTime=I;H.startX=H.x;H.startY=H.y}if(H.options.onScrollMove){H.options.onScrollMove.call(H,K)}},_end:function(K){if(y&&K.touches.length!==0){return}var I=this,O=y?K.changedTouches[0]:K,L,N,G={dist:0,time:0},m={dist:0,time:0},H=(K.timeStamp||Date.now())-I.startTime,M=I.x,J=I.y,F;I._unbind(t,h);I._unbind(c,h);I._unbind(w,h);if(I.options.onBeforeScrollEnd){I.options.onBeforeScrollEnd.call(I,K)}if(!I.moved){if(y&&this.options.handleClick&&!I.isStopScrollAction){I.doubleTapTimer=setTimeout(function(){I.doubleTapTimer=null;L=O.target;while(L.nodeType!=1){L=L.parentNode}if(L.tagName!="SELECT"&&L.tagName!="INPUT"&&L.tagName!="TEXTAREA"){N=E.createEvent("MouseEvents");N.initMouseEvent("click",true,true,K.view,1,O.screenX,O.screenY,O.clientX,O.clientY,K.ctrlKey,K.altKey,K.shiftKey,K.metaKey,0,null);N._fake=true;L.dispatchEvent(N)}},0)}I._resetPos(400);if(I.options.onTouchEnd){I.options.onTouchEnd.call(I,K)}return}if(H<300&&I.options.momentum){G=M?I._momentum(M-I.startX,H,-I.x,I.scrollerW-I.wrapperW+I.x,I.options.bounce?I.wrapperW:0):G;m=J?I._momentum(J-I.startY,H,-I.y,(I.maxScrollY<0?I.scrollerH-I.wrapperH+I.y-I.minScrollY:0),I.options.bounce?I.wrapperH:0):m;M=I.x+G.dist;J=I.y+m.dist;if((I.x>0&&M>0)||(I.x<I.maxScrollX&&M<I.maxScrollX)){G={dist:0,time:0}}if((I.y>I.minScrollY&&J>I.minScrollY)||(I.y<I.maxScrollY&&J<I.maxScrollY)){m={dist:0,time:0}}}if(G.dist||m.dist){F=u.max(u.max(G.time,m.time),10);I.scrollTo(u.round(M),u.round(J),F);if(I.options.onTouchEnd){I.options.onTouchEnd.call(I,K)}return}I._resetPos(200);if(I.options.onTouchEnd){I.options.onTouchEnd.call(I,K)}},_resetPos:function(G){var m=this,H=m.x>=0?0:m.x<m.maxScrollX?m.maxScrollX:m.x,F=m.y>=m.minScrollY||m.maxScrollY>0?m.minScrollY:m.y<m.maxScrollY?m.maxScrollY:m.y;if(H==m.x&&F==m.y){if(m.moved){m.moved=false;if(m.options.onScrollEnd){m.options.onScrollEnd.call(m)}if(m._afterPos){m._afterPos()}}return}m.scrollTo(H,F,G||0)},_transitionEnd:function(F){var m=this;if(F.target!=m.scroller){return}m._unbind(a);m._startAni()},_startAni:function(){var K=this,F=K.x,m=K.y,I=Date.now(),J,H,G;if(K.animating){return}if(!K.steps.length){K._resetPos(400);return}J=K.steps.shift();if(J.x==F&&J.y==m){J.time=0}K.animating=true;K.moved=true;if(K.options.useTransition){K._transitionTime(J.time);K._pos(J.x,J.y);K.animating=false;if(J.time){K._bind(a)}else{K._resetPos(0)}return}G=function(){var L=Date.now(),N,M;if(L>=I+J.time){K._pos(J.x,J.y);K.animating=false;if(K.options.onAnimationEnd){K.options.onAnimationEnd.call(K)}K._startAni();return}L=(L-I)/J.time-1;H=u.sqrt(1-L*L);N=(J.x-F)*H+F;M=(J.y-m)*H+m;K._pos(N,M);if(K.animating){K.aniTime=q(G)}};G()},_transitionTime:function(m){m+="ms";this.scroller.style[j]=m},_momentum:function(L,F,J,m,N){var K=0.0006,G=u.abs(L)*(this.options.speedScale||1)/F,H=(G*G)/(2*K),M=0,I=0;if(L>0&&H>J){I=N/(6/(H/G*K));J=J+I;G=G*J/H;H=J}else{if(L<0&&H>m){I=N/(6/(H/G*K));m=m+I;G=G*m/H;H=m}}H=H*(L<0?-1:1);M=G/K;return{dist:H,time:u.round(M)}},_offset:function(m){var G=-m.offsetLeft,F=-m.offsetTop;while(m=m.offsetParent){G-=m.offsetLeft;F-=m.offsetTop}if(m!=this.wrapper){G*=this.scale;F*=this.scale}return{left:G,top:F}},_bind:function(G,F,m){o.concat([F||this.scroller,G,this]);(F||this.scroller).addEventListener(G,this,!!m)},_unbind:function(G,F,m){(F||this.scroller).removeEventListener(G,this,!!m)},destroy:function(){var G=this;G.scroller.style[k]="";G._unbind(g,h);G._unbind(b);G._unbind(t,h);G._unbind(c,h);G._unbind(w,h);if(G.options.useTransition){G._unbind(a)}if(G.options.checkDOMChanges){clearInterval(G.checkDOMTime)}if(G.options.onDestroy){G.options.onDestroy.call(G)}for(var F=0,m=o.length;F<m;){o[F].removeEventListener(o[F+1],o[F+2]);o[F]=null;F=F+3}o=[];var H=E.createElement("div");H.appendChild(this.wrapper);H.innerHTML="";G.wrapper=G.scroller=H=null},refresh:function(){var m=this,F;m.wrapperW=m.wrapper.clientWidth||1;m.wrapperH=m.wrapper.clientHeight||1;m.minScrollY=-m.options.topOffset||0;m.scrollerW=u.round(m.scroller.offsetWidth*m.scale);m.scrollerH=u.round((m.scroller.offsetHeight+m.minScrollY)*m.scale);m.maxScrollX=m.wrapperW-m.scrollerW;m.maxScrollY=m.wrapperH-m.scrollerH+m.minScrollY;m.dirX=0;m.dirY=0;if(m.options.onRefresh){m.options.onRefresh.call(m)}m.hScroll=m.options.hScroll&&m.maxScrollX<0;m.vScroll=m.options.vScroll&&(!m.options.bounceLock&&!m.hScroll||m.scrollerH>m.wrapperH);F=m._offset(m.wrapper);m.wrapperOffsetLeft=-F.left;m.wrapperOffsetTop=-F.top;m.scroller.style[j]="0";m._resetPos(400)},scrollTo:function(m,L,K,J){var I=this,H=m,G,F;I.stop();if(!H.length){H=[{x:m,y:L,time:K,relative:J}]}for(G=0,F=H.length;G<F;G++){if(H[G].relative){H[G].x=I.x-H[G].x;H[G].y=I.y-H[G].y}I.steps.push({x:H[G].x,y:H[G].y,time:H[G].time||0})}I._startAni()},scrollToElement:function(m,G){var F=this,H;m=m.nodeType?m:F.scroller.querySelector(m);if(!m){return}H=F._offset(m);H.left+=F.wrapperOffsetLeft;H.top+=F.wrapperOffsetTop;H.left=H.left>0?0:H.left<F.maxScrollX?F.maxScrollX:H.left;H.top=H.top>F.minScrollY?F.minScrollY:H.top<F.maxScrollY?F.maxScrollY:H.top;G=G===undefined?u.max(u.abs(H.left)*2,u.abs(H.top)*2):G;F.scrollTo(H.left,H.top,G)},scrollToPage:function(G,F,I){var H=this,m,J;I=I===undefined?400:I;if(H.options.onScrollStart){H.options.onScrollStart.call(H)}m=-H.wrapperW*G;J=-H.wrapperH*F;if(m<H.maxScrollX){m=H.maxScrollX}if(J<H.maxScrollY){J=H.maxScrollY}H.scrollTo(m,J,I)},disable:function(){this.stop();this._resetPos(0);this.enabled=false;this._unbind(t,h);this._unbind(c,h);this._unbind(w,h)},enable:function(){this.enabled=true},stop:function(){if(this.options.useTransition){this._unbind(a)}else{p(this.aniTime)}this.steps=[];this.moved=false;this.animating=false},isReady:function(){return !this.moved&&!this.animating}};function s(m){if(z===""){return m}m=m.charAt(0).toUpperCase()+m.substr(1);return z+m}l=null;if(typeof exports!=="undefined"){exports.iScroll=v}else{h.iScroll=v}(function(H){if(!H){return}var G=v,I=0,F={};function m(K,J){var L="iscroll"+I++;K.data("_iscroll_",L);return F[L]=new G(K[0],J)}h.iScroll=function(K,J){return m(H(typeof K=="string"?"#"+K:K),J)};H.fn.iScroll=function(K){var J=[];this.each(function(N,O){if(typeof K=="string"){var M=F[H(O).data("_iscroll_")],P;if(M&&(P=M[K])){var L=H.isFunction(P)?P.apply(M,Array.prototype.slice.call(arguments,1)):P;if(L!==M&&L!==undefined){J.push(L)}}}else{if(!H(O).data("_iscroll_")){m(H(O),K)}}});return J.length?J:this}})(h.Zepto||null)})(window,document);
/*!Extend zepto.location.js*/
(function(a){a.extend(a.fn,{location:function(e,d,c){a.ajaxJSONP({url:"http://api.map.baidu.com/api?v=1.4&callback=?",success:function(){window.navigator.geolocation?window.navigator.geolocation.getCurrentPosition(b,f,a.extend({enableHighAccuracy:true},c)):(d&&d("\u6d4f\u89c8\u5668\u4e0d\u652f\u6301html5\u6765\u83b7\u53d6\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f"))}});function b(g){var h=g.coords.longitude,j=g.coords.latitude,i="http://api.map.baidu.com/ag/coord/convert?from=2&to=4&x="+h+"&y="+j+"&callback=?";a.ajaxJSONP({url:i,success:function(l){var k=new BMap.Geocoder();k.getLocation(new BMap.Point(l.x,l.y),function(m){e&&e(m)})}})}function f(){d&&d(arguments)}}})})(Zepto);
/*!Extend zepto.position.js*/
(function(b,d){var a=b.fn.offset,c={};b.fn.offset=function(e){if(!b.isPlainObject(e)){return a.apply(this,arguments)}return this.each(function(f){c.setOffset(this,e,f)})};c.setOffset=function(h,r,k){var q=b(h),l=q.css("position"),f=q.offset(),e=q.css("top"),o=q.css("left"),p=(l==="absolute"||l==="fixed")&&~b.inArray("auto",[e,o]),n={},m={},g,j;l==="static"&&q.css("position","relative");m=p?q.position():m;g=m.top||parseFloat(e)||0;j=m.left||parseFloat(o)||0;r=b.isFunction(r)?r.call(h,k,f):r;r.top!=null&&(n.top=r.top-f.top+g);r.left!=null&&(n.left=r.left-f.left+j);"using" in r?r.using.call(h,n):q.css(n)}})(Zepto);(function(e,c){var g=e.fn.position||function(){if(!this.length){return null}var o=this.offsetParent(),p=this.offset(),n=/^(?:body|html)$/i.test(o[0].nodeName)?{top:0,left:0}:o.offset();n.top+=parseFloat(o.css("border-top-width"))||0;n.left+=parseFloat(o.css("border-left-width"))||0;return{top:p.top-n.top,left:p.left-n.left}},l=Math.round,d=/left|center|right/,h=/top|center|bottom/,a=/([\+\-]\d+%?)/,k=/^\w+/,b=/%$/;function m(p,o,n){return[parseInt(p[0],10)*(b.test(p[0])?o/100:1),parseInt(p[1],10)*(b.test(p[1])?n/100:1)]}function j(n,o){return parseInt(n.css(o),10)||0}function f(o){var n=o[0];return n.nodeType===9?{width:o.width(),height:o.height(),top:0,left:0}:n==window?{width:o.width(),height:o.height(),top:n.pageYOffset,left:n.pageXOffset}:n.preventDefault&&(n=n.touches?n.touches[0]:n)?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:o.offset()}function i(p){var n=e(p=(p||window)),o=p==window,q=o?{left:0,top:0}:n.offset();return{element:n,isWindow:o,offset:q,width:q.width||n.width(),height:q.height||n.height(),scrollLeft:o?p.pageXOffset:p.scrollLeft,scrollTop:o?p.pageYOffset:p.scrollTop}}e.fn.position=function(n){if(!n||!n.of){return g.call(this)}n=e.extend({},n);var x,v,t,s,o,u=e(n.of),r,w,q=i(n.within),p={};o=f(u);u[0].preventDefault&&(n.at="left top");v=o.width;t=o.height;s={left:o.left,top:o.top};e.each(["my","at"],function(){var y=(n[this]||"").split(" ");y.length===1&&y[d.test(y[0])?"push":"unshift"]("center");y[0]=d.test(y[0])?y[0]:"center";y[1]=h.test(y[1])?y[1]:"center";p[this]=[a.test(y[0])?RegExp.$1:0,a.test(y[1])?RegExp.$1:0];n[this]=[k.exec(y[0])[0],k.exec(y[1])[0]]});s.left+=(r=n.at[0])==="right"?v:r=="center"?v/2:0;s.top+=(r=n.at[1])==="bottom"?t:r=="center"?t/2:0;x=m(p.at,v,t);s.left+=x[0];s.top+=x[1];return this.each(function(){var z,B=e(this),E=B.offset(),F,D=E.width,A=E.height,C=j(B,"marginLeft"),y=j(B,"marginTop"),J=D+C+j(B,"marginRight"),I=A+y+j(B,"marginBottom"),G=e.extend({},s),H=m(p.my,D,A);G.left-=(F=n.my[0])==="right"?D:F==="center"?D/2:0;G.top-=(F=n.my[1])==="bottom"?A:F==="center"?A/2:0;G.left+=H[0];G.top+=H[1];G.left=l(G.left);G.top=l(G.top);z={marginLeft:C,marginTop:y};e.isFunction(w=n.collision)&&w.call(this,G,{targetWidth:v,targetHeight:t,elemWidth:D,elemHeight:A,collisionPosition:z,collisionWidth:J,collisionHeight:I,offset:[x[0]+H[0],x[1]+H[1]],my:n.my,at:n.at,within:q,elem:B});B.offset(e.extend(G,{using:n.using}))})}})(Zepto);
/*!Extend zepto.ui.js*/
(function(f,c){var b=1,e=function(){},j="<%=name%>-<%=id%>",h=(function(){var n={},o=0,m="GMUWidget"+(+new Date());return function(s,r,t){var p=s[m]||(s[m]=++o),q=n[p]||(n[p]={});!f.isUndefined(t)&&(q[r]=t);f.isNull(t)&&delete q[r];return q[r]}})();f.ui=f.ui||{version:"2.0.5",guid:g,define:function(n,p,o){if(o){p.inherit=o}var m=f.ui[n]=d(function(r,q){var s=k(m.prototype,{_id:f.parseTpl(j,{name:n,id:g()})});s._createWidget.call(s,r,q,m.plugins);return s},p);return i(n,m)},isWidget:function(n,m){return n instanceof (m===c?l:f.ui[m]||e)}};function g(){return b++}function k(m,n){var o={};Object.create?o=Object.create(m):o.__proto__=m;return f.extend(o,n||{})}function d(m,n){if(n){a(m,n);f.extend(m.prototype,n)}return f.extend(m,{plugins:[],register:function(o){if(f.isObject(o)){f.extend(this.prototype,o);return}this.plugins.push(o)}})}function a(m,p){var n=p.inherit||l,o=n.prototype,q;q=m.prototype=k(o,{$factory:m,$super:function(r){var s=o[r];return f.isFunction(s)?s.apply(this,f.slice(arguments,1)):s}});q._data=f.extend({},o._data,p._data);delete p._data;return m}function i(m){f.fn[m]=function(p){var o,q,n=f.slice(arguments,1);f.each(this,function(r,s){q=h(s,m)||f.ui[m](s,f.extend(f.isPlainObject(p)?p:{},{setup:true}));if(f.isString(p)){if(!f.isFunction(q[p])&&p!=="this"){throw new Error(m+"\u7ec4\u4ef6\u6ca1\u6709\u6b64\u65b9\u6cd5")}o=f.isFunction(q[p])?q[p].apply(q,n):c}if(o!==c&&o!==q||p==="this"&&(o=q)){return false}o=c});return o!==c?o:this}}var l=function(){};f.extend(l.prototype,{_data:{status:true},data:function(m,o){var n=this._data;if(f.isObject(m)){return f.extend(n,m)}else{return !f.isUndefined(o)?n[m]=o:n[m]}},_createWidget:function(o,q,m){if(f.isObject(o)){q=o||{};o=c}var r=f.extend({},this._data,q);f.extend(this,{_el:o?f(o):c,_data:r});var p=this;f.each(m,function(u,v){var s=v.apply(p);if(s&&f.isPlainObject(s)){var t=p._data.disablePlugin;if(!t||f.isString(t)&&!~t.indexOf(s.pluginName)){delete s.pluginName;f.each(s,function(w,y){var x;if((x=p[w])&&f.isFunction(y)){p[w]=function(){p[w+"Org"]=x;return y.apply(p,arguments)}}else{p[w]=y}})}}});if(r.setup){this._setup(o&&o.getAttribute("data-mode"))}else{this._create()}this._init();var p=this,n=this.trigger("init").root();n.on("tap",function(s){(s.bubblesList||(s.bubblesList=[])).push(p)});h(n[0],p._id.split("-")[0],p)},_create:function(){},_setup:function(m){},root:function(m){return this._el=m||this._el},id:function(m){return this._id=m||this._id},destroy:function(){var n=this,m;m=this.trigger("destroy").off().root();m.find("*").off();h(m[0],n._id.split("-")[0],null);m.off().remove();this.__proto__=null;f.each(this,function(o){delete n[o]})},on:function(m,n){this.root().on(m,f.proxy(n,this));return this},off:function(m,n){this.root().off(m,n);return this},trigger:function(n,o){n=f.isString(n)?f.Event(n):n;var p=this.data(n.type),m;if(p&&f.isFunction(p)){n.data=o;m=p.apply(this,[n].concat(o));if(m===false||n.defaultPrevented){return this}}this.root().trigger(n,o);return this}})})(Zepto);
