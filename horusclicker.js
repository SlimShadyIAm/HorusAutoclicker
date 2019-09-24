// this border shows that the extension is active.
document.body.style.border = "5px solid red";

function checkForCards() {
	// select all card elements on the page
	var cards = document.getElementsByClassName("card");

	// loop through the cards to see if we can find list for today
	for (i = 0; i < cards.length; i++) {
		var cardTitle = cards[i].children[0].children[0].children[0].title;
		if (cardTitle.includes("Today")) {
			var joinQueueButton =
				cards[i].children[0].children[0].children[2].children[0];
			if (joinQueueButton.title == "Join queue") {
				// are we already in the queue?
				joinQueueButton.click(); // no, so join the queue :)
			}
		}
	}
}

// run the check for new queues every 10 milliseconds
setInterval(() => {
	checkForCards();
}, 10);
