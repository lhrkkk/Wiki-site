!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).LgZoom=e()}}(function(){return function l(a,s,n){function c(o,e){if(!s[o]){if(!a[o]){var t="function"==typeof require&&require;if(!e&&t)return t(o,!0);if(u)return u(o,!0);var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}var i=s[o]={exports:{}};a[o][0].call(i.exports,function(e){var t=a[o][1][e];return c(t||e)},i,i.exports,l,a,s,n)}return s[o].exports}for(var u="function"==typeof require&&require,e=0;e<n.length;e++)c(n[e]);return c}({1:[function(e,t,o){!function(e,t){if(void 0!==o)t();else{t(),e.lgZoom={}}}(this,function(){"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},o={scale:1,zoom:!0,actualSize:!0,enableZoomAfter:300},e=function(e){return this.el=e,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=t({},o,this.core.s),this.core.s.zoom&&this.core.doCss()&&(this.init(),this.zoomabletimeout=!1,this.pageX=window.innerWidth/2,this.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop)),this};e.prototype.init=function(){var a=this,e='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';a.core.s.actualSize&&(e+='<span id="lg-actual-size" class="lg-icon"></span>'),this.core.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",e),utils.on(a.core.el,"onSlideItemLoad.lgtmzoom",function(e){var t=a.core.s.enableZoomAfter+e.detail.delay;utils.hasClass(document.body,"lg-from-hash")&&e.detail.delay?t=0:utils.removeClass(document.body,"lg-from-hash"),a.zoomabletimeout=setTimeout(function(){utils.addClass(a.core.___slide[e.detail.index],"lg-zoomable")},t+30)});var s=1,t=function(e){var t=a.core.outer.querySelector(".lg-current .lg-image"),o=(window.innerWidth-t.clientWidth)/2,r=(window.innerHeight-t.clientHeight)/2+(document.documentElement.scrollTop||document.body.scrollTop),i=(e-1)*(a.pageX-o),l=(e-1)*(a.pageY-r);utils.setVendor(t,"Transform","scale3d("+e+", "+e+", 1)"),t.setAttribute("data-scale",e),t.parentElement.style.left=-i+"px",t.parentElement.style.top=-l+"px",t.parentElement.setAttribute("data-x",i),t.parentElement.setAttribute("data-y",l)},n=function(){1<s?utils.addClass(a.core.outer,"lg-zoomed"):a.resetZoom(),s<1&&(s=1),t(s)},r=function(e,t,o,r){var i,l=t.clientWidth;i=a.core.s.dynamic?a.core.s.dynamicEl[o].width||t.naturalWidth||l:a.core.items[o].getAttribute("data-width")||t.naturalWidth||l,utils.hasClass(a.core.outer,"lg-zoomed")?s=1:l<i&&(s=i/l||2),r?(a.pageX=window.innerWidth/2,a.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop)):(a.pageX=e.pageX||e.targetTouches[0].pageX,a.pageY=e.pageY||e.targetTouches[0].pageY),n(),setTimeout(function(){utils.removeClass(a.core.outer,"lg-grabbing"),utils.addClass(a.core.outer,"lg-grab")},10)},i=!1;utils.on(a.core.el,"onAferAppendSlide.lgtmzoom",function(e){var t=e.detail.index,o=a.core.___slide[t].querySelector(".lg-image");a.core.isTouch||utils.on(o,"dblclick",function(e){r(e,o,t)}),a.core.isTouch&&utils.on(o,"touchstart",function(e){i?(clearTimeout(i),i=null,r(e,o,t)):i=setTimeout(function(){i=null},300),e.preventDefault()})}),utils.on(window,"resize.lgzoom scroll.lgzoom orientationchange.lgzoom",function(){a.pageX=window.innerWidth/2,a.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop),t(s)}),utils.on(document.getElementById("lg-zoom-out"),"click.lg",function(){a.core.outer.querySelector(".lg-current .lg-image")&&(s-=a.core.s.scale,n())}),utils.on(document.getElementById("lg-zoom-in"),"click.lg",function(){a.core.outer.querySelector(".lg-current .lg-image")&&(s+=a.core.s.scale,n())}),utils.on(document.getElementById("lg-actual-size"),"click.lg",function(e){r(e,a.core.___slide[a.core.index].querySelector(".lg-image"),a.core.index,!0)}),utils.on(a.core.el,"onBeforeSlide.lgtm",function(){s=1,a.resetZoom()}),a.core.isTouch||a.zoomDrag(),a.core.isTouch&&a.zoomSwipe()},e.prototype.resetZoom=function(){utils.removeClass(this.core.outer,"lg-zoomed");for(var e=0;e<this.core.___slide.length;e++)this.core.___slide[e].querySelector(".lg-img-wrap")&&(this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("style"),this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("data-x"),this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("data-y"));for(var t=0;t<this.core.___slide.length;t++)this.core.___slide[t].querySelector(".lg-image")&&(this.core.___slide[t].querySelector(".lg-image").removeAttribute("style"),this.core.___slide[t].querySelector(".lg-image").removeAttribute("data-scale"));this.pageX=window.innerWidth/2,this.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop)},e.prototype.zoomSwipe=function(){for(var i=this,l={},a={},s=!1,n=!1,c=!1,e=0;e<i.core.___slide.length;e++)utils.on(i.core.___slide[e],"touchstart.lg",function(e){if(utils.hasClass(i.core.outer,"lg-zoomed")){var t=i.core.___slide[i.core.index].querySelector(".lg-object");c=t.offsetHeight*t.getAttribute("data-scale")>i.core.outer.querySelector(".lg").clientHeight,((n=t.offsetWidth*t.getAttribute("data-scale")>i.core.outer.querySelector(".lg").clientWidth)||c)&&(e.preventDefault(),l={x:e.targetTouches[0].pageX,y:e.targetTouches[0].pageY})}});for(var t=0;t<i.core.___slide.length;t++)utils.on(i.core.___slide[t],"touchmove.lg",function(e){if(utils.hasClass(i.core.outer,"lg-zoomed")){var t,o,r=i.core.___slide[i.core.index].querySelector(".lg-img-wrap");e.preventDefault(),s=!0,a={x:e.targetTouches[0].pageX,y:e.targetTouches[0].pageY},utils.addClass(i.core.outer,"lg-zoom-dragging"),o=c?-Math.abs(r.getAttribute("data-y"))+(a.y-l.y):-Math.abs(r.getAttribute("data-y")),t=n?-Math.abs(r.getAttribute("data-x"))+(a.x-l.x):-Math.abs(r.getAttribute("data-x")),(15<Math.abs(a.x-l.x)||15<Math.abs(a.y-l.y))&&(r.style.left=t+"px",r.style.top=o+"px")}});for(var o=0;o<i.core.___slide.length;o++)utils.on(i.core.___slide[o],"touchend.lg",function(){utils.hasClass(i.core.outer,"lg-zoomed")&&s&&(s=!1,utils.removeClass(i.core.outer,"lg-zoom-dragging"),i.touchendZoom(l,a,n,c))})},e.prototype.zoomDrag=function(){for(var i=this,l={},a={},s=!1,n=!1,c=!1,u=!1,e=0;e<i.core.___slide.length;e++)utils.on(i.core.___slide[e],"mousedown.lgzoom",function(e){var t=i.core.___slide[i.core.index].querySelector(".lg-object");u=t.offsetHeight*t.getAttribute("data-scale")>i.core.outer.querySelector(".lg").clientHeight,c=t.offsetWidth*t.getAttribute("data-scale")>i.core.outer.querySelector(".lg").clientWidth,utils.hasClass(i.core.outer,"lg-zoomed")&&utils.hasClass(e.target,"lg-object")&&(c||u)&&(e.preventDefault(),l={x:e.pageX,y:e.pageY},s=!0,i.core.outer.scrollLeft+=1,i.core.outer.scrollLeft-=1,utils.removeClass(i.core.outer,"lg-grab"),utils.addClass(i.core.outer,"lg-grabbing"))});utils.on(window,"mousemove.lgzoom",function(e){if(s){var t,o,r=i.core.___slide[i.core.index].querySelector(".lg-img-wrap");n=!0,a={x:e.pageX,y:e.pageY},utils.addClass(i.core.outer,"lg-zoom-dragging"),o=u?-Math.abs(r.getAttribute("data-y"))+(a.y-l.y):-Math.abs(r.getAttribute("data-y")),t=c?-Math.abs(r.getAttribute("data-x"))+(a.x-l.x):-Math.abs(r.getAttribute("data-x")),r.style.left=t+"px",r.style.top=o+"px"}}),utils.on(window,"mouseup.lgzoom",function(e){s&&(s=!1,utils.removeClass(i.core.outer,"lg-zoom-dragging"),!n||l.x===a.x&&l.y===a.y||(a={x:e.pageX,y:e.pageY},i.touchendZoom(l,a,c,u)),n=!1),utils.removeClass(i.core.outer,"lg-grabbing"),utils.addClass(i.core.outer,"lg-grab")})},e.prototype.touchendZoom=function(e,t,o,r){var i=this,l=i.core.___slide[i.core.index].querySelector(".lg-img-wrap"),a=i.core.___slide[i.core.index].querySelector(".lg-object"),s=-Math.abs(l.getAttribute("data-x"))+(t.x-e.x),n=-Math.abs(l.getAttribute("data-y"))+(t.y-e.y),c=(i.core.outer.querySelector(".lg").clientHeight-a.offsetHeight)/2,u=Math.abs(a.offsetHeight*Math.abs(a.getAttribute("data-scale"))-i.core.outer.querySelector(".lg").clientHeight+c),d=(i.core.outer.querySelector(".lg").clientWidth-a.offsetWidth)/2,g=Math.abs(a.offsetWidth*Math.abs(a.getAttribute("data-scale"))-i.core.outer.querySelector(".lg").clientWidth+d);(15<Math.abs(t.x-e.x)||15<Math.abs(t.y-e.y))&&(r&&(n<=-u?n=-u:-c<=n&&(n=-c)),o&&(s<=-g?s=-g:-d<=s&&(s=-d)),r?l.setAttribute("data-y",Math.abs(n)):n=-Math.abs(l.getAttribute("data-y")),o?l.setAttribute("data-x",Math.abs(s)):s=-Math.abs(l.getAttribute("data-x")),l.style.left=s+"px",l.style.top=n+"px")},e.prototype.destroy=function(){var e=this;utils.off(e.core.el,".lgzoom"),utils.off(window,".lgzoom");for(var t=0;t<e.core.___slide.length;t++)utils.off(e.core.___slide[t],".lgzoom");utils.off(e.core.el,".lgtmzoom"),e.resetZoom(),clearTimeout(e.zoomabletimeout),e.zoomabletimeout=!1},window.lgModules.zoom=e})},{}]},{},[1])(1)});