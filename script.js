const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".second-hand");

function initialLocalTime()
{
	const date = new Date();

	const seconds = date.getSeconds();
	const secondsdegree = ((seconds/60)*360) + 90;
	secHand.style.transform = `rotateZ(${secondsdegree}deg)`;
	
	const minutes = date.getMinutes();
	const minutesdegree = ((minutes/60)*360)+((seconds/60)*6) + 90;
	minHand.style.transform = `rotateZ(${minutesdegree}deg)`;

	const hours = date.getHours();
	const hoursdegree = (hours/12)*360 + ((minutes/60)*30) + 90;
	hourHand.style.transform = `rotateZ(${hoursdegree}deg)`;

}

setInterval(initialLocalTime, 1000);


initialLocalTime();