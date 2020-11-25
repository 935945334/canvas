var Btn = document.getElementById("Btn");
var canvas_body = document.getElementById("canvas-body");
var box_canvas = document.getElementById("box-canvas");
var canvas = document.getElementById("canvas");
var box_Palette = document.getElementById("box-Palette");
var Palette = document.getElementById("Palette");
var choice_name = document.getElementById("choice-name");
var Btn_Arr = Btn.getElementsByClassName("Btn-div");
var canvas_Num = document.getElementById("canvas-Num");
var textbook = document.getElementById("textbook");
var textbook_Num = document.getElementById("textbook-Num");
var pattern;
var Btn_bj = "Button@3";
var choice_bj = "choice-name";
var Btn_Num = -48;
var Btn_state = "pen";
var Btn_Temp;
var scale = 48;
var canvas_Width = 16;
var canvas_Height = 16;
var canvas_Arr = [];
var Grid_state = true;
var canvas_state;
var is_Color = "#ffffff";
var is_bj = "#ffffff";
var color_Arr = [];
var color_1 = ["#fff","#facd89","#fff799","#cce198","#acd598","#89c997","#84ccc9","#7ecef4","#88abda","#8c97cb","#8f82bc"];
var color_64 = ["#ffffff","#000000","#141013","#3b1725","#73172d","#b4202a","#df3e23","#fa6a0a","#f9a31b","#ffd541","#fffc40","#d6f264","#9cdb43","#59c135","#14a02e","#1a7a3e","#24523b","#122020","#143464","#285cc4","#249fde","#20d6c7","#a6fcdb","#fef3c0","#fad6b8","#f5a097","#e86a73","#bc4a9b","#793a80","#403353","#242234","#221c1a","#322b28","#71413b","#bb7547","#dba463","#f4d29c","#dae0ea","#b3b9d1","#8b93af","#6d758d","#4a5462","#333941","#422433","#5b3138","#8e5252","#ba756a","#e9b5a3","#e3e6ff","#b9bffb","#849be4","#588dbe","#477d85","#23674e","#328464","#5daf8d","#92dcba","#cdf7e2","#e4d2aa","#c7b08b","#a08662","#796755","#5a4e44","#423934"];
;
var Palette_0 = ["#ffffff","#32445a","#383838","#5f6466","#84848c","#9d9d9d","#d0d0d0","#240b20","#40863f","#435dc9","#32324c","#45889b","#2d6421","#1a232f"];
var Palette_1 = ["#ffffff","#32445a","#371839","#c8bad9","#72d4cb","#a1ede4","#c4f5f0","#9687cf","#6eadcc","#c53345","#fcf9f2","#e1ae78","#e9c19b","#31344a"];
var Palette_2 = ["#ffffff","#32445a","#000000","#784321","#c87236","#e7e7e7","#cdc9ca","#ff0055","#fffffd","#ff76a4"];
var Palette_3 = ["#ffffff","#32445a","#7a0013","#fa2332","#fff4c0","#512807","#693127","#cd7100","#bc0a2c","#894023","#aa5625","#9d5549","#eab093","#31344a","#323430"];



