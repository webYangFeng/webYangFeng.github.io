(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17d20a5a"],{"68f6":function(e,n,i){},"8f49":function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("canvas",{attrs:{id:"three"}})])}],o=i("9db7"),r=i("e295"),d=i("e8c9"),s={mounted:function(){this.initThree()},methods:{initThree:function(){var e=new o["kb"];e.background=new o["i"]("#eee"),e.fog=new o["o"]("#eee",20,100);var n=document.querySelector("#three"),i=new o["zb"]({canvas:n,antialias:!0});i.shadowMap.enabled=!0;var t=new o["Z"](50,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=1,t.position.x=-5,t.position.y=3;var a=new r["a"];a.load("/seraphine/scene.gltf",(function(n){var i=n.scene;i.traverse((function(e){var n=(new o["sb"]).load("/seraphine/textures/Mat_cwfyfr1_userboy17.bmp_diffuse.png");n.flipY=!1;var i=new o["O"]({map:n});e.material=i,e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),e.add(i)}));var s=new o["r"](16777215,16777215,.6);s.position.set(0,48,0),e.add(s);var w=new o["j"](16777215,.6);w.position.set(-10,8,-5),w.castShadow=!0,w.shadow.mapSize=new o["wb"](1024,1024),e.add(w);var c=new o["ab"](8e3,8e3),u=new o["P"]({color:8748731,shininess:0}),h=new o["N"](c,u);h.rotation.x=-.5*Math.PI,h.receiveShadow=!0,h.position.y=-.001,e.add(h);var f=new d["a"](t,i.domElement);function l(){if(f.update(),i.render(e,t),requestAnimationFrame(l),p(i)){var n=i.domElement;t.aspect=n.clientWidth/n.clientHeight,t.updateProjectionMatrix()}}function p(e){var n=e.domElement,i=window.innerWidth,t=window.innerHeight,a=n.width/window.devicePixelRatio,o=n.height/window.devicePixelRatio,r=a!==i||o!==t;return r&&e.setSize(i,t,!1),r}f.enableDamping=!0,l()}}},w=s,c=(i("d009"),i("e607")),u=Object(c["a"])(w,t,a,!1,null,"02f70899",null);n["default"]=u.exports},d009:function(e,n,i){"use strict";i("68f6")}}]);