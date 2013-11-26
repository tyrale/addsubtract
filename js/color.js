$('.color')
    .delay(10)
    .queue(function(){
      $(this).css({"transition": "background-color 10s"});
        $(this).dequeue();
    });
$('.shadow')
    .delay(10)
    .queue(function(){
      $(this).css({"transition": "text-shadow 10s , color 10s"});
        $(this).dequeue();
    });

$obj = $('.color');
$obj2 = $('.shadow');

var setHue = Math.round( Math.random() * 360 );
var setSat = Math.round( Math.random() * 70 + 5);
var setLight = Math.round( Math.random() * 60 + 5);

var newColor = "hsl(" + setHue + ", " + setSat + "%, " + setLight + "%)";
var shadowColor = "hsl(" + setHue + ", " + setSat + "%, " + (setLight - 10)+ "%)";

$obj.css({ "background-color": newColor });
$obj2.css({ "color": shadowColor });
  //console.log(newColor);

setInterval( function () {
  var setHue = Math.round( Math.random() * 360 );
  var setSat = Math.round( Math.random() * 70 + 5);
  var setLight = Math.round( Math.random() * 60 + 5);

  var newColor = "hsl(" + setHue + ", " + setSat + "%, " + setLight + "%)";
  var shadowColor = "hsl(" + setHue + ", " + setSat + "%, " + (setLight - 10)+ "%)";
  $obj.css({ "background-color": newColor });
  $obj2.css({ "color": shadowColor });
  //console.log(newColor);
}, 8000);