var textbook_0 = [
	"#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#32445a",
	"#383838","#5f6466","#84848c","#84848c","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#84848c","#84848c","#5f6466","#383838",
	"#383838","#5f6466","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#5f6466","#383838",
	"#383838","#9d9d9d","#9d9d9d","#9d9d9d","#84848c","#5f6466","#5f6466","#5f6466","#5f6466","#5f6466","#5f6466","#84848c","#9d9d9d","#9d9d9d","#9d9d9d","#383838",
	"#383838","#d0d0d0","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#9d9d9d","#d0d0d0","#383838",
	"#383838","#9d9d9d","#d0d0d0","#d0d0d0","#d0d0d0","#d0d0d0","#d0d0d0","#d0d0d0","#d0d0d0","#d0d0d0","#d0d0d0","#d0d0d0","#d0d0d0","#d0d0d0","#9d9d9d","#383838",
	"#383838","#5f6466","#5f6466","#5f6466","#5f6466","#5f6466","#5f6466","#5f6466","#5f6466","#5f6466","#383838","#5f6466","#5f6466","#5f6466","#5f6466","#383838",
	"#383838","#5f6466","#383838","#240b20","#240b20","#240b20","#240b20","#240b20","#383838","#5f6466","#383838","#5f6466","#84848c","#84848c","#5f6466","#383838",
	"#383838","#5f6466","#383838","#240b20","#240b20","#240b20","#d0d0d0","#240b20","#383838","#5f6466","#383838","#5f6466","#40863f","#435dc9","#5f6466","#383838",
	"#383838","#5f6466","#32324c","#240b20","#240b20","#240b20","#240b20","#240b20","#32324c","#5f6466","#383838","#5f6466","#435dc9","#45889b","#5f6466","#383838",
	"#383838","#5f6466","#32324c","#383838","#383838","#383838","#383838","#383838","#32324c","#5f6466","#383838","#5f6466","#45889b","#2d6421","#5f6466","#383838",
	"#383838","#5f6466","#32324c","#32324c","#32324c","#32324c","#32324c","#32324c","#32324c","#5f6466","#383838","#5f6466","#383838","#383838","#5f6466","#383838",
	"#383838","#5f6466","#5f6466","#5f6466","#5f6466","#5f6466","#5f6466","#5f6466","#5f6466","#5f6466","#383838","#5f6466","#5f6466","#5f6466","#5f6466","#383838",
	"#1a232f","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#383838","#1a232f",
	"#32445a","#1a232f","#1a232f","#1a232f","#1a232f","#1a232f","#1a232f","#1a232f","#1a232f","#1a232f","#1a232f","#1a232f","#1a232f","#1a232f","#1a232f","#1a232f"
];
var textbook_1 = [
	"#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#371839","#371839","#371839","#371839","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#31344a","#371839","#72d4cb","#a1ede4","#c4f5f0","#371839","#371839","#371839","#371839","#371839","#31344a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#371839","#a1ede4","#9687cf","#6eadcc","#371839","#c53345","#fcf9f2","#c53345","#fcf9f2","#c53345","#371839","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#371839","#a1ede4","#6eadcc","#371839","#fcf9f2","#371839","#371839","#371839","#371839","#371839","#31344a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#371839","#a1ede4","#6eadcc","#371839","#c53345","#371839","#c4f5f0","#371839","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#371839","#a1ede4","#6eadcc","#371839","#c53345","#371839","#c4f5f0","#371839","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#371839","#72d4cb","#a1ede4","#a1ede4","#c4f5f0","#c4f5f0","#72d4cb","#371839","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#371839","#a1ede4","#72d4cb","#72d4cb","#72d4cb","#72d4cb","#a1ede4","#371839","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#371839","#a1ede4","#a1ede4","#a1ede4","#a1ede4","#a1ede4","#a1ede4","#371839","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#371839","#a1ede4","#6eadcc","#a1ede4","#a1ede4","#6eadcc","#a1ede4","#371839","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#371839","#a1ede4","#72d4cb","#a1ede4","#a1ede4","#72d4cb","#a1ede4","#371839","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#371839","#e1ae78","#6eadcc","#e9c19b","#e9c19b","#6eadcc","#e1ae78","#371839","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#31344a","#371839","#e9c19b","#e9c19b","#e9c19b","#e9c19b","#371839","#31344a","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#32445a","#371839","#e1ae78","#e9c19b","#e9c19b","#e1ae78","#371839","#32445a","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#32445a","#31344a","#371839","#371839","#371839","#371839","#31344a","#32445a","#32445a","#32445a","#32445a","#32445a"
];
var textbook_2 = [
	"#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#000000","#000000","#000000","#000000","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#32445a","#000000","#c87236","#c87236","#c87236","#c87236","#000000","#32445a","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#000000","#c87236","#c87236","#c87236","#c87236","#c87236","#c87236","#000000","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#000000","#e7e7e7","#784321","#c87236","#c87236","#c87236","#c87236","#784321","#cdc9ca","#000000","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#000000","#e7e7e7","#e7e7e7","#784321","#784321","#784321","#784321","#cdc9ca","#cdc9ca","#000000","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#000000","#e7e7e7","#e7e7e7","#e7e7e7","#e7e7e7","#cdc9ca","#cdc9ca","#000000","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#000000","#e7e7e7","#e7e7e7","#000000","#000000","#000000","#000000","#000000","#cdc9ca","#000000","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#000000","#e7e7e7","#e7e7e7","#000000","#ff0055","#ff0055","#ff0055","#ff0055","#ff0055","#000000","#cdc9ca","#000000","#32445a","#32445a",
	"#32445a","#32445a","#000000","#e7e7e7","#e7e7e7","#fffffd","#fffffd","#ff0055","#ff0055","#ff0055","#ff76a4","#ff0055","#cdc9ca","#000000","#32445a","#32445a",
	"#32445a","#32445a","#000000","#e7e7e7","#000000","#fffffd","#ff0055","#ff0055","#ff0055","#ff76a4","#ff76a4","#ff0055","#cdc9ca","#000000","#32445a","#32445a",
	"#32445a","#32445a","#000000","#e7e7e7","#000000","#fffffd","#ff0055","#ff0055","#ff76a4","#ff76a4","#ff76a4","#ff0055","#cdc9ca","#000000","#32445a","#32445a",
	"#32445a","#32445a","#000000","#e7e7e7","#000000","#fffffd","#ff0055","#ff0055","#ff0055","#ff0055","#ff76a4","#ff0055","#cdc9ca","#000000","#32445a","#32445a",
	"#32445a","#32445a","#000000","#e7e7e7","#000000","#ff0055","#ff0055","#ff0055","#ff0055","#ff0055","#ff0055","#ff0055","#cdc9ca","#000000","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#000000","#e7e7e7","#e7e7e7","#ff0055","#ff0055","#ff0055","#ff0055","#e7e7e7","#cdc9ca","#000000","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#000000","#000000","#e7e7e7","#e7e7e7","#e7e7e7","#e7e7e7","#000000","#000000","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#32445a","#32445a","#000000","#000000","#000000","#000000","#32445a","#32445a","#32445a","#32445a","#32445a","#32445a"
];
var textbook_3 = [
	"#32445a","#32445a","#32445a","#32445a","#32445a","#7a0013","#7a0013","#7a0013","#7a0013","#7a0013","#7a0013","#32445a","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#32445a","#7a0013","#fa2332","#fa2332","#fff4c0","#fa2332","#fa2332","#fa2332","#7a0013","#32445a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#32445a","#7a0013","#fa2332","#fa2332","#fa2332","#fa2332","#fa2332","#fa2332","#fff4c0","#fa2332","#7a0013","#512807","#32445a","#32445a",
	"#32445a","#32445a","#693127","#7a0013","#fa2332","#fff4c0","#fa2332","#fa2332","#fa2332","#fa2332","#fa2332","#fa2332","#7a0013","#cd7100","#693127","#32445a",
	"#32445a","#693127","#cd7100","#7a0013","#bc0a2c","#fa2332","#fa2332","#fa2332","#fa2332","#fff4c0","#fa2332","#bc0a2c","#7a0013","#894023","#cd7100","#693127",
	"#32445a","#693127","#cd7100","#693127","#7a0013","#bc0a2c","#bc0a2c","#bc0a2c","#bc0a2c","#bc0a2c","#bc0a2c","#7a0013","#693127","#693127","#cd7100","#693127",
	"#32445a","#693127","#cd7100","#693127","#512807","#7a0013","#7a0013","#7a0013","#7a0013","#7a0013","#7a0013","#512807","#512807","#693127","#cd7100","#693127",
	"#32445a","#693127","#cd7100","#aa5625","#512807","#512807","#9d5549","#eab093","#eab093","#9d5549","#512807","#512807","#512807","#aa5625","#cd7100","#693127",
	"#32445a","#32445a","#693127","#cd7100","#aa5625","#512807","#9d5549","#eab093","#eab093","#9d5549","#512807","#512807","#aa5625","#cd7100","#693127","#32445a",
	"#32445a","#32445a","#512807","#aa5625","#cd7100","#cd7100","#cd7100","#cd7100","#cd7100","#cd7100","#cd7100","#cd7100","#cd7100","#aa5625","#512807","#32445a",
	"#32445a","#32445a","#31344a","#512807","#894023","#aa5625","#aa5625","#aa5625","#aa5625","#aa5625","#aa5625","#aa5625","#894023","#512807","#32445a","#32445a",
	"#32445a","#31344a","#31344a","#512807","#693127","#693127","#693127","#693127","#693127","#693127","#693127","#693127","#693127","#512807","#32445a","#32445a",
	"#32445a","#31344a","#31344a","#323430","#512807","#894023","#894023","#894023","#894023","#894023","#894023","#894023","#512807","#31344a","#32445a","#32445a",
	"#32445a","#31344a","#31344a","#323430","#512807","#693127","#aa5625","#aa5625","#aa5625","#aa5625","#894023","#693127","#512807","#32445a","#32445a","#32445a",
	"#32445a","#31344a","#31344a","#31344a","#323430","#512807","#512807","#512807","#512807","#512807","#512807","#512807","#31344a","#32445a","#32445a","#32445a",
	"#32445a","#32445a","#31344a","#31344a","#31344a","#31344a","#31344a","#31344a","#31344a","#31344a","#31344a","#32445a","#32445a","#32445a","#32445a","#32445a"
];

