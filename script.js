document.addEventListener("DOMContentLoaded", function() {
    var chatgpt = new ChatGPT("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");

    function randomBackground() {
        return "https://picsum.photos/800/600?" + Math.random();
    }

    function randomQuote() {
        var options = {
            query: "Generate a random quote",
            engine: "davinci",
            temperature: 0.7,
            max_tokens: 50,
            stop: ["\n"]
        };

        chatgpt.complete(options, function(err, res) {
            if (err) {
                console.error(err);
                document.getElementById("quote").innerHTML = "An error occurred while generating the quote.";
                document.getElementById("author").innerHTML = "";
            } else {
                console.log(res);
                document.getElementById("quote").innerHTML = '"' + res.choices[0].text + '"';
                document.getElementById("author").innerHTML = "- ChatGPT";
            }
        });
    }

    function generate() {
        document.getElementById("container").style.backgroundImage = "url(" + randomBackground() + ")";
        randomQuote();
    }

    document.getElementById("button").addEventListener("click", generate);
});
