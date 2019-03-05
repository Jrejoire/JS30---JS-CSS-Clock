const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".second-hand");

function initialLocalTime()
{
	let date = new Date;
	let seconds = date.getSeconds();
	let minutes = date.getMinutes();
	let hours =	date.getHours();

	let hands = [
		{ 
			hand: 'hour',
			angle: (hours*30) +(minutes/2)
		},
		{
			hand: 'min',
			angle:(minutes*6),
		},
		{
			hand:'sec',
			angle:(seconds*6),
		}
	];
	for (let i = 0; i< hands.length; i ++)
	{	
		let elements = hands[i].hand + 'Hand';	

		for (let j = 0; j<elements.length; j++)
		{
			elements[j].style.webkitTransform ='rotateZ(' + hands[i].angle + 'deg)';
			elements[j].style.transform = 'rotateZ(' + hands[i].angle + 'deg)';
			if (hands[i].hand === 'min')
			{
				elements[i].parentNode.setAttribute('data-second-angle',hands[i+1].angle);
			}
		}
	}

}