for (var i = 0; i < Btn_Arr.length; i++) {
	Btn_Arr[i].index = i;
	Btn_Arr[i].style.background = "url(imges/" + Btn_bj +".png)";
	Btn_Arr[i].style.backgroundPosition = i*Btn_Num + "px" + " " + Btn_Num*4 + "px";
}
function function_color_Arr() {
	for (var i = 0; i < canvas_Width*canvas_Height; i++) {
		color_Arr.push(is_bj)
	}
}

// choice_name.style.background = "url(imges/" + choice_bj +".png)";
// choice_name.style.backgroundPosition = Btn_Num*0 + "px" + " " + Btn_Num*4 + "px";
canvas.style.width = document.body.offsetWidth - 108 + "px";
canvas.style.height = document.body.offsetHeight - 124 + "px";
Btn_Arr[0].style.backgroundPosition = 0*Btn_Num + "px" + " " + Btn_Num*2 + "px";
// console.log(document.body.offsetWidth - 88);
Btn.onmouseover = function(e){//鼠标移入
	if (e.target.index != undefined) {
		Btn_Temp = e.target.style.backgroundPosition;
		e.target.style.backgroundPosition = e.target.index*Btn_Num + "px" + " " + Btn_Num*1 + "px";
	}
}
Btn.onmouseout = function(e){//鼠标移出
	if (e.target.index != undefined) {
		e.target.style.backgroundPosition = Btn_Temp;
	}
}
Btn.addEventListener("click",function(e){
	if (e.target.index != undefined) {
		for (var i = 0; i < Btn_Arr.length; i++) {
			Btn_Arr[i].style.backgroundPosition = i*Btn_Num + "px" + " " + Btn_Num*4 + "px";
		}
		var state_Arr = ["pen","rubber","move","magnifier","line","straw","region",];
		e.target.style.backgroundPosition = e.target.index*Btn_Num + "px" + " " + Btn_Num*1 + "px";
		Btn_Temp = e.target.style.backgroundPosition;
		Btn_state = state_Arr[e.target.index];
		document.documentElement.style.cursor="url(imges/" + state_Arr[e.target.index] + ".ico),auto"
		console.log(Btn_state);
	}
})
function function_Palette() {
	for(var i = 0; i < color_temp.length; i++) {
		var div = document.createElement("div");
		div.style.background = color_temp[i];
		div.index = i;
		if (color_temp.length*120/2 < Palette.offsetHeight) {
			div.style.width = "60px"
			div.style.height = "60px"
		}else if (color_temp.length*60/4 < Palette.offsetHeight){
			div.style.width = "60px"
			div.style.height = "60px"
		}else if (color_temp.length*30/8 < Palette.offsetHeight){
			div.style.width = "30px"
			div.style.height = "30px"
		}
		var Img = document.createElement("img");
		Img.src = "imges/Palette-bj.png";
		div.appendChild(Img).className = "Palette-img";;
		Palette.appendChild(div).className = "Palette-div";
	}
	Palette.getElementsByClassName("Palette-img")[0].src = "imges/Palette-border.png";
}

