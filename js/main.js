var makingSense = (function() {

    var writeLines, valueDivisibleBy;

    writeLines = function(firstWord, secondWord) {

        var div = document.getElementById("making_sense");

        for(let x=1; x<=100; x++) {
            if(valueDivisibleBy(x, 5) && valueDivisibleBy(x, 3))
                div.innerHTML += firstWord + " " + secondWord;
            else if(valueDivisibleBy(x, 5))
                div.innerHTML += firstWord;
            else if(valueDivisibleBy(x, 3))
                div.innerHTML += secondWord;
            else
                div.innerHTML += x;

            div.innerHTML += "<br />";
        }
    };

    valueDivisibleBy = function(value, divisibleBy) {
        return (value % divisibleBy) == 0;
    };

    return {
        writeLines: writeLines
    };
}());
