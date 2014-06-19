
var intro = document.getElementById("intro");
var obj_1 = document.getElementById("obj_1");
var obj_2 = document.getElementById("obj_2");
var obj_3 = document.getElementById("obj_3");
var obj_4 = document.getElementById("obj_4");

var menu = document.getElementById("menu");
var logo = document.getElementsByClassName("logo");
var menu_01 = document.getElementById("menu_01");
var menu_02 = document.getElementById("menu_02");
var menu_03 = document.getElementById("menu_03");
var menu_04 = document.getElementById("menu_04");

var modulo01_01 = document.getElementById("modulo01_01");
var barra = document.getElementsByClassName("barra");
var m_01_01 = document.getElementById("m_01_01");
var m_01_02 = document.getElementById("m_01_02");
var m_01_03 = document.getElementById("m_01_03");
var m_01_04 = document.getElementById("m_01_04");
var m_01_05 = document.getElementById("m_01_05");
var m_01_06 = document.getElementById("m_01_06");

var modulo01_02 = document.getElementById("modulo01_02");
var m_02_01 = document.getElementById("m_02_01");
var m_02_02 = document.getElementById("m_02_02");
var m_02_03 = document.getElementById("m_02_03");
var m_02_04 = document.getElementById("m_02_04");
var m_02_05 = document.getElementById("m_02_05");
var m_02_06 = document.getElementById("m_02_06");

var modulo01_03 = document.getElementById("modulo01_03");
var m_03_01 = document.getElementById("m_03_01");
var m_03_02 = document.getElementById("m_03_02");
var m_03_03 = document.getElementById("m_03_03");
var m_03_04 = document.getElementById("m_03_04");
var m_03_05 = document.getElementById("m_03_05");
var m_03_06 = document.getElementById("m_03_06");
var m_03_07 = document.getElementById("m_03_07");
var m_03_08 = document.getElementById("m_03_08");
var m_03_09 = document.getElementById("m_03_09");
var m_03_10 = document.getElementById("m_03_10");
var m_03_11 = document.getElementById("m_03_11");

var modulo01_04 = document.getElementById("modulo01_04");
var m_04_01 = document.getElementById("m_04_01");
var m_04_02 = document.getElementById("m_04_02");
var m_04_03 = document.getElementById("m_04_03");
var m_04_04 = document.getElementById("m_04_04");
var m_04_05 = document.getElementById("m_04_05");
var m_04_06 = document.getElementById("m_04_06");
var m_04_07 = document.getElementById("m_04_07");
var m_04_08 = document.getElementById("m_04_08");
var m_04_09 = document.getElementById("m_04_09");

var modulo01_05 = document.getElementById("modulo01_05");
var m_05_01 = document.getElementById("m_05_01");
var m_05_02 = document.getElementById("m_05_02");
var m_05_03 = document.getElementById("m_05_03");
var m_05_04 = document.getElementById("m_05_04");
var m_05_05 = document.getElementById("m_05_05");

var modulo01_06 = document.getElementById("modulo01_05");
var m_06_01 = document.getElementById("m_06_01");
var m_06_02 = document.getElementById("m_06_02");
var m_06_03 = document.getElementById("m_06_03");
var m_06_04 = document.getElementById("m_06_04");
var m_06_05 = document.getElementById("m_06_05");
var m_06_06 = document.getElementById("m_06_06");
//TweenMax.to(photo, 2, {width:"200px", height:"150px"});

function modulo(oculta, muestra, reproduce){
//debugger;
	TweenMax.to(oculta, 0, {display:"none"});
    TweenMax.to(muestra, 0, {display:"block"});
    window[reproduce].time(0);
    window[reproduce].play();
}

function moduloSiguiente(oculta, muestra, reproduce){
    TweenMax.to(oculta, 0, {display:"none"});
    TweenMax.to(muestra, 0, {display:"block"});
    window[reproduce].time(0);
    window[reproduce].play();
}

function moduloAnterior(oculta, muestra, reproduce){
    TweenMax.to(oculta, 0, {display:"none"});
    TweenMax.to(muestra, 0, {display:"block"});
    window[reproduce].time(0);
    window[reproduce].play();
}

//INTRODUCCION
var a_intro = new TimelineMax({paused:false});
a_intro.add(TweenLite.to(intro, 0, {display:"block"}));
a_intro.add(TweenLite.from(obj_1, 0.5, {left:0, opacity:0, ease:"Sine.easeOut"}));
a_intro.add(TweenLite.from(obj_2, 0.5, {left:0, opacity:0, /*delay: 1,*/ ease:"Sine.easeOut"}));
a_intro.add(TweenLite.from(obj_3, 0.5, {left:0, opacity:0, /*delay: 2,*/ ease:"Sine.easeOut"}));
a_intro.add(TweenLite.from(obj_4, 0.5, {left:0, opacity:0, /*delay: 3,*/ ease:"Sine.easeOut"}));