Palette.addEventListener("click",function(e){
	if (e.target.index != undefined) {
		is_Color = color_temp[e.target.index]
		for(var i = 0; i < color_temp.length; i++) {
			if (i == e.target.index) {
				Palette.getElementsByClassName("Palette-img")[i].src = "imges/Palette-border.png";
			}else{
				Palette.getElementsByClassName("Palette-img")[i].src = "imges/Palette-bj.png";
			}
		}
		console.log(is_Color);
	}
})

canvas_body.addEventListener("click",function(e){
	if (e.target.index != undefined) {
		var e = e.target.index;
		console.log(e);
		switch (Btn_state){
		case "pen":
		canvas_Arr[e].style.background = is_Color;
		color_Arr.splice(e,1,is_Color)
		break;
		case "rubber":
		canvas_Arr[e].style.background = is_bj;
		color_Arr.splice(e,1,is_bj)
		break;
		case "straw":
		is_Color = color_Arr[e];
		for(var i = 0; i < color_temp.length; i++) {
			if (i == color_temp.indexOf(is_Color)) {
				Palette.getElementsByClassName("Palette-img")[i].src = "imges/Palette-border.png";
			}else{
				Palette.getElementsByClassName("Palette-img")[i].src = "imges/Palette-bj.png";
			}
		}
		break;
		
		}
	}
})
window.onload = function() { 
	
}
var canvas_X;
var canvas_Y;
var canvas_T;
var canvas_L;
var is_canvas = false;
var is_line = false;
var is_region = false;
var is_pen = false;
var is_rubber = false;
var is_magnifier = false;
var line_X;
var line_Y;
var region_X1;
var region_Y1;
var region_X2;
var region_Y2;
var line;
var font_size = 48;
canvas_Num.onmousedown = function(e) {
	switch (Btn_state){
		case "magnifier":
		is_magnifier = true;
		magnifier_X = e.clientX;
		break;
		case "rubber":
		is_rubber = true;
		break;
		case "pen":
		is_pen = true;
		break;
		case "region":
		region_X1 = parseInt(e.target.index%canvas_Width);
		region_Y1 = parseInt(e.target.index/canvas_Width);
		is_region = true;
		console.log(region_X1 + "," + region_Y1);
		break;
		case "line":
		line_X = parseInt(e.target.index/canvas_Width);
		line_Y = parseInt(e.target.index%canvas_Width);
		line = e.target.index;
		is_line = true;
		break;
		case "move":
		is_Color = color_Arr[e];
		// //获取坐标
		canvas_X = e.clientX;
		canvas_Y = e.clientY;
		// //获取偏移量
		canvas_T = canvas_Num.offsetTop;
		canvas_L = canvas_Num.offsetLeft;
		is_canvas = true;
		for (var i = 0; i < canvas_Arr.length; i++) {
			canvas_Arr[i].style.pointerEvents = "none";
		}
		break;
		
		}
}
window.onmousemove = function(e) {
	if (is_magnifier == true) {
		canvas_X = e.clientX;
		var canvas_body_W = parseInt(canvas_body.offsetWidth/canvas_Width);
		console.log(canvas_body_W);
		if (canvas_X > magnifier_X) {
			if (canvas_X - magnifier_X > 10) {
				magnifier_X = magnifier_X + 10;
				// if (font_size < canvas_body_W) {
					font_size++;
				// }
				document.body.style.fontSize = font_size + "px";
			}
		}else if (canvas_X < magnifier_X) {
			if (magnifier_X - canvas_X > 10) {
				magnifier_X = magnifier_X - 10;
				if (font_size > 1) {
					font_size--;
				}
				
				document.body.style.fontSize = font_size + "px";
			}
		}
	}
	if (is_rubber == true && e.target.className == "canvas-div") {
		e.target.style.background = is_bj;
		color_Arr.splice(e.target.index,1,is_bj)
	}
	if (is_pen == true && e.target.className == "canvas-div") {
		e.target.style.background = is_Color;
		console.log(e.target.index);
		// console.log(e.target);
		color_Arr.splice(e.target.index,1,is_Color)
	}
	if (is_line == true && e.target.className == "canvas-div") {
		if (e.target.index == line - 1 || e.target.index == line + 1) {
			for (var i = 0; i < canvas_Arr.length; i++) {
				if (i < line_X*canvas_Width + canvas_Width && i > line_X*canvas_Width) {
					console.log(line_X*canvas_Width + (canvas_Width-1));
					canvas_Arr[i].style.pointerEvents = "auto";
				}else{
					canvas_Arr[i].style.pointerEvents = "none";

				}
				
			}
		}else if (e.target.index == line - canvas_Width || e.target.index == line + canvas_Width) {
			for (var i = 0; i < canvas_Arr.length; i++) {
				canvas_Arr[i].style.pointerEvents = "none";
			}
			for (var i = 0; i < canvas_Width; i++) {
				canvas_Arr[i*canvas_Width+line_Y].style.pointerEvents = "auto";
			}
		}
		if (e.target.index != undefined) {
			e.target.style.background = is_Color;
			color_Arr.splice(e.target.index,1,is_Color)
		}
	}
	if (is_canvas == true) {
		var nx = e.clientX;
		var ny = e.clientY;
		//计算移动后的左偏移量和顶部的偏移量
		var nl = nx - canvas_X + canvas_L;
		var nt = ny - canvas_Y + canvas_T;
		canvas_Num.style.left = nl + "px";
		canvas_Num.style.top = nt + "px";
		textbook_Num.style.left = nl + "px";
		textbook_Num.style.top = nt + "px";
	}
	if (is_region == true) {
		region_X2 = parseInt(e.target.index%canvas_Width);
		region_Y2 = parseInt(e.target.index/canvas_Width);
		// is_region = false;
		// console.log(region_X2 + "," + region_Y2);
		for (var i = 0; i < color_Arr.length; i++) {
			canvas_Arr[i].style.background = color_Arr[i];
		}
		if (region_X1 < region_X2) {
			var XX1 = region_X1;
			var XX2 = region_X2;
			var ZZ1 = region_X1;
		}else if (region_X1 > region_X2) {
			var XX1 = region_X2;
			var XX2 = region_X1;
			var ZZ1 = region_X2;
		}
		if (region_Y1 < region_Y2) {
			var YY1 = region_Y1;
			var YY2 = region_Y2;
			var ZZ2 = region_Y1;
		}else if (region_Y1 > region_Y2) {
			var YY1 = region_Y2;
			var YY2 = region_Y1;
			var ZZ2 = region_Y2;
		}
		for (var i = 0; i < Math.abs(XX1 - XX2) + 1; i++) {
			for (var x = 0; x < Math.abs(YY1 - YY2) + 1; x++) {
				canvas_Arr[(ZZ1+i)+(x+ZZ2)*canvas_Width].style.background = is_Color;
			}
		}
		
		for (var i = 0; i < canvas_Arr.length; i++) {
			canvas_Arr[i].style.pointerEvents = "auto";
		}
	}
}

