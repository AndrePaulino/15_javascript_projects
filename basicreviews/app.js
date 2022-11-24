// Local reviews data
const reviews = [
	{
		id: 1,
		name: "susan smith",
		job: "web developer",
		img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: "anna johnson",
		job: "web designer",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
		text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},

	{
		id: 3,
		name: "peter jones",
		job: "intern",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
		text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 4,
		name: "Clark Mambe",
		job: "the boss",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
	{
		id: 5,
		name: "Clara Salves",
		job: "CFO",
		img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=500&q=80",
		text: "Gentrify food truck before they sold out viral hot chicken pariatur tilde retro cupidatat microdosing mumblecore man braid aesthetic bespoke dolore. Bicycle rights hella vinyl, plaid venmo twee XOXO viral cred",
	},
	{
		id: 6,
		name: "Basbaum Monet",
		job: "Painter",
		img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?",
	},
	{
		id: 7,
		name: "Yar Tandam",
		job: "Sailer",
		img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		text: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
	},
];
// Get elements.
const author = document.getElementById("author");
const job = document.getElementById("job");
const personImage = document.getElementById("person-img");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Starting review.
let currentReviewIdx = 0;

// Load initial review.
window.addEventListener("DOMContentLoaded", () => {
	setReview(currentReviewIdx);
});

function setReview(reviewIdx) {
	const currentReview = reviews[reviewIdx];

	personImage.src = currentReview.img;
	author.textContent = currentReview.name;
	job.textContent = currentReview.job;
	info.textContent = currentReview.text;
}

// Next review.
nextBtn.addEventListener("click", () => {
	currentReviewIdx = (currentReviewIdx + 1) % reviews.length;
	setReview(currentReviewIdx);
});

// Prev review.
prevBtn.addEventListener("click", () => {
	currentReviewIdx = (currentReviewIdx + reviews.length - 1) % reviews.length;
	setReview(currentReviewIdx);
});

// Random review.
randomBtn.addEventListener("click", () => {
	let newIdx;
	do {
		newIdx = Math.floor(Math.random() * reviews.length);
	} while (newIdx === currentReviewIdx);

	setReview(newIdx);
});
