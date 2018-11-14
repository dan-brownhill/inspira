describe("Main", function() {

  beforeEach(function() {
    //create div expected in HTML
    var div = document.createElement('div');
    div.setAttribute('id', 'making_sense');
    document.body.appendChild(div);
  });

  afterEach(function() {
    //remove HTML after the tests have run
    var element = document.getElementById("making_sense");
    element.parentNode.removeChild(element);
  });


  it("should populate div with expected data", function() {
    makingSense.writeLines();

    var expected_data = "1<br>2<br>Sense<br>4<br>Making<br>Sense<br>7<br>8<br>Sense<br>Making<br>11<br>Sense<br>13<br>14<br>Making Sense<br>16<br>17<br>Sense<br>19<br>Making<br>Sense<br>22<br>23<br>Sense<br>Making<br>26<br>Sense<br>28<br>29<br>Making Sense<br>31<br>32<br>Sense<br>34<br>Making<br>Sense<br>37<br>38<br>Sense<br>Making<br>41<br>Sense<br>43<br>44<br>Making Sense<br>46<br>47<br>Sense<br>49<br>Making<br>Sense<br>52<br>53<br>Sense<br>Making<br>56<br>Sense<br>58<br>59<br>Making Sense<br>61<br>62<br>Sense<br>64<br>Making<br>Sense<br>67<br>68<br>Sense<br>Making<br>71<br>Sense<br>73<br>74<br>Making Sense<br>76<br>77<br>Sense<br>79<br>Making<br>Sense<br>82<br>83<br>Sense<br>Making<br>86<br>Sense<br>88<br>89<br>Making Sense<br>91<br>92<br>Sense<br>94<br>Making<br>Sense<br>97<br>98<br>Sense<br>Making<br>";

    expect(document.getElementById("making_sense").innerHTML).toEqual(expected_data);
  });
});