window.onmouseup = function(e) {

	if (is_region == true) {
		
		console.log(region_X1 + "," + region_Y1 + "," + region_X2 + "," + region_Y2);
		if (region_X1 < region_X2) {
			var XX1 = region_X1;
			var XX2 = region_X2;
			var ZZ1 = region_X1;
		}else if (region_X1 > region_X2) {
			var XX1 = region_X2;
			var XX2 = region_X1;
			var ZZ1 = region_X2;
		}
		if (region_Y1 < region_Y2) {
			var YY1 = region_Y1;
			var YY2 = region_Y2;
			var ZZ2 = region_Y1;
		}else if (region_Y1 > region_Y2) {
			var YY1 = region_Y2;
			var YY2 = region_Y1;
			var ZZ2 = region_Y2;
		}
		for (var i = 0; i < Math.abs(XX1 - XX2) + 1; i++) {
			for (var x = 0; x < Math.abs(YY1 - YY2) + 1; x++) {
				color_Arr.splice((ZZ1+i)+(x+ZZ2)*canvas_Width,1,is_Color)
				// console.log(canvas_Arr[(ZZ1+i)+(x+ZZ2)*canvas_Width])
			}
		}
		console.log(canvas_Arr)
		for (var i = 0; i < color_Arr.length; i++) {
			canvas_Arr[i].style.background = color_Arr[i];
		}
		console.log(color_Arr.length)
	}
	for (var i = 0; i < canvas_Arr.length; i++) {
		canvas_Arr[i].style.pointerEvents = "auto";
	}
	is_line = false;
	is_canvas = false;
	is_pen = false;
	is_region = false;
	is_rubber = false;
	is_magnifier = false;
}
function Grid() {
	if (Grid_state == true) {
		Grid_state = false
		var img = "imges/1.png"
	}else if (Grid_state == false) {
		Grid_state = true
		var img = "imges/0.png"
	}
	for (var i = 0; i < canvas_Arr.length; i++) {
		if (canvas_state == "create") {
			canvas_Arr[i].firstChild.src = img;
		}else{
			canvas_Arr[i].firstChild.src = img;
			course_Arr[i].firstChild.src = img;
		}	
	}
}
function create() {
	canvas_state = "create";
	console.log(canvas_Height*font_size)
	document.getElementById("pattern").style.display = "none";
	document.getElementById("scale").style.display = "block";
	color_temp = color_64;
	function_Palette();

}
function practice() {
	canvas_state = "practice";
	document.getElementById("pattern").style.display = "none";
	// document.getElementById("choice").style.display = "none";
	document.getElementById("course").style.display = "flex";
	textbook.style.display = "flex";
	
}
function scale_16() {
	canvas_Width = 16;
	canvas_Height = 16;
	establish()
	function_color_Arr()
	document.getElementById("choice").style.display = "none";
}
function scale_32() {
	canvas_Width = 32;
	canvas_Height = 32;
	establish()
	function_color_Arr()
	document.getElementById("choice").style.display = "none";
}
function scale_64() {
	canvas_Width = 64;
	canvas_Height = 64;
	establish()
	function_color_Arr()
	document.getElementById("choice").style.display = "none";
}



