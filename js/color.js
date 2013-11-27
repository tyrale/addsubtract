$('.color')
    .delay(10)
    .queue(function(){
      $(this).css({"transition": "background-color 30s"});
        $(this).dequeue();
    });
$('.font-color')
    .delay(10)
    .queue(function(){
      $(this).css({"transition": "color 30s"});
        $(this).dequeue();
    });
$('.shadow')
    .delay(10)
    .queue(function(){
      $(this).css({"transition": "text-shadow 30s , color 30s"});
        $(this).dequeue();
    });

$obj = $('.color');
$obj1 = $('.font-color');
$obj2 = $('.shadow');

var setHue = Math.round( Math.random() * 360 );
var setSat = Math.round( Math.random() * 70 + 5);
var setLight = Math.round( Math.random() * 20 + 20);

var newColor = "hsl(" + setHue + ", " + setSat + "%, " + setLight + "%)";
var shadowColor = "hsl(" + setHue + ", " + setSat + "%, " + (setLight - 10)+ "%)";

$obj.css({ "background-color": newColor });
$obj1.css({ "color": newColor });
$obj2.css({ "color": shadowColor });
  //console.log(newColor);

setInterval( function () {
  var setHue = Math.round( Math.random() * 360 );
  var setSat = Math.round( Math.random() * 70 + 5);
  var setLight = Math.round( Math.random() * 60 + 5);

  var newColor = "hsl(" + setHue + ", " + setSat + "%, " + setLight + "%)";
  var shadowColor = "hsl(" + setHue + ", " + setSat + "%, " + (setLight - 10)+ "%)";
  $obj.css({ "background-color": newColor });
  $obj1.css({ "color": newColor });
  $obj2.css({ "color": shadowColor });
  //console.log(newColor);
}, 8000);