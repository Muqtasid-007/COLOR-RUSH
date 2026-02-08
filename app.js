var parent = document.getElementById("parent");
var match_box = document.getElementById("match_box");
var score_box = document.getElementById("score");
var score = 0;
score_box.innerText = score;

//COLORS
var colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "brown",
  "grey",
  "black",
  "white",
  "aqua",
  "indigo",
  "violet",
  "lime",
];

//For UI Change Color
function update_UI_colors() {
  //Copy Color
  var temporary_colors = [];
  for (var i = 0; i < colors.length; i++) {
    temporary_colors.push(colors[i]);
  }

  var all_boxes = document.getElementsByClassName("UI_boxes");
  //Extract same color
  for (var i = 0; i < all_boxes.length; i++) {
    var random_color = Math.floor(Math.random() * temporary_colors.length);
    all_boxes[i].style.backgroundColor = temporary_colors[random_color];
    temporary_colors.splice(random_color, 1);
  }
}

//Generate Random Colors
function random_colors() {
  var random_color = Math.floor(Math.random() * colors.length);
  return colors[random_color];
}

//THE BOX THAT WILL BE GIVEN
match_box.style.backgroundColor = random_colors();

//WHEN YOU CLICK THE BOX , IT CHANGES COLOR
function click_handler(event) {
  var clicked_color = event.target;

  //Condition For Scoring
  if (clicked_color.style.backgroundColor === match_box.style.backgroundColor) {
    score++;
    score_box.innerText = score;
  } else {
    score--;
    score_box.innerText = score;
  }

  match_box.style.backgroundColor = random_colors();
  update_UI_colors();
}

//LOOP FOR CREATE BOXES
for (var i = 1; i < 9; i++) {
  var div_box = document.createElement("div");
  div_box.className = "UI_boxes";

  // COLOR IN BOXES
  div_box.style.backgroundColor = random_colors();

  // EVENT LISTENER
  div_box.addEventListener("click", click_handler);
  parent.appendChild(div_box);
}
