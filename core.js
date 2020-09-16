// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   core.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: fde-capu <fde-capu@student.42sp.org.br>    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/09/15 17:20:33 by fde-capu          #+#    #+#             //
//   Updated: 2020/09/16 11:59:43 by fde-capu         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var		efx;
var		debug = true;
var		g_ev;
var		wait;
var		waithelper;

window.onload = function()
{
	pers_core_init();
}

function	pers_core_init()
{
	makeAreas();
	pclear();
	make_planet(planet_name);
	make_score("Year", 0);
	make_score("Month", 0);
	make_score("Population", 0);
	make_score("Money", 0);
	make_gauge("Habitability", 0); 
	make_gauge("Happiness", 0);
	loop();
}

waithelper = setInterval(function()
{
	if (wait) return false;
	wait = 1;
	loop(); 
}, 100);

function	loop()
{
	set_score("Year", planet.year);
	set_score("Month", planet.month);
	set_score("Population", planet.population);
	set_score("Money", planet.money);
	set_gauge("Habitability", planet.habitability); 
	set_gauge("Happiness", planet.happiness);
	show_events()
}

function	empty_month()
{
	print("");
	print("Nothing happened for a month.");
	make_button(0, {caption:"Continue."});
}

function	show_events()
{
	e = 0;
	i = 0;
	while (events[i])
	{
		if (ok_condition(events[i]))
		{
			e = events[i];
			print("");
			print(e.title);
			print(e.description);
			e.options.forEach(function(o){
				make_button(e, o);
			});
		}
		i++;
	}
	if (!e)
		empty_month();
	wait = 1;
}

function	all_condition(c)
{
	if (
		(c[0] > 0 && planet.population < c[0])
	 || (c[0] < 0 && planet.population > abs(c[0]))
	 || (c[1] > 0 && planet.money < c[1])
	 || (c[1] < 0 && planet.money > abs(c[1]))
	 || (c[2] > 0 && planet.habitability < c[2])
	 || (c[2] < 0 && planet.habitability > abs(c[2]))
	 || (c[3] > 0 && planet.happiness < c[3])
	 || (c[3] < 0 && planet.happiness > abs(c[3]))
	)
		return 0;
	return 1;
}

function	ok_condition(e)
{
	if (!isdef(e.count))
		e.count = 0;
	e.count++;
	if (e.count && e.count < e.timer)
		return 0;
	if (!all_condition(e.condition))
		return 0;
	e.count = 0;
	return 1;
}

function	make_planet(name)
{
	planet.name = name;
	makePArea();
}

function	next_month()
{
	planet.month++;
	if (planet.month == 13)
	{
		planet.month = 1;
		planet.year++;
	}
}

function	execbtn(bt)
{
	if (bt.effect)
	{
		g_ev = bt;
		calc_event();
		destroy_buttons(bt.parent_event);
	}
	else
	{
		bt.outerHTML = "";
		pclear();
	}
	next_month();
	wait = 0;
}

function	calc_event()
{
	planet.population += g_ev.effect[0];
	planet.money += g_ev.effect[1];
	planet.habitability += g_ev.effect[2];
	planet.happiness += g_ev.effect[3];
	planet.population = planet.population.limits(0, "none");
	planet.money = planet.money.limits(0, "none");
	planet.habitability = planet.habitability.limits(0, 1);
	planet.happiness = planet.happiness.limits(0, 1);
	print("");
	print(g_ev.success);
}