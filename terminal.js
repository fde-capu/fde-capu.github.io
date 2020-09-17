// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   terminal.js                                        :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: fde-capu <fde-capu@student.42sp.org.br>    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/09/15 22:24:59 by fde-capu          #+#    #+#             //
//   Updated: 2020/09/16 21:27:20 by fde-capu         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var	g_btn = 0;
var gauge = [];
var	score = [];
var	value = [];
var marker = [];
var textArea;
var buttonArea;
var gaugeArea;

function	makeAreas()
{
	gaugeArea = document.createElement("div");
	gaugeArea.className = "areas";
	document.body.appendChild(gaugeArea);
	
	textArea = document.createElement("div");
	textArea.className = "areas";
	document.body.appendChild(textArea);
	
	buttonArea = document.createElement("div");
	buttonArea.className = "areas";
	document.body.appendChild(buttonArea);
}

function	makePArea ()
{
	PArea = document.createElement("div");
	PArea.className = "playerarea";
	PArea.innerHTML = planet.name + "<br>";
	gaugeArea.appendChild(PArea);
}

function	print (str)
{
	if (textArea.innerHTML != "")
		textArea.innerHTML += "<br>";
	textArea.innerHTML += str;
}

function	scroll_bottom()
{
	textArea.scrollTop = textArea.scrollHeight;
}

function	pclear ()
{
	textArea.innerHTML = "";
}

function	bclear ()
{
	buttonArea.innerHTML = "";
}

function	make_score (caption, val)
{
	score = document.createElement("div");
	score.className = "score_box";
	score.style.setProperty("--content", "'" + caption + "'");
	score.id = caption;
	PArea.appendChild(score);
}

function	make_gauge(caption, val)
{
	gauge = document.createElement("div");
	gauge.className = "gauge";
	marker = document.createElement("div");
	marker.id = caption;
	marker.className = "marker";
	gauge.appendChild(marker);
	capt = document.createElement("div");
	capt.innerHTML = caption;
	capt.className = "caption";
	gauge.appendChild(capt);
	PArea.appendChild(gauge);
}

function	set_gauge(caption, val)
{
	if (caption == "Habitability")
		planet.habitability = val;
	if (caption == "Happiness")
		planet.happiness = val;
	document.getElementById(caption).style.width=
		parseFloat(window.getComputedStyle(document.getElementById(caption).parentElement).getPropertyValue("width")) * val + "px";
}

function	set_score(caption, val)
{
	if (caption == "Year")
		planet.year = val;
	if (caption == "Month")
		planet.month = val;
	if (caption == "Population")
		planet.population = val;
	if (caption == "Happiness")
		planet.happiness = val;
	document.getElementById(caption).innerHTML = val;
}

function	destroy_buttons(e)
{
	e.options.forEach(function(o){
		document.getElementById(o.caption).outerHTML = "";
	});
}

function	make_button(e, b) 
{
	is_hidden = 0;

	btn = document.createElement("div");
	btn.className = "button";
	caption = b.caption;
	if (caption.match(/.* \[HIDDEN\]$/))
	{
		caption = caption.substring(0, caption.length - 9);
		is_hidden = 1;
	}
	if (!isdef(b.effect))
		is_hidden = 1;
	btn.innerHTML = caption;
	btn.id = b.caption;
	btn.effect = b.effect;
	btn.success = b.success;
	btn.parent_event = e;
	btn.onmouseup = function()
	{
		execbtn(this);
	}
	if (!is_hidden)
	{
		btn.appendChild(show_pre_effect(b.effect));
	}
	buttonArea.appendChild(btn);
}

function	show_pre_effect(b)
{
	pre = document.createElement("div");
	pre.className = "pre_notice";
	pre.innerHTML = soft_effect_report(b);
	return pre;
}

function	soft_effect_report(c)
{
	a = [];
	a.push("[");
	if (c[0] == 0)
		a.push(" ");
	if (c[0] > 0)
		a.push("+");
	if (c[0] < 0)
		a.push("-");
	if (c[1] == 0)
		a.push(" ");
	if (c[1] > 0)
		a.push("+");
	if (c[1] < 0)
		a.push("-");
	if (c[0] == 0)
		a.push(" ");
	if (c[2] > 0)
		a.push("+");
	if (c[2] < 0)
		a.push("-");
	if (c[0] == 0)
		a.push(" ");
	if (c[3] > 0)
		a.push("+");
	if (c[3] < 0)
		a.push("-");
	a.push("]");
	return a.join("");
}