function establish() {
	if (canvas_state == "create") {
		console.log(canvas_state)
		box_canvas.style.width = canvas.offsetWidth - 164 + "px";
		var div = document.createElement("div");
		canvas_Num.style.width = canvas_Width + "em";
		canvas_Num.style.height = canvas_Height + "em";
		for(var i = 0; i < canvas_Width*canvas_Height; i++) {
			var div = document.createElement("div");
			div.index = i;
			div.style.background = is_bj;
			var Img = document.createElement("img");
			Img.src = "imges/0.png";
			div.appendChild(Img);
			canvas_Num.appendChild(div).className = "canvas-div";
		}
		for(var i = 0; i < 64; i++) {
			if (canvas_Height*font_size > canvas_body.offsetHeight) {
				font_size--
				// console.log(canvas_Height*font_size)
			}
		}
		document.body.style.fontSize = font_size + "px";
		canvas_Num.style.left = (canvas_body.offsetWidth - canvas_Num.offsetWidth)/2 + "px";
		canvas_Num.style.top = (canvas_body.offsetHeight - canvas_Num.offsetHeight)/2 + "px";
	}else if (canvas_state == "practice") {
		box_canvas.style.width = (canvas.offsetWidth - 164)/2 + "px";
		textbook.style.width = (canvas.offsetWidth - 164)/2 + "px";
		var div = document.createElement("div");
		canvas_Num.style.width = canvas_Width + "em";
		canvas_Num.style.height = canvas_Height + "em";
		for(var i = 0; i < canvas_Width*canvas_Height; i++) {
			var div = document.createElement("div");
			div.index = i;
			div.style.background = is_bj;
			var Img = document.createElement("img");
			Img.src = "imges/0.png";
			div.appendChild(Img);
			canvas_Num.appendChild(div).className = "canvas-div";
		}
		for(var i = 0; i < canvas_Width*canvas_Height; i++) {
			var div = document.createElement("div");
			div.index = i;
			div.style.background = textbook_temp[i];
			var Img = document.createElement("img");
			Img.src = "imges/0.png";
			div.appendChild(Img);
			textbook_Num.appendChild(div).className = "canvas-div";
		}
		for(var i = 0; i < 64; i++) {
			if (canvas_Height*font_size > canvas_body.offsetHeight || canvas_Width*font_size > canvas_body.offsetWidth) {
				font_size--
				document.body.style.fontSize = font_size + "px";
			}
		}
		canvas_Num.style.left = (canvas_body.offsetWidth - canvas_Num.offsetWidth)/2 + "px";
		canvas_Num.style.top = (canvas_body.offsetHeight - canvas_Num.offsetHeight)/2 + "px";
		textbook_Num.style.left = (canvas_body.offsetWidth - canvas_Num.offsetWidth)/2 + "px";
		textbook_Num.style.top = (canvas_body.offsetHeight - canvas_Num.offsetHeight)/2 + "px";
		textbook_Num.style.width = canvas_Width + "em";
		textbook_Num.style.height = canvas_Height + "em";
	}
	canvas_Arr = canvas_body.getElementsByClassName("canvas-div");
	course_Arr = textbook_Num.getElementsByClassName("canvas-div");
	// console.log(course_Arr);
}
var course = document.getElementById("course");
var course_Arr = course.getElementsByClassName("course-img");
for (var i = 0; i < course_Arr.length; i++) {
	course_Arr[i].index = i;
}
course.addEventListener("click",function(e){
	var course_color = [Palette_0,Palette_1,Palette_2,Palette_3]
	var textbook_Arr = [textbook_0,textbook_1,textbook_2,textbook_3]
	var course_X = [16]
	var course_Y = [16]
	if (e.target.index != undefined) {
		color_temp = course_color[e.target.index];
		textbook_temp = textbook_Arr[e.target.index];
		function_Palette();
		establish();
		function_color_Arr();
	}
	document.getElementById("choice").style.display = "none";
})