//MENU
var a_menu = new TimelineMax({paused:true});
a_menu.add(TweenLite.from(logo, 0.5, {left:-200, opacity:0, ease:"Back.easeOut"}));
a_menu.add(TweenLite.from(menu_01, 0.5, {left:2000, opacity:0, ease:"Back.easeOut"}));
a_menu.add(TweenLite.from(menu_02, 0.5, {top:100, delay: 1, opacity:0, ease:"Back.easeOut"}));
a_menu.add(TweenLite.from(menu_03, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_menu.add(TweenLite.from(menu_04, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));


//MODULO 01 PARTE 01
var a_modulo01_01 = new TimelineMax({paused:true});
a_modulo01_01.add(TweenLite.from(barra, 1, {left:-500, transformOrigin:"right top", opacity:0, ease:"Back.easeOut"}));
a_modulo01_01.add(TweenMax.from(m_01_01, 2.5, {rotationY:400, opacity:0, ease:"Elastic.easeOut"}));
a_modulo01_01.add(TweenMax.from(m_01_02, 1.5, {rotationY:270, transformOrigin:"left 50% -500", ease:"Back.easeOut"}), 1.5);
a_modulo01_01.add(TweenLite.from(m_01_03, 1.3, {rotationY:270, transformOrigin:"left 50% 500", ease:"Back.easeOut"}), 1.5);
a_modulo01_01.add(TweenLite.from(m_01_04, 1.1, {rotationY:270, transformOrigin:"left 50% -500", ease:"Back.easeOut"}), 1.5);
a_modulo01_01.add(TweenLite.from(m_01_05, 0.5, {top:100, opacity:0, delay: 1.5, ease:"Back.easeOut"}));
a_modulo01_01.add(TweenLite.from(m_01_06, 0.5, {top:100, opacity:0, delay:3, ease:"Back.easeOut"}));


//MODULO 01 PARTE 02
var a_modulo01_02 = new TimelineMax({paused:true});
//a_modulo01_02.add(TweenLite.from(m_02_01, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_02.add(TweenLite.from(m_02_02, 1.5, {rotationX:270, transformOrigin:"top 50% -500", ease:"Back.easeOut"}));
a_modulo01_02.add(TweenLite.from(m_02_03, 1.5, {rotationX:270, transformOrigin:"top 50% 500", ease:"Back.easeOut"}), 0);
a_modulo01_02.add(TweenLite.from(m_02_04, 1.3, {rotationX:270, transformOrigin:"top 50% -500", ease:"Back.easeOut"}), 0);
a_modulo01_02.add(TweenLite.from(m_02_05, 0.5, {left:2000, opacity:0, delay:1.5, ease:"Back.easeOut"}));
a_modulo01_02.add(TweenLite.from(m_02_06, 0.5, {height:0, ease:"Back.easeOut"}));
a_modulo01_02.add(TweenLite.to(m_02_06, 0.5, {height:80, ease:"Back.easeOut", delay:0.3}));


//MODULO 01 PARTE 03
var a_modulo01_03 = new TimelineMax({paused:true});
a_modulo01_03.add(TweenLite.from(m_03_01, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_03.add(TweenLite.from(m_03_02, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_03.add(TweenLite.from(m_03_03, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_03.add(TweenLite.from(m_03_04, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_03.add(TweenLite.from(m_03_05, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_03.add(TweenLite.from(m_03_06, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_03.add(TweenLite.from(m_03_07, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_03.add(TweenLite.from(m_03_08, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_03.add(TweenLite.from(m_03_09, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_03.add(TweenLite.from(m_03_10, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_03.add(TweenLite.from(m_03_11, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));


//MODULO 01 PARTE 04
var a_modulo01_04 = new TimelineMax({paused:true});
a_modulo01_04.add(TweenLite.from(m_04_01, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_04.add(TweenLite.from(m_04_02, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_04.add(TweenLite.from(m_04_03, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_04.add(TweenLite.from(m_04_04, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_04.add(TweenLite.from(m_04_05, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_04.add(TweenLite.from(m_04_06, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_04.add(TweenLite.from(m_04_07, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_04.add(TweenLite.from(m_04_08, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_04.add(TweenLite.from(m_04_09, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));


//MODULO 01 PARTE 05
var a_modulo01_05 = new TimelineMax({paused:true});
a_modulo01_05.add(TweenLite.from(m_05_01, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_05.add(TweenLite.from(m_05_02, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_05.add(TweenLite.from(m_05_03, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_05.add(TweenLite.from(m_05_04, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_05.add(TweenLite.from(m_05_05, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));


//MODULO 01 PARTE 06
var a_modulo01_06 = new TimelineMax({paused:true});
a_modulo01_06.add(TweenLite.from(m_06_01, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_06.add(TweenLite.from(m_06_02, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_06.add(TweenLite.from(m_06_03, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_06.add(TweenLite.from(m_06_04, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_06.add(TweenLite.from(m_06_05, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));
a_modulo01_06.add(TweenLite.from(m_06_06, 0.5, {top:100, opacity:0, ease:"Back.easeOut"}));