(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1aa2dc4"],{"0819":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("canvas",{attrs:{id:"three"}}),t("el-button",{staticStyle:{position:"absolute",top:"20px",right:"20px"},on:{click:function(n){return e.$router.go(-1)}}},[e._v("返回")])],1)},a=[],o=(t("c107"),t("933e"),t("f567"),t("7fc2"),t("08ec"),t("c5dd"),t("2236"),t("0709"),t("d8e8"),t("de80"),t("f9e5"),t("9c65"),t("e977"),t("ff07"),t("1e69"),t("fc51"),t("5f98"),t("0df9"),t("bd05"),t("b2cf"),t("6b0a"),t("eea5"),t("84e0"),t("06fd"),t("4c0b"),t("e0d8"),t("7426"),t("1282"),t("84f8"),t("d23b"),t("110c"),t("0152"),t("9db7")),r=t("e8c9"),c={mounted:function(){this.initThree()},methods:{initThree:function(){var e=new o["ob"];e.background=new o["i"]("#080b27");var n=document.querySelector("#three"),t=new o["Eb"]({canvas:n,antialias:!0});t.shadowMap.enabled=!0;var i=window.innerWidth,a=window.innerHeight,c=i/a,d=80,s=new o["cb"](-d*c,d*c,d,-d,1,1e3);s.position.set(10,100,100),s.lookAt(e.position);var w=new o["fb"]("#ffceff");w.position.set(100,100,100),e.add(w);var f=new o["g"],l=new Float32Array([0,0,0,50,0,0,0,100,0,0,0,0,0,0,100,50,0,0,0,0,100,50,0,0,0,100,0,0,100,0,0,0,100,50,0,0]),u=new Float32Array([1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1]);f.attributes.color=new o["f"](u,3);var b=new Float32Array([0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0]);f.attributes.normal=new o["f"](b,3);var p=new o["f"](l,3);f.attributes.position=p;var v=(new o["xb"]).load("/moto_vespa/textures/brakes1_metallicRoughness.png");v.flipY=!1;var h=new o["R"]({color:255,size:10,side:o["m"]});h.transparent=!0,h.opacity=.4;var m=new o["Q"](f,h);e.add(m);h=new o["E"]({color:16711680});var g=new o["D"](f,h);e.add(g);var x=new r["a"](s,t.domElement);function k(){if(x.update(),t.render(e,s),requestAnimationFrame(k),y(t)){var n=t.domElement;s.aspect=n.clientWidth/n.clientHeight,s.updateProjectionMatrix()}}function y(e){var n=e.domElement,t=window.innerWidth,i=window.innerHeight,a=n.width/window.devicePixelRatio,o=n.height/window.devicePixelRatio,r=a!==t||o!==i;return r&&e.setSize(t,i,!1),r}x.enableDamping=!0,k()}}},d=c,s=(t("62ab"),t("e607")),w=Object(s["a"])(d,i,a,!1,null,"9c3de012",null);n["default"]=w.exports},"62ab":function(e,n,t){"use strict";t("e6f7")},e6f7:function(e,n,t){}}]);