var makingSense = (function() {

    var writeLines, valueDivisibleBy;

    writeLines = function() {

        for(let x=1; x<=100; x++) {
            if(valueDivisibleBy(x, 5) && valueDivisibleBy(x, 3))
                document.getElementById("making_sense").innerHTML += "Making Sense";
            else if(valueDivisibleBy(x, 5))
                document.getElementById("making_sense").innerHTML += "Making";
            else if(valueDivisibleBy(x, 3))
                document.getElementById("making_sense").innerHTML += "Sense";
            else
                document.getElementById("making_sense").innerHTML += x;

            document.getElementById("making_sense").innerHTML += "<br />";
        }
    };

    valueDivisibleBy = function(value,  divisibleBy) {
        return (value % divisibleBy) == 0;
    };

    return {
        writeLines: writeLines
    };
}());
