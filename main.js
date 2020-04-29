console.log("sucaaaaaaaaaaaaaaa")


function timeFunction() {
            setTimeout(function getQuote() {

		var quotes = ["To be evenminded is the greatest virtue.", "Just keep in mind: the more we value things outside our control, the less control we have.", "The tranquility that comes when you stop caring what they say. Or think, or do. Only what you do.", "The whole future lies in uncertainty: live immediately.", "It does not matter what you bear, but how you bear it.", "A gem cannot be polished without friction, nor a man perfected without trials.", "To be calm is the highest achievement of the self."];
		var authors = ["- Heraclitus ", "- Epictetus ", "- Marcus Aurelius", "- Seneca ", "- Seneca ", "- Seneca ", "- Zen proverb"];

		var randomN = Math.floor(Math.random() * quotes.length);

		var randomQuote = quotes[randomN];
		var randomAuth = authors[randomN];

		$("#text").text('"' + randomQuote + '"');
		$("#author").text(randomAuth);
		
	}, 1500);
        };



$(document).ready(function() {

	function getQuote() {

		var quotes = ["To be evenminded is the greatest virtue.", "Just keep in mind: the more we value things outside our control, the less control we have.", "The tranquility that comes when you stop caring what they say. Or think, or do. Only what you do.", "The whole future lies in uncertainty: live immediately.", "It does not matter what you bear, but how you bear it.", "A gem cannot be polished without friction, nor a man perfected without trials.", "To be calm is the highest achievement of the self."];
		var authors = ["- Heraclitus ", "- Epictetus ", "- Marcus Aurelius", "- Seneca ", "- Seneca ", "- Seneca ", "- Zen proverb"];

		var randomN = Math.floor(Math.random() * quotes.length);

		var randomQuote = quotes[randomN];
		var randomAuth = authors[randomN];

		$("#text").text('"' + randomQuote + '"');
		$("#author").text(randomAuth);
		
	}

	function fadingIn() {
		$("#text").fadeIn(1500).toggleClass('hidden');
		$("#author").fadeIn(1500);						
	}	


	function fadingOut() {
		$("#text").fadeOut(1500).toggleClass('hidden');
		$("#author").fadeOut(1500);						
	}

	fadingIn();
	getQuote();
	
	$(".btn").on("click", function() {
		fadingOut();
		fadingIn();
	});

});

