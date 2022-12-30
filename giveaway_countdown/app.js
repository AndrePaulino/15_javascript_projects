const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const deadlineContainer = document.querySelector(".deadline");
const giveawayHeading = document.querySelector(".giveaway");
const deadlineBoxes = document.querySelectorAll(".deadline-format h4");

function getFutureDate() {
	const tempDate = new Date();
	return new Date(
		tempDate.getFullYear(),
		tempDate.getMonth(),
		tempDate.getDate() + 14,
		13,
		30
	);
}
const futureDate = getFutureDate();

giveawayHeading.textContent = `Giveaway ends on ${
	weekdays[futureDate.getDay()]
}, ${futureDate.getDate()} ${
	months[futureDate.getMonth()]
} ${futureDate.getFullYear()} ${futureDate.getHours()}\:${futureDate.getMinutes()}.`;

function getRemaining() {
	const futureDateMs = futureDate.getTime();
	const currentDateMs = new Date().getTime();
	const t = futureDateMs - currentDateMs;

	const timeInMs = {
		day: 24 * 60 * 60 * 1000,
		hour: 60 * 60 * 1000,
		minute: 60 * 1000,
		second: 1000,
	};

	const timeValues = [
		Math.floor(t / timeInMs.day),
		Math.floor((t % timeInMs.day) / timeInMs.hour),
		Math.floor((t % timeInMs.hour) / timeInMs.minute),
		Math.floor((t % timeInMs.minute) / timeInMs.second),
	];

	function format(item) {
		if (item >= 10) return item;
		return (item = `0${item}`);
	}

	deadlineBoxes.forEach((box, index) => {
		box.innerHTML = format(timeValues[index]);
	});

	if (t < 0) {
		clearInterval(countdown);
		deadlineContainer.innerHTML = `<h4 class="expired">This giveaway has expired.</h4>`;
	}
}

let countdown = setInterval(getRemaining, 1000);
// Function call after the setInterval so the function has access to the variable to use on clearInterval
getRemaining();