var canvas_Num = document.getElementById("canvas-Num");
var linshi = document.getElementById("linshi");
var shuchu = document.getElementById("shuchu");
var SSSSS = document.getElementById("SSSSS");
var X = document.getElementById("X");
var del = document.getElementById("del");
var down = document.getElementById("down");
var shuchu_btn = document.getElementById("shuchu-btn");
function Save() {

	font_size = parseInt(box_canvas.offsetHeight*0.9/canvas_Height);
	console.log(document.body.clientWidth);
	SSSSS.style.width = font_size*canvas_Height + 100 + "px";
	SSSSS.style.height = font_size*canvas_Height + 100 + "px";
	SSSSS.style.marginLeft = (document.body.clientWidth - (font_size*canvas_Height + 100))/2 + "px";
	shuchu_btn.style.left = (document.body.clientWidth - (font_size*canvas_Height + 100))/2 + font_size*canvas_Height + 100 + "px"
	document.body.style.fontSize = font_size + "px";
	shuchu.style.display = "block";
	huanchong()
}

function huanchong(){//将Frame生成图片
	html2canvas(canvas_Num).then(function(canvas) {
    linshi.appendChild(canvas);
    var oCavans = document.getElementsByTagName("canvas")[0];
    oCavans.style.marginTop = (linshi.offsetWidth - oCavans.offsetWidth)/2 + "px";
    var strDataURI1 = oCavans.toDataURL();

    downLoadFn(strDataURI1);
	});
};
 //判断浏览器类型
