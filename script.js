  var quotes=[
	  	{quote : "Frankly, my dear, I don't give a damn.", author : 'Rhett Butler'},
	    {quote : "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.", author : 'John Steinbeck'},
	    {quote : "After all, tomorrow is another day!", author : 'Scarlett O\'Hara'},
	    {quote : "It belongs to the imperfection of everything human that man can only attain his desire by passing through its opposite.", author : 'Søren Kierkegaard'},
	    {quote : "Even a fool could see that one didn't need a war, nuclear or otherwise, to destroy oneself; the rising cost of weaponry could do that quite nicely.", author : 'Stanislaw Lem'},
	    {quote : "Knowing others is intelligence;knowing yourself is true wisdom.Mastering others is strength; mastering yourself is true power.", author : 'Lao Tse'},
	    {quote : "Thinkers are not a welcome addition to most social situations.", author : 'Terrence McKenna'},
	    {quote : "Seventy percent of success in life is showing up.", author : 'Woody Allen'},
	    {quote : "There is only one corner of the universe you can be certain of improving, and that's your own self.", author : 'Aldous Huxley'},
	    {quote : "It disturbs me no more to find men base, unjust, or selfish than to see apes mischievous, wolves savage, or the vulture ravenous.", author : 'Jean-Paul Sartre'},
	    {quote : "Most of the images of reality on which we base our actions are really based on vicarious experience.", author : 'Albert Bandura'},
	    {quote : "A cynical, mercenary, demagogic press will in time produce a people as base as itself.", author : 'Joseph Pulitzer'},
	    {quote : "I despise formal restaurants. I find all of that formality to be very base and vile. I would much rather eat potato chips on the sidewalk.", author : 'Werner Herzog'},
	    {quote : "My reality needs imagination like a bulb needs a socket. My imagination needs reality like a blind man needs a cane.", author : 'Tom Waits'},
	    {quote : "I fear my enthusiasm flags when real work is demanded of me.", author : 'H.P. Lovecraft'},
	    {quote : "In the end, everything is a gag.", author : 'Charlie Chaplin'},
	    {quote : "God gave us the gift of life; it is up to us to give ourselves the gift of living well.", author : 'Voltaire'},
	    {quote : "Cyberspace. A consensual hallucination experienced daily by billions of legitimate operators, in every nation.", author: "William Gibson"},
	    {quote : "You cannot find peace by avoiding life.", author: 'Virginia Woolf'},
	    {quote : "Life did not intend to make us perfect. Whoever is perfect belongs in a museum.", author: 'Erich Maria Remarque'},
	    {quote : "Creativity requires the courage to let go of certainties.", author: 'Erich Fromm'},
	    {quote : "The West in general should stand up more for its own values. It is not always worthwhile to compromise.", author: 'Imre Kertész'},
	    {quote : "You should never ask anyone for anything. Never- and especially from those who are more powerful than yourself.", author: 'Michaił Bułhakow'},
	    {quote : "Now there is apparently a causal link between heroin addiction and vegetarianism.", author: 'Irvine Welsh'}
  ];
   
  document.querySelector("#btn").addEventListener("click", function(){
    var randomQuote = Math.floor(Math.random() * quotes.length);
    var quot = document.querySelector(".quote");
    var auth = document.querySelector(".author");
    var q = quotes[randomQuote].quote;
    var a = quotes[randomQuote].author;
   	quot.innerHTML = q;
   	auth.innerHTML = a;

    document.getElementById('tweet-quote').setAttribute('href', 'https://twitter.com/intent/tweet?=hashtags=quote&text=' + encodeURIComponent('"' + quotes[randomQuote].quote + '" ' + quotes[randomQuote].author));

  }, false);
