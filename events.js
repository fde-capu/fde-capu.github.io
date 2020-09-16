// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   events.js                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: fde-capu <fde-capu@student.42sp.org.br>    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/09/16 00:01:23 by fde-capu          #+#    #+#             //
//   Updated: 2020/09/16 00:01:46 by fde-capu         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var events = [
	{
		id:				1,
		title:			"A meteor is going to crash on Earth!",
		description:	"Scientists have just noticed a huge fire ball coming directly towards a kittens nursery. It is a danger to the life of those kittens and to the life of the people who live next to it!",
		condition:		[0, 0, 0, 0],
		image:			"img/picture.jpg",
		timer:			3,
		options:		[
		{
			caption:	"Let those frenchies die!",
			effect:		[-200, -10, 0.05, -0.1],
			success:	"Oh, no! The baguettes! Not the baguettes! Who will be next?",
		}, {
			caption:	"Shoot those alien bastards! No baguettes will be harmed on my watch!",
			effect:		[0, -10, 0, 0.15],
			success:	"My croissant! The aliens have been deafeated! But the tower still needs repairs..."
		}, {
			caption:    "Let us negotiate with those aliens. Talking is always best. [HIDDEN]",
			effect:		[-10, 1000, 0.1, 0.05],
			success:	"We sold baguettes for Altarian Dollars. Our deal was a secret, no harm done."
		}]
	}
];
