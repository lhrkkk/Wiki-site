!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).LgAutoplay=e()}}(function(){return function l(n,u,i){function c(t,e){if(!u[t]){if(!n[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(a)return a(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var s=u[t]={exports:{}};n[t][0].call(s.exports,function(e){var o=n[t][1][e];return c(o||e)},s,s.exports,l,n,u,i)}return u[t].exports}for(var a="function"==typeof require&&require,e=0;e<i.length;e++)c(i[e]);return c}({1:[function(e,o,t){!function(e,o){if(void 0!==t)o();else{o(),e.lgAutoplay={}}}(this,function(){"use strict";var o=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t={autoplay:!1,pause:5e3,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar"},e=function(e){return this.el=e,this.core=window.lgData[this.el.getAttribute("lg-uid")],!(this.core.items.length<2)&&(this.core.s=o({},t,this.core.s),this.interval=!1,this.fromAuto=!0,this.canceledOnTouch=!1,this.fourceAutoplayTemp=this.core.s.fourceAutoplay,this.core.doCss()||(this.core.s.progressBar=!1),this.init(),this)};e.prototype.init=function(){var e=this;e.core.s.autoplayControls&&e.controls(),e.core.s.progressBar&&e.core.outer.querySelector(".lg").insertAdjacentHTML("beforeend",'<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),e.progress(),e.core.s.autoplay&&e.startlAuto(),utils.on(e.el,"onDragstart.lgtm touchstart.lgtm",function(){e.interval&&(e.cancelAuto(),e.canceledOnTouch=!0)}),utils.on(e.el,"onDragend.lgtm touchend.lgtm onSlideClick.lgtm",function(){!e.interval&&e.canceledOnTouch&&(e.startlAuto(),e.canceledOnTouch=!1)})},e.prototype.progress=function(){var e,o,t=this;utils.on(t.el,"onBeforeSlide.lgtm",function(){t.core.s.progressBar&&t.fromAuto&&(e=t.core.outer.querySelector(".lg-progress-bar"),o=t.core.outer.querySelector(".lg-progress"),t.interval&&(o.removeAttribute("style"),utils.removeClass(e,"lg-start"),setTimeout(function(){utils.setVendor(o,"Transition","width "+(t.core.s.speed+t.core.s.pause)+"ms ease 0s"),utils.addClass(e,"lg-start")},20))),t.fromAuto||t.core.s.fourceAutoplay||t.cancelAuto(),t.fromAuto=!1})},e.prototype.controls=function(){var e=this;e.core.outer.querySelector(this.core.s.appendAutoplayControlsTo).insertAdjacentHTML("beforeend",'<span class="lg-autoplay-button lg-icon"></span>'),utils.on(e.core.outer.querySelector(".lg-autoplay-button"),"click.lg",function(){utils.hasClass(e.core.outer,"lg-show-autoplay")?(e.cancelAuto(),e.core.s.fourceAutoplay=!1):e.interval||(e.startlAuto(),e.core.s.fourceAutoplay=e.fourceAutoplayTemp)})},e.prototype.startlAuto=function(){var e=this;utils.setVendor(e.core.outer.querySelector(".lg-progress"),"Transition","width "+(e.core.s.speed+e.core.s.pause)+"ms ease 0s"),utils.addClass(e.core.outer,"lg-show-autoplay"),utils.addClass(e.core.outer.querySelector(".lg-progress-bar"),"lg-start"),e.interval=setInterval(function(){e.core.index+1<e.core.items.length?e.core.index++:e.core.index=0,e.fromAuto=!0,e.core.slide(e.core.index,!1,!1)},e.core.s.speed+e.core.s.pause)},e.prototype.cancelAuto=function(){clearInterval(this.interval),this.interval=!1,this.core.outer.querySelector(".lg-progress")&&this.core.outer.querySelector(".lg-progress").removeAttribute("style"),utils.removeClass(this.core.outer,"lg-show-autoplay"),utils.removeClass(this.core.outer.querySelector(".lg-progress-bar"),"lg-start")},e.prototype.destroy=function(){this.cancelAuto(),this.core.outer.querySelector(".lg-progress-bar")&&this.core.outer.querySelector(".lg-progress-bar").parentNode.removeChild(this.core.outer.querySelector(".lg-progress-bar"))},window.lgModules.autoplay=e})},{}]},{},[1])(1)});