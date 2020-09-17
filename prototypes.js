// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   prototypes.js                                      :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: fde-capu <fde-capu@student.42sp.org.br>    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/09/15 19:11:32 by fde-capu          #+#    #+#             //
//   Updated: 2020/09/16 23:59:26 by fde-capu         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

Array.prototype.byId = function (id)
{
	if (typeof i == 'undefined')
		i = 0;
	if (this[i].id == id)
		return (this[i]);
	i++;
	if (!this[i])
	{
		console.log("Array of objects, object.id '" + id + "' not found.");
		return (0);
	}
	return (this.byId(id));
}

Number.prototype.ran = function (q)
{
  if (typeof q == "undefined") q = 0.5;
  return getran(this.valueOf() - (this.valueOf() * q), (this.valueOf() * q) + this.valueOf());
}

Number.prototype.limits = function (min, max)
{
	return this < min ? min : this > max ? max : this;
}

Number.prototype.int = function ()
{
	return this.valueOf() | 0;
}

String.prototype.tag = function (t)
{
	return "<" + t + ">" + this + "</" + t + ">";
}