function myBrowser() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isdivera = userAgent.indexOf("divera") > -1;
	if(isdivera) {
    	return "divera"
	}; //判断是否divera浏览器
	if(userAgent.indexOf("Firefox") > -1) {
    	return "FF";
	} //判断是否Firefox浏览器
	if(userAgent.indexOf("Chrome") > -1) {
    	return "Chrome";
	}
	if(userAgent.indexOf("Safari") > -1) {
    	return "Safari";
	} //判断是否Safari浏览器
	if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isdivera) {
    	return "IE";
	}; //判断是否IE浏览器
	if(userAgent.indexOf("Trident") > -1) {
   	 return "Edge";
	} //判断是否Edge浏览器
}
myBrowser();
//IE浏览器图片保存本地
function SaveAs5(imgURL) {
    var divdiv = window.diven(imgURL, "", "width=1, height=1, top=5000, left=5000");
    for(; divdiv.document.readyState != "complete";) {
        if(divdiv.document.readyState == "complete") break;
    }
    divdiv.document.execCommand("SaveAs");
    divdiv.close();
}
function download(strDataURI1) {
    var link = document.getElementById("IsA");
    // link.innerHTML = "download_canvas_image";
    link.download = "画板";
    link.addEventListener("click", function(ev) {
    link.href = strDataURI1;
    }, false);
    // document.body.appendChild(link);
};
function downLoadFn(url) {
    if(myBrowser() === "IE" || myBrowser() === "Edge") {
        SaveAs5(url);
    } else {
        download(url);
    }
}

function fun_X() {
	linshi.innerHTML = "";
	shuchu.style.display = "none";
}

function fun_del() {
	linshi.innerHTML = "";
	shuchu.style.display = "none";
	for (var i = 0; i < color_Arr.length; i++) {
		canvas_Arr[i].style.background = is_bj;
		color_Arr.splice(i,1,is_bj)
	}
}
function fun_down() {
	linshi.innerHTML = "";
	shuchu.style.display = "none";
}























// function Save() {
// 	var NUM = 16;
// 	var linshi_0 = [];
// 	var linshi_1 = [];
// 	var linshi_2 = [];
// 	var linshi_3 = [];
// 	var linshi_4 = [];
// 	var linshi_5 = [];
// 	var linshi_6 = [];
// 	var linshi_7 = [];
// 	var linshi_8 = [];
// 	var linshi_9 = [];
// 	var linshi_10 = [];
// 	var linshi_11 = [];
// 	var linshi_12 = [];
// 	var linshi_13 = [];
// 	var linshi_14 = [];
// 	var linshi_15 = [];
// 	for (var i = 0; i < color_Arr.length; i++) {
// 		if (i < NUM) {
// 			linshi_0.push(color_Arr[i])
// 		}else if (i >= NUM*1 && i < NUM*2) {
// 			linshi_1.push(color_Arr[i])
// 		}else if (i >= NUM*2 && i < NUM*3) {
// 			linshi_2.push(color_Arr[i])
// 		}else if (i >= NUM*3 && i < NUM*4) {
// 			linshi_3.push(color_Arr[i])
// 		}else if (i >= NUM*4 && i < NUM*5) {
// 			linshi_4.push(color_Arr[i])
// 		}else if (i >= NUM*5 && i < NUM*6) {
// 			linshi_5.push(color_Arr[i])
// 		}else if (i >= NUM*6 && i < NUM*7) {
// 			linshi_6.push(color_Arr[i])
// 		}else if (i >= NUM*7 && i < NUM*8) {
// 			linshi_7.push(color_Arr[i])
// 		}else if (i >= NUM*8 && i < NUM*9) {
// 			linshi_8.push(color_Arr[i])
// 		}else if (i >= NUM*9 && i < NUM*10) {
// 			linshi_9.push(color_Arr[i])
// 		}else if (i >= NUM*10 && i < NUM*11) {
// 			linshi_10.push(color_Arr[i])
// 		}else if (i >= NUM*11 && i < NUM*12) {
// 			linshi_11.push(color_Arr[i])
// 		}else if (i >= NUM*12 && i < NUM*13) {
// 			linshi_12.push(color_Arr[i])
// 		}else if (i >= NUM*13 && i < NUM*14) {
// 			linshi_13.push(color_Arr[i])
// 		}else if (i >= NUM*14 && i < NUM*15) {
// 			linshi_14.push(color_Arr[i])
// 		}else if (i >= NUM*15 && i < NUM*16) {
// 			linshi_15.push(color_Arr[i])
// 		}
// 	}
// 	console.log(linshi_0);
// 	console.log(linshi_1);
// 	console.log(linshi_2);
// 	console.log(linshi_3);
// 	console.log(linshi_4);
// 	console.log(linshi_5);
// 	console.log(linshi_6);
// 	console.log(linshi_7);
// 	console.log(linshi_8);
// 	console.log(linshi_9);
// 	console.log(linshi_10);
// 	console.log(linshi_11);
// 	console.log(linshi_12);
// 	console.log(linshi_13);
// 	console.log(linshi_14);
// 	console.log(linshi_15);
// }






