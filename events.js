// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   events.js                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: fde-capu <fde-capu@student.42sp.org.br>    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/09/16 00:01:23 by fde-capu          #+#    #+#             //
//   Updated: 2020/09/17 15:19:06 by fde-capu         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var events = [
	{
		id:			1,
		title:			"A meteor is going to crash on Earth!",
		end_game:		0,
		description:		"Scientists have just noticed a huge fire ball coming directly towards a kittens nursery. It is a danger to the life of those kittens and to the life of the people who live next to it!",
		condition:		[0, 0, 0, 0],
		timer:			3,
		image:			"img/1.png",
		options:		[
		{
			caption:	"Nothing can be done... Poor kittens.",
			effect:		[-50000, -600000, -0.05, -0.1],
			success:	"They are gone... Those kittens... So cute... So dead.",
		}, {
			caption:	"We have to run for the rescue of those kittens! Save the staff too!",
			effect:		[-49990, -600000, -0.05, -0.05],
			success:	"All the kittens were saved, the staff too. Unfortunately the people around the nursery all died..."
		}, {
			caption:    	"Ask for the help of aliens, they might not respond. [HIDDEN]",
			effect:		[0, 0, 0, 0.1],
			success:	"OMG, aliens answered, they said: No kittens are dieing today. The asteroid is gone... It`s a M-I-R-A-C-L-E."
		}]
	}, {
		id:			2,
		title:			"Aliens have come with their plasma guns!",
		end_game:		0,
		description:		"Aliens have landed on top of the Eiffel Tower and have turned several Parisians into hostages. What will we do!?",
		condition:		[0, 0, 0, 0],
		timer:			4,
		image:			"img/2.png",
		options:		[
		{
			caption:	"Let those frenchies die!",
			effect:		[-200, -1000, 0.025, -0.05],
			success:	"Oh, no! The baguettes! Not the baguettes! Who will be next?"
		}, {
			caption:	"Shoot those alien bastards! No baguettes will be harmed on my watch!",
			effect:		[0, -1000, -0.005, 0.075],
			success:	"My croissant! The aliens have been deafeated! But the tower still needs repairs..."
		}, {
			caption:	"Let us negotiate with those aliens. Talking is always best. [HIDDEN]",
			effect:		[-10, 1000, 0.05, 0.025],
			success:	"We sold baguettes for Altarian Dollars. Our deal was a secret, no harm done."
		}]
	}, {
		id:			3,
		title:			"Aliens want to explode your planet!",
		end_game:		0,
		description:		"Aliens are threatening to explode our home! Oh no! Not our planet! What will we do now!?",
		condition:		[0, 0, 0, 0.6],
		timer:			4,
		image:			"img/3.png",
		options:		[
		{
			caption:	"Pray. [HIDDEN]",
			effect:		[0, 0, 0, 0.10],
			success:	"God answered your prayers. Or did he?"
		}, {
			caption:	"Call the SPACE MARINES! [HIDDEN]",
			effect:		[0, 0, 0, -0.1],
			success:	"We don't have space marines! Are you crazy!? We're GONNA DIEEE! ... Nothing happenned?"
		}, {
			caption:	"I dare them to do it! [HIDDEN]",
			effect:		[-1, 0, 0, -0.30],
			success:	"We told them to do it, they answered: 'LMAO, just kidding dude! It was a prank! LOL.' Every one is traumatized. And a dude died of a heart attack."
		}]
	}, {
		id:			4,
		title:			"Aliens have come in a peaceful mission!",
		end_game:		0,
		description:		"They arrived in big spaceships and want to talk. What should we do?",
		condition:		[0, -1000000, 0, 0],
		timer:			3,
		image:			"img/4.png",
		options:		[
		{
			caption:	"Shoot them! We shall not talk to any stupid aliens. [HIDDEN]",
			effect:		[-1000000, -200, -0.1, -0.05],
			success:	"A million people have died, we needed to make some repairs too, but the aliens are gone. No A-L-I-E-N shall ever step again in our lands!"
		}, {
			caption:	"Let's talk to them and exchange knowledge. [HIDDEN]",
			effect:		[100, 1000, 0.05, 0.05],
			success:	"We had amazing talks and exchanges with them. They even said they would come back soon for more. Also, they left some gifts."
		}, {
			caption:	"Let's trade! [HIDDEN]",
			effect:		[-1, 1000000, 0, -0.1],
			success:	"We said we wanted to trade. They said sure. They took a specimen and gave us 1 million altarian dollars for him... I liked Joe..."
		}]
	}, {
		id:			5,
		title:			"An earthquake!! Oh no!",
		end_game:		0,
		description:		"Raging quakes EVERYWHERE! Oh no! Master! What should we do?",
		condition:		[0, 0, -0.8, 0],
		timer:			2,
		image:			"img/5.png",
		options:		[
		{
			caption:	"RUN FOR THE HILLS!",
			effect:		[-10000, -5000, -0.005, -0.0725],
			success:	"A bunch of people died trampled in the mayhem of trying to get to the hills... At least the view is pretty."
		}, {
			caption:	"Follow fireman procedures!!",
			effect:		[-100, -4000, 0, -0.025],
			success:	"Fireman protocols are the best! Take that DHCP!"
		}, {
			caption:	"Oh no!! WE'RE GONNA DIEEEEE",
			effect:		[-500000, -10000, 0.05, -0.10],
			success:	"Many people have died... Hope you're happy."
		}]
	}, {
		id:			6,
		title:			"Atlantis re-emerged! Zeus? Are you here?",
		end_game:		0,
		description:		"By Atena! I thought it was a myth... I want a pegasus! Zeus came to talk to you. Aparently they're flying away from this planet in their island. Ask for a farewell gift!",
		condition:		[0, 0, -0.5, 0],
		timer:			4,
		image:			"img/6.png",
		options:		[
		{
			caption:	"I want a pegasus!",
			effect:		[0, 50000, 0, 0.10],
			success:	"The pegasus is beatiful everyone loved it. You are making a ton of money because everyone wants to see it."
		}, {
			caption:	"Hey... Zeus...",
			effect:		[10000, 0, 0.05, 0.025],
			success:	"That guy Zeus... Never changes."
		}, {
			caption:	"I want to rid earth from these mortals.",
			effect:		[-500000, 0, 0.15, -0.10],
			success:	"We're going to cleanse this planet! HAHAHAHAHA"
		}]
	}, {
		id:			7,
		title:			"A what? A ciclone with nails?",
		end_game:		0,
		description:		"Here we go again... Another ciclone with nails incoming, what should we do?",
		condition:		[0, 0, 0, 0],
		timer:			3,
		image:			"img/7.png",
		options:		[
		{
			caption:	"Hide inside your houses!",
			effect:		[-100, -50000, 0.025, -0.025],
			success:	"We did it! Few people died, mostly it is just a few more nails that need to be removed from our walls."
		}, {
			caption:	"Set the painels up! Let's make ciclone art! [HIDDEN]",
			effect:		[0, 450000, 0.025, 0.0725],
			success:	"It was a success! Ciclone art is beatiful... The nails made beautiful patterns in those panels. What a time to be alive... Let's make moneyz!"
		}, {
			caption:	"Tell people to go pray outside to the gods of wind so that the ciclone won't come again [HIDDEN]",
			effect:		[-500000, -30000, 0.10, -0.0725],
			success:	"OMG... They ACTUALLY went outside. Well, more oxygen for us I guess. Also the people protected the buildings, less damage. Win, win?"
		}]
	}, {
		id:			8,
		title:			"An earthquake happened and a TITAN came out of the cracks! He wants offerings.",
		end_game:		0,
		description:		"Titans are those giant thingys that kill people and create havoc and are gods or something, right?",
		condition:		[0, 0, 0, 0],
		timer:			4,
		image:			"img/8.png",
		options:		[
		{
			caption:	"Shoot it! [HIDDEN]",
			effect:		[-1000000000, -300000, 0.125, -0.20],
			success:	"A billion lives were lost... The planet breaths! Everyone else cries."
		}, {
			caption:	"Give Joe as an offering. [HIDDEN]",
			effect:		[-1, -1000, 0, -0.10],
			success:	"The titan got mad and made everyone unhappy with his psychic powers."
		}, {
			caption:	"Ask for volunteers to appease the titan. [HIDDEN]",
			effect:		[-5000, 100000, 0.005, -0.025],
			success:	"The titan gave you gold for the 5000 souls and went in his way."
		}]
	}, {
		id:			9,
		title:			"An opportunity to build a hospital has appeared. What should we do?",
		end_game:		0,
		description:		"Hospitals are the sacred temple of health.",
		condition:		[0, 0, -0.5, 0],
		timer:			3,
		image:			"img/9.png",
		options:		[
		{
			caption:	"Build a small clinic.",
			effect:		[0, -300, 0.005, 0.025],
			success:	"A small clinic was built. Small children now have a new place to take care of their flu."
		}, {
			caption:	"Build an actual hospital.",
			effect:		[0, -3000, 0.05, 0.05],
			success:	"A proper hospital was built. Now patients with cancer and other terrible diseases can be treated with dignity."
		}, {
			caption:	"No, no, no. We will build THE HOSPITAL. Let's make a hospital complex!",
			effect:		[0, -800000, 0.0725, 0.0725],
			success:	"A huuuuge hospital complex has been built. Hi-tech stuff. We can now make head transplants."
		}]
	}, {
		id:			10,
		title:			"An opportunity to build a school has appeared. What should we do?",
		end_game:		0,
		description:		"Schools are the sacred temple of knowledge.",
		condition:		[0, 0, -0.7, -0.7],
		timer:			3,
		image:			"img/10.png",
		options:		[
		{
			caption:	"Build a small school.",
			effect:		[0, -200, 0, 0.025],
			success:	"A small school was built. Small children now have a new place to be forced to do things that are good for them."
		}, {
			caption:	"Build an actual school.",
			effect:		[0, -2000, 0.025, 0.05],
			success:	"A proper school was built. Now we can teach math to more kids. They love it!"
		}, {
			caption:	"Stop kidding. Let's make a research center and fill it with scientists.",
			effect:		[0, -800000, 0.10, 0.05],
			success:	"Now scientists have a new playground to develop new tech to make the world better. Or to just take a shot at a nobel prize."
		}]
	}, {
		id:			11,
		title:			"An opportunity to build a stadium has appeared. What should we do?",
		end_game:		0,
		description:		"Bread and circus they said.",
		condition:		[0, 0, 0, 0],
		timer:			3,
		image:			"img/11.png",
		options:		[
		{
			caption:	"Build a small park instead.",
			effect:		[0, -200, 0, 0],
			success:	"A small park was built. Little ducks have a new place to live."
		}, {
			caption:	"Build a soccer stadium.",
			effect:		[0, -20000, -0.05, 0.05],
			success:	"A soccer stadium was built. Some trees had to go. Oh, well..."
		}, {
			caption:	"Let's make the biggest, most enormous big stadium ever.",
			effect:		[0, -800000, -0.15, 0.20],
			success:	"Wow... It's big. So big that two species went extinct in the process of building it. It's like a planetary stadium. We can have 10 games at the same time... Crazy."
		}]
	}, {
		id:			12,
		title:			"An opportunity to build a financial center has appeared. What should we do?",
		end_game:		0,
		description:		"Love the smell of green.",
		condition:		[0, 0, 0, 0],
		timer:			3,
		image:			"img/12.png",
		options:		[
		{
			caption:	"Let's build it.",
			effect:		[0, 20000, 0, -0.05],
			success:	"A financial center has been built. Lot's of moneyz to be made."
		}, {
			caption:	"We're gonna build it and we're gonna help big companies gat bigger.",
			effect:		[0, 2000000, -0.0725, -0.05],
			success:	"Oh yeah... Make it rain baby!"
		}, {
			caption:	"Dude, no. Let's make a small pond for little duckies.",
			effect:		[0, -8000, 0.05, 0.10],
			success:	""
		}]
	}, {
		id:			13,
		title:			"Habitability is too low! People are dieing.",
		end_game:		0,
		description:		"Our planet is becoming too unfit for life!",
		condition:		[0, 0, -0.20, 0],
		timer:			1,
		image:			"img/13.png",
		options:		[
		{
			caption:	"There is nothing we can do.",
			effect:		[-10000000, -100, 0.005, -0.05],
			success:	"People are dieing... Is this the end?"
		}, {
			caption:	"We have to reverse this!",
			effect:		[-10000000, -10000000, 0.05, -0.025],
			success:	"This is expensive...!"
		}]
	}, {
		id:			14,
		title:			"Our banks are running low on funds... What should we do?",
		end_game:		0,
		description:		"I need Iphones!",
		condition:		[0, -10000, 0, 0],
		timer:			3,
		image:			"img/14.png",
		options:		[
		{
			caption:	"Let's call the aliens and sell them some humans.",
			effect:		[-1000, 200000, 0.05, -0.05],
			success:	"I can't believe we've come this low."
		}, {
			caption:	"Let's print moneyz! Hell yeah baby!",
			effect:		[0, 2000, 0, -0.05],
			success:	"Oh yeah... Make it rain baby!"
		}, {
			caption:	"There is nothing we can do...",
			effect:		[0, 0, 0, -0.1],
			success:	"What will become of us?"
		}]
	}, {
		id:			15,
		title:			"Our population is low!",
		end_game:		0,
		description:		"Soon we will become extinct! We should do something about it right?",
		condition:		[-1000000000, 0, 0, 0],
		timer:			2,
		image:			"img/15.png",
		options:		[
		{
			caption:	"Let's create replication centers.",
			effect:		[10000000, -200000, -0.025, -0.025],
			success:	"Now I see 10 Joes. Too many Joes..."
		}, {
			caption:	"Let's pay people to breed and make more babys!",
			effect:		[5000000, -20000, -0.25, 0.0725],
			success:	"They loved it!"
		}, {
			caption:	"There is nothing we can do...",
			effect:		[0, 0, 0, -0.1],
			success:	"Will we become extinct?"
		}]
	}, {
		id:			16,
		title:			"People are unhappy!",
		end_game:		0,
		description:		"People don't like living here anymore. They loath being alive.",
		condition:		[0, 0, 0, -0.1],
		timer:			2,
		image:			"img/16.png",
		options:		[
		{
			caption:	"Let's throw a huge party!",
			effect:		[-100, -200000, -0.025, 0.0725],
			success:	"Hell yeah, bro. That was liiiiiit!"
		}, {
			caption:	"Let's pray for better times.",
			effect:		[-1000, 0, 0.25, 0.025],
			success:	"For some it works, for others it doesn't."
		}, {
			caption:	"There is nothing we can do...",
			effect:		[-1000000, 0, 0.0725, -0.1],
			success:	"People don't want to live anymore..."
		}]
	}, {
		id:			17,
		title:			"People love living here! This is a green haven.",
		end_game:		1,
		description:		"You have done it! You've made our planet into a green haven. People love it here.",
		condition:		[0, 0, 0.95, 0.50],
		timer:			0,
		image:			"img/17.png",
		options:		[
		{
			caption:	"This is it! I never though we could do this. Yet, here we are.",
			effect:		[0, 0, 0, 0],
			success:	"The End"

		}]
	}, {
		id:			18,
		title:			"People are so happy they cry of joy!",
		end_game:		1,
		description:		"We are the home of the happiest people in the galaxy. You've done it! We love every single second of life we have.",
		condition:		[0, 0, 0.50, 0.99],
		timer:			0,
		image:			"img/18.png",
		options:		[
		{
			caption:	"Everytime I breath I feel glad to be alive. Everytime I look to the sky I understand why we're here.",
			effect:		[0, 0, 0, 0],
			success:	"The End"

		}]
	}, {
		id:			19,
		title:			"Aliens are coming!",
		end_game:		1,
		description:		"We have been too happy for too long. Aliens have noticed. They envy our happiness and how green our beatiful planet is. They are taking it over for them!",
		condition:		[0, 0, 0.80, 0.80],
		timer:			0,
		image:			"img/19.png",
		options:		[
		{
			caption:	"There is nothing we can do. Their technology is too advanced. This is the last breath of our species. This is no longer our planet.",
			effect:		[0, 0, 0, 0],
			success:	"The End"

		}]
	}
];
