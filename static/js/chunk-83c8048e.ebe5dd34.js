(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83c8048e"],{"88e6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gameMain"},[t._m(0),t.isOut?a("text-chart",{staticClass:"textChart",attrs:{text:"失败",duration:"3000",color:"red"}}):t._e()],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map"},[a("canvas",{attrs:{id:"myCanvas",height:"600",width:"900"}})])}],i=(a("9eab"),a("7bb1"),{data:function(){return{interbal:null,isOut:!1}},methods:{init:function(){var t=this,e=document.getElementById("myCanvas"),a=e.getContext("2d"),n=[],r=6,i=0,o=0,c=0;function s(){for(var t=0;t<60;t++)a.strokeStyle="black",a.beginPath(),a.moveTo(15*t,0),a.lineTo(15*t,600),a.closePath(),a.stroke();for(var e=0;e<40;e++)a.strokeStyle="black",a.beginPath(),a.moveTo(0,15*e),a.lineTo(900,15*e),a.closePath(),a.stroke();for(var c=0;c<r;c++)a.fillStyle="#000",c==r-1&&(a.fillStyle="red"),a.fillRect(n[c].x,n[c].y,15,15);a.fillStyle="black",a.fillRect(i,o,15,15),a.fill()}function l(){for(var t=0;t<r;t++)n[t]={x:15*t,y:0};s(),u()}function u(){i=15*Math.floor(60*Math.random()),o=15*Math.floor(40*Math.random());for(var t=0;t<n;t++)i==n[t].x&&o==sanke[t].y&&u()}function f(){switch(c){case 1:n.push({x:n[r-1].x-15,y:n[r-1].y});break;case 2:n.push({x:n[r-1].x,y:n[r-1].y-15});break;case 3:n.push({x:n[r-1].x+15,y:n[r-1].y});break;case 4:n.push({x:n[r-1].x,y:n[r-1].y+15});break;case 5:n.push({x:n[r-1].x-15,y:n[r-1].y-15});break;case 6:n.push({x:n[r-1].x+15,y:n[r-1].y+15});break;default:n.push({x:n[r-1].x+15,y:n[r-1].y})}n.shift(),a.clearRect(0,0,900,600),y(),b(),s()}function h(t){switch(t.keyCode){case 37:c=1;break;case 38:c=2;break;case 39:c=3;break;case 40:c=4;break;case 65:c=5;break;case 68:c=6;break}}function y(){n[r-1].x==i&&n[r-1].y==o&&(u(),r++,n.unshift({x:-15,y:-15}))}function b(){(n[r-1].x>885||n[r-1].y>585||n[r-1].x<0||n[r-1].y<0)&&(clearInterval(t.interbal),t.isOut=!0)}document.onkeydown=function(t){h(t)},window.onload=function(){l(),t.interbal=setInterval(f,150),s()}}},mounted:function(){this.init()}}),o=i,c=(a("8c43"),a("e607")),s=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=s.exports},"8c43":function(t,e,a){"use strict";a("9663")},9117:function(t,e,a){"use strict";var n=a("d9dc"),r=a("9bfa"),i=a("9612");t.exports=function(t){var e=n(this),a=i(e),o=arguments.length,c=r(o>1?arguments[1]:void 0,a),s=o>2?arguments[2]:void 0,l=void 0===s?a:r(s,a);while(l>c)e[c++]=t;return e}},9663:function(t,e,a){},"9eab":function(t,e,a){var n=a("b323"),r=a("9117"),i=a("6fe3");n({target:"Array",proto:!0},{fill:r}),i("fill")}}]